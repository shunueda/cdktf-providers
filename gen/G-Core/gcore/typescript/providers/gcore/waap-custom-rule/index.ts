// https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WaapCustomRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description assigned to the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#description WaapCustomRule#description}
  */
  readonly description?: string;
  /**
  * The WAAP domain ID for which the Custom Rule is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#domain_id WaapCustomRule#domain_id}
  */
  readonly domainId: number;
  /**
  * Whether the rule is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#enabled WaapCustomRule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#id WaapCustomRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name assigned to the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#name WaapCustomRule#name}
  */
  readonly name: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#action WaapCustomRule#action}
  */
  readonly action: WaapCustomRuleAction;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#conditions WaapCustomRule#conditions}
  */
  readonly conditions: WaapCustomRuleConditions;
}
export interface WaapCustomRuleActionBlock {
  /**
  * How long a rule's block action will apply to subsequent requests. Can be specified in seconds or by using a numeral followed by 's', 'm', 'h', or 'd' to represent time format (seconds, minutes, hours, or days). Example: 12h. Must match the pattern ^[0-9]*[smhd]?$
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#action_duration WaapCustomRule#action_duration}
  */
  readonly actionDuration?: string;
  /**
  * A custom HTTP status code that the WAAP returns if a rule blocks a request. It must be one of these values {403, 405, 418, 429}. Default is 403.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#status_code WaapCustomRule#status_code}
  */
  readonly statusCode?: number;
}

export function waapCustomRuleActionBlockToTerraform(struct?: WaapCustomRuleActionBlockOutputReference | WaapCustomRuleActionBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_duration: cdktf.stringToTerraform(struct!.actionDuration),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
  }
}


export function waapCustomRuleActionBlockToHclTerraform(struct?: WaapCustomRuleActionBlockOutputReference | WaapCustomRuleActionBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_duration: {
      value: cdktf.stringToHclTerraform(struct!.actionDuration),
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

export class WaapCustomRuleActionBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaapCustomRuleActionBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionDuration = this._actionDuration;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapCustomRuleActionBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionDuration = undefined;
      this._statusCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionDuration = value.actionDuration;
      this._statusCode = value.statusCode;
    }
  }

  // action_duration - computed: false, optional: true, required: false
  private _actionDuration?: string; 
  public get actionDuration() {
    return this.getStringAttribute('action_duration');
  }
  public set actionDuration(value: string) {
    this._actionDuration = value;
  }
  public resetActionDuration() {
    this._actionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionDurationInput() {
    return this._actionDuration;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: number; 
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
  public set statusCode(value: number) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}
export interface WaapCustomRuleActionTag {
  /**
  * The list of user defined tags to tag the request with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#tags WaapCustomRule#tags}
  */
  readonly tags: string[];
}

export function waapCustomRuleActionTagToTerraform(struct?: WaapCustomRuleActionTagOutputReference | WaapCustomRuleActionTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function waapCustomRuleActionTagToHclTerraform(struct?: WaapCustomRuleActionTagOutputReference | WaapCustomRuleActionTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapCustomRuleActionTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaapCustomRuleActionTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapCustomRuleActionTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tags = value.tags;
    }
  }

  // tags - computed: false, optional: false, required: true
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface WaapCustomRuleAction {
  /**
  * The WAAP allows the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#allow WaapCustomRule#allow}
  */
  readonly allow?: boolean | cdktf.IResolvable;
  /**
  * The WAAP requires the user to solve a CAPTCHA challenge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#captcha WaapCustomRule#captcha}
  */
  readonly captcha?: boolean | cdktf.IResolvable;
  /**
  * The WAAP performs automatic browser validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#handshake WaapCustomRule#handshake}
  */
  readonly handshake?: boolean | cdktf.IResolvable;
  /**
  * The WAAP monitors the request but took no action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#monitor WaapCustomRule#monitor}
  */
  readonly monitor?: boolean | cdktf.IResolvable;
  /**
  * block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#block WaapCustomRule#block}
  */
  readonly block?: WaapCustomRuleActionBlock;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#tag WaapCustomRule#tag}
  */
  readonly tag?: WaapCustomRuleActionTag;
}

export function waapCustomRuleActionToTerraform(struct?: WaapCustomRuleActionOutputReference | WaapCustomRuleAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.booleanToTerraform(struct!.allow),
    captcha: cdktf.booleanToTerraform(struct!.captcha),
    handshake: cdktf.booleanToTerraform(struct!.handshake),
    monitor: cdktf.booleanToTerraform(struct!.monitor),
    block: waapCustomRuleActionBlockToTerraform(struct!.block),
    tag: waapCustomRuleActionTagToTerraform(struct!.tag),
  }
}


