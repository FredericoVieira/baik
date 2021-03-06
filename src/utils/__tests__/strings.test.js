import { capitalize, getInitials, truncate } from '../strings.utils'

test('should capitalize character', () => {
  const capitalizedCharacter = capitalize('a')
  expect(capitalizedCharacter).toEqual('A')
})

test('should return initials from name', () => {
  const initialsFromName = getInitials('Frederico Vieira')
  expect(initialsFromName).toEqual('FV')
})

test('should return initials from fullname', () => {
  const initialsFromFullname = getInitials('Frederico Duarte Vieira')
  expect(initialsFromFullname).toEqual('FV')
})

test('should truncate string', () => {
  const capitalizedCharacter = truncate('truncate', 5)
  expect(capitalizedCharacter).toEqual('trunc...')
})
