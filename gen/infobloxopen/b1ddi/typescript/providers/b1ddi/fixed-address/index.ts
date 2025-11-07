// https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FixedAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * The reserved address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#address FixedAddress#address}
  */
  readonly address: string;
  /**
  * The description for the fixed address. May contain 0 to 1024 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#comment FixedAddress#comment}
  */
  readonly comment?: string;
  /**
  * The configuration for header option filename field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#header_option_filename FixedAddress#header_option_filename}
  */
  readonly headerOptionFilename?: string;
  /**
  * The configuration for header option server address field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#header_option_server_address FixedAddress#header_option_server_address}
  */
  readonly headerOptionServerAddress?: string;
  /**
  * The configuration for header option server name field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#header_option_server_name FixedAddress#header_option_server_name}
  */
  readonly headerOptionServerName?: string;
  /**
  * The DHCP host name associated with this fixed address. It is of FQDN type and it defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#hostname FixedAddress#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#id FixedAddress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#inheritance_parent FixedAddress#inheritance_parent}
  */
  readonly inheritanceParent?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#ip_space FixedAddress#ip_space}
  */
  readonly ipSpace?: string;
  /**
  * Indicates how to match the client:
  *  * _mac_: match the client MAC address,
  *  * _client_text_ or _client_hex_: match the client identifier,
  *  * _relay_text_ or _relay_hex_: match the circuit ID or remote ID in the DHCP relay agent option (82).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#match_type FixedAddress#match_type}
  */
  readonly matchType: string;
  /**
  * The value to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#match_value FixedAddress#match_value}
  */
  readonly matchValue: string;
  /**
  * The name of the fixed address. May contain 1 to 256 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#name FixedAddress#name}
  */
  readonly name?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#parent FixedAddress#parent}
  */
  readonly parent?: string;
  /**
  * The tags for the fixed address in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#tags FixedAddress#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * dhcp_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#dhcp_options FixedAddress#dhcp_options}
  */
  readonly dhcpOptions?: FixedAddressDhcpOptions[] | cdktf.IResolvable;
  /**
  * inheritance_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#inheritance_sources FixedAddress#inheritance_sources}
  */
  readonly inheritanceSources?: FixedAddressInheritanceSources;
}
export interface FixedAddressInheritanceAssignedHosts {
}

