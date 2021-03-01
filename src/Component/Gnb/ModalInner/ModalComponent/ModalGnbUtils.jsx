import react from 'react'
import styled from 'styled-components'

const Container = styled.ul`
  width: 100%;
  margin-top: 10px;
`

const Items = styled.li`
  padding: 7px 10px;
  color: #424242;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  cursor: pointer;
`

const ModalGnbUtils = () => {
  return(
    <Container>
      <Items>마이페이지</Items>
      <Items>나의 쇼핑</Items>
      <Items>스크랩북</Items>
      <Items>알림</Items>
      <Items>이벤트</Items>
      <Items>사진 올리기</Items>
      <Items>집들이 글쓰기</Items>
      <Items>노하우 글쓰기</Items>
      <Items>상품 리뷰 쓰기</Items>
      <Items>시공 전문가 리뷰 쓰기</Items>
      <Items>인테리어 질문하기</Items>
      <Items>고객센터</Items>
    </Container>
  )
}

export default ModalGnbUtils