// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageContainersV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#affinity_host_ext_id StorageContainersV2#affinity_host_ext_id}
  */
  readonly affinityHostExtId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#cache_deduplication StorageContainersV2#cache_deduplication}
  */
  readonly cacheDeduplication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#cluster_ext_id StorageContainersV2#cluster_ext_id}
  */
  readonly clusterExtId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#compression_delay_secs StorageContainersV2#compression_delay_secs}
  */
  readonly compressionDelaySecs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#container_ext_id StorageContainersV2#container_ext_id}
  */
  readonly containerExtId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#erasure_code StorageContainersV2#erasure_code}
  */
  readonly erasureCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#erasure_code_delay_secs StorageContainersV2#erasure_code_delay_secs}
  */
  readonly erasureCodeDelaySecs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#ext_id StorageContainersV2#ext_id}
  */
  readonly extId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#has_higher_ec_fault_domain_preference StorageContainersV2#has_higher_ec_fault_domain_preference}
  */
  readonly hasHigherEcFaultDomainPreference?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#id StorageContainersV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#ignore_small_files StorageContainersV2#ignore_small_files}
  */
  readonly ignoreSmallFiles?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#is_compression_enabled StorageContainersV2#is_compression_enabled}
  */
  readonly isCompressionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#is_inline_ec_enabled StorageContainersV2#is_inline_ec_enabled}
  */
  readonly isInlineEcEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#is_internal StorageContainersV2#is_internal}
  */
  readonly isInternal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#is_software_encryption_enabled StorageContainersV2#is_software_encryption_enabled}
  */
  readonly isSoftwareEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#logical_advertised_capacity_bytes StorageContainersV2#logical_advertised_capacity_bytes}
  */
  readonly logicalAdvertisedCapacityBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#logical_explicit_reserved_capacity_bytes StorageContainersV2#logical_explicit_reserved_capacity_bytes}
  */
  readonly logicalExplicitReservedCapacityBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#name StorageContainersV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#on_disk_dedup StorageContainersV2#on_disk_dedup}
  */
  readonly onDiskDedup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#owner_ext_id StorageContainersV2#owner_ext_id}
  */
  readonly ownerExtId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#replication_factor StorageContainersV2#replication_factor}
  */
  readonly replicationFactor?: number;
  /**
  * nfs_whitelist_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#nfs_whitelist_addresses StorageContainersV2#nfs_whitelist_addresses}
  */
  readonly nfsWhitelistAddresses?: StorageContainersV2NfsWhitelistAddresses[] | cdktf.IResolvable;
}
export interface StorageContainersV2Links {
}

