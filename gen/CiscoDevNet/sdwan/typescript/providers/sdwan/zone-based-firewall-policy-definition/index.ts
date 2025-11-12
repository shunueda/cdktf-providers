// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/zone_based_firewall_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZoneBasedFirewallPolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * , Attribute conditional on `mode` being equal to `security`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/zone_based_firewall_policy_definition#apply_zone_pairs ZoneBasedFirewallPolicyDefinition#apply_zone_pairs}
  */
  readonly applyZonePairs?: ZoneBasedFirewallPolicyDefinitionApplyZonePairs[] | cdktf.IResolvable;
  /**
  * Default Action
  *   - Choices: `pass`, `drop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/zone_based_firewall_policy_definition#default_action ZoneBasedFirewallPolicyDefinition#default_action}
  */
  readonly defaultAction: string;
  /**
  * The description of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/zone_based_firewall_policy_definition#description ZoneBasedFirewallPolicyDefinition#description}
  */
  readonly description: string;
  /**
  * The policy mode
  *   - Choices: `security`, `unified`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/zone_based_firewall_policy_definition#mode ZoneBasedFirewallPolicyDefinition#mode}
  */
  readonly mode: string;
  /**
  * The name of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/zone_based_firewall_policy_definition#name ZoneBasedFirewallPolicyDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/zone_based_firewall_policy_definition#rules ZoneBasedFirewallPolicyDefinition#rules}
  */
  readonly rules: ZoneBasedFirewallPolicyDefinitionRules[] | cdktf.IResolvable;
}
export interface ZoneBasedFirewallPolicyDefinitionApplyZonePairs {
  /**
  * Destination Zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/zone_based_firewall_policy_definition#destination_zone ZoneBasedFirewallPolicyDefinition#destination_zone}
  */
  readonly destinationZone?: string;
  /**
  * Source Zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/zone_based_firewall_policy_definition#source_zone ZoneBasedFirewallPolicyDefinition#source_zone}
  */
  readonly sourceZone?: string;
}

export function zoneBasedFirewallPolicyDefinitionApplyZonePairsToTerraform(struct?: ZoneBasedFirewallPolicyDefinitionApplyZonePairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_zone: cdktf.stringToTerraform(struct!.destinationZone),
    source_zone: cdktf.stringToTerraform(struct!.sourceZone),
  }
}


