const mapping: Record<string, string> = {
  organizations: 'organization',
  'trading-bots': 'trading_bot',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
