import React from 'react'

import {ReactComponent as Cog } from '../img/icons/cog-solid.svg'
import {ReactComponent as Server } from '../img/icons/server-solid.svg'
import {ReactComponent as Window } from '../img/icons/window-restore-solid.svg'
import {ReactComponent as Check } from '../img/icons/check-solid.svg'
import {ReactComponent as Database } from '../img/icons/database-solid.svg'
import {ReactComponent as Privacy } from '../img/icons/user-shield-solid.svg'
import Waves from '../img/waves.jpg'
import SmileMac from '../img/smile-mac.jpg'
import MacFile from '../img/mac-file.jpg'
import Ipad from '../img/ipad.jpg'
import Dev from '../img/ipad.jpg'

export const heroInfo = {
  title: "Reduce the size of large files with Data Bucket's online compressor",
  subtitle: 'No downloads are necessary! Manage your files in the browser, and quickly share them.',
  buttonText: 'Try Data Bucket',
  image: Waves
}

export const cardInfo = [
  {
    title: 'Compress any file easily!',
    subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quis tempora! Molestiae dignissimos sed numquam praesentium. Quae nam earum esse omnis. Iste eveniet numquam incidunt aliquid! A aperiam ad atque.',
    icon: <Cog />,
    accentColor: 'blue'
  },
  {
    title: 'Get 25GB of free storage.',
    subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quis tempora! Molestiae dignissimos sed numquam praesentium. Quae nam earum esse omnis. Iste eveniet numquam incidunt aliquid! A aperiam ad atque.',
    icon: <Server />,
    accentColor: 'green'
  },
  {
    title: 'Browser compatibility',
    subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quis tempora! Molestiae dignissimos sed numquam praesentium. Quae nam earum esse omnis. Iste eveniet numquam incidunt aliquid! A aperiam ad atque.',
    icon: <Window />,
    accentColor: 'violet'
  },
]
export const cardInfo2 = [
  {
    title: 'Retain high quality',
    subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quis tempora! Molestiae dignissimos sed numquam praesentium. Quae nam earum esse omnis. Iste eveniet numquam incidunt aliquid! A aperiam ad atque.',
    icon: <Check />,
    accentColor: 'blue'
  },
  {
    title: 'Central location for your files',
    subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quis tempora! Molestiae dignissimos sed numquam praesentium. Quae nam earum esse omnis. Iste eveniet numquam incidunt aliquid! A aperiam ad atque.',
    icon: <Database />,
    accentColor: 'green'
  },
  {
    title: 'Highest privacy standards',
    subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quis tempora! Molestiae dignissimos sed numquam praesentium. Quae nam earum esse omnis. Iste eveniet numquam incidunt aliquid! A aperiam ad atque.',
    icon: <Privacy />,
    accentColor: 'violet'
  },
]

export const bannerInfo = [
  {
    title: 'Compress files for use anywhere online.',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim asperiores commodi explicabo eaque quae. Earum placeat debitis perferendis, illum, quo delectus odit magnam, temporibus adipisci esse quis? Veritatis earum aspernatur perspiciatis, placeat veniam tempore dolores.',
    buttonStyle: 'btn-gradient',
    buttonText: 'Try Now',
    image: SmileMac
  },
  {
    title: 'Maintain excellent quality when compressed.',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim asperiores commodi explicabo eaque quae. Earum placeat debitis perferendis, illum, quo delectus odit magnam, temporibus adipisci esse quis? Veritatis earum aspernatur perspiciatis, placeat veniam tempore dolores.',
    buttonStyle: 'btn-gradient-purple',
    buttonText: 'Try Now',
    image: MacFile,
    switchSide: true
  },
  {
    title: 'No extensions needed',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim asperiores commodi explicabo eaque quae. Earum placeat debitis perferendis, illum, quo delectus odit magnam, temporibus adipisci esse quis? Veritatis earum aspernatur perspiciatis, placeat veniam tempore dolores.',
    buttonStyle: 'btn-gradient',
    buttonText: 'Try Now',
    image: Ipad
  },
  {
    title: 'Share file with anyone, anywhere',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim asperiores commodi explicabo eaque quae. Earum placeat debitis perferendis, illum, quo delectus odit magnam, temporibus adipisci esse quis? Veritatis earum aspernatur perspiciatis, placeat veniam tempore dolores.',
    buttonStyle: 'btn-gradient-purple',
    buttonText: 'Try Now',
    image: Dev,
    switchSide: true
  },
]