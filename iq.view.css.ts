namespace $ {

	$mol_style_define( $hd_iq , {
		
		Head: {
			justify: {
				content: 'space-between',
			},
		},
		
		Score: {
			color: $mol_theme.special,
			textShadow: '0 0',
		},
		
		Body_content: {
			align: {
				self: 'stretch',
			},
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
				family: 'monospace',
				size: `8vmin`,
			},
		},

	} )

}
