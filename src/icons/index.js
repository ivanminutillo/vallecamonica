import * as React from 'react'
const browser = typeof window !== 'undefined'

const nullServerComponent = () => (<span />)

// ACTIVITIES
export const Activity = !browser ? nullServerComponent : ({width = 24, height = 24, color = '#333'}) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' color={color} fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-activity'><polyline points='22 12 18 12 15 21 9 3 6 12 2 12'></polyline></svg>
)

// CARD
export const Card = !browser ? nullServerComponent : ({width = 24, height = 24, color = '#333'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={width} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clipboard"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
)

// TEXT
export const Text = !browser ? nullServerComponent : ({width = 24, height = 24, color = '#333'}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-align-left"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>
)

// MESSAGE
export const Message = !browser ? nullServerComponent : ({width = 24, height = 24, color = '#333'}) => (
    <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
)

// CROSS
export const Cross = !browser ? nullServerComponent : ({width = 24, height = 24, color = '#333'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
)

// USERS
export const Users = !browser ? nullServerComponent : ({width = 24, height = 24, color = '#333'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
)

// CHECK
export const Check = !browser ? nullServerComponent : ({width = 24, height = 24, color = '#333'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><polyline points="20 6 9 17 4 12"></polyline></svg>
)

// SHIELD
export const Shield = !browser ? nullServerComponent : ({width = 24, height = 24, color = '#333'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M12 22s8-4 8-10V4l-8-2-8 2v8c0 6 8 10 8 10z"></path></svg>
)

// PLUS
export const Plus = !browser ? nullServerComponent : ({width = 24, height = 24, color = '#333'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
)

// BOOK
export const Book = !browser ? nullServerComponent : ({width = 24, height = 24, color = '#333', line = 2}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={line} strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
)

// CALENDAR
export const Calendar = !browser ? nullServerComponent : ({width = 24, height = 24, color = '#333', line = 2}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={line} strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
)

// GITHUB
export const Github = !browser ? nullServerComponent : ({width = 24, height = 24, color = '#333', line = 2}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={line} strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
)

// TWITTER
export const Twitter = !browser ? nullServerComponent : ({width = 24, height = 24, color = '#333', line = 2}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={line} strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
)

// MENU
export const Menu = !browser ? nullServerComponent : ({width = 24, height = 24, color = '#333', line = 2}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={line} strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
)

// DOWN
export const Down = !browser ? nullServerComponent : ({width = 24, height = 24, color = '#333', line = 2}) => (
  <svg xmlns="http://www.w3.org/2000/svg" color={color} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={line} strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><polyline points="6 9 12 15 18 9"></polyline></svg>
)
