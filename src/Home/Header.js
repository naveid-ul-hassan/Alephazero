import React, { useState,useEffect } from "react";
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
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState();
  console.log(visible);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    console.log(currentScrollPos);

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else if (currentScrollPos < prevScrollPos) {
      setVisible(true);
    }
    setPrevScrollPos(currentScrollPos);
    console.log(visible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div  className={prevScrollPos == 0
      ? "main-tag"
      : visible===true?"main-tag main-tag2"
      : "tag-hide"}>
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
