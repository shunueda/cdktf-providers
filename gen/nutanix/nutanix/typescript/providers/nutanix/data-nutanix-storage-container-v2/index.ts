// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/storage_container_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixStorageContainerV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/storage_container_v2#ext_id DataNutanixStorageContainerV2#ext_id}
  */
  readonly extId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/storage_container_v2#id DataNutanixStorageContainerV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataNutanixStorageContainerV2Links {
}

export function dataNutanixStorageContainerV2LinksToTerraform(struct?: DataNutanixStorageContainerV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerV2LinksToHclTerraform(struct?: DataNutanixStorageContainerV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerV2LinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerV2Links | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerV2Links | undefined) {
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

export class DataNutanixStorageContainerV2LinksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerV2LinksOutputReference {
    return new DataNutanixStorageContainerV2LinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerV2NfsWhitelistAddressesFqdn {
}

export function dataNutanixStorageContainerV2NfsWhitelistAddressesFqdnToTerraform(struct?: DataNutanixStorageContainerV2NfsWhitelistAddressesFqdn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerV2NfsWhitelistAddressesFqdnToHclTerraform(struct?: DataNutanixStorageContainerV2NfsWhitelistAddressesFqdn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerV2NfsWhitelistAddressesFqdnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerV2NfsWhitelistAddressesFqdn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerV2NfsWhitelistAddressesFqdn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixStorageContainerV2NfsWhitelistAddressesFqdnList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerV2NfsWhitelistAddressesFqdnOutputReference {
    return new DataNutanixStorageContainerV2NfsWhitelistAddressesFqdnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerV2NfsWhitelistAddressesIpv4 {
}

export function dataNutanixStorageContainerV2NfsWhitelistAddressesIpv4ToTerraform(struct?: DataNutanixStorageContainerV2NfsWhitelistAddressesIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerV2NfsWhitelistAddressesIpv4ToHclTerraform(struct?: DataNutanixStorageContainerV2NfsWhitelistAddressesIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerV2NfsWhitelistAddressesIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerV2NfsWhitelistAddressesIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerV2NfsWhitelistAddressesIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixStorageContainerV2NfsWhitelistAddressesIpv4List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerV2NfsWhitelistAddressesIpv4OutputReference {
    return new DataNutanixStorageContainerV2NfsWhitelistAddressesIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerV2NfsWhitelistAddressesIpv6 {
}

export function dataNutanixStorageContainerV2NfsWhitelistAddressesIpv6ToTerraform(struct?: DataNutanixStorageContainerV2NfsWhitelistAddressesIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerV2NfsWhitelistAddressesIpv6ToHclTerraform(struct?: DataNutanixStorageContainerV2NfsWhitelistAddressesIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerV2NfsWhitelistAddressesIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerV2NfsWhitelistAddressesIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerV2NfsWhitelistAddressesIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixStorageContainerV2NfsWhitelistAddressesIpv6List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerV2NfsWhitelistAddressesIpv6OutputReference {
    return new DataNutanixStorageContainerV2NfsWhitelistAddressesIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerV2NfsWhitelistAddresses {
}

export function dataNutanixStorageContainerV2NfsWhitelistAddressesToTerraform(struct?: DataNutanixStorageContainerV2NfsWhitelistAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerV2NfsWhitelistAddressesToHclTerraform(struct?: DataNutanixStorageContainerV2NfsWhitelistAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerV2NfsWhitelistAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerV2NfsWhitelistAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerV2NfsWhitelistAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fqdn - computed: true, optional: false, required: false
  private _fqdn = new DataNutanixStorageContainerV2NfsWhitelistAddressesFqdnList(this, "fqdn", false);
  public get fqdn() {
    return this._fqdn;
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataNutanixStorageContainerV2NfsWhitelistAddressesIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataNutanixStorageContainerV2NfsWhitelistAddressesIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
}

export class DataNutanixStorageContainerV2NfsWhitelistAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerV2NfsWhitelistAddressesOutputReference {
    return new DataNutanixStorageContainerV2NfsWhitelistAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/storage_container_v2 nutanix_storage_container_v2}
*/
export class DataNutanixStorageContainerV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_storage_container_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixStorageContainerV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixStorageContainerV2 to import
  * @param importFromId The id of the existing DataNutanixStorageContainerV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/storage_container_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixStorageContainerV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_storage_container_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/storage_container_v2 nutanix_storage_container_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixStorageContainerV2Config
  */
  public constructor(scope: Construct, id: string, config: DataNutanixStorageContainerV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_storage_container_v2',
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
    this._extId = config.extId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // affinity_host_ext_id - computed: true, optional: false, required: false
  public get affinityHostExtId() {
    return this.getStringAttribute('affinity_host_ext_id');
  }

  // cache_deduplication - computed: true, optional: false, required: false
  public get cacheDeduplication() {
    return this.getStringAttribute('cache_deduplication');
  }

  // cluster_ext_id - computed: true, optional: false, required: false
  public get clusterExtId() {
    return this.getStringAttribute('cluster_ext_id');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // compression_delay_secs - computed: true, optional: false, required: false
  public get compressionDelaySecs() {
    return this.getNumberAttribute('compression_delay_secs');
  }

  // container_ext_id - computed: true, optional: false, required: false
  public get containerExtId() {
    return this.getStringAttribute('container_ext_id');
  }

  // erasure_code - computed: true, optional: false, required: false
  public get erasureCode() {
    return this.getStringAttribute('erasure_code');
  }

  // erasure_code_delay_secs - computed: true, optional: false, required: false
  public get erasureCodeDelaySecs() {
    return this.getNumberAttribute('erasure_code_delay_secs');
  }

  // ext_id - computed: false, optional: false, required: true
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }

  // has_higher_ec_fault_domain_preference - computed: true, optional: false, required: false
  public get hasHigherEcFaultDomainPreference() {
    return this.getBooleanAttribute('has_higher_ec_fault_domain_preference');
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

  // is_compression_enabled - computed: true, optional: false, required: false
  public get isCompressionEnabled() {
    return this.getBooleanAttribute('is_compression_enabled');
  }

  // is_encrypted - computed: true, optional: false, required: false
  public get isEncrypted() {
    return this.getBooleanAttribute('is_encrypted');
  }

  // is_inline_ec_enabled - computed: true, optional: false, required: false
  public get isInlineEcEnabled() {
    return this.getBooleanAttribute('is_inline_ec_enabled');
  }

  // is_internal - computed: true, optional: false, required: false
  public get isInternal() {
    return this.getBooleanAttribute('is_internal');
  }

  // is_marked_for_removal - computed: true, optional: false, required: false
  public get isMarkedForRemoval() {
    return this.getBooleanAttribute('is_marked_for_removal');
  }

  // is_nfs_whitelist_inherited - computed: true, optional: false, required: false
  public get isNfsWhitelistInherited() {
    return this.getBooleanAttribute('is_nfs_whitelist_inherited');
  }

  // is_software_encryption_enabled - computed: true, optional: false, required: false
  public get isSoftwareEncryptionEnabled() {
    return this.getBooleanAttribute('is_software_encryption_enabled');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataNutanixStorageContainerV2LinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // logical_advertised_capacity_bytes - computed: true, optional: false, required: false
  public get logicalAdvertisedCapacityBytes() {
    return this.getNumberAttribute('logical_advertised_capacity_bytes');
  }

  // logical_explicit_reserved_capacity_bytes - computed: true, optional: false, required: false
  public get logicalExplicitReservedCapacityBytes() {
    return this.getNumberAttribute('logical_explicit_reserved_capacity_bytes');
  }

  // logical_implicit_reserved_capacity_bytes - computed: true, optional: false, required: false
  public get logicalImplicitReservedCapacityBytes() {
    return this.getNumberAttribute('logical_implicit_reserved_capacity_bytes');
  }

  // max_capacity_bytes - computed: true, optional: false, required: false
  public get maxCapacityBytes() {
    return this.getNumberAttribute('max_capacity_bytes');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nfs_whitelist_addresses - computed: true, optional: false, required: false
  private _nfsWhitelistAddresses = new DataNutanixStorageContainerV2NfsWhitelistAddressesList(this, "nfs_whitelist_addresses", false);
  public get nfsWhitelistAddresses() {
    return this._nfsWhitelistAddresses;
  }

  // on_disk_dedup - computed: true, optional: false, required: false
  public get onDiskDedup() {
    return this.getStringAttribute('on_disk_dedup');
  }

  // owner_ext_id - computed: true, optional: false, required: false
  public get ownerExtId() {
    return this.getStringAttribute('owner_ext_id');
  }

  // replication_factor - computed: true, optional: false, required: false
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }

  // storage_pool_ext_id - computed: true, optional: false, required: false
  public get storagePoolExtId() {
    return this.getStringAttribute('storage_pool_ext_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ext_id: cdktf.stringToTerraform(this._extId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ext_id: {
        value: cdktf.stringToHclTerraform(this._extId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
