import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { Sun, Moon } from 'styled-icons/boxicons-regular'
import styled from 'styled-components'

const Label = styled.label`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Input = styled.input`
  display: none;
`

const Icons = styled.div`
  display: inline-block;
  width: 26px;
`

export const ToggleThemeSite = () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <Label>
        <Input
          type="checkbox"
          onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
          checked={theme === 'dark'}
        />{' '}
        <Icons>{theme === 'dark' ? <Moon /> : <Sun />}</Icons>
      </Label>
    )}
  </ThemeToggler>
)