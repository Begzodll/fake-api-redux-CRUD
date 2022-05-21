import React, {useState,useEffect} from "react";
import {connect} from "react-redux";

import {getPhoto} from "../../store/Reducer/PhotoReducer";
import {MediaQueries} from "../../Components/Styled-Components/Themes";

import styled from "styled-components";

const Flex = styled.div`
    display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  font-size: 13px;
`
const Block = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3,1fr);
  margin-top: 2rem;
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
  width: 300px;
  height: auto;
  border: 1px solid ${(props) => props.theme.btn};
`
const Head = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
`
const Id = styled.div`
  margin: 0 1rem ;
`
const Title = styled.div`

`
const Img = styled.img`
  width: 100%;
`
const Event = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const A = styled.a`
  width: 100%;
  height: 30px;
  background: ${(props) => props.theme.btn};
  color:${(props) => props.theme.text};
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Photos = ({photos,getPhoto}) => {
    useEffect(()=>{
        getPhoto()
    },[])

    return(
        <Flex>
            <Block>
                {
                    photos.map((item,index) => <Box key={index}>
                        <Head>
                            <Id>{item.id}</Id>
                            <Title>{item.title}</Title>
                        </Head>
                        <Img src={item.thumbnailUrl}/>
                        <Event>
                            <A href={item.url}>view</A>
                        </Event>
                    </Box>)
                }
            </Block>
        </Flex>
    )
}
export default connect( ({photo:{photos}}) => ({photos}),
    {getPhoto} )(Photos)