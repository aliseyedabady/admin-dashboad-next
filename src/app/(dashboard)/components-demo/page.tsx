"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/language-context";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Select } from "@/components/ui/select";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Check,
  AlertCircle,
  Info,
  AlertTriangle,
  Code,
  Palette,
  ChevronDown,
} from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";
import { cn } from "@/lib/utils";

export default function ComponentsDemoPage() {
  const { language } = useLanguage();
  const [switchValue, setSwitchValue] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const ComponentSection = ({
    id,
    title,
    description,
    children,
    code,
  }: {
    id: string;
    title: string;
    description?: string;
    children: React.ReactNode;
    code?: string;
  }) => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Palette className="h-5 w-5" />
          {title}
        </CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Preview */}
        <div>
          <p className="mb-2 text-sm font-medium text-muted-foreground">
            {language === "fa" ? "پیش‌نمایش:" : "Preview:"}
          </p>
          <div className="rounded-lg border bg-muted/50 p-6">{children}</div>
        </div>

        {/* Code */}
        {code && (
          <div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => toggleSection(id)}
              className="mb-2 w-full justify-between"
            >
              <span className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                {language === "fa" ? "نمایش کد" : "Show Code"}
              </span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  openSections[id] && "rotate-180"
                )}
              />
            </Button>
            {openSections[id] && <CodeBlock code={code} language="tsx" />}
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          {language === "fa" ? "نمایش کامپوننت‌ها" : "Components Showcase"}
        </h1>
        <p className="text-muted-foreground">
          {language === "fa"
            ? "تمام کامپوننت‌های UI با مثال‌های کاربردی"
            : "All UI components with usage examples"}
        </p>
      </div>

      {/* Buttons */}
      <ComponentSection
        id="buttons"
        title="Buttons"
        description={
          language === "fa"
            ? "انواع دکمه‌ها با variant های مختلف"
            : "Various button variants and sizes"
        }
        code={`import { Button } from "@/components/ui/button";

<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>

<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">Icon</Button>`}
      >
        <div className="flex flex-wrap gap-4">
          <div className="space-y-2">
            <p className="text-sm font-medium">Variants:</p>
            <div className="flex flex-wrap gap-2">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          <div className="w-full space-y-2">
            <p className="text-sm font-medium">Sizes:</p>
            <div className="flex flex-wrap items-center gap-2">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">
                <Check className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="w-full space-y-2">
            <p className="text-sm font-medium">States:</p>
            <div className="flex flex-wrap gap-2">
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </div>
      </ComponentSection>

      {/* Badges */}
      <ComponentSection
        id="badges"
        title="Badges"
        description={
          language === "fa" ? "برچسب‌های رنگی" : "Colored badges"
        }
        code={`import { Badge } from "@/components/ui/badge";

<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`}
      >
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge>
            <Check className="mr-1 h-3 w-3" />
            With Icon
          </Badge>
        </div>
      </ComponentSection>

      {/* Inputs */}
      <ComponentSection
        id="inputs"
        title="Input Fields"
        description={
          language === "fa" ? "فیلدهای ورودی" : "Input components"
        }
        code={`import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

<Label htmlFor="email">Email</Label>
<Input id="email" type="email" placeholder="Email" />

<Input type="password" placeholder="Password" />
<Input disabled placeholder="Disabled" />`}
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="demo-email">Email</Label>
            <Input id="demo-email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="demo-password">Password</Label>
            <Input id="demo-password" type="password" placeholder="••••••••" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="demo-disabled">Disabled</Label>
            <Input id="demo-disabled" disabled placeholder="Disabled input" />
          </div>
        </div>
      </ComponentSection>

      {/* Select */}
      <ComponentSection
        id="select"
        title="Select Dropdown"
        description={language === "fa" ? "منوی انتخاب" : "Select menu"}
        code={`import { Select } from "@/components/ui/select";

<Select>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</Select>`}
      >
        <div className="space-y-2">
          <Label>Select an option</Label>
          <Select>
            <option value="">Select...</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Select>
        </div>
      </ComponentSection>

      {/* Switch */}
      <ComponentSection
        id="switch"
        title="Switch Toggle"
        description={language === "fa" ? "کلید تغییر حالت" : "Toggle switch"}
        code={`import { Switch } from "@/components/ui/switch";

const [checked, setChecked] = useState(false);

<Switch checked={checked} onCheckedChange={setChecked} />`}
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Enable notifications</Label>
            <Switch checked={switchValue} onCheckedChange={setSwitchValue} />
          </div>
          <div className="flex items-center justify-between">
            <Label>Disabled switch</Label>
            <Switch disabled />
          </div>
        </div>
      </ComponentSection>

      {/* Alerts */}
      <ComponentSection
        id="alerts"
        title="Alerts"
        description={language === "fa" ? "پیام‌های هشدار" : "Alert messages"}
        code={`import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

<Alert variant="default">
  <Info className="h-4 w-4" />
  <AlertTitle>Info</AlertTitle>
  <AlertDescription>This is an info message.</AlertDescription>
</Alert>`}
      >
        <div className="space-y-4">
          <Alert variant="default">
            <Info className="h-4 w-4" />
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>This is an informational message.</AlertDescription>
          </Alert>

          <Alert variant="success">
            <Check className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
              Operation completed successfully!
            </AlertDescription>
          </Alert>

          <Alert variant="warning">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>Please review before proceeding.</AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Something went wrong!</AlertDescription>
          </Alert>
        </div>
      </ComponentSection>

      {/* Progress */}
      <ComponentSection
        id="progress"
        title="Progress Bar"
        description={language === "fa" ? "نوار پیشرفت" : "Progress indicator"}
        code={`import { Progress } from "@/components/ui/progress";

<Progress value={25} />
<Progress value={50} />
<Progress value={75} />`}
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>25%</span>
            </div>
            <Progress value={25} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>50%</span>
            </div>
            <Progress value={50} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>75%</span>
            </div>
            <Progress value={75} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>100%</span>
            </div>
            <Progress value={100} />
          </div>
        </div>
      </ComponentSection>

      {/* Avatar */}
      <ComponentSection
        id="avatar"
        title="Avatar"
        description={language === "fa" ? "تصویر کاربر" : "User avatar"}
        code={`import { Avatar, AvatarFallback } from "@/components/ui/avatar";

<Avatar>
  <AvatarFallback>AB</AvatarFallback>
</Avatar>`}
      >
        <div className="flex flex-wrap gap-4">
          <div className="space-y-2 text-center">
            <Avatar className="mx-auto">
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <p className="text-xs text-muted-foreground">Default</p>
          </div>
          <div className="space-y-2 text-center">
            <Avatar className="mx-auto h-16 w-16">
              <AvatarFallback className="text-xl">AB</AvatarFallback>
            </Avatar>
            <p className="text-xs text-muted-foreground">Large</p>
          </div>
          <div className="space-y-2 text-center">
            <Avatar className="mx-auto">
              <AvatarFallback className="bg-primary text-primary-foreground">
                UK
              </AvatarFallback>
            </Avatar>
            <p className="text-xs text-muted-foreground">Colored</p>
          </div>
        </div>
      </ComponentSection>

      {/* Skeleton */}
      <ComponentSection
        id="skeleton"
        title="Skeleton Loader"
        description={
          language === "fa" ? "بارگذاری placeholder" : "Loading placeholder"
        }
        code={`import { Skeleton } from "@/components/ui/skeleton";

<Skeleton className="h-4 w-[250px]" />
<Skeleton className="h-12 w-12 rounded-full" />`}
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </div>
      </ComponentSection>

      {/* Cards */}
      <ComponentSection
        id="cards"
        title="Cards"
        description={language === "fa" ? "کارت‌ها" : "Card components"}
        code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
