import EntrySynonym from './EntrySynonym';

export default function EntryDefinition({
	data: { meanings },
	setSearchInput,
}) {
	return (
		<>
			{meanings.map(
				(
					{
						partOfSpeech,
						definitions: [{ definition, example }],
						synonyms,
						antonyms,
					},
					idx
				) => {
					return (
						<div key={partOfSpeech + idx} className='space-y-6'>
							<fieldset className='border-t-1 border-slate-200 dark:border-slate-800'>
								<legend className='text-lg font-bold italic'>
									{partOfSpeech}
								</legend>
							</fieldset>
							<h3 className='list-none text-lg text-slate-500'>Meaning</h3>
							<ul className='ml-4 space-y-3 list-disc list-inside'>
								<li>{definition}</li>
								{example && <q className='ml-3 text-slate-500'>{example}</q>}
							</ul>
							{(synonyms.length > 0 && (
								<EntrySynonym
									synonyms={synonyms}
									setSearchInput={setSearchInput}
								/>
							)) ||
								(antonyms.length > 0 && (
									<EntrySynonym
										antonyms={antonyms}
										setSearchInput={setSearchInput}
									/>
								))}
						</div>
					);
				}
			)}
		</>
	);
}
