const API_URL= import.meta.env.VITE_BACKEND_URL;

export const sendContactForm = async (formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    try {
      const res = await fetch(`${API_URL}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await res.text();
      if (!res.ok) {
        throw new Error(result || "Erreur inconnue");
      }
  
      return result;
    } catch (error: any) {
      throw new Error(error.message || "Erreur lors de l'envoi");
    }
  };