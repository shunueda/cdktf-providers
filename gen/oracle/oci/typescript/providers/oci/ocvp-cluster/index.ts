// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OcvpClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#attach_datastore_cluster_ids OcvpCluster#attach_datastore_cluster_ids}
  */
  readonly attachDatastoreClusterIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#capacity_reservation_id OcvpCluster#capacity_reservation_id}
  */
  readonly capacityReservationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#compute_availability_domain OcvpCluster#compute_availability_domain}
  */
  readonly computeAvailabilityDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#defined_tags OcvpCluster#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#detach_datastore_cluster_ids OcvpCluster#detach_datastore_cluster_ids}
  */
  readonly detachDatastoreClusterIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#display_name OcvpCluster#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#esxi_hosts_count OcvpCluster#esxi_hosts_count}
  */
  readonly esxiHostsCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#esxi_software_version OcvpCluster#esxi_software_version}
  */
  readonly esxiSoftwareVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#freeform_tags OcvpCluster#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#id OcvpCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#initial_commitment OcvpCluster#initial_commitment}
  */
  readonly initialCommitment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#initial_host_ocpu_count OcvpCluster#initial_host_ocpu_count}
  */
  readonly initialHostOcpuCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#initial_host_shape_name OcvpCluster#initial_host_shape_name}
  */
  readonly initialHostShapeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#instance_display_name_prefix OcvpCluster#instance_display_name_prefix}
  */
  readonly instanceDisplayNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#is_shielded_instance_enabled OcvpCluster#is_shielded_instance_enabled}
  */
  readonly isShieldedInstanceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#sddc_id OcvpCluster#sddc_id}
  */
  readonly sddcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#vmware_software_version OcvpCluster#vmware_software_version}
  */
  readonly vmwareSoftwareVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#workload_network_cidr OcvpCluster#workload_network_cidr}
  */
  readonly workloadNetworkCidr?: string;
  /**
  * datastores block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#datastores OcvpCluster#datastores}
  */
  readonly datastores?: OcvpClusterDatastores[] | cdktf.IResolvable;
  /**
  * network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#network_configuration OcvpCluster#network_configuration}
  */
  readonly networkConfiguration: OcvpClusterNetworkConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#timeouts OcvpCluster#timeouts}
  */
  readonly timeouts?: OcvpClusterTimeouts;
}
export interface OcvpClusterUpgradeLicenses {
}

