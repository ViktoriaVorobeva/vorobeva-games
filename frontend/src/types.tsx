export interface GAME {
  id: number;
  title: string;
  thumbnail: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
  short_description: string;
  screenshots?: SCREENSHOT[];
  minimum_system_requirements?: SYSTEM;
}

interface SCREENSHOT {
  id: number;
  image: string;
}

interface SYSTEM {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}
