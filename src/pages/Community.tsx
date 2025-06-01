
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { CommunityConnect } from "@/components/CommunityConnect";

const Community = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <Header />
      <CommunityConnect />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Community;
