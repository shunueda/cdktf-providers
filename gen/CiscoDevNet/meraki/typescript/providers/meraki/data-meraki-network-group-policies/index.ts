// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/network_group_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiNetworkGroupPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/network_group_policies#network_id DataMerakiNetworkGroupPolicies#network_id}
  */
  readonly networkId: string;
}
export interface DataMerakiNetworkGroupPoliciesItemsBonjourForwardingRules {
}

export function dataMerakiNetworkGroupPoliciesItemsBonjourForwardingRulesToTerraform(struct?: DataMerakiNetworkGroupPoliciesItemsBonjourForwardingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiNetworkGroupPoliciesItemsBonjourForwardingRulesToHclTerraform(struct?: DataMerakiNetworkGroupPoliciesItemsBonjourForwardingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiNetworkGroupPoliciesItemsBonjourForwardingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiNetworkGroupPoliciesItemsBonjourForwardingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiNetworkGroupPoliciesItemsBonjourForwardingRules | undefined) {
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

export class DataMerakiNetworkGroupPoliciesItemsBonjourForwardingRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiNetworkGroupPoliciesItemsBonjourForwardingRulesOutputReference {
    return new DataMerakiNetworkGroupPoliciesItemsBonjourForwardingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMerakiNetworkGroupPoliciesItemsL3FirewallRules {
}

export function dataMerakiNetworkGroupPoliciesItemsL3FirewallRulesToTerraform(struct?: DataMerakiNetworkGroupPoliciesItemsL3FirewallRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiNetworkGroupPoliciesItemsL3FirewallRulesToHclTerraform(struct?: DataMerakiNetworkGroupPoliciesItemsL3FirewallRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiNetworkGroupPoliciesItemsL3FirewallRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiNetworkGroupPoliciesItemsL3FirewallRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiNetworkGroupPoliciesItemsL3FirewallRules | undefined) {
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

export class DataMerakiNetworkGroupPoliciesItemsL3FirewallRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiNetworkGroupPoliciesItemsL3FirewallRulesOutputReference {
    return new DataMerakiNetworkGroupPoliciesItemsL3FirewallRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMerakiNetworkGroupPoliciesItemsL7FirewallRules {
}

export function dataMerakiNetworkGroupPoliciesItemsL7FirewallRulesToTerraform(struct?: DataMerakiNetworkGroupPoliciesItemsL7FirewallRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiNetworkGroupPoliciesItemsL7FirewallRulesToHclTerraform(struct?: DataMerakiNetworkGroupPoliciesItemsL7FirewallRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiNetworkGroupPoliciesItemsL7FirewallRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiNetworkGroupPoliciesItemsL7FirewallRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiNetworkGroupPoliciesItemsL7FirewallRules | undefined) {
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

export class DataMerakiNetworkGroupPoliciesItemsL7FirewallRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiNetworkGroupPoliciesItemsL7FirewallRulesOutputReference {
    return new DataMerakiNetworkGroupPoliciesItemsL7FirewallRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMerakiNetworkGroupPoliciesItemsTrafficShapingRulesDefinitions {
}

export function dataMerakiNetworkGroupPoliciesItemsTrafficShapingRulesDefinitionsToTerraform(struct?: DataMerakiNetworkGroupPoliciesItemsTrafficShapingRulesDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiNetworkGroupPoliciesItemsTrafficShapingRulesDefinitionsToHclTerraform(struct?: DataMerakiNetworkGroupPoliciesItemsTrafficShapingRulesDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiNetworkGroupPoliciesItemsTrafficShapingRulesDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiNetworkGroupPoliciesItemsTrafficShapingRulesDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiNetworkGroupPoliciesItemsTrafficShapingRulesDefinitions | undefined) {
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

export class DataMerakiNetworkGroupPoliciesItemsTrafficShapingRulesDefinitionsList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiNetworkGroupPoliciesItemsTrafficShapingRulesDefinitionsOutputReference {
    return new DataMerakiNetworkGroupPoliciesItemsTrafficShapingRulesDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMerakiNetworkGroupPoliciesItemsTrafficShapingRules {
}

export function dataMerakiNetworkGroupPoliciesItemsTrafficShapingRulesToTerraform(struct?: DataMerakiNetworkGroupPoliciesItemsTrafficShapingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiNetworkGroupPoliciesItemsTrafficShapingRulesToHclTerraform(struct?: DataMerakiNetworkGroupPoliciesItemsTrafficShapingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiNetworkGroupPoliciesItemsTrafficShapingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiNetworkGroupPoliciesItemsTrafficShapingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiNetworkGroupPoliciesItemsTrafficShapingRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definitions - computed: true, optional: false, required: false
  private _definitions = new DataMerakiNetworkGroupPoliciesItemsTrafficShapingRulesDefinitionsList(this, "definitions", false);
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

export class DataMerakiNetworkGroupPoliciesItemsTrafficShapingRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiNetworkGroupPoliciesItemsTrafficShapingRulesOutputReference {
    return new DataMerakiNetworkGroupPoliciesItemsTrafficShapingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMerakiNetworkGroupPoliciesItems {
}

export function dataMerakiNetworkGroupPoliciesItemsToTerraform(struct?: DataMerakiNetworkGroupPoliciesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiNetworkGroupPoliciesItemsToHclTerraform(struct?: DataMerakiNetworkGroupPoliciesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiNetworkGroupPoliciesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiNetworkGroupPoliciesItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiNetworkGroupPoliciesItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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
  private _bonjourForwardingRules = new DataMerakiNetworkGroupPoliciesItemsBonjourForwardingRulesList(this, "bonjour_forwarding_rules", false);
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // l3_firewall_rules - computed: true, optional: false, required: false
  private _l3FirewallRules = new DataMerakiNetworkGroupPoliciesItemsL3FirewallRulesList(this, "l3_firewall_rules", false);
  public get l3FirewallRules() {
    return this._l3FirewallRules;
  }

  // l7_firewall_rules - computed: true, optional: false, required: false
  private _l7FirewallRules = new DataMerakiNetworkGroupPoliciesItemsL7FirewallRulesList(this, "l7_firewall_rules", false);
  public get l7FirewallRules() {
    return this._l7FirewallRules;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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
  private _trafficShapingRules = new DataMerakiNetworkGroupPoliciesItemsTrafficShapingRulesList(this, "traffic_shaping_rules", false);
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
}

export class DataMerakiNetworkGroupPoliciesItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiNetworkGroupPoliciesItemsOutputReference {
    return new DataMerakiNetworkGroupPoliciesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/network_group_policies meraki_network_group_policies}
*/
export class DataMerakiNetworkGroupPolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_network_group_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiNetworkGroupPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiNetworkGroupPolicies to import
  * @param importFromId The id of the existing DataMerakiNetworkGroupPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/network_group_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiNetworkGroupPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_network_group_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/network_group_policies meraki_network_group_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiNetworkGroupPoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiNetworkGroupPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_network_group_policies',
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
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // items - computed: true, optional: false, required: false
  private _items = new DataMerakiNetworkGroupPoliciesItemsList(this, "items", true);
  public get items() {
    return this._items;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_id: cdktf.stringToTerraform(this._networkId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
