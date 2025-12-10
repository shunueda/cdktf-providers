// https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DhcpIpv6RangeTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines whether the IPv6 DHCP range template can be used to create network objects in a cloud-computing deployment. The cloud_api_compatible attribute must be set to true if any extensible attributes, such as the Terraform Internal ID, require cloud access; otherwise, it must be set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template#cloud_api_compatible DhcpIpv6RangeTemplate#cloud_api_compatible}
  */
  readonly cloudApiCompatible?: boolean | cdktf.IResolvable;
  /**
  * The IPv6 DHCP range template descriptive comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template#comment DhcpIpv6RangeTemplate#comment}
  */
  readonly comment?: string;
  /**
  * The vConnector member that the object should be delegated to when created from the IPv6 DHCP range template. The vConnector refers to VMware vConnector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template#delegated_member DhcpIpv6RangeTemplate#delegated_member}
  */
  readonly delegatedMember?: DhcpIpv6RangeTemplateDelegatedMember;
  /**
  * These are ranges of IPv6 addresses that the appliance does not use to assign to clients. You can use these excluded addresses as static IPv6 addresses. They contain the start and end addresses of the excluded range, and optionally, information about this excluded range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template#exclude DhcpIpv6RangeTemplate#exclude}
  */
  readonly exclude?: DhcpIpv6RangeTemplateExclude[] | cdktf.IResolvable;
  /**
  * This field contains the logic filters to be applied on this IPv6 range. This list corresponds to the match rules that are written to the DHCPv6 configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template#logic_filter_rules DhcpIpv6RangeTemplate#logic_filter_rules}
  */
  readonly logicFilterRules?: DhcpIpv6RangeTemplateLogicFilterRules[] | cdktf.IResolvable;
  /**
  * The member that will provide service for the IPv6 DHCP range. Set `server_association_type` to `MEMBER` if you want the server specified here to serve the range. For searching by this field, use an HTTP method that contains a body (POST or PUT) with MS DHCP server structure and the request should have option _method=GET.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template#member DhcpIpv6RangeTemplate#member}
  */
  readonly member?: DhcpIpv6RangeTemplateMember;
  /**
  * Name of the IPv6 DHCP range template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template#name DhcpIpv6RangeTemplate#name}
  */
  readonly name: string;
  /**
  * The number of addresses for the IPv6 DHCP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template#number_of_addresses DhcpIpv6RangeTemplate#number_of_addresses}
  */
  readonly numberOfAddresses: number;
  /**
  * The start address offset for the IPv6 DHCP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template#offset DhcpIpv6RangeTemplate#offset}
  */
  readonly offset: number;
  /**
  * This field contains the Option filters to be applied to this IPv6 range. The appliance uses the matching rules of these filters to select the address range from which it assigns a lease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template#option_filter_rules DhcpIpv6RangeTemplate#option_filter_rules}
  */
  readonly optionFilterRules?: DhcpIpv6RangeTemplateOptionFilterRules[] | cdktf.IResolvable;
  /**
  * Determines whether the leases are kept in Recycle Bin until one week after expiry. If this is set to False, the leases are permanently deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template#recycle_leases DhcpIpv6RangeTemplate#recycle_leases}
  */
  readonly recycleLeases?: boolean | cdktf.IResolvable;
  /**
  * The type of server that is going to serve the IPv6 DHCP range. Valid values are `MEMBER` and `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template#server_association_type DhcpIpv6RangeTemplate#server_association_type}
  */
  readonly serverAssociationType?: string;
  /**
  * Use flag for: logic_filter_rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template#use_logic_filter_rules DhcpIpv6RangeTemplate#use_logic_filter_rules}
  */
  readonly useLogicFilterRules?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: recycle_leases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template#use_recycle_leases DhcpIpv6RangeTemplate#use_recycle_leases}
  */
  readonly useRecycleLeases?: boolean | cdktf.IResolvable;
}
export interface DhcpIpv6RangeTemplateDelegatedMember {
  /**
  * The IPv4 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template#ipv4addr DhcpIpv6RangeTemplate#ipv4addr}
  */
  readonly ipv4Addr?: string;
  /**
  * The IPv6 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template#ipv6addr DhcpIpv6RangeTemplate#ipv6addr}
  */
  readonly ipv6Addr?: string;
  /**
  * The Grid member name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template#name DhcpIpv6RangeTemplate#name}
  */
  readonly name?: string;
}

