import React, {useState, useEffect} from "react";
import {connect} from "react-redux";

import {
    editPostFunc,
    getPostFunc,
    getValueBodyFunc,
    getValueSearchFunc,
    getValueTitleFunc
} from "../../store/Reducer/PostReducer";
import ModalFunc from "../../Components/Modal/Modal";
import styled from "styled-components";

const Post = styled.div``
const Table = styled.table`
  width: 100%;
  font-family: sans-serif;
  color: ${(props) => props.theme.text};
  font-weight: 600;
`
const Text = styled.td`
  font-size: 13px;
  font-weight: 400;
  padding: 10px 10px;
  text-transform: revert;
`
const Tr = styled.tr`
  border-top: 2px solid #111;

  &:nth-child(odd) {
    background: ${(props) => props.theme.btn};
    color: ${(props) => props.theme.text};
  }

  &:nth-child(even) {
    background: ${(props) => props.theme.body};
  }
`
const Button = styled.button`
  width: 100%;
  height: 100%;
  padding: 50% 0;
  border: none;
  cursor: pointer;
  margin: 0;

`
const TdBtn = styled.td`
  width: 40px;
  height: 100%;

`
const Search = styled.input`
  width: 200px;
  height: 40px;
  border: none;
  outline: none;
  margin: 1rem 0;
  background: transparent;
  border-bottom: 2px solid ${(props) => props.theme.btn};
  padding: 0 1rem;
`
const Posts = ({
                   post, valueSearch, nameValue,bodyValue,
                   getPostFunc, getValueTitleFunc, getValueSearchFunc, getValueBodyFunc,
                   editPostFunc
               }) => {

    const [modal, setModal] = useState(false);
    const [ current, setCurrent ] = useState({})

    useEffect(() => {
        getPostFunc()
    }, [])

    const toggle = () => {
        setModal(p => !p)
    }

    const HandleButton = () => {
        editPostFunc({
            ...current,
            id:current.id,
            title:nameValue,
            body:bodyValue
        })
        toggle()
    }

    function handleEdit(item){
        setCurrent(item)
        getValueTitleFunc(item.title)
        getValueBodyFunc(item.body)

        toggle()
    }

    return (
        <Post>
            <Search type="search" placeholder={'Search'}
                    onChange={(e) => getValueSearchFunc(e)} value={valueSearch}/>
            <Table>
                <thead>
                <tr>
                    <th>{post.length}</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>
                {
                    // eslint-disable-next-line array-callback-return
                    post.filter(item => {
                        if (valueSearch === '') {
                            return item
                        } else if (item.title.includes(valueSearch)) {
                            return item
                        } else if (item.body.includes(valueSearch)) {
                            return item
                        }
                    }).map((item, index) => <Tr key={index}>
                        <Text>{item.id}</Text>
                        <Text>{item.title}</Text>
                        <Text>{item.body}</Text>
                        <TdBtn>
                            <Button onClick={() => handleEdit(item)}>Edit</Button>
                        </TdBtn>
                    </Tr>)
                }
                </tbody>
            </Table>
            <ModalFunc bool={modal} toggle={toggle}
                       nameValue={nameValue}
                       bodyValue={bodyValue}
                       setBody={getValueBodyFunc}
                       setName={getValueTitleFunc}
                       save={HandleButton}
            />
        </Post>
    )
}
export default connect(({post:{post, nameValue, valueSearch,bodyValue}})=>({
    post, nameValue, valueSearch,bodyValue
}), {
    getPostFunc, getValueTitleFunc,
    getValueSearchFunc, getValueBodyFunc,
    editPostFunc
})(Posts)








