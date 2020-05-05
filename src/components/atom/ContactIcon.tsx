import React, { useState } from 'react';
import styled from 'styled-components';
import { Col } from 'antd';
import CSS from 'csstype';



type PropsTechLogo = {
  children: any
  href: string
}

const StyledIcon: CSS.Properties = {
  fontSize: '22px',
  padding: '0 10px 0 10px',
  float: 'right'
}

const ContactIcon = (props: PropsTechLogo) => {
  return (
    <a href={props.href} target='_blank'>
      {props.children}
    </a>
  )
};

export default ContactIcon;