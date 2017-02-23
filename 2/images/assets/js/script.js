( function( $ ) {

    $( function( ) {

        // sidebar toggle
        $( '*[data-toggle="sidebar"]' ).click( function( ev ) {
            ev.preventDefault();

            var target = $( this ).data( 'target' );
            if ( $( target ).length === 0 ) {
                return false;
            }
            $( target ).toggleClass( 'in' );
            $( 'body' ).toggleClass( 'sidebar-in' );

            return false;
        } );

        // sidebar overlay clicked
        $( '#sidebar_overlay' ).click( function() {
            $( 'body' ).removeClass( 'sidebar-in' );
            $( '.sidebar' ).removeClass( 'in' );
        } );

        // submenu toggle
        $( '.sidebar-menu .has-submenu > a' ).click( function( ev ) {
            ev.preventDefault();
            $( this ).parent( '.has-submenu' ).toggleClass( 'open' );
            return false;
        } );

        // toggle password
        $( '.toggle-password' ).change( function() {
            if ( $( this ).prop( 'checked' ) ) {
                $( this ).closest( '.form-group' ).find( 'input[type="password"]' ).attr( 'type', 'text' );
            }else{
                $( this ).closest( '.form-group' ).find( 'input[type="text"]' ).attr( 'type', 'password' );
            }
        } );

    } );

}( jQuery ) );