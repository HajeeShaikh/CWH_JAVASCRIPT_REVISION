const loadScript = ( src, callback ) =>
{
    let script = document.createElement( 'script' )
    script.src = src
    script.onload = () =>
    {
        console.log( "script loaded" );
        callback( null, src )
    }
    // Handling error

    script.onerror = () => { console.log( new Error( "src got some error ", src ) ) }

    document.body.appendChild( script )
}

loadScript( "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", function greeting ( error, src )
{
    if ( error )
    {
        console.log( error );
    }
    loadScript( "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap2.bundle.min.js", function greeting ( error, src )
    {
        if ( error )
        {
            console.log( error );
        }
        loadScript( "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap2.bundle.min.js", function greeting ( error, src )
        {
            if ( error )
            {
                console.log( error );
            }
            loadScript( "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap2.bundle.min.js", function greeting ( error, src )
            {
                if ( error )
                {
                    console.log( error );
                }
                loadScript( "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap2.bundle.min.js", function greeting ( error, src )
                {
                    if ( error )
                    {
                        console.log( error );
                    }
                    loadScript( "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap2.bundle.min.js", function greeting ( error, src )
                    {
                        if ( error )
                        {
                            console.log( error );
                        }
                        loadScript( "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap2.bundle.min.js", function greeting ( error, src )
                        {
                            if ( error )
                            {
                                console.log( error );
                            }
                            loadScript( "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap2.bundle.min.js", function greeting ( error, src )
                            {
                                if ( error )
                                {
                                    console.log( error );
                                }
                                loadScript( "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap2.bundle.min.js", function greeting ( error, src )
                                {
                                    if ( error )
                                    {
                                        console.log( error );
                                    }
                                    loadScript( "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap2.bundle.min.js", function greeting ( error, src )
                                    {
                                        if ( error )
                                        {
                                            console.log( error );
                                        }
                                        loadScript( "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap2.bundle.min.js", function greeting ( error, src )
                                        {
                                            if ( error )
                                            {
                                                console.log( error );
                                            }
                                            loadScript( "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap2.bundle.min.js", function greeting ( error, src )
                                            {
                                                if ( error )
                                                {
                                                    console.log( error );
                                                }
                                                loadScript( "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap2.bundle.min.js", function greeting ( error, src )
                                                {
                                                    if ( error )
                                                    {
                                                        console.log( error );
                                                    }
                                                    loadScript( "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap2.bundle.min.js", function greeting ( error, src )
                                                    {
                                                        if ( error )
                                                        {
                                                            console.log( error );
                                                        }
                                                        loadScript( "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap2.bundle.min.js", function greeting ( error, src )
                                                        {
                                                            if ( error )
                                                            {
                                                                console.log( error );
                                                            }
                                                            loadScript( "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap2.bundle.min.js", function greeting ( error, src )
                                                            {
                                                                if ( error )
                                                                {
                                                                    console.log( error );
                                                                }
                                                                loadScript( "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap2.bundle.min.js", function greeting ( error, src )
                                                                {
                                                                    if ( error )
                                                                    {
                                                                        console.log( error );
                                                                    }

                                                                } )

                                                            } )

                                                        } )

                                                    } )

                                                } )

                                            } )

                                        } )

                                    } )

                                } )

                            } )

                        } )

                    } )

                } )
            } )
        } )
    } )
} )
