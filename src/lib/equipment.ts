export interface EquipmentEntry {
  id: string;
  manufacturer: string;
  model: string;
  category: string;
  specs: Record<string, string>;
  tags: string[];
  notes?: string;
}
