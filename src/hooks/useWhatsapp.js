export const openWhatsapp = (service = "Home Service") => {
       const message = `Hi Bzzrr,I want to book ${service}.`;
       const url = `https://wa.me//919108857313?text=${encodeURIComponent(message)}`;
       window.open(url, "_blank");
};