</Card>`}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Simple Card</CardTitle>
              <CardDescription>With description</CardDescription>
            </CardHeader>
            <CardContent>Card content goes here.</CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                With Icon
              </CardTitle>
            </CardHeader>
            <CardContent>Card with icon in title.</CardContent>
          </Card>
        </div>
      </ComponentSection>

      {/* Table */}
      <ComponentSection
        id="table"
        title="Table"
        description={language === "fa" ? "جدول داده" : "Data table"}
        code={`import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>Active</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">John Doe</TableCell>
              <TableCell>john@example.com</TableCell>
              <TableCell>
                <Badge>Active</Badge>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Jane Smith</TableCell>
              <TableCell>jane@example.com</TableCell>
              <TableCell>
                <Badge variant="secondary">Inactive</Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ComponentSection>

      {/* Tabs */}
      <ComponentSection
        id="tabs"
        title="Tabs"
        description={language === "fa" ? "تب‌ها" : "Tab navigation"}
        code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>`}
      >
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="space-y-2">
            <h3 className="font-medium">Account Settings</h3>
            <p className="text-sm text-muted-foreground">
              Manage your account settings here.
            </p>
          </TabsContent>
          <TabsContent value="password" className="space-y-2">
            <h3 className="font-medium">Password</h3>
            <p className="text-sm text-muted-foreground">
              Change your password here.
            </p>
          </TabsContent>
          <TabsContent value="settings" className="space-y-2">
            <h3 className="font-medium">Settings</h3>
            <p className="text-sm text-muted-foreground">
              Configure your preferences.
            </p>
          </TabsContent>
        </Tabs>
      </ComponentSection>

      {/* Dialog */}
      <ComponentSection
        id="dialog"
        title="Dialog Modal"
        description={language === "fa" ? "پنجره‌های باز شونده" : "Modal dialogs"}
        code={`import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const [open, setOpen] = useState(false);

