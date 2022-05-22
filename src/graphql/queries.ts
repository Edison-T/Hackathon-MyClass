/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getChatRoomUser = /* GraphQL */ `
  query GetChatRoomUser($id: ID!) {
    getChatRoomUser(id: $id) {
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
export const listChatRoomUsers = /* GraphQL */ `
  query ListChatRoomUsers(
    $filter: ModelChatRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRoomUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGroupRoomUser = /* GraphQL */ `
  query GetGroupRoomUser($id: ID!) {
    getGroupRoomUser(id: $id) {
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
export const listGroupRoomUsers = /* GraphQL */ `
  query ListGroupRoomUsers(
    $filter: ModelGroupRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupRoomUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPrivateRoomUser = /* GraphQL */ `
  query GetPrivateRoomUser($id: ID!) {
    getPrivateRoomUser(id: $id) {
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
export const listPrivateRoomUsers = /* GraphQL */ `
  query ListPrivateRoomUsers(
    $filter: ModelPrivateRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivateRoomUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
        }
        privateRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: String!) {
    getChatRoom(id: $id) {
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
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $id: String
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listChatRooms(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getGroupRoom = /* GraphQL */ `
  query GetGroupRoom($id: String!) {
    getGroupRoom(id: $id) {
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
export const listGroupRooms = /* GraphQL */ `
  query ListGroupRooms(
    $id: String
    $filter: ModelGroupRoomFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listGroupRooms(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPrivateRoom = /* GraphQL */ `
  query GetPrivateRoom($id: ID!) {
    getPrivateRoom(id: $id) {
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
export const listPrivateRooms = /* GraphQL */ `
  query ListPrivateRooms(
    $filter: ModelPrivateRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivateRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getGroupRoomMessage = /* GraphQL */ `
  query GetGroupRoomMessage($id: ID!) {
    getGroupRoomMessage(id: $id) {
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
export const listGroupRoomMessages = /* GraphQL */ `
  query ListGroupRoomMessages(
    $filter: ModelGroupRoomMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupRoomMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const getPrivateRoomMessage = /* GraphQL */ `
  query GetPrivateRoomMessage($id: ID!) {
    getPrivateRoomMessage(id: $id) {
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
export const listPrivateRoomMessages = /* GraphQL */ `
  query ListPrivateRoomMessages(
    $filter: ModelPrivateRoomMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivateRoomMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const getAnnouncement = /* GraphQL */ `
  query GetAnnouncement($id: ID!) {
    getAnnouncement(id: $id) {
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
export const listAnnouncements = /* GraphQL */ `
  query ListAnnouncements(
    $filter: ModelAnnouncementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnnouncements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getGroupAnnouncement = /* GraphQL */ `
  query GetGroupAnnouncement($id: ID!) {
    getGroupAnnouncement(id: $id) {
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
export const listGroupAnnouncements = /* GraphQL */ `
  query ListGroupAnnouncements(
    $filter: ModelGroupAnnouncementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupAnnouncements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getConversation = /* GraphQL */ `
  query GetConversation($id: ID!) {
    getConversation(id: $id) {
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
export const listConversations = /* GraphQL */ `
  query ListConversations(
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getConversationMessage = /* GraphQL */ `
  query GetConversationMessage($id: ID!) {
    getConversationMessage(id: $id) {
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
export const listConversationMessages = /* GraphQL */ `
  query ListConversationMessages(
    $filter: ModelConversationMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversationMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const getConversationUser = /* GraphQL */ `
  query GetConversationUser($id: ID!) {
    getConversationUser(id: $id) {
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
export const listConversationUsers = /* GraphQL */ `
  query ListConversationUsers(
    $filter: ModelConversationUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversationUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGroupRoomConversation = /* GraphQL */ `
  query GetGroupRoomConversation($id: ID!) {
    getGroupRoomConversation(id: $id) {
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
export const listGroupRoomConversations = /* GraphQL */ `
  query ListGroupRoomConversations(
    $filter: ModelGroupRoomConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupRoomConversations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getGroupRoomConversationMessage = /* GraphQL */ `
  query GetGroupRoomConversationMessage($id: ID!) {
    getGroupRoomConversationMessage(id: $id) {
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
export const listGroupRoomConversationMessages = /* GraphQL */ `
  query ListGroupRoomConversationMessages(
    $filter: ModelGroupRoomConversationMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupRoomConversationMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const getGroupRoomConversationUser = /* GraphQL */ `
  query GetGroupRoomConversationUser($id: ID!) {
    getGroupRoomConversationUser(id: $id) {
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
export const listGroupRoomConversationUsers = /* GraphQL */ `
  query ListGroupRoomConversationUsers(
    $filter: ModelGroupRoomConversationUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupRoomConversationUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const messagesByChatRoom = /* GraphQL */ `
  query MessagesByChatRoom(
    $chatRoomID: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChatRoom(
      chatRoomID: $chatRoomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const messagesByGroupRoom = /* GraphQL */ `
  query MessagesByGroupRoom(
    $groupRoomID: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGroupRoomMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByGroupRoom(
      groupRoomID: $groupRoomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const messagesByPrivateRoom = /* GraphQL */ `
  query MessagesByPrivateRoom(
    $privateRoomID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPrivateRoomMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByPrivateRoom(
      privateRoomID: $privateRoomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const announcementsByChatRoom = /* GraphQL */ `
  query AnnouncementsByChatRoom(
    $chatRoomID: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAnnouncementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    announcementsByChatRoom(
      chatRoomID: $chatRoomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const announcementsByGroupRoom = /* GraphQL */ `
  query AnnouncementsByGroupRoom(
    $groupRoomID: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGroupAnnouncementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    announcementsByGroupRoom(
      groupRoomID: $groupRoomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const conversationsByChatRoom = /* GraphQL */ `
  query ConversationsByChatRoom(
    $chatRoomID: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    conversationsByChatRoom(
      chatRoomID: $chatRoomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const messagesByConversation = /* GraphQL */ `
  query MessagesByConversation(
    $conversationID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelConversationMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByConversation(
      conversationID: $conversationID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const conversationsByGroupRoom = /* GraphQL */ `
  query ConversationsByGroupRoom(
    $groupRoomID: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGroupRoomConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    conversationsByGroupRoom(
      groupRoomID: $groupRoomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const messagesByGroupRoomConversation = /* GraphQL */ `
  query MessagesByGroupRoomConversation(
    $groupRoomConversationID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGroupRoomConversationMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByGroupRoomConversation(
      groupRoomConversationID: $groupRoomConversationID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
