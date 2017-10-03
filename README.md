eslint issue
------------

Passing `props` to a function and using `props.foo` results in linting failing with `foo` being an unused prop.

Destructuring in the function taking in `props` seems to work...

`npn run lint`

```
> eslint Foo.js
FAIL
20:9  error  'name' PropType is defined but prop is never used  react/no-unused-prop-types
```

`npm run lint-fixed`

```
> eslint Foo-Fixed.js
OK
```