<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog description</DialogDescription>
    </DialogHeader>
    <p>Content goes here</p>
  </DialogContent>
</Dialog>`}
      >
        <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent>
            <DialogClose onClick={() => setDialogOpen(false)} />
            <DialogHeader>
              <DialogTitle>Example Dialog</DialogTitle>
              <DialogDescription>
                This is an example dialog with content.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="text-sm">
                Dialogs are great for capturing user attention and getting input.
              </p>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setDialogOpen(false)}>Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ComponentSection>

      {/* Dropdown Menu */}
      <ComponentSection
        id="dropdown"
        title="Dropdown Menu"
        description={language === "fa" ? "منوی کشویی" : "Dropdown menu"}
        code={`import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Item 1</DropdownMenuItem>
    <DropdownMenuItem>Item 2</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline">Open Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ComponentSection>

      {/* Combined Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5" />
            {language === "fa" ? "مثال ترکیبی" : "Combined Example"}
          </CardTitle>
          <CardDescription>
            {language === "fa"
              ? "استفاده از چند کامپوننت با هم"
              : "Multiple components working together"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">
                  JD
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <CardTitle className="text-base">John Doe</CardTitle>
                <CardDescription>john.doe@example.com</CardDescription>
              </div>
              <Badge>Admin</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Email Notifications</Label>
                <Switch />
              </div>
              <div className="space-y-2">
                <Label>Completion</Label>
                <Progress value={65} />
                <p className="text-xs text-muted-foreground">65% Complete</p>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1">Save</Button>
                <Button variant="outline" className="flex-1">
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      {/* Color Palette */}
      <Card>
        <CardHeader>
          <CardTitle>
            {language === "fa" ? "پالت رنگ" : "Color Palette"}
          </CardTitle>
          <CardDescription>
            {language === "fa"
              ? "رنگ‌های سیستم طراحی"
              : "Design system colors"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Primary", class: "bg-primary text-primary-foreground" },
              {
                name: "Secondary",
                class: "bg-secondary text-secondary-foreground",
              },
              { name: "Muted", class: "bg-muted text-muted-foreground" },
              { name: "Accent", class: "bg-accent text-accent-foreground" },
              {
                name: "Destructive",
                class: "bg-destructive text-destructive-foreground",
              },
              { name: "Card", class: "bg-card text-card-foreground border" },
            ].map((color) => (
              <div
                key={color.name}
                className={`rounded-lg p-4 ${color.class}`}
              >
                <p className="font-medium">{color.name}</p>
                <p className="text-sm opacity-80">Sample text</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

