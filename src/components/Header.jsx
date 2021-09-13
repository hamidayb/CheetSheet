import React from 'react'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <header className='text-gray-600 body-font flex'>
      <div className='flex flex-wrap mx-auto p-5 flex-col md:flex-row items-center'>
        <a
          href='#'
          className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
        >
          <img
            style={{ width: '40px' }}
            alt='logo'
            src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNiAyNGgtNnYtMWMwLTEuMTA1Ljg5NS0yIDItMmgyYy41MyAwIDEuMDM5LjIxMSAxLjQxNC41ODZzLjU4Ni44ODQuNTg2IDEuNDE0djF6bTggMGgtNnYtMWMwLTEuMTA1Ljg5NS0yIDItMmgyYy41MyAwIDEuMDM5LjIxMSAxLjQxNC41ODZzLjU4Ni44ODQuNTg2IDEuNDE0djF6bS0xNy4yNDEtMTVjLjY0OSAwIDEuMjkzLS4yMTMgMS42OTItLjQzNi43NTUtLjQyIDIuNjk1LTEuNjQzIDMuNDg1LTIuMTI0LjIxNi0uMTMxLjQ5NS0uMDgzLjY1NC4xMTNsLjAwOC4wMTFjLjE2NS4yMDQuMTQ2LjQ5OS0uMDQzLjY4LS42MjIuNTk3LTIuNDQzIDIuMzI4LTMuMzcgMy4yMTMtLjUyMi40OTktLjgyMiAxLjE4My0uODUzIDEuOTA0LS4wOTUgMi4yMDctLjI2MSA2LjkxMi0uMzMxIDguODMzLS4wMTcuNDUtLjM4Ny44MDYtLjgzNy44MDZoLS4wMDFjLS40NDQgMC0uNzg2LS4zNDctLjgzNi0uNzg4LS4xMTEtLjk4MS0uMzI5LTMuMjgtLjQyNi00LjIxMi0uMDQtLjM4NC0uMjgtLjYxMy0uNTg1LS42MTUtLjMwNC0uMDAxLS41MjMuMjI2LS41NDkuNjA5LS4wNjEuOTIxLS4yNjUgMy4yNDgtLjM0MSA0LjIyLS4wMzQuNDQyLS4zOTcuNzg2LS44NC43ODZoLS4wMDFjLS40NTIgMC0uODI0LS4zNTctLjg0Mi0uODA4LS4wOTctMi4zNDItLjM2OS04Ljk2NC0uMzY5LTguOTY0bC0xLjI4NyAyLjMzYy0uMTQuMjUzLS40NDUuMzY0LS43MTUuMjZoLS4wMDFjLS4yNzktLjEwOC0uNDMtLjQxMS0uMzQ5LS42OThsMS4yNDQtNC4zOTNjLjEyMi0uNDMuNTE1LS43MjcuOTYyLS43MjdoNC41MzF6bTYuMjQxIDdjMS4yNDIgMCAyLjI1IDEuMDA4IDIuMjUgMi4yNXMtMS4wMDggMi4yNS0yLjI1IDIuMjUtMi4yNS0xLjAwOC0yLjI1LTIuMjUgMS4wMDgtMi4yNSAyLjI1LTIuMjV6bTggMGMxLjI0MiAwIDIuMjUgMS4wMDggMi4yNSAyLjI1cy0xLjAwOCAyLjI1LTIuMjUgMi4yNS0yLjI1LTEuMDA4LTIuMjUtMi4yNSAxLjAwOC0yLjI1IDIuMjUtMi4yNXptMy0xaC0xNXYtMWg4di0xaDN2MWgzdi0xM2gtMjJ2N2wtMSAyLjc0NXYtMTAuNzQ1aDI0djE1em0tNi02aC00di0xaDR2MXptLTEyLjYyNi01YzEuMjQxIDAgMi4yNSAxLjAwOCAyLjI1IDIuMjVzLTEuMDA5IDIuMjUtMi4yNSAyLjI1Yy0xLjI0MiAwLTIuMjUtMS4wMDgtMi4yNS0yLjI1czEuMDA4LTIuMjUgMi4yNS0yLjI1em0xNS42MjYgM2gtN3YtMWg3djF6bTAtMmgtN3YtMWg3djF6Ii8+PC9zdmc+'
          />
          <span className='logo ml-3 text-3xl'>Cheatsheet</span>
        </a>
        <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center'>
          <SearchBar />
        </nav>
      </div>
    </header>
  )
}

export default Header
