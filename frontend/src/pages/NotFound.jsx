import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from '@/components/ui/command';
import { Calendar, CheckCircle2, Circle, Clock, Home, Star } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

const NotFound = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto text-center px-4">
        {/* 404 Illustration */}
        <div className="mb-6">
          <div className="relative">
            <div className="text-9xl font-bold text-gray-200 select-none">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              {/* <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                <Search className="h-12 w-12 text-white" />
              </div> */}
            </div>
          </div>
        </div>

        {/* Error Message */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl mb-6">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Oops! Trang không tồn tại
            </h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Trang bạn đang tìm kiếm có thể đã bị di chuyển, xóa hoặc không bao giờ tồn tại. 
              Hãy kiểm tra lại URL hoặc quay về trang chủ.
            </p>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Link to="/">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3">
                  <Home className="h-4 w-4 mr-2" />
                  Về Trang Chủ
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Liên kết hữu ích</h3>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="ghost" size="sm" className="justify-start">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                My Tasks
              </Button>
              <Button variant="ghost" size="sm" className="justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Calendar
              </Button>
              <Button variant="ghost" size="sm" className="justify-start">
                <Star className="h-4 w-4 mr-2" />
                Important
              </Button>
              <Button variant="ghost" size="sm" className="justify-start">
                <Clock className="h-4 w-4 mr-2" />
                Recent
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Search Dialog */}
        <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
          <CommandInput placeholder="Tìm kiếm task hoặc trang..." />
          <CommandList>
            <CommandEmpty>Không tìm thấy kết quả.</CommandEmpty>
            <CommandGroup heading="Tasks">
              <CommandItem>
                <CheckCircle2 className="mr-2 h-4 w-4" />
                <span>Hoàn thành báo cáo dự án</span>
              </CommandItem>
              <CommandItem>
                <Circle className="mr-2 h-4 w-4" />
                <span>Mua sắm cho tuần mới</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Trang">
              <CommandItem>
                <Home className="mr-2 h-4 w-4" />
                <span>Trang chủ</span>
                <CommandShortcut>⌘H</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Lịch</span>
                <CommandShortcut>⌘C</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>

        {/* Footer */}
        <div className="mt-6 text-sm text-muted-foreground">
          <p>Nếu bạn nghĩ đây là lỗi, vui lòng liên hệ với chúng tôi.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;