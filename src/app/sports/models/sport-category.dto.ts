import { SportTypeDTO } from './SportType.dto';

export class SportCategoryDTO {
	id: string;
	name: string;
	type: SportTypeDTO;
	image: string;
	description: string;
}
