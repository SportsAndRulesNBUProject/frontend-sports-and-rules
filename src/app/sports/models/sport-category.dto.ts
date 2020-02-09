import { SportTypeDTO } from './SportType.dto';

export class SportCategoryDTO {
	id: string;
	name: string;
	type: SportTypeDTO;
	imgUrl: string;
	description: string;
}
