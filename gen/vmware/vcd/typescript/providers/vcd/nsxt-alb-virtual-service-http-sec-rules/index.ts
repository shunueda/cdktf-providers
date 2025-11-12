// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtAlbVirtualServiceHttpSecRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#id NsxtAlbVirtualServiceHttpSecRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX-T ALB Virtual Service ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#virtual_service_id NsxtAlbVirtualServiceHttpSecRules#virtual_service_id}
  */
  readonly virtualServiceId: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#rule NsxtAlbVirtualServiceHttpSecRules#rule}
  */
  readonly rule: NsxtAlbVirtualServiceHttpSecRulesRule[] | cdktf.IResolvable;
}
export interface NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionLocalResponse {
  /**
  * Base64 encoded content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#content NsxtAlbVirtualServiceHttpSecRules#content}
  */
  readonly content?: string;
  /**
  * MIME type for the content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#content_type NsxtAlbVirtualServiceHttpSecRules#content_type}
  */
  readonly contentType?: string;
  /**
  * HTTP Status code to send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#status_code NsxtAlbVirtualServiceHttpSecRules#status_code}
  */
  readonly statusCode: string;
}

export function nsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionLocalResponseToTerraform(struct?: NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionLocalResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
  }
}


export function nsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionLocalResponseToHclTerraform(struct?: NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionLocalResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionLocalResponseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionLocalResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionLocalResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._contentType = undefined;
      this._statusCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._contentType = value.contentType;
      this._statusCode = value.statusCode;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // status_code - computed: false, optional: false, required: true
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}

