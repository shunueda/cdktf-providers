// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceTrafficShapingRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether default traffic shaping rules are enabled (true) or disabled (false). There are 4 default rules, which can be seen on your network`s traffic shaping page. Note that default rules count against the rule limit of 8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_rules#default_rules_enabled ApplianceTrafficShapingRules#default_rules_enabled}
  */
  readonly defaultRulesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_rules#network_id ApplianceTrafficShapingRules#network_id}
  */
  readonly networkId: string;
  /**
  * An array of traffic shaping rules. Rules are applied in the order that they are specified in. An empty list (or null) means no rules. Note that you are allowed a maximum of 8 rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_rules#rules ApplianceTrafficShapingRules#rules}
  */
  readonly rules?: ApplianceTrafficShapingRulesRules[] | cdktf.IResolvable;
}
export interface ApplianceTrafficShapingRulesRulesDefinitions {
  /**
  * The type of definition. Can be one of `application`, `applicationCategory`, `host`, `port`, `ipRange` or `localNet`.
  *   - Choices: `application`, `applicationCategory`, `host`, `ipRange`, `localNet`, `port`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_rules#type ApplianceTrafficShapingRules#type}
  */
  readonly type: string;
  /**
  * If 'type' is `host`, `port`, `ipRange` or `localNet`, then 'value' must be a string, matching either a hostname (e.g. 'somesite.com'), a port (e.g. 8080), or an IP range ('192.1.0.0', '192.1.0.0/16', or '10.1.0.0/16:80'). `localNet` also supports CIDR notation, excluding custom ports. If 'type' is `application` or `applicationCategory`, then 'value' must be an application category or application ID (for a list of IDs for your network, use the trafficShaping/applicationCategories endpoint).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_rules#value ApplianceTrafficShapingRules#value}
  */
  readonly value: string;
}

