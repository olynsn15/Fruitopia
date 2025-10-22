const API_BASE = "https://68f77e50f7fb897c66160eaa.mockapi.io";
const BASE = `${API_BASE}/fruits`;

export async function getFruits(start = 1, limit = 100) {
  const page = start;
  const url = `${BASE}?page=${page}&limit=${limit}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch fruits: ${res.status}`);
  }
  const data = await res.json();
  return data;
}

export async function getFruitByID(id) {
  const url = `${BASE}/${id}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch fruit with ID ${id}: ${res.status}`);
  }
  const data = await res.json();
  return data;
}

export function resolveImageLink(image_link) {
  if (!image_link) return null;
  if (image_link.startsWith("http")) return image_link;
  return `${API_BASE}/${image_link}`;
}
