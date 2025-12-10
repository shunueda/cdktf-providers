// https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosDhcpIpv6FixedaddresstemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * External Attribute Filters are used to return a more specific list of results by filtering on external attributes. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate#extattrfilters DataNiosDhcpIpv6Fixedaddresstemplate#extattrfilters}
  */
  readonly extattrfilters?: { [key: string]: string };
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate#filters DataNiosDhcpIpv6Fixedaddresstemplate#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Maximum number of objects to be returned. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate#max_results DataNiosDhcpIpv6Fixedaddresstemplate#max_results}
  */
  readonly maxResults?: number;
  /**
  * Enable (1) or disable (0) paging for the data source query. When enabled, the system retrieves results in pages, allowing efficient handling of large result sets. Paging is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate#paging DataNiosDhcpIpv6Fixedaddresstemplate#paging}
  */
  readonly paging?: number;
}
export interface DataNiosDhcpIpv6FixedaddresstemplateResultLogicFilterRules {
  /**
  * The filter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate#filter DataNiosDhcpIpv6Fixedaddresstemplate#filter}
  */
  readonly filter: string;
  /**
  * The filter type. Valid values are: * MAC * NAC * Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate#type DataNiosDhcpIpv6Fixedaddresstemplate#type}
  */
  readonly type: string;
}

