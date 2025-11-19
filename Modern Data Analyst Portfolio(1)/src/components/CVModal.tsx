import { motion, AnimatePresence } from "motion/react";
import { X, Download, ExternalLink } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
// import pdf from "../src/public/Amoin_ACQUAYE_Data_analyst_CV.pdf";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  const { t } = useLanguage();

  // Mock CV URL - remplacez cela par l'URL réelle de votre CV
  const cvUrl = "/src/assets/Amoin_ACQUAYE_Data_analyst_CV.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Amoin_Acquaye_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log(link);
    
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-5xl h-[90vh] rounded-3xl overflow-hidden pointer-events-auto"
              style={{
                backgroundColor: "var(--bg-primary)",
                boxShadow: "var(--shadow-xl)",
              }}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between p-6 border-b transition-colors duration-500"
                style={{ borderColor: "var(--border-light)" }}
              >
                <div>
                  <h2 className="transition-colors duration-500" style={{ color: "var(--text-primary)" }}>
                    Curriculum Vitae
                  </h2>
                  <p className="text-sm mt-1 transition-colors duration-500" style={{ color: "var(--text-muted)" }}>
                    Amoin ACQUAYE - Data Analyst & Data Scientist
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {/* Download Button */}
                  <motion.button
                    onClick={handleDownload}
                    className="p-3 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: "var(--interactive-primary)",
                      color: "var(--bg-primary)",
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title={t.hero.downloadCV}
                  >
                    <Download size={20} />
                  </motion.button>

                  {/* Open in new tab Button */}
                  <motion.button
                    onClick={() => window.open(cvUrl, "_blank")}
                    className="p-3 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      color: "var(--text-primary)",
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title="Open in new tab"
                  >
                    <ExternalLink size={20} />
                  </motion.button>

                  {/* Close Button */}
                  <motion.button
                    onClick={onClose}
                    className="p-3 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      color: "var(--text-primary)",
                    }}
                    whileHover={{ scale: 1.05, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X size={20} />
                  </motion.button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="w-full h-[calc(100%-96px)] overflow-auto">
                <iframe
                  src={`${cvUrl}#toolbar=0`}
                  className="w-full h-full"
                  title="CV Preview"
                  style={{ border: "none" }}
                />
              </div>

              {/* Fallback message if iframe doesn't work */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="text-center p-8"
                >
                  <p className="text-lg mb-4" style={{ color: "var(--text-muted)" }}>
                    {/* This message will only show if PDF fails to load */}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
