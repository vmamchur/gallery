import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ImageDocument = Image & Document;

@Schema()
export class Image {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  filename: string;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
