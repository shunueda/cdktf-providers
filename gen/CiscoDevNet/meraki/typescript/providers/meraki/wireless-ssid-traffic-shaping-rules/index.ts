// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_traffic_shaping_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessSsidTrafficShapingRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether default traffic shaping rules are enabled (true) or disabled (false). There are 4 default rules, which can be seen on your network`s traffic shaping page. Note that default rules count against the rule limit of 8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_traffic_shaping_rules#default_rules_enabled WirelessSsidTrafficShapingRules#default_rules_enabled}
  */
  readonly defaultRulesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_traffic_shaping_rules#network_id WirelessSsidTrafficShapingRules#network_id}
  */
  readonly networkId: string;
  /**
  * Wireless SSID number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_traffic_shaping_rules#number WirelessSsidTrafficShapingRules#number}
  */
  readonly number: string;
  /**
  * An array of traffic shaping rules. Rules are applied in the order that they are specified in. An empty list (or null) means no rules. Note that you are allowed a maximum of 8 rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_traffic_shaping_rules#rules WirelessSsidTrafficShapingRules#rules}
  */
  readonly rules?: WirelessSsidTrafficShapingRulesRules[] | cdktf.IResolvable;
  /**
  * Whether traffic shaping rules are applied to clients on your SSID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_traffic_shaping_rules#traffic_shaping_enabled WirelessSsidTrafficShapingRules#traffic_shaping_enabled}
  */
  readonly trafficShapingEnabled?: boolean | cdktf.IResolvable;
}
export interface WirelessSsidTrafficShapingRulesRulesDefinitions {
  /**
  * The type of definition. Can be one of `application`, `applicationCategory`, `host`, `port`, `ipRange` or `localNet`.
  *   - Choices: `application`, `applicationCategory`, `host`, `ipRange`, `localNet`, `port`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_traffic_shaping_rules#type WirelessSsidTrafficShapingRules#type}
  */
  readonly type: string;
  /**
  * If 'type' is `host`, `port`, `ipRange` or `localNet`, then 'value' must be a string, matching either a hostname (e.g. 'somesite.com'), a port (e.g. 8080), or an IP range ('192.1.0.0', '192.1.0.0/16', or '10.1.0.0/16:80'). `localNet` also supports CIDR notation, excluding custom ports. If 'type' is `application` or `applicationCategory`, then 'value' must be an application category or application ID (for a list of IDs for your network, use the trafficShaping/applicationCategories endpoint).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_traffic_shaping_rules#value WirelessSsidTrafficShapingRules#value}
  */
  readonly value: string;
}

