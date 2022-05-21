import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {getTodo} from "../../store/Reducer/TodoReducer";
import styled from 'styled-components';

const Table = styled.div`
  width: 100%;
  height: 876px;
  padding:  2rem 0 ;
  font-family: sans-serif;
`
const Block = styled.div`
    width: 50%;
`
const Box = styled.div`
  display: flex;
  margin-top: 1.5rem;
`
const Id = styled.div`
  width: 1rem;
  margin: 0 1rem;
`
const Name = styled.div`
  width: 50%;
  margin: 0 1rem;
`
const Span = styled.div`
  margin: 3px ;
`
const Flex = styled.div`
  display: flex;
`
const Btn = styled.button`
    width: 120px;
  height: 40px;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 10px;
  margin: 1rem 2.7rem;
  cursor: pointer;
`
const Todos = ({todos, getTodo}) => {

    const [ page, setPage ] = useState(1)
    
    useEffect(() => {
        getTodo()
        if( page > 11 )setPage(11)
        if( page < 1 )setPage(1)
    }, [page,getTodo])

    return (
        <Table>
            <Block>
                {
                    todos.todos.filter( (item, index) => index >= 0 && index <10 )
                        .filter((item,index)=> index>=(page-1)*10 && index<page*10)
                   .map((item, index) => <Box key={index}>
                        <Id>{item.id}</Id>
                        <Name>{item.title}</Name>
                        <Span>
                            <input type="checkbox" defaultChecked={item.completed}/>
                        </Span>
                    </Box>)
                }
                <Flex>
                    <Btn onClick={()=> setPage(prev=>prev-1)}>Prev</Btn>
                    <h2>{page}</h2>
                    <Btn onClick={()=> setPage(prev=>prev+1)}>Next</Btn>
                </Flex>
            </Block>
        </Table>
    )
}
export default connect(({todos}) => ({todos}),
    {getTodo})(Todos)