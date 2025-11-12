// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profiles_automation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchOrganizationPortsProfilesAutomationConfig extends cdktf.TerraformMetaArguments {
  /**
  * assigned switch ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profiles_automation#assigned_switch_ports SwitchOrganizationPortsProfilesAutomation#assigned_switch_ports}
  */
  readonly assignedSwitchPorts?: SwitchOrganizationPortsProfilesAutomationAssignedSwitchPorts[] | cdktf.IResolvable;
  /**
  * Text describing the port profile automation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profiles_automation#description SwitchOrganizationPortsProfilesAutomation#description}
  */
  readonly description?: string;
  /**
  * Default port profile Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profiles_automation#fallback_profile_id SwitchOrganizationPortsProfilesAutomation#fallback_profile_id}
  */
  readonly fallbackProfileId?: string;
  /**
  * Default port profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profiles_automation#fallback_profile_name SwitchOrganizationPortsProfilesAutomation#fallback_profile_name}
  */
  readonly fallbackProfileName?: string;
  /**
  * Name of the port profile automation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profiles_automation#name SwitchOrganizationPortsProfilesAutomation#name}
  */
  readonly name: string;
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profiles_automation#organization_id SwitchOrganizationPortsProfilesAutomation#organization_id}
  */
  readonly organizationId: string;
  /**
  * Configuration settings for port profile automation rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profiles_automation#rules SwitchOrganizationPortsProfilesAutomation#rules}
  */
  readonly rules: SwitchOrganizationPortsProfilesAutomationRules[] | cdktf.IResolvable;
}
export interface SwitchOrganizationPortsProfilesAutomationAssignedSwitchPorts {
  /**
  * List of port ids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profiles_automation#port_ids SwitchOrganizationPortsProfilesAutomation#port_ids}
  */
  readonly portIds?: string[];
  /**
  * Serial number of the switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profiles_automation#switch_serial SwitchOrganizationPortsProfilesAutomation#switch_serial}
  */
  readonly switchSerial?: string;
}

export function switchOrganizationPortsProfilesAutomationAssignedSwitchPortsToTerraform(struct?: SwitchOrganizationPortsProfilesAutomationAssignedSwitchPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.portIds),
    switch_serial: cdktf.stringToTerraform(struct!.switchSerial),
  }
}