export function fixedAddressInheritanceAssignedHostsToTerraform(struct?: FixedAddressInheritanceAssignedHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fixedAddressInheritanceAssignedHostsToHclTerraform(struct?: FixedAddressInheritanceAssignedHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FixedAddressInheritanceAssignedHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FixedAddressInheritanceAssignedHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FixedAddressInheritanceAssignedHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // ophid - computed: true, optional: false, required: false
  public get ophid() {
    return this.getStringAttribute('ophid');
  }
}

export class FixedAddressInheritanceAssignedHostsList extends cdktf.ComplexList {

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
  public get(index: number): FixedAddressInheritanceAssignedHostsOutputReference {
    return new FixedAddressInheritanceAssignedHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FixedAddressDhcpOptions {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#group FixedAddress#group}
  */
  readonly group?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#option_code FixedAddress#option_code}
  */
  readonly optionCode?: string;
  /**
  * The option value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#option_value FixedAddress#option_value}
  */
  readonly optionValue?: string;
  /**
  * The type of item.
  * 
  * Valid values are:
  * * _group_
  * * _option_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#type FixedAddress#type}
  */
  readonly type?: string;
}

export function fixedAddressDhcpOptionsToTerraform(struct?: FixedAddressDhcpOptions | cdktf.IResolvable): any {
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


export function fixedAddressDhcpOptionsToHclTerraform(struct?: FixedAddressDhcpOptions | cdktf.IResolvable): any {
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

export class FixedAddressDhcpOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FixedAddressDhcpOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FixedAddressDhcpOptions | cdktf.IResolvable | undefined) {
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

  // option_value - computed: false, optional: true, required: false
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

export class FixedAddressDhcpOptionsList extends cdktf.ComplexList {
  public internalValue? : FixedAddressDhcpOptions[] | cdktf.IResolvable

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
  public get(index: number): FixedAddressDhcpOptionsOutputReference {
    return new FixedAddressDhcpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FixedAddressInheritanceSourcesDhcpOptionsValueValue {
}

export function fixedAddressInheritanceSourcesDhcpOptionsValueValueToTerraform(struct?: FixedAddressInheritanceSourcesDhcpOptionsValueValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fixedAddressInheritanceSourcesDhcpOptionsValueValueToHclTerraform(struct?: FixedAddressInheritanceSourcesDhcpOptionsValueValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FixedAddressInheritanceSourcesDhcpOptionsValueValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FixedAddressInheritanceSourcesDhcpOptionsValueValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FixedAddressInheritanceSourcesDhcpOptionsValueValue | undefined) {
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

export class FixedAddressInheritanceSourcesDhcpOptionsValueValueList extends cdktf.ComplexList {

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
  public get(index: number): FixedAddressInheritanceSourcesDhcpOptionsValueValueOutputReference {
    return new FixedAddressInheritanceSourcesDhcpOptionsValueValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FixedAddressInheritanceSourcesDhcpOptionsValue {
  /**
  * The inheritance setting.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _block_: Don't use the inherited value.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#action FixedAddress#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#source FixedAddress#source}
  */
  readonly source?: string;
}

export function fixedAddressInheritanceSourcesDhcpOptionsValueToTerraform(struct?: FixedAddressInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function fixedAddressInheritanceSourcesDhcpOptionsValueToHclTerraform(struct?: FixedAddressInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FixedAddressInheritanceSourcesDhcpOptionsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FixedAddressInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FixedAddressInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._source = value.source;
    }
  }

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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  private _value = new FixedAddressInheritanceSourcesDhcpOptionsValueValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class FixedAddressInheritanceSourcesDhcpOptionsValueList extends cdktf.ComplexList {
  public internalValue? : FixedAddressInheritanceSourcesDhcpOptionsValue[] | cdktf.IResolvable

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
  public get(index: number): FixedAddressInheritanceSourcesDhcpOptionsValueOutputReference {
    return new FixedAddressInheritanceSourcesDhcpOptionsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FixedAddressInheritanceSourcesDhcpOptions {
  /**
  * The inheritance setting.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _block_: Don't use the inherited value.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#action FixedAddress#action}
  */
  readonly action?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#value FixedAddress#value}
  */
  readonly value?: FixedAddressInheritanceSourcesDhcpOptionsValue[] | cdktf.IResolvable;
}

export function fixedAddressInheritanceSourcesDhcpOptionsToTerraform(struct?: FixedAddressInheritanceSourcesDhcpOptionsOutputReference | FixedAddressInheritanceSourcesDhcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    value: cdktf.listMapper(fixedAddressInheritanceSourcesDhcpOptionsValueToTerraform, true)(struct!.value),
  }
}


export function fixedAddressInheritanceSourcesDhcpOptionsToHclTerraform(struct?: FixedAddressInheritanceSourcesDhcpOptionsOutputReference | FixedAddressInheritanceSourcesDhcpOptions): any {
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
      value: cdktf.listMapperHcl(fixedAddressInheritanceSourcesDhcpOptionsValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "FixedAddressInheritanceSourcesDhcpOptionsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FixedAddressInheritanceSourcesDhcpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FixedAddressInheritanceSourcesDhcpOptions | undefined {
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

  public set internalValue(value: FixedAddressInheritanceSourcesDhcpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._value.internalValue = value.value;
    }
  }

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

  // value - computed: false, optional: true, required: false
  private _value = new FixedAddressInheritanceSourcesDhcpOptionsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: FixedAddressInheritanceSourcesDhcpOptionsValue[] | cdktf.IResolvable) {
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
export interface FixedAddressInheritanceSourcesHeaderOptionFilename {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#action FixedAddress#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#source FixedAddress#source}
  */
  readonly source?: string;
}

export function fixedAddressInheritanceSourcesHeaderOptionFilenameToTerraform(struct?: FixedAddressInheritanceSourcesHeaderOptionFilenameOutputReference | FixedAddressInheritanceSourcesHeaderOptionFilename): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function fixedAddressInheritanceSourcesHeaderOptionFilenameToHclTerraform(struct?: FixedAddressInheritanceSourcesHeaderOptionFilenameOutputReference | FixedAddressInheritanceSourcesHeaderOptionFilename): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FixedAddressInheritanceSourcesHeaderOptionFilenameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FixedAddressInheritanceSourcesHeaderOptionFilename | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FixedAddressInheritanceSourcesHeaderOptionFilename | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._source = value.source;
    }
  }

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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface FixedAddressInheritanceSourcesHeaderOptionServerAddress {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#action FixedAddress#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#source FixedAddress#source}
  */
  readonly source?: string;
}

export function fixedAddressInheritanceSourcesHeaderOptionServerAddressToTerraform(struct?: FixedAddressInheritanceSourcesHeaderOptionServerAddressOutputReference | FixedAddressInheritanceSourcesHeaderOptionServerAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function fixedAddressInheritanceSourcesHeaderOptionServerAddressToHclTerraform(struct?: FixedAddressInheritanceSourcesHeaderOptionServerAddressOutputReference | FixedAddressInheritanceSourcesHeaderOptionServerAddress): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FixedAddressInheritanceSourcesHeaderOptionServerAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FixedAddressInheritanceSourcesHeaderOptionServerAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FixedAddressInheritanceSourcesHeaderOptionServerAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._source = value.source;
    }
  }

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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface FixedAddressInheritanceSourcesHeaderOptionServerName {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#action FixedAddress#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#source FixedAddress#source}
  */
  readonly source?: string;
}

export function fixedAddressInheritanceSourcesHeaderOptionServerNameToTerraform(struct?: FixedAddressInheritanceSourcesHeaderOptionServerNameOutputReference | FixedAddressInheritanceSourcesHeaderOptionServerName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function fixedAddressInheritanceSourcesHeaderOptionServerNameToHclTerraform(struct?: FixedAddressInheritanceSourcesHeaderOptionServerNameOutputReference | FixedAddressInheritanceSourcesHeaderOptionServerName): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FixedAddressInheritanceSourcesHeaderOptionServerNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FixedAddressInheritanceSourcesHeaderOptionServerName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FixedAddressInheritanceSourcesHeaderOptionServerName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._source = value.source;
    }
  }

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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface FixedAddressInheritanceSources {
  /**
  * dhcp_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#dhcp_options FixedAddress#dhcp_options}
  */
  readonly dhcpOptions?: FixedAddressInheritanceSourcesDhcpOptions;
  /**
  * header_option_filename block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#header_option_filename FixedAddress#header_option_filename}
  */
  readonly headerOptionFilename?: FixedAddressInheritanceSourcesHeaderOptionFilename;
  /**
  * header_option_server_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#header_option_server_address FixedAddress#header_option_server_address}
  */
  readonly headerOptionServerAddress?: FixedAddressInheritanceSourcesHeaderOptionServerAddress;
  /**
  * header_option_server_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#header_option_server_name FixedAddress#header_option_server_name}
  */
  readonly headerOptionServerName?: FixedAddressInheritanceSourcesHeaderOptionServerName;
}

export function fixedAddressInheritanceSourcesToTerraform(struct?: FixedAddressInheritanceSourcesOutputReference | FixedAddressInheritanceSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp_options: fixedAddressInheritanceSourcesDhcpOptionsToTerraform(struct!.dhcpOptions),
    header_option_filename: fixedAddressInheritanceSourcesHeaderOptionFilenameToTerraform(struct!.headerOptionFilename),
    header_option_server_address: fixedAddressInheritanceSourcesHeaderOptionServerAddressToTerraform(struct!.headerOptionServerAddress),
    header_option_server_name: fixedAddressInheritanceSourcesHeaderOptionServerNameToTerraform(struct!.headerOptionServerName),
  }
}


export function fixedAddressInheritanceSourcesToHclTerraform(struct?: FixedAddressInheritanceSourcesOutputReference | FixedAddressInheritanceSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp_options: {
      value: fixedAddressInheritanceSourcesDhcpOptionsToHclTerraform(struct!.dhcpOptions),
      isBlock: true,
      type: "list",
      storageClassType: "FixedAddressInheritanceSourcesDhcpOptionsList",
    },
    header_option_filename: {
      value: fixedAddressInheritanceSourcesHeaderOptionFilenameToHclTerraform(struct!.headerOptionFilename),
      isBlock: true,
      type: "list",
      storageClassType: "FixedAddressInheritanceSourcesHeaderOptionFilenameList",
    },
    header_option_server_address: {
      value: fixedAddressInheritanceSourcesHeaderOptionServerAddressToHclTerraform(struct!.headerOptionServerAddress),
      isBlock: true,
      type: "list",
      storageClassType: "FixedAddressInheritanceSourcesHeaderOptionServerAddressList",
    },
    header_option_server_name: {
      value: fixedAddressInheritanceSourcesHeaderOptionServerNameToHclTerraform(struct!.headerOptionServerName),
      isBlock: true,
      type: "list",
      storageClassType: "FixedAddressInheritanceSourcesHeaderOptionServerNameList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FixedAddressInheritanceSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FixedAddressInheritanceSources | undefined {
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

  public set internalValue(value: FixedAddressInheritanceSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dhcpOptions.internalValue = undefined;
      this._headerOptionFilename.internalValue = undefined;
      this._headerOptionServerAddress.internalValue = undefined;
      this._headerOptionServerName.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dhcpOptions.internalValue = value.dhcpOptions;
      this._headerOptionFilename.internalValue = value.headerOptionFilename;
      this._headerOptionServerAddress.internalValue = value.headerOptionServerAddress;
      this._headerOptionServerName.internalValue = value.headerOptionServerName;
    }
  }

  // dhcp_options - computed: false, optional: true, required: false
  private _dhcpOptions = new FixedAddressInheritanceSourcesDhcpOptionsOutputReference(this, "dhcp_options");
  public get dhcpOptions() {
    return this._dhcpOptions;
  }
  public putDhcpOptions(value: FixedAddressInheritanceSourcesDhcpOptions) {
    this._dhcpOptions.internalValue = value;
  }
  public resetDhcpOptions() {
    this._dhcpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsInput() {
    return this._dhcpOptions.internalValue;
  }

  // header_option_filename - computed: false, optional: true, required: false
  private _headerOptionFilename = new FixedAddressInheritanceSourcesHeaderOptionFilenameOutputReference(this, "header_option_filename");
  public get headerOptionFilename() {
    return this._headerOptionFilename;
  }
  public putHeaderOptionFilename(value: FixedAddressInheritanceSourcesHeaderOptionFilename) {
    this._headerOptionFilename.internalValue = value;
  }
  public resetHeaderOptionFilename() {
    this._headerOptionFilename.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionFilenameInput() {
    return this._headerOptionFilename.internalValue;
  }

  // header_option_server_address - computed: false, optional: true, required: false
  private _headerOptionServerAddress = new FixedAddressInheritanceSourcesHeaderOptionServerAddressOutputReference(this, "header_option_server_address");
  public get headerOptionServerAddress() {
    return this._headerOptionServerAddress;
  }
  public putHeaderOptionServerAddress(value: FixedAddressInheritanceSourcesHeaderOptionServerAddress) {
    this._headerOptionServerAddress.internalValue = value;
  }
  public resetHeaderOptionServerAddress() {
    this._headerOptionServerAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionServerAddressInput() {
    return this._headerOptionServerAddress.internalValue;
  }

  // header_option_server_name - computed: false, optional: true, required: false
  private _headerOptionServerName = new FixedAddressInheritanceSourcesHeaderOptionServerNameOutputReference(this, "header_option_server_name");
  public get headerOptionServerName() {
    return this._headerOptionServerName;
  }
  public putHeaderOptionServerName(value: FixedAddressInheritanceSourcesHeaderOptionServerName) {
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
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address b1ddi_fixed_address}
*/
export class FixedAddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "b1ddi_fixed_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FixedAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FixedAddress to import
  * @param importFromId The id of the existing FixedAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FixedAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "b1ddi_fixed_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/fixed_address b1ddi_fixed_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FixedAddressConfig
  */
  public constructor(scope: Construct, id: string, config: FixedAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'b1ddi_fixed_address',
      terraformGeneratorMetadata: {
        providerName: 'b1ddi',
        providerVersion: '0.1.5'
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
    this._headerOptionFilename = config.headerOptionFilename;
    this._headerOptionServerAddress = config.headerOptionServerAddress;
    this._headerOptionServerName = config.headerOptionServerName;
    this._hostname = config.hostname;
    this._id = config.id;
    this._inheritanceParent = config.inheritanceParent;
    this._ipSpace = config.ipSpace;
    this._matchType = config.matchType;
    this._matchValue = config.matchValue;
    this._name = config.name;
    this._parent = config.parent;
    this._tags = config.tags;
    this._dhcpOptions.internalValue = config.dhcpOptions;
    this._inheritanceSources.internalValue = config.inheritanceSources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // comment - computed: false, optional: true, required: false
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // header_option_filename - computed: false, optional: true, required: false
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

  // header_option_server_address - computed: false, optional: true, required: false
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

  // header_option_server_name - computed: false, optional: true, required: false
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

  // hostname - computed: false, optional: true, required: false
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

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // inheritance_assigned_hosts - computed: true, optional: false, required: false
  private _inheritanceAssignedHosts = new FixedAddressInheritanceAssignedHostsList(this, "inheritance_assigned_hosts", false);
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

  // parent - computed: true, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // tags - computed: false, optional: true, required: false
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // dhcp_options - computed: false, optional: true, required: false
  private _dhcpOptions = new FixedAddressDhcpOptionsList(this, "dhcp_options", false);
  public get dhcpOptions() {
    return this._dhcpOptions;
  }
  public putDhcpOptions(value: FixedAddressDhcpOptions[] | cdktf.IResolvable) {
    this._dhcpOptions.internalValue = value;
  }
  public resetDhcpOptions() {
    this._dhcpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsInput() {
    return this._dhcpOptions.internalValue;
  }

  // inheritance_sources - computed: false, optional: true, required: false
  private _inheritanceSources = new FixedAddressInheritanceSourcesOutputReference(this, "inheritance_sources");
  public get inheritanceSources() {
    return this._inheritanceSources;
  }
  public putInheritanceSources(value: FixedAddressInheritanceSources) {
    this._inheritanceSources.internalValue = value;
  }
  public resetInheritanceSources() {
    this._inheritanceSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritanceSourcesInput() {
    return this._inheritanceSources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      comment: cdktf.stringToTerraform(this._comment),
      header_option_filename: cdktf.stringToTerraform(this._headerOptionFilename),
      header_option_server_address: cdktf.stringToTerraform(this._headerOptionServerAddress),
      header_option_server_name: cdktf.stringToTerraform(this._headerOptionServerName),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      inheritance_parent: cdktf.stringToTerraform(this._inheritanceParent),
      ip_space: cdktf.stringToTerraform(this._ipSpace),
      match_type: cdktf.stringToTerraform(this._matchType),
      match_value: cdktf.stringToTerraform(this._matchValue),
      name: cdktf.stringToTerraform(this._name),
      parent: cdktf.stringToTerraform(this._parent),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      dhcp_options: cdktf.listMapper(fixedAddressDhcpOptionsToTerraform, true)(this._dhcpOptions.internalValue),
      inheritance_sources: fixedAddressInheritanceSourcesToTerraform(this._inheritanceSources.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
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
      dhcp_options: {
        value: cdktf.listMapperHcl(fixedAddressDhcpOptionsToHclTerraform, true)(this._dhcpOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FixedAddressDhcpOptionsList",
      },
      inheritance_sources: {
        value: fixedAddressInheritanceSourcesToHclTerraform(this._inheritanceSources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FixedAddressInheritanceSourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
