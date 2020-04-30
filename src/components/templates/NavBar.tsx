import { Breadcrumb } from 'antd';
import { HomeOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';
import { mainTeal } from '../../styles/ThemeHelper';
import CSS from 'csstype';


const StyledNav = styled(Breadcrumb)`
  font-size: 14px;
  background-color: ${mainTeal};
  height: 40px;
  padding-top: 20px;
  padding-left: 20px;
`;

const StyledBreadItem = styled(Breadcrumb.Item)`
  color: white;
  margin: 0 15px 0 15px;
  text-decoration: none;
`;

const StyledHome = styled(HomeOutlined)`
  margin-right: 10px;
`;

const StyledIcon: CSS.Properties = {
  fontSize: '18px',
  padding: '0 10px 0 10px',
  float: 'right'
}

const NavBar = () => {
  return (
    <StyledNav style={{ color: '#F7F4F5' }}>
      <StyledBreadItem href="">
        <StyledHome /> Home
      </StyledBreadItem>
      <StyledBreadItem href="">
        <span> Resume </span>
      </StyledBreadItem>
      <StyledBreadItem> Words</StyledBreadItem>
      <LinkedinOutlined style={StyledIcon} />
      <InstagramOutlined style={StyledIcon} />
      <MailOutlined style={StyledIcon} />
    </StyledNav>
  )
}

export default NavBar;