namespace $ {

	export class $giper_iq_neuron< Value > extends Map< Value, $giper_iq_neuron< Value > > {
		
		constructor(
			public value: Value,
			public depth = 0,
		) {
			super()
		}
		
		/** Generate story which continuous history. */
		generate( limit: number, history: ArrayLike<Value> = [] ): readonly Value[] {
			
			const story = Array.from( history )
			
			for( let i = 0; i < limit; ++i ) {
				
				const tail = this.locate( story )
				if( tail.depth < story.length && tail.size ) break
			
				story.push( tail.value )
			}
			
			return story.slice( history.length )
		}

		/** Predict next step for history. */
		predict( history: ArrayLike<Value>, pos = history.length - 1 ): Value {
			return this.locate( history, pos ).value
		}
		
		/** Study history untill remember. */
		remember( history: ArrayLike<Value> ): boolean {
			let studied = false
			while( this.study( history ) ) studied = true
			return studied
		}
		
		/** Learn history step by step. */
		study( history: ArrayLike<Value> ): boolean {
			
			let learned = false
			
			for( let pos = 0; pos < history.length; ++ pos ) {
				if( this.learn( history[ pos ], history, pos - 1 ) ) learned = true
			}
			
			return learned
		}
		
		/** Learn next step for history */
		learn( next: Value , history: ArrayLike<Value>, pos = history.length - 1 ): boolean {
			
			if( pos < 0 ) {
			
				if( this.value === next ) return false
				
				this.value = next
				return true
				
			}
			
			const tail = this.locate( history, pos )
			if( tail.value === next && !tail.size ) return false
			
			const x =  pos - tail.depth
			if( x < 0 ) return false
			
			tail.set( history[ x ], new $giper_iq_neuron( next, tail.depth + 1 ) )
			
			return true
		}

		/** Locate meaningful neuron for history. */
		locate( history : ArrayLike<Value>, pos = history.length - 1 ): $giper_iq_neuron< Value > {
			
			if( pos < 0 ) return this
			
			const kid = this.get( history[ pos ] )
			if( !kid ) return this
			
			return kid.locate( history, pos - 1 )
			
		}

		/** Count of neurons in subtree. */
		population(): number {
			return 1 + [ ... this.values() ].reduce( ( sum, kid )=> kid ? sum + kid.population() : sum, 0 )
		}
		
		toJSON() {
			return { val: this.value, way: [ ... this ] }
		}

		[ $mol_dev_format_head ]() {
			return $mol_dev_format_accent(
				$mol_dev_format_native( this ),
				' ',
				this.value,
			)
		}
		
	}

}
