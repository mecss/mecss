1. An alias exist if the property is **4 characters or less**. Example:

> `all` will not have an alias.

2. An alias exist if it's *4 characters or less*, **and** if its sub-properties are *more than 4 characters*. Example:

> `font` has **4 characters**, but their sub-properties like `font-family` or `font-weight` are **more than 4 characters**.

3. If a property is the **only one to start** with a *sequence of letters*, then the alias will be the **first letter**. Example:

> `quotes` is the **only property** which begin by **q**. So, then alias will be `q`.

4. If two properties start with **the same letters**, make sure to differentiate them with **as few letters as possible**. Example:

> `background` & `border` begin with **b**. So, the aliases will be `bg`& `bd`.

5. **multiple-keywords properties** & **sub-properties**:

    5.1 `justify-content`, `scroll-behavior` or `letter-spacing` are **multiple-keywords properties**, because they have **many properties**, but they don't have a **parent property**,

    5.2 `flex-direction`, `flex-shrink` or `flex-wrap` are **sub-properties**, because they have a **parent property**. Here: `flex`.

    5.3 The logic will be the same for the 2 cases. Example:

    >  `justify-content` will become `js` **without `-`**, because it's a multiple-keyword property.<br/>
    `flex-direction` will become `fl-d` **with a `-`**, because it's a sub-property.