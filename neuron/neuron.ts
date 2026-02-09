namespace $ {

	export class $giper_iq_neuron< Value > extends Map< Value, $giper_iq_neuron< Value > > {
		
		/** Count of learning activation. */
		width = 1
		/** Count of subtree nodes including itself. */
		count = 1
		
		constructor(
			/** Prediction for next value. */
			public value: Value,
			/** How far from history end. */
			public depth = 0,
		) {
			super()
		}
		
		/** Compresses history using prediction and multiple escape values. */
		pack( history: ArrayLike<Value>, codes: readonly Value[] ): readonly Value[] {
			
			const packed = [] 
			let predicted = 0
			
			const commit = ()=> {
				if( !predicted ) return
				if( predicted === 1 ) {
					packed.push( history[ pos - 1 ] )
				} else {
					packed.push( codes[ predicted - 2 ] )
				}
				predicted = 0
			}
			
			for( var pos = 0; pos < history.length; ++ pos ) {
				const item = history[pos]
				if( this.predict( history, pos - 1 ) === item ) { // predicted
					++ predicted
					if( predicted > codes.length ) commit()
				} else { // raw
					commit()
					if( codes.indexOf( item ) !== -1 ) packed.push( codes[0] ) // escaping
					packed.push( item )
				}
			}
			commit()

			return packed
		}
		
		/** Revives history from compressed form using same prediction and escape codes. */
		take( packed: ArrayLike<Value>, codes: readonly Value[] ): readonly Value[] {
			
			const taken = [] as Value[]
			
			for( let i = 0; i < packed.length; ++i ) {
				const item = packed[i]
				const index = codes.indexOf( item )
				if( index == -1 ) { // raw
					taken.push( item )
				} else {
					const next = packed[ i + 1 ]
					if(( index === 0 )&&( codes.indexOf( next ) !== -1 )) { // escaped
						taken.push( next )
						++ i
					} else { // predicted
						for( let j = 0; j < index + 2; ++ j ) {
							taken.push( this.predict( taken ) )
						}
					}
				}
			}
			
			return taken
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
			
			const path = [] as $giper_iq_neuron<Value>[]
			const tail = this.locate( history, pos, path )
			for( const point of path ) ++ point.width
			
			if( tail.value === next && !tail.size ) return false
			
			const x =  pos - tail.depth
			if( x < 0 ) return false
			
			tail.set( history[ x ], new $giper_iq_neuron( next, tail.depth + 1 ) )
			for( const point of path ) ++ point.count
			
			return true
		}
		
		/** Limit neurons count. */
		limit( max: number ) {
			if( max < 1 ) return $mol_fail( new Error( 'Too low limit', { cause: { max } } ) )
			while( this.count > max ) this.shrink()
		}
		
		/** Cut one least activated neuron. */
		shrink() {
			
			let best_way = undefined as undefined | Value
			let best_kid = undefined as undefined | $giper_iq_neuron<Value>
			
			for( const [ way, kid ] of this ) {
				
				if( best_kid ) if( best_kid.width <= kid.width ) continue
				
				best_way = way
				best_kid = kid
				
			}
			
			if( best_kid!.count === 1 ) this.delete( best_way! )
			else best_kid!.shrink()
			
			-- this.count
			
		}

		/** Locate meaningful neuron for history. */
		locate( history : ArrayLike<Value>, pos = history.length - 1, path?: $giper_iq_neuron<Value>[] ): $giper_iq_neuron< Value > {
			
			path?.push( this )
			
			if( pos < 0 ) return this
			
			const kid = this.get( history[ pos ] )
			if( !kid ) return this
			
			return kid.locate( history, pos - 1, path )
			
		}

		toJSON() {
			return { val: this.value, way: [ ... this ] }
		}

		[ $mol_dev_format_head ]() {
			return $mol_dev_format_div( {},
				$mol_dev_format_native( this ),
				$mol_dev_format_accent( ' v=', this.value ),
				$mol_dev_format_shade( ' w=', this.width ),
				$mol_dev_format_shade( ' c=', this.count ),
			)
		}
		
	}

}
