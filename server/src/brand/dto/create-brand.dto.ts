import { IsNumber, IsString } from "class-validator";

export class CreateBrandDto {
    @IsString()
    
    name: string;
}
