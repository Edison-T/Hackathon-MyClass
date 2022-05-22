
export type User = {
    id: String;
    name: String;
    imageUri: String;
    status: String;
    role: String;
    lastOnlineAt: String;
    expoPushToken: String;
    items: Items[];
}

export type Message = {
    id: String;
    content: string;
    image: String;
    imageWidth: number;
    imageHeight: number;
    audio: string;
    createdAt: string;
    updatedAt: string;
    user: User;
    replyToMessageID: String;
    items: Items[];
}

export type Items = {
    id: String;
    createdAt: String;
    updatedAt: String;
    userID: String;
    user: User; // used in privateHomeScreen
    lastAnnouncementReadTimeStamp: String;
    lastMessageReadTimeStamp: String;
    allowAllNotifications: Boolean;
    allowSelectedNotifications: Boolean;
} // has whatever

export type Announcement = {
    id: String;
    title: string;
    content: string;
    user: User;
    dueDate: string;
    createdAt: string;
    updatedAt: string;
    items: Items[];
}

export type ChatRoom = {
    id: String;
    name: String;
    imageUri: String;
    users: User[];
    messages: Message;
    announcements: Announcement;
    chatRoomUsers: User;
    lastMessage: Message;
    lastAnnouncement: Announcement;
}

export type Conversation = {
    id: String;
    name: String;
    users: User[];
    messages: Message;
    announcements: Announcement;
    conversationUsers: User;
    lastMessage: Message;
}

export type PrivateRoom = {
    id: String;
    name: String;
    imageUri: String;
    messages: Message;
    privateRoomUsers: User;
    lastMessage: Message;
}

