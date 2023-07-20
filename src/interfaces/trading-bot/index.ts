import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface TradingBotInterface {
  id?: string;
  name: string;
  settings: string;
  performance: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface TradingBotGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  settings?: string;
  performance?: string;
  organization_id?: string;
}
