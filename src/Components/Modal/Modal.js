import React,{useEffect,useState} from "react";
import styled from 'styled-components'

const ModalWindow = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.98);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  top:${(props) => props.bool ? `0` : '-100%'} ;
  transform:${(props) => props.bool ? `scale(1)` : 'scale(0)'} ;
  opacity:${(props) => props.bool ? `1` : '0'} ;
  transition: .5s all ease;
  font-family: sans-serif;
`
const Block = styled.div`
  width: 450px;
  height: 265px;
  background: #fff;
  border-radius: 5px;
  position: relative;
`
const Box = styled.div`

`
const HeadModal = styled.div`
  display: flex;
  justify-content: space-between;
`
const Title = styled.div`
  width: 100%;
  background: ${(props) => props.theme.btn};
  font-size: 32px;
  padding: 10px 10px;
`
const Close = styled.button`
  width: 50px;
  outline: none;
  border: none;
  background: ${(props) => props.theme.btn};
  cursor: pointer;
  font-size: 21px;
`
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
const Footer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 50px;
  background: ${(props) => props.theme.btn};
  display: flex;
  justify-content: space-between;
  
`
const Save = styled.div`
  width: 120px;
  height: 30px;
  background: #39ff39;
  margin: 10px 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
`
const Cancel = styled.div`
  width: 120px;
  height: 30px;
  background: rgb(255, 44, 44);
  margin: 10px 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
`
const Form = styled.form`
    display: flex;
  flex-direction: column;
`
const Input = styled.input`
  width: 300px;
  height: 40px;
  margin-top: 1.5rem;
  padding: 0 10px;
  outline: none;
  &::placeholder{
    margin: 0 1rem;
  }
`

const Modal = ({
                   bool,nameValue,bodyValue,
                   toggle,setBody,setName,save}) => {

    useEffect(() => {
        if (bool === true) {
            document.body.style.overflow = 'hidden';
            return () => document.body.style.overflow = 'unset';
        }
    }, [bool]);

    return(
        <ModalWindow bool={bool}>
            <Block>
                <Box>
                    <HeadModal>
                        <Title>Modal</Title>
                        <Close onClick={()=>toggle(p=>!p)}>X</Close>
                    </HeadModal>
                    <Body>
                        <Form>
                            <Input type="text" placeholder={'Title'}
                               onChange={(e)=>setName(e.target.value)} defaultValue={nameValue}/>
                            <Input type="text" placeholder={'Body'}
                                   onChange={(e)=>setBody(e.target.value)} defaultValue={bodyValue}   />
                        </Form>
                        <Footer>
                            <Cancel onClick={()=>toggle(p=>!p)}>Cancel</Cancel>
                            <Save onClick={save}>Save</Save>
                        </Footer>
                    </Body>
                </Box>
            </Block>
        </ModalWindow>
    )
}
export default Modal