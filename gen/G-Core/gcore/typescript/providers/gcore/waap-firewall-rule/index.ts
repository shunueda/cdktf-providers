// https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/waap_firewall_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WaapFirewallRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/waap_firewall_rule#description WaapFirewallRule#description}
  */
  readonly description?: string;
  /**
  * The WAAP domain ID for which the Firewall Rule is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/waap_firewall_rule#domain_id WaapFirewallRule#domain_id}
  */
  readonly domainId: number;
  /**
  * Whether the rule is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/waap_firewall_rule#enabled WaapFirewallRule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/waap_firewall_rule#id WaapFirewallRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/waap_firewall_rule#name WaapFirewallRule#name}
  */
  readonly name: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/waap_firewall_rule#action WaapFirewallRule#action}
  */
  readonly action: WaapFirewallRuleAction;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/waap_firewall_rule#conditions WaapFirewallRule#conditions}
  */
  readonly conditions: WaapFirewallRuleConditions;
}
export interface WaapFirewallRuleActionBlock {
  /**
  * How long a rule's block action will apply to subsequent requests. Can be specified in seconds or by using a numeral followed by 's', 'm', 'h', or 'd' to represent time format (seconds, minutes, hours, or days). Example: 12h. Must match the pattern ^[0-9]*[smhd]?$
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/waap_firewall_rule#action_duration WaapFirewallRule#action_duration}
  */
  readonly actionDuration?: string;
  /**
  * A custom HTTP status code that the WAAP returns if a rule blocks a request. It must be one of these values {403, 405, 418, 429}. Default is 403.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/waap_firewall_rule#status_code WaapFirewallRule#status_code}
  */
  readonly statusCode?: number;
}

export function waapFirewallRuleActionBlockToTerraform(struct?: WaapFirewallRuleActionBlockOutputReference | WaapFirewallRuleActionBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_duration: cdktf.stringToTerraform(struct!.actionDuration),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
  }
}


