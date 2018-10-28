# RT - Reactive Template
![enter image description here](https://github.com/MinSiThu/reactive-template/blob/master/RT-logo.png?raw=true)
**RT** is a front-end framework like **Vue.js** but with little complexities and *easy to use and upgrade* by developers. 
Unlike Vue, **RT** mainly focus on the model layer of MVC while others focus on view layer. ***RT*** is a simple and powerful framework for developing medium-sized single page applications.

## Features

 - reactive UI
 - template engine - doT.js
 - simplicity
 - declarative rendering

## Installation
    <script src="path/reactive-template.js"></script>
## Usage

## *Simple declarative usage*

This is html part

    <div id='app'>
        <h1>{{=it.text}}</h1> 
    </div>

The following is written in `<script></script>`.

    let rtApp = RT({
		app:'#app',
		data : {
				text: 'Hello RT',
				},
	});
	rtApp.init();

## *Computed Value*
**RT** also supports computed props.

    let rtApp = RT({
    	app:'#app',
    	data : {
    		text: 'Hello RT',
    	},
	    computed:{
			 info:function(){
			 return `${this.text} from newbie RT....`; 	
			}
		 },
    });
	rtApp.init();
*

## Smooth Template	(from doT.js)

    {{ }}	for evaluation
    {{= }}	for interpolation
    {{! }}	for interpolation with encoding
    {{# }}	for compile-time evaluation/includes and partials
    {{## #}}for compile-time defines
    {{? }}	for conditionals
    {{~ }}	for array iteration
        
 *for example*; an array is iterated in this way.
 

    {{~it.array :value:index}}
	    <div>{{=value}}!</div>
    {{~}}
   More template usage can be seen at doT template [documentation](http://olado.github.io/doT/index.html).
 

## Handling Property
Property must be handled under the **proxyObject** of ***RT function*** return value.
*for example;* `rtApp.proxyObject.text = 'Si'` will rerender the UI automatically with new value.
That's the main reason why this framewrok name implies.

 
## Still in working draft?
**still missing a part for**  *event handling*
Event Handling is still done in *vanilla.js* or *jquery*.
## Any question?
You can contact me at [Facebook](https://www.facebook.com/profile.php?id=100008064318566) .
## Contributors
 

 - **Min Si Thu**

   
        
        
        
        
       
     
