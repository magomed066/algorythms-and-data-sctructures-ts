// The UK driving number is made up from the personal details of the driver.
// The individual letters and digits can be code using the below information

// Rules

// 1–5: The first five characters of the surname (padded with 9s if less than 5 characters)

// 6: The decade digit from the year of birth (e.g. for 1987 it would be 8)

// 7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)

// 9–10: The date within the month of birth

// 11: The year digit from the year of birth (e.g. for 1987 it would be 7)

// 12–13: The initial letter of the first name and middle name, padded with a 9 if no middle name

// 14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9

// 15–16: Two computer check digits. We will always use "AA"

// ---------------------------

// Your task is to code a UK driving license number using an Array of data. The Array will look like

// data = ["John","James","Smith","01-Jan-2000","M"]

// Where the elements are as follows

// 0 = Forename
// 1 = Middle Name (if any)
// 2 = Surname
// 3 = Date of Birth (In the format Day Month Year, this could include the full Month name or just shorthand ie September or Sep)
// 4 = M-Male or F-Female

// You will need to output the full 16 digit driving license number, in all UPPERCASE.

// Good luck and enjoy!

function driver(data: Array<string>): string {
	const [fn, mn, sn, dob, g] = data
	const date = new Date(dob)
	const y = date.getFullYear()
	const m = date.getMonth() + 1

	const blocks: string[] = [
		// 1-5: The first five characters of the surname (padded with 9s if less than 5 characters)
		sn.slice(0, 5).padEnd(5, '9'),

		// 6: The decade digit from the year of birth (e.g. for 1987 it would be 8)
		String(y).slice(2, 3),

		// 7–8: The month of birth (7th character incremented by 50 if driver is female i.e. 51–62 instead of 01–12)
		`${g === 'M' ? m : 50 + m}`.padStart(2, '0'),

		// 9–10: The date within the month of birth
		`${date.getDate()}`.padStart(2, '0'),

		// 11: The year digit from the year of birth (e.g. for 1987 it would be 7)
		String(y).slice(3, 4),

		// 12–13: The first two initials of the first name and middle name, padded with a 9 if no middle name
		[fn, mn]
			.map((n) => n.slice(0, 1))
			.join('')
			.padEnd(2, '9'),

		// 14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9
		'9',

		// 15–16: Two computer check digits. We will always use "AA"
		'aa',
	]

	return blocks.join('').toUpperCase()
}

const data = ['John', 'James', 'Smith', '01-Jan-2000', 'M']

console.log(driver(data)) // SMITH001010JJ9AA