export function waapCustomRuleActionToHclTerraform(struct?: WaapCustomRuleActionOutputReference | WaapCustomRuleAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.booleanToHclTerraform(struct!.allow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    captcha: {
      value: cdktf.booleanToHclTerraform(struct!.captcha),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    handshake: {
      value: cdktf.booleanToHclTerraform(struct!.handshake),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitor: {
      value: cdktf.booleanToHclTerraform(struct!.monitor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block: {
      value: waapCustomRuleActionBlockToHclTerraform(struct!.block),
      isBlock: true,
      type: "list",
      storageClassType: "WaapCustomRuleActionBlockList",
    },
    tag: {
      value: waapCustomRuleActionTagToHclTerraform(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "WaapCustomRuleActionTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapCustomRuleActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaapCustomRuleAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._captcha !== undefined) {
      hasAnyValues = true;
      internalValueResult.captcha = this._captcha;
    }
    if (this._handshake !== undefined) {
      hasAnyValues = true;
      internalValueResult.handshake = this._handshake;
    }
    if (this._monitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor;
    }
    if (this._block?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapCustomRuleAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allow = undefined;
      this._captcha = undefined;
      this._handshake = undefined;
      this._monitor = undefined;
      this._block.internalValue = undefined;
      this._tag.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allow = value.allow;
      this._captcha = value.captcha;
      this._handshake = value.handshake;
      this._monitor = value.monitor;
      this._block.internalValue = value.block;
      this._tag.internalValue = value.tag;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: boolean | cdktf.IResolvable; 
  public get allow() {
    return this.getBooleanAttribute('allow');
  }
  public set allow(value: boolean | cdktf.IResolvable) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // captcha - computed: false, optional: true, required: false
  private _captcha?: boolean | cdktf.IResolvable; 
  public get captcha() {
    return this.getBooleanAttribute('captcha');
  }
  public set captcha(value: boolean | cdktf.IResolvable) {
    this._captcha = value;
  }
  public resetCaptcha() {
    this._captcha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaInput() {
    return this._captcha;
  }

  // handshake - computed: false, optional: true, required: false
  private _handshake?: boolean | cdktf.IResolvable; 
  public get handshake() {
    return this.getBooleanAttribute('handshake');
  }
  public set handshake(value: boolean | cdktf.IResolvable) {
    this._handshake = value;
  }
  public resetHandshake() {
    this._handshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handshakeInput() {
    return this._handshake;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor?: boolean | cdktf.IResolvable; 
  public get monitor() {
    return this.getBooleanAttribute('monitor');
  }
  public set monitor(value: boolean | cdktf.IResolvable) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
  }

  // block - computed: false, optional: true, required: false
  private _block = new WaapCustomRuleActionBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }
  public putBlock(value: WaapCustomRuleActionBlock) {
    this._block.internalValue = value;
  }
  public resetBlock() {
    this._block.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new WaapCustomRuleActionTagOutputReference(this, "tag");
  public get tag() {
    return this._tag;
  }
  public putTag(value: WaapCustomRuleActionTag) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}
export interface WaapCustomRuleConditionsContentType {
  /**
  * The list of content types to match against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#content_type WaapCustomRule#content_type}
  */
  readonly contentType: string[];
  /**
  * Whether or not to apply a boolean NOT operation to the rule's condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#negation WaapCustomRule#negation}
  */
  readonly negation?: boolean | cdktf.IResolvable;
}

export function waapCustomRuleConditionsContentTypeToTerraform(struct?: WaapCustomRuleConditionsContentType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contentType),
    negation: cdktf.booleanToTerraform(struct!.negation),
  }
}


export function waapCustomRuleConditionsContentTypeToHclTerraform(struct?: WaapCustomRuleConditionsContentType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.contentType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    negation: {
      value: cdktf.booleanToHclTerraform(struct!.negation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapCustomRuleConditionsContentTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaapCustomRuleConditionsContentType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._negation !== undefined) {
      hasAnyValues = true;
      internalValueResult.negation = this._negation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapCustomRuleConditionsContentType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._negation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._negation = value.negation;
    }
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string[]; 
  public get contentType() {
    return cdktf.Fn.tolist(this.getListAttribute('content_type'));
  }
  public set contentType(value: string[]) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // negation - computed: false, optional: true, required: false
  private _negation?: boolean | cdktf.IResolvable; 
  public get negation() {
    return this.getBooleanAttribute('negation');
  }
  public set negation(value: boolean | cdktf.IResolvable) {
    this._negation = value;
  }
  public resetNegation() {
    this._negation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negationInput() {
    return this._negation;
  }
}

export class WaapCustomRuleConditionsContentTypeList extends cdktf.ComplexList {
  public internalValue? : WaapCustomRuleConditionsContentType[] | cdktf.IResolvable

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
  public get(index: number): WaapCustomRuleConditionsContentTypeOutputReference {
    return new WaapCustomRuleConditionsContentTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaapCustomRuleConditionsCountry {
  /**
  * A list of ISO 3166-1 alpha-2 formatted strings representing the countries to match against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#country_code WaapCustomRule#country_code}
  */
  readonly countryCode: string[];
  /**
  * Whether or not to apply a boolean NOT operation to the rule's condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#negation WaapCustomRule#negation}
  */
  readonly negation?: boolean | cdktf.IResolvable;
}

export function waapCustomRuleConditionsCountryToTerraform(struct?: WaapCustomRuleConditionsCountry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country_code: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.countryCode),
    negation: cdktf.booleanToTerraform(struct!.negation),
  }
}


export function waapCustomRuleConditionsCountryToHclTerraform(struct?: WaapCustomRuleConditionsCountry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    country_code: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.countryCode),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    negation: {
      value: cdktf.booleanToHclTerraform(struct!.negation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapCustomRuleConditionsCountryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaapCustomRuleConditionsCountry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._negation !== undefined) {
      hasAnyValues = true;
      internalValueResult.negation = this._negation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapCustomRuleConditionsCountry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countryCode = undefined;
      this._negation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countryCode = value.countryCode;
      this._negation = value.negation;
    }
  }

  // country_code - computed: false, optional: false, required: true
  private _countryCode?: string[]; 
  public get countryCode() {
    return cdktf.Fn.tolist(this.getListAttribute('country_code'));
  }
  public set countryCode(value: string[]) {
    this._countryCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // negation - computed: false, optional: true, required: false
  private _negation?: boolean | cdktf.IResolvable; 
  public get negation() {
    return this.getBooleanAttribute('negation');
  }
  public set negation(value: boolean | cdktf.IResolvable) {
    this._negation = value;
  }
  public resetNegation() {
    this._negation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negationInput() {
    return this._negation;
  }
}

export class WaapCustomRuleConditionsCountryList extends cdktf.ComplexList {
  public internalValue? : WaapCustomRuleConditionsCountry[] | cdktf.IResolvable

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
  public get(index: number): WaapCustomRuleConditionsCountryOutputReference {
    return new WaapCustomRuleConditionsCountryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaapCustomRuleConditionsFileExtension {
  /**
  * The list of file extensions to match against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#file_extension WaapCustomRule#file_extension}
  */
  readonly fileExtension: string[];
  /**
  * Whether or not to apply a boolean NOT operation to the rule's condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#negation WaapCustomRule#negation}
  */
  readonly negation?: boolean | cdktf.IResolvable;
}

export function waapCustomRuleConditionsFileExtensionToTerraform(struct?: WaapCustomRuleConditionsFileExtension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_extension: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileExtension),
    negation: cdktf.booleanToTerraform(struct!.negation),
  }
}


export function waapCustomRuleConditionsFileExtensionToHclTerraform(struct?: WaapCustomRuleConditionsFileExtension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_extension: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileExtension),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    negation: {
      value: cdktf.booleanToHclTerraform(struct!.negation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapCustomRuleConditionsFileExtensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaapCustomRuleConditionsFileExtension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtension = this._fileExtension;
    }
    if (this._negation !== undefined) {
      hasAnyValues = true;
      internalValueResult.negation = this._negation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapCustomRuleConditionsFileExtension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileExtension = undefined;
      this._negation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileExtension = value.fileExtension;
      this._negation = value.negation;
    }
  }

  // file_extension - computed: false, optional: false, required: true
  private _fileExtension?: string[]; 
  public get fileExtension() {
    return cdktf.Fn.tolist(this.getListAttribute('file_extension'));
  }
  public set fileExtension(value: string[]) {
    this._fileExtension = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionInput() {
    return this._fileExtension;
  }

  // negation - computed: false, optional: true, required: false
  private _negation?: boolean | cdktf.IResolvable; 
  public get negation() {
    return this.getBooleanAttribute('negation');
  }
  public set negation(value: boolean | cdktf.IResolvable) {
    this._negation = value;
  }
  public resetNegation() {
    this._negation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negationInput() {
    return this._negation;
  }
}

export class WaapCustomRuleConditionsFileExtensionList extends cdktf.ComplexList {
  public internalValue? : WaapCustomRuleConditionsFileExtension[] | cdktf.IResolvable

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
  public get(index: number): WaapCustomRuleConditionsFileExtensionOutputReference {
    return new WaapCustomRuleConditionsFileExtensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaapCustomRuleConditionsHeader {
  /**
  * The request header name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#header WaapCustomRule#header}
  */
  readonly header: string;
  /**
  * The type of matching condition. Valid values are 'Exact', 'Contains'. Default is 'Contains'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#match_type WaapCustomRule#match_type}
  */
  readonly matchType?: string;
  /**
  * Whether or not to apply a boolean NOT operation to the rule's condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#negation WaapCustomRule#negation}
  */
  readonly negation?: boolean | cdktf.IResolvable;
  /**
  * The request header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#value WaapCustomRule#value}
  */
  readonly value: string;
}

export function waapCustomRuleConditionsHeaderToTerraform(struct?: WaapCustomRuleConditionsHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cdktf.stringToTerraform(struct!.header),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    negation: cdktf.booleanToTerraform(struct!.negation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function waapCustomRuleConditionsHeaderToHclTerraform(struct?: WaapCustomRuleConditionsHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negation: {
      value: cdktf.booleanToHclTerraform(struct!.negation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class WaapCustomRuleConditionsHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaapCustomRuleConditionsHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._negation !== undefined) {
      hasAnyValues = true;
      internalValueResult.negation = this._negation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapCustomRuleConditionsHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header = undefined;
      this._matchType = undefined;
      this._negation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header = value.header;
      this._matchType = value.matchType;
      this._negation = value.negation;
      this._value = value.value;
    }
  }

  // header - computed: false, optional: false, required: true
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // negation - computed: false, optional: true, required: false
  private _negation?: boolean | cdktf.IResolvable; 
  public get negation() {
    return this.getBooleanAttribute('negation');
  }
  public set negation(value: boolean | cdktf.IResolvable) {
    this._negation = value;
  }
  public resetNegation() {
    this._negation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negationInput() {
    return this._negation;
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

export class WaapCustomRuleConditionsHeaderList extends cdktf.ComplexList {
  public internalValue? : WaapCustomRuleConditionsHeader[] | cdktf.IResolvable

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
  public get(index: number): WaapCustomRuleConditionsHeaderOutputReference {
    return new WaapCustomRuleConditionsHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaapCustomRuleConditionsHeaderExists {
  /**
  * The request header name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#header WaapCustomRule#header}
  */
  readonly header: string;
  /**
  * Whether or not to apply a boolean NOT operation to the rule's condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#negation WaapCustomRule#negation}
  */
  readonly negation?: boolean | cdktf.IResolvable;
}

export function waapCustomRuleConditionsHeaderExistsToTerraform(struct?: WaapCustomRuleConditionsHeaderExists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cdktf.stringToTerraform(struct!.header),
    negation: cdktf.booleanToTerraform(struct!.negation),
  }
}


export function waapCustomRuleConditionsHeaderExistsToHclTerraform(struct?: WaapCustomRuleConditionsHeaderExists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negation: {
      value: cdktf.booleanToHclTerraform(struct!.negation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapCustomRuleConditionsHeaderExistsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaapCustomRuleConditionsHeaderExists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._negation !== undefined) {
      hasAnyValues = true;
      internalValueResult.negation = this._negation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapCustomRuleConditionsHeaderExists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header = undefined;
      this._negation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header = value.header;
      this._negation = value.negation;
    }
  }

  // header - computed: false, optional: false, required: true
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // negation - computed: false, optional: true, required: false
  private _negation?: boolean | cdktf.IResolvable; 
  public get negation() {
    return this.getBooleanAttribute('negation');
  }
  public set negation(value: boolean | cdktf.IResolvable) {
    this._negation = value;
  }
  public resetNegation() {
    this._negation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negationInput() {
    return this._negation;
  }
}

export class WaapCustomRuleConditionsHeaderExistsList extends cdktf.ComplexList {
  public internalValue? : WaapCustomRuleConditionsHeaderExists[] | cdktf.IResolvable

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
  public get(index: number): WaapCustomRuleConditionsHeaderExistsOutputReference {
    return new WaapCustomRuleConditionsHeaderExistsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaapCustomRuleConditionsHttpMethod {
  /**
  * The HTTP method to match against. Valid values are 'CONNECT', 'DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT', and 'TRACE'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#http_method WaapCustomRule#http_method}
  */
  readonly httpMethod: string;
  /**
  * Whether or not to apply a boolean NOT operation to the rule's condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#negation WaapCustomRule#negation}
  */
  readonly negation?: boolean | cdktf.IResolvable;
}

export function waapCustomRuleConditionsHttpMethodToTerraform(struct?: WaapCustomRuleConditionsHttpMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    negation: cdktf.booleanToTerraform(struct!.negation),
  }
}


export function waapCustomRuleConditionsHttpMethodToHclTerraform(struct?: WaapCustomRuleConditionsHttpMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negation: {
      value: cdktf.booleanToHclTerraform(struct!.negation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapCustomRuleConditionsHttpMethodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaapCustomRuleConditionsHttpMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._negation !== undefined) {
      hasAnyValues = true;
      internalValueResult.negation = this._negation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapCustomRuleConditionsHttpMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpMethod = undefined;
      this._negation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpMethod = value.httpMethod;
      this._negation = value.negation;
    }
  }

  // http_method - computed: false, optional: false, required: true
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // negation - computed: false, optional: true, required: false
  private _negation?: boolean | cdktf.IResolvable; 
  public get negation() {
    return this.getBooleanAttribute('negation');
  }
  public set negation(value: boolean | cdktf.IResolvable) {
    this._negation = value;
  }
  public resetNegation() {
    this._negation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negationInput() {
    return this._negation;
  }
}

export class WaapCustomRuleConditionsHttpMethodList extends cdktf.ComplexList {
  public internalValue? : WaapCustomRuleConditionsHttpMethod[] | cdktf.IResolvable

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
  public get(index: number): WaapCustomRuleConditionsHttpMethodOutputReference {
    return new WaapCustomRuleConditionsHttpMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaapCustomRuleConditionsIp {
  /**
  * A single IPv4 or IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#ip_address WaapCustomRule#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Whether or not to apply a boolean NOT operation to the rule's condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#negation WaapCustomRule#negation}
  */
  readonly negation?: boolean | cdktf.IResolvable;
}

export function waapCustomRuleConditionsIpToTerraform(struct?: WaapCustomRuleConditionsIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    negation: cdktf.booleanToTerraform(struct!.negation),
  }
}


export function waapCustomRuleConditionsIpToHclTerraform(struct?: WaapCustomRuleConditionsIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negation: {
      value: cdktf.booleanToHclTerraform(struct!.negation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapCustomRuleConditionsIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaapCustomRuleConditionsIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._negation !== undefined) {
      hasAnyValues = true;
      internalValueResult.negation = this._negation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapCustomRuleConditionsIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._negation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._negation = value.negation;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // negation - computed: false, optional: true, required: false
  private _negation?: boolean | cdktf.IResolvable; 
  public get negation() {
    return this.getBooleanAttribute('negation');
  }
  public set negation(value: boolean | cdktf.IResolvable) {
    this._negation = value;
  }
  public resetNegation() {
    this._negation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negationInput() {
    return this._negation;
  }
}

export class WaapCustomRuleConditionsIpList extends cdktf.ComplexList {
  public internalValue? : WaapCustomRuleConditionsIp[] | cdktf.IResolvable

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
  public get(index: number): WaapCustomRuleConditionsIpOutputReference {
    return new WaapCustomRuleConditionsIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaapCustomRuleConditionsIpRange {
  /**
  * The lower bound IPv4 or IPv6 address to match against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#lower_bound WaapCustomRule#lower_bound}
  */
  readonly lowerBound: string;
  /**
  * Whether or not to apply a boolean NOT operation to the rule's condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#negation WaapCustomRule#negation}
  */
  readonly negation?: boolean | cdktf.IResolvable;
  /**
  * The upper bound IPv4 or IPv6 address to match against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#upper_bound WaapCustomRule#upper_bound}
  */
  readonly upperBound: string;
}

export function waapCustomRuleConditionsIpRangeToTerraform(struct?: WaapCustomRuleConditionsIpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lower_bound: cdktf.stringToTerraform(struct!.lowerBound),
    negation: cdktf.booleanToTerraform(struct!.negation),
    upper_bound: cdktf.stringToTerraform(struct!.upperBound),
  }
}


export function waapCustomRuleConditionsIpRangeToHclTerraform(struct?: WaapCustomRuleConditionsIpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lower_bound: {
      value: cdktf.stringToHclTerraform(struct!.lowerBound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negation: {
      value: cdktf.booleanToHclTerraform(struct!.negation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    upper_bound: {
      value: cdktf.stringToHclTerraform(struct!.upperBound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapCustomRuleConditionsIpRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaapCustomRuleConditionsIpRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lowerBound !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerBound = this._lowerBound;
    }
    if (this._negation !== undefined) {
      hasAnyValues = true;
      internalValueResult.negation = this._negation;
    }
    if (this._upperBound !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperBound = this._upperBound;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapCustomRuleConditionsIpRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lowerBound = undefined;
      this._negation = undefined;
      this._upperBound = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lowerBound = value.lowerBound;
      this._negation = value.negation;
      this._upperBound = value.upperBound;
    }
  }

  // lower_bound - computed: false, optional: false, required: true
  private _lowerBound?: string; 
  public get lowerBound() {
    return this.getStringAttribute('lower_bound');
  }
  public set lowerBound(value: string) {
    this._lowerBound = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerBoundInput() {
    return this._lowerBound;
  }

  // negation - computed: false, optional: true, required: false
  private _negation?: boolean | cdktf.IResolvable; 
  public get negation() {
    return this.getBooleanAttribute('negation');
  }
  public set negation(value: boolean | cdktf.IResolvable) {
    this._negation = value;
  }
  public resetNegation() {
    this._negation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negationInput() {
    return this._negation;
  }

  // upper_bound - computed: false, optional: false, required: true
  private _upperBound?: string; 
  public get upperBound() {
    return this.getStringAttribute('upper_bound');
  }
  public set upperBound(value: string) {
    this._upperBound = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upperBoundInput() {
    return this._upperBound;
  }
}

export class WaapCustomRuleConditionsIpRangeList extends cdktf.ComplexList {
  public internalValue? : WaapCustomRuleConditionsIpRange[] | cdktf.IResolvable

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
  public get(index: number): WaapCustomRuleConditionsIpRangeOutputReference {
    return new WaapCustomRuleConditionsIpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaapCustomRuleConditionsOrganization {
  /**
  * Whether or not to apply a boolean NOT operation to the rule's condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#negation WaapCustomRule#negation}
  */
  readonly negation?: boolean | cdktf.IResolvable;
  /**
  * The organization to match against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#organization WaapCustomRule#organization}
  */
  readonly organization: string;
}

export function waapCustomRuleConditionsOrganizationToTerraform(struct?: WaapCustomRuleConditionsOrganization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negation: cdktf.booleanToTerraform(struct!.negation),
    organization: cdktf.stringToTerraform(struct!.organization),
  }
}


export function waapCustomRuleConditionsOrganizationToHclTerraform(struct?: WaapCustomRuleConditionsOrganization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negation: {
      value: cdktf.booleanToHclTerraform(struct!.negation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapCustomRuleConditionsOrganizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaapCustomRuleConditionsOrganization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negation !== undefined) {
      hasAnyValues = true;
      internalValueResult.negation = this._negation;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapCustomRuleConditionsOrganization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negation = undefined;
      this._organization = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negation = value.negation;
      this._organization = value.organization;
    }
  }

  // negation - computed: false, optional: true, required: false
  private _negation?: boolean | cdktf.IResolvable; 
  public get negation() {
    return this.getBooleanAttribute('negation');
  }
  public set negation(value: boolean | cdktf.IResolvable) {
    this._negation = value;
  }
  public resetNegation() {
    this._negation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negationInput() {
    return this._negation;
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }
}

export class WaapCustomRuleConditionsOrganizationList extends cdktf.ComplexList {
  public internalValue? : WaapCustomRuleConditionsOrganization[] | cdktf.IResolvable

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
  public get(index: number): WaapCustomRuleConditionsOrganizationOutputReference {
    return new WaapCustomRuleConditionsOrganizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaapCustomRuleConditionsOwnerTypes {
  /**
  * Whether or not to apply a boolean NOT operation to the rule's condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#negation WaapCustomRule#negation}
  */
  readonly negation?: boolean | cdktf.IResolvable;
  /**
  * Match the type of organization that owns the IP address making an incoming request. Valid values are 'COMMERCIAL', 'EDUCATIONAL', 'GOVERNMENT', 'HOSTING_SERVICES', 'ISP', 'MOBILE_NETWORK', 'NETWORK', and 'RESERVED'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#owner_types WaapCustomRule#owner_types}
  */
  readonly ownerTypes: string[];
}

export function waapCustomRuleConditionsOwnerTypesToTerraform(struct?: WaapCustomRuleConditionsOwnerTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negation: cdktf.booleanToTerraform(struct!.negation),
    owner_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ownerTypes),
  }
}


export function waapCustomRuleConditionsOwnerTypesToHclTerraform(struct?: WaapCustomRuleConditionsOwnerTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negation: {
      value: cdktf.booleanToHclTerraform(struct!.negation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    owner_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ownerTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapCustomRuleConditionsOwnerTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaapCustomRuleConditionsOwnerTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negation !== undefined) {
      hasAnyValues = true;
      internalValueResult.negation = this._negation;
    }
    if (this._ownerTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerTypes = this._ownerTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapCustomRuleConditionsOwnerTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negation = undefined;
      this._ownerTypes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negation = value.negation;
      this._ownerTypes = value.ownerTypes;
    }
  }

  // negation - computed: false, optional: true, required: false
  private _negation?: boolean | cdktf.IResolvable; 
  public get negation() {
    return this.getBooleanAttribute('negation');
  }
  public set negation(value: boolean | cdktf.IResolvable) {
    this._negation = value;
  }
  public resetNegation() {
    this._negation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negationInput() {
    return this._negation;
  }

  // owner_types - computed: false, optional: false, required: true
  private _ownerTypes?: string[]; 
  public get ownerTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('owner_types'));
  }
  public set ownerTypes(value: string[]) {
    this._ownerTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerTypesInput() {
    return this._ownerTypes;
  }
}

export class WaapCustomRuleConditionsOwnerTypesList extends cdktf.ComplexList {
  public internalValue? : WaapCustomRuleConditionsOwnerTypes[] | cdktf.IResolvable

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
  public get(index: number): WaapCustomRuleConditionsOwnerTypesOutputReference {
    return new WaapCustomRuleConditionsOwnerTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaapCustomRuleConditionsRequestRate {
  /**
  * Possible HTTP request methods that can trigger a request rate condition. Valid values are 'CONNECT', 'DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT', and 'TRACE'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#http_methods WaapCustomRule#http_methods}
  */
  readonly httpMethods?: string[];
  /**
  * A list of source IPs that can trigger a request rate condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#ips WaapCustomRule#ips}
  */
  readonly ips?: string[];
  /**
  * A regular expression matching the URL path of the incoming request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#path_pattern WaapCustomRule#path_pattern}
  */
  readonly pathPattern: string;
  /**
  * The number of incoming requests over the given time that can trigger a request rate condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#requests WaapCustomRule#requests}
  */
  readonly requests: number;
  /**
  * The number of seconds that the WAAP measures incoming requests over before triggering a request rate condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#time WaapCustomRule#time}
  */
  readonly time: number;
  /**
  * A user-defined tag that can be included in incoming requests and used to trigger a request rate condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#user_defined_tag WaapCustomRule#user_defined_tag}
  */
  readonly userDefinedTag?: string;
}

export function waapCustomRuleConditionsRequestRateToTerraform(struct?: WaapCustomRuleConditionsRequestRate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpMethods),
    ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ips),
    path_pattern: cdktf.stringToTerraform(struct!.pathPattern),
    requests: cdktf.numberToTerraform(struct!.requests),
    time: cdktf.numberToTerraform(struct!.time),
    user_defined_tag: cdktf.stringToTerraform(struct!.userDefinedTag),
  }
}


export function waapCustomRuleConditionsRequestRateToHclTerraform(struct?: WaapCustomRuleConditionsRequestRate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.httpMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ips),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    path_pattern: {
      value: cdktf.stringToHclTerraform(struct!.pathPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requests: {
      value: cdktf.numberToHclTerraform(struct!.requests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktf.numberToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_defined_tag: {
      value: cdktf.stringToHclTerraform(struct!.userDefinedTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapCustomRuleConditionsRequestRateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaapCustomRuleConditionsRequestRate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethods = this._httpMethods;
    }
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    if (this._pathPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPattern = this._pathPattern;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    if (this._userDefinedTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefinedTag = this._userDefinedTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapCustomRuleConditionsRequestRate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpMethods = undefined;
      this._ips = undefined;
      this._pathPattern = undefined;
      this._requests = undefined;
      this._time = undefined;
      this._userDefinedTag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpMethods = value.httpMethods;
      this._ips = value.ips;
      this._pathPattern = value.pathPattern;
      this._requests = value.requests;
      this._time = value.time;
      this._userDefinedTag = value.userDefinedTag;
    }
  }

  // http_methods - computed: false, optional: true, required: false
  private _httpMethods?: string[]; 
  public get httpMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('http_methods'));
  }
  public set httpMethods(value: string[]) {
    this._httpMethods = value;
  }
  public resetHttpMethods() {
    this._httpMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodsInput() {
    return this._httpMethods;
  }

  // ips - computed: false, optional: true, required: false
  private _ips?: string[]; 
  public get ips() {
    return cdktf.Fn.tolist(this.getListAttribute('ips'));
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // path_pattern - computed: false, optional: false, required: true
  private _pathPattern?: string; 
  public get pathPattern() {
    return this.getStringAttribute('path_pattern');
  }
  public set pathPattern(value: string) {
    this._pathPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPatternInput() {
    return this._pathPattern;
  }

  // requests - computed: false, optional: false, required: true
  private _requests?: number; 
  public get requests() {
    return this.getNumberAttribute('requests');
  }
  public set requests(value: number) {
    this._requests = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }

  // time - computed: false, optional: false, required: true
  private _time?: number; 
  public get time() {
    return this.getNumberAttribute('time');
  }
  public set time(value: number) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // user_defined_tag - computed: false, optional: true, required: false
  private _userDefinedTag?: string; 
  public get userDefinedTag() {
    return this.getStringAttribute('user_defined_tag');
  }
  public set userDefinedTag(value: string) {
    this._userDefinedTag = value;
  }
  public resetUserDefinedTag() {
    this._userDefinedTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedTagInput() {
    return this._userDefinedTag;
  }
}

export class WaapCustomRuleConditionsRequestRateList extends cdktf.ComplexList {
  public internalValue? : WaapCustomRuleConditionsRequestRate[] | cdktf.IResolvable

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
  public get(index: number): WaapCustomRuleConditionsRequestRateOutputReference {
    return new WaapCustomRuleConditionsRequestRateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaapCustomRuleConditionsResponseHeader {
  /**
  * The request header name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#header WaapCustomRule#header}
  */
  readonly header: string;
  /**
  * The type of matching condition. Valid values are 'Exact', 'Contains'. Default is 'Contains'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#match_type WaapCustomRule#match_type}
  */
  readonly matchType?: string;
  /**
  * Whether or not to apply a boolean NOT operation to the rule's condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#negation WaapCustomRule#negation}
  */
  readonly negation?: boolean | cdktf.IResolvable;
  /**
  * The request header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#value WaapCustomRule#value}
  */
  readonly value: string;
}

export function waapCustomRuleConditionsResponseHeaderToTerraform(struct?: WaapCustomRuleConditionsResponseHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cdktf.stringToTerraform(struct!.header),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    negation: cdktf.booleanToTerraform(struct!.negation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function waapCustomRuleConditionsResponseHeaderToHclTerraform(struct?: WaapCustomRuleConditionsResponseHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negation: {
      value: cdktf.booleanToHclTerraform(struct!.negation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class WaapCustomRuleConditionsResponseHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaapCustomRuleConditionsResponseHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._negation !== undefined) {
      hasAnyValues = true;
      internalValueResult.negation = this._negation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapCustomRuleConditionsResponseHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header = undefined;
      this._matchType = undefined;
      this._negation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header = value.header;
      this._matchType = value.matchType;
      this._negation = value.negation;
      this._value = value.value;
    }
  }

  // header - computed: false, optional: false, required: true
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // negation - computed: false, optional: true, required: false
  private _negation?: boolean | cdktf.IResolvable; 
  public get negation() {
    return this.getBooleanAttribute('negation');
  }
  public set negation(value: boolean | cdktf.IResolvable) {
    this._negation = value;
  }
  public resetNegation() {
    this._negation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negationInput() {
    return this._negation;
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

export class WaapCustomRuleConditionsResponseHeaderList extends cdktf.ComplexList {
  public internalValue? : WaapCustomRuleConditionsResponseHeader[] | cdktf.IResolvable

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
  public get(index: number): WaapCustomRuleConditionsResponseHeaderOutputReference {
    return new WaapCustomRuleConditionsResponseHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaapCustomRuleConditionsResponseHeaderExists {
  /**
  * The request header name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#header WaapCustomRule#header}
  */
  readonly header: string;
  /**
  * Whether or not to apply a boolean NOT operation to the rule's condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#negation WaapCustomRule#negation}
  */
  readonly negation?: boolean | cdktf.IResolvable;
}

export function waapCustomRuleConditionsResponseHeaderExistsToTerraform(struct?: WaapCustomRuleConditionsResponseHeaderExists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cdktf.stringToTerraform(struct!.header),
    negation: cdktf.booleanToTerraform(struct!.negation),
  }
}


export function waapCustomRuleConditionsResponseHeaderExistsToHclTerraform(struct?: WaapCustomRuleConditionsResponseHeaderExists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negation: {
      value: cdktf.booleanToHclTerraform(struct!.negation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapCustomRuleConditionsResponseHeaderExistsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaapCustomRuleConditionsResponseHeaderExists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._negation !== undefined) {
      hasAnyValues = true;
      internalValueResult.negation = this._negation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapCustomRuleConditionsResponseHeaderExists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header = undefined;
      this._negation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header = value.header;
      this._negation = value.negation;
    }
  }

  // header - computed: false, optional: false, required: true
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // negation - computed: false, optional: true, required: false
  private _negation?: boolean | cdktf.IResolvable; 
  public get negation() {
    return this.getBooleanAttribute('negation');
  }
  public set negation(value: boolean | cdktf.IResolvable) {
    this._negation = value;
  }
  public resetNegation() {
    this._negation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negationInput() {
    return this._negation;
  }
}

export class WaapCustomRuleConditionsResponseHeaderExistsList extends cdktf.ComplexList {
  public internalValue? : WaapCustomRuleConditionsResponseHeaderExists[] | cdktf.IResolvable

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
  public get(index: number): WaapCustomRuleConditionsResponseHeaderExistsOutputReference {
    return new WaapCustomRuleConditionsResponseHeaderExistsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaapCustomRuleConditionsSessionRequestCount {
  /**
  * Whether or not to apply a boolean NOT operation to the rule's condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#negation WaapCustomRule#negation}
  */
  readonly negation?: boolean | cdktf.IResolvable;
  /**
  * The number of dynamic requests in the session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#request_count WaapCustomRule#request_count}
  */
  readonly requestCount: number;
}

export function waapCustomRuleConditionsSessionRequestCountToTerraform(struct?: WaapCustomRuleConditionsSessionRequestCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negation: cdktf.booleanToTerraform(struct!.negation),
    request_count: cdktf.numberToTerraform(struct!.requestCount),
  }
}


export function waapCustomRuleConditionsSessionRequestCountToHclTerraform(struct?: WaapCustomRuleConditionsSessionRequestCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negation: {
      value: cdktf.booleanToHclTerraform(struct!.negation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_count: {
      value: cdktf.numberToHclTerraform(struct!.requestCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapCustomRuleConditionsSessionRequestCountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaapCustomRuleConditionsSessionRequestCount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negation !== undefined) {
      hasAnyValues = true;
      internalValueResult.negation = this._negation;
    }
    if (this._requestCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCount = this._requestCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapCustomRuleConditionsSessionRequestCount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negation = undefined;
      this._requestCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negation = value.negation;
      this._requestCount = value.requestCount;
    }
  }

  // negation - computed: false, optional: true, required: false
  private _negation?: boolean | cdktf.IResolvable; 
  public get negation() {
    return this.getBooleanAttribute('negation');
  }
  public set negation(value: boolean | cdktf.IResolvable) {
    this._negation = value;
  }
  public resetNegation() {
    this._negation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negationInput() {
    return this._negation;
  }

  // request_count - computed: false, optional: false, required: true
  private _requestCount?: number; 
  public get requestCount() {
    return this.getNumberAttribute('request_count');
  }
  public set requestCount(value: number) {
    this._requestCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCountInput() {
    return this._requestCount;
  }
}

export class WaapCustomRuleConditionsSessionRequestCountList extends cdktf.ComplexList {
  public internalValue? : WaapCustomRuleConditionsSessionRequestCount[] | cdktf.IResolvable

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
  public get(index: number): WaapCustomRuleConditionsSessionRequestCountOutputReference {
    return new WaapCustomRuleConditionsSessionRequestCountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaapCustomRuleConditionsTags {
  /**
  * Whether or not to apply a boolean NOT operation to the rule's condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#negation WaapCustomRule#negation}
  */
  readonly negation?: boolean | cdktf.IResolvable;
  /**
  * A list of tags to match against the request tags. Tags can be obtained from the API endpoint /v1/tags or you can use the gcore_waap_tag data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#tags WaapCustomRule#tags}
  */
  readonly tags: string[];
}

export function waapCustomRuleConditionsTagsToTerraform(struct?: WaapCustomRuleConditionsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negation: cdktf.booleanToTerraform(struct!.negation),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function waapCustomRuleConditionsTagsToHclTerraform(struct?: WaapCustomRuleConditionsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negation: {
      value: cdktf.booleanToHclTerraform(struct!.negation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapCustomRuleConditionsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaapCustomRuleConditionsTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negation !== undefined) {
      hasAnyValues = true;
      internalValueResult.negation = this._negation;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapCustomRuleConditionsTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negation = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negation = value.negation;
      this._tags = value.tags;
    }
  }

  // negation - computed: false, optional: true, required: false
  private _negation?: boolean | cdktf.IResolvable; 
  public get negation() {
    return this.getBooleanAttribute('negation');
  }
  public set negation(value: boolean | cdktf.IResolvable) {
    this._negation = value;
  }
  public resetNegation() {
    this._negation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negationInput() {
    return this._negation;
  }

  // tags - computed: false, optional: false, required: true
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

export class WaapCustomRuleConditionsTagsList extends cdktf.ComplexList {
  public internalValue? : WaapCustomRuleConditionsTags[] | cdktf.IResolvable

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
  public get(index: number): WaapCustomRuleConditionsTagsOutputReference {
    return new WaapCustomRuleConditionsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaapCustomRuleConditionsUrl {
  /**
  * The type of matching condition. Valid values are 'Exact', 'Contains', and 'Regex'. Default is 'Contains'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#match_type WaapCustomRule#match_type}
  */
  readonly matchType?: string;
  /**
  * Whether or not to apply a boolean NOT operation to the rule's condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#negation WaapCustomRule#negation}
  */
  readonly negation?: boolean | cdktf.IResolvable;
  /**
  * The URL to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#url WaapCustomRule#url}
  */
  readonly url: string;
}

export function waapCustomRuleConditionsUrlToTerraform(struct?: WaapCustomRuleConditionsUrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_type: cdktf.stringToTerraform(struct!.matchType),
    negation: cdktf.booleanToTerraform(struct!.negation),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function waapCustomRuleConditionsUrlToHclTerraform(struct?: WaapCustomRuleConditionsUrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negation: {
      value: cdktf.booleanToHclTerraform(struct!.negation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapCustomRuleConditionsUrlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaapCustomRuleConditionsUrl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._negation !== undefined) {
      hasAnyValues = true;
      internalValueResult.negation = this._negation;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapCustomRuleConditionsUrl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchType = undefined;
      this._negation = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchType = value.matchType;
      this._negation = value.negation;
      this._url = value.url;
    }
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // negation - computed: false, optional: true, required: false
  private _negation?: boolean | cdktf.IResolvable; 
  public get negation() {
    return this.getBooleanAttribute('negation');
  }
  public set negation(value: boolean | cdktf.IResolvable) {
    this._negation = value;
  }
  public resetNegation() {
    this._negation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negationInput() {
    return this._negation;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class WaapCustomRuleConditionsUrlList extends cdktf.ComplexList {
  public internalValue? : WaapCustomRuleConditionsUrl[] | cdktf.IResolvable

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
  public get(index: number): WaapCustomRuleConditionsUrlOutputReference {
    return new WaapCustomRuleConditionsUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaapCustomRuleConditionsUserAgent {
  /**
  * The type of matching condition. Valid values are 'Exact', 'Contains'. Default is 'Contains'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#match_type WaapCustomRule#match_type}
  */
  readonly matchType?: string;
  /**
  * Whether or not to apply a boolean NOT operation to the rule's condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#negation WaapCustomRule#negation}
  */
  readonly negation?: boolean | cdktf.IResolvable;
  /**
  * The user agent value to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#user_agent WaapCustomRule#user_agent}
  */
  readonly userAgent: string;
}

export function waapCustomRuleConditionsUserAgentToTerraform(struct?: WaapCustomRuleConditionsUserAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_type: cdktf.stringToTerraform(struct!.matchType),
    negation: cdktf.booleanToTerraform(struct!.negation),
    user_agent: cdktf.stringToTerraform(struct!.userAgent),
  }
}


export function waapCustomRuleConditionsUserAgentToHclTerraform(struct?: WaapCustomRuleConditionsUserAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negation: {
      value: cdktf.booleanToHclTerraform(struct!.negation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_agent: {
      value: cdktf.stringToHclTerraform(struct!.userAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapCustomRuleConditionsUserAgentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaapCustomRuleConditionsUserAgent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._negation !== undefined) {
      hasAnyValues = true;
      internalValueResult.negation = this._negation;
    }
    if (this._userAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgent = this._userAgent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapCustomRuleConditionsUserAgent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchType = undefined;
      this._negation = undefined;
      this._userAgent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchType = value.matchType;
      this._negation = value.negation;
      this._userAgent = value.userAgent;
    }
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // negation - computed: false, optional: true, required: false
  private _negation?: boolean | cdktf.IResolvable; 
  public get negation() {
    return this.getBooleanAttribute('negation');
  }
  public set negation(value: boolean | cdktf.IResolvable) {
    this._negation = value;
  }
  public resetNegation() {
    this._negation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negationInput() {
    return this._negation;
  }

  // user_agent - computed: false, optional: false, required: true
  private _userAgent?: string; 
  public get userAgent() {
    return this.getStringAttribute('user_agent');
  }
  public set userAgent(value: string) {
    this._userAgent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentInput() {
    return this._userAgent;
  }
}

export class WaapCustomRuleConditionsUserAgentList extends cdktf.ComplexList {
  public internalValue? : WaapCustomRuleConditionsUserAgent[] | cdktf.IResolvable

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
  public get(index: number): WaapCustomRuleConditionsUserAgentOutputReference {
    return new WaapCustomRuleConditionsUserAgentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaapCustomRuleConditionsUserDefinedTags {
  /**
  * Whether or not to apply a boolean NOT operation to the rule's condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#negation WaapCustomRule#negation}
  */
  readonly negation?: boolean | cdktf.IResolvable;
  /**
  * A list of user-defined tags to match against the request tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#tags WaapCustomRule#tags}
  */
  readonly tags: string[];
}

export function waapCustomRuleConditionsUserDefinedTagsToTerraform(struct?: WaapCustomRuleConditionsUserDefinedTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negation: cdktf.booleanToTerraform(struct!.negation),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function waapCustomRuleConditionsUserDefinedTagsToHclTerraform(struct?: WaapCustomRuleConditionsUserDefinedTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negation: {
      value: cdktf.booleanToHclTerraform(struct!.negation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapCustomRuleConditionsUserDefinedTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaapCustomRuleConditionsUserDefinedTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negation !== undefined) {
      hasAnyValues = true;
      internalValueResult.negation = this._negation;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapCustomRuleConditionsUserDefinedTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negation = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negation = value.negation;
      this._tags = value.tags;
    }
  }

  // negation - computed: false, optional: true, required: false
  private _negation?: boolean | cdktf.IResolvable; 
  public get negation() {
    return this.getBooleanAttribute('negation');
  }
  public set negation(value: boolean | cdktf.IResolvable) {
    this._negation = value;
  }
  public resetNegation() {
    this._negation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negationInput() {
    return this._negation;
  }

  // tags - computed: false, optional: false, required: true
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

export class WaapCustomRuleConditionsUserDefinedTagsList extends cdktf.ComplexList {
  public internalValue? : WaapCustomRuleConditionsUserDefinedTags[] | cdktf.IResolvable

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
  public get(index: number): WaapCustomRuleConditionsUserDefinedTagsOutputReference {
    return new WaapCustomRuleConditionsUserDefinedTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaapCustomRuleConditions {
  /**
  * content_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#content_type WaapCustomRule#content_type}
  */
  readonly contentType?: WaapCustomRuleConditionsContentType[] | cdktf.IResolvable;
  /**
  * country block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#country WaapCustomRule#country}
  */
  readonly country?: WaapCustomRuleConditionsCountry[] | cdktf.IResolvable;
  /**
  * file_extension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#file_extension WaapCustomRule#file_extension}
  */
  readonly fileExtension?: WaapCustomRuleConditionsFileExtension[] | cdktf.IResolvable;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#header WaapCustomRule#header}
  */
  readonly header?: WaapCustomRuleConditionsHeader[] | cdktf.IResolvable;
  /**
  * header_exists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#header_exists WaapCustomRule#header_exists}
  */
  readonly headerExists?: WaapCustomRuleConditionsHeaderExists[] | cdktf.IResolvable;
  /**
  * http_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#http_method WaapCustomRule#http_method}
  */
  readonly httpMethod?: WaapCustomRuleConditionsHttpMethod[] | cdktf.IResolvable;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#ip WaapCustomRule#ip}
  */
  readonly ip?: WaapCustomRuleConditionsIp[] | cdktf.IResolvable;
  /**
  * ip_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#ip_range WaapCustomRule#ip_range}
  */
  readonly ipRange?: WaapCustomRuleConditionsIpRange[] | cdktf.IResolvable;
  /**
  * organization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#organization WaapCustomRule#organization}
  */
  readonly organization?: WaapCustomRuleConditionsOrganization[] | cdktf.IResolvable;
  /**
  * owner_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#owner_types WaapCustomRule#owner_types}
  */
  readonly ownerTypes?: WaapCustomRuleConditionsOwnerTypes[] | cdktf.IResolvable;
  /**
  * request_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#request_rate WaapCustomRule#request_rate}
  */
  readonly requestRate?: WaapCustomRuleConditionsRequestRate[] | cdktf.IResolvable;
  /**
  * response_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#response_header WaapCustomRule#response_header}
  */
  readonly responseHeader?: WaapCustomRuleConditionsResponseHeader[] | cdktf.IResolvable;
  /**
  * response_header_exists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#response_header_exists WaapCustomRule#response_header_exists}
  */
  readonly responseHeaderExists?: WaapCustomRuleConditionsResponseHeaderExists[] | cdktf.IResolvable;
  /**
  * session_request_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#session_request_count WaapCustomRule#session_request_count}
  */
  readonly sessionRequestCount?: WaapCustomRuleConditionsSessionRequestCount[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#tags WaapCustomRule#tags}
  */
  readonly tags?: WaapCustomRuleConditionsTags[] | cdktf.IResolvable;
  /**
  * url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#url WaapCustomRule#url}
  */
  readonly url?: WaapCustomRuleConditionsUrl[] | cdktf.IResolvable;
  /**
  * user_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#user_agent WaapCustomRule#user_agent}
  */
  readonly userAgent?: WaapCustomRuleConditionsUserAgent[] | cdktf.IResolvable;
  /**
  * user_defined_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#user_defined_tags WaapCustomRule#user_defined_tags}
  */
  readonly userDefinedTags?: WaapCustomRuleConditionsUserDefinedTags[] | cdktf.IResolvable;
}

export function waapCustomRuleConditionsToTerraform(struct?: WaapCustomRuleConditionsOutputReference | WaapCustomRuleConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.listMapper(waapCustomRuleConditionsContentTypeToTerraform, true)(struct!.contentType),
    country: cdktf.listMapper(waapCustomRuleConditionsCountryToTerraform, true)(struct!.country),
    file_extension: cdktf.listMapper(waapCustomRuleConditionsFileExtensionToTerraform, true)(struct!.fileExtension),
    header: cdktf.listMapper(waapCustomRuleConditionsHeaderToTerraform, true)(struct!.header),
    header_exists: cdktf.listMapper(waapCustomRuleConditionsHeaderExistsToTerraform, true)(struct!.headerExists),
    http_method: cdktf.listMapper(waapCustomRuleConditionsHttpMethodToTerraform, true)(struct!.httpMethod),
    ip: cdktf.listMapper(waapCustomRuleConditionsIpToTerraform, true)(struct!.ip),
    ip_range: cdktf.listMapper(waapCustomRuleConditionsIpRangeToTerraform, true)(struct!.ipRange),
    organization: cdktf.listMapper(waapCustomRuleConditionsOrganizationToTerraform, true)(struct!.organization),
    owner_types: cdktf.listMapper(waapCustomRuleConditionsOwnerTypesToTerraform, true)(struct!.ownerTypes),
    request_rate: cdktf.listMapper(waapCustomRuleConditionsRequestRateToTerraform, true)(struct!.requestRate),
    response_header: cdktf.listMapper(waapCustomRuleConditionsResponseHeaderToTerraform, true)(struct!.responseHeader),
    response_header_exists: cdktf.listMapper(waapCustomRuleConditionsResponseHeaderExistsToTerraform, true)(struct!.responseHeaderExists),
    session_request_count: cdktf.listMapper(waapCustomRuleConditionsSessionRequestCountToTerraform, true)(struct!.sessionRequestCount),
    tags: cdktf.listMapper(waapCustomRuleConditionsTagsToTerraform, true)(struct!.tags),
    url: cdktf.listMapper(waapCustomRuleConditionsUrlToTerraform, true)(struct!.url),
    user_agent: cdktf.listMapper(waapCustomRuleConditionsUserAgentToTerraform, true)(struct!.userAgent),
    user_defined_tags: cdktf.listMapper(waapCustomRuleConditionsUserDefinedTagsToTerraform, true)(struct!.userDefinedTags),
  }
}


export function waapCustomRuleConditionsToHclTerraform(struct?: WaapCustomRuleConditionsOutputReference | WaapCustomRuleConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_type: {
      value: cdktf.listMapperHcl(waapCustomRuleConditionsContentTypeToHclTerraform, true)(struct!.contentType),
      isBlock: true,
      type: "list",
      storageClassType: "WaapCustomRuleConditionsContentTypeList",
    },
    country: {
      value: cdktf.listMapperHcl(waapCustomRuleConditionsCountryToHclTerraform, true)(struct!.country),
      isBlock: true,
      type: "list",
      storageClassType: "WaapCustomRuleConditionsCountryList",
    },
    file_extension: {
      value: cdktf.listMapperHcl(waapCustomRuleConditionsFileExtensionToHclTerraform, true)(struct!.fileExtension),
      isBlock: true,
      type: "list",
      storageClassType: "WaapCustomRuleConditionsFileExtensionList",
    },
    header: {
      value: cdktf.listMapperHcl(waapCustomRuleConditionsHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "WaapCustomRuleConditionsHeaderList",
    },
    header_exists: {
      value: cdktf.listMapperHcl(waapCustomRuleConditionsHeaderExistsToHclTerraform, true)(struct!.headerExists),
      isBlock: true,
      type: "list",
      storageClassType: "WaapCustomRuleConditionsHeaderExistsList",
    },
    http_method: {
      value: cdktf.listMapperHcl(waapCustomRuleConditionsHttpMethodToHclTerraform, true)(struct!.httpMethod),
      isBlock: true,
      type: "list",
      storageClassType: "WaapCustomRuleConditionsHttpMethodList",
    },
    ip: {
      value: cdktf.listMapperHcl(waapCustomRuleConditionsIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "list",
      storageClassType: "WaapCustomRuleConditionsIpList",
    },
    ip_range: {
      value: cdktf.listMapperHcl(waapCustomRuleConditionsIpRangeToHclTerraform, true)(struct!.ipRange),
      isBlock: true,
      type: "list",
      storageClassType: "WaapCustomRuleConditionsIpRangeList",
    },
    organization: {
      value: cdktf.listMapperHcl(waapCustomRuleConditionsOrganizationToHclTerraform, true)(struct!.organization),
      isBlock: true,
      type: "list",
      storageClassType: "WaapCustomRuleConditionsOrganizationList",
    },
    owner_types: {
      value: cdktf.listMapperHcl(waapCustomRuleConditionsOwnerTypesToHclTerraform, true)(struct!.ownerTypes),
      isBlock: true,
      type: "list",
      storageClassType: "WaapCustomRuleConditionsOwnerTypesList",
    },
    request_rate: {
      value: cdktf.listMapperHcl(waapCustomRuleConditionsRequestRateToHclTerraform, true)(struct!.requestRate),
      isBlock: true,
      type: "list",
      storageClassType: "WaapCustomRuleConditionsRequestRateList",
    },
    response_header: {
      value: cdktf.listMapperHcl(waapCustomRuleConditionsResponseHeaderToHclTerraform, true)(struct!.responseHeader),
      isBlock: true,
      type: "list",
      storageClassType: "WaapCustomRuleConditionsResponseHeaderList",
    },
    response_header_exists: {
      value: cdktf.listMapperHcl(waapCustomRuleConditionsResponseHeaderExistsToHclTerraform, true)(struct!.responseHeaderExists),
      isBlock: true,
      type: "list",
      storageClassType: "WaapCustomRuleConditionsResponseHeaderExistsList",
    },
    session_request_count: {
      value: cdktf.listMapperHcl(waapCustomRuleConditionsSessionRequestCountToHclTerraform, true)(struct!.sessionRequestCount),
      isBlock: true,
      type: "list",
      storageClassType: "WaapCustomRuleConditionsSessionRequestCountList",
    },
    tags: {
      value: cdktf.listMapperHcl(waapCustomRuleConditionsTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "WaapCustomRuleConditionsTagsList",
    },
    url: {
      value: cdktf.listMapperHcl(waapCustomRuleConditionsUrlToHclTerraform, true)(struct!.url),
      isBlock: true,
      type: "list",
      storageClassType: "WaapCustomRuleConditionsUrlList",
    },
    user_agent: {
      value: cdktf.listMapperHcl(waapCustomRuleConditionsUserAgentToHclTerraform, true)(struct!.userAgent),
      isBlock: true,
      type: "list",
      storageClassType: "WaapCustomRuleConditionsUserAgentList",
    },
    user_defined_tags: {
      value: cdktf.listMapperHcl(waapCustomRuleConditionsUserDefinedTagsToHclTerraform, true)(struct!.userDefinedTags),
      isBlock: true,
      type: "list",
      storageClassType: "WaapCustomRuleConditionsUserDefinedTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapCustomRuleConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaapCustomRuleConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType?.internalValue;
    }
    if (this._country?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country?.internalValue;
    }
    if (this._fileExtension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtension = this._fileExtension?.internalValue;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._headerExists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerExists = this._headerExists?.internalValue;
    }
    if (this._httpMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod?.internalValue;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._ipRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRange = this._ipRange?.internalValue;
    }
    if (this._organization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization?.internalValue;
    }
    if (this._ownerTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerTypes = this._ownerTypes?.internalValue;
    }
    if (this._requestRate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestRate = this._requestRate?.internalValue;
    }
    if (this._responseHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeader = this._responseHeader?.internalValue;
    }
    if (this._responseHeaderExists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaderExists = this._responseHeaderExists?.internalValue;
    }
    if (this._sessionRequestCount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionRequestCount = this._sessionRequestCount?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._url?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url?.internalValue;
    }
    if (this._userAgent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgent = this._userAgent?.internalValue;
    }
    if (this._userDefinedTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefinedTags = this._userDefinedTags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapCustomRuleConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentType.internalValue = undefined;
      this._country.internalValue = undefined;
      this._fileExtension.internalValue = undefined;
      this._header.internalValue = undefined;
      this._headerExists.internalValue = undefined;
      this._httpMethod.internalValue = undefined;
      this._ip.internalValue = undefined;
      this._ipRange.internalValue = undefined;
      this._organization.internalValue = undefined;
      this._ownerTypes.internalValue = undefined;
      this._requestRate.internalValue = undefined;
      this._responseHeader.internalValue = undefined;
      this._responseHeaderExists.internalValue = undefined;
      this._sessionRequestCount.internalValue = undefined;
      this._tags.internalValue = undefined;
      this._url.internalValue = undefined;
      this._userAgent.internalValue = undefined;
      this._userDefinedTags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentType.internalValue = value.contentType;
      this._country.internalValue = value.country;
      this._fileExtension.internalValue = value.fileExtension;
      this._header.internalValue = value.header;
      this._headerExists.internalValue = value.headerExists;
      this._httpMethod.internalValue = value.httpMethod;
      this._ip.internalValue = value.ip;
      this._ipRange.internalValue = value.ipRange;
      this._organization.internalValue = value.organization;
      this._ownerTypes.internalValue = value.ownerTypes;
      this._requestRate.internalValue = value.requestRate;
      this._responseHeader.internalValue = value.responseHeader;
      this._responseHeaderExists.internalValue = value.responseHeaderExists;
      this._sessionRequestCount.internalValue = value.sessionRequestCount;
      this._tags.internalValue = value.tags;
      this._url.internalValue = value.url;
      this._userAgent.internalValue = value.userAgent;
      this._userDefinedTags.internalValue = value.userDefinedTags;
    }
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType = new WaapCustomRuleConditionsContentTypeList(this, "content_type", false);
  public get contentType() {
    return this._contentType;
  }
  public putContentType(value: WaapCustomRuleConditionsContentType[] | cdktf.IResolvable) {
    this._contentType.internalValue = value;
  }
  public resetContentType() {
    this._contentType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType.internalValue;
  }

  // country - computed: false, optional: true, required: false
  private _country = new WaapCustomRuleConditionsCountryList(this, "country", false);
  public get country() {
    return this._country;
  }
  public putCountry(value: WaapCustomRuleConditionsCountry[] | cdktf.IResolvable) {
    this._country.internalValue = value;
  }
  public resetCountry() {
    this._country.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country.internalValue;
  }

  // file_extension - computed: false, optional: true, required: false
  private _fileExtension = new WaapCustomRuleConditionsFileExtensionList(this, "file_extension", false);
  public get fileExtension() {
    return this._fileExtension;
  }
  public putFileExtension(value: WaapCustomRuleConditionsFileExtension[] | cdktf.IResolvable) {
    this._fileExtension.internalValue = value;
  }
  public resetFileExtension() {
    this._fileExtension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionInput() {
    return this._fileExtension.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new WaapCustomRuleConditionsHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: WaapCustomRuleConditionsHeader[] | cdktf.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // header_exists - computed: false, optional: true, required: false
  private _headerExists = new WaapCustomRuleConditionsHeaderExistsList(this, "header_exists", false);
  public get headerExists() {
    return this._headerExists;
  }
  public putHeaderExists(value: WaapCustomRuleConditionsHeaderExists[] | cdktf.IResolvable) {
    this._headerExists.internalValue = value;
  }
  public resetHeaderExists() {
    this._headerExists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerExistsInput() {
    return this._headerExists.internalValue;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod = new WaapCustomRuleConditionsHttpMethodList(this, "http_method", false);
  public get httpMethod() {
    return this._httpMethod;
  }
  public putHttpMethod(value: WaapCustomRuleConditionsHttpMethod[] | cdktf.IResolvable) {
    this._httpMethod.internalValue = value;
  }
  public resetHttpMethod() {
    this._httpMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod.internalValue;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new WaapCustomRuleConditionsIpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }
  public putIp(value: WaapCustomRuleConditionsIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // ip_range - computed: false, optional: true, required: false
  private _ipRange = new WaapCustomRuleConditionsIpRangeList(this, "ip_range", false);
  public get ipRange() {
    return this._ipRange;
  }
  public putIpRange(value: WaapCustomRuleConditionsIpRange[] | cdktf.IResolvable) {
    this._ipRange.internalValue = value;
  }
  public resetIpRange() {
    this._ipRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange.internalValue;
  }

  // organization - computed: false, optional: true, required: false
  private _organization = new WaapCustomRuleConditionsOrganizationList(this, "organization", false);
  public get organization() {
    return this._organization;
  }
  public putOrganization(value: WaapCustomRuleConditionsOrganization[] | cdktf.IResolvable) {
    this._organization.internalValue = value;
  }
  public resetOrganization() {
    this._organization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization.internalValue;
  }

  // owner_types - computed: false, optional: true, required: false
  private _ownerTypes = new WaapCustomRuleConditionsOwnerTypesList(this, "owner_types", false);
  public get ownerTypes() {
    return this._ownerTypes;
  }
  public putOwnerTypes(value: WaapCustomRuleConditionsOwnerTypes[] | cdktf.IResolvable) {
    this._ownerTypes.internalValue = value;
  }
  public resetOwnerTypes() {
    this._ownerTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerTypesInput() {
    return this._ownerTypes.internalValue;
  }

  // request_rate - computed: false, optional: true, required: false
  private _requestRate = new WaapCustomRuleConditionsRequestRateList(this, "request_rate", false);
  public get requestRate() {
    return this._requestRate;
  }
  public putRequestRate(value: WaapCustomRuleConditionsRequestRate[] | cdktf.IResolvable) {
    this._requestRate.internalValue = value;
  }
  public resetRequestRate() {
    this._requestRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestRateInput() {
    return this._requestRate.internalValue;
  }

  // response_header - computed: false, optional: true, required: false
  private _responseHeader = new WaapCustomRuleConditionsResponseHeaderList(this, "response_header", false);
  public get responseHeader() {
    return this._responseHeader;
  }
  public putResponseHeader(value: WaapCustomRuleConditionsResponseHeader[] | cdktf.IResolvable) {
    this._responseHeader.internalValue = value;
  }
  public resetResponseHeader() {
    this._responseHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderInput() {
    return this._responseHeader.internalValue;
  }

  // response_header_exists - computed: false, optional: true, required: false
  private _responseHeaderExists = new WaapCustomRuleConditionsResponseHeaderExistsList(this, "response_header_exists", false);
  public get responseHeaderExists() {
    return this._responseHeaderExists;
  }
  public putResponseHeaderExists(value: WaapCustomRuleConditionsResponseHeaderExists[] | cdktf.IResolvable) {
    this._responseHeaderExists.internalValue = value;
  }
  public resetResponseHeaderExists() {
    this._responseHeaderExists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderExistsInput() {
    return this._responseHeaderExists.internalValue;
  }

  // session_request_count - computed: false, optional: true, required: false
  private _sessionRequestCount = new WaapCustomRuleConditionsSessionRequestCountList(this, "session_request_count", false);
  public get sessionRequestCount() {
    return this._sessionRequestCount;
  }
  public putSessionRequestCount(value: WaapCustomRuleConditionsSessionRequestCount[] | cdktf.IResolvable) {
    this._sessionRequestCount.internalValue = value;
  }
  public resetSessionRequestCount() {
    this._sessionRequestCount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionRequestCountInput() {
    return this._sessionRequestCount.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new WaapCustomRuleConditionsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: WaapCustomRuleConditionsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // url - computed: false, optional: true, required: false
  private _url = new WaapCustomRuleConditionsUrlList(this, "url", false);
  public get url() {
    return this._url;
  }
  public putUrl(value: WaapCustomRuleConditionsUrl[] | cdktf.IResolvable) {
    this._url.internalValue = value;
  }
  public resetUrl() {
    this._url.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url.internalValue;
  }

  // user_agent - computed: false, optional: true, required: false
  private _userAgent = new WaapCustomRuleConditionsUserAgentList(this, "user_agent", false);
  public get userAgent() {
    return this._userAgent;
  }
  public putUserAgent(value: WaapCustomRuleConditionsUserAgent[] | cdktf.IResolvable) {
    this._userAgent.internalValue = value;
  }
  public resetUserAgent() {
    this._userAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentInput() {
    return this._userAgent.internalValue;
  }

  // user_defined_tags - computed: false, optional: true, required: false
  private _userDefinedTags = new WaapCustomRuleConditionsUserDefinedTagsList(this, "user_defined_tags", false);
  public get userDefinedTags() {
    return this._userDefinedTags;
  }
  public putUserDefinedTags(value: WaapCustomRuleConditionsUserDefinedTags[] | cdktf.IResolvable) {
    this._userDefinedTags.internalValue = value;
  }
  public resetUserDefinedTags() {
    this._userDefinedTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedTagsInput() {
    return this._userDefinedTags.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule gcore_waap_custom_rule}
*/
export class WaapCustomRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_waap_custom_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WaapCustomRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WaapCustomRule to import
  * @param importFromId The id of the existing WaapCustomRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WaapCustomRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_waap_custom_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/waap_custom_rule gcore_waap_custom_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WaapCustomRuleConfig
  */
  public constructor(scope: Construct, id: string, config: WaapCustomRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_waap_custom_rule',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.32.5',
        providerVersionConstraint: '0.32.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._domainId = config.domainId;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._action.internalValue = config.action;
    this._conditions.internalValue = config.conditions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: number; 
  public get domainId() {
    return this.getNumberAttribute('domain_id');
  }
  public set domainId(value: number) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // action - computed: false, optional: false, required: true
  private _action = new WaapCustomRuleActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: WaapCustomRuleAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new WaapCustomRuleConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: WaapCustomRuleConditions) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      domain_id: cdktf.numberToTerraform(this._domainId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      action: waapCustomRuleActionToTerraform(this._action.internalValue),
      conditions: waapCustomRuleConditionsToTerraform(this._conditions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_id: {
        value: cdktf.numberToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: waapCustomRuleActionToHclTerraform(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WaapCustomRuleActionList",
      },
      conditions: {
        value: waapCustomRuleConditionsToHclTerraform(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WaapCustomRuleConditionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
