export interface SystemRequirements {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}

export interface Game {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  cover: string;
  genre: string;
  releaseDate: string;
  version: string;
  fileSize: string;
  downloadUrl: string;
  minimum: SystemRequirements;
  recommended: SystemRequirements;
}

export const games: Game[] = [
  {
    id: "void-odyssey",
    title: "Void Odyssey",
    description: "Исследуйте бескрайние просторы космоса в этой захватывающей sci-fi приключенческой игре. Управляйте своим кораблём, открывайте новые планеты, торгуйте с инопланетными расами и раскройте тайну исчезнувшей цивилизации на краю галактики. Каждое ваше решение влияет на судьбу целых звёздных систем.",
    shortDescription: "Космическое приключение с открытым миром и нелинейным сюжетом",
    cover: "https://cdn.poehali.dev/projects/538a90a8-dd27-4ae8-a12f-15766b02a24a/files/df6303a2-6b12-4765-89c0-a4a5e77b6a29.jpg",
    genre: "Sci-Fi / Приключение",
    releaseDate: "2026-01-15",
    version: "1.2.0",
    fileSize: "3.2 ГБ",
    downloadUrl: "#",
    minimum: {
      os: "Windows 10 (64-bit)",
      processor: "Intel Core i5-8400 / AMD Ryzen 5 2600",
      memory: "8 ГБ ОЗУ",
      graphics: "NVIDIA GTX 1060 / AMD RX 580",
      storage: "4 ГБ",
    },
    recommended: {
      os: "Windows 11 (64-bit)",
      processor: "Intel Core i7-12700 / AMD Ryzen 7 5800X",
      memory: "16 ГБ ОЗУ",
      graphics: "NVIDIA RTX 3070 / AMD RX 6800 XT",
      storage: "4 ГБ (SSD)",
    },
  },
  {
    id: "ashen-throne",
    title: "Ashen Throne",
    description: "Мрачное средневековое RPG, где вы — последний рыцарь павшего королевства. Пройдите через руины забытых замков, сразитесь с древними чудовищами и верните трон законному наследнику. Глубокая система прокачки, крафтинг и десятки часов геймплея ждут вас.",
    shortDescription: "Тёмное фэнтези RPG с глубокой боевой системой",
    cover: "https://cdn.poehali.dev/projects/538a90a8-dd27-4ae8-a12f-15766b02a24a/files/09e0e321-9065-473b-945b-0d0699062cfd.jpg",
    genre: "RPG / Фэнтези",
    releaseDate: "2025-11-20",
    version: "2.0.1",
    fileSize: "5.8 ГБ",
    downloadUrl: "#",
    minimum: {
      os: "Windows 10 (64-bit)",
      processor: "Intel Core i5-7500 / AMD Ryzen 3 3100",
      memory: "8 ГБ ОЗУ",
      graphics: "NVIDIA GTX 1050 Ti / AMD RX 570",
      storage: "8 ГБ",
    },
    recommended: {
      os: "Windows 11 (64-bit)",
      processor: "Intel Core i7-10700 / AMD Ryzen 5 5600X",
      memory: "16 ГБ ОЗУ",
      graphics: "NVIDIA RTX 2070 / AMD RX 6700 XT",
      storage: "8 ГБ (SSD)",
    },
  },
  {
    id: "neon-drift",
    title: "Neon Drift",
    description: "Погрузитесь в неоновый мир киберпанка, где каждая улица таит опасность. Вы — наёмник в мегаполисе будущего. Выполняйте контракты, модифицируйте своё тело кибернетическими имплантами и найдите путь к свободе в мире, где корпорации контролируют всё.",
    shortDescription: "Киберпанк экшен с элементами стелса и RPG",
    cover: "https://cdn.poehali.dev/projects/538a90a8-dd27-4ae8-a12f-15766b02a24a/files/aa9ee632-f2c8-411c-885a-af98894f7571.jpg",
    genre: "Экшен / Киберпанк",
    releaseDate: "2026-02-01",
    version: "1.0.3",
    fileSize: "4.5 ГБ",
    downloadUrl: "#",
    minimum: {
      os: "Windows 10 (64-bit)",
      processor: "Intel Core i5-9400 / AMD Ryzen 5 3600",
      memory: "8 ГБ ОЗУ",
      graphics: "NVIDIA GTX 1660 / AMD RX 5600 XT",
      storage: "6 ГБ",
    },
    recommended: {
      os: "Windows 11 (64-bit)",
      processor: "Intel Core i9-12900 / AMD Ryzen 9 5900X",
      memory: "32 ГБ ОЗУ",
      graphics: "NVIDIA RTX 4070 / AMD RX 7800 XT",
      storage: "6 ГБ (SSD)",
    },
  },
];

export default games;