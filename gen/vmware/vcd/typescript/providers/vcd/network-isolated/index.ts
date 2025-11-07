// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_isolated
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkIsolatedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional description for the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_isolated#description NetworkIsolated#description}
  */
  readonly description?: string;
  /**
  * First DNS server to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_isolated#dns1 NetworkIsolated#dns1}
  */
  readonly dns1?: string;
  /**
  * Second DNS server to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_isolated#dns2 NetworkIsolated#dns2}
  */
  readonly dns2?: string;
  /**
  * A FQDN for the virtual machines on this network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_isolated#dns_suffix NetworkIsolated#dns_suffix}
  */
  readonly dnsSuffix?: string;
  /**
  * The gateway for this network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_isolated#gateway NetworkIsolated#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_isolated#id NetworkIsolated#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key value map of metadata to assign to this network. Key and value can be any string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_isolated#metadata NetworkIsolated#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * A unique name for this network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_isolated#name NetworkIsolated#name}
  */
  readonly name: string;
  /**
  * The netmask for the new network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_isolated#netmask NetworkIsolated#netmask}
  */
  readonly netmask?: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_isolated#org NetworkIsolated#org}
  */
  readonly org?: string;
  /**
  * Defines if this network is shared between multiple VDCs in the Org
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_isolated#shared NetworkIsolated#shared}
  */
  readonly shared?: boolean | cdktf.IResolvable;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_isolated#vdc NetworkIsolated#vdc}
  */
  readonly vdc?: string;
  /**
  * dhcp_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_isolated#dhcp_pool NetworkIsolated#dhcp_pool}
  */
  readonly dhcpPool?: NetworkIsolatedDhcpPool[] | cdktf.IResolvable;
  /**
  * metadata_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_isolated#metadata_entry NetworkIsolated#metadata_entry}
  */
  readonly metadataEntry?: NetworkIsolatedMetadataEntry[] | cdktf.IResolvable;
  /**
  * static_ip_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_isolated#static_ip_pool NetworkIsolated#static_ip_pool}
  */
  readonly staticIpPool?: NetworkIsolatedStaticIpPool[] | cdktf.IResolvable;
}
export interface NetworkIsolatedDhcpPool {
  /**
  * The default DHCP lease time to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_isolated#default_lease_time NetworkIsolated#default_lease_time}
  */
  readonly defaultLeaseTime?: number;
  /**
  * The final address in the IP Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_isolated#end_address NetworkIsolated#end_address}
  */
  readonly endAddress: string;
  /**
  * The maximum DHCP lease time to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_isolated#max_lease_time NetworkIsolated#max_lease_time}
  */
  readonly maxLeaseTime?: number;
  /**
  * The first address in the IP Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_isolated#start_address NetworkIsolated#start_address}
  */
  readonly startAddress: string;
}

export function networkIsolatedDhcpPoolToTerraform(struct?: NetworkIsolatedDhcpPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_lease_time: cdktf.numberToTerraform(struct!.defaultLeaseTime),
    end_address: cdktf.stringToTerraform(struct!.endAddress),
    max_lease_time: cdktf.numberToTerraform(struct!.maxLeaseTime),
    start_address: cdktf.stringToTerraform(struct!.startAddress),
  }
}