export function dataNiosDhcpIpv6FixedaddresstemplateResultLogicFilterRulesToTerraform(struct?: DataNiosDhcpIpv6FixedaddresstemplateResultLogicFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataNiosDhcpIpv6FixedaddresstemplateResultLogicFilterRulesToHclTerraform(struct?: DataNiosDhcpIpv6FixedaddresstemplateResultLogicFilterRules | cdktf.IResolvable): any {
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

export class DataNiosDhcpIpv6FixedaddresstemplateResultLogicFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpIpv6FixedaddresstemplateResultLogicFilterRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpIpv6FixedaddresstemplateResultLogicFilterRules | cdktf.IResolvable | undefined) {
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

export class DataNiosDhcpIpv6FixedaddresstemplateResultLogicFilterRulesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpIpv6FixedaddresstemplateResultLogicFilterRules[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpIpv6FixedaddresstemplateResultLogicFilterRulesOutputReference {
    return new DataNiosDhcpIpv6FixedaddresstemplateResultLogicFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDhcpIpv6FixedaddresstemplateResultOptions {
  /**
  * Name of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate#name DataNiosDhcpIpv6Fixedaddresstemplate#name}
  */
  readonly name?: string;
  /**
  * The code of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate#num DataNiosDhcpIpv6Fixedaddresstemplate#num}
  */
  readonly num?: number;
  /**
  * Only applies to special options that are displayed separately from other options and have a use flag. These options are: * routers * router-templates * domain-name-servers * domain-name * broadcast-address * broadcast-address-offset * dhcp-lease-time * dhcp6.name-servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate#use_option DataNiosDhcpIpv6Fixedaddresstemplate#use_option}
  */
  readonly useOption?: boolean | cdktf.IResolvable;
  /**
  * Value of the DHCP option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate#value DataNiosDhcpIpv6Fixedaddresstemplate#value}
  */
  readonly value?: string;
  /**
  * The name of the space this DHCP option is associated to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate#vendor_class DataNiosDhcpIpv6Fixedaddresstemplate#vendor_class}
  */
  readonly vendorClass?: string;
}

export function dataNiosDhcpIpv6FixedaddresstemplateResultOptionsToTerraform(struct?: DataNiosDhcpIpv6FixedaddresstemplateResultOptions | cdktf.IResolvable): any {
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


export function dataNiosDhcpIpv6FixedaddresstemplateResultOptionsToHclTerraform(struct?: DataNiosDhcpIpv6FixedaddresstemplateResultOptions | cdktf.IResolvable): any {
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

export class DataNiosDhcpIpv6FixedaddresstemplateResultOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpIpv6FixedaddresstemplateResultOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpIpv6FixedaddresstemplateResultOptions | cdktf.IResolvable | undefined) {
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

export class DataNiosDhcpIpv6FixedaddresstemplateResultOptionsList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpIpv6FixedaddresstemplateResultOptions[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpIpv6FixedaddresstemplateResultOptionsOutputReference {
    return new DataNiosDhcpIpv6FixedaddresstemplateResultOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDhcpIpv6FixedaddresstemplateResult {
  /**
  * A descriptive comment of an IPv6 fixed address template object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate#comment DataNiosDhcpIpv6Fixedaddresstemplate#comment}
  */
  readonly comment?: string;
  /**
  * Domain name of the IPv6 fixed address template object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate#domain_name DataNiosDhcpIpv6Fixedaddresstemplate#domain_name}
  */
  readonly domainName?: string;
  /**
  * The IPv6 addresses of DNS recursive name servers to which the DHCP client can send name resolution requests. The DHCP server includes this information in the DNS Recursive Name Server option in Advertise, Rebind, Information-Request, and Reply messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate#domain_name_servers DataNiosDhcpIpv6Fixedaddresstemplate#domain_name_servers}
  */
  readonly domainNameServers?: string[];
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate#extattrs DataNiosDhcpIpv6Fixedaddresstemplate#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * This field contains the logic filters to be applied to this IPv6 fixed address. This list corresponds to the match rules that are written to the DHCPv6 configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate#logic_filter_rules DataNiosDhcpIpv6Fixedaddresstemplate#logic_filter_rules}
  */
  readonly logicFilterRules?: DataNiosDhcpIpv6FixedaddresstemplateResultLogicFilterRules[] | cdktf.IResolvable;
  /**
  * Name of an IPv6 fixed address template object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate#name DataNiosDhcpIpv6Fixedaddresstemplate#name}
  */
  readonly name: string;
  /**
  * The number of IPv6 addresses for this fixed address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate#number_of_addresses DataNiosDhcpIpv6Fixedaddresstemplate#number_of_addresses}
  */
  readonly numberOfAddresses?: number;
  /**
  * The start address offset for this IPv6 fixed address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate#offset DataNiosDhcpIpv6Fixedaddresstemplate#offset}
  */
  readonly offset?: number;
  /**
  * An array of DHCP option dhcpoption structs that lists the DHCP options associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate#options DataNiosDhcpIpv6Fixedaddresstemplate#options}
  */
  readonly options?: DataNiosDhcpIpv6FixedaddresstemplateResultOptions[] | cdktf.IResolvable;
  /**
  * The preferred lifetime value for this DHCP IPv6 fixed address template object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate#preferred_lifetime DataNiosDhcpIpv6Fixedaddresstemplate#preferred_lifetime}
  */
  readonly preferredLifetime?: number;
  /**
  * Use flag for: domain_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate#use_domain_name DataNiosDhcpIpv6Fixedaddresstemplate#use_domain_name}
  */
  readonly useDomainName?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: domain_name_servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate#use_domain_name_servers DataNiosDhcpIpv6Fixedaddresstemplate#use_domain_name_servers}
  */
  readonly useDomainNameServers?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: logic_filter_rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate#use_logic_filter_rules DataNiosDhcpIpv6Fixedaddresstemplate#use_logic_filter_rules}
  */
  readonly useLogicFilterRules?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate#use_options DataNiosDhcpIpv6Fixedaddresstemplate#use_options}
  */
  readonly useOptions?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: preferred_lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate#use_preferred_lifetime DataNiosDhcpIpv6Fixedaddresstemplate#use_preferred_lifetime}
  */
  readonly usePreferredLifetime?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: valid_lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate#use_valid_lifetime DataNiosDhcpIpv6Fixedaddresstemplate#use_valid_lifetime}
  */
  readonly useValidLifetime?: boolean | cdktf.IResolvable;
  /**
  * The valid lifetime value for this DHCP IPv6 fixed address template object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate#valid_lifetime DataNiosDhcpIpv6Fixedaddresstemplate#valid_lifetime}
  */
  readonly validLifetime?: number;
}

export function dataNiosDhcpIpv6FixedaddresstemplateResultToTerraform(struct?: DataNiosDhcpIpv6FixedaddresstemplateResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    domain_name_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domainNameServers),
    extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extattrs),
    logic_filter_rules: cdktf.listMapper(dataNiosDhcpIpv6FixedaddresstemplateResultLogicFilterRulesToTerraform, false)(struct!.logicFilterRules),
    name: cdktf.stringToTerraform(struct!.name),
    number_of_addresses: cdktf.numberToTerraform(struct!.numberOfAddresses),
    offset: cdktf.numberToTerraform(struct!.offset),
    options: cdktf.listMapper(dataNiosDhcpIpv6FixedaddresstemplateResultOptionsToTerraform, false)(struct!.options),
    preferred_lifetime: cdktf.numberToTerraform(struct!.preferredLifetime),
    use_domain_name: cdktf.booleanToTerraform(struct!.useDomainName),
    use_domain_name_servers: cdktf.booleanToTerraform(struct!.useDomainNameServers),
    use_logic_filter_rules: cdktf.booleanToTerraform(struct!.useLogicFilterRules),
    use_options: cdktf.booleanToTerraform(struct!.useOptions),
    use_preferred_lifetime: cdktf.booleanToTerraform(struct!.usePreferredLifetime),
    use_valid_lifetime: cdktf.booleanToTerraform(struct!.useValidLifetime),
    valid_lifetime: cdktf.numberToTerraform(struct!.validLifetime),
  }
}


export function dataNiosDhcpIpv6FixedaddresstemplateResultToHclTerraform(struct?: DataNiosDhcpIpv6FixedaddresstemplateResult): any {
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
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_name_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domainNameServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extattrs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extattrs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    logic_filter_rules: {
      value: cdktf.listMapperHcl(dataNiosDhcpIpv6FixedaddresstemplateResultLogicFilterRulesToHclTerraform, false)(struct!.logicFilterRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDhcpIpv6FixedaddresstemplateResultLogicFilterRulesList",
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
    options: {
      value: cdktf.listMapperHcl(dataNiosDhcpIpv6FixedaddresstemplateResultOptionsToHclTerraform, false)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDhcpIpv6FixedaddresstemplateResultOptionsList",
    },
    preferred_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.preferredLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_domain_name: {
      value: cdktf.booleanToHclTerraform(struct!.useDomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_domain_name_servers: {
      value: cdktf.booleanToHclTerraform(struct!.useDomainNameServers),
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
    use_options: {
      value: cdktf.booleanToHclTerraform(struct!.useOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_preferred_lifetime: {
      value: cdktf.booleanToHclTerraform(struct!.usePreferredLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_valid_lifetime: {
      value: cdktf.booleanToHclTerraform(struct!.useValidLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    valid_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.validLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDhcpIpv6FixedaddresstemplateResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpIpv6FixedaddresstemplateResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._domainNameServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainNameServers = this._domainNameServers;
    }
    if (this._extattrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extattrs = this._extattrs;
    }
    if (this._logicFilterRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicFilterRules = this._logicFilterRules?.internalValue;
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
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._preferredLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredLifetime = this._preferredLifetime;
    }
    if (this._useDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDomainName = this._useDomainName;
    }
    if (this._useDomainNameServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDomainNameServers = this._useDomainNameServers;
    }
    if (this._useLogicFilterRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLogicFilterRules = this._useLogicFilterRules;
    }
    if (this._useOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOptions = this._useOptions;
    }
    if (this._usePreferredLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePreferredLifetime = this._usePreferredLifetime;
    }
    if (this._useValidLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.useValidLifetime = this._useValidLifetime;
    }
    if (this._validLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.validLifetime = this._validLifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDhcpIpv6FixedaddresstemplateResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
      this._domainName = undefined;
      this._domainNameServers = undefined;
      this._extattrs = undefined;
      this._logicFilterRules.internalValue = undefined;
      this._name = undefined;
      this._numberOfAddresses = undefined;
      this._offset = undefined;
      this._options.internalValue = undefined;
      this._preferredLifetime = undefined;
      this._useDomainName = undefined;
      this._useDomainNameServers = undefined;
      this._useLogicFilterRules = undefined;
      this._useOptions = undefined;
      this._usePreferredLifetime = undefined;
      this._useValidLifetime = undefined;
      this._validLifetime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
      this._domainName = value.domainName;
      this._domainNameServers = value.domainNameServers;
      this._extattrs = value.extattrs;
      this._logicFilterRules.internalValue = value.logicFilterRules;
      this._name = value.name;
      this._numberOfAddresses = value.numberOfAddresses;
      this._offset = value.offset;
      this._options.internalValue = value.options;
      this._preferredLifetime = value.preferredLifetime;
      this._useDomainName = value.useDomainName;
      this._useDomainNameServers = value.useDomainNameServers;
      this._useLogicFilterRules = value.useLogicFilterRules;
      this._useOptions = value.useOptions;
      this._usePreferredLifetime = value.usePreferredLifetime;
      this._useValidLifetime = value.useValidLifetime;
      this._validLifetime = value.validLifetime;
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

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // domain_name_servers - computed: true, optional: true, required: false
  private _domainNameServers?: string[]; 
  public get domainNameServers() {
    return this.getListAttribute('domain_name_servers');
  }
  public set domainNameServers(value: string[]) {
    this._domainNameServers = value;
  }
  public resetDomainNameServers() {
    this._domainNameServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameServersInput() {
    return this._domainNameServers;
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

  // logic_filter_rules - computed: true, optional: true, required: false
  private _logicFilterRules = new DataNiosDhcpIpv6FixedaddresstemplateResultLogicFilterRulesList(this, "logic_filter_rules", false);
  public get logicFilterRules() {
    return this._logicFilterRules;
  }
  public putLogicFilterRules(value: DataNiosDhcpIpv6FixedaddresstemplateResultLogicFilterRules[] | cdktf.IResolvable) {
    this._logicFilterRules.internalValue = value;
  }
  public resetLogicFilterRules() {
    this._logicFilterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicFilterRulesInput() {
    return this._logicFilterRules.internalValue;
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

  // number_of_addresses - computed: true, optional: true, required: false
  private _numberOfAddresses?: number; 
  public get numberOfAddresses() {
    return this.getNumberAttribute('number_of_addresses');
  }
  public set numberOfAddresses(value: number) {
    this._numberOfAddresses = value;
  }
  public resetNumberOfAddresses() {
    this._numberOfAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfAddressesInput() {
    return this._numberOfAddresses;
  }

  // offset - computed: true, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // options - computed: true, optional: true, required: false
  private _options = new DataNiosDhcpIpv6FixedaddresstemplateResultOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: DataNiosDhcpIpv6FixedaddresstemplateResultOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // preferred_lifetime - computed: true, optional: true, required: false
  private _preferredLifetime?: number; 
  public get preferredLifetime() {
    return this.getNumberAttribute('preferred_lifetime');
  }
  public set preferredLifetime(value: number) {
    this._preferredLifetime = value;
  }
  public resetPreferredLifetime() {
    this._preferredLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLifetimeInput() {
    return this._preferredLifetime;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // use_domain_name - computed: true, optional: true, required: false
  private _useDomainName?: boolean | cdktf.IResolvable; 
  public get useDomainName() {
    return this.getBooleanAttribute('use_domain_name');
  }
  public set useDomainName(value: boolean | cdktf.IResolvable) {
    this._useDomainName = value;
  }
  public resetUseDomainName() {
    this._useDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDomainNameInput() {
    return this._useDomainName;
  }

  // use_domain_name_servers - computed: true, optional: true, required: false
  private _useDomainNameServers?: boolean | cdktf.IResolvable; 
  public get useDomainNameServers() {
    return this.getBooleanAttribute('use_domain_name_servers');
  }
  public set useDomainNameServers(value: boolean | cdktf.IResolvable) {
    this._useDomainNameServers = value;
  }
  public resetUseDomainNameServers() {
    this._useDomainNameServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDomainNameServersInput() {
    return this._useDomainNameServers;
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

  // use_preferred_lifetime - computed: true, optional: true, required: false
  private _usePreferredLifetime?: boolean | cdktf.IResolvable; 
  public get usePreferredLifetime() {
    return this.getBooleanAttribute('use_preferred_lifetime');
  }
  public set usePreferredLifetime(value: boolean | cdktf.IResolvable) {
    this._usePreferredLifetime = value;
  }
  public resetUsePreferredLifetime() {
    this._usePreferredLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePreferredLifetimeInput() {
    return this._usePreferredLifetime;
  }

  // use_valid_lifetime - computed: true, optional: true, required: false
  private _useValidLifetime?: boolean | cdktf.IResolvable; 
  public get useValidLifetime() {
    return this.getBooleanAttribute('use_valid_lifetime');
  }
  public set useValidLifetime(value: boolean | cdktf.IResolvable) {
    this._useValidLifetime = value;
  }
  public resetUseValidLifetime() {
    this._useValidLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useValidLifetimeInput() {
    return this._useValidLifetime;
  }

  // valid_lifetime - computed: true, optional: true, required: false
  private _validLifetime?: number; 
  public get validLifetime() {
    return this.getNumberAttribute('valid_lifetime');
  }
  public set validLifetime(value: number) {
    this._validLifetime = value;
  }
  public resetValidLifetime() {
    this._validLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validLifetimeInput() {
    return this._validLifetime;
  }
}

export class DataNiosDhcpIpv6FixedaddresstemplateResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpIpv6FixedaddresstemplateResult[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpIpv6FixedaddresstemplateResultOutputReference {
    return new DataNiosDhcpIpv6FixedaddresstemplateResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate nios_dhcp_ipv6fixedaddresstemplate}
*/
export class DataNiosDhcpIpv6Fixedaddresstemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dhcp_ipv6fixedaddresstemplate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosDhcpIpv6Fixedaddresstemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosDhcpIpv6Fixedaddresstemplate to import
  * @param importFromId The id of the existing DataNiosDhcpIpv6Fixedaddresstemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosDhcpIpv6Fixedaddresstemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dhcp_ipv6fixedaddresstemplate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6fixedaddresstemplate nios_dhcp_ipv6fixedaddresstemplate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosDhcpIpv6FixedaddresstemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosDhcpIpv6FixedaddresstemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios_dhcp_ipv6fixedaddresstemplate',
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
  private _result = new DataNiosDhcpIpv6FixedaddresstemplateResultList(this, "result", false);
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
