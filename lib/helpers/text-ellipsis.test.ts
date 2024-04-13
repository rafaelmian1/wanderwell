import {describe, expect, test} from 'vitest'

import {ellipsis} from './text-ellipsis'

const text =
    'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
const cases = [
    {
        text,
        maxLength: 20,
        expected: 'Lorem ipsum dolor...',
    },
    {
        text,
        maxLength: 30,
        expected: 'Lorem ipsum dolor sit amet,...',
    },
    {
        text,
        maxLength: 31,
        expected: 'Lorem ipsum dolor sit amet,...',
    },
]

describe('ellipsis helper', () => {
    test.each(cases)(
        'ellipsis($text, $maxLength) --> $expected',
        ({text, maxLength, expected}) => {
            expect(ellipsis(text, maxLength)).toBe(expected)
        },
    )

    test('return same text if its length is less or equal than 3', () => {
        expect(ellipsis('mas')).toBe('mas')
    })

    test('default maxLength', () => {
        expect(ellipsis(text)).toBe(
            'Lorem ipsum dolor sit amet, qui minim labore adipisicing...',
        )
    })
})
