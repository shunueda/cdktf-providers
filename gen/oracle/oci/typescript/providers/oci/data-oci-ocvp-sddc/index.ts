// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/ocvp_sddc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOcvpSddcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/ocvp_sddc#sddc_id DataOciOcvpSddc#sddc_id}
  */
  readonly sddcId: string;
}
export interface DataOciOcvpSddcDatastores {
}

export function dataOciOcvpSddcDatastoresToTerraform(struct?: DataOciOcvpSddcDatastores): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOcvpSddcDatastoresToHclTerraform(struct?: DataOciOcvpSddcDatastores): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOcvpSddcDatastoresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOcvpSddcDatastores | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOcvpSddcDatastores | undefined) {
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

export class DataOciOcvpSddcDatastoresList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOcvpSddcDatastoresOutputReference {
    return new DataOciOcvpSddcDatastoresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOcvpSddcHcxOnPremLicenses {
}

export function dataOciOcvpSddcHcxOnPremLicensesToTerraform(struct?: DataOciOcvpSddcHcxOnPremLicenses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOcvpSddcHcxOnPremLicensesToHclTerraform(struct?: DataOciOcvpSddcHcxOnPremLicenses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOcvpSddcHcxOnPremLicensesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOcvpSddcHcxOnPremLicenses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOcvpSddcHcxOnPremLicenses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activation_key - computed: true, optional: false, required: false
  public get activationKey() {
    return this.getStringAttribute('activation_key');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // system_name - computed: true, optional: false, required: false
  public get systemName() {
    return this.getStringAttribute('system_name');
  }
}

export class DataOciOcvpSddcHcxOnPremLicensesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOcvpSddcHcxOnPremLicensesOutputReference {
    return new DataOciOcvpSddcHcxOnPremLicensesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores {
}

export function dataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresToTerraform(struct?: DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresToHclTerraform(struct?: DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores | undefined) {
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

  // datastore_type - computed: true, optional: false, required: false
  public get datastoreType() {
    return this.getStringAttribute('datastore_type');
  }
}

export class DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference {
    return new DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration {
}

export function dataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationToTerraform(struct?: DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationToHclTerraform(struct?: DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration | undefined) {
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

export class DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference {
    return new DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOcvpSddcInitialConfigurationInitialClusterConfigurations {
}

export function dataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsToTerraform(struct?: DataOciOcvpSddcInitialConfigurationInitialClusterConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsToHclTerraform(struct?: DataOciOcvpSddcInitialConfigurationInitialClusterConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOcvpSddcInitialConfigurationInitialClusterConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOcvpSddcInitialConfigurationInitialClusterConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actual_esxi_hosts_count - computed: true, optional: false, required: false
  public get actualEsxiHostsCount() {
    return this.getNumberAttribute('actual_esxi_hosts_count');
  }

  // capacity_reservation_id - computed: true, optional: false, required: false
  public get capacityReservationId() {
    return this.getStringAttribute('capacity_reservation_id');
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
  private _datastores = new DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList(this, "datastores", false);
  public get datastores() {
    return this._datastores;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // esxi_hosts_count - computed: true, optional: false, required: false
  public get esxiHostsCount() {
    return this.getNumberAttribute('esxi_hosts_count');
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
  private _networkConfiguration = new DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList(this, "network_configuration", false);
  public get networkConfiguration() {
    return this._networkConfiguration;
  }

  // vsphere_type - computed: true, optional: false, required: false
  public get vsphereType() {
    return this.getStringAttribute('vsphere_type');
  }

  // workload_network_cidr - computed: true, optional: false, required: false
  public get workloadNetworkCidr() {
    return this.getStringAttribute('workload_network_cidr');
  }
}

export class DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference {
    return new DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOcvpSddcInitialConfiguration {
}

export function dataOciOcvpSddcInitialConfigurationToTerraform(struct?: DataOciOcvpSddcInitialConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOcvpSddcInitialConfigurationToHclTerraform(struct?: DataOciOcvpSddcInitialConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOcvpSddcInitialConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOcvpSddcInitialConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOcvpSddcInitialConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // initial_cluster_configurations - computed: true, optional: false, required: false
  private _initialClusterConfigurations = new DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList(this, "initial_cluster_configurations", false);
  public get initialClusterConfigurations() {
    return this._initialClusterConfigurations;
  }
}

export class DataOciOcvpSddcInitialConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOcvpSddcInitialConfigurationOutputReference {
    return new DataOciOcvpSddcInitialConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOcvpSddcUpgradeLicenses {
}

export function dataOciOcvpSddcUpgradeLicensesToTerraform(struct?: DataOciOcvpSddcUpgradeLicenses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOcvpSddcUpgradeLicensesToHclTerraform(struct?: DataOciOcvpSddcUpgradeLicenses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOcvpSddcUpgradeLicensesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOcvpSddcUpgradeLicenses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOcvpSddcUpgradeLicenses | undefined) {
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

export class DataOciOcvpSddcUpgradeLicensesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOcvpSddcUpgradeLicensesOutputReference {
    return new DataOciOcvpSddcUpgradeLicensesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOcvpSddcVsphereUpgradeObjects {
}

export function dataOciOcvpSddcVsphereUpgradeObjectsToTerraform(struct?: DataOciOcvpSddcVsphereUpgradeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOcvpSddcVsphereUpgradeObjectsToHclTerraform(struct?: DataOciOcvpSddcVsphereUpgradeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOcvpSddcVsphereUpgradeObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOcvpSddcVsphereUpgradeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOcvpSddcVsphereUpgradeObjects | undefined) {
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

export class DataOciOcvpSddcVsphereUpgradeObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOcvpSddcVsphereUpgradeObjectsOutputReference {
    return new DataOciOcvpSddcVsphereUpgradeObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/ocvp_sddc oci_ocvp_sddc}
*/
export class DataOciOcvpSddc extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_ocvp_sddc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOcvpSddc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOcvpSddc to import
  * @param importFromId The id of the existing DataOciOcvpSddc that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/ocvp_sddc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOcvpSddc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_ocvp_sddc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/ocvp_sddc oci_ocvp_sddc} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOcvpSddcConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOcvpSddcConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_ocvp_sddc',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._sddcId = config.sddcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actual_esxi_hosts_count - computed: true, optional: false, required: false
  public get actualEsxiHostsCount() {
    return this.getNumberAttribute('actual_esxi_hosts_count');
  }

  // capacity_reservation_id - computed: true, optional: false, required: false
  public get capacityReservationId() {
    return this.getStringAttribute('capacity_reservation_id');
  }

  // clusters_count - computed: true, optional: false, required: false
  public get clustersCount() {
    return this.getNumberAttribute('clusters_count');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compute_availability_domain - computed: true, optional: false, required: false
  public get computeAvailabilityDomain() {
    return this.getStringAttribute('compute_availability_domain');
  }

  // datastores - computed: true, optional: false, required: false
  private _datastores = new DataOciOcvpSddcDatastoresList(this, "datastores", false);
  public get datastores() {
    return this._datastores;
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
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

  // hcx_action - computed: true, optional: false, required: false
  public get hcxAction() {
    return this.getStringAttribute('hcx_action');
  }

  // hcx_fqdn - computed: true, optional: false, required: false
  public get hcxFqdn() {
    return this.getStringAttribute('hcx_fqdn');
  }

  // hcx_initial_password - computed: true, optional: false, required: false
  public get hcxInitialPassword() {
    return this.getStringAttribute('hcx_initial_password');
  }

  // hcx_mode - computed: true, optional: false, required: false
  public get hcxMode() {
    return this.getStringAttribute('hcx_mode');
  }

  // hcx_on_prem_key - computed: true, optional: false, required: false
  public get hcxOnPremKey() {
    return this.getStringAttribute('hcx_on_prem_key');
  }

  // hcx_on_prem_licenses - computed: true, optional: false, required: false
  private _hcxOnPremLicenses = new DataOciOcvpSddcHcxOnPremLicensesList(this, "hcx_on_prem_licenses", false);
  public get hcxOnPremLicenses() {
    return this._hcxOnPremLicenses;
  }

  // hcx_private_ip_id - computed: true, optional: false, required: false
  public get hcxPrivateIpId() {
    return this.getStringAttribute('hcx_private_ip_id');
  }

  // hcx_vlan_id - computed: true, optional: false, required: false
  public get hcxVlanId() {
    return this.getStringAttribute('hcx_vlan_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // initial_configuration - computed: true, optional: false, required: false
  private _initialConfiguration = new DataOciOcvpSddcInitialConfigurationList(this, "initial_configuration", false);
  public get initialConfiguration() {
    return this._initialConfiguration;
  }

  // initial_host_ocpu_count - computed: true, optional: false, required: false
  public get initialHostOcpuCount() {
    return this.getNumberAttribute('initial_host_ocpu_count');
  }

  // initial_host_shape_name - computed: true, optional: false, required: false
  public get initialHostShapeName() {
    return this.getStringAttribute('initial_host_shape_name');
  }

  // initial_sku - computed: true, optional: false, required: false
  public get initialSku() {
    return this.getStringAttribute('initial_sku');
  }

  // instance_display_name_prefix - computed: true, optional: false, required: false
  public get instanceDisplayNamePrefix() {
    return this.getStringAttribute('instance_display_name_prefix');
  }

  // is_hcx_enabled - computed: true, optional: false, required: false
  public get isHcxEnabled() {
    return this.getBooleanAttribute('is_hcx_enabled');
  }

  // is_hcx_enterprise_enabled - computed: true, optional: false, required: false
  public get isHcxEnterpriseEnabled() {
    return this.getBooleanAttribute('is_hcx_enterprise_enabled');
  }

  // is_hcx_pending_downgrade - computed: true, optional: false, required: false
  public get isHcxPendingDowngrade() {
    return this.getBooleanAttribute('is_hcx_pending_downgrade');
  }

  // is_shielded_instance_enabled - computed: true, optional: false, required: false
  public get isShieldedInstanceEnabled() {
    return this.getBooleanAttribute('is_shielded_instance_enabled');
  }

  // is_single_host_sddc - computed: true, optional: false, required: false
  public get isSingleHostSddc() {
    return this.getBooleanAttribute('is_single_host_sddc');
  }

  // nsx_edge_uplink1vlan_id - computed: true, optional: false, required: false
  public get nsxEdgeUplink1VlanId() {
    return this.getStringAttribute('nsx_edge_uplink1vlan_id');
  }

  // nsx_edge_uplink2vlan_id - computed: true, optional: false, required: false
  public get nsxEdgeUplink2VlanId() {
    return this.getStringAttribute('nsx_edge_uplink2vlan_id');
  }

  // nsx_edge_uplink_ip_id - computed: true, optional: false, required: false
  public get nsxEdgeUplinkIpId() {
    return this.getStringAttribute('nsx_edge_uplink_ip_id');
  }

  // nsx_edge_vtep_vlan_id - computed: true, optional: false, required: false
  public get nsxEdgeVtepVlanId() {
    return this.getStringAttribute('nsx_edge_vtep_vlan_id');
  }

  // nsx_manager_fqdn - computed: true, optional: false, required: false
  public get nsxManagerFqdn() {
    return this.getStringAttribute('nsx_manager_fqdn');
  }

  // nsx_manager_initial_password - computed: true, optional: false, required: false
  public get nsxManagerInitialPassword() {
    return this.getStringAttribute('nsx_manager_initial_password');
  }

  // nsx_manager_private_ip_id - computed: true, optional: false, required: false
  public get nsxManagerPrivateIpId() {
    return this.getStringAttribute('nsx_manager_private_ip_id');
  }

  // nsx_manager_username - computed: true, optional: false, required: false
  public get nsxManagerUsername() {
    return this.getStringAttribute('nsx_manager_username');
  }

  // nsx_overlay_segment_name - computed: true, optional: false, required: false
  public get nsxOverlaySegmentName() {
    return this.getStringAttribute('nsx_overlay_segment_name');
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

  // refresh_hcx_license_status - computed: true, optional: false, required: false
  public get refreshHcxLicenseStatus() {
    return this.getBooleanAttribute('refresh_hcx_license_status');
  }

  // replication_vlan_id - computed: true, optional: false, required: false
  public get replicationVlanId() {
    return this.getStringAttribute('replication_vlan_id');
  }

  // reserving_hcx_on_premise_license_keys - computed: true, optional: false, required: false
  public get reservingHcxOnPremiseLicenseKeys() {
    return this.getListAttribute('reserving_hcx_on_premise_license_keys');
  }

  // sddc_id - computed: false, optional: false, required: true
  private _sddcId?: string; 
  public get sddcId() {
    return this.getStringAttribute('sddc_id');
  }
  public set sddcId(value: string) {
    this._sddcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sddcIdInput() {
    return this._sddcId;
  }

  // ssh_authorized_keys - computed: true, optional: false, required: false
  public get sshAuthorizedKeys() {
    return this.getStringAttribute('ssh_authorized_keys');
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

  // time_hcx_billing_cycle_end - computed: true, optional: false, required: false
  public get timeHcxBillingCycleEnd() {
    return this.getStringAttribute('time_hcx_billing_cycle_end');
  }

  // time_hcx_license_status_updated - computed: true, optional: false, required: false
  public get timeHcxLicenseStatusUpdated() {
    return this.getStringAttribute('time_hcx_license_status_updated');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // upgrade_licenses - computed: true, optional: false, required: false
  private _upgradeLicenses = new DataOciOcvpSddcUpgradeLicensesList(this, "upgrade_licenses", false);
  public get upgradeLicenses() {
    return this._upgradeLicenses;
  }

  // vcenter_fqdn - computed: true, optional: false, required: false
  public get vcenterFqdn() {
    return this.getStringAttribute('vcenter_fqdn');
  }

  // vcenter_initial_password - computed: true, optional: false, required: false
  public get vcenterInitialPassword() {
    return this.getStringAttribute('vcenter_initial_password');
  }

  // vcenter_private_ip_id - computed: true, optional: false, required: false
  public get vcenterPrivateIpId() {
    return this.getStringAttribute('vcenter_private_ip_id');
  }

  // vcenter_username - computed: true, optional: false, required: false
  public get vcenterUsername() {
    return this.getStringAttribute('vcenter_username');
  }

  // vmotion_vlan_id - computed: true, optional: false, required: false
  public get vmotionVlanId() {
    return this.getStringAttribute('vmotion_vlan_id');
  }

  // vmware_software_version - computed: true, optional: false, required: false
  public get vmwareSoftwareVersion() {
    return this.getStringAttribute('vmware_software_version');
  }

  // vsan_vlan_id - computed: true, optional: false, required: false
  public get vsanVlanId() {
    return this.getStringAttribute('vsan_vlan_id');
  }

  // vsphere_upgrade_guide - computed: true, optional: false, required: false
  public get vsphereUpgradeGuide() {
    return this.getStringAttribute('vsphere_upgrade_guide');
  }

  // vsphere_upgrade_objects - computed: true, optional: false, required: false
  private _vsphereUpgradeObjects = new DataOciOcvpSddcVsphereUpgradeObjectsList(this, "vsphere_upgrade_objects", false);
  public get vsphereUpgradeObjects() {
    return this._vsphereUpgradeObjects;
  }

  // vsphere_vlan_id - computed: true, optional: false, required: false
  public get vsphereVlanId() {
    return this.getStringAttribute('vsphere_vlan_id');
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
      sddc_id: cdktf.stringToTerraform(this._sddcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      sddc_id: {
        value: cdktf.stringToHclTerraform(this._sddcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