export function applianceTrafficShapingRulesRulesDefinitionsToTerraform(struct?: ApplianceTrafficShapingRulesRulesDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applianceTrafficShapingRulesRulesDefinitionsToHclTerraform(struct?: ApplianceTrafficShapingRulesRulesDefinitions | cdktf.IResolvable): any {
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

export class ApplianceTrafficShapingRulesRulesDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplianceTrafficShapingRulesRulesDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceTrafficShapingRulesRulesDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
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

export class ApplianceTrafficShapingRulesRulesDefinitionsList extends cdktf.ComplexList {
  public internalValue? : ApplianceTrafficShapingRulesRulesDefinitions[] | cdktf.IResolvable

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
  public get(index: number): ApplianceTrafficShapingRulesRulesDefinitionsOutputReference {
    return new ApplianceTrafficShapingRulesRulesDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplianceTrafficShapingRulesRules {
  /**
  * A list of objects describing the definitions of your traffic shaping rule. At least one definition is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_rules#definitions ApplianceTrafficShapingRules#definitions}
  */
  readonly definitions: ApplianceTrafficShapingRulesRulesDefinitions[] | cdktf.IResolvable;
  /**
  * The DSCP tag applied by your rule. null means `Do not change DSCP tag`. For a list of possible tag values, use the trafficShaping/dscpTaggingOptions endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_rules#dscp_tag_value ApplianceTrafficShapingRules#dscp_tag_value}
  */
  readonly dscpTagValue?: number;
  /**
  * The maximum download limit (integer, in Kbps).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_rules#per_client_bandwidth_limit_down ApplianceTrafficShapingRules#per_client_bandwidth_limit_down}
  */
  readonly perClientBandwidthLimitDown?: number;
  /**
  * How bandwidth limits are applied by your rule. Can be one of `network default`, `ignore` or `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_rules#per_client_bandwidth_limit_settings ApplianceTrafficShapingRules#per_client_bandwidth_limit_settings}
  */
  readonly perClientBandwidthLimitSettings?: string;
  /**
  * The maximum upload limit (integer, in Kbps).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_rules#per_client_bandwidth_limit_up ApplianceTrafficShapingRules#per_client_bandwidth_limit_up}
  */
  readonly perClientBandwidthLimitUp?: number;
  /**
  * A string, indicating the priority level for packets bound to your rule. Can be `low`, `normal` or `high`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_rules#priority ApplianceTrafficShapingRules#priority}
  */
  readonly priority?: string;
}

export function applianceTrafficShapingRulesRulesToTerraform(struct?: ApplianceTrafficShapingRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definitions: cdktf.listMapper(applianceTrafficShapingRulesRulesDefinitionsToTerraform, false)(struct!.definitions),
    dscp_tag_value: cdktf.numberToTerraform(struct!.dscpTagValue),
    per_client_bandwidth_limit_down: cdktf.numberToTerraform(struct!.perClientBandwidthLimitDown),
    per_client_bandwidth_limit_settings: cdktf.stringToTerraform(struct!.perClientBandwidthLimitSettings),
    per_client_bandwidth_limit_up: cdktf.numberToTerraform(struct!.perClientBandwidthLimitUp),
    priority: cdktf.stringToTerraform(struct!.priority),
  }
}


export function applianceTrafficShapingRulesRulesToHclTerraform(struct?: ApplianceTrafficShapingRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definitions: {
      value: cdktf.listMapperHcl(applianceTrafficShapingRulesRulesDefinitionsToHclTerraform, false)(struct!.definitions),
      isBlock: true,
      type: "list",
      storageClassType: "ApplianceTrafficShapingRulesRulesDefinitionsList",
    },
    dscp_tag_value: {
      value: cdktf.numberToHclTerraform(struct!.dscpTagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_client_bandwidth_limit_down: {
      value: cdktf.numberToHclTerraform(struct!.perClientBandwidthLimitDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_client_bandwidth_limit_settings: {
      value: cdktf.stringToHclTerraform(struct!.perClientBandwidthLimitSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_client_bandwidth_limit_up: {
      value: cdktf.numberToHclTerraform(struct!.perClientBandwidthLimitUp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceTrafficShapingRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplianceTrafficShapingRulesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.definitions = this._definitions?.internalValue;
    }
    if (this._dscpTagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpTagValue = this._dscpTagValue;
    }
    if (this._perClientBandwidthLimitDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.perClientBandwidthLimitDown = this._perClientBandwidthLimitDown;
    }
    if (this._perClientBandwidthLimitSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.perClientBandwidthLimitSettings = this._perClientBandwidthLimitSettings;
    }
    if (this._perClientBandwidthLimitUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.perClientBandwidthLimitUp = this._perClientBandwidthLimitUp;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceTrafficShapingRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definitions.internalValue = undefined;
      this._dscpTagValue = undefined;
      this._perClientBandwidthLimitDown = undefined;
      this._perClientBandwidthLimitSettings = undefined;
      this._perClientBandwidthLimitUp = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definitions.internalValue = value.definitions;
      this._dscpTagValue = value.dscpTagValue;
      this._perClientBandwidthLimitDown = value.perClientBandwidthLimitDown;
      this._perClientBandwidthLimitSettings = value.perClientBandwidthLimitSettings;
      this._perClientBandwidthLimitUp = value.perClientBandwidthLimitUp;
      this._priority = value.priority;
    }
  }

  // definitions - computed: false, optional: false, required: true
  private _definitions = new ApplianceTrafficShapingRulesRulesDefinitionsList(this, "definitions", false);
  public get definitions() {
    return this._definitions;
  }
  public putDefinitions(value: ApplianceTrafficShapingRulesRulesDefinitions[] | cdktf.IResolvable) {
    this._definitions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionsInput() {
    return this._definitions.internalValue;
  }

  // dscp_tag_value - computed: false, optional: true, required: false
  private _dscpTagValue?: number; 
  public get dscpTagValue() {
    return this.getNumberAttribute('dscp_tag_value');
  }
  public set dscpTagValue(value: number) {
    this._dscpTagValue = value;
  }
  public resetDscpTagValue() {
    this._dscpTagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpTagValueInput() {
    return this._dscpTagValue;
  }

  // per_client_bandwidth_limit_down - computed: false, optional: true, required: false
  private _perClientBandwidthLimitDown?: number; 
  public get perClientBandwidthLimitDown() {
    return this.getNumberAttribute('per_client_bandwidth_limit_down');
  }
  public set perClientBandwidthLimitDown(value: number) {
    this._perClientBandwidthLimitDown = value;
  }
  public resetPerClientBandwidthLimitDown() {
    this._perClientBandwidthLimitDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perClientBandwidthLimitDownInput() {
    return this._perClientBandwidthLimitDown;
  }

  // per_client_bandwidth_limit_settings - computed: false, optional: true, required: false
  private _perClientBandwidthLimitSettings?: string; 
  public get perClientBandwidthLimitSettings() {
    return this.getStringAttribute('per_client_bandwidth_limit_settings');
  }
  public set perClientBandwidthLimitSettings(value: string) {
    this._perClientBandwidthLimitSettings = value;
  }
  public resetPerClientBandwidthLimitSettings() {
    this._perClientBandwidthLimitSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perClientBandwidthLimitSettingsInput() {
    return this._perClientBandwidthLimitSettings;
  }

  // per_client_bandwidth_limit_up - computed: false, optional: true, required: false
  private _perClientBandwidthLimitUp?: number; 
  public get perClientBandwidthLimitUp() {
    return this.getNumberAttribute('per_client_bandwidth_limit_up');
  }
  public set perClientBandwidthLimitUp(value: number) {
    this._perClientBandwidthLimitUp = value;
  }
  public resetPerClientBandwidthLimitUp() {
    this._perClientBandwidthLimitUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perClientBandwidthLimitUpInput() {
    return this._perClientBandwidthLimitUp;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class ApplianceTrafficShapingRulesRulesList extends cdktf.ComplexList {
  public internalValue? : ApplianceTrafficShapingRulesRules[] | cdktf.IResolvable

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
  public get(index: number): ApplianceTrafficShapingRulesRulesOutputReference {
    return new ApplianceTrafficShapingRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_rules meraki_appliance_traffic_shaping_rules}
*/
export class ApplianceTrafficShapingRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_traffic_shaping_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceTrafficShapingRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceTrafficShapingRules to import
  * @param importFromId The id of the existing ApplianceTrafficShapingRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceTrafficShapingRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_traffic_shaping_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_rules meraki_appliance_traffic_shaping_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceTrafficShapingRulesConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceTrafficShapingRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_traffic_shaping_rules',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultRulesEnabled = config.defaultRulesEnabled;
    this._networkId = config.networkId;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_rules_enabled - computed: false, optional: true, required: false
  private _defaultRulesEnabled?: boolean | cdktf.IResolvable; 
  public get defaultRulesEnabled() {
    return this.getBooleanAttribute('default_rules_enabled');
  }
  public set defaultRulesEnabled(value: boolean | cdktf.IResolvable) {
    this._defaultRulesEnabled = value;
  }
  public resetDefaultRulesEnabled() {
    this._defaultRulesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRulesEnabledInput() {
    return this._defaultRulesEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new ApplianceTrafficShapingRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: ApplianceTrafficShapingRulesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
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
      default_rules_enabled: cdktf.booleanToTerraform(this._defaultRulesEnabled),
      network_id: cdktf.stringToTerraform(this._networkId),
      rules: cdktf.listMapper(applianceTrafficShapingRulesRulesToTerraform, false)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_rules_enabled: {
        value: cdktf.booleanToHclTerraform(this._defaultRulesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(applianceTrafficShapingRulesRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplianceTrafficShapingRulesRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
