// https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallFilteringRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The action the Firewall Filtering policy rule takes when packets match the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#action FirewallFilteringRule#action}
  */
  readonly action?: string;
  /**
  * If set to true, the default rule is applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#default_rule FirewallFilteringRule#default_rule}
  */
  readonly defaultRule?: boolean | cdktf.IResolvable;
  /**
  * Additional information about the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#description FirewallFilteringRule#description}
  */
  readonly description?: string;
  /**
  * Destination addresses. Supports IPv4, FQDNs, or wildcard FQDNs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#dest_addresses FirewallFilteringRule#dest_addresses}
  */
  readonly destAddresses?: string[];
  /**
  * Destination countries for which the rule is applicable. If not set, the rule is not restricted to specific destination countries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#dest_countries FirewallFilteringRule#dest_countries}
  */
  readonly destCountries?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#dest_ip_categories FirewallFilteringRule#dest_ip_categories}
  */
  readonly destIpCategories?: string[];
  /**
  * List of device trust levels for which the rule must be applied. This field is applicable for devices that are managed using Zscaler Client Connector. The trust levels are assigned to the devices based on your posture configurations in the Zscaler Client Connector Portal. If no value is set, this field is ignored during the policy evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#device_trust_levels FirewallFilteringRule#device_trust_levels}
  */
  readonly deviceTrustLevels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#enable_full_logging FirewallFilteringRule#enable_full_logging}
  */
  readonly enableFullLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#exclude_src_countries FirewallFilteringRule#exclude_src_countries}
  */
  readonly excludeSrcCountries?: boolean | cdktf.IResolvable;
  /**
  * Name of the Firewall Filtering policy rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#name FirewallFilteringRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#nw_applications FirewallFilteringRule#nw_applications}
  */
  readonly nwApplications?: string[];
  /**
  * Rule order number. If omitted, the rule will be added to the end of the rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#order FirewallFilteringRule#order}
  */
  readonly order: number;
  /**
  * If set to true, a predefined rule is applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#predefined FirewallFilteringRule#predefined}
  */
  readonly predefined?: boolean | cdktf.IResolvable;
  /**
  * Admin rank of the Firewall Filtering policy rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#rank FirewallFilteringRule#rank}
  */
  readonly rank?: number;
  /**
  * Destination countries for which the rule is applicable. If not set, the rule is not restricted to specific destination countries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#source_countries FirewallFilteringRule#source_countries}
  */
  readonly sourceCountries?: string[];
  /**
  * User-defined source IP addresses for which the rule is applicable. If not set, the rule is not restricted to a specific source IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#src_ips FirewallFilteringRule#src_ips}
  */
  readonly srcIps?: string[];
  /**
  * Determines whether the Firewall Filtering policy rule is enabled or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#state FirewallFilteringRule#state}
  */
  readonly state?: string;
  /**
  * app_service_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#app_service_groups FirewallFilteringRule#app_service_groups}
  */
  readonly appServiceGroups?: FirewallFilteringRuleAppServiceGroups;
  /**
  * app_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#app_services FirewallFilteringRule#app_services}
  */
  readonly appServices?: FirewallFilteringRuleAppServices;
  /**
  * departments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#departments FirewallFilteringRule#departments}
  */
  readonly departments?: FirewallFilteringRuleDepartments;
  /**
  * dest_ip_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#dest_ip_groups FirewallFilteringRule#dest_ip_groups}
  */
  readonly destIpGroups?: FirewallFilteringRuleDestIpGroups;
  /**
  * device_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#device_groups FirewallFilteringRule#device_groups}
  */
  readonly deviceGroups?: FirewallFilteringRuleDeviceGroups;
  /**
  * devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#devices FirewallFilteringRule#devices}
  */
  readonly devices?: FirewallFilteringRuleDevices;
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#groups FirewallFilteringRule#groups}
  */
  readonly groups?: FirewallFilteringRuleGroups;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#labels FirewallFilteringRule#labels}
  */
  readonly labels?: FirewallFilteringRuleLabels;
  /**
  * location_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#location_groups FirewallFilteringRule#location_groups}
  */
  readonly locationGroups?: FirewallFilteringRuleLocationGroups;
  /**
  * locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#locations FirewallFilteringRule#locations}
  */
  readonly locations?: FirewallFilteringRuleLocations;
  /**
  * nw_application_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#nw_application_groups FirewallFilteringRule#nw_application_groups}
  */
  readonly nwApplicationGroups?: FirewallFilteringRuleNwApplicationGroups;
  /**
  * nw_service_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#nw_service_groups FirewallFilteringRule#nw_service_groups}
  */
  readonly nwServiceGroups?: FirewallFilteringRuleNwServiceGroups;
  /**
  * nw_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#nw_services FirewallFilteringRule#nw_services}
  */
  readonly nwServices?: FirewallFilteringRuleNwServices;
  /**
  * src_ip_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#src_ip_groups FirewallFilteringRule#src_ip_groups}
  */
  readonly srcIpGroups?: FirewallFilteringRuleSrcIpGroups;
  /**
  * time_windows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#time_windows FirewallFilteringRule#time_windows}
  */
  readonly timeWindows?: FirewallFilteringRuleTimeWindows;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#timeouts FirewallFilteringRule#timeouts}
  */
  readonly timeouts?: FirewallFilteringRuleTimeouts;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#users FirewallFilteringRule#users}
  */
  readonly users?: FirewallFilteringRuleUsers;
  /**
  * workload_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#workload_groups FirewallFilteringRule#workload_groups}
  */
  readonly workloadGroups?: FirewallFilteringRuleWorkloadGroups[] | cdktf.IResolvable;
  /**
  * zpa_app_segments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#zpa_app_segments FirewallFilteringRule#zpa_app_segments}
  */
  readonly zpaAppSegments?: FirewallFilteringRuleZpaAppSegments[] | cdktf.IResolvable;
}
export interface FirewallFilteringRuleAppServiceGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#id FirewallFilteringRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function firewallFilteringRuleAppServiceGroupsToTerraform(struct?: FirewallFilteringRuleAppServiceGroupsOutputReference | FirewallFilteringRuleAppServiceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function firewallFilteringRuleAppServiceGroupsToHclTerraform(struct?: FirewallFilteringRuleAppServiceGroupsOutputReference | FirewallFilteringRuleAppServiceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilteringRuleAppServiceGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallFilteringRuleAppServiceGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilteringRuleAppServiceGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface FirewallFilteringRuleAppServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#id FirewallFilteringRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function firewallFilteringRuleAppServicesToTerraform(struct?: FirewallFilteringRuleAppServicesOutputReference | FirewallFilteringRuleAppServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function firewallFilteringRuleAppServicesToHclTerraform(struct?: FirewallFilteringRuleAppServicesOutputReference | FirewallFilteringRuleAppServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilteringRuleAppServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallFilteringRuleAppServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilteringRuleAppServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface FirewallFilteringRuleDepartments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#id FirewallFilteringRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function firewallFilteringRuleDepartmentsToTerraform(struct?: FirewallFilteringRuleDepartmentsOutputReference | FirewallFilteringRuleDepartments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function firewallFilteringRuleDepartmentsToHclTerraform(struct?: FirewallFilteringRuleDepartmentsOutputReference | FirewallFilteringRuleDepartments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilteringRuleDepartmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallFilteringRuleDepartments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilteringRuleDepartments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface FirewallFilteringRuleDestIpGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#id FirewallFilteringRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function firewallFilteringRuleDestIpGroupsToTerraform(struct?: FirewallFilteringRuleDestIpGroupsOutputReference | FirewallFilteringRuleDestIpGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function firewallFilteringRuleDestIpGroupsToHclTerraform(struct?: FirewallFilteringRuleDestIpGroupsOutputReference | FirewallFilteringRuleDestIpGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilteringRuleDestIpGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallFilteringRuleDestIpGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilteringRuleDestIpGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface FirewallFilteringRuleDeviceGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#id FirewallFilteringRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function firewallFilteringRuleDeviceGroupsToTerraform(struct?: FirewallFilteringRuleDeviceGroupsOutputReference | FirewallFilteringRuleDeviceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function firewallFilteringRuleDeviceGroupsToHclTerraform(struct?: FirewallFilteringRuleDeviceGroupsOutputReference | FirewallFilteringRuleDeviceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilteringRuleDeviceGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallFilteringRuleDeviceGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilteringRuleDeviceGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface FirewallFilteringRuleDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#id FirewallFilteringRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function firewallFilteringRuleDevicesToTerraform(struct?: FirewallFilteringRuleDevicesOutputReference | FirewallFilteringRuleDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function firewallFilteringRuleDevicesToHclTerraform(struct?: FirewallFilteringRuleDevicesOutputReference | FirewallFilteringRuleDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilteringRuleDevicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallFilteringRuleDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilteringRuleDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface FirewallFilteringRuleGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#id FirewallFilteringRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function firewallFilteringRuleGroupsToTerraform(struct?: FirewallFilteringRuleGroupsOutputReference | FirewallFilteringRuleGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function firewallFilteringRuleGroupsToHclTerraform(struct?: FirewallFilteringRuleGroupsOutputReference | FirewallFilteringRuleGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilteringRuleGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallFilteringRuleGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilteringRuleGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface FirewallFilteringRuleLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#id FirewallFilteringRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function firewallFilteringRuleLabelsToTerraform(struct?: FirewallFilteringRuleLabelsOutputReference | FirewallFilteringRuleLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function firewallFilteringRuleLabelsToHclTerraform(struct?: FirewallFilteringRuleLabelsOutputReference | FirewallFilteringRuleLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilteringRuleLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallFilteringRuleLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilteringRuleLabels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface FirewallFilteringRuleLocationGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#id FirewallFilteringRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function firewallFilteringRuleLocationGroupsToTerraform(struct?: FirewallFilteringRuleLocationGroupsOutputReference | FirewallFilteringRuleLocationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function firewallFilteringRuleLocationGroupsToHclTerraform(struct?: FirewallFilteringRuleLocationGroupsOutputReference | FirewallFilteringRuleLocationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilteringRuleLocationGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallFilteringRuleLocationGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilteringRuleLocationGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface FirewallFilteringRuleLocations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#id FirewallFilteringRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function firewallFilteringRuleLocationsToTerraform(struct?: FirewallFilteringRuleLocationsOutputReference | FirewallFilteringRuleLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function firewallFilteringRuleLocationsToHclTerraform(struct?: FirewallFilteringRuleLocationsOutputReference | FirewallFilteringRuleLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilteringRuleLocationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallFilteringRuleLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilteringRuleLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface FirewallFilteringRuleNwApplicationGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#id FirewallFilteringRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function firewallFilteringRuleNwApplicationGroupsToTerraform(struct?: FirewallFilteringRuleNwApplicationGroupsOutputReference | FirewallFilteringRuleNwApplicationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function firewallFilteringRuleNwApplicationGroupsToHclTerraform(struct?: FirewallFilteringRuleNwApplicationGroupsOutputReference | FirewallFilteringRuleNwApplicationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilteringRuleNwApplicationGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallFilteringRuleNwApplicationGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilteringRuleNwApplicationGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface FirewallFilteringRuleNwServiceGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#id FirewallFilteringRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function firewallFilteringRuleNwServiceGroupsToTerraform(struct?: FirewallFilteringRuleNwServiceGroupsOutputReference | FirewallFilteringRuleNwServiceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function firewallFilteringRuleNwServiceGroupsToHclTerraform(struct?: FirewallFilteringRuleNwServiceGroupsOutputReference | FirewallFilteringRuleNwServiceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilteringRuleNwServiceGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallFilteringRuleNwServiceGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilteringRuleNwServiceGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface FirewallFilteringRuleNwServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#id FirewallFilteringRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function firewallFilteringRuleNwServicesToTerraform(struct?: FirewallFilteringRuleNwServicesOutputReference | FirewallFilteringRuleNwServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function firewallFilteringRuleNwServicesToHclTerraform(struct?: FirewallFilteringRuleNwServicesOutputReference | FirewallFilteringRuleNwServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilteringRuleNwServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallFilteringRuleNwServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilteringRuleNwServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface FirewallFilteringRuleSrcIpGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#id FirewallFilteringRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function firewallFilteringRuleSrcIpGroupsToTerraform(struct?: FirewallFilteringRuleSrcIpGroupsOutputReference | FirewallFilteringRuleSrcIpGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function firewallFilteringRuleSrcIpGroupsToHclTerraform(struct?: FirewallFilteringRuleSrcIpGroupsOutputReference | FirewallFilteringRuleSrcIpGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilteringRuleSrcIpGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallFilteringRuleSrcIpGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilteringRuleSrcIpGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface FirewallFilteringRuleTimeWindows {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#id FirewallFilteringRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function firewallFilteringRuleTimeWindowsToTerraform(struct?: FirewallFilteringRuleTimeWindowsOutputReference | FirewallFilteringRuleTimeWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function firewallFilteringRuleTimeWindowsToHclTerraform(struct?: FirewallFilteringRuleTimeWindowsOutputReference | FirewallFilteringRuleTimeWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilteringRuleTimeWindowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallFilteringRuleTimeWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilteringRuleTimeWindows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface FirewallFilteringRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#create FirewallFilteringRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#update FirewallFilteringRule#update}
  */
  readonly update?: string;
}

