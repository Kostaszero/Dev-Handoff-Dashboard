import { useSidebar } from "../contexts/SidebarContext";

// Random data to replcae API call
const notifications = [
  { id: 1, message: "You have a bug that needs...", time: "Just now", icon: "/assets/BugBeetleLight.svg"},
  { id: 2, message: "New user registered", time: "59 minutes ago", icon: "/assets/UserLight.svg"},
  { id: 3, message: "You have a bug that needs...", time: "12 hours ago", icon: "/assets/BugBeetleLight.svg"},
  { id: 4, message: "Andi Lane subscribed to you", time: "Today, 11:59 AM", icon: "/assets/BroadcastLight.svg"},
];


const activities = [
  { id: 1, message: "You have a bug that needs...", time: "Just now", avatar: "/assets/user4.svg" },
  { id: 2, message: "Released a new version", time: "59 minutes ago", avatar: "/assets/user1.svg" },
  { id: 3, message: "Submitted a bug", time: "12 hours ago", avatar: "/assets/user2.svg" },
  { id: 4, message: "Modified A data in Page X", time: "Today, 11:59 AM", avatar: "/assets/user3.svg" },
  { id: 5, message: "Deleted a page in Project X", time: "Feb 2, 2023", avatar: "/assets/user1.svg" },
];

const contacts = [
  { id: 1, name: "Natali Craig", avatar: "/assets/user2.svg" },
  { id: 2, name: "Drew Cano", avatar: "/assets/user3.svg" },
  { id: 3, name: "Orlando Diggs", avatar: "/assets/user2.svg" },
  { id: 4, name: "Andi Lane", avatar: "/assets/user4.svg" },
  { id: 5, name: "Kate Morrison", avatar: "/assets/user2.svg" },
  { id: 6, name: "Koray Okumus", avatar: "/assets/user1.svg" },
];

// Components of Notification bar
const NotificationItem = ({ message, time, icon }: any) => (
  <div className="flex gap-2 py-3">
    <div className="mt-0.5 z-50">
      <div className="bg-[#e3f5ffd8] p-1 rounded-[8px]"><img className="w-6 h-6" src={icon} alt="avatar" /></div>
    </div>
    <div className="flex flex-col">
      <span className="text-sm">{message}</span>
      <span className="text-xs text-text-40 dark:text-text-dark-40">
        {time}</span>
    </div>
  </div>
);

// Activity Component
const ActivityItem = ({ message, time, avatar }: any) => (
  <div className="flex gap-2 py-3">
    <div className={`mt-0.5 z-50 rounded-full`}><img className="w-6 h-6" src={avatar} alt="avatar" /></div>
    <div className="flex flex-col gap-0.5">
      <span className="text-sm">{message}</span>
      <span className="text-xs text-text-40 dark:text-text-dark-40">{time}</span>
    </div>
  </div>
);

// Contact Component
const ContactItem = ({ name, avatar }: any) => (
  <div className="flex items-center gap-2 py-3">
    <div className={`w-6 h-6 rounded-full`}><img className="w-6 h-6" src={avatar} alt="avatar" /></div>
    <span className="text-sm">{name}</span>
  </div>
);

export default function NotificationSidebar() {  
  
  const { showRight }: any = useSidebar();
  if (!showRight) return null;

  
  return (
    <div className="border-l flex flex-col gap-8  text-sm border-border-color dark:border-border-color-dark p-6 min-w-[300px]">
      {/* Notifications section*/}
      <div>
        <h2 className="font-semibold my-2">Notifications</h2>
        {notifications.map((notif) => <NotificationItem key={notif.id} {...notif} />)}
      </div>

      {/* Activities section*/}
      <div className="relative">
        <h2 className="font-semibold mb-2">Activities</h2>
        <hr className="text-border-color dark:text-border-color-dark absolute top-1/2 w-full rotate-90" style={{padding: '0 1rem', left: 'calc(-50% + 12px)'}}/>
        {activities.map((activity) => <ActivityItem key={activity.id} {...activity} />)}
      </div>

      {/* Contacts section*/}
      <div>
        <h2 className="font-semibold mb-2">Contacts</h2>
        {contacts.map((contact) => <ContactItem key={contact.id} {...contact} />)}
      </div>
    </div>
  );
};

