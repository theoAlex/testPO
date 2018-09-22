                <div style={{ width: '90px', position: 'relative', top: '-20px' }}>
                  <div 
                  style={{ 
                    fontSize: '1.7em', 
                    fontWeight: '500', 
                    color: '#777', 
                    fontFamily: 'Ubuntu', 
                    width: '52px', 
                    textAlign: 'center' 
                  }}>
                    {format(post.frontmatter.date, 'MMM', {locale: deLocale})}
                  </div>
                  <div 
                  style={{ 
                    fontSize: '1em', 
                    padding: '0 5px', 
                    fontFamily: 'Lato', 
                    position: 'relative', 
                    top: '-4px', 
                    color: '#777' 
                }}>
                    {format(post.frontmatter.date, 'YYYY', {locale: deLocale})}
                  </div>
                  <hr 
                  style={{ 
                    background: '#ddd', 
                    margin: '3px 6px', 
                    position: 'relative', 
                    right: '3px', 
                    top: '-3px', 
                    width: '43px' 
                }}/>
                  <div 
                  style={{ 
                    fontSize: '1.7em', 
                    fontWeight: '500', 
                    textAlign: 'center', 
                    fontFamily: 'Montserrat', 
                    width: '48px', 
                    color: '#777', 
                    position: 'relative', 
                    top: '-4px' 
                  }}>
                    {format(post.frontmatter.date, 'D', {locale: deLocale})}
                  </div>
                </div>