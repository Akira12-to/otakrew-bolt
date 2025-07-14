import { RouteObject } from 'react-router-dom'
import { ForumHome } from '@/pages/forum/ForumHome'
import { ThreadList } from '@/pages/forum/ThreadList'
import { NewThreadForm } from '@/pages/forum/NewThreadForm'
import { ThreadDetail } from '@/pages/forum/ThreadDetail'
import { EditThreadForm } from '@/pages/forum/EditThreadForm'
import { ForumProfile } from '@/pages/forum/ForumProfile'

export const forumRoutes: RouteObject[] = [
  {
    path: 'forum',
    children: [
      {
        index: true,
        element: <ForumHome />
      },
      {
        path: ':categoryId',
        element: <ThreadList />
      },
      {
        path: ':categoryId/new',
        element: <NewThreadForm />
      },
      {
        path: ':categoryId/:threadId',
        element: <ThreadDetail />
      },
      {
        path: ':categoryId/:threadId/edit',
        element: <EditThreadForm />
      },
      {
        path: 'profile/:username',
        element: <ForumProfile />
      }
    ]
  }
]