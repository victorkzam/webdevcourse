HTML Forms Cheatsheet
&lt;input&gt;
The HTML &lt;input&gt; element is one of the most used form elements. It can be displayed in several ways depending on the type attribute that determines how it gets rendered to a page.

Since there are so many different input attributes, this website covers the most important ones, and provides a list of all attributes that can be used.

## Input Type Text
&lt;input type=“text”&gt; defines a **single-line text input field**:

<form>
  <label for=“fname”>First name:</label><br>
  <input type=“text” id=“fname” name=“fname”><br>
  <label for=“lname”>Last name:</label><br>
  <input type=“text” id=“lname” name=“lname”>
</form>

## Input Type Password
&lt;input type=“password”&gt; defines a **password field**.

<form>
  <label for=“username”>Username:</label><br>
  <input type=“text” id=“username” name=“username”><br>
  <label for=“pwd”>Password:</label><br>
  <input type=“password” id=“pwd” name=“pwd”>
</form>

## Input Type Radio
Radio buttons let a user select ONLY ONE of a limited number of choices.
&lt;input type=“radio”&gt; defines a **radio button**.

<form>
  <input type=“radio” id=“male” name=“gender” value=“male”>
  <label for=“male”>Male</label><br>
  <input type=“radio” id=“female” name=“gender” value=“female”>
  <label for=“female”>Female</label><br>
  <input type=“radio” id=“other” name=“gender” value=“other”>
  <label for=“other”>Other</label>
</form>

## Input Type Checkbox
Checkboxes let a user select ZERO or MORE options of a limited number of choices.
&lt;input type=“checkbox”&gt; defines a **checkbox**.

<form>
  <input type=“checkbox” id=“vehicle1” name=“vehicle1” value=“Bike”>
  <label for=“vehicle1”> I have a bike</label><br>
  <input type=“checkbox” id=“vehicle2” name=“vehicle2” value=“Car”>
  <label for=“vehicle2”> I have a car</label><br>
  <input type=“checkbox” id=“vehicle3” name=“vehicle3” value=“Boat”>
  <label for=“vehicle3”> I have a boat</label>
</form>

## Input Type Submit
The form-handler is typically a server page with a script for processing input data.
The form-handler is specified in the form’s *action* attribute.
&lt;input type=&ldquo;submit&rdquo;&gt; defines a button for **submitting** form data to a **form-handler**.

<form action=“/action_page.php”>
  <label for=“fname”>First name:</label><br>
  <input type=“text” id=“fname” name=“fname” value=“John”><br>
  <label for=“lname”>Last name:</label><br>
  <input type=“text” id=“lname” name=“lname” value=“Doe”><br><br>
  <input type=“submit” value=“Submit”>
</form>

## Input Attributes
Attributes are meant to add value to each of the input types possible.
A common list of input restrictions is shown below:

Table

## Input Types
A list is included with all input types that can be used in HTML.
&lt;input type=&quot;button&quot;&gt;
&lt;input type=&quot;checkbox&quot;&gt;
&lt;input type=&quot;color&quot;&gt;
&lt;input type=&quot;date&quot;&gt;
&lt;input type=&quot;datetime-local&quot;&gt;
&lt;input type=&quot;email&quot;&gt;
&lt;input type=&quot;file&quot;&gt;
&lt;input type=&quot;hidden&quot;&gt;
&lt;input type=&quot;image&quot;&gt;
&lt;input type=&quot;month&quot;&gt;
&lt;input type=&quot;number&quot;&gt;
&lt;input type=&quot;password&quot;&gt;
&lt;input type=&quot;radio&quot;&gt;
&lt;input type=&quot;range&quot;&gt;
&lt;input type=&quot;reset&quot;&gt;
&lt;input type=&quot;search&quot;&gt;
&lt;input type=&quot;submit&quot;&gt;
&lt;input type=&quot;tel&quot;&gt;
&lt;input type=&quot;text&quot;&gt;
&lt;input type=&quot;time&quot;&gt;
&lt;input type=&quot;url&quot;&gt;
&lt;input type=&quot;week&quot;&gt;