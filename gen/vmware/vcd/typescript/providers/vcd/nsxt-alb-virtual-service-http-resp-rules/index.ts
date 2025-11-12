// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtAlbVirtualServiceHttpRespRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#id NsxtAlbVirtualServiceHttpRespRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX-T ALB Virtual Service ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#virtual_service_id NsxtAlbVirtualServiceHttpRespRules#virtual_service_id}
  */
  readonly virtualServiceId: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#rule NsxtAlbVirtualServiceHttpRespRules#rule}
  */
  readonly rule: NsxtAlbVirtualServiceHttpRespRulesRule[] | cdktf.IResolvable;
}
export interface NsxtAlbVirtualServiceHttpRespRulesRuleActionsModifyHeader {
  /**
  * One of the following HTTP header actions. Options - ADD, REMOVE, REPLACE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#action NsxtAlbVirtualServiceHttpRespRules#action}
  */
  readonly action: string;
  /**
  * HTTP header name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#name NsxtAlbVirtualServiceHttpRespRules#name}
  */
  readonly name: string;
  /**
  * HTTP header value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#value NsxtAlbVirtualServiceHttpRespRules#value}
  */
  readonly value?: string;
}

export function nsxtAlbVirtualServiceHttpRespRulesRuleActionsModifyHeaderToTerraform(struct?: NsxtAlbVirtualServiceHttpRespRulesRuleActionsModifyHeader | cdktf.IResolvable): any {
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


export function nsxtAlbVirtualServiceHttpRespRulesRuleActionsModifyHeaderToHclTerraform(struct?: NsxtAlbVirtualServiceHttpRespRulesRuleActionsModifyHeader | cdktf.IResolvable): any {
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

export class NsxtAlbVirtualServiceHttpRespRulesRuleActionsModifyHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtAlbVirtualServiceHttpRespRulesRuleActionsModifyHeader | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NsxtAlbVirtualServiceHttpRespRulesRuleActionsModifyHeader | cdktf.IResolvable | undefined) {
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

export class NsxtAlbVirtualServiceHttpRespRulesRuleActionsModifyHeaderList extends cdktf.ComplexList {
  public internalValue? : NsxtAlbVirtualServiceHttpRespRulesRuleActionsModifyHeader[] | cdktf.IResolvable

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
  public get(index: number): NsxtAlbVirtualServiceHttpRespRulesRuleActionsModifyHeaderOutputReference {
    return new NsxtAlbVirtualServiceHttpRespRulesRuleActionsModifyHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NsxtAlbVirtualServiceHttpRespRulesRuleActionsRewriteLocationHeader {
  /**
  * Host to which redirect the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#host NsxtAlbVirtualServiceHttpRespRules#host}
  */
  readonly host?: string;
  /**
  * Should the query part be preserved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#keep_query NsxtAlbVirtualServiceHttpRespRules#keep_query}
  */
  readonly keepQuery?: boolean | cdktf.IResolvable;
  /**
  * Path to which redirect the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#path NsxtAlbVirtualServiceHttpRespRules#path}
  */
  readonly path?: string;
  /**
  * Port to which redirect the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#port NsxtAlbVirtualServiceHttpRespRules#port}
  */
  readonly port: string;
  /**
  * HTTP or HTTPS protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#protocol NsxtAlbVirtualServiceHttpRespRules#protocol}
  */
  readonly protocol: string;
}

export function nsxtAlbVirtualServiceHttpRespRulesRuleActionsRewriteLocationHeaderToTerraform(struct?: NsxtAlbVirtualServiceHttpRespRulesRuleActionsRewriteLocationHeaderOutputReference | NsxtAlbVirtualServiceHttpRespRulesRuleActionsRewriteLocationHeader): any {
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
  }
}


export function nsxtAlbVirtualServiceHttpRespRulesRuleActionsRewriteLocationHeaderToHclTerraform(struct?: NsxtAlbVirtualServiceHttpRespRulesRuleActionsRewriteLocationHeaderOutputReference | NsxtAlbVirtualServiceHttpRespRulesRuleActionsRewriteLocationHeader): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtAlbVirtualServiceHttpRespRulesRuleActionsRewriteLocationHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpRespRulesRuleActionsRewriteLocationHeader | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtAlbVirtualServiceHttpRespRulesRuleActionsRewriteLocationHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._keepQuery = undefined;
      this._path = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._keepQuery = value.keepQuery;
      this._path = value.path;
      this._port = value.port;
      this._protocol = value.protocol;
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
}
export interface NsxtAlbVirtualServiceHttpRespRulesRuleActions {
  /**
  * modify_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#modify_header NsxtAlbVirtualServiceHttpRespRules#modify_header}
  */
  readonly modifyHeader?: NsxtAlbVirtualServiceHttpRespRulesRuleActionsModifyHeader[] | cdktf.IResolvable;
  /**
  * rewrite_location_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#rewrite_location_header NsxtAlbVirtualServiceHttpRespRules#rewrite_location_header}
  */
  readonly rewriteLocationHeader?: NsxtAlbVirtualServiceHttpRespRulesRuleActionsRewriteLocationHeader;
}

export function nsxtAlbVirtualServiceHttpRespRulesRuleActionsToTerraform(struct?: NsxtAlbVirtualServiceHttpRespRulesRuleActionsOutputReference | NsxtAlbVirtualServiceHttpRespRulesRuleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    modify_header: cdktf.listMapper(nsxtAlbVirtualServiceHttpRespRulesRuleActionsModifyHeaderToTerraform, true)(struct!.modifyHeader),
    rewrite_location_header: nsxtAlbVirtualServiceHttpRespRulesRuleActionsRewriteLocationHeaderToTerraform(struct!.rewriteLocationHeader),
  }
}


export function nsxtAlbVirtualServiceHttpRespRulesRuleActionsToHclTerraform(struct?: NsxtAlbVirtualServiceHttpRespRulesRuleActionsOutputReference | NsxtAlbVirtualServiceHttpRespRulesRuleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    modify_header: {
      value: cdktf.listMapperHcl(nsxtAlbVirtualServiceHttpRespRulesRuleActionsModifyHeaderToHclTerraform, true)(struct!.modifyHeader),
      isBlock: true,
      type: "set",
      storageClassType: "NsxtAlbVirtualServiceHttpRespRulesRuleActionsModifyHeaderList",
    },
    rewrite_location_header: {
      value: nsxtAlbVirtualServiceHttpRespRulesRuleActionsRewriteLocationHeaderToHclTerraform(struct!.rewriteLocationHeader),
      isBlock: true,
      type: "list",
      storageClassType: "NsxtAlbVirtualServiceHttpRespRulesRuleActionsRewriteLocationHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtAlbVirtualServiceHttpRespRulesRuleActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpRespRulesRuleActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modifyHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyHeader = this._modifyHeader?.internalValue;
    }
    if (this._rewriteLocationHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewriteLocationHeader = this._rewriteLocationHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtAlbVirtualServiceHttpRespRulesRuleActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._modifyHeader.internalValue = undefined;
      this._rewriteLocationHeader.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._modifyHeader.internalValue = value.modifyHeader;
      this._rewriteLocationHeader.internalValue = value.rewriteLocationHeader;
    }
  }

  // modify_header - computed: false, optional: true, required: false
  private _modifyHeader = new NsxtAlbVirtualServiceHttpRespRulesRuleActionsModifyHeaderList(this, "modify_header", true);
  public get modifyHeader() {
    return this._modifyHeader;
  }
  public putModifyHeader(value: NsxtAlbVirtualServiceHttpRespRulesRuleActionsModifyHeader[] | cdktf.IResolvable) {
    this._modifyHeader.internalValue = value;
  }
  public resetModifyHeader() {
    this._modifyHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyHeaderInput() {
    return this._modifyHeader.internalValue;
  }

  // rewrite_location_header - computed: false, optional: true, required: false
  private _rewriteLocationHeader = new NsxtAlbVirtualServiceHttpRespRulesRuleActionsRewriteLocationHeaderOutputReference(this, "rewrite_location_header");
  public get rewriteLocationHeader() {
    return this._rewriteLocationHeader;
  }
  public putRewriteLocationHeader(value: NsxtAlbVirtualServiceHttpRespRulesRuleActionsRewriteLocationHeader) {
    this._rewriteLocationHeader.internalValue = value;
  }
  public resetRewriteLocationHeader() {
    this._rewriteLocationHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteLocationHeaderInput() {
    return this._rewriteLocationHeader.internalValue;
  }
}
export interface NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaClientIpAddress {
  /**
  * Criteria to use for IP address matching the HTTP request. Options - IS_IN, IS_NOT_IN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#criteria NsxtAlbVirtualServiceHttpRespRules#criteria}
  */
  readonly criteria: string;
  /**
  * A set of IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#ip_addresses NsxtAlbVirtualServiceHttpRespRules#ip_addresses}
  */
  readonly ipAddresses: string[];
}

export function nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaClientIpAddressToTerraform(struct?: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaClientIpAddressOutputReference | NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaClientIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: cdktf.stringToTerraform(struct!.criteria),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
  }
}


export function nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaClientIpAddressToHclTerraform(struct?: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaClientIpAddressOutputReference | NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaClientIpAddress): any {
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

export class NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaClientIpAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaClientIpAddress | undefined {
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

  public set internalValue(value: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaClientIpAddress | undefined) {
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
export interface NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaCookie {
  /**
  * Criteria to use for matching cookies in the HTTP request. Options - EXISTS, DOES_NOT_EXIST, BEGINS_WITH, DOES_NOT_BEGIN_WITH, CONTAINS, DOES_NOT_CONTAIN, ENDS_WITH, DOES_NOT_END_WITH, EQUALS, DOES_NOT_EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#criteria NsxtAlbVirtualServiceHttpRespRules#criteria}
  */
  readonly criteria: string;
  /**
  * Name of the HTTP cookie whose value is to be matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#name NsxtAlbVirtualServiceHttpRespRules#name}
  */
  readonly name: string;
  /**
  * String values to match for an HTTP cookie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#value NsxtAlbVirtualServiceHttpRespRules#value}
  */
  readonly value: string;
}

export function nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaCookieToTerraform(struct?: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaCookieOutputReference | NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaCookie): any {
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


export function nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaCookieToHclTerraform(struct?: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaCookieOutputReference | NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaCookie): any {
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

export class NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaCookie | undefined {
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

  public set internalValue(value: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaCookie | undefined) {
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
export interface NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaHttpMethods {
  /**
  * Criteria to use for IP address matching the HTTP request. Options - IS_IN, IS_NOT_IN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#criteria NsxtAlbVirtualServiceHttpRespRules#criteria}
  */
  readonly criteria: string;
  /**
  * HTTP methods to match. Options - GET, PUT, POST, DELETE, HEAD, OPTIONS, TRACE, CONNECT, PATCH, PROPFIND, PROPPATCH, MKCOL, COPY, MOVE, LOCK, UNLOCK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#methods NsxtAlbVirtualServiceHttpRespRules#methods}
  */
  readonly methods: string[];
}

export function nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaHttpMethodsToTerraform(struct?: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaHttpMethodsOutputReference | NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaHttpMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: cdktf.stringToTerraform(struct!.criteria),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
  }
}


export function nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaHttpMethodsToHclTerraform(struct?: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaHttpMethodsOutputReference | NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaHttpMethods): any {
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

export class NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaHttpMethodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaHttpMethods | undefined {
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

  public set internalValue(value: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaHttpMethods | undefined) {
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
export interface NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaLocationHeader {
  /**
  * Criteria to use for matching location header. Options - BEGINS_WITH, DOES_NOT_BEGIN_WITH, CONTAINS, DOES_NOT_CONTAIN, ENDS_WITH, DOES_NOT_END_WITH, EQUALS, DOES_NOT_EQUAL, REGEX_MATCH, REGEX_DOES_NOT_MATCH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#criteria NsxtAlbVirtualServiceHttpRespRules#criteria}
  */
  readonly criteria: string;
  /**
  * A set of values to match for criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#values NsxtAlbVirtualServiceHttpRespRules#values}
  */
  readonly values: string[];
}

export function nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaLocationHeaderToTerraform(struct?: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaLocationHeaderOutputReference | NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaLocationHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: cdktf.stringToTerraform(struct!.criteria),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaLocationHeaderToHclTerraform(struct?: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaLocationHeaderOutputReference | NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaLocationHeader): any {
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

export class NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaLocationHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaLocationHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaLocationHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._criteria = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._criteria = value.criteria;
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
export interface NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaPath {
  /**
  * Criteria to use for matching the path in the HTTP request URI. Options - BEGINS_WITH, DOES_NOT_BEGIN_WITH, CONTAINS, DOES_NOT_CONTAIN, ENDS_WITH, DOES_NOT_END_WITH, EQUALS, DOES_NOT_EQUAL, REGEX_MATCH, REGEX_DOES_NOT_MATCH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#criteria NsxtAlbVirtualServiceHttpRespRules#criteria}
  */
  readonly criteria: string;
  /**
  * String values to match the path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#paths NsxtAlbVirtualServiceHttpRespRules#paths}
  */
  readonly paths: string[];
}

export function nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaPathToTerraform(struct?: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaPathOutputReference | NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: cdktf.stringToTerraform(struct!.criteria),
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
  }
}


export function nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaPathToHclTerraform(struct?: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaPathOutputReference | NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaPath): any {
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

export class NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaPath | undefined {
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

  public set internalValue(value: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaPath | undefined) {
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
export interface NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaRequestHeaders {
  /**
  * Criteria to use for matching headers and cookies in the HTTP request amd response. Options - EXISTS, DOES_NOT_EXIST, BEGINS_WITH, DOES_NOT_BEGIN_WITH, CONTAINS, DOES_NOT_CONTAIN, ENDS_WITH, DOES_NOT_END_WITH, EQUALS, DOES_NOT_EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#criteria NsxtAlbVirtualServiceHttpRespRules#criteria}
  */
  readonly criteria: string;
  /**
  * Name of the HTTP header whose value is to be matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#name NsxtAlbVirtualServiceHttpRespRules#name}
  */
  readonly name: string;
  /**
  * String values to match for an HTTP header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#values NsxtAlbVirtualServiceHttpRespRules#values}
  */
  readonly values: string[];
}

export function nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaRequestHeadersToTerraform(struct?: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaRequestHeaders | cdktf.IResolvable): any {
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


export function nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaRequestHeadersToHclTerraform(struct?: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaRequestHeaders | cdktf.IResolvable): any {
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

export class NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaRequestHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaRequestHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaRequestHeaders | cdktf.IResolvable | undefined) {
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

export class NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaRequestHeadersList extends cdktf.ComplexList {
  public internalValue? : NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaRequestHeaders[] | cdktf.IResolvable

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
  public get(index: number): NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaRequestHeadersOutputReference {
    return new NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaRequestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaResponseHeaders {
  /**
  * Criteria to use for matching headers and cookies in the HTTP request amd response. Options - EXISTS, DOES_NOT_EXIST, BEGINS_WITH, DOES_NOT_BEGIN_WITH, CONTAINS, DOES_NOT_CONTAIN, ENDS_WITH, DOES_NOT_END_WITH, EQUALS, DOES_NOT_EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#criteria NsxtAlbVirtualServiceHttpRespRules#criteria}
  */
  readonly criteria: string;
  /**
  * Name of the HTTP header whose value is to be matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#name NsxtAlbVirtualServiceHttpRespRules#name}
  */
  readonly name?: string;
  /**
  * A set of values to match for an HTTP header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#values NsxtAlbVirtualServiceHttpRespRules#values}
  */
  readonly values?: string[];
}

export function nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaResponseHeadersToTerraform(struct?: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaResponseHeaders | cdktf.IResolvable): any {
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


export function nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaResponseHeadersToHclTerraform(struct?: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaResponseHeaders | cdktf.IResolvable): any {
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

export class NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaResponseHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaResponseHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaResponseHeaders | cdktf.IResolvable | undefined) {
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaResponseHeadersList extends cdktf.ComplexList {
  public internalValue? : NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaResponseHeaders[] | cdktf.IResolvable

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
  public get(index: number): NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaResponseHeadersOutputReference {
    return new NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaResponseHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaServicePorts {
  /**
  * Criteria to use for IP address matching the HTTP request. Options - IS_IN, IS_NOT_IN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#criteria NsxtAlbVirtualServiceHttpRespRules#criteria}
  */
  readonly criteria: string;
  /**
  * A set of TCP ports. Allowed values are 1-65535
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#ports NsxtAlbVirtualServiceHttpRespRules#ports}
  */
  readonly ports: number[];
}

export function nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaServicePortsToTerraform(struct?: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaServicePortsOutputReference | NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaServicePorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: cdktf.stringToTerraform(struct!.criteria),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
  }
}


export function nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaServicePortsToHclTerraform(struct?: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaServicePortsOutputReference | NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaServicePorts): any {
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

export class NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaServicePortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaServicePorts | undefined {
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

  public set internalValue(value: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaServicePorts | undefined) {
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
export interface NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaStatusCode {
  /**
  * Criteria to use for IP address matching the HTTP request. Options - IS_IN, IS_NOT_IN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#criteria NsxtAlbVirtualServiceHttpRespRules#criteria}
  */
  readonly criteria: string;
  /**
  * Enter a http status code or range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#http_status_code NsxtAlbVirtualServiceHttpRespRules#http_status_code}
  */
  readonly httpStatusCode: string;
}

export function nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaStatusCodeToTerraform(struct?: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaStatusCodeOutputReference | NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaStatusCode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: cdktf.stringToTerraform(struct!.criteria),
    http_status_code: cdktf.stringToTerraform(struct!.httpStatusCode),
  }
}


export function nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaStatusCodeToHclTerraform(struct?: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaStatusCodeOutputReference | NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaStatusCode): any {
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
    http_status_code: {
      value: cdktf.stringToHclTerraform(struct!.httpStatusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaStatusCodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaStatusCode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria;
    }
    if (this._httpStatusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatusCode = this._httpStatusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaStatusCode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._criteria = undefined;
      this._httpStatusCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._criteria = value.criteria;
      this._httpStatusCode = value.httpStatusCode;
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

  // http_status_code - computed: false, optional: false, required: true
  private _httpStatusCode?: string; 
  public get httpStatusCode() {
    return this.getStringAttribute('http_status_code');
  }
  public set httpStatusCode(value: string) {
    this._httpStatusCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusCodeInput() {
    return this._httpStatusCode;
  }
}
export interface NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteria {
  /**
  * Protocol to match - 'HTTP' or 'HTTPS'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#protocol_type NsxtAlbVirtualServiceHttpRespRules#protocol_type}
  */
  readonly protocolType?: string;
  /**
  * HTTP request query strings to match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#query NsxtAlbVirtualServiceHttpRespRules#query}
  */
  readonly query?: string[];
  /**
  * client_ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#client_ip_address NsxtAlbVirtualServiceHttpRespRules#client_ip_address}
  */
  readonly clientIpAddress?: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaClientIpAddress;
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#cookie NsxtAlbVirtualServiceHttpRespRules#cookie}
  */
  readonly cookie?: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaCookie;
  /**
  * http_methods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#http_methods NsxtAlbVirtualServiceHttpRespRules#http_methods}
  */
  readonly httpMethods?: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaHttpMethods;
  /**
  * location_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#location_header NsxtAlbVirtualServiceHttpRespRules#location_header}
  */
  readonly locationHeader?: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaLocationHeader;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#path NsxtAlbVirtualServiceHttpRespRules#path}
  */
  readonly path?: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaPath;
  /**
  * request_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#request_headers NsxtAlbVirtualServiceHttpRespRules#request_headers}
  */
  readonly requestHeaders?: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaRequestHeaders[] | cdktf.IResolvable;
  /**
  * response_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#response_headers NsxtAlbVirtualServiceHttpRespRules#response_headers}
  */
  readonly responseHeaders?: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaResponseHeaders[] | cdktf.IResolvable;
  /**
  * service_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#service_ports NsxtAlbVirtualServiceHttpRespRules#service_ports}
  */
  readonly servicePorts?: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaServicePorts;
  /**
  * status_code block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#status_code NsxtAlbVirtualServiceHttpRespRules#status_code}
  */
  readonly statusCode?: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaStatusCode;
}

export function nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaToTerraform(struct?: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaOutputReference | NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol_type: cdktf.stringToTerraform(struct!.protocolType),
    query: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.query),
    client_ip_address: nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaClientIpAddressToTerraform(struct!.clientIpAddress),
    cookie: nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaCookieToTerraform(struct!.cookie),
    http_methods: nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaHttpMethodsToTerraform(struct!.httpMethods),
    location_header: nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaLocationHeaderToTerraform(struct!.locationHeader),
    path: nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaPathToTerraform(struct!.path),
    request_headers: cdktf.listMapper(nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaRequestHeadersToTerraform, true)(struct!.requestHeaders),
    response_headers: cdktf.listMapper(nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaResponseHeadersToTerraform, true)(struct!.responseHeaders),
    service_ports: nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaServicePortsToTerraform(struct!.servicePorts),
    status_code: nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaStatusCodeToTerraform(struct!.statusCode),
  }
}


export function nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaToHclTerraform(struct?: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaOutputReference | NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteria): any {
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
      value: nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaClientIpAddressToHclTerraform(struct!.clientIpAddress),
      isBlock: true,
      type: "list",
      storageClassType: "NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaClientIpAddressList",
    },
    cookie: {
      value: nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaCookieToHclTerraform(struct!.cookie),
      isBlock: true,
      type: "list",
      storageClassType: "NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaCookieList",
    },
    http_methods: {
      value: nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaHttpMethodsToHclTerraform(struct!.httpMethods),
      isBlock: true,
      type: "list",
      storageClassType: "NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaHttpMethodsList",
    },
    location_header: {
      value: nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaLocationHeaderToHclTerraform(struct!.locationHeader),
      isBlock: true,
      type: "list",
      storageClassType: "NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaLocationHeaderList",
    },
    path: {
      value: nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaPathList",
    },
    request_headers: {
      value: cdktf.listMapperHcl(nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaRequestHeadersToHclTerraform, true)(struct!.requestHeaders),
      isBlock: true,
      type: "set",
      storageClassType: "NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaRequestHeadersList",
    },
    response_headers: {
      value: cdktf.listMapperHcl(nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaResponseHeadersToHclTerraform, true)(struct!.responseHeaders),
      isBlock: true,
      type: "set",
      storageClassType: "NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaResponseHeadersList",
    },
    service_ports: {
      value: nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaServicePortsToHclTerraform(struct!.servicePorts),
      isBlock: true,
      type: "list",
      storageClassType: "NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaServicePortsList",
    },
    status_code: {
      value: nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaStatusCodeToHclTerraform(struct!.statusCode),
      isBlock: true,
      type: "list",
      storageClassType: "NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaStatusCodeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteria | undefined {
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
    if (this._locationHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationHeader = this._locationHeader?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._requestHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders?.internalValue;
    }
    if (this._responseHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaders = this._responseHeaders?.internalValue;
    }
    if (this._servicePorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePorts = this._servicePorts?.internalValue;
    }
    if (this._statusCode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._protocolType = undefined;
      this._query = undefined;
      this._clientIpAddress.internalValue = undefined;
      this._cookie.internalValue = undefined;
      this._httpMethods.internalValue = undefined;
      this._locationHeader.internalValue = undefined;
      this._path.internalValue = undefined;
      this._requestHeaders.internalValue = undefined;
      this._responseHeaders.internalValue = undefined;
      this._servicePorts.internalValue = undefined;
      this._statusCode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._protocolType = value.protocolType;
      this._query = value.query;
      this._clientIpAddress.internalValue = value.clientIpAddress;
      this._cookie.internalValue = value.cookie;
      this._httpMethods.internalValue = value.httpMethods;
      this._locationHeader.internalValue = value.locationHeader;
      this._path.internalValue = value.path;
      this._requestHeaders.internalValue = value.requestHeaders;
      this._responseHeaders.internalValue = value.responseHeaders;
      this._servicePorts.internalValue = value.servicePorts;
      this._statusCode.internalValue = value.statusCode;
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
  private _clientIpAddress = new NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaClientIpAddressOutputReference(this, "client_ip_address");
  public get clientIpAddress() {
    return this._clientIpAddress;
  }
  public putClientIpAddress(value: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaClientIpAddress) {
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
  private _cookie = new NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaCookie) {
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
  private _httpMethods = new NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaHttpMethodsOutputReference(this, "http_methods");
  public get httpMethods() {
    return this._httpMethods;
  }
  public putHttpMethods(value: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaHttpMethods) {
    this._httpMethods.internalValue = value;
  }
  public resetHttpMethods() {
    this._httpMethods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodsInput() {
    return this._httpMethods.internalValue;
  }

  // location_header - computed: false, optional: true, required: false
  private _locationHeader = new NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaLocationHeaderOutputReference(this, "location_header");
  public get locationHeader() {
    return this._locationHeader;
  }
  public putLocationHeader(value: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaLocationHeader) {
    this._locationHeader.internalValue = value;
  }
  public resetLocationHeader() {
    this._locationHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationHeaderInput() {
    return this._locationHeader.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaPath) {
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
  private _requestHeaders = new NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaRequestHeadersList(this, "request_headers", true);
  public get requestHeaders() {
    return this._requestHeaders;
  }
  public putRequestHeaders(value: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaRequestHeaders[] | cdktf.IResolvable) {
    this._requestHeaders.internalValue = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders.internalValue;
  }

  // response_headers - computed: false, optional: true, required: false
  private _responseHeaders = new NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaResponseHeadersList(this, "response_headers", true);
  public get responseHeaders() {
    return this._responseHeaders;
  }
  public putResponseHeaders(value: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaResponseHeaders[] | cdktf.IResolvable) {
    this._responseHeaders.internalValue = value;
  }
  public resetResponseHeaders() {
    this._responseHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersInput() {
    return this._responseHeaders.internalValue;
  }

  // service_ports - computed: false, optional: true, required: false
  private _servicePorts = new NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaServicePortsOutputReference(this, "service_ports");
  public get servicePorts() {
    return this._servicePorts;
  }
  public putServicePorts(value: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaServicePorts) {
    this._servicePorts.internalValue = value;
  }
  public resetServicePorts() {
    this._servicePorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortsInput() {
    return this._servicePorts.internalValue;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode = new NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaStatusCodeOutputReference(this, "status_code");
  public get statusCode() {
    return this._statusCode;
  }
  public putStatusCode(value: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaStatusCode) {
    this._statusCode.internalValue = value;
  }
  public resetStatusCode() {
    this._statusCode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode.internalValue;
  }
}
export interface NsxtAlbVirtualServiceHttpRespRulesRule {
  /**
  * Defines if the rule is active or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#active NsxtAlbVirtualServiceHttpRespRules#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Defines whether to enable logging with headers on rule match or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#logging NsxtAlbVirtualServiceHttpRespRules#logging}
  */
  readonly logging?: boolean | cdktf.IResolvable;
  /**
  * Name of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#name NsxtAlbVirtualServiceHttpRespRules#name}
  */
  readonly name: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#actions NsxtAlbVirtualServiceHttpRespRules#actions}
  */
  readonly actions: NsxtAlbVirtualServiceHttpRespRulesRuleActions;
  /**
  * match_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#match_criteria NsxtAlbVirtualServiceHttpRespRules#match_criteria}
  */
  readonly matchCriteria: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteria;
}

export function nsxtAlbVirtualServiceHttpRespRulesRuleToTerraform(struct?: NsxtAlbVirtualServiceHttpRespRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    logging: cdktf.booleanToTerraform(struct!.logging),
    name: cdktf.stringToTerraform(struct!.name),
    actions: nsxtAlbVirtualServiceHttpRespRulesRuleActionsToTerraform(struct!.actions),
    match_criteria: nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaToTerraform(struct!.matchCriteria),
  }
}


export function nsxtAlbVirtualServiceHttpRespRulesRuleToHclTerraform(struct?: NsxtAlbVirtualServiceHttpRespRulesRule | cdktf.IResolvable): any {
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
      value: nsxtAlbVirtualServiceHttpRespRulesRuleActionsToHclTerraform(struct!.actions),
      isBlock: true,
      type: "set",
      storageClassType: "NsxtAlbVirtualServiceHttpRespRulesRuleActionsList",
    },
    match_criteria: {
      value: nsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaToHclTerraform(struct!.matchCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtAlbVirtualServiceHttpRespRulesRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtAlbVirtualServiceHttpRespRulesRule | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NsxtAlbVirtualServiceHttpRespRulesRule | cdktf.IResolvable | undefined) {
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
  private _actions = new NsxtAlbVirtualServiceHttpRespRulesRuleActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: NsxtAlbVirtualServiceHttpRespRulesRuleActions) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria = new NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteriaOutputReference(this, "match_criteria");
  public get matchCriteria() {
    return this._matchCriteria;
  }
  public putMatchCriteria(value: NsxtAlbVirtualServiceHttpRespRulesRuleMatchCriteria) {
    this._matchCriteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria.internalValue;
  }
}

export class NsxtAlbVirtualServiceHttpRespRulesRuleList extends cdktf.ComplexList {
  public internalValue? : NsxtAlbVirtualServiceHttpRespRulesRule[] | cdktf.IResolvable

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
  public get(index: number): NsxtAlbVirtualServiceHttpRespRulesRuleOutputReference {
    return new NsxtAlbVirtualServiceHttpRespRulesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules vcd_nsxt_alb_virtual_service_http_resp_rules}
*/
export class NsxtAlbVirtualServiceHttpRespRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_alb_virtual_service_http_resp_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtAlbVirtualServiceHttpRespRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtAlbVirtualServiceHttpRespRules to import
  * @param importFromId The id of the existing NsxtAlbVirtualServiceHttpRespRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtAlbVirtualServiceHttpRespRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_alb_virtual_service_http_resp_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service_http_resp_rules vcd_nsxt_alb_virtual_service_http_resp_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtAlbVirtualServiceHttpRespRulesConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtAlbVirtualServiceHttpRespRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_alb_virtual_service_http_resp_rules',
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
  private _rule = new NsxtAlbVirtualServiceHttpRespRulesRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: NsxtAlbVirtualServiceHttpRespRulesRule[] | cdktf.IResolvable) {
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
      rule: cdktf.listMapper(nsxtAlbVirtualServiceHttpRespRulesRuleToTerraform, true)(this._rule.internalValue),
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
        value: cdktf.listMapperHcl(nsxtAlbVirtualServiceHttpRespRulesRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NsxtAlbVirtualServiceHttpRespRulesRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
