import React from "react";
import { Avatar, Button, Dropdown, MenuProps } from 'antd';
import "./head.less";
import { SettingOutlined } from '@ant-design/icons';


const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu tem
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item
        </a>
      ),
    },
  ];

export default class Head extends React.Component{
    render(): React.ReactNode {
        return(
            <div className="head_layout">
                <Avatar src={url} size={40} />
                <span className="user_name">
                    博展联盟
                </span>
                <Dropdown menu={{ items }} placement="bottomRight" arrow={{ pointAtCenter: true }}>
                    <Button className="setting_button" icon={<SettingOutlined />} >设置</Button>
                </Dropdown>
            </div>
        )
    }
}