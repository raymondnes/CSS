Selectors
Selectors simply refer to the HTML elements to which CSS rules apply; they’re what is actually being “selected” for each rule. The following subsections don’t cover every selector available, but they’re by far the most common and the ones you should get comfortable using first.

Universal Selector
The universal selector will select elements of any type, hence the name “universal”, and the syntax for it is a simple asterisk. In the example below, every element would have the color: purple; style applied to it.

* {
  color: purple;
}
Type Selectors
A type selector (or element selector) will select all elements of the given element type, and the syntax is just the name of the element:

<!-- index.html -->

<div>Hello, World!</div>
<div>Hello again!</div>
<p>Hi...</p>
<div>Okay, bye.</div>
/* styles.css */

div {
  color: white;
}
Here, all three <div> elements would be selected, while the <p> element wouldn’t be.

Class Selectors
Class selectors will select all elements with the given class, which is just an attribute you place on an HTML element. Here’s how you add a class to an HTML tag and select it in CSS:

<!-- index.html -->

<div class="alert-text">
  Please agree to our terms of service.
</div>
/* styles.css */

.alert-text {
  color: red;
}
Note the syntax for class selectors: a period immediately followed by the case-sensitive value of the class attribute. Classes aren’t required to be unique, so you can use the same class on as many elements as you want.

Another thing you can do with the class attribute is to add multiple classes to a single element as a space-separated list, such as class="alert-text severe-alert". Since whitespace is used to separate class names like this, you should never use spaces for multi-worded names and should use a hyphen instead.

ID Selectors
ID selectors are similar to class selectors. They select an element with the given ID, which is another attribute you place on an HTML element:

<!-- index.html -->

<div id="title">My Awesome 90's Page</div>
/* styles.css */

#title {
  background-color: red;
}
Instead of a period, we use a hashtag immediately followed by the case-sensitive value of the ID attribute. A common pitfall is people overusing the ID attribute when they don’t necessarily need to, and when classes will suffice. While there are cases where using an ID makes sense or is needed, such as taking advantage of specificity or having links redirect to a section on the current page, you should use IDs sparingly (if at all).

The major difference between classes and IDs is that an element can only have one ID. An ID cannot be repeated on a single page, and the ID attribute should not contain any whitespace at all.

Grouping Selector
What if we have two groups of elements that share some of their style declarations?

.read {
  color: white;
  background-color: black;
  /* several unique declarations */
}

.unread {
  color: white;
  background-color: black;
  /* several unique declarations */
}
Both our .read and .unread selectors share the color: white; and background-color: black; declarations, but otherwise have several of their own unique declarations. To cut down on the repetition, we can group these two selectors together as a comma-separated list:

.read,
.unread {
  color: white;
  background-color: black;
}

.read {
  /* several unique declarations */
}

.unread {
  /* several unique declarations */
}
Both of the examples above (with and without grouping) will have the same result, but the second example reduces the repetition of declarations and makes it easier to edit either the color or background-color for both classes at once.

Chaining Selectors
Another way to use selectors is to chain them as a list without any separation. Let’s say we had the following HTML:

<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection preview">This is where a preview for a post might go.</p>
</div>
We have two elements with the subsection class that have some sort of unique styles, but what if we only want to apply a separate rule to the element that also has header as a second class? Well, we could chain both the class selectors together in our CSS like so:

.subsection.header {
  color: red;
}
What .subsection.header does is it selects any element that has both the subsection and header classes. Notice how there isn’t any space between the .subsection and .header class selectors. This syntax basically works for chaining any combination of selectors, except for chaining more than one type selector.

This can also be used to chain a class and an ID, as shown below:

<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection" id="preview">This is where a preview for a post might go.</p>
</div>
You can take the two elements above and combine them with the following:

.subsection.header {
  color: red;
}

.subsection#preview {
  color: blue;
}
In general, you can’t chain more than one type selector since an element can’t be two different types at once. For example, chaining two type selectors like div and p would give us the selector divp, which wouldn’t work since the selector would try to find a literal <divp> element, which doesn’t exist.

Descendant Combinator
Combinators allow us to combine multiple selectors differently than either grouping or chaining them, as they show a relationship between the selectors. There are four types of combinators in total, but for right now we’re going to only show you the descendant combinator, which is represented in CSS by a single space between selectors. A descendant combinator will only cause elements that match the last selector to be selected if they also have an ancestor (parent, grandparent, etc) that matches the previous selector.

So something like .ancestor .child would select an element with the class child if it has an ancestor with the class ancestor. Another way to think of it is child will only be selected if it is nested inside of ancestor, no matter how deep. Take a quick look at the example below and see if you can tell which elements would be selected based on the CSS rule provided:

<!-- index.html -->

<div class="ancestor"> <!-- A -->
  <div class="contents"> <!-- B -->
    <div class="contents"> <!-- C -->
    </div>
  </div>
</div>

<div class="contents"></div> <!-- D -->
/* styles.css */

.ancestor .contents {
  /* some declarations */
}
In the above example, the first two elements with the contents class (B and C) would be selected, but that last element (D) won’t be. Was your guess correct?

There’s really no limit to how many combinators you can add to a rule, so .one .two .three .four would be totally valid. This would just select an element that has a class of four if it has an ancestor with a class of three, and if that ancestor has its own ancestor with a class of two, and so on. You generally want to avoid trying to select elements that need this level of nesting, though, as it can get pretty confusing and long, and it can cause issues when it comes to specificity.
