import { Header } from './components/Header'
import {Post} from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

const post = [{
  id: 1,
  author: {
    avatarUrl: 'http://github.com/joaowictorzanin.png',
    name: 'João Zanin',
    role: 'Full Stack Developer'
  },
  content: [
    {type: 'paragraph', content: 'Fala galeraa 👋'},
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type: 'link', content: 'jane.design/doctorcare'}
  ],
  publishedAt: new Date('2022-06-10 12:00:00')
},
{
  id: 2,
  author: {
    avatarUrl: 'http://github.com/joaowictorzanin.png',
    name: 'João Zanin',
    role: 'Full Stack Developer'
  },
  content: [
    {type: 'paragraph', content: 'Fala galeraa 👋'},
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type: 'link', content: 'jane.design/doctorcare'}
  ],
  publishedAt: new Date('2022-06-10 12:00:00')
},
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            post.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}

