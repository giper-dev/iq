namespace $.$$ {
	$mol_test({
		
		"text continuation"( $ ) {
			
			const chat = new $giper_iq_text
			chat.remember( 'world in the fire' )
			chat.remember( 'hello funny world' )
						
			$mol_assert_equal(
				chat.generate( 20, 'hello' ),
				' funny world in the fire',
			)

		},
		
	})
}
