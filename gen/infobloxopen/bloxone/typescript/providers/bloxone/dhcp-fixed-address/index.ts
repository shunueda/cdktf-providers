// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DhcpFixedAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * The reserved address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#address DhcpFixedAddress#address}
  */
  readonly address?: string;
  /**
  * The description for the fixed address. May contain 0 to 1024 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#comment DhcpFixedAddress#comment}
  */
  readonly comment?: string;
  /**
  * The list of DHCP options. May be either a specific option or a group of options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#dhcp_options DhcpFixedAddress#dhcp_options}
  */
  readonly dhcpOptions?: DhcpFixedAddressDhcpOptions[] | cdktf.IResolvable;
  /**
  * Optional. _true_ to disable object. The fixed address is converted to an exclusion when generating configuration.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#disable_dhcp DhcpFixedAddress#disable_dhcp}
  */
  readonly disableDhcp?: boolean | cdktf.IResolvable;
  /**
  * The configuration for header option filename field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#header_option_filename DhcpFixedAddress#header_option_filename}
  */
  readonly headerOptionFilename?: string;
  /**
  * The configuration for header option server address field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#header_option_server_address DhcpFixedAddress#header_option_server_address}
  */
  readonly headerOptionServerAddress?: string;
  /**
  * The configuration for header option server name field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#header_option_server_name DhcpFixedAddress#header_option_server_name}
  */
  readonly headerOptionServerName?: string;
  /**
  * The DHCP host name associated with this fixed address. It is of FQDN type and it defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#hostname DhcpFixedAddress#hostname}
  */
  readonly hostname?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#inheritance_parent DhcpFixedAddress#inheritance_parent}
  */
  readonly inheritanceParent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#inheritance_sources DhcpFixedAddress#inheritance_sources}
  */
  readonly inheritanceSources?: DhcpFixedAddressInheritanceSources;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#ip_space DhcpFixedAddress#ip_space}
  */
  readonly ipSpace?: string;
  /**
  * Indicates how to match the client:
  *   * _mac_: match the client MAC address for both IPv4 and IPv6
  *   * _client_text_ or _client_hex_: match the client identifier for IPv4 only
  *   * _relay_text_ or _relay_hex_: match the circuit ID or remote ID in the DHCP relay agent option (82) for IPv4 only
  *   * _duid_: match the DHCP unique identifier, currently match only for IPv6 protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#match_type DhcpFixedAddress#match_type}
  */
  readonly matchType: string;
  /**
  * The value to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#match_value DhcpFixedAddress#match_value}
  */
  readonly matchValue: string;
  /**
  * The name of the fixed address. May contain 1 to 256 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#name DhcpFixedAddress#name}
  */
  readonly name?: string;
  /**
  * The resource identifier for the address block where the next available fixed address should be generated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#next_available_id DhcpFixedAddress#next_available_id}
  */
  readonly nextAvailableId?: string;
  /**
  * The tags for the fixed address in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#tags DhcpFixedAddress#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DhcpFixedAddressDhcpOptions {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#group DhcpFixedAddress#group}
  */
  readonly group?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#option_code DhcpFixedAddress#option_code}
  */
  readonly optionCode?: string;
  /**
  * The option value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#option_value DhcpFixedAddress#option_value}
  */
  readonly optionValue?: string;
  /**
  * The type of item. Valid values are:
  *   * _group_
  *   * _option_
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#type DhcpFixedAddress#type}
  */
  readonly type?: string;
}