export function ocvpClusterUpgradeLicensesToTerraform(struct?: OcvpClusterUpgradeLicenses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ocvpClusterUpgradeLicensesToHclTerraform(struct?: OcvpClusterUpgradeLicenses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OcvpClusterUpgradeLicensesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OcvpClusterUpgradeLicenses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OcvpClusterUpgradeLicenses | undefined) {
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

export class OcvpClusterUpgradeLicensesList extends cdktf.ComplexList {

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
  public get(index: number): OcvpClusterUpgradeLicensesOutputReference {
    return new OcvpClusterUpgradeLicensesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OcvpClusterVsphereUpgradeObjects {
}

export function ocvpClusterVsphereUpgradeObjectsToTerraform(struct?: OcvpClusterVsphereUpgradeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ocvpClusterVsphereUpgradeObjectsToHclTerraform(struct?: OcvpClusterVsphereUpgradeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OcvpClusterVsphereUpgradeObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OcvpClusterVsphereUpgradeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OcvpClusterVsphereUpgradeObjects | undefined) {
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

export class OcvpClusterVsphereUpgradeObjectsList extends cdktf.ComplexList {

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
  public get(index: number): OcvpClusterVsphereUpgradeObjectsOutputReference {
    return new OcvpClusterVsphereUpgradeObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OcvpClusterDatastores {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#block_volume_ids OcvpCluster#block_volume_ids}
  */
  readonly blockVolumeIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#datastore_type OcvpCluster#datastore_type}
  */
  readonly datastoreType: string;
}

export function ocvpClusterDatastoresToTerraform(struct?: OcvpClusterDatastores | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_volume_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blockVolumeIds),
    datastore_type: cdktf.stringToTerraform(struct!.datastoreType),
  }
}


export function ocvpClusterDatastoresToHclTerraform(struct?: OcvpClusterDatastores | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_volume_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blockVolumeIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    datastore_type: {
      value: cdktf.stringToHclTerraform(struct!.datastoreType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OcvpClusterDatastoresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OcvpClusterDatastores | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockVolumeIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockVolumeIds = this._blockVolumeIds;
    }
    if (this._datastoreType !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreType = this._datastoreType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OcvpClusterDatastores | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockVolumeIds = undefined;
      this._datastoreType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockVolumeIds = value.blockVolumeIds;
      this._datastoreType = value.datastoreType;
    }
  }

  // block_volume_ids - computed: false, optional: false, required: true
  private _blockVolumeIds?: string[]; 
  public get blockVolumeIds() {
    return this.getListAttribute('block_volume_ids');
  }
  public set blockVolumeIds(value: string[]) {
    this._blockVolumeIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockVolumeIdsInput() {
    return this._blockVolumeIds;
  }

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }

  // datastore_type - computed: false, optional: false, required: true
  private _datastoreType?: string; 
  public get datastoreType() {
    return this.getStringAttribute('datastore_type');
  }
  public set datastoreType(value: string) {
    this._datastoreType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreTypeInput() {
    return this._datastoreType;
  }
}

export class OcvpClusterDatastoresList extends cdktf.ComplexList {
  public internalValue? : OcvpClusterDatastores[] | cdktf.IResolvable

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
  public get(index: number): OcvpClusterDatastoresOutputReference {
    return new OcvpClusterDatastoresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OcvpClusterNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#hcx_vlan_id OcvpCluster#hcx_vlan_id}
  */
  readonly hcxVlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#nsx_edge_uplink1vlan_id OcvpCluster#nsx_edge_uplink1vlan_id}
  */
  readonly nsxEdgeUplink1VlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#nsx_edge_uplink2vlan_id OcvpCluster#nsx_edge_uplink2vlan_id}
  */
  readonly nsxEdgeUplink2VlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#nsx_edge_vtep_vlan_id OcvpCluster#nsx_edge_vtep_vlan_id}
  */
  readonly nsxEdgeVtepVlanId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#nsx_vtep_vlan_id OcvpCluster#nsx_vtep_vlan_id}
  */
  readonly nsxVtepVlanId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#provisioning_subnet_id OcvpCluster#provisioning_subnet_id}
  */
  readonly provisioningSubnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#provisioning_vlan_id OcvpCluster#provisioning_vlan_id}
  */
  readonly provisioningVlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#replication_vlan_id OcvpCluster#replication_vlan_id}
  */
  readonly replicationVlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#vmotion_vlan_id OcvpCluster#vmotion_vlan_id}
  */
  readonly vmotionVlanId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#vsan_vlan_id OcvpCluster#vsan_vlan_id}
  */
  readonly vsanVlanId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#vsphere_vlan_id OcvpCluster#vsphere_vlan_id}
  */
  readonly vsphereVlanId?: string;
}

export function ocvpClusterNetworkConfigurationToTerraform(struct?: OcvpClusterNetworkConfigurationOutputReference | OcvpClusterNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hcx_vlan_id: cdktf.stringToTerraform(struct!.hcxVlanId),
    nsx_edge_uplink1vlan_id: cdktf.stringToTerraform(struct!.nsxEdgeUplink1VlanId),
    nsx_edge_uplink2vlan_id: cdktf.stringToTerraform(struct!.nsxEdgeUplink2VlanId),
    nsx_edge_vtep_vlan_id: cdktf.stringToTerraform(struct!.nsxEdgeVtepVlanId),
    nsx_vtep_vlan_id: cdktf.stringToTerraform(struct!.nsxVtepVlanId),
    provisioning_subnet_id: cdktf.stringToTerraform(struct!.provisioningSubnetId),
    provisioning_vlan_id: cdktf.stringToTerraform(struct!.provisioningVlanId),
    replication_vlan_id: cdktf.stringToTerraform(struct!.replicationVlanId),
    vmotion_vlan_id: cdktf.stringToTerraform(struct!.vmotionVlanId),
    vsan_vlan_id: cdktf.stringToTerraform(struct!.vsanVlanId),
    vsphere_vlan_id: cdktf.stringToTerraform(struct!.vsphereVlanId),
  }
}


export function ocvpClusterNetworkConfigurationToHclTerraform(struct?: OcvpClusterNetworkConfigurationOutputReference | OcvpClusterNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hcx_vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.hcxVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nsx_edge_uplink1vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.nsxEdgeUplink1VlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nsx_edge_uplink2vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.nsxEdgeUplink2VlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nsx_edge_vtep_vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.nsxEdgeVtepVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nsx_vtep_vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.nsxVtepVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provisioning_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.provisioningSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provisioning_vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.provisioningVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replication_vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.replicationVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vmotion_vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.vmotionVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsan_vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.vsanVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsphere_vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.vsphereVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OcvpClusterNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OcvpClusterNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hcxVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hcxVlanId = this._hcxVlanId;
    }
    if (this._nsxEdgeUplink1VlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsxEdgeUplink1VlanId = this._nsxEdgeUplink1VlanId;
    }
    if (this._nsxEdgeUplink2VlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsxEdgeUplink2VlanId = this._nsxEdgeUplink2VlanId;
    }
    if (this._nsxEdgeVtepVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsxEdgeVtepVlanId = this._nsxEdgeVtepVlanId;
    }
    if (this._nsxVtepVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsxVtepVlanId = this._nsxVtepVlanId;
    }
    if (this._provisioningSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioningSubnetId = this._provisioningSubnetId;
    }
    if (this._provisioningVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioningVlanId = this._provisioningVlanId;
    }
    if (this._replicationVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationVlanId = this._replicationVlanId;
    }
    if (this._vmotionVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmotionVlanId = this._vmotionVlanId;
    }
    if (this._vsanVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsanVlanId = this._vsanVlanId;
    }
    if (this._vsphereVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsphereVlanId = this._vsphereVlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OcvpClusterNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hcxVlanId = undefined;
      this._nsxEdgeUplink1VlanId = undefined;
      this._nsxEdgeUplink2VlanId = undefined;
      this._nsxEdgeVtepVlanId = undefined;
      this._nsxVtepVlanId = undefined;
      this._provisioningSubnetId = undefined;
      this._provisioningVlanId = undefined;
      this._replicationVlanId = undefined;
      this._vmotionVlanId = undefined;
      this._vsanVlanId = undefined;
      this._vsphereVlanId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hcxVlanId = value.hcxVlanId;
      this._nsxEdgeUplink1VlanId = value.nsxEdgeUplink1VlanId;
      this._nsxEdgeUplink2VlanId = value.nsxEdgeUplink2VlanId;
      this._nsxEdgeVtepVlanId = value.nsxEdgeVtepVlanId;
      this._nsxVtepVlanId = value.nsxVtepVlanId;
      this._provisioningSubnetId = value.provisioningSubnetId;
      this._provisioningVlanId = value.provisioningVlanId;
      this._replicationVlanId = value.replicationVlanId;
      this._vmotionVlanId = value.vmotionVlanId;
      this._vsanVlanId = value.vsanVlanId;
      this._vsphereVlanId = value.vsphereVlanId;
    }
  }

  // hcx_vlan_id - computed: true, optional: true, required: false
  private _hcxVlanId?: string; 
  public get hcxVlanId() {
    return this.getStringAttribute('hcx_vlan_id');
  }
  public set hcxVlanId(value: string) {
    this._hcxVlanId = value;
  }
  public resetHcxVlanId() {
    this._hcxVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hcxVlanIdInput() {
    return this._hcxVlanId;
  }

  // nsx_edge_uplink1vlan_id - computed: true, optional: true, required: false
  private _nsxEdgeUplink1VlanId?: string; 
  public get nsxEdgeUplink1VlanId() {
    return this.getStringAttribute('nsx_edge_uplink1vlan_id');
  }
  public set nsxEdgeUplink1VlanId(value: string) {
    this._nsxEdgeUplink1VlanId = value;
  }
  public resetNsxEdgeUplink1VlanId() {
    this._nsxEdgeUplink1VlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxEdgeUplink1VlanIdInput() {
    return this._nsxEdgeUplink1VlanId;
  }

  // nsx_edge_uplink2vlan_id - computed: true, optional: true, required: false
  private _nsxEdgeUplink2VlanId?: string; 
  public get nsxEdgeUplink2VlanId() {
    return this.getStringAttribute('nsx_edge_uplink2vlan_id');
  }
  public set nsxEdgeUplink2VlanId(value: string) {
    this._nsxEdgeUplink2VlanId = value;
  }
  public resetNsxEdgeUplink2VlanId() {
    this._nsxEdgeUplink2VlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxEdgeUplink2VlanIdInput() {
    return this._nsxEdgeUplink2VlanId;
  }

  // nsx_edge_vtep_vlan_id - computed: false, optional: false, required: true
  private _nsxEdgeVtepVlanId?: string; 
  public get nsxEdgeVtepVlanId() {
    return this.getStringAttribute('nsx_edge_vtep_vlan_id');
  }
  public set nsxEdgeVtepVlanId(value: string) {
    this._nsxEdgeVtepVlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxEdgeVtepVlanIdInput() {
    return this._nsxEdgeVtepVlanId;
  }

  // nsx_vtep_vlan_id - computed: false, optional: false, required: true
  private _nsxVtepVlanId?: string; 
  public get nsxVtepVlanId() {
    return this.getStringAttribute('nsx_vtep_vlan_id');
  }
  public set nsxVtepVlanId(value: string) {
    this._nsxVtepVlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxVtepVlanIdInput() {
    return this._nsxVtepVlanId;
  }

  // provisioning_subnet_id - computed: false, optional: false, required: true
  private _provisioningSubnetId?: string; 
  public get provisioningSubnetId() {
    return this.getStringAttribute('provisioning_subnet_id');
  }
  public set provisioningSubnetId(value: string) {
    this._provisioningSubnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningSubnetIdInput() {
    return this._provisioningSubnetId;
  }

  // provisioning_vlan_id - computed: true, optional: true, required: false
  private _provisioningVlanId?: string; 
  public get provisioningVlanId() {
    return this.getStringAttribute('provisioning_vlan_id');
  }
  public set provisioningVlanId(value: string) {
    this._provisioningVlanId = value;
  }
  public resetProvisioningVlanId() {
    this._provisioningVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningVlanIdInput() {
    return this._provisioningVlanId;
  }

  // replication_vlan_id - computed: true, optional: true, required: false
  private _replicationVlanId?: string; 
  public get replicationVlanId() {
    return this.getStringAttribute('replication_vlan_id');
  }
  public set replicationVlanId(value: string) {
    this._replicationVlanId = value;
  }
  public resetReplicationVlanId() {
    this._replicationVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationVlanIdInput() {
    return this._replicationVlanId;
  }

  // vmotion_vlan_id - computed: false, optional: false, required: true
  private _vmotionVlanId?: string; 
  public get vmotionVlanId() {
    return this.getStringAttribute('vmotion_vlan_id');
  }
  public set vmotionVlanId(value: string) {
    this._vmotionVlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmotionVlanIdInput() {
    return this._vmotionVlanId;
  }

  // vsan_vlan_id - computed: false, optional: false, required: true
  private _vsanVlanId?: string; 
  public get vsanVlanId() {
    return this.getStringAttribute('vsan_vlan_id');
  }
  public set vsanVlanId(value: string) {
    this._vsanVlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vsanVlanIdInput() {
    return this._vsanVlanId;
  }

  // vsphere_vlan_id - computed: true, optional: true, required: false
  private _vsphereVlanId?: string; 
  public get vsphereVlanId() {
    return this.getStringAttribute('vsphere_vlan_id');
  }
  public set vsphereVlanId(value: string) {
    this._vsphereVlanId = value;
  }
  public resetVsphereVlanId() {
    this._vsphereVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereVlanIdInput() {
    return this._vsphereVlanId;
  }
}
export interface OcvpClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#create OcvpCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#delete OcvpCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#update OcvpCluster#update}
  */
  readonly update?: string;
}

export function ocvpClusterTimeoutsToTerraform(struct?: OcvpClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function ocvpClusterTimeoutsToHclTerraform(struct?: OcvpClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OcvpClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OcvpClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OcvpClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster oci_ocvp_cluster}
*/
export class OcvpCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_ocvp_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OcvpCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OcvpCluster to import
  * @param importFromId The id of the existing OcvpCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OcvpCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_ocvp_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_cluster oci_ocvp_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OcvpClusterConfig
  */
  public constructor(scope: Construct, id: string, config: OcvpClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_ocvp_cluster',
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
    this._attachDatastoreClusterIds = config.attachDatastoreClusterIds;
    this._capacityReservationId = config.capacityReservationId;
    this._computeAvailabilityDomain = config.computeAvailabilityDomain;
    this._definedTags = config.definedTags;
    this._detachDatastoreClusterIds = config.detachDatastoreClusterIds;
    this._displayName = config.displayName;
    this._esxiHostsCount = config.esxiHostsCount;
    this._esxiSoftwareVersion = config.esxiSoftwareVersion;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._initialCommitment = config.initialCommitment;
    this._initialHostOcpuCount = config.initialHostOcpuCount;
    this._initialHostShapeName = config.initialHostShapeName;
    this._instanceDisplayNamePrefix = config.instanceDisplayNamePrefix;
    this._isShieldedInstanceEnabled = config.isShieldedInstanceEnabled;
    this._sddcId = config.sddcId;
    this._vmwareSoftwareVersion = config.vmwareSoftwareVersion;
    this._workloadNetworkCidr = config.workloadNetworkCidr;
    this._datastores.internalValue = config.datastores;
    this._networkConfiguration.internalValue = config.networkConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actual_esxi_hosts_count - computed: true, optional: false, required: false
  public get actualEsxiHostsCount() {
    return this.getNumberAttribute('actual_esxi_hosts_count');
  }

  // attach_datastore_cluster_ids - computed: false, optional: true, required: false
  private _attachDatastoreClusterIds?: string[]; 
  public get attachDatastoreClusterIds() {
    return this.getListAttribute('attach_datastore_cluster_ids');
  }
  public set attachDatastoreClusterIds(value: string[]) {
    this._attachDatastoreClusterIds = value;
  }
  public resetAttachDatastoreClusterIds() {
    this._attachDatastoreClusterIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachDatastoreClusterIdsInput() {
    return this._attachDatastoreClusterIds;
  }

  // capacity_reservation_id - computed: true, optional: true, required: false
  private _capacityReservationId?: string; 
  public get capacityReservationId() {
    return this.getStringAttribute('capacity_reservation_id');
  }
  public set capacityReservationId(value: string) {
    this._capacityReservationId = value;
  }
  public resetCapacityReservationId() {
    this._capacityReservationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationIdInput() {
    return this._capacityReservationId;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compute_availability_domain - computed: false, optional: false, required: true
  private _computeAvailabilityDomain?: string; 
  public get computeAvailabilityDomain() {
    return this.getStringAttribute('compute_availability_domain');
  }
  public set computeAvailabilityDomain(value: string) {
    this._computeAvailabilityDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeAvailabilityDomainInput() {
    return this._computeAvailabilityDomain;
  }

  // datastore_cluster_ids - computed: true, optional: false, required: false
  public get datastoreClusterIds() {
    return this.getListAttribute('datastore_cluster_ids');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // detach_datastore_cluster_ids - computed: false, optional: true, required: false
  private _detachDatastoreClusterIds?: string[]; 
  public get detachDatastoreClusterIds() {
    return this.getListAttribute('detach_datastore_cluster_ids');
  }
  public set detachDatastoreClusterIds(value: string[]) {
    this._detachDatastoreClusterIds = value;
  }
  public resetDetachDatastoreClusterIds() {
    this._detachDatastoreClusterIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detachDatastoreClusterIdsInput() {
    return this._detachDatastoreClusterIds;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // esxi_hosts_count - computed: false, optional: false, required: true
  private _esxiHostsCount?: number; 
  public get esxiHostsCount() {
    return this.getNumberAttribute('esxi_hosts_count');
  }
  public set esxiHostsCount(value: number) {
    this._esxiHostsCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get esxiHostsCountInput() {
    return this._esxiHostsCount;
  }

  // esxi_software_version - computed: true, optional: true, required: false
  private _esxiSoftwareVersion?: string; 
  public get esxiSoftwareVersion() {
    return this.getStringAttribute('esxi_software_version');
  }
  public set esxiSoftwareVersion(value: string) {
    this._esxiSoftwareVersion = value;
  }
  public resetEsxiSoftwareVersion() {
    this._esxiSoftwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esxiSoftwareVersionInput() {
    return this._esxiSoftwareVersion;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // initial_commitment - computed: true, optional: true, required: false
  private _initialCommitment?: string; 
  public get initialCommitment() {
    return this.getStringAttribute('initial_commitment');
  }
  public set initialCommitment(value: string) {
    this._initialCommitment = value;
  }
  public resetInitialCommitment() {
    this._initialCommitment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialCommitmentInput() {
    return this._initialCommitment;
  }

  // initial_host_ocpu_count - computed: true, optional: true, required: false
  private _initialHostOcpuCount?: number; 
  public get initialHostOcpuCount() {
    return this.getNumberAttribute('initial_host_ocpu_count');
  }
  public set initialHostOcpuCount(value: number) {
    this._initialHostOcpuCount = value;
  }
  public resetInitialHostOcpuCount() {
    this._initialHostOcpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialHostOcpuCountInput() {
    return this._initialHostOcpuCount;
  }

  // initial_host_shape_name - computed: true, optional: true, required: false
  private _initialHostShapeName?: string; 
  public get initialHostShapeName() {
    return this.getStringAttribute('initial_host_shape_name');
  }
  public set initialHostShapeName(value: string) {
    this._initialHostShapeName = value;
  }
  public resetInitialHostShapeName() {
    this._initialHostShapeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialHostShapeNameInput() {
    return this._initialHostShapeName;
  }

  // instance_display_name_prefix - computed: true, optional: true, required: false
  private _instanceDisplayNamePrefix?: string; 
  public get instanceDisplayNamePrefix() {
    return this.getStringAttribute('instance_display_name_prefix');
  }
  public set instanceDisplayNamePrefix(value: string) {
    this._instanceDisplayNamePrefix = value;
  }
  public resetInstanceDisplayNamePrefix() {
    this._instanceDisplayNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceDisplayNamePrefixInput() {
    return this._instanceDisplayNamePrefix;
  }

  // is_shielded_instance_enabled - computed: true, optional: true, required: false
  private _isShieldedInstanceEnabled?: boolean | cdktf.IResolvable; 
  public get isShieldedInstanceEnabled() {
    return this.getBooleanAttribute('is_shielded_instance_enabled');
  }
  public set isShieldedInstanceEnabled(value: boolean | cdktf.IResolvable) {
    this._isShieldedInstanceEnabled = value;
  }
  public resetIsShieldedInstanceEnabled() {
    this._isShieldedInstanceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isShieldedInstanceEnabledInput() {
    return this._isShieldedInstanceEnabled;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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
  private _upgradeLicenses = new OcvpClusterUpgradeLicensesList(this, "upgrade_licenses", false);
  public get upgradeLicenses() {
    return this._upgradeLicenses;
  }

  // vmware_software_version - computed: true, optional: true, required: false
  private _vmwareSoftwareVersion?: string; 
  public get vmwareSoftwareVersion() {
    return this.getStringAttribute('vmware_software_version');
  }
  public set vmwareSoftwareVersion(value: string) {
    this._vmwareSoftwareVersion = value;
  }
  public resetVmwareSoftwareVersion() {
    this._vmwareSoftwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmwareSoftwareVersionInput() {
    return this._vmwareSoftwareVersion;
  }

  // vsphere_type - computed: true, optional: false, required: false
  public get vsphereType() {
    return this.getStringAttribute('vsphere_type');
  }

  // vsphere_upgrade_objects - computed: true, optional: false, required: false
  private _vsphereUpgradeObjects = new OcvpClusterVsphereUpgradeObjectsList(this, "vsphere_upgrade_objects", false);
  public get vsphereUpgradeObjects() {
    return this._vsphereUpgradeObjects;
  }

  // workload_network_cidr - computed: true, optional: true, required: false
  private _workloadNetworkCidr?: string; 
  public get workloadNetworkCidr() {
    return this.getStringAttribute('workload_network_cidr');
  }
  public set workloadNetworkCidr(value: string) {
    this._workloadNetworkCidr = value;
  }
  public resetWorkloadNetworkCidr() {
    this._workloadNetworkCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadNetworkCidrInput() {
    return this._workloadNetworkCidr;
  }

  // datastores - computed: false, optional: true, required: false
  private _datastores = new OcvpClusterDatastoresList(this, "datastores", false);
  public get datastores() {
    return this._datastores;
  }
  public putDatastores(value: OcvpClusterDatastores[] | cdktf.IResolvable) {
    this._datastores.internalValue = value;
  }
  public resetDatastores() {
    this._datastores.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoresInput() {
    return this._datastores.internalValue;
  }

  // network_configuration - computed: false, optional: false, required: true
  private _networkConfiguration = new OcvpClusterNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: OcvpClusterNetworkConfiguration) {
    this._networkConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OcvpClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OcvpClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attach_datastore_cluster_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attachDatastoreClusterIds),
      capacity_reservation_id: cdktf.stringToTerraform(this._capacityReservationId),
      compute_availability_domain: cdktf.stringToTerraform(this._computeAvailabilityDomain),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      detach_datastore_cluster_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._detachDatastoreClusterIds),
      display_name: cdktf.stringToTerraform(this._displayName),
      esxi_hosts_count: cdktf.numberToTerraform(this._esxiHostsCount),
      esxi_software_version: cdktf.stringToTerraform(this._esxiSoftwareVersion),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      initial_commitment: cdktf.stringToTerraform(this._initialCommitment),
      initial_host_ocpu_count: cdktf.numberToTerraform(this._initialHostOcpuCount),
      initial_host_shape_name: cdktf.stringToTerraform(this._initialHostShapeName),
      instance_display_name_prefix: cdktf.stringToTerraform(this._instanceDisplayNamePrefix),
      is_shielded_instance_enabled: cdktf.booleanToTerraform(this._isShieldedInstanceEnabled),
      sddc_id: cdktf.stringToTerraform(this._sddcId),
      vmware_software_version: cdktf.stringToTerraform(this._vmwareSoftwareVersion),
      workload_network_cidr: cdktf.stringToTerraform(this._workloadNetworkCidr),
      datastores: cdktf.listMapper(ocvpClusterDatastoresToTerraform, true)(this._datastores.internalValue),
      network_configuration: ocvpClusterNetworkConfigurationToTerraform(this._networkConfiguration.internalValue),
      timeouts: ocvpClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attach_datastore_cluster_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attachDatastoreClusterIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      capacity_reservation_id: {
        value: cdktf.stringToHclTerraform(this._capacityReservationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_availability_domain: {
        value: cdktf.stringToHclTerraform(this._computeAvailabilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      detach_datastore_cluster_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._detachDatastoreClusterIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      esxi_hosts_count: {
        value: cdktf.numberToHclTerraform(this._esxiHostsCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      esxi_software_version: {
        value: cdktf.stringToHclTerraform(this._esxiSoftwareVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initial_commitment: {
        value: cdktf.stringToHclTerraform(this._initialCommitment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initial_host_ocpu_count: {
        value: cdktf.numberToHclTerraform(this._initialHostOcpuCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      initial_host_shape_name: {
        value: cdktf.stringToHclTerraform(this._initialHostShapeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_display_name_prefix: {
        value: cdktf.stringToHclTerraform(this._instanceDisplayNamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_shielded_instance_enabled: {
        value: cdktf.booleanToHclTerraform(this._isShieldedInstanceEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sddc_id: {
        value: cdktf.stringToHclTerraform(this._sddcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vmware_software_version: {
        value: cdktf.stringToHclTerraform(this._vmwareSoftwareVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workload_network_cidr: {
        value: cdktf.stringToHclTerraform(this._workloadNetworkCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datastores: {
        value: cdktf.listMapperHcl(ocvpClusterDatastoresToHclTerraform, true)(this._datastores.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OcvpClusterDatastoresList",
      },
      network_configuration: {
        value: ocvpClusterNetworkConfigurationToHclTerraform(this._networkConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OcvpClusterNetworkConfigurationList",
      },
      timeouts: {
        value: ocvpClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OcvpClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