export function switchOrganizationPortsProfilesAutomationAssignedSwitchPortsToHclTerraform(struct?: SwitchOrganizationPortsProfilesAutomationAssignedSwitchPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.portIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    switch_serial: {
      value: cdktf.stringToHclTerraform(struct!.switchSerial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchOrganizationPortsProfilesAutomationAssignedSwitchPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchOrganizationPortsProfilesAutomationAssignedSwitchPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.portIds = this._portIds;
    }
    if (this._switchSerial !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchSerial = this._switchSerial;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchOrganizationPortsProfilesAutomationAssignedSwitchPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portIds = undefined;
      this._switchSerial = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portIds = value.portIds;
      this._switchSerial = value.switchSerial;
    }
  }

  // port_ids - computed: false, optional: true, required: false
  private _portIds?: string[]; 
  public get portIds() {
    return this.getListAttribute('port_ids');
  }
  public set portIds(value: string[]) {
    this._portIds = value;
  }
  public resetPortIds() {
    this._portIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIdsInput() {
    return this._portIds;
  }

  // switch_serial - computed: false, optional: true, required: false
  private _switchSerial?: string; 
  public get switchSerial() {
    return this.getStringAttribute('switch_serial');
  }
  public set switchSerial(value: string) {
    this._switchSerial = value;
  }
  public resetSwitchSerial() {
    this._switchSerial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchSerialInput() {
    return this._switchSerial;
  }
}

export class SwitchOrganizationPortsProfilesAutomationAssignedSwitchPortsList extends cdktf.ComplexList {
  public internalValue? : SwitchOrganizationPortsProfilesAutomationAssignedSwitchPorts[] | cdktf.IResolvable

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
  public get(index: number): SwitchOrganizationPortsProfilesAutomationAssignedSwitchPortsOutputReference {
    return new SwitchOrganizationPortsProfilesAutomationAssignedSwitchPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchOrganizationPortsProfilesAutomationRulesConditions {
  /**
  * Type of the condition
  *   - Choices: `LLDP system description`, `MAC address`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profiles_automation#attribute SwitchOrganizationPortsProfilesAutomation#attribute}
  */
  readonly attribute: string;
  /**
  * Value of the condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profiles_automation#values SwitchOrganizationPortsProfilesAutomation#values}
  */
  readonly values: string[];
}

export function switchOrganizationPortsProfilesAutomationRulesConditionsToTerraform(struct?: SwitchOrganizationPortsProfilesAutomationRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function switchOrganizationPortsProfilesAutomationRulesConditionsToHclTerraform(struct?: SwitchOrganizationPortsProfilesAutomationRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchOrganizationPortsProfilesAutomationRulesConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchOrganizationPortsProfilesAutomationRulesConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchOrganizationPortsProfilesAutomationRulesConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._values = value.values;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class SwitchOrganizationPortsProfilesAutomationRulesConditionsList extends cdktf.ComplexList {
  public internalValue? : SwitchOrganizationPortsProfilesAutomationRulesConditions[] | cdktf.IResolvable

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
  public get(index: number): SwitchOrganizationPortsProfilesAutomationRulesConditionsOutputReference {
    return new SwitchOrganizationPortsProfilesAutomationRulesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchOrganizationPortsProfilesAutomationRules {
  /**
  * Configuration settings for port profile automation conditions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profiles_automation#conditions SwitchOrganizationPortsProfilesAutomation#conditions}
  */
  readonly conditions: SwitchOrganizationPortsProfilesAutomationRulesConditions[] | cdktf.IResolvable;
  /**
  * Priority of automation rule in sequence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profiles_automation#priority SwitchOrganizationPortsProfilesAutomation#priority}
  */
  readonly priority: number;
  /**
  * ID of port profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profiles_automation#profile_id SwitchOrganizationPortsProfilesAutomation#profile_id}
  */
  readonly profileId?: string;
  /**
  * Name of port profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profiles_automation#profile_name SwitchOrganizationPortsProfilesAutomation#profile_name}
  */
  readonly profileName?: string;
}

export function switchOrganizationPortsProfilesAutomationRulesToTerraform(struct?: SwitchOrganizationPortsProfilesAutomationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(switchOrganizationPortsProfilesAutomationRulesConditionsToTerraform, false)(struct!.conditions),
    priority: cdktf.numberToTerraform(struct!.priority),
    profile_id: cdktf.stringToTerraform(struct!.profileId),
    profile_name: cdktf.stringToTerraform(struct!.profileName),
  }
}


export function switchOrganizationPortsProfilesAutomationRulesToHclTerraform(struct?: SwitchOrganizationPortsProfilesAutomationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(switchOrganizationPortsProfilesAutomationRulesConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "SwitchOrganizationPortsProfilesAutomationRulesConditionsList",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    profile_id: {
      value: cdktf.stringToHclTerraform(struct!.profileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile_name: {
      value: cdktf.stringToHclTerraform(struct!.profileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchOrganizationPortsProfilesAutomationRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchOrganizationPortsProfilesAutomationRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._profileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileId = this._profileId;
    }
    if (this._profileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileName = this._profileName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchOrganizationPortsProfilesAutomationRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
      this._priority = undefined;
      this._profileId = undefined;
      this._profileName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
      this._priority = value.priority;
      this._profileId = value.profileId;
      this._profileName = value.profileName;
    }
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new SwitchOrganizationPortsProfilesAutomationRulesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: SwitchOrganizationPortsProfilesAutomationRulesConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
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

  // profile_id - computed: false, optional: true, required: false
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  public resetProfileId() {
    this._profileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // profile_name - computed: false, optional: true, required: false
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  public resetProfileName() {
    this._profileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }
}

export class SwitchOrganizationPortsProfilesAutomationRulesList extends cdktf.ComplexList {
  public internalValue? : SwitchOrganizationPortsProfilesAutomationRules[] | cdktf.IResolvable

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
  public get(index: number): SwitchOrganizationPortsProfilesAutomationRulesOutputReference {
    return new SwitchOrganizationPortsProfilesAutomationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profiles_automation meraki_switch_organization_ports_profiles_automation}
*/
export class SwitchOrganizationPortsProfilesAutomation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_organization_ports_profiles_automation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchOrganizationPortsProfilesAutomation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchOrganizationPortsProfilesAutomation to import
  * @param importFromId The id of the existing SwitchOrganizationPortsProfilesAutomation that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profiles_automation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchOrganizationPortsProfilesAutomation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_organization_ports_profiles_automation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profiles_automation meraki_switch_organization_ports_profiles_automation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchOrganizationPortsProfilesAutomationConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchOrganizationPortsProfilesAutomationConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_organization_ports_profiles_automation',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignedSwitchPorts.internalValue = config.assignedSwitchPorts;
    this._description = config.description;
    this._fallbackProfileId = config.fallbackProfileId;
    this._fallbackProfileName = config.fallbackProfileName;
    this._name = config.name;
    this._organizationId = config.organizationId;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assigned_switch_ports - computed: false, optional: true, required: false
  private _assignedSwitchPorts = new SwitchOrganizationPortsProfilesAutomationAssignedSwitchPortsList(this, "assigned_switch_ports", false);
  public get assignedSwitchPorts() {
    return this._assignedSwitchPorts;
  }
  public putAssignedSwitchPorts(value: SwitchOrganizationPortsProfilesAutomationAssignedSwitchPorts[] | cdktf.IResolvable) {
    this._assignedSwitchPorts.internalValue = value;
  }
  public resetAssignedSwitchPorts() {
    this._assignedSwitchPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedSwitchPortsInput() {
    return this._assignedSwitchPorts.internalValue;
  }

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

  // fallback_profile_id - computed: false, optional: true, required: false
  private _fallbackProfileId?: string; 
  public get fallbackProfileId() {
    return this.getStringAttribute('fallback_profile_id');
  }
  public set fallbackProfileId(value: string) {
    this._fallbackProfileId = value;
  }
  public resetFallbackProfileId() {
    this._fallbackProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackProfileIdInput() {
    return this._fallbackProfileId;
  }

  // fallback_profile_name - computed: false, optional: true, required: false
  private _fallbackProfileName?: string; 
  public get fallbackProfileName() {
    return this.getStringAttribute('fallback_profile_name');
  }
  public set fallbackProfileName(value: string) {
    this._fallbackProfileName = value;
  }
  public resetFallbackProfileName() {
    this._fallbackProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackProfileNameInput() {
    return this._fallbackProfileName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new SwitchOrganizationPortsProfilesAutomationRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: SwitchOrganizationPortsProfilesAutomationRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assigned_switch_ports: cdktf.listMapper(switchOrganizationPortsProfilesAutomationAssignedSwitchPortsToTerraform, false)(this._assignedSwitchPorts.internalValue),
      description: cdktf.stringToTerraform(this._description),
      fallback_profile_id: cdktf.stringToTerraform(this._fallbackProfileId),
      fallback_profile_name: cdktf.stringToTerraform(this._fallbackProfileName),
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      rules: cdktf.listMapper(switchOrganizationPortsProfilesAutomationRulesToTerraform, false)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assigned_switch_ports: {
        value: cdktf.listMapperHcl(switchOrganizationPortsProfilesAutomationAssignedSwitchPortsToHclTerraform, false)(this._assignedSwitchPorts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchOrganizationPortsProfilesAutomationAssignedSwitchPortsList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_profile_id: {
        value: cdktf.stringToHclTerraform(this._fallbackProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_profile_name: {
        value: cdktf.stringToHclTerraform(this._fallbackProfileName),
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
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(switchOrganizationPortsProfilesAutomationRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchOrganizationPortsProfilesAutomationRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
