// https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6fixedaddresstemplate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DhcpIpv6FixedaddresstemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * A descriptive comment of an IPv6 fixed address template object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6fixedaddresstemplate#comment DhcpIpv6Fixedaddresstemplate#comment}
  */
  readonly comment?: string;
  /**
  * Domain name of the IPv6 fixed address template object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6fixedaddresstemplate#domain_name DhcpIpv6Fixedaddresstemplate#domain_name}
  */
  readonly domainName?: string;
  /**
  * The IPv6 addresses of DNS recursive name servers to which the DHCP client can send name resolution requests. The DHCP server includes this information in the DNS Recursive Name Server option in Advertise, Rebind, Information-Request, and Reply messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6fixedaddresstemplate#domain_name_servers DhcpIpv6Fixedaddresstemplate#domain_name_servers}
  */
  readonly domainNameServers?: string[];
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6fixedaddresstemplate#extattrs DhcpIpv6Fixedaddresstemplate#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * This field contains the logic filters to be applied to this IPv6 fixed address. This list corresponds to the match rules that are written to the DHCPv6 configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6fixedaddresstemplate#logic_filter_rules DhcpIpv6Fixedaddresstemplate#logic_filter_rules}
  */
  readonly logicFilterRules?: DhcpIpv6FixedaddresstemplateLogicFilterRules[] | cdktf.IResolvable;
  /**
  * Name of an IPv6 fixed address template object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6fixedaddresstemplate#name DhcpIpv6Fixedaddresstemplate#name}
  */
  readonly name: string;
  /**
  * The number of IPv6 addresses for this fixed address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6fixedaddresstemplate#number_of_addresses DhcpIpv6Fixedaddresstemplate#number_of_addresses}
  */
  readonly numberOfAddresses?: number;
  /**
  * The start address offset for this IPv6 fixed address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6fixedaddresstemplate#offset DhcpIpv6Fixedaddresstemplate#offset}
  */
  readonly offset?: number;
  /**
  * An array of DHCP option dhcpoption structs that lists the DHCP options associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6fixedaddresstemplate#options DhcpIpv6Fixedaddresstemplate#options}
  */
  readonly options?: DhcpIpv6FixedaddresstemplateOptions[] | cdktf.IResolvable;
  /**
  * The preferred lifetime value for this DHCP IPv6 fixed address template object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6fixedaddresstemplate#preferred_lifetime DhcpIpv6Fixedaddresstemplate#preferred_lifetime}
  */
  readonly preferredLifetime?: number;
  /**
  * Use flag for: domain_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6fixedaddresstemplate#use_domain_name DhcpIpv6Fixedaddresstemplate#use_domain_name}
  */
  readonly useDomainName?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: domain_name_servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6fixedaddresstemplate#use_domain_name_servers DhcpIpv6Fixedaddresstemplate#use_domain_name_servers}
  */
  readonly useDomainNameServers?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: logic_filter_rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6fixedaddresstemplate#use_logic_filter_rules DhcpIpv6Fixedaddresstemplate#use_logic_filter_rules}
  */
  readonly useLogicFilterRules?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6fixedaddresstemplate#use_options DhcpIpv6Fixedaddresstemplate#use_options}
  */
  readonly useOptions?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: preferred_lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6fixedaddresstemplate#use_preferred_lifetime DhcpIpv6Fixedaddresstemplate#use_preferred_lifetime}
  */
  readonly usePreferredLifetime?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: valid_lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6fixedaddresstemplate#use_valid_lifetime DhcpIpv6Fixedaddresstemplate#use_valid_lifetime}
  */
  readonly useValidLifetime?: boolean | cdktf.IResolvable;
  /**
  * The valid lifetime value for this DHCP IPv6 fixed address template object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6fixedaddresstemplate#valid_lifetime DhcpIpv6Fixedaddresstemplate#valid_lifetime}
  */
  readonly validLifetime?: number;
}
export interface DhcpIpv6FixedaddresstemplateLogicFilterRules {
  /**
  * The filter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6fixedaddresstemplate#filter DhcpIpv6Fixedaddresstemplate#filter}
  */
  readonly filter: string;
  /**
  * The filter type. Valid values are: * MAC * NAC * Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6fixedaddresstemplate#type DhcpIpv6Fixedaddresstemplate#type}
  */
  readonly type: string;
}

