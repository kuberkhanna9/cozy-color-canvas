import Header from "@/components/Header";
import CreatePost from "@/components/CreatePost";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Content */}
          <div className="md:col-span-8">
            <CreatePost />
            <div className="space-y-6 mt-6">
              {/* Sample Post */}
              <Card className="p-4 bg-card animate-fade-in">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20" />
                  <div>
                    <h3 className="font-semibold text-foreground">John Doe</h3>
                    <p className="text-sm text-foreground/60">Just now</p>
                    <p className="mt-2">Just finished my final project presentation! 🎉</p>
                    <div className="mt-4 flex items-center space-x-4">
                      <button className="text-foreground/60 hover:text-primary">
                        Like
                      </button>
                      <button className="text-foreground/60 hover:text-primary">
                        Comment
                      </button>
                      <button className="text-foreground/60 hover:text-primary">
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="md:col-span-4">
            <Card className="p-4 bg-card">
              <h2 className="text-lg font-semibold mb-4">Trending Topics</h2>
              <div className="space-y-2">
                <p className="text-primary">#UniVibeEvents</p>
                <p className="text-primary">#StudentLife</p>
                <p className="text-primary">#CampusNews</p>
              </div>
            </Card>
            
            <Card className="p-4 bg-card mt-6">
              <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Campus Hackathon</h3>
                  <p className="text-sm text-foreground/60">Tomorrow, 10:00 AM</p>
                </div>
                <div>
                  <h3 className="font-medium">Career Fair</h3>
                  <p className="text-sm text-foreground/60">Next Week</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;