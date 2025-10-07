const API_BASE = "https://api.predic8.de";
const BASE = API_BASE + "/shop/v2";

export async function getFruits(start = 1, limit = 100) {
  const url = `${BASE}/products/?start=${start}&limit=${limit}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status}`);
  }

  const data = await res.json();
  return data;
}

export async function getFruitByID(id) {
  const url = `${BASE}/products/${id}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch product with ID ${id}: ${res.status}`);
  }

  const data = await res.json();
  return data;
}

export function resolveImageLink(image_link) {
  if (!image_link) return null;

  // If link already includes http(s), return it as-is
  if (image_link.startsWith("http")) return image_link;

  // If link starts with // (protocol-relative), prepend https:
  if (image_link.startsWith("//")) return `https:${image_link}`;

  // Otherwise, safely combine base and relative path
  return `${API_BASE}${image_link.startsWith("/") ? "" : "/"}${image_link}`;
}
