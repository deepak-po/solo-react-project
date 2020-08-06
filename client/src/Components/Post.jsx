import React, { Component, useRef, useState } from 'react'
import { useMutation, useLazyQuery, useQuery, gql, ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import styled from 'styled-components'
import {GET_POSTS, ADD_COMMENT, loginCompleted} from "../utils"

const MyDiv = styled.div`
  font-size: 11px;   
  color: rgb(38,38,38);
  width: 555px;  
  border:solid grey 1px;  
  background-color: rgb(243,243,243);
  outline-width: 0;`

export default function Post (props) {

  const [comments, setComments] = useState(props.value.Comments)
  const [comment, setComment] = useState(null)
  const [addComment, { data }] = useMutation(ADD_COMMENT)

    return (  
      <MyDiv>                                                     
        <img src={ props.value.photoPath} style={{width: "550px", padding:"1px 1px"}} />
        <p> { `${props.value.user.userName}: ${props.value.caption}`} </p>
        <p> { comments[0] ? "Comments:":null} </p>
        <p> { comments[0] ?
          comments.map( comments => <p> {`${ comments.User.userName }:${ comments.comment }`} </p>)                
        : null } </p>
        <input onChange={ e => setComment( e.target.value ) } type="text" placeholder="comment" style={{width: "400px"}}/>
        <input type="button" value="Comment" onClick={ () => {           
            addComment({ variables: {postId:props.value.id, comment:comment}})
            setComments( [ ...comments, {User: {userName:"deepak"} , comment:comment } ] )

          }}         
          style={{width: "100px"}} />                                                                 
      </MyDiv>
    )
}