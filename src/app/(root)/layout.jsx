import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "Ali's Portfolio",
  description: "Ali Raza Khalid Nazir's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
