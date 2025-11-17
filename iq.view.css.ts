namespace $ {

	$mol_style_define( $giper_iq , {
		
		Main: {
			
			flex: {
				basis: '40rem',
				grow: 1,
			},
			
			Head: {
				justify: {
					content: 'space-between',
				},
			},
			
			Body_content: {
				align: {
					self: 'stretch',
				},
			},
			
		},

		Score: {
			color: $mol_theme.special,
			textShadow: '0 0',
		},
		
		History_log: {
			display: 'flex',
			padding: $mol_gap.block,
			flex: {
				direction: 'row-reverse',
			},
			align: {
				self: 'center'
			},
		},

		Choices: {
			'>': {
				$mol_button: {
					flex: {
						basis: '10%',
						shrink: 1,
						grow: 1,
					},
					justify: {
						content: 'center',
					},
				},
			},
		},
		
		Score_final: {
			lineHeight: '1.5em',
			justify: {
				self: 'center',
			},
			font: {
				family: 'cursive',
				size: `8vmin`,
			},
		},

	} )

}
