module.exports = {
  content: [
    './src/pages/**/*.{vue,js}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      main: '#333333',
      content: '#666666',
      muted: '#999999',
      light: '#e5e5e5',
      primary: {
        DEFAULT: '#22bf88'
      },
      success: '#5ac725',
      warning: '#f9ae3d',
      error: '#f56c6c',
      info: '#909399',
      page: '#f6f6f6',
      blue: '#4173ff'
    },
    fontSize: {
      xs: '24rpx',
      sm: '26rpx',
      base: '28rpx',
      lg: '30rpx',
      xl: '32rpx',
      '2xl': '34rpx',
      '3xl': '38rpx',
      '4xl': '40rpx',
      '5xl': '44rpx'
    }
  },

  variants: {
    extend: {},
  },
  plugins: [
  ],
  corePlugins: {
    space: false,
    divideWidth: false,
    divideColor: false,
    divideStyle: false,
    divideOpacity: false
  }
}