import axios from 'axios';
import queryString from 'query-string';
import { TradingBotInterface, TradingBotGetQueryInterface } from 'interfaces/trading-bot';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTradingBots = async (
  query?: TradingBotGetQueryInterface,
): Promise<PaginatedInterface<TradingBotInterface>> => {
  const response = await axios.get('/api/trading-bots', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createTradingBot = async (tradingBot: TradingBotInterface) => {
  const response = await axios.post('/api/trading-bots', tradingBot);
  return response.data;
};

export const updateTradingBotById = async (id: string, tradingBot: TradingBotInterface) => {
  const response = await axios.put(`/api/trading-bots/${id}`, tradingBot);
  return response.data;
};

export const getTradingBotById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/trading-bots/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTradingBotById = async (id: string) => {
  const response = await axios.delete(`/api/trading-bots/${id}`);
  return response.data;
};
