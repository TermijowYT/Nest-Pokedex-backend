import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {

    // IsInt, Ispositive, min 1
    @IsInt()
    @IsPositive()
    @Min(1)
    no: number;

    //IsString, Minlength
    @IsString()
    @MinLength(1)
    name: string;
}
