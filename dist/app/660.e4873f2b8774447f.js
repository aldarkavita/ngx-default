"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[660],{5660:(C,x,g)=>{g.d(x,{a:()=>X});var t=g(9212),p=g(3475),d=g(6814),f=g(95),b=g(9185),a=g(2812),m=g(6512);function r(e,c){if(1&e&&(t.TgZ(0,"i",16),t._uU(1),t.qZA()),2&e){const n=t.oxw(2).$implicit;t.Q6J("title",n.icon),t.xp6(1),t.hij(" ",n.icon," ")}}function s(e,c){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const n=t.oxw(2).$implicit;t.xp6(1),t.Oqu(n.text)}}function u(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"wbutton",14),t.NdJ("click",function(){t.CHM(n);const o=t.oxw().$implicit;return t.KtG(o.click())}),t.YNc(1,r,2,2,"i",15)(2,s,2,1,"span",6),t.qZA()}if(2&e){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",n.icon),t.xp6(1),t.Q6J("ngIf",n.text)}}function h(e,c){if(1&e&&(t.ynx(0),t.YNc(1,u,3,2,"wbutton",13),t.BQk()),2&e){const n=t.oxw(3);t.xp6(1),t.Q6J("ngIf",n.config.create)}}function M(e,c){if(1&e&&(t.ynx(0),t.YNc(1,h,2,1,"ng-container",9),t.BQk()),2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",n.config.headerButtons)}}function O(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"wbutton",14),t.NdJ("click",function(){t.CHM(n);const o=t.oxw(2);return t.KtG(o.config.create())}),t._uU(1," + "),t.TgZ(2,"span"),t._uU(3,"Add new"),t.qZA()()}}function P(e,c){if(1&e&&(t.TgZ(0,"div",11)(1,"h3",12),t._uU(2),t.qZA(),t.YNc(3,M,2,1,"ng-container",6)(4,O,4,0,"wbutton",13),t.qZA()),2&e){const n=t.oxw();t.xp6(2),t.Oqu(n.title),t.xp6(1),t.Q6J("ngIf",n.config.headerButtons),t.xp6(1),t.Q6J("ngIf",n.config.create)}}function w(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"div",17)(1,"div",18),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.searchShow=!o.searchShow)}),t.qZA(),t.TgZ(2,"input",19),t.NdJ("ngModelChange",function(o){t.CHM(n);const _=t.oxw();return t.KtG(_.onSearch.emit(o))})("ngModelChange",function(o){t.CHM(n);const _=t.oxw();return t.KtG(_.searching_text=o)}),t.qZA()()}if(2&e){const n=t.oxw();t.ekj("table-search--active",n.searchShow),t.xp6(2),t.Q6J("ngModel",n.searching_text)}}function v(e,c){1&e&&(t.TgZ(0,"th"),t._uU(1,"No."),t.qZA())}function T(e,c){1&e&&(t.TgZ(0,"span",23),t._uU(1," keyboard_backspace "),t.qZA())}function y(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"th",20)(1,"div",21),t.NdJ("click",function(){const _=t.CHM(n).$implicit,l=t.oxw();return t.KtG(l.sort(_))}),t.TgZ(2,"span"),t._uU(3),t.qZA(),t.YNc(4,T,2,0,"span",22),t.qZA()()}if(2&e){const n=c.$implicit,i=t.oxw();t.xp6(1),t.ekj("_sortActiveDown","desc"===i.sort_type.direction&&n.field===i.sort_type.title)("_sortActiveUp","asc"===i.sort_type.direction&&n.field===i.sort_type.title),t.xp6(2),t.Oqu(n.title),t.xp6(1),t.Q6J("ngIf",i.sortable[n.field])}}function k(e,c){1&e&&t.GkF(0)}function Z(e,c){if(1&e&&t.YNc(0,k,1,0,"ng-container",27),2&e){const n=t.oxw(2);t.Q6J("ngTemplateOutlet",n.action.template)}}function A(e,c){1&e&&t._uU(0,"Actions")}function J(e,c){1&e&&t.GkF(0)}function I(e,c){if(1&e&&(t.TgZ(0,"th"),t.YNc(1,Z,1,1,"ng-template",null,24,t.W1O)(3,A,1,0,"ng-template",null,25,t.W1O)(5,J,1,0,"ng-container",26),t.qZA()),2&e){const n=t.MAs(2),i=t.MAs(4),o=t.oxw();t.xp6(5),t.Q6J("ngIf",o.action)("ngIfThen",n)("ngIfElse",i)}}function Q(e,c){if(1&e&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Oqu(n.num)}}function E(e,c){if(1&e&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&e){const n=t.oxw().$implicit,i=t.oxw().$implicit;t.uIk("data-label",n.title+":\xa0"),t.xp6(1),t.hij(" ",i[n.field]," ")}}function q(e,c){1&e&&t.GkF(0)}const F=e=>({$implicit:e});function N(e,c){if(1&e&&(t.TgZ(0,"td"),t.YNc(1,q,1,0,"ng-container",31),t.qZA()),2&e){const n=t.oxw().$implicit,i=t.oxw().$implicit,o=t.oxw();t.uIk("data-label",n.title+":\xa0"),t.xp6(1),t.Q6J("ngTemplateOutlet",o.custom_cell[n.field])("ngTemplateOutletContext",t.VKq(3,F,i))}}function U(e,c){1&e&&t.GkF(0)}function G(e,c){if(1&e&&(t.ynx(0),t.YNc(1,E,2,2,"ng-template",null,29,t.W1O)(3,N,2,5,"ng-template",null,30,t.W1O)(5,U,1,0,"ng-container",26),t.BQk()),2&e){const n=c.$implicit,i=t.MAs(2),o=t.MAs(4),_=t.oxw(2);t.xp6(5),t.Q6J("ngIf",_.custom_cell[n.field])("ngIfThen",o)("ngIfElse",i)}}function D(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"i",38),t.NdJ("click",function(){t.CHM(n);const o=t.oxw().$implicit,_=t.oxw(3).$implicit;return t.KtG(o.click(_))}),t._uU(1),t.qZA()}if(2&e){const n=t.oxw().$implicit;t.Q6J("title",n.icon),t.xp6(1),t.hij(" ",n.icon," ")}}function Y(e,c){if(1&e&&(t.TgZ(0,"a",39)(1,"i",16),t._uU(2),t.qZA()()),2&e){const n=t.oxw().$implicit;t.s9C("routerLink",n.href),t.xp6(1),t.Q6J("title",n.icon),t.xp6(1),t.hij(" ",n.icon," ")}}function $(e,c){if(1&e&&(t.TgZ(0,"a",39)(1,"i",16),t._uU(2),t.qZA()()),2&e){const n=t.oxw().$implicit,i=t.oxw(3).$implicit;t.s9C("routerLink",n.hrefFunc(i)),t.xp6(1),t.Q6J("title",n.icon),t.xp6(1),t.hij(" ",n.icon," ")}}function K(e,c){if(1&e&&(t.ynx(0),t.YNc(1,D,2,2,"i",36)(2,Y,3,3,"a",37)(3,$,3,3,"a",37),t.BQk()),2&e){const n=c.$implicit;t.xp6(1),t.Q6J("ngIf",!n.href&&!n.hrefFunc),t.xp6(1),t.Q6J("ngIf",n.href),t.xp6(1),t.Q6J("ngIf",n.hrefFunc)}}function z(e,c){if(1&e&&(t.ynx(0),t.YNc(1,K,4,3,"ng-container",9),t.BQk()),2&e){const n=t.oxw(3);t.xp6(1),t.Q6J("ngForOf",n.config.buttons)}}function H(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"i",40),t.NdJ("click",function(){t.CHM(n);const o=t.oxw(2).$implicit,_=t.oxw();return t.KtG(_.config.update(o))}),t._uU(1," edit "),t.qZA()}}function j(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"i",41),t.NdJ("click",function(){t.CHM(n);const o=t.oxw(2).$implicit,_=t.oxw();return t.KtG(_.config.delete(o))}),t._uU(1," delete_outline "),t.qZA()}}function R(e,c){if(1&e&&(t.TgZ(0,"td",32)(1,"div",33),t.YNc(2,z,2,1,"ng-container",6)(3,H,2,0,"i",34)(4,j,2,0,"i",35),t.qZA()()),2&e){const n=t.oxw(2);t.xp6(2),t.Q6J("ngIf",n.config.buttons),t.xp6(1),t.Q6J("ngIf",n.config.update),t.xp6(1),t.Q6J("ngIf",n.config.delete)}}function B(e,c){if(1&e&&(t.TgZ(0,"tr"),t.YNc(1,Q,2,1,"td",6)(2,G,6,3,"ng-container",9)(3,R,5,3,"td",28),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.config.num),t.xp6(1),t.Q6J("ngForOf",n.columns),t.xp6(1),t.Q6J("ngIf",n.config.delete||n.config.update||n.config.buttons)}}function L(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"div",52)(1,"div",53),t.NdJ("click",function(){const _=t.CHM(n).$implicit,l=t.oxw(3);return t.KtG(l.changePerPage(_))}),t._uU(2),t.qZA()()}if(2&e){const n=c.$implicit,i=t.oxw(3);t.xp6(1),t.ekj("selected",n===i.config.perPage),t.xp6(1),t.hij(" ",n," ")}}function S(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"div",45)(1,"div",46),t._uU(2,"Showing items per page"),t.qZA(),t.TgZ(3,"div",47),t.NdJ("clickOutside",function(){t.CHM(n);const o=t.oxw(2);return t.KtG(o.select_page_size=!1)}),t.TgZ(4,"div",48),t.NdJ("click",function(){t.CHM(n);const o=t.oxw(2);return t.KtG(o.select_page_size=!o.select_page_size)}),t._uU(5),t.qZA(),t.TgZ(6,"div",49),t.YNc(7,L,3,3,"div",50),t.qZA()(),t.TgZ(8,"div",51)(9,"span"),t._uU(10),t.qZA(),t.TgZ(11,"span"),t._uU(12," of "),t.qZA(),t.TgZ(13,"span"),t._uU(14),t.ALo(15,"search"),t.qZA()()()}if(2&e){const n=t.oxw(2);let i;t.xp6(3),t.ekj("open",n.select_page_size),t.xp6(2),t.hij(" ",n.config.perPage," "),t.xp6(2),t.Q6J("ngForOf",n.config.pageSizeOptions),t.xp6(3),t.AsE(" ",(n.config.page-1)*n.config.perPage+1," - ",n.config.page*n.config.perPage>(null==n.rows?null:n.rows.length)&&(null==n.rows?null:n.rows.length)||n.config.page*n.config.perPage," "),t.xp6(4),t.hij(" ",null==(i=t.Dn7(15,7,n.rows,n.searching_text,n.config.searchBy||"title"))?null:i.length," ")}}function W(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"div",54)(1,"wbutton",55),t.NdJ("click",function(){t.CHM(n);const o=t.oxw(2);return t.KtG(o.config.page=1)}),t._UZ(2,"i",56),t.qZA(),t.TgZ(3,"wbutton",57),t.NdJ("click",function(){t.CHM(n);const o=t.oxw(2);return t.KtG(o.previous())}),t._UZ(4,"i",56),t.qZA(),t.TgZ(5,"wbutton",58),t.NdJ("click",function(){t.CHM(n);const o=t.oxw(2);return t.KtG(o.next())}),t._UZ(6,"i",56),t.qZA(),t.TgZ(7,"wbutton",59),t.NdJ("click",function(){t.CHM(n);const o=t.oxw(2);return t.KtG(o.lastPage())}),t._UZ(8,"i",56),t.qZA()()}if(2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("disabled",1===n.config.page),t.xp6(2),t.Q6J("disabled",1===n.config.page),t.xp6(2),t.Q6J("disabled",n.config.page*n.config.perPage>(null==n.rows?null:n.rows.length)),t.xp6(2),t.Q6J("disabled",n.isLast())}}function V(e,c){if(1&e&&(t.TgZ(0,"tfoot",42),t.YNc(1,S,16,11,"div",43)(2,W,9,4,"div",44),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.config.perPage),t.xp6(1),t.Q6J("ngIf",n.config.perPage)}}let X=(()=>{class e{constructor(){this.config={},this.columns=[],this.rows=[],this.value="_id",this.title="",this.onSearch=new t.vpe,this.select_page_size=!1,this.searching_text="",this.custom_cell={},this.sort_type={},this.sortable={}}ngOnInit(){this.default_config();for(let n=0;n<this.columns.length;n++)"string"==typeof this.columns[n]&&(this.columns[n]={title:this.columns[n],field:this.columns[n]})}default_config(){this.config.pageSizeOptions||(this.config.pageSizeOptions=[5,10,25]),this.config.perPage||(this.config.perPage=5),this.config.page||(this.config.page=1),this.config.searchable||(this.config.searchable=!1)}ngAfterContentInit(){for(let n=0;n<this.sortHeaders.toArray().length;n++)this.sortable[this.sortHeaders.toArray()[n].cell]=!0;for(let n=0;n<this.cell.toArray().length;n++){const i=this.cell.toArray()[n];this.custom_cell[i.cell]=i.template}}next(){this.config.page*this.config.perPage<this.rows.length&&(this.config.page+=1)}previous(){this.config.page>1&&(this.config.page-=1)}changePerPage(n){this.config.perPage=n,(this.config.page-1)*this.config.perPage>this.rows.length&&this.lastPage(),this.select_page_size=!1}lastPage(){this.config.page=Math.ceil(this.rows.length/this.config.perPage)}isLast(){return this.rows&&this.config.page==Math.ceil(this.rows.length/this.config.perPage)||!1}sort(n){this.sort_type.title!=n.title&&(this.sort_type={}),this.sortable[n.field]&&(this.sort_type={title:n.field,direction:("string"!=typeof this.sort_type.direction?"asc":"asc"==this.sort_type.direction&&"desc")||void 0})}static#t=this.\u0275fac=function(i){return new(i||e)};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["wtable"]],contentQueries:function(i,o,_){if(1&i&&(t.Suo(_,p.i$,5),t.Suo(_,p.nQ,5),t.Suo(_,p.Y0,4),t.Suo(_,p.bk,4)),2&i){let l;t.iGM(l=t.CRH())&&(o.action=l.first),t.iGM(l=t.CRH())&&(o.editForm=l.first),t.iGM(l=t.CRH())&&(o.cell=l),t.iGM(l=t.CRH())&&(o.sortHeaders=l)}},inputs:{config:"config",columns:"columns",rows:"rows",value:"value",title:"title"},outputs:{onSearch:"onSearch"},decls:15,vars:15,consts:[[1,"wtable"],["class","users__header w-card__header",4,"ngIf"],[1,"table-flex","_jc-sb","_ai-c"],["class","table-search",3,"table-search--active",4,"ngIf"],["cellpadding","0","cellspacing","0",1,"table"],[1,"table-header"],[4,"ngIf"],["scope","col",4,"ngFor","ngForOf"],[1,"table-body"],[4,"ngFor","ngForOf"],["class","table-footer",4,"ngIf"],[1,"users__header","w-card__header"],[1,"w-forms__title"],["class","table-plus-btn","type","button",3,"click",4,"ngIf"],["type","button",1,"table-plus-btn",3,"click"],["class","material-icons",3,"title",4,"ngIf"],[1,"material-icons",3,"title"],[1,"table-search"],[1,"table-search__icon",3,"click"],["placeholder","Search...","type","text",1,"table-search__input",3,"ngModel","ngModelChange"],["scope","col"],[1,"table-header__sort",3,"click"],["class","material-icons icon-arrow",4,"ngIf"],[1,"material-icons","icon-arrow"],["customAction",""],["defaultAction",""],[4,"ngIf","ngIfThen","ngIfElse"],[4,"ngTemplateOutlet"],["class","table-body__last-td","data-label","Actions:\xa0",4,"ngIf"],["defaultRows",""],["customRows",""],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-label","Actions:\xa0",1,"table-body__last-td"],[1,"table__actions"],["class","material-icons","title","Edit",3,"click",4,"ngIf"],["class","material-icons","title","Delete",3,"click",4,"ngIf"],["class","material-icons",3,"title","click",4,"ngIf"],[3,"routerLink",4,"ngIf"],[1,"material-icons",3,"title","click"],[3,"routerLink"],["title","Edit",1,"material-icons",3,"click"],["title","Delete",1,"material-icons",3,"click"],[1,"table-footer"],["class","item-page",4,"ngIf"],["class","table-footer__pagination",4,"ngIf"],[1,"item-page"],[1,"item-page__text"],[1,"item-page__dropdown",3,"clickOutside"],[1,"caption",3,"click"],[1,"list"],["class","item",4,"ngFor","ngForOf"],[1,"item-page__result"],[1,"item"],[3,"click"],[1,"table-footer__pagination"],[1,"table-footer__arrow","_start",3,"disabled","click"],[1,"chevron"],[1,"table-footer__arrow","_left",3,"disabled","click"],[1,"table-footer__arrow","_right",3,"disabled","click"],[1,"table-footer__arrow","_end",3,"disabled","click"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0),t.YNc(1,P,5,3,"div",1),t.TgZ(2,"div",2),t.YNc(3,w,3,3,"div",3),t.qZA(),t.TgZ(4,"table",4)(5,"thead",5)(6,"tr"),t.YNc(7,v,2,0,"th",6)(8,y,5,6,"th",7)(9,I,6,3,"th",6),t.qZA()(),t.TgZ(10,"tbody",8),t.YNc(11,B,4,3,"tr",9),t.ALo(12,"page"),t.ALo(13,"search"),t.qZA(),t.YNc(14,V,3,2,"tfoot",10),t.qZA()()),2&i&&(t.xp6(1),t.Q6J("ngIf",o.title),t.xp6(2),t.Q6J("ngIf",o.config.searchable),t.xp6(4),t.Q6J("ngIf",o.config.num),t.xp6(1),t.Q6J("ngForOf",o.columns),t.xp6(1),t.Q6J("ngIf",o.config.delete||o.config.update),t.xp6(2),t.Q6J("ngForOf",t.Dn7(12,7,t.Dn7(13,11,o.rows,o.searching_text,o.config.searchBy||"title"),o.config,o.sort_type)),t.xp6(3),t.Q6J("ngIf",o.config.perPage||o.config.formCreate&&o.config.create))},dependencies:[d.sg,d.O5,d.tP,f.Fj,f.JJ,f.On,b._k,a.r,m.rH,b.Cf,b.sn],styles:['[_ngcontent-%COMP%]:root{--c-white: #fff;--c-black: #000;--c-grey: #e7e7e7;--c-grey-dark: #bfbfbf;--c-basic: #3558ae;--c-primary: #256eff;--c-primary-hover: #0051f1;--c-secondary: red;--c-bg-primary: #f3f4f7;--c-bg-secondary: #ffffff;--c-bg-tertiary: #fcfdfe;--c-border: #f0f1f7;--c-shadow: #f3f3f3;--c-text-primary: #666666;--c-text-secondary: #19235c;--c-placeholder: #adb8c6;--c-warn: #e67e22;--c-error: #e74c3c;--c-error-hover: #d62c1a;--c-success: #14c76e;--c-info: #17a2b8}html.dark[_ngcontent-%COMP%]:root{--c-basic: #333;--c-bg-primary: #282828;--c-bg-secondary: #343434;--c-bg-tertiary: #404040;--c-border: #404040;--c-shadow: #444444;--c-text-primary: #ffffff;--c-text-secondary: #ffffff;--c-placeholder: #7a7a7a}.wtable[_ngcontent-%COMP%]{background:var(--c-bg-secondary);box-shadow:var(--c-shadow);border-radius:10px;padding-bottom:70px;max-width:100%;height:auto;margin:0 auto;position:relative}@media (max-width: 991px){.wtable[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}}@media screen and (max-width: 599px){.wtable[_ngcontent-%COMP%]{padding-bottom:50px}}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{border-collapse:collapse;margin:0;padding:0;width:100%;table-layout:fixed}.wtable[_ngcontent-%COMP%]   .table-flex[_ngcontent-%COMP%]{display:flex}.wtable[_ngcontent-%COMP%]   .table-flex._jc-sb[_ngcontent-%COMP%]{justify-content:space-between}.wtable[_ngcontent-%COMP%]   .table-flex._ai-c[_ngcontent-%COMP%]{align-items:center}.wtable[_ngcontent-%COMP%]   .table-plus-btn[_ngcontent-%COMP%]{cursor:pointer;font-size:16px;font-weight:500;border:0;display:flex;justify-content:center;align-items:center;min-width:140px;height:45px;border-radius:4px;padding:5px 12px;background-color:var(--c-primary);color:var(--c-primary);border:1px solid var(--c-primary)}.wtable[_ngcontent-%COMP%]   .table-plus-btn[_ngcontent-%COMP%]:hover{box-shadow:0 0 3px 0 var(--c-primary);background-color:var(--c-primary);color:var(--c-bg-secondary)}.wtable[_ngcontent-%COMP%]   .table-plus-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:5px}@media screen and (max-width: 599px){.wtable[_ngcontent-%COMP%]   .table-plus-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}}@media screen and (max-width: 599px){.wtable[_ngcontent-%COMP%]   .table-plus-btn[_ngcontent-%COMP%]{position:absolute;right:15px}}.wtable[_ngcontent-%COMP%]   .table-search[_ngcontent-%COMP%]{position:relative;display:flex;padding:10px 0}.wtable[_ngcontent-%COMP%]   .table-search--active[_ngcontent-%COMP%]   .table-search__input[_ngcontent-%COMP%]{max-width:300px;transition:.5s all ease-in-out;opacity:1}.wtable[_ngcontent-%COMP%]   .table-search--active[_ngcontent-%COMP%]   .table-search__icon[_ngcontent-%COMP%]:before{background:#334d6e}.wtable[_ngcontent-%COMP%]   .table-search--active[_ngcontent-%COMP%]   .table-search__icon[_ngcontent-%COMP%]:after{border-color:#334d6e}.wtable[_ngcontent-%COMP%]   .table-search__input[_ngcontent-%COMP%]{max-width:0;transition:.5s all ease-in-out;border:0;border-bottom:1px solid #334d6e;opacity:0}.wtable[_ngcontent-%COMP%]   .table-search__icon[_ngcontent-%COMP%]{width:40px;position:relative;height:35px;transition:all 1s;z-index:4;cursor:pointer}.wtable[_ngcontent-%COMP%]   .table-search__icon[_ngcontent-%COMP%]:before{content:"";position:absolute;margin:auto;inset:12px 0 0 15px;width:8px;height:2px;background:#9f9f9f;transform:rotate(45deg);transition:.5s}.wtable[_ngcontent-%COMP%]   .table-search__icon[_ngcontent-%COMP%]:after{content:"";position:absolute;margin:auto;inset:-5px 0 0 -5px;width:15px;height:15px;border-radius:50%;border:2px solid #9f9f9f;transition:all .5s}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-header__sort[_ngcontent-%COMP%]{position:relative;cursor:pointer}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-header__sort[_ngcontent-%COMP%]   .icon-arrow[_ngcontent-%COMP%]{transform:rotate(90deg);font-size:var(--fs);position:absolute;top:3px;cursor:pointer}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{position:relative;padding:0 16px;height:48px;text-align:left;font-weight:500;font-size:calc(var(--fs) - 2px);font-size:var(--fs);line-height:calc(var(--fs) + 8px);letter-spacing:var(--letter-spacing);text-transform:capitalize;color:var(--c-text-primary);border-bottom:1px solid var(--c-border);overflow:hidden;text-overflow:ellipsis}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .icon-arrow[_ngcontent-%COMP%]{opacity:0;transition:.3s all ease-in-out}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:hover   .icon-arrow[_ngcontent-%COMP%]{opacity:1;transition:.3s all ease-in-out}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .table-header__sort._sortActiveDown[_ngcontent-%COMP%]   .icon-arrow[_ngcontent-%COMP%]{transform:rotate(-90deg);opacity:1}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .table-header__sort._sortActiveUp[_ngcontent-%COMP%]   .icon-arrow[_ngcontent-%COMP%]{opacity:1}@media all and (max-width: 991.9px){.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{display:none;text-align:left}}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child{width:140px}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{cursor:pointer;padding:5px 16px;height:60px;text-align:left;vertical-align:middle;font-size:calc(var(--fs) - 2px);line-height:calc(var(--fs) + 8px);letter-spacing:var(--letter-spacing);color:var(--c-text-primary);word-break:break-word;display:table-cell;border-bottom:1px solid var(--c-border)}@media all and (max-width: 991.9px){.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;column-gap:5px;border-bottom:0;border:2px solid var(--c-border);height:auto;min-height:60px}}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);word-break:keep-all;display:inline-block;font-weight:500;font-size:var(--fs);line-height:calc(var(--fs) + 8px);letter-spacing:var(--letter-spacing);text-transform:capitalize;color:var(--c-text-primary);text-overflow:ellipsis}@media (min-width: 992px){.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{display:none}}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]{border-bottom:none}@media (max-width: 991.9px){.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]{border-bottom:2px solid var(--c-border)}}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-right:none}@media (max-width: 992px){.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-right:2px solid var(--c-border)}}@media (max-width: 992px){.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{margin-top:20px}}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child{border-right:none}@media (max-width: 991.9px){.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-body__last-td[_ngcontent-%COMP%]{margin-bottom:20px;border-bottom:3px solid var(--c-border)}}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-body__last-td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] + i[_ngcontent-%COMP%]{margin-left:15px}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-body__last-td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:22px;width:22px}.wtable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-body__last-td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:var(--c-primary)}.wtable[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]{height:65px;display:flex;gap:120px;position:absolute;width:100%;left:0;bottom:0;padding:0 8px 0 15px;align-items:center;justify-content:space-between}@media screen and (max-width: 599px){.wtable[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]{height:90px;padding:10px 20px;flex-direction:column;position:static;gap:20px}}.wtable[_ngcontent-%COMP%]   .table-footer__pagination[_ngcontent-%COMP%]{grid-column:12;justify-self:end;display:flex;align-items:center;position:relative;bottom:15px}@media (max-width: 599px){.wtable[_ngcontent-%COMP%]   .table-footer__pagination[_ngcontent-%COMP%]{bottom:0;left:5px}}.wtable[_ngcontent-%COMP%]   .table-footer__arrow[_ngcontent-%COMP%]{border:0;background:none;width:30px;height:30px;margin-right:30px;cursor:pointer}.wtable[_ngcontent-%COMP%]   .table-footer__arrow[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]{position:relative;display:block;min-width:22px;min-height:22px;border:2px solid transparent;border-radius:100px}.wtable[_ngcontent-%COMP%]   .table-footer__arrow[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]:before{position:absolute;width:2px;height:90%;background-color:var(--c-grey);mix-blend-mode:overlay;top:8%}.wtable[_ngcontent-%COMP%]   .table-footer__arrow[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]:after{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:10px;border-bottom:2px solid var(--c-grey);border-right:2px solid var(--c-grey);mix-blend-mode:overlay;transform:rotate(135deg);left:2px;top:2px}.wtable[_ngcontent-%COMP%]   .table-footer__arrow[_ngcontent-%COMP%]:disabled   i[_ngcontent-%COMP%]:after{border-color:#9f9f9f}.wtable[_ngcontent-%COMP%]   .table-footer__arrow[_ngcontent-%COMP%]:disabled   i[_ngcontent-%COMP%]:before{background:#9f9f9f}.wtable[_ngcontent-%COMP%]   .table-footer__arrow._start[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]{position:relative;left:1px}.wtable[_ngcontent-%COMP%]   .table-footer__arrow._start[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]:after{left:8px;top:4px}.wtable[_ngcontent-%COMP%]   .table-footer__arrow._start[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]:before{display:block;left:2px;content:""}.wtable[_ngcontent-%COMP%]   .table-footer__arrow._left[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]{position:relative;left:4px}.wtable[_ngcontent-%COMP%]   .table-footer__arrow._left[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]:after{top:4px}.wtable[_ngcontent-%COMP%]   .table-footer__arrow._right[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]:after{transform:rotate(315deg);top:4px}.wtable[_ngcontent-%COMP%]   .table-footer__arrow._end[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]{position:relative;left:2px}.wtable[_ngcontent-%COMP%]   .table-footer__arrow._end[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]:after{left:-3px;top:4px;transform:rotate(315deg)}.wtable[_ngcontent-%COMP%]   .table-footer__arrow._end[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]:before{display:block;left:11px;content:""}.wtable[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   .item-page[_ngcontent-%COMP%]{grid-column:2/span 10;justify-self:end;font-size:12px;color:#9f9f9f;letter-spacing:1px;display:flex;align-items:center}.wtable[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   .item-page__dropdown[_ngcontent-%COMP%]{position:relative;margin:0 10px;font-weight:700}.wtable[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   .item-page__dropdown[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]{background-color:transparent;padding:11px 24px;border-radius:4px;border:1px solid var(--c-border);cursor:pointer}.wtable[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   .item-page__dropdown[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]:hover{background-color:var(--c-primary);color:var(--c-bg-secondary)}.wtable[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   .item-page__dropdown[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{position:absolute;background-color:var(--c-bg-secondary);width:100%;bottom:100%;flex-direction:column;border-radius:4px 4px 0 0;display:none;z-index:999}.wtable[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   .item-page__dropdown[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding:11px 20px;cursor:pointer;text-align:center}.wtable[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   .item-page__dropdown[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{background-color:var(--c-primary);color:var(--c-bg-secondary)}.wtable[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   .item-page__dropdown[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item.selected[_ngcontent-%COMP%]{font-weight:700}.wtable[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   .item-page__dropdown.open[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]{border-radius:0 0 4px 4px}.wtable[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   .item-page__dropdown.open[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:flex;flex-direction:column-reverse;border:1px solid var(--c-border);border-bottom:0}.wtable[_ngcontent-%COMP%]   .field-form[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;left:0;top:0;background-color:var(--c-bg-secondary);z-index:11;display:flex;flex-direction:column}.wtable[_ngcontent-%COMP%]   .field-form__list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-content:flex-start;overflow-y:auto;padding:20px;flex-grow:1}.wtable[_ngcontent-%COMP%]   .field-form__item[_ngcontent-%COMP%]{color:var(--c-bg-secondary);border-radius:5px;margin:5px;flex-basis:calc(20% - 10px)}@media screen and (max-width: 900px){.wtable[_ngcontent-%COMP%]   .field-form__item[_ngcontent-%COMP%]{flex-basis:calc(50% - 10px)}}@media screen and (max-width: 599px){.wtable[_ngcontent-%COMP%]   .field-form__item[_ngcontent-%COMP%]{flex-basis:calc(100% - 10px)}}.wtable[_ngcontent-%COMP%]   .field-form__span[_ngcontent-%COMP%]{display:block;color:#9f9f9f;font-weight:700;margin-bottom:5px}.wtable[_ngcontent-%COMP%]   .field-form__input[_ngcontent-%COMP%]{width:100%;padding:10px;color:#334d6e;border:1px solid #9f9f9f;border-radius:10px}.wtable[_ngcontent-%COMP%]   .field-form__input[_ngcontent-%COMP%]::placeholder{text-transform:capitalize}.wtable[_ngcontent-%COMP%]   .field-form__action[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;flex-wrap:wrap;padding:20px;background-color:#e0e0e0}.wtable[_ngcontent-%COMP%]   .field-form__action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{cursor:pointer;margin-right:20px;padding:10px 20px;border:0;outline:0;border-radius:10px;color:var(--c-bg-secondary)}.wtable[_ngcontent-%COMP%]   .field-form__action[_ngcontent-%COMP%]   button._cancel[_ngcontent-%COMP%]{background-color:#9f9f9f}.wtable[_ngcontent-%COMP%]   .field-form__action[_ngcontent-%COMP%]   button._create[_ngcontent-%COMP%]{background-color:#53a1d6}.wtable[_ngcontent-%COMP%]   .field-form__action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:#9f9f9f}.wtable[_ngcontent-%COMP%]   .field-form__action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-right:0}@media all and (max-width: 991.9px){.wtable[_ngcontent-%COMP%]{width:100%}}.users__header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:0 15px;font-weight:500}.users__header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{transition:all .3s}.modal-table[_ngcontent-%COMP%]   .wtable[_ngcontent-%COMP%]{border:1px solid var(--c-border);border-radius:4px;background:transparent}@media screen and (max-width: 479px){.item-page__text[_ngcontent-%COMP%]{display:none}.wtable[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   .item-page__dropdown[_ngcontent-%COMP%]{margin:0 10px 0 0}.wtable[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   .item-page__dropdown[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]{padding:6px 12px}}']})}return e})()},3475:(C,x,g)=>{g.d(x,{Y0:()=>p,bk:()=>d,i$:()=>f,nQ:()=>b});var t=g(9212);let p=(()=>{class a{constructor(r){this.template=r}static#t=this.\u0275fac=function(s){return new(s||a)(t.Y36(t.Rgc))};static#n=this.\u0275dir=t.lG2({type:a,selectors:[["ng-template","cell",""]],inputs:{cell:"cell"}})}return a})(),d=(()=>{class a{constructor(r){this.template=r}static#t=this.\u0275fac=function(s){return new(s||a)(t.Y36(t.Rgc))};static#n=this.\u0275dir=t.lG2({type:a,selectors:[["ng-template","sort",""]],inputs:{cell:"cell"}})}return a})(),f=(()=>{class a{constructor(r){this.template=r}static#t=this.\u0275fac=function(s){return new(s||a)(t.Y36(t.Rgc))};static#n=this.\u0275dir=t.lG2({type:a,selectors:[["ng-template","actions",""]]})}return a})(),b=(()=>{class a{constructor(r){this.template=r}static#t=this.\u0275fac=function(s){return new(s||a)(t.Y36(t.Rgc))};static#n=this.\u0275dir=t.lG2({type:a,selectors:[["ng-template","customEdit",""]]})}return a})()}}]);