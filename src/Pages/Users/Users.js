import React,{useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import {connect} from "react-redux";
import {getUser} from "../../store/Reducer/UserReducer";
import styled from 'styled-components'

const Table = styled.table`
  width: 100%;
  height: 100vh;
  font-family: sans-serif;
`
const Td = styled.td`
  font-weight: bold;
`
const HeadTr = styled.tr`
  margin-top: 2rem;
`
const Button = styled.button`
  border: none;
  width: 90px;
  height: 30px;
  cursor: pointer;
`

const Users = ({getUser,users}) => {
    useEffect(()=>{
        getUser()
    },[getUser])

    const navigate = useNavigate()

    const openOnePost = (item) =>  navigate('/users/'+item.id)

    return(
        <Table>
            <thead>
            <HeadTr>
                <Td>{users.users.length}</Td>
                <Td>Name</Td>
                <Td>Email</Td>
                <Td>Phone</Td>
                <Td>More</Td>
            </HeadTr>
            </thead>
            <tbody>
            {
                users.users.map((item,index) => <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                        <Button onClick={()=>openOnePost(item)}>More</Button>
                    </td>
                </tr>)
            }
            </tbody>
        </Table>
    )
}
export default connect(({users:users}) => ({users}),
    {getUser})(Users)