// https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ForwardingControlRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Additional information about the forwarding rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#description ForwardingControlRule#description}
  */
  readonly description?: string;
  /**
  * List of destination IP addresses or FQDNs for which the rule is applicable. CIDR notation can be used for destination IP addresses. If not set, the rule is not restricted to a specific destination addresses unless specified by destCountries, destIpGroups, or destIpCategories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#dest_addresses ForwardingControlRule#dest_addresses}
  */
  readonly destAddresses?: string[];
  /**
  * Destination countries for which the rule is applicable. If not set, the rule is not restricted to specific destination countries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#dest_countries ForwardingControlRule#dest_countries}
  */
  readonly destCountries?: string[];
  /**
  * List of destination IP categories to which the rule applies. If not set, the rule is not restricted to specific destination IP categories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#dest_ip_categories ForwardingControlRule#dest_ip_categories}
  */
  readonly destIpCategories?: string[];
  /**
  * The type of traffic forwarding method selected from the available options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#forward_method ForwardingControlRule#forward_method}
  */
  readonly forwardMethod: string;
  /**
  * The name of the forwarding rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#name ForwardingControlRule#name}
  */
  readonly name?: string;
  /**
  * The order of execution for the forwarding rule order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#order ForwardingControlRule#order}
  */
  readonly order: number;
  /**
  * Admin rank assigned to the forwarding rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#rank ForwardingControlRule#rank}
  */
  readonly rank?: number;
  /**
  * List of destination domain categories to which the rule applies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#res_categories ForwardingControlRule#res_categories}
  */
  readonly resCategories?: string[];
  /**
  * User-defined source IP addresses for which the rule is applicable. If not set, the rule is not restricted to a specific source IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#src_ips ForwardingControlRule#src_ips}
  */
  readonly srcIps?: string[];
  /**
  * Determines whether the Firewall Filtering policy rule is enabled or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#state ForwardingControlRule#state}
  */
  readonly state?: string;
  /**
  * The rule type selected from the available options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#type ForwardingControlRule#type}
  */
  readonly type?: string;
  /**
  * app_service_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#app_service_groups ForwardingControlRule#app_service_groups}
  */
  readonly appServiceGroups?: ForwardingControlRuleAppServiceGroups;
  /**
  * departments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#departments ForwardingControlRule#departments}
  */
  readonly departments?: ForwardingControlRuleDepartments;
  /**
  * dest_ip_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#dest_ip_groups ForwardingControlRule#dest_ip_groups}
  */
  readonly destIpGroups?: ForwardingControlRuleDestIpGroups;
  /**
  * dest_ipv6_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#dest_ipv6_groups ForwardingControlRule#dest_ipv6_groups}
  */
  readonly destIpv6Groups?: ForwardingControlRuleDestIpv6Groups;
  /**
  * device_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#device_groups ForwardingControlRule#device_groups}
  */
  readonly deviceGroups?: ForwardingControlRuleDeviceGroups;
  /**
  * ec_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#ec_groups ForwardingControlRule#ec_groups}
  */
  readonly ecGroups?: ForwardingControlRuleEcGroups;
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#groups ForwardingControlRule#groups}
  */
  readonly groups?: ForwardingControlRuleGroups;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#labels ForwardingControlRule#labels}
  */
  readonly labels?: ForwardingControlRuleLabels;
  /**
  * location_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#location_groups ForwardingControlRule#location_groups}
  */
  readonly locationGroups?: ForwardingControlRuleLocationGroups;
  /**
  * locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#locations ForwardingControlRule#locations}
  */
  readonly locations?: ForwardingControlRuleLocations;
  /**
  * nw_application_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#nw_application_groups ForwardingControlRule#nw_application_groups}
  */
  readonly nwApplicationGroups?: ForwardingControlRuleNwApplicationGroups;
  /**
  * nw_service_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#nw_service_groups ForwardingControlRule#nw_service_groups}
  */
  readonly nwServiceGroups?: ForwardingControlRuleNwServiceGroups;
  /**
  * nw_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#nw_services ForwardingControlRule#nw_services}
  */
  readonly nwServices?: ForwardingControlRuleNwServices;
  /**
  * proxy_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#proxy_gateway ForwardingControlRule#proxy_gateway}
  */
  readonly proxyGateway?: ForwardingControlRuleProxyGateway;
  /**
  * src_ip_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#src_ip_groups ForwardingControlRule#src_ip_groups}
  */
  readonly srcIpGroups?: ForwardingControlRuleSrcIpGroups;
  /**
  * src_ipv6_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#src_ipv6_groups ForwardingControlRule#src_ipv6_groups}
  */
  readonly srcIpv6Groups?: ForwardingControlRuleSrcIpv6Groups;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#timeouts ForwardingControlRule#timeouts}
  */
  readonly timeouts?: ForwardingControlRuleTimeouts;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#users ForwardingControlRule#users}
  */
  readonly users?: ForwardingControlRuleUsers;
  /**
  * zpa_app_segments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#zpa_app_segments ForwardingControlRule#zpa_app_segments}
  */
  readonly zpaAppSegments?: ForwardingControlRuleZpaAppSegments[] | cdktf.IResolvable;
  /**
  * zpa_application_segment_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#zpa_application_segment_groups ForwardingControlRule#zpa_application_segment_groups}
  */
  readonly zpaApplicationSegmentGroups?: ForwardingControlRuleZpaApplicationSegmentGroups;
  /**
  * zpa_application_segments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#zpa_application_segments ForwardingControlRule#zpa_application_segments}
  */
  readonly zpaApplicationSegments?: ForwardingControlRuleZpaApplicationSegments;
  /**
  * zpa_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#zpa_gateway ForwardingControlRule#zpa_gateway}
  */
  readonly zpaGateway?: ForwardingControlRuleZpaGateway;
}
export interface ForwardingControlRuleAppServiceGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#id ForwardingControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function forwardingControlRuleAppServiceGroupsToTerraform(struct?: ForwardingControlRuleAppServiceGroupsOutputReference | ForwardingControlRuleAppServiceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function forwardingControlRuleAppServiceGroupsToHclTerraform(struct?: ForwardingControlRuleAppServiceGroupsOutputReference | ForwardingControlRuleAppServiceGroups): any {
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

export class ForwardingControlRuleAppServiceGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardingControlRuleAppServiceGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingControlRuleAppServiceGroups | undefined) {
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
export interface ForwardingControlRuleDepartments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#id ForwardingControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function forwardingControlRuleDepartmentsToTerraform(struct?: ForwardingControlRuleDepartmentsOutputReference | ForwardingControlRuleDepartments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function forwardingControlRuleDepartmentsToHclTerraform(struct?: ForwardingControlRuleDepartmentsOutputReference | ForwardingControlRuleDepartments): any {
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

export class ForwardingControlRuleDepartmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardingControlRuleDepartments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingControlRuleDepartments | undefined) {
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
export interface ForwardingControlRuleDestIpGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#id ForwardingControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function forwardingControlRuleDestIpGroupsToTerraform(struct?: ForwardingControlRuleDestIpGroupsOutputReference | ForwardingControlRuleDestIpGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function forwardingControlRuleDestIpGroupsToHclTerraform(struct?: ForwardingControlRuleDestIpGroupsOutputReference | ForwardingControlRuleDestIpGroups): any {
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

export class ForwardingControlRuleDestIpGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardingControlRuleDestIpGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingControlRuleDestIpGroups | undefined) {
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
export interface ForwardingControlRuleDestIpv6Groups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#id ForwardingControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function forwardingControlRuleDestIpv6GroupsToTerraform(struct?: ForwardingControlRuleDestIpv6GroupsOutputReference | ForwardingControlRuleDestIpv6Groups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function forwardingControlRuleDestIpv6GroupsToHclTerraform(struct?: ForwardingControlRuleDestIpv6GroupsOutputReference | ForwardingControlRuleDestIpv6Groups): any {
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

export class ForwardingControlRuleDestIpv6GroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardingControlRuleDestIpv6Groups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingControlRuleDestIpv6Groups | undefined) {
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
export interface ForwardingControlRuleDeviceGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#id ForwardingControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function forwardingControlRuleDeviceGroupsToTerraform(struct?: ForwardingControlRuleDeviceGroupsOutputReference | ForwardingControlRuleDeviceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function forwardingControlRuleDeviceGroupsToHclTerraform(struct?: ForwardingControlRuleDeviceGroupsOutputReference | ForwardingControlRuleDeviceGroups): any {
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

export class ForwardingControlRuleDeviceGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardingControlRuleDeviceGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingControlRuleDeviceGroups | undefined) {
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
export interface ForwardingControlRuleEcGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#id ForwardingControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function forwardingControlRuleEcGroupsToTerraform(struct?: ForwardingControlRuleEcGroupsOutputReference | ForwardingControlRuleEcGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function forwardingControlRuleEcGroupsToHclTerraform(struct?: ForwardingControlRuleEcGroupsOutputReference | ForwardingControlRuleEcGroups): any {
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

export class ForwardingControlRuleEcGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardingControlRuleEcGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingControlRuleEcGroups | undefined) {
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
export interface ForwardingControlRuleGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#id ForwardingControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function forwardingControlRuleGroupsToTerraform(struct?: ForwardingControlRuleGroupsOutputReference | ForwardingControlRuleGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function forwardingControlRuleGroupsToHclTerraform(struct?: ForwardingControlRuleGroupsOutputReference | ForwardingControlRuleGroups): any {
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

export class ForwardingControlRuleGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardingControlRuleGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingControlRuleGroups | undefined) {
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
export interface ForwardingControlRuleLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#id ForwardingControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function forwardingControlRuleLabelsToTerraform(struct?: ForwardingControlRuleLabelsOutputReference | ForwardingControlRuleLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function forwardingControlRuleLabelsToHclTerraform(struct?: ForwardingControlRuleLabelsOutputReference | ForwardingControlRuleLabels): any {
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

export class ForwardingControlRuleLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardingControlRuleLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingControlRuleLabels | undefined) {
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
export interface ForwardingControlRuleLocationGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#id ForwardingControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function forwardingControlRuleLocationGroupsToTerraform(struct?: ForwardingControlRuleLocationGroupsOutputReference | ForwardingControlRuleLocationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function forwardingControlRuleLocationGroupsToHclTerraform(struct?: ForwardingControlRuleLocationGroupsOutputReference | ForwardingControlRuleLocationGroups): any {
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

export class ForwardingControlRuleLocationGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardingControlRuleLocationGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingControlRuleLocationGroups | undefined) {
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
export interface ForwardingControlRuleLocations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#id ForwardingControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function forwardingControlRuleLocationsToTerraform(struct?: ForwardingControlRuleLocationsOutputReference | ForwardingControlRuleLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function forwardingControlRuleLocationsToHclTerraform(struct?: ForwardingControlRuleLocationsOutputReference | ForwardingControlRuleLocations): any {
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

export class ForwardingControlRuleLocationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardingControlRuleLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingControlRuleLocations | undefined) {
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
export interface ForwardingControlRuleNwApplicationGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#id ForwardingControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function forwardingControlRuleNwApplicationGroupsToTerraform(struct?: ForwardingControlRuleNwApplicationGroupsOutputReference | ForwardingControlRuleNwApplicationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function forwardingControlRuleNwApplicationGroupsToHclTerraform(struct?: ForwardingControlRuleNwApplicationGroupsOutputReference | ForwardingControlRuleNwApplicationGroups): any {
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

export class ForwardingControlRuleNwApplicationGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardingControlRuleNwApplicationGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingControlRuleNwApplicationGroups | undefined) {
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
export interface ForwardingControlRuleNwServiceGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#id ForwardingControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function forwardingControlRuleNwServiceGroupsToTerraform(struct?: ForwardingControlRuleNwServiceGroupsOutputReference | ForwardingControlRuleNwServiceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function forwardingControlRuleNwServiceGroupsToHclTerraform(struct?: ForwardingControlRuleNwServiceGroupsOutputReference | ForwardingControlRuleNwServiceGroups): any {
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

export class ForwardingControlRuleNwServiceGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardingControlRuleNwServiceGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingControlRuleNwServiceGroups | undefined) {
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
export interface ForwardingControlRuleNwServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#id ForwardingControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function forwardingControlRuleNwServicesToTerraform(struct?: ForwardingControlRuleNwServicesOutputReference | ForwardingControlRuleNwServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function forwardingControlRuleNwServicesToHclTerraform(struct?: ForwardingControlRuleNwServicesOutputReference | ForwardingControlRuleNwServices): any {
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

export class ForwardingControlRuleNwServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardingControlRuleNwServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingControlRuleNwServices | undefined) {
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
export interface ForwardingControlRuleProxyGateway {
  /**
  * The unique identifier for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#id ForwardingControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * The name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#name ForwardingControlRule#name}
  */
  readonly name?: string;
}

export function forwardingControlRuleProxyGatewayToTerraform(struct?: ForwardingControlRuleProxyGatewayOutputReference | ForwardingControlRuleProxyGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function forwardingControlRuleProxyGatewayToHclTerraform(struct?: ForwardingControlRuleProxyGatewayOutputReference | ForwardingControlRuleProxyGateway): any {
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

export class ForwardingControlRuleProxyGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardingControlRuleProxyGateway | undefined {
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

  public set internalValue(value: ForwardingControlRuleProxyGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface ForwardingControlRuleSrcIpGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#id ForwardingControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function forwardingControlRuleSrcIpGroupsToTerraform(struct?: ForwardingControlRuleSrcIpGroupsOutputReference | ForwardingControlRuleSrcIpGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function forwardingControlRuleSrcIpGroupsToHclTerraform(struct?: ForwardingControlRuleSrcIpGroupsOutputReference | ForwardingControlRuleSrcIpGroups): any {
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

export class ForwardingControlRuleSrcIpGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardingControlRuleSrcIpGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingControlRuleSrcIpGroups | undefined) {
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
export interface ForwardingControlRuleSrcIpv6Groups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#id ForwardingControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function forwardingControlRuleSrcIpv6GroupsToTerraform(struct?: ForwardingControlRuleSrcIpv6GroupsOutputReference | ForwardingControlRuleSrcIpv6Groups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function forwardingControlRuleSrcIpv6GroupsToHclTerraform(struct?: ForwardingControlRuleSrcIpv6GroupsOutputReference | ForwardingControlRuleSrcIpv6Groups): any {
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

export class ForwardingControlRuleSrcIpv6GroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardingControlRuleSrcIpv6Groups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingControlRuleSrcIpv6Groups | undefined) {
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
export interface ForwardingControlRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#create ForwardingControlRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#update ForwardingControlRule#update}
  */
  readonly update?: string;
}

export function forwardingControlRuleTimeoutsToTerraform(struct?: ForwardingControlRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function forwardingControlRuleTimeoutsToHclTerraform(struct?: ForwardingControlRuleTimeouts | cdktf.IResolvable): any {
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

export class ForwardingControlRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingControlRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ForwardingControlRuleTimeouts | cdktf.IResolvable | undefined) {
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
export interface ForwardingControlRuleUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#id ForwardingControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function forwardingControlRuleUsersToTerraform(struct?: ForwardingControlRuleUsersOutputReference | ForwardingControlRuleUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function forwardingControlRuleUsersToHclTerraform(struct?: ForwardingControlRuleUsersOutputReference | ForwardingControlRuleUsers): any {
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

export class ForwardingControlRuleUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardingControlRuleUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingControlRuleUsers | undefined) {
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
export interface ForwardingControlRuleZpaAppSegments {
  /**
  * External ID of the application segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#external_id ForwardingControlRule#external_id}
  */
  readonly externalId: string;
  /**
  * Name of the application segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#name ForwardingControlRule#name}
  */
  readonly name: string;
}

export function forwardingControlRuleZpaAppSegmentsToTerraform(struct?: ForwardingControlRuleZpaAppSegments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function forwardingControlRuleZpaAppSegmentsToHclTerraform(struct?: ForwardingControlRuleZpaAppSegments | cdktf.IResolvable): any {
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

export class ForwardingControlRuleZpaAppSegmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardingControlRuleZpaAppSegments | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ForwardingControlRuleZpaAppSegments | cdktf.IResolvable | undefined) {
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

export class ForwardingControlRuleZpaAppSegmentsList extends cdktf.ComplexList {
  public internalValue? : ForwardingControlRuleZpaAppSegments[] | cdktf.IResolvable

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
  public get(index: number): ForwardingControlRuleZpaAppSegmentsOutputReference {
    return new ForwardingControlRuleZpaAppSegmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardingControlRuleZpaApplicationSegmentGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#id ForwardingControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function forwardingControlRuleZpaApplicationSegmentGroupsToTerraform(struct?: ForwardingControlRuleZpaApplicationSegmentGroupsOutputReference | ForwardingControlRuleZpaApplicationSegmentGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function forwardingControlRuleZpaApplicationSegmentGroupsToHclTerraform(struct?: ForwardingControlRuleZpaApplicationSegmentGroupsOutputReference | ForwardingControlRuleZpaApplicationSegmentGroups): any {
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

export class ForwardingControlRuleZpaApplicationSegmentGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardingControlRuleZpaApplicationSegmentGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingControlRuleZpaApplicationSegmentGroups | undefined) {
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
export interface ForwardingControlRuleZpaApplicationSegments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#id ForwardingControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function forwardingControlRuleZpaApplicationSegmentsToTerraform(struct?: ForwardingControlRuleZpaApplicationSegmentsOutputReference | ForwardingControlRuleZpaApplicationSegments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function forwardingControlRuleZpaApplicationSegmentsToHclTerraform(struct?: ForwardingControlRuleZpaApplicationSegmentsOutputReference | ForwardingControlRuleZpaApplicationSegments): any {
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

export class ForwardingControlRuleZpaApplicationSegmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardingControlRuleZpaApplicationSegments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingControlRuleZpaApplicationSegments | undefined) {
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
export interface ForwardingControlRuleZpaGateway {
  /**
  * The unique identifier for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#id ForwardingControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * The name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#name ForwardingControlRule#name}
  */
  readonly name?: string;
}

export function forwardingControlRuleZpaGatewayToTerraform(struct?: ForwardingControlRuleZpaGatewayOutputReference | ForwardingControlRuleZpaGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function forwardingControlRuleZpaGatewayToHclTerraform(struct?: ForwardingControlRuleZpaGatewayOutputReference | ForwardingControlRuleZpaGateway): any {
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

export class ForwardingControlRuleZpaGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardingControlRuleZpaGateway | undefined {
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

  public set internalValue(value: ForwardingControlRuleZpaGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule zia_forwarding_control_rule}
*/
export class ForwardingControlRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_forwarding_control_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ForwardingControlRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ForwardingControlRule to import
  * @param importFromId The id of the existing ForwardingControlRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ForwardingControlRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_forwarding_control_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/forwarding_control_rule zia_forwarding_control_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ForwardingControlRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ForwardingControlRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'zia_forwarding_control_rule',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.0',
        providerVersionConstraint: '4.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._destAddresses = config.destAddresses;
    this._destCountries = config.destCountries;
    this._destIpCategories = config.destIpCategories;
    this._forwardMethod = config.forwardMethod;
    this._name = config.name;
    this._order = config.order;
    this._rank = config.rank;
    this._resCategories = config.resCategories;
    this._srcIps = config.srcIps;
    this._state = config.state;
    this._type = config.type;
    this._appServiceGroups.internalValue = config.appServiceGroups;
    this._departments.internalValue = config.departments;
    this._destIpGroups.internalValue = config.destIpGroups;
    this._destIpv6Groups.internalValue = config.destIpv6Groups;
    this._deviceGroups.internalValue = config.deviceGroups;
    this._ecGroups.internalValue = config.ecGroups;
    this._groups.internalValue = config.groups;
    this._labels.internalValue = config.labels;
    this._locationGroups.internalValue = config.locationGroups;
    this._locations.internalValue = config.locations;
    this._nwApplicationGroups.internalValue = config.nwApplicationGroups;
    this._nwServiceGroups.internalValue = config.nwServiceGroups;
    this._nwServices.internalValue = config.nwServices;
    this._proxyGateway.internalValue = config.proxyGateway;
    this._srcIpGroups.internalValue = config.srcIpGroups;
    this._srcIpv6Groups.internalValue = config.srcIpv6Groups;
    this._timeouts.internalValue = config.timeouts;
    this._users.internalValue = config.users;
    this._zpaAppSegments.internalValue = config.zpaAppSegments;
    this._zpaApplicationSegmentGroups.internalValue = config.zpaApplicationSegmentGroups;
    this._zpaApplicationSegments.internalValue = config.zpaApplicationSegments;
    this._zpaGateway.internalValue = config.zpaGateway;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // forward_method - computed: false, optional: false, required: true
  private _forwardMethod?: string; 
  public get forwardMethod() {
    return this.getStringAttribute('forward_method');
  }
  public set forwardMethod(value: string) {
    this._forwardMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardMethodInput() {
    return this._forwardMethod;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // app_service_groups - computed: false, optional: true, required: false
  private _appServiceGroups = new ForwardingControlRuleAppServiceGroupsOutputReference(this, "app_service_groups");
  public get appServiceGroups() {
    return this._appServiceGroups;
  }
  public putAppServiceGroups(value: ForwardingControlRuleAppServiceGroups) {
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
  private _departments = new ForwardingControlRuleDepartmentsOutputReference(this, "departments");
  public get departments() {
    return this._departments;
  }
  public putDepartments(value: ForwardingControlRuleDepartments) {
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
  private _destIpGroups = new ForwardingControlRuleDestIpGroupsOutputReference(this, "dest_ip_groups");
  public get destIpGroups() {
    return this._destIpGroups;
  }
  public putDestIpGroups(value: ForwardingControlRuleDestIpGroups) {
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
  private _destIpv6Groups = new ForwardingControlRuleDestIpv6GroupsOutputReference(this, "dest_ipv6_groups");
  public get destIpv6Groups() {
    return this._destIpv6Groups;
  }
  public putDestIpv6Groups(value: ForwardingControlRuleDestIpv6Groups) {
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
  private _deviceGroups = new ForwardingControlRuleDeviceGroupsOutputReference(this, "device_groups");
  public get deviceGroups() {
    return this._deviceGroups;
  }
  public putDeviceGroups(value: ForwardingControlRuleDeviceGroups) {
    this._deviceGroups.internalValue = value;
  }
  public resetDeviceGroups() {
    this._deviceGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupsInput() {
    return this._deviceGroups.internalValue;
  }

  // ec_groups - computed: false, optional: true, required: false
  private _ecGroups = new ForwardingControlRuleEcGroupsOutputReference(this, "ec_groups");
  public get ecGroups() {
    return this._ecGroups;
  }
  public putEcGroups(value: ForwardingControlRuleEcGroups) {
    this._ecGroups.internalValue = value;
  }
  public resetEcGroups() {
    this._ecGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecGroupsInput() {
    return this._ecGroups.internalValue;
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new ForwardingControlRuleGroupsOutputReference(this, "groups");
  public get groups() {
    return this._groups;
  }
  public putGroups(value: ForwardingControlRuleGroups) {
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
  private _labels = new ForwardingControlRuleLabelsOutputReference(this, "labels");
  public get labels() {
    return this._labels;
  }
  public putLabels(value: ForwardingControlRuleLabels) {
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
  private _locationGroups = new ForwardingControlRuleLocationGroupsOutputReference(this, "location_groups");
  public get locationGroups() {
    return this._locationGroups;
  }
  public putLocationGroups(value: ForwardingControlRuleLocationGroups) {
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
  private _locations = new ForwardingControlRuleLocationsOutputReference(this, "locations");
  public get locations() {
    return this._locations;
  }
  public putLocations(value: ForwardingControlRuleLocations) {
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
  private _nwApplicationGroups = new ForwardingControlRuleNwApplicationGroupsOutputReference(this, "nw_application_groups");
  public get nwApplicationGroups() {
    return this._nwApplicationGroups;
  }
  public putNwApplicationGroups(value: ForwardingControlRuleNwApplicationGroups) {
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
  private _nwServiceGroups = new ForwardingControlRuleNwServiceGroupsOutputReference(this, "nw_service_groups");
  public get nwServiceGroups() {
    return this._nwServiceGroups;
  }
  public putNwServiceGroups(value: ForwardingControlRuleNwServiceGroups) {
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
  private _nwServices = new ForwardingControlRuleNwServicesOutputReference(this, "nw_services");
  public get nwServices() {
    return this._nwServices;
  }
  public putNwServices(value: ForwardingControlRuleNwServices) {
    this._nwServices.internalValue = value;
  }
  public resetNwServices() {
    this._nwServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nwServicesInput() {
    return this._nwServices.internalValue;
  }

  // proxy_gateway - computed: false, optional: true, required: false
  private _proxyGateway = new ForwardingControlRuleProxyGatewayOutputReference(this, "proxy_gateway");
  public get proxyGateway() {
    return this._proxyGateway;
  }
  public putProxyGateway(value: ForwardingControlRuleProxyGateway) {
    this._proxyGateway.internalValue = value;
  }
  public resetProxyGateway() {
    this._proxyGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyGatewayInput() {
    return this._proxyGateway.internalValue;
  }

  // src_ip_groups - computed: false, optional: true, required: false
  private _srcIpGroups = new ForwardingControlRuleSrcIpGroupsOutputReference(this, "src_ip_groups");
  public get srcIpGroups() {
    return this._srcIpGroups;
  }
  public putSrcIpGroups(value: ForwardingControlRuleSrcIpGroups) {
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
  private _srcIpv6Groups = new ForwardingControlRuleSrcIpv6GroupsOutputReference(this, "src_ipv6_groups");
  public get srcIpv6Groups() {
    return this._srcIpv6Groups;
  }
  public putSrcIpv6Groups(value: ForwardingControlRuleSrcIpv6Groups) {
    this._srcIpv6Groups.internalValue = value;
  }
  public resetSrcIpv6Groups() {
    this._srcIpv6Groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv6GroupsInput() {
    return this._srcIpv6Groups.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ForwardingControlRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ForwardingControlRuleTimeouts) {
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
  private _users = new ForwardingControlRuleUsersOutputReference(this, "users");
  public get users() {
    return this._users;
  }
  public putUsers(value: ForwardingControlRuleUsers) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }

  // zpa_app_segments - computed: false, optional: true, required: false
  private _zpaAppSegments = new ForwardingControlRuleZpaAppSegmentsList(this, "zpa_app_segments", true);
  public get zpaAppSegments() {
    return this._zpaAppSegments;
  }
  public putZpaAppSegments(value: ForwardingControlRuleZpaAppSegments[] | cdktf.IResolvable) {
    this._zpaAppSegments.internalValue = value;
  }
  public resetZpaAppSegments() {
    this._zpaAppSegments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zpaAppSegmentsInput() {
    return this._zpaAppSegments.internalValue;
  }

  // zpa_application_segment_groups - computed: false, optional: true, required: false
  private _zpaApplicationSegmentGroups = new ForwardingControlRuleZpaApplicationSegmentGroupsOutputReference(this, "zpa_application_segment_groups");
  public get zpaApplicationSegmentGroups() {
    return this._zpaApplicationSegmentGroups;
  }
  public putZpaApplicationSegmentGroups(value: ForwardingControlRuleZpaApplicationSegmentGroups) {
    this._zpaApplicationSegmentGroups.internalValue = value;
  }
  public resetZpaApplicationSegmentGroups() {
    this._zpaApplicationSegmentGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zpaApplicationSegmentGroupsInput() {
    return this._zpaApplicationSegmentGroups.internalValue;
  }

  // zpa_application_segments - computed: false, optional: true, required: false
  private _zpaApplicationSegments = new ForwardingControlRuleZpaApplicationSegmentsOutputReference(this, "zpa_application_segments");
  public get zpaApplicationSegments() {
    return this._zpaApplicationSegments;
  }
  public putZpaApplicationSegments(value: ForwardingControlRuleZpaApplicationSegments) {
    this._zpaApplicationSegments.internalValue = value;
  }
  public resetZpaApplicationSegments() {
    this._zpaApplicationSegments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zpaApplicationSegmentsInput() {
    return this._zpaApplicationSegments.internalValue;
  }

  // zpa_gateway - computed: false, optional: true, required: false
  private _zpaGateway = new ForwardingControlRuleZpaGatewayOutputReference(this, "zpa_gateway");
  public get zpaGateway() {
    return this._zpaGateway;
  }
  public putZpaGateway(value: ForwardingControlRuleZpaGateway) {
    this._zpaGateway.internalValue = value;
  }
  public resetZpaGateway() {
    this._zpaGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zpaGatewayInput() {
    return this._zpaGateway.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      dest_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destAddresses),
      dest_countries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destCountries),
      dest_ip_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destIpCategories),
      forward_method: cdktf.stringToTerraform(this._forwardMethod),
      name: cdktf.stringToTerraform(this._name),
      order: cdktf.numberToTerraform(this._order),
      rank: cdktf.numberToTerraform(this._rank),
      res_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resCategories),
      src_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcIps),
      state: cdktf.stringToTerraform(this._state),
      type: cdktf.stringToTerraform(this._type),
      app_service_groups: forwardingControlRuleAppServiceGroupsToTerraform(this._appServiceGroups.internalValue),
      departments: forwardingControlRuleDepartmentsToTerraform(this._departments.internalValue),
      dest_ip_groups: forwardingControlRuleDestIpGroupsToTerraform(this._destIpGroups.internalValue),
      dest_ipv6_groups: forwardingControlRuleDestIpv6GroupsToTerraform(this._destIpv6Groups.internalValue),
      device_groups: forwardingControlRuleDeviceGroupsToTerraform(this._deviceGroups.internalValue),
      ec_groups: forwardingControlRuleEcGroupsToTerraform(this._ecGroups.internalValue),
      groups: forwardingControlRuleGroupsToTerraform(this._groups.internalValue),
      labels: forwardingControlRuleLabelsToTerraform(this._labels.internalValue),
      location_groups: forwardingControlRuleLocationGroupsToTerraform(this._locationGroups.internalValue),
      locations: forwardingControlRuleLocationsToTerraform(this._locations.internalValue),
      nw_application_groups: forwardingControlRuleNwApplicationGroupsToTerraform(this._nwApplicationGroups.internalValue),
      nw_service_groups: forwardingControlRuleNwServiceGroupsToTerraform(this._nwServiceGroups.internalValue),
      nw_services: forwardingControlRuleNwServicesToTerraform(this._nwServices.internalValue),
      proxy_gateway: forwardingControlRuleProxyGatewayToTerraform(this._proxyGateway.internalValue),
      src_ip_groups: forwardingControlRuleSrcIpGroupsToTerraform(this._srcIpGroups.internalValue),
      src_ipv6_groups: forwardingControlRuleSrcIpv6GroupsToTerraform(this._srcIpv6Groups.internalValue),
      timeouts: forwardingControlRuleTimeoutsToTerraform(this._timeouts.internalValue),
      users: forwardingControlRuleUsersToTerraform(this._users.internalValue),
      zpa_app_segments: cdktf.listMapper(forwardingControlRuleZpaAppSegmentsToTerraform, true)(this._zpaAppSegments.internalValue),
      zpa_application_segment_groups: forwardingControlRuleZpaApplicationSegmentGroupsToTerraform(this._zpaApplicationSegmentGroups.internalValue),
      zpa_application_segments: forwardingControlRuleZpaApplicationSegmentsToTerraform(this._zpaApplicationSegments.internalValue),
      zpa_gateway: forwardingControlRuleZpaGatewayToTerraform(this._zpaGateway.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      forward_method: {
        value: cdktf.stringToHclTerraform(this._forwardMethod),
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
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rank: {
        value: cdktf.numberToHclTerraform(this._rank),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_service_groups: {
        value: forwardingControlRuleAppServiceGroupsToHclTerraform(this._appServiceGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ForwardingControlRuleAppServiceGroupsList",
      },
      departments: {
        value: forwardingControlRuleDepartmentsToHclTerraform(this._departments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ForwardingControlRuleDepartmentsList",
      },
      dest_ip_groups: {
        value: forwardingControlRuleDestIpGroupsToHclTerraform(this._destIpGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ForwardingControlRuleDestIpGroupsList",
      },
      dest_ipv6_groups: {
        value: forwardingControlRuleDestIpv6GroupsToHclTerraform(this._destIpv6Groups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ForwardingControlRuleDestIpv6GroupsList",
      },
      device_groups: {
        value: forwardingControlRuleDeviceGroupsToHclTerraform(this._deviceGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ForwardingControlRuleDeviceGroupsList",
      },
      ec_groups: {
        value: forwardingControlRuleEcGroupsToHclTerraform(this._ecGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ForwardingControlRuleEcGroupsList",
      },
      groups: {
        value: forwardingControlRuleGroupsToHclTerraform(this._groups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ForwardingControlRuleGroupsList",
      },
      labels: {
        value: forwardingControlRuleLabelsToHclTerraform(this._labels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ForwardingControlRuleLabelsList",
      },
      location_groups: {
        value: forwardingControlRuleLocationGroupsToHclTerraform(this._locationGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ForwardingControlRuleLocationGroupsList",
      },
      locations: {
        value: forwardingControlRuleLocationsToHclTerraform(this._locations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ForwardingControlRuleLocationsList",
      },
      nw_application_groups: {
        value: forwardingControlRuleNwApplicationGroupsToHclTerraform(this._nwApplicationGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ForwardingControlRuleNwApplicationGroupsList",
      },
      nw_service_groups: {
        value: forwardingControlRuleNwServiceGroupsToHclTerraform(this._nwServiceGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ForwardingControlRuleNwServiceGroupsList",
      },
      nw_services: {
        value: forwardingControlRuleNwServicesToHclTerraform(this._nwServices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ForwardingControlRuleNwServicesList",
      },
      proxy_gateway: {
        value: forwardingControlRuleProxyGatewayToHclTerraform(this._proxyGateway.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ForwardingControlRuleProxyGatewayList",
      },
      src_ip_groups: {
        value: forwardingControlRuleSrcIpGroupsToHclTerraform(this._srcIpGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ForwardingControlRuleSrcIpGroupsList",
      },
      src_ipv6_groups: {
        value: forwardingControlRuleSrcIpv6GroupsToHclTerraform(this._srcIpv6Groups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ForwardingControlRuleSrcIpv6GroupsList",
      },
      timeouts: {
        value: forwardingControlRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ForwardingControlRuleTimeouts",
      },
      users: {
        value: forwardingControlRuleUsersToHclTerraform(this._users.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ForwardingControlRuleUsersList",
      },
      zpa_app_segments: {
        value: cdktf.listMapperHcl(forwardingControlRuleZpaAppSegmentsToHclTerraform, true)(this._zpaAppSegments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ForwardingControlRuleZpaAppSegmentsList",
      },
      zpa_application_segment_groups: {
        value: forwardingControlRuleZpaApplicationSegmentGroupsToHclTerraform(this._zpaApplicationSegmentGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ForwardingControlRuleZpaApplicationSegmentGroupsList",
      },
      zpa_application_segments: {
        value: forwardingControlRuleZpaApplicationSegmentsToHclTerraform(this._zpaApplicationSegments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ForwardingControlRuleZpaApplicationSegmentsList",
      },
      zpa_gateway: {
        value: forwardingControlRuleZpaGatewayToHclTerraform(this._zpaGateway.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ForwardingControlRuleZpaGatewayList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
