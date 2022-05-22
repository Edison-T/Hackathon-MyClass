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
            conversations {
              items {
                name
                id
                chatRoomID
                createdAt
                chatRoom {
                  name
                  imageUri
                  id
                }
                conversationUsers {
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
          }
        }
        nextToken
      } ##########################################
      conversationUser {
        items {
          id
          userID
          conversationID
          createdAt
          lastMessageReadTimeStamp
          allowAllNotifications
          allowSelectedNotifications
          updatedAt
          conversation {
            name
            id
            chatRoomID
            conversationUsers {
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
            lastMessage {
              id
              content
              updatedAt
              createdAt
              user {
                id
                name
              }
            }
          }
        }
        nextToken
      } ####################################
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
      } ################################
      groupRoomConversationUser {
        items {
          id
          userID
          groupRoomConversationID
          createdAt
          lastMessageReadTimeStamp
          allowAllNotifications
          allowSelectedNotifications
          updatedAt
          groupRoomConversation {
            name
            id
            groupRoomID
            groupRoomConversationUsers {
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
            lastMessage {
              id
              content
              updatedAt
              createdAt
              user {
                id
                name
              }
            }
          }
        }
        nextToken
      } ########################################
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
                  expoPushToken
                }
                id
                lastMessageReadTimeStamp
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
          allowAllConversationNotifications
          allowSelectedConversationNotifications
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
      conversations {
        items {
          id
          name
          chatRoomID
          createdAt
          lastMessageID
          updatedAt
          chatRoom {
            id
            name
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
                allowSelectedConversationNotifications
                allowAllConversationNotifications
                updatedAt
                user {
                  id
                  name
                  imageUri
                  role
                  expoPushToken
                }
              }
            }
          }
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
          createdAt
          lastMessageReadTimeStamp
          lastAnnouncementReadTimeStamp
          allowAllNotifications
          allowSelectedNotifications
          allowAllConversationNotifications
          allowSelectedConversationNotifications
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
          groupRoom {
            id
            name
            groupRoomUsers {
              items {
                id
                userID
                groupRoomID
                createdAt
                lastMessageReadTimeStamp
                lastAnnouncementReadTimeStamp
                allowAllNotifications
                allowSelectedNotifications
                allowSelectedConversationNotifications
                allowAllConversationNotifications
                updatedAt
                user {
                  id
                  name
                  imageUri
                  role
                  expoPushToken
                }
              }
            }
          }
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
        groupRoomID
        updatedAt
      }
      createdAt
      updatedAt
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