namespace $ {
	$mol_test({

		'Empty brain'() {
		
			const brain = new $giper_iq_neuron(0)
		
			$mol_assert_equal( brain.population() , 1 )
			$mol_assert_equal( brain.predict( [] ) , 0 )
		
		},

		'Root switch'() {
		
			const brain = new $giper_iq_neuron(0)
			brain.learn( 1 , [] )
		
			$mol_assert_equal( brain.population() , 1 )
			$mol_assert_equal( brain.predict( [] ) , 1 )
			$mol_assert_equal( brain.predict( [ 1 ] ) , 1 )
			$mol_assert_equal( brain.predict( [ 0 ] ) , 1 )
		
		},

		'Right way'() {
			
			const brain = new $giper_iq_neuron(0)
			brain.learn( 1 , [ 1 ] )
			
			$mol_assert_equal( brain.population() , 2 )
			$mol_assert_equal( brain.predict( [ 1 ] ) , 1 )
			$mol_assert_equal( brain.predict( [ 0 ] ) , 0 )
		
		},

		'Left way'() {
			
			const brain = new $giper_iq_neuron(0)
			brain.learn( 1 , [ 0 ] )

			$mol_assert_equal( brain.population() , 2 )
			$mol_assert_equal( brain.predict( [ 1 ] ) , 0 )
			$mol_assert_equal( brain.predict( [ 0 ] ) , 1 )

		},

		'Both way'() {
		
			const brain = new $giper_iq_neuron(0)
			brain.learn( 1 , [ 1 ] )
			brain.learn( 1 , [ 0 ] )
		
			$mol_assert_equal( brain.population() , 3 )
			$mol_assert_equal( brain.predict( [] ) , 0 )
			$mol_assert_equal( brain.predict( [ 1 ] ) , 1 )
			$mol_assert_equal( brain.predict( [ 0 ] ) , 1 )
		
		},

		'Deep no switch'() {
		
			const brain = new $giper_iq_neuron(0)
			brain.learn( 1 , [ 1 ] )
			brain.learn( 1 , [ 1 , 1 ] )
		
			$mol_assert_equal( brain.population() , 2 )
			
		},
		
		'Deep switch'() {
			
			const brain = new $giper_iq_neuron(0)
			brain.learn( 1 , [ 1 ] )
			brain.learn( 0 , [ 0 , 1 ] )
			
			$mol_assert_equal( brain.population() , 3 )
			$mol_assert_equal( brain.predict( [] ) , 0 )
			$mol_assert_equal( brain.predict( [ 1 ] ) , 1 )
			$mol_assert_equal( brain.predict( [ 1 , 1 ] ) , 1 )
			$mol_assert_equal( brain.predict( [ 0 , 1 ] ) , 0 )
			$mol_assert_equal( brain.predict( [ 0 , 0 ] ) , 0 )
		
		},

		'Study history'() {
			
			const brain = new $giper_iq_neuron(0)
			brain.study( [ 1, 0, 1, 1 ] )
			
			$mol_assert_equal( brain.predict( [] ) , 1 )
			$mol_assert_equal( brain.predict( [ 1 ] ) , 0 )
			$mol_assert_equal( brain.predict( [ 1, 0 ] ) , 1 )
			$mol_assert_equal( brain.predict( [ 1, 0, 1 ] ) , 1 )
			$mol_assert_equal( brain.predict( [ 1, 0, 1, 1 ] ) , 0 )
			
		},

		'Non boolean'() {
			
			const brain = new $giper_iq_neuron(0)
			brain.study( [ 1, 2, 3, 1 ] )
			
			$mol_assert_equal( brain.predict( [] ) , 1 )
			$mol_assert_equal( brain.predict( [ 1 ] ) , 2 )
			$mol_assert_equal( brain.predict( [ 1, 2 ] ) , 3 )
			$mol_assert_equal( brain.predict( [ 1, 2, 3 ] ) , 1 )
			$mol_assert_equal( brain.predict( [ 1, 2, 3, 1 ] ) , 2 )
			
		},

		'Finite sequence generation'() {
			
			const brain = new $giper_iq_neuron(0)
			brain.study( [ 1, 2, 3, 4 ] )
			
			$mol_assert_equal( brain.generate( 5, [ 2 ] ) , [ 3, 4 ] )
			
		},

		'Limited infinite sequence generation'() {
			
			const brain = new $giper_iq_neuron(0)
			brain.study( [ 1, 2, 3, 1 ] )
			
			$mol_assert_equal( brain.generate( 5, [ 1 ] ) , [ 2, 3, 1, 2, 3 ] )
			
		},

		'String generation'() {
			
			const brain = new $giper_iq_neuron(' ')
			brain.remember( 'hello funny world' )
			brain.remember( 'world in the fire' )
			
			$mol_assert_equal( brain.generate( 20, 'hell' ).join( '' ) , 'o fire' )
			
		},

	})
}