export function waapFirewallRuleActionBlockToHclTerraform(struct?: WaapFirewallRuleActionBlockOutputReference | WaapFirewallRuleActionBlock): any {
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

export class WaapFirewallRuleActionBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaapFirewallRuleActionBlock | undefined {
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

  public set internalValue(value: WaapFirewallRuleActionBlock | undefined) {
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
export interface WaapFirewallRuleAction {
  /**
  * The WAAP allows the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/waap_firewall_rule#allow WaapFirewallRule#allow}
  */
  readonly allow?: boolean | cdktf.IResolvable;
  /**
  * block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/waap_firewall_rule#block WaapFirewallRule#block}
  */
  readonly block?: WaapFirewallRuleActionBlock;
}

export function waapFirewallRuleActionToTerraform(struct?: WaapFirewallRuleActionOutputReference | WaapFirewallRuleAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.booleanToTerraform(struct!.allow),
    block: waapFirewallRuleActionBlockToTerraform(struct!.block),
  }
}


export function waapFirewallRuleActionToHclTerraform(struct?: WaapFirewallRuleActionOutputReference | WaapFirewallRuleAction): any {
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
    block: {
      value: waapFirewallRuleActionBlockToHclTerraform(struct!.block),
      isBlock: true,
      type: "list",
      storageClassType: "WaapFirewallRuleActionBlockList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapFirewallRuleActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaapFirewallRuleAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._block?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapFirewallRuleAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allow = undefined;
      this._block.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allow = value.allow;
      this._block.internalValue = value.block;
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

  // block - computed: false, optional: true, required: false
  private _block = new WaapFirewallRuleActionBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }
  public putBlock(value: WaapFirewallRuleActionBlock) {
    this._block.internalValue = value;
  }
  public resetBlock() {
    this._block.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block.internalValue;
  }
}
export interface WaapFirewallRuleConditionsIp {
  /**
  * A single IPv4 or IPv6 address to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/waap_firewall_rule#ip_address WaapFirewallRule#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Whether or not to apply a boolean NOT operation to the rule's condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/waap_firewall_rule#negation WaapFirewallRule#negation}
  */
  readonly negation?: boolean | cdktf.IResolvable;
}

export function waapFirewallRuleConditionsIpToTerraform(struct?: WaapFirewallRuleConditionsIpOutputReference | WaapFirewallRuleConditionsIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    negation: cdktf.booleanToTerraform(struct!.negation),
  }
}


export function waapFirewallRuleConditionsIpToHclTerraform(struct?: WaapFirewallRuleConditionsIpOutputReference | WaapFirewallRuleConditionsIp): any {
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

export class WaapFirewallRuleConditionsIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaapFirewallRuleConditionsIp | undefined {
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

  public set internalValue(value: WaapFirewallRuleConditionsIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipAddress = undefined;
      this._negation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface WaapFirewallRuleConditionsIpRange {
  /**
  * The lower bound IPv4 or IPv6 address to match against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/waap_firewall_rule#lower_bound WaapFirewallRule#lower_bound}
  */
  readonly lowerBound: string;
  /**
  * Whether or not to apply a boolean NOT operation to the rule's condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/waap_firewall_rule#negation WaapFirewallRule#negation}
  */
  readonly negation?: boolean | cdktf.IResolvable;
  /**
  * The upper bound IPv4 or IPv6 address to match against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/waap_firewall_rule#upper_bound WaapFirewallRule#upper_bound}
  */
  readonly upperBound: string;
}

export function waapFirewallRuleConditionsIpRangeToTerraform(struct?: WaapFirewallRuleConditionsIpRangeOutputReference | WaapFirewallRuleConditionsIpRange): any {
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


export function waapFirewallRuleConditionsIpRangeToHclTerraform(struct?: WaapFirewallRuleConditionsIpRangeOutputReference | WaapFirewallRuleConditionsIpRange): any {
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

export class WaapFirewallRuleConditionsIpRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaapFirewallRuleConditionsIpRange | undefined {
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

  public set internalValue(value: WaapFirewallRuleConditionsIpRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lowerBound = undefined;
      this._negation = undefined;
      this._upperBound = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface WaapFirewallRuleConditions {
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/waap_firewall_rule#ip WaapFirewallRule#ip}
  */
  readonly ip?: WaapFirewallRuleConditionsIp;
  /**
  * ip_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/waap_firewall_rule#ip_range WaapFirewallRule#ip_range}
  */
  readonly ipRange?: WaapFirewallRuleConditionsIpRange;
}

export function waapFirewallRuleConditionsToTerraform(struct?: WaapFirewallRuleConditionsOutputReference | WaapFirewallRuleConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: waapFirewallRuleConditionsIpToTerraform(struct!.ip),
    ip_range: waapFirewallRuleConditionsIpRangeToTerraform(struct!.ipRange),
  }
}


export function waapFirewallRuleConditionsToHclTerraform(struct?: WaapFirewallRuleConditionsOutputReference | WaapFirewallRuleConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: waapFirewallRuleConditionsIpToHclTerraform(struct!.ip),
      isBlock: true,
      type: "list",
      storageClassType: "WaapFirewallRuleConditionsIpList",
    },
    ip_range: {
      value: waapFirewallRuleConditionsIpRangeToHclTerraform(struct!.ipRange),
      isBlock: true,
      type: "list",
      storageClassType: "WaapFirewallRuleConditionsIpRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapFirewallRuleConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaapFirewallRuleConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._ipRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRange = this._ipRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapFirewallRuleConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip.internalValue = undefined;
      this._ipRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip.internalValue = value.ip;
      this._ipRange.internalValue = value.ipRange;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new WaapFirewallRuleConditionsIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: WaapFirewallRuleConditionsIp) {
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
  private _ipRange = new WaapFirewallRuleConditionsIpRangeOutputReference(this, "ip_range");
  public get ipRange() {
    return this._ipRange;
  }
  public putIpRange(value: WaapFirewallRuleConditionsIpRange) {
    this._ipRange.internalValue = value;
  }
  public resetIpRange() {
    this._ipRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/waap_firewall_rule gcore_waap_firewall_rule}
*/
export class WaapFirewallRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_waap_firewall_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WaapFirewallRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WaapFirewallRule to import
  * @param importFromId The id of the existing WaapFirewallRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/waap_firewall_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WaapFirewallRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_waap_firewall_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/waap_firewall_rule gcore_waap_firewall_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WaapFirewallRuleConfig
  */
  public constructor(scope: Construct, id: string, config: WaapFirewallRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_waap_firewall_rule',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.32.1',
        providerVersionConstraint: '0.32.1'
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
  private _action = new WaapFirewallRuleActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: WaapFirewallRuleAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new WaapFirewallRuleConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: WaapFirewallRuleConditions) {
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
      action: waapFirewallRuleActionToTerraform(this._action.internalValue),
      conditions: waapFirewallRuleConditionsToTerraform(this._conditions.internalValue),
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
        value: waapFirewallRuleActionToHclTerraform(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WaapFirewallRuleActionList",
      },
      conditions: {
        value: waapFirewallRuleConditionsToHclTerraform(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WaapFirewallRuleConditionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
