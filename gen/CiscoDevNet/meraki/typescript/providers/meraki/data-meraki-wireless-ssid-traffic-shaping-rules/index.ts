// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_ssid_traffic_shaping_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiWirelessSsidTrafficShapingRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_ssid_traffic_shaping_rules#network_id DataMerakiWirelessSsidTrafficShapingRules#network_id}
  */
  readonly networkId: string;
  /**
  * Wireless SSID number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_ssid_traffic_shaping_rules#number DataMerakiWirelessSsidTrafficShapingRules#number}
  */
  readonly number: string;
}
export interface DataMerakiWirelessSsidTrafficShapingRulesRulesDefinitions {
}

export function dataMerakiWirelessSsidTrafficShapingRulesRulesDefinitionsToTerraform(struct?: DataMerakiWirelessSsidTrafficShapingRulesRulesDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiWirelessSsidTrafficShapingRulesRulesDefinitionsToHclTerraform(struct?: DataMerakiWirelessSsidTrafficShapingRulesRulesDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiWirelessSsidTrafficShapingRulesRulesDefinitionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMerakiWirelessSsidTrafficShapingRulesRulesDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiWirelessSsidTrafficShapingRulesRulesDefinitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataMerakiWirelessSsidTrafficShapingRulesRulesDefinitionsList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiWirelessSsidTrafficShapingRulesRulesDefinitionsOutputReference {
    return new DataMerakiWirelessSsidTrafficShapingRulesRulesDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMerakiWirelessSsidTrafficShapingRulesRules {
}

export function dataMerakiWirelessSsidTrafficShapingRulesRulesToTerraform(struct?: DataMerakiWirelessSsidTrafficShapingRulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiWirelessSsidTrafficShapingRulesRulesToHclTerraform(struct?: DataMerakiWirelessSsidTrafficShapingRulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiWirelessSsidTrafficShapingRulesRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMerakiWirelessSsidTrafficShapingRulesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiWirelessSsidTrafficShapingRulesRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definitions - computed: true, optional: false, required: false
  private _definitions = new DataMerakiWirelessSsidTrafficShapingRulesRulesDefinitionsList(this, "definitions", false);
  public get definitions() {
    return this._definitions;
  }

  // dscp_tag_value - computed: true, optional: false, required: false
  public get dscpTagValue() {
    return this.getNumberAttribute('dscp_tag_value');
  }

  // pcp_tag_value - computed: true, optional: false, required: false
  public get pcpTagValue() {
    return this.getNumberAttribute('pcp_tag_value');
  }

  // per_client_bandwidth_limits_bandwidth_limits_limit_down - computed: true, optional: false, required: false
  public get perClientBandwidthLimitsBandwidthLimitsLimitDown() {
    return this.getNumberAttribute('per_client_bandwidth_limits_bandwidth_limits_limit_down');
  }

  // per_client_bandwidth_limits_bandwidth_limits_limit_up - computed: true, optional: false, required: false
  public get perClientBandwidthLimitsBandwidthLimitsLimitUp() {
    return this.getNumberAttribute('per_client_bandwidth_limits_bandwidth_limits_limit_up');
  }

  // per_client_bandwidth_limits_settings - computed: true, optional: false, required: false
  public get perClientBandwidthLimitsSettings() {
    return this.getStringAttribute('per_client_bandwidth_limits_settings');
  }
}

export class DataMerakiWirelessSsidTrafficShapingRulesRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiWirelessSsidTrafficShapingRulesRulesOutputReference {
    return new DataMerakiWirelessSsidTrafficShapingRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_ssid_traffic_shaping_rules meraki_wireless_ssid_traffic_shaping_rules}
*/
export class DataMerakiWirelessSsidTrafficShapingRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_ssid_traffic_shaping_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiWirelessSsidTrafficShapingRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiWirelessSsidTrafficShapingRules to import
  * @param importFromId The id of the existing DataMerakiWirelessSsidTrafficShapingRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_ssid_traffic_shaping_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiWirelessSsidTrafficShapingRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_ssid_traffic_shaping_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_ssid_traffic_shaping_rules meraki_wireless_ssid_traffic_shaping_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiWirelessSsidTrafficShapingRulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiWirelessSsidTrafficShapingRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_ssid_traffic_shaping_rules',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._networkId = config.networkId;
    this._number = config.number;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_rules_enabled - computed: true, optional: false, required: false
  public get defaultRulesEnabled() {
    return this.getBooleanAttribute('default_rules_enabled');
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

  // rules - computed: true, optional: false, required: false
  private _rules = new DataMerakiWirelessSsidTrafficShapingRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // traffic_shaping_enabled - computed: true, optional: false, required: false
  public get trafficShapingEnabled() {
    return this.getBooleanAttribute('traffic_shaping_enabled');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_id: cdktf.stringToTerraform(this._networkId),
      number: cdktf.stringToTerraform(this._number),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
