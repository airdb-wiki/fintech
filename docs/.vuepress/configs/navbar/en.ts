import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta'

export const navbarEn: NavbarConfig = [
  {
    text: 'Home',
    link: 'https://airdb.wiki',
  },
  {
    text: 'Environment',
    children: [
      {
        text: 'Network',
        children: [
          { text: 'Mutil Live', link: '/reference/cli.html', },
          { text: 'DMZ', link: '/reference/cli.html', },
        ],
      },
      {
        text: 'Disaster Recovery',
        children: [
          { text: 'DR', link: '/reference/cli.html', },
        ],
      },
    ],
  },
  {
    text: 'Account',
    children: [
      {
        text: 'Overall',
        children: [
          '/coding/README.md',
        ],
      },
      {
        text: 'Golang',
        children: [
          '/coding/golang.md',
        ],
      },
      {
        text: 'Vue',
        children: [
          '/reference/plugin/pwa.md',
          '/reference/plugin/pwa-popup.md',
        ],
      },
    ],
  },
  {
    text: 'Anti Fraud',
    children: [
      {
        text: 'KYC',
        children: [
          '/antifraud/README.md',
        ],
      },
      {
        text: 'AML',
        children: [
          '/antifraud/README.md',
        ],
      },
    ],
  },
]
