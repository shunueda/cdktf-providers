// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/network_group_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiNetworkGroupPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/network_group_policy#id DataMerakiNetworkGroupPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name for your group policy. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/network_group_policy#name DataMerakiNetworkGroupPolicy#name}
  */
  readonly name?: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/network_group_policy#network_id DataMerakiNetworkGroupPolicy#network_id}
  */
  readonly networkId: string;
}
export interface DataMerakiNetworkGroupPolicyBonjourForwardingRules {
}

export function dataMerakiNetworkGroupPolicyBonjourForwardingRulesToTerraform(struct?: DataMerakiNetworkGroupPolicyBonjourForwardingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiNetworkGroupPolicyBonjourForwardingRulesToHclTerraform(struct?: DataMerakiNetworkGroupPolicyBonjourForwardingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiNetworkGroupPolicyBonjourForwardingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiNetworkGroupPolicyBonjourForwardingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiNetworkGroupPolicyBonjourForwardingRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // services - computed: true, optional: false, required: false
  public get services() {
    return cdktf.Fn.tolist(this.getListAttribute('services'));
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
}

export class DataMerakiNetworkGroupPolicyBonjourForwardingRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiNetworkGroupPolicyBonjourForwardingRulesOutputReference {
    return new DataMerakiNetworkGroupPolicyBonjourForwardingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMerakiNetworkGroupPolicyL3FirewallRules {
}

export function dataMerakiNetworkGroupPolicyL3FirewallRulesToTerraform(struct?: DataMerakiNetworkGroupPolicyL3FirewallRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiNetworkGroupPolicyL3FirewallRulesToHclTerraform(struct?: DataMerakiNetworkGroupPolicyL3FirewallRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiNetworkGroupPolicyL3FirewallRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiNetworkGroupPolicyL3FirewallRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiNetworkGroupPolicyL3FirewallRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // dest_cidr - computed: true, optional: false, required: false
  public get destCidr() {
    return this.getStringAttribute('dest_cidr');
  }

  // dest_port - computed: true, optional: false, required: false
  public get destPort() {
    return this.getStringAttribute('dest_port');
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataMerakiNetworkGroupPolicyL3FirewallRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiNetworkGroupPolicyL3FirewallRulesOutputReference {
    return new DataMerakiNetworkGroupPolicyL3FirewallRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMerakiNetworkGroupPolicyL7FirewallRules {
}

export function dataMerakiNetworkGroupPolicyL7FirewallRulesToTerraform(struct?: DataMerakiNetworkGroupPolicyL7FirewallRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiNetworkGroupPolicyL7FirewallRulesToHclTerraform(struct?: DataMerakiNetworkGroupPolicyL7FirewallRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiNetworkGroupPolicyL7FirewallRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiNetworkGroupPolicyL7FirewallRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiNetworkGroupPolicyL7FirewallRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
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

export class DataMerakiNetworkGroupPolicyL7FirewallRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiNetworkGroupPolicyL7FirewallRulesOutputReference {
    return new DataMerakiNetworkGroupPolicyL7FirewallRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMerakiNetworkGroupPolicyTrafficShapingRulesDefinitions {
}

export function dataMerakiNetworkGroupPolicyTrafficShapingRulesDefinitionsToTerraform(struct?: DataMerakiNetworkGroupPolicyTrafficShapingRulesDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiNetworkGroupPolicyTrafficShapingRulesDefinitionsToHclTerraform(struct?: DataMerakiNetworkGroupPolicyTrafficShapingRulesDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiNetworkGroupPolicyTrafficShapingRulesDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiNetworkGroupPolicyTrafficShapingRulesDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiNetworkGroupPolicyTrafficShapingRulesDefinitions | undefined) {
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

export class DataMerakiNetworkGroupPolicyTrafficShapingRulesDefinitionsList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiNetworkGroupPolicyTrafficShapingRulesDefinitionsOutputReference {
    return new DataMerakiNetworkGroupPolicyTrafficShapingRulesDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMerakiNetworkGroupPolicyTrafficShapingRules {
}

export function dataMerakiNetworkGroupPolicyTrafficShapingRulesToTerraform(struct?: DataMerakiNetworkGroupPolicyTrafficShapingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiNetworkGroupPolicyTrafficShapingRulesToHclTerraform(struct?: DataMerakiNetworkGroupPolicyTrafficShapingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiNetworkGroupPolicyTrafficShapingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiNetworkGroupPolicyTrafficShapingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiNetworkGroupPolicyTrafficShapingRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definitions - computed: true, optional: false, required: false
  private _definitions = new DataMerakiNetworkGroupPolicyTrafficShapingRulesDefinitionsList(this, "definitions", false);
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

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }
}

export class DataMerakiNetworkGroupPolicyTrafficShapingRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiNetworkGroupPolicyTrafficShapingRulesOutputReference {
    return new DataMerakiNetworkGroupPolicyTrafficShapingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/network_group_policy meraki_network_group_policy}
*/
export class DataMerakiNetworkGroupPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_network_group_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiNetworkGroupPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiNetworkGroupPolicy to import
  * @param importFromId The id of the existing DataMerakiNetworkGroupPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/network_group_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiNetworkGroupPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_network_group_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/network_group_policy meraki_network_group_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiNetworkGroupPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiNetworkGroupPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_network_group_policy',
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
    this._id = config.id;
    this._name = config.name;
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_limit_down - computed: true, optional: false, required: false
  public get bandwidthLimitDown() {
    return this.getNumberAttribute('bandwidth_limit_down');
  }

  // bandwidth_limit_up - computed: true, optional: false, required: false
  public get bandwidthLimitUp() {
    return this.getNumberAttribute('bandwidth_limit_up');
  }

  // bandwidth_settings - computed: true, optional: false, required: false
  public get bandwidthSettings() {
    return this.getStringAttribute('bandwidth_settings');
  }

  // bonjour_forwarding_rules - computed: true, optional: false, required: false
  private _bonjourForwardingRules = new DataMerakiNetworkGroupPolicyBonjourForwardingRulesList(this, "bonjour_forwarding_rules", false);
  public get bonjourForwardingRules() {
    return this._bonjourForwardingRules;
  }

  // bonjour_forwarding_settings - computed: true, optional: false, required: false
  public get bonjourForwardingSettings() {
    return this.getStringAttribute('bonjour_forwarding_settings');
  }

  // content_filtering_allowed_url_patterns - computed: true, optional: false, required: false
  public get contentFilteringAllowedUrlPatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('content_filtering_allowed_url_patterns'));
  }

  // content_filtering_allowed_url_patterns_settings - computed: true, optional: false, required: false
  public get contentFilteringAllowedUrlPatternsSettings() {
    return this.getStringAttribute('content_filtering_allowed_url_patterns_settings');
  }

  // content_filtering_blocked_url_categories - computed: true, optional: false, required: false
  public get contentFilteringBlockedUrlCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('content_filtering_blocked_url_categories'));
  }

  // content_filtering_blocked_url_categories_settings - computed: true, optional: false, required: false
  public get contentFilteringBlockedUrlCategoriesSettings() {
    return this.getStringAttribute('content_filtering_blocked_url_categories_settings');
  }

  // content_filtering_blocked_url_patterns - computed: true, optional: false, required: false
  public get contentFilteringBlockedUrlPatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('content_filtering_blocked_url_patterns'));
  }

  // content_filtering_blocked_url_patterns_settings - computed: true, optional: false, required: false
  public get contentFilteringBlockedUrlPatternsSettings() {
    return this.getStringAttribute('content_filtering_blocked_url_patterns_settings');
  }

  // firewall_and_traffic_shaping_settings - computed: true, optional: false, required: false
  public get firewallAndTrafficShapingSettings() {
    return this.getStringAttribute('firewall_and_traffic_shaping_settings');
  }

  // force_delete - computed: true, optional: false, required: false
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
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

  // l3_firewall_rules - computed: true, optional: false, required: false
  private _l3FirewallRules = new DataMerakiNetworkGroupPolicyL3FirewallRulesList(this, "l3_firewall_rules", false);
  public get l3FirewallRules() {
    return this._l3FirewallRules;
  }

  // l7_firewall_rules - computed: true, optional: false, required: false
  private _l7FirewallRules = new DataMerakiNetworkGroupPolicyL7FirewallRulesList(this, "l7_firewall_rules", false);
  public get l7FirewallRules() {
    return this._l7FirewallRules;
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

  // scheduling_enabled - computed: true, optional: false, required: false
  public get schedulingEnabled() {
    return this.getBooleanAttribute('scheduling_enabled');
  }

  // scheduling_friday_active - computed: true, optional: false, required: false
  public get schedulingFridayActive() {
    return this.getBooleanAttribute('scheduling_friday_active');
  }

  // scheduling_friday_from - computed: true, optional: false, required: false
  public get schedulingFridayFrom() {
    return this.getStringAttribute('scheduling_friday_from');
  }

  // scheduling_friday_to - computed: true, optional: false, required: false
  public get schedulingFridayTo() {
    return this.getStringAttribute('scheduling_friday_to');
  }

  // scheduling_monday_active - computed: true, optional: false, required: false
  public get schedulingMondayActive() {
    return this.getBooleanAttribute('scheduling_monday_active');
  }

  // scheduling_monday_from - computed: true, optional: false, required: false
  public get schedulingMondayFrom() {
    return this.getStringAttribute('scheduling_monday_from');
  }

  // scheduling_monday_to - computed: true, optional: false, required: false
  public get schedulingMondayTo() {
    return this.getStringAttribute('scheduling_monday_to');
  }

  // scheduling_saturday_active - computed: true, optional: false, required: false
  public get schedulingSaturdayActive() {
    return this.getBooleanAttribute('scheduling_saturday_active');
  }

  // scheduling_saturday_from - computed: true, optional: false, required: false
  public get schedulingSaturdayFrom() {
    return this.getStringAttribute('scheduling_saturday_from');
  }

  // scheduling_saturday_to - computed: true, optional: false, required: false
  public get schedulingSaturdayTo() {
    return this.getStringAttribute('scheduling_saturday_to');
  }

  // scheduling_sunday_active - computed: true, optional: false, required: false
  public get schedulingSundayActive() {
    return this.getBooleanAttribute('scheduling_sunday_active');
  }

  // scheduling_sunday_from - computed: true, optional: false, required: false
  public get schedulingSundayFrom() {
    return this.getStringAttribute('scheduling_sunday_from');
  }

  // scheduling_sunday_to - computed: true, optional: false, required: false
  public get schedulingSundayTo() {
    return this.getStringAttribute('scheduling_sunday_to');
  }

  // scheduling_thursday_active - computed: true, optional: false, required: false
  public get schedulingThursdayActive() {
    return this.getBooleanAttribute('scheduling_thursday_active');
  }

  // scheduling_thursday_from - computed: true, optional: false, required: false
  public get schedulingThursdayFrom() {
    return this.getStringAttribute('scheduling_thursday_from');
  }

  // scheduling_thursday_to - computed: true, optional: false, required: false
  public get schedulingThursdayTo() {
    return this.getStringAttribute('scheduling_thursday_to');
  }

  // scheduling_tuesday_active - computed: true, optional: false, required: false
  public get schedulingTuesdayActive() {
    return this.getBooleanAttribute('scheduling_tuesday_active');
  }

  // scheduling_tuesday_from - computed: true, optional: false, required: false
  public get schedulingTuesdayFrom() {
    return this.getStringAttribute('scheduling_tuesday_from');
  }

  // scheduling_tuesday_to - computed: true, optional: false, required: false
  public get schedulingTuesdayTo() {
    return this.getStringAttribute('scheduling_tuesday_to');
  }

  // scheduling_wednesday_active - computed: true, optional: false, required: false
  public get schedulingWednesdayActive() {
    return this.getBooleanAttribute('scheduling_wednesday_active');
  }

  // scheduling_wednesday_from - computed: true, optional: false, required: false
  public get schedulingWednesdayFrom() {
    return this.getStringAttribute('scheduling_wednesday_from');
  }

  // scheduling_wednesday_to - computed: true, optional: false, required: false
  public get schedulingWednesdayTo() {
    return this.getStringAttribute('scheduling_wednesday_to');
  }

  // splash_auth_settings - computed: true, optional: false, required: false
  public get splashAuthSettings() {
    return this.getStringAttribute('splash_auth_settings');
  }

  // traffic_shaping_rules - computed: true, optional: false, required: false
  private _trafficShapingRules = new DataMerakiNetworkGroupPolicyTrafficShapingRulesList(this, "traffic_shaping_rules", false);
  public get trafficShapingRules() {
    return this._trafficShapingRules;
  }

  // vlan_tagging_settings - computed: true, optional: false, required: false
  public get vlanTaggingSettings() {
    return this.getStringAttribute('vlan_tagging_settings');
  }

  // vlan_tagging_vlan_id - computed: true, optional: false, required: false
  public get vlanTaggingVlanId() {
    return this.getStringAttribute('vlan_tagging_vlan_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
