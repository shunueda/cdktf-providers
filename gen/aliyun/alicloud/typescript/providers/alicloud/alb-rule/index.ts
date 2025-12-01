// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlbRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#direction AlbRule#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#dry_run AlbRule#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#id AlbRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#listener_id AlbRule#listener_id}
  */
  readonly listenerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#priority AlbRule#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#rule_name AlbRule#rule_name}
  */
  readonly ruleName: string;
  /**
  * rule_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#rule_actions AlbRule#rule_actions}
  */
  readonly ruleActions: AlbRuleRuleActions[] | cdktf.IResolvable;
  /**
  * rule_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#rule_conditions AlbRule#rule_conditions}
  */
  readonly ruleConditions: AlbRuleRuleConditions[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#timeouts AlbRule#timeouts}
  */
  readonly timeouts?: AlbRuleTimeouts;
}
export interface AlbRuleRuleActionsCorsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#allow_credentials AlbRule#allow_credentials}
  */
  readonly allowCredentials?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#allow_headers AlbRule#allow_headers}
  */
  readonly allowHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#allow_methods AlbRule#allow_methods}
  */
  readonly allowMethods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#allow_origin AlbRule#allow_origin}
  */
  readonly allowOrigin?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#expose_headers AlbRule#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#max_age AlbRule#max_age}
  */
  readonly maxAge?: number;
}

export function albRuleRuleActionsCorsConfigToTerraform(struct?: AlbRuleRuleActionsCorsConfigOutputReference | AlbRuleRuleActionsCorsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_credentials: cdktf.stringToTerraform(struct!.allowCredentials),
    allow_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowHeaders),
    allow_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowMethods),
    allow_origin: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowOrigin),
    expose_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exposeHeaders),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
  }
}


export function albRuleRuleActionsCorsConfigToHclTerraform(struct?: AlbRuleRuleActionsCorsConfigOutputReference | AlbRuleRuleActionsCorsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_credentials: {
      value: cdktf.stringToHclTerraform(struct!.allowCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_origin: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowOrigin),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    expose_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exposeHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_age: {
      value: cdktf.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbRuleRuleActionsCorsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbRuleRuleActionsCorsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCredentials = this._allowCredentials;
    }
    if (this._allowHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHeaders = this._allowHeaders;
    }
    if (this._allowMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMethods = this._allowMethods;
    }
    if (this._allowOrigin !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOrigin = this._allowOrigin;
    }
    if (this._exposeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeHeaders = this._exposeHeaders;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbRuleRuleActionsCorsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowCredentials = undefined;
      this._allowHeaders = undefined;
      this._allowMethods = undefined;
      this._allowOrigin = undefined;
      this._exposeHeaders = undefined;
      this._maxAge = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowCredentials = value.allowCredentials;
      this._allowHeaders = value.allowHeaders;
      this._allowMethods = value.allowMethods;
      this._allowOrigin = value.allowOrigin;
      this._exposeHeaders = value.exposeHeaders;
      this._maxAge = value.maxAge;
    }
  }

  // allow_credentials - computed: false, optional: true, required: false
  private _allowCredentials?: string; 
  public get allowCredentials() {
    return this.getStringAttribute('allow_credentials');
  }
  public set allowCredentials(value: string) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials;
  }

  // allow_headers - computed: false, optional: true, required: false
  private _allowHeaders?: string[]; 
  public get allowHeaders() {
    return this.getListAttribute('allow_headers');
  }
  public set allowHeaders(value: string[]) {
    this._allowHeaders = value;
  }
  public resetAllowHeaders() {
    this._allowHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHeadersInput() {
    return this._allowHeaders;
  }

  // allow_methods - computed: false, optional: true, required: false
  private _allowMethods?: string[]; 
  public get allowMethods() {
    return this.getListAttribute('allow_methods');
  }
  public set allowMethods(value: string[]) {
    this._allowMethods = value;
  }
  public resetAllowMethods() {
    this._allowMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMethodsInput() {
    return this._allowMethods;
  }

  // allow_origin - computed: false, optional: true, required: false
  private _allowOrigin?: string[]; 
  public get allowOrigin() {
    return this.getListAttribute('allow_origin');
  }
  public set allowOrigin(value: string[]) {
    this._allowOrigin = value;
  }
  public resetAllowOrigin() {
    this._allowOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginInput() {
    return this._allowOrigin;
  }

  // expose_headers - computed: false, optional: true, required: false
  private _exposeHeaders?: string[]; 
  public get exposeHeaders() {
    return this.getListAttribute('expose_headers');
  }
  public set exposeHeaders(value: string[]) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }
}
export interface AlbRuleRuleActionsFixedResponseConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#content AlbRule#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#content_type AlbRule#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#http_code AlbRule#http_code}
  */
  readonly httpCode?: string;
}

export function albRuleRuleActionsFixedResponseConfigToTerraform(struct?: AlbRuleRuleActionsFixedResponseConfigOutputReference | AlbRuleRuleActionsFixedResponseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    http_code: cdktf.stringToTerraform(struct!.httpCode),
  }
}


