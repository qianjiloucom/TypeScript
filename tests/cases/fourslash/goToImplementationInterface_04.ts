/// <reference path='fourslash.ts'/>

//// interface Fo/*interface_definition*/o {
////     (a: number): void
//// }
////
//// var bar: Foo = [|(a) => {/**0*/}|];
////
//// function whatever(x: Foo = [|(a) => {/**1*/}|] ) {
//// }
////
//// class Bar {
////     x: Foo = [|(a) => {/**2*/}|]
////
////     constructor(public f: Foo = [|function(a) {}|] ) {}
//// }


goTo.marker("interface_definition");
verify.allRangesAppearInImplementationList();