export function storageContainersV2LinksToTerraform(struct?: StorageContainersV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function storageContainersV2LinksToHclTerraform(struct?: StorageContainersV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StorageContainersV2LinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageContainersV2Links | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageContainersV2Links | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class StorageContainersV2LinksList extends cdktf.ComplexList {

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
  public get(index: number): StorageContainersV2LinksOutputReference {
    return new StorageContainersV2LinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageContainersV2NfsWhitelistAddressesFqdn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#value StorageContainersV2#value}
  */
  readonly value?: string;
}

export function storageContainersV2NfsWhitelistAddressesFqdnToTerraform(struct?: StorageContainersV2NfsWhitelistAddressesFqdn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function storageContainersV2NfsWhitelistAddressesFqdnToHclTerraform(struct?: StorageContainersV2NfsWhitelistAddressesFqdn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class StorageContainersV2NfsWhitelistAddressesFqdnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageContainersV2NfsWhitelistAddressesFqdn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageContainersV2NfsWhitelistAddressesFqdn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
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
}

export class StorageContainersV2NfsWhitelistAddressesFqdnList extends cdktf.ComplexList {
  public internalValue? : StorageContainersV2NfsWhitelistAddressesFqdn[] | cdktf.IResolvable

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
  public get(index: number): StorageContainersV2NfsWhitelistAddressesFqdnOutputReference {
    return new StorageContainersV2NfsWhitelistAddressesFqdnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageContainersV2NfsWhitelistAddressesIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#prefix_length StorageContainersV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#value StorageContainersV2#value}
  */
  readonly value?: string;
}

export function storageContainersV2NfsWhitelistAddressesIpv4ToTerraform(struct?: StorageContainersV2NfsWhitelistAddressesIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function storageContainersV2NfsWhitelistAddressesIpv4ToHclTerraform(struct?: StorageContainersV2NfsWhitelistAddressesIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class StorageContainersV2NfsWhitelistAddressesIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageContainersV2NfsWhitelistAddressesIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageContainersV2NfsWhitelistAddressesIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
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
}

export class StorageContainersV2NfsWhitelistAddressesIpv4List extends cdktf.ComplexList {
  public internalValue? : StorageContainersV2NfsWhitelistAddressesIpv4[] | cdktf.IResolvable

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
  public get(index: number): StorageContainersV2NfsWhitelistAddressesIpv4OutputReference {
    return new StorageContainersV2NfsWhitelistAddressesIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageContainersV2NfsWhitelistAddressesIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#prefix_length StorageContainersV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#value StorageContainersV2#value}
  */
  readonly value?: string;
}

export function storageContainersV2NfsWhitelistAddressesIpv6ToTerraform(struct?: StorageContainersV2NfsWhitelistAddressesIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function storageContainersV2NfsWhitelistAddressesIpv6ToHclTerraform(struct?: StorageContainersV2NfsWhitelistAddressesIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class StorageContainersV2NfsWhitelistAddressesIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageContainersV2NfsWhitelistAddressesIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageContainersV2NfsWhitelistAddressesIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
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
}

export class StorageContainersV2NfsWhitelistAddressesIpv6List extends cdktf.ComplexList {
  public internalValue? : StorageContainersV2NfsWhitelistAddressesIpv6[] | cdktf.IResolvable

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
  public get(index: number): StorageContainersV2NfsWhitelistAddressesIpv6OutputReference {
    return new StorageContainersV2NfsWhitelistAddressesIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageContainersV2NfsWhitelistAddresses {
  /**
  * fqdn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#fqdn StorageContainersV2#fqdn}
  */
  readonly fqdn?: StorageContainersV2NfsWhitelistAddressesFqdn[] | cdktf.IResolvable;
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#ipv4 StorageContainersV2#ipv4}
  */
  readonly ipv4?: StorageContainersV2NfsWhitelistAddressesIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#ipv6 StorageContainersV2#ipv6}
  */
  readonly ipv6?: StorageContainersV2NfsWhitelistAddressesIpv6[] | cdktf.IResolvable;
}

export function storageContainersV2NfsWhitelistAddressesToTerraform(struct?: StorageContainersV2NfsWhitelistAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.listMapper(storageContainersV2NfsWhitelistAddressesFqdnToTerraform, true)(struct!.fqdn),
    ipv4: cdktf.listMapper(storageContainersV2NfsWhitelistAddressesIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(storageContainersV2NfsWhitelistAddressesIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function storageContainersV2NfsWhitelistAddressesToHclTerraform(struct?: StorageContainersV2NfsWhitelistAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.listMapperHcl(storageContainersV2NfsWhitelistAddressesFqdnToHclTerraform, true)(struct!.fqdn),
      isBlock: true,
      type: "list",
      storageClassType: "StorageContainersV2NfsWhitelistAddressesFqdnList",
    },
    ipv4: {
      value: cdktf.listMapperHcl(storageContainersV2NfsWhitelistAddressesIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "StorageContainersV2NfsWhitelistAddressesIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(storageContainersV2NfsWhitelistAddressesIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "StorageContainersV2NfsWhitelistAddressesIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageContainersV2NfsWhitelistAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageContainersV2NfsWhitelistAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn?.internalValue;
    }
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageContainersV2NfsWhitelistAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn.internalValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn.internalValue = value.fqdn;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn = new StorageContainersV2NfsWhitelistAddressesFqdnList(this, "fqdn", false);
  public get fqdn() {
    return this._fqdn;
  }
  public putFqdn(value: StorageContainersV2NfsWhitelistAddressesFqdn[] | cdktf.IResolvable) {
    this._fqdn.internalValue = value;
  }
  public resetFqdn() {
    this._fqdn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn.internalValue;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new StorageContainersV2NfsWhitelistAddressesIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: StorageContainersV2NfsWhitelistAddressesIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new StorageContainersV2NfsWhitelistAddressesIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: StorageContainersV2NfsWhitelistAddressesIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class StorageContainersV2NfsWhitelistAddressesList extends cdktf.ComplexList {
  public internalValue? : StorageContainersV2NfsWhitelistAddresses[] | cdktf.IResolvable

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
  public get(index: number): StorageContainersV2NfsWhitelistAddressesOutputReference {
    return new StorageContainersV2NfsWhitelistAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2 nutanix_storage_containers_v2}
*/
export class StorageContainersV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_storage_containers_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageContainersV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageContainersV2 to import
  * @param importFromId The id of the existing StorageContainersV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageContainersV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_storage_containers_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/storage_containers_v2 nutanix_storage_containers_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageContainersV2Config
  */
  public constructor(scope: Construct, id: string, config: StorageContainersV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_storage_containers_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._affinityHostExtId = config.affinityHostExtId;
    this._cacheDeduplication = config.cacheDeduplication;
    this._clusterExtId = config.clusterExtId;
    this._compressionDelaySecs = config.compressionDelaySecs;
    this._containerExtId = config.containerExtId;
    this._erasureCode = config.erasureCode;
    this._erasureCodeDelaySecs = config.erasureCodeDelaySecs;
    this._extId = config.extId;
    this._hasHigherEcFaultDomainPreference = config.hasHigherEcFaultDomainPreference;
    this._id = config.id;
    this._ignoreSmallFiles = config.ignoreSmallFiles;
    this._isCompressionEnabled = config.isCompressionEnabled;
    this._isInlineEcEnabled = config.isInlineEcEnabled;
    this._isInternal = config.isInternal;
    this._isSoftwareEncryptionEnabled = config.isSoftwareEncryptionEnabled;
    this._logicalAdvertisedCapacityBytes = config.logicalAdvertisedCapacityBytes;
    this._logicalExplicitReservedCapacityBytes = config.logicalExplicitReservedCapacityBytes;
    this._name = config.name;
    this._onDiskDedup = config.onDiskDedup;
    this._ownerExtId = config.ownerExtId;
    this._replicationFactor = config.replicationFactor;
    this._nfsWhitelistAddresses.internalValue = config.nfsWhitelistAddresses;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // affinity_host_ext_id - computed: true, optional: true, required: false
  private _affinityHostExtId?: string; 
  public get affinityHostExtId() {
    return this.getStringAttribute('affinity_host_ext_id');
  }
  public set affinityHostExtId(value: string) {
    this._affinityHostExtId = value;
  }
  public resetAffinityHostExtId() {
    this._affinityHostExtId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityHostExtIdInput() {
    return this._affinityHostExtId;
  }

  // cache_deduplication - computed: true, optional: true, required: false
  private _cacheDeduplication?: string; 
  public get cacheDeduplication() {
    return this.getStringAttribute('cache_deduplication');
  }
  public set cacheDeduplication(value: string) {
    this._cacheDeduplication = value;
  }
  public resetCacheDeduplication() {
    this._cacheDeduplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheDeduplicationInput() {
    return this._cacheDeduplication;
  }

  // cluster_ext_id - computed: false, optional: false, required: true
  private _clusterExtId?: string; 
  public get clusterExtId() {
    return this.getStringAttribute('cluster_ext_id');
  }
  public set clusterExtId(value: string) {
    this._clusterExtId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterExtIdInput() {
    return this._clusterExtId;
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // compression_delay_secs - computed: true, optional: true, required: false
  private _compressionDelaySecs?: number; 
  public get compressionDelaySecs() {
    return this.getNumberAttribute('compression_delay_secs');
  }
  public set compressionDelaySecs(value: number) {
    this._compressionDelaySecs = value;
  }
  public resetCompressionDelaySecs() {
    this._compressionDelaySecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionDelaySecsInput() {
    return this._compressionDelaySecs;
  }

  // container_ext_id - computed: true, optional: true, required: false
  private _containerExtId?: string; 
  public get containerExtId() {
    return this.getStringAttribute('container_ext_id');
  }
  public set containerExtId(value: string) {
    this._containerExtId = value;
  }
  public resetContainerExtId() {
    this._containerExtId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerExtIdInput() {
    return this._containerExtId;
  }

  // erasure_code - computed: true, optional: true, required: false
  private _erasureCode?: string; 
  public get erasureCode() {
    return this.getStringAttribute('erasure_code');
  }
  public set erasureCode(value: string) {
    this._erasureCode = value;
  }
  public resetErasureCode() {
    this._erasureCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get erasureCodeInput() {
    return this._erasureCode;
  }

  // erasure_code_delay_secs - computed: true, optional: true, required: false
  private _erasureCodeDelaySecs?: number; 
  public get erasureCodeDelaySecs() {
    return this.getNumberAttribute('erasure_code_delay_secs');
  }
  public set erasureCodeDelaySecs(value: number) {
    this._erasureCodeDelaySecs = value;
  }
  public resetErasureCodeDelaySecs() {
    this._erasureCodeDelaySecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get erasureCodeDelaySecsInput() {
    return this._erasureCodeDelaySecs;
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }

  // has_higher_ec_fault_domain_preference - computed: true, optional: true, required: false
  private _hasHigherEcFaultDomainPreference?: boolean | cdktf.IResolvable; 
  public get hasHigherEcFaultDomainPreference() {
    return this.getBooleanAttribute('has_higher_ec_fault_domain_preference');
  }
  public set hasHigherEcFaultDomainPreference(value: boolean | cdktf.IResolvable) {
    this._hasHigherEcFaultDomainPreference = value;
  }
  public resetHasHigherEcFaultDomainPreference() {
    this._hasHigherEcFaultDomainPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasHigherEcFaultDomainPreferenceInput() {
    return this._hasHigherEcFaultDomainPreference;
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

  // ignore_small_files - computed: true, optional: true, required: false
  private _ignoreSmallFiles?: boolean | cdktf.IResolvable; 
  public get ignoreSmallFiles() {
    return this.getBooleanAttribute('ignore_small_files');
  }
  public set ignoreSmallFiles(value: boolean | cdktf.IResolvable) {
    this._ignoreSmallFiles = value;
  }
  public resetIgnoreSmallFiles() {
    this._ignoreSmallFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSmallFilesInput() {
    return this._ignoreSmallFiles;
  }

  // is_compression_enabled - computed: true, optional: true, required: false
  private _isCompressionEnabled?: boolean | cdktf.IResolvable; 
  public get isCompressionEnabled() {
    return this.getBooleanAttribute('is_compression_enabled');
  }
  public set isCompressionEnabled(value: boolean | cdktf.IResolvable) {
    this._isCompressionEnabled = value;
  }
  public resetIsCompressionEnabled() {
    this._isCompressionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCompressionEnabledInput() {
    return this._isCompressionEnabled;
  }

  // is_encrypted - computed: true, optional: false, required: false
  public get isEncrypted() {
    return this.getBooleanAttribute('is_encrypted');
  }

  // is_inline_ec_enabled - computed: true, optional: true, required: false
  private _isInlineEcEnabled?: boolean | cdktf.IResolvable; 
  public get isInlineEcEnabled() {
    return this.getBooleanAttribute('is_inline_ec_enabled');
  }
  public set isInlineEcEnabled(value: boolean | cdktf.IResolvable) {
    this._isInlineEcEnabled = value;
  }
  public resetIsInlineEcEnabled() {
    this._isInlineEcEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInlineEcEnabledInput() {
    return this._isInlineEcEnabled;
  }

  // is_internal - computed: true, optional: true, required: false
  private _isInternal?: boolean | cdktf.IResolvable; 
  public get isInternal() {
    return this.getBooleanAttribute('is_internal');
  }
  public set isInternal(value: boolean | cdktf.IResolvable) {
    this._isInternal = value;
  }
  public resetIsInternal() {
    this._isInternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInternalInput() {
    return this._isInternal;
  }

  // is_marked_for_removal - computed: true, optional: false, required: false
  public get isMarkedForRemoval() {
    return this.getBooleanAttribute('is_marked_for_removal');
  }

  // is_software_encryption_enabled - computed: true, optional: true, required: false
  private _isSoftwareEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get isSoftwareEncryptionEnabled() {
    return this.getBooleanAttribute('is_software_encryption_enabled');
  }
  public set isSoftwareEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._isSoftwareEncryptionEnabled = value;
  }
  public resetIsSoftwareEncryptionEnabled() {
    this._isSoftwareEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSoftwareEncryptionEnabledInput() {
    return this._isSoftwareEncryptionEnabled;
  }

  // links - computed: true, optional: false, required: false
  private _links = new StorageContainersV2LinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // logical_advertised_capacity_bytes - computed: true, optional: true, required: false
  private _logicalAdvertisedCapacityBytes?: number; 
  public get logicalAdvertisedCapacityBytes() {
    return this.getNumberAttribute('logical_advertised_capacity_bytes');
  }
  public set logicalAdvertisedCapacityBytes(value: number) {
    this._logicalAdvertisedCapacityBytes = value;
  }
  public resetLogicalAdvertisedCapacityBytes() {
    this._logicalAdvertisedCapacityBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalAdvertisedCapacityBytesInput() {
    return this._logicalAdvertisedCapacityBytes;
  }

  // logical_explicit_reserved_capacity_bytes - computed: true, optional: true, required: false
  private _logicalExplicitReservedCapacityBytes?: number; 
  public get logicalExplicitReservedCapacityBytes() {
    return this.getNumberAttribute('logical_explicit_reserved_capacity_bytes');
  }
  public set logicalExplicitReservedCapacityBytes(value: number) {
    this._logicalExplicitReservedCapacityBytes = value;
  }
  public resetLogicalExplicitReservedCapacityBytes() {
    this._logicalExplicitReservedCapacityBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalExplicitReservedCapacityBytesInput() {
    return this._logicalExplicitReservedCapacityBytes;
  }

  // logical_implicit_reserved_capacity_bytes - computed: true, optional: false, required: false
  public get logicalImplicitReservedCapacityBytes() {
    return this.getNumberAttribute('logical_implicit_reserved_capacity_bytes');
  }

  // max_capacity_bytes - computed: true, optional: false, required: false
  public get maxCapacityBytes() {
    return this.getNumberAttribute('max_capacity_bytes');
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

  // on_disk_dedup - computed: true, optional: true, required: false
  private _onDiskDedup?: string; 
  public get onDiskDedup() {
    return this.getStringAttribute('on_disk_dedup');
  }
  public set onDiskDedup(value: string) {
    this._onDiskDedup = value;
  }
  public resetOnDiskDedup() {
    this._onDiskDedup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDiskDedupInput() {
    return this._onDiskDedup;
  }

  // owner_ext_id - computed: true, optional: true, required: false
  private _ownerExtId?: string; 
  public get ownerExtId() {
    return this.getStringAttribute('owner_ext_id');
  }
  public set ownerExtId(value: string) {
    this._ownerExtId = value;
  }
  public resetOwnerExtId() {
    this._ownerExtId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerExtIdInput() {
    return this._ownerExtId;
  }

  // replication_factor - computed: true, optional: true, required: false
  private _replicationFactor?: number; 
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }
  public set replicationFactor(value: number) {
    this._replicationFactor = value;
  }
  public resetReplicationFactor() {
    this._replicationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationFactorInput() {
    return this._replicationFactor;
  }

  // storage_pool_ext_id - computed: true, optional: false, required: false
  public get storagePoolExtId() {
    return this.getStringAttribute('storage_pool_ext_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // nfs_whitelist_addresses - computed: false, optional: true, required: false
  private _nfsWhitelistAddresses = new StorageContainersV2NfsWhitelistAddressesList(this, "nfs_whitelist_addresses", false);
  public get nfsWhitelistAddresses() {
    return this._nfsWhitelistAddresses;
  }
  public putNfsWhitelistAddresses(value: StorageContainersV2NfsWhitelistAddresses[] | cdktf.IResolvable) {
    this._nfsWhitelistAddresses.internalValue = value;
  }
  public resetNfsWhitelistAddresses() {
    this._nfsWhitelistAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsWhitelistAddressesInput() {
    return this._nfsWhitelistAddresses.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      affinity_host_ext_id: cdktf.stringToTerraform(this._affinityHostExtId),
      cache_deduplication: cdktf.stringToTerraform(this._cacheDeduplication),
      cluster_ext_id: cdktf.stringToTerraform(this._clusterExtId),
      compression_delay_secs: cdktf.numberToTerraform(this._compressionDelaySecs),
      container_ext_id: cdktf.stringToTerraform(this._containerExtId),
      erasure_code: cdktf.stringToTerraform(this._erasureCode),
      erasure_code_delay_secs: cdktf.numberToTerraform(this._erasureCodeDelaySecs),
      ext_id: cdktf.stringToTerraform(this._extId),
      has_higher_ec_fault_domain_preference: cdktf.booleanToTerraform(this._hasHigherEcFaultDomainPreference),
      id: cdktf.stringToTerraform(this._id),
      ignore_small_files: cdktf.booleanToTerraform(this._ignoreSmallFiles),
      is_compression_enabled: cdktf.booleanToTerraform(this._isCompressionEnabled),
      is_inline_ec_enabled: cdktf.booleanToTerraform(this._isInlineEcEnabled),
      is_internal: cdktf.booleanToTerraform(this._isInternal),
      is_software_encryption_enabled: cdktf.booleanToTerraform(this._isSoftwareEncryptionEnabled),
      logical_advertised_capacity_bytes: cdktf.numberToTerraform(this._logicalAdvertisedCapacityBytes),
      logical_explicit_reserved_capacity_bytes: cdktf.numberToTerraform(this._logicalExplicitReservedCapacityBytes),
      name: cdktf.stringToTerraform(this._name),
      on_disk_dedup: cdktf.stringToTerraform(this._onDiskDedup),
      owner_ext_id: cdktf.stringToTerraform(this._ownerExtId),
      replication_factor: cdktf.numberToTerraform(this._replicationFactor),
      nfs_whitelist_addresses: cdktf.listMapper(storageContainersV2NfsWhitelistAddressesToTerraform, true)(this._nfsWhitelistAddresses.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      affinity_host_ext_id: {
        value: cdktf.stringToHclTerraform(this._affinityHostExtId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_deduplication: {
        value: cdktf.stringToHclTerraform(this._cacheDeduplication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_ext_id: {
        value: cdktf.stringToHclTerraform(this._clusterExtId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compression_delay_secs: {
        value: cdktf.numberToHclTerraform(this._compressionDelaySecs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      container_ext_id: {
        value: cdktf.stringToHclTerraform(this._containerExtId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      erasure_code: {
        value: cdktf.stringToHclTerraform(this._erasureCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      erasure_code_delay_secs: {
        value: cdktf.numberToHclTerraform(this._erasureCodeDelaySecs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ext_id: {
        value: cdktf.stringToHclTerraform(this._extId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      has_higher_ec_fault_domain_preference: {
        value: cdktf.booleanToHclTerraform(this._hasHigherEcFaultDomainPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_small_files: {
        value: cdktf.booleanToHclTerraform(this._ignoreSmallFiles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_compression_enabled: {
        value: cdktf.booleanToHclTerraform(this._isCompressionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_inline_ec_enabled: {
        value: cdktf.booleanToHclTerraform(this._isInlineEcEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_internal: {
        value: cdktf.booleanToHclTerraform(this._isInternal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_software_encryption_enabled: {
        value: cdktf.booleanToHclTerraform(this._isSoftwareEncryptionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      logical_advertised_capacity_bytes: {
        value: cdktf.numberToHclTerraform(this._logicalAdvertisedCapacityBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      logical_explicit_reserved_capacity_bytes: {
        value: cdktf.numberToHclTerraform(this._logicalExplicitReservedCapacityBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_disk_dedup: {
        value: cdktf.stringToHclTerraform(this._onDiskDedup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_ext_id: {
        value: cdktf.stringToHclTerraform(this._ownerExtId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_factor: {
        value: cdktf.numberToHclTerraform(this._replicationFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nfs_whitelist_addresses: {
        value: cdktf.listMapperHcl(storageContainersV2NfsWhitelistAddressesToHclTerraform, true)(this._nfsWhitelistAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageContainersV2NfsWhitelistAddressesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