export function albRuleRuleActionsFixedResponseConfigToHclTerraform(struct?: AlbRuleRuleActionsFixedResponseConfigOutputReference | AlbRuleRuleActionsFixedResponseConfig): any {
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
    http_code: {
      value: cdktf.stringToHclTerraform(struct!.httpCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbRuleRuleActionsFixedResponseConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbRuleRuleActionsFixedResponseConfig | undefined {
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
    if (this._httpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCode = this._httpCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbRuleRuleActionsFixedResponseConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._contentType = undefined;
      this._httpCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._contentType = value.contentType;
      this._httpCode = value.httpCode;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
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

  // http_code - computed: false, optional: true, required: false
  private _httpCode?: string; 
  public get httpCode() {
    return this.getStringAttribute('http_code');
  }
  public set httpCode(value: string) {
    this._httpCode = value;
  }
  public resetHttpCode() {
    this._httpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCodeInput() {
    return this._httpCode;
  }
}
export interface AlbRuleRuleActionsForwardGroupConfigServerGroupStickySession {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#enabled AlbRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#timeout AlbRule#timeout}
  */
  readonly timeout?: number;
}

export function albRuleRuleActionsForwardGroupConfigServerGroupStickySessionToTerraform(struct?: AlbRuleRuleActionsForwardGroupConfigServerGroupStickySessionOutputReference | AlbRuleRuleActionsForwardGroupConfigServerGroupStickySession): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function albRuleRuleActionsForwardGroupConfigServerGroupStickySessionToHclTerraform(struct?: AlbRuleRuleActionsForwardGroupConfigServerGroupStickySessionOutputReference | AlbRuleRuleActionsForwardGroupConfigServerGroupStickySession): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbRuleRuleActionsForwardGroupConfigServerGroupStickySessionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbRuleRuleActionsForwardGroupConfigServerGroupStickySession | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbRuleRuleActionsForwardGroupConfigServerGroupStickySession | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._timeout = value.timeout;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface AlbRuleRuleActionsForwardGroupConfigServerGroupTuples {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#server_group_id AlbRule#server_group_id}
  */
  readonly serverGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#weight AlbRule#weight}
  */
  readonly weight?: number;
}

export function albRuleRuleActionsForwardGroupConfigServerGroupTuplesToTerraform(struct?: AlbRuleRuleActionsForwardGroupConfigServerGroupTuples | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_group_id: cdktf.stringToTerraform(struct!.serverGroupId),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function albRuleRuleActionsForwardGroupConfigServerGroupTuplesToHclTerraform(struct?: AlbRuleRuleActionsForwardGroupConfigServerGroupTuples | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_group_id: {
      value: cdktf.stringToHclTerraform(struct!.serverGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbRuleRuleActionsForwardGroupConfigServerGroupTuplesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbRuleRuleActionsForwardGroupConfigServerGroupTuples | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverGroupId = this._serverGroupId;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbRuleRuleActionsForwardGroupConfigServerGroupTuples | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serverGroupId = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serverGroupId = value.serverGroupId;
      this._weight = value.weight;
    }
  }

  // server_group_id - computed: true, optional: true, required: false
  private _serverGroupId?: string; 
  public get serverGroupId() {
    return this.getStringAttribute('server_group_id');
  }
  public set serverGroupId(value: string) {
    this._serverGroupId = value;
  }
  public resetServerGroupId() {
    this._serverGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupIdInput() {
    return this._serverGroupId;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class AlbRuleRuleActionsForwardGroupConfigServerGroupTuplesList extends cdktf.ComplexList {
  public internalValue? : AlbRuleRuleActionsForwardGroupConfigServerGroupTuples[] | cdktf.IResolvable

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
  public get(index: number): AlbRuleRuleActionsForwardGroupConfigServerGroupTuplesOutputReference {
    return new AlbRuleRuleActionsForwardGroupConfigServerGroupTuplesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbRuleRuleActionsForwardGroupConfig {
  /**
  * server_group_sticky_session block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#server_group_sticky_session AlbRule#server_group_sticky_session}
  */
  readonly serverGroupStickySession?: AlbRuleRuleActionsForwardGroupConfigServerGroupStickySession;
  /**
  * server_group_tuples block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#server_group_tuples AlbRule#server_group_tuples}
  */
  readonly serverGroupTuples?: AlbRuleRuleActionsForwardGroupConfigServerGroupTuples[] | cdktf.IResolvable;
}

export function albRuleRuleActionsForwardGroupConfigToTerraform(struct?: AlbRuleRuleActionsForwardGroupConfigOutputReference | AlbRuleRuleActionsForwardGroupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_group_sticky_session: albRuleRuleActionsForwardGroupConfigServerGroupStickySessionToTerraform(struct!.serverGroupStickySession),
    server_group_tuples: cdktf.listMapper(albRuleRuleActionsForwardGroupConfigServerGroupTuplesToTerraform, true)(struct!.serverGroupTuples),
  }
}


export function albRuleRuleActionsForwardGroupConfigToHclTerraform(struct?: AlbRuleRuleActionsForwardGroupConfigOutputReference | AlbRuleRuleActionsForwardGroupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_group_sticky_session: {
      value: albRuleRuleActionsForwardGroupConfigServerGroupStickySessionToHclTerraform(struct!.serverGroupStickySession),
      isBlock: true,
      type: "set",
      storageClassType: "AlbRuleRuleActionsForwardGroupConfigServerGroupStickySessionList",
    },
    server_group_tuples: {
      value: cdktf.listMapperHcl(albRuleRuleActionsForwardGroupConfigServerGroupTuplesToHclTerraform, true)(struct!.serverGroupTuples),
      isBlock: true,
      type: "set",
      storageClassType: "AlbRuleRuleActionsForwardGroupConfigServerGroupTuplesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbRuleRuleActionsForwardGroupConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbRuleRuleActionsForwardGroupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverGroupStickySession?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverGroupStickySession = this._serverGroupStickySession?.internalValue;
    }
    if (this._serverGroupTuples?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverGroupTuples = this._serverGroupTuples?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbRuleRuleActionsForwardGroupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serverGroupStickySession.internalValue = undefined;
      this._serverGroupTuples.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serverGroupStickySession.internalValue = value.serverGroupStickySession;
      this._serverGroupTuples.internalValue = value.serverGroupTuples;
    }
  }

  // server_group_sticky_session - computed: false, optional: true, required: false
  private _serverGroupStickySession = new AlbRuleRuleActionsForwardGroupConfigServerGroupStickySessionOutputReference(this, "server_group_sticky_session");
  public get serverGroupStickySession() {
    return this._serverGroupStickySession;
  }
  public putServerGroupStickySession(value: AlbRuleRuleActionsForwardGroupConfigServerGroupStickySession) {
    this._serverGroupStickySession.internalValue = value;
  }
  public resetServerGroupStickySession() {
    this._serverGroupStickySession.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupStickySessionInput() {
    return this._serverGroupStickySession.internalValue;
  }

  // server_group_tuples - computed: false, optional: true, required: false
  private _serverGroupTuples = new AlbRuleRuleActionsForwardGroupConfigServerGroupTuplesList(this, "server_group_tuples", true);
  public get serverGroupTuples() {
    return this._serverGroupTuples;
  }
  public putServerGroupTuples(value: AlbRuleRuleActionsForwardGroupConfigServerGroupTuples[] | cdktf.IResolvable) {
    this._serverGroupTuples.internalValue = value;
  }
  public resetServerGroupTuples() {
    this._serverGroupTuples.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupTuplesInput() {
    return this._serverGroupTuples.internalValue;
  }
}
export interface AlbRuleRuleActionsInsertHeaderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#key AlbRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#value AlbRule#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#value_type AlbRule#value_type}
  */
  readonly valueType?: string;
}

export function albRuleRuleActionsInsertHeaderConfigToTerraform(struct?: AlbRuleRuleActionsInsertHeaderConfigOutputReference | AlbRuleRuleActionsInsertHeaderConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function albRuleRuleActionsInsertHeaderConfigToHclTerraform(struct?: AlbRuleRuleActionsInsertHeaderConfigOutputReference | AlbRuleRuleActionsInsertHeaderConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbRuleRuleActionsInsertHeaderConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbRuleRuleActionsInsertHeaderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbRuleRuleActionsInsertHeaderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._value = undefined;
      this._valueType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._value = value.value;
      this._valueType = value.valueType;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // value_type - computed: false, optional: true, required: false
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  public resetValueType() {
    this._valueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}
export interface AlbRuleRuleActionsRedirectConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#host AlbRule#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#http_code AlbRule#http_code}
  */
  readonly httpCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#path AlbRule#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#port AlbRule#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#protocol AlbRule#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#query AlbRule#query}
  */
  readonly query?: string;
}

export function albRuleRuleActionsRedirectConfigToTerraform(struct?: AlbRuleRuleActionsRedirectConfigOutputReference | AlbRuleRuleActionsRedirectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_code: cdktf.stringToTerraform(struct!.httpCode),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function albRuleRuleActionsRedirectConfigToHclTerraform(struct?: AlbRuleRuleActionsRedirectConfigOutputReference | AlbRuleRuleActionsRedirectConfig): any {
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
    http_code: {
      value: cdktf.stringToHclTerraform(struct!.httpCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class AlbRuleRuleActionsRedirectConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbRuleRuleActionsRedirectConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCode = this._httpCode;
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
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbRuleRuleActionsRedirectConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._httpCode = undefined;
      this._path = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._httpCode = value.httpCode;
      this._path = value.path;
      this._port = value.port;
      this._protocol = value.protocol;
      this._query = value.query;
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

  // http_code - computed: false, optional: true, required: false
  private _httpCode?: string; 
  public get httpCode() {
    return this.getStringAttribute('http_code');
  }
  public set httpCode(value: string) {
    this._httpCode = value;
  }
  public resetHttpCode() {
    this._httpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCodeInput() {
    return this._httpCode;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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
export interface AlbRuleRuleActionsRemoveHeaderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#key AlbRule#key}
  */
  readonly key?: string;
}

export function albRuleRuleActionsRemoveHeaderConfigToTerraform(struct?: AlbRuleRuleActionsRemoveHeaderConfigOutputReference | AlbRuleRuleActionsRemoveHeaderConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function albRuleRuleActionsRemoveHeaderConfigToHclTerraform(struct?: AlbRuleRuleActionsRemoveHeaderConfigOutputReference | AlbRuleRuleActionsRemoveHeaderConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbRuleRuleActionsRemoveHeaderConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbRuleRuleActionsRemoveHeaderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbRuleRuleActionsRemoveHeaderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface AlbRuleRuleActionsRewriteConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#host AlbRule#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#path AlbRule#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#query AlbRule#query}
  */
  readonly query?: string;
}

export function albRuleRuleActionsRewriteConfigToTerraform(struct?: AlbRuleRuleActionsRewriteConfigOutputReference | AlbRuleRuleActionsRewriteConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function albRuleRuleActionsRewriteConfigToHclTerraform(struct?: AlbRuleRuleActionsRewriteConfigOutputReference | AlbRuleRuleActionsRewriteConfig): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class AlbRuleRuleActionsRewriteConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbRuleRuleActionsRewriteConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbRuleRuleActionsRewriteConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._path = undefined;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._path = value.path;
      this._query = value.query;
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
export interface AlbRuleRuleActionsTrafficLimitConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#per_ip_qps AlbRule#per_ip_qps}
  */
  readonly perIpQps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#qps AlbRule#qps}
  */
  readonly qps?: number;
}

export function albRuleRuleActionsTrafficLimitConfigToTerraform(struct?: AlbRuleRuleActionsTrafficLimitConfigOutputReference | AlbRuleRuleActionsTrafficLimitConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    per_ip_qps: cdktf.numberToTerraform(struct!.perIpQps),
    qps: cdktf.numberToTerraform(struct!.qps),
  }
}


export function albRuleRuleActionsTrafficLimitConfigToHclTerraform(struct?: AlbRuleRuleActionsTrafficLimitConfigOutputReference | AlbRuleRuleActionsTrafficLimitConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    per_ip_qps: {
      value: cdktf.numberToHclTerraform(struct!.perIpQps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    qps: {
      value: cdktf.numberToHclTerraform(struct!.qps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbRuleRuleActionsTrafficLimitConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbRuleRuleActionsTrafficLimitConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perIpQps !== undefined) {
      hasAnyValues = true;
      internalValueResult.perIpQps = this._perIpQps;
    }
    if (this._qps !== undefined) {
      hasAnyValues = true;
      internalValueResult.qps = this._qps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbRuleRuleActionsTrafficLimitConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._perIpQps = undefined;
      this._qps = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._perIpQps = value.perIpQps;
      this._qps = value.qps;
    }
  }

  // per_ip_qps - computed: false, optional: true, required: false
  private _perIpQps?: number; 
  public get perIpQps() {
    return this.getNumberAttribute('per_ip_qps');
  }
  public set perIpQps(value: number) {
    this._perIpQps = value;
  }
  public resetPerIpQps() {
    this._perIpQps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perIpQpsInput() {
    return this._perIpQps;
  }

  // qps - computed: false, optional: true, required: false
  private _qps?: number; 
  public get qps() {
    return this.getNumberAttribute('qps');
  }
  public set qps(value: number) {
    this._qps = value;
  }
  public resetQps() {
    this._qps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qpsInput() {
    return this._qps;
  }
}
export interface AlbRuleRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#server_group_id AlbRule#server_group_id}
  */
  readonly serverGroupId?: string;
}

export function albRuleRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuplesToTerraform(struct?: AlbRuleRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_group_id: cdktf.stringToTerraform(struct!.serverGroupId),
  }
}


export function albRuleRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuplesToHclTerraform(struct?: AlbRuleRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_group_id: {
      value: cdktf.stringToHclTerraform(struct!.serverGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbRuleRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuplesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbRuleRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverGroupId = this._serverGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbRuleRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serverGroupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serverGroupId = value.serverGroupId;
    }
  }

  // server_group_id - computed: false, optional: true, required: false
  private _serverGroupId?: string; 
  public get serverGroupId() {
    return this.getStringAttribute('server_group_id');
  }
  public set serverGroupId(value: string) {
    this._serverGroupId = value;
  }
  public resetServerGroupId() {
    this._serverGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupIdInput() {
    return this._serverGroupId;
  }
}

export class AlbRuleRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuplesList extends cdktf.ComplexList {
  public internalValue? : AlbRuleRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples[] | cdktf.IResolvable

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
  public get(index: number): AlbRuleRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuplesOutputReference {
    return new AlbRuleRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuplesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbRuleRuleActionsTrafficMirrorConfigMirrorGroupConfig {
  /**
  * server_group_tuples block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#server_group_tuples AlbRule#server_group_tuples}
  */
  readonly serverGroupTuples?: AlbRuleRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples[] | cdktf.IResolvable;
}

export function albRuleRuleActionsTrafficMirrorConfigMirrorGroupConfigToTerraform(struct?: AlbRuleRuleActionsTrafficMirrorConfigMirrorGroupConfigOutputReference | AlbRuleRuleActionsTrafficMirrorConfigMirrorGroupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_group_tuples: cdktf.listMapper(albRuleRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuplesToTerraform, true)(struct!.serverGroupTuples),
  }
}


export function albRuleRuleActionsTrafficMirrorConfigMirrorGroupConfigToHclTerraform(struct?: AlbRuleRuleActionsTrafficMirrorConfigMirrorGroupConfigOutputReference | AlbRuleRuleActionsTrafficMirrorConfigMirrorGroupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_group_tuples: {
      value: cdktf.listMapperHcl(albRuleRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuplesToHclTerraform, true)(struct!.serverGroupTuples),
      isBlock: true,
      type: "set",
      storageClassType: "AlbRuleRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuplesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbRuleRuleActionsTrafficMirrorConfigMirrorGroupConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbRuleRuleActionsTrafficMirrorConfigMirrorGroupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverGroupTuples?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverGroupTuples = this._serverGroupTuples?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbRuleRuleActionsTrafficMirrorConfigMirrorGroupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serverGroupTuples.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serverGroupTuples.internalValue = value.serverGroupTuples;
    }
  }

  // server_group_tuples - computed: false, optional: true, required: false
  private _serverGroupTuples = new AlbRuleRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuplesList(this, "server_group_tuples", true);
  public get serverGroupTuples() {
    return this._serverGroupTuples;
  }
  public putServerGroupTuples(value: AlbRuleRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples[] | cdktf.IResolvable) {
    this._serverGroupTuples.internalValue = value;
  }
  public resetServerGroupTuples() {
    this._serverGroupTuples.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupTuplesInput() {
    return this._serverGroupTuples.internalValue;
  }
}
export interface AlbRuleRuleActionsTrafficMirrorConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#target_type AlbRule#target_type}
  */
  readonly targetType?: string;
  /**
  * mirror_group_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#mirror_group_config AlbRule#mirror_group_config}
  */
  readonly mirrorGroupConfig?: AlbRuleRuleActionsTrafficMirrorConfigMirrorGroupConfig;
}

export function albRuleRuleActionsTrafficMirrorConfigToTerraform(struct?: AlbRuleRuleActionsTrafficMirrorConfigOutputReference | AlbRuleRuleActionsTrafficMirrorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_type: cdktf.stringToTerraform(struct!.targetType),
    mirror_group_config: albRuleRuleActionsTrafficMirrorConfigMirrorGroupConfigToTerraform(struct!.mirrorGroupConfig),
  }
}


export function albRuleRuleActionsTrafficMirrorConfigToHclTerraform(struct?: AlbRuleRuleActionsTrafficMirrorConfigOutputReference | AlbRuleRuleActionsTrafficMirrorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_type: {
      value: cdktf.stringToHclTerraform(struct!.targetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mirror_group_config: {
      value: albRuleRuleActionsTrafficMirrorConfigMirrorGroupConfigToHclTerraform(struct!.mirrorGroupConfig),
      isBlock: true,
      type: "set",
      storageClassType: "AlbRuleRuleActionsTrafficMirrorConfigMirrorGroupConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbRuleRuleActionsTrafficMirrorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbRuleRuleActionsTrafficMirrorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    if (this._mirrorGroupConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorGroupConfig = this._mirrorGroupConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbRuleRuleActionsTrafficMirrorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetType = undefined;
      this._mirrorGroupConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetType = value.targetType;
      this._mirrorGroupConfig.internalValue = value.mirrorGroupConfig;
    }
  }

  // target_type - computed: false, optional: true, required: false
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }

  // mirror_group_config - computed: false, optional: true, required: false
  private _mirrorGroupConfig = new AlbRuleRuleActionsTrafficMirrorConfigMirrorGroupConfigOutputReference(this, "mirror_group_config");
  public get mirrorGroupConfig() {
    return this._mirrorGroupConfig;
  }
  public putMirrorGroupConfig(value: AlbRuleRuleActionsTrafficMirrorConfigMirrorGroupConfig) {
    this._mirrorGroupConfig.internalValue = value;
  }
  public resetMirrorGroupConfig() {
    this._mirrorGroupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorGroupConfigInput() {
    return this._mirrorGroupConfig.internalValue;
  }
}
export interface AlbRuleRuleActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#order AlbRule#order}
  */
  readonly order: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#type AlbRule#type}
  */
  readonly type: string;
  /**
  * cors_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#cors_config AlbRule#cors_config}
  */
  readonly corsConfig?: AlbRuleRuleActionsCorsConfig;
  /**
  * fixed_response_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#fixed_response_config AlbRule#fixed_response_config}
  */
  readonly fixedResponseConfig?: AlbRuleRuleActionsFixedResponseConfig;
  /**
  * forward_group_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#forward_group_config AlbRule#forward_group_config}
  */
  readonly forwardGroupConfig?: AlbRuleRuleActionsForwardGroupConfig;
  /**
  * insert_header_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#insert_header_config AlbRule#insert_header_config}
  */
  readonly insertHeaderConfig?: AlbRuleRuleActionsInsertHeaderConfig;
  /**
  * redirect_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#redirect_config AlbRule#redirect_config}
  */
  readonly redirectConfig?: AlbRuleRuleActionsRedirectConfig;
  /**
  * remove_header_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#remove_header_config AlbRule#remove_header_config}
  */
  readonly removeHeaderConfig?: AlbRuleRuleActionsRemoveHeaderConfig;
  /**
  * rewrite_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#rewrite_config AlbRule#rewrite_config}
  */
  readonly rewriteConfig?: AlbRuleRuleActionsRewriteConfig;
  /**
  * traffic_limit_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#traffic_limit_config AlbRule#traffic_limit_config}
  */
  readonly trafficLimitConfig?: AlbRuleRuleActionsTrafficLimitConfig;
  /**
  * traffic_mirror_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#traffic_mirror_config AlbRule#traffic_mirror_config}
  */
  readonly trafficMirrorConfig?: AlbRuleRuleActionsTrafficMirrorConfig;
}

export function albRuleRuleActionsToTerraform(struct?: AlbRuleRuleActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    order: cdktf.numberToTerraform(struct!.order),
    type: cdktf.stringToTerraform(struct!.type),
    cors_config: albRuleRuleActionsCorsConfigToTerraform(struct!.corsConfig),
    fixed_response_config: albRuleRuleActionsFixedResponseConfigToTerraform(struct!.fixedResponseConfig),
    forward_group_config: albRuleRuleActionsForwardGroupConfigToTerraform(struct!.forwardGroupConfig),
    insert_header_config: albRuleRuleActionsInsertHeaderConfigToTerraform(struct!.insertHeaderConfig),
    redirect_config: albRuleRuleActionsRedirectConfigToTerraform(struct!.redirectConfig),
    remove_header_config: albRuleRuleActionsRemoveHeaderConfigToTerraform(struct!.removeHeaderConfig),
    rewrite_config: albRuleRuleActionsRewriteConfigToTerraform(struct!.rewriteConfig),
    traffic_limit_config: albRuleRuleActionsTrafficLimitConfigToTerraform(struct!.trafficLimitConfig),
    traffic_mirror_config: albRuleRuleActionsTrafficMirrorConfigToTerraform(struct!.trafficMirrorConfig),
  }
}


export function albRuleRuleActionsToHclTerraform(struct?: AlbRuleRuleActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cors_config: {
      value: albRuleRuleActionsCorsConfigToHclTerraform(struct!.corsConfig),
      isBlock: true,
      type: "set",
      storageClassType: "AlbRuleRuleActionsCorsConfigList",
    },
    fixed_response_config: {
      value: albRuleRuleActionsFixedResponseConfigToHclTerraform(struct!.fixedResponseConfig),
      isBlock: true,
      type: "set",
      storageClassType: "AlbRuleRuleActionsFixedResponseConfigList",
    },
    forward_group_config: {
      value: albRuleRuleActionsForwardGroupConfigToHclTerraform(struct!.forwardGroupConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AlbRuleRuleActionsForwardGroupConfigList",
    },
    insert_header_config: {
      value: albRuleRuleActionsInsertHeaderConfigToHclTerraform(struct!.insertHeaderConfig),
      isBlock: true,
      type: "set",
      storageClassType: "AlbRuleRuleActionsInsertHeaderConfigList",
    },
    redirect_config: {
      value: albRuleRuleActionsRedirectConfigToHclTerraform(struct!.redirectConfig),
      isBlock: true,
      type: "set",
      storageClassType: "AlbRuleRuleActionsRedirectConfigList",
    },
    remove_header_config: {
      value: albRuleRuleActionsRemoveHeaderConfigToHclTerraform(struct!.removeHeaderConfig),
      isBlock: true,
      type: "set",
      storageClassType: "AlbRuleRuleActionsRemoveHeaderConfigList",
    },
    rewrite_config: {
      value: albRuleRuleActionsRewriteConfigToHclTerraform(struct!.rewriteConfig),
      isBlock: true,
      type: "set",
      storageClassType: "AlbRuleRuleActionsRewriteConfigList",
    },
    traffic_limit_config: {
      value: albRuleRuleActionsTrafficLimitConfigToHclTerraform(struct!.trafficLimitConfig),
      isBlock: true,
      type: "set",
      storageClassType: "AlbRuleRuleActionsTrafficLimitConfigList",
    },
    traffic_mirror_config: {
      value: albRuleRuleActionsTrafficMirrorConfigToHclTerraform(struct!.trafficMirrorConfig),
      isBlock: true,
      type: "set",
      storageClassType: "AlbRuleRuleActionsTrafficMirrorConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbRuleRuleActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbRuleRuleActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._corsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsConfig = this._corsConfig?.internalValue;
    }
    if (this._fixedResponseConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedResponseConfig = this._fixedResponseConfig?.internalValue;
    }
    if (this._forwardGroupConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardGroupConfig = this._forwardGroupConfig?.internalValue;
    }
    if (this._insertHeaderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeaderConfig = this._insertHeaderConfig?.internalValue;
    }
    if (this._redirectConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectConfig = this._redirectConfig?.internalValue;
    }
    if (this._removeHeaderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeHeaderConfig = this._removeHeaderConfig?.internalValue;
    }
    if (this._rewriteConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewriteConfig = this._rewriteConfig?.internalValue;
    }
    if (this._trafficLimitConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficLimitConfig = this._trafficLimitConfig?.internalValue;
    }
    if (this._trafficMirrorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficMirrorConfig = this._trafficMirrorConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbRuleRuleActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._order = undefined;
      this._type = undefined;
      this._corsConfig.internalValue = undefined;
      this._fixedResponseConfig.internalValue = undefined;
      this._forwardGroupConfig.internalValue = undefined;
      this._insertHeaderConfig.internalValue = undefined;
      this._redirectConfig.internalValue = undefined;
      this._removeHeaderConfig.internalValue = undefined;
      this._rewriteConfig.internalValue = undefined;
      this._trafficLimitConfig.internalValue = undefined;
      this._trafficMirrorConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._order = value.order;
      this._type = value.type;
      this._corsConfig.internalValue = value.corsConfig;
      this._fixedResponseConfig.internalValue = value.fixedResponseConfig;
      this._forwardGroupConfig.internalValue = value.forwardGroupConfig;
      this._insertHeaderConfig.internalValue = value.insertHeaderConfig;
      this._redirectConfig.internalValue = value.redirectConfig;
      this._removeHeaderConfig.internalValue = value.removeHeaderConfig;
      this._rewriteConfig.internalValue = value.rewriteConfig;
      this._trafficLimitConfig.internalValue = value.trafficLimitConfig;
      this._trafficMirrorConfig.internalValue = value.trafficMirrorConfig;
    }
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // cors_config - computed: false, optional: true, required: false
  private _corsConfig = new AlbRuleRuleActionsCorsConfigOutputReference(this, "cors_config");
  public get corsConfig() {
    return this._corsConfig;
  }
  public putCorsConfig(value: AlbRuleRuleActionsCorsConfig) {
    this._corsConfig.internalValue = value;
  }
  public resetCorsConfig() {
    this._corsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsConfigInput() {
    return this._corsConfig.internalValue;
  }

  // fixed_response_config - computed: false, optional: true, required: false
  private _fixedResponseConfig = new AlbRuleRuleActionsFixedResponseConfigOutputReference(this, "fixed_response_config");
  public get fixedResponseConfig() {
    return this._fixedResponseConfig;
  }
  public putFixedResponseConfig(value: AlbRuleRuleActionsFixedResponseConfig) {
    this._fixedResponseConfig.internalValue = value;
  }
  public resetFixedResponseConfig() {
    this._fixedResponseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedResponseConfigInput() {
    return this._fixedResponseConfig.internalValue;
  }

  // forward_group_config - computed: false, optional: true, required: false
  private _forwardGroupConfig = new AlbRuleRuleActionsForwardGroupConfigOutputReference(this, "forward_group_config");
  public get forwardGroupConfig() {
    return this._forwardGroupConfig;
  }
  public putForwardGroupConfig(value: AlbRuleRuleActionsForwardGroupConfig) {
    this._forwardGroupConfig.internalValue = value;
  }
  public resetForwardGroupConfig() {
    this._forwardGroupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardGroupConfigInput() {
    return this._forwardGroupConfig.internalValue;
  }

  // insert_header_config - computed: false, optional: true, required: false
  private _insertHeaderConfig = new AlbRuleRuleActionsInsertHeaderConfigOutputReference(this, "insert_header_config");
  public get insertHeaderConfig() {
    return this._insertHeaderConfig;
  }
  public putInsertHeaderConfig(value: AlbRuleRuleActionsInsertHeaderConfig) {
    this._insertHeaderConfig.internalValue = value;
  }
  public resetInsertHeaderConfig() {
    this._insertHeaderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderConfigInput() {
    return this._insertHeaderConfig.internalValue;
  }

  // redirect_config - computed: false, optional: true, required: false
  private _redirectConfig = new AlbRuleRuleActionsRedirectConfigOutputReference(this, "redirect_config");
  public get redirectConfig() {
    return this._redirectConfig;
  }
  public putRedirectConfig(value: AlbRuleRuleActionsRedirectConfig) {
    this._redirectConfig.internalValue = value;
  }
  public resetRedirectConfig() {
    this._redirectConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectConfigInput() {
    return this._redirectConfig.internalValue;
  }

  // remove_header_config - computed: false, optional: true, required: false
  private _removeHeaderConfig = new AlbRuleRuleActionsRemoveHeaderConfigOutputReference(this, "remove_header_config");
  public get removeHeaderConfig() {
    return this._removeHeaderConfig;
  }
  public putRemoveHeaderConfig(value: AlbRuleRuleActionsRemoveHeaderConfig) {
    this._removeHeaderConfig.internalValue = value;
  }
  public resetRemoveHeaderConfig() {
    this._removeHeaderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeHeaderConfigInput() {
    return this._removeHeaderConfig.internalValue;
  }

  // rewrite_config - computed: false, optional: true, required: false
  private _rewriteConfig = new AlbRuleRuleActionsRewriteConfigOutputReference(this, "rewrite_config");
  public get rewriteConfig() {
    return this._rewriteConfig;
  }
  public putRewriteConfig(value: AlbRuleRuleActionsRewriteConfig) {
    this._rewriteConfig.internalValue = value;
  }
  public resetRewriteConfig() {
    this._rewriteConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteConfigInput() {
    return this._rewriteConfig.internalValue;
  }

  // traffic_limit_config - computed: false, optional: true, required: false
  private _trafficLimitConfig = new AlbRuleRuleActionsTrafficLimitConfigOutputReference(this, "traffic_limit_config");
  public get trafficLimitConfig() {
    return this._trafficLimitConfig;
  }
  public putTrafficLimitConfig(value: AlbRuleRuleActionsTrafficLimitConfig) {
    this._trafficLimitConfig.internalValue = value;
  }
  public resetTrafficLimitConfig() {
    this._trafficLimitConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficLimitConfigInput() {
    return this._trafficLimitConfig.internalValue;
  }

  // traffic_mirror_config - computed: false, optional: true, required: false
  private _trafficMirrorConfig = new AlbRuleRuleActionsTrafficMirrorConfigOutputReference(this, "traffic_mirror_config");
  public get trafficMirrorConfig() {
    return this._trafficMirrorConfig;
  }
  public putTrafficMirrorConfig(value: AlbRuleRuleActionsTrafficMirrorConfig) {
    this._trafficMirrorConfig.internalValue = value;
  }
  public resetTrafficMirrorConfig() {
    this._trafficMirrorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficMirrorConfigInput() {
    return this._trafficMirrorConfig.internalValue;
  }
}

export class AlbRuleRuleActionsList extends cdktf.ComplexList {
  public internalValue? : AlbRuleRuleActions[] | cdktf.IResolvable

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
  public get(index: number): AlbRuleRuleActionsOutputReference {
    return new AlbRuleRuleActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbRuleRuleConditionsCookieConfigValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#key AlbRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#value AlbRule#value}
  */
  readonly value?: string;
}

export function albRuleRuleConditionsCookieConfigValuesToTerraform(struct?: AlbRuleRuleConditionsCookieConfigValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function albRuleRuleConditionsCookieConfigValuesToHclTerraform(struct?: AlbRuleRuleConditionsCookieConfigValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class AlbRuleRuleConditionsCookieConfigValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbRuleRuleConditionsCookieConfigValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbRuleRuleConditionsCookieConfigValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class AlbRuleRuleConditionsCookieConfigValuesList extends cdktf.ComplexList {
  public internalValue? : AlbRuleRuleConditionsCookieConfigValues[] | cdktf.IResolvable

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
  public get(index: number): AlbRuleRuleConditionsCookieConfigValuesOutputReference {
    return new AlbRuleRuleConditionsCookieConfigValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbRuleRuleConditionsCookieConfig {
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#values AlbRule#values}
  */
  readonly values?: AlbRuleRuleConditionsCookieConfigValues[] | cdktf.IResolvable;
}

export function albRuleRuleConditionsCookieConfigToTerraform(struct?: AlbRuleRuleConditionsCookieConfigOutputReference | AlbRuleRuleConditionsCookieConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(albRuleRuleConditionsCookieConfigValuesToTerraform, true)(struct!.values),
  }
}


export function albRuleRuleConditionsCookieConfigToHclTerraform(struct?: AlbRuleRuleConditionsCookieConfigOutputReference | AlbRuleRuleConditionsCookieConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    values: {
      value: cdktf.listMapperHcl(albRuleRuleConditionsCookieConfigValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "set",
      storageClassType: "AlbRuleRuleConditionsCookieConfigValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbRuleRuleConditionsCookieConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbRuleRuleConditionsCookieConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbRuleRuleConditionsCookieConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values.internalValue = value.values;
    }
  }

  // values - computed: false, optional: true, required: false
  private _values = new AlbRuleRuleConditionsCookieConfigValuesList(this, "values", true);
  public get values() {
    return this._values;
  }
  public putValues(value: AlbRuleRuleConditionsCookieConfigValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  public resetValues() {
    this._values.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface AlbRuleRuleConditionsHeaderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#key AlbRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#values AlbRule#values}
  */
  readonly values?: string[];
}

export function albRuleRuleConditionsHeaderConfigToTerraform(struct?: AlbRuleRuleConditionsHeaderConfigOutputReference | AlbRuleRuleConditionsHeaderConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function albRuleRuleConditionsHeaderConfigToHclTerraform(struct?: AlbRuleRuleConditionsHeaderConfigOutputReference | AlbRuleRuleConditionsHeaderConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class AlbRuleRuleConditionsHeaderConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbRuleRuleConditionsHeaderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbRuleRuleConditionsHeaderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface AlbRuleRuleConditionsHostConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#values AlbRule#values}
  */
  readonly values?: string[];
}

export function albRuleRuleConditionsHostConfigToTerraform(struct?: AlbRuleRuleConditionsHostConfigOutputReference | AlbRuleRuleConditionsHostConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function albRuleRuleConditionsHostConfigToHclTerraform(struct?: AlbRuleRuleConditionsHostConfigOutputReference | AlbRuleRuleConditionsHostConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class AlbRuleRuleConditionsHostConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbRuleRuleConditionsHostConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbRuleRuleConditionsHostConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values = value.values;
    }
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
export interface AlbRuleRuleConditionsMethodConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#values AlbRule#values}
  */
  readonly values?: string[];
}

export function albRuleRuleConditionsMethodConfigToTerraform(struct?: AlbRuleRuleConditionsMethodConfigOutputReference | AlbRuleRuleConditionsMethodConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function albRuleRuleConditionsMethodConfigToHclTerraform(struct?: AlbRuleRuleConditionsMethodConfigOutputReference | AlbRuleRuleConditionsMethodConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class AlbRuleRuleConditionsMethodConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbRuleRuleConditionsMethodConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbRuleRuleConditionsMethodConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values = value.values;
    }
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
export interface AlbRuleRuleConditionsPathConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#values AlbRule#values}
  */
  readonly values?: string[];
}

export function albRuleRuleConditionsPathConfigToTerraform(struct?: AlbRuleRuleConditionsPathConfigOutputReference | AlbRuleRuleConditionsPathConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function albRuleRuleConditionsPathConfigToHclTerraform(struct?: AlbRuleRuleConditionsPathConfigOutputReference | AlbRuleRuleConditionsPathConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class AlbRuleRuleConditionsPathConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbRuleRuleConditionsPathConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbRuleRuleConditionsPathConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values = value.values;
    }
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
export interface AlbRuleRuleConditionsQueryStringConfigValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#key AlbRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#value AlbRule#value}
  */
  readonly value?: string;
}

export function albRuleRuleConditionsQueryStringConfigValuesToTerraform(struct?: AlbRuleRuleConditionsQueryStringConfigValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function albRuleRuleConditionsQueryStringConfigValuesToHclTerraform(struct?: AlbRuleRuleConditionsQueryStringConfigValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class AlbRuleRuleConditionsQueryStringConfigValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbRuleRuleConditionsQueryStringConfigValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbRuleRuleConditionsQueryStringConfigValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class AlbRuleRuleConditionsQueryStringConfigValuesList extends cdktf.ComplexList {
  public internalValue? : AlbRuleRuleConditionsQueryStringConfigValues[] | cdktf.IResolvable

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
  public get(index: number): AlbRuleRuleConditionsQueryStringConfigValuesOutputReference {
    return new AlbRuleRuleConditionsQueryStringConfigValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbRuleRuleConditionsQueryStringConfig {
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#values AlbRule#values}
  */
  readonly values?: AlbRuleRuleConditionsQueryStringConfigValues[] | cdktf.IResolvable;
}

export function albRuleRuleConditionsQueryStringConfigToTerraform(struct?: AlbRuleRuleConditionsQueryStringConfigOutputReference | AlbRuleRuleConditionsQueryStringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(albRuleRuleConditionsQueryStringConfigValuesToTerraform, true)(struct!.values),
  }
}


export function albRuleRuleConditionsQueryStringConfigToHclTerraform(struct?: AlbRuleRuleConditionsQueryStringConfigOutputReference | AlbRuleRuleConditionsQueryStringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    values: {
      value: cdktf.listMapperHcl(albRuleRuleConditionsQueryStringConfigValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "set",
      storageClassType: "AlbRuleRuleConditionsQueryStringConfigValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbRuleRuleConditionsQueryStringConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbRuleRuleConditionsQueryStringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbRuleRuleConditionsQueryStringConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values.internalValue = value.values;
    }
  }

  // values - computed: false, optional: true, required: false
  private _values = new AlbRuleRuleConditionsQueryStringConfigValuesList(this, "values", true);
  public get values() {
    return this._values;
  }
  public putValues(value: AlbRuleRuleConditionsQueryStringConfigValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  public resetValues() {
    this._values.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface AlbRuleRuleConditionsResponseHeaderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#key AlbRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#values AlbRule#values}
  */
  readonly values?: string[];
}

export function albRuleRuleConditionsResponseHeaderConfigToTerraform(struct?: AlbRuleRuleConditionsResponseHeaderConfigOutputReference | AlbRuleRuleConditionsResponseHeaderConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function albRuleRuleConditionsResponseHeaderConfigToHclTerraform(struct?: AlbRuleRuleConditionsResponseHeaderConfigOutputReference | AlbRuleRuleConditionsResponseHeaderConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class AlbRuleRuleConditionsResponseHeaderConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbRuleRuleConditionsResponseHeaderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbRuleRuleConditionsResponseHeaderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface AlbRuleRuleConditionsResponseStatusCodeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#values AlbRule#values}
  */
  readonly values?: string[];
}

export function albRuleRuleConditionsResponseStatusCodeConfigToTerraform(struct?: AlbRuleRuleConditionsResponseStatusCodeConfigOutputReference | AlbRuleRuleConditionsResponseStatusCodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function albRuleRuleConditionsResponseStatusCodeConfigToHclTerraform(struct?: AlbRuleRuleConditionsResponseStatusCodeConfigOutputReference | AlbRuleRuleConditionsResponseStatusCodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class AlbRuleRuleConditionsResponseStatusCodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbRuleRuleConditionsResponseStatusCodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbRuleRuleConditionsResponseStatusCodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values = value.values;
    }
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
export interface AlbRuleRuleConditionsSourceIpConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#values AlbRule#values}
  */
  readonly values?: string[];
}

export function albRuleRuleConditionsSourceIpConfigToTerraform(struct?: AlbRuleRuleConditionsSourceIpConfigOutputReference | AlbRuleRuleConditionsSourceIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function albRuleRuleConditionsSourceIpConfigToHclTerraform(struct?: AlbRuleRuleConditionsSourceIpConfigOutputReference | AlbRuleRuleConditionsSourceIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class AlbRuleRuleConditionsSourceIpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbRuleRuleConditionsSourceIpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbRuleRuleConditionsSourceIpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values = value.values;
    }
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
export interface AlbRuleRuleConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#type AlbRule#type}
  */
  readonly type: string;
  /**
  * cookie_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#cookie_config AlbRule#cookie_config}
  */
  readonly cookieConfig?: AlbRuleRuleConditionsCookieConfig;
  /**
  * header_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#header_config AlbRule#header_config}
  */
  readonly headerConfig?: AlbRuleRuleConditionsHeaderConfig;
  /**
  * host_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#host_config AlbRule#host_config}
  */
  readonly hostConfig?: AlbRuleRuleConditionsHostConfig;
  /**
  * method_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#method_config AlbRule#method_config}
  */
  readonly methodConfig?: AlbRuleRuleConditionsMethodConfig;
  /**
  * path_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#path_config AlbRule#path_config}
  */
  readonly pathConfig?: AlbRuleRuleConditionsPathConfig;
  /**
  * query_string_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#query_string_config AlbRule#query_string_config}
  */
  readonly queryStringConfig?: AlbRuleRuleConditionsQueryStringConfig;
  /**
  * response_header_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#response_header_config AlbRule#response_header_config}
  */
  readonly responseHeaderConfig?: AlbRuleRuleConditionsResponseHeaderConfig;
  /**
  * response_status_code_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#response_status_code_config AlbRule#response_status_code_config}
  */
  readonly responseStatusCodeConfig?: AlbRuleRuleConditionsResponseStatusCodeConfig;
  /**
  * source_ip_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#source_ip_config AlbRule#source_ip_config}
  */
  readonly sourceIpConfig?: AlbRuleRuleConditionsSourceIpConfig;
}

export function albRuleRuleConditionsToTerraform(struct?: AlbRuleRuleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cookie_config: albRuleRuleConditionsCookieConfigToTerraform(struct!.cookieConfig),
    header_config: albRuleRuleConditionsHeaderConfigToTerraform(struct!.headerConfig),
    host_config: albRuleRuleConditionsHostConfigToTerraform(struct!.hostConfig),
    method_config: albRuleRuleConditionsMethodConfigToTerraform(struct!.methodConfig),
    path_config: albRuleRuleConditionsPathConfigToTerraform(struct!.pathConfig),
    query_string_config: albRuleRuleConditionsQueryStringConfigToTerraform(struct!.queryStringConfig),
    response_header_config: albRuleRuleConditionsResponseHeaderConfigToTerraform(struct!.responseHeaderConfig),
    response_status_code_config: albRuleRuleConditionsResponseStatusCodeConfigToTerraform(struct!.responseStatusCodeConfig),
    source_ip_config: albRuleRuleConditionsSourceIpConfigToTerraform(struct!.sourceIpConfig),
  }
}


export function albRuleRuleConditionsToHclTerraform(struct?: AlbRuleRuleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_config: {
      value: albRuleRuleConditionsCookieConfigToHclTerraform(struct!.cookieConfig),
      isBlock: true,
      type: "set",
      storageClassType: "AlbRuleRuleConditionsCookieConfigList",
    },
    header_config: {
      value: albRuleRuleConditionsHeaderConfigToHclTerraform(struct!.headerConfig),
      isBlock: true,
      type: "set",
      storageClassType: "AlbRuleRuleConditionsHeaderConfigList",
    },
    host_config: {
      value: albRuleRuleConditionsHostConfigToHclTerraform(struct!.hostConfig),
      isBlock: true,
      type: "set",
      storageClassType: "AlbRuleRuleConditionsHostConfigList",
    },
    method_config: {
      value: albRuleRuleConditionsMethodConfigToHclTerraform(struct!.methodConfig),
      isBlock: true,
      type: "set",
      storageClassType: "AlbRuleRuleConditionsMethodConfigList",
    },
    path_config: {
      value: albRuleRuleConditionsPathConfigToHclTerraform(struct!.pathConfig),
      isBlock: true,
      type: "set",
      storageClassType: "AlbRuleRuleConditionsPathConfigList",
    },
    query_string_config: {
      value: albRuleRuleConditionsQueryStringConfigToHclTerraform(struct!.queryStringConfig),
      isBlock: true,
      type: "set",
      storageClassType: "AlbRuleRuleConditionsQueryStringConfigList",
    },
    response_header_config: {
      value: albRuleRuleConditionsResponseHeaderConfigToHclTerraform(struct!.responseHeaderConfig),
      isBlock: true,
      type: "set",
      storageClassType: "AlbRuleRuleConditionsResponseHeaderConfigList",
    },
    response_status_code_config: {
      value: albRuleRuleConditionsResponseStatusCodeConfigToHclTerraform(struct!.responseStatusCodeConfig),
      isBlock: true,
      type: "set",
      storageClassType: "AlbRuleRuleConditionsResponseStatusCodeConfigList",
    },
    source_ip_config: {
      value: albRuleRuleConditionsSourceIpConfigToHclTerraform(struct!.sourceIpConfig),
      isBlock: true,
      type: "set",
      storageClassType: "AlbRuleRuleConditionsSourceIpConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbRuleRuleConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbRuleRuleConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cookieConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieConfig = this._cookieConfig?.internalValue;
    }
    if (this._headerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerConfig = this._headerConfig?.internalValue;
    }
    if (this._hostConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostConfig = this._hostConfig?.internalValue;
    }
    if (this._methodConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodConfig = this._methodConfig?.internalValue;
    }
    if (this._pathConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathConfig = this._pathConfig?.internalValue;
    }
    if (this._queryStringConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringConfig = this._queryStringConfig?.internalValue;
    }
    if (this._responseHeaderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaderConfig = this._responseHeaderConfig?.internalValue;
    }
    if (this._responseStatusCodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseStatusCodeConfig = this._responseStatusCodeConfig?.internalValue;
    }
    if (this._sourceIpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpConfig = this._sourceIpConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbRuleRuleConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._cookieConfig.internalValue = undefined;
      this._headerConfig.internalValue = undefined;
      this._hostConfig.internalValue = undefined;
      this._methodConfig.internalValue = undefined;
      this._pathConfig.internalValue = undefined;
      this._queryStringConfig.internalValue = undefined;
      this._responseHeaderConfig.internalValue = undefined;
      this._responseStatusCodeConfig.internalValue = undefined;
      this._sourceIpConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._cookieConfig.internalValue = value.cookieConfig;
      this._headerConfig.internalValue = value.headerConfig;
      this._hostConfig.internalValue = value.hostConfig;
      this._methodConfig.internalValue = value.methodConfig;
      this._pathConfig.internalValue = value.pathConfig;
      this._queryStringConfig.internalValue = value.queryStringConfig;
      this._responseHeaderConfig.internalValue = value.responseHeaderConfig;
      this._responseStatusCodeConfig.internalValue = value.responseStatusCodeConfig;
      this._sourceIpConfig.internalValue = value.sourceIpConfig;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // cookie_config - computed: false, optional: true, required: false
  private _cookieConfig = new AlbRuleRuleConditionsCookieConfigOutputReference(this, "cookie_config");
  public get cookieConfig() {
    return this._cookieConfig;
  }
  public putCookieConfig(value: AlbRuleRuleConditionsCookieConfig) {
    this._cookieConfig.internalValue = value;
  }
  public resetCookieConfig() {
    this._cookieConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieConfigInput() {
    return this._cookieConfig.internalValue;
  }

  // header_config - computed: false, optional: true, required: false
  private _headerConfig = new AlbRuleRuleConditionsHeaderConfigOutputReference(this, "header_config");
  public get headerConfig() {
    return this._headerConfig;
  }
  public putHeaderConfig(value: AlbRuleRuleConditionsHeaderConfig) {
    this._headerConfig.internalValue = value;
  }
  public resetHeaderConfig() {
    this._headerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerConfigInput() {
    return this._headerConfig.internalValue;
  }

  // host_config - computed: false, optional: true, required: false
  private _hostConfig = new AlbRuleRuleConditionsHostConfigOutputReference(this, "host_config");
  public get hostConfig() {
    return this._hostConfig;
  }
  public putHostConfig(value: AlbRuleRuleConditionsHostConfig) {
    this._hostConfig.internalValue = value;
  }
  public resetHostConfig() {
    this._hostConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostConfigInput() {
    return this._hostConfig.internalValue;
  }

  // method_config - computed: false, optional: true, required: false
  private _methodConfig = new AlbRuleRuleConditionsMethodConfigOutputReference(this, "method_config");
  public get methodConfig() {
    return this._methodConfig;
  }
  public putMethodConfig(value: AlbRuleRuleConditionsMethodConfig) {
    this._methodConfig.internalValue = value;
  }
  public resetMethodConfig() {
    this._methodConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodConfigInput() {
    return this._methodConfig.internalValue;
  }

  // path_config - computed: false, optional: true, required: false
  private _pathConfig = new AlbRuleRuleConditionsPathConfigOutputReference(this, "path_config");
  public get pathConfig() {
    return this._pathConfig;
  }
  public putPathConfig(value: AlbRuleRuleConditionsPathConfig) {
    this._pathConfig.internalValue = value;
  }
  public resetPathConfig() {
    this._pathConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathConfigInput() {
    return this._pathConfig.internalValue;
  }

  // query_string_config - computed: false, optional: true, required: false
  private _queryStringConfig = new AlbRuleRuleConditionsQueryStringConfigOutputReference(this, "query_string_config");
  public get queryStringConfig() {
    return this._queryStringConfig;
  }
  public putQueryStringConfig(value: AlbRuleRuleConditionsQueryStringConfig) {
    this._queryStringConfig.internalValue = value;
  }
  public resetQueryStringConfig() {
    this._queryStringConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringConfigInput() {
    return this._queryStringConfig.internalValue;
  }

  // response_header_config - computed: false, optional: true, required: false
  private _responseHeaderConfig = new AlbRuleRuleConditionsResponseHeaderConfigOutputReference(this, "response_header_config");
  public get responseHeaderConfig() {
    return this._responseHeaderConfig;
  }
  public putResponseHeaderConfig(value: AlbRuleRuleConditionsResponseHeaderConfig) {
    this._responseHeaderConfig.internalValue = value;
  }
  public resetResponseHeaderConfig() {
    this._responseHeaderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderConfigInput() {
    return this._responseHeaderConfig.internalValue;
  }

  // response_status_code_config - computed: false, optional: true, required: false
  private _responseStatusCodeConfig = new AlbRuleRuleConditionsResponseStatusCodeConfigOutputReference(this, "response_status_code_config");
  public get responseStatusCodeConfig() {
    return this._responseStatusCodeConfig;
  }
  public putResponseStatusCodeConfig(value: AlbRuleRuleConditionsResponseStatusCodeConfig) {
    this._responseStatusCodeConfig.internalValue = value;
  }
  public resetResponseStatusCodeConfig() {
    this._responseStatusCodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseStatusCodeConfigInput() {
    return this._responseStatusCodeConfig.internalValue;
  }

  // source_ip_config - computed: false, optional: true, required: false
  private _sourceIpConfig = new AlbRuleRuleConditionsSourceIpConfigOutputReference(this, "source_ip_config");
  public get sourceIpConfig() {
    return this._sourceIpConfig;
  }
  public putSourceIpConfig(value: AlbRuleRuleConditionsSourceIpConfig) {
    this._sourceIpConfig.internalValue = value;
  }
  public resetSourceIpConfig() {
    this._sourceIpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpConfigInput() {
    return this._sourceIpConfig.internalValue;
  }
}

export class AlbRuleRuleConditionsList extends cdktf.ComplexList {
  public internalValue? : AlbRuleRuleConditions[] | cdktf.IResolvable

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
  public get(index: number): AlbRuleRuleConditionsOutputReference {
    return new AlbRuleRuleConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#create AlbRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#delete AlbRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#update AlbRule#update}
  */
  readonly update?: string;
}

export function albRuleTimeoutsToTerraform(struct?: AlbRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function albRuleTimeoutsToHclTerraform(struct?: AlbRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlbRuleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbRuleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule alicloud_alb_rule}
*/
export class AlbRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_alb_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlbRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlbRule to import
  * @param importFromId The id of the existing AlbRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlbRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_alb_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_rule alicloud_alb_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlbRuleConfig
  */
  public constructor(scope: Construct, id: string, config: AlbRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_alb_rule',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._direction = config.direction;
    this._dryRun = config.dryRun;
    this._id = config.id;
    this._listenerId = config.listenerId;
    this._priority = config.priority;
    this._ruleName = config.ruleName;
    this._ruleActions.internalValue = config.ruleActions;
    this._ruleConditions.internalValue = config.ruleConditions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

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

  // listener_id - computed: false, optional: false, required: true
  private _listenerId?: string; 
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }
  public set listenerId(value: string) {
    this._listenerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIdInput() {
    return this._listenerId;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // rule_actions - computed: false, optional: false, required: true
  private _ruleActions = new AlbRuleRuleActionsList(this, "rule_actions", true);
  public get ruleActions() {
    return this._ruleActions;
  }
  public putRuleActions(value: AlbRuleRuleActions[] | cdktf.IResolvable) {
    this._ruleActions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleActionsInput() {
    return this._ruleActions.internalValue;
  }

  // rule_conditions - computed: false, optional: false, required: true
  private _ruleConditions = new AlbRuleRuleConditionsList(this, "rule_conditions", true);
  public get ruleConditions() {
    return this._ruleConditions;
  }
  public putRuleConditions(value: AlbRuleRuleConditions[] | cdktf.IResolvable) {
    this._ruleConditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleConditionsInput() {
    return this._ruleConditions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AlbRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AlbRuleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      direction: cdktf.stringToTerraform(this._direction),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      id: cdktf.stringToTerraform(this._id),
      listener_id: cdktf.stringToTerraform(this._listenerId),
      priority: cdktf.numberToTerraform(this._priority),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      rule_actions: cdktf.listMapper(albRuleRuleActionsToTerraform, true)(this._ruleActions.internalValue),
      rule_conditions: cdktf.listMapper(albRuleRuleConditionsToTerraform, true)(this._ruleConditions.internalValue),
      timeouts: albRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listener_id: {
        value: cdktf.stringToHclTerraform(this._listenerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_actions: {
        value: cdktf.listMapperHcl(albRuleRuleActionsToHclTerraform, true)(this._ruleActions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlbRuleRuleActionsList",
      },
      rule_conditions: {
        value: cdktf.listMapperHcl(albRuleRuleConditionsToHclTerraform, true)(this._ruleConditions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlbRuleRuleConditionsList",
      },
      timeouts: {
        value: albRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AlbRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
