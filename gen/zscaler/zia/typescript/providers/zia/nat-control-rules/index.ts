// https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NatControlRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set to true, the default rule is applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#default_rule NatControlRules#default_rule}
  */
  readonly defaultRule?: boolean | cdktf.IResolvable;
  /**
  * Additional information about the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#description NatControlRules#description}
  */
  readonly description?: string;
  /**
  * Destination addresses. Supports IPv4, FQDNs, or wildcard FQDNs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#dest_addresses NatControlRules#dest_addresses}
  */
  readonly destAddresses?: string[];
  /**
  * Destination countries for which the rule is applicable. If not set, the rule is not restricted to specific destination countries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#dest_countries NatControlRules#dest_countries}
  */
  readonly destCountries?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#dest_ip_categories NatControlRules#dest_ip_categories}
  */
  readonly destIpCategories?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#enable_full_logging NatControlRules#enable_full_logging}
  */
  readonly enableFullLogging?: boolean | cdktf.IResolvable;
  /**
  * Name of the nat control policy rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#name NatControlRules#name}
  */
  readonly name: string;
  /**
  * Rule order number. If omitted, the rule will be added to the end of the rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#order NatControlRules#order}
  */
  readonly order: number;
  /**
  * If set to true, a predefined rule is applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#predefined NatControlRules#predefined}
  */
  readonly predefined?: boolean | cdktf.IResolvable;
  /**
  * Admin rank of the nat control policy rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#rank NatControlRules#rank}
  */
  readonly rank?: number;
  /**
  * The action the nat control policy rule takes when packets match the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#redirect_fqdn NatControlRules#redirect_fqdn}
  */
  readonly redirectFqdn?: string;
  /**
  * The action the nat control policy rule takes when packets match the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#redirect_ip NatControlRules#redirect_ip}
  */
  readonly redirectIp?: string;
  /**
  * The action the nat control policy rule takes when packets match the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#redirect_port NatControlRules#redirect_port}
  */
  readonly redirectPort?: number;
  /**
  * List of destination domain categories to which the rule applies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#res_categories NatControlRules#res_categories}
  */
  readonly resCategories?: string[];
  /**
  * User-defined source IP addresses for which the rule is applicable. If not set, the rule is not restricted to a specific source IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#src_ips NatControlRules#src_ips}
  */
  readonly srcIps?: string[];
  /**
  * Determines whether the nat control policy rule is enabled or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#state NatControlRules#state}
  */
  readonly state?: string;
  /**
  * departments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#departments NatControlRules#departments}
  */
  readonly departments?: NatControlRulesDepartments;
  /**
  * dest_ip_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#dest_ip_groups NatControlRules#dest_ip_groups}
  */
  readonly destIpGroups?: NatControlRulesDestIpGroups;
  /**
  * dest_ipv6_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#dest_ipv6_groups NatControlRules#dest_ipv6_groups}
  */
  readonly destIpv6Groups?: NatControlRulesDestIpv6Groups;
  /**
  * device_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#device_groups NatControlRules#device_groups}
  */
  readonly deviceGroups?: NatControlRulesDeviceGroups;
  /**
  * devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#devices NatControlRules#devices}
  */
  readonly devices?: NatControlRulesDevices;
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#groups NatControlRules#groups}
  */
  readonly groups?: NatControlRulesGroups;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#labels NatControlRules#labels}
  */
  readonly labels?: NatControlRulesLabels;
  /**
  * location_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#location_groups NatControlRules#location_groups}
  */
  readonly locationGroups?: NatControlRulesLocationGroups;
  /**
  * locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#locations NatControlRules#locations}
  */
  readonly locations?: NatControlRulesLocations;
  /**
  * nw_service_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#nw_service_groups NatControlRules#nw_service_groups}
  */
  readonly nwServiceGroups?: NatControlRulesNwServiceGroups;
  /**
  * nw_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#nw_services NatControlRules#nw_services}
  */
  readonly nwServices?: NatControlRulesNwServices;
  /**
  * src_ip_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#src_ip_groups NatControlRules#src_ip_groups}
  */
  readonly srcIpGroups?: NatControlRulesSrcIpGroups;
  /**
  * src_ipv6_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#src_ipv6_groups NatControlRules#src_ipv6_groups}
  */
  readonly srcIpv6Groups?: NatControlRulesSrcIpv6Groups;
  /**
  * time_windows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#time_windows NatControlRules#time_windows}
  */
  readonly timeWindows?: NatControlRulesTimeWindows;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#timeouts NatControlRules#timeouts}
  */
  readonly timeouts?: NatControlRulesTimeouts;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#users NatControlRules#users}
  */
  readonly users?: NatControlRulesUsers;
}
export interface NatControlRulesDepartments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#id NatControlRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function natControlRulesDepartmentsToTerraform(struct?: NatControlRulesDepartmentsOutputReference | NatControlRulesDepartments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function natControlRulesDepartmentsToHclTerraform(struct?: NatControlRulesDepartmentsOutputReference | NatControlRulesDepartments): any {
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

