export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      imageUri
      status
      role
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          lastMessageReadTimeStamp
          lastAnnouncementReadTimeStamp
          allowAllNotifications
          allowSelectedNotifications
          updatedAt
          chatRoom {
            name
            imageUri
            id
            chatRoomUsers {
              items {
                user {
                    id
                    name
                    imageUri
                    status
                    role
                    expoPushToken
                }
                id
                lastMessageReadTimeStamp
                lastAnnouncementReadTimeStamp
                allowAllNotifications
                allowSelectedNotifications
                userID
              }
            }
            messages {
              items {
                id
                content
                createdAt
              }
            }
            announcements {
              items {
                id
                content
                createdAt
                updatedAt
              }
            }
            lastMessage {
              id
              content
              updatedAt
              user {
                id
                name
              }
            }
            lastAnnouncement {
              id
              content
              updatedAt
              user {
                id
                name
              }
            }
          }
        }
        nextToken
      }
      groupRoomUser {
        items {
          id
          userID
          lastMessageReadTimeStamp
          groupRoomID
          createdAt
          updatedAt
          groupRoom {
            name
            imageUri
            id
            groupRoomUsers {
              items {
                user {
                    id
                    name
                    imageUri
                    status
                    role
                }
              }
            }
            lastMessage {
              id
              content
              updatedAt
              user {
                id
                name
              }
            }
          }
        }
        nextToken
      }
      privateRoomUser {
        items {
          id
          userID
          lastMessageReadTimeStamp
          privateRoomID
          createdAt
          updatedAt
          privateRoom {
            id
            privateRoomUsers {
              items {
                user {
                    id
                    name
                    imageUri
                    status
                    role
                }
              }
            }
            lastMessage {
              id
              content
              updatedAt
              user {
                id
                name
              }
            }
          }
        }
        nextToken
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
        chatRoomID
        user {
          id
          name
          status
          
        }
        
      }
      
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
          createdAt
          lastMessageReadTimeStamp
          lastAnnouncementReadTimeStamp
          allowAllNotifications
          allowSelectedNotifications
          updatedAt
          user {
            id
            name
            imageUri
            role
            expoPushToken
          }
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
          audio
          userID
          chatRoomID
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
          createdAt
          updatedAt
        }
        updatedAt
      }
      lastAnnouncementID
      lastAnnouncementTime
      lastAnnouncement {
        id
        createdAt
        content
        userID
        chatRoomID
        updatedAt
      }
      createdAt
      updatedAt
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
          lastMessageReadTimeStamp
          groupRoomID
          createdAt
          updatedAt
          user {
            id
            name
            imageUri
            role
            expoPushToken
          }
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
          audio
          userID
          groupRoomID
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

export const getPrivateRoom = /* GraphQL */ `
  query GetPrivateRoom($id: ID!) {
    getPrivateRoom(id: $id) {
      id
      privateRoomUsers {
        items {
          id
          userID
          lastMessageReadTimeStamp
          privateRoomID
          createdAt
          updatedAt
          user {
            id
            name
            imageUri
            role
            expoPushToken
          }
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