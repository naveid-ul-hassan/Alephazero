import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu, Row, Col } from "antd";
import "./HeaderStyle.css";
import HeroSection from "./HeroSection";
import HeaderLogo from "../images/logo.svg";

const Header = () => {
  const items = [
    {
      label: "Explore",
      key: "mail",

      children: [
        {
          label: "Option 1",
          key: "setting:1",
        },
        {
          label: "Option 2",
          key: "setting:2",
        },

        {
          label: "Option 3",
          key: "setting:3",
        },
        {
          label: "Option 4",
          key: "setting:4",
        },
      ],
    },
    {
      label: "Learn",
      key: "app",

      children: [
        {
          label: "Option 1",
          key: "setting:1",
        },
        {
          label: "Option 2",
          key: "setting:2",
        },

        {
          label: "Option 3",
          key: "setting:3",
        },
        {
          label: "Option 4",
          key: "setting:4",
        },
      ],
    },
    {
      label: "Verify",
      key: "SubMenu",

      children: [
        {
          label: "Option 1",
          key: "setting:1",
        },
        {
          label: "Option 2",
          key: "setting:2",
        },

        {
          label: "Option 3",
          key: "setting:3",
        },
        {
          label: "Option 4",
          key: "setting:4",
        },
      ],
    },
    {
      label: "Meet US",
      key: "menu4",

      children: [
        {
          label: "Option 1",
          key: "setting:1",
        },
        {
          label: "Option 2",
          key: "setting:2",
        },

        {
          label: "Option 3",
          key: "setting:3",
        },
        {
          label: "Option 4",
          key: "setting:4",
        },
      ],
    },
  ];

  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div className="main-tag">
      <div className="main-header">
        <Row type="flex">
          <Col span={5}>
            <img
              src={HeaderLogo}
              alt="ALepha Zero"
              className="headerlogo-div"
            />
          </Col>
          <Col span={12}>
            <Menu
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={items}
            />
          </Col>
          <Col offset={1} span={5}>
            <button className="header-btn">Stake Zero</button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
