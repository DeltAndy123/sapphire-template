import { SapphireClient } from '@sapphire/framework';
import 'module-alias/register';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { GatewayIntentBits } from 'discord.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI!)

const client = new SapphireClient({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
  ]
});

client.login(process.env.TOKEN);