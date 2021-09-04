import { ApiProperty } from "@nestjs/swagger";
import { IsAlpha, IsUppercase, Length } from "class-validator";

export class CodeInput {
  @IsAlpha()
  @Length(6, 6)
  @IsUppercase()
  @ApiProperty()
  code: string;
}
