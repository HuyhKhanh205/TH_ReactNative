export function filterByName<T extends { name: string }>(items: T[], keyword: string): T[] {
  const k = keyword.trim().toLowerCase();
  return items.filter((i) => i.name.toLowerCase().includes(k));
}
