const cvUrl = "/public/cv/SOLOMON_MUHYE_CV.pdf";
export const handleDownload = () => {
  const link = document.createElement("a");
  link.href = cvUrl;
  link.download = "Solomon_Muhye_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
