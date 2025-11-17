namespace $.$$ {

	export class $giper_iq extends $.$giper_iq {

		right() {
			this.choice( 1 )
		}
		
		left() {
			this.choice( 0 )
		}

		choice( next: number ) {

			const brain = this.Brain()
			const history = this.history()
			
			let prediction = brain.predict( history )
			let teach = next
			
			if( this.score() > 0 && Math.random() < .02 ) teach = 1-teach
			brain.learn( teach , history )
			
			this.history([ ... history , teach ])
			if( next !== prediction ) this.wins( this.wins() + 1 )

			this.score_series([ ... this.score_series() , this.score() ])

		}
		
		@ $mol_mem
		history_log() {
			return this.history().map( val => val ? '▶' : '◀' ).join( '' ) || this.description()
		}

		@ $mol_mem
		wins( next = 0 ) {
			return next
		}
		
		@ $mol_mem
		score() {
			return Math.round( this.wins() / ( this.history().length + 1 ) * 200 - 100 )
		}
		
		@ $mol_mem
		score_final(): string {
			if( this.history().length !== 101 ) return $mol_mem_cached( ()=> this.score_final() ) || ''
			return this.score().toLocaleString( undefined, { signDisplay: "exceptZero" } ) + ' ' + this.rank()
		}
		
		@ $mol_mem
		rank() {
			const score = this.score()
			if( score >= +75 ) return this.ranks().XXL
			if( score >= +25 ) return this.ranks().XL
			if( score >= +10 ) return this.ranks().L
			if( score <= -75 ) return this.ranks().XXS
			if( score <= -25 ) return this.ranks().XS
			if( score <= -10 ) return this.ranks().S
			return this.ranks().M
		}

	}

}