export function dhcpIpv6FixedaddresstemplateLogicFilterRulesToTerraform(struct?: DhcpIpv6FixedaddresstemplateLogicFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dhcpIpv6FixedaddresstemplateLogicFilterRulesToHclTerraform(struct?: DhcpIpv6FixedaddresstemplateLogicFilterRules | cdktf.IResolvable): any {
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

export class DhcpIpv6FixedaddresstemplateLogicFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpIpv6FixedaddresstemplateLogicFilterRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DhcpIpv6FixedaddresstemplateLogicFilterRules | cdktf.IResolvable | undefined) {
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

export class DhcpIpv6FixedaddresstemplateLogicFilterRulesList extends cdktf.ComplexList {
  public internalValue? : DhcpIpv6FixedaddresstemplateLogicFilterRules[] | cdktf.IResolvable

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
  public get(index: number): DhcpIpv6FixedaddresstemplateLogicFilterRulesOutputReference {
    return new DhcpIpv6FixedaddresstemplateLogicFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DhcpIpv6FixedaddresstemplateOptions {
  /**
  * Name of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6fixedaddresstemplate#name DhcpIpv6Fixedaddresstemplate#name}
  */
  readonly name?: string;
  /**
  * The code of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6fixedaddresstemplate#num DhcpIpv6Fixedaddresstemplate#num}
  */
  readonly num?: number;
  /**
  * Only applies to special options that are displayed separately from other options and have a use flag. These options are: * routers * router-templates * domain-name-servers * domain-name * broadcast-address * broadcast-address-offset * dhcp-lease-time * dhcp6.name-servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6fixedaddresstemplate#use_option DhcpIpv6Fixedaddresstemplate#use_option}
  */
  readonly useOption?: boolean | cdktf.IResolvable;
  /**
  * Value of the DHCP option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6fixedaddresstemplate#value DhcpIpv6Fixedaddresstemplate#value}
  */
  readonly value?: string;
  /**
  * The name of the space this DHCP option is associated to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6fixedaddresstemplate#vendor_class DhcpIpv6Fixedaddresstemplate#vendor_class}
  */
  readonly vendorClass?: string;
}

export function dhcpIpv6FixedaddresstemplateOptionsToTerraform(struct?: DhcpIpv6FixedaddresstemplateOptions | cdktf.IResolvable): any {
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


export function dhcpIpv6FixedaddresstemplateOptionsToHclTerraform(struct?: DhcpIpv6FixedaddresstemplateOptions | cdktf.IResolvable): any {
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

export class DhcpIpv6FixedaddresstemplateOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpIpv6FixedaddresstemplateOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DhcpIpv6FixedaddresstemplateOptions | cdktf.IResolvable | undefined) {
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

export class DhcpIpv6FixedaddresstemplateOptionsList extends cdktf.ComplexList {
  public internalValue? : DhcpIpv6FixedaddresstemplateOptions[] | cdktf.IResolvable

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
  public get(index: number): DhcpIpv6FixedaddresstemplateOptionsOutputReference {
    return new DhcpIpv6FixedaddresstemplateOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6fixedaddresstemplate nios_dhcp_ipv6fixedaddresstemplate}
*/
export class DhcpIpv6Fixedaddresstemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dhcp_ipv6fixedaddresstemplate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DhcpIpv6Fixedaddresstemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DhcpIpv6Fixedaddresstemplate to import
  * @param importFromId The id of the existing DhcpIpv6Fixedaddresstemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6fixedaddresstemplate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DhcpIpv6Fixedaddresstemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dhcp_ipv6fixedaddresstemplate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6fixedaddresstemplate nios_dhcp_ipv6fixedaddresstemplate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DhcpIpv6FixedaddresstemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DhcpIpv6FixedaddresstemplateConfig) {
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
    this._comment = config.comment;
    this._domainName = config.domainName;
    this._domainNameServers = config.domainNameServers;
    this._extattrs = config.extattrs;
    this._logicFilterRules.internalValue = config.logicFilterRules;
    this._name = config.name;
    this._numberOfAddresses = config.numberOfAddresses;
    this._offset = config.offset;
    this._options.internalValue = config.options;
    this._preferredLifetime = config.preferredLifetime;
    this._useDomainName = config.useDomainName;
    this._useDomainNameServers = config.useDomainNameServers;
    this._useLogicFilterRules = config.useLogicFilterRules;
    this._useOptions = config.useOptions;
    this._usePreferredLifetime = config.usePreferredLifetime;
    this._useValidLifetime = config.useValidLifetime;
    this._validLifetime = config.validLifetime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _logicFilterRules = new DhcpIpv6FixedaddresstemplateLogicFilterRulesList(this, "logic_filter_rules", false);
  public get logicFilterRules() {
    return this._logicFilterRules;
  }
  public putLogicFilterRules(value: DhcpIpv6FixedaddresstemplateLogicFilterRules[] | cdktf.IResolvable) {
    this._logicFilterRules.internalValue = value;
  }
  public resetLogicFilterRules() {
    this._logicFilterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicFilterRulesInput() {
    return this._logicFilterRules.internalValue;
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
  private _options = new DhcpIpv6FixedaddresstemplateOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: DhcpIpv6FixedaddresstemplateOptions[] | cdktf.IResolvable) {
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      domain_name: cdktf.stringToTerraform(this._domainName),
      domain_name_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainNameServers),
      extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrs),
      logic_filter_rules: cdktf.listMapper(dhcpIpv6FixedaddresstemplateLogicFilterRulesToTerraform, false)(this._logicFilterRules.internalValue),
      name: cdktf.stringToTerraform(this._name),
      number_of_addresses: cdktf.numberToTerraform(this._numberOfAddresses),
      offset: cdktf.numberToTerraform(this._offset),
      options: cdktf.listMapper(dhcpIpv6FixedaddresstemplateOptionsToTerraform, false)(this._options.internalValue),
      preferred_lifetime: cdktf.numberToTerraform(this._preferredLifetime),
      use_domain_name: cdktf.booleanToTerraform(this._useDomainName),
      use_domain_name_servers: cdktf.booleanToTerraform(this._useDomainNameServers),
      use_logic_filter_rules: cdktf.booleanToTerraform(this._useLogicFilterRules),
      use_options: cdktf.booleanToTerraform(this._useOptions),
      use_preferred_lifetime: cdktf.booleanToTerraform(this._usePreferredLifetime),
      use_valid_lifetime: cdktf.booleanToTerraform(this._useValidLifetime),
      valid_lifetime: cdktf.numberToTerraform(this._validLifetime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainNameServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      extattrs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extattrs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      logic_filter_rules: {
        value: cdktf.listMapperHcl(dhcpIpv6FixedaddresstemplateLogicFilterRulesToHclTerraform, false)(this._logicFilterRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DhcpIpv6FixedaddresstemplateLogicFilterRulesList",
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
      options: {
        value: cdktf.listMapperHcl(dhcpIpv6FixedaddresstemplateOptionsToHclTerraform, false)(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DhcpIpv6FixedaddresstemplateOptionsList",
      },
      preferred_lifetime: {
        value: cdktf.numberToHclTerraform(this._preferredLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_domain_name: {
        value: cdktf.booleanToHclTerraform(this._useDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_domain_name_servers: {
        value: cdktf.booleanToHclTerraform(this._useDomainNameServers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_logic_filter_rules: {
        value: cdktf.booleanToHclTerraform(this._useLogicFilterRules),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_options: {
        value: cdktf.booleanToHclTerraform(this._useOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_preferred_lifetime: {
        value: cdktf.booleanToHclTerraform(this._usePreferredLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_valid_lifetime: {
        value: cdktf.booleanToHclTerraform(this._useValidLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      valid_lifetime: {
        value: cdktf.numberToHclTerraform(this._validLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
