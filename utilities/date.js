import { format, formatISO } from 'date-fns'

export default function Date({ date }) {
	return (
		<time dateTime={formatISO(date)}>
			<span>{format(date, 'LLLL d, yyyy')}</span>
			<style jsx>
				{`
					span {
						color: #9b9b9b;
					}
				`}
			</style>
		</time>
	)
}

import { parseISO, format } from 'date-fns'

export default function DateFormatter({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}