export function dhcpIpv6RangeTemplateDelegatedMemberToTerraform(struct?: DhcpIpv6RangeTemplateDelegatedMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dhcpIpv6RangeTemplateDelegatedMemberToHclTerraform(struct?: DhcpIpv6RangeTemplateDelegatedMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
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

export class DhcpIpv6RangeTemplateDelegatedMemberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpIpv6RangeTemplateDelegatedMember | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpIpv6RangeTemplateDelegatedMember | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Addr = undefined;
      this._ipv6Addr = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv6Addr = value.ipv6Addr;
      this._name = value.name;
    }
  }

  // ipv4addr - computed: true, optional: true, required: false
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  public resetIpv4Addr() {
    this._ipv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // ipv6addr - computed: true, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
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
}
export interface DhcpIpv6RangeTemplateExclude {
  /**
  * A descriptive comment of a DHCP exclusion range template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template#comment DhcpIpv6RangeTemplate#comment}
  */
  readonly comment?: string;
  /**
  * The number of addresses in the DHCP exclusion range template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template#number_of_addresses DhcpIpv6RangeTemplate#number_of_addresses}
  */
  readonly numberOfAddresses: number;
  /**
  * The address offset of the DHCP exclusion range template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template#offset DhcpIpv6RangeTemplate#offset}
  */
  readonly offset: number;
}

export function dhcpIpv6RangeTemplateExcludeToTerraform(struct?: DhcpIpv6RangeTemplateExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    number_of_addresses: cdktf.numberToTerraform(struct!.numberOfAddresses),
    offset: cdktf.numberToTerraform(struct!.offset),
  }
}


export function dhcpIpv6RangeTemplateExcludeToHclTerraform(struct?: DhcpIpv6RangeTemplateExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_addresses: {
      value: cdktf.numberToHclTerraform(struct!.numberOfAddresses),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    offset: {
      value: cdktf.numberToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpIpv6RangeTemplateExcludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpIpv6RangeTemplateExclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._numberOfAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfAddresses = this._numberOfAddresses;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpIpv6RangeTemplateExclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._numberOfAddresses = undefined;
      this._offset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._numberOfAddresses = value.numberOfAddresses;
      this._offset = value.offset;
    }
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // number_of_addresses - computed: true, optional: false, required: true
  private _numberOfAddresses?: number; 
  public get numberOfAddresses() {
    return this.getNumberAttribute('number_of_addresses');
  }
  public set numberOfAddresses(value: number) {
    this._numberOfAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfAddressesInput() {
    return this._numberOfAddresses;
  }

  // offset - computed: true, optional: false, required: true
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }
}

export class DhcpIpv6RangeTemplateExcludeList extends cdktf.ComplexList {
  public internalValue? : DhcpIpv6RangeTemplateExclude[] | cdktf.IResolvable

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
  public get(index: number): DhcpIpv6RangeTemplateExcludeOutputReference {
    return new DhcpIpv6RangeTemplateExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DhcpIpv6RangeTemplateLogicFilterRules {
  /**
  * The filter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template#filter DhcpIpv6RangeTemplate#filter}
  */
  readonly filter: string;
  /**
  * The filter type. Valid values are: * MAC * NAC * Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template#type DhcpIpv6RangeTemplate#type}
  */
  readonly type: string;
}

export function dhcpIpv6RangeTemplateLogicFilterRulesToTerraform(struct?: DhcpIpv6RangeTemplateLogicFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dhcpIpv6RangeTemplateLogicFilterRulesToHclTerraform(struct?: DhcpIpv6RangeTemplateLogicFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpIpv6RangeTemplateLogicFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpIpv6RangeTemplateLogicFilterRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpIpv6RangeTemplateLogicFilterRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
      this._type = value.type;
    }
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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
}

export class DhcpIpv6RangeTemplateLogicFilterRulesList extends cdktf.ComplexList {
  public internalValue? : DhcpIpv6RangeTemplateLogicFilterRules[] | cdktf.IResolvable

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
  public get(index: number): DhcpIpv6RangeTemplateLogicFilterRulesOutputReference {
    return new DhcpIpv6RangeTemplateLogicFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DhcpIpv6RangeTemplateMember {
  /**
  * The IPv4 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template#ipv4addr DhcpIpv6RangeTemplate#ipv4addr}
  */
  readonly ipv4Addr?: string;
  /**
  * The IPv6 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template#ipv6addr DhcpIpv6RangeTemplate#ipv6addr}
  */
  readonly ipv6Addr?: string;
  /**
  * The Grid member name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template#name DhcpIpv6RangeTemplate#name}
  */
  readonly name?: string;
}

export function dhcpIpv6RangeTemplateMemberToTerraform(struct?: DhcpIpv6RangeTemplateMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dhcpIpv6RangeTemplateMemberToHclTerraform(struct?: DhcpIpv6RangeTemplateMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
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

export class DhcpIpv6RangeTemplateMemberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpIpv6RangeTemplateMember | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpIpv6RangeTemplateMember | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Addr = undefined;
      this._ipv6Addr = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv6Addr = value.ipv6Addr;
      this._name = value.name;
    }
  }

  // ipv4addr - computed: true, optional: true, required: false
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  public resetIpv4Addr() {
    this._ipv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // ipv6addr - computed: true, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
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
}
export interface DhcpIpv6RangeTemplateOptionFilterRules {
  /**
  * The name of the DHCP filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template#filter DhcpIpv6RangeTemplate#filter}
  */
  readonly filter: string;
  /**
  * The permission to be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template#permission DhcpIpv6RangeTemplate#permission}
  */
  readonly permission: string;
}

export function dhcpIpv6RangeTemplateOptionFilterRulesToTerraform(struct?: DhcpIpv6RangeTemplateOptionFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function dhcpIpv6RangeTemplateOptionFilterRulesToHclTerraform(struct?: DhcpIpv6RangeTemplateOptionFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpIpv6RangeTemplateOptionFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpIpv6RangeTemplateOptionFilterRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpIpv6RangeTemplateOptionFilterRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
      this._permission = value.permission;
    }
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // permission - computed: false, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}

export class DhcpIpv6RangeTemplateOptionFilterRulesList extends cdktf.ComplexList {
  public internalValue? : DhcpIpv6RangeTemplateOptionFilterRules[] | cdktf.IResolvable

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
  public get(index: number): DhcpIpv6RangeTemplateOptionFilterRulesOutputReference {
    return new DhcpIpv6RangeTemplateOptionFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template nios_dhcp_ipv6_range_template}
*/
export class DhcpIpv6RangeTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dhcp_ipv6_range_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DhcpIpv6RangeTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DhcpIpv6RangeTemplate to import
  * @param importFromId The id of the existing DhcpIpv6RangeTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DhcpIpv6RangeTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dhcp_ipv6_range_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6_range_template nios_dhcp_ipv6_range_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DhcpIpv6RangeTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DhcpIpv6RangeTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'nios_dhcp_ipv6_range_template',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.1.0',
        providerVersionConstraint: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudApiCompatible = config.cloudApiCompatible;
    this._comment = config.comment;
    this._delegatedMember.internalValue = config.delegatedMember;
    this._exclude.internalValue = config.exclude;
    this._logicFilterRules.internalValue = config.logicFilterRules;
    this._member.internalValue = config.member;
    this._name = config.name;
    this._numberOfAddresses = config.numberOfAddresses;
    this._offset = config.offset;
    this._optionFilterRules.internalValue = config.optionFilterRules;
    this._recycleLeases = config.recycleLeases;
    this._serverAssociationType = config.serverAssociationType;
    this._useLogicFilterRules = config.useLogicFilterRules;
    this._useRecycleLeases = config.useRecycleLeases;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_api_compatible - computed: true, optional: true, required: false
  private _cloudApiCompatible?: boolean | cdktf.IResolvable; 
  public get cloudApiCompatible() {
    return this.getBooleanAttribute('cloud_api_compatible');
  }
  public set cloudApiCompatible(value: boolean | cdktf.IResolvable) {
    this._cloudApiCompatible = value;
  }
  public resetCloudApiCompatible() {
    this._cloudApiCompatible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudApiCompatibleInput() {
    return this._cloudApiCompatible;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // delegated_member - computed: true, optional: true, required: false
  private _delegatedMember = new DhcpIpv6RangeTemplateDelegatedMemberOutputReference(this, "delegated_member");
  public get delegatedMember() {
    return this._delegatedMember;
  }
  public putDelegatedMember(value: DhcpIpv6RangeTemplateDelegatedMember) {
    this._delegatedMember.internalValue = value;
  }
  public resetDelegatedMember() {
    this._delegatedMember.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedMemberInput() {
    return this._delegatedMember.internalValue;
  }

  // exclude - computed: true, optional: true, required: false
  private _exclude = new DhcpIpv6RangeTemplateExcludeList(this, "exclude", false);
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: DhcpIpv6RangeTemplateExclude[] | cdktf.IResolvable) {
    this._exclude.internalValue = value;
  }
  public resetExclude() {
    this._exclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude.internalValue;
  }

  // logic_filter_rules - computed: false, optional: true, required: false
  private _logicFilterRules = new DhcpIpv6RangeTemplateLogicFilterRulesList(this, "logic_filter_rules", false);
  public get logicFilterRules() {
    return this._logicFilterRules;
  }
  public putLogicFilterRules(value: DhcpIpv6RangeTemplateLogicFilterRules[] | cdktf.IResolvable) {
    this._logicFilterRules.internalValue = value;
  }
  public resetLogicFilterRules() {
    this._logicFilterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicFilterRulesInput() {
    return this._logicFilterRules.internalValue;
  }

  // member - computed: true, optional: true, required: false
  private _member = new DhcpIpv6RangeTemplateMemberOutputReference(this, "member");
  public get member() {
    return this._member;
  }
  public putMember(value: DhcpIpv6RangeTemplateMember) {
    this._member.internalValue = value;
  }
  public resetMember() {
    this._member.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member.internalValue;
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

  // number_of_addresses - computed: false, optional: false, required: true
  private _numberOfAddresses?: number; 
  public get numberOfAddresses() {
    return this.getNumberAttribute('number_of_addresses');
  }
  public set numberOfAddresses(value: number) {
    this._numberOfAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfAddressesInput() {
    return this._numberOfAddresses;
  }

  // offset - computed: false, optional: false, required: true
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // option_filter_rules - computed: false, optional: true, required: false
  private _optionFilterRules = new DhcpIpv6RangeTemplateOptionFilterRulesList(this, "option_filter_rules", false);
  public get optionFilterRules() {
    return this._optionFilterRules;
  }
  public putOptionFilterRules(value: DhcpIpv6RangeTemplateOptionFilterRules[] | cdktf.IResolvable) {
    this._optionFilterRules.internalValue = value;
  }
  public resetOptionFilterRules() {
    this._optionFilterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionFilterRulesInput() {
    return this._optionFilterRules.internalValue;
  }

  // recycle_leases - computed: true, optional: true, required: false
  private _recycleLeases?: boolean | cdktf.IResolvable; 
  public get recycleLeases() {
    return this.getBooleanAttribute('recycle_leases');
  }
  public set recycleLeases(value: boolean | cdktf.IResolvable) {
    this._recycleLeases = value;
  }
  public resetRecycleLeases() {
    this._recycleLeases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recycleLeasesInput() {
    return this._recycleLeases;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // server_association_type - computed: true, optional: true, required: false
  private _serverAssociationType?: string; 
  public get serverAssociationType() {
    return this.getStringAttribute('server_association_type');
  }
  public set serverAssociationType(value: string) {
    this._serverAssociationType = value;
  }
  public resetServerAssociationType() {
    this._serverAssociationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAssociationTypeInput() {
    return this._serverAssociationType;
  }

  // use_logic_filter_rules - computed: true, optional: true, required: false
  private _useLogicFilterRules?: boolean | cdktf.IResolvable; 
  public get useLogicFilterRules() {
    return this.getBooleanAttribute('use_logic_filter_rules');
  }
  public set useLogicFilterRules(value: boolean | cdktf.IResolvable) {
    this._useLogicFilterRules = value;
  }
  public resetUseLogicFilterRules() {
    this._useLogicFilterRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLogicFilterRulesInput() {
    return this._useLogicFilterRules;
  }

  // use_recycle_leases - computed: true, optional: true, required: false
  private _useRecycleLeases?: boolean | cdktf.IResolvable; 
  public get useRecycleLeases() {
    return this.getBooleanAttribute('use_recycle_leases');
  }
  public set useRecycleLeases(value: boolean | cdktf.IResolvable) {
    this._useRecycleLeases = value;
  }
  public resetUseRecycleLeases() {
    this._useRecycleLeases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRecycleLeasesInput() {
    return this._useRecycleLeases;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_api_compatible: cdktf.booleanToTerraform(this._cloudApiCompatible),
      comment: cdktf.stringToTerraform(this._comment),
      delegated_member: dhcpIpv6RangeTemplateDelegatedMemberToTerraform(this._delegatedMember.internalValue),
      exclude: cdktf.listMapper(dhcpIpv6RangeTemplateExcludeToTerraform, false)(this._exclude.internalValue),
      logic_filter_rules: cdktf.listMapper(dhcpIpv6RangeTemplateLogicFilterRulesToTerraform, false)(this._logicFilterRules.internalValue),
      member: dhcpIpv6RangeTemplateMemberToTerraform(this._member.internalValue),
      name: cdktf.stringToTerraform(this._name),
      number_of_addresses: cdktf.numberToTerraform(this._numberOfAddresses),
      offset: cdktf.numberToTerraform(this._offset),
      option_filter_rules: cdktf.listMapper(dhcpIpv6RangeTemplateOptionFilterRulesToTerraform, false)(this._optionFilterRules.internalValue),
      recycle_leases: cdktf.booleanToTerraform(this._recycleLeases),
      server_association_type: cdktf.stringToTerraform(this._serverAssociationType),
      use_logic_filter_rules: cdktf.booleanToTerraform(this._useLogicFilterRules),
      use_recycle_leases: cdktf.booleanToTerraform(this._useRecycleLeases),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_api_compatible: {
        value: cdktf.booleanToHclTerraform(this._cloudApiCompatible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delegated_member: {
        value: dhcpIpv6RangeTemplateDelegatedMemberToHclTerraform(this._delegatedMember.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DhcpIpv6RangeTemplateDelegatedMember",
      },
      exclude: {
        value: cdktf.listMapperHcl(dhcpIpv6RangeTemplateExcludeToHclTerraform, false)(this._exclude.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DhcpIpv6RangeTemplateExcludeList",
      },
      logic_filter_rules: {
        value: cdktf.listMapperHcl(dhcpIpv6RangeTemplateLogicFilterRulesToHclTerraform, false)(this._logicFilterRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DhcpIpv6RangeTemplateLogicFilterRulesList",
      },
      member: {
        value: dhcpIpv6RangeTemplateMemberToHclTerraform(this._member.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DhcpIpv6RangeTemplateMember",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number_of_addresses: {
        value: cdktf.numberToHclTerraform(this._numberOfAddresses),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      option_filter_rules: {
        value: cdktf.listMapperHcl(dhcpIpv6RangeTemplateOptionFilterRulesToHclTerraform, false)(this._optionFilterRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DhcpIpv6RangeTemplateOptionFilterRulesList",
      },
      recycle_leases: {
        value: cdktf.booleanToHclTerraform(this._recycleLeases),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      server_association_type: {
        value: cdktf.stringToHclTerraform(this._serverAssociationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_logic_filter_rules: {
        value: cdktf.booleanToHclTerraform(this._useLogicFilterRules),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_recycle_leases: {
        value: cdktf.booleanToHclTerraform(this._useRecycleLeases),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
