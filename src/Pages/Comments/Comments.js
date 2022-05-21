import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {editCardFunc, getBodyValueFunc, getComments, getNameValueFunc} from '../../store/Reducer/CommentReducer'
import {MediaQueries} from "../../Components/Styled-Components/Themes";
import ModalComment from "../../Components/Modal/ModalComment";
import styled from "styled-components";

const Flex = styled.div`
  width: 100%;
  height: auto;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Block = styled.div`
 display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(3, 1fr);
  ${
          MediaQueries(992)`
        grid-template-columns: repeat(2,1fr);`
  }
  ${
          MediaQueries(768)`
        grid-template-columns: repeat(1,1fr);`
  }
`
const Box = styled.div`
  width: 250px;
  margin: 2rem 0;
  height: auto;
  border: 1px solid ${(props) => props.theme.btn};
`
const Header = styled.div`
  height: 50px;
  padding: 1rem;
  display: flex;
  background: ${(props) => props.theme.btn};
`
const Id = styled.div`
  display: flex;
  align-items: center;
`
const Name = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  font-size: 14px;

`
const Body = styled.div`
  width: 100%;
  height: 150px;
  padding: 0 4px;
  display: flex;
  align-items: center;
  font-size: 16px;
`
const Event = styled.div`
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
`
const Button = styled.div`
  width: 50%;
  height: 30px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-right: 2px solid ${(props) => props.theme.body} ;
  cursor: pointer;
`
const Comments = ({
                      comments,nameCard, bodyCard,
                      getComments,getBodyValueFunc,
                      getNameValueFunc,editCardFunc}) => {

    const [ modal, setModal ] = useState(false);
    const [ current, setCurrent ] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        getComments()
    }, [getComments])

    const toggle = () => setModal( p => !p );

    const MoreComment = (item) => navigate('/comments/'+item.id)


    function handleEdit(item){
        setCurrent(item)
        getNameValueFunc(item.name)
        getBodyValueFunc(item.body)
        toggle()
    }

    const onSave = () => {
        editCardFunc({
            ...current,
            id:current.id,
            name:nameCard,
            body:bodyCard
        })

        toggle()
    }

    return (
        <Flex>
            <Block>
                {
                    comments.map((item,index) => <Box key={index}>
                        <Header>
                            <Id>{item.id}</Id>
                            <Name>{item.name}</Name>
                        </Header>
                        <Body>{item.body}</Body>
                        <Event>
                            <Button onClick={()=>MoreComment(item)}>More</Button>
                            <Button onClick={()=>handleEdit(item)}>Edit</Button>
                        </Event>
                    </Box>)
                }
            </Block>
            <ModalComment bool={modal} name={nameCard} body={bodyCard}
                          toggle={toggle} setBody={getBodyValueFunc}
                          setName={getNameValueFunc} save={onSave}/>
        </Flex>
    )
}
export default connect(({
    comments: {comments,nameCard,bodyCard}}) =>
    ({comments,nameCard,bodyCard}),
    {
        getComments,getBodyValueFunc,getNameValueFunc,editCardFunc
    })(Comments)