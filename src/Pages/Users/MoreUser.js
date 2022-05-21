import {NavLink, useParams} from 'react-router-dom'
import {connect} from "react-redux";
import React, {useEffect, useState} from "react";
import {getUser} from "../../store/Reducer/UserReducer";
import styled from "styled-components";

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
  text-transform: uppercase;
  font-weight: 500;
  font-size: 23px;
  margin: 0 0 2rem 0;
`
const Body = styled.div`

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
const Inf = styled.div`
  display: flex;
  margin-top: 1rem;
  color: ${(props) => props.theme.text};

`
const Text = styled.div`
  text-transform: uppercase;
  font-weight: 550;
  margin: 0 1rem 0 0;
  color: ${(props) => props.theme.text};
`
const Contact = styled.a`
  text-decoration: none;
`
const Email = styled(NavLink)`
  text-decoration: none;
`
const MoreUser = ({getUser, users}) => {
    useEffect(() => {
        getUser()
    }, [getUser])
    const match = useParams()
    return (
        <Field>
            {
                users.users.filter(item => item.id == match.id)
                    .map((item, index) => (
                            <Field key={index}>
                                <Case>
                                    <Card>
                                        <Header>ABOUT {item.id}nth user</Header>
                                        <Body>
                                            <Inf><Text>NAME:</Text>{item.name}</Inf>
                                            <Inf><Text>UserName:</Text>{item.username}</Inf>
                                            <Inf><Text>Email:</Text><Email
                                                to={{pathname: `${item.email}`}}>{item.email}</Email></Inf>
                                            <Inf><Text>Street:</Text>{item.address.street}</Inf>
                                            <Inf><Text>Suite:</Text>{item.address.suite}</Inf>
                                            <Inf><Text>City:</Text>{item.address.city}</Inf>
                                            <Inf><Text>ZipCode:</Text>{item.address.zipcode}</Inf>
                                            <Inf><Text>GEO-Lat:</Text>{item.address.geo.lat}</Inf>
                                            <Inf><Text>UserName:</Text>{item.address.geo.lng}</Inf>
                                            <Inf><Text>Phone:</Text><Contact
                                                href={`tel:${item.phone}`}>{item.phone}</Contact></Inf>
                                            <Inf><Text>Website:</Text><Contact
                                                href={`http://${item.website}/`}>{item.website}</Contact></Inf>
                                            <Inf><Text>Company-Name:</Text>{item.company.name}</Inf>
                                            <Inf><Text>CompanyCatchPhrase:</Text>{item.company.catchPhrase}</Inf>
                                            <Inf><Text>Company-Bs:</Text>{item.company.bs}</Inf>
                                        </Body>
                                        <Back to={'/users'}>
                                            {'BACK'}
                                        </Back>
                                    </Card>
                                </Case>
                            </Field>
                        )
                    )
            }
        </Field>
    )
}
export default connect(({users}) => ({users}),
    {getUser})(MoreUser)
