import { language } from '../types'

// English
const en: language = {
  title: 'English',
  sort: 2,
  lang: {
    title: 'Tang System',
    login: {
      title: 'Tang Permission Management System',
      submit: 'Login',
      reset: 'Reset',
      loginType: {
        username: 'Username Password',
        email: 'Email Password',
      },
      username: 'Username',
      usernamePlaceholder: 'Please enter username',
      password: 'Password',
      passwordPlaceholder: 'Please enter password',
      email: 'Email',
      emailPlaceholder: 'Please enter email',
      captcha: 'Captcha',
      captchaPlaceholder: 'Please enter captcha',
      otherLogin: {
        title: 'Other login methods',
        github: 'Github Authorization Code'
      },
      backgroundSource: 'Background image source: '
    },
    layout: {
      profile: 'Profile',
      documentation: 'Docs',
      settings: 'Settings',
      logout: 'Logout',
      logoutConfirm: {
        message: 'Are you sure you want to log out and exit the system?',
        title: 'Tips',
      }
    },
    size: {
      large: 'Large',
      default: 'Default',
      small: 'Small',
    },
    settings: {
      title: 'Settings',
      basic: {
        title: 'Basic Settings',
        theme: 'Theme',
      },
      sidebar: {
        title: 'Sidebar Settings',
        showHeader: 'Show Header',
        showLogo: 'Show Logo when Sidebar is expanded',
        fixedHeader: 'Fixed Header',
      }
    }
  }
}

export default en
