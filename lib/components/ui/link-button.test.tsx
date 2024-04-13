import {render, screen} from '@testing-library/react'
import {expect, test} from 'vitest'

import {LinkButton} from './link-button'

const linkText = 'Click me!'
const href = 'about-us'

describe('<LinkButton />', () => {
    test('LinkButton component renders correctly', () => {
        render(<LinkButton href={href}>{linkText}</LinkButton>)

        expect(screen.getByRole('link', {name: linkText})).toBeInTheDocument()
        expect(screen.getByRole('link', {name: linkText})).toHaveAttribute(
            'href',
            href,
        )
    })
})