export function networkIsolatedDhcpPoolToHclTerraform(struct?: NetworkIsolatedDhcpPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_lease_time: {
      value: cdktf.numberToHclTerraform(struct!.defaultLeaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_address: {
      value: cdktf.stringToHclTerraform(struct!.endAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_lease_time: {
      value: cdktf.numberToHclTerraform(struct!.maxLeaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_address: {
      value: cdktf.stringToHclTerraform(struct!.startAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkIsolatedDhcpPoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkIsolatedDhcpPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultLeaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLeaseTime = this._defaultLeaseTime;
    }
    if (this._endAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.endAddress = this._endAddress;
    }
    if (this._maxLeaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLeaseTime = this._maxLeaseTime;
    }
    if (this._startAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.startAddress = this._startAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkIsolatedDhcpPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultLeaseTime = undefined;
      this._endAddress = undefined;
      this._maxLeaseTime = undefined;
      this._startAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultLeaseTime = value.defaultLeaseTime;
      this._endAddress = value.endAddress;
      this._maxLeaseTime = value.maxLeaseTime;
      this._startAddress = value.startAddress;
    }
  }

  // default_lease_time - computed: false, optional: true, required: false
  private _defaultLeaseTime?: number; 
  public get defaultLeaseTime() {
    return this.getNumberAttribute('default_lease_time');
  }
  public set defaultLeaseTime(value: number) {
    this._defaultLeaseTime = value;
  }
  public resetDefaultLeaseTime() {
    this._defaultLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLeaseTimeInput() {
    return this._defaultLeaseTime;
  }

  // end_address - computed: false, optional: false, required: true
  private _endAddress?: string; 
  public get endAddress() {
    return this.getStringAttribute('end_address');
  }
  public set endAddress(value: string) {
    this._endAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endAddressInput() {
    return this._endAddress;
  }

  // max_lease_time - computed: false, optional: true, required: false
  private _maxLeaseTime?: number; 
  public get maxLeaseTime() {
    return this.getNumberAttribute('max_lease_time');
  }
  public set maxLeaseTime(value: number) {
    this._maxLeaseTime = value;
  }
  public resetMaxLeaseTime() {
    this._maxLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLeaseTimeInput() {
    return this._maxLeaseTime;
  }

  // start_address - computed: false, optional: false, required: true
  private _startAddress?: string; 
  public get startAddress() {
    return this.getStringAttribute('start_address');
  }
  public set startAddress(value: string) {
    this._startAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startAddressInput() {
    return this._startAddress;
  }
}

export class NetworkIsolatedDhcpPoolList extends cdktf.ComplexList {
  public internalValue? : NetworkIsolatedDhcpPool[] | cdktf.IResolvable

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
  public get(index: number): NetworkIsolatedDhcpPoolOutputReference {
    return new NetworkIsolatedDhcpPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkIsolatedMetadataEntry {
  /**
  * Domain for this metadata entry. true, if it belongs to SYSTEM. false, if it belongs to GENERAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_isolated#is_system NetworkIsolated#is_system}
  */
  readonly isSystem?: boolean | cdktf.IResolvable;
  /**
  * Key of this metadata entry. Required if the metadata entry is not empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_isolated#key NetworkIsolated#key}
  */
  readonly key?: string;
  /**
  * Type of this metadata entry. One of: 'MetadataStringValue', 'MetadataNumberValue', 'MetadataBooleanValue', 'MetadataDateTimeValue'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_isolated#type NetworkIsolated#type}
  */
  readonly type?: string;
  /**
  * User access level for this metadata entry. One of: 'READWRITE', 'READONLY', 'PRIVATE'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_isolated#user_access NetworkIsolated#user_access}
  */
  readonly userAccess?: string;
  /**
  * Value of this metadata entry. Required if the metadata entry is not empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_isolated#value NetworkIsolated#value}
  */
  readonly value?: string;
}

export function networkIsolatedMetadataEntryToTerraform(struct?: NetworkIsolatedMetadataEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_system: cdktf.booleanToTerraform(struct!.isSystem),
    key: cdktf.stringToTerraform(struct!.key),
    type: cdktf.stringToTerraform(struct!.type),
    user_access: cdktf.stringToTerraform(struct!.userAccess),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function networkIsolatedMetadataEntryToHclTerraform(struct?: NetworkIsolatedMetadataEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_system: {
      value: cdktf.booleanToHclTerraform(struct!.isSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    user_access: {
      value: cdktf.stringToHclTerraform(struct!.userAccess),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkIsolatedMetadataEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkIsolatedMetadataEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSystem = this._isSystem;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAccess = this._userAccess;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkIsolatedMetadataEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isSystem = undefined;
      this._key = undefined;
      this._type = undefined;
      this._userAccess = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isSystem = value.isSystem;
      this._key = value.key;
      this._type = value.type;
      this._userAccess = value.userAccess;
      this._value = value.value;
    }
  }

  // is_system - computed: false, optional: true, required: false
  private _isSystem?: boolean | cdktf.IResolvable; 
  public get isSystem() {
    return this.getBooleanAttribute('is_system');
  }
  public set isSystem(value: boolean | cdktf.IResolvable) {
    this._isSystem = value;
  }
  public resetIsSystem() {
    this._isSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSystemInput() {
    return this._isSystem;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // user_access - computed: false, optional: true, required: false
  private _userAccess?: string; 
  public get userAccess() {
    return this.getStringAttribute('user_access');
  }
  public set userAccess(value: string) {
    this._userAccess = value;
  }
  public resetUserAccess() {
    this._userAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAccessInput() {
    return this._userAccess;
  }

  // value - computed: false, optional: true, required: false
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
}

export class NetworkIsolatedMetadataEntryList extends cdktf.ComplexList {
  public internalValue? : NetworkIsolatedMetadataEntry[] | cdktf.IResolvable

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
  public get(index: number): NetworkIsolatedMetadataEntryOutputReference {
    return new NetworkIsolatedMetadataEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkIsolatedStaticIpPool {
  /**
  * The final address in the IP Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_isolated#end_address NetworkIsolated#end_address}
  */
  readonly endAddress: string;
  /**
  * The first address in the IP Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_isolated#start_address NetworkIsolated#start_address}
  */
  readonly startAddress: string;
}

export function networkIsolatedStaticIpPoolToTerraform(struct?: NetworkIsolatedStaticIpPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_address: cdktf.stringToTerraform(struct!.endAddress),
    start_address: cdktf.stringToTerraform(struct!.startAddress),
  }
}


export function networkIsolatedStaticIpPoolToHclTerraform(struct?: NetworkIsolatedStaticIpPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_address: {
      value: cdktf.stringToHclTerraform(struct!.endAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_address: {
      value: cdktf.stringToHclTerraform(struct!.startAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkIsolatedStaticIpPoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkIsolatedStaticIpPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.endAddress = this._endAddress;
    }
    if (this._startAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.startAddress = this._startAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkIsolatedStaticIpPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endAddress = undefined;
      this._startAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endAddress = value.endAddress;
      this._startAddress = value.startAddress;
    }
  }

  // end_address - computed: false, optional: false, required: true
  private _endAddress?: string; 
  public get endAddress() {
    return this.getStringAttribute('end_address');
  }
  public set endAddress(value: string) {
    this._endAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endAddressInput() {
    return this._endAddress;
  }

  // start_address - computed: false, optional: false, required: true
  private _startAddress?: string; 
  public get startAddress() {
    return this.getStringAttribute('start_address');
  }
  public set startAddress(value: string) {
    this._startAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startAddressInput() {
    return this._startAddress;
  }
}

export class NetworkIsolatedStaticIpPoolList extends cdktf.ComplexList {
  public internalValue? : NetworkIsolatedStaticIpPool[] | cdktf.IResolvable

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
  public get(index: number): NetworkIsolatedStaticIpPoolOutputReference {
    return new NetworkIsolatedStaticIpPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_isolated vcd_network_isolated}
*/
export class NetworkIsolated extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_network_isolated";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkIsolated resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkIsolated to import
  * @param importFromId The id of the existing NetworkIsolated that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_isolated#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkIsolated to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_network_isolated", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/network_isolated vcd_network_isolated} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkIsolatedConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkIsolatedConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_network_isolated',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
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
    this._dns1 = config.dns1;
    this._dns2 = config.dns2;
    this._dnsSuffix = config.dnsSuffix;
    this._gateway = config.gateway;
    this._id = config.id;
    this._metadata = config.metadata;
    this._name = config.name;
    this._netmask = config.netmask;
    this._org = config.org;
    this._shared = config.shared;
    this._vdc = config.vdc;
    this._dhcpPool.internalValue = config.dhcpPool;
    this._metadataEntry.internalValue = config.metadataEntry;
    this._staticIpPool.internalValue = config.staticIpPool;
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

  // dns1 - computed: false, optional: true, required: false
  private _dns1?: string; 
  public get dns1() {
    return this.getStringAttribute('dns1');
  }
  public set dns1(value: string) {
    this._dns1 = value;
  }
  public resetDns1() {
    this._dns1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dns1Input() {
    return this._dns1;
  }

  // dns2 - computed: false, optional: true, required: false
  private _dns2?: string; 
  public get dns2() {
    return this.getStringAttribute('dns2');
  }
  public set dns2(value: string) {
    this._dns2 = value;
  }
  public resetDns2() {
    this._dns2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dns2Input() {
    return this._dns2;
  }

  // dns_suffix - computed: false, optional: true, required: false
  private _dnsSuffix?: string; 
  public get dnsSuffix() {
    return this.getStringAttribute('dns_suffix');
  }
  public set dnsSuffix(value: string) {
    this._dnsSuffix = value;
  }
  public resetDnsSuffix() {
    this._dnsSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSuffixInput() {
    return this._dnsSuffix;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
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

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // netmask - computed: false, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: boolean | cdktf.IResolvable; 
  public get shared() {
    return this.getBooleanAttribute('shared');
  }
  public set shared(value: boolean | cdktf.IResolvable) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // vdc - computed: false, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // dhcp_pool - computed: false, optional: true, required: false
  private _dhcpPool = new NetworkIsolatedDhcpPoolList(this, "dhcp_pool", true);
  public get dhcpPool() {
    return this._dhcpPool;
  }
  public putDhcpPool(value: NetworkIsolatedDhcpPool[] | cdktf.IResolvable) {
    this._dhcpPool.internalValue = value;
  }
  public resetDhcpPool() {
    this._dhcpPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpPoolInput() {
    return this._dhcpPool.internalValue;
  }

  // metadata_entry - computed: false, optional: true, required: false
  private _metadataEntry = new NetworkIsolatedMetadataEntryList(this, "metadata_entry", true);
  public get metadataEntry() {
    return this._metadataEntry;
  }
  public putMetadataEntry(value: NetworkIsolatedMetadataEntry[] | cdktf.IResolvable) {
    this._metadataEntry.internalValue = value;
  }
  public resetMetadataEntry() {
    this._metadataEntry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataEntryInput() {
    return this._metadataEntry.internalValue;
  }

  // static_ip_pool - computed: false, optional: true, required: false
  private _staticIpPool = new NetworkIsolatedStaticIpPoolList(this, "static_ip_pool", true);
  public get staticIpPool() {
    return this._staticIpPool;
  }
  public putStaticIpPool(value: NetworkIsolatedStaticIpPool[] | cdktf.IResolvable) {
    this._staticIpPool.internalValue = value;
  }
  public resetStaticIpPool() {
    this._staticIpPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpPoolInput() {
    return this._staticIpPool.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      dns1: cdktf.stringToTerraform(this._dns1),
      dns2: cdktf.stringToTerraform(this._dns2),
      dns_suffix: cdktf.stringToTerraform(this._dnsSuffix),
      gateway: cdktf.stringToTerraform(this._gateway),
      id: cdktf.stringToTerraform(this._id),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      netmask: cdktf.stringToTerraform(this._netmask),
      org: cdktf.stringToTerraform(this._org),
      shared: cdktf.booleanToTerraform(this._shared),
      vdc: cdktf.stringToTerraform(this._vdc),
      dhcp_pool: cdktf.listMapper(networkIsolatedDhcpPoolToTerraform, true)(this._dhcpPool.internalValue),
      metadata_entry: cdktf.listMapper(networkIsolatedMetadataEntryToTerraform, true)(this._metadataEntry.internalValue),
      static_ip_pool: cdktf.listMapper(networkIsolatedStaticIpPoolToTerraform, true)(this._staticIpPool.internalValue),
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
      dns1: {
        value: cdktf.stringToHclTerraform(this._dns1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns2: {
        value: cdktf.stringToHclTerraform(this._dns2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_suffix: {
        value: cdktf.stringToHclTerraform(this._dnsSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
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
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netmask: {
        value: cdktf.stringToHclTerraform(this._netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared: {
        value: cdktf.booleanToHclTerraform(this._shared),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_pool: {
        value: cdktf.listMapperHcl(networkIsolatedDhcpPoolToHclTerraform, true)(this._dhcpPool.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkIsolatedDhcpPoolList",
      },
      metadata_entry: {
        value: cdktf.listMapperHcl(networkIsolatedMetadataEntryToHclTerraform, true)(this._metadataEntry.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkIsolatedMetadataEntryList",
      },
      static_ip_pool: {
        value: cdktf.listMapperHcl(networkIsolatedStaticIpPoolToHclTerraform, true)(this._staticIpPool.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkIsolatedStaticIpPoolList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