export function zoneBasedFirewallPolicyDefinitionApplyZonePairsToHclTerraform(struct?: ZoneBasedFirewallPolicyDefinitionApplyZonePairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_zone: {
      value: cdktf.stringToHclTerraform(struct!.destinationZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_zone: {
      value: cdktf.stringToHclTerraform(struct!.sourceZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneBasedFirewallPolicyDefinitionApplyZonePairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZoneBasedFirewallPolicyDefinitionApplyZonePairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationZone = this._destinationZone;
    }
    if (this._sourceZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceZone = this._sourceZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneBasedFirewallPolicyDefinitionApplyZonePairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationZone = undefined;
      this._sourceZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationZone = value.destinationZone;
      this._sourceZone = value.sourceZone;
    }
  }

  // destination_zone - computed: false, optional: true, required: false
  private _destinationZone?: string; 
  public get destinationZone() {
    return this.getStringAttribute('destination_zone');
  }
  public set destinationZone(value: string) {
    this._destinationZone = value;
  }
  public resetDestinationZone() {
    this._destinationZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationZoneInput() {
    return this._destinationZone;
  }

  // source_zone - computed: false, optional: true, required: false
  private _sourceZone?: string; 
  public get sourceZone() {
    return this.getStringAttribute('source_zone');
  }
  public set sourceZone(value: string) {
    this._sourceZone = value;
  }
  public resetSourceZone() {
    this._sourceZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceZoneInput() {
    return this._sourceZone;
  }
}

export class ZoneBasedFirewallPolicyDefinitionApplyZonePairsList extends cdktf.ComplexList {
  public internalValue? : ZoneBasedFirewallPolicyDefinitionApplyZonePairs[] | cdktf.IResolvable

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
  public get(index: number): ZoneBasedFirewallPolicyDefinitionApplyZonePairsOutputReference {
    return new ZoneBasedFirewallPolicyDefinitionApplyZonePairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZoneBasedFirewallPolicyDefinitionRulesActionEntries {
  /**
  * Type of action entry
  *   - Choices: `log`, `connectionEvents`, `advancedInspectionProfile`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/zone_based_firewall_policy_definition#type ZoneBasedFirewallPolicyDefinition#type}
  */
  readonly type?: string;
}

export function zoneBasedFirewallPolicyDefinitionRulesActionEntriesToTerraform(struct?: ZoneBasedFirewallPolicyDefinitionRulesActionEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function zoneBasedFirewallPolicyDefinitionRulesActionEntriesToHclTerraform(struct?: ZoneBasedFirewallPolicyDefinitionRulesActionEntries | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneBasedFirewallPolicyDefinitionRulesActionEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZoneBasedFirewallPolicyDefinitionRulesActionEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneBasedFirewallPolicyDefinitionRulesActionEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ZoneBasedFirewallPolicyDefinitionRulesActionEntriesList extends cdktf.ComplexList {
  public internalValue? : ZoneBasedFirewallPolicyDefinitionRulesActionEntries[] | cdktf.IResolvable

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
  public get(index: number): ZoneBasedFirewallPolicyDefinitionRulesActionEntriesOutputReference {
    return new ZoneBasedFirewallPolicyDefinitionRulesActionEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZoneBasedFirewallPolicyDefinitionRulesMatchEntries {
  /**
  * policy id for selected match entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/zone_based_firewall_policy_definition#policy_id ZoneBasedFirewallPolicyDefinition#policy_id}
  */
  readonly policyId?: string;
  /**
  * Should be included with additionally entries for `destinationPort` and `protocol` whenever the type `protocolName` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/zone_based_firewall_policy_definition#protocol_type ZoneBasedFirewallPolicyDefinition#protocol_type}
  */
  readonly protocolType?: string;
  /**
  * Type of match entry
  *   - Choices: `sourceFqdnList`, `sourceDataPrefixList`, `sourceGeoLocationList`, `sourcePortList`, `destinationFqdnList`, `destinationDataPrefixList`, `destinationGeoLocationList`, `destinationPortList`, `appList`, `appListFlat`, `protocolNameList`, `sourceIp`, `sourcePort`, `sourceFqdn`, `destinationIp`, `destinationFqdn`, `destinationPort`, `sourceGeoLocation`, `destinationGeoLocation`, `protocolName`, `protocol`, `app`, `ruleSetList`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/zone_based_firewall_policy_definition#type ZoneBasedFirewallPolicyDefinition#type}
  */
  readonly type: string;
  /**
  * value for selected match entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/zone_based_firewall_policy_definition#value ZoneBasedFirewallPolicyDefinition#value}
  */
  readonly value?: string;
  /**
  * variable value for selected match entry if it has variable option (sourceIp & destinationIp)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/zone_based_firewall_policy_definition#value_variable ZoneBasedFirewallPolicyDefinition#value_variable}
  */
  readonly valueVariable?: string;
}

export function zoneBasedFirewallPolicyDefinitionRulesMatchEntriesToTerraform(struct?: ZoneBasedFirewallPolicyDefinitionRulesMatchEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_id: cdktf.stringToTerraform(struct!.policyId),
    protocol_type: cdktf.stringToTerraform(struct!.protocolType),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    value_variable: cdktf.stringToTerraform(struct!.valueVariable),
  }
}


export function zoneBasedFirewallPolicyDefinitionRulesMatchEntriesToHclTerraform(struct?: ZoneBasedFirewallPolicyDefinitionRulesMatchEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_id: {
      value: cdktf.stringToHclTerraform(struct!.policyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_type: {
      value: cdktf.stringToHclTerraform(struct!.protocolType),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_variable: {
      value: cdktf.stringToHclTerraform(struct!.valueVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneBasedFirewallPolicyDefinitionRulesMatchEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZoneBasedFirewallPolicyDefinitionRulesMatchEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyId = this._policyId;
    }
    if (this._protocolType !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolType = this._protocolType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueVariable = this._valueVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneBasedFirewallPolicyDefinitionRulesMatchEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policyId = undefined;
      this._protocolType = undefined;
      this._type = undefined;
      this._value = undefined;
      this._valueVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policyId = value.policyId;
      this._protocolType = value.protocolType;
      this._type = value.type;
      this._value = value.value;
      this._valueVariable = value.valueVariable;
    }
  }

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
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

  // value_variable - computed: false, optional: true, required: false
  private _valueVariable?: string; 
  public get valueVariable() {
    return this.getStringAttribute('value_variable');
  }
  public set valueVariable(value: string) {
    this._valueVariable = value;
  }
  public resetValueVariable() {
    this._valueVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueVariableInput() {
    return this._valueVariable;
  }
}

export class ZoneBasedFirewallPolicyDefinitionRulesMatchEntriesList extends cdktf.ComplexList {
  public internalValue? : ZoneBasedFirewallPolicyDefinitionRulesMatchEntries[] | cdktf.IResolvable

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
  public get(index: number): ZoneBasedFirewallPolicyDefinitionRulesMatchEntriesOutputReference {
    return new ZoneBasedFirewallPolicyDefinitionRulesMatchEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZoneBasedFirewallPolicyDefinitionRules {
  /**
  * List of actions entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/zone_based_firewall_policy_definition#action_entries ZoneBasedFirewallPolicyDefinition#action_entries}
  */
  readonly actionEntries?: ZoneBasedFirewallPolicyDefinitionRulesActionEntries[] | cdktf.IResolvable;
  /**
  * Base action
  *   - Choices: `pass`, `drop`, `inspect`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/zone_based_firewall_policy_definition#base_action ZoneBasedFirewallPolicyDefinition#base_action}
  */
  readonly baseAction: string;
  /**
  * Rule Type
  *   - Choices: `ipv4`, `ipv6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/zone_based_firewall_policy_definition#ip_type ZoneBasedFirewallPolicyDefinition#ip_type}
  */
  readonly ipType?: string;
  /**
  * List of match entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/zone_based_firewall_policy_definition#match_entries ZoneBasedFirewallPolicyDefinition#match_entries}
  */
  readonly matchEntries?: ZoneBasedFirewallPolicyDefinitionRulesMatchEntries[] | cdktf.IResolvable;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/zone_based_firewall_policy_definition#rule_name ZoneBasedFirewallPolicyDefinition#rule_name}
  */
  readonly ruleName: string;
  /**
  * Rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/zone_based_firewall_policy_definition#rule_order ZoneBasedFirewallPolicyDefinition#rule_order}
  */
  readonly ruleOrder: number;
}

export function zoneBasedFirewallPolicyDefinitionRulesToTerraform(struct?: ZoneBasedFirewallPolicyDefinitionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_entries: cdktf.listMapper(zoneBasedFirewallPolicyDefinitionRulesActionEntriesToTerraform, false)(struct!.actionEntries),
    base_action: cdktf.stringToTerraform(struct!.baseAction),
    ip_type: cdktf.stringToTerraform(struct!.ipType),
    match_entries: cdktf.listMapper(zoneBasedFirewallPolicyDefinitionRulesMatchEntriesToTerraform, false)(struct!.matchEntries),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    rule_order: cdktf.numberToTerraform(struct!.ruleOrder),
  }
}


export function zoneBasedFirewallPolicyDefinitionRulesToHclTerraform(struct?: ZoneBasedFirewallPolicyDefinitionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_entries: {
      value: cdktf.listMapperHcl(zoneBasedFirewallPolicyDefinitionRulesActionEntriesToHclTerraform, false)(struct!.actionEntries),
      isBlock: true,
      type: "set",
      storageClassType: "ZoneBasedFirewallPolicyDefinitionRulesActionEntriesList",
    },
    base_action: {
      value: cdktf.stringToHclTerraform(struct!.baseAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_type: {
      value: cdktf.stringToHclTerraform(struct!.ipType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_entries: {
      value: cdktf.listMapperHcl(zoneBasedFirewallPolicyDefinitionRulesMatchEntriesToHclTerraform, false)(struct!.matchEntries),
      isBlock: true,
      type: "set",
      storageClassType: "ZoneBasedFirewallPolicyDefinitionRulesMatchEntriesList",
    },
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_order: {
      value: cdktf.numberToHclTerraform(struct!.ruleOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneBasedFirewallPolicyDefinitionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZoneBasedFirewallPolicyDefinitionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionEntries = this._actionEntries?.internalValue;
    }
    if (this._baseAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseAction = this._baseAction;
    }
    if (this._ipType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipType = this._ipType;
    }
    if (this._matchEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchEntries = this._matchEntries?.internalValue;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._ruleOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleOrder = this._ruleOrder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneBasedFirewallPolicyDefinitionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionEntries.internalValue = undefined;
      this._baseAction = undefined;
      this._ipType = undefined;
      this._matchEntries.internalValue = undefined;
      this._ruleName = undefined;
      this._ruleOrder = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionEntries.internalValue = value.actionEntries;
      this._baseAction = value.baseAction;
      this._ipType = value.ipType;
      this._matchEntries.internalValue = value.matchEntries;
      this._ruleName = value.ruleName;
      this._ruleOrder = value.ruleOrder;
    }
  }

  // action_entries - computed: false, optional: true, required: false
  private _actionEntries = new ZoneBasedFirewallPolicyDefinitionRulesActionEntriesList(this, "action_entries", true);
  public get actionEntries() {
    return this._actionEntries;
  }
  public putActionEntries(value: ZoneBasedFirewallPolicyDefinitionRulesActionEntries[] | cdktf.IResolvable) {
    this._actionEntries.internalValue = value;
  }
  public resetActionEntries() {
    this._actionEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEntriesInput() {
    return this._actionEntries.internalValue;
  }

  // base_action - computed: false, optional: false, required: true
  private _baseAction?: string; 
  public get baseAction() {
    return this.getStringAttribute('base_action');
  }
  public set baseAction(value: string) {
    this._baseAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseActionInput() {
    return this._baseAction;
  }

  // ip_type - computed: false, optional: true, required: false
  private _ipType?: string; 
  public get ipType() {
    return this.getStringAttribute('ip_type');
  }
  public set ipType(value: string) {
    this._ipType = value;
  }
  public resetIpType() {
    this._ipType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTypeInput() {
    return this._ipType;
  }

  // match_entries - computed: false, optional: true, required: false
  private _matchEntries = new ZoneBasedFirewallPolicyDefinitionRulesMatchEntriesList(this, "match_entries", true);
  public get matchEntries() {
    return this._matchEntries;
  }
  public putMatchEntries(value: ZoneBasedFirewallPolicyDefinitionRulesMatchEntries[] | cdktf.IResolvable) {
    this._matchEntries.internalValue = value;
  }
  public resetMatchEntries() {
    this._matchEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchEntriesInput() {
    return this._matchEntries.internalValue;
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

  // rule_order - computed: false, optional: false, required: true
  private _ruleOrder?: number; 
  public get ruleOrder() {
    return this.getNumberAttribute('rule_order');
  }
  public set ruleOrder(value: number) {
    this._ruleOrder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleOrderInput() {
    return this._ruleOrder;
  }
}

export class ZoneBasedFirewallPolicyDefinitionRulesList extends cdktf.ComplexList {
  public internalValue? : ZoneBasedFirewallPolicyDefinitionRules[] | cdktf.IResolvable

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
  public get(index: number): ZoneBasedFirewallPolicyDefinitionRulesOutputReference {
    return new ZoneBasedFirewallPolicyDefinitionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/zone_based_firewall_policy_definition sdwan_zone_based_firewall_policy_definition}
*/
export class ZoneBasedFirewallPolicyDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_zone_based_firewall_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZoneBasedFirewallPolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZoneBasedFirewallPolicyDefinition to import
  * @param importFromId The id of the existing ZoneBasedFirewallPolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/zone_based_firewall_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZoneBasedFirewallPolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_zone_based_firewall_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/zone_based_firewall_policy_definition sdwan_zone_based_firewall_policy_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZoneBasedFirewallPolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: ZoneBasedFirewallPolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_zone_based_firewall_policy_definition',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applyZonePairs.internalValue = config.applyZonePairs;
    this._defaultAction = config.defaultAction;
    this._description = config.description;
    this._mode = config.mode;
    this._name = config.name;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_zone_pairs - computed: false, optional: true, required: false
  private _applyZonePairs = new ZoneBasedFirewallPolicyDefinitionApplyZonePairsList(this, "apply_zone_pairs", false);
  public get applyZonePairs() {
    return this._applyZonePairs;
  }
  public putApplyZonePairs(value: ZoneBasedFirewallPolicyDefinitionApplyZonePairs[] | cdktf.IResolvable) {
    this._applyZonePairs.internalValue = value;
  }
  public resetApplyZonePairs() {
    this._applyZonePairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyZonePairsInput() {
    return this._applyZonePairs.internalValue;
  }

  // default_action - computed: false, optional: false, required: true
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // rules - computed: false, optional: false, required: true
  private _rules = new ZoneBasedFirewallPolicyDefinitionRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: ZoneBasedFirewallPolicyDefinitionRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_zone_pairs: cdktf.listMapper(zoneBasedFirewallPolicyDefinitionApplyZonePairsToTerraform, false)(this._applyZonePairs.internalValue),
      default_action: cdktf.stringToTerraform(this._defaultAction),
      description: cdktf.stringToTerraform(this._description),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      rules: cdktf.listMapper(zoneBasedFirewallPolicyDefinitionRulesToTerraform, false)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply_zone_pairs: {
        value: cdktf.listMapperHcl(zoneBasedFirewallPolicyDefinitionApplyZonePairsToHclTerraform, false)(this._applyZonePairs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZoneBasedFirewallPolicyDefinitionApplyZonePairsList",
      },
      default_action: {
        value: cdktf.stringToHclTerraform(this._defaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      rules: {
        value: cdktf.listMapperHcl(zoneBasedFirewallPolicyDefinitionRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZoneBasedFirewallPolicyDefinitionRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
