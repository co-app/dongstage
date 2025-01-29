import { serializeAWS } from "./_aws";
import { serializeGcp } from "./_gcp";
import { serializeVercel } from "./_vercel";

export interface SerializedData {
  vendor: "aws" | "gcp" | "vercel";
  category: string;
  arn: string;
  title: string;
  desc: string;
  git: string;
  domain: string;
  state: "running" | "stopped" | "failed";
  team: string;
  isAdmin: boolean;
}

export interface DeserializedData extends SerializedData {
  vendorImoji: string;
  categoryImoji: string;
}

const fnLiteral: Record<
  SerializedData["vendor"],
  (data: SerializedData) => DeserializedData
> = {
  aws: serializeAWS,
  gcp: serializeGcp,
  vercel: serializeVercel,
};

export const deserialize = (data: SerializedData) =>
  fnLiteral[data.vendor](data);
