webpackJsonp([12],{"./node_modules/json-loader/index.js!./.cache/json/guide-what-and-why.json":function(e,t){e.exports={data:{allFile:{edges:[{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:60}}}},{node:{relativePath:"guide/what-and-why.md",childMarkdownRemark:{frontmatter:{title:"What & Why",order:0}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:50}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:30}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax Cheatsheet",order:1}}}},{node:{relativePath:"guide/editor-tools/editors-plugins.md",childMarkdownRemark:{frontmatter:{title:"Editors Plugins",order:20}}}},{node:{relativePath:"guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Extra Goodies",order:30}}}},{node:{relativePath:"guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Global Installation",order:10}}}},{node:{relativePath:"guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Editor Setup",order:10}}}},{node:{relativePath:"guide/meta/index.md",childMarkdownRemark:{frontmatter:{title:"Meta",order:1e3}}}},{node:{relativePath:"guide/meta/project-structure.md",childMarkdownRemark:{frontmatter:{title:"Project Structure",order:0}}}},{node:{relativePath:"guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Boolean",order:30}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring",order:130}}}},{node:{relativePath:"guide/language/exception.md",childMarkdownRemark:{frontmatter:{title:"Exception",order:175}}}},{node:{relativePath:"guide/language/external.md",childMarkdownRemark:{frontmatter:{title:"External",order:170}}}},{node:{relativePath:"guide/language/if-else.md",childMarkdownRemark:{frontmatter:{title:"If-Else",order:110}}}},{node:{relativePath:"guide/language/function.md",childMarkdownRemark:{frontmatter:{title:"Function",order:100}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:150}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:20}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"guide/language/let-binding.md",childMarkdownRemark:{frontmatter:{title:"Let Binding",order:10}}}},{node:{relativePath:"guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Integer & Float",order:40}}}},{node:{relativePath:"guide/language/list-and-array.md",childMarkdownRemark:{frontmatter:{title:"List & Array",order:80}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:140}}}},{node:{relativePath:"guide/language/object.md",childMarkdownRemark:{frontmatter:{title:"Object",order:175}}}},{node:{relativePath:"guide/language/module.md",childMarkdownRemark:{frontmatter:{title:"Module",order:180}}}},{node:{relativePath:"guide/language/more-on-type.md",childMarkdownRemark:{frontmatter:{title:"More on Type",order:120}}}},{node:{relativePath:"guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Overview",order:0}}}},{node:{relativePath:"guide/language/pattern-matching.md",childMarkdownRemark:{frontmatter:{title:"Pattern Matching!",order:135}}}},{node:{relativePath:"guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Record",order:60}}}},{node:{relativePath:"guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"String & Char",order:20}}}},{node:{relativePath:"guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Tuple",order:50}}}},{node:{relativePath:"guide/language/type.md",childMarkdownRemark:{frontmatter:{title:"Type!",order:15}}}},{node:{relativePath:"guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Variant!",order:70}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:40}}}}]},file:{relativePath:"guide/what-and-why.md",childMarkdownRemark:{html:'<h3 id="what-is-reason"><a href="#what-is-reason" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What Is Reason?</h3>\n<p>Reason is not a new language; it\'s a new syntax and toolchain powered by the battle-tested language, <a href="http://ocaml.org">OCaml</a>. Reason gives OCaml a familiar syntax geared toward JavaScript programmers, and caters to the existing NPM/Yarn workflow folks already know.</p>\n<p>In that regard, Reason can almost be considered as a solidly statically typed, faster and simpler cousin of JavaScript, minus the historical crufts, plus the features of ES2030 you can use today, and with access to both the JS and the OCaml ecosystem!</p>\n<p>Reason compiles to JavaScript thanks to our partner project, <a href="https://bucklescript.github.io/bucklescript/Manual.html">BuckleScript</a>, which compiles OCaml/Reason into readable JavaScript with smooth interop. Reason also compiles to fast, barebone assembly, thanks to OCaml itself.</p>\n<h3 id="why-reason"><a href="#why-reason" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why Reason?</h3>\n<blockquote>\n<p>"Why bother learning an <strong>entire</strong> new language?"</p>\n</blockquote>\n<p>This isn\'t what Reason\'s about.</p>\n<p>The realization is that 80% of OCaml\'s semantics (aka how it runs) already straightforwardly maps over to modern JavaScript and vice-versa*; if one has the luxury of leaving out a few corners of JavaScript and add a few nice things, one can actually achieve something that compiles to pretty readable JS and directly use 80% of its ecosystem &#x26; tooling. That is, on top of being able to compile to barebone assembly, iOS, Android and even <a href="http://www.algo-prog.info/ocapic/web/index.php?id=ocapic">microcontrollers</a>!</p>\n<p>However, it\'s unclear which features of JS to reshape, in order to fit it into the mold of a language with fast semantics and 100% sound typing. But we can <em>work backward</em>, from an already sound language with performance and simplicity taken into account, and give it a few tweaks so that it looks and acts a bit more like the better part of the familiar web language we\'ve come to know.</p>\n<p>All these decisions made it so that, for common use-cases, the learning curve of Reason isn\'t really higher than learning JS + a gradual type system; in return, you get:</p>\n<ul>\n<li><strong>A rock solid type system</strong>. OCaml types have 100% coverage (every line of code), inference (types can be deduced and aren\'t required to be written manually), and soundness (once it compiles, the types are guaranteed to be accurate).</li>\n<li><strong>An eye for simplicity &#x26; pragmatism</strong>. We allow opt-in side-effect, mutation and object for familiarity &#x26; interop, while keeping the rest of the language pure, immutable and functional.</li>\n<li><strong>A focus on performance &#x26; size</strong>. Reason\'s build system, <a href="http://bucklescript.github.io/bucklescript/Manual.html#_bucklescript_build_system_code_bsb_code"><code>bsb</code></a>, finishes building in less than 100ms (incremental). Our produced output is also <a href="https://twitter.com/bobzhang1988/status/827562467148623875">tiny</a>.</li>\n<li><strong>Incremental learning &#x26; codebase conversion</strong>. Reap the benefits of a fully typed file from day one. If everything else fails, <a href="/guide/javascript/interop">paste some raw JavaScript snippets right in your Reason file</a>.</li>\n<li><strong>Great ecosystem &#x26; tooling</strong>. Use <a href="/guide/editor-tools/editors-plugins">your favorite editor</a>, <a href="/guide/javascript/libraries">your favorite NPM package</a>, and any of your <a href="https://github.com/reasonml/reason-react">favorite</a> <a href="https://github.com/reasonml-community/bs-jest">existing</a> <a href="https://webpack.js.org">stack</a>.</li>\n</ul>\n<p>* Don\'t believe us? Check our <a href="/guide/javascript/syntax-cheatsheet">JS -> Reason cheat sheet</a> or try a few snippets of Reason in <a href="/try/">the playground</a> and observe the output at the right!</p>\n<h3 id="why-ocaml-as-the-backing-language-why-not-my-favorite-language"><a href="#why-ocaml-as-the-backing-language-why-not-my-favorite-language" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why OCaml As The Backing Language? Why Not [My Favorite Language]?</h3>\n<p>First of all, please understand that no matter which language we choose, we\'d get this question from most of you! =)</p>\n<p>Many backing languages would satisfy the previous section\'s points; the points below, however, have been deal-breakers in our considerations.</p>\n<ul>\n<li><strong>The ability to render to native code</strong>. OCaml\'s native (assembly) startup time is in <strong>single digit milliseconds</strong>. We have big plans to use Reason on native one day; meanwhile, we\'re focusing on adoption through great JavaScript compatibility.</li>\n<li><strong>Side-effects, mutation &#x26; other escape hatches</strong>. These aren\'t usually the shiny selling points of a language; but being able to bridge toward a part of a codebase without an elaborate interop/rewrite is crucial for us at Facebook. OCaml defaults to immutable and functional code, but having the escape hatches makes the initial adoption sometimes simply possible.</li>\n<li><strong>Implementation polish matters</strong>. OCaml\'s been refined over two decades and gets better every year. If we propose a new syntax &#x26; toolchain, we\'d like it not to have deal-breaking semantics &#x26; type "gotchas" and/or diminishing return, 80% onto the writing of a codebase.</li>\n<li><strong>The language for writing React</strong>. Reason\'s <a href="https://twitter.com/jordwalke">creator</a> also created <a href="https://facebook.github.io/react/">ReactJS</a>, whose first prototypes were written in SML, a distant cousin of OCaml. We\'ve transcribed ReactML into ReactJS for wide adoption. A few years later, we\'re now iterating on the future of ReactJS through <a href="//reasonml.github.io/reason-react/">ReasonReact</a>.</li>\n<li><strong>Nice, growing community</strong>. I mean, we\'re really nice. I\'m Canadian. We have members all over the world. If everything fails, ask in the Discord channel and <a href="https://twitter.com/ken_wheeler/status/894298052705615872">at least a few of our members in your timezone will answer</a>.</li>\n</ul>\n<h3 id="dont-like-reason"><a href="#dont-like-reason" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Don\'t Like Reason?</h3>\n<p>Make sure you talk to us in <a href="https://discord.gg/reasonml">Discord</a> first, to clear any misunderstanding/misconception! But if you <em>still</em> don\'t like Reason, here are some alternatives:</p>\n<ul>\n<li><a href="http://ocaml.org">OCaml</a>. Reason\'s just a syntax and toolchain layer on top of OCaml. The OCaml&#x3C;->Reason interop should be seamless since we share the same abstract syntax tree. BuckleScript works fine in OCaml, naturally. <a href="http://ocsigen.org/js_of_ocaml/">Js_of_ocaml</a> too.</li>\n<li><a href="http://rust-lang.org">Rust</a>. Close cousin of ours! Not garbage collected, focused on speed &#x26; safety.</li>\n<li><a href="http://elm-lang.org">Elm</a>. A cousin of ours! Make clean, fun webapps.</li>\n<li><a href="http://www.purescript.org">PureScript</a>. Inspired by Haskell, compiled to the web.</li>\n<li><a href="http://fable.io/">Fable</a>. Based on F#, which is closely related to OCaml.</li>\n<li><a href="https://clojurescript.org">ClojureScript</a>. Nothing in common with us on the surface, but prioritizes simplicity &#x26; great interop too.</li>\n</ul>\n<p>Hope that helps! Want to know more? Strike a conversation with any of us in the <a href="/community/">community</a>!</p>\n<p><em>Reason is a open source community project from Facebook</em>.</p>',frontmatter:{title:"What & Why"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/what-and-why.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-what-and-why-aff64ffc09052cb659c1.js.map