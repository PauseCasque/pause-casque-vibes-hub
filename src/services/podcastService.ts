

const API_URL = import.meta.env.VITE_BACKEND_URL;

export async function sendPodcast(): Promise<Episode[]> {
  try {
    const response = await fetch(`${API_URL}/api/podcasts`);
    if (!response.ok) throw new Error("Erreur lors de la récupération des podcasts");
    const data = await response.json();
    return data; // <- très important
  } catch (error) {
    console.error("Erreur lors de la récupération des podcasts :", error);
    return [];
  }
}