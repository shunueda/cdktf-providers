// https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosDhcpRangeTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * External Attribute Filters are used to return a more specific list of results by filtering on external attributes. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#extattrfilters DataNiosDhcpRangeTemplate#extattrfilters}
  */
  readonly extattrfilters?: { [key: string]: string };
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#filters DataNiosDhcpRangeTemplate#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Maximum number of objects to be returned. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#max_results DataNiosDhcpRangeTemplate#max_results}
  */
  readonly maxResults?: number;
  /**
  * Enable (1) or disable (0) paging for the data source query. When enabled, the system retrieves results in pages, allowing efficient handling of large result sets. Paging is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#paging DataNiosDhcpRangeTemplate#paging}
  */
  readonly paging?: number;
}
export interface DataNiosDhcpRangeTemplateResultDelegatedMember {
  /**
  * The IPv4 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#ipv4addr DataNiosDhcpRangeTemplate#ipv4addr}
  */
  readonly ipv4Addr?: string;
  /**
  * The IPv6 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#ipv6addr DataNiosDhcpRangeTemplate#ipv6addr}
  */
  readonly ipv6Addr?: string;
  /**
  * The Grid member name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#name DataNiosDhcpRangeTemplate#name}
  */
  readonly name?: string;
}

export function dataNiosDhcpRangeTemplateResultDelegatedMemberToTerraform(struct?: DataNiosDhcpRangeTemplateResultDelegatedMember | cdktf.IResolvable): any {
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


export function dataNiosDhcpRangeTemplateResultDelegatedMemberToHclTerraform(struct?: DataNiosDhcpRangeTemplateResultDelegatedMember | cdktf.IResolvable): any {
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

export class DataNiosDhcpRangeTemplateResultDelegatedMemberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDhcpRangeTemplateResultDelegatedMember | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpRangeTemplateResultDelegatedMember | cdktf.IResolvable | undefined) {
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
export interface DataNiosDhcpRangeTemplateResultExclude {
  /**
  * A descriptive comment of a DHCP exclusion range template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#comment DataNiosDhcpRangeTemplate#comment}
  */
  readonly comment?: string;
  /**
  * The number of addresses in the DHCP exclusion range template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#number_of_addresses DataNiosDhcpRangeTemplate#number_of_addresses}
  */
  readonly numberOfAddresses: number;
  /**
  * The address offset of the DHCP exclusion range template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#offset DataNiosDhcpRangeTemplate#offset}
  */
  readonly offset: number;
}

export function dataNiosDhcpRangeTemplateResultExcludeToTerraform(struct?: DataNiosDhcpRangeTemplateResultExclude | cdktf.IResolvable): any {
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


export function dataNiosDhcpRangeTemplateResultExcludeToHclTerraform(struct?: DataNiosDhcpRangeTemplateResultExclude | cdktf.IResolvable): any {
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

export class DataNiosDhcpRangeTemplateResultExcludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpRangeTemplateResultExclude | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpRangeTemplateResultExclude | cdktf.IResolvable | undefined) {
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

export class DataNiosDhcpRangeTemplateResultExcludeList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpRangeTemplateResultExclude[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpRangeTemplateResultExcludeOutputReference {
    return new DataNiosDhcpRangeTemplateResultExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDhcpRangeTemplateResultFingerprintFilterRules {
  /**
  * The name of the DHCP filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#filter DataNiosDhcpRangeTemplate#filter}
  */
  readonly filter: string;
  /**
  * The permission to be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#permission DataNiosDhcpRangeTemplate#permission}
  */
  readonly permission: string;
}

export function dataNiosDhcpRangeTemplateResultFingerprintFilterRulesToTerraform(struct?: DataNiosDhcpRangeTemplateResultFingerprintFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function dataNiosDhcpRangeTemplateResultFingerprintFilterRulesToHclTerraform(struct?: DataNiosDhcpRangeTemplateResultFingerprintFilterRules | cdktf.IResolvable): any {
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

export class DataNiosDhcpRangeTemplateResultFingerprintFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpRangeTemplateResultFingerprintFilterRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpRangeTemplateResultFingerprintFilterRules | cdktf.IResolvable | undefined) {
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

export class DataNiosDhcpRangeTemplateResultFingerprintFilterRulesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpRangeTemplateResultFingerprintFilterRules[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpRangeTemplateResultFingerprintFilterRulesOutputReference {
    return new DataNiosDhcpRangeTemplateResultFingerprintFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDhcpRangeTemplateResultLogicFilterRules {
  /**
  * The filter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#filter DataNiosDhcpRangeTemplate#filter}
  */
  readonly filter: string;
  /**
  * The filter type. Valid values are: * MAC * NAC * Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#type DataNiosDhcpRangeTemplate#type}
  */
  readonly type: string;
}

export function dataNiosDhcpRangeTemplateResultLogicFilterRulesToTerraform(struct?: DataNiosDhcpRangeTemplateResultLogicFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataNiosDhcpRangeTemplateResultLogicFilterRulesToHclTerraform(struct?: DataNiosDhcpRangeTemplateResultLogicFilterRules | cdktf.IResolvable): any {
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

export class DataNiosDhcpRangeTemplateResultLogicFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpRangeTemplateResultLogicFilterRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpRangeTemplateResultLogicFilterRules | cdktf.IResolvable | undefined) {
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

export class DataNiosDhcpRangeTemplateResultLogicFilterRulesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpRangeTemplateResultLogicFilterRules[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpRangeTemplateResultLogicFilterRulesOutputReference {
    return new DataNiosDhcpRangeTemplateResultLogicFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDhcpRangeTemplateResultMacFilterRules {
  /**
  * The name of the DHCP filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#filter DataNiosDhcpRangeTemplate#filter}
  */
  readonly filter: string;
  /**
  * The permission to be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#permission DataNiosDhcpRangeTemplate#permission}
  */
  readonly permission: string;
}

export function dataNiosDhcpRangeTemplateResultMacFilterRulesToTerraform(struct?: DataNiosDhcpRangeTemplateResultMacFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function dataNiosDhcpRangeTemplateResultMacFilterRulesToHclTerraform(struct?: DataNiosDhcpRangeTemplateResultMacFilterRules | cdktf.IResolvable): any {
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

export class DataNiosDhcpRangeTemplateResultMacFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpRangeTemplateResultMacFilterRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpRangeTemplateResultMacFilterRules | cdktf.IResolvable | undefined) {
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

export class DataNiosDhcpRangeTemplateResultMacFilterRulesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpRangeTemplateResultMacFilterRules[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpRangeTemplateResultMacFilterRulesOutputReference {
    return new DataNiosDhcpRangeTemplateResultMacFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDhcpRangeTemplateResultMember {
  /**
  * The IPv4 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#ipv4addr DataNiosDhcpRangeTemplate#ipv4addr}
  */
  readonly ipv4Addr?: string;
  /**
  * The IPv6 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#ipv6addr DataNiosDhcpRangeTemplate#ipv6addr}
  */
  readonly ipv6Addr?: string;
  /**
  * The Grid member name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#name DataNiosDhcpRangeTemplate#name}
  */
  readonly name?: string;
}

export function dataNiosDhcpRangeTemplateResultMemberToTerraform(struct?: DataNiosDhcpRangeTemplateResultMember | cdktf.IResolvable): any {
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


export function dataNiosDhcpRangeTemplateResultMemberToHclTerraform(struct?: DataNiosDhcpRangeTemplateResultMember | cdktf.IResolvable): any {
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

export class DataNiosDhcpRangeTemplateResultMemberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDhcpRangeTemplateResultMember | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpRangeTemplateResultMember | cdktf.IResolvable | undefined) {
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
export interface DataNiosDhcpRangeTemplateResultMsOptions {
  /**
  * The name of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#name DataNiosDhcpRangeTemplate#name}
  */
  readonly name?: string;
  /**
  * The code of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#num DataNiosDhcpRangeTemplate#num}
  */
  readonly num?: number;
  /**
  * The name of the user class with which this DHCP option is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#user_class DataNiosDhcpRangeTemplate#user_class}
  */
  readonly userClass?: string;
  /**
  * Value of the DHCP option. Required to be set for all options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#value DataNiosDhcpRangeTemplate#value}
  */
  readonly value?: string;
  /**
  * The name of the vendor class with which this DHCP option is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#vendor_class DataNiosDhcpRangeTemplate#vendor_class}
  */
  readonly vendorClass?: string;
}

export function dataNiosDhcpRangeTemplateResultMsOptionsToTerraform(struct?: DataNiosDhcpRangeTemplateResultMsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    num: cdktf.numberToTerraform(struct!.num),
    user_class: cdktf.stringToTerraform(struct!.userClass),
    value: cdktf.stringToTerraform(struct!.value),
    vendor_class: cdktf.stringToTerraform(struct!.vendorClass),
  }
}


export function dataNiosDhcpRangeTemplateResultMsOptionsToHclTerraform(struct?: DataNiosDhcpRangeTemplateResultMsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num: {
      value: cdktf.numberToHclTerraform(struct!.num),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_class: {
      value: cdktf.stringToHclTerraform(struct!.userClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor_class: {
      value: cdktf.stringToHclTerraform(struct!.vendorClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDhcpRangeTemplateResultMsOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpRangeTemplateResultMsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._num !== undefined) {
      hasAnyValues = true;
      internalValueResult.num = this._num;
    }
    if (this._userClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.userClass = this._userClass;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._vendorClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorClass = this._vendorClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDhcpRangeTemplateResultMsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._num = undefined;
      this._userClass = undefined;
      this._value = undefined;
      this._vendorClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._num = value.num;
      this._userClass = value.userClass;
      this._value = value.value;
      this._vendorClass = value.vendorClass;
    }
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

  // num - computed: true, optional: true, required: false
  private _num?: number; 
  public get num() {
    return this.getNumberAttribute('num');
  }
  public set num(value: number) {
    this._num = value;
  }
  public resetNum() {
    this._num = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInput() {
    return this._num;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_class - computed: true, optional: true, required: false
  private _userClass?: string; 
  public get userClass() {
    return this.getStringAttribute('user_class');
  }
  public set userClass(value: string) {
    this._userClass = value;
  }
  public resetUserClass() {
    this._userClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userClassInput() {
    return this._userClass;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // vendor_class - computed: true, optional: true, required: false
  private _vendorClass?: string; 
  public get vendorClass() {
    return this.getStringAttribute('vendor_class');
  }
  public set vendorClass(value: string) {
    this._vendorClass = value;
  }
  public resetVendorClass() {
    this._vendorClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorClassInput() {
    return this._vendorClass;
  }
}

export class DataNiosDhcpRangeTemplateResultMsOptionsList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpRangeTemplateResultMsOptions[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpRangeTemplateResultMsOptionsOutputReference {
    return new DataNiosDhcpRangeTemplateResultMsOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDhcpRangeTemplateResultMsServer {
  /**
  * The IPv4 Address or FQDN of the Microsoft server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#ipv4addr DataNiosDhcpRangeTemplate#ipv4addr}
  */
  readonly ipv4Addr?: string;
}

export function dataNiosDhcpRangeTemplateResultMsServerToTerraform(struct?: DataNiosDhcpRangeTemplateResultMsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4addr: cdktf.stringToTerraform(struct!.ipv4Addr),
  }
}


export function dataNiosDhcpRangeTemplateResultMsServerToHclTerraform(struct?: DataNiosDhcpRangeTemplateResultMsServer | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDhcpRangeTemplateResultMsServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDhcpRangeTemplateResultMsServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDhcpRangeTemplateResultMsServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Addr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Addr = value.ipv4Addr;
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
}
export interface DataNiosDhcpRangeTemplateResultNacFilterRules {
  /**
  * The name of the DHCP filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#filter DataNiosDhcpRangeTemplate#filter}
  */
  readonly filter: string;
  /**
  * The permission to be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#permission DataNiosDhcpRangeTemplate#permission}
  */
  readonly permission: string;
}

export function dataNiosDhcpRangeTemplateResultNacFilterRulesToTerraform(struct?: DataNiosDhcpRangeTemplateResultNacFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function dataNiosDhcpRangeTemplateResultNacFilterRulesToHclTerraform(struct?: DataNiosDhcpRangeTemplateResultNacFilterRules | cdktf.IResolvable): any {
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

export class DataNiosDhcpRangeTemplateResultNacFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpRangeTemplateResultNacFilterRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpRangeTemplateResultNacFilterRules | cdktf.IResolvable | undefined) {
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

export class DataNiosDhcpRangeTemplateResultNacFilterRulesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpRangeTemplateResultNacFilterRules[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpRangeTemplateResultNacFilterRulesOutputReference {
    return new DataNiosDhcpRangeTemplateResultNacFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDhcpRangeTemplateResultOptionFilterRules {
  /**
  * The name of the DHCP filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#filter DataNiosDhcpRangeTemplate#filter}
  */
  readonly filter: string;
  /**
  * The permission to be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#permission DataNiosDhcpRangeTemplate#permission}
  */
  readonly permission: string;
}

export function dataNiosDhcpRangeTemplateResultOptionFilterRulesToTerraform(struct?: DataNiosDhcpRangeTemplateResultOptionFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function dataNiosDhcpRangeTemplateResultOptionFilterRulesToHclTerraform(struct?: DataNiosDhcpRangeTemplateResultOptionFilterRules | cdktf.IResolvable): any {
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

export class DataNiosDhcpRangeTemplateResultOptionFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpRangeTemplateResultOptionFilterRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpRangeTemplateResultOptionFilterRules | cdktf.IResolvable | undefined) {
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

export class DataNiosDhcpRangeTemplateResultOptionFilterRulesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpRangeTemplateResultOptionFilterRules[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpRangeTemplateResultOptionFilterRulesOutputReference {
    return new DataNiosDhcpRangeTemplateResultOptionFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDhcpRangeTemplateResultOptions {
  /**
  * Name of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#name DataNiosDhcpRangeTemplate#name}
  */
  readonly name?: string;
  /**
  * The code of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#num DataNiosDhcpRangeTemplate#num}
  */
  readonly num?: number;
  /**
  * Only applies to special options that are displayed separately from other options and have a use flag. These options are: * routers * router-templates * domain-name-servers * domain-name * broadcast-address * broadcast-address-offset * dhcp-lease-time * dhcp6.name-servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#use_option DataNiosDhcpRangeTemplate#use_option}
  */
  readonly useOption?: boolean | cdktf.IResolvable;
  /**
  * Value of the DHCP option. Required to be set for all options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#value DataNiosDhcpRangeTemplate#value}
  */
  readonly value?: string;
  /**
  * The name of the space this DHCP option is associated to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#vendor_class DataNiosDhcpRangeTemplate#vendor_class}
  */
  readonly vendorClass?: string;
}

export function dataNiosDhcpRangeTemplateResultOptionsToTerraform(struct?: DataNiosDhcpRangeTemplateResultOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    num: cdktf.numberToTerraform(struct!.num),
    use_option: cdktf.booleanToTerraform(struct!.useOption),
    value: cdktf.stringToTerraform(struct!.value),
    vendor_class: cdktf.stringToTerraform(struct!.vendorClass),
  }
}


export function dataNiosDhcpRangeTemplateResultOptionsToHclTerraform(struct?: DataNiosDhcpRangeTemplateResultOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num: {
      value: cdktf.numberToHclTerraform(struct!.num),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_option: {
      value: cdktf.booleanToHclTerraform(struct!.useOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor_class: {
      value: cdktf.stringToHclTerraform(struct!.vendorClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDhcpRangeTemplateResultOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpRangeTemplateResultOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._num !== undefined) {
      hasAnyValues = true;
      internalValueResult.num = this._num;
    }
    if (this._useOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOption = this._useOption;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._vendorClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorClass = this._vendorClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDhcpRangeTemplateResultOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._num = undefined;
      this._useOption = undefined;
      this._value = undefined;
      this._vendorClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._num = value.num;
      this._useOption = value.useOption;
      this._value = value.value;
      this._vendorClass = value.vendorClass;
    }
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

  // num - computed: true, optional: true, required: false
  private _num?: number; 
  public get num() {
    return this.getNumberAttribute('num');
  }
  public set num(value: number) {
    this._num = value;
  }
  public resetNum() {
    this._num = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInput() {
    return this._num;
  }

  // use_option - computed: true, optional: true, required: false
  private _useOption?: boolean | cdktf.IResolvable; 
  public get useOption() {
    return this.getBooleanAttribute('use_option');
  }
  public set useOption(value: boolean | cdktf.IResolvable) {
    this._useOption = value;
  }
  public resetUseOption() {
    this._useOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOptionInput() {
    return this._useOption;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // vendor_class - computed: true, optional: true, required: false
  private _vendorClass?: string; 
  public get vendorClass() {
    return this.getStringAttribute('vendor_class');
  }
  public set vendorClass(value: string) {
    this._vendorClass = value;
  }
  public resetVendorClass() {
    this._vendorClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorClassInput() {
    return this._vendorClass;
  }
}

export class DataNiosDhcpRangeTemplateResultOptionsList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpRangeTemplateResultOptions[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpRangeTemplateResultOptionsOutputReference {
    return new DataNiosDhcpRangeTemplateResultOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDhcpRangeTemplateResultRelayAgentFilterRules {
  /**
  * The name of the DHCP filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#filter DataNiosDhcpRangeTemplate#filter}
  */
  readonly filter: string;
  /**
  * The permission to be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#permission DataNiosDhcpRangeTemplate#permission}
  */
  readonly permission: string;
}

export function dataNiosDhcpRangeTemplateResultRelayAgentFilterRulesToTerraform(struct?: DataNiosDhcpRangeTemplateResultRelayAgentFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function dataNiosDhcpRangeTemplateResultRelayAgentFilterRulesToHclTerraform(struct?: DataNiosDhcpRangeTemplateResultRelayAgentFilterRules | cdktf.IResolvable): any {
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

export class DataNiosDhcpRangeTemplateResultRelayAgentFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpRangeTemplateResultRelayAgentFilterRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpRangeTemplateResultRelayAgentFilterRules | cdktf.IResolvable | undefined) {
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

export class DataNiosDhcpRangeTemplateResultRelayAgentFilterRulesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpRangeTemplateResultRelayAgentFilterRules[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpRangeTemplateResultRelayAgentFilterRulesOutputReference {
    return new DataNiosDhcpRangeTemplateResultRelayAgentFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDhcpRangeTemplateResult {
  /**
  * The bootfile name for the range. You can configure the DHCP server to support clients that use the boot file name option in their DHCPREQUEST messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#bootfile DataNiosDhcpRangeTemplate#bootfile}
  */
  readonly bootfile?: string;
  /**
  * The bootserver address for the range. You can specify the name and/or IP address of the boot server that the host needs to boot. The boot server IPv4 Address or name in FQDN format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#bootserver DataNiosDhcpRangeTemplate#bootserver}
  */
  readonly bootserver?: string;
  /**
  * Determines whether the IPv6 DHCP range template can be used to create network objects in a cloud-computing deployment. The cloud_api_compatible attribute must be set to true if any extensible attributes, such as the Terraform Internal ID, require cloud access; otherwise, it must be set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#cloud_api_compatible DataNiosDhcpRangeTemplate#cloud_api_compatible}
  */
  readonly cloudApiCompatible?: boolean | cdktf.IResolvable;
  /**
  * A descriptive comment of a range template object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#comment DataNiosDhcpRangeTemplate#comment}
  */
  readonly comment?: string;
  /**
  * The dynamic DNS domain name the appliance uses specifically for DDNS updates for this range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#ddns_domainname DataNiosDhcpRangeTemplate#ddns_domainname}
  */
  readonly ddnsDomainname?: string;
  /**
  * If this field is set to True, the DHCP server generates a hostname and updates DNS with it when the DHCP client request does not contain a hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#ddns_generate_hostname DataNiosDhcpRangeTemplate#ddns_generate_hostname}
  */
  readonly ddnsGenerateHostname?: boolean | cdktf.IResolvable;
  /**
  * The vconnector member that the object should be delegated to when created from this range template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#delegated_member DataNiosDhcpRangeTemplate#delegated_member}
  */
  readonly delegatedMember?: DataNiosDhcpRangeTemplateResultDelegatedMember;
  /**
  * If True, send NAK forcing the client to take the new address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#deny_all_clients DataNiosDhcpRangeTemplate#deny_all_clients}
  */
  readonly denyAllClients?: boolean | cdktf.IResolvable;
  /**
  * Determines if BOOTP settings are disabled and BOOTP requests will be denied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#deny_bootp DataNiosDhcpRangeTemplate#deny_bootp}
  */
  readonly denyBootp?: boolean | cdktf.IResolvable;
  /**
  * The e-mail lists to which the appliance sends DHCP threshold alarm e-mail messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#email_list DataNiosDhcpRangeTemplate#email_list}
  */
  readonly emailList?: string[];
  /**
  * Determines if the DHCP server sends DDNS updates to DNS servers in the same Grid, and to external DNS servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#enable_ddns DataNiosDhcpRangeTemplate#enable_ddns}
  */
  readonly enableDdns?: boolean | cdktf.IResolvable;
  /**
  * Determines if DHCP thresholds are enabled for the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#enable_dhcp_thresholds DataNiosDhcpRangeTemplate#enable_dhcp_thresholds}
  */
  readonly enableDhcpThresholds?: boolean | cdktf.IResolvable;
  /**
  * Determines if DHCP threshold warnings are sent through email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#enable_email_warnings DataNiosDhcpRangeTemplate#enable_email_warnings}
  */
  readonly enableEmailWarnings?: boolean | cdktf.IResolvable;
  /**
  * Set this to True if you want the DHCP server to use a different lease time for PXE clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#enable_pxe_lease_time DataNiosDhcpRangeTemplate#enable_pxe_lease_time}
  */
  readonly enablePxeLeaseTime?: boolean | cdktf.IResolvable;
  /**
  * Determines if DHCP threshold warnings are sent through SNMP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#enable_snmp_warnings DataNiosDhcpRangeTemplate#enable_snmp_warnings}
  */
  readonly enableSnmpWarnings?: boolean | cdktf.IResolvable;
  /**
  * These are ranges of IP addresses that the appliance does not use to assign to clients. You can use these exclusion addresses as static IP addresses. They contain the start and end addresses of the exclusion range, and optionally, information about this exclusion range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#exclude DataNiosDhcpRangeTemplate#exclude}
  */
  readonly exclude?: DataNiosDhcpRangeTemplateResultExclude[] | cdktf.IResolvable;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#extattrs DataNiosDhcpRangeTemplate#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * The name of the failover association: the server in this failover association will serve the IPv4 range in case the main server is out of service. {rangetemplate:rangetemplate} must be set to 'FAILOVER' or 'FAILOVER_MS' if you want the failover association specified here to serve the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#failover_association DataNiosDhcpRangeTemplate#failover_association}
  */
  readonly failoverAssociation?: string;
  /**
  * This field contains the fingerprint filters for this DHCP range. The appliance uses matching rules in these filters to select the address range from which it assigns a lease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#fingerprint_filter_rules DataNiosDhcpRangeTemplate#fingerprint_filter_rules}
  */
  readonly fingerprintFilterRules?: DataNiosDhcpRangeTemplateResultFingerprintFilterRules[] | cdktf.IResolvable;
  /**
  * The percentage of DHCP range usage threshold above which range usage is not expected and may warrant your attention. When the high watermark is reached, the Infoblox appliance generates a syslog message and sends a warning (if enabled). A number that specifies the percentage of allocated addresses. The range is from 1 to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#high_water_mark DataNiosDhcpRangeTemplate#high_water_mark}
  */
  readonly highWaterMark?: number;
  /**
  * The percentage of DHCP range usage below which the corresponding SNMP trap is reset. A number that specifies the percentage of allocated addresses. The range is from 1 to 100. The high watermark reset value must be lower than the high watermark value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#high_water_mark_reset DataNiosDhcpRangeTemplate#high_water_mark_reset}
  */
  readonly highWaterMarkReset?: number;
  /**
  * If this field is set to False, the appliance returns all DHCP options the client is eligible to receive, rather than only the list of options the client has requested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#ignore_dhcp_option_list_request DataNiosDhcpRangeTemplate#ignore_dhcp_option_list_request}
  */
  readonly ignoreDhcpOptionListRequest?: boolean | cdktf.IResolvable;
  /**
  * Permission for known clients. If set to 'Deny' known clients will be denied IP addresses. Known clients include roaming hosts and clients with fixed addresses or DHCP host entries. Unknown clients include clients that are not roaming hosts and clients that do not have fixed addresses or DHCP host entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#known_clients DataNiosDhcpRangeTemplate#known_clients}
  */
  readonly knownClients?: string;
  /**
  * An integer that specifies the period of time (in seconds) that frees and backs up leases remained in the database before they are automatically deleted. To disable lease scavenging, set the parameter to -1. The minimum positive value must be greater than 86400 seconds (1 day).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#lease_scavenge_time DataNiosDhcpRangeTemplate#lease_scavenge_time}
  */
  readonly leaseScavengeTime?: number;
  /**
  * This field contains the logic filters to be applied on this range. This list corresponds to the match rules that are written to the dhcpd configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#logic_filter_rules DataNiosDhcpRangeTemplate#logic_filter_rules}
  */
  readonly logicFilterRules?: DataNiosDhcpRangeTemplateResultLogicFilterRules[] | cdktf.IResolvable;
  /**
  * The percentage of DHCP range usage below which the Infoblox appliance generates a syslog message and sends a warning (if enabled). A number that specifies the percentage of allocated addresses. The range is from 1 to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#low_water_mark DataNiosDhcpRangeTemplate#low_water_mark}
  */
  readonly lowWaterMark?: number;
  /**
  * The percentage of DHCP range usage threshold below which range usage is not expected and may warrant your attention. When the low watermark is crossed, the Infoblox appliance generates a syslog message and sends a warning (if enabled). A number that specifies the percentage of allocated addresses. The range is from 1 to 100. The low watermark reset value must be higher than the low watermark value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#low_water_mark_reset DataNiosDhcpRangeTemplate#low_water_mark_reset}
  */
  readonly lowWaterMarkReset?: number;
  /**
  * This field contains the MAC filters to be applied to this range. The appliance uses the matching rules of these filters to select the address range from which it assigns a lease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#mac_filter_rules DataNiosDhcpRangeTemplate#mac_filter_rules}
  */
  readonly macFilterRules?: DataNiosDhcpRangeTemplateResultMacFilterRules[] | cdktf.IResolvable;
  /**
  * The member that will provide service for this range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#member DataNiosDhcpRangeTemplate#member}
  */
  readonly member?: DataNiosDhcpRangeTemplateResultMember;
  /**
  * The Microsoft DHCP options for this range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#ms_options DataNiosDhcpRangeTemplate#ms_options}
  */
  readonly msOptions?: DataNiosDhcpRangeTemplateResultMsOptions[] | cdktf.IResolvable;
  /**
  * The Microsoft server that will provide service for this range. server_association_type needs to be set to ‘MS_SERVER’ if you want the server specified here to serve the range. For searching by this field you should use a HTTP method that contains a body (POST or PUT) with MS DHCP server structure and the request should have option _method=GET.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#ms_server DataNiosDhcpRangeTemplate#ms_server}
  */
  readonly msServer?: DataNiosDhcpRangeTemplateResultMsServer;
  /**
  * This field contains the NAC filters to be applied to this range. The appliance uses the matching rules of these filters to select the address range from which it assigns a lease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#nac_filter_rules DataNiosDhcpRangeTemplate#nac_filter_rules}
  */
  readonly nacFilterRules?: DataNiosDhcpRangeTemplateResultNacFilterRules[] | cdktf.IResolvable;
  /**
  * The name of a range template object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#name DataNiosDhcpRangeTemplate#name}
  */
  readonly name: string;
  /**
  * The name in FQDN and/or IPv4 Address format of the next server that the host needs to boot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#nextserver DataNiosDhcpRangeTemplate#nextserver}
  */
  readonly nextserver?: string;
  /**
  * The number of addresses for this range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#number_of_addresses DataNiosDhcpRangeTemplate#number_of_addresses}
  */
  readonly numberOfAddresses: number;
  /**
  * The start address offset for this range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#offset DataNiosDhcpRangeTemplate#offset}
  */
  readonly offset: number;
  /**
  * This field contains the Option filters to be applied to this range. The appliance uses the matching rules of these filters to select the address range from which it assigns a lease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#option_filter_rules DataNiosDhcpRangeTemplate#option_filter_rules}
  */
  readonly optionFilterRules?: DataNiosDhcpRangeTemplateResultOptionFilterRules[] | cdktf.IResolvable;
  /**
  * An unordered set of DHCP option dhcpoption structs that lists the DHCP options associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#options DataNiosDhcpRangeTemplate#options}
  */
  readonly options?: DataNiosDhcpRangeTemplateResultOptions[] | cdktf.IResolvable;
  /**
  * The PXE lease time value for a range object. Some hosts use PXE (Preboot Execution Environment) to boot remotely from a server. To better manage your IP resources, set a different lease time for PXE boot requests. You can configure the DHCP server to allocate an IP address with a shorter lease time to hosts that send PXE boot requests, so IP addresses are not leased longer than necessary. A 32-bit unsigned integer that represents the duration, in seconds, for which the update is cached. Zero indicates that the update is not cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#pxe_lease_time DataNiosDhcpRangeTemplate#pxe_lease_time}
  */
  readonly pxeLeaseTime?: number;
  /**
  * If the field is set to True, the leases are kept in the Recycle Bin until one week after expiration. Otherwise, the leases are permanently deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#recycle_leases DataNiosDhcpRangeTemplate#recycle_leases}
  */
  readonly recycleLeases?: boolean | cdktf.IResolvable;
  /**
  * This field contains the Relay Agent filters to be applied to this range. The appliance uses the matching rules of these filters to select the address range from which it assigns a lease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#relay_agent_filter_rules DataNiosDhcpRangeTemplate#relay_agent_filter_rules}
  */
  readonly relayAgentFilterRules?: DataNiosDhcpRangeTemplateResultRelayAgentFilterRules[] | cdktf.IResolvable;
  /**
  * The type of server that is going to serve the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#server_association_type DataNiosDhcpRangeTemplate#server_association_type}
  */
  readonly serverAssociationType?: string;
  /**
  * Permission for unknown clients. If set to 'Deny' unknown clients will be denied IP addresses. Known clients include roaming hosts and clients with fixed addresses or DHCP host entries. Unknown clients include clients that are not roaming hosts and clients that do not have fixed addresses or DHCP host entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#unknown_clients DataNiosDhcpRangeTemplate#unknown_clients}
  */
  readonly unknownClients?: string;
  /**
  * This field controls whether the DHCP server updates DNS when a DHCP lease is renewed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#update_dns_on_lease_renewal DataNiosDhcpRangeTemplate#update_dns_on_lease_renewal}
  */
  readonly updateDnsOnLeaseRenewal?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: bootfile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#use_bootfile DataNiosDhcpRangeTemplate#use_bootfile}
  */
  readonly useBootfile?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: bootserver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#use_bootserver DataNiosDhcpRangeTemplate#use_bootserver}
  */
  readonly useBootserver?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_domainname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#use_ddns_domainname DataNiosDhcpRangeTemplate#use_ddns_domainname}
  */
  readonly useDdnsDomainname?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_generate_hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#use_ddns_generate_hostname DataNiosDhcpRangeTemplate#use_ddns_generate_hostname}
  */
  readonly useDdnsGenerateHostname?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: deny_bootp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#use_deny_bootp DataNiosDhcpRangeTemplate#use_deny_bootp}
  */
  readonly useDenyBootp?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: email_list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#use_email_list DataNiosDhcpRangeTemplate#use_email_list}
  */
  readonly useEmailList?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: enable_ddns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#use_enable_ddns DataNiosDhcpRangeTemplate#use_enable_ddns}
  */
  readonly useEnableDdns?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: enable_dhcp_thresholds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#use_enable_dhcp_thresholds DataNiosDhcpRangeTemplate#use_enable_dhcp_thresholds}
  */
  readonly useEnableDhcpThresholds?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ignore_dhcp_option_list_request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#use_ignore_dhcp_option_list_request DataNiosDhcpRangeTemplate#use_ignore_dhcp_option_list_request}
  */
  readonly useIgnoreDhcpOptionListRequest?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: known_clients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#use_known_clients DataNiosDhcpRangeTemplate#use_known_clients}
  */
  readonly useKnownClients?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: lease_scavenge_time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#use_lease_scavenge_time DataNiosDhcpRangeTemplate#use_lease_scavenge_time}
  */
  readonly useLeaseScavengeTime?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: logic_filter_rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#use_logic_filter_rules DataNiosDhcpRangeTemplate#use_logic_filter_rules}
  */
  readonly useLogicFilterRules?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ms_options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#use_ms_options DataNiosDhcpRangeTemplate#use_ms_options}
  */
  readonly useMsOptions?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: nextserver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#use_nextserver DataNiosDhcpRangeTemplate#use_nextserver}
  */
  readonly useNextserver?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#use_options DataNiosDhcpRangeTemplate#use_options}
  */
  readonly useOptions?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: pxe_lease_time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#use_pxe_lease_time DataNiosDhcpRangeTemplate#use_pxe_lease_time}
  */
  readonly usePxeLeaseTime?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: recycle_leases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#use_recycle_leases DataNiosDhcpRangeTemplate#use_recycle_leases}
  */
  readonly useRecycleLeases?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: unknown_clients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#use_unknown_clients DataNiosDhcpRangeTemplate#use_unknown_clients}
  */
  readonly useUnknownClients?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: update_dns_on_lease_renewal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#use_update_dns_on_lease_renewal DataNiosDhcpRangeTemplate#use_update_dns_on_lease_renewal}
  */
  readonly useUpdateDnsOnLeaseRenewal?: boolean | cdktf.IResolvable;
}

export function dataNiosDhcpRangeTemplateResultToTerraform(struct?: DataNiosDhcpRangeTemplateResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bootfile: cdktf.stringToTerraform(struct!.bootfile),
    bootserver: cdktf.stringToTerraform(struct!.bootserver),
    cloud_api_compatible: cdktf.booleanToTerraform(struct!.cloudApiCompatible),
    comment: cdktf.stringToTerraform(struct!.comment),
    ddns_domainname: cdktf.stringToTerraform(struct!.ddnsDomainname),
    ddns_generate_hostname: cdktf.booleanToTerraform(struct!.ddnsGenerateHostname),
    delegated_member: dataNiosDhcpRangeTemplateResultDelegatedMemberToTerraform(struct!.delegatedMember),
    deny_all_clients: cdktf.booleanToTerraform(struct!.denyAllClients),
    deny_bootp: cdktf.booleanToTerraform(struct!.denyBootp),
    email_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailList),
    enable_ddns: cdktf.booleanToTerraform(struct!.enableDdns),
    enable_dhcp_thresholds: cdktf.booleanToTerraform(struct!.enableDhcpThresholds),
    enable_email_warnings: cdktf.booleanToTerraform(struct!.enableEmailWarnings),
    enable_pxe_lease_time: cdktf.booleanToTerraform(struct!.enablePxeLeaseTime),
    enable_snmp_warnings: cdktf.booleanToTerraform(struct!.enableSnmpWarnings),
    exclude: cdktf.listMapper(dataNiosDhcpRangeTemplateResultExcludeToTerraform, false)(struct!.exclude),
    extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extattrs),
    failover_association: cdktf.stringToTerraform(struct!.failoverAssociation),
    fingerprint_filter_rules: cdktf.listMapper(dataNiosDhcpRangeTemplateResultFingerprintFilterRulesToTerraform, false)(struct!.fingerprintFilterRules),
    high_water_mark: cdktf.numberToTerraform(struct!.highWaterMark),
    high_water_mark_reset: cdktf.numberToTerraform(struct!.highWaterMarkReset),
    ignore_dhcp_option_list_request: cdktf.booleanToTerraform(struct!.ignoreDhcpOptionListRequest),
    known_clients: cdktf.stringToTerraform(struct!.knownClients),
    lease_scavenge_time: cdktf.numberToTerraform(struct!.leaseScavengeTime),
    logic_filter_rules: cdktf.listMapper(dataNiosDhcpRangeTemplateResultLogicFilterRulesToTerraform, false)(struct!.logicFilterRules),
    low_water_mark: cdktf.numberToTerraform(struct!.lowWaterMark),
    low_water_mark_reset: cdktf.numberToTerraform(struct!.lowWaterMarkReset),
    mac_filter_rules: cdktf.listMapper(dataNiosDhcpRangeTemplateResultMacFilterRulesToTerraform, false)(struct!.macFilterRules),
    member: dataNiosDhcpRangeTemplateResultMemberToTerraform(struct!.member),
    ms_options: cdktf.listMapper(dataNiosDhcpRangeTemplateResultMsOptionsToTerraform, false)(struct!.msOptions),
    ms_server: dataNiosDhcpRangeTemplateResultMsServerToTerraform(struct!.msServer),
    nac_filter_rules: cdktf.listMapper(dataNiosDhcpRangeTemplateResultNacFilterRulesToTerraform, false)(struct!.nacFilterRules),
    name: cdktf.stringToTerraform(struct!.name),
    nextserver: cdktf.stringToTerraform(struct!.nextserver),
    number_of_addresses: cdktf.numberToTerraform(struct!.numberOfAddresses),
    offset: cdktf.numberToTerraform(struct!.offset),
    option_filter_rules: cdktf.listMapper(dataNiosDhcpRangeTemplateResultOptionFilterRulesToTerraform, false)(struct!.optionFilterRules),
    options: cdktf.listMapper(dataNiosDhcpRangeTemplateResultOptionsToTerraform, false)(struct!.options),
    pxe_lease_time: cdktf.numberToTerraform(struct!.pxeLeaseTime),
    recycle_leases: cdktf.booleanToTerraform(struct!.recycleLeases),
    relay_agent_filter_rules: cdktf.listMapper(dataNiosDhcpRangeTemplateResultRelayAgentFilterRulesToTerraform, false)(struct!.relayAgentFilterRules),
    server_association_type: cdktf.stringToTerraform(struct!.serverAssociationType),
    unknown_clients: cdktf.stringToTerraform(struct!.unknownClients),
    update_dns_on_lease_renewal: cdktf.booleanToTerraform(struct!.updateDnsOnLeaseRenewal),
    use_bootfile: cdktf.booleanToTerraform(struct!.useBootfile),
    use_bootserver: cdktf.booleanToTerraform(struct!.useBootserver),
    use_ddns_domainname: cdktf.booleanToTerraform(struct!.useDdnsDomainname),
    use_ddns_generate_hostname: cdktf.booleanToTerraform(struct!.useDdnsGenerateHostname),
    use_deny_bootp: cdktf.booleanToTerraform(struct!.useDenyBootp),
    use_email_list: cdktf.booleanToTerraform(struct!.useEmailList),
    use_enable_ddns: cdktf.booleanToTerraform(struct!.useEnableDdns),
    use_enable_dhcp_thresholds: cdktf.booleanToTerraform(struct!.useEnableDhcpThresholds),
    use_ignore_dhcp_option_list_request: cdktf.booleanToTerraform(struct!.useIgnoreDhcpOptionListRequest),
    use_known_clients: cdktf.booleanToTerraform(struct!.useKnownClients),
    use_lease_scavenge_time: cdktf.booleanToTerraform(struct!.useLeaseScavengeTime),
    use_logic_filter_rules: cdktf.booleanToTerraform(struct!.useLogicFilterRules),
    use_ms_options: cdktf.booleanToTerraform(struct!.useMsOptions),
    use_nextserver: cdktf.booleanToTerraform(struct!.useNextserver),
    use_options: cdktf.booleanToTerraform(struct!.useOptions),
    use_pxe_lease_time: cdktf.booleanToTerraform(struct!.usePxeLeaseTime),
    use_recycle_leases: cdktf.booleanToTerraform(struct!.useRecycleLeases),
    use_unknown_clients: cdktf.booleanToTerraform(struct!.useUnknownClients),
    use_update_dns_on_lease_renewal: cdktf.booleanToTerraform(struct!.useUpdateDnsOnLeaseRenewal),
  }
}


export function dataNiosDhcpRangeTemplateResultToHclTerraform(struct?: DataNiosDhcpRangeTemplateResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bootfile: {
      value: cdktf.stringToHclTerraform(struct!.bootfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bootserver: {
      value: cdktf.stringToHclTerraform(struct!.bootserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    ddns_domainname: {
      value: cdktf.stringToHclTerraform(struct!.ddnsDomainname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_generate_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsGenerateHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delegated_member: {
      value: dataNiosDhcpRangeTemplateResultDelegatedMemberToHclTerraform(struct!.delegatedMember),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDhcpRangeTemplateResultDelegatedMember",
    },
    deny_all_clients: {
      value: cdktf.booleanToHclTerraform(struct!.denyAllClients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deny_bootp: {
      value: cdktf.booleanToHclTerraform(struct!.denyBootp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    email_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emailList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_ddns: {
      value: cdktf.booleanToHclTerraform(struct!.enableDdns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_dhcp_thresholds: {
      value: cdktf.booleanToHclTerraform(struct!.enableDhcpThresholds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_email_warnings: {
      value: cdktf.booleanToHclTerraform(struct!.enableEmailWarnings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_pxe_lease_time: {
      value: cdktf.booleanToHclTerraform(struct!.enablePxeLeaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_snmp_warnings: {
      value: cdktf.booleanToHclTerraform(struct!.enableSnmpWarnings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude: {
      value: cdktf.listMapperHcl(dataNiosDhcpRangeTemplateResultExcludeToHclTerraform, false)(struct!.exclude),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDhcpRangeTemplateResultExcludeList",
    },
    extattrs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extattrs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    failover_association: {
      value: cdktf.stringToHclTerraform(struct!.failoverAssociation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fingerprint_filter_rules: {
      value: cdktf.listMapperHcl(dataNiosDhcpRangeTemplateResultFingerprintFilterRulesToHclTerraform, false)(struct!.fingerprintFilterRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDhcpRangeTemplateResultFingerprintFilterRulesList",
    },
    high_water_mark: {
      value: cdktf.numberToHclTerraform(struct!.highWaterMark),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    high_water_mark_reset: {
      value: cdktf.numberToHclTerraform(struct!.highWaterMarkReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_dhcp_option_list_request: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreDhcpOptionListRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    known_clients: {
      value: cdktf.stringToHclTerraform(struct!.knownClients),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lease_scavenge_time: {
      value: cdktf.numberToHclTerraform(struct!.leaseScavengeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logic_filter_rules: {
      value: cdktf.listMapperHcl(dataNiosDhcpRangeTemplateResultLogicFilterRulesToHclTerraform, false)(struct!.logicFilterRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDhcpRangeTemplateResultLogicFilterRulesList",
    },
    low_water_mark: {
      value: cdktf.numberToHclTerraform(struct!.lowWaterMark),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    low_water_mark_reset: {
      value: cdktf.numberToHclTerraform(struct!.lowWaterMarkReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_filter_rules: {
      value: cdktf.listMapperHcl(dataNiosDhcpRangeTemplateResultMacFilterRulesToHclTerraform, false)(struct!.macFilterRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDhcpRangeTemplateResultMacFilterRulesList",
    },
    member: {
      value: dataNiosDhcpRangeTemplateResultMemberToHclTerraform(struct!.member),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDhcpRangeTemplateResultMember",
    },
    ms_options: {
      value: cdktf.listMapperHcl(dataNiosDhcpRangeTemplateResultMsOptionsToHclTerraform, false)(struct!.msOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDhcpRangeTemplateResultMsOptionsList",
    },
    ms_server: {
      value: dataNiosDhcpRangeTemplateResultMsServerToHclTerraform(struct!.msServer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDhcpRangeTemplateResultMsServer",
    },
    nac_filter_rules: {
      value: cdktf.listMapperHcl(dataNiosDhcpRangeTemplateResultNacFilterRulesToHclTerraform, false)(struct!.nacFilterRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDhcpRangeTemplateResultNacFilterRulesList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nextserver: {
      value: cdktf.stringToHclTerraform(struct!.nextserver),
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
      value: cdktf.listMapperHcl(dataNiosDhcpRangeTemplateResultOptionFilterRulesToHclTerraform, false)(struct!.optionFilterRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDhcpRangeTemplateResultOptionFilterRulesList",
    },
    options: {
      value: cdktf.listMapperHcl(dataNiosDhcpRangeTemplateResultOptionsToHclTerraform, false)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDhcpRangeTemplateResultOptionsList",
    },
    pxe_lease_time: {
      value: cdktf.numberToHclTerraform(struct!.pxeLeaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recycle_leases: {
      value: cdktf.booleanToHclTerraform(struct!.recycleLeases),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    relay_agent_filter_rules: {
      value: cdktf.listMapperHcl(dataNiosDhcpRangeTemplateResultRelayAgentFilterRulesToHclTerraform, false)(struct!.relayAgentFilterRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDhcpRangeTemplateResultRelayAgentFilterRulesList",
    },
    server_association_type: {
      value: cdktf.stringToHclTerraform(struct!.serverAssociationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknown_clients: {
      value: cdktf.stringToHclTerraform(struct!.unknownClients),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_dns_on_lease_renewal: {
      value: cdktf.booleanToHclTerraform(struct!.updateDnsOnLeaseRenewal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_bootfile: {
      value: cdktf.booleanToHclTerraform(struct!.useBootfile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_bootserver: {
      value: cdktf.booleanToHclTerraform(struct!.useBootserver),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ddns_domainname: {
      value: cdktf.booleanToHclTerraform(struct!.useDdnsDomainname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ddns_generate_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.useDdnsGenerateHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_deny_bootp: {
      value: cdktf.booleanToHclTerraform(struct!.useDenyBootp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_email_list: {
      value: cdktf.booleanToHclTerraform(struct!.useEmailList),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_enable_ddns: {
      value: cdktf.booleanToHclTerraform(struct!.useEnableDdns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_enable_dhcp_thresholds: {
      value: cdktf.booleanToHclTerraform(struct!.useEnableDhcpThresholds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ignore_dhcp_option_list_request: {
      value: cdktf.booleanToHclTerraform(struct!.useIgnoreDhcpOptionListRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_known_clients: {
      value: cdktf.booleanToHclTerraform(struct!.useKnownClients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_lease_scavenge_time: {
      value: cdktf.booleanToHclTerraform(struct!.useLeaseScavengeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_logic_filter_rules: {
      value: cdktf.booleanToHclTerraform(struct!.useLogicFilterRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ms_options: {
      value: cdktf.booleanToHclTerraform(struct!.useMsOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_nextserver: {
      value: cdktf.booleanToHclTerraform(struct!.useNextserver),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_options: {
      value: cdktf.booleanToHclTerraform(struct!.useOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_pxe_lease_time: {
      value: cdktf.booleanToHclTerraform(struct!.usePxeLeaseTime),
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
    use_unknown_clients: {
      value: cdktf.booleanToHclTerraform(struct!.useUnknownClients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_update_dns_on_lease_renewal: {
      value: cdktf.booleanToHclTerraform(struct!.useUpdateDnsOnLeaseRenewal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDhcpRangeTemplateResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpRangeTemplateResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootfile = this._bootfile;
    }
    if (this._bootserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootserver = this._bootserver;
    }
    if (this._cloudApiCompatible !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudApiCompatible = this._cloudApiCompatible;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._ddnsDomainname !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsDomainname = this._ddnsDomainname;
    }
    if (this._ddnsGenerateHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsGenerateHostname = this._ddnsGenerateHostname;
    }
    if (this._delegatedMember?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegatedMember = this._delegatedMember?.internalValue;
    }
    if (this._denyAllClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyAllClients = this._denyAllClients;
    }
    if (this._denyBootp !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyBootp = this._denyBootp;
    }
    if (this._emailList !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailList = this._emailList;
    }
    if (this._enableDdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDdns = this._enableDdns;
    }
    if (this._enableDhcpThresholds !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDhcpThresholds = this._enableDhcpThresholds;
    }
    if (this._enableEmailWarnings !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEmailWarnings = this._enableEmailWarnings;
    }
    if (this._enablePxeLeaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePxeLeaseTime = this._enablePxeLeaseTime;
    }
    if (this._enableSnmpWarnings !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSnmpWarnings = this._enableSnmpWarnings;
    }
    if (this._exclude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude?.internalValue;
    }
    if (this._extattrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extattrs = this._extattrs;
    }
    if (this._failoverAssociation !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverAssociation = this._failoverAssociation;
    }
    if (this._fingerprintFilterRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprintFilterRules = this._fingerprintFilterRules?.internalValue;
    }
    if (this._highWaterMark !== undefined) {
      hasAnyValues = true;
      internalValueResult.highWaterMark = this._highWaterMark;
    }
    if (this._highWaterMarkReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.highWaterMarkReset = this._highWaterMarkReset;
    }
    if (this._ignoreDhcpOptionListRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDhcpOptionListRequest = this._ignoreDhcpOptionListRequest;
    }
    if (this._knownClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.knownClients = this._knownClients;
    }
    if (this._leaseScavengeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseScavengeTime = this._leaseScavengeTime;
    }
    if (this._logicFilterRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicFilterRules = this._logicFilterRules?.internalValue;
    }
    if (this._lowWaterMark !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowWaterMark = this._lowWaterMark;
    }
    if (this._lowWaterMarkReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowWaterMarkReset = this._lowWaterMarkReset;
    }
    if (this._macFilterRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.macFilterRules = this._macFilterRules?.internalValue;
    }
    if (this._member?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.member = this._member?.internalValue;
    }
    if (this._msOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msOptions = this._msOptions?.internalValue;
    }
    if (this._msServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msServer = this._msServer?.internalValue;
    }
    if (this._nacFilterRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nacFilterRules = this._nacFilterRules?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nextserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextserver = this._nextserver;
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
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._pxeLeaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.pxeLeaseTime = this._pxeLeaseTime;
    }
    if (this._recycleLeases !== undefined) {
      hasAnyValues = true;
      internalValueResult.recycleLeases = this._recycleLeases;
    }
    if (this._relayAgentFilterRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relayAgentFilterRules = this._relayAgentFilterRules?.internalValue;
    }
    if (this._serverAssociationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAssociationType = this._serverAssociationType;
    }
    if (this._unknownClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownClients = this._unknownClients;
    }
    if (this._updateDnsOnLeaseRenewal !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateDnsOnLeaseRenewal = this._updateDnsOnLeaseRenewal;
    }
    if (this._useBootfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBootfile = this._useBootfile;
    }
    if (this._useBootserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBootserver = this._useBootserver;
    }
    if (this._useDdnsDomainname !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDdnsDomainname = this._useDdnsDomainname;
    }
    if (this._useDdnsGenerateHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDdnsGenerateHostname = this._useDdnsGenerateHostname;
    }
    if (this._useDenyBootp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDenyBootp = this._useDenyBootp;
    }
    if (this._useEmailList !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEmailList = this._useEmailList;
    }
    if (this._useEnableDdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEnableDdns = this._useEnableDdns;
    }
    if (this._useEnableDhcpThresholds !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEnableDhcpThresholds = this._useEnableDhcpThresholds;
    }
    if (this._useIgnoreDhcpOptionListRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.useIgnoreDhcpOptionListRequest = this._useIgnoreDhcpOptionListRequest;
    }
    if (this._useKnownClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.useKnownClients = this._useKnownClients;
    }
    if (this._useLeaseScavengeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLeaseScavengeTime = this._useLeaseScavengeTime;
    }
    if (this._useLogicFilterRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLogicFilterRules = this._useLogicFilterRules;
    }
    if (this._useMsOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMsOptions = this._useMsOptions;
    }
    if (this._useNextserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.useNextserver = this._useNextserver;
    }
    if (this._useOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOptions = this._useOptions;
    }
    if (this._usePxeLeaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePxeLeaseTime = this._usePxeLeaseTime;
    }
    if (this._useRecycleLeases !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRecycleLeases = this._useRecycleLeases;
    }
    if (this._useUnknownClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.useUnknownClients = this._useUnknownClients;
    }
    if (this._useUpdateDnsOnLeaseRenewal !== undefined) {
      hasAnyValues = true;
      internalValueResult.useUpdateDnsOnLeaseRenewal = this._useUpdateDnsOnLeaseRenewal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDhcpRangeTemplateResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootfile = undefined;
      this._bootserver = undefined;
      this._cloudApiCompatible = undefined;
      this._comment = undefined;
      this._ddnsDomainname = undefined;
      this._ddnsGenerateHostname = undefined;
      this._delegatedMember.internalValue = undefined;
      this._denyAllClients = undefined;
      this._denyBootp = undefined;
      this._emailList = undefined;
      this._enableDdns = undefined;
      this._enableDhcpThresholds = undefined;
      this._enableEmailWarnings = undefined;
      this._enablePxeLeaseTime = undefined;
      this._enableSnmpWarnings = undefined;
      this._exclude.internalValue = undefined;
      this._extattrs = undefined;
      this._failoverAssociation = undefined;
      this._fingerprintFilterRules.internalValue = undefined;
      this._highWaterMark = undefined;
      this._highWaterMarkReset = undefined;
      this._ignoreDhcpOptionListRequest = undefined;
      this._knownClients = undefined;
      this._leaseScavengeTime = undefined;
      this._logicFilterRules.internalValue = undefined;
      this._lowWaterMark = undefined;
      this._lowWaterMarkReset = undefined;
      this._macFilterRules.internalValue = undefined;
      this._member.internalValue = undefined;
      this._msOptions.internalValue = undefined;
      this._msServer.internalValue = undefined;
      this._nacFilterRules.internalValue = undefined;
      this._name = undefined;
      this._nextserver = undefined;
      this._numberOfAddresses = undefined;
      this._offset = undefined;
      this._optionFilterRules.internalValue = undefined;
      this._options.internalValue = undefined;
      this._pxeLeaseTime = undefined;
      this._recycleLeases = undefined;
      this._relayAgentFilterRules.internalValue = undefined;
      this._serverAssociationType = undefined;
      this._unknownClients = undefined;
      this._updateDnsOnLeaseRenewal = undefined;
      this._useBootfile = undefined;
      this._useBootserver = undefined;
      this._useDdnsDomainname = undefined;
      this._useDdnsGenerateHostname = undefined;
      this._useDenyBootp = undefined;
      this._useEmailList = undefined;
      this._useEnableDdns = undefined;
      this._useEnableDhcpThresholds = undefined;
      this._useIgnoreDhcpOptionListRequest = undefined;
      this._useKnownClients = undefined;
      this._useLeaseScavengeTime = undefined;
      this._useLogicFilterRules = undefined;
      this._useMsOptions = undefined;
      this._useNextserver = undefined;
      this._useOptions = undefined;
      this._usePxeLeaseTime = undefined;
      this._useRecycleLeases = undefined;
      this._useUnknownClients = undefined;
      this._useUpdateDnsOnLeaseRenewal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootfile = value.bootfile;
      this._bootserver = value.bootserver;
      this._cloudApiCompatible = value.cloudApiCompatible;
      this._comment = value.comment;
      this._ddnsDomainname = value.ddnsDomainname;
      this._ddnsGenerateHostname = value.ddnsGenerateHostname;
      this._delegatedMember.internalValue = value.delegatedMember;
      this._denyAllClients = value.denyAllClients;
      this._denyBootp = value.denyBootp;
      this._emailList = value.emailList;
      this._enableDdns = value.enableDdns;
      this._enableDhcpThresholds = value.enableDhcpThresholds;
      this._enableEmailWarnings = value.enableEmailWarnings;
      this._enablePxeLeaseTime = value.enablePxeLeaseTime;
      this._enableSnmpWarnings = value.enableSnmpWarnings;
      this._exclude.internalValue = value.exclude;
      this._extattrs = value.extattrs;
      this._failoverAssociation = value.failoverAssociation;
      this._fingerprintFilterRules.internalValue = value.fingerprintFilterRules;
      this._highWaterMark = value.highWaterMark;
      this._highWaterMarkReset = value.highWaterMarkReset;
      this._ignoreDhcpOptionListRequest = value.ignoreDhcpOptionListRequest;
      this._knownClients = value.knownClients;
      this._leaseScavengeTime = value.leaseScavengeTime;
      this._logicFilterRules.internalValue = value.logicFilterRules;
      this._lowWaterMark = value.lowWaterMark;
      this._lowWaterMarkReset = value.lowWaterMarkReset;
      this._macFilterRules.internalValue = value.macFilterRules;
      this._member.internalValue = value.member;
      this._msOptions.internalValue = value.msOptions;
      this._msServer.internalValue = value.msServer;
      this._nacFilterRules.internalValue = value.nacFilterRules;
      this._name = value.name;
      this._nextserver = value.nextserver;
      this._numberOfAddresses = value.numberOfAddresses;
      this._offset = value.offset;
      this._optionFilterRules.internalValue = value.optionFilterRules;
      this._options.internalValue = value.options;
      this._pxeLeaseTime = value.pxeLeaseTime;
      this._recycleLeases = value.recycleLeases;
      this._relayAgentFilterRules.internalValue = value.relayAgentFilterRules;
      this._serverAssociationType = value.serverAssociationType;
      this._unknownClients = value.unknownClients;
      this._updateDnsOnLeaseRenewal = value.updateDnsOnLeaseRenewal;
      this._useBootfile = value.useBootfile;
      this._useBootserver = value.useBootserver;
      this._useDdnsDomainname = value.useDdnsDomainname;
      this._useDdnsGenerateHostname = value.useDdnsGenerateHostname;
      this._useDenyBootp = value.useDenyBootp;
      this._useEmailList = value.useEmailList;
      this._useEnableDdns = value.useEnableDdns;
      this._useEnableDhcpThresholds = value.useEnableDhcpThresholds;
      this._useIgnoreDhcpOptionListRequest = value.useIgnoreDhcpOptionListRequest;
      this._useKnownClients = value.useKnownClients;
      this._useLeaseScavengeTime = value.useLeaseScavengeTime;
      this._useLogicFilterRules = value.useLogicFilterRules;
      this._useMsOptions = value.useMsOptions;
      this._useNextserver = value.useNextserver;
      this._useOptions = value.useOptions;
      this._usePxeLeaseTime = value.usePxeLeaseTime;
      this._useRecycleLeases = value.useRecycleLeases;
      this._useUnknownClients = value.useUnknownClients;
      this._useUpdateDnsOnLeaseRenewal = value.useUpdateDnsOnLeaseRenewal;
    }
  }

  // bootfile - computed: true, optional: true, required: false
  private _bootfile?: string; 
  public get bootfile() {
    return this.getStringAttribute('bootfile');
  }
  public set bootfile(value: string) {
    this._bootfile = value;
  }
  public resetBootfile() {
    this._bootfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootfileInput() {
    return this._bootfile;
  }

  // bootserver - computed: true, optional: true, required: false
  private _bootserver?: string; 
  public get bootserver() {
    return this.getStringAttribute('bootserver');
  }
  public set bootserver(value: string) {
    this._bootserver = value;
  }
  public resetBootserver() {
    this._bootserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootserverInput() {
    return this._bootserver;
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

  // ddns_domainname - computed: true, optional: true, required: false
  private _ddnsDomainname?: string; 
  public get ddnsDomainname() {
    return this.getStringAttribute('ddns_domainname');
  }
  public set ddnsDomainname(value: string) {
    this._ddnsDomainname = value;
  }
  public resetDdnsDomainname() {
    this._ddnsDomainname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsDomainnameInput() {
    return this._ddnsDomainname;
  }

  // ddns_generate_hostname - computed: true, optional: true, required: false
  private _ddnsGenerateHostname?: boolean | cdktf.IResolvable; 
  public get ddnsGenerateHostname() {
    return this.getBooleanAttribute('ddns_generate_hostname');
  }
  public set ddnsGenerateHostname(value: boolean | cdktf.IResolvable) {
    this._ddnsGenerateHostname = value;
  }
  public resetDdnsGenerateHostname() {
    this._ddnsGenerateHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsGenerateHostnameInput() {
    return this._ddnsGenerateHostname;
  }

  // delegated_member - computed: true, optional: true, required: false
  private _delegatedMember = new DataNiosDhcpRangeTemplateResultDelegatedMemberOutputReference(this, "delegated_member");
  public get delegatedMember() {
    return this._delegatedMember;
  }
  public putDelegatedMember(value: DataNiosDhcpRangeTemplateResultDelegatedMember) {
    this._delegatedMember.internalValue = value;
  }
  public resetDelegatedMember() {
    this._delegatedMember.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedMemberInput() {
    return this._delegatedMember.internalValue;
  }

  // deny_all_clients - computed: true, optional: true, required: false
  private _denyAllClients?: boolean | cdktf.IResolvable; 
  public get denyAllClients() {
    return this.getBooleanAttribute('deny_all_clients');
  }
  public set denyAllClients(value: boolean | cdktf.IResolvable) {
    this._denyAllClients = value;
  }
  public resetDenyAllClients() {
    this._denyAllClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyAllClientsInput() {
    return this._denyAllClients;
  }

  // deny_bootp - computed: true, optional: true, required: false
  private _denyBootp?: boolean | cdktf.IResolvable; 
  public get denyBootp() {
    return this.getBooleanAttribute('deny_bootp');
  }
  public set denyBootp(value: boolean | cdktf.IResolvable) {
    this._denyBootp = value;
  }
  public resetDenyBootp() {
    this._denyBootp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyBootpInput() {
    return this._denyBootp;
  }

  // email_list - computed: true, optional: true, required: false
  private _emailList?: string[]; 
  public get emailList() {
    return this.getListAttribute('email_list');
  }
  public set emailList(value: string[]) {
    this._emailList = value;
  }
  public resetEmailList() {
    this._emailList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailListInput() {
    return this._emailList;
  }

  // enable_ddns - computed: true, optional: true, required: false
  private _enableDdns?: boolean | cdktf.IResolvable; 
  public get enableDdns() {
    return this.getBooleanAttribute('enable_ddns');
  }
  public set enableDdns(value: boolean | cdktf.IResolvable) {
    this._enableDdns = value;
  }
  public resetEnableDdns() {
    this._enableDdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDdnsInput() {
    return this._enableDdns;
  }

  // enable_dhcp_thresholds - computed: true, optional: true, required: false
  private _enableDhcpThresholds?: boolean | cdktf.IResolvable; 
  public get enableDhcpThresholds() {
    return this.getBooleanAttribute('enable_dhcp_thresholds');
  }
  public set enableDhcpThresholds(value: boolean | cdktf.IResolvable) {
    this._enableDhcpThresholds = value;
  }
  public resetEnableDhcpThresholds() {
    this._enableDhcpThresholds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDhcpThresholdsInput() {
    return this._enableDhcpThresholds;
  }

  // enable_email_warnings - computed: true, optional: true, required: false
  private _enableEmailWarnings?: boolean | cdktf.IResolvable; 
  public get enableEmailWarnings() {
    return this.getBooleanAttribute('enable_email_warnings');
  }
  public set enableEmailWarnings(value: boolean | cdktf.IResolvable) {
    this._enableEmailWarnings = value;
  }
  public resetEnableEmailWarnings() {
    this._enableEmailWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEmailWarningsInput() {
    return this._enableEmailWarnings;
  }

  // enable_pxe_lease_time - computed: true, optional: true, required: false
  private _enablePxeLeaseTime?: boolean | cdktf.IResolvable; 
  public get enablePxeLeaseTime() {
    return this.getBooleanAttribute('enable_pxe_lease_time');
  }
  public set enablePxeLeaseTime(value: boolean | cdktf.IResolvable) {
    this._enablePxeLeaseTime = value;
  }
  public resetEnablePxeLeaseTime() {
    this._enablePxeLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePxeLeaseTimeInput() {
    return this._enablePxeLeaseTime;
  }

  // enable_snmp_warnings - computed: true, optional: true, required: false
  private _enableSnmpWarnings?: boolean | cdktf.IResolvable; 
  public get enableSnmpWarnings() {
    return this.getBooleanAttribute('enable_snmp_warnings');
  }
  public set enableSnmpWarnings(value: boolean | cdktf.IResolvable) {
    this._enableSnmpWarnings = value;
  }
  public resetEnableSnmpWarnings() {
    this._enableSnmpWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSnmpWarningsInput() {
    return this._enableSnmpWarnings;
  }

  // exclude - computed: true, optional: true, required: false
  private _exclude = new DataNiosDhcpRangeTemplateResultExcludeList(this, "exclude", false);
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: DataNiosDhcpRangeTemplateResultExclude[] | cdktf.IResolvable) {
    this._exclude.internalValue = value;
  }
  public resetExclude() {
    this._exclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude.internalValue;
  }

  // extattrs - computed: true, optional: true, required: false
  private _extattrs?: { [key: string]: string }; 
  public get extattrs() {
    return this.getStringMapAttribute('extattrs');
  }
  public set extattrs(value: { [key: string]: string }) {
    this._extattrs = value;
  }
  public resetExtattrs() {
    this._extattrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrsInput() {
    return this._extattrs;
  }

  // extattrs_all - computed: true, optional: false, required: false
  private _extattrsAll = new cdktf.StringMap(this, "extattrs_all");
  public get extattrsAll() {
    return this._extattrsAll;
  }

  // failover_association - computed: true, optional: true, required: false
  private _failoverAssociation?: string; 
  public get failoverAssociation() {
    return this.getStringAttribute('failover_association');
  }
  public set failoverAssociation(value: string) {
    this._failoverAssociation = value;
  }
  public resetFailoverAssociation() {
    this._failoverAssociation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverAssociationInput() {
    return this._failoverAssociation;
  }

  // fingerprint_filter_rules - computed: true, optional: true, required: false
  private _fingerprintFilterRules = new DataNiosDhcpRangeTemplateResultFingerprintFilterRulesList(this, "fingerprint_filter_rules", false);
  public get fingerprintFilterRules() {
    return this._fingerprintFilterRules;
  }
  public putFingerprintFilterRules(value: DataNiosDhcpRangeTemplateResultFingerprintFilterRules[] | cdktf.IResolvable) {
    this._fingerprintFilterRules.internalValue = value;
  }
  public resetFingerprintFilterRules() {
    this._fingerprintFilterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintFilterRulesInput() {
    return this._fingerprintFilterRules.internalValue;
  }

  // high_water_mark - computed: true, optional: true, required: false
  private _highWaterMark?: number; 
  public get highWaterMark() {
    return this.getNumberAttribute('high_water_mark');
  }
  public set highWaterMark(value: number) {
    this._highWaterMark = value;
  }
  public resetHighWaterMark() {
    this._highWaterMark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highWaterMarkInput() {
    return this._highWaterMark;
  }

  // high_water_mark_reset - computed: true, optional: true, required: false
  private _highWaterMarkReset?: number; 
  public get highWaterMarkReset() {
    return this.getNumberAttribute('high_water_mark_reset');
  }
  public set highWaterMarkReset(value: number) {
    this._highWaterMarkReset = value;
  }
  public resetHighWaterMarkReset() {
    this._highWaterMarkReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highWaterMarkResetInput() {
    return this._highWaterMarkReset;
  }

  // ignore_dhcp_option_list_request - computed: true, optional: true, required: false
  private _ignoreDhcpOptionListRequest?: boolean | cdktf.IResolvable; 
  public get ignoreDhcpOptionListRequest() {
    return this.getBooleanAttribute('ignore_dhcp_option_list_request');
  }
  public set ignoreDhcpOptionListRequest(value: boolean | cdktf.IResolvable) {
    this._ignoreDhcpOptionListRequest = value;
  }
  public resetIgnoreDhcpOptionListRequest() {
    this._ignoreDhcpOptionListRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDhcpOptionListRequestInput() {
    return this._ignoreDhcpOptionListRequest;
  }

  // known_clients - computed: true, optional: true, required: false
  private _knownClients?: string; 
  public get knownClients() {
    return this.getStringAttribute('known_clients');
  }
  public set knownClients(value: string) {
    this._knownClients = value;
  }
  public resetKnownClients() {
    this._knownClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knownClientsInput() {
    return this._knownClients;
  }

  // lease_scavenge_time - computed: true, optional: true, required: false
  private _leaseScavengeTime?: number; 
  public get leaseScavengeTime() {
    return this.getNumberAttribute('lease_scavenge_time');
  }
  public set leaseScavengeTime(value: number) {
    this._leaseScavengeTime = value;
  }
  public resetLeaseScavengeTime() {
    this._leaseScavengeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseScavengeTimeInput() {
    return this._leaseScavengeTime;
  }

  // logic_filter_rules - computed: true, optional: true, required: false
  private _logicFilterRules = new DataNiosDhcpRangeTemplateResultLogicFilterRulesList(this, "logic_filter_rules", false);
  public get logicFilterRules() {
    return this._logicFilterRules;
  }
  public putLogicFilterRules(value: DataNiosDhcpRangeTemplateResultLogicFilterRules[] | cdktf.IResolvable) {
    this._logicFilterRules.internalValue = value;
  }
  public resetLogicFilterRules() {
    this._logicFilterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicFilterRulesInput() {
    return this._logicFilterRules.internalValue;
  }

  // low_water_mark - computed: true, optional: true, required: false
  private _lowWaterMark?: number; 
  public get lowWaterMark() {
    return this.getNumberAttribute('low_water_mark');
  }
  public set lowWaterMark(value: number) {
    this._lowWaterMark = value;
  }
  public resetLowWaterMark() {
    this._lowWaterMark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowWaterMarkInput() {
    return this._lowWaterMark;
  }

  // low_water_mark_reset - computed: true, optional: true, required: false
  private _lowWaterMarkReset?: number; 
  public get lowWaterMarkReset() {
    return this.getNumberAttribute('low_water_mark_reset');
  }
  public set lowWaterMarkReset(value: number) {
    this._lowWaterMarkReset = value;
  }
  public resetLowWaterMarkReset() {
    this._lowWaterMarkReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowWaterMarkResetInput() {
    return this._lowWaterMarkReset;
  }

  // mac_filter_rules - computed: true, optional: true, required: false
  private _macFilterRules = new DataNiosDhcpRangeTemplateResultMacFilterRulesList(this, "mac_filter_rules", false);
  public get macFilterRules() {
    return this._macFilterRules;
  }
  public putMacFilterRules(value: DataNiosDhcpRangeTemplateResultMacFilterRules[] | cdktf.IResolvable) {
    this._macFilterRules.internalValue = value;
  }
  public resetMacFilterRules() {
    this._macFilterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macFilterRulesInput() {
    return this._macFilterRules.internalValue;
  }

  // member - computed: true, optional: true, required: false
  private _member = new DataNiosDhcpRangeTemplateResultMemberOutputReference(this, "member");
  public get member() {
    return this._member;
  }
  public putMember(value: DataNiosDhcpRangeTemplateResultMember) {
    this._member.internalValue = value;
  }
  public resetMember() {
    this._member.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member.internalValue;
  }

  // ms_options - computed: true, optional: true, required: false
  private _msOptions = new DataNiosDhcpRangeTemplateResultMsOptionsList(this, "ms_options", false);
  public get msOptions() {
    return this._msOptions;
  }
  public putMsOptions(value: DataNiosDhcpRangeTemplateResultMsOptions[] | cdktf.IResolvable) {
    this._msOptions.internalValue = value;
  }
  public resetMsOptions() {
    this._msOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msOptionsInput() {
    return this._msOptions.internalValue;
  }

  // ms_server - computed: true, optional: true, required: false
  private _msServer = new DataNiosDhcpRangeTemplateResultMsServerOutputReference(this, "ms_server");
  public get msServer() {
    return this._msServer;
  }
  public putMsServer(value: DataNiosDhcpRangeTemplateResultMsServer) {
    this._msServer.internalValue = value;
  }
  public resetMsServer() {
    this._msServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msServerInput() {
    return this._msServer.internalValue;
  }

  // nac_filter_rules - computed: true, optional: true, required: false
  private _nacFilterRules = new DataNiosDhcpRangeTemplateResultNacFilterRulesList(this, "nac_filter_rules", false);
  public get nacFilterRules() {
    return this._nacFilterRules;
  }
  public putNacFilterRules(value: DataNiosDhcpRangeTemplateResultNacFilterRules[] | cdktf.IResolvable) {
    this._nacFilterRules.internalValue = value;
  }
  public resetNacFilterRules() {
    this._nacFilterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nacFilterRulesInput() {
    return this._nacFilterRules.internalValue;
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

  // nextserver - computed: true, optional: true, required: false
  private _nextserver?: string; 
  public get nextserver() {
    return this.getStringAttribute('nextserver');
  }
  public set nextserver(value: string) {
    this._nextserver = value;
  }
  public resetNextserver() {
    this._nextserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextserverInput() {
    return this._nextserver;
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
  private _optionFilterRules = new DataNiosDhcpRangeTemplateResultOptionFilterRulesList(this, "option_filter_rules", false);
  public get optionFilterRules() {
    return this._optionFilterRules;
  }
  public putOptionFilterRules(value: DataNiosDhcpRangeTemplateResultOptionFilterRules[] | cdktf.IResolvable) {
    this._optionFilterRules.internalValue = value;
  }
  public resetOptionFilterRules() {
    this._optionFilterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionFilterRulesInput() {
    return this._optionFilterRules.internalValue;
  }

  // options - computed: true, optional: true, required: false
  private _options = new DataNiosDhcpRangeTemplateResultOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: DataNiosDhcpRangeTemplateResultOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // pxe_lease_time - computed: true, optional: true, required: false
  private _pxeLeaseTime?: number; 
  public get pxeLeaseTime() {
    return this.getNumberAttribute('pxe_lease_time');
  }
  public set pxeLeaseTime(value: number) {
    this._pxeLeaseTime = value;
  }
  public resetPxeLeaseTime() {
    this._pxeLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pxeLeaseTimeInput() {
    return this._pxeLeaseTime;
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

  // relay_agent_filter_rules - computed: true, optional: true, required: false
  private _relayAgentFilterRules = new DataNiosDhcpRangeTemplateResultRelayAgentFilterRulesList(this, "relay_agent_filter_rules", false);
  public get relayAgentFilterRules() {
    return this._relayAgentFilterRules;
  }
  public putRelayAgentFilterRules(value: DataNiosDhcpRangeTemplateResultRelayAgentFilterRules[] | cdktf.IResolvable) {
    this._relayAgentFilterRules.internalValue = value;
  }
  public resetRelayAgentFilterRules() {
    this._relayAgentFilterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayAgentFilterRulesInput() {
    return this._relayAgentFilterRules.internalValue;
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

  // unknown_clients - computed: true, optional: true, required: false
  private _unknownClients?: string; 
  public get unknownClients() {
    return this.getStringAttribute('unknown_clients');
  }
  public set unknownClients(value: string) {
    this._unknownClients = value;
  }
  public resetUnknownClients() {
    this._unknownClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownClientsInput() {
    return this._unknownClients;
  }

  // update_dns_on_lease_renewal - computed: true, optional: true, required: false
  private _updateDnsOnLeaseRenewal?: boolean | cdktf.IResolvable; 
  public get updateDnsOnLeaseRenewal() {
    return this.getBooleanAttribute('update_dns_on_lease_renewal');
  }
  public set updateDnsOnLeaseRenewal(value: boolean | cdktf.IResolvable) {
    this._updateDnsOnLeaseRenewal = value;
  }
  public resetUpdateDnsOnLeaseRenewal() {
    this._updateDnsOnLeaseRenewal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateDnsOnLeaseRenewalInput() {
    return this._updateDnsOnLeaseRenewal;
  }

  // use_bootfile - computed: true, optional: true, required: false
  private _useBootfile?: boolean | cdktf.IResolvable; 
  public get useBootfile() {
    return this.getBooleanAttribute('use_bootfile');
  }
  public set useBootfile(value: boolean | cdktf.IResolvable) {
    this._useBootfile = value;
  }
  public resetUseBootfile() {
    this._useBootfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBootfileInput() {
    return this._useBootfile;
  }

  // use_bootserver - computed: true, optional: true, required: false
  private _useBootserver?: boolean | cdktf.IResolvable; 
  public get useBootserver() {
    return this.getBooleanAttribute('use_bootserver');
  }
  public set useBootserver(value: boolean | cdktf.IResolvable) {
    this._useBootserver = value;
  }
  public resetUseBootserver() {
    this._useBootserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBootserverInput() {
    return this._useBootserver;
  }

  // use_ddns_domainname - computed: true, optional: true, required: false
  private _useDdnsDomainname?: boolean | cdktf.IResolvable; 
  public get useDdnsDomainname() {
    return this.getBooleanAttribute('use_ddns_domainname');
  }
  public set useDdnsDomainname(value: boolean | cdktf.IResolvable) {
    this._useDdnsDomainname = value;
  }
  public resetUseDdnsDomainname() {
    this._useDdnsDomainname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDdnsDomainnameInput() {
    return this._useDdnsDomainname;
  }

  // use_ddns_generate_hostname - computed: true, optional: true, required: false
  private _useDdnsGenerateHostname?: boolean | cdktf.IResolvable; 
  public get useDdnsGenerateHostname() {
    return this.getBooleanAttribute('use_ddns_generate_hostname');
  }
  public set useDdnsGenerateHostname(value: boolean | cdktf.IResolvable) {
    this._useDdnsGenerateHostname = value;
  }
  public resetUseDdnsGenerateHostname() {
    this._useDdnsGenerateHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDdnsGenerateHostnameInput() {
    return this._useDdnsGenerateHostname;
  }

  // use_deny_bootp - computed: true, optional: true, required: false
  private _useDenyBootp?: boolean | cdktf.IResolvable; 
  public get useDenyBootp() {
    return this.getBooleanAttribute('use_deny_bootp');
  }
  public set useDenyBootp(value: boolean | cdktf.IResolvable) {
    this._useDenyBootp = value;
  }
  public resetUseDenyBootp() {
    this._useDenyBootp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDenyBootpInput() {
    return this._useDenyBootp;
  }

  // use_email_list - computed: true, optional: true, required: false
  private _useEmailList?: boolean | cdktf.IResolvable; 
  public get useEmailList() {
    return this.getBooleanAttribute('use_email_list');
  }
  public set useEmailList(value: boolean | cdktf.IResolvable) {
    this._useEmailList = value;
  }
  public resetUseEmailList() {
    this._useEmailList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEmailListInput() {
    return this._useEmailList;
  }

  // use_enable_ddns - computed: true, optional: true, required: false
  private _useEnableDdns?: boolean | cdktf.IResolvable; 
  public get useEnableDdns() {
    return this.getBooleanAttribute('use_enable_ddns');
  }
  public set useEnableDdns(value: boolean | cdktf.IResolvable) {
    this._useEnableDdns = value;
  }
  public resetUseEnableDdns() {
    this._useEnableDdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEnableDdnsInput() {
    return this._useEnableDdns;
  }

  // use_enable_dhcp_thresholds - computed: true, optional: true, required: false
  private _useEnableDhcpThresholds?: boolean | cdktf.IResolvable; 
  public get useEnableDhcpThresholds() {
    return this.getBooleanAttribute('use_enable_dhcp_thresholds');
  }
  public set useEnableDhcpThresholds(value: boolean | cdktf.IResolvable) {
    this._useEnableDhcpThresholds = value;
  }
  public resetUseEnableDhcpThresholds() {
    this._useEnableDhcpThresholds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEnableDhcpThresholdsInput() {
    return this._useEnableDhcpThresholds;
  }

  // use_ignore_dhcp_option_list_request - computed: true, optional: true, required: false
  private _useIgnoreDhcpOptionListRequest?: boolean | cdktf.IResolvable; 
  public get useIgnoreDhcpOptionListRequest() {
    return this.getBooleanAttribute('use_ignore_dhcp_option_list_request');
  }
  public set useIgnoreDhcpOptionListRequest(value: boolean | cdktf.IResolvable) {
    this._useIgnoreDhcpOptionListRequest = value;
  }
  public resetUseIgnoreDhcpOptionListRequest() {
    this._useIgnoreDhcpOptionListRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIgnoreDhcpOptionListRequestInput() {
    return this._useIgnoreDhcpOptionListRequest;
  }

  // use_known_clients - computed: true, optional: true, required: false
  private _useKnownClients?: boolean | cdktf.IResolvable; 
  public get useKnownClients() {
    return this.getBooleanAttribute('use_known_clients');
  }
  public set useKnownClients(value: boolean | cdktf.IResolvable) {
    this._useKnownClients = value;
  }
  public resetUseKnownClients() {
    this._useKnownClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useKnownClientsInput() {
    return this._useKnownClients;
  }

  // use_lease_scavenge_time - computed: true, optional: true, required: false
  private _useLeaseScavengeTime?: boolean | cdktf.IResolvable; 
  public get useLeaseScavengeTime() {
    return this.getBooleanAttribute('use_lease_scavenge_time');
  }
  public set useLeaseScavengeTime(value: boolean | cdktf.IResolvable) {
    this._useLeaseScavengeTime = value;
  }
  public resetUseLeaseScavengeTime() {
    this._useLeaseScavengeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLeaseScavengeTimeInput() {
    return this._useLeaseScavengeTime;
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

  // use_ms_options - computed: true, optional: true, required: false
  private _useMsOptions?: boolean | cdktf.IResolvable; 
  public get useMsOptions() {
    return this.getBooleanAttribute('use_ms_options');
  }
  public set useMsOptions(value: boolean | cdktf.IResolvable) {
    this._useMsOptions = value;
  }
  public resetUseMsOptions() {
    this._useMsOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMsOptionsInput() {
    return this._useMsOptions;
  }

  // use_nextserver - computed: true, optional: true, required: false
  private _useNextserver?: boolean | cdktf.IResolvable; 
  public get useNextserver() {
    return this.getBooleanAttribute('use_nextserver');
  }
  public set useNextserver(value: boolean | cdktf.IResolvable) {
    this._useNextserver = value;
  }
  public resetUseNextserver() {
    this._useNextserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNextserverInput() {
    return this._useNextserver;
  }

  // use_options - computed: true, optional: true, required: false
  private _useOptions?: boolean | cdktf.IResolvable; 
  public get useOptions() {
    return this.getBooleanAttribute('use_options');
  }
  public set useOptions(value: boolean | cdktf.IResolvable) {
    this._useOptions = value;
  }
  public resetUseOptions() {
    this._useOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOptionsInput() {
    return this._useOptions;
  }

  // use_pxe_lease_time - computed: true, optional: true, required: false
  private _usePxeLeaseTime?: boolean | cdktf.IResolvable; 
  public get usePxeLeaseTime() {
    return this.getBooleanAttribute('use_pxe_lease_time');
  }
  public set usePxeLeaseTime(value: boolean | cdktf.IResolvable) {
    this._usePxeLeaseTime = value;
  }
  public resetUsePxeLeaseTime() {
    this._usePxeLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePxeLeaseTimeInput() {
    return this._usePxeLeaseTime;
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

  // use_unknown_clients - computed: true, optional: true, required: false
  private _useUnknownClients?: boolean | cdktf.IResolvable; 
  public get useUnknownClients() {
    return this.getBooleanAttribute('use_unknown_clients');
  }
  public set useUnknownClients(value: boolean | cdktf.IResolvable) {
    this._useUnknownClients = value;
  }
  public resetUseUnknownClients() {
    this._useUnknownClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useUnknownClientsInput() {
    return this._useUnknownClients;
  }

  // use_update_dns_on_lease_renewal - computed: true, optional: true, required: false
  private _useUpdateDnsOnLeaseRenewal?: boolean | cdktf.IResolvable; 
  public get useUpdateDnsOnLeaseRenewal() {
    return this.getBooleanAttribute('use_update_dns_on_lease_renewal');
  }
  public set useUpdateDnsOnLeaseRenewal(value: boolean | cdktf.IResolvable) {
    this._useUpdateDnsOnLeaseRenewal = value;
  }
  public resetUseUpdateDnsOnLeaseRenewal() {
    this._useUpdateDnsOnLeaseRenewal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useUpdateDnsOnLeaseRenewalInput() {
    return this._useUpdateDnsOnLeaseRenewal;
  }
}

export class DataNiosDhcpRangeTemplateResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpRangeTemplateResult[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpRangeTemplateResultOutputReference {
    return new DataNiosDhcpRangeTemplateResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template nios_dhcp_range_template}
*/
export class DataNiosDhcpRangeTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dhcp_range_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosDhcpRangeTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosDhcpRangeTemplate to import
  * @param importFromId The id of the existing DataNiosDhcpRangeTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosDhcpRangeTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dhcp_range_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range_template nios_dhcp_range_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosDhcpRangeTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosDhcpRangeTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios_dhcp_range_template',
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
    this._extattrfilters = config.extattrfilters;
    this._filters = config.filters;
    this._maxResults = config.maxResults;
    this._paging = config.paging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // extattrfilters - computed: false, optional: true, required: false
  private _extattrfilters?: { [key: string]: string }; 
  public get extattrfilters() {
    return this.getStringMapAttribute('extattrfilters');
  }
  public set extattrfilters(value: { [key: string]: string }) {
    this._extattrfilters = value;
  }
  public resetExtattrfilters() {
    this._extattrfilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrfiltersInput() {
    return this._extattrfilters;
  }

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
  private _result = new DataNiosDhcpRangeTemplateResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      extattrfilters: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrfilters),
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      max_results: cdktf.numberToTerraform(this._maxResults),
      paging: cdktf.numberToTerraform(this._paging),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      extattrfilters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extattrfilters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
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
