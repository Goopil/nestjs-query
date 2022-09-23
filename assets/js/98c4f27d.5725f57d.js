"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[1686],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>l});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),a=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=a(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),y=a(r),l=n,d=y["".concat(p,".").concat(l)]||y[l]||u[l]||i;return r?o.createElement(d,s(s({ref:t},c),{},{components:r})):o.createElement(d,s({ref:t},c))}));function l(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=y;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:n,s[1]=m;for(var a=2;a<i;a++)s[a]=r[a];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}y.displayName="MDXCreateElement"},9549:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>l,frontMatter:()=>m,metadata:()=>a,toc:()=>u});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),s=["components"],m={title:"v0.5.x to v0.6.x"},p=void 0,a={unversionedId:"migration-guides/v0.5.x-to-v0.6.x",id:"migration-guides/v0.5.x-to-v0.6.x",title:"v0.5.x to v0.6.x",description:"@InjectTypeOrmQueryService",source:"@site/docs/migration-guides/v0.5.x-to-v0.6.x.md",sourceDirName:"migration-guides",slug:"/migration-guides/v0.5.x-to-v0.6.x",permalink:"/nestjs-query/docs/migration-guides/v0.5.x-to-v0.6.x",draft:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/migration-guides/v0.5.x-to-v0.6.x.md",tags:[],version:"current",frontMatter:{title:"v0.5.x to v0.6.x"},sidebar:"docs",previous:{title:"v0.10.x to v0.11.x",permalink:"/nestjs-query/docs/migration-guides/v0.10.x-to-v0.11.x"}},c={},u=[{value:"<code>@InjectTypeOrmQueryService</code>",id:"injecttypeormqueryservice",level:3},{value:"<code>TypeOrmQueryService</code>",id:"typeormqueryservice",level:2},{value:"<code>AssemblerQueryService</code>",id:"assemblerqueryservice",level:2}],y={toc:u};function l(e){var t=e.components,r=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"injecttypeormqueryservice"},(0,i.kt)("inlineCode",{parentName:"h3"},"@InjectTypeOrmQueryService")),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.6.x")," an new decorator was added ",(0,i.kt)("inlineCode",{parentName:"p"},"@InjectTypeOrmQueryService")," to auto-create a TypeOrm query service."),(0,i.kt)("p",null,"This means you no longer need to manually create a service in order to expose your CRUD endpoints."),(0,i.kt)("p",null,"To enable decorator import the ",(0,i.kt)("inlineCode",{parentName:"p"},"NestjsQueryTypeOrmModule")," to your module definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemResolver } from './todo-item.resolver';\n\n@Module({\n  providers: [TodoItemResolver],\n  imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n})\nexport class TodoItemModule {}\n")),(0,i.kt)("p",null,"One you have imported the module you can inject a ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeOrmQueryService"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { QueryService } from '@ptc-org/nestjs-query-core';\nimport { CRUDResolver } from '@ptc-org/nestjs-query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { InjectTypeOrmQueryService } from '@ptc-org/nestjs-query-typeorm';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO) {\n  constructor(@InjectTypeOrmQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>) {\n    super(service);\n  }\n}\n")),(0,i.kt)("h2",{id:"typeormqueryservice"},(0,i.kt)("inlineCode",{parentName:"h2"},"TypeOrmQueryService")),(0,i.kt)("p",null,"In the previous version of ",(0,i.kt)("inlineCode",{parentName:"p"},"@nestjs-query")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeOrmQueryService")," translated between the DTO and Entity. For a more in-depth description see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tripss/nestjs-query/issues/41"},"#41")),(0,i.kt)("p",null,"In the latest version the ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeOrmQueryService")," only operates on entities."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"v0.5.x")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { QueryService } from '@ptc-org/nestjs-query-core';\nimport { TypeOrmQueryService } from '@ptc-org/nestjs-query-typeorm';\nimport { InjectRepository } from '@nestjs/typeorm';\nimport { Repository } from 'typeorm';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@QueryService(TodoItemDTO)\nexport class TodoItemService extends TypeOrmQueryService<TodoItemDTO, TodoItemEntity> {\n  constructor(@InjectRepository(TodoItemEntity) readonly repo: Repository<TodoItemEntity>) {\n    super(repo);\n  }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"v0.6.x")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { QueryService } from '@ptc-org/nestjs-query-core';\nimport { TypeOrmQueryService } from '@ptc-org/nestjs-query-typeorm';\nimport { InjectRepository } from '@nestjs/typeorm';\nimport { Repository } from 'typeorm';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@QueryService(TodoItemEntity)\nexport class TodoItemService extends TypeOrmQueryService<TodoItemEntity> {\n  constructor(@InjectRepository(TodoItemEntity) readonly repo: Repository<TodoItemEntity>) {\n    super(repo);\n  }\n}\n")),(0,i.kt)("h2",{id:"assemblerqueryservice"},(0,i.kt)("inlineCode",{parentName:"h2"},"AssemblerQueryService")),(0,i.kt)("p",null,"In previous versions of ",(0,i.kt)("inlineCode",{parentName:"p"},"nestjs-query")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryService")," would automatically translate betwen your DTO and database type. This created a soft-dependecy between the persistence service and the view layer. In ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.6.0")," ",(0,i.kt)("inlineCode",{parentName:"p"},"AssemblerQueryService")," was introduced to handle translating between your DTO and persistence type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { AssemblerQueryService, QueryService } from '@ptc-org/nestjs-query-core';\nimport { InjectTypeOrmQueryService } from '@ptc-org/nestjs-query-typeorm';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemAssembler } from './todo-item.assembler';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@QueryService(TodoItemDTO)\nexport class TodoItemService extends AssemblerQueryService<TodoItemDTO, TodoItemEntity> {\n  constructor(\n    assembler: TodoItemAssembler,\n    @InjectTypeOrmQueryService(TodoItemEntity) queryService: QueryService<TodoItemEntity>,\n  ) {\n    super(assembler, queryService);\n  }\n}\n")))}l.isMDXComponent=!0}}]);