// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafWebAppFirewallPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#compartment_id WafWebAppFirewallPolicy#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#defined_tags WafWebAppFirewallPolicy#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#display_name WafWebAppFirewallPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#freeform_tags WafWebAppFirewallPolicy#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#id WafWebAppFirewallPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#system_tags WafWebAppFirewallPolicy#system_tags}
  */
  readonly systemTags?: { [key: string]: string };
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#actions WafWebAppFirewallPolicy#actions}
  */
  readonly actions?: WafWebAppFirewallPolicyActions[] | cdktf.IResolvable;
  /**
  * request_access_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#request_access_control WafWebAppFirewallPolicy#request_access_control}
  */
  readonly requestAccessControl?: WafWebAppFirewallPolicyRequestAccessControl;
  /**
  * request_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#request_protection WafWebAppFirewallPolicy#request_protection}
  */
  readonly requestProtection?: WafWebAppFirewallPolicyRequestProtection;
  /**
  * request_rate_limiting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#request_rate_limiting WafWebAppFirewallPolicy#request_rate_limiting}
  */
  readonly requestRateLimiting?: WafWebAppFirewallPolicyRequestRateLimiting;
  /**
  * response_access_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#response_access_control WafWebAppFirewallPolicy#response_access_control}
  */
  readonly responseAccessControl?: WafWebAppFirewallPolicyResponseAccessControl;
  /**
  * response_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#response_protection WafWebAppFirewallPolicy#response_protection}
  */
  readonly responseProtection?: WafWebAppFirewallPolicyResponseProtection;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#timeouts WafWebAppFirewallPolicy#timeouts}
  */
  readonly timeouts?: WafWebAppFirewallPolicyTimeouts;
}
export interface WafWebAppFirewallPolicyActionsBody {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#template WafWebAppFirewallPolicy#template}
  */
  readonly template?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#text WafWebAppFirewallPolicy#text}
  */
  readonly text?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}
  */
  readonly type: string;
}

export function wafWebAppFirewallPolicyActionsBodyToTerraform(struct?: WafWebAppFirewallPolicyActionsBodyOutputReference | WafWebAppFirewallPolicyActionsBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: cdktf.stringToTerraform(struct!.template),
    text: cdktf.stringToTerraform(struct!.text),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function wafWebAppFirewallPolicyActionsBodyToHclTerraform(struct?: WafWebAppFirewallPolicyActionsBodyOutputReference | WafWebAppFirewallPolicyActionsBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafWebAppFirewallPolicyActionsBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafWebAppFirewallPolicyActionsBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafWebAppFirewallPolicyActionsBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._template = undefined;
      this._text = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._template = value.template;
      this._text = value.text;
      this._type = value.type;
    }
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
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
}
export interface WafWebAppFirewallPolicyActionsHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#value WafWebAppFirewallPolicy#value}
  */
  readonly value?: string;
}

export function wafWebAppFirewallPolicyActionsHeadersToTerraform(struct?: WafWebAppFirewallPolicyActionsHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wafWebAppFirewallPolicyActionsHeadersToHclTerraform(struct?: WafWebAppFirewallPolicyActionsHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class WafWebAppFirewallPolicyActionsHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafWebAppFirewallPolicyActionsHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: WafWebAppFirewallPolicyActionsHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
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

export class WafWebAppFirewallPolicyActionsHeadersList extends cdktf.ComplexList {
  public internalValue? : WafWebAppFirewallPolicyActionsHeaders[] | cdktf.IResolvable

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
  public get(index: number): WafWebAppFirewallPolicyActionsHeadersOutputReference {
    return new WafWebAppFirewallPolicyActionsHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafWebAppFirewallPolicyActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#code WafWebAppFirewallPolicy#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}
  */
  readonly type: string;
  /**
  * body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#body WafWebAppFirewallPolicy#body}
  */
  readonly body?: WafWebAppFirewallPolicyActionsBody;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#headers WafWebAppFirewallPolicy#headers}
  */
  readonly headers?: WafWebAppFirewallPolicyActionsHeaders[] | cdktf.IResolvable;
}

export function wafWebAppFirewallPolicyActionsToTerraform(struct?: WafWebAppFirewallPolicyActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    body: wafWebAppFirewallPolicyActionsBodyToTerraform(struct!.body),
    headers: cdktf.listMapper(wafWebAppFirewallPolicyActionsHeadersToTerraform, true)(struct!.headers),
  }
}


export function wafWebAppFirewallPolicyActionsToHclTerraform(struct?: WafWebAppFirewallPolicyActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body: {
      value: wafWebAppFirewallPolicyActionsBodyToHclTerraform(struct!.body),
      isBlock: true,
      type: "list",
      storageClassType: "WafWebAppFirewallPolicyActionsBodyList",
    },
    headers: {
      value: cdktf.listMapperHcl(wafWebAppFirewallPolicyActionsHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "WafWebAppFirewallPolicyActionsHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafWebAppFirewallPolicyActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafWebAppFirewallPolicyActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafWebAppFirewallPolicyActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._name = undefined;
      this._type = undefined;
      this._body.internalValue = undefined;
      this._headers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._name = value.name;
      this._type = value.type;
      this._body.internalValue = value.body;
      this._headers.internalValue = value.headers;
    }
  }

  // code - computed: true, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

  // body - computed: false, optional: true, required: false
  private _body = new WafWebAppFirewallPolicyActionsBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: WafWebAppFirewallPolicyActionsBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new WafWebAppFirewallPolicyActionsHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: WafWebAppFirewallPolicyActionsHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}

export class WafWebAppFirewallPolicyActionsList extends cdktf.ComplexList {
  public internalValue? : WafWebAppFirewallPolicyActions[] | cdktf.IResolvable

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
  public get(index: number): WafWebAppFirewallPolicyActionsOutputReference {
    return new WafWebAppFirewallPolicyActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafWebAppFirewallPolicyRequestAccessControlRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}
  */
  readonly actionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}
  */
  readonly conditionLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}
  */
  readonly type: string;
}

export function wafWebAppFirewallPolicyRequestAccessControlRulesToTerraform(struct?: WafWebAppFirewallPolicyRequestAccessControlRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_name: cdktf.stringToTerraform(struct!.actionName),
    condition: cdktf.stringToTerraform(struct!.condition),
    condition_language: cdktf.stringToTerraform(struct!.conditionLanguage),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function wafWebAppFirewallPolicyRequestAccessControlRulesToHclTerraform(struct?: WafWebAppFirewallPolicyRequestAccessControlRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_name: {
      value: cdktf.stringToHclTerraform(struct!.actionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_language: {
      value: cdktf.stringToHclTerraform(struct!.conditionLanguage),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafWebAppFirewallPolicyRequestAccessControlRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionName = this._actionName;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._conditionLanguage !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionLanguage = this._conditionLanguage;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafWebAppFirewallPolicyRequestAccessControlRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionName = undefined;
      this._condition = undefined;
      this._conditionLanguage = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionName = value.actionName;
      this._condition = value.condition;
      this._conditionLanguage = value.conditionLanguage;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // action_name - computed: false, optional: false, required: true
  private _actionName?: string; 
  public get actionName() {
    return this.getStringAttribute('action_name');
  }
  public set actionName(value: string) {
    this._actionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionNameInput() {
    return this._actionName;
  }

  // condition - computed: true, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // condition_language - computed: true, optional: true, required: false
  private _conditionLanguage?: string; 
  public get conditionLanguage() {
    return this.getStringAttribute('condition_language');
  }
  public set conditionLanguage(value: string) {
    this._conditionLanguage = value;
  }
  public resetConditionLanguage() {
    this._conditionLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionLanguageInput() {
    return this._conditionLanguage;
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
}

export class WafWebAppFirewallPolicyRequestAccessControlRulesList extends cdktf.ComplexList {
  public internalValue? : WafWebAppFirewallPolicyRequestAccessControlRules[] | cdktf.IResolvable

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
  public get(index: number): WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference {
    return new WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafWebAppFirewallPolicyRequestAccessControl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#default_action_name WafWebAppFirewallPolicy#default_action_name}
  */
  readonly defaultActionName: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#rules WafWebAppFirewallPolicy#rules}
  */
  readonly rules?: WafWebAppFirewallPolicyRequestAccessControlRules[] | cdktf.IResolvable;
}

export function wafWebAppFirewallPolicyRequestAccessControlToTerraform(struct?: WafWebAppFirewallPolicyRequestAccessControlOutputReference | WafWebAppFirewallPolicyRequestAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_action_name: cdktf.stringToTerraform(struct!.defaultActionName),
    rules: cdktf.listMapper(wafWebAppFirewallPolicyRequestAccessControlRulesToTerraform, true)(struct!.rules),
  }
}


export function wafWebAppFirewallPolicyRequestAccessControlToHclTerraform(struct?: WafWebAppFirewallPolicyRequestAccessControlOutputReference | WafWebAppFirewallPolicyRequestAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_action_name: {
      value: cdktf.stringToHclTerraform(struct!.defaultActionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktf.listMapperHcl(wafWebAppFirewallPolicyRequestAccessControlRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "WafWebAppFirewallPolicyRequestAccessControlRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafWebAppFirewallPolicyRequestAccessControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafWebAppFirewallPolicyRequestAccessControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultActionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultActionName = this._defaultActionName;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafWebAppFirewallPolicyRequestAccessControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultActionName = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultActionName = value.defaultActionName;
      this._rules.internalValue = value.rules;
    }
  }

  // default_action_name - computed: false, optional: false, required: true
  private _defaultActionName?: string; 
  public get defaultActionName() {
    return this.getStringAttribute('default_action_name');
  }
  public set defaultActionName(value: string) {
    this._defaultActionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionNameInput() {
    return this._defaultActionName;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new WafWebAppFirewallPolicyRequestAccessControlRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: WafWebAppFirewallPolicyRequestAccessControlRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#key WafWebAppFirewallPolicy#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#weight WafWebAppFirewallPolicy#weight}
  */
  readonly weight: number;
}

export function wafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsToTerraform(struct?: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function wafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsToHclTerraform(struct?: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights | cdktf.IResolvable): any {
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

export class WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._weight = value.weight;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList extends cdktf.ComplexList {
  public internalValue? : WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights[] | cdktf.IResolvable

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
  public get(index: number): WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference {
    return new WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#args WafWebAppFirewallPolicy#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#request_cookies WafWebAppFirewallPolicy#request_cookies}
  */
  readonly requestCookies?: string[];
}

export function wafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsToTerraform(struct?: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference | WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    request_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestCookies),
  }
}


export function wafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsToHclTerraform(struct?: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference | WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_cookies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestCookies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._requestCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCookies = this._requestCookies;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._requestCookies = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._requestCookies = value.requestCookies;
    }
  }

  // args - computed: true, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // request_cookies - computed: true, optional: true, required: false
  private _requestCookies?: string[]; 
  public get requestCookies() {
    return this.getListAttribute('request_cookies');
  }
  public set requestCookies(value: string[]) {
    this._requestCookies = value;
  }
  public resetRequestCookies() {
    this._requestCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCookiesInput() {
    return this._requestCookies;
  }
}
export interface WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}
  */
  readonly actionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#collaborative_action_threshold WafWebAppFirewallPolicy#collaborative_action_threshold}
  */
  readonly collaborativeActionThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#key WafWebAppFirewallPolicy#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#version WafWebAppFirewallPolicy#version}
  */
  readonly version: number;
  /**
  * collaborative_weights block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#collaborative_weights WafWebAppFirewallPolicy#collaborative_weights}
  */
  readonly collaborativeWeights?: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights[] | cdktf.IResolvable;
  /**
  * exclusions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#exclusions WafWebAppFirewallPolicy#exclusions}
  */
  readonly exclusions?: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions;
}

export function wafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesToTerraform(struct?: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_name: cdktf.stringToTerraform(struct!.actionName),
    collaborative_action_threshold: cdktf.numberToTerraform(struct!.collaborativeActionThreshold),
    key: cdktf.stringToTerraform(struct!.key),
    version: cdktf.numberToTerraform(struct!.version),
    collaborative_weights: cdktf.listMapper(wafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsToTerraform, true)(struct!.collaborativeWeights),
    exclusions: wafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsToTerraform(struct!.exclusions),
  }
}


export function wafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesToHclTerraform(struct?: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_name: {
      value: cdktf.stringToHclTerraform(struct!.actionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collaborative_action_threshold: {
      value: cdktf.numberToHclTerraform(struct!.collaborativeActionThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    collaborative_weights: {
      value: cdktf.listMapperHcl(wafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsToHclTerraform, true)(struct!.collaborativeWeights),
      isBlock: true,
      type: "list",
      storageClassType: "WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList",
    },
    exclusions: {
      value: wafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsToHclTerraform(struct!.exclusions),
      isBlock: true,
      type: "list",
      storageClassType: "WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionName = this._actionName;
    }
    if (this._collaborativeActionThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.collaborativeActionThreshold = this._collaborativeActionThreshold;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._collaborativeWeights?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collaborativeWeights = this._collaborativeWeights?.internalValue;
    }
    if (this._exclusions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusions = this._exclusions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionName = undefined;
      this._collaborativeActionThreshold = undefined;
      this._key = undefined;
      this._version = undefined;
      this._collaborativeWeights.internalValue = undefined;
      this._exclusions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionName = value.actionName;
      this._collaborativeActionThreshold = value.collaborativeActionThreshold;
      this._key = value.key;
      this._version = value.version;
      this._collaborativeWeights.internalValue = value.collaborativeWeights;
      this._exclusions.internalValue = value.exclusions;
    }
  }

  // action_name - computed: true, optional: true, required: false
  private _actionName?: string; 
  public get actionName() {
    return this.getStringAttribute('action_name');
  }
  public set actionName(value: string) {
    this._actionName = value;
  }
  public resetActionName() {
    this._actionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionNameInput() {
    return this._actionName;
  }

  // collaborative_action_threshold - computed: true, optional: true, required: false
  private _collaborativeActionThreshold?: number; 
  public get collaborativeActionThreshold() {
    return this.getNumberAttribute('collaborative_action_threshold');
  }
  public set collaborativeActionThreshold(value: number) {
    this._collaborativeActionThreshold = value;
  }
  public resetCollaborativeActionThreshold() {
    this._collaborativeActionThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collaborativeActionThresholdInput() {
    return this._collaborativeActionThreshold;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // version - computed: false, optional: false, required: true
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // collaborative_weights - computed: false, optional: true, required: false
  private _collaborativeWeights = new WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList(this, "collaborative_weights", false);
  public get collaborativeWeights() {
    return this._collaborativeWeights;
  }
  public putCollaborativeWeights(value: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights[] | cdktf.IResolvable) {
    this._collaborativeWeights.internalValue = value;
  }
  public resetCollaborativeWeights() {
    this._collaborativeWeights.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collaborativeWeightsInput() {
    return this._collaborativeWeights.internalValue;
  }

  // exclusions - computed: false, optional: true, required: false
  private _exclusions = new WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference(this, "exclusions");
  public get exclusions() {
    return this._exclusions;
  }
  public putExclusions(value: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions) {
    this._exclusions.internalValue = value;
  }
  public resetExclusions() {
    this._exclusions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions.internalValue;
  }
}

export class WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList extends cdktf.ComplexList {
  public internalValue? : WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities[] | cdktf.IResolvable

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
  public get(index: number): WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference {
    return new WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#allowed_http_methods WafWebAppFirewallPolicy#allowed_http_methods}
  */
  readonly allowedHttpMethods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#max_http_request_header_length WafWebAppFirewallPolicy#max_http_request_header_length}
  */
  readonly maxHttpRequestHeaderLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#max_http_request_headers WafWebAppFirewallPolicy#max_http_request_headers}
  */
  readonly maxHttpRequestHeaders?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#max_number_of_arguments WafWebAppFirewallPolicy#max_number_of_arguments}
  */
  readonly maxNumberOfArguments?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#max_single_argument_length WafWebAppFirewallPolicy#max_single_argument_length}
  */
  readonly maxSingleArgumentLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#max_total_argument_length WafWebAppFirewallPolicy#max_total_argument_length}
  */
  readonly maxTotalArgumentLength?: number;
}

export function wafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsToTerraform(struct?: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference | WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_http_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHttpMethods),
    max_http_request_header_length: cdktf.numberToTerraform(struct!.maxHttpRequestHeaderLength),
    max_http_request_headers: cdktf.numberToTerraform(struct!.maxHttpRequestHeaders),
    max_number_of_arguments: cdktf.numberToTerraform(struct!.maxNumberOfArguments),
    max_single_argument_length: cdktf.numberToTerraform(struct!.maxSingleArgumentLength),
    max_total_argument_length: cdktf.numberToTerraform(struct!.maxTotalArgumentLength),
  }
}


export function wafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsToHclTerraform(struct?: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference | WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_http_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHttpMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_http_request_header_length: {
      value: cdktf.numberToHclTerraform(struct!.maxHttpRequestHeaderLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_http_request_headers: {
      value: cdktf.numberToHclTerraform(struct!.maxHttpRequestHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_number_of_arguments: {
      value: cdktf.numberToHclTerraform(struct!.maxNumberOfArguments),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_single_argument_length: {
      value: cdktf.numberToHclTerraform(struct!.maxSingleArgumentLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_total_argument_length: {
      value: cdktf.numberToHclTerraform(struct!.maxTotalArgumentLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHttpMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHttpMethods = this._allowedHttpMethods;
    }
    if (this._maxHttpRequestHeaderLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHttpRequestHeaderLength = this._maxHttpRequestHeaderLength;
    }
    if (this._maxHttpRequestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHttpRequestHeaders = this._maxHttpRequestHeaders;
    }
    if (this._maxNumberOfArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberOfArguments = this._maxNumberOfArguments;
    }
    if (this._maxSingleArgumentLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSingleArgumentLength = this._maxSingleArgumentLength;
    }
    if (this._maxTotalArgumentLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTotalArgumentLength = this._maxTotalArgumentLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHttpMethods = undefined;
      this._maxHttpRequestHeaderLength = undefined;
      this._maxHttpRequestHeaders = undefined;
      this._maxNumberOfArguments = undefined;
      this._maxSingleArgumentLength = undefined;
      this._maxTotalArgumentLength = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHttpMethods = value.allowedHttpMethods;
      this._maxHttpRequestHeaderLength = value.maxHttpRequestHeaderLength;
      this._maxHttpRequestHeaders = value.maxHttpRequestHeaders;
      this._maxNumberOfArguments = value.maxNumberOfArguments;
      this._maxSingleArgumentLength = value.maxSingleArgumentLength;
      this._maxTotalArgumentLength = value.maxTotalArgumentLength;
    }
  }

  // allowed_http_methods - computed: true, optional: true, required: false
  private _allowedHttpMethods?: string[]; 
  public get allowedHttpMethods() {
    return this.getListAttribute('allowed_http_methods');
  }
  public set allowedHttpMethods(value: string[]) {
    this._allowedHttpMethods = value;
  }
  public resetAllowedHttpMethods() {
    this._allowedHttpMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHttpMethodsInput() {
    return this._allowedHttpMethods;
  }

  // max_http_request_header_length - computed: false, optional: true, required: false
  private _maxHttpRequestHeaderLength?: number; 
  public get maxHttpRequestHeaderLength() {
    return this.getNumberAttribute('max_http_request_header_length');
  }
  public set maxHttpRequestHeaderLength(value: number) {
    this._maxHttpRequestHeaderLength = value;
  }
  public resetMaxHttpRequestHeaderLength() {
    this._maxHttpRequestHeaderLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHttpRequestHeaderLengthInput() {
    return this._maxHttpRequestHeaderLength;
  }

  // max_http_request_headers - computed: false, optional: true, required: false
  private _maxHttpRequestHeaders?: number; 
  public get maxHttpRequestHeaders() {
    return this.getNumberAttribute('max_http_request_headers');
  }
  public set maxHttpRequestHeaders(value: number) {
    this._maxHttpRequestHeaders = value;
  }
  public resetMaxHttpRequestHeaders() {
    this._maxHttpRequestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHttpRequestHeadersInput() {
    return this._maxHttpRequestHeaders;
  }

  // max_number_of_arguments - computed: false, optional: true, required: false
  private _maxNumberOfArguments?: number; 
  public get maxNumberOfArguments() {
    return this.getNumberAttribute('max_number_of_arguments');
  }
  public set maxNumberOfArguments(value: number) {
    this._maxNumberOfArguments = value;
  }
  public resetMaxNumberOfArguments() {
    this._maxNumberOfArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfArgumentsInput() {
    return this._maxNumberOfArguments;
  }

  // max_single_argument_length - computed: false, optional: true, required: false
  private _maxSingleArgumentLength?: number; 
  public get maxSingleArgumentLength() {
    return this.getNumberAttribute('max_single_argument_length');
  }
  public set maxSingleArgumentLength(value: number) {
    this._maxSingleArgumentLength = value;
  }
  public resetMaxSingleArgumentLength() {
    this._maxSingleArgumentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSingleArgumentLengthInput() {
    return this._maxSingleArgumentLength;
  }

  // max_total_argument_length - computed: false, optional: true, required: false
  private _maxTotalArgumentLength?: number; 
  public get maxTotalArgumentLength() {
    return this.getNumberAttribute('max_total_argument_length');
  }
  public set maxTotalArgumentLength(value: number) {
    this._maxTotalArgumentLength = value;
  }
  public resetMaxTotalArgumentLength() {
    this._maxTotalArgumentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTotalArgumentLengthInput() {
    return this._maxTotalArgumentLength;
  }
}
export interface WafWebAppFirewallPolicyRequestProtectionRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}
  */
  readonly actionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}
  */
  readonly conditionLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#is_body_inspection_enabled WafWebAppFirewallPolicy#is_body_inspection_enabled}
  */
  readonly isBodyInspectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}
  */
  readonly type: string;
  /**
  * protection_capabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#protection_capabilities WafWebAppFirewallPolicy#protection_capabilities}
  */
  readonly protectionCapabilities: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities[] | cdktf.IResolvable;
  /**
  * protection_capability_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#protection_capability_settings WafWebAppFirewallPolicy#protection_capability_settings}
  */
  readonly protectionCapabilitySettings?: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings;
}

export function wafWebAppFirewallPolicyRequestProtectionRulesToTerraform(struct?: WafWebAppFirewallPolicyRequestProtectionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_name: cdktf.stringToTerraform(struct!.actionName),
    condition: cdktf.stringToTerraform(struct!.condition),
    condition_language: cdktf.stringToTerraform(struct!.conditionLanguage),
    is_body_inspection_enabled: cdktf.booleanToTerraform(struct!.isBodyInspectionEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    protection_capabilities: cdktf.listMapper(wafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesToTerraform, true)(struct!.protectionCapabilities),
    protection_capability_settings: wafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsToTerraform(struct!.protectionCapabilitySettings),
  }
}


export function wafWebAppFirewallPolicyRequestProtectionRulesToHclTerraform(struct?: WafWebAppFirewallPolicyRequestProtectionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_name: {
      value: cdktf.stringToHclTerraform(struct!.actionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_language: {
      value: cdktf.stringToHclTerraform(struct!.conditionLanguage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_body_inspection_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isBodyInspectionEnabled),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protection_capabilities: {
      value: cdktf.listMapperHcl(wafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesToHclTerraform, true)(struct!.protectionCapabilities),
      isBlock: true,
      type: "list",
      storageClassType: "WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList",
    },
    protection_capability_settings: {
      value: wafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsToHclTerraform(struct!.protectionCapabilitySettings),
      isBlock: true,
      type: "list",
      storageClassType: "WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafWebAppFirewallPolicyRequestProtectionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafWebAppFirewallPolicyRequestProtectionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionName = this._actionName;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._conditionLanguage !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionLanguage = this._conditionLanguage;
    }
    if (this._isBodyInspectionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isBodyInspectionEnabled = this._isBodyInspectionEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._protectionCapabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionCapabilities = this._protectionCapabilities?.internalValue;
    }
    if (this._protectionCapabilitySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionCapabilitySettings = this._protectionCapabilitySettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafWebAppFirewallPolicyRequestProtectionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionName = undefined;
      this._condition = undefined;
      this._conditionLanguage = undefined;
      this._isBodyInspectionEnabled = undefined;
      this._name = undefined;
      this._type = undefined;
      this._protectionCapabilities.internalValue = undefined;
      this._protectionCapabilitySettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionName = value.actionName;
      this._condition = value.condition;
      this._conditionLanguage = value.conditionLanguage;
      this._isBodyInspectionEnabled = value.isBodyInspectionEnabled;
      this._name = value.name;
      this._type = value.type;
      this._protectionCapabilities.internalValue = value.protectionCapabilities;
      this._protectionCapabilitySettings.internalValue = value.protectionCapabilitySettings;
    }
  }

  // action_name - computed: false, optional: false, required: true
  private _actionName?: string; 
  public get actionName() {
    return this.getStringAttribute('action_name');
  }
  public set actionName(value: string) {
    this._actionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionNameInput() {
    return this._actionName;
  }

  // condition - computed: true, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // condition_language - computed: true, optional: true, required: false
  private _conditionLanguage?: string; 
  public get conditionLanguage() {
    return this.getStringAttribute('condition_language');
  }
  public set conditionLanguage(value: string) {
    this._conditionLanguage = value;
  }
  public resetConditionLanguage() {
    this._conditionLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionLanguageInput() {
    return this._conditionLanguage;
  }

  // is_body_inspection_enabled - computed: true, optional: true, required: false
  private _isBodyInspectionEnabled?: boolean | cdktf.IResolvable; 
  public get isBodyInspectionEnabled() {
    return this.getBooleanAttribute('is_body_inspection_enabled');
  }
  public set isBodyInspectionEnabled(value: boolean | cdktf.IResolvable) {
    this._isBodyInspectionEnabled = value;
  }
  public resetIsBodyInspectionEnabled() {
    this._isBodyInspectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBodyInspectionEnabledInput() {
    return this._isBodyInspectionEnabled;
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

  // protection_capabilities - computed: false, optional: false, required: true
  private _protectionCapabilities = new WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList(this, "protection_capabilities", false);
  public get protectionCapabilities() {
    return this._protectionCapabilities;
  }
  public putProtectionCapabilities(value: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities[] | cdktf.IResolvable) {
    this._protectionCapabilities.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionCapabilitiesInput() {
    return this._protectionCapabilities.internalValue;
  }

  // protection_capability_settings - computed: false, optional: true, required: false
  private _protectionCapabilitySettings = new WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference(this, "protection_capability_settings");
  public get protectionCapabilitySettings() {
    return this._protectionCapabilitySettings;
  }
  public putProtectionCapabilitySettings(value: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings) {
    this._protectionCapabilitySettings.internalValue = value;
  }
  public resetProtectionCapabilitySettings() {
    this._protectionCapabilitySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionCapabilitySettingsInput() {
    return this._protectionCapabilitySettings.internalValue;
  }
}

export class WafWebAppFirewallPolicyRequestProtectionRulesList extends cdktf.ComplexList {
  public internalValue? : WafWebAppFirewallPolicyRequestProtectionRules[] | cdktf.IResolvable

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
  public get(index: number): WafWebAppFirewallPolicyRequestProtectionRulesOutputReference {
    return new WafWebAppFirewallPolicyRequestProtectionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafWebAppFirewallPolicyRequestProtection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#body_inspection_size_limit_exceeded_action_name WafWebAppFirewallPolicy#body_inspection_size_limit_exceeded_action_name}
  */
  readonly bodyInspectionSizeLimitExceededActionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#body_inspection_size_limit_in_bytes WafWebAppFirewallPolicy#body_inspection_size_limit_in_bytes}
  */
  readonly bodyInspectionSizeLimitInBytes?: number;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#rules WafWebAppFirewallPolicy#rules}
  */
  readonly rules?: WafWebAppFirewallPolicyRequestProtectionRules[] | cdktf.IResolvable;
}

export function wafWebAppFirewallPolicyRequestProtectionToTerraform(struct?: WafWebAppFirewallPolicyRequestProtectionOutputReference | WafWebAppFirewallPolicyRequestProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_inspection_size_limit_exceeded_action_name: cdktf.stringToTerraform(struct!.bodyInspectionSizeLimitExceededActionName),
    body_inspection_size_limit_in_bytes: cdktf.numberToTerraform(struct!.bodyInspectionSizeLimitInBytes),
    rules: cdktf.listMapper(wafWebAppFirewallPolicyRequestProtectionRulesToTerraform, true)(struct!.rules),
  }
}


export function wafWebAppFirewallPolicyRequestProtectionToHclTerraform(struct?: WafWebAppFirewallPolicyRequestProtectionOutputReference | WafWebAppFirewallPolicyRequestProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body_inspection_size_limit_exceeded_action_name: {
      value: cdktf.stringToHclTerraform(struct!.bodyInspectionSizeLimitExceededActionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body_inspection_size_limit_in_bytes: {
      value: cdktf.numberToHclTerraform(struct!.bodyInspectionSizeLimitInBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rules: {
      value: cdktf.listMapperHcl(wafWebAppFirewallPolicyRequestProtectionRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "WafWebAppFirewallPolicyRequestProtectionRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafWebAppFirewallPolicyRequestProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafWebAppFirewallPolicyRequestProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyInspectionSizeLimitExceededActionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyInspectionSizeLimitExceededActionName = this._bodyInspectionSizeLimitExceededActionName;
    }
    if (this._bodyInspectionSizeLimitInBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyInspectionSizeLimitInBytes = this._bodyInspectionSizeLimitInBytes;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafWebAppFirewallPolicyRequestProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bodyInspectionSizeLimitExceededActionName = undefined;
      this._bodyInspectionSizeLimitInBytes = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bodyInspectionSizeLimitExceededActionName = value.bodyInspectionSizeLimitExceededActionName;
      this._bodyInspectionSizeLimitInBytes = value.bodyInspectionSizeLimitInBytes;
      this._rules.internalValue = value.rules;
    }
  }

  // body_inspection_size_limit_exceeded_action_name - computed: true, optional: true, required: false
  private _bodyInspectionSizeLimitExceededActionName?: string; 
  public get bodyInspectionSizeLimitExceededActionName() {
    return this.getStringAttribute('body_inspection_size_limit_exceeded_action_name');
  }
  public set bodyInspectionSizeLimitExceededActionName(value: string) {
    this._bodyInspectionSizeLimitExceededActionName = value;
  }
  public resetBodyInspectionSizeLimitExceededActionName() {
    this._bodyInspectionSizeLimitExceededActionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInspectionSizeLimitExceededActionNameInput() {
    return this._bodyInspectionSizeLimitExceededActionName;
  }

  // body_inspection_size_limit_in_bytes - computed: false, optional: true, required: false
  private _bodyInspectionSizeLimitInBytes?: number; 
  public get bodyInspectionSizeLimitInBytes() {
    return this.getNumberAttribute('body_inspection_size_limit_in_bytes');
  }
  public set bodyInspectionSizeLimitInBytes(value: number) {
    this._bodyInspectionSizeLimitInBytes = value;
  }
  public resetBodyInspectionSizeLimitInBytes() {
    this._bodyInspectionSizeLimitInBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInspectionSizeLimitInBytesInput() {
    return this._bodyInspectionSizeLimitInBytes;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new WafWebAppFirewallPolicyRequestProtectionRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: WafWebAppFirewallPolicyRequestProtectionRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#action_duration_in_seconds WafWebAppFirewallPolicy#action_duration_in_seconds}
  */
  readonly actionDurationInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#period_in_seconds WafWebAppFirewallPolicy#period_in_seconds}
  */
  readonly periodInSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#requests_limit WafWebAppFirewallPolicy#requests_limit}
  */
  readonly requestsLimit: number;
}

export function wafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsToTerraform(struct?: WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_duration_in_seconds: cdktf.numberToTerraform(struct!.actionDurationInSeconds),
    period_in_seconds: cdktf.numberToTerraform(struct!.periodInSeconds),
    requests_limit: cdktf.numberToTerraform(struct!.requestsLimit),
  }
}


export function wafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsToHclTerraform(struct?: WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_duration_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.actionDurationInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    requests_limit: {
      value: cdktf.numberToHclTerraform(struct!.requestsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionDurationInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionDurationInSeconds = this._actionDurationInSeconds;
    }
    if (this._periodInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodInSeconds = this._periodInSeconds;
    }
    if (this._requestsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsLimit = this._requestsLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionDurationInSeconds = undefined;
      this._periodInSeconds = undefined;
      this._requestsLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionDurationInSeconds = value.actionDurationInSeconds;
      this._periodInSeconds = value.periodInSeconds;
      this._requestsLimit = value.requestsLimit;
    }
  }

  // action_duration_in_seconds - computed: true, optional: true, required: false
  private _actionDurationInSeconds?: number; 
  public get actionDurationInSeconds() {
    return this.getNumberAttribute('action_duration_in_seconds');
  }
  public set actionDurationInSeconds(value: number) {
    this._actionDurationInSeconds = value;
  }
  public resetActionDurationInSeconds() {
    this._actionDurationInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionDurationInSecondsInput() {
    return this._actionDurationInSeconds;
  }

  // period_in_seconds - computed: false, optional: false, required: true
  private _periodInSeconds?: number; 
  public get periodInSeconds() {
    return this.getNumberAttribute('period_in_seconds');
  }
  public set periodInSeconds(value: number) {
    this._periodInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInSecondsInput() {
    return this._periodInSeconds;
  }

  // requests_limit - computed: false, optional: false, required: true
  private _requestsLimit?: number; 
  public get requestsLimit() {
    return this.getNumberAttribute('requests_limit');
  }
  public set requestsLimit(value: number) {
    this._requestsLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsLimitInput() {
    return this._requestsLimit;
  }
}

export class WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList extends cdktf.ComplexList {
  public internalValue? : WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations[] | cdktf.IResolvable

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
  public get(index: number): WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference {
    return new WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafWebAppFirewallPolicyRequestRateLimitingRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}
  */
  readonly actionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}
  */
  readonly conditionLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}
  */
  readonly type: string;
  /**
  * configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#configurations WafWebAppFirewallPolicy#configurations}
  */
  readonly configurations: WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations[] | cdktf.IResolvable;
}

export function wafWebAppFirewallPolicyRequestRateLimitingRulesToTerraform(struct?: WafWebAppFirewallPolicyRequestRateLimitingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_name: cdktf.stringToTerraform(struct!.actionName),
    condition: cdktf.stringToTerraform(struct!.condition),
    condition_language: cdktf.stringToTerraform(struct!.conditionLanguage),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    configurations: cdktf.listMapper(wafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsToTerraform, true)(struct!.configurations),
  }
}


export function wafWebAppFirewallPolicyRequestRateLimitingRulesToHclTerraform(struct?: WafWebAppFirewallPolicyRequestRateLimitingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_name: {
      value: cdktf.stringToHclTerraform(struct!.actionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_language: {
      value: cdktf.stringToHclTerraform(struct!.conditionLanguage),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configurations: {
      value: cdktf.listMapperHcl(wafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsToHclTerraform, true)(struct!.configurations),
      isBlock: true,
      type: "list",
      storageClassType: "WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafWebAppFirewallPolicyRequestRateLimitingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionName = this._actionName;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._conditionLanguage !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionLanguage = this._conditionLanguage;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._configurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurations = this._configurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafWebAppFirewallPolicyRequestRateLimitingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionName = undefined;
      this._condition = undefined;
      this._conditionLanguage = undefined;
      this._name = undefined;
      this._type = undefined;
      this._configurations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionName = value.actionName;
      this._condition = value.condition;
      this._conditionLanguage = value.conditionLanguage;
      this._name = value.name;
      this._type = value.type;
      this._configurations.internalValue = value.configurations;
    }
  }

  // action_name - computed: false, optional: false, required: true
  private _actionName?: string; 
  public get actionName() {
    return this.getStringAttribute('action_name');
  }
  public set actionName(value: string) {
    this._actionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionNameInput() {
    return this._actionName;
  }

  // condition - computed: true, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // condition_language - computed: true, optional: true, required: false
  private _conditionLanguage?: string; 
  public get conditionLanguage() {
    return this.getStringAttribute('condition_language');
  }
  public set conditionLanguage(value: string) {
    this._conditionLanguage = value;
  }
  public resetConditionLanguage() {
    this._conditionLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionLanguageInput() {
    return this._conditionLanguage;
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

  // configurations - computed: false, optional: false, required: true
  private _configurations = new WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList(this, "configurations", false);
  public get configurations() {
    return this._configurations;
  }
  public putConfigurations(value: WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations[] | cdktf.IResolvable) {
    this._configurations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationsInput() {
    return this._configurations.internalValue;
  }
}

export class WafWebAppFirewallPolicyRequestRateLimitingRulesList extends cdktf.ComplexList {
  public internalValue? : WafWebAppFirewallPolicyRequestRateLimitingRules[] | cdktf.IResolvable

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
  public get(index: number): WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference {
    return new WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafWebAppFirewallPolicyRequestRateLimiting {
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#rules WafWebAppFirewallPolicy#rules}
  */
  readonly rules?: WafWebAppFirewallPolicyRequestRateLimitingRules[] | cdktf.IResolvable;
}

export function wafWebAppFirewallPolicyRequestRateLimitingToTerraform(struct?: WafWebAppFirewallPolicyRequestRateLimitingOutputReference | WafWebAppFirewallPolicyRequestRateLimiting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(wafWebAppFirewallPolicyRequestRateLimitingRulesToTerraform, true)(struct!.rules),
  }
}


export function wafWebAppFirewallPolicyRequestRateLimitingToHclTerraform(struct?: WafWebAppFirewallPolicyRequestRateLimitingOutputReference | WafWebAppFirewallPolicyRequestRateLimiting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(wafWebAppFirewallPolicyRequestRateLimitingRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "WafWebAppFirewallPolicyRequestRateLimitingRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafWebAppFirewallPolicyRequestRateLimitingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafWebAppFirewallPolicyRequestRateLimiting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafWebAppFirewallPolicyRequestRateLimiting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new WafWebAppFirewallPolicyRequestRateLimitingRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: WafWebAppFirewallPolicyRequestRateLimitingRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface WafWebAppFirewallPolicyResponseAccessControlRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}
  */
  readonly actionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}
  */
  readonly conditionLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}
  */
  readonly type: string;
}

export function wafWebAppFirewallPolicyResponseAccessControlRulesToTerraform(struct?: WafWebAppFirewallPolicyResponseAccessControlRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_name: cdktf.stringToTerraform(struct!.actionName),
    condition: cdktf.stringToTerraform(struct!.condition),
    condition_language: cdktf.stringToTerraform(struct!.conditionLanguage),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function wafWebAppFirewallPolicyResponseAccessControlRulesToHclTerraform(struct?: WafWebAppFirewallPolicyResponseAccessControlRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_name: {
      value: cdktf.stringToHclTerraform(struct!.actionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_language: {
      value: cdktf.stringToHclTerraform(struct!.conditionLanguage),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafWebAppFirewallPolicyResponseAccessControlRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionName = this._actionName;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._conditionLanguage !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionLanguage = this._conditionLanguage;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafWebAppFirewallPolicyResponseAccessControlRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionName = undefined;
      this._condition = undefined;
      this._conditionLanguage = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionName = value.actionName;
      this._condition = value.condition;
      this._conditionLanguage = value.conditionLanguage;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // action_name - computed: false, optional: false, required: true
  private _actionName?: string; 
  public get actionName() {
    return this.getStringAttribute('action_name');
  }
  public set actionName(value: string) {
    this._actionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionNameInput() {
    return this._actionName;
  }

  // condition - computed: true, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // condition_language - computed: true, optional: true, required: false
  private _conditionLanguage?: string; 
  public get conditionLanguage() {
    return this.getStringAttribute('condition_language');
  }
  public set conditionLanguage(value: string) {
    this._conditionLanguage = value;
  }
  public resetConditionLanguage() {
    this._conditionLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionLanguageInput() {
    return this._conditionLanguage;
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
}

export class WafWebAppFirewallPolicyResponseAccessControlRulesList extends cdktf.ComplexList {
  public internalValue? : WafWebAppFirewallPolicyResponseAccessControlRules[] | cdktf.IResolvable

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
  public get(index: number): WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference {
    return new WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafWebAppFirewallPolicyResponseAccessControl {
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#rules WafWebAppFirewallPolicy#rules}
  */
  readonly rules?: WafWebAppFirewallPolicyResponseAccessControlRules[] | cdktf.IResolvable;
}

export function wafWebAppFirewallPolicyResponseAccessControlToTerraform(struct?: WafWebAppFirewallPolicyResponseAccessControlOutputReference | WafWebAppFirewallPolicyResponseAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(wafWebAppFirewallPolicyResponseAccessControlRulesToTerraform, true)(struct!.rules),
  }
}


export function wafWebAppFirewallPolicyResponseAccessControlToHclTerraform(struct?: WafWebAppFirewallPolicyResponseAccessControlOutputReference | WafWebAppFirewallPolicyResponseAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(wafWebAppFirewallPolicyResponseAccessControlRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "WafWebAppFirewallPolicyResponseAccessControlRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafWebAppFirewallPolicyResponseAccessControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafWebAppFirewallPolicyResponseAccessControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafWebAppFirewallPolicyResponseAccessControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new WafWebAppFirewallPolicyResponseAccessControlRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: WafWebAppFirewallPolicyResponseAccessControlRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#key WafWebAppFirewallPolicy#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#weight WafWebAppFirewallPolicy#weight}
  */
  readonly weight: number;
}

export function wafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsToTerraform(struct?: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function wafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsToHclTerraform(struct?: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights | cdktf.IResolvable): any {
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

export class WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._weight = value.weight;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList extends cdktf.ComplexList {
  public internalValue? : WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights[] | cdktf.IResolvable

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
  public get(index: number): WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference {
    return new WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#args WafWebAppFirewallPolicy#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#request_cookies WafWebAppFirewallPolicy#request_cookies}
  */
  readonly requestCookies?: string[];
}

export function wafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsToTerraform(struct?: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference | WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    request_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestCookies),
  }
}


export function wafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsToHclTerraform(struct?: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference | WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_cookies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestCookies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._requestCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCookies = this._requestCookies;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._requestCookies = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._requestCookies = value.requestCookies;
    }
  }

  // args - computed: true, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // request_cookies - computed: true, optional: true, required: false
  private _requestCookies?: string[]; 
  public get requestCookies() {
    return this.getListAttribute('request_cookies');
  }
  public set requestCookies(value: string[]) {
    this._requestCookies = value;
  }
  public resetRequestCookies() {
    this._requestCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCookiesInput() {
    return this._requestCookies;
  }
}
export interface WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}
  */
  readonly actionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#collaborative_action_threshold WafWebAppFirewallPolicy#collaborative_action_threshold}
  */
  readonly collaborativeActionThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#key WafWebAppFirewallPolicy#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#version WafWebAppFirewallPolicy#version}
  */
  readonly version: number;
  /**
  * collaborative_weights block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#collaborative_weights WafWebAppFirewallPolicy#collaborative_weights}
  */
  readonly collaborativeWeights?: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights[] | cdktf.IResolvable;
  /**
  * exclusions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#exclusions WafWebAppFirewallPolicy#exclusions}
  */
  readonly exclusions?: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions;
}

export function wafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesToTerraform(struct?: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_name: cdktf.stringToTerraform(struct!.actionName),
    collaborative_action_threshold: cdktf.numberToTerraform(struct!.collaborativeActionThreshold),
    key: cdktf.stringToTerraform(struct!.key),
    version: cdktf.numberToTerraform(struct!.version),
    collaborative_weights: cdktf.listMapper(wafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsToTerraform, true)(struct!.collaborativeWeights),
    exclusions: wafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsToTerraform(struct!.exclusions),
  }
}


export function wafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesToHclTerraform(struct?: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_name: {
      value: cdktf.stringToHclTerraform(struct!.actionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collaborative_action_threshold: {
      value: cdktf.numberToHclTerraform(struct!.collaborativeActionThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    collaborative_weights: {
      value: cdktf.listMapperHcl(wafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsToHclTerraform, true)(struct!.collaborativeWeights),
      isBlock: true,
      type: "list",
      storageClassType: "WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList",
    },
    exclusions: {
      value: wafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsToHclTerraform(struct!.exclusions),
      isBlock: true,
      type: "list",
      storageClassType: "WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionName = this._actionName;
    }
    if (this._collaborativeActionThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.collaborativeActionThreshold = this._collaborativeActionThreshold;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._collaborativeWeights?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collaborativeWeights = this._collaborativeWeights?.internalValue;
    }
    if (this._exclusions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusions = this._exclusions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionName = undefined;
      this._collaborativeActionThreshold = undefined;
      this._key = undefined;
      this._version = undefined;
      this._collaborativeWeights.internalValue = undefined;
      this._exclusions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionName = value.actionName;
      this._collaborativeActionThreshold = value.collaborativeActionThreshold;
      this._key = value.key;
      this._version = value.version;
      this._collaborativeWeights.internalValue = value.collaborativeWeights;
      this._exclusions.internalValue = value.exclusions;
    }
  }

  // action_name - computed: true, optional: true, required: false
  private _actionName?: string; 
  public get actionName() {
    return this.getStringAttribute('action_name');
  }
  public set actionName(value: string) {
    this._actionName = value;
  }
  public resetActionName() {
    this._actionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionNameInput() {
    return this._actionName;
  }

  // collaborative_action_threshold - computed: true, optional: true, required: false
  private _collaborativeActionThreshold?: number; 
  public get collaborativeActionThreshold() {
    return this.getNumberAttribute('collaborative_action_threshold');
  }
  public set collaborativeActionThreshold(value: number) {
    this._collaborativeActionThreshold = value;
  }
  public resetCollaborativeActionThreshold() {
    this._collaborativeActionThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collaborativeActionThresholdInput() {
    return this._collaborativeActionThreshold;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // version - computed: false, optional: false, required: true
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // collaborative_weights - computed: false, optional: true, required: false
  private _collaborativeWeights = new WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList(this, "collaborative_weights", false);
  public get collaborativeWeights() {
    return this._collaborativeWeights;
  }
  public putCollaborativeWeights(value: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights[] | cdktf.IResolvable) {
    this._collaborativeWeights.internalValue = value;
  }
  public resetCollaborativeWeights() {
    this._collaborativeWeights.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collaborativeWeightsInput() {
    return this._collaborativeWeights.internalValue;
  }

  // exclusions - computed: false, optional: true, required: false
  private _exclusions = new WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference(this, "exclusions");
  public get exclusions() {
    return this._exclusions;
  }
  public putExclusions(value: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions) {
    this._exclusions.internalValue = value;
  }
  public resetExclusions() {
    this._exclusions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions.internalValue;
  }
}

export class WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList extends cdktf.ComplexList {
  public internalValue? : WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities[] | cdktf.IResolvable

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
  public get(index: number): WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference {
    return new WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#allowed_http_methods WafWebAppFirewallPolicy#allowed_http_methods}
  */
  readonly allowedHttpMethods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#max_http_request_header_length WafWebAppFirewallPolicy#max_http_request_header_length}
  */
  readonly maxHttpRequestHeaderLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#max_http_request_headers WafWebAppFirewallPolicy#max_http_request_headers}
  */
  readonly maxHttpRequestHeaders?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#max_number_of_arguments WafWebAppFirewallPolicy#max_number_of_arguments}
  */
  readonly maxNumberOfArguments?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#max_single_argument_length WafWebAppFirewallPolicy#max_single_argument_length}
  */
  readonly maxSingleArgumentLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#max_total_argument_length WafWebAppFirewallPolicy#max_total_argument_length}
  */
  readonly maxTotalArgumentLength?: number;
}

export function wafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsToTerraform(struct?: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference | WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_http_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHttpMethods),
    max_http_request_header_length: cdktf.numberToTerraform(struct!.maxHttpRequestHeaderLength),
    max_http_request_headers: cdktf.numberToTerraform(struct!.maxHttpRequestHeaders),
    max_number_of_arguments: cdktf.numberToTerraform(struct!.maxNumberOfArguments),
    max_single_argument_length: cdktf.numberToTerraform(struct!.maxSingleArgumentLength),
    max_total_argument_length: cdktf.numberToTerraform(struct!.maxTotalArgumentLength),
  }
}


export function wafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsToHclTerraform(struct?: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference | WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_http_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHttpMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_http_request_header_length: {
      value: cdktf.numberToHclTerraform(struct!.maxHttpRequestHeaderLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_http_request_headers: {
      value: cdktf.numberToHclTerraform(struct!.maxHttpRequestHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_number_of_arguments: {
      value: cdktf.numberToHclTerraform(struct!.maxNumberOfArguments),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_single_argument_length: {
      value: cdktf.numberToHclTerraform(struct!.maxSingleArgumentLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_total_argument_length: {
      value: cdktf.numberToHclTerraform(struct!.maxTotalArgumentLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHttpMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHttpMethods = this._allowedHttpMethods;
    }
    if (this._maxHttpRequestHeaderLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHttpRequestHeaderLength = this._maxHttpRequestHeaderLength;
    }
    if (this._maxHttpRequestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHttpRequestHeaders = this._maxHttpRequestHeaders;
    }
    if (this._maxNumberOfArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberOfArguments = this._maxNumberOfArguments;
    }
    if (this._maxSingleArgumentLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSingleArgumentLength = this._maxSingleArgumentLength;
    }
    if (this._maxTotalArgumentLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTotalArgumentLength = this._maxTotalArgumentLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHttpMethods = undefined;
      this._maxHttpRequestHeaderLength = undefined;
      this._maxHttpRequestHeaders = undefined;
      this._maxNumberOfArguments = undefined;
      this._maxSingleArgumentLength = undefined;
      this._maxTotalArgumentLength = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHttpMethods = value.allowedHttpMethods;
      this._maxHttpRequestHeaderLength = value.maxHttpRequestHeaderLength;
      this._maxHttpRequestHeaders = value.maxHttpRequestHeaders;
      this._maxNumberOfArguments = value.maxNumberOfArguments;
      this._maxSingleArgumentLength = value.maxSingleArgumentLength;
      this._maxTotalArgumentLength = value.maxTotalArgumentLength;
    }
  }

  // allowed_http_methods - computed: true, optional: true, required: false
  private _allowedHttpMethods?: string[]; 
  public get allowedHttpMethods() {
    return this.getListAttribute('allowed_http_methods');
  }
  public set allowedHttpMethods(value: string[]) {
    this._allowedHttpMethods = value;
  }
  public resetAllowedHttpMethods() {
    this._allowedHttpMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHttpMethodsInput() {
    return this._allowedHttpMethods;
  }

  // max_http_request_header_length - computed: false, optional: true, required: false
  private _maxHttpRequestHeaderLength?: number; 
  public get maxHttpRequestHeaderLength() {
    return this.getNumberAttribute('max_http_request_header_length');
  }
  public set maxHttpRequestHeaderLength(value: number) {
    this._maxHttpRequestHeaderLength = value;
  }
  public resetMaxHttpRequestHeaderLength() {
    this._maxHttpRequestHeaderLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHttpRequestHeaderLengthInput() {
    return this._maxHttpRequestHeaderLength;
  }

  // max_http_request_headers - computed: false, optional: true, required: false
  private _maxHttpRequestHeaders?: number; 
  public get maxHttpRequestHeaders() {
    return this.getNumberAttribute('max_http_request_headers');
  }
  public set maxHttpRequestHeaders(value: number) {
    this._maxHttpRequestHeaders = value;
  }
  public resetMaxHttpRequestHeaders() {
    this._maxHttpRequestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHttpRequestHeadersInput() {
    return this._maxHttpRequestHeaders;
  }

  // max_number_of_arguments - computed: false, optional: true, required: false
  private _maxNumberOfArguments?: number; 
  public get maxNumberOfArguments() {
    return this.getNumberAttribute('max_number_of_arguments');
  }
  public set maxNumberOfArguments(value: number) {
    this._maxNumberOfArguments = value;
  }
  public resetMaxNumberOfArguments() {
    this._maxNumberOfArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfArgumentsInput() {
    return this._maxNumberOfArguments;
  }

  // max_single_argument_length - computed: false, optional: true, required: false
  private _maxSingleArgumentLength?: number; 
  public get maxSingleArgumentLength() {
    return this.getNumberAttribute('max_single_argument_length');
  }
  public set maxSingleArgumentLength(value: number) {
    this._maxSingleArgumentLength = value;
  }
  public resetMaxSingleArgumentLength() {
    this._maxSingleArgumentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSingleArgumentLengthInput() {
    return this._maxSingleArgumentLength;
  }

  // max_total_argument_length - computed: false, optional: true, required: false
  private _maxTotalArgumentLength?: number; 
  public get maxTotalArgumentLength() {
    return this.getNumberAttribute('max_total_argument_length');
  }
  public set maxTotalArgumentLength(value: number) {
    this._maxTotalArgumentLength = value;
  }
  public resetMaxTotalArgumentLength() {
    this._maxTotalArgumentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTotalArgumentLengthInput() {
    return this._maxTotalArgumentLength;
  }
}
export interface WafWebAppFirewallPolicyResponseProtectionRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}
  */
  readonly actionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}
  */
  readonly conditionLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#is_body_inspection_enabled WafWebAppFirewallPolicy#is_body_inspection_enabled}
  */
  readonly isBodyInspectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}
  */
  readonly type: string;
  /**
  * protection_capabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#protection_capabilities WafWebAppFirewallPolicy#protection_capabilities}
  */
  readonly protectionCapabilities: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities[] | cdktf.IResolvable;
  /**
  * protection_capability_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#protection_capability_settings WafWebAppFirewallPolicy#protection_capability_settings}
  */
  readonly protectionCapabilitySettings?: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings;
}

export function wafWebAppFirewallPolicyResponseProtectionRulesToTerraform(struct?: WafWebAppFirewallPolicyResponseProtectionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_name: cdktf.stringToTerraform(struct!.actionName),
    condition: cdktf.stringToTerraform(struct!.condition),
    condition_language: cdktf.stringToTerraform(struct!.conditionLanguage),
    is_body_inspection_enabled: cdktf.booleanToTerraform(struct!.isBodyInspectionEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    protection_capabilities: cdktf.listMapper(wafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesToTerraform, true)(struct!.protectionCapabilities),
    protection_capability_settings: wafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsToTerraform(struct!.protectionCapabilitySettings),
  }
}


export function wafWebAppFirewallPolicyResponseProtectionRulesToHclTerraform(struct?: WafWebAppFirewallPolicyResponseProtectionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_name: {
      value: cdktf.stringToHclTerraform(struct!.actionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_language: {
      value: cdktf.stringToHclTerraform(struct!.conditionLanguage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_body_inspection_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isBodyInspectionEnabled),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protection_capabilities: {
      value: cdktf.listMapperHcl(wafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesToHclTerraform, true)(struct!.protectionCapabilities),
      isBlock: true,
      type: "list",
      storageClassType: "WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList",
    },
    protection_capability_settings: {
      value: wafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsToHclTerraform(struct!.protectionCapabilitySettings),
      isBlock: true,
      type: "list",
      storageClassType: "WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafWebAppFirewallPolicyResponseProtectionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafWebAppFirewallPolicyResponseProtectionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionName = this._actionName;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._conditionLanguage !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionLanguage = this._conditionLanguage;
    }
    if (this._isBodyInspectionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isBodyInspectionEnabled = this._isBodyInspectionEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._protectionCapabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionCapabilities = this._protectionCapabilities?.internalValue;
    }
    if (this._protectionCapabilitySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionCapabilitySettings = this._protectionCapabilitySettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafWebAppFirewallPolicyResponseProtectionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionName = undefined;
      this._condition = undefined;
      this._conditionLanguage = undefined;
      this._isBodyInspectionEnabled = undefined;
      this._name = undefined;
      this._type = undefined;
      this._protectionCapabilities.internalValue = undefined;
      this._protectionCapabilitySettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionName = value.actionName;
      this._condition = value.condition;
      this._conditionLanguage = value.conditionLanguage;
      this._isBodyInspectionEnabled = value.isBodyInspectionEnabled;
      this._name = value.name;
      this._type = value.type;
      this._protectionCapabilities.internalValue = value.protectionCapabilities;
      this._protectionCapabilitySettings.internalValue = value.protectionCapabilitySettings;
    }
  }

  // action_name - computed: false, optional: false, required: true
  private _actionName?: string; 
  public get actionName() {
    return this.getStringAttribute('action_name');
  }
  public set actionName(value: string) {
    this._actionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionNameInput() {
    return this._actionName;
  }

  // condition - computed: true, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // condition_language - computed: true, optional: true, required: false
  private _conditionLanguage?: string; 
  public get conditionLanguage() {
    return this.getStringAttribute('condition_language');
  }
  public set conditionLanguage(value: string) {
    this._conditionLanguage = value;
  }
  public resetConditionLanguage() {
    this._conditionLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionLanguageInput() {
    return this._conditionLanguage;
  }

  // is_body_inspection_enabled - computed: true, optional: true, required: false
  private _isBodyInspectionEnabled?: boolean | cdktf.IResolvable; 
  public get isBodyInspectionEnabled() {
    return this.getBooleanAttribute('is_body_inspection_enabled');
  }
  public set isBodyInspectionEnabled(value: boolean | cdktf.IResolvable) {
    this._isBodyInspectionEnabled = value;
  }
  public resetIsBodyInspectionEnabled() {
    this._isBodyInspectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBodyInspectionEnabledInput() {
    return this._isBodyInspectionEnabled;
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

  // protection_capabilities - computed: false, optional: false, required: true
  private _protectionCapabilities = new WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList(this, "protection_capabilities", false);
  public get protectionCapabilities() {
    return this._protectionCapabilities;
  }
  public putProtectionCapabilities(value: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities[] | cdktf.IResolvable) {
    this._protectionCapabilities.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionCapabilitiesInput() {
    return this._protectionCapabilities.internalValue;
  }

  // protection_capability_settings - computed: false, optional: true, required: false
  private _protectionCapabilitySettings = new WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference(this, "protection_capability_settings");
  public get protectionCapabilitySettings() {
    return this._protectionCapabilitySettings;
  }
  public putProtectionCapabilitySettings(value: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings) {
    this._protectionCapabilitySettings.internalValue = value;
  }
  public resetProtectionCapabilitySettings() {
    this._protectionCapabilitySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionCapabilitySettingsInput() {
    return this._protectionCapabilitySettings.internalValue;
  }
}

export class WafWebAppFirewallPolicyResponseProtectionRulesList extends cdktf.ComplexList {
  public internalValue? : WafWebAppFirewallPolicyResponseProtectionRules[] | cdktf.IResolvable

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
  public get(index: number): WafWebAppFirewallPolicyResponseProtectionRulesOutputReference {
    return new WafWebAppFirewallPolicyResponseProtectionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafWebAppFirewallPolicyResponseProtection {
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#rules WafWebAppFirewallPolicy#rules}
  */
  readonly rules?: WafWebAppFirewallPolicyResponseProtectionRules[] | cdktf.IResolvable;
}

export function wafWebAppFirewallPolicyResponseProtectionToTerraform(struct?: WafWebAppFirewallPolicyResponseProtectionOutputReference | WafWebAppFirewallPolicyResponseProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(wafWebAppFirewallPolicyResponseProtectionRulesToTerraform, true)(struct!.rules),
  }
}


export function wafWebAppFirewallPolicyResponseProtectionToHclTerraform(struct?: WafWebAppFirewallPolicyResponseProtectionOutputReference | WafWebAppFirewallPolicyResponseProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(wafWebAppFirewallPolicyResponseProtectionRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "WafWebAppFirewallPolicyResponseProtectionRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafWebAppFirewallPolicyResponseProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafWebAppFirewallPolicyResponseProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafWebAppFirewallPolicyResponseProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new WafWebAppFirewallPolicyResponseProtectionRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: WafWebAppFirewallPolicyResponseProtectionRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface WafWebAppFirewallPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#create WafWebAppFirewallPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#delete WafWebAppFirewallPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#update WafWebAppFirewallPolicy#update}
  */
  readonly update?: string;
}

export function wafWebAppFirewallPolicyTimeoutsToTerraform(struct?: WafWebAppFirewallPolicyTimeouts | cdktf.IResolvable): any {
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


export function wafWebAppFirewallPolicyTimeoutsToHclTerraform(struct?: WafWebAppFirewallPolicyTimeouts | cdktf.IResolvable): any {
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

export class WafWebAppFirewallPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WafWebAppFirewallPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WafWebAppFirewallPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy oci_waf_web_app_firewall_policy}
*/
export class WafWebAppFirewallPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_waf_web_app_firewall_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafWebAppFirewallPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafWebAppFirewallPolicy to import
  * @param importFromId The id of the existing WafWebAppFirewallPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafWebAppFirewallPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_waf_web_app_firewall_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/waf_web_app_firewall_policy oci_waf_web_app_firewall_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafWebAppFirewallPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: WafWebAppFirewallPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_waf_web_app_firewall_policy',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._systemTags = config.systemTags;
    this._actions.internalValue = config.actions;
    this._requestAccessControl.internalValue = config.requestAccessControl;
    this._requestProtection.internalValue = config.requestProtection;
    this._requestRateLimiting.internalValue = config.requestRateLimiting;
    this._responseAccessControl.internalValue = config.responseAccessControl;
    this._responseProtection.internalValue = config.responseProtection;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: true, required: false
  private _systemTags?: { [key: string]: string }; 
  public get systemTags() {
    return this.getStringMapAttribute('system_tags');
  }
  public set systemTags(value: { [key: string]: string }) {
    this._systemTags = value;
  }
  public resetSystemTags() {
    this._systemTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemTagsInput() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new WafWebAppFirewallPolicyActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: WafWebAppFirewallPolicyActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // request_access_control - computed: false, optional: true, required: false
  private _requestAccessControl = new WafWebAppFirewallPolicyRequestAccessControlOutputReference(this, "request_access_control");
  public get requestAccessControl() {
    return this._requestAccessControl;
  }
  public putRequestAccessControl(value: WafWebAppFirewallPolicyRequestAccessControl) {
    this._requestAccessControl.internalValue = value;
  }
  public resetRequestAccessControl() {
    this._requestAccessControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestAccessControlInput() {
    return this._requestAccessControl.internalValue;
  }

  // request_protection - computed: false, optional: true, required: false
  private _requestProtection = new WafWebAppFirewallPolicyRequestProtectionOutputReference(this, "request_protection");
  public get requestProtection() {
    return this._requestProtection;
  }
  public putRequestProtection(value: WafWebAppFirewallPolicyRequestProtection) {
    this._requestProtection.internalValue = value;
  }
  public resetRequestProtection() {
    this._requestProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestProtectionInput() {
    return this._requestProtection.internalValue;
  }

  // request_rate_limiting - computed: false, optional: true, required: false
  private _requestRateLimiting = new WafWebAppFirewallPolicyRequestRateLimitingOutputReference(this, "request_rate_limiting");
  public get requestRateLimiting() {
    return this._requestRateLimiting;
  }
  public putRequestRateLimiting(value: WafWebAppFirewallPolicyRequestRateLimiting) {
    this._requestRateLimiting.internalValue = value;
  }
  public resetRequestRateLimiting() {
    this._requestRateLimiting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestRateLimitingInput() {
    return this._requestRateLimiting.internalValue;
  }

  // response_access_control - computed: false, optional: true, required: false
  private _responseAccessControl = new WafWebAppFirewallPolicyResponseAccessControlOutputReference(this, "response_access_control");
  public get responseAccessControl() {
    return this._responseAccessControl;
  }
  public putResponseAccessControl(value: WafWebAppFirewallPolicyResponseAccessControl) {
    this._responseAccessControl.internalValue = value;
  }
  public resetResponseAccessControl() {
    this._responseAccessControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseAccessControlInput() {
    return this._responseAccessControl.internalValue;
  }

  // response_protection - computed: false, optional: true, required: false
  private _responseProtection = new WafWebAppFirewallPolicyResponseProtectionOutputReference(this, "response_protection");
  public get responseProtection() {
    return this._responseProtection;
  }
  public putResponseProtection(value: WafWebAppFirewallPolicyResponseProtection) {
    this._responseProtection.internalValue = value;
  }
  public resetResponseProtection() {
    this._responseProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseProtectionInput() {
    return this._responseProtection.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WafWebAppFirewallPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WafWebAppFirewallPolicyTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      system_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._systemTags),
      actions: cdktf.listMapper(wafWebAppFirewallPolicyActionsToTerraform, true)(this._actions.internalValue),
      request_access_control: wafWebAppFirewallPolicyRequestAccessControlToTerraform(this._requestAccessControl.internalValue),
      request_protection: wafWebAppFirewallPolicyRequestProtectionToTerraform(this._requestProtection.internalValue),
      request_rate_limiting: wafWebAppFirewallPolicyRequestRateLimitingToTerraform(this._requestRateLimiting.internalValue),
      response_access_control: wafWebAppFirewallPolicyResponseAccessControlToTerraform(this._responseAccessControl.internalValue),
      response_protection: wafWebAppFirewallPolicyResponseProtectionToTerraform(this._responseProtection.internalValue),
      timeouts: wafWebAppFirewallPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._systemTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      actions: {
        value: cdktf.listMapperHcl(wafWebAppFirewallPolicyActionsToHclTerraform, true)(this._actions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafWebAppFirewallPolicyActionsList",
      },
      request_access_control: {
        value: wafWebAppFirewallPolicyRequestAccessControlToHclTerraform(this._requestAccessControl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafWebAppFirewallPolicyRequestAccessControlList",
      },
      request_protection: {
        value: wafWebAppFirewallPolicyRequestProtectionToHclTerraform(this._requestProtection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafWebAppFirewallPolicyRequestProtectionList",
      },
      request_rate_limiting: {
        value: wafWebAppFirewallPolicyRequestRateLimitingToHclTerraform(this._requestRateLimiting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafWebAppFirewallPolicyRequestRateLimitingList",
      },
      response_access_control: {
        value: wafWebAppFirewallPolicyResponseAccessControlToHclTerraform(this._responseAccessControl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafWebAppFirewallPolicyResponseAccessControlList",
      },
      response_protection: {
        value: wafWebAppFirewallPolicyResponseProtectionToHclTerraform(this._responseProtection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafWebAppFirewallPolicyResponseProtectionList",
      },
      timeouts: {
        value: wafWebAppFirewallPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WafWebAppFirewallPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