export class NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionLocalResponseList extends cdktf.ComplexList {
  public internalValue? : NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionLocalResponse[] | cdktf.IResolvable

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
  public get(index: number): NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionLocalResponseOutputReference {
    return new NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionLocalResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionRedirect {
  /**
  * Host to which redirect the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#host NsxtAlbVirtualServiceHttpSecRules#host}
  */
  readonly host?: string;
  /**
  * Should the query part be preserved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#keep_query NsxtAlbVirtualServiceHttpSecRules#keep_query}
  */
  readonly keepQuery?: boolean | cdktf.IResolvable;
  /**
  * Path to which redirect the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#path NsxtAlbVirtualServiceHttpSecRules#path}
  */
  readonly path?: string;
  /**
  * Port to which redirect the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#port NsxtAlbVirtualServiceHttpSecRules#port}
  */
  readonly port: string;
  /**
  * HTTP or HTTPS protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#protocol NsxtAlbVirtualServiceHttpSecRules#protocol}
  */
  readonly protocol: string;
  /**
  * One of the redirect status codes - 301, 302, 307
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#status_code NsxtAlbVirtualServiceHttpSecRules#status_code}
  */
  readonly statusCode: number;
}

export function nsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionRedirectToTerraform(struct?: NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionRedirect | cdktf.IResolvable): any {
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


export function nsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionRedirectToHclTerraform(struct?: NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionRedirect | cdktf.IResolvable): any {
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

export class NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._keepQuery = undefined;
      this._path = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._statusCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
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

export class NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionRedirectList extends cdktf.ComplexList {
  public internalValue? : NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionRedirect[] | cdktf.IResolvable

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
  public get(index: number): NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionRedirectOutputReference {
    return new NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimit {
  /**
  * Set to true if the connection should be closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#action_close_connection NsxtAlbVirtualServiceHttpSecRules#action_close_connection}
  */
  readonly actionCloseConnection?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of connections, requests or packets permitted each period. The count must be between 1 and 1000000000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#count NsxtAlbVirtualServiceHttpSecRules#count}
  */
  readonly count: string;
  /**
  * Time value in seconds to enforce rate count. The period must be between 1 and 1000000000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#period NsxtAlbVirtualServiceHttpSecRules#period}
  */
  readonly period: string;
  /**
  * action_local_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#action_local_response NsxtAlbVirtualServiceHttpSecRules#action_local_response}
  */
  readonly actionLocalResponse?: NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionLocalResponse[] | cdktf.IResolvable;
  /**
  * action_redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#action_redirect NsxtAlbVirtualServiceHttpSecRules#action_redirect}
  */
  readonly actionRedirect?: NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionRedirect[] | cdktf.IResolvable;
}

export function nsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitToTerraform(struct?: NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitOutputReference | NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_close_connection: cdktf.booleanToTerraform(struct!.actionCloseConnection),
    count: cdktf.stringToTerraform(struct!.count),
    period: cdktf.stringToTerraform(struct!.period),
    action_local_response: cdktf.listMapper(nsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionLocalResponseToTerraform, true)(struct!.actionLocalResponse),
    action_redirect: cdktf.listMapper(nsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionRedirectToTerraform, true)(struct!.actionRedirect),
  }
}


export function nsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitToHclTerraform(struct?: NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitOutputReference | NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_close_connection: {
      value: cdktf.booleanToHclTerraform(struct!.actionCloseConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.stringToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_local_response: {
      value: cdktf.listMapperHcl(nsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionLocalResponseToHclTerraform, true)(struct!.actionLocalResponse),
      isBlock: true,
      type: "list",
      storageClassType: "NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionLocalResponseList",
    },
    action_redirect: {
      value: cdktf.listMapperHcl(nsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionRedirectToHclTerraform, true)(struct!.actionRedirect),
      isBlock: true,
      type: "list",
      storageClassType: "NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionCloseConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionCloseConnection = this._actionCloseConnection;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._actionLocalResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionLocalResponse = this._actionLocalResponse?.internalValue;
    }
    if (this._actionRedirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionRedirect = this._actionRedirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionCloseConnection = undefined;
      this._count = undefined;
      this._period = undefined;
      this._actionLocalResponse.internalValue = undefined;
      this._actionRedirect.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionCloseConnection = value.actionCloseConnection;
      this._count = value.count;
      this._period = value.period;
      this._actionLocalResponse.internalValue = value.actionLocalResponse;
      this._actionRedirect.internalValue = value.actionRedirect;
    }
  }

  // action_close_connection - computed: false, optional: true, required: false
  private _actionCloseConnection?: boolean | cdktf.IResolvable; 
  public get actionCloseConnection() {
    return this.getBooleanAttribute('action_close_connection');
  }
  public set actionCloseConnection(value: boolean | cdktf.IResolvable) {
    this._actionCloseConnection = value;
  }
  public resetActionCloseConnection() {
    this._actionCloseConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCloseConnectionInput() {
    return this._actionCloseConnection;
  }

  // count - computed: false, optional: false, required: true
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // period - computed: false, optional: false, required: true
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // action_local_response - computed: false, optional: true, required: false
  private _actionLocalResponse = new NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionLocalResponseList(this, "action_local_response", false);
  public get actionLocalResponse() {
    return this._actionLocalResponse;
  }
  public putActionLocalResponse(value: NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionLocalResponse[] | cdktf.IResolvable) {
    this._actionLocalResponse.internalValue = value;
  }
  public resetActionLocalResponse() {
    this._actionLocalResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionLocalResponseInput() {
    return this._actionLocalResponse.internalValue;
  }

  // action_redirect - computed: false, optional: true, required: false
  private _actionRedirect = new NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionRedirectList(this, "action_redirect", false);
  public get actionRedirect() {
    return this._actionRedirect;
  }
  public putActionRedirect(value: NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitActionRedirect[] | cdktf.IResolvable) {
    this._actionRedirect.internalValue = value;
  }
  public resetActionRedirect() {
    this._actionRedirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionRedirectInput() {
    return this._actionRedirect.internalValue;
  }
}
export interface NsxtAlbVirtualServiceHttpSecRulesRuleActionsSendResponse {
  /**
  * Base64 encoded content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#content NsxtAlbVirtualServiceHttpSecRules#content}
  */
  readonly content?: string;
  /**
  * MIME type for the content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#content_type NsxtAlbVirtualServiceHttpSecRules#content_type}
  */
  readonly contentType?: string;
  /**
  * HTTP Status code to send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#status_code NsxtAlbVirtualServiceHttpSecRules#status_code}
  */
  readonly statusCode: string;
}

export function nsxtAlbVirtualServiceHttpSecRulesRuleActionsSendResponseToTerraform(struct?: NsxtAlbVirtualServiceHttpSecRulesRuleActionsSendResponseOutputReference | NsxtAlbVirtualServiceHttpSecRulesRuleActionsSendResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
  }
}


export function nsxtAlbVirtualServiceHttpSecRulesRuleActionsSendResponseToHclTerraform(struct?: NsxtAlbVirtualServiceHttpSecRulesRuleActionsSendResponseOutputReference | NsxtAlbVirtualServiceHttpSecRulesRuleActionsSendResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtAlbVirtualServiceHttpSecRulesRuleActionsSendResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpSecRulesRuleActionsSendResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtAlbVirtualServiceHttpSecRulesRuleActionsSendResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._contentType = undefined;
      this._statusCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._contentType = value.contentType;
      this._statusCode = value.statusCode;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // status_code - computed: false, optional: false, required: true
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}
export interface NsxtAlbVirtualServiceHttpSecRulesRuleActions {
  /**
  * ALLOW or CLOSE connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#connections NsxtAlbVirtualServiceHttpSecRules#connections}
  */
  readonly connections?: string;
  /**
  * Port number that should be redirected to HTTPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#redirect_to_https NsxtAlbVirtualServiceHttpSecRules#redirect_to_https}
  */
  readonly redirectToHttps?: string;
  /**
  * rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#rate_limit NsxtAlbVirtualServiceHttpSecRules#rate_limit}
  */
  readonly rateLimit?: NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimit;
  /**
  * send_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#send_response NsxtAlbVirtualServiceHttpSecRules#send_response}
  */
  readonly sendResponse?: NsxtAlbVirtualServiceHttpSecRulesRuleActionsSendResponse;
}

export function nsxtAlbVirtualServiceHttpSecRulesRuleActionsToTerraform(struct?: NsxtAlbVirtualServiceHttpSecRulesRuleActionsOutputReference | NsxtAlbVirtualServiceHttpSecRulesRuleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connections: cdktf.stringToTerraform(struct!.connections),
    redirect_to_https: cdktf.stringToTerraform(struct!.redirectToHttps),
    rate_limit: nsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitToTerraform(struct!.rateLimit),
    send_response: nsxtAlbVirtualServiceHttpSecRulesRuleActionsSendResponseToTerraform(struct!.sendResponse),
  }
}


export function nsxtAlbVirtualServiceHttpSecRulesRuleActionsToHclTerraform(struct?: NsxtAlbVirtualServiceHttpSecRulesRuleActionsOutputReference | NsxtAlbVirtualServiceHttpSecRulesRuleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connections: {
      value: cdktf.stringToHclTerraform(struct!.connections),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_to_https: {
      value: cdktf.stringToHclTerraform(struct!.redirectToHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_limit: {
      value: nsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitToHclTerraform(struct!.rateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitList",
    },
    send_response: {
      value: nsxtAlbVirtualServiceHttpSecRulesRuleActionsSendResponseToHclTerraform(struct!.sendResponse),
      isBlock: true,
      type: "list",
      storageClassType: "NsxtAlbVirtualServiceHttpSecRulesRuleActionsSendResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtAlbVirtualServiceHttpSecRulesRuleActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpSecRulesRuleActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connections !== undefined) {
      hasAnyValues = true;
      internalValueResult.connections = this._connections;
    }
    if (this._redirectToHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectToHttps = this._redirectToHttps;
    }
    if (this._rateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit?.internalValue;
    }
    if (this._sendResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendResponse = this._sendResponse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtAlbVirtualServiceHttpSecRulesRuleActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connections = undefined;
      this._redirectToHttps = undefined;
      this._rateLimit.internalValue = undefined;
      this._sendResponse.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connections = value.connections;
      this._redirectToHttps = value.redirectToHttps;
      this._rateLimit.internalValue = value.rateLimit;
      this._sendResponse.internalValue = value.sendResponse;
    }
  }

  // connections - computed: false, optional: true, required: false
  private _connections?: string; 
  public get connections() {
    return this.getStringAttribute('connections');
  }
  public set connections(value: string) {
    this._connections = value;
  }
  public resetConnections() {
    this._connections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsInput() {
    return this._connections;
  }

  // redirect_to_https - computed: false, optional: true, required: false
  private _redirectToHttps?: string; 
  public get redirectToHttps() {
    return this.getStringAttribute('redirect_to_https');
  }
  public set redirectToHttps(value: string) {
    this._redirectToHttps = value;
  }
  public resetRedirectToHttps() {
    this._redirectToHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectToHttpsInput() {
    return this._redirectToHttps;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit = new NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimitOutputReference(this, "rate_limit");
  public get rateLimit() {
    return this._rateLimit;
  }
  public putRateLimit(value: NsxtAlbVirtualServiceHttpSecRulesRuleActionsRateLimit) {
    this._rateLimit.internalValue = value;
  }
  public resetRateLimit() {
    this._rateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit.internalValue;
  }

  // send_response - computed: false, optional: true, required: false
  private _sendResponse = new NsxtAlbVirtualServiceHttpSecRulesRuleActionsSendResponseOutputReference(this, "send_response");
  public get sendResponse() {
    return this._sendResponse;
  }
  public putSendResponse(value: NsxtAlbVirtualServiceHttpSecRulesRuleActionsSendResponse) {
    this._sendResponse.internalValue = value;
  }
  public resetSendResponse() {
    this._sendResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendResponseInput() {
    return this._sendResponse.internalValue;
  }
}
export interface NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaClientIpAddress {
  /**
  * Criteria to use for IP address matching the HTTP request. Options - IS_IN, IS_NOT_IN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#criteria NsxtAlbVirtualServiceHttpSecRules#criteria}
  */
  readonly criteria: string;
  /**
  * A set of IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#ip_addresses NsxtAlbVirtualServiceHttpSecRules#ip_addresses}
  */
  readonly ipAddresses: string[];
}

export function nsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaClientIpAddressToTerraform(struct?: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaClientIpAddressOutputReference | NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaClientIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: cdktf.stringToTerraform(struct!.criteria),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
  }
}


export function nsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaClientIpAddressToHclTerraform(struct?: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaClientIpAddressOutputReference | NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaClientIpAddress): any {
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

export class NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaClientIpAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaClientIpAddress | undefined {
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

  public set internalValue(value: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaClientIpAddress | undefined) {
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
export interface NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaCookie {
  /**
  * Criteria to use for matching cookies in the HTTP request. Options - EXISTS, DOES_NOT_EXIST, BEGINS_WITH, DOES_NOT_BEGIN_WITH, CONTAINS, DOES_NOT_CONTAIN, ENDS_WITH, DOES_NOT_END_WITH, EQUALS, DOES_NOT_EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#criteria NsxtAlbVirtualServiceHttpSecRules#criteria}
  */
  readonly criteria: string;
  /**
  * Name of the HTTP cookie whose value is to be matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#name NsxtAlbVirtualServiceHttpSecRules#name}
  */
  readonly name: string;
  /**
  * String values to match for an HTTP cookie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#value NsxtAlbVirtualServiceHttpSecRules#value}
  */
  readonly value: string;
}

export function nsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaCookieToTerraform(struct?: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaCookieOutputReference | NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaCookie): any {
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


export function nsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaCookieToHclTerraform(struct?: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaCookieOutputReference | NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaCookie): any {
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

export class NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaCookie | undefined {
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

  public set internalValue(value: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaCookie | undefined) {
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
export interface NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaHttpMethods {
  /**
  * Criteria to use for IP address matching the HTTP request. Options - IS_IN, IS_NOT_IN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#criteria NsxtAlbVirtualServiceHttpSecRules#criteria}
  */
  readonly criteria: string;
  /**
  * HTTP methods to match. Options - GET, PUT, POST, DELETE, HEAD, OPTIONS, TRACE, CONNECT, PATCH, PROPFIND, PROPPATCH, MKCOL, COPY, MOVE, LOCK, UNLOCK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#methods NsxtAlbVirtualServiceHttpSecRules#methods}
  */
  readonly methods: string[];
}

export function nsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaHttpMethodsToTerraform(struct?: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaHttpMethodsOutputReference | NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaHttpMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: cdktf.stringToTerraform(struct!.criteria),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
  }
}


export function nsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaHttpMethodsToHclTerraform(struct?: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaHttpMethodsOutputReference | NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaHttpMethods): any {
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

export class NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaHttpMethodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaHttpMethods | undefined {
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

  public set internalValue(value: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaHttpMethods | undefined) {
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
export interface NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaPath {
  /**
  * Criteria to use for matching the path in the HTTP request URI. Options - BEGINS_WITH, DOES_NOT_BEGIN_WITH, CONTAINS, DOES_NOT_CONTAIN, ENDS_WITH, DOES_NOT_END_WITH, EQUALS, DOES_NOT_EQUAL, REGEX_MATCH, REGEX_DOES_NOT_MATCH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#criteria NsxtAlbVirtualServiceHttpSecRules#criteria}
  */
  readonly criteria: string;
  /**
  * String values to match the path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#paths NsxtAlbVirtualServiceHttpSecRules#paths}
  */
  readonly paths: string[];
}

export function nsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaPathToTerraform(struct?: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaPathOutputReference | NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: cdktf.stringToTerraform(struct!.criteria),
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
  }
}


export function nsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaPathToHclTerraform(struct?: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaPathOutputReference | NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaPath): any {
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

export class NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaPath | undefined {
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

  public set internalValue(value: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaPath | undefined) {
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
export interface NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaRequestHeaders {
  /**
  * Criteria to use for matching headers and cookies in the HTTP request amd response. Options - EXISTS, DOES_NOT_EXIST, BEGINS_WITH, DOES_NOT_BEGIN_WITH, CONTAINS, DOES_NOT_CONTAIN, ENDS_WITH, DOES_NOT_END_WITH, EQUALS, DOES_NOT_EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#criteria NsxtAlbVirtualServiceHttpSecRules#criteria}
  */
  readonly criteria: string;
  /**
  * Name of the HTTP header whose value is to be matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#name NsxtAlbVirtualServiceHttpSecRules#name}
  */
  readonly name: string;
  /**
  * String values to match for an HTTP header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#values NsxtAlbVirtualServiceHttpSecRules#values}
  */
  readonly values: string[];
}

export function nsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaRequestHeadersToTerraform(struct?: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaRequestHeaders | cdktf.IResolvable): any {
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


export function nsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaRequestHeadersToHclTerraform(struct?: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaRequestHeaders | cdktf.IResolvable): any {
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

export class NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaRequestHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaRequestHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaRequestHeaders | cdktf.IResolvable | undefined) {
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

export class NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaRequestHeadersList extends cdktf.ComplexList {
  public internalValue? : NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaRequestHeaders[] | cdktf.IResolvable

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
  public get(index: number): NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaRequestHeadersOutputReference {
    return new NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaRequestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaServicePorts {
  /**
  * Criteria to use for IP address matching the HTTP request. Options - IS_IN, IS_NOT_IN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#criteria NsxtAlbVirtualServiceHttpSecRules#criteria}
  */
  readonly criteria: string;
  /**
  * A set of TCP ports. Allowed values are 1-65535
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#ports NsxtAlbVirtualServiceHttpSecRules#ports}
  */
  readonly ports: number[];
}

export function nsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaServicePortsToTerraform(struct?: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaServicePortsOutputReference | NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaServicePorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: cdktf.stringToTerraform(struct!.criteria),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
  }
}


export function nsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaServicePortsToHclTerraform(struct?: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaServicePortsOutputReference | NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaServicePorts): any {
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

export class NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaServicePortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaServicePorts | undefined {
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

  public set internalValue(value: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaServicePorts | undefined) {
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
export interface NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteria {
  /**
  * Protocol to match - 'HTTP' or 'HTTPS'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#protocol_type NsxtAlbVirtualServiceHttpSecRules#protocol_type}
  */
  readonly protocolType?: string;
  /**
  * HTTP request query strings to match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#query NsxtAlbVirtualServiceHttpSecRules#query}
  */
  readonly query?: string[];
  /**
  * client_ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#client_ip_address NsxtAlbVirtualServiceHttpSecRules#client_ip_address}
  */
  readonly clientIpAddress?: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaClientIpAddress;
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#cookie NsxtAlbVirtualServiceHttpSecRules#cookie}
  */
  readonly cookie?: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaCookie;
  /**
  * http_methods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#http_methods NsxtAlbVirtualServiceHttpSecRules#http_methods}
  */
  readonly httpMethods?: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaHttpMethods;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#path NsxtAlbVirtualServiceHttpSecRules#path}
  */
  readonly path?: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaPath;
  /**
  * request_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#request_headers NsxtAlbVirtualServiceHttpSecRules#request_headers}
  */
  readonly requestHeaders?: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaRequestHeaders[] | cdktf.IResolvable;
  /**
  * service_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#service_ports NsxtAlbVirtualServiceHttpSecRules#service_ports}
  */
  readonly servicePorts?: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaServicePorts;
}

export function nsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaToTerraform(struct?: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaOutputReference | NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol_type: cdktf.stringToTerraform(struct!.protocolType),
    query: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.query),
    client_ip_address: nsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaClientIpAddressToTerraform(struct!.clientIpAddress),
    cookie: nsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaCookieToTerraform(struct!.cookie),
    http_methods: nsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaHttpMethodsToTerraform(struct!.httpMethods),
    path: nsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaPathToTerraform(struct!.path),
    request_headers: cdktf.listMapper(nsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaRequestHeadersToTerraform, true)(struct!.requestHeaders),
    service_ports: nsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaServicePortsToTerraform(struct!.servicePorts),
  }
}


export function nsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaToHclTerraform(struct?: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaOutputReference | NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteria): any {
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
      value: nsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaClientIpAddressToHclTerraform(struct!.clientIpAddress),
      isBlock: true,
      type: "list",
      storageClassType: "NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaClientIpAddressList",
    },
    cookie: {
      value: nsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaCookieToHclTerraform(struct!.cookie),
      isBlock: true,
      type: "list",
      storageClassType: "NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaCookieList",
    },
    http_methods: {
      value: nsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaHttpMethodsToHclTerraform(struct!.httpMethods),
      isBlock: true,
      type: "list",
      storageClassType: "NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaHttpMethodsList",
    },
    path: {
      value: nsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaPathList",
    },
    request_headers: {
      value: cdktf.listMapperHcl(nsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaRequestHeadersToHclTerraform, true)(struct!.requestHeaders),
      isBlock: true,
      type: "set",
      storageClassType: "NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaRequestHeadersList",
    },
    service_ports: {
      value: nsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaServicePortsToHclTerraform(struct!.servicePorts),
      isBlock: true,
      type: "list",
      storageClassType: "NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaServicePortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteria | undefined {
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

  public set internalValue(value: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteria | undefined) {
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
  private _clientIpAddress = new NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaClientIpAddressOutputReference(this, "client_ip_address");
  public get clientIpAddress() {
    return this._clientIpAddress;
  }
  public putClientIpAddress(value: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaClientIpAddress) {
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
  private _cookie = new NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaCookie) {
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
  private _httpMethods = new NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaHttpMethodsOutputReference(this, "http_methods");
  public get httpMethods() {
    return this._httpMethods;
  }
  public putHttpMethods(value: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaHttpMethods) {
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
  private _path = new NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaPath) {
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
  private _requestHeaders = new NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaRequestHeadersList(this, "request_headers", true);
  public get requestHeaders() {
    return this._requestHeaders;
  }
  public putRequestHeaders(value: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaRequestHeaders[] | cdktf.IResolvable) {
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
  private _servicePorts = new NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaServicePortsOutputReference(this, "service_ports");
  public get servicePorts() {
    return this._servicePorts;
  }
  public putServicePorts(value: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaServicePorts) {
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
export interface NsxtAlbVirtualServiceHttpSecRulesRule {
  /**
  * Defines is the rule is active or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#active NsxtAlbVirtualServiceHttpSecRules#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Defines whether to enable logging with headers on rule match or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#logging NsxtAlbVirtualServiceHttpSecRules#logging}
  */
  readonly logging?: boolean | cdktf.IResolvable;
  /**
  * Name of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#name NsxtAlbVirtualServiceHttpSecRules#name}
  */
  readonly name: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#actions NsxtAlbVirtualServiceHttpSecRules#actions}
  */
  readonly actions: NsxtAlbVirtualServiceHttpSecRulesRuleActions;
  /**
  * match_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#match_criteria NsxtAlbVirtualServiceHttpSecRules#match_criteria}
  */
  readonly matchCriteria: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteria;
}

export function nsxtAlbVirtualServiceHttpSecRulesRuleToTerraform(struct?: NsxtAlbVirtualServiceHttpSecRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    logging: cdktf.booleanToTerraform(struct!.logging),
    name: cdktf.stringToTerraform(struct!.name),
    actions: nsxtAlbVirtualServiceHttpSecRulesRuleActionsToTerraform(struct!.actions),
    match_criteria: nsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaToTerraform(struct!.matchCriteria),
  }
}


export function nsxtAlbVirtualServiceHttpSecRulesRuleToHclTerraform(struct?: NsxtAlbVirtualServiceHttpSecRulesRule | cdktf.IResolvable): any {
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
      value: nsxtAlbVirtualServiceHttpSecRulesRuleActionsToHclTerraform(struct!.actions),
      isBlock: true,
      type: "set",
      storageClassType: "NsxtAlbVirtualServiceHttpSecRulesRuleActionsList",
    },
    match_criteria: {
      value: nsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaToHclTerraform(struct!.matchCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtAlbVirtualServiceHttpSecRulesRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtAlbVirtualServiceHttpSecRulesRule | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NsxtAlbVirtualServiceHttpSecRulesRule | cdktf.IResolvable | undefined) {
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
  private _actions = new NsxtAlbVirtualServiceHttpSecRulesRuleActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: NsxtAlbVirtualServiceHttpSecRulesRuleActions) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria = new NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteriaOutputReference(this, "match_criteria");
  public get matchCriteria() {
    return this._matchCriteria;
  }
  public putMatchCriteria(value: NsxtAlbVirtualServiceHttpSecRulesRuleMatchCriteria) {
    this._matchCriteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria.internalValue;
  }
}

export class NsxtAlbVirtualServiceHttpSecRulesRuleList extends cdktf.ComplexList {
  public internalValue? : NsxtAlbVirtualServiceHttpSecRulesRule[] | cdktf.IResolvable

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
  public get(index: number): NsxtAlbVirtualServiceHttpSecRulesRuleOutputReference {
    return new NsxtAlbVirtualServiceHttpSecRulesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules vcd_nsxt_alb_virtual_service_http_sec_rules}
*/
export class NsxtAlbVirtualServiceHttpSecRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_alb_virtual_service_http_sec_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtAlbVirtualServiceHttpSecRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtAlbVirtualServiceHttpSecRules to import
  * @param importFromId The id of the existing NsxtAlbVirtualServiceHttpSecRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtAlbVirtualServiceHttpSecRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_alb_virtual_service_http_sec_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_sec_rules vcd_nsxt_alb_virtual_service_http_sec_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtAlbVirtualServiceHttpSecRulesConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtAlbVirtualServiceHttpSecRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_alb_virtual_service_http_sec_rules',
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
  private _rule = new NsxtAlbVirtualServiceHttpSecRulesRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: NsxtAlbVirtualServiceHttpSecRulesRule[] | cdktf.IResolvable) {
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
      rule: cdktf.listMapper(nsxtAlbVirtualServiceHttpSecRulesRuleToTerraform, true)(this._rule.internalValue),
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
        value: cdktf.listMapperHcl(nsxtAlbVirtualServiceHttpSecRulesRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NsxtAlbVirtualServiceHttpSecRulesRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