export function dhcpFixedAddressDhcpOptionsToTerraform(struct?: DhcpFixedAddressDhcpOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    option_code: cdktf.stringToTerraform(struct!.optionCode),
    option_value: cdktf.stringToTerraform(struct!.optionValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dhcpFixedAddressDhcpOptionsToHclTerraform(struct?: DhcpFixedAddressDhcpOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_code: {
      value: cdktf.stringToHclTerraform(struct!.optionCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_value: {
      value: cdktf.stringToHclTerraform(struct!.optionValue),
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

export class DhcpFixedAddressDhcpOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpFixedAddressDhcpOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._optionCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionCode = this._optionCode;
    }
    if (this._optionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionValue = this._optionValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpFixedAddressDhcpOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._optionCode = undefined;
      this._optionValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._optionCode = value.optionCode;
      this._optionValue = value.optionValue;
      this._type = value.type;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // option_code - computed: false, optional: true, required: false
  private _optionCode?: string; 
  public get optionCode() {
    return this.getStringAttribute('option_code');
  }
  public set optionCode(value: string) {
    this._optionCode = value;
  }
  public resetOptionCode() {
    this._optionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionCodeInput() {
    return this._optionCode;
  }

  // option_value - computed: true, optional: true, required: false
  private _optionValue?: string; 
  public get optionValue() {
    return this.getStringAttribute('option_value');
  }
  public set optionValue(value: string) {
    this._optionValue = value;
  }
  public resetOptionValue() {
    this._optionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionValueInput() {
    return this._optionValue;
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
}

export class DhcpFixedAddressDhcpOptionsList extends cdktf.ComplexList {
  public internalValue? : DhcpFixedAddressDhcpOptions[] | cdktf.IResolvable

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
  public get(index: number): DhcpFixedAddressDhcpOptionsOutputReference {
    return new DhcpFixedAddressDhcpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DhcpFixedAddressInheritanceAssignedHosts {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#host DhcpFixedAddress#host}
  */
  readonly host?: string;
}

export function dhcpFixedAddressInheritanceAssignedHostsToTerraform(struct?: DhcpFixedAddressInheritanceAssignedHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
  }
}


export function dhcpFixedAddressInheritanceAssignedHostsToHclTerraform(struct?: DhcpFixedAddressInheritanceAssignedHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpFixedAddressInheritanceAssignedHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpFixedAddressInheritanceAssignedHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpFixedAddressInheritanceAssignedHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // ophid - computed: true, optional: false, required: false
  public get ophid() {
    return this.getStringAttribute('ophid');
  }
}

export class DhcpFixedAddressInheritanceAssignedHostsList extends cdktf.ComplexList {
  public internalValue? : DhcpFixedAddressInheritanceAssignedHosts[] | cdktf.IResolvable

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
  public get(index: number): DhcpFixedAddressInheritanceAssignedHostsOutputReference {
    return new DhcpFixedAddressInheritanceAssignedHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DhcpFixedAddressInheritanceSourcesDhcpOptionsValueValueOption {
}

export function dhcpFixedAddressInheritanceSourcesDhcpOptionsValueValueOptionToTerraform(struct?: DhcpFixedAddressInheritanceSourcesDhcpOptionsValueValueOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dhcpFixedAddressInheritanceSourcesDhcpOptionsValueValueOptionToHclTerraform(struct?: DhcpFixedAddressInheritanceSourcesDhcpOptionsValueValueOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DhcpFixedAddressInheritanceSourcesDhcpOptionsValueValueOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpFixedAddressInheritanceSourcesDhcpOptionsValueValueOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpFixedAddressInheritanceSourcesDhcpOptionsValueValueOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // option_code - computed: true, optional: false, required: false
  public get optionCode() {
    return this.getStringAttribute('option_code');
  }

  // option_value - computed: true, optional: false, required: false
  public get optionValue() {
    return this.getStringAttribute('option_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DhcpFixedAddressInheritanceSourcesDhcpOptionsValueValue {
}

export function dhcpFixedAddressInheritanceSourcesDhcpOptionsValueValueToTerraform(struct?: DhcpFixedAddressInheritanceSourcesDhcpOptionsValueValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dhcpFixedAddressInheritanceSourcesDhcpOptionsValueValueToHclTerraform(struct?: DhcpFixedAddressInheritanceSourcesDhcpOptionsValueValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DhcpFixedAddressInheritanceSourcesDhcpOptionsValueValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpFixedAddressInheritanceSourcesDhcpOptionsValueValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpFixedAddressInheritanceSourcesDhcpOptionsValueValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // option - computed: true, optional: false, required: false
  private _option = new DhcpFixedAddressInheritanceSourcesDhcpOptionsValueValueOptionOutputReference(this, "option");
  public get option() {
    return this._option;
  }

  // overriding_group - computed: true, optional: false, required: false
  public get overridingGroup() {
    return this.getStringAttribute('overriding_group');
  }
}
export interface DhcpFixedAddressInheritanceSourcesDhcpOptionsValue {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _block_: Don't use the inherited value.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#action DhcpFixedAddress#action}
  */
  readonly action?: string;
}

export function dhcpFixedAddressInheritanceSourcesDhcpOptionsValueToTerraform(struct?: DhcpFixedAddressInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpFixedAddressInheritanceSourcesDhcpOptionsValueToHclTerraform(struct?: DhcpFixedAddressInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpFixedAddressInheritanceSourcesDhcpOptionsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpFixedAddressInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpFixedAddressInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DhcpFixedAddressInheritanceSourcesDhcpOptionsValueValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DhcpFixedAddressInheritanceSourcesDhcpOptionsValueList extends cdktf.ComplexList {
  public internalValue? : DhcpFixedAddressInheritanceSourcesDhcpOptionsValue[] | cdktf.IResolvable

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
  public get(index: number): DhcpFixedAddressInheritanceSourcesDhcpOptionsValueOutputReference {
    return new DhcpFixedAddressInheritanceSourcesDhcpOptionsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DhcpFixedAddressInheritanceSourcesDhcpOptions {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _block_: Don't use the inherited value.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#action DhcpFixedAddress#action}
  */
  readonly action?: string;
  /**
  * The inherited DHCP option values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#value DhcpFixedAddress#value}
  */
  readonly value?: DhcpFixedAddressInheritanceSourcesDhcpOptionsValue[] | cdktf.IResolvable;
}

export function dhcpFixedAddressInheritanceSourcesDhcpOptionsToTerraform(struct?: DhcpFixedAddressInheritanceSourcesDhcpOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    value: cdktf.listMapper(dhcpFixedAddressInheritanceSourcesDhcpOptionsValueToTerraform, false)(struct!.value),
  }
}


export function dhcpFixedAddressInheritanceSourcesDhcpOptionsToHclTerraform(struct?: DhcpFixedAddressInheritanceSourcesDhcpOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(dhcpFixedAddressInheritanceSourcesDhcpOptionsValueToHclTerraform, false)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "DhcpFixedAddressInheritanceSourcesDhcpOptionsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpFixedAddressInheritanceSourcesDhcpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpFixedAddressInheritanceSourcesDhcpOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpFixedAddressInheritanceSourcesDhcpOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._value.internalValue = value.value;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value = new DhcpFixedAddressInheritanceSourcesDhcpOptionsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: DhcpFixedAddressInheritanceSourcesDhcpOptionsValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface DhcpFixedAddressInheritanceSourcesHeaderOptionFilename {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#action DhcpFixedAddress#action}
  */
  readonly action?: string;
}

export function dhcpFixedAddressInheritanceSourcesHeaderOptionFilenameToTerraform(struct?: DhcpFixedAddressInheritanceSourcesHeaderOptionFilename | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpFixedAddressInheritanceSourcesHeaderOptionFilenameToHclTerraform(struct?: DhcpFixedAddressInheritanceSourcesHeaderOptionFilename | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpFixedAddressInheritanceSourcesHeaderOptionFilenameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpFixedAddressInheritanceSourcesHeaderOptionFilename | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpFixedAddressInheritanceSourcesHeaderOptionFilename | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DhcpFixedAddressInheritanceSourcesHeaderOptionServerAddress {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#action DhcpFixedAddress#action}
  */
  readonly action?: string;
}

export function dhcpFixedAddressInheritanceSourcesHeaderOptionServerAddressToTerraform(struct?: DhcpFixedAddressInheritanceSourcesHeaderOptionServerAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpFixedAddressInheritanceSourcesHeaderOptionServerAddressToHclTerraform(struct?: DhcpFixedAddressInheritanceSourcesHeaderOptionServerAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpFixedAddressInheritanceSourcesHeaderOptionServerAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpFixedAddressInheritanceSourcesHeaderOptionServerAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpFixedAddressInheritanceSourcesHeaderOptionServerAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DhcpFixedAddressInheritanceSourcesHeaderOptionServerName {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#action DhcpFixedAddress#action}
  */
  readonly action?: string;
}

export function dhcpFixedAddressInheritanceSourcesHeaderOptionServerNameToTerraform(struct?: DhcpFixedAddressInheritanceSourcesHeaderOptionServerName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpFixedAddressInheritanceSourcesHeaderOptionServerNameToHclTerraform(struct?: DhcpFixedAddressInheritanceSourcesHeaderOptionServerName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpFixedAddressInheritanceSourcesHeaderOptionServerNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpFixedAddressInheritanceSourcesHeaderOptionServerName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpFixedAddressInheritanceSourcesHeaderOptionServerName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DhcpFixedAddressInheritanceSources {
  /**
  * The inheritance configuration for _dhcp_options_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#dhcp_options DhcpFixedAddress#dhcp_options}
  */
  readonly dhcpOptions?: DhcpFixedAddressInheritanceSourcesDhcpOptions;
  /**
  * The inheritance configuration for _header_option_filename_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#header_option_filename DhcpFixedAddress#header_option_filename}
  */
  readonly headerOptionFilename?: DhcpFixedAddressInheritanceSourcesHeaderOptionFilename;
  /**
  * The inheritance configuration for _header_option_server_address_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#header_option_server_address DhcpFixedAddress#header_option_server_address}
  */
  readonly headerOptionServerAddress?: DhcpFixedAddressInheritanceSourcesHeaderOptionServerAddress;
  /**
  * The inheritance configuration for _header_option_server_name_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#header_option_server_name DhcpFixedAddress#header_option_server_name}
  */
  readonly headerOptionServerName?: DhcpFixedAddressInheritanceSourcesHeaderOptionServerName;
}

export function dhcpFixedAddressInheritanceSourcesToTerraform(struct?: DhcpFixedAddressInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp_options: dhcpFixedAddressInheritanceSourcesDhcpOptionsToTerraform(struct!.dhcpOptions),
    header_option_filename: dhcpFixedAddressInheritanceSourcesHeaderOptionFilenameToTerraform(struct!.headerOptionFilename),
    header_option_server_address: dhcpFixedAddressInheritanceSourcesHeaderOptionServerAddressToTerraform(struct!.headerOptionServerAddress),
    header_option_server_name: dhcpFixedAddressInheritanceSourcesHeaderOptionServerNameToTerraform(struct!.headerOptionServerName),
  }
}


export function dhcpFixedAddressInheritanceSourcesToHclTerraform(struct?: DhcpFixedAddressInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp_options: {
      value: dhcpFixedAddressInheritanceSourcesDhcpOptionsToHclTerraform(struct!.dhcpOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpFixedAddressInheritanceSourcesDhcpOptions",
    },
    header_option_filename: {
      value: dhcpFixedAddressInheritanceSourcesHeaderOptionFilenameToHclTerraform(struct!.headerOptionFilename),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpFixedAddressInheritanceSourcesHeaderOptionFilename",
    },
    header_option_server_address: {
      value: dhcpFixedAddressInheritanceSourcesHeaderOptionServerAddressToHclTerraform(struct!.headerOptionServerAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpFixedAddressInheritanceSourcesHeaderOptionServerAddress",
    },
    header_option_server_name: {
      value: dhcpFixedAddressInheritanceSourcesHeaderOptionServerNameToHclTerraform(struct!.headerOptionServerName),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpFixedAddressInheritanceSourcesHeaderOptionServerName",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpFixedAddressInheritanceSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpFixedAddressInheritanceSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpOptions = this._dhcpOptions?.internalValue;
    }
    if (this._headerOptionFilename?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerOptionFilename = this._headerOptionFilename?.internalValue;
    }
    if (this._headerOptionServerAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerOptionServerAddress = this._headerOptionServerAddress?.internalValue;
    }
    if (this._headerOptionServerName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerOptionServerName = this._headerOptionServerName?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpFixedAddressInheritanceSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcpOptions.internalValue = undefined;
      this._headerOptionFilename.internalValue = undefined;
      this._headerOptionServerAddress.internalValue = undefined;
      this._headerOptionServerName.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcpOptions.internalValue = value.dhcpOptions;
      this._headerOptionFilename.internalValue = value.headerOptionFilename;
      this._headerOptionServerAddress.internalValue = value.headerOptionServerAddress;
      this._headerOptionServerName.internalValue = value.headerOptionServerName;
    }
  }

  // dhcp_options - computed: true, optional: true, required: false
  private _dhcpOptions = new DhcpFixedAddressInheritanceSourcesDhcpOptionsOutputReference(this, "dhcp_options");
  public get dhcpOptions() {
    return this._dhcpOptions;
  }
  public putDhcpOptions(value: DhcpFixedAddressInheritanceSourcesDhcpOptions) {
    this._dhcpOptions.internalValue = value;
  }
  public resetDhcpOptions() {
    this._dhcpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsInput() {
    return this._dhcpOptions.internalValue;
  }

  // header_option_filename - computed: true, optional: true, required: false
  private _headerOptionFilename = new DhcpFixedAddressInheritanceSourcesHeaderOptionFilenameOutputReference(this, "header_option_filename");
  public get headerOptionFilename() {
    return this._headerOptionFilename;
  }
  public putHeaderOptionFilename(value: DhcpFixedAddressInheritanceSourcesHeaderOptionFilename) {
    this._headerOptionFilename.internalValue = value;
  }
  public resetHeaderOptionFilename() {
    this._headerOptionFilename.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionFilenameInput() {
    return this._headerOptionFilename.internalValue;
  }

  // header_option_server_address - computed: true, optional: true, required: false
  private _headerOptionServerAddress = new DhcpFixedAddressInheritanceSourcesHeaderOptionServerAddressOutputReference(this, "header_option_server_address");
  public get headerOptionServerAddress() {
    return this._headerOptionServerAddress;
  }
  public putHeaderOptionServerAddress(value: DhcpFixedAddressInheritanceSourcesHeaderOptionServerAddress) {
    this._headerOptionServerAddress.internalValue = value;
  }
  public resetHeaderOptionServerAddress() {
    this._headerOptionServerAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionServerAddressInput() {
    return this._headerOptionServerAddress.internalValue;
  }

  // header_option_server_name - computed: true, optional: true, required: false
  private _headerOptionServerName = new DhcpFixedAddressInheritanceSourcesHeaderOptionServerNameOutputReference(this, "header_option_server_name");
  public get headerOptionServerName() {
    return this._headerOptionServerName;
  }
  public putHeaderOptionServerName(value: DhcpFixedAddressInheritanceSourcesHeaderOptionServerName) {
    this._headerOptionServerName.internalValue = value;
  }
  public resetHeaderOptionServerName() {
    this._headerOptionServerName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionServerNameInput() {
    return this._headerOptionServerName.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address bloxone_dhcp_fixed_address}
*/
export class DhcpFixedAddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_dhcp_fixed_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DhcpFixedAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DhcpFixedAddress to import
  * @param importFromId The id of the existing DhcpFixedAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DhcpFixedAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_dhcp_fixed_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_fixed_address bloxone_dhcp_fixed_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DhcpFixedAddressConfig
  */
  public constructor(scope: Construct, id: string, config: DhcpFixedAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'bloxone_dhcp_fixed_address',
      terraformGeneratorMetadata: {
        providerName: 'bloxone',
        providerVersion: '1.5.4',
        providerVersionConstraint: '1.5.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._comment = config.comment;
    this._dhcpOptions.internalValue = config.dhcpOptions;
    this._disableDhcp = config.disableDhcp;
    this._headerOptionFilename = config.headerOptionFilename;
    this._headerOptionServerAddress = config.headerOptionServerAddress;
    this._headerOptionServerName = config.headerOptionServerName;
    this._hostname = config.hostname;
    this._inheritanceParent = config.inheritanceParent;
    this._inheritanceSources.internalValue = config.inheritanceSources;
    this._ipSpace = config.ipSpace;
    this._matchType = config.matchType;
    this._matchValue = config.matchValue;
    this._name = config.name;
    this._nextAvailableId = config.nextAvailableId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dhcp_options - computed: false, optional: true, required: false
  private _dhcpOptions = new DhcpFixedAddressDhcpOptionsList(this, "dhcp_options", false);
  public get dhcpOptions() {
    return this._dhcpOptions;
  }
  public putDhcpOptions(value: DhcpFixedAddressDhcpOptions[] | cdktf.IResolvable) {
    this._dhcpOptions.internalValue = value;
  }
  public resetDhcpOptions() {
    this._dhcpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsInput() {
    return this._dhcpOptions.internalValue;
  }

  // disable_dhcp - computed: true, optional: true, required: false
  private _disableDhcp?: boolean | cdktf.IResolvable; 
  public get disableDhcp() {
    return this.getBooleanAttribute('disable_dhcp');
  }
  public set disableDhcp(value: boolean | cdktf.IResolvable) {
    this._disableDhcp = value;
  }
  public resetDisableDhcp() {
    this._disableDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDhcpInput() {
    return this._disableDhcp;
  }

  // header_option_filename - computed: true, optional: true, required: false
  private _headerOptionFilename?: string; 
  public get headerOptionFilename() {
    return this.getStringAttribute('header_option_filename');
  }
  public set headerOptionFilename(value: string) {
    this._headerOptionFilename = value;
  }
  public resetHeaderOptionFilename() {
    this._headerOptionFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionFilenameInput() {
    return this._headerOptionFilename;
  }

  // header_option_server_address - computed: true, optional: true, required: false
  private _headerOptionServerAddress?: string; 
  public get headerOptionServerAddress() {
    return this.getStringAttribute('header_option_server_address');
  }
  public set headerOptionServerAddress(value: string) {
    this._headerOptionServerAddress = value;
  }
  public resetHeaderOptionServerAddress() {
    this._headerOptionServerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionServerAddressInput() {
    return this._headerOptionServerAddress;
  }

  // header_option_server_name - computed: true, optional: true, required: false
  private _headerOptionServerName?: string; 
  public get headerOptionServerName() {
    return this.getStringAttribute('header_option_server_name');
  }
  public set headerOptionServerName(value: string) {
    this._headerOptionServerName = value;
  }
  public resetHeaderOptionServerName() {
    this._headerOptionServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionServerNameInput() {
    return this._headerOptionServerName;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inheritance_assigned_hosts - computed: true, optional: false, required: false
  private _inheritanceAssignedHosts = new DhcpFixedAddressInheritanceAssignedHostsList(this, "inheritance_assigned_hosts", false);
  public get inheritanceAssignedHosts() {
    return this._inheritanceAssignedHosts;
  }

  // inheritance_parent - computed: true, optional: true, required: false
  private _inheritanceParent?: string; 
  public get inheritanceParent() {
    return this.getStringAttribute('inheritance_parent');
  }
  public set inheritanceParent(value: string) {
    this._inheritanceParent = value;
  }
  public resetInheritanceParent() {
    this._inheritanceParent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritanceParentInput() {
    return this._inheritanceParent;
  }

  // inheritance_sources - computed: true, optional: true, required: false
  private _inheritanceSources = new DhcpFixedAddressInheritanceSourcesOutputReference(this, "inheritance_sources");
  public get inheritanceSources() {
    return this._inheritanceSources;
  }
  public putInheritanceSources(value: DhcpFixedAddressInheritanceSources) {
    this._inheritanceSources.internalValue = value;
  }
  public resetInheritanceSources() {
    this._inheritanceSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritanceSourcesInput() {
    return this._inheritanceSources.internalValue;
  }

  // ip_space - computed: false, optional: true, required: false
  private _ipSpace?: string; 
  public get ipSpace() {
    return this.getStringAttribute('ip_space');
  }
  public set ipSpace(value: string) {
    this._ipSpace = value;
  }
  public resetIpSpace() {
    this._ipSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSpaceInput() {
    return this._ipSpace;
  }

  // match_type - computed: false, optional: false, required: true
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // match_value - computed: false, optional: false, required: true
  private _matchValue?: string; 
  public get matchValue() {
    return this.getStringAttribute('match_value');
  }
  public set matchValue(value: string) {
    this._matchValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValueInput() {
    return this._matchValue;
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

  // next_available_id - computed: false, optional: true, required: false
  private _nextAvailableId?: string; 
  public get nextAvailableId() {
    return this.getStringAttribute('next_available_id');
  }
  public set nextAvailableId(value: string) {
    this._nextAvailableId = value;
  }
  public resetNextAvailableId() {
    this._nextAvailableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextAvailableIdInput() {
    return this._nextAvailableId;
  }

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      comment: cdktf.stringToTerraform(this._comment),
      dhcp_options: cdktf.listMapper(dhcpFixedAddressDhcpOptionsToTerraform, false)(this._dhcpOptions.internalValue),
      disable_dhcp: cdktf.booleanToTerraform(this._disableDhcp),
      header_option_filename: cdktf.stringToTerraform(this._headerOptionFilename),
      header_option_server_address: cdktf.stringToTerraform(this._headerOptionServerAddress),
      header_option_server_name: cdktf.stringToTerraform(this._headerOptionServerName),
      hostname: cdktf.stringToTerraform(this._hostname),
      inheritance_parent: cdktf.stringToTerraform(this._inheritanceParent),
      inheritance_sources: dhcpFixedAddressInheritanceSourcesToTerraform(this._inheritanceSources.internalValue),
      ip_space: cdktf.stringToTerraform(this._ipSpace),
      match_type: cdktf.stringToTerraform(this._matchType),
      match_value: cdktf.stringToTerraform(this._matchValue),
      name: cdktf.stringToTerraform(this._name),
      next_available_id: cdktf.stringToTerraform(this._nextAvailableId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_options: {
        value: cdktf.listMapperHcl(dhcpFixedAddressDhcpOptionsToHclTerraform, false)(this._dhcpOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DhcpFixedAddressDhcpOptionsList",
      },
      disable_dhcp: {
        value: cdktf.booleanToHclTerraform(this._disableDhcp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      header_option_filename: {
        value: cdktf.stringToHclTerraform(this._headerOptionFilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_option_server_address: {
        value: cdktf.stringToHclTerraform(this._headerOptionServerAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_option_server_name: {
        value: cdktf.stringToHclTerraform(this._headerOptionServerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inheritance_parent: {
        value: cdktf.stringToHclTerraform(this._inheritanceParent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inheritance_sources: {
        value: dhcpFixedAddressInheritanceSourcesToHclTerraform(this._inheritanceSources.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DhcpFixedAddressInheritanceSources",
      },
      ip_space: {
        value: cdktf.stringToHclTerraform(this._ipSpace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_type: {
        value: cdktf.stringToHclTerraform(this._matchType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_value: {
        value: cdktf.stringToHclTerraform(this._matchValue),
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
      next_available_id: {
        value: cdktf.stringToHclTerraform(this._nextAvailableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
