import {render, screen} from '@testing-library/react'
import {expect, test} from 'vitest'

import {Button} from './button'

const buttonText = 'Click me!'

describe('<Button />', () => {
    test('Button component renders correctly', () => {
        render(<Button>{buttonText}</Button>)

        expect(
            screen.getByRole('button', {name: buttonText}),
        ).toBeInTheDocument()
    })
})