export class NatControlRulesDepartmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NatControlRulesDepartments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NatControlRulesDepartments | undefined) {
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
export interface NatControlRulesDestIpGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#id NatControlRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function natControlRulesDestIpGroupsToTerraform(struct?: NatControlRulesDestIpGroupsOutputReference | NatControlRulesDestIpGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function natControlRulesDestIpGroupsToHclTerraform(struct?: NatControlRulesDestIpGroupsOutputReference | NatControlRulesDestIpGroups): any {
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

export class NatControlRulesDestIpGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NatControlRulesDestIpGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NatControlRulesDestIpGroups | undefined) {
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
export interface NatControlRulesDestIpv6Groups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#id NatControlRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function natControlRulesDestIpv6GroupsToTerraform(struct?: NatControlRulesDestIpv6GroupsOutputReference | NatControlRulesDestIpv6Groups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function natControlRulesDestIpv6GroupsToHclTerraform(struct?: NatControlRulesDestIpv6GroupsOutputReference | NatControlRulesDestIpv6Groups): any {
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

export class NatControlRulesDestIpv6GroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NatControlRulesDestIpv6Groups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NatControlRulesDestIpv6Groups | undefined) {
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
export interface NatControlRulesDeviceGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#id NatControlRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function natControlRulesDeviceGroupsToTerraform(struct?: NatControlRulesDeviceGroupsOutputReference | NatControlRulesDeviceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function natControlRulesDeviceGroupsToHclTerraform(struct?: NatControlRulesDeviceGroupsOutputReference | NatControlRulesDeviceGroups): any {
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

export class NatControlRulesDeviceGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NatControlRulesDeviceGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NatControlRulesDeviceGroups | undefined) {
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
export interface NatControlRulesDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#id NatControlRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function natControlRulesDevicesToTerraform(struct?: NatControlRulesDevicesOutputReference | NatControlRulesDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function natControlRulesDevicesToHclTerraform(struct?: NatControlRulesDevicesOutputReference | NatControlRulesDevices): any {
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

export class NatControlRulesDevicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NatControlRulesDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NatControlRulesDevices | undefined) {
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
export interface NatControlRulesGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#id NatControlRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function natControlRulesGroupsToTerraform(struct?: NatControlRulesGroupsOutputReference | NatControlRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function natControlRulesGroupsToHclTerraform(struct?: NatControlRulesGroupsOutputReference | NatControlRulesGroups): any {
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

export class NatControlRulesGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NatControlRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NatControlRulesGroups | undefined) {
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
export interface NatControlRulesLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#id NatControlRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function natControlRulesLabelsToTerraform(struct?: NatControlRulesLabelsOutputReference | NatControlRulesLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function natControlRulesLabelsToHclTerraform(struct?: NatControlRulesLabelsOutputReference | NatControlRulesLabels): any {
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

export class NatControlRulesLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NatControlRulesLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NatControlRulesLabels | undefined) {
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
export interface NatControlRulesLocationGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#id NatControlRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function natControlRulesLocationGroupsToTerraform(struct?: NatControlRulesLocationGroupsOutputReference | NatControlRulesLocationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function natControlRulesLocationGroupsToHclTerraform(struct?: NatControlRulesLocationGroupsOutputReference | NatControlRulesLocationGroups): any {
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

export class NatControlRulesLocationGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NatControlRulesLocationGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NatControlRulesLocationGroups | undefined) {
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
export interface NatControlRulesLocations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#id NatControlRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function natControlRulesLocationsToTerraform(struct?: NatControlRulesLocationsOutputReference | NatControlRulesLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function natControlRulesLocationsToHclTerraform(struct?: NatControlRulesLocationsOutputReference | NatControlRulesLocations): any {
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

export class NatControlRulesLocationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NatControlRulesLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NatControlRulesLocations | undefined) {
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
export interface NatControlRulesNwServiceGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#id NatControlRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function natControlRulesNwServiceGroupsToTerraform(struct?: NatControlRulesNwServiceGroupsOutputReference | NatControlRulesNwServiceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function natControlRulesNwServiceGroupsToHclTerraform(struct?: NatControlRulesNwServiceGroupsOutputReference | NatControlRulesNwServiceGroups): any {
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

export class NatControlRulesNwServiceGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NatControlRulesNwServiceGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NatControlRulesNwServiceGroups | undefined) {
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
export interface NatControlRulesNwServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#id NatControlRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function natControlRulesNwServicesToTerraform(struct?: NatControlRulesNwServicesOutputReference | NatControlRulesNwServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function natControlRulesNwServicesToHclTerraform(struct?: NatControlRulesNwServicesOutputReference | NatControlRulesNwServices): any {
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

export class NatControlRulesNwServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NatControlRulesNwServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NatControlRulesNwServices | undefined) {
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
export interface NatControlRulesSrcIpGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#id NatControlRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function natControlRulesSrcIpGroupsToTerraform(struct?: NatControlRulesSrcIpGroupsOutputReference | NatControlRulesSrcIpGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function natControlRulesSrcIpGroupsToHclTerraform(struct?: NatControlRulesSrcIpGroupsOutputReference | NatControlRulesSrcIpGroups): any {
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

export class NatControlRulesSrcIpGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NatControlRulesSrcIpGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NatControlRulesSrcIpGroups | undefined) {
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
export interface NatControlRulesSrcIpv6Groups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#id NatControlRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function natControlRulesSrcIpv6GroupsToTerraform(struct?: NatControlRulesSrcIpv6GroupsOutputReference | NatControlRulesSrcIpv6Groups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function natControlRulesSrcIpv6GroupsToHclTerraform(struct?: NatControlRulesSrcIpv6GroupsOutputReference | NatControlRulesSrcIpv6Groups): any {
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

export class NatControlRulesSrcIpv6GroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NatControlRulesSrcIpv6Groups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NatControlRulesSrcIpv6Groups | undefined) {
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
export interface NatControlRulesTimeWindows {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#id NatControlRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function natControlRulesTimeWindowsToTerraform(struct?: NatControlRulesTimeWindowsOutputReference | NatControlRulesTimeWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function natControlRulesTimeWindowsToHclTerraform(struct?: NatControlRulesTimeWindowsOutputReference | NatControlRulesTimeWindows): any {
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

export class NatControlRulesTimeWindowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NatControlRulesTimeWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NatControlRulesTimeWindows | undefined) {
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
export interface NatControlRulesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#create NatControlRules#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#update NatControlRules#update}
  */
  readonly update?: string;
}

export function natControlRulesTimeoutsToTerraform(struct?: NatControlRulesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function natControlRulesTimeoutsToHclTerraform(struct?: NatControlRulesTimeouts | cdktf.IResolvable): any {
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

export class NatControlRulesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NatControlRulesTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NatControlRulesTimeouts | cdktf.IResolvable | undefined) {
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
export interface NatControlRulesUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#id NatControlRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function natControlRulesUsersToTerraform(struct?: NatControlRulesUsersOutputReference | NatControlRulesUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function natControlRulesUsersToHclTerraform(struct?: NatControlRulesUsersOutputReference | NatControlRulesUsers): any {
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

export class NatControlRulesUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NatControlRulesUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NatControlRulesUsers | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules zia_nat_control_rules}
*/
export class NatControlRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_nat_control_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NatControlRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NatControlRules to import
  * @param importFromId The id of the existing NatControlRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NatControlRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_nat_control_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/nat_control_rules zia_nat_control_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NatControlRulesConfig
  */
  public constructor(scope: Construct, id: string, config: NatControlRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'zia_nat_control_rules',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.5',
        providerVersionConstraint: '4.6.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultRule = config.defaultRule;
    this._description = config.description;
    this._destAddresses = config.destAddresses;
    this._destCountries = config.destCountries;
    this._destIpCategories = config.destIpCategories;
    this._enableFullLogging = config.enableFullLogging;
    this._name = config.name;
    this._order = config.order;
    this._predefined = config.predefined;
    this._rank = config.rank;
    this._redirectFqdn = config.redirectFqdn;
    this._redirectIp = config.redirectIp;
    this._redirectPort = config.redirectPort;
    this._resCategories = config.resCategories;
    this._srcIps = config.srcIps;
    this._state = config.state;
    this._departments.internalValue = config.departments;
    this._destIpGroups.internalValue = config.destIpGroups;
    this._destIpv6Groups.internalValue = config.destIpv6Groups;
    this._deviceGroups.internalValue = config.deviceGroups;
    this._devices.internalValue = config.devices;
    this._groups.internalValue = config.groups;
    this._labels.internalValue = config.labels;
    this._locationGroups.internalValue = config.locationGroups;
    this._locations.internalValue = config.locations;
    this._nwServiceGroups.internalValue = config.nwServiceGroups;
    this._nwServices.internalValue = config.nwServices;
    this._srcIpGroups.internalValue = config.srcIpGroups;
    this._srcIpv6Groups.internalValue = config.srcIpv6Groups;
    this._timeWindows.internalValue = config.timeWindows;
    this._timeouts.internalValue = config.timeouts;
    this._users.internalValue = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // redirect_fqdn - computed: false, optional: true, required: false
  private _redirectFqdn?: string; 
  public get redirectFqdn() {
    return this.getStringAttribute('redirect_fqdn');
  }
  public set redirectFqdn(value: string) {
    this._redirectFqdn = value;
  }
  public resetRedirectFqdn() {
    this._redirectFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectFqdnInput() {
    return this._redirectFqdn;
  }

  // redirect_ip - computed: false, optional: true, required: false
  private _redirectIp?: string; 
  public get redirectIp() {
    return this.getStringAttribute('redirect_ip');
  }
  public set redirectIp(value: string) {
    this._redirectIp = value;
  }
  public resetRedirectIp() {
    this._redirectIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectIpInput() {
    return this._redirectIp;
  }

  // redirect_port - computed: false, optional: true, required: false
  private _redirectPort?: number; 
  public get redirectPort() {
    return this.getNumberAttribute('redirect_port');
  }
  public set redirectPort(value: number) {
    this._redirectPort = value;
  }
  public resetRedirectPort() {
    this._redirectPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectPortInput() {
    return this._redirectPort;
  }

  // res_categories - computed: false, optional: true, required: false
  private _resCategories?: string[]; 
  public get resCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('res_categories'));
  }
  public set resCategories(value: string[]) {
    this._resCategories = value;
  }
  public resetResCategories() {
    this._resCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resCategoriesInput() {
    return this._resCategories;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getNumberAttribute('rule_id');
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

  // departments - computed: false, optional: true, required: false
  private _departments = new NatControlRulesDepartmentsOutputReference(this, "departments");
  public get departments() {
    return this._departments;
  }
  public putDepartments(value: NatControlRulesDepartments) {
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
  private _destIpGroups = new NatControlRulesDestIpGroupsOutputReference(this, "dest_ip_groups");
  public get destIpGroups() {
    return this._destIpGroups;
  }
  public putDestIpGroups(value: NatControlRulesDestIpGroups) {
    this._destIpGroups.internalValue = value;
  }
  public resetDestIpGroups() {
    this._destIpGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destIpGroupsInput() {
    return this._destIpGroups.internalValue;
  }

  // dest_ipv6_groups - computed: false, optional: true, required: false
  private _destIpv6Groups = new NatControlRulesDestIpv6GroupsOutputReference(this, "dest_ipv6_groups");
  public get destIpv6Groups() {
    return this._destIpv6Groups;
  }
  public putDestIpv6Groups(value: NatControlRulesDestIpv6Groups) {
    this._destIpv6Groups.internalValue = value;
  }
  public resetDestIpv6Groups() {
    this._destIpv6Groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destIpv6GroupsInput() {
    return this._destIpv6Groups.internalValue;
  }

  // device_groups - computed: false, optional: true, required: false
  private _deviceGroups = new NatControlRulesDeviceGroupsOutputReference(this, "device_groups");
  public get deviceGroups() {
    return this._deviceGroups;
  }
  public putDeviceGroups(value: NatControlRulesDeviceGroups) {
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
  private _devices = new NatControlRulesDevicesOutputReference(this, "devices");
  public get devices() {
    return this._devices;
  }
  public putDevices(value: NatControlRulesDevices) {
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
  private _groups = new NatControlRulesGroupsOutputReference(this, "groups");
  public get groups() {
    return this._groups;
  }
  public putGroups(value: NatControlRulesGroups) {
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
  private _labels = new NatControlRulesLabelsOutputReference(this, "labels");
  public get labels() {
    return this._labels;
  }
  public putLabels(value: NatControlRulesLabels) {
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
  private _locationGroups = new NatControlRulesLocationGroupsOutputReference(this, "location_groups");
  public get locationGroups() {
    return this._locationGroups;
  }
  public putLocationGroups(value: NatControlRulesLocationGroups) {
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
  private _locations = new NatControlRulesLocationsOutputReference(this, "locations");
  public get locations() {
    return this._locations;
  }
  public putLocations(value: NatControlRulesLocations) {
    this._locations.internalValue = value;
  }
  public resetLocations() {
    this._locations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations.internalValue;
  }

  // nw_service_groups - computed: false, optional: true, required: false
  private _nwServiceGroups = new NatControlRulesNwServiceGroupsOutputReference(this, "nw_service_groups");
  public get nwServiceGroups() {
    return this._nwServiceGroups;
  }
  public putNwServiceGroups(value: NatControlRulesNwServiceGroups) {
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
  private _nwServices = new NatControlRulesNwServicesOutputReference(this, "nw_services");
  public get nwServices() {
    return this._nwServices;
  }
  public putNwServices(value: NatControlRulesNwServices) {
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
  private _srcIpGroups = new NatControlRulesSrcIpGroupsOutputReference(this, "src_ip_groups");
  public get srcIpGroups() {
    return this._srcIpGroups;
  }
  public putSrcIpGroups(value: NatControlRulesSrcIpGroups) {
    this._srcIpGroups.internalValue = value;
  }
  public resetSrcIpGroups() {
    this._srcIpGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpGroupsInput() {
    return this._srcIpGroups.internalValue;
  }

  // src_ipv6_groups - computed: false, optional: true, required: false
  private _srcIpv6Groups = new NatControlRulesSrcIpv6GroupsOutputReference(this, "src_ipv6_groups");
  public get srcIpv6Groups() {
    return this._srcIpv6Groups;
  }
  public putSrcIpv6Groups(value: NatControlRulesSrcIpv6Groups) {
    this._srcIpv6Groups.internalValue = value;
  }
  public resetSrcIpv6Groups() {
    this._srcIpv6Groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv6GroupsInput() {
    return this._srcIpv6Groups.internalValue;
  }

  // time_windows - computed: false, optional: true, required: false
  private _timeWindows = new NatControlRulesTimeWindowsOutputReference(this, "time_windows");
  public get timeWindows() {
    return this._timeWindows;
  }
  public putTimeWindows(value: NatControlRulesTimeWindows) {
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
  private _timeouts = new NatControlRulesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NatControlRulesTimeouts) {
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
  private _users = new NatControlRulesUsersOutputReference(this, "users");
  public get users() {
    return this._users;
  }
  public putUsers(value: NatControlRulesUsers) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_rule: cdktf.booleanToTerraform(this._defaultRule),
      description: cdktf.stringToTerraform(this._description),
      dest_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destAddresses),
      dest_countries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destCountries),
      dest_ip_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destIpCategories),
      enable_full_logging: cdktf.booleanToTerraform(this._enableFullLogging),
      name: cdktf.stringToTerraform(this._name),
      order: cdktf.numberToTerraform(this._order),
      predefined: cdktf.booleanToTerraform(this._predefined),
      rank: cdktf.numberToTerraform(this._rank),
      redirect_fqdn: cdktf.stringToTerraform(this._redirectFqdn),
      redirect_ip: cdktf.stringToTerraform(this._redirectIp),
      redirect_port: cdktf.numberToTerraform(this._redirectPort),
      res_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resCategories),
      src_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcIps),
      state: cdktf.stringToTerraform(this._state),
      departments: natControlRulesDepartmentsToTerraform(this._departments.internalValue),
      dest_ip_groups: natControlRulesDestIpGroupsToTerraform(this._destIpGroups.internalValue),
      dest_ipv6_groups: natControlRulesDestIpv6GroupsToTerraform(this._destIpv6Groups.internalValue),
      device_groups: natControlRulesDeviceGroupsToTerraform(this._deviceGroups.internalValue),
      devices: natControlRulesDevicesToTerraform(this._devices.internalValue),
      groups: natControlRulesGroupsToTerraform(this._groups.internalValue),
      labels: natControlRulesLabelsToTerraform(this._labels.internalValue),
      location_groups: natControlRulesLocationGroupsToTerraform(this._locationGroups.internalValue),
      locations: natControlRulesLocationsToTerraform(this._locations.internalValue),
      nw_service_groups: natControlRulesNwServiceGroupsToTerraform(this._nwServiceGroups.internalValue),
      nw_services: natControlRulesNwServicesToTerraform(this._nwServices.internalValue),
      src_ip_groups: natControlRulesSrcIpGroupsToTerraform(this._srcIpGroups.internalValue),
      src_ipv6_groups: natControlRulesSrcIpv6GroupsToTerraform(this._srcIpv6Groups.internalValue),
      time_windows: natControlRulesTimeWindowsToTerraform(this._timeWindows.internalValue),
      timeouts: natControlRulesTimeoutsToTerraform(this._timeouts.internalValue),
      users: natControlRulesUsersToTerraform(this._users.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      enable_full_logging: {
        value: cdktf.booleanToHclTerraform(this._enableFullLogging),
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
      redirect_fqdn: {
        value: cdktf.stringToHclTerraform(this._redirectFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_ip: {
        value: cdktf.stringToHclTerraform(this._redirectIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_port: {
        value: cdktf.numberToHclTerraform(this._redirectPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      res_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resCategories),
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
      departments: {
        value: natControlRulesDepartmentsToHclTerraform(this._departments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NatControlRulesDepartmentsList",
      },
      dest_ip_groups: {
        value: natControlRulesDestIpGroupsToHclTerraform(this._destIpGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NatControlRulesDestIpGroupsList",
      },
      dest_ipv6_groups: {
        value: natControlRulesDestIpv6GroupsToHclTerraform(this._destIpv6Groups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NatControlRulesDestIpv6GroupsList",
      },
      device_groups: {
        value: natControlRulesDeviceGroupsToHclTerraform(this._deviceGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NatControlRulesDeviceGroupsList",
      },
      devices: {
        value: natControlRulesDevicesToHclTerraform(this._devices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NatControlRulesDevicesList",
      },
      groups: {
        value: natControlRulesGroupsToHclTerraform(this._groups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NatControlRulesGroupsList",
      },
      labels: {
        value: natControlRulesLabelsToHclTerraform(this._labels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NatControlRulesLabelsList",
      },
      location_groups: {
        value: natControlRulesLocationGroupsToHclTerraform(this._locationGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NatControlRulesLocationGroupsList",
      },
      locations: {
        value: natControlRulesLocationsToHclTerraform(this._locations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NatControlRulesLocationsList",
      },
      nw_service_groups: {
        value: natControlRulesNwServiceGroupsToHclTerraform(this._nwServiceGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NatControlRulesNwServiceGroupsList",
      },
      nw_services: {
        value: natControlRulesNwServicesToHclTerraform(this._nwServices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NatControlRulesNwServicesList",
      },
      src_ip_groups: {
        value: natControlRulesSrcIpGroupsToHclTerraform(this._srcIpGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NatControlRulesSrcIpGroupsList",
      },
      src_ipv6_groups: {
        value: natControlRulesSrcIpv6GroupsToHclTerraform(this._srcIpv6Groups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NatControlRulesSrcIpv6GroupsList",
      },
      time_windows: {
        value: natControlRulesTimeWindowsToHclTerraform(this._timeWindows.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NatControlRulesTimeWindowsList",
      },
      timeouts: {
        value: natControlRulesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NatControlRulesTimeouts",
      },
      users: {
        value: natControlRulesUsersToHclTerraform(this._users.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NatControlRulesUsersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
