/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createChatRoomUser = /* GraphQL */ `
  mutation CreateChatRoomUser(
    $input: CreateChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    createChatRoomUser(input: $input, condition: $condition) {
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
export const updateChatRoomUser = /* GraphQL */ `
  mutation UpdateChatRoomUser(
    $input: UpdateChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    updateChatRoomUser(input: $input, condition: $condition) {
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
export const deleteChatRoomUser = /* GraphQL */ `
  mutation DeleteChatRoomUser(
    $input: DeleteChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    deleteChatRoomUser(input: $input, condition: $condition) {
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
export const createGroupRoomUser = /* GraphQL */ `
  mutation CreateGroupRoomUser(
    $input: CreateGroupRoomUserInput!
    $condition: ModelGroupRoomUserConditionInput
  ) {
    createGroupRoomUser(input: $input, condition: $condition) {
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
export const updateGroupRoomUser = /* GraphQL */ `
  mutation UpdateGroupRoomUser(
    $input: UpdateGroupRoomUserInput!
    $condition: ModelGroupRoomUserConditionInput
  ) {
    updateGroupRoomUser(input: $input, condition: $condition) {
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
export const deleteGroupRoomUser = /* GraphQL */ `
  mutation DeleteGroupRoomUser(
    $input: DeleteGroupRoomUserInput!
    $condition: ModelGroupRoomUserConditionInput
  ) {
    deleteGroupRoomUser(input: $input, condition: $condition) {
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
export const createPrivateRoomUser = /* GraphQL */ `
  mutation CreatePrivateRoomUser(
    $input: CreatePrivateRoomUserInput!
    $condition: ModelPrivateRoomUserConditionInput
  ) {
    createPrivateRoomUser(input: $input, condition: $condition) {
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
export const updatePrivateRoomUser = /* GraphQL */ `
  mutation UpdatePrivateRoomUser(
    $input: UpdatePrivateRoomUserInput!
    $condition: ModelPrivateRoomUserConditionInput
  ) {
    updatePrivateRoomUser(input: $input, condition: $condition) {
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
export const deletePrivateRoomUser = /* GraphQL */ `
  mutation DeletePrivateRoomUser(
    $input: DeletePrivateRoomUserInput!
    $condition: ModelPrivateRoomUserConditionInput
  ) {
    deletePrivateRoomUser(input: $input, condition: $condition) {
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
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
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
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
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
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
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
export const createGroupRoom = /* GraphQL */ `
  mutation CreateGroupRoom(
    $input: CreateGroupRoomInput!
    $condition: ModelGroupRoomConditionInput
  ) {
    createGroupRoom(input: $input, condition: $condition) {
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
export const updateGroupRoom = /* GraphQL */ `
  mutation UpdateGroupRoom(
    $input: UpdateGroupRoomInput!
    $condition: ModelGroupRoomConditionInput
  ) {
    updateGroupRoom(input: $input, condition: $condition) {
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
export const deleteGroupRoom = /* GraphQL */ `
  mutation DeleteGroupRoom(
    $input: DeleteGroupRoomInput!
    $condition: ModelGroupRoomConditionInput
  ) {
    deleteGroupRoom(input: $input, condition: $condition) {
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
export const createPrivateRoom = /* GraphQL */ `
  mutation CreatePrivateRoom(
    $input: CreatePrivateRoomInput!
    $condition: ModelPrivateRoomConditionInput
  ) {
    createPrivateRoom(input: $input, condition: $condition) {
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
export const updatePrivateRoom = /* GraphQL */ `
  mutation UpdatePrivateRoom(
    $input: UpdatePrivateRoomInput!
    $condition: ModelPrivateRoomConditionInput
  ) {
    updatePrivateRoom(input: $input, condition: $condition) {
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
export const deletePrivateRoom = /* GraphQL */ `
  mutation DeletePrivateRoom(
    $input: DeletePrivateRoomInput!
    $condition: ModelPrivateRoomConditionInput
  ) {
    deletePrivateRoom(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createGroupRoomMessage = /* GraphQL */ `
  mutation CreateGroupRoomMessage(
    $input: CreateGroupRoomMessageInput!
    $condition: ModelGroupRoomMessageConditionInput
  ) {
    createGroupRoomMessage(input: $input, condition: $condition) {
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
export const updateGroupRoomMessage = /* GraphQL */ `
  mutation UpdateGroupRoomMessage(
    $input: UpdateGroupRoomMessageInput!
    $condition: ModelGroupRoomMessageConditionInput
  ) {
    updateGroupRoomMessage(input: $input, condition: $condition) {
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
export const deleteGroupRoomMessage = /* GraphQL */ `
  mutation DeleteGroupRoomMessage(
    $input: DeleteGroupRoomMessageInput!
    $condition: ModelGroupRoomMessageConditionInput
  ) {
    deleteGroupRoomMessage(input: $input, condition: $condition) {
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
export const createPrivateRoomMessage = /* GraphQL */ `
  mutation CreatePrivateRoomMessage(
    $input: CreatePrivateRoomMessageInput!
    $condition: ModelPrivateRoomMessageConditionInput
  ) {
    createPrivateRoomMessage(input: $input, condition: $condition) {
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
export const updatePrivateRoomMessage = /* GraphQL */ `
  mutation UpdatePrivateRoomMessage(
    $input: UpdatePrivateRoomMessageInput!
    $condition: ModelPrivateRoomMessageConditionInput
  ) {
    updatePrivateRoomMessage(input: $input, condition: $condition) {
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
export const deletePrivateRoomMessage = /* GraphQL */ `
  mutation DeletePrivateRoomMessage(
    $input: DeletePrivateRoomMessageInput!
    $condition: ModelPrivateRoomMessageConditionInput
  ) {
    deletePrivateRoomMessage(input: $input, condition: $condition) {
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
export const createAnnouncement = /* GraphQL */ `
  mutation CreateAnnouncement(
    $input: CreateAnnouncementInput!
    $condition: ModelAnnouncementConditionInput
  ) {
    createAnnouncement(input: $input, condition: $condition) {
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
export const updateAnnouncement = /* GraphQL */ `
  mutation UpdateAnnouncement(
    $input: UpdateAnnouncementInput!
    $condition: ModelAnnouncementConditionInput
  ) {
    updateAnnouncement(input: $input, condition: $condition) {
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
export const deleteAnnouncement = /* GraphQL */ `
  mutation DeleteAnnouncement(
    $input: DeleteAnnouncementInput!
    $condition: ModelAnnouncementConditionInput
  ) {
    deleteAnnouncement(input: $input, condition: $condition) {
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
export const createGroupAnnouncement = /* GraphQL */ `
  mutation CreateGroupAnnouncement(
    $input: CreateGroupAnnouncementInput!
    $condition: ModelGroupAnnouncementConditionInput
  ) {
    createGroupAnnouncement(input: $input, condition: $condition) {
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
export const updateGroupAnnouncement = /* GraphQL */ `
  mutation UpdateGroupAnnouncement(
    $input: UpdateGroupAnnouncementInput!
    $condition: ModelGroupAnnouncementConditionInput
  ) {
    updateGroupAnnouncement(input: $input, condition: $condition) {
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
export const deleteGroupAnnouncement = /* GraphQL */ `
  mutation DeleteGroupAnnouncement(
    $input: DeleteGroupAnnouncementInput!
    $condition: ModelGroupAnnouncementConditionInput
  ) {
    deleteGroupAnnouncement(input: $input, condition: $condition) {
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
export const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
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
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation(
    $input: UpdateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    updateConversation(input: $input, condition: $condition) {
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
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation(
    $input: DeleteConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    deleteConversation(input: $input, condition: $condition) {
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
export const createConversationMessage = /* GraphQL */ `
  mutation CreateConversationMessage(
    $input: CreateConversationMessageInput!
    $condition: ModelConversationMessageConditionInput
  ) {
    createConversationMessage(input: $input, condition: $condition) {
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
export const updateConversationMessage = /* GraphQL */ `
  mutation UpdateConversationMessage(
    $input: UpdateConversationMessageInput!
    $condition: ModelConversationMessageConditionInput
  ) {
    updateConversationMessage(input: $input, condition: $condition) {
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
export const deleteConversationMessage = /* GraphQL */ `
  mutation DeleteConversationMessage(
    $input: DeleteConversationMessageInput!
    $condition: ModelConversationMessageConditionInput
  ) {
    deleteConversationMessage(input: $input, condition: $condition) {
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
export const createConversationUser = /* GraphQL */ `
  mutation CreateConversationUser(
    $input: CreateConversationUserInput!
    $condition: ModelConversationUserConditionInput
  ) {
    createConversationUser(input: $input, condition: $condition) {
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
export const updateConversationUser = /* GraphQL */ `
  mutation UpdateConversationUser(
    $input: UpdateConversationUserInput!
    $condition: ModelConversationUserConditionInput
  ) {
    updateConversationUser(input: $input, condition: $condition) {
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
export const deleteConversationUser = /* GraphQL */ `
  mutation DeleteConversationUser(
    $input: DeleteConversationUserInput!
    $condition: ModelConversationUserConditionInput
  ) {
    deleteConversationUser(input: $input, condition: $condition) {
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
export const createGroupRoomConversation = /* GraphQL */ `
  mutation CreateGroupRoomConversation(
    $input: CreateGroupRoomConversationInput!
    $condition: ModelGroupRoomConversationConditionInput
  ) {
    createGroupRoomConversation(input: $input, condition: $condition) {
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
export const updateGroupRoomConversation = /* GraphQL */ `
  mutation UpdateGroupRoomConversation(
    $input: UpdateGroupRoomConversationInput!
    $condition: ModelGroupRoomConversationConditionInput
  ) {
    updateGroupRoomConversation(input: $input, condition: $condition) {
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
export const deleteGroupRoomConversation = /* GraphQL */ `
  mutation DeleteGroupRoomConversation(
    $input: DeleteGroupRoomConversationInput!
    $condition: ModelGroupRoomConversationConditionInput
  ) {
    deleteGroupRoomConversation(input: $input, condition: $condition) {
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
export const createGroupRoomConversationMessage = /* GraphQL */ `
  mutation CreateGroupRoomConversationMessage(
    $input: CreateGroupRoomConversationMessageInput!
    $condition: ModelGroupRoomConversationMessageConditionInput
  ) {
    createGroupRoomConversationMessage(input: $input, condition: $condition) {
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
export const updateGroupRoomConversationMessage = /* GraphQL */ `
  mutation UpdateGroupRoomConversationMessage(
    $input: UpdateGroupRoomConversationMessageInput!
    $condition: ModelGroupRoomConversationMessageConditionInput
  ) {
    updateGroupRoomConversationMessage(input: $input, condition: $condition) {
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
export const deleteGroupRoomConversationMessage = /* GraphQL */ `
  mutation DeleteGroupRoomConversationMessage(
    $input: DeleteGroupRoomConversationMessageInput!
    $condition: ModelGroupRoomConversationMessageConditionInput
  ) {
    deleteGroupRoomConversationMessage(input: $input, condition: $condition) {
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
export const createGroupRoomConversationUser = /* GraphQL */ `
  mutation CreateGroupRoomConversationUser(
    $input: CreateGroupRoomConversationUserInput!
    $condition: ModelGroupRoomConversationUserConditionInput
  ) {
    createGroupRoomConversationUser(input: $input, condition: $condition) {
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
export const updateGroupRoomConversationUser = /* GraphQL */ `
  mutation UpdateGroupRoomConversationUser(
    $input: UpdateGroupRoomConversationUserInput!
    $condition: ModelGroupRoomConversationUserConditionInput
  ) {
    updateGroupRoomConversationUser(input: $input, condition: $condition) {
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
export const deleteGroupRoomConversationUser = /* GraphQL */ `
  mutation DeleteGroupRoomConversationUser(
    $input: DeleteGroupRoomConversationUserInput!
    $condition: ModelGroupRoomConversationUserConditionInput
  ) {
    deleteGroupRoomConversationUser(input: $input, condition: $condition) {
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
