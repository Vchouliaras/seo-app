import * as React from 'react'

export interface IColors {
  [key: string]: string
}

export interface IFonts extends IColors {}

export interface ILoader {
  children?: React.ReactChild
  className?: string
}

export interface IMetatags {
  title: string,
  description: string,
}

export interface IContent {
  title: string,
  pathname: string,
  className?: string
}

export interface ICase {
  staticContext?: {
    status: number
  },
  location: {
    pathname: string,
    state?: {
      referrer?: string
    }
  }
}