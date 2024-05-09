import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Logo from './assets/logo.svg'

function Contacts({ contacts, currentUser }) {

  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);

  useEffect(() => {
    
  }, [currentUser])
  return (

  )
}

export default Contacts