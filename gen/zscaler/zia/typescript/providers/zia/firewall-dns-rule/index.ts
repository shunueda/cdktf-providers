// https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallDnsRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The action configured for the rule that must take place if the traffic matches the rule criteria, such as allowing, blocking, or redirecting the traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#action FirewallDnsRule#action}
  */
  readonly action?: string;
  /**
  * User-defined network service applications on which the rule is applied.
  * 				If not set, the rule is not restricted to a specific network service application
  * 				Use the data source zia_cloud_applications to get the list of available cloud applications:
  * 				https://registry.terraform.io/providers/zscaler/zia/latest/docs/data-sources/zia_cloud_applications
  * 				
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#applications FirewallDnsRule#applications}
  */
  readonly applications?: string[];
  /**
  * The IP address to which the traffic will be redirected to when the DNAT rule is triggered. If not set, no redirection is done to specific IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#block_response_code FirewallDnsRule#block_response_code}
  */
  readonly blockResponseCode?: string;
  /**
  * A Boolean value that indicates whether packet capture (PCAP) is enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#capture_pcap FirewallDnsRule#capture_pcap}
  */
  readonly capturePcap?: boolean | cdktf.IResolvable;
  /**
  * If set to true, the default rule is applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#default_rule FirewallDnsRule#default_rule}
  */
  readonly defaultRule?: boolean | cdktf.IResolvable;
  /**
  * Additional information about the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#description FirewallDnsRule#description}
  */
  readonly description?: string;
  /**
  * Destination addresses. Supports IPv4, FQDNs, or wildcard FQDNs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#dest_addresses FirewallDnsRule#dest_addresses}
  */
  readonly destAddresses?: string[];
  /**
  * Destination countries for which the rule is applicable. If not set, the rule is not restricted to specific destination countries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#dest_countries FirewallDnsRule#dest_countries}
  */
  readonly destCountries?: string[];
  /**
  * Destination IP categories to which the rule applies. If not set, the rule is not restricted to specific categories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#dest_ip_categories FirewallDnsRule#dest_ip_categories}
  */
  readonly destIpCategories?: string[];
  /**
  * DNS request types to which the rule applies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#dns_rule_request_types FirewallDnsRule#dns_rule_request_types}
  */
  readonly dnsRuleRequestTypes?: string[];
  /**
  * The name of the IPS Control rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#name FirewallDnsRule#name}
  */
  readonly name: string;
  /**
  * Rule order number. If omitted, the rule will be added to the end of the rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#order FirewallDnsRule#order}
  */
  readonly order: number;
  /**
  * If set to true, a predefined rule is applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#predefined FirewallDnsRule#predefined}
  */
  readonly predefined?: boolean | cdktf.IResolvable;
  /**
  * Protocol for the given rule. This field is not applicable to the Lite API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#protocols FirewallDnsRule#protocols}
  */
  readonly protocols?: string[];
  /**
  * The admin rank specified for the rule based on your assigned admin rank. Admin rank determines the rule order that can be specified for the rule. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#rank FirewallDnsRule#rank}
  */
  readonly rank?: number;
  /**
  * The IP address to which the traffic will be redirected to when the DNAT rule is triggered. If not set, no redirection is done to specific IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#redirect_ip FirewallDnsRule#redirect_ip}
  */
  readonly redirectIp?: string;
  /**
  * URL categories associated with resolved IP addresses to which the rule applies. If not set, the rule is not restricted to a specific URL category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#res_categories FirewallDnsRule#res_categories}
  */
  readonly resCategories?: string[];
  /**
  * Destination countries for which the rule is applicable. If not set, the rule is not restricted to specific destination countries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#source_countries FirewallDnsRule#source_countries}
  */
  readonly sourceCountries?: string[];
  /**
  * User-defined source IP addresses for which the rule is applicable. If not set, the rule is not restricted to a specific source IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#src_ips FirewallDnsRule#src_ips}
  */
  readonly srcIps?: string[];
  /**
  * The state of the rule indicating whether it is enabled or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#state FirewallDnsRule#state}
  */
  readonly state?: string;
  /**
  * application_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#application_groups FirewallDnsRule#application_groups}
  */
  readonly applicationGroups?: FirewallDnsRuleApplicationGroups;
  /**
  * departments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#departments FirewallDnsRule#departments}
  */
  readonly departments?: FirewallDnsRuleDepartments;
  /**
  * dest_ip_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#dest_ip_groups FirewallDnsRule#dest_ip_groups}
  */
  readonly destIpGroups?: FirewallDnsRuleDestIpGroups;
  /**
  * dest_ipv6_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#dest_ipv6_groups FirewallDnsRule#dest_ipv6_groups}
  */
  readonly destIpv6Groups?: FirewallDnsRuleDestIpv6Groups;
  /**
  * device_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#device_groups FirewallDnsRule#device_groups}
  */
  readonly deviceGroups?: FirewallDnsRuleDeviceGroups;
  /**
  * devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#devices FirewallDnsRule#devices}
  */
  readonly devices?: FirewallDnsRuleDevices;
  /**
  * dns_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#dns_gateway FirewallDnsRule#dns_gateway}
  */
  readonly dnsGateway?: FirewallDnsRuleDnsGateway;
  /**
  * edns_ecs_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#edns_ecs_object FirewallDnsRule#edns_ecs_object}
  */
  readonly ednsEcsObject?: FirewallDnsRuleEdnsEcsObject;
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#groups FirewallDnsRule#groups}
  */
  readonly groups?: FirewallDnsRuleGroups;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#labels FirewallDnsRule#labels}
  */
  readonly labels?: FirewallDnsRuleLabels;
  /**
  * location_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#location_groups FirewallDnsRule#location_groups}
  */
  readonly locationGroups?: FirewallDnsRuleLocationGroups;
  /**
  * locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#locations FirewallDnsRule#locations}
  */
  readonly locations?: FirewallDnsRuleLocations;
  /**
  * src_ip_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#src_ip_groups FirewallDnsRule#src_ip_groups}
  */
  readonly srcIpGroups?: FirewallDnsRuleSrcIpGroups;
  /**
  * src_ipv6_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#src_ipv6_groups FirewallDnsRule#src_ipv6_groups}
  */
  readonly srcIpv6Groups?: FirewallDnsRuleSrcIpv6Groups;
  /**
  * time_windows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#time_windows FirewallDnsRule#time_windows}
  */
  readonly timeWindows?: FirewallDnsRuleTimeWindows;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#timeouts FirewallDnsRule#timeouts}
  */
  readonly timeouts?: FirewallDnsRuleTimeouts;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#users FirewallDnsRule#users}
  */
  readonly users?: FirewallDnsRuleUsers;
  /**
  * zpa_ip_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#zpa_ip_group FirewallDnsRule#zpa_ip_group}
  */
  readonly zpaIpGroup?: FirewallDnsRuleZpaIpGroup;
}
export interface FirewallDnsRuleApplicationGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#id FirewallDnsRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function firewallDnsRuleApplicationGroupsToTerraform(struct?: FirewallDnsRuleApplicationGroupsOutputReference | FirewallDnsRuleApplicationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function firewallDnsRuleApplicationGroupsToHclTerraform(struct?: FirewallDnsRuleApplicationGroupsOutputReference | FirewallDnsRuleApplicationGroups): any {
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

export class FirewallDnsRuleApplicationGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallDnsRuleApplicationGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallDnsRuleApplicationGroups | undefined) {
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
export interface FirewallDnsRuleDepartments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#id FirewallDnsRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function firewallDnsRuleDepartmentsToTerraform(struct?: FirewallDnsRuleDepartmentsOutputReference | FirewallDnsRuleDepartments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function firewallDnsRuleDepartmentsToHclTerraform(struct?: FirewallDnsRuleDepartmentsOutputReference | FirewallDnsRuleDepartments): any {
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

export class FirewallDnsRuleDepartmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallDnsRuleDepartments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallDnsRuleDepartments | undefined) {
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
export interface FirewallDnsRuleDestIpGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#id FirewallDnsRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function firewallDnsRuleDestIpGroupsToTerraform(struct?: FirewallDnsRuleDestIpGroupsOutputReference | FirewallDnsRuleDestIpGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function firewallDnsRuleDestIpGroupsToHclTerraform(struct?: FirewallDnsRuleDestIpGroupsOutputReference | FirewallDnsRuleDestIpGroups): any {
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

export class FirewallDnsRuleDestIpGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallDnsRuleDestIpGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallDnsRuleDestIpGroups | undefined) {
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
export interface FirewallDnsRuleDestIpv6Groups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#id FirewallDnsRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function firewallDnsRuleDestIpv6GroupsToTerraform(struct?: FirewallDnsRuleDestIpv6GroupsOutputReference | FirewallDnsRuleDestIpv6Groups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function firewallDnsRuleDestIpv6GroupsToHclTerraform(struct?: FirewallDnsRuleDestIpv6GroupsOutputReference | FirewallDnsRuleDestIpv6Groups): any {
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

export class FirewallDnsRuleDestIpv6GroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallDnsRuleDestIpv6Groups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallDnsRuleDestIpv6Groups | undefined) {
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
export interface FirewallDnsRuleDeviceGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#id FirewallDnsRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function firewallDnsRuleDeviceGroupsToTerraform(struct?: FirewallDnsRuleDeviceGroupsOutputReference | FirewallDnsRuleDeviceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function firewallDnsRuleDeviceGroupsToHclTerraform(struct?: FirewallDnsRuleDeviceGroupsOutputReference | FirewallDnsRuleDeviceGroups): any {
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

export class FirewallDnsRuleDeviceGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallDnsRuleDeviceGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallDnsRuleDeviceGroups | undefined) {
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
export interface FirewallDnsRuleDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#id FirewallDnsRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function firewallDnsRuleDevicesToTerraform(struct?: FirewallDnsRuleDevicesOutputReference | FirewallDnsRuleDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function firewallDnsRuleDevicesToHclTerraform(struct?: FirewallDnsRuleDevicesOutputReference | FirewallDnsRuleDevices): any {
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

export class FirewallDnsRuleDevicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallDnsRuleDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallDnsRuleDevices | undefined) {
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
export interface FirewallDnsRuleDnsGateway {
  /**
  * The unique identifier for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#id FirewallDnsRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * The name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#name FirewallDnsRule#name}
  */
  readonly name?: string;
}

export function firewallDnsRuleDnsGatewayToTerraform(struct?: FirewallDnsRuleDnsGatewayOutputReference | FirewallDnsRuleDnsGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallDnsRuleDnsGatewayToHclTerraform(struct?: FirewallDnsRuleDnsGatewayOutputReference | FirewallDnsRuleDnsGateway): any {
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

export class FirewallDnsRuleDnsGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallDnsRuleDnsGateway | undefined {
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

  public set internalValue(value: FirewallDnsRuleDnsGateway | undefined) {
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
export interface FirewallDnsRuleEdnsEcsObject {
  /**
  * The unique identifier for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#id FirewallDnsRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * The name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#name FirewallDnsRule#name}
  */
  readonly name?: string;
}

export function firewallDnsRuleEdnsEcsObjectToTerraform(struct?: FirewallDnsRuleEdnsEcsObjectOutputReference | FirewallDnsRuleEdnsEcsObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallDnsRuleEdnsEcsObjectToHclTerraform(struct?: FirewallDnsRuleEdnsEcsObjectOutputReference | FirewallDnsRuleEdnsEcsObject): any {
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

export class FirewallDnsRuleEdnsEcsObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallDnsRuleEdnsEcsObject | undefined {
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

  public set internalValue(value: FirewallDnsRuleEdnsEcsObject | undefined) {
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
export interface FirewallDnsRuleGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#id FirewallDnsRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function firewallDnsRuleGroupsToTerraform(struct?: FirewallDnsRuleGroupsOutputReference | FirewallDnsRuleGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function firewallDnsRuleGroupsToHclTerraform(struct?: FirewallDnsRuleGroupsOutputReference | FirewallDnsRuleGroups): any {
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

export class FirewallDnsRuleGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallDnsRuleGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallDnsRuleGroups | undefined) {
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
export interface FirewallDnsRuleLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#id FirewallDnsRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function firewallDnsRuleLabelsToTerraform(struct?: FirewallDnsRuleLabelsOutputReference | FirewallDnsRuleLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function firewallDnsRuleLabelsToHclTerraform(struct?: FirewallDnsRuleLabelsOutputReference | FirewallDnsRuleLabels): any {
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

export class FirewallDnsRuleLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallDnsRuleLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallDnsRuleLabels | undefined) {
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
export interface FirewallDnsRuleLocationGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#id FirewallDnsRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function firewallDnsRuleLocationGroupsToTerraform(struct?: FirewallDnsRuleLocationGroupsOutputReference | FirewallDnsRuleLocationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function firewallDnsRuleLocationGroupsToHclTerraform(struct?: FirewallDnsRuleLocationGroupsOutputReference | FirewallDnsRuleLocationGroups): any {
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

export class FirewallDnsRuleLocationGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallDnsRuleLocationGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallDnsRuleLocationGroups | undefined) {
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
export interface FirewallDnsRuleLocations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#id FirewallDnsRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function firewallDnsRuleLocationsToTerraform(struct?: FirewallDnsRuleLocationsOutputReference | FirewallDnsRuleLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function firewallDnsRuleLocationsToHclTerraform(struct?: FirewallDnsRuleLocationsOutputReference | FirewallDnsRuleLocations): any {
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

export class FirewallDnsRuleLocationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallDnsRuleLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallDnsRuleLocations | undefined) {
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
export interface FirewallDnsRuleSrcIpGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#id FirewallDnsRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function firewallDnsRuleSrcIpGroupsToTerraform(struct?: FirewallDnsRuleSrcIpGroupsOutputReference | FirewallDnsRuleSrcIpGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function firewallDnsRuleSrcIpGroupsToHclTerraform(struct?: FirewallDnsRuleSrcIpGroupsOutputReference | FirewallDnsRuleSrcIpGroups): any {
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

export class FirewallDnsRuleSrcIpGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallDnsRuleSrcIpGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallDnsRuleSrcIpGroups | undefined) {
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
export interface FirewallDnsRuleSrcIpv6Groups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#id FirewallDnsRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function firewallDnsRuleSrcIpv6GroupsToTerraform(struct?: FirewallDnsRuleSrcIpv6GroupsOutputReference | FirewallDnsRuleSrcIpv6Groups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function firewallDnsRuleSrcIpv6GroupsToHclTerraform(struct?: FirewallDnsRuleSrcIpv6GroupsOutputReference | FirewallDnsRuleSrcIpv6Groups): any {
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

export class FirewallDnsRuleSrcIpv6GroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallDnsRuleSrcIpv6Groups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallDnsRuleSrcIpv6Groups | undefined) {
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
export interface FirewallDnsRuleTimeWindows {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#id FirewallDnsRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function firewallDnsRuleTimeWindowsToTerraform(struct?: FirewallDnsRuleTimeWindowsOutputReference | FirewallDnsRuleTimeWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function firewallDnsRuleTimeWindowsToHclTerraform(struct?: FirewallDnsRuleTimeWindowsOutputReference | FirewallDnsRuleTimeWindows): any {
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

export class FirewallDnsRuleTimeWindowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallDnsRuleTimeWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallDnsRuleTimeWindows | undefined) {
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
export interface FirewallDnsRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#create FirewallDnsRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#update FirewallDnsRule#update}
  */
  readonly update?: string;
}

export function firewallDnsRuleTimeoutsToTerraform(struct?: FirewallDnsRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function firewallDnsRuleTimeoutsToHclTerraform(struct?: FirewallDnsRuleTimeouts | cdktf.IResolvable): any {
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

export class FirewallDnsRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallDnsRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallDnsRuleTimeouts | cdktf.IResolvable | undefined) {
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
export interface FirewallDnsRuleUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#id FirewallDnsRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function firewallDnsRuleUsersToTerraform(struct?: FirewallDnsRuleUsersOutputReference | FirewallDnsRuleUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function firewallDnsRuleUsersToHclTerraform(struct?: FirewallDnsRuleUsersOutputReference | FirewallDnsRuleUsers): any {
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

export class FirewallDnsRuleUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallDnsRuleUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallDnsRuleUsers | undefined) {
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
export interface FirewallDnsRuleZpaIpGroup {
  /**
  * The unique identifier for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#id FirewallDnsRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * The name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#name FirewallDnsRule#name}
  */
  readonly name?: string;
}

export function firewallDnsRuleZpaIpGroupToTerraform(struct?: FirewallDnsRuleZpaIpGroupOutputReference | FirewallDnsRuleZpaIpGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallDnsRuleZpaIpGroupToHclTerraform(struct?: FirewallDnsRuleZpaIpGroupOutputReference | FirewallDnsRuleZpaIpGroup): any {
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

export class FirewallDnsRuleZpaIpGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallDnsRuleZpaIpGroup | undefined {
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

  public set internalValue(value: FirewallDnsRuleZpaIpGroup | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule zia_firewall_dns_rule}
*/
export class FirewallDnsRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_firewall_dns_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallDnsRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallDnsRule to import
  * @param importFromId The id of the existing FirewallDnsRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallDnsRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_firewall_dns_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_dns_rule zia_firewall_dns_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallDnsRuleConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallDnsRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'zia_firewall_dns_rule',
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
    this._action = config.action;
    this._applications = config.applications;
    this._blockResponseCode = config.blockResponseCode;
    this._capturePcap = config.capturePcap;
    this._defaultRule = config.defaultRule;
    this._description = config.description;
    this._destAddresses = config.destAddresses;
    this._destCountries = config.destCountries;
    this._destIpCategories = config.destIpCategories;
    this._dnsRuleRequestTypes = config.dnsRuleRequestTypes;
    this._name = config.name;
    this._order = config.order;
    this._predefined = config.predefined;
    this._protocols = config.protocols;
    this._rank = config.rank;
    this._redirectIp = config.redirectIp;
    this._resCategories = config.resCategories;
    this._sourceCountries = config.sourceCountries;
    this._srcIps = config.srcIps;
    this._state = config.state;
    this._applicationGroups.internalValue = config.applicationGroups;
    this._departments.internalValue = config.departments;
    this._destIpGroups.internalValue = config.destIpGroups;
    this._destIpv6Groups.internalValue = config.destIpv6Groups;
    this._deviceGroups.internalValue = config.deviceGroups;
    this._devices.internalValue = config.devices;
    this._dnsGateway.internalValue = config.dnsGateway;
    this._ednsEcsObject.internalValue = config.ednsEcsObject;
    this._groups.internalValue = config.groups;
    this._labels.internalValue = config.labels;
    this._locationGroups.internalValue = config.locationGroups;
    this._locations.internalValue = config.locations;
    this._srcIpGroups.internalValue = config.srcIpGroups;
    this._srcIpv6Groups.internalValue = config.srcIpv6Groups;
    this._timeWindows.internalValue = config.timeWindows;
    this._timeouts.internalValue = config.timeouts;
    this._users.internalValue = config.users;
    this._zpaIpGroup.internalValue = config.zpaIpGroup;
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

  // applications - computed: false, optional: true, required: false
  private _applications?: string[]; 
  public get applications() {
    return cdktf.Fn.tolist(this.getListAttribute('applications'));
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // block_response_code - computed: false, optional: true, required: false
  private _blockResponseCode?: string; 
  public get blockResponseCode() {
    return this.getStringAttribute('block_response_code');
  }
  public set blockResponseCode(value: string) {
    this._blockResponseCode = value;
  }
  public resetBlockResponseCode() {
    this._blockResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockResponseCodeInput() {
    return this._blockResponseCode;
  }

  // capture_pcap - computed: true, optional: true, required: false
  private _capturePcap?: boolean | cdktf.IResolvable; 
  public get capturePcap() {
    return this.getBooleanAttribute('capture_pcap');
  }
  public set capturePcap(value: boolean | cdktf.IResolvable) {
    this._capturePcap = value;
  }
  public resetCapturePcap() {
    this._capturePcap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capturePcapInput() {
    return this._capturePcap;
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

  // dns_rule_request_types - computed: false, optional: true, required: false
  private _dnsRuleRequestTypes?: string[]; 
  public get dnsRuleRequestTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_rule_request_types'));
  }
  public set dnsRuleRequestTypes(value: string[]) {
    this._dnsRuleRequestTypes = value;
  }
  public resetDnsRuleRequestTypes() {
    this._dnsRuleRequestTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRuleRequestTypesInput() {
    return this._dnsRuleRequestTypes;
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

  // protocols - computed: false, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return cdktf.Fn.tolist(this.getListAttribute('protocols'));
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
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

  // application_groups - computed: false, optional: true, required: false
  private _applicationGroups = new FirewallDnsRuleApplicationGroupsOutputReference(this, "application_groups");
  public get applicationGroups() {
    return this._applicationGroups;
  }
  public putApplicationGroups(value: FirewallDnsRuleApplicationGroups) {
    this._applicationGroups.internalValue = value;
  }
  public resetApplicationGroups() {
    this._applicationGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationGroupsInput() {
    return this._applicationGroups.internalValue;
  }

  // departments - computed: false, optional: true, required: false
  private _departments = new FirewallDnsRuleDepartmentsOutputReference(this, "departments");
  public get departments() {
    return this._departments;
  }
  public putDepartments(value: FirewallDnsRuleDepartments) {
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
  private _destIpGroups = new FirewallDnsRuleDestIpGroupsOutputReference(this, "dest_ip_groups");
  public get destIpGroups() {
    return this._destIpGroups;
  }
  public putDestIpGroups(value: FirewallDnsRuleDestIpGroups) {
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
  private _destIpv6Groups = new FirewallDnsRuleDestIpv6GroupsOutputReference(this, "dest_ipv6_groups");
  public get destIpv6Groups() {
    return this._destIpv6Groups;
  }
  public putDestIpv6Groups(value: FirewallDnsRuleDestIpv6Groups) {
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
  private _deviceGroups = new FirewallDnsRuleDeviceGroupsOutputReference(this, "device_groups");
  public get deviceGroups() {
    return this._deviceGroups;
  }
  public putDeviceGroups(value: FirewallDnsRuleDeviceGroups) {
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
  private _devices = new FirewallDnsRuleDevicesOutputReference(this, "devices");
  public get devices() {
    return this._devices;
  }
  public putDevices(value: FirewallDnsRuleDevices) {
    this._devices.internalValue = value;
  }
  public resetDevices() {
    this._devices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }

  // dns_gateway - computed: false, optional: true, required: false
  private _dnsGateway = new FirewallDnsRuleDnsGatewayOutputReference(this, "dns_gateway");
  public get dnsGateway() {
    return this._dnsGateway;
  }
  public putDnsGateway(value: FirewallDnsRuleDnsGateway) {
    this._dnsGateway.internalValue = value;
  }
  public resetDnsGateway() {
    this._dnsGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsGatewayInput() {
    return this._dnsGateway.internalValue;
  }

  // edns_ecs_object - computed: false, optional: true, required: false
  private _ednsEcsObject = new FirewallDnsRuleEdnsEcsObjectOutputReference(this, "edns_ecs_object");
  public get ednsEcsObject() {
    return this._ednsEcsObject;
  }
  public putEdnsEcsObject(value: FirewallDnsRuleEdnsEcsObject) {
    this._ednsEcsObject.internalValue = value;
  }
  public resetEdnsEcsObject() {
    this._ednsEcsObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ednsEcsObjectInput() {
    return this._ednsEcsObject.internalValue;
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new FirewallDnsRuleGroupsOutputReference(this, "groups");
  public get groups() {
    return this._groups;
  }
  public putGroups(value: FirewallDnsRuleGroups) {
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
  private _labels = new FirewallDnsRuleLabelsOutputReference(this, "labels");
  public get labels() {
    return this._labels;
  }
  public putLabels(value: FirewallDnsRuleLabels) {
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
  private _locationGroups = new FirewallDnsRuleLocationGroupsOutputReference(this, "location_groups");
  public get locationGroups() {
    return this._locationGroups;
  }
  public putLocationGroups(value: FirewallDnsRuleLocationGroups) {
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
  private _locations = new FirewallDnsRuleLocationsOutputReference(this, "locations");
  public get locations() {
    return this._locations;
  }
  public putLocations(value: FirewallDnsRuleLocations) {
    this._locations.internalValue = value;
  }
  public resetLocations() {
    this._locations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations.internalValue;
  }

  // src_ip_groups - computed: false, optional: true, required: false
  private _srcIpGroups = new FirewallDnsRuleSrcIpGroupsOutputReference(this, "src_ip_groups");
  public get srcIpGroups() {
    return this._srcIpGroups;
  }
  public putSrcIpGroups(value: FirewallDnsRuleSrcIpGroups) {
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
  private _srcIpv6Groups = new FirewallDnsRuleSrcIpv6GroupsOutputReference(this, "src_ipv6_groups");
  public get srcIpv6Groups() {
    return this._srcIpv6Groups;
  }
  public putSrcIpv6Groups(value: FirewallDnsRuleSrcIpv6Groups) {
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
  private _timeWindows = new FirewallDnsRuleTimeWindowsOutputReference(this, "time_windows");
  public get timeWindows() {
    return this._timeWindows;
  }
  public putTimeWindows(value: FirewallDnsRuleTimeWindows) {
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
  private _timeouts = new FirewallDnsRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FirewallDnsRuleTimeouts) {
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
  private _users = new FirewallDnsRuleUsersOutputReference(this, "users");
  public get users() {
    return this._users;
  }
  public putUsers(value: FirewallDnsRuleUsers) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }

  // zpa_ip_group - computed: false, optional: true, required: false
  private _zpaIpGroup = new FirewallDnsRuleZpaIpGroupOutputReference(this, "zpa_ip_group");
  public get zpaIpGroup() {
    return this._zpaIpGroup;
  }
  public putZpaIpGroup(value: FirewallDnsRuleZpaIpGroup) {
    this._zpaIpGroup.internalValue = value;
  }
  public resetZpaIpGroup() {
    this._zpaIpGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zpaIpGroupInput() {
    return this._zpaIpGroup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      applications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applications),
      block_response_code: cdktf.stringToTerraform(this._blockResponseCode),
      capture_pcap: cdktf.booleanToTerraform(this._capturePcap),
      default_rule: cdktf.booleanToTerraform(this._defaultRule),
      description: cdktf.stringToTerraform(this._description),
      dest_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destAddresses),
      dest_countries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destCountries),
      dest_ip_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destIpCategories),
      dns_rule_request_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsRuleRequestTypes),
      name: cdktf.stringToTerraform(this._name),
      order: cdktf.numberToTerraform(this._order),
      predefined: cdktf.booleanToTerraform(this._predefined),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      rank: cdktf.numberToTerraform(this._rank),
      redirect_ip: cdktf.stringToTerraform(this._redirectIp),
      res_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resCategories),
      source_countries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceCountries),
      src_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcIps),
      state: cdktf.stringToTerraform(this._state),
      application_groups: firewallDnsRuleApplicationGroupsToTerraform(this._applicationGroups.internalValue),
      departments: firewallDnsRuleDepartmentsToTerraform(this._departments.internalValue),
      dest_ip_groups: firewallDnsRuleDestIpGroupsToTerraform(this._destIpGroups.internalValue),
      dest_ipv6_groups: firewallDnsRuleDestIpv6GroupsToTerraform(this._destIpv6Groups.internalValue),
      device_groups: firewallDnsRuleDeviceGroupsToTerraform(this._deviceGroups.internalValue),
      devices: firewallDnsRuleDevicesToTerraform(this._devices.internalValue),
      dns_gateway: firewallDnsRuleDnsGatewayToTerraform(this._dnsGateway.internalValue),
      edns_ecs_object: firewallDnsRuleEdnsEcsObjectToTerraform(this._ednsEcsObject.internalValue),
      groups: firewallDnsRuleGroupsToTerraform(this._groups.internalValue),
      labels: firewallDnsRuleLabelsToTerraform(this._labels.internalValue),
      location_groups: firewallDnsRuleLocationGroupsToTerraform(this._locationGroups.internalValue),
      locations: firewallDnsRuleLocationsToTerraform(this._locations.internalValue),
      src_ip_groups: firewallDnsRuleSrcIpGroupsToTerraform(this._srcIpGroups.internalValue),
      src_ipv6_groups: firewallDnsRuleSrcIpv6GroupsToTerraform(this._srcIpv6Groups.internalValue),
      time_windows: firewallDnsRuleTimeWindowsToTerraform(this._timeWindows.internalValue),
      timeouts: firewallDnsRuleTimeoutsToTerraform(this._timeouts.internalValue),
      users: firewallDnsRuleUsersToTerraform(this._users.internalValue),
      zpa_ip_group: firewallDnsRuleZpaIpGroupToTerraform(this._zpaIpGroup.internalValue),
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
      applications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applications),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      block_response_code: {
        value: cdktf.stringToHclTerraform(this._blockResponseCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capture_pcap: {
        value: cdktf.booleanToHclTerraform(this._capturePcap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      dns_rule_request_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsRuleRequestTypes),
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
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rank: {
        value: cdktf.numberToHclTerraform(this._rank),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redirect_ip: {
        value: cdktf.stringToHclTerraform(this._redirectIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      res_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      application_groups: {
        value: firewallDnsRuleApplicationGroupsToHclTerraform(this._applicationGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallDnsRuleApplicationGroupsList",
      },
      departments: {
        value: firewallDnsRuleDepartmentsToHclTerraform(this._departments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallDnsRuleDepartmentsList",
      },
      dest_ip_groups: {
        value: firewallDnsRuleDestIpGroupsToHclTerraform(this._destIpGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallDnsRuleDestIpGroupsList",
      },
      dest_ipv6_groups: {
        value: firewallDnsRuleDestIpv6GroupsToHclTerraform(this._destIpv6Groups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallDnsRuleDestIpv6GroupsList",
      },
      device_groups: {
        value: firewallDnsRuleDeviceGroupsToHclTerraform(this._deviceGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallDnsRuleDeviceGroupsList",
      },
      devices: {
        value: firewallDnsRuleDevicesToHclTerraform(this._devices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallDnsRuleDevicesList",
      },
      dns_gateway: {
        value: firewallDnsRuleDnsGatewayToHclTerraform(this._dnsGateway.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallDnsRuleDnsGatewayList",
      },
      edns_ecs_object: {
        value: firewallDnsRuleEdnsEcsObjectToHclTerraform(this._ednsEcsObject.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallDnsRuleEdnsEcsObjectList",
      },
      groups: {
        value: firewallDnsRuleGroupsToHclTerraform(this._groups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallDnsRuleGroupsList",
      },
      labels: {
        value: firewallDnsRuleLabelsToHclTerraform(this._labels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallDnsRuleLabelsList",
      },
      location_groups: {
        value: firewallDnsRuleLocationGroupsToHclTerraform(this._locationGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallDnsRuleLocationGroupsList",
      },
      locations: {
        value: firewallDnsRuleLocationsToHclTerraform(this._locations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallDnsRuleLocationsList",
      },
      src_ip_groups: {
        value: firewallDnsRuleSrcIpGroupsToHclTerraform(this._srcIpGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallDnsRuleSrcIpGroupsList",
      },
      src_ipv6_groups: {
        value: firewallDnsRuleSrcIpv6GroupsToHclTerraform(this._srcIpv6Groups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallDnsRuleSrcIpv6GroupsList",
      },
      time_windows: {
        value: firewallDnsRuleTimeWindowsToHclTerraform(this._timeWindows.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallDnsRuleTimeWindowsList",
      },
      timeouts: {
        value: firewallDnsRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FirewallDnsRuleTimeouts",
      },
      users: {
        value: firewallDnsRuleUsersToHclTerraform(this._users.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallDnsRuleUsersList",
      },
      zpa_ip_group: {
        value: firewallDnsRuleZpaIpGroupToHclTerraform(this._zpaIpGroup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallDnsRuleZpaIpGroupList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
