Just because the standard `path` module didn't feel easy enough.

`setDir(s)` replaces all dirs.

    const p1 = new FilePath('a/b/c.md')
    const p2 = p1.setDir('x/y')
    // p1 == 'a/b/c.md'
    // p2 == 'x/y/c.md'

`setFile` changes the name of the (without the extension).

    const p1 = new FilePath('a/b/c.md')
    const p2 = p1.setFile('x')
    // p1 == 'a/b/c.md'
    // p2 == 'a/b/x.md'

`setExt` changes just the extension of the path

    const p1 = new FilePath('a/b/c.md')
    const p2 = p1.setExt('html')
    // p1 == 'a/b/c.md'
    // p2 == 'a/b/c.html'

`push(s)` appends directories at the end.

    const p1 = new FilePath('a/b/c.md')
    const p2 = p1.push('d/e')
    // p1 == 'a/b/c.md'
    // p2 == 'a/b/d/e/c.md'

`pop(n)` strips `n` directory levels from the end.

    const p1 = new FilePath('a/b/c.md')
    const p2 = p1.pop(1)
    // p1 == 'a/b/c.md'
    // p2 == 'a/c.md'

`shift(n)` strips `n` directory levels from the beginning.

    const p1 = new FilePath('a/b/c.md')
    const p2 = p1.shift(1)
    // p1 == 'a/b/c.md'
    // p2 == 'b/c.md'

`unshift(s)` prefixes directories at the beginning.

    const p1 = new FilePath('a/b/c.md')
    const p2 = p1.unshift('x/y')
    // p1 == 'a/b/c.md'
    // p2 == 'x/y/a/b/c.md'
