import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import UserProfileDropDown from './UserProfileDropDown'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`

const UserProfileButton = styled.button`
  width: ${props => props.width ? props.width : 32+"px"};
  height: ${props => props.height ? props.height : 32+"px"};
  border: 2px solid #ffffff;
  border-radius: 50%;
  background-image: url(${props => props.path ? '/profileImg/'+ props.path : "/assets/icon-default-user.svg"});
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;

  :hover{
    border: 2px solid #3DA8F5;
  }
`

const UserNickname = styled.span`
  margin-left: 4px;
  color: #424242;
  font-size: 14px;
  line-height: 22px;
  font-weight: 700;
`

const UserProfile = ({isMobile}) => {
  const [clicked, setClicked] = useState(false)
  const [username, setUsername] = useState('')
  const [profilePath, setProfilePath] = useState('')

  const token = localStorage.getItem('authorization')
  
  useEffect(() => {
    if(token) {
      axios.get('http://localhost:3001/api/user/decode', {
        headers: {
          'authorization': `${token}`
        }
      }).then((res) => {
        const { data: { nickname }} = res
        setUsername(nickname)
      }).catch((err) => {
        console.error(err)
      })
    } else {
      return
    }
  }, [username])

  useEffect(() => {
    if(token && username) {
      axios.get(`http://localhost:3001/api/user/${username}/profile`, {
        headers: {
          'authorization': `${token}`
        }
      }).then((res) => {
        const { result: { profile_pathname }} = res.data
        setProfilePath(profile_pathname)
      }).catch((err) => {
        console.error(err)
      })
    }
  }, [username, profilePath])

  
  const handleOnClick = () => {
    setClicked(!clicked)
  }

  return(
    <Container
      width={isMobile ? 22+"px" : null}
      height={isMobile ? 22+"px" : null}>
      <UserProfileButton 
        onClick={handleOnClick}
        path={profilePath ? profilePath : null}/>
      {clicked && !isMobile && (
        <UserProfileDropDown />
      )}
      {isMobile ? <UserNickname>{username}</UserNickname> : null}
    </Container>
  )
}

export default UserProfile