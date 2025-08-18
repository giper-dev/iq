namespace $ {
	
	export class $hd_iq_text extends Object {
		
		readonly brain = new $hd_iq_neuron( '' )

		tokenize( text: string ) {
			return text.split( /([\p{L}\d]+)/u ).filter( Boolean )
		}
		
		remember( text: string ) {
			return this.brain.remember( this.tokenize( text ) )
		}
		
		generate( limit: number, prefix: string ) {
			return this.brain.generate( limit, this.tokenize( prefix ) ).join( '' )
		}
		
	}
	
}
