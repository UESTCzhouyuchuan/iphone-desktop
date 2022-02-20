import React from 'react'
import {
  AlipaySquareFilled, AliwangwangFilled, AndroidFilled, AppleFilled,
  BehanceSquareFilled, ChromeFilled, CodeSandboxSquareFilled, DingtalkSquareFilled,
  DribbbleSquareFilled, FacebookFilled, GithubFilled, GitlabFilled, GooglePlusSquareFilled,
  Html5Filled, InstagramFilled, InsuranceFilled, LinkedinFilled, RedditSquareFilled, SkypeFilled, SlackSquareFilled,
  TaobaoSquareFilled, TwitterSquareFilled, WechatFilled, WeiboSquareFilled, WindowsFilled,
  YahooFilled, YoutubeFilled, YuqueFilled, ZhihuSquareFilled
} from '@ant-design/icons'
type PropsType = {
  icon: JSX.Element,
  title: string;
}
const apps: PropsType[] = [
  {
    icon: <AndroidFilled />,
    title: 'Android'
  },
  {
    icon: <AppleFilled />,
    title: 'Apple'
  },
  {
    icon: <WindowsFilled />,
    title: 'Windows'
  },
  {
    icon: <ChromeFilled />,
    title: 'Chrome'
  },
  {
    icon: <GithubFilled />,
    title: 'Github'
  },
  {
    icon: <AliwangwangFilled />,
    title: 'Aliwangwang'
  },
  {
    icon: <WeiboSquareFilled />,
    title: 'Weibo'
  },
  {
    icon: <TaobaoSquareFilled />,
    title: 'Taobao'
  },
  {
    icon: <Html5Filled />,
    title: 'Html5'
  },
  {
    icon: <WechatFilled />,
    title: 'Wechat'
  },
  {
    icon: <YoutubeFilled />,
    title: 'Youtube'
  },
  {
    icon: <AlipaySquareFilled />,
    title: 'AlipayCircle'
  },
  {
    icon: <SkypeFilled />,
    title: 'Skype'
  },
  {
    icon: <GitlabFilled />,
    title: 'Gitlab'
  },
  {
    icon: <LinkedinFilled />,
    title: 'Linkedin'
  },
  {
    icon: <FacebookFilled />,
    title: 'Facebook'
  },
  {
    icon: <CodeSandboxSquareFilled />,
    title: 'CodeSandbox'
  },
  {
    icon: <SlackSquareFilled />,
    title: 'Slack'
  },
  {
    icon: <BehanceSquareFilled />,
    title: 'Behance'
  },
  {
    icon: <DribbbleSquareFilled />,
    title: 'Dribbble'
  },
  {
    icon: <InstagramFilled />,
    title: 'Instagram'
  },
  {
    icon: <YuqueFilled />,
    title: 'Yuque'
  },
  {
    icon: <YahooFilled />,
    title: 'Yahoo'
  },
  {
    icon: <TaobaoSquareFilled />,
    title: 'Amazon'
  },
  {
    icon: <DingtalkSquareFilled />,
    title: 'Dingtalk'
  },
  {
    icon: <GooglePlusSquareFilled />,
    title: 'Google'
  },
  {
    icon: <InsuranceFilled />,
    title: 'Insurance'
  },
  {
    icon: <RedditSquareFilled />,
    title: 'Reddit'
  },
  {
    icon: <ZhihuSquareFilled />,
    title: 'Zhihu'
  },
  {
    icon: <TwitterSquareFilled />,
    title: 'Twitter'
  }
]
export default apps;