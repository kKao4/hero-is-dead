import mongoose from "mongoose";

const newSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
  },
  { timestamps: true }
);

export type NewType = mongoose.InferSchemaType<typeof newSchema> & {
  _id: string;
};

export default mongoose.models.news || mongoose.model("news", newSchema);
