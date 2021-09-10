import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class CreateUserDto {

  /**
   * Primeiro Nome
   * @example Mateus
   */
  @IsString()
  firstName: string;

  /**
   * Segundo Nome
   * @example Tozoni
   */
  @IsString()
  lastName: string;

  /**
   * Raça
   * @example Yorkshire
   */
  @IsString()
  @IsOptional()
  breed?: string;

  /**
   * Foto de Perfil
   */
  @ApiProperty({ type: 'string', format: 'binary' })
  photo?: any

}
