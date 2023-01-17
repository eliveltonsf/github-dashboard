/* eslint-disable @typescript-eslint/ban-ts-comment */
import { langColors } from './config';

interface IgetLangsFrom {
  repoFilter: {
    id: number;
    name: string;
    description: string;
    html_url: string;
    language: string;
  }[];
}

export const getLangsFrom = ({ repoFilter }: IgetLangsFrom) => {
  const stats = repoFilter
    .map((repository) => repository.language)
    .reduce(
      (data, language) => ({
        ...data,
        //@ts-ignore
        [language]: (data[language] || 0) + 1,
      }),
      []
    );
  //@ts-ignore
  delete stats['null'];

  const newStats = Object.keys(stats)
    .map((language) => ({
      name: language,
      //@ts-ignore
      count: stats[language],
      //@ts-ignore
      color: langColors[language.toLowerCase()],
    }))
    .sort((a, b) => b.count - a.count);

  return newStats;
};
