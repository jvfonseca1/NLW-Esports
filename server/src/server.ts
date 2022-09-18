import express from 'express';
import { PrismaClient} from '@prisma/client'
import { convertHourToMinutes } from './utils/convert-hour-to-minutes';
import { convertMinutesToHours } from './utils/convert-minutes-to-hours';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

// GET games
app.get('/games', async (req,res) => {

    // Lista Games + Num. Ads
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true,
                }
            }
        }
    })

    return res.json([games]);
})

// POST ads
app.post('/games/:id/ads', async (req,res) => {
    const gameId = req.params.id;
    const body = req.body;

    // Definição de dados a partir do body
    const ad = await prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            weekDays: body.weekDays.join(','),
            hourStart: convertHourToMinutes(body.hourStart),
            hourEnd: convertHourToMinutes(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel,
        }
    })

    return res.status(201).json([ad]);
})

// GET ads
app.get('/games/:id/ads', async (req, res) => {
    const gameId = req.params.id;

    // Lista Ads por GameId
    const ads = await prisma.ad.findMany({

        // Seleciona apenas dados publicos
        select: {
            id: true,
            name: true,
            weekDays: true,
            hourStart: true,
            hourEnd: true,
            useVoiceChannel: true,
        },

        // Filtro GameId
        where: {
            gameId,
        },

        // Ordena por data mais recente
        orderBy: {
            createdAt: 'desc'
        }
    })

    return res.json(ads.map(ads => {

        // Formatação WeekDays
        return {
            ...ads,
            weekDays: ads.weekDays.split(','),
            hourStart: convertMinutesToHours(ads.hourStart),
        }
    }));
})

// GET discord
app.get('/ads/:id/discord', async (req, res) => {
    const adID = req.params.id;

    // Lista Discord vinculado a um Ad Especifico
    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true,
        },

        where:{
            id: adID,
        }
    })
    return res.json({
        discord: ad.discord,
    });
})

app.listen(8080);