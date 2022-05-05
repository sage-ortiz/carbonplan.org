import { useThemeUI } from 'theme-ui'

const Logo = () => {
  const context = useThemeUI()
  const { primary } = context.theme.colors

  return (
    <svg viewBox='0 0 150 100' width='100%' height='100%'>
      <style type='text/css'>
        {`
  .st0{fill:${primary};}
`}
      </style>
      <g>
        <path
          className='st0'
          d='M0,27.7c10.2,0,20.4,0,30.6,0c0.2,0.3,0.2,0.5,0.2,0.7c0,14.5,0,28.9,0,43.4c0,0.1,0,0.3,0,0.4
		c-10.2,0-20.5,0-30.7,0C0,57.4,0,42.6,0,27.7z M26.3,67.7c0-11.9,0-23.7,0-35.5c-7.3,0-14.5,0-21.8,0c0,11.9,0,23.6,0,35.5
		C11.8,67.7,19,67.7,26.3,67.7z'
        />
        <path
          className='st0'
          d='M49.3,47.7c-2.5-3.6-5-7.2-7.4-10.9c0,3.6,0,7.2,0,10.9c-0.7,0-1.4,0-2.1,0c0-5.1,0-10.3,0-15.4c0.6,0,1.3,0,1.9,0
		c2.5,3.6,5,7.2,7.4,11c0-3.8,0-7.4,0-11c0.7,0,1.4,0,2.1,0c0,5.1,0,10.3,0,15.4C50.5,47.7,49.9,47.7,49.3,47.7z'
        />
        <path
          className='st0'
          d='M60.6,59.9c0-2.3,0.6-4.5,2.3-6.1c2.8-2.8,7.1-2.2,9.3,1.2c2,3.1,1.8,7.9-0.4,10.8c-2.8,3.6-8.2,2.9-10.3-1.4
		C60.9,62.9,60.6,61.4,60.6,59.9z M63.4,59.8c0,1.5,0.2,2.9,0.9,4.2c0.6,1.1,1.5,1.8,2.8,1.8c1.3,0,2.3-0.6,2.8-1.8
		c1.2-2.6,1.3-5.2,0.1-7.9c-0.5-1.2-1.5-1.9-2.9-1.9c-1.4,0-2.4,0.7-3,1.9C63.5,57.3,63.4,58.6,63.4,59.8z'
        />
        <path
          className='st0'
          d='M91.5,39.8c0,1.8-0.3,3.5-1.2,5c-2.3,4.1-7.7,4.3-10.3,0.3c-2-3-1.9-7.8,0.2-10.6c2.7-3.6,7.6-3.4,10.1,0.4
		C91.1,36.4,91.5,38,91.5,39.8z M88.7,39.8c0-1.3-0.2-2.6-0.8-3.8c-0.4-0.8-1-1.5-2-1.8c-1.7-0.5-3.3,0.2-4,2.1
		c-1,2.4-0.9,4.9,0.1,7.3c0.5,1.3,1.5,2.1,2.9,2.1c1.5,0,2.4-0.8,3-2.1C88.5,42.4,88.7,41.1,88.7,39.8z'
        />
        <path
          className='st0'
          d='M104.5,47.7c-0.6,0-1.2,0-1.9,0c-2.5-3.6-5-7.2-7.4-10.9c0,3.6,0,7.2,0,10.9c-0.7,0-1.4,0-2.1,0c0-5.1,0-10.3,0-15.5
		c0.6,0,1.1,0,1.6,0c0.3,0,0.4,0.2,0.5,0.4c2.3,3.3,4.7,6.7,6.8,10.1c0.1,0.1,0.2,0.2,0.4,0.5c0-3.8,0-7.4,0-11c0.7,0,1.4,0,2.1,0
		C104.5,37.4,104.5,42.5,104.5,47.7z'
        />
        <path
          className='st0'
          d='M132.2,67.7c-0.9,0-1.7,0-2.6,0c0-2.5,0-4.9,0-7.4c-1.8,0-3.6,0-5.4,0c0,2.4,0,4.9,0,7.4c-0.9,0-1.7,0-2.6,0
		c0-5.1,0-10.3,0-15.4c0.8,0,1.7,0,2.6,0c0,2,0,3.9,0,5.9c1.8,0,3.6,0,5.4,0c0-1.9,0-3.9,0-5.8c0.9,0,1.7,0,2.6,0
		C132.2,57.5,132.2,62.6,132.2,67.7z'
        />
        <path
          className='st0'
          d='M97.9,67.8c-1.1,0-2,0-3,0c-0.8-1.9-1.6-3.9-2.5-5.8c-0.4-0.1-0.8-0.1-1.2,0c0,1.9,0,3.8,0,5.8c-0.9,0-1.7,0-2.6,0
		c0-5.1,0-10.3,0-15.4c0,0,0.1-0.1,0.1-0.1c1.5,0,3.1-0.1,4.6,0c2.9,0.2,4.5,2.4,4,5.3c-0.3,1.6-1.1,2.8-2.6,3.7
		C95.9,63.5,96.9,65.6,97.9,67.8z M91.3,59.9c1.4,0.1,2.6-0.1,3.2-1.4c0.6-1.1,0.5-2.7-0.2-3.4c-0.6-0.7-2-1-3-0.6
		C91.3,56.3,91.3,58.1,91.3,59.9z'
        />
        <path
          className='st0'
          d='M85.7,53.2c-0.3,0.7-0.6,1.2-0.9,1.8c-0.9-0.5-1.9-0.8-2.9-0.8c-1.8,0.1-3.2,0.9-3.9,2.5c-1,2.2-1,4.5,0.1,6.7
		c1,1.9,2.8,2.7,4.7,2.2c0.2-0.1,0.5-0.1,0.7-0.3c0-1.5,0-3.1,0-4.7c0.9,0,1.7,0,2.6,0c0,2.1,0,4.2,0,6.3
		c-5.2,2.4-10.6,0.4-11.5-5.5c-0.5-2.9,0.1-5.5,2.3-7.6c2-2,5.3-2.5,7.8-1.3C85,52.8,85.3,53,85.7,53.2z'
        />
        <path
          className='st0'
          d='M49,53.2c-0.3,0.6-0.5,1.2-0.8,1.8c-0.7-0.4-1.5-0.6-2.2-0.7c-1.9-0.2-3.6,0.6-4.5,2.3c-1.2,2.4-1.2,4.8,0.2,7.2
		c1,1.7,2.8,2.4,4.6,2c0.2-0.1,0.5-0.1,0.7-0.3c0-1.5,0-3.1,0-4.7c0.9,0,1.7,0,2.6,0c0,2.1,0,4.3,0,6.4c-1.9,0.7-3.7,1.2-5.7,0.8
		c-2-0.4-3.5-1.4-4.6-3.1c-1.8-2.9-1.8-7,0.2-9.8c1.9-2.8,5.7-3.8,8.7-2.4C48.4,52.8,48.7,52.9,49,53.2z'
        />
        <path
          className='st0'
          d='M110.3,67.7c-1,0-2,0-2.9,0c-0.4-1.4-0.8-2.7-1.2-4.1c-1.5,0-3,0-4.6,0c-0.4,1.3-0.9,2.7-1.3,4.1c-0.7,0-1.4,0-2.3,0
		c1.8-5.2,3.5-10.3,5.3-15.4c0.7,0,1.4,0,2.2,0C107.1,57.4,108.7,62.6,110.3,67.7z M105.8,61.6c-0.6-2.1-1.1-4.1-1.7-6.1
		c-0.6,2.1-1.3,4-1.8,6.1C103.5,61.6,104.6,61.6,105.8,61.6z'
        />
        <path
          className='st0'
          d='M64.3,47.7c-1,0-1.9,0-2.9,0c-0.4-1.4-0.8-2.8-1.2-4.2c-1.5,0-3.1,0-4.6,0c-0.4,1.4-0.9,2.8-1.3,4.2c-0.7,0-1.5,0-2.3,0
		c1.8-5.2,3.5-10.3,5.3-15.4c0.8,0,1.5,0,2.2,0C61,37.4,62.6,42.5,64.3,47.7z M59.7,41.6c-0.6-2.1-1.1-4.1-1.7-6.2
		c-0.5,2.1-1.2,4.1-1.8,6.2C57.4,41.6,58.5,41.6,59.7,41.6z'
        />
        <path
          className='st0'
          d='M108.9,43.5c-0.4,1.4-0.9,2.8-1.3,4.2c-0.7,0-1.5,0-2.3,0c1.8-5.2,3.5-10.3,5.3-15.5c0.7,0,1.4,0,2.2,0
		c1.6,5.1,3.2,10.3,4.9,15.4c-1,0-1.9,0-2.9,0c-0.4-1.4-0.8-2.8-1.2-4.2C112,43.5,110.5,43.5,108.9,43.5z M113.1,41.6
		c-0.6-2.1-1.1-4.1-1.7-6.1c-0.6,2.1-1.2,4.1-1.8,6.1C110.8,41.6,111.9,41.6,113.1,41.6z'
        />
        <path
          className='st0'
          d='M113.8,61.9c0,2,0,3.9,0,5.8c-0.9,0-1.7,0-2.6,0c0-5.1,0-10.3,0-15.5c1.9,0.1,3.7-0.2,5.6,0.2c2.5,0.5,3.4,2.4,3.2,4.8
		c-0.3,2.9-2.3,4.7-5.3,4.7C114.5,61.9,114.2,61.9,113.8,61.9z M113.8,54.3c0,1.9,0,3.7,0,5.6c1.2,0.1,2.4,0,3.1-1.2
		c0.6-1.1,0.8-2.3,0.1-3.4C116.3,54.1,115.1,54.4,113.8,54.3z'
        />
        <path
          className='st0'
          d='M52,52.3c2.1,0,4.2,0,6.3,0c0.2,0,0.4,0,0.6,0c0,0.7,0,1.4,0,2.1c-1.4,0-2.8,0-4.3,0c0,1.4,0,2.8,0,4.2c1.4,0,2.8,0,4.2,0
		c0,0.7,0,1.4,0,2.1c-1.4,0-2.8,0-4.2,0c0,1.7,0,3.3,0,5c1.7,0,3.4,0,5.1,0c0,0.7,0,1.4,0,2.1c-2.6,0-5.1,0-7.7,0
		C51.9,67.3,51.9,53.2,52,52.3z'
        />
        <path
          className='st0'
          d='M150,53.2c-0.3,0.6-0.5,1.2-0.8,1.8c-0.4-0.2-0.7-0.3-1-0.5c-2.3-0.9-4.6-0.1-5.7,2.2c-1,2.1-1,4.2,0,6.3
		c1.1,2.6,3.8,3.5,6.3,2.2c0.1-0.1,0.2-0.1,0.4-0.2c0.2,0.6,0.5,1.2,0.7,1.9c-1,0.7-2.2,1-3.4,1.1c-3.6,0.1-6.5-2.3-7.2-6.1
		c-0.6-2.8-0.1-5.5,1.9-7.7C143.5,51.7,147.4,51.3,150,53.2z'
        />
        <path
          className='st0'
          d='M66.8,34.3c-1.4,0-2.7,0-4,0c0-0.7,0-1.4,0-2c3.5,0,7,0,10.6,0c0,0.6,0,1.3,0,2c-1.3,0-2.6,0-4,0c0,4.5,0,8.9,0,13.4
		c-0.9,0-1.7,0-2.6,0C66.8,43.2,66.8,38.8,66.8,34.3z'
        />
        <path
          className='st0'
          d='M121,45.6c1.8,0,3.5,0,5.2,0c0,0.7,0,1.4,0,2.1c-2.6,0-5.1,0-7.7,0c0-5.1,0-10.3,0-15.4c0.8,0,1.6,0,2.5,0
		C121,36.7,121,41.1,121,45.6z'
        />
        <path
          className='st0'
          d='M74.3,32.2c0.9,0,1.7,0,2.5,0c0,5.1,0,10.3,0,15.4c-0.8,0-1.6,0-2.5,0C74.3,42.5,74.3,37.4,74.3,32.2z'
        />
        <path
          className='st0'
          d='M134.8,52.3c0.9,0,1.7,0,2.5,0c0,5.1,0,10.3,0,15.4c-0.8,0-1.7,0-2.5,0C134.8,62.6,134.8,57.5,134.8,52.3z'
        />
      </g>
    </svg>
  )
}

export default Logo