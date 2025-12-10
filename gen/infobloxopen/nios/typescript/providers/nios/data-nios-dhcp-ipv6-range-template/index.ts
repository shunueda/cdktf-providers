// https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosDhcpIpv6RangeTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#filters DataNiosDhcpIpv6RangeTemplate#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Maximum number of objects to be returned. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#max_results DataNiosDhcpIpv6RangeTemplate#max_results}
  */
  readonly maxResults?: number;
  /**
  * Enable (1) or disable (0) paging for the data source query. When enabled, the system retrieves results in pages, allowing efficient handling of large result sets. Paging is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#paging DataNiosDhcpIpv6RangeTemplate#paging}
  */
  readonly paging?: number;
}
export interface DataNiosDhcpIpv6RangeTemplateResultDelegatedMember {
  /**
  * The IPv4 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#ipv4addr DataNiosDhcpIpv6RangeTemplate#ipv4addr}
  */
  readonly ipv4Addr?: string;
  /**
  * The IPv6 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#ipv6addr DataNiosDhcpIpv6RangeTemplate#ipv6addr}
  */
  readonly ipv6Addr?: string;
  /**
  * The Grid member name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#name DataNiosDhcpIpv6RangeTemplate#name}
  */
  readonly name?: string;
}

export function dataNiosDhcpIpv6RangeTemplateResultDelegatedMemberToTerraform(struct?: DataNiosDhcpIpv6RangeTemplateResultDelegatedMember | cdktf.IResolvable): any {
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


export function dataNiosDhcpIpv6RangeTemplateResultDelegatedMemberToHclTerraform(struct?: DataNiosDhcpIpv6RangeTemplateResultDelegatedMember | cdktf.IResolvable): any {
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

export class DataNiosDhcpIpv6RangeTemplateResultDelegatedMemberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDhcpIpv6RangeTemplateResultDelegatedMember | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpIpv6RangeTemplateResultDelegatedMember | cdktf.IResolvable | undefined) {
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
export interface DataNiosDhcpIpv6RangeTemplateResultExclude {
  /**
  * A descriptive comment of a DHCP exclusion range template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#comment DataNiosDhcpIpv6RangeTemplate#comment}
  */
  readonly comment?: string;
  /**
  * The number of addresses in the DHCP exclusion range template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#number_of_addresses DataNiosDhcpIpv6RangeTemplate#number_of_addresses}
  */
  readonly numberOfAddresses: number;
  /**
  * The address offset of the DHCP exclusion range template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#offset DataNiosDhcpIpv6RangeTemplate#offset}
  */
  readonly offset: number;
}

export function dataNiosDhcpIpv6RangeTemplateResultExcludeToTerraform(struct?: DataNiosDhcpIpv6RangeTemplateResultExclude | cdktf.IResolvable): any {
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


export function dataNiosDhcpIpv6RangeTemplateResultExcludeToHclTerraform(struct?: DataNiosDhcpIpv6RangeTemplateResultExclude | cdktf.IResolvable): any {
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

export class DataNiosDhcpIpv6RangeTemplateResultExcludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpIpv6RangeTemplateResultExclude | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpIpv6RangeTemplateResultExclude | cdktf.IResolvable | undefined) {
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

export class DataNiosDhcpIpv6RangeTemplateResultExcludeList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpIpv6RangeTemplateResultExclude[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpIpv6RangeTemplateResultExcludeOutputReference {
    return new DataNiosDhcpIpv6RangeTemplateResultExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDhcpIpv6RangeTemplateResultLogicFilterRules {
  /**
  * The filter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#filter DataNiosDhcpIpv6RangeTemplate#filter}
  */
  readonly filter: string;
  /**
  * The filter type. Valid values are: * MAC * NAC * Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#type DataNiosDhcpIpv6RangeTemplate#type}
  */
  readonly type: string;
}

export function dataNiosDhcpIpv6RangeTemplateResultLogicFilterRulesToTerraform(struct?: DataNiosDhcpIpv6RangeTemplateResultLogicFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataNiosDhcpIpv6RangeTemplateResultLogicFilterRulesToHclTerraform(struct?: DataNiosDhcpIpv6RangeTemplateResultLogicFilterRules | cdktf.IResolvable): any {
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

export class DataNiosDhcpIpv6RangeTemplateResultLogicFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpIpv6RangeTemplateResultLogicFilterRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpIpv6RangeTemplateResultLogicFilterRules | cdktf.IResolvable | undefined) {
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

  // filter - computed: true, optional: false, required: true
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

  // type - computed: true, optional: false, required: true
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

export class DataNiosDhcpIpv6RangeTemplateResultLogicFilterRulesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpIpv6RangeTemplateResultLogicFilterRules[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpIpv6RangeTemplateResultLogicFilterRulesOutputReference {
    return new DataNiosDhcpIpv6RangeTemplateResultLogicFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDhcpIpv6RangeTemplateResultMember {
  /**
  * The IPv4 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#ipv4addr DataNiosDhcpIpv6RangeTemplate#ipv4addr}
  */
  readonly ipv4Addr?: string;
  /**
  * The IPv6 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#ipv6addr DataNiosDhcpIpv6RangeTemplate#ipv6addr}
  */
  readonly ipv6Addr?: string;
  /**
  * The Grid member name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#name DataNiosDhcpIpv6RangeTemplate#name}
  */
  readonly name?: string;
}

export function dataNiosDhcpIpv6RangeTemplateResultMemberToTerraform(struct?: DataNiosDhcpIpv6RangeTemplateResultMember | cdktf.IResolvable): any {
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


export function dataNiosDhcpIpv6RangeTemplateResultMemberToHclTerraform(struct?: DataNiosDhcpIpv6RangeTemplateResultMember | cdktf.IResolvable): any {
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

export class DataNiosDhcpIpv6RangeTemplateResultMemberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDhcpIpv6RangeTemplateResultMember | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpIpv6RangeTemplateResultMember | cdktf.IResolvable | undefined) {
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
export interface DataNiosDhcpIpv6RangeTemplateResultOptionFilterRules {
  /**
  * The name of the DHCP filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#filter DataNiosDhcpIpv6RangeTemplate#filter}
  */
  readonly filter: string;
  /**
  * The permission to be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#permission DataNiosDhcpIpv6RangeTemplate#permission}
  */
  readonly permission: string;
}

export function dataNiosDhcpIpv6RangeTemplateResultOptionFilterRulesToTerraform(struct?: DataNiosDhcpIpv6RangeTemplateResultOptionFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function dataNiosDhcpIpv6RangeTemplateResultOptionFilterRulesToHclTerraform(struct?: DataNiosDhcpIpv6RangeTemplateResultOptionFilterRules | cdktf.IResolvable): any {
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

export class DataNiosDhcpIpv6RangeTemplateResultOptionFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpIpv6RangeTemplateResultOptionFilterRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpIpv6RangeTemplateResultOptionFilterRules | cdktf.IResolvable | undefined) {
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

  // filter - computed: true, optional: false, required: true
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

  // permission - computed: true, optional: false, required: true
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

export class DataNiosDhcpIpv6RangeTemplateResultOptionFilterRulesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpIpv6RangeTemplateResultOptionFilterRules[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpIpv6RangeTemplateResultOptionFilterRulesOutputReference {
    return new DataNiosDhcpIpv6RangeTemplateResultOptionFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDhcpIpv6RangeTemplateResult {
  /**
  * Determines whether the IPv6 DHCP range template can be used to create network objects in a cloud-computing deployment. The cloud_api_compatible attribute must be set to true if any extensible attributes, such as the Terraform Internal ID, require cloud access; otherwise, it must be set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#cloud_api_compatible DataNiosDhcpIpv6RangeTemplate#cloud_api_compatible}
  */
  readonly cloudApiCompatible?: boolean | cdktf.IResolvable;
  /**
  * The IPv6 DHCP range template descriptive comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#comment DataNiosDhcpIpv6RangeTemplate#comment}
  */
  readonly comment?: string;
  /**
  * The vConnector member that the object should be delegated to when created from the IPv6 DHCP range template. The vConnector refers to VMware vConnector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#delegated_member DataNiosDhcpIpv6RangeTemplate#delegated_member}
  */
  readonly delegatedMember?: DataNiosDhcpIpv6RangeTemplateResultDelegatedMember;
  /**
  * These are ranges of IPv6 addresses that the appliance does not use to assign to clients. You can use these excluded addresses as static IPv6 addresses. They contain the start and end addresses of the excluded range, and optionally, information about this excluded range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#exclude DataNiosDhcpIpv6RangeTemplate#exclude}
  */
  readonly exclude?: DataNiosDhcpIpv6RangeTemplateResultExclude[] | cdktf.IResolvable;
  /**
  * This field contains the logic filters to be applied on this IPv6 range. This list corresponds to the match rules that are written to the DHCPv6 configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#logic_filter_rules DataNiosDhcpIpv6RangeTemplate#logic_filter_rules}
  */
  readonly logicFilterRules?: DataNiosDhcpIpv6RangeTemplateResultLogicFilterRules[] | cdktf.IResolvable;
  /**
  * The member that will provide service for the IPv6 DHCP range. Set `server_association_type` to `MEMBER` if you want the server specified here to serve the range. For searching by this field, use an HTTP method that contains a body (POST or PUT) with MS DHCP server structure and the request should have option _method=GET.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#member DataNiosDhcpIpv6RangeTemplate#member}
  */
  readonly member?: DataNiosDhcpIpv6RangeTemplateResultMember;
  /**
  * Name of the IPv6 DHCP range template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#name DataNiosDhcpIpv6RangeTemplate#name}
  */
  readonly name: string;
  /**
  * The number of addresses for the IPv6 DHCP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#number_of_addresses DataNiosDhcpIpv6RangeTemplate#number_of_addresses}
  */
  readonly numberOfAddresses: number;
  /**
  * The start address offset for the IPv6 DHCP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#offset DataNiosDhcpIpv6RangeTemplate#offset}
  */
  readonly offset: number;
  /**
  * This field contains the Option filters to be applied to this IPv6 range. The appliance uses the matching rules of these filters to select the address range from which it assigns a lease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#option_filter_rules DataNiosDhcpIpv6RangeTemplate#option_filter_rules}
  */
  readonly optionFilterRules?: DataNiosDhcpIpv6RangeTemplateResultOptionFilterRules[] | cdktf.IResolvable;
  /**
  * Determines whether the leases are kept in Recycle Bin until one week after expiry. If this is set to False, the leases are permanently deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#recycle_leases DataNiosDhcpIpv6RangeTemplate#recycle_leases}
  */
  readonly recycleLeases?: boolean | cdktf.IResolvable;
  /**
  * The type of server that is going to serve the IPv6 DHCP range. Valid values are `MEMBER` and `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#server_association_type DataNiosDhcpIpv6RangeTemplate#server_association_type}
  */
  readonly serverAssociationType?: string;
  /**
  * Use flag for: logic_filter_rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#use_logic_filter_rules DataNiosDhcpIpv6RangeTemplate#use_logic_filter_rules}
  */
  readonly useLogicFilterRules?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: recycle_leases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#use_recycle_leases DataNiosDhcpIpv6RangeTemplate#use_recycle_leases}
  */
  readonly useRecycleLeases?: boolean | cdktf.IResolvable;
}

export function dataNiosDhcpIpv6RangeTemplateResultToTerraform(struct?: DataNiosDhcpIpv6RangeTemplateResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_api_compatible: cdktf.booleanToTerraform(struct!.cloudApiCompatible),
    comment: cdktf.stringToTerraform(struct!.comment),
    delegated_member: dataNiosDhcpIpv6RangeTemplateResultDelegatedMemberToTerraform(struct!.delegatedMember),
    exclude: cdktf.listMapper(dataNiosDhcpIpv6RangeTemplateResultExcludeToTerraform, false)(struct!.exclude),
    logic_filter_rules: cdktf.listMapper(dataNiosDhcpIpv6RangeTemplateResultLogicFilterRulesToTerraform, false)(struct!.logicFilterRules),
    member: dataNiosDhcpIpv6RangeTemplateResultMemberToTerraform(struct!.member),
    name: cdktf.stringToTerraform(struct!.name),
    number_of_addresses: cdktf.numberToTerraform(struct!.numberOfAddresses),
    offset: cdktf.numberToTerraform(struct!.offset),
    option_filter_rules: cdktf.listMapper(dataNiosDhcpIpv6RangeTemplateResultOptionFilterRulesToTerraform, false)(struct!.optionFilterRules),
    recycle_leases: cdktf.booleanToTerraform(struct!.recycleLeases),
    server_association_type: cdktf.stringToTerraform(struct!.serverAssociationType),
    use_logic_filter_rules: cdktf.booleanToTerraform(struct!.useLogicFilterRules),
    use_recycle_leases: cdktf.booleanToTerraform(struct!.useRecycleLeases),
  }
}


export function dataNiosDhcpIpv6RangeTemplateResultToHclTerraform(struct?: DataNiosDhcpIpv6RangeTemplateResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_api_compatible: {
      value: cdktf.booleanToHclTerraform(struct!.cloudApiCompatible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delegated_member: {
      value: dataNiosDhcpIpv6RangeTemplateResultDelegatedMemberToHclTerraform(struct!.delegatedMember),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDhcpIpv6RangeTemplateResultDelegatedMember",
    },
    exclude: {
      value: cdktf.listMapperHcl(dataNiosDhcpIpv6RangeTemplateResultExcludeToHclTerraform, false)(struct!.exclude),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDhcpIpv6RangeTemplateResultExcludeList",
    },
    logic_filter_rules: {
      value: cdktf.listMapperHcl(dataNiosDhcpIpv6RangeTemplateResultLogicFilterRulesToHclTerraform, false)(struct!.logicFilterRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDhcpIpv6RangeTemplateResultLogicFilterRulesList",
    },
    member: {
      value: dataNiosDhcpIpv6RangeTemplateResultMemberToHclTerraform(struct!.member),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDhcpIpv6RangeTemplateResultMember",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    option_filter_rules: {
      value: cdktf.listMapperHcl(dataNiosDhcpIpv6RangeTemplateResultOptionFilterRulesToHclTerraform, false)(struct!.optionFilterRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDhcpIpv6RangeTemplateResultOptionFilterRulesList",
    },
    recycle_leases: {
      value: cdktf.booleanToHclTerraform(struct!.recycleLeases),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_association_type: {
      value: cdktf.stringToHclTerraform(struct!.serverAssociationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_logic_filter_rules: {
      value: cdktf.booleanToHclTerraform(struct!.useLogicFilterRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_recycle_leases: {
      value: cdktf.booleanToHclTerraform(struct!.useRecycleLeases),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDhcpIpv6RangeTemplateResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpIpv6RangeTemplateResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudApiCompatible !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudApiCompatible = this._cloudApiCompatible;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._delegatedMember?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegatedMember = this._delegatedMember?.internalValue;
    }
    if (this._exclude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude?.internalValue;
    }
    if (this._logicFilterRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicFilterRules = this._logicFilterRules?.internalValue;
    }
    if (this._member?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.member = this._member?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._numberOfAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfAddresses = this._numberOfAddresses;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._optionFilterRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionFilterRules = this._optionFilterRules?.internalValue;
    }
    if (this._recycleLeases !== undefined) {
      hasAnyValues = true;
      internalValueResult.recycleLeases = this._recycleLeases;
    }
    if (this._serverAssociationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAssociationType = this._serverAssociationType;
    }
    if (this._useLogicFilterRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLogicFilterRules = this._useLogicFilterRules;
    }
    if (this._useRecycleLeases !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRecycleLeases = this._useRecycleLeases;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDhcpIpv6RangeTemplateResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudApiCompatible = undefined;
      this._comment = undefined;
      this._delegatedMember.internalValue = undefined;
      this._exclude.internalValue = undefined;
      this._logicFilterRules.internalValue = undefined;
      this._member.internalValue = undefined;
      this._name = undefined;
      this._numberOfAddresses = undefined;
      this._offset = undefined;
      this._optionFilterRules.internalValue = undefined;
      this._recycleLeases = undefined;
      this._serverAssociationType = undefined;
      this._useLogicFilterRules = undefined;
      this._useRecycleLeases = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudApiCompatible = value.cloudApiCompatible;
      this._comment = value.comment;
      this._delegatedMember.internalValue = value.delegatedMember;
      this._exclude.internalValue = value.exclude;
      this._logicFilterRules.internalValue = value.logicFilterRules;
      this._member.internalValue = value.member;
      this._name = value.name;
      this._numberOfAddresses = value.numberOfAddresses;
      this._offset = value.offset;
      this._optionFilterRules.internalValue = value.optionFilterRules;
      this._recycleLeases = value.recycleLeases;
      this._serverAssociationType = value.serverAssociationType;
      this._useLogicFilterRules = value.useLogicFilterRules;
      this._useRecycleLeases = value.useRecycleLeases;
    }
  }

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
  private _delegatedMember = new DataNiosDhcpIpv6RangeTemplateResultDelegatedMemberOutputReference(this, "delegated_member");
  public get delegatedMember() {
    return this._delegatedMember;
  }
  public putDelegatedMember(value: DataNiosDhcpIpv6RangeTemplateResultDelegatedMember) {
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
  private _exclude = new DataNiosDhcpIpv6RangeTemplateResultExcludeList(this, "exclude", false);
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: DataNiosDhcpIpv6RangeTemplateResultExclude[] | cdktf.IResolvable) {
    this._exclude.internalValue = value;
  }
  public resetExclude() {
    this._exclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude.internalValue;
  }

  // logic_filter_rules - computed: true, optional: true, required: false
  private _logicFilterRules = new DataNiosDhcpIpv6RangeTemplateResultLogicFilterRulesList(this, "logic_filter_rules", false);
  public get logicFilterRules() {
    return this._logicFilterRules;
  }
  public putLogicFilterRules(value: DataNiosDhcpIpv6RangeTemplateResultLogicFilterRules[] | cdktf.IResolvable) {
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
  private _member = new DataNiosDhcpIpv6RangeTemplateResultMemberOutputReference(this, "member");
  public get member() {
    return this._member;
  }
  public putMember(value: DataNiosDhcpIpv6RangeTemplateResultMember) {
    this._member.internalValue = value;
  }
  public resetMember() {
    this._member.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member.internalValue;
  }

  // name - computed: true, optional: false, required: true
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

  // option_filter_rules - computed: true, optional: true, required: false
  private _optionFilterRules = new DataNiosDhcpIpv6RangeTemplateResultOptionFilterRulesList(this, "option_filter_rules", false);
  public get optionFilterRules() {
    return this._optionFilterRules;
  }
  public putOptionFilterRules(value: DataNiosDhcpIpv6RangeTemplateResultOptionFilterRules[] | cdktf.IResolvable) {
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
}

export class DataNiosDhcpIpv6RangeTemplateResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpIpv6RangeTemplateResult[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpIpv6RangeTemplateResultOutputReference {
    return new DataNiosDhcpIpv6RangeTemplateResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template nios_dhcp_ipv6_range_template}
*/
export class DataNiosDhcpIpv6RangeTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dhcp_ipv6_range_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosDhcpIpv6RangeTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosDhcpIpv6RangeTemplate to import
  * @param importFromId The id of the existing DataNiosDhcpIpv6RangeTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosDhcpIpv6RangeTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dhcp_ipv6_range_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6_range_template nios_dhcp_ipv6_range_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosDhcpIpv6RangeTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosDhcpIpv6RangeTemplateConfig = {}) {
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
    this._filters = config.filters;
    this._maxResults = config.maxResults;
    this._paging = config.paging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filters - computed: false, optional: true, required: false
  private _filters?: { [key: string]: string }; 
  public get filters() {
    return this.getStringMapAttribute('filters');
  }
  public set filters(value: { [key: string]: string }) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // paging - computed: false, optional: true, required: false
  private _paging?: number; 
  public get paging() {
    return this.getNumberAttribute('paging');
  }
  public set paging(value: number) {
    this._paging = value;
  }
  public resetPaging() {
    this._paging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagingInput() {
    return this._paging;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataNiosDhcpIpv6RangeTemplateResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      max_results: cdktf.numberToTerraform(this._maxResults),
      paging: cdktf.numberToTerraform(this._paging),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      max_results: {
        value: cdktf.numberToHclTerraform(this._maxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      paging: {
        value: cdktf.numberToHclTerraform(this._paging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