export function wirelessSsidTrafficShapingRulesRulesDefinitionsToTerraform(struct?: WirelessSsidTrafficShapingRulesRulesDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wirelessSsidTrafficShapingRulesRulesDefinitionsToHclTerraform(struct?: WirelessSsidTrafficShapingRulesRulesDefinitions | cdktf.IResolvable): any {
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

export class WirelessSsidTrafficShapingRulesRulesDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessSsidTrafficShapingRulesRulesDefinitions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WirelessSsidTrafficShapingRulesRulesDefinitions | cdktf.IResolvable | undefined) {
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

export class WirelessSsidTrafficShapingRulesRulesDefinitionsList extends cdktf.ComplexList {
  public internalValue? : WirelessSsidTrafficShapingRulesRulesDefinitions[] | cdktf.IResolvable

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
  public get(index: number): WirelessSsidTrafficShapingRulesRulesDefinitionsOutputReference {
    return new WirelessSsidTrafficShapingRulesRulesDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessSsidTrafficShapingRulesRules {
  /**
  * A list of objects describing the definitions of your traffic shaping rule. At least one definition is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_traffic_shaping_rules#definitions WirelessSsidTrafficShapingRules#definitions}
  */
  readonly definitions: WirelessSsidTrafficShapingRulesRulesDefinitions[] | cdktf.IResolvable;
  /**
  * The DSCP tag applied by your rule. null means `Do not change DSCP tag`. For a list of possible tag values, use the trafficShaping/dscpTaggingOptions endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_traffic_shaping_rules#dscp_tag_value WirelessSsidTrafficShapingRules#dscp_tag_value}
  */
  readonly dscpTagValue?: number;
  /**
  * The PCP tag applied by your rule. Can be 0 (lowest priority) through 7 (highest priority). null means `Do not set PCP tag`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_traffic_shaping_rules#pcp_tag_value WirelessSsidTrafficShapingRules#pcp_tag_value}
  */
  readonly pcpTagValue?: number;
  /**
  * The maximum download limit (integer, in Kbps).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_traffic_shaping_rules#per_client_bandwidth_limits_bandwidth_limits_limit_down WirelessSsidTrafficShapingRules#per_client_bandwidth_limits_bandwidth_limits_limit_down}
  */
  readonly perClientBandwidthLimitsBandwidthLimitsLimitDown?: number;
  /**
  * The maximum upload limit (integer, in Kbps).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_traffic_shaping_rules#per_client_bandwidth_limits_bandwidth_limits_limit_up WirelessSsidTrafficShapingRules#per_client_bandwidth_limits_bandwidth_limits_limit_up}
  */
  readonly perClientBandwidthLimitsBandwidthLimitsLimitUp?: number;
  /**
  * How bandwidth limits are applied by your rule. Can be one of `network default`, `ignore` or `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_traffic_shaping_rules#per_client_bandwidth_limits_settings WirelessSsidTrafficShapingRules#per_client_bandwidth_limits_settings}
  */
  readonly perClientBandwidthLimitsSettings?: string;
}

export function wirelessSsidTrafficShapingRulesRulesToTerraform(struct?: WirelessSsidTrafficShapingRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definitions: cdktf.listMapper(wirelessSsidTrafficShapingRulesRulesDefinitionsToTerraform, false)(struct!.definitions),
    dscp_tag_value: cdktf.numberToTerraform(struct!.dscpTagValue),
    pcp_tag_value: cdktf.numberToTerraform(struct!.pcpTagValue),
    per_client_bandwidth_limits_bandwidth_limits_limit_down: cdktf.numberToTerraform(struct!.perClientBandwidthLimitsBandwidthLimitsLimitDown),
    per_client_bandwidth_limits_bandwidth_limits_limit_up: cdktf.numberToTerraform(struct!.perClientBandwidthLimitsBandwidthLimitsLimitUp),
    per_client_bandwidth_limits_settings: cdktf.stringToTerraform(struct!.perClientBandwidthLimitsSettings),
  }
}


export function wirelessSsidTrafficShapingRulesRulesToHclTerraform(struct?: WirelessSsidTrafficShapingRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definitions: {
      value: cdktf.listMapperHcl(wirelessSsidTrafficShapingRulesRulesDefinitionsToHclTerraform, false)(struct!.definitions),
      isBlock: true,
      type: "list",
      storageClassType: "WirelessSsidTrafficShapingRulesRulesDefinitionsList",
    },
    dscp_tag_value: {
      value: cdktf.numberToHclTerraform(struct!.dscpTagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pcp_tag_value: {
      value: cdktf.numberToHclTerraform(struct!.pcpTagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_client_bandwidth_limits_bandwidth_limits_limit_down: {
      value: cdktf.numberToHclTerraform(struct!.perClientBandwidthLimitsBandwidthLimitsLimitDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_client_bandwidth_limits_bandwidth_limits_limit_up: {
      value: cdktf.numberToHclTerraform(struct!.perClientBandwidthLimitsBandwidthLimitsLimitUp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_client_bandwidth_limits_settings: {
      value: cdktf.stringToHclTerraform(struct!.perClientBandwidthLimitsSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessSsidTrafficShapingRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessSsidTrafficShapingRulesRules | cdktf.IResolvable | undefined {
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
    if (this._pcpTagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcpTagValue = this._pcpTagValue;
    }
    if (this._perClientBandwidthLimitsBandwidthLimitsLimitDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.perClientBandwidthLimitsBandwidthLimitsLimitDown = this._perClientBandwidthLimitsBandwidthLimitsLimitDown;
    }
    if (this._perClientBandwidthLimitsBandwidthLimitsLimitUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.perClientBandwidthLimitsBandwidthLimitsLimitUp = this._perClientBandwidthLimitsBandwidthLimitsLimitUp;
    }
    if (this._perClientBandwidthLimitsSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.perClientBandwidthLimitsSettings = this._perClientBandwidthLimitsSettings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessSsidTrafficShapingRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definitions.internalValue = undefined;
      this._dscpTagValue = undefined;
      this._pcpTagValue = undefined;
      this._perClientBandwidthLimitsBandwidthLimitsLimitDown = undefined;
      this._perClientBandwidthLimitsBandwidthLimitsLimitUp = undefined;
      this._perClientBandwidthLimitsSettings = undefined;
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
      this._pcpTagValue = value.pcpTagValue;
      this._perClientBandwidthLimitsBandwidthLimitsLimitDown = value.perClientBandwidthLimitsBandwidthLimitsLimitDown;
      this._perClientBandwidthLimitsBandwidthLimitsLimitUp = value.perClientBandwidthLimitsBandwidthLimitsLimitUp;
      this._perClientBandwidthLimitsSettings = value.perClientBandwidthLimitsSettings;
    }
  }

  // definitions - computed: false, optional: false, required: true
  private _definitions = new WirelessSsidTrafficShapingRulesRulesDefinitionsList(this, "definitions", false);
  public get definitions() {
    return this._definitions;
  }
  public putDefinitions(value: WirelessSsidTrafficShapingRulesRulesDefinitions[] | cdktf.IResolvable) {
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

  // pcp_tag_value - computed: false, optional: true, required: false
  private _pcpTagValue?: number; 
  public get pcpTagValue() {
    return this.getNumberAttribute('pcp_tag_value');
  }
  public set pcpTagValue(value: number) {
    this._pcpTagValue = value;
  }
  public resetPcpTagValue() {
    this._pcpTagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcpTagValueInput() {
    return this._pcpTagValue;
  }

  // per_client_bandwidth_limits_bandwidth_limits_limit_down - computed: false, optional: true, required: false
  private _perClientBandwidthLimitsBandwidthLimitsLimitDown?: number; 
  public get perClientBandwidthLimitsBandwidthLimitsLimitDown() {
    return this.getNumberAttribute('per_client_bandwidth_limits_bandwidth_limits_limit_down');
  }
  public set perClientBandwidthLimitsBandwidthLimitsLimitDown(value: number) {
    this._perClientBandwidthLimitsBandwidthLimitsLimitDown = value;
  }
  public resetPerClientBandwidthLimitsBandwidthLimitsLimitDown() {
    this._perClientBandwidthLimitsBandwidthLimitsLimitDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perClientBandwidthLimitsBandwidthLimitsLimitDownInput() {
    return this._perClientBandwidthLimitsBandwidthLimitsLimitDown;
  }

  // per_client_bandwidth_limits_bandwidth_limits_limit_up - computed: false, optional: true, required: false
  private _perClientBandwidthLimitsBandwidthLimitsLimitUp?: number; 
  public get perClientBandwidthLimitsBandwidthLimitsLimitUp() {
    return this.getNumberAttribute('per_client_bandwidth_limits_bandwidth_limits_limit_up');
  }
  public set perClientBandwidthLimitsBandwidthLimitsLimitUp(value: number) {
    this._perClientBandwidthLimitsBandwidthLimitsLimitUp = value;
  }
  public resetPerClientBandwidthLimitsBandwidthLimitsLimitUp() {
    this._perClientBandwidthLimitsBandwidthLimitsLimitUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perClientBandwidthLimitsBandwidthLimitsLimitUpInput() {
    return this._perClientBandwidthLimitsBandwidthLimitsLimitUp;
  }

  // per_client_bandwidth_limits_settings - computed: false, optional: true, required: false
  private _perClientBandwidthLimitsSettings?: string; 
  public get perClientBandwidthLimitsSettings() {
    return this.getStringAttribute('per_client_bandwidth_limits_settings');
  }
  public set perClientBandwidthLimitsSettings(value: string) {
    this._perClientBandwidthLimitsSettings = value;
  }
  public resetPerClientBandwidthLimitsSettings() {
    this._perClientBandwidthLimitsSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perClientBandwidthLimitsSettingsInput() {
    return this._perClientBandwidthLimitsSettings;
  }
}

export class WirelessSsidTrafficShapingRulesRulesList extends cdktf.ComplexList {
  public internalValue? : WirelessSsidTrafficShapingRulesRules[] | cdktf.IResolvable

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
  public get(index: number): WirelessSsidTrafficShapingRulesRulesOutputReference {
    return new WirelessSsidTrafficShapingRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_traffic_shaping_rules meraki_wireless_ssid_traffic_shaping_rules}
*/
export class WirelessSsidTrafficShapingRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_ssid_traffic_shaping_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessSsidTrafficShapingRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessSsidTrafficShapingRules to import
  * @param importFromId The id of the existing WirelessSsidTrafficShapingRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_traffic_shaping_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessSsidTrafficShapingRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_ssid_traffic_shaping_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_traffic_shaping_rules meraki_wireless_ssid_traffic_shaping_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessSsidTrafficShapingRulesConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessSsidTrafficShapingRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_ssid_traffic_shaping_rules',
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
    this._defaultRulesEnabled = config.defaultRulesEnabled;
    this._networkId = config.networkId;
    this._number = config.number;
    this._rules.internalValue = config.rules;
    this._trafficShapingEnabled = config.trafficShapingEnabled;
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

  // number - computed: false, optional: false, required: true
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new WirelessSsidTrafficShapingRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: WirelessSsidTrafficShapingRulesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // traffic_shaping_enabled - computed: false, optional: true, required: false
  private _trafficShapingEnabled?: boolean | cdktf.IResolvable; 
  public get trafficShapingEnabled() {
    return this.getBooleanAttribute('traffic_shaping_enabled');
  }
  public set trafficShapingEnabled(value: boolean | cdktf.IResolvable) {
    this._trafficShapingEnabled = value;
  }
  public resetTrafficShapingEnabled() {
    this._trafficShapingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficShapingEnabledInput() {
    return this._trafficShapingEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_rules_enabled: cdktf.booleanToTerraform(this._defaultRulesEnabled),
      network_id: cdktf.stringToTerraform(this._networkId),
      number: cdktf.stringToTerraform(this._number),
      rules: cdktf.listMapper(wirelessSsidTrafficShapingRulesRulesToTerraform, false)(this._rules.internalValue),
      traffic_shaping_enabled: cdktf.booleanToTerraform(this._trafficShapingEnabled),
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
      number: {
        value: cdktf.stringToHclTerraform(this._number),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(wirelessSsidTrafficShapingRulesRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelessSsidTrafficShapingRulesRulesList",
      },
      traffic_shaping_enabled: {
        value: cdktf.booleanToHclTerraform(this._trafficShapingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
