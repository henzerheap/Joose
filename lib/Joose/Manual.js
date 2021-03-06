/**

NAME
====

Joose.Manual - What is Joose, and how do I use it?


WHAT IS Joose?
==============

Joose is a complete object system for JavaScript. Consider any modern object-oriented language. 
It provides keywords for attribute declaration, object construction, inheritance, and maybe more. These keywords are part of the language, and you don't care how they are implemented.

Joose aims to do the same thing for JavaScript. We can't actually create new keywords, but we do offer "sugar" that looks a lot like them. More importantly, with Joose, you define your class declaratively, 
without needing to know about prototype chains, etc.

With Joose, you can concentrate on the logical structure of your classes, focusing on "what" rather than "how". A class definition with Joose reads like a list of very concise English sentences.

Joose provides complete introspection for all Joose-using classes. This means you can ask classes about their attributes, parents, children, methods, etc., all using a well-defined API.

Joose is based in large part on the [Moose][1] system, which in turn borrows a lot of from Perl 6 object system, as well as drawing on the best ideas from CLOS, Smalltalk, and many other languages.


WHAT ISN'T Joose?
=================

Joose isn't a new language or sources preprocessor. The code written in Joose, executes like regular JavaScript, and can be run in any modern JavaScript engine.


WHY Joose?
==========

Joose makes JavaScript OO both simpler and more powerful. It encapsulates JavaScript power tools in high-level declarative APIs which are easy to use. 
Best of all, you don't need to be a wizard to use it. 

But if you want to dig about in the guts, Joose lets you do that too, by using and extending its powerful introspection API.


AN EXAMPLE
==========

        Class('Person', {
            has : {
                firstName : { is : 'rw' },
                lastName : { is : 'rw' }
            }
        })


This is a complete and usable class definition!

        Class('User', {
            
            isa : Person,
            
            has : {
                password : { is : 'rw' },
                lastLogin : { is : 'rw' }
            },
            
            methods : {
                
                login : function (pwd) {
                    if (pwd != this.getPassword()) return false
                    
                    this.setLastLogin(new Date())
                    
                    return true
                }
            }
        })

We'll leave the line-by-line explanation of this code to other documentation, but you can see how Joose reduces common OO idioms to simple declarative constructs.


TABLE OF CONTENTS
=================

This manual consists of a number of documents.

- [Joose.Manual.Installation][installation]
    
    Describes the installation procedure for Joose.

- [Joose.Manual.Concepts][2]

    Introduces Joose concepts, and contrasts them against "raw" JavaScript.

- [Joose.Manual.Unsweetened][unsweetened]

    Shows two example classes, each written first with Joose and then with "raw JavaScript".

- [Joose.Manual.Classes][3]

    How do you make use of Joose in your classes? Now that I'm a Joose, how do I subclass something?

- [Joose.Manual.Attributes][4]

    Attributes are a core part of the Joose OO system. An attribute is a piece of data that an object has. Joose has a lot of attribute-related features!

- [Joose.Manual.Construction][5]

    Learn how objects are built in Joose.

- [Joose.Manual.MethodModifiers][6]

    A method modifier lets you say "before calling method X, do this first", or "wrap method X in this code". Method modifiers are particularly handy in roles and with attribute accessors.

- [Joose.Manual.Roles][7]

    A role is something a class does (like "Debuggable" or "Printable"). Roles provide a way of adding behavior to classes that is orthogonal to inheritance.

- [Joose.Manual.Traits][traits]

    A trait is just a role, applied to a particular instance and modified its behaviour only, not a whole class.

- [Joose.Manual.Static][8]

    Joose also provides static methods and attributes. 
    
- [Joose.Manual.Mutability][9]

    All Joose classes are dynamic or "mutable". Joose lets you add/remove attributes and methods, apply/unaplly roles, and much more - right in the run-time.

- [Joose.Manual.Reflection][10]

    Joose's meta API system lets you ask classes about their parent, children, methods, attributes, etc.

- [Joose.Manual.MetaRoles][metaroles]

    Joose allows you to modify not only class's behavior, but also behaviour of its metaclass. Read this document to know how. 
    
- [Joose.Manual.JooseX][11]

    This document describes a few of the most useful Joose extensions on JSAN.

- [Joose.Manual.BestPractices][12]

    Joose has a lot of features, and there's definitely more than one way to do it. However, we think that picking a subset of these features and using them consistently makes everyone's life easier.

- [Joose.Manual.FAQ][13]

    Frequently asked questions about Joose.

- [Joose.Manual.Contributing][14]

    Interested in hacking on Joose? Read this.

- [Joose.Manual.Delta][15]

    This document details backwards-incompatibilities and other major changes to Joose.

JUSTIFICATION
=============

If you're still asking yourself "Why do I need this?", then this section is for you.

- Another object system!?!?

 Yes, we know there are many, many ways to build objects in JavaScript, many of the JavaScript frameworks provide their own class system along with DOM manipulation capabilities. 
 
 Joose is different because it focus only on class system, following the principle : "Do one thing, and do it good".

- Is this for real? Or is this just an experiment?

 Joose is NOT an experiment or prototype; it is for real.

- Is this ready for use in production?

    Yes.

    Joose has been used successfully in production environments by many people and companies. There are Joose applications which have been in production with little or no issue now for year. 
    We consider it highly stable and we are committed to keeping it stable.

    Of course, in the end, you need to make this call yourself. If you have any questions or concerns, please feel free to email Nickolay or just stop by #joose on irc.freenode.org and ask away.


AUTHORS
=======

Nickolay Platonov [nplatonov@cpan.org](mailto:nplatonov@cpan.org)

Based on original Moose::Manual content, written by:

Dave Rolsky [autarch@urth.org](mailto:autarch@urth.org)

Stevan Little [stevan@iinteractive.com](mailto:stevan@iinteractive.com)


COPYRIGHT AND LICENSE
=====================

Copyright (c) 2008-2011, Malte Ubl, Nickolay Platonov

All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
* Neither the name of Malte Ubl nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission. 

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 


Documentation is based on original Moose::Manual documentation, copyright 2006-2009 by Infinity Interactive, Inc.

[1]: http://iinteractive.com/moose/
[2]: Manual/Concepts.html
[3]: Manual/Classes.html
[4]: Manual/Attributes.html
[5]: Manual/Construction.html
[6]: Manual/MethodModifiers.html
[7]: Manual/Roles.html
[8]: Manual/Static.html
[9]: Manual/Mutability.html
[10]: Manual/Reflection.html
[11]: Manual/JooseX.html
[12]: Manual/BestPractices.html
[13]: Manual/FAQ.html
[14]: Manual/Contributing.html
[15]: Manual/Delta.html
[traits]: Manual/Traits.html
[17]: Manual/MetaRoles.html
[installation]: Manual/Installation.html
[unsweetened]: Manual/Unsweetened.html
[metaroles]: Manual/MetaRoles.html

*/