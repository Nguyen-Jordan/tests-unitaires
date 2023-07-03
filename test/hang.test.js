import { test, expect } from 'vitest';
import { hanging } from '../index.js';

test('contain leter on the word', () => {
    expect(hanging('j', 'jordan')).toBe(true)
    expect(hanging('v','jordan')).toBe(false)
    expect(hanging('6','jordan')).toBe(false)
    expect(hanging('$','jordan')).toBe(false)
    expect(hanging('J','jordan')).toBe(true)
    expect(hanging('m','MAPPLE')).toBe(true)
    expect(hanging('jo','jo')).toBe(false)
})

test('')