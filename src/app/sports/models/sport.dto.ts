import { AchievementDTO } from './achievement.dto';

export class SportDTO {
	id: string;
	categoryId: number;
	history: string;
	name: string;
	achievements: AchievementDTO[];
}
