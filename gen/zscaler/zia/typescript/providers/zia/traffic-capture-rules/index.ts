// https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrafficCaptureRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The action to be enforced when the traffic matches the rule criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#action TrafficCaptureRules#action}
  */
  readonly action?: string;
  /**
  * If set to true, the default rule is applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#default_rule TrafficCaptureRules#default_rule}
  */
  readonly defaultRule?: boolean | cdktf.IResolvable;
  /**
  * Additional information about the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#description TrafficCaptureRules#description}
  */
  readonly description?: string;
  /**
  * Destination addresses. Supports IPv4, FQDNs, or wildcard FQDNs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#dest_addresses TrafficCaptureRules#dest_addresses}
  */
  readonly destAddresses?: string[];
  /**
  * Destination countries for which the rule is applicable. If not set, the rule is not restricted to specific destination countries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#dest_countries TrafficCaptureRules#dest_countries}
  */
  readonly destCountries?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#dest_ip_categories TrafficCaptureRules#dest_ip_categories}
  */
  readonly destIpCategories?: string[];
  /**
  * List of device trust levels for which the rule must be applied. This field is applicable for devices that are managed using Zscaler Client Connector. The trust levels are assigned to the devices based on your posture configurations in the Zscaler Client Connector Portal. If no value is set, this field is ignored during the policy evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#device_trust_levels TrafficCaptureRules#device_trust_levels}
  */
  readonly deviceTrustLevels?: string[];
  /**
  * Name of the Firewall Filtering policy rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#name TrafficCaptureRules#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#nw_applications TrafficCaptureRules#nw_applications}
  */
  readonly nwApplications?: string[];
  /**
  * Rule order number. If omitted, the rule will be added to the end of the rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#order TrafficCaptureRules#order}
  */
  readonly order: number;
  /**
  * If set to true, a predefined rule is applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#predefined TrafficCaptureRules#predefined}
  */
  readonly predefined?: boolean | cdktf.IResolvable;
  /**
  * Admin rank of the Firewall Filtering policy rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#rank TrafficCaptureRules#rank}
  */
  readonly rank?: number;
  /**
  * Destination countries for which the rule is applicable. If not set, the rule is not restricted to specific destination countries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#source_countries TrafficCaptureRules#source_countries}
  */
  readonly sourceCountries?: string[];
  /**
  * User-defined source IP addresses for which the rule is applicable. If not set, the rule is not restricted to a specific source IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#src_ips TrafficCaptureRules#src_ips}
  */
  readonly srcIps?: string[];
  /**
  * Determines whether the Firewall Filtering policy rule is enabled or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#state TrafficCaptureRules#state}
  */
  readonly state?: string;
  /**
  * The percentage of connections sampled for capturing each time the rule is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#txn_sampling TrafficCaptureRules#txn_sampling}
  */
  readonly txnSampling?: string;
  /**
  * The maximum size of traffic to capture per connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#txn_size_limit TrafficCaptureRules#txn_size_limit}
  */
  readonly txnSizeLimit?: string;
  /**
  * app_service_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#app_service_groups TrafficCaptureRules#app_service_groups}
  */
  readonly appServiceGroups?: TrafficCaptureRulesAppServiceGroups;
  /**
  * departments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#departments TrafficCaptureRules#departments}
  */
  readonly departments?: TrafficCaptureRulesDepartments;
  /**
  * dest_ip_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#dest_ip_groups TrafficCaptureRules#dest_ip_groups}
  */
  readonly destIpGroups?: TrafficCaptureRulesDestIpGroups;
  /**
  * device_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#device_groups TrafficCaptureRules#device_groups}
  */
  readonly deviceGroups?: TrafficCaptureRulesDeviceGroups;
  /**
  * devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#devices TrafficCaptureRules#devices}
  */
  readonly devices?: TrafficCaptureRulesDevices;
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#groups TrafficCaptureRules#groups}
  */
  readonly groups?: TrafficCaptureRulesGroups;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#labels TrafficCaptureRules#labels}
  */
  readonly labels?: TrafficCaptureRulesLabels;
  /**
  * location_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#location_groups TrafficCaptureRules#location_groups}
  */
  readonly locationGroups?: TrafficCaptureRulesLocationGroups;
  /**
  * locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#locations TrafficCaptureRules#locations}
  */
  readonly locations?: TrafficCaptureRulesLocations;
  /**
  * nw_application_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#nw_application_groups TrafficCaptureRules#nw_application_groups}
  */
  readonly nwApplicationGroups?: TrafficCaptureRulesNwApplicationGroups;
  /**
  * nw_service_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#nw_service_groups TrafficCaptureRules#nw_service_groups}
  */
  readonly nwServiceGroups?: TrafficCaptureRulesNwServiceGroups;
  /**
  * nw_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#nw_services TrafficCaptureRules#nw_services}
  */
  readonly nwServices?: TrafficCaptureRulesNwServices;
  /**
  * src_ip_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#src_ip_groups TrafficCaptureRules#src_ip_groups}
  */
  readonly srcIpGroups?: TrafficCaptureRulesSrcIpGroups;
  /**
  * time_windows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#time_windows TrafficCaptureRules#time_windows}
  */
  readonly timeWindows?: TrafficCaptureRulesTimeWindows;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#timeouts TrafficCaptureRules#timeouts}
  */
  readonly timeouts?: TrafficCaptureRulesTimeouts;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#users TrafficCaptureRules#users}
  */
  readonly users?: TrafficCaptureRulesUsers;
  /**
  * workload_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#workload_groups TrafficCaptureRules#workload_groups}
  */
  readonly workloadGroups?: TrafficCaptureRulesWorkloadGroups[] | cdktf.IResolvable;
}
export interface TrafficCaptureRulesAppServiceGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#id TrafficCaptureRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function trafficCaptureRulesAppServiceGroupsToTerraform(struct?: TrafficCaptureRulesAppServiceGroupsOutputReference | TrafficCaptureRulesAppServiceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function trafficCaptureRulesAppServiceGroupsToHclTerraform(struct?: TrafficCaptureRulesAppServiceGroupsOutputReference | TrafficCaptureRulesAppServiceGroups): any {
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

export class TrafficCaptureRulesAppServiceGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TrafficCaptureRulesAppServiceGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficCaptureRulesAppServiceGroups | undefined) {
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
export interface TrafficCaptureRulesDepartments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#id TrafficCaptureRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function trafficCaptureRulesDepartmentsToTerraform(struct?: TrafficCaptureRulesDepartmentsOutputReference | TrafficCaptureRulesDepartments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function trafficCaptureRulesDepartmentsToHclTerraform(struct?: TrafficCaptureRulesDepartmentsOutputReference | TrafficCaptureRulesDepartments): any {
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

export class TrafficCaptureRulesDepartmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TrafficCaptureRulesDepartments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficCaptureRulesDepartments | undefined) {
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
export interface TrafficCaptureRulesDestIpGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#id TrafficCaptureRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function trafficCaptureRulesDestIpGroupsToTerraform(struct?: TrafficCaptureRulesDestIpGroupsOutputReference | TrafficCaptureRulesDestIpGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function trafficCaptureRulesDestIpGroupsToHclTerraform(struct?: TrafficCaptureRulesDestIpGroupsOutputReference | TrafficCaptureRulesDestIpGroups): any {
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

export class TrafficCaptureRulesDestIpGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TrafficCaptureRulesDestIpGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficCaptureRulesDestIpGroups | undefined) {
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
export interface TrafficCaptureRulesDeviceGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#id TrafficCaptureRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function trafficCaptureRulesDeviceGroupsToTerraform(struct?: TrafficCaptureRulesDeviceGroupsOutputReference | TrafficCaptureRulesDeviceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function trafficCaptureRulesDeviceGroupsToHclTerraform(struct?: TrafficCaptureRulesDeviceGroupsOutputReference | TrafficCaptureRulesDeviceGroups): any {
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

export class TrafficCaptureRulesDeviceGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TrafficCaptureRulesDeviceGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficCaptureRulesDeviceGroups | undefined) {
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
export interface TrafficCaptureRulesDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#id TrafficCaptureRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function trafficCaptureRulesDevicesToTerraform(struct?: TrafficCaptureRulesDevicesOutputReference | TrafficCaptureRulesDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function trafficCaptureRulesDevicesToHclTerraform(struct?: TrafficCaptureRulesDevicesOutputReference | TrafficCaptureRulesDevices): any {
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

export class TrafficCaptureRulesDevicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TrafficCaptureRulesDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficCaptureRulesDevices | undefined) {
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
export interface TrafficCaptureRulesGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#id TrafficCaptureRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function trafficCaptureRulesGroupsToTerraform(struct?: TrafficCaptureRulesGroupsOutputReference | TrafficCaptureRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function trafficCaptureRulesGroupsToHclTerraform(struct?: TrafficCaptureRulesGroupsOutputReference | TrafficCaptureRulesGroups): any {
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

export class TrafficCaptureRulesGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TrafficCaptureRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficCaptureRulesGroups | undefined) {
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
export interface TrafficCaptureRulesLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#id TrafficCaptureRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function trafficCaptureRulesLabelsToTerraform(struct?: TrafficCaptureRulesLabelsOutputReference | TrafficCaptureRulesLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function trafficCaptureRulesLabelsToHclTerraform(struct?: TrafficCaptureRulesLabelsOutputReference | TrafficCaptureRulesLabels): any {
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

export class TrafficCaptureRulesLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TrafficCaptureRulesLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficCaptureRulesLabels | undefined) {
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
export interface TrafficCaptureRulesLocationGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#id TrafficCaptureRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function trafficCaptureRulesLocationGroupsToTerraform(struct?: TrafficCaptureRulesLocationGroupsOutputReference | TrafficCaptureRulesLocationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function trafficCaptureRulesLocationGroupsToHclTerraform(struct?: TrafficCaptureRulesLocationGroupsOutputReference | TrafficCaptureRulesLocationGroups): any {
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

export class TrafficCaptureRulesLocationGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TrafficCaptureRulesLocationGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficCaptureRulesLocationGroups | undefined) {
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
export interface TrafficCaptureRulesLocations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#id TrafficCaptureRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function trafficCaptureRulesLocationsToTerraform(struct?: TrafficCaptureRulesLocationsOutputReference | TrafficCaptureRulesLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function trafficCaptureRulesLocationsToHclTerraform(struct?: TrafficCaptureRulesLocationsOutputReference | TrafficCaptureRulesLocations): any {
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

export class TrafficCaptureRulesLocationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TrafficCaptureRulesLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficCaptureRulesLocations | undefined) {
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
export interface TrafficCaptureRulesNwApplicationGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#id TrafficCaptureRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function trafficCaptureRulesNwApplicationGroupsToTerraform(struct?: TrafficCaptureRulesNwApplicationGroupsOutputReference | TrafficCaptureRulesNwApplicationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function trafficCaptureRulesNwApplicationGroupsToHclTerraform(struct?: TrafficCaptureRulesNwApplicationGroupsOutputReference | TrafficCaptureRulesNwApplicationGroups): any {
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

export class TrafficCaptureRulesNwApplicationGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TrafficCaptureRulesNwApplicationGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficCaptureRulesNwApplicationGroups | undefined) {
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
export interface TrafficCaptureRulesNwServiceGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#id TrafficCaptureRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function trafficCaptureRulesNwServiceGroupsToTerraform(struct?: TrafficCaptureRulesNwServiceGroupsOutputReference | TrafficCaptureRulesNwServiceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function trafficCaptureRulesNwServiceGroupsToHclTerraform(struct?: TrafficCaptureRulesNwServiceGroupsOutputReference | TrafficCaptureRulesNwServiceGroups): any {
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

export class TrafficCaptureRulesNwServiceGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TrafficCaptureRulesNwServiceGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficCaptureRulesNwServiceGroups | undefined) {
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
export interface TrafficCaptureRulesNwServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#id TrafficCaptureRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function trafficCaptureRulesNwServicesToTerraform(struct?: TrafficCaptureRulesNwServicesOutputReference | TrafficCaptureRulesNwServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function trafficCaptureRulesNwServicesToHclTerraform(struct?: TrafficCaptureRulesNwServicesOutputReference | TrafficCaptureRulesNwServices): any {
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

export class TrafficCaptureRulesNwServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TrafficCaptureRulesNwServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficCaptureRulesNwServices | undefined) {
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
export interface TrafficCaptureRulesSrcIpGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#id TrafficCaptureRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function trafficCaptureRulesSrcIpGroupsToTerraform(struct?: TrafficCaptureRulesSrcIpGroupsOutputReference | TrafficCaptureRulesSrcIpGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function trafficCaptureRulesSrcIpGroupsToHclTerraform(struct?: TrafficCaptureRulesSrcIpGroupsOutputReference | TrafficCaptureRulesSrcIpGroups): any {
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

export class TrafficCaptureRulesSrcIpGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TrafficCaptureRulesSrcIpGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficCaptureRulesSrcIpGroups | undefined) {
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
export interface TrafficCaptureRulesTimeWindows {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#id TrafficCaptureRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function trafficCaptureRulesTimeWindowsToTerraform(struct?: TrafficCaptureRulesTimeWindowsOutputReference | TrafficCaptureRulesTimeWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function trafficCaptureRulesTimeWindowsToHclTerraform(struct?: TrafficCaptureRulesTimeWindowsOutputReference | TrafficCaptureRulesTimeWindows): any {
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

export class TrafficCaptureRulesTimeWindowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TrafficCaptureRulesTimeWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficCaptureRulesTimeWindows | undefined) {
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
export interface TrafficCaptureRulesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#create TrafficCaptureRules#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#update TrafficCaptureRules#update}
  */
  readonly update?: string;
}

export function trafficCaptureRulesTimeoutsToTerraform(struct?: TrafficCaptureRulesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function trafficCaptureRulesTimeoutsToHclTerraform(struct?: TrafficCaptureRulesTimeouts | cdktf.IResolvable): any {
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

export class TrafficCaptureRulesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrafficCaptureRulesTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TrafficCaptureRulesTimeouts | cdktf.IResolvable | undefined) {
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
export interface TrafficCaptureRulesUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#id TrafficCaptureRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function trafficCaptureRulesUsersToTerraform(struct?: TrafficCaptureRulesUsersOutputReference | TrafficCaptureRulesUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function trafficCaptureRulesUsersToHclTerraform(struct?: TrafficCaptureRulesUsersOutputReference | TrafficCaptureRulesUsers): any {
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

export class TrafficCaptureRulesUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TrafficCaptureRulesUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficCaptureRulesUsers | undefined) {
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
export interface TrafficCaptureRulesWorkloadGroups {
  /**
  * The unique identifier for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#id TrafficCaptureRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * The name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#name TrafficCaptureRules#name}
  */
  readonly name?: string;
}

export function trafficCaptureRulesWorkloadGroupsToTerraform(struct?: TrafficCaptureRulesWorkloadGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function trafficCaptureRulesWorkloadGroupsToHclTerraform(struct?: TrafficCaptureRulesWorkloadGroups | cdktf.IResolvable): any {
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

export class TrafficCaptureRulesWorkloadGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TrafficCaptureRulesWorkloadGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TrafficCaptureRulesWorkloadGroups | cdktf.IResolvable | undefined) {
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

export class TrafficCaptureRulesWorkloadGroupsList extends cdktf.ComplexList {
  public internalValue? : TrafficCaptureRulesWorkloadGroups[] | cdktf.IResolvable

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
  public get(index: number): TrafficCaptureRulesWorkloadGroupsOutputReference {
    return new TrafficCaptureRulesWorkloadGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules zia_traffic_capture_rules}
*/
export class TrafficCaptureRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_traffic_capture_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrafficCaptureRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrafficCaptureRules to import
  * @param importFromId The id of the existing TrafficCaptureRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrafficCaptureRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_traffic_capture_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/traffic_capture_rules zia_traffic_capture_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrafficCaptureRulesConfig
  */
  public constructor(scope: Construct, id: string, config: TrafficCaptureRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'zia_traffic_capture_rules',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.4',
        providerVersionConstraint: '4.6.4'
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
    this._name = config.name;
    this._nwApplications = config.nwApplications;
    this._order = config.order;
    this._predefined = config.predefined;
    this._rank = config.rank;
    this._sourceCountries = config.sourceCountries;
    this._srcIps = config.srcIps;
    this._state = config.state;
    this._txnSampling = config.txnSampling;
    this._txnSizeLimit = config.txnSizeLimit;
    this._appServiceGroups.internalValue = config.appServiceGroups;
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

  // txn_sampling - computed: false, optional: true, required: false
  private _txnSampling?: string; 
  public get txnSampling() {
    return this.getStringAttribute('txn_sampling');
  }
  public set txnSampling(value: string) {
    this._txnSampling = value;
  }
  public resetTxnSampling() {
    this._txnSampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txnSamplingInput() {
    return this._txnSampling;
  }

  // txn_size_limit - computed: false, optional: true, required: false
  private _txnSizeLimit?: string; 
  public get txnSizeLimit() {
    return this.getStringAttribute('txn_size_limit');
  }
  public set txnSizeLimit(value: string) {
    this._txnSizeLimit = value;
  }
  public resetTxnSizeLimit() {
    this._txnSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txnSizeLimitInput() {
    return this._txnSizeLimit;
  }

  // app_service_groups - computed: false, optional: true, required: false
  private _appServiceGroups = new TrafficCaptureRulesAppServiceGroupsOutputReference(this, "app_service_groups");
  public get appServiceGroups() {
    return this._appServiceGroups;
  }
  public putAppServiceGroups(value: TrafficCaptureRulesAppServiceGroups) {
    this._appServiceGroups.internalValue = value;
  }
  public resetAppServiceGroups() {
    this._appServiceGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceGroupsInput() {
    return this._appServiceGroups.internalValue;
  }

  // departments - computed: false, optional: true, required: false
  private _departments = new TrafficCaptureRulesDepartmentsOutputReference(this, "departments");
  public get departments() {
    return this._departments;
  }
  public putDepartments(value: TrafficCaptureRulesDepartments) {
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
  private _destIpGroups = new TrafficCaptureRulesDestIpGroupsOutputReference(this, "dest_ip_groups");
  public get destIpGroups() {
    return this._destIpGroups;
  }
  public putDestIpGroups(value: TrafficCaptureRulesDestIpGroups) {
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
  private _deviceGroups = new TrafficCaptureRulesDeviceGroupsOutputReference(this, "device_groups");
  public get deviceGroups() {
    return this._deviceGroups;
  }
  public putDeviceGroups(value: TrafficCaptureRulesDeviceGroups) {
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
  private _devices = new TrafficCaptureRulesDevicesOutputReference(this, "devices");
  public get devices() {
    return this._devices;
  }
  public putDevices(value: TrafficCaptureRulesDevices) {
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
  private _groups = new TrafficCaptureRulesGroupsOutputReference(this, "groups");
  public get groups() {
    return this._groups;
  }
  public putGroups(value: TrafficCaptureRulesGroups) {
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
  private _labels = new TrafficCaptureRulesLabelsOutputReference(this, "labels");
  public get labels() {
    return this._labels;
  }
  public putLabels(value: TrafficCaptureRulesLabels) {
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
  private _locationGroups = new TrafficCaptureRulesLocationGroupsOutputReference(this, "location_groups");
  public get locationGroups() {
    return this._locationGroups;
  }
  public putLocationGroups(value: TrafficCaptureRulesLocationGroups) {
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
  private _locations = new TrafficCaptureRulesLocationsOutputReference(this, "locations");
  public get locations() {
    return this._locations;
  }
  public putLocations(value: TrafficCaptureRulesLocations) {
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
  private _nwApplicationGroups = new TrafficCaptureRulesNwApplicationGroupsOutputReference(this, "nw_application_groups");
  public get nwApplicationGroups() {
    return this._nwApplicationGroups;
  }
  public putNwApplicationGroups(value: TrafficCaptureRulesNwApplicationGroups) {
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
  private _nwServiceGroups = new TrafficCaptureRulesNwServiceGroupsOutputReference(this, "nw_service_groups");
  public get nwServiceGroups() {
    return this._nwServiceGroups;
  }
  public putNwServiceGroups(value: TrafficCaptureRulesNwServiceGroups) {
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
  private _nwServices = new TrafficCaptureRulesNwServicesOutputReference(this, "nw_services");
  public get nwServices() {
    return this._nwServices;
  }
  public putNwServices(value: TrafficCaptureRulesNwServices) {
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
  private _srcIpGroups = new TrafficCaptureRulesSrcIpGroupsOutputReference(this, "src_ip_groups");
  public get srcIpGroups() {
    return this._srcIpGroups;
  }
  public putSrcIpGroups(value: TrafficCaptureRulesSrcIpGroups) {
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
  private _timeWindows = new TrafficCaptureRulesTimeWindowsOutputReference(this, "time_windows");
  public get timeWindows() {
    return this._timeWindows;
  }
  public putTimeWindows(value: TrafficCaptureRulesTimeWindows) {
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
  private _timeouts = new TrafficCaptureRulesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TrafficCaptureRulesTimeouts) {
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
  private _users = new TrafficCaptureRulesUsersOutputReference(this, "users");
  public get users() {
    return this._users;
  }
  public putUsers(value: TrafficCaptureRulesUsers) {
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
  private _workloadGroups = new TrafficCaptureRulesWorkloadGroupsList(this, "workload_groups", true);
  public get workloadGroups() {
    return this._workloadGroups;
  }
  public putWorkloadGroups(value: TrafficCaptureRulesWorkloadGroups[] | cdktf.IResolvable) {
    this._workloadGroups.internalValue = value;
  }
  public resetWorkloadGroups() {
    this._workloadGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadGroupsInput() {
    return this._workloadGroups.internalValue;
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
      name: cdktf.stringToTerraform(this._name),
      nw_applications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nwApplications),
      order: cdktf.numberToTerraform(this._order),
      predefined: cdktf.booleanToTerraform(this._predefined),
      rank: cdktf.numberToTerraform(this._rank),
      source_countries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceCountries),
      src_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcIps),
      state: cdktf.stringToTerraform(this._state),
      txn_sampling: cdktf.stringToTerraform(this._txnSampling),
      txn_size_limit: cdktf.stringToTerraform(this._txnSizeLimit),
      app_service_groups: trafficCaptureRulesAppServiceGroupsToTerraform(this._appServiceGroups.internalValue),
      departments: trafficCaptureRulesDepartmentsToTerraform(this._departments.internalValue),
      dest_ip_groups: trafficCaptureRulesDestIpGroupsToTerraform(this._destIpGroups.internalValue),
      device_groups: trafficCaptureRulesDeviceGroupsToTerraform(this._deviceGroups.internalValue),
      devices: trafficCaptureRulesDevicesToTerraform(this._devices.internalValue),
      groups: trafficCaptureRulesGroupsToTerraform(this._groups.internalValue),
      labels: trafficCaptureRulesLabelsToTerraform(this._labels.internalValue),
      location_groups: trafficCaptureRulesLocationGroupsToTerraform(this._locationGroups.internalValue),
      locations: trafficCaptureRulesLocationsToTerraform(this._locations.internalValue),
      nw_application_groups: trafficCaptureRulesNwApplicationGroupsToTerraform(this._nwApplicationGroups.internalValue),
      nw_service_groups: trafficCaptureRulesNwServiceGroupsToTerraform(this._nwServiceGroups.internalValue),
      nw_services: trafficCaptureRulesNwServicesToTerraform(this._nwServices.internalValue),
      src_ip_groups: trafficCaptureRulesSrcIpGroupsToTerraform(this._srcIpGroups.internalValue),
      time_windows: trafficCaptureRulesTimeWindowsToTerraform(this._timeWindows.internalValue),
      timeouts: trafficCaptureRulesTimeoutsToTerraform(this._timeouts.internalValue),
      users: trafficCaptureRulesUsersToTerraform(this._users.internalValue),
      workload_groups: cdktf.listMapper(trafficCaptureRulesWorkloadGroupsToTerraform, true)(this._workloadGroups.internalValue),
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
      txn_sampling: {
        value: cdktf.stringToHclTerraform(this._txnSampling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      txn_size_limit: {
        value: cdktf.stringToHclTerraform(this._txnSizeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_service_groups: {
        value: trafficCaptureRulesAppServiceGroupsToHclTerraform(this._appServiceGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TrafficCaptureRulesAppServiceGroupsList",
      },
      departments: {
        value: trafficCaptureRulesDepartmentsToHclTerraform(this._departments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TrafficCaptureRulesDepartmentsList",
      },
      dest_ip_groups: {
        value: trafficCaptureRulesDestIpGroupsToHclTerraform(this._destIpGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TrafficCaptureRulesDestIpGroupsList",
      },
      device_groups: {
        value: trafficCaptureRulesDeviceGroupsToHclTerraform(this._deviceGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TrafficCaptureRulesDeviceGroupsList",
      },
      devices: {
        value: trafficCaptureRulesDevicesToHclTerraform(this._devices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TrafficCaptureRulesDevicesList",
      },
      groups: {
        value: trafficCaptureRulesGroupsToHclTerraform(this._groups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TrafficCaptureRulesGroupsList",
      },
      labels: {
        value: trafficCaptureRulesLabelsToHclTerraform(this._labels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TrafficCaptureRulesLabelsList",
      },
      location_groups: {
        value: trafficCaptureRulesLocationGroupsToHclTerraform(this._locationGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TrafficCaptureRulesLocationGroupsList",
      },
      locations: {
        value: trafficCaptureRulesLocationsToHclTerraform(this._locations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TrafficCaptureRulesLocationsList",
      },
      nw_application_groups: {
        value: trafficCaptureRulesNwApplicationGroupsToHclTerraform(this._nwApplicationGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TrafficCaptureRulesNwApplicationGroupsList",
      },
      nw_service_groups: {
        value: trafficCaptureRulesNwServiceGroupsToHclTerraform(this._nwServiceGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TrafficCaptureRulesNwServiceGroupsList",
      },
      nw_services: {
        value: trafficCaptureRulesNwServicesToHclTerraform(this._nwServices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TrafficCaptureRulesNwServicesList",
      },
      src_ip_groups: {
        value: trafficCaptureRulesSrcIpGroupsToHclTerraform(this._srcIpGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TrafficCaptureRulesSrcIpGroupsList",
      },
      time_windows: {
        value: trafficCaptureRulesTimeWindowsToHclTerraform(this._timeWindows.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TrafficCaptureRulesTimeWindowsList",
      },
      timeouts: {
        value: trafficCaptureRulesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TrafficCaptureRulesTimeouts",
      },
      users: {
        value: trafficCaptureRulesUsersToHclTerraform(this._users.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TrafficCaptureRulesUsersList",
      },
      workload_groups: {
        value: cdktf.listMapperHcl(trafficCaptureRulesWorkloadGroupsToHclTerraform, true)(this._workloadGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TrafficCaptureRulesWorkloadGroupsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
