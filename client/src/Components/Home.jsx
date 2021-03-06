import React  from 'react'
import { useQuery } from '@apollo/client';
import styled from 'styled-components'
import {GET_POSTS} from "../Utils/utils"
import Post from "./Post"
import Nav from "./Nav"

import ChatWindow from "./ChatWindow"

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;`

export default function Home () {
  
  const { loading, error, data } = useQuery(GET_POSTS)
    if (loading) return <p>Loading....</p>
    if (error) return <p>Error : {error.message}</p>
    return (
      <>
      <Nav/>
      
      <Center>
        {
          JSON.parse(data.post.allPosts)
            .map((ele,i)=> <Post key={i} value={ele}/> )
        } 
      </Center>
      
      <ChatWindow/>
      </>
    )
}
