const HOURS = /(^[0-9](:[0-9][0-9])?(a|p)-[0-9](:[0-9][0-9])?(a|p)$)|(^Closed$)/i

test('open close hours for Cooling Centers', () => {
    // pristine format
    expect(HOURS.test('9a-5p')).toBe(true)

    // but with an extra space 
    expect(HOURS.test('9a- 5p')).toBe(false)
    expect(HOURS.test('9 a-5p')).toBe(false)
    expect(HOURS.test('9a- 5p ')).toBe(false)
    expect(HOURS.test(' 9a- 5p')).toBe(false)

    // with minutes at start hours
    expect(HOURS.test('9:30a-5p')).toBe(true)
    expect(HOURS.test('9:30am-5p')).toBe(false)

     // with minutes at close hours
     expect(HOURS.test('9a-5:30p')).toBe(true)
     expect(HOURS.test('9a-5:30pm')).toBe(false)
 
     // with both minutes in start and close hours
     expect(HOURS.test('9:30a-5:00p')).toBe(true)
     expect(HOURS.test('9:30am-5:30pm')).toBe(false)

     // no any other alphabetta in the hours string
     expect(HOURS.test('k9a-5p')).toBe(false)
     expect(HOURS.test('9a-5py')).toBe(false)

     // Closed, ignore case
     expect(HOURS.test('Closed')).toBe(true)
     expect(HOURS.test('CLOSED')).toBe(true)
     expect(HOURS.test('Close')).toBe(false)
})