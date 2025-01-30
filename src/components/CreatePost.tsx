import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ImageIcon, CalendarIcon } from "lucide-react";

const CreatePost = () => {
  const [content, setContent] = useState("");

  return (
    <Card className="p-4 bg-card">
      <div className="flex items-start space-x-4">
        <div className="w-10 h-10 rounded-full bg-primary/20" />
        <div className="flex-1">
          <Input
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="bg-background border-none focus-visible:ring-1 focus-visible:ring-primary mb-4"
          />
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="text-foreground/60">
                <ImageIcon className="w-4 h-4 mr-2" />
                Photo/Video
              </Button>
              <Button variant="ghost" size="sm" className="text-foreground/60">
                <CalendarIcon className="w-4 h-4 mr-2" />
                Event
              </Button>
            </div>
            <Button className="gradient-bg">Post</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CreatePost;