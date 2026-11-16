/**
 * Ouvre la porte physique via /api/openDoor, avec un toast de suivi.
 */
export const useOpenDoor = () => {
  const pending = ref(false);

  const openDoor = async () => {
    if (pending.value) return;
    pending.value = true;

    const request = $fetch<string | { msg?: string }>("/api/openDoor").then(
      (raw) => {
        const data = typeof raw === "string" ? JSON.parse(raw) : raw;
        if (data?.msg !== "ok") {
          throw new Error("Erreur lors de l'ouverture de la porte");
        }
        return "Porte ouverte";
      }
    );

    try {
      await useNuxtApp().$toast.promise(request, {
        pending: "Ouverture de la porte…",
        success: "Porte ouverte 👌",
        error: "Impossible d'ouvrir la porte 🤯",
      });
    } catch {
      // l'erreur est déjà affichée par le toast
    } finally {
      pending.value = false;
    }
  };

  return { openDoor, pending };
};
