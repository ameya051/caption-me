import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileVideo, FileText, Settings, Download } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen w-full">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <DashboardSidebar />
          <SidebarInset className="flex-1">
            <div className="flex items-center border-b px-4 py-2">
              <SidebarTrigger className="mr-4" />
              <div className="flex-1">
                <h1 className="text-lg font-semibold">Dashboard</h1>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-8">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground mt-2">Manage your videos and subtitles</p>
              </div>

              <Tabs defaultValue="videos" className="space-y-6">
                <TabsList className="grid w-full max-w-md grid-cols-4">
                  <TabsTrigger value="videos">Your Videos</TabsTrigger>
                  <TabsTrigger value="subtitles">Your Subtitles</TabsTrigger>
                  <TabsTrigger value="uploads">Uploads</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                <TabsContent value="videos" className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold">Your Videos</h2>
                    <Button>
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Video
                    </Button>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <FileVideo className="h-8 w-8 text-blue-500" />
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardTitle className="text-lg">Sample Video 1</CardTitle>
                        <CardDescription>Duration: 5:23 • Uploaded 2 days ago</CardDescription>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <FileVideo className="h-8 w-8 text-blue-500" />
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardTitle className="text-lg">Sample Video 2</CardTitle>
                        <CardDescription>Duration: 3:45 • Uploaded 1 week ago</CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="subtitles" className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold">Your Subtitles</h2>
                    <Button>
                      <Upload className="mr-2 h-4 w-4" />
                      Generate Subtitles
                    </Button>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <FileText className="h-8 w-8 text-green-500" />
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardTitle className="text-lg">Video 1 Subtitles</CardTitle>
                        <CardDescription>SRT • Generated 2 days ago</CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="uploads" className="space-y-4">
                  <h2 className="text-2xl font-semibold">Recent Uploads</h2>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-center text-muted-foreground">
                        <Upload className="mx-auto h-12 w-12 mb-4" />
                        <p>No recent uploads</p>
                        <p className="text-sm">Upload a video to get started</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="settings" className="space-y-4">
                  <h2 className="text-2xl font-semibold">Settings</h2>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Settings className="mr-2 h-5 w-5" />
                        Account Settings
                      </CardTitle>
                      <CardDescription>
                        Manage your account preferences and settings
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Settings panel coming soon...</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
