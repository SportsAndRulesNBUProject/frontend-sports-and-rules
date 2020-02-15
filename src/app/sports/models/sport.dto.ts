import { AchievementDTO } from './achievement.dto';

export class SportDTO {
	id: number;
	categoryId: number;
	history: string;
	name: string;
	achievements: AchievementDTO[];
}
