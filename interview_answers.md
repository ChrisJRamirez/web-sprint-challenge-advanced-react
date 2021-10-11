# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

Functional components have no state and therefore just display data, without storing it. Furthermore, functional components do not use a render method, while it is a must for stateful components.
Stateful components need to be extended from React, and cannot just be written with plan JavaScript.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

componentWillMount is called immediately after a component is mounted and this occurs during the first phase or mounting phase.
componentWillUpdate is called during the update or second phase. This occurs before the second render.

3. Define stateful logic.

Stateful logic is a component that can be re-used by use of React/custom hooks.

4. What are the three step of creating a successful test? What is done in each phase?

Arrange - render the component and find/select the elements you would like to work with/test.
Act - do stuff with the selected elements, ie : fill out forms, submit, click buttons etc.
Assert - ensure that the components behaved in the way you expected to, always good to check with negative tests as well.