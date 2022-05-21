import React,{useState,useEffect} from "react";
import {NavLink, useParams} from 'react-router-dom'
import styled from "styled-components";
import {connect} from "react-redux";
import {getComments} from "../../store/Reducer/CommentReducer";

const Field = styled.div`
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
`
const Case = styled.div`
  width: 450px;
  height: auto;
  padding: 2rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.btn};
`
const Card = styled.div`

`
const Header = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 23px;
`
const Body = styled.div`
  
`
const Inf = styled.div`
    display: flex;
  margin: 1rem 0;
`
const Text = styled.div`
    margin: 0 0 0 1rem;
`
const Back = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 20px;
  border-radius: 10px;
  background: ${(props => props.theme.body)};
  margin-top: 1.6rem;
  text-decoration: none;
  color: ${(props) => props.theme.text};
`
const CommentMore = ({comments,getComments}) => {
    
    useEffect(() => {
        getComments()
    },[getComments])

    const match = useParams()

    return(
        <Field>
            <Case>
                {
                    comments.filter( item => item.id == match.id )
                        .map((item,index) => (
                            <Card key={index}>
                                <Header>About {item.id}nth comment</Header>
                                <Body>
                                    <Inf>From: <Text>{item.name}</Text></Inf>
                                    <Inf>PostId:  <Text>{item.postId}</Text></Inf>
                                    <Inf>Email:  <Text>{item.email}</Text></Inf>
                                    <Inf>Body:  <Text>{item.body}</Text></Inf>

                                </Body>
                                <Back to={'/comments'}>
                                    Back
                                </Back>
                            </Card>
                        ) )
                }
            </Case>
        </Field>
    )
}
export default connect(({
                            comments: {comments}}) =>
        ({comments}),
    {
        getComments
    })(CommentMore)