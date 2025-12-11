// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/ocvp_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOcvpClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/ocvp_cluster#cluster_id DataOciOcvpCluster#cluster_id}
  */
  readonly clusterId: string;
}
export interface DataOciOcvpClusterDatastores {
}

export function dataOciOcvpClusterDatastoresToTerraform(struct?: DataOciOcvpClusterDatastores): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOcvpClusterDatastoresToHclTerraform(struct?: DataOciOcvpClusterDatastores): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOcvpClusterDatastoresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOcvpClusterDatastores | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOcvpClusterDatastores | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_volume_ids - computed: true, optional: false, required: false
  public get blockVolumeIds() {
    return this.getListAttribute('block_volume_ids');
  }

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }

  // datastore_type - computed: true, optional: false, required: false
  public get datastoreType() {
    return this.getStringAttribute('datastore_type');
  }
}

export class DataOciOcvpClusterDatastoresList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOcvpClusterDatastoresOutputReference {
    return new DataOciOcvpClusterDatastoresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOcvpClusterNetworkConfiguration {
}

export function dataOciOcvpClusterNetworkConfigurationToTerraform(struct?: DataOciOcvpClusterNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOcvpClusterNetworkConfigurationToHclTerraform(struct?: DataOciOcvpClusterNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOcvpClusterNetworkConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOcvpClusterNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOcvpClusterNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hcx_vlan_id - computed: true, optional: false, required: false
  public get hcxVlanId() {
    return this.getStringAttribute('hcx_vlan_id');
  }

  // nsx_edge_uplink1vlan_id - computed: true, optional: false, required: false
  public get nsxEdgeUplink1VlanId() {
    return this.getStringAttribute('nsx_edge_uplink1vlan_id');
  }

  // nsx_edge_uplink2vlan_id - computed: true, optional: false, required: false
  public get nsxEdgeUplink2VlanId() {
    return this.getStringAttribute('nsx_edge_uplink2vlan_id');
  }

  // nsx_edge_vtep_vlan_id - computed: true, optional: false, required: false
  public get nsxEdgeVtepVlanId() {
    return this.getStringAttribute('nsx_edge_vtep_vlan_id');
  }

  // nsx_vtep_vlan_id - computed: true, optional: false, required: false
  public get nsxVtepVlanId() {
    return this.getStringAttribute('nsx_vtep_vlan_id');
  }

  // provisioning_subnet_id - computed: true, optional: false, required: false
  public get provisioningSubnetId() {
    return this.getStringAttribute('provisioning_subnet_id');
  }

  // provisioning_vlan_id - computed: true, optional: false, required: false
  public get provisioningVlanId() {
    return this.getStringAttribute('provisioning_vlan_id');
  }

  // replication_vlan_id - computed: true, optional: false, required: false
  public get replicationVlanId() {
    return this.getStringAttribute('replication_vlan_id');
  }

  // vmotion_vlan_id - computed: true, optional: false, required: false
  public get vmotionVlanId() {
    return this.getStringAttribute('vmotion_vlan_id');
  }

  // vsan_vlan_id - computed: true, optional: false, required: false
  public get vsanVlanId() {
    return this.getStringAttribute('vsan_vlan_id');
  }

  // vsphere_vlan_id - computed: true, optional: false, required: false
  public get vsphereVlanId() {
    return this.getStringAttribute('vsphere_vlan_id');
  }
}

export class DataOciOcvpClusterNetworkConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOcvpClusterNetworkConfigurationOutputReference {
    return new DataOciOcvpClusterNetworkConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOcvpClusterUpgradeLicenses {
}

export function dataOciOcvpClusterUpgradeLicensesToTerraform(struct?: DataOciOcvpClusterUpgradeLicenses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOcvpClusterUpgradeLicensesToHclTerraform(struct?: DataOciOcvpClusterUpgradeLicenses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOcvpClusterUpgradeLicensesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOcvpClusterUpgradeLicenses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOcvpClusterUpgradeLicenses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // license_key - computed: true, optional: false, required: false
  public get licenseKey() {
    return this.getStringAttribute('license_key');
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
}

export class DataOciOcvpClusterUpgradeLicensesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOcvpClusterUpgradeLicensesOutputReference {
    return new DataOciOcvpClusterUpgradeLicensesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOcvpClusterVsphereUpgradeObjects {
}

export function dataOciOcvpClusterVsphereUpgradeObjectsToTerraform(struct?: DataOciOcvpClusterVsphereUpgradeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOcvpClusterVsphereUpgradeObjectsToHclTerraform(struct?: DataOciOcvpClusterVsphereUpgradeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOcvpClusterVsphereUpgradeObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOcvpClusterVsphereUpgradeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOcvpClusterVsphereUpgradeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // download_link - computed: true, optional: false, required: false
  public get downloadLink() {
    return this.getStringAttribute('download_link');
  }

  // link_description - computed: true, optional: false, required: false
  public get linkDescription() {
    return this.getStringAttribute('link_description');
  }
}

export class DataOciOcvpClusterVsphereUpgradeObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOcvpClusterVsphereUpgradeObjectsOutputReference {
    return new DataOciOcvpClusterVsphereUpgradeObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/ocvp_cluster oci_ocvp_cluster}
*/
export class DataOciOcvpCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_ocvp_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOcvpCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOcvpCluster to import
  * @param importFromId The id of the existing DataOciOcvpCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/ocvp_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOcvpCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_ocvp_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/ocvp_cluster oci_ocvp_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOcvpClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOcvpClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_ocvp_cluster',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actual_esxi_hosts_count - computed: true, optional: false, required: false
  public get actualEsxiHostsCount() {
    return this.getNumberAttribute('actual_esxi_hosts_count');
  }

  // attach_datastore_cluster_ids - computed: true, optional: false, required: false
  public get attachDatastoreClusterIds() {
    return this.getListAttribute('attach_datastore_cluster_ids');
  }

  // capacity_reservation_id - computed: true, optional: false, required: false
  public get capacityReservationId() {
    return this.getStringAttribute('capacity_reservation_id');
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compute_availability_domain - computed: true, optional: false, required: false
  public get computeAvailabilityDomain() {
    return this.getStringAttribute('compute_availability_domain');
  }

  // datastore_cluster_ids - computed: true, optional: false, required: false
  public get datastoreClusterIds() {
    return this.getListAttribute('datastore_cluster_ids');
  }

  // datastores - computed: true, optional: false, required: false
  private _datastores = new DataOciOcvpClusterDatastoresList(this, "datastores", false);
  public get datastores() {
    return this._datastores;
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // detach_datastore_cluster_ids - computed: true, optional: false, required: false
  public get detachDatastoreClusterIds() {
    return this.getListAttribute('detach_datastore_cluster_ids');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // esxi_hosts_count - computed: true, optional: false, required: false
  public get esxiHostsCount() {
    return this.getNumberAttribute('esxi_hosts_count');
  }

  // esxi_software_version - computed: true, optional: false, required: false
  public get esxiSoftwareVersion() {
    return this.getStringAttribute('esxi_software_version');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // initial_commitment - computed: true, optional: false, required: false
  public get initialCommitment() {
    return this.getStringAttribute('initial_commitment');
  }

  // initial_host_ocpu_count - computed: true, optional: false, required: false
  public get initialHostOcpuCount() {
    return this.getNumberAttribute('initial_host_ocpu_count');
  }

  // initial_host_shape_name - computed: true, optional: false, required: false
  public get initialHostShapeName() {
    return this.getStringAttribute('initial_host_shape_name');
  }

  // instance_display_name_prefix - computed: true, optional: false, required: false
  public get instanceDisplayNamePrefix() {
    return this.getStringAttribute('instance_display_name_prefix');
  }

  // is_shielded_instance_enabled - computed: true, optional: false, required: false
  public get isShieldedInstanceEnabled() {
    return this.getBooleanAttribute('is_shielded_instance_enabled');
  }

  // network_configuration - computed: true, optional: false, required: false
  private _networkConfiguration = new DataOciOcvpClusterNetworkConfigurationList(this, "network_configuration", false);
  public get networkConfiguration() {
    return this._networkConfiguration;
  }

  // sddc_id - computed: true, optional: false, required: false
  public get sddcId() {
    return this.getStringAttribute('sddc_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // upgrade_licenses - computed: true, optional: false, required: false
  private _upgradeLicenses = new DataOciOcvpClusterUpgradeLicensesList(this, "upgrade_licenses", false);
  public get upgradeLicenses() {
    return this._upgradeLicenses;
  }

  // vmware_software_version - computed: true, optional: false, required: false
  public get vmwareSoftwareVersion() {
    return this.getStringAttribute('vmware_software_version');
  }

  // vsphere_type - computed: true, optional: false, required: false
  public get vsphereType() {
    return this.getStringAttribute('vsphere_type');
  }

  // vsphere_upgrade_objects - computed: true, optional: false, required: false
  private _vsphereUpgradeObjects = new DataOciOcvpClusterVsphereUpgradeObjectsList(this, "vsphere_upgrade_objects", false);
  public get vsphereUpgradeObjects() {
    return this._vsphereUpgradeObjects;
  }

  // workload_network_cidr - computed: true, optional: false, required: false
  public get workloadNetworkCidr() {
    return this.getStringAttribute('workload_network_cidr');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