export function firewallFilteringRuleTimeoutsToTerraform(struct?: FirewallFilteringRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function firewallFilteringRuleTimeoutsToHclTerraform(struct?: FirewallFilteringRuleTimeouts | cdktf.IResolvable): any {
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

export class FirewallFilteringRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallFilteringRuleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilteringRuleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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
export interface FirewallFilteringRuleUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#id FirewallFilteringRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function firewallFilteringRuleUsersToTerraform(struct?: FirewallFilteringRuleUsersOutputReference | FirewallFilteringRuleUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function firewallFilteringRuleUsersToHclTerraform(struct?: FirewallFilteringRuleUsersOutputReference | FirewallFilteringRuleUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilteringRuleUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallFilteringRuleUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilteringRuleUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface FirewallFilteringRuleWorkloadGroups {
  /**
  * The unique identifier for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#id FirewallFilteringRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * The name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#name FirewallFilteringRule#name}
  */
  readonly name?: string;
}

export function firewallFilteringRuleWorkloadGroupsToTerraform(struct?: FirewallFilteringRuleWorkloadGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallFilteringRuleWorkloadGroupsToHclTerraform(struct?: FirewallFilteringRuleWorkloadGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilteringRuleWorkloadGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallFilteringRuleWorkloadGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilteringRuleWorkloadGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: true, required: false
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
}

export class FirewallFilteringRuleWorkloadGroupsList extends cdktf.ComplexList {
  public internalValue? : FirewallFilteringRuleWorkloadGroups[] | cdktf.IResolvable

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
  public get(index: number): FirewallFilteringRuleWorkloadGroupsOutputReference {
    return new FirewallFilteringRuleWorkloadGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallFilteringRuleZpaAppSegments {
  /**
  * External ID of the application segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#external_id FirewallFilteringRule#external_id}
  */
  readonly externalId: string;
  /**
  * Name of the application segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#name FirewallFilteringRule#name}
  */
  readonly name: string;
}

export function firewallFilteringRuleZpaAppSegmentsToTerraform(struct?: FirewallFilteringRuleZpaAppSegments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallFilteringRuleZpaAppSegmentsToHclTerraform(struct?: FirewallFilteringRuleZpaAppSegments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilteringRuleZpaAppSegmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallFilteringRuleZpaAppSegments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilteringRuleZpaAppSegments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalId = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalId = value.externalId;
      this._name = value.name;
    }
  }

  // external_id - computed: false, optional: false, required: true
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
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
}

export class FirewallFilteringRuleZpaAppSegmentsList extends cdktf.ComplexList {
  public internalValue? : FirewallFilteringRuleZpaAppSegments[] | cdktf.IResolvable

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
  public get(index: number): FirewallFilteringRuleZpaAppSegmentsOutputReference {
    return new FirewallFilteringRuleZpaAppSegmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule zia_firewall_filtering_rule}
*/
export class FirewallFilteringRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_firewall_filtering_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallFilteringRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallFilteringRule to import
  * @param importFromId The id of the existing FirewallFilteringRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallFilteringRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_firewall_filtering_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/firewall_filtering_rule zia_firewall_filtering_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallFilteringRuleConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallFilteringRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'zia_firewall_filtering_rule',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.3',
        providerVersionConstraint: '4.6.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._defaultRule = config.defaultRule;
    this._description = config.description;
    this._destAddresses = config.destAddresses;
    this._destCountries = config.destCountries;
    this._destIpCategories = config.destIpCategories;
    this._deviceTrustLevels = config.deviceTrustLevels;
    this._enableFullLogging = config.enableFullLogging;
    this._excludeSrcCountries = config.excludeSrcCountries;
    this._name = config.name;
    this._nwApplications = config.nwApplications;
    this._order = config.order;
    this._predefined = config.predefined;
    this._rank = config.rank;
    this._sourceCountries = config.sourceCountries;
    this._srcIps = config.srcIps;
    this._state = config.state;
    this._appServiceGroups.internalValue = config.appServiceGroups;
    this._appServices.internalValue = config.appServices;
    this._departments.internalValue = config.departments;
    this._destIpGroups.internalValue = config.destIpGroups;
    this._deviceGroups.internalValue = config.deviceGroups;
    this._devices.internalValue = config.devices;
    this._groups.internalValue = config.groups;
    this._labels.internalValue = config.labels;
    this._locationGroups.internalValue = config.locationGroups;
    this._locations.internalValue = config.locations;
    this._nwApplicationGroups.internalValue = config.nwApplicationGroups;
    this._nwServiceGroups.internalValue = config.nwServiceGroups;
    this._nwServices.internalValue = config.nwServices;
    this._srcIpGroups.internalValue = config.srcIpGroups;
    this._timeWindows.internalValue = config.timeWindows;
    this._timeouts.internalValue = config.timeouts;
    this._users.internalValue = config.users;
    this._workloadGroups.internalValue = config.workloadGroups;
    this._zpaAppSegments.internalValue = config.zpaAppSegments;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // default_rule - computed: false, optional: true, required: false
  private _defaultRule?: boolean | cdktf.IResolvable; 
  public get defaultRule() {
    return this.getBooleanAttribute('default_rule');
  }
  public set defaultRule(value: boolean | cdktf.IResolvable) {
    this._defaultRule = value;
  }
  public resetDefaultRule() {
    this._defaultRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRuleInput() {
    return this._defaultRule;
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

  // dest_addresses - computed: false, optional: true, required: false
  private _destAddresses?: string[]; 
  public get destAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('dest_addresses'));
  }
  public set destAddresses(value: string[]) {
    this._destAddresses = value;
  }
  public resetDestAddresses() {
    this._destAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destAddressesInput() {
    return this._destAddresses;
  }

  // dest_countries - computed: true, optional: true, required: false
  private _destCountries?: string[]; 
  public get destCountries() {
    return cdktf.Fn.tolist(this.getListAttribute('dest_countries'));
  }
  public set destCountries(value: string[]) {
    this._destCountries = value;
  }
  public resetDestCountries() {
    this._destCountries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destCountriesInput() {
    return this._destCountries;
  }

  // dest_ip_categories - computed: false, optional: true, required: false
  private _destIpCategories?: string[]; 
  public get destIpCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('dest_ip_categories'));
  }
  public set destIpCategories(value: string[]) {
    this._destIpCategories = value;
  }
  public resetDestIpCategories() {
    this._destIpCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destIpCategoriesInput() {
    return this._destIpCategories;
  }

  // device_trust_levels - computed: false, optional: true, required: false
  private _deviceTrustLevels?: string[]; 
  public get deviceTrustLevels() {
    return cdktf.Fn.tolist(this.getListAttribute('device_trust_levels'));
  }
  public set deviceTrustLevels(value: string[]) {
    this._deviceTrustLevels = value;
  }
  public resetDeviceTrustLevels() {
    this._deviceTrustLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTrustLevelsInput() {
    return this._deviceTrustLevels;
  }

  // enable_full_logging - computed: false, optional: true, required: false
  private _enableFullLogging?: boolean | cdktf.IResolvable; 
  public get enableFullLogging() {
    return this.getBooleanAttribute('enable_full_logging');
  }
  public set enableFullLogging(value: boolean | cdktf.IResolvable) {
    this._enableFullLogging = value;
  }
  public resetEnableFullLogging() {
    this._enableFullLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFullLoggingInput() {
    return this._enableFullLogging;
  }

  // exclude_src_countries - computed: false, optional: true, required: false
  private _excludeSrcCountries?: boolean | cdktf.IResolvable; 
  public get excludeSrcCountries() {
    return this.getBooleanAttribute('exclude_src_countries');
  }
  public set excludeSrcCountries(value: boolean | cdktf.IResolvable) {
    this._excludeSrcCountries = value;
  }
  public resetExcludeSrcCountries() {
    this._excludeSrcCountries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeSrcCountriesInput() {
    return this._excludeSrcCountries;
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

  // nw_applications - computed: false, optional: true, required: false
  private _nwApplications?: string[]; 
  public get nwApplications() {
    return cdktf.Fn.tolist(this.getListAttribute('nw_applications'));
  }
  public set nwApplications(value: string[]) {
    this._nwApplications = value;
  }
  public resetNwApplications() {
    this._nwApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nwApplicationsInput() {
    return this._nwApplications;
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // predefined - computed: false, optional: true, required: false
  private _predefined?: boolean | cdktf.IResolvable; 
  public get predefined() {
    return this.getBooleanAttribute('predefined');
  }
  public set predefined(value: boolean | cdktf.IResolvable) {
    this._predefined = value;
  }
  public resetPredefined() {
    this._predefined = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedInput() {
    return this._predefined;
  }

  // rank - computed: false, optional: true, required: false
  private _rank?: number; 
  public get rank() {
    return this.getNumberAttribute('rank');
  }
  public set rank(value: number) {
    this._rank = value;
  }
  public resetRank() {
    this._rank = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rankInput() {
    return this._rank;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getNumberAttribute('rule_id');
  }

  // source_countries - computed: true, optional: true, required: false
  private _sourceCountries?: string[]; 
  public get sourceCountries() {
    return cdktf.Fn.tolist(this.getListAttribute('source_countries'));
  }
  public set sourceCountries(value: string[]) {
    this._sourceCountries = value;
  }
  public resetSourceCountries() {
    this._sourceCountries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCountriesInput() {
    return this._sourceCountries;
  }

  // src_ips - computed: false, optional: true, required: false
  private _srcIps?: string[]; 
  public get srcIps() {
    return cdktf.Fn.tolist(this.getListAttribute('src_ips'));
  }
  public set srcIps(value: string[]) {
    this._srcIps = value;
  }
  public resetSrcIps() {
    this._srcIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpsInput() {
    return this._srcIps;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // app_service_groups - computed: false, optional: true, required: false
  private _appServiceGroups = new FirewallFilteringRuleAppServiceGroupsOutputReference(this, "app_service_groups");
  public get appServiceGroups() {
    return this._appServiceGroups;
  }
  public putAppServiceGroups(value: FirewallFilteringRuleAppServiceGroups) {
    this._appServiceGroups.internalValue = value;
  }
  public resetAppServiceGroups() {
    this._appServiceGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceGroupsInput() {
    return this._appServiceGroups.internalValue;
  }

  // app_services - computed: false, optional: true, required: false
  private _appServices = new FirewallFilteringRuleAppServicesOutputReference(this, "app_services");
  public get appServices() {
    return this._appServices;
  }
  public putAppServices(value: FirewallFilteringRuleAppServices) {
    this._appServices.internalValue = value;
  }
  public resetAppServices() {
    this._appServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appServicesInput() {
    return this._appServices.internalValue;
  }

  // departments - computed: false, optional: true, required: false
  private _departments = new FirewallFilteringRuleDepartmentsOutputReference(this, "departments");
  public get departments() {
    return this._departments;
  }
  public putDepartments(value: FirewallFilteringRuleDepartments) {
    this._departments.internalValue = value;
  }
  public resetDepartments() {
    this._departments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get departmentsInput() {
    return this._departments.internalValue;
  }

  // dest_ip_groups - computed: false, optional: true, required: false
  private _destIpGroups = new FirewallFilteringRuleDestIpGroupsOutputReference(this, "dest_ip_groups");
  public get destIpGroups() {
    return this._destIpGroups;
  }
  public putDestIpGroups(value: FirewallFilteringRuleDestIpGroups) {
    this._destIpGroups.internalValue = value;
  }
  public resetDestIpGroups() {
    this._destIpGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destIpGroupsInput() {
    return this._destIpGroups.internalValue;
  }

  // device_groups - computed: false, optional: true, required: false
  private _deviceGroups = new FirewallFilteringRuleDeviceGroupsOutputReference(this, "device_groups");
  public get deviceGroups() {
    return this._deviceGroups;
  }
  public putDeviceGroups(value: FirewallFilteringRuleDeviceGroups) {
    this._deviceGroups.internalValue = value;
  }
  public resetDeviceGroups() {
    this._deviceGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupsInput() {
    return this._deviceGroups.internalValue;
  }

  // devices - computed: false, optional: true, required: false
  private _devices = new FirewallFilteringRuleDevicesOutputReference(this, "devices");
  public get devices() {
    return this._devices;
  }
  public putDevices(value: FirewallFilteringRuleDevices) {
    this._devices.internalValue = value;
  }
  public resetDevices() {
    this._devices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new FirewallFilteringRuleGroupsOutputReference(this, "groups");
  public get groups() {
    return this._groups;
  }
  public putGroups(value: FirewallFilteringRuleGroups) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new FirewallFilteringRuleLabelsOutputReference(this, "labels");
  public get labels() {
    return this._labels;
  }
  public putLabels(value: FirewallFilteringRuleLabels) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // location_groups - computed: false, optional: true, required: false
  private _locationGroups = new FirewallFilteringRuleLocationGroupsOutputReference(this, "location_groups");
  public get locationGroups() {
    return this._locationGroups;
  }
  public putLocationGroups(value: FirewallFilteringRuleLocationGroups) {
    this._locationGroups.internalValue = value;
  }
  public resetLocationGroups() {
    this._locationGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationGroupsInput() {
    return this._locationGroups.internalValue;
  }

  // locations - computed: false, optional: true, required: false
  private _locations = new FirewallFilteringRuleLocationsOutputReference(this, "locations");
  public get locations() {
    return this._locations;
  }
  public putLocations(value: FirewallFilteringRuleLocations) {
    this._locations.internalValue = value;
  }
  public resetLocations() {
    this._locations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations.internalValue;
  }

  // nw_application_groups - computed: false, optional: true, required: false
  private _nwApplicationGroups = new FirewallFilteringRuleNwApplicationGroupsOutputReference(this, "nw_application_groups");
  public get nwApplicationGroups() {
    return this._nwApplicationGroups;
  }
  public putNwApplicationGroups(value: FirewallFilteringRuleNwApplicationGroups) {
    this._nwApplicationGroups.internalValue = value;
  }
  public resetNwApplicationGroups() {
    this._nwApplicationGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nwApplicationGroupsInput() {
    return this._nwApplicationGroups.internalValue;
  }

  // nw_service_groups - computed: false, optional: true, required: false
  private _nwServiceGroups = new FirewallFilteringRuleNwServiceGroupsOutputReference(this, "nw_service_groups");
  public get nwServiceGroups() {
    return this._nwServiceGroups;
  }
  public putNwServiceGroups(value: FirewallFilteringRuleNwServiceGroups) {
    this._nwServiceGroups.internalValue = value;
  }
  public resetNwServiceGroups() {
    this._nwServiceGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nwServiceGroupsInput() {
    return this._nwServiceGroups.internalValue;
  }

  // nw_services - computed: false, optional: true, required: false
  private _nwServices = new FirewallFilteringRuleNwServicesOutputReference(this, "nw_services");
  public get nwServices() {
    return this._nwServices;
  }
  public putNwServices(value: FirewallFilteringRuleNwServices) {
    this._nwServices.internalValue = value;
  }
  public resetNwServices() {
    this._nwServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nwServicesInput() {
    return this._nwServices.internalValue;
  }

  // src_ip_groups - computed: false, optional: true, required: false
  private _srcIpGroups = new FirewallFilteringRuleSrcIpGroupsOutputReference(this, "src_ip_groups");
  public get srcIpGroups() {
    return this._srcIpGroups;
  }
  public putSrcIpGroups(value: FirewallFilteringRuleSrcIpGroups) {
    this._srcIpGroups.internalValue = value;
  }
  public resetSrcIpGroups() {
    this._srcIpGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpGroupsInput() {
    return this._srcIpGroups.internalValue;
  }

  // time_windows - computed: false, optional: true, required: false
  private _timeWindows = new FirewallFilteringRuleTimeWindowsOutputReference(this, "time_windows");
  public get timeWindows() {
    return this._timeWindows;
  }
  public putTimeWindows(value: FirewallFilteringRuleTimeWindows) {
    this._timeWindows.internalValue = value;
  }
  public resetTimeWindows() {
    this._timeWindows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowsInput() {
    return this._timeWindows.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FirewallFilteringRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FirewallFilteringRuleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users = new FirewallFilteringRuleUsersOutputReference(this, "users");
  public get users() {
    return this._users;
  }
  public putUsers(value: FirewallFilteringRuleUsers) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }

  // workload_groups - computed: false, optional: true, required: false
  private _workloadGroups = new FirewallFilteringRuleWorkloadGroupsList(this, "workload_groups", true);
  public get workloadGroups() {
    return this._workloadGroups;
  }
  public putWorkloadGroups(value: FirewallFilteringRuleWorkloadGroups[] | cdktf.IResolvable) {
    this._workloadGroups.internalValue = value;
  }
  public resetWorkloadGroups() {
    this._workloadGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadGroupsInput() {
    return this._workloadGroups.internalValue;
  }

  // zpa_app_segments - computed: false, optional: true, required: false
  private _zpaAppSegments = new FirewallFilteringRuleZpaAppSegmentsList(this, "zpa_app_segments", true);
  public get zpaAppSegments() {
    return this._zpaAppSegments;
  }
  public putZpaAppSegments(value: FirewallFilteringRuleZpaAppSegments[] | cdktf.IResolvable) {
    this._zpaAppSegments.internalValue = value;
  }
  public resetZpaAppSegments() {
    this._zpaAppSegments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zpaAppSegmentsInput() {
    return this._zpaAppSegments.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      default_rule: cdktf.booleanToTerraform(this._defaultRule),
      description: cdktf.stringToTerraform(this._description),
      dest_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destAddresses),
      dest_countries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destCountries),
      dest_ip_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destIpCategories),
      device_trust_levels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTrustLevels),
      enable_full_logging: cdktf.booleanToTerraform(this._enableFullLogging),
      exclude_src_countries: cdktf.booleanToTerraform(this._excludeSrcCountries),
      name: cdktf.stringToTerraform(this._name),
      nw_applications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nwApplications),
      order: cdktf.numberToTerraform(this._order),
      predefined: cdktf.booleanToTerraform(this._predefined),
      rank: cdktf.numberToTerraform(this._rank),
      source_countries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceCountries),
      src_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcIps),
      state: cdktf.stringToTerraform(this._state),
      app_service_groups: firewallFilteringRuleAppServiceGroupsToTerraform(this._appServiceGroups.internalValue),
      app_services: firewallFilteringRuleAppServicesToTerraform(this._appServices.internalValue),
      departments: firewallFilteringRuleDepartmentsToTerraform(this._departments.internalValue),
      dest_ip_groups: firewallFilteringRuleDestIpGroupsToTerraform(this._destIpGroups.internalValue),
      device_groups: firewallFilteringRuleDeviceGroupsToTerraform(this._deviceGroups.internalValue),
      devices: firewallFilteringRuleDevicesToTerraform(this._devices.internalValue),
      groups: firewallFilteringRuleGroupsToTerraform(this._groups.internalValue),
      labels: firewallFilteringRuleLabelsToTerraform(this._labels.internalValue),
      location_groups: firewallFilteringRuleLocationGroupsToTerraform(this._locationGroups.internalValue),
      locations: firewallFilteringRuleLocationsToTerraform(this._locations.internalValue),
      nw_application_groups: firewallFilteringRuleNwApplicationGroupsToTerraform(this._nwApplicationGroups.internalValue),
      nw_service_groups: firewallFilteringRuleNwServiceGroupsToTerraform(this._nwServiceGroups.internalValue),
      nw_services: firewallFilteringRuleNwServicesToTerraform(this._nwServices.internalValue),
      src_ip_groups: firewallFilteringRuleSrcIpGroupsToTerraform(this._srcIpGroups.internalValue),
      time_windows: firewallFilteringRuleTimeWindowsToTerraform(this._timeWindows.internalValue),
      timeouts: firewallFilteringRuleTimeoutsToTerraform(this._timeouts.internalValue),
      users: firewallFilteringRuleUsersToTerraform(this._users.internalValue),
      workload_groups: cdktf.listMapper(firewallFilteringRuleWorkloadGroupsToTerraform, true)(this._workloadGroups.internalValue),
      zpa_app_segments: cdktf.listMapper(firewallFilteringRuleZpaAppSegmentsToTerraform, true)(this._zpaAppSegments.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_rule: {
        value: cdktf.booleanToHclTerraform(this._defaultRule),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destAddresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dest_countries: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destCountries),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dest_ip_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destIpCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      device_trust_levels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceTrustLevels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enable_full_logging: {
        value: cdktf.booleanToHclTerraform(this._enableFullLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exclude_src_countries: {
        value: cdktf.booleanToHclTerraform(this._excludeSrcCountries),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nw_applications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nwApplications),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      predefined: {
        value: cdktf.booleanToHclTerraform(this._predefined),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rank: {
        value: cdktf.numberToHclTerraform(this._rank),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_countries: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceCountries),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      src_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_service_groups: {
        value: firewallFilteringRuleAppServiceGroupsToHclTerraform(this._appServiceGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallFilteringRuleAppServiceGroupsList",
      },
      app_services: {
        value: firewallFilteringRuleAppServicesToHclTerraform(this._appServices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallFilteringRuleAppServicesList",
      },
      departments: {
        value: firewallFilteringRuleDepartmentsToHclTerraform(this._departments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallFilteringRuleDepartmentsList",
      },
      dest_ip_groups: {
        value: firewallFilteringRuleDestIpGroupsToHclTerraform(this._destIpGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallFilteringRuleDestIpGroupsList",
      },
      device_groups: {
        value: firewallFilteringRuleDeviceGroupsToHclTerraform(this._deviceGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallFilteringRuleDeviceGroupsList",
      },
      devices: {
        value: firewallFilteringRuleDevicesToHclTerraform(this._devices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallFilteringRuleDevicesList",
      },
      groups: {
        value: firewallFilteringRuleGroupsToHclTerraform(this._groups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallFilteringRuleGroupsList",
      },
      labels: {
        value: firewallFilteringRuleLabelsToHclTerraform(this._labels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallFilteringRuleLabelsList",
      },
      location_groups: {
        value: firewallFilteringRuleLocationGroupsToHclTerraform(this._locationGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallFilteringRuleLocationGroupsList",
      },
      locations: {
        value: firewallFilteringRuleLocationsToHclTerraform(this._locations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallFilteringRuleLocationsList",
      },
      nw_application_groups: {
        value: firewallFilteringRuleNwApplicationGroupsToHclTerraform(this._nwApplicationGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallFilteringRuleNwApplicationGroupsList",
      },
      nw_service_groups: {
        value: firewallFilteringRuleNwServiceGroupsToHclTerraform(this._nwServiceGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallFilteringRuleNwServiceGroupsList",
      },
      nw_services: {
        value: firewallFilteringRuleNwServicesToHclTerraform(this._nwServices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallFilteringRuleNwServicesList",
      },
      src_ip_groups: {
        value: firewallFilteringRuleSrcIpGroupsToHclTerraform(this._srcIpGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallFilteringRuleSrcIpGroupsList",
      },
      time_windows: {
        value: firewallFilteringRuleTimeWindowsToHclTerraform(this._timeWindows.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallFilteringRuleTimeWindowsList",
      },
      timeouts: {
        value: firewallFilteringRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FirewallFilteringRuleTimeouts",
      },
      users: {
        value: firewallFilteringRuleUsersToHclTerraform(this._users.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallFilteringRuleUsersList",
      },
      workload_groups: {
        value: cdktf.listMapperHcl(firewallFilteringRuleWorkloadGroupsToHclTerraform, true)(this._workloadGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallFilteringRuleWorkloadGroupsList",
      },
      zpa_app_segments: {
        value: cdktf.listMapperHcl(firewallFilteringRuleZpaAppSegmentsToHclTerraform, true)(this._zpaAppSegments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallFilteringRuleZpaAppSegmentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
