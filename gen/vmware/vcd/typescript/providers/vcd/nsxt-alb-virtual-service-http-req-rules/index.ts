// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtAlbVirtualServiceHttpReqRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#id NsxtAlbVirtualServiceHttpReqRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX-T ALB Virtual Service ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#virtual_service_id NsxtAlbVirtualServiceHttpReqRules#virtual_service_id}
  */
  readonly virtualServiceId: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#rule NsxtAlbVirtualServiceHttpReqRules#rule}
  */
  readonly rule: NsxtAlbVirtualServiceHttpReqRulesRule[] | cdktf.IResolvable;
}
export interface NsxtAlbVirtualServiceHttpReqRulesRuleActionsModifyHeader {
  /**
  * One of the following HTTP header actions. Options - ADD, REMOVE, REPLACE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#action NsxtAlbVirtualServiceHttpReqRules#action}
  */
  readonly action: string;
  /**
  * HTTP header name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#name NsxtAlbVirtualServiceHttpReqRules#name}
  */
  readonly name: string;
  /**
  * HTTP header value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#value NsxtAlbVirtualServiceHttpReqRules#value}
  */
  readonly value?: string;
}

export function nsxtAlbVirtualServiceHttpReqRulesRuleActionsModifyHeaderToTerraform(struct?: NsxtAlbVirtualServiceHttpReqRulesRuleActionsModifyHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function nsxtAlbVirtualServiceHttpReqRulesRuleActionsModifyHeaderToHclTerraform(struct?: NsxtAlbVirtualServiceHttpReqRulesRuleActionsModifyHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtAlbVirtualServiceHttpReqRulesRuleActionsModifyHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpReqRulesRuleActionsModifyHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtAlbVirtualServiceHttpReqRulesRuleActionsModifyHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class NsxtAlbVirtualServiceHttpReqRulesRuleActionsModifyHeaderList extends cdktf.ComplexList {
  public internalValue? : NsxtAlbVirtualServiceHttpReqRulesRuleActionsModifyHeader[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): NsxtAlbVirtualServiceHttpReqRulesRuleActionsModifyHeaderOutputReference {
    return new NsxtAlbVirtualServiceHttpReqRulesRuleActionsModifyHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NsxtAlbVirtualServiceHttpReqRulesRuleActionsRedirect {
  /**
  * Host to which redirect the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#host NsxtAlbVirtualServiceHttpReqRules#host}
  */
  readonly host?: string;
  /**
  * Should the query part be preserved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#keep_query NsxtAlbVirtualServiceHttpReqRules#keep_query}
  */
  readonly keepQuery?: boolean | cdktf.IResolvable;
  /**
  * Path to which redirect the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#path NsxtAlbVirtualServiceHttpReqRules#path}
  */
  readonly path?: string;
  /**
  * Port to which redirect the request. Default is 80 for HTTP and 443 for HTTPS protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#port NsxtAlbVirtualServiceHttpReqRules#port}
  */
  readonly port?: string;
  /**
  * HTTP or HTTPS protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#protocol NsxtAlbVirtualServiceHttpReqRules#protocol}
  */
  readonly protocol: string;
  /**
  * One of the redirect status codes - 301, 302, 307
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#status_code NsxtAlbVirtualServiceHttpReqRules#status_code}
  */
  readonly statusCode: number;
}

export function nsxtAlbVirtualServiceHttpReqRulesRuleActionsRedirectToTerraform(struct?: NsxtAlbVirtualServiceHttpReqRulesRuleActionsRedirectOutputReference | NsxtAlbVirtualServiceHttpReqRulesRuleActionsRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    keep_query: cdktf.booleanToTerraform(struct!.keepQuery),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
  }
}


export function nsxtAlbVirtualServiceHttpReqRulesRuleActionsRedirectToHclTerraform(struct?: NsxtAlbVirtualServiceHttpReqRulesRuleActionsRedirectOutputReference | NsxtAlbVirtualServiceHttpReqRulesRuleActionsRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_query: {
      value: cdktf.booleanToHclTerraform(struct!.keepQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.numberToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtAlbVirtualServiceHttpReqRulesRuleActionsRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpReqRulesRuleActionsRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._keepQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepQuery = this._keepQuery;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtAlbVirtualServiceHttpReqRulesRuleActionsRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._keepQuery = undefined;
      this._path = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._statusCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._keepQuery = value.keepQuery;
      this._path = value.path;
      this._port = value.port;
      this._protocol = value.protocol;
      this._statusCode = value.statusCode;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // keep_query - computed: false, optional: true, required: false
  private _keepQuery?: boolean | cdktf.IResolvable; 
  public get keepQuery() {
    return this.getBooleanAttribute('keep_query');
  }
  public set keepQuery(value: boolean | cdktf.IResolvable) {
    this._keepQuery = value;
  }
  public resetKeepQuery() {
    this._keepQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepQueryInput() {
    return this._keepQuery;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // status_code - computed: false, optional: false, required: true
  private _statusCode?: number; 
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
  public set statusCode(value: number) {
    this._statusCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}
export interface NsxtAlbVirtualServiceHttpReqRulesRuleActionsRewriteUrl {
  /**
  * Path to use for the rewritten URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#existing_path NsxtAlbVirtualServiceHttpReqRules#existing_path}
  */
  readonly existingPath: string;
  /**
  * Host to use for the rewritten URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#host_header NsxtAlbVirtualServiceHttpReqRules#host_header}
  */
  readonly hostHeader: string;
  /**
  * Whether or not to keep the existing query string when rewriting the URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#keep_query NsxtAlbVirtualServiceHttpReqRules#keep_query}
  */
  readonly keepQuery?: boolean | cdktf.IResolvable;
  /**
  * Query string to use or append to the existing query string in the rewritten URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#query NsxtAlbVirtualServiceHttpReqRules#query}
  */
  readonly query?: string;
}

export function nsxtAlbVirtualServiceHttpReqRulesRuleActionsRewriteUrlToTerraform(struct?: NsxtAlbVirtualServiceHttpReqRulesRuleActionsRewriteUrlOutputReference | NsxtAlbVirtualServiceHttpReqRulesRuleActionsRewriteUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_path: cdktf.stringToTerraform(struct!.existingPath),
    host_header: cdktf.stringToTerraform(struct!.hostHeader),
    keep_query: cdktf.booleanToTerraform(struct!.keepQuery),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function nsxtAlbVirtualServiceHttpReqRulesRuleActionsRewriteUrlToHclTerraform(struct?: NsxtAlbVirtualServiceHttpReqRulesRuleActionsRewriteUrlOutputReference | NsxtAlbVirtualServiceHttpReqRulesRuleActionsRewriteUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_path: {
      value: cdktf.stringToHclTerraform(struct!.existingPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_header: {
      value: cdktf.stringToHclTerraform(struct!.hostHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_query: {
      value: cdktf.booleanToHclTerraform(struct!.keepQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtAlbVirtualServiceHttpReqRulesRuleActionsRewriteUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpReqRulesRuleActionsRewriteUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingPath = this._existingPath;
    }
    if (this._hostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeader = this._hostHeader;
    }
    if (this._keepQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepQuery = this._keepQuery;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtAlbVirtualServiceHttpReqRulesRuleActionsRewriteUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._existingPath = undefined;
      this._hostHeader = undefined;
      this._keepQuery = undefined;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._existingPath = value.existingPath;
      this._hostHeader = value.hostHeader;
      this._keepQuery = value.keepQuery;
      this._query = value.query;
    }
  }

  // existing_path - computed: false, optional: false, required: true
  private _existingPath?: string; 
  public get existingPath() {
    return this.getStringAttribute('existing_path');
  }
  public set existingPath(value: string) {
    this._existingPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get existingPathInput() {
    return this._existingPath;
  }

  // host_header - computed: false, optional: false, required: true
  private _hostHeader?: string; 
  public get hostHeader() {
    return this.getStringAttribute('host_header');
  }
  public set hostHeader(value: string) {
    this._hostHeader = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderInput() {
    return this._hostHeader;
  }

  // keep_query - computed: false, optional: true, required: false
  private _keepQuery?: boolean | cdktf.IResolvable; 
  public get keepQuery() {
    return this.getBooleanAttribute('keep_query');
  }
  public set keepQuery(value: boolean | cdktf.IResolvable) {
    this._keepQuery = value;
  }
  public resetKeepQuery() {
    this._keepQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepQueryInput() {
    return this._keepQuery;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface NsxtAlbVirtualServiceHttpReqRulesRuleActions {
  /**
  * modify_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#modify_header NsxtAlbVirtualServiceHttpReqRules#modify_header}
  */
  readonly modifyHeader?: NsxtAlbVirtualServiceHttpReqRulesRuleActionsModifyHeader[] | cdktf.IResolvable;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#redirect NsxtAlbVirtualServiceHttpReqRules#redirect}
  */
  readonly redirect?: NsxtAlbVirtualServiceHttpReqRulesRuleActionsRedirect;
  /**
  * rewrite_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#rewrite_url NsxtAlbVirtualServiceHttpReqRules#rewrite_url}
  */
  readonly rewriteUrl?: NsxtAlbVirtualServiceHttpReqRulesRuleActionsRewriteUrl;
}

export function nsxtAlbVirtualServiceHttpReqRulesRuleActionsToTerraform(struct?: NsxtAlbVirtualServiceHttpReqRulesRuleActionsOutputReference | NsxtAlbVirtualServiceHttpReqRulesRuleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    modify_header: cdktf.listMapper(nsxtAlbVirtualServiceHttpReqRulesRuleActionsModifyHeaderToTerraform, true)(struct!.modifyHeader),
    redirect: nsxtAlbVirtualServiceHttpReqRulesRuleActionsRedirectToTerraform(struct!.redirect),
    rewrite_url: nsxtAlbVirtualServiceHttpReqRulesRuleActionsRewriteUrlToTerraform(struct!.rewriteUrl),
  }
}


export function nsxtAlbVirtualServiceHttpReqRulesRuleActionsToHclTerraform(struct?: NsxtAlbVirtualServiceHttpReqRulesRuleActionsOutputReference | NsxtAlbVirtualServiceHttpReqRulesRuleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    modify_header: {
      value: cdktf.listMapperHcl(nsxtAlbVirtualServiceHttpReqRulesRuleActionsModifyHeaderToHclTerraform, true)(struct!.modifyHeader),
      isBlock: true,
      type: "set",
      storageClassType: "NsxtAlbVirtualServiceHttpReqRulesRuleActionsModifyHeaderList",
    },
    redirect: {
      value: nsxtAlbVirtualServiceHttpReqRulesRuleActionsRedirectToHclTerraform(struct!.redirect),
      isBlock: true,
      type: "list",
      storageClassType: "NsxtAlbVirtualServiceHttpReqRulesRuleActionsRedirectList",
    },
    rewrite_url: {
      value: nsxtAlbVirtualServiceHttpReqRulesRuleActionsRewriteUrlToHclTerraform(struct!.rewriteUrl),
      isBlock: true,
      type: "list",
      storageClassType: "NsxtAlbVirtualServiceHttpReqRulesRuleActionsRewriteUrlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtAlbVirtualServiceHttpReqRulesRuleActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpReqRulesRuleActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modifyHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyHeader = this._modifyHeader?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    if (this._rewriteUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewriteUrl = this._rewriteUrl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtAlbVirtualServiceHttpReqRulesRuleActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._modifyHeader.internalValue = undefined;
      this._redirect.internalValue = undefined;
      this._rewriteUrl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._modifyHeader.internalValue = value.modifyHeader;
      this._redirect.internalValue = value.redirect;
      this._rewriteUrl.internalValue = value.rewriteUrl;
    }
  }

  // modify_header - computed: false, optional: true, required: false
  private _modifyHeader = new NsxtAlbVirtualServiceHttpReqRulesRuleActionsModifyHeaderList(this, "modify_header", true);
  public get modifyHeader() {
    return this._modifyHeader;
  }
  public putModifyHeader(value: NsxtAlbVirtualServiceHttpReqRulesRuleActionsModifyHeader[] | cdktf.IResolvable) {
    this._modifyHeader.internalValue = value;
  }
  public resetModifyHeader() {
    this._modifyHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyHeaderInput() {
    return this._modifyHeader.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new NsxtAlbVirtualServiceHttpReqRulesRuleActionsRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: NsxtAlbVirtualServiceHttpReqRulesRuleActionsRedirect) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }

  // rewrite_url - computed: false, optional: true, required: false
  private _rewriteUrl = new NsxtAlbVirtualServiceHttpReqRulesRuleActionsRewriteUrlOutputReference(this, "rewrite_url");
  public get rewriteUrl() {
    return this._rewriteUrl;
  }
  public putRewriteUrl(value: NsxtAlbVirtualServiceHttpReqRulesRuleActionsRewriteUrl) {
    this._rewriteUrl.internalValue = value;
  }
  public resetRewriteUrl() {
    this._rewriteUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteUrlInput() {
    return this._rewriteUrl.internalValue;
  }
}
export interface NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaClientIpAddress {
  /**
  * Criteria to use for IP address matching the HTTP request. Options - IS_IN, IS_NOT_IN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#criteria NsxtAlbVirtualServiceHttpReqRules#criteria}
  */
  readonly criteria: string;
  /**
  * A set of IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#ip_addresses NsxtAlbVirtualServiceHttpReqRules#ip_addresses}
  */
  readonly ipAddresses: string[];
}

export function nsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaClientIpAddressToTerraform(struct?: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaClientIpAddressOutputReference | NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaClientIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: cdktf.stringToTerraform(struct!.criteria),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
  }
}


export function nsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaClientIpAddressToHclTerraform(struct?: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaClientIpAddressOutputReference | NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaClientIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: cdktf.stringToHclTerraform(struct!.criteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaClientIpAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaClientIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria;
    }
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaClientIpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._criteria = undefined;
      this._ipAddresses = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._criteria = value.criteria;
      this._ipAddresses = value.ipAddresses;
    }
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria?: string; 
  public get criteria() {
    return this.getStringAttribute('criteria');
  }
  public set criteria(value: string) {
    this._criteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria;
  }

  // ip_addresses - computed: false, optional: false, required: true
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_addresses'));
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }
}
export interface NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaCookie {
  /**
  * Criteria to use for matching cookies in the HTTP request. Options - EXISTS, DOES_NOT_EXIST, BEGINS_WITH, DOES_NOT_BEGIN_WITH, CONTAINS, DOES_NOT_CONTAIN, ENDS_WITH, DOES_NOT_END_WITH, EQUALS, DOES_NOT_EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#criteria NsxtAlbVirtualServiceHttpReqRules#criteria}
  */
  readonly criteria: string;
  /**
  * Name of the HTTP cookie whose value is to be matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#name NsxtAlbVirtualServiceHttpReqRules#name}
  */
  readonly name: string;
  /**
  * String values to match for an HTTP cookie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#value NsxtAlbVirtualServiceHttpReqRules#value}
  */
  readonly value: string;
}

export function nsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaCookieToTerraform(struct?: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaCookieOutputReference | NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: cdktf.stringToTerraform(struct!.criteria),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function nsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaCookieToHclTerraform(struct?: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaCookieOutputReference | NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: cdktf.stringToHclTerraform(struct!.criteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaCookie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaCookie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._criteria = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._criteria = value.criteria;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria?: string; 
  public get criteria() {
    return this.getStringAttribute('criteria');
  }
  public set criteria(value: string) {
    this._criteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaHttpMethods {
  /**
  * Criteria to use for IP address matching the HTTP request. Options - IS_IN, IS_NOT_IN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#criteria NsxtAlbVirtualServiceHttpReqRules#criteria}
  */
  readonly criteria: string;
  /**
  * HTTP methods to match. Options - GET, PUT, POST, DELETE, HEAD, OPTIONS, TRACE, CONNECT, PATCH, PROPFIND, PROPPATCH, MKCOL, COPY, MOVE, LOCK, UNLOCK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#methods NsxtAlbVirtualServiceHttpReqRules#methods}
  */
  readonly methods: string[];
}

export function nsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaHttpMethodsToTerraform(struct?: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaHttpMethodsOutputReference | NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaHttpMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: cdktf.stringToTerraform(struct!.criteria),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
  }
}


export function nsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaHttpMethodsToHclTerraform(struct?: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaHttpMethodsOutputReference | NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaHttpMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: cdktf.stringToHclTerraform(struct!.criteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaHttpMethodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaHttpMethods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaHttpMethods | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._criteria = undefined;
      this._methods = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._criteria = value.criteria;
      this._methods = value.methods;
    }
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria?: string; 
  public get criteria() {
    return this.getStringAttribute('criteria');
  }
  public set criteria(value: string) {
    this._criteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria;
  }

  // methods - computed: false, optional: false, required: true
  private _methods?: string[]; 
  public get methods() {
    return cdktf.Fn.tolist(this.getListAttribute('methods'));
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }
}
export interface NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaPath {
  /**
  * Criteria to use for matching the path in the HTTP request URI. Options - BEGINS_WITH, DOES_NOT_BEGIN_WITH, CONTAINS, DOES_NOT_CONTAIN, ENDS_WITH, DOES_NOT_END_WITH, EQUALS, DOES_NOT_EQUAL, REGEX_MATCH, REGEX_DOES_NOT_MATCH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#criteria NsxtAlbVirtualServiceHttpReqRules#criteria}
  */
  readonly criteria: string;
  /**
  * String values to match the path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#paths NsxtAlbVirtualServiceHttpReqRules#paths}
  */
  readonly paths: string[];
}

export function nsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaPathToTerraform(struct?: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaPathOutputReference | NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: cdktf.stringToTerraform(struct!.criteria),
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
  }
}


export function nsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaPathToHclTerraform(struct?: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaPathOutputReference | NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: cdktf.stringToHclTerraform(struct!.criteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria;
    }
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._criteria = undefined;
      this._paths = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._criteria = value.criteria;
      this._paths = value.paths;
    }
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria?: string; 
  public get criteria() {
    return this.getStringAttribute('criteria');
  }
  public set criteria(value: string) {
    this._criteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria;
  }

  // paths - computed: false, optional: false, required: true
  private _paths?: string[]; 
  public get paths() {
    return cdktf.Fn.tolist(this.getListAttribute('paths'));
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }
}
export interface NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaRequestHeaders {
  /**
  * Criteria to use for matching headers and cookies in the HTTP request amd response. Options - EXISTS, DOES_NOT_EXIST, BEGINS_WITH, DOES_NOT_BEGIN_WITH, CONTAINS, DOES_NOT_CONTAIN, ENDS_WITH, DOES_NOT_END_WITH, EQUALS, DOES_NOT_EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#criteria NsxtAlbVirtualServiceHttpReqRules#criteria}
  */
  readonly criteria: string;
  /**
  * Name of the HTTP header whose value is to be matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#name NsxtAlbVirtualServiceHttpReqRules#name}
  */
  readonly name: string;
  /**
  * String values to match for an HTTP header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#values NsxtAlbVirtualServiceHttpReqRules#values}
  */
  readonly values: string[];
}

export function nsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaRequestHeadersToTerraform(struct?: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: cdktf.stringToTerraform(struct!.criteria),
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function nsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaRequestHeadersToHclTerraform(struct?: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: cdktf.stringToHclTerraform(struct!.criteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaRequestHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaRequestHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaRequestHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criteria = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criteria = value.criteria;
      this._name = value.name;
      this._values = value.values;
    }
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria?: string; 
  public get criteria() {
    return this.getStringAttribute('criteria');
  }
  public set criteria(value: string) {
    this._criteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaRequestHeadersList extends cdktf.ComplexList {
  public internalValue? : NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaRequestHeaders[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaRequestHeadersOutputReference {
    return new NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaRequestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaServicePorts {
  /**
  * Criteria to use for IP address matching the HTTP request. Options - IS_IN, IS_NOT_IN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#criteria NsxtAlbVirtualServiceHttpReqRules#criteria}
  */
  readonly criteria: string;
  /**
  * A set of TCP ports. Allowed values are 1-65535
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#ports NsxtAlbVirtualServiceHttpReqRules#ports}
  */
  readonly ports: number[];
}

export function nsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaServicePortsToTerraform(struct?: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaServicePortsOutputReference | NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaServicePorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: cdktf.stringToTerraform(struct!.criteria),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
  }
}


export function nsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaServicePortsToHclTerraform(struct?: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaServicePortsOutputReference | NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaServicePorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: cdktf.stringToHclTerraform(struct!.criteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaServicePortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaServicePorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaServicePorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._criteria = undefined;
      this._ports = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._criteria = value.criteria;
      this._ports = value.ports;
    }
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria?: string; 
  public get criteria() {
    return this.getStringAttribute('criteria');
  }
  public set criteria(value: string) {
    this._criteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria;
  }

  // ports - computed: false, optional: false, required: true
  private _ports?: number[]; 
  public get ports() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ports')));
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}
export interface NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteria {
  /**
  * Protocol to match - 'HTTP' or 'HTTPS'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#protocol_type NsxtAlbVirtualServiceHttpReqRules#protocol_type}
  */
  readonly protocolType?: string;
  /**
  * HTTP request query strings to match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#query NsxtAlbVirtualServiceHttpReqRules#query}
  */
  readonly query?: string[];
  /**
  * client_ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#client_ip_address NsxtAlbVirtualServiceHttpReqRules#client_ip_address}
  */
  readonly clientIpAddress?: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaClientIpAddress;
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#cookie NsxtAlbVirtualServiceHttpReqRules#cookie}
  */
  readonly cookie?: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaCookie;
  /**
  * http_methods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#http_methods NsxtAlbVirtualServiceHttpReqRules#http_methods}
  */
  readonly httpMethods?: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaHttpMethods;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#path NsxtAlbVirtualServiceHttpReqRules#path}
  */
  readonly path?: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaPath;
  /**
  * request_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#request_headers NsxtAlbVirtualServiceHttpReqRules#request_headers}
  */
  readonly requestHeaders?: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaRequestHeaders[] | cdktf.IResolvable;
  /**
  * service_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#service_ports NsxtAlbVirtualServiceHttpReqRules#service_ports}
  */
  readonly servicePorts?: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaServicePorts;
}

export function nsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaToTerraform(struct?: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaOutputReference | NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol_type: cdktf.stringToTerraform(struct!.protocolType),
    query: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.query),
    client_ip_address: nsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaClientIpAddressToTerraform(struct!.clientIpAddress),
    cookie: nsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaCookieToTerraform(struct!.cookie),
    http_methods: nsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaHttpMethodsToTerraform(struct!.httpMethods),
    path: nsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaPathToTerraform(struct!.path),
    request_headers: cdktf.listMapper(nsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaRequestHeadersToTerraform, true)(struct!.requestHeaders),
    service_ports: nsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaServicePortsToTerraform(struct!.servicePorts),
  }
}


export function nsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaToHclTerraform(struct?: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaOutputReference | NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    protocol_type: {
      value: cdktf.stringToHclTerraform(struct!.protocolType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.query),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    client_ip_address: {
      value: nsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaClientIpAddressToHclTerraform(struct!.clientIpAddress),
      isBlock: true,
      type: "list",
      storageClassType: "NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaClientIpAddressList",
    },
    cookie: {
      value: nsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaCookieToHclTerraform(struct!.cookie),
      isBlock: true,
      type: "list",
      storageClassType: "NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaCookieList",
    },
    http_methods: {
      value: nsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaHttpMethodsToHclTerraform(struct!.httpMethods),
      isBlock: true,
      type: "list",
      storageClassType: "NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaHttpMethodsList",
    },
    path: {
      value: nsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaPathList",
    },
    request_headers: {
      value: cdktf.listMapperHcl(nsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaRequestHeadersToHclTerraform, true)(struct!.requestHeaders),
      isBlock: true,
      type: "set",
      storageClassType: "NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaRequestHeadersList",
    },
    service_ports: {
      value: nsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaServicePortsToHclTerraform(struct!.servicePorts),
      isBlock: true,
      type: "list",
      storageClassType: "NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaServicePortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocolType !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolType = this._protocolType;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._clientIpAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpAddress = this._clientIpAddress?.internalValue;
    }
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    if (this._httpMethods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethods = this._httpMethods?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._requestHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders?.internalValue;
    }
    if (this._servicePorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePorts = this._servicePorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._protocolType = undefined;
      this._query = undefined;
      this._clientIpAddress.internalValue = undefined;
      this._cookie.internalValue = undefined;
      this._httpMethods.internalValue = undefined;
      this._path.internalValue = undefined;
      this._requestHeaders.internalValue = undefined;
      this._servicePorts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._protocolType = value.protocolType;
      this._query = value.query;
      this._clientIpAddress.internalValue = value.clientIpAddress;
      this._cookie.internalValue = value.cookie;
      this._httpMethods.internalValue = value.httpMethods;
      this._path.internalValue = value.path;
      this._requestHeaders.internalValue = value.requestHeaders;
      this._servicePorts.internalValue = value.servicePorts;
    }
  }

  // protocol_type - computed: false, optional: true, required: false
  private _protocolType?: string; 
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }
  public set protocolType(value: string) {
    this._protocolType = value;
  }
  public resetProtocolType() {
    this._protocolType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTypeInput() {
    return this._protocolType;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string[]; 
  public get query() {
    return cdktf.Fn.tolist(this.getListAttribute('query'));
  }
  public set query(value: string[]) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // client_ip_address - computed: false, optional: true, required: false
  private _clientIpAddress = new NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaClientIpAddressOutputReference(this, "client_ip_address");
  public get clientIpAddress() {
    return this._clientIpAddress;
  }
  public putClientIpAddress(value: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaClientIpAddress) {
    this._clientIpAddress.internalValue = value;
  }
  public resetClientIpAddress() {
    this._clientIpAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpAddressInput() {
    return this._clientIpAddress.internalValue;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaCookie) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }

  // http_methods - computed: false, optional: true, required: false
  private _httpMethods = new NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaHttpMethodsOutputReference(this, "http_methods");
  public get httpMethods() {
    return this._httpMethods;
  }
  public putHttpMethods(value: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaHttpMethods) {
    this._httpMethods.internalValue = value;
  }
  public resetHttpMethods() {
    this._httpMethods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodsInput() {
    return this._httpMethods.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaPath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders = new NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaRequestHeadersList(this, "request_headers", true);
  public get requestHeaders() {
    return this._requestHeaders;
  }
  public putRequestHeaders(value: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaRequestHeaders[] | cdktf.IResolvable) {
    this._requestHeaders.internalValue = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders.internalValue;
  }

  // service_ports - computed: false, optional: true, required: false
  private _servicePorts = new NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaServicePortsOutputReference(this, "service_ports");
  public get servicePorts() {
    return this._servicePorts;
  }
  public putServicePorts(value: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaServicePorts) {
    this._servicePorts.internalValue = value;
  }
  public resetServicePorts() {
    this._servicePorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortsInput() {
    return this._servicePorts.internalValue;
  }
}
export interface NsxtAlbVirtualServiceHttpReqRulesRule {
  /**
  * Defines if the rule is active or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#active NsxtAlbVirtualServiceHttpReqRules#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Defines whether to enable logging with headers on rule match or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#logging NsxtAlbVirtualServiceHttpReqRules#logging}
  */
  readonly logging?: boolean | cdktf.IResolvable;
  /**
  * Name of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#name NsxtAlbVirtualServiceHttpReqRules#name}
  */
  readonly name: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#actions NsxtAlbVirtualServiceHttpReqRules#actions}
  */
  readonly actions: NsxtAlbVirtualServiceHttpReqRulesRuleActions;
  /**
  * match_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#match_criteria NsxtAlbVirtualServiceHttpReqRules#match_criteria}
  */
  readonly matchCriteria: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteria;
}

export function nsxtAlbVirtualServiceHttpReqRulesRuleToTerraform(struct?: NsxtAlbVirtualServiceHttpReqRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    logging: cdktf.booleanToTerraform(struct!.logging),
    name: cdktf.stringToTerraform(struct!.name),
    actions: nsxtAlbVirtualServiceHttpReqRulesRuleActionsToTerraform(struct!.actions),
    match_criteria: nsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaToTerraform(struct!.matchCriteria),
  }
}


export function nsxtAlbVirtualServiceHttpReqRulesRuleToHclTerraform(struct?: NsxtAlbVirtualServiceHttpReqRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    logging: {
      value: cdktf.booleanToHclTerraform(struct!.logging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    actions: {
      value: nsxtAlbVirtualServiceHttpReqRulesRuleActionsToHclTerraform(struct!.actions),
      isBlock: true,
      type: "set",
      storageClassType: "NsxtAlbVirtualServiceHttpReqRulesRuleActionsList",
    },
    match_criteria: {
      value: nsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaToHclTerraform(struct!.matchCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtAlbVirtualServiceHttpReqRulesRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpReqRulesRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._matchCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtAlbVirtualServiceHttpReqRulesRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._logging = undefined;
      this._name = undefined;
      this._actions.internalValue = undefined;
      this._matchCriteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
      this._logging = value.logging;
      this._name = value.name;
      this._actions.internalValue = value.actions;
      this._matchCriteria.internalValue = value.matchCriteria;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: boolean | cdktf.IResolvable; 
  public get logging() {
    return this.getBooleanAttribute('logging');
  }
  public set logging(value: boolean | cdktf.IResolvable) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // actions - computed: false, optional: false, required: true
  private _actions = new NsxtAlbVirtualServiceHttpReqRulesRuleActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: NsxtAlbVirtualServiceHttpReqRulesRuleActions) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria = new NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteriaOutputReference(this, "match_criteria");
  public get matchCriteria() {
    return this._matchCriteria;
  }
  public putMatchCriteria(value: NsxtAlbVirtualServiceHttpReqRulesRuleMatchCriteria) {
    this._matchCriteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria.internalValue;
  }
}

export class NsxtAlbVirtualServiceHttpReqRulesRuleList extends cdktf.ComplexList {
  public internalValue? : NsxtAlbVirtualServiceHttpReqRulesRule[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): NsxtAlbVirtualServiceHttpReqRulesRuleOutputReference {
    return new NsxtAlbVirtualServiceHttpReqRulesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules vcd_nsxt_alb_virtual_service_http_req_rules}
*/
export class NsxtAlbVirtualServiceHttpReqRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_alb_virtual_service_http_req_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtAlbVirtualServiceHttpReqRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtAlbVirtualServiceHttpReqRules to import
  * @param importFromId The id of the existing NsxtAlbVirtualServiceHttpReqRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtAlbVirtualServiceHttpReqRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_alb_virtual_service_http_req_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_req_rules vcd_nsxt_alb_virtual_service_http_req_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtAlbVirtualServiceHttpReqRulesConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtAlbVirtualServiceHttpReqRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_alb_virtual_service_http_req_rules',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._virtualServiceId = config.virtualServiceId;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // virtual_service_id - computed: false, optional: false, required: true
  private _virtualServiceId?: string; 
  public get virtualServiceId() {
    return this.getStringAttribute('virtual_service_id');
  }
  public set virtualServiceId(value: string) {
    this._virtualServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceIdInput() {
    return this._virtualServiceId;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new NsxtAlbVirtualServiceHttpReqRulesRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: NsxtAlbVirtualServiceHttpReqRulesRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      virtual_service_id: cdktf.stringToTerraform(this._virtualServiceId),
      rule: cdktf.listMapper(nsxtAlbVirtualServiceHttpReqRulesRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_service_id: {
        value: cdktf.stringToHclTerraform(this._virtualServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.listMapperHcl(nsxtAlbVirtualServiceHttpReqRulesRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NsxtAlbVirtualServiceHttpReqRulesRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
