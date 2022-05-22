/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      imageUri
      status
      lastOnlineAt
      role
      expoPushToken
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          lastMessageReadTimeStamp
          lastAnnouncementReadTimeStamp
          allowAllNotifications
          allowSelectedNotifications
          allowAllConversationNotifications
          allowSelectedConversationNotifications
          createdAt
          updatedAt
        }
        nextToken
      }
      conversationUser {
        items {
          id
          userID
          conversationID
          lastMessageReadTimeStamp
          allowAllNotifications
          allowSelectedNotifications
          createdAt
          updatedAt
        }
        nextToken
      }
      groupRoomUser {
        items {
          id
          userID
          groupRoomID
          lastMessageReadTimeStamp
          lastAnnouncementReadTimeStamp
          allowAllNotifications
          allowSelectedNotifications
          allowAllConversationNotifications
          allowSelectedConversationNotifications
          createdAt
          updatedAt
        }
        nextToken
      }
      groupRoomConversationUser {
        items {
          id
          userID
          groupRoomConversationID
          lastMessageReadTimeStamp
          allowAllNotifications
          allowSelectedNotifications
          createdAt
          updatedAt
        }
        nextToken
      }
      privateRoomUser {
        items {
          id
          userID
          privateRoomID
          allowAllNotifications
          allowSelectedNotifications
          lastMessageReadTimeStamp
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      imageUri
      status
      lastOnlineAt
      role
      expoPushToken
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          lastMessageReadTimeStamp
          lastAnnouncementReadTimeStamp
          allowAllNotifications
          allowSelectedNotifications
          allowAllConversationNotifications
          allowSelectedConversationNotifications
          createdAt
          updatedAt
        }
        nextToken
      }
      conversationUser {
        items {
          id
          userID
          conversationID
          lastMessageReadTimeStamp
          allowAllNotifications
          allowSelectedNotifications
          createdAt
          updatedAt
        }
        nextToken
      }
      groupRoomUser {
        items {
          id
          userID
          groupRoomID
          lastMessageReadTimeStamp
          lastAnnouncementReadTimeStamp
          allowAllNotifications
          allowSelectedNotifications
          allowAllConversationNotifications
          allowSelectedConversationNotifications
          createdAt
          updatedAt
        }
        nextToken
      }
      groupRoomConversationUser {
        items {
          id
          userID
          groupRoomConversationID
          lastMessageReadTimeStamp
          allowAllNotifications
          allowSelectedNotifications
          createdAt
          updatedAt
        }
        nextToken
      }
      privateRoomUser {
        items {
          id
          userID
          privateRoomID
          allowAllNotifications
          allowSelectedNotifications
          lastMessageReadTimeStamp
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      imageUri
      status
      lastOnlineAt
      role
      expoPushToken
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          lastMessageReadTimeStamp
          lastAnnouncementReadTimeStamp
          allowAllNotifications
          allowSelectedNotifications
          allowAllConversationNotifications
          allowSelectedConversationNotifications
          createdAt
          updatedAt
        }
        nextToken
      }
      conversationUser {
        items {
          id
          userID
          conversationID
          lastMessageReadTimeStamp
          allowAllNotifications
          allowSelectedNotifications
          createdAt
          updatedAt
        }
        nextToken
      }
      groupRoomUser {
        items {
          id
          userID
          groupRoomID
          lastMessageReadTimeStamp
          lastAnnouncementReadTimeStamp
          allowAllNotifications
          allowSelectedNotifications
          allowAllConversationNotifications
          allowSelectedConversationNotifications
          createdAt
          updatedAt
        }
        nextToken
      }
      groupRoomConversationUser {
        items {
          id
          userID
          groupRoomConversationID
          lastMessageReadTimeStamp
          allowAllNotifications
          allowSelectedNotifications
          createdAt
          updatedAt
        }
        nextToken
      }
      privateRoomUser {
        items {
          id
          userID
          privateRoomID
          allowAllNotifications
          allowSelectedNotifications
          lastMessageReadTimeStamp
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateChatRoomUser = /* GraphQL */ `
  subscription OnCreateChatRoomUser {
    onCreateChatRoomUser {
      id
      userID
      chatRoomID
      lastMessageReadTimeStamp
      lastAnnouncementReadTimeStamp
      allowAllNotifications
      allowSelectedNotifications
      allowAllConversationNotifications
      allowSelectedConversationNotifications
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        name
        imageUri
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        announcements {
          nextToken
        }
        conversations {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          chatRoomID
          updatedAt
        }
        lastAnnouncementID
        lastAnnouncement {
          id
          createdAt
          dueDate
          content
          title
          userID
          chatRoomID
          updatedAt
        }
        lastAnnouncementTime
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateChatRoomUser = /* GraphQL */ `
  subscription OnUpdateChatRoomUser {
    onUpdateChatRoomUser {
      id
      userID
      chatRoomID
      lastMessageReadTimeStamp
      lastAnnouncementReadTimeStamp
      allowAllNotifications
      allowSelectedNotifications
      allowAllConversationNotifications
      allowSelectedConversationNotifications
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        name
        imageUri
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        announcements {
          nextToken
        }
        conversations {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          chatRoomID
          updatedAt
        }
        lastAnnouncementID
        lastAnnouncement {
          id
          createdAt
          dueDate
          content
          title
          userID
          chatRoomID
          updatedAt
        }
        lastAnnouncementTime
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteChatRoomUser = /* GraphQL */ `
  subscription OnDeleteChatRoomUser {
    onDeleteChatRoomUser {
      id
      userID
      chatRoomID
      lastMessageReadTimeStamp
      lastAnnouncementReadTimeStamp
      allowAllNotifications
      allowSelectedNotifications
      allowAllConversationNotifications
      allowSelectedConversationNotifications
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        name
        imageUri
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        announcements {
          nextToken
        }
        conversations {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          chatRoomID
          updatedAt
        }
        lastAnnouncementID
        lastAnnouncement {
          id
          createdAt
          dueDate
          content
          title
          userID
          chatRoomID
          updatedAt
        }
        lastAnnouncementTime
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGroupRoomUser = /* GraphQL */ `
  subscription OnCreateGroupRoomUser {
    onCreateGroupRoomUser {
      id
      userID
      groupRoomID
      lastMessageReadTimeStamp
      lastAnnouncementReadTimeStamp
      allowAllNotifications
      allowSelectedNotifications
      allowAllConversationNotifications
      allowSelectedConversationNotifications
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      groupRoom {
        id
        name
        imageUri
        groupRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        announcements {
          nextToken
        }
        groupRoomConversations {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          groupRoomID
          updatedAt
        }
        lastAnnouncementID
        lastAnnouncement {
          id
          createdAt
          dueDate
          content
          title
          userID
          groupRoomID
          updatedAt
        }
        lastAnnouncementTime
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGroupRoomUser = /* GraphQL */ `
  subscription OnUpdateGroupRoomUser {
    onUpdateGroupRoomUser {
      id
      userID
      groupRoomID
      lastMessageReadTimeStamp
      lastAnnouncementReadTimeStamp
      allowAllNotifications
      allowSelectedNotifications
      allowAllConversationNotifications
      allowSelectedConversationNotifications
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      groupRoom {
        id
        name
        imageUri
        groupRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        announcements {
          nextToken
        }
        groupRoomConversations {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          groupRoomID
          updatedAt
        }
        lastAnnouncementID
        lastAnnouncement {
          id
          createdAt
          dueDate
          content
          title
          userID
          groupRoomID
          updatedAt
        }
        lastAnnouncementTime
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGroupRoomUser = /* GraphQL */ `
  subscription OnDeleteGroupRoomUser {
    onDeleteGroupRoomUser {
      id
      userID
      groupRoomID
      lastMessageReadTimeStamp
      lastAnnouncementReadTimeStamp
      allowAllNotifications
      allowSelectedNotifications
      allowAllConversationNotifications
      allowSelectedConversationNotifications
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      groupRoom {
        id
        name
        imageUri
        groupRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        announcements {
          nextToken
        }
        groupRoomConversations {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          groupRoomID
          updatedAt
        }
        lastAnnouncementID
        lastAnnouncement {
          id
          createdAt
          dueDate
          content
          title
          userID
          groupRoomID
          updatedAt
        }
        lastAnnouncementTime
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePrivateRoomUser = /* GraphQL */ `
  subscription OnCreatePrivateRoomUser {
    onCreatePrivateRoomUser {
      id
      userID
      privateRoomID
      allowAllNotifications
      allowSelectedNotifications
      lastMessageReadTimeStamp
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      privateRoom {
        id
        privateRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          privateRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePrivateRoomUser = /* GraphQL */ `
  subscription OnUpdatePrivateRoomUser {
    onUpdatePrivateRoomUser {
      id
      userID
      privateRoomID
      allowAllNotifications
      allowSelectedNotifications
      lastMessageReadTimeStamp
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      privateRoom {
        id
        privateRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          privateRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePrivateRoomUser = /* GraphQL */ `
  subscription OnDeletePrivateRoomUser {
    onDeletePrivateRoomUser {
      id
      userID
      privateRoomID
      allowAllNotifications
      allowSelectedNotifications
      lastMessageReadTimeStamp
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      privateRoom {
        id
        privateRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          privateRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom {
    onCreateChatRoom {
      id
      name
      imageUri
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          lastMessageReadTimeStamp
          lastAnnouncementReadTimeStamp
          allowAllNotifications
          allowSelectedNotifications
          allowAllConversationNotifications
          allowSelectedConversationNotifications
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          chatRoomID
          updatedAt
        }
        nextToken
      }
      announcements {
        items {
          id
          createdAt
          dueDate
          content
          title
          userID
          chatRoomID
          updatedAt
        }
        nextToken
      }
      conversations {
        items {
          id
          name
          chatRoomID
          createdAt
          lastMessageID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        replyToMessageID
        createdAt
        content
        image
        imageWidth
        imageHeight
        audio
        userID
        chatRoomID
        user {
          id
          name
          imageUri
          status
          lastOnlineAt
          role
          expoPushToken
          createdAt
          updatedAt
        }
        chatRoom {
          id
          name
          imageUri
          lastMessageID
          lastAnnouncementID
          lastAnnouncementTime
          createdAt
          updatedAt
        }
        updatedAt
      }
      lastAnnouncementID
      lastAnnouncement {
        id
        createdAt
        dueDate
        content
        title
        userID
        chatRoomID
        user {
          id
          name
          imageUri
          status
          lastOnlineAt
          role
          expoPushToken
          createdAt
          updatedAt
        }
        chatRoom {
          id
          name
          imageUri
          lastMessageID
          lastAnnouncementID
          lastAnnouncementTime
          createdAt
          updatedAt
        }
        updatedAt
      }
      lastAnnouncementTime
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom {
    onUpdateChatRoom {
      id
      name
      imageUri
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          lastMessageReadTimeStamp
          lastAnnouncementReadTimeStamp
          allowAllNotifications
          allowSelectedNotifications
          allowAllConversationNotifications
          allowSelectedConversationNotifications
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          chatRoomID
          updatedAt
        }
        nextToken
      }
      announcements {
        items {
          id
          createdAt
          dueDate
          content
          title
          userID
          chatRoomID
          updatedAt
        }
        nextToken
      }
      conversations {
        items {
          id
          name
          chatRoomID
          createdAt
          lastMessageID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        replyToMessageID
        createdAt
        content
        image
        imageWidth
        imageHeight
        audio
        userID
        chatRoomID
        user {
          id
          name
          imageUri
          status
          lastOnlineAt
          role
          expoPushToken
          createdAt
          updatedAt
        }
        chatRoom {
          id
          name
          imageUri
          lastMessageID
          lastAnnouncementID
          lastAnnouncementTime
          createdAt
          updatedAt
        }
        updatedAt
      }
      lastAnnouncementID
      lastAnnouncement {
        id
        createdAt
        dueDate
        content
        title
        userID
        chatRoomID
        user {
          id
          name
          imageUri
          status
          lastOnlineAt
          role
          expoPushToken
          createdAt
          updatedAt
        }
        chatRoom {
          id
          name
          imageUri
          lastMessageID
          lastAnnouncementID
          lastAnnouncementTime
          createdAt
          updatedAt
        }
        updatedAt
      }
      lastAnnouncementTime
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom {
    onDeleteChatRoom {
      id
      name
      imageUri
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          lastMessageReadTimeStamp
          lastAnnouncementReadTimeStamp
          allowAllNotifications
          allowSelectedNotifications
          allowAllConversationNotifications
          allowSelectedConversationNotifications
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          chatRoomID
          updatedAt
        }
        nextToken
      }
      announcements {
        items {
          id
          createdAt
          dueDate
          content
          title
          userID
          chatRoomID
          updatedAt
        }
        nextToken
      }
      conversations {
        items {
          id
          name
          chatRoomID
          createdAt
          lastMessageID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        replyToMessageID
        createdAt
        content
        image
        imageWidth
        imageHeight
        audio
        userID
        chatRoomID
        user {
          id
          name
          imageUri
          status
          lastOnlineAt
          role
          expoPushToken
          createdAt
          updatedAt
        }
        chatRoom {
          id
          name
          imageUri
          lastMessageID
          lastAnnouncementID
          lastAnnouncementTime
          createdAt
          updatedAt
        }
        updatedAt
      }
      lastAnnouncementID
      lastAnnouncement {
        id
        createdAt
        dueDate
        content
        title
        userID
        chatRoomID
        user {
          id
          name
          imageUri
          status
          lastOnlineAt
          role
          expoPushToken
          createdAt
          updatedAt
        }
        chatRoom {
          id
          name
          imageUri
          lastMessageID
          lastAnnouncementID
          lastAnnouncementTime
          createdAt
          updatedAt
        }
        updatedAt
      }
      lastAnnouncementTime
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGroupRoom = /* GraphQL */ `
  subscription OnCreateGroupRoom {
    onCreateGroupRoom {
      id
      name
      imageUri
      groupRoomUsers {
        items {
          id
          userID
          groupRoomID
          lastMessageReadTimeStamp
          lastAnnouncementReadTimeStamp
          allowAllNotifications
          allowSelectedNotifications
          allowAllConversationNotifications
          allowSelectedConversationNotifications
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          groupRoomID
          updatedAt
        }
        nextToken
      }
      announcements {
        items {
          id
          createdAt
          dueDate
          content
          title
          userID
          groupRoomID
          updatedAt
        }
        nextToken
      }
      groupRoomConversations {
        items {
          id
          name
          groupRoomID
          createdAt
          lastMessageID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        replyToMessageID
        createdAt
        content
        image
        imageWidth
        imageHeight
        audio
        userID
        groupRoomID
        user {
          id
          name
          imageUri
          status
          lastOnlineAt
          role
          expoPushToken
          createdAt
          updatedAt
        }
        groupRoom {
          id
          name
          imageUri
          lastMessageID
          lastAnnouncementID
          lastAnnouncementTime
          createdAt
          updatedAt
        }
        updatedAt
      }
      lastAnnouncementID
      lastAnnouncement {
        id
        createdAt
        dueDate
        content
        title
        userID
        groupRoomID
        user {
          id
          name
          imageUri
          status
          lastOnlineAt
          role
          expoPushToken
          createdAt
          updatedAt
        }
        groupRoom {
          id
          name
          imageUri
          lastMessageID
          lastAnnouncementID
          lastAnnouncementTime
          createdAt
          updatedAt
        }
        updatedAt
      }
      lastAnnouncementTime
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGroupRoom = /* GraphQL */ `
  subscription OnUpdateGroupRoom {
    onUpdateGroupRoom {
      id
      name
      imageUri
      groupRoomUsers {
        items {
          id
          userID
          groupRoomID
          lastMessageReadTimeStamp
          lastAnnouncementReadTimeStamp
          allowAllNotifications
          allowSelectedNotifications
          allowAllConversationNotifications
          allowSelectedConversationNotifications
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          groupRoomID
          updatedAt
        }
        nextToken
      }
      announcements {
        items {
          id
          createdAt
          dueDate
          content
          title
          userID
          groupRoomID
          updatedAt
        }
        nextToken
      }
      groupRoomConversations {
        items {
          id
          name
          groupRoomID
          createdAt
          lastMessageID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        replyToMessageID
        createdAt
        content
        image
        imageWidth
        imageHeight
        audio
        userID
        groupRoomID
        user {
          id
          name
          imageUri
          status
          lastOnlineAt
          role
          expoPushToken
          createdAt
          updatedAt
        }
        groupRoom {
          id
          name
          imageUri
          lastMessageID
          lastAnnouncementID
          lastAnnouncementTime
          createdAt
          updatedAt
        }
        updatedAt
      }
      lastAnnouncementID
      lastAnnouncement {
        id
        createdAt
        dueDate
        content
        title
        userID
        groupRoomID
        user {
          id
          name
          imageUri
          status
          lastOnlineAt
          role
          expoPushToken
          createdAt
          updatedAt
        }
        groupRoom {
          id
          name
          imageUri
          lastMessageID
          lastAnnouncementID
          lastAnnouncementTime
          createdAt
          updatedAt
        }
        updatedAt
      }
      lastAnnouncementTime
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGroupRoom = /* GraphQL */ `
  subscription OnDeleteGroupRoom {
    onDeleteGroupRoom {
      id
      name
      imageUri
      groupRoomUsers {
        items {
          id
          userID
          groupRoomID
          lastMessageReadTimeStamp
          lastAnnouncementReadTimeStamp
          allowAllNotifications
          allowSelectedNotifications
          allowAllConversationNotifications
          allowSelectedConversationNotifications
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          groupRoomID
          updatedAt
        }
        nextToken
      }
      announcements {
        items {
          id
          createdAt
          dueDate
          content
          title
          userID
          groupRoomID
          updatedAt
        }
        nextToken
      }
      groupRoomConversations {
        items {
          id
          name
          groupRoomID
          createdAt
          lastMessageID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        replyToMessageID
        createdAt
        content
        image
        imageWidth
        imageHeight
        audio
        userID
        groupRoomID
        user {
          id
          name
          imageUri
          status
          lastOnlineAt
          role
          expoPushToken
          createdAt
          updatedAt
        }
        groupRoom {
          id
          name
          imageUri
          lastMessageID
          lastAnnouncementID
          lastAnnouncementTime
          createdAt
          updatedAt
        }
        updatedAt
      }
      lastAnnouncementID
      lastAnnouncement {
        id
        createdAt
        dueDate
        content
        title
        userID
        groupRoomID
        user {
          id
          name
          imageUri
          status
          lastOnlineAt
          role
          expoPushToken
          createdAt
          updatedAt
        }
        groupRoom {
          id
          name
          imageUri
          lastMessageID
          lastAnnouncementID
          lastAnnouncementTime
          createdAt
          updatedAt
        }
        updatedAt
      }
      lastAnnouncementTime
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePrivateRoom = /* GraphQL */ `
  subscription OnCreatePrivateRoom {
    onCreatePrivateRoom {
      id
      privateRoomUsers {
        items {
          id
          userID
          privateRoomID
          allowAllNotifications
          allowSelectedNotifications
          lastMessageReadTimeStamp
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          privateRoomID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        replyToMessageID
        createdAt
        content
        image
        imageWidth
        imageHeight
        audio
        userID
        privateRoomID
        user {
          id
          name
          imageUri
          status
          lastOnlineAt
          role
          expoPushToken
          createdAt
          updatedAt
        }
        privateRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePrivateRoom = /* GraphQL */ `
  subscription OnUpdatePrivateRoom {
    onUpdatePrivateRoom {
      id
      privateRoomUsers {
        items {
          id
          userID
          privateRoomID
          allowAllNotifications
          allowSelectedNotifications
          lastMessageReadTimeStamp
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          privateRoomID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        replyToMessageID
        createdAt
        content
        image
        imageWidth
        imageHeight
        audio
        userID
        privateRoomID
        user {
          id
          name
          imageUri
          status
          lastOnlineAt
          role
          expoPushToken
          createdAt
          updatedAt
        }
        privateRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePrivateRoom = /* GraphQL */ `
  subscription OnDeletePrivateRoom {
    onDeletePrivateRoom {
      id
      privateRoomUsers {
        items {
          id
          userID
          privateRoomID
          allowAllNotifications
          allowSelectedNotifications
          lastMessageReadTimeStamp
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          privateRoomID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        replyToMessageID
        createdAt
        content
        image
        imageWidth
        imageHeight
        audio
        userID
        privateRoomID
        user {
          id
          name
          imageUri
          status
          lastOnlineAt
          role
          expoPushToken
          createdAt
          updatedAt
        }
        privateRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      replyToMessageID
      createdAt
      content
      image
      imageWidth
      imageHeight
      audio
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        name
        imageUri
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        announcements {
          nextToken
        }
        conversations {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          chatRoomID
          updatedAt
        }
        lastAnnouncementID
        lastAnnouncement {
          id
          createdAt
          dueDate
          content
          title
          userID
          chatRoomID
          updatedAt
        }
        lastAnnouncementTime
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      replyToMessageID
      createdAt
      content
      image
      imageWidth
      imageHeight
      audio
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        name
        imageUri
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        announcements {
          nextToken
        }
        conversations {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          chatRoomID
          updatedAt
        }
        lastAnnouncementID
        lastAnnouncement {
          id
          createdAt
          dueDate
          content
          title
          userID
          chatRoomID
          updatedAt
        }
        lastAnnouncementTime
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      replyToMessageID
      createdAt
      content
      image
      imageWidth
      imageHeight
      audio
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        name
        imageUri
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        announcements {
          nextToken
        }
        conversations {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          chatRoomID
          updatedAt
        }
        lastAnnouncementID
        lastAnnouncement {
          id
          createdAt
          dueDate
          content
          title
          userID
          chatRoomID
          updatedAt
        }
        lastAnnouncementTime
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onCreateGroupRoomMessage = /* GraphQL */ `
  subscription OnCreateGroupRoomMessage {
    onCreateGroupRoomMessage {
      id
      replyToMessageID
      createdAt
      content
      image
      imageWidth
      imageHeight
      audio
      userID
      groupRoomID
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      groupRoom {
        id
        name
        imageUri
        groupRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        announcements {
          nextToken
        }
        groupRoomConversations {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          groupRoomID
          updatedAt
        }
        lastAnnouncementID
        lastAnnouncement {
          id
          createdAt
          dueDate
          content
          title
          userID
          groupRoomID
          updatedAt
        }
        lastAnnouncementTime
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onUpdateGroupRoomMessage = /* GraphQL */ `
  subscription OnUpdateGroupRoomMessage {
    onUpdateGroupRoomMessage {
      id
      replyToMessageID
      createdAt
      content
      image
      imageWidth
      imageHeight
      audio
      userID
      groupRoomID
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      groupRoom {
        id
        name
        imageUri
        groupRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        announcements {
          nextToken
        }
        groupRoomConversations {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          groupRoomID
          updatedAt
        }
        lastAnnouncementID
        lastAnnouncement {
          id
          createdAt
          dueDate
          content
          title
          userID
          groupRoomID
          updatedAt
        }
        lastAnnouncementTime
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onDeleteGroupRoomMessage = /* GraphQL */ `
  subscription OnDeleteGroupRoomMessage {
    onDeleteGroupRoomMessage {
      id
      replyToMessageID
      createdAt
      content
      image
      imageWidth
      imageHeight
      audio
      userID
      groupRoomID
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      groupRoom {
        id
        name
        imageUri
        groupRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        announcements {
          nextToken
        }
        groupRoomConversations {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          groupRoomID
          updatedAt
        }
        lastAnnouncementID
        lastAnnouncement {
          id
          createdAt
          dueDate
          content
          title
          userID
          groupRoomID
          updatedAt
        }
        lastAnnouncementTime
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onCreatePrivateRoomMessage = /* GraphQL */ `
  subscription OnCreatePrivateRoomMessage {
    onCreatePrivateRoomMessage {
      id
      replyToMessageID
      createdAt
      content
      image
      imageWidth
      imageHeight
      audio
      userID
      privateRoomID
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      privateRoom {
        id
        privateRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          privateRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onUpdatePrivateRoomMessage = /* GraphQL */ `
  subscription OnUpdatePrivateRoomMessage {
    onUpdatePrivateRoomMessage {
      id
      replyToMessageID
      createdAt
      content
      image
      imageWidth
      imageHeight
      audio
      userID
      privateRoomID
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      privateRoom {
        id
        privateRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          privateRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onDeletePrivateRoomMessage = /* GraphQL */ `
  subscription OnDeletePrivateRoomMessage {
    onDeletePrivateRoomMessage {
      id
      replyToMessageID
      createdAt
      content
      image
      imageWidth
      imageHeight
      audio
      userID
      privateRoomID
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      privateRoom {
        id
        privateRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          privateRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onCreateAnnouncement = /* GraphQL */ `
  subscription OnCreateAnnouncement {
    onCreateAnnouncement {
      id
      createdAt
      dueDate
      content
      title
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        name
        imageUri
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        announcements {
          nextToken
        }
        conversations {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          chatRoomID
          updatedAt
        }
        lastAnnouncementID
        lastAnnouncement {
          id
          createdAt
          dueDate
          content
          title
          userID
          chatRoomID
          updatedAt
        }
        lastAnnouncementTime
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onUpdateAnnouncement = /* GraphQL */ `
  subscription OnUpdateAnnouncement {
    onUpdateAnnouncement {
      id
      createdAt
      dueDate
      content
      title
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        name
        imageUri
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        announcements {
          nextToken
        }
        conversations {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          chatRoomID
          updatedAt
        }
        lastAnnouncementID
        lastAnnouncement {
          id
          createdAt
          dueDate
          content
          title
          userID
          chatRoomID
          updatedAt
        }
        lastAnnouncementTime
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onDeleteAnnouncement = /* GraphQL */ `
  subscription OnDeleteAnnouncement {
    onDeleteAnnouncement {
      id
      createdAt
      dueDate
      content
      title
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        name
        imageUri
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        announcements {
          nextToken
        }
        conversations {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          chatRoomID
          updatedAt
        }
        lastAnnouncementID
        lastAnnouncement {
          id
          createdAt
          dueDate
          content
          title
          userID
          chatRoomID
          updatedAt
        }
        lastAnnouncementTime
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onCreateGroupAnnouncement = /* GraphQL */ `
  subscription OnCreateGroupAnnouncement {
    onCreateGroupAnnouncement {
      id
      createdAt
      dueDate
      content
      title
      userID
      groupRoomID
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      groupRoom {
        id
        name
        imageUri
        groupRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        announcements {
          nextToken
        }
        groupRoomConversations {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          groupRoomID
          updatedAt
        }
        lastAnnouncementID
        lastAnnouncement {
          id
          createdAt
          dueDate
          content
          title
          userID
          groupRoomID
          updatedAt
        }
        lastAnnouncementTime
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onUpdateGroupAnnouncement = /* GraphQL */ `
  subscription OnUpdateGroupAnnouncement {
    onUpdateGroupAnnouncement {
      id
      createdAt
      dueDate
      content
      title
      userID
      groupRoomID
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      groupRoom {
        id
        name
        imageUri
        groupRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        announcements {
          nextToken
        }
        groupRoomConversations {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          groupRoomID
          updatedAt
        }
        lastAnnouncementID
        lastAnnouncement {
          id
          createdAt
          dueDate
          content
          title
          userID
          groupRoomID
          updatedAt
        }
        lastAnnouncementTime
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onDeleteGroupAnnouncement = /* GraphQL */ `
  subscription OnDeleteGroupAnnouncement {
    onDeleteGroupAnnouncement {
      id
      createdAt
      dueDate
      content
      title
      userID
      groupRoomID
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      groupRoom {
        id
        name
        imageUri
        groupRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        announcements {
          nextToken
        }
        groupRoomConversations {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          groupRoomID
          updatedAt
        }
        lastAnnouncementID
        lastAnnouncement {
          id
          createdAt
          dueDate
          content
          title
          userID
          groupRoomID
          updatedAt
        }
        lastAnnouncementTime
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation {
    onCreateConversation {
      id
      name
      chatRoomID
      chatRoom {
        id
        name
        imageUri
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        announcements {
          nextToken
        }
        conversations {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          chatRoomID
          updatedAt
        }
        lastAnnouncementID
        lastAnnouncement {
          id
          createdAt
          dueDate
          content
          title
          userID
          chatRoomID
          updatedAt
        }
        lastAnnouncementTime
        createdAt
        updatedAt
      }
      createdAt
      conversationUsers {
        items {
          id
          userID
          conversationID
          lastMessageReadTimeStamp
          allowAllNotifications
          allowSelectedNotifications
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          conversationID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        replyToMessageID
        createdAt
        content
        image
        imageWidth
        imageHeight
        audio
        userID
        conversationID
        user {
          id
          name
          imageUri
          status
          lastOnlineAt
          role
          expoPushToken
          createdAt
          updatedAt
        }
        conversation {
          id
          name
          chatRoomID
          createdAt
          lastMessageID
          updatedAt
        }
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation {
    onUpdateConversation {
      id
      name
      chatRoomID
      chatRoom {
        id
        name
        imageUri
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        announcements {
          nextToken
        }
        conversations {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          chatRoomID
          updatedAt
        }
        lastAnnouncementID
        lastAnnouncement {
          id
          createdAt
          dueDate
          content
          title
          userID
          chatRoomID
          updatedAt
        }
        lastAnnouncementTime
        createdAt
        updatedAt
      }
      createdAt
      conversationUsers {
        items {
          id
          userID
          conversationID
          lastMessageReadTimeStamp
          allowAllNotifications
          allowSelectedNotifications
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          conversationID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        replyToMessageID
        createdAt
        content
        image
        imageWidth
        imageHeight
        audio
        userID
        conversationID
        user {
          id
          name
          imageUri
          status
          lastOnlineAt
          role
          expoPushToken
          createdAt
          updatedAt
        }
        conversation {
          id
          name
          chatRoomID
          createdAt
          lastMessageID
          updatedAt
        }
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation {
    onDeleteConversation {
      id
      name
      chatRoomID
      chatRoom {
        id
        name
        imageUri
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        announcements {
          nextToken
        }
        conversations {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          chatRoomID
          updatedAt
        }
        lastAnnouncementID
        lastAnnouncement {
          id
          createdAt
          dueDate
          content
          title
          userID
          chatRoomID
          updatedAt
        }
        lastAnnouncementTime
        createdAt
        updatedAt
      }
      createdAt
      conversationUsers {
        items {
          id
          userID
          conversationID
          lastMessageReadTimeStamp
          allowAllNotifications
          allowSelectedNotifications
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          conversationID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        replyToMessageID
        createdAt
        content
        image
        imageWidth
        imageHeight
        audio
        userID
        conversationID
        user {
          id
          name
          imageUri
          status
          lastOnlineAt
          role
          expoPushToken
          createdAt
          updatedAt
        }
        conversation {
          id
          name
          chatRoomID
          createdAt
          lastMessageID
          updatedAt
        }
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onCreateConversationMessage = /* GraphQL */ `
  subscription OnCreateConversationMessage {
    onCreateConversationMessage {
      id
      replyToMessageID
      createdAt
      content
      image
      imageWidth
      imageHeight
      audio
      userID
      conversationID
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      conversation {
        id
        name
        chatRoomID
        chatRoom {
          id
          name
          imageUri
          lastMessageID
          lastAnnouncementID
          lastAnnouncementTime
          createdAt
          updatedAt
        }
        createdAt
        conversationUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          conversationID
          updatedAt
        }
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onUpdateConversationMessage = /* GraphQL */ `
  subscription OnUpdateConversationMessage {
    onUpdateConversationMessage {
      id
      replyToMessageID
      createdAt
      content
      image
      imageWidth
      imageHeight
      audio
      userID
      conversationID
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      conversation {
        id
        name
        chatRoomID
        chatRoom {
          id
          name
          imageUri
          lastMessageID
          lastAnnouncementID
          lastAnnouncementTime
          createdAt
          updatedAt
        }
        createdAt
        conversationUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          conversationID
          updatedAt
        }
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onDeleteConversationMessage = /* GraphQL */ `
  subscription OnDeleteConversationMessage {
    onDeleteConversationMessage {
      id
      replyToMessageID
      createdAt
      content
      image
      imageWidth
      imageHeight
      audio
      userID
      conversationID
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      conversation {
        id
        name
        chatRoomID
        chatRoom {
          id
          name
          imageUri
          lastMessageID
          lastAnnouncementID
          lastAnnouncementTime
          createdAt
          updatedAt
        }
        createdAt
        conversationUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          conversationID
          updatedAt
        }
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onCreateConversationUser = /* GraphQL */ `
  subscription OnCreateConversationUser {
    onCreateConversationUser {
      id
      userID
      conversationID
      lastMessageReadTimeStamp
      allowAllNotifications
      allowSelectedNotifications
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      conversation {
        id
        name
        chatRoomID
        chatRoom {
          id
          name
          imageUri
          lastMessageID
          lastAnnouncementID
          lastAnnouncementTime
          createdAt
          updatedAt
        }
        createdAt
        conversationUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          conversationID
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateConversationUser = /* GraphQL */ `
  subscription OnUpdateConversationUser {
    onUpdateConversationUser {
      id
      userID
      conversationID
      lastMessageReadTimeStamp
      allowAllNotifications
      allowSelectedNotifications
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      conversation {
        id
        name
        chatRoomID
        chatRoom {
          id
          name
          imageUri
          lastMessageID
          lastAnnouncementID
          lastAnnouncementTime
          createdAt
          updatedAt
        }
        createdAt
        conversationUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          conversationID
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteConversationUser = /* GraphQL */ `
  subscription OnDeleteConversationUser {
    onDeleteConversationUser {
      id
      userID
      conversationID
      lastMessageReadTimeStamp
      allowAllNotifications
      allowSelectedNotifications
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      conversation {
        id
        name
        chatRoomID
        chatRoom {
          id
          name
          imageUri
          lastMessageID
          lastAnnouncementID
          lastAnnouncementTime
          createdAt
          updatedAt
        }
        createdAt
        conversationUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          conversationID
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGroupRoomConversation = /* GraphQL */ `
  subscription OnCreateGroupRoomConversation {
    onCreateGroupRoomConversation {
      id
      name
      groupRoomID
      groupRoom {
        id
        name
        imageUri
        groupRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        announcements {
          nextToken
        }
        groupRoomConversations {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          groupRoomID
          updatedAt
        }
        lastAnnouncementID
        lastAnnouncement {
          id
          createdAt
          dueDate
          content
          title
          userID
          groupRoomID
          updatedAt
        }
        lastAnnouncementTime
        createdAt
        updatedAt
      }
      createdAt
      groupRoomConversationUsers {
        items {
          id
          userID
          groupRoomConversationID
          lastMessageReadTimeStamp
          allowAllNotifications
          allowSelectedNotifications
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          groupRoomConversationID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        replyToMessageID
        createdAt
        content
        image
        imageWidth
        imageHeight
        audio
        userID
        groupRoomConversationID
        user {
          id
          name
          imageUri
          status
          lastOnlineAt
          role
          expoPushToken
          createdAt
          updatedAt
        }
        groupRoomConversation {
          id
          name
          groupRoomID
          createdAt
          lastMessageID
          updatedAt
        }
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onUpdateGroupRoomConversation = /* GraphQL */ `
  subscription OnUpdateGroupRoomConversation {
    onUpdateGroupRoomConversation {
      id
      name
      groupRoomID
      groupRoom {
        id
        name
        imageUri
        groupRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        announcements {
          nextToken
        }
        groupRoomConversations {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          groupRoomID
          updatedAt
        }
        lastAnnouncementID
        lastAnnouncement {
          id
          createdAt
          dueDate
          content
          title
          userID
          groupRoomID
          updatedAt
        }
        lastAnnouncementTime
        createdAt
        updatedAt
      }
      createdAt
      groupRoomConversationUsers {
        items {
          id
          userID
          groupRoomConversationID
          lastMessageReadTimeStamp
          allowAllNotifications
          allowSelectedNotifications
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          groupRoomConversationID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        replyToMessageID
        createdAt
        content
        image
        imageWidth
        imageHeight
        audio
        userID
        groupRoomConversationID
        user {
          id
          name
          imageUri
          status
          lastOnlineAt
          role
          expoPushToken
          createdAt
          updatedAt
        }
        groupRoomConversation {
          id
          name
          groupRoomID
          createdAt
          lastMessageID
          updatedAt
        }
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onDeleteGroupRoomConversation = /* GraphQL */ `
  subscription OnDeleteGroupRoomConversation {
    onDeleteGroupRoomConversation {
      id
      name
      groupRoomID
      groupRoom {
        id
        name
        imageUri
        groupRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        announcements {
          nextToken
        }
        groupRoomConversations {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          groupRoomID
          updatedAt
        }
        lastAnnouncementID
        lastAnnouncement {
          id
          createdAt
          dueDate
          content
          title
          userID
          groupRoomID
          updatedAt
        }
        lastAnnouncementTime
        createdAt
        updatedAt
      }
      createdAt
      groupRoomConversationUsers {
        items {
          id
          userID
          groupRoomConversationID
          lastMessageReadTimeStamp
          allowAllNotifications
          allowSelectedNotifications
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          groupRoomConversationID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        replyToMessageID
        createdAt
        content
        image
        imageWidth
        imageHeight
        audio
        userID
        groupRoomConversationID
        user {
          id
          name
          imageUri
          status
          lastOnlineAt
          role
          expoPushToken
          createdAt
          updatedAt
        }
        groupRoomConversation {
          id
          name
          groupRoomID
          createdAt
          lastMessageID
          updatedAt
        }
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onCreateGroupRoomConversationMessage = /* GraphQL */ `
  subscription OnCreateGroupRoomConversationMessage {
    onCreateGroupRoomConversationMessage {
      id
      replyToMessageID
      createdAt
      content
      image
      imageWidth
      imageHeight
      audio
      userID
      groupRoomConversationID
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      groupRoomConversation {
        id
        name
        groupRoomID
        groupRoom {
          id
          name
          imageUri
          lastMessageID
          lastAnnouncementID
          lastAnnouncementTime
          createdAt
          updatedAt
        }
        createdAt
        groupRoomConversationUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          groupRoomConversationID
          updatedAt
        }
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onUpdateGroupRoomConversationMessage = /* GraphQL */ `
  subscription OnUpdateGroupRoomConversationMessage {
    onUpdateGroupRoomConversationMessage {
      id
      replyToMessageID
      createdAt
      content
      image
      imageWidth
      imageHeight
      audio
      userID
      groupRoomConversationID
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      groupRoomConversation {
        id
        name
        groupRoomID
        groupRoom {
          id
          name
          imageUri
          lastMessageID
          lastAnnouncementID
          lastAnnouncementTime
          createdAt
          updatedAt
        }
        createdAt
        groupRoomConversationUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          groupRoomConversationID
          updatedAt
        }
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onDeleteGroupRoomConversationMessage = /* GraphQL */ `
  subscription OnDeleteGroupRoomConversationMessage {
    onDeleteGroupRoomConversationMessage {
      id
      replyToMessageID
      createdAt
      content
      image
      imageWidth
      imageHeight
      audio
      userID
      groupRoomConversationID
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      groupRoomConversation {
        id
        name
        groupRoomID
        groupRoom {
          id
          name
          imageUri
          lastMessageID
          lastAnnouncementID
          lastAnnouncementTime
          createdAt
          updatedAt
        }
        createdAt
        groupRoomConversationUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          groupRoomConversationID
          updatedAt
        }
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onCreateGroupRoomConversationUser = /* GraphQL */ `
  subscription OnCreateGroupRoomConversationUser {
    onCreateGroupRoomConversationUser {
      id
      userID
      groupRoomConversationID
      lastMessageReadTimeStamp
      allowAllNotifications
      allowSelectedNotifications
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      groupRoomConversation {
        id
        name
        groupRoomID
        groupRoom {
          id
          name
          imageUri
          lastMessageID
          lastAnnouncementID
          lastAnnouncementTime
          createdAt
          updatedAt
        }
        createdAt
        groupRoomConversationUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          groupRoomConversationID
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGroupRoomConversationUser = /* GraphQL */ `
  subscription OnUpdateGroupRoomConversationUser {
    onUpdateGroupRoomConversationUser {
      id
      userID
      groupRoomConversationID
      lastMessageReadTimeStamp
      allowAllNotifications
      allowSelectedNotifications
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      groupRoomConversation {
        id
        name
        groupRoomID
        groupRoom {
          id
          name
          imageUri
          lastMessageID
          lastAnnouncementID
          lastAnnouncementTime
          createdAt
          updatedAt
        }
        createdAt
        groupRoomConversationUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          groupRoomConversationID
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGroupRoomConversationUser = /* GraphQL */ `
  subscription OnDeleteGroupRoomConversationUser {
    onDeleteGroupRoomConversationUser {
      id
      userID
      groupRoomConversationID
      lastMessageReadTimeStamp
      allowAllNotifications
      allowSelectedNotifications
      user {
        id
        name
        imageUri
        status
        lastOnlineAt
        role
        expoPushToken
        chatRoomUser {
          nextToken
        }
        conversationUser {
          nextToken
        }
        groupRoomUser {
          nextToken
        }
        groupRoomConversationUser {
          nextToken
        }
        privateRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      groupRoomConversation {
        id
        name
        groupRoomID
        groupRoom {
          id
          name
          imageUri
          lastMessageID
          lastAnnouncementID
          lastAnnouncementTime
          createdAt
          updatedAt
        }
        createdAt
        groupRoomConversationUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          replyToMessageID
          createdAt
          content
          image
          imageWidth
          imageHeight
          audio
          userID
          groupRoomConversationID
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
