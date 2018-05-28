# react-password-component

## WORK IN PROGRESS

Password component made in react with support for custom strengh verification

# usage

```js
import PasswordField from './wip';

const rules = [
      {
        message: "At least 6 characters",
        run: value => value.length > 5
      },
      {
        message: "At least 1 @",
        run: value => value.indexOf("@") !== -1
      },
      {
        message: "At most 8 characters",
        run: value => value.length <= 8
      }
    ];

<PasswordField rules={rules}>
```
