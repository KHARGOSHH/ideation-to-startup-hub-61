
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, Send } from "lucide-react";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <>
      {/* Chatbot Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl z-50"
        size="icon"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 h-96 shadow-2xl z-50 bg-white border-gray-200">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
            <CardTitle className="text-lg">AMOGH Assistant</CardTitle>
          </CardHeader>
          <CardContent className="p-4 flex flex-col h-full">
            <div className="flex-1 mb-4 overflow-y-auto">
              <div className="space-y-3">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="text-sm">Hi! I'm here to help you navigate AMOGH. What can I assist you with today?</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg text-sm"
                onKeyPress={(e) => e.key === 'Enter' && setMessage('')}
              />
              <Button
                onClick={() => setMessage('')}
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-purple-500"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};
