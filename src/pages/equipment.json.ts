import type { APIContext } from "astro";
import type { EquipmentEntry } from "../lib/equipment";
import amplifiers from "../data/equipment/amplifiers.json";
import displays from "../data/equipment/displays.json";
import schema from "../data/equipment/schema.json";

const equipment: EquipmentEntry[] = [...amplifiers, ...displays];

export async function GET(context: APIContext) {
  const site = context.site ?? new URL("https://sane-av.github.io");

  const entries = equipment.map((entry) => ({
    ...entry,
    url: new URL(`/equipment/?id=${entry.id}`, site).toString(),
  }));

  return new Response(JSON.stringify({ schema, equipment: entries }, null, 2), {
    headers: { "Content-Type": "application/json" },
  });
}
