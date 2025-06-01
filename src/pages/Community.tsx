
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { CommunityConnect } from "@/components/CommunityConnect";

const Community = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header />
      <CommunityConnect />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Community;
