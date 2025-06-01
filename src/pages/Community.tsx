
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { CommunityConnect } from "@/components/CommunityConnect";

const Community = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Header />
      <CommunityConnect />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Community;
