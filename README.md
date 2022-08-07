# react-websitecarbon-badge

React component for Website Carbon badge: https://www.websitecarbon.com/badge/. Can be used both for static and dynamic websites.

## Introduction

This React component fits both static and dynamic web apps.
The values on the badge can be set directly via props or fetched from https://www.websitecarbon.com/api/.

If using GatsbyJS, this react component goes hand in hand with: https://www.npmjs.com/package/gatsby-source-websitecarbon

## Install

```bash
npm install react-websitecarbon-badge
```

## How to use

```js
import WebsiteCarbonBadge from 'react-websitecarbon-badge';

class MyComponent extends React.Component {
  render() {
    return <WebsiteCarbonBadge co2="0.12" percentage='89' />;
  }
}
```

## Props

* `dark`: 
  * Boolean
  * Optional. Default `true`
  * Specify to use dark badge version 
* `co2`: 
  * String
  * Optional. Default to empty string
  * Sets the co2/view value. 
* `percentage`: 
  * String 
  * Optional. Default to empty string
  * Sets the ranking percentage value. 
* `url`: 
  * String
  * Optional. Default to empty string
  * Sets the url to fetch data from website carbon api. 
* `lang`: 
  * String
  * optional. Default to '`en`'
  * Sets the default language to use. (Currently supports '`en`' or '`fr`')

*NB: setting co2 and percentage takes precedence over the url, preventing unnecessary api fetch.*

## Examples

```js
<WebsiteCarbonBadge url="www.google.com"/>
```
Fetches data from `www.google.com` via http request if not found in local storage.
```js
<WebsiteCarbonBadge dark={true} co2="0.12" percentage="89" />
```
Uses dark version and sets co2 = 0.12 and percentage = 89%.
```js
<WebsiteCarbonBadge lang="fr" co2="0.56" percentage="41" />
```
Uses french as language for the badge.
```js
<WebsiteCarbonBadge url="www.google.com" co2="0.56" percentage="41" />
```
Uses co2 = 0.56 and percentage = 41%, and does not use the url provided.



