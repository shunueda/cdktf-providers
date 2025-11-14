// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OcvpSddcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#capacity_reservation_id OcvpSddc#capacity_reservation_id}
  */
  readonly capacityReservationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#compartment_id OcvpSddc#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#compute_availability_domain OcvpSddc#compute_availability_domain}
  */
  readonly computeAvailabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#defined_tags OcvpSddc#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#display_name OcvpSddc#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#esxi_hosts_count OcvpSddc#esxi_hosts_count}
  */
  readonly esxiHostsCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#esxi_software_version OcvpSddc#esxi_software_version}
  */
  readonly esxiSoftwareVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#freeform_tags OcvpSddc#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#hcx_action OcvpSddc#hcx_action}
  */
  readonly hcxAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#hcx_vlan_id OcvpSddc#hcx_vlan_id}
  */
  readonly hcxVlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#id OcvpSddc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#initial_host_ocpu_count OcvpSddc#initial_host_ocpu_count}
  */
  readonly initialHostOcpuCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#initial_host_shape_name OcvpSddc#initial_host_shape_name}
  */
  readonly initialHostShapeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#initial_sku OcvpSddc#initial_sku}
  */
  readonly initialSku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#instance_display_name_prefix OcvpSddc#instance_display_name_prefix}
  */
  readonly instanceDisplayNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#is_hcx_enabled OcvpSddc#is_hcx_enabled}
  */
  readonly isHcxEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#is_shielded_instance_enabled OcvpSddc#is_shielded_instance_enabled}
  */
  readonly isShieldedInstanceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#is_single_host_sddc OcvpSddc#is_single_host_sddc}
  */
  readonly isSingleHostSddc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#nsx_edge_uplink1vlan_id OcvpSddc#nsx_edge_uplink1vlan_id}
  */
  readonly nsxEdgeUplink1VlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#nsx_edge_uplink2vlan_id OcvpSddc#nsx_edge_uplink2vlan_id}
  */
  readonly nsxEdgeUplink2VlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#nsx_edge_vtep_vlan_id OcvpSddc#nsx_edge_vtep_vlan_id}
  */
  readonly nsxEdgeVtepVlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#nsx_vtep_vlan_id OcvpSddc#nsx_vtep_vlan_id}
  */
  readonly nsxVtepVlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#provisioning_subnet_id OcvpSddc#provisioning_subnet_id}
  */
  readonly provisioningSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#provisioning_vlan_id OcvpSddc#provisioning_vlan_id}
  */
  readonly provisioningVlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#refresh_hcx_license_status OcvpSddc#refresh_hcx_license_status}
  */
  readonly refreshHcxLicenseStatus?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#replication_vlan_id OcvpSddc#replication_vlan_id}
  */
  readonly replicationVlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#reserving_hcx_on_premise_license_keys OcvpSddc#reserving_hcx_on_premise_license_keys}
  */
  readonly reservingHcxOnPremiseLicenseKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#ssh_authorized_keys OcvpSddc#ssh_authorized_keys}
  */
  readonly sshAuthorizedKeys: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#vmotion_vlan_id OcvpSddc#vmotion_vlan_id}
  */
  readonly vmotionVlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#vmware_software_version OcvpSddc#vmware_software_version}
  */
  readonly vmwareSoftwareVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#vsan_vlan_id OcvpSddc#vsan_vlan_id}
  */
  readonly vsanVlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#vsphere_vlan_id OcvpSddc#vsphere_vlan_id}
  */
  readonly vsphereVlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#workload_network_cidr OcvpSddc#workload_network_cidr}
  */
  readonly workloadNetworkCidr?: string;
  /**
  * datastores block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#datastores OcvpSddc#datastores}
  */
  readonly datastores?: OcvpSddcDatastores[] | cdktf.IResolvable;
  /**
  * initial_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#initial_configuration OcvpSddc#initial_configuration}
  */
  readonly initialConfiguration?: OcvpSddcInitialConfiguration[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#timeouts OcvpSddc#timeouts}
  */
  readonly timeouts?: OcvpSddcTimeouts;
}
export interface OcvpSddcHcxOnPremLicenses {
}

export function ocvpSddcHcxOnPremLicensesToTerraform(struct?: OcvpSddcHcxOnPremLicenses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ocvpSddcHcxOnPremLicensesToHclTerraform(struct?: OcvpSddcHcxOnPremLicenses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OcvpSddcHcxOnPremLicensesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OcvpSddcHcxOnPremLicenses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OcvpSddcHcxOnPremLicenses | undefined) {
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

export class OcvpSddcHcxOnPremLicensesList extends cdktf.ComplexList {

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
  public get(index: number): OcvpSddcHcxOnPremLicensesOutputReference {
    return new OcvpSddcHcxOnPremLicensesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OcvpSddcUpgradeLicenses {
}

export function ocvpSddcUpgradeLicensesToTerraform(struct?: OcvpSddcUpgradeLicenses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ocvpSddcUpgradeLicensesToHclTerraform(struct?: OcvpSddcUpgradeLicenses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OcvpSddcUpgradeLicensesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OcvpSddcUpgradeLicenses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OcvpSddcUpgradeLicenses | undefined) {
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

export class OcvpSddcUpgradeLicensesList extends cdktf.ComplexList {

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
  public get(index: number): OcvpSddcUpgradeLicensesOutputReference {
    return new OcvpSddcUpgradeLicensesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OcvpSddcVsphereUpgradeObjects {
}

export function ocvpSddcVsphereUpgradeObjectsToTerraform(struct?: OcvpSddcVsphereUpgradeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ocvpSddcVsphereUpgradeObjectsToHclTerraform(struct?: OcvpSddcVsphereUpgradeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OcvpSddcVsphereUpgradeObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OcvpSddcVsphereUpgradeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OcvpSddcVsphereUpgradeObjects | undefined) {
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

export class OcvpSddcVsphereUpgradeObjectsList extends cdktf.ComplexList {

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
  public get(index: number): OcvpSddcVsphereUpgradeObjectsOutputReference {
    return new OcvpSddcVsphereUpgradeObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OcvpSddcDatastores {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#block_volume_ids OcvpSddc#block_volume_ids}
  */
  readonly blockVolumeIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#datastore_type OcvpSddc#datastore_type}
  */
  readonly datastoreType: string;
}

export function ocvpSddcDatastoresToTerraform(struct?: OcvpSddcDatastores | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_volume_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blockVolumeIds),
    datastore_type: cdktf.stringToTerraform(struct!.datastoreType),
  }
}


export function ocvpSddcDatastoresToHclTerraform(struct?: OcvpSddcDatastores | cdktf.IResolvable): any {
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

export class OcvpSddcDatastoresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OcvpSddcDatastores | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OcvpSddcDatastores | cdktf.IResolvable | undefined) {
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

export class OcvpSddcDatastoresList extends cdktf.ComplexList {
  public internalValue? : OcvpSddcDatastores[] | cdktf.IResolvable

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
  public get(index: number): OcvpSddcDatastoresOutputReference {
    return new OcvpSddcDatastoresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#block_volume_ids OcvpSddc#block_volume_ids}
  */
  readonly blockVolumeIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#datastore_type OcvpSddc#datastore_type}
  */
  readonly datastoreType: string;
}

export function ocvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresToTerraform(struct?: OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_volume_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blockVolumeIds),
    datastore_type: cdktf.stringToTerraform(struct!.datastoreType),
  }
}


export function ocvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresToHclTerraform(struct?: OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores | cdktf.IResolvable): any {
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

export class OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores | cdktf.IResolvable | undefined) {
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

export class OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList extends cdktf.ComplexList {
  public internalValue? : OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores[] | cdktf.IResolvable

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
  public get(index: number): OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference {
    return new OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#hcx_vlan_id OcvpSddc#hcx_vlan_id}
  */
  readonly hcxVlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#nsx_edge_uplink1vlan_id OcvpSddc#nsx_edge_uplink1vlan_id}
  */
  readonly nsxEdgeUplink1VlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#nsx_edge_uplink2vlan_id OcvpSddc#nsx_edge_uplink2vlan_id}
  */
  readonly nsxEdgeUplink2VlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#nsx_edge_vtep_vlan_id OcvpSddc#nsx_edge_vtep_vlan_id}
  */
  readonly nsxEdgeVtepVlanId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#nsx_vtep_vlan_id OcvpSddc#nsx_vtep_vlan_id}
  */
  readonly nsxVtepVlanId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#provisioning_subnet_id OcvpSddc#provisioning_subnet_id}
  */
  readonly provisioningSubnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#provisioning_vlan_id OcvpSddc#provisioning_vlan_id}
  */
  readonly provisioningVlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#replication_vlan_id OcvpSddc#replication_vlan_id}
  */
  readonly replicationVlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#vmotion_vlan_id OcvpSddc#vmotion_vlan_id}
  */
  readonly vmotionVlanId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#vsan_vlan_id OcvpSddc#vsan_vlan_id}
  */
  readonly vsanVlanId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#vsphere_vlan_id OcvpSddc#vsphere_vlan_id}
  */
  readonly vsphereVlanId?: string;
}

export function ocvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationToTerraform(struct?: OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference | OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration): any {
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


export function ocvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationToHclTerraform(struct?: OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference | OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration): any {
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

export class OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration | undefined {
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

  public set internalValue(value: OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration | undefined) {
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
export interface OcvpSddcInitialConfigurationInitialClusterConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#capacity_reservation_id OcvpSddc#capacity_reservation_id}
  */
  readonly capacityReservationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#compute_availability_domain OcvpSddc#compute_availability_domain}
  */
  readonly computeAvailabilityDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#datastore_cluster_ids OcvpSddc#datastore_cluster_ids}
  */
  readonly datastoreClusterIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#display_name OcvpSddc#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#esxi_hosts_count OcvpSddc#esxi_hosts_count}
  */
  readonly esxiHostsCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#initial_commitment OcvpSddc#initial_commitment}
  */
  readonly initialCommitment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#initial_host_ocpu_count OcvpSddc#initial_host_ocpu_count}
  */
  readonly initialHostOcpuCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#initial_host_shape_name OcvpSddc#initial_host_shape_name}
  */
  readonly initialHostShapeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#instance_display_name_prefix OcvpSddc#instance_display_name_prefix}
  */
  readonly instanceDisplayNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#is_shielded_instance_enabled OcvpSddc#is_shielded_instance_enabled}
  */
  readonly isShieldedInstanceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#vsphere_type OcvpSddc#vsphere_type}
  */
  readonly vsphereType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#workload_network_cidr OcvpSddc#workload_network_cidr}
  */
  readonly workloadNetworkCidr?: string;
  /**
  * datastores block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#datastores OcvpSddc#datastores}
  */
  readonly datastores?: OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores[] | cdktf.IResolvable;
  /**
  * network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#network_configuration OcvpSddc#network_configuration}
  */
  readonly networkConfiguration?: OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration;
}

export function ocvpSddcInitialConfigurationInitialClusterConfigurationsToTerraform(struct?: OcvpSddcInitialConfigurationInitialClusterConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity_reservation_id: cdktf.stringToTerraform(struct!.capacityReservationId),
    compute_availability_domain: cdktf.stringToTerraform(struct!.computeAvailabilityDomain),
    datastore_cluster_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.datastoreClusterIds),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    esxi_hosts_count: cdktf.numberToTerraform(struct!.esxiHostsCount),
    initial_commitment: cdktf.stringToTerraform(struct!.initialCommitment),
    initial_host_ocpu_count: cdktf.numberToTerraform(struct!.initialHostOcpuCount),
    initial_host_shape_name: cdktf.stringToTerraform(struct!.initialHostShapeName),
    instance_display_name_prefix: cdktf.stringToTerraform(struct!.instanceDisplayNamePrefix),
    is_shielded_instance_enabled: cdktf.booleanToTerraform(struct!.isShieldedInstanceEnabled),
    vsphere_type: cdktf.stringToTerraform(struct!.vsphereType),
    workload_network_cidr: cdktf.stringToTerraform(struct!.workloadNetworkCidr),
    datastores: cdktf.listMapper(ocvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresToTerraform, true)(struct!.datastores),
    network_configuration: ocvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationToTerraform(struct!.networkConfiguration),
  }
}


export function ocvpSddcInitialConfigurationInitialClusterConfigurationsToHclTerraform(struct?: OcvpSddcInitialConfigurationInitialClusterConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity_reservation_id: {
      value: cdktf.stringToHclTerraform(struct!.capacityReservationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_availability_domain: {
      value: cdktf.stringToHclTerraform(struct!.computeAvailabilityDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datastore_cluster_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.datastoreClusterIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    esxi_hosts_count: {
      value: cdktf.numberToHclTerraform(struct!.esxiHostsCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_commitment: {
      value: cdktf.stringToHclTerraform(struct!.initialCommitment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_host_ocpu_count: {
      value: cdktf.numberToHclTerraform(struct!.initialHostOcpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_host_shape_name: {
      value: cdktf.stringToHclTerraform(struct!.initialHostShapeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_display_name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.instanceDisplayNamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_shielded_instance_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isShieldedInstanceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vsphere_type: {
      value: cdktf.stringToHclTerraform(struct!.vsphereType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workload_network_cidr: {
      value: cdktf.stringToHclTerraform(struct!.workloadNetworkCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datastores: {
      value: cdktf.listMapperHcl(ocvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresToHclTerraform, true)(struct!.datastores),
      isBlock: true,
      type: "list",
      storageClassType: "OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList",
    },
    network_configuration: {
      value: ocvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationToHclTerraform(struct!.networkConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OcvpSddcInitialConfigurationInitialClusterConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityReservationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationId = this._capacityReservationId;
    }
    if (this._computeAvailabilityDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeAvailabilityDomain = this._computeAvailabilityDomain;
    }
    if (this._datastoreClusterIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreClusterIds = this._datastoreClusterIds;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._esxiHostsCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.esxiHostsCount = this._esxiHostsCount;
    }
    if (this._initialCommitment !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialCommitment = this._initialCommitment;
    }
    if (this._initialHostOcpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialHostOcpuCount = this._initialHostOcpuCount;
    }
    if (this._initialHostShapeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialHostShapeName = this._initialHostShapeName;
    }
    if (this._instanceDisplayNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceDisplayNamePrefix = this._instanceDisplayNamePrefix;
    }
    if (this._isShieldedInstanceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isShieldedInstanceEnabled = this._isShieldedInstanceEnabled;
    }
    if (this._vsphereType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsphereType = this._vsphereType;
    }
    if (this._workloadNetworkCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadNetworkCidr = this._workloadNetworkCidr;
    }
    if (this._datastores?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastores = this._datastores?.internalValue;
    }
    if (this._networkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkConfiguration = this._networkConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OcvpSddcInitialConfigurationInitialClusterConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityReservationId = undefined;
      this._computeAvailabilityDomain = undefined;
      this._datastoreClusterIds = undefined;
      this._displayName = undefined;
      this._esxiHostsCount = undefined;
      this._initialCommitment = undefined;
      this._initialHostOcpuCount = undefined;
      this._initialHostShapeName = undefined;
      this._instanceDisplayNamePrefix = undefined;
      this._isShieldedInstanceEnabled = undefined;
      this._vsphereType = undefined;
      this._workloadNetworkCidr = undefined;
      this._datastores.internalValue = undefined;
      this._networkConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacityReservationId = value.capacityReservationId;
      this._computeAvailabilityDomain = value.computeAvailabilityDomain;
      this._datastoreClusterIds = value.datastoreClusterIds;
      this._displayName = value.displayName;
      this._esxiHostsCount = value.esxiHostsCount;
      this._initialCommitment = value.initialCommitment;
      this._initialHostOcpuCount = value.initialHostOcpuCount;
      this._initialHostShapeName = value.initialHostShapeName;
      this._instanceDisplayNamePrefix = value.instanceDisplayNamePrefix;
      this._isShieldedInstanceEnabled = value.isShieldedInstanceEnabled;
      this._vsphereType = value.vsphereType;
      this._workloadNetworkCidr = value.workloadNetworkCidr;
      this._datastores.internalValue = value.datastores;
      this._networkConfiguration.internalValue = value.networkConfiguration;
    }
  }

  // actual_esxi_hosts_count - computed: true, optional: false, required: false
  public get actualEsxiHostsCount() {
    return this.getNumberAttribute('actual_esxi_hosts_count');
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

  // datastore_cluster_ids - computed: true, optional: true, required: false
  private _datastoreClusterIds?: string[]; 
  public get datastoreClusterIds() {
    return this.getListAttribute('datastore_cluster_ids');
  }
  public set datastoreClusterIds(value: string[]) {
    this._datastoreClusterIds = value;
  }
  public resetDatastoreClusterIds() {
    this._datastoreClusterIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreClusterIdsInput() {
    return this._datastoreClusterIds;
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

  // vsphere_type - computed: false, optional: false, required: true
  private _vsphereType?: string; 
  public get vsphereType() {
    return this.getStringAttribute('vsphere_type');
  }
  public set vsphereType(value: string) {
    this._vsphereType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereTypeInput() {
    return this._vsphereType;
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
  private _datastores = new OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList(this, "datastores", false);
  public get datastores() {
    return this._datastores;
  }
  public putDatastores(value: OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores[] | cdktf.IResolvable) {
    this._datastores.internalValue = value;
  }
  public resetDatastores() {
    this._datastores.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoresInput() {
    return this._datastores.internalValue;
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration = new OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration) {
    this._networkConfiguration.internalValue = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }
}

export class OcvpSddcInitialConfigurationInitialClusterConfigurationsList extends cdktf.ComplexList {
  public internalValue? : OcvpSddcInitialConfigurationInitialClusterConfigurations[] | cdktf.IResolvable

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
  public get(index: number): OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference {
    return new OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OcvpSddcInitialConfiguration {
  /**
  * initial_cluster_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#initial_cluster_configurations OcvpSddc#initial_cluster_configurations}
  */
  readonly initialClusterConfigurations: OcvpSddcInitialConfigurationInitialClusterConfigurations[] | cdktf.IResolvable;
}

export function ocvpSddcInitialConfigurationToTerraform(struct?: OcvpSddcInitialConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    initial_cluster_configurations: cdktf.listMapper(ocvpSddcInitialConfigurationInitialClusterConfigurationsToTerraform, true)(struct!.initialClusterConfigurations),
  }
}


export function ocvpSddcInitialConfigurationToHclTerraform(struct?: OcvpSddcInitialConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    initial_cluster_configurations: {
      value: cdktf.listMapperHcl(ocvpSddcInitialConfigurationInitialClusterConfigurationsToHclTerraform, true)(struct!.initialClusterConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "OcvpSddcInitialConfigurationInitialClusterConfigurationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OcvpSddcInitialConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OcvpSddcInitialConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initialClusterConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialClusterConfigurations = this._initialClusterConfigurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OcvpSddcInitialConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._initialClusterConfigurations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._initialClusterConfigurations.internalValue = value.initialClusterConfigurations;
    }
  }

  // initial_cluster_configurations - computed: false, optional: false, required: true
  private _initialClusterConfigurations = new OcvpSddcInitialConfigurationInitialClusterConfigurationsList(this, "initial_cluster_configurations", false);
  public get initialClusterConfigurations() {
    return this._initialClusterConfigurations;
  }
  public putInitialClusterConfigurations(value: OcvpSddcInitialConfigurationInitialClusterConfigurations[] | cdktf.IResolvable) {
    this._initialClusterConfigurations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initialClusterConfigurationsInput() {
    return this._initialClusterConfigurations.internalValue;
  }
}

export class OcvpSddcInitialConfigurationList extends cdktf.ComplexList {
  public internalValue? : OcvpSddcInitialConfiguration[] | cdktf.IResolvable

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
  public get(index: number): OcvpSddcInitialConfigurationOutputReference {
    return new OcvpSddcInitialConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OcvpSddcTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#create OcvpSddc#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#delete OcvpSddc#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#update OcvpSddc#update}
  */
  readonly update?: string;
}

export function ocvpSddcTimeoutsToTerraform(struct?: OcvpSddcTimeouts | cdktf.IResolvable): any {
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


export function ocvpSddcTimeoutsToHclTerraform(struct?: OcvpSddcTimeouts | cdktf.IResolvable): any {
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

export class OcvpSddcTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OcvpSddcTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OcvpSddcTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc oci_ocvp_sddc}
*/
export class OcvpSddc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_ocvp_sddc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OcvpSddc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OcvpSddc to import
  * @param importFromId The id of the existing OcvpSddc that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OcvpSddc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_ocvp_sddc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ocvp_sddc oci_ocvp_sddc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OcvpSddcConfig
  */
  public constructor(scope: Construct, id: string, config: OcvpSddcConfig) {
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
    this._capacityReservationId = config.capacityReservationId;
    this._compartmentId = config.compartmentId;
    this._computeAvailabilityDomain = config.computeAvailabilityDomain;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._esxiHostsCount = config.esxiHostsCount;
    this._esxiSoftwareVersion = config.esxiSoftwareVersion;
    this._freeformTags = config.freeformTags;
    this._hcxAction = config.hcxAction;
    this._hcxVlanId = config.hcxVlanId;
    this._id = config.id;
    this._initialHostOcpuCount = config.initialHostOcpuCount;
    this._initialHostShapeName = config.initialHostShapeName;
    this._initialSku = config.initialSku;
    this._instanceDisplayNamePrefix = config.instanceDisplayNamePrefix;
    this._isHcxEnabled = config.isHcxEnabled;
    this._isShieldedInstanceEnabled = config.isShieldedInstanceEnabled;
    this._isSingleHostSddc = config.isSingleHostSddc;
    this._nsxEdgeUplink1VlanId = config.nsxEdgeUplink1VlanId;
    this._nsxEdgeUplink2VlanId = config.nsxEdgeUplink2VlanId;
    this._nsxEdgeVtepVlanId = config.nsxEdgeVtepVlanId;
    this._nsxVtepVlanId = config.nsxVtepVlanId;
    this._provisioningSubnetId = config.provisioningSubnetId;
    this._provisioningVlanId = config.provisioningVlanId;
    this._refreshHcxLicenseStatus = config.refreshHcxLicenseStatus;
    this._replicationVlanId = config.replicationVlanId;
    this._reservingHcxOnPremiseLicenseKeys = config.reservingHcxOnPremiseLicenseKeys;
    this._sshAuthorizedKeys = config.sshAuthorizedKeys;
    this._vmotionVlanId = config.vmotionVlanId;
    this._vmwareSoftwareVersion = config.vmwareSoftwareVersion;
    this._vsanVlanId = config.vsanVlanId;
    this._vsphereVlanId = config.vsphereVlanId;
    this._workloadNetworkCidr = config.workloadNetworkCidr;
    this._datastores.internalValue = config.datastores;
    this._initialConfiguration.internalValue = config.initialConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actual_esxi_hosts_count - computed: true, optional: false, required: false
  public get actualEsxiHostsCount() {
    return this.getNumberAttribute('actual_esxi_hosts_count');
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

  // clusters_count - computed: true, optional: false, required: false
  public get clustersCount() {
    return this.getNumberAttribute('clusters_count');
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // compute_availability_domain - computed: false, optional: true, required: false
  private _computeAvailabilityDomain?: string; 
  public get computeAvailabilityDomain() {
    return this.getStringAttribute('compute_availability_domain');
  }
  public set computeAvailabilityDomain(value: string) {
    this._computeAvailabilityDomain = value;
  }
  public resetComputeAvailabilityDomain() {
    this._computeAvailabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeAvailabilityDomainInput() {
    return this._computeAvailabilityDomain;
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

  // esxi_hosts_count - computed: false, optional: true, required: false
  private _esxiHostsCount?: number; 
  public get esxiHostsCount() {
    return this.getNumberAttribute('esxi_hosts_count');
  }
  public set esxiHostsCount(value: number) {
    this._esxiHostsCount = value;
  }
  public resetEsxiHostsCount() {
    this._esxiHostsCount = undefined;
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

  // hcx_action - computed: false, optional: true, required: false
  private _hcxAction?: string; 
  public get hcxAction() {
    return this.getStringAttribute('hcx_action');
  }
  public set hcxAction(value: string) {
    this._hcxAction = value;
  }
  public resetHcxAction() {
    this._hcxAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hcxActionInput() {
    return this._hcxAction;
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
  private _hcxOnPremLicenses = new OcvpSddcHcxOnPremLicensesList(this, "hcx_on_prem_licenses", false);
  public get hcxOnPremLicenses() {
    return this._hcxOnPremLicenses;
  }

  // hcx_private_ip_id - computed: true, optional: false, required: false
  public get hcxPrivateIpId() {
    return this.getStringAttribute('hcx_private_ip_id');
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

  // initial_sku - computed: true, optional: true, required: false
  private _initialSku?: string; 
  public get initialSku() {
    return this.getStringAttribute('initial_sku');
  }
  public set initialSku(value: string) {
    this._initialSku = value;
  }
  public resetInitialSku() {
    this._initialSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSkuInput() {
    return this._initialSku;
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

  // is_hcx_enabled - computed: true, optional: true, required: false
  private _isHcxEnabled?: boolean | cdktf.IResolvable; 
  public get isHcxEnabled() {
    return this.getBooleanAttribute('is_hcx_enabled');
  }
  public set isHcxEnabled(value: boolean | cdktf.IResolvable) {
    this._isHcxEnabled = value;
  }
  public resetIsHcxEnabled() {
    this._isHcxEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHcxEnabledInput() {
    return this._isHcxEnabled;
  }

  // is_hcx_enterprise_enabled - computed: true, optional: false, required: false
  public get isHcxEnterpriseEnabled() {
    return this.getBooleanAttribute('is_hcx_enterprise_enabled');
  }

  // is_hcx_pending_downgrade - computed: true, optional: false, required: false
  public get isHcxPendingDowngrade() {
    return this.getBooleanAttribute('is_hcx_pending_downgrade');
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

  // is_single_host_sddc - computed: true, optional: true, required: false
  private _isSingleHostSddc?: boolean | cdktf.IResolvable; 
  public get isSingleHostSddc() {
    return this.getBooleanAttribute('is_single_host_sddc');
  }
  public set isSingleHostSddc(value: boolean | cdktf.IResolvable) {
    this._isSingleHostSddc = value;
  }
  public resetIsSingleHostSddc() {
    this._isSingleHostSddc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSingleHostSddcInput() {
    return this._isSingleHostSddc;
  }

  // nsx_edge_uplink1vlan_id - computed: false, optional: true, required: false
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

  // nsx_edge_uplink2vlan_id - computed: false, optional: true, required: false
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

  // nsx_edge_uplink_ip_id - computed: true, optional: false, required: false
  public get nsxEdgeUplinkIpId() {
    return this.getStringAttribute('nsx_edge_uplink_ip_id');
  }

  // nsx_edge_vtep_vlan_id - computed: false, optional: true, required: false
  private _nsxEdgeVtepVlanId?: string; 
  public get nsxEdgeVtepVlanId() {
    return this.getStringAttribute('nsx_edge_vtep_vlan_id');
  }
  public set nsxEdgeVtepVlanId(value: string) {
    this._nsxEdgeVtepVlanId = value;
  }
  public resetNsxEdgeVtepVlanId() {
    this._nsxEdgeVtepVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxEdgeVtepVlanIdInput() {
    return this._nsxEdgeVtepVlanId;
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

  // nsx_vtep_vlan_id - computed: false, optional: true, required: false
  private _nsxVtepVlanId?: string; 
  public get nsxVtepVlanId() {
    return this.getStringAttribute('nsx_vtep_vlan_id');
  }
  public set nsxVtepVlanId(value: string) {
    this._nsxVtepVlanId = value;
  }
  public resetNsxVtepVlanId() {
    this._nsxVtepVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxVtepVlanIdInput() {
    return this._nsxVtepVlanId;
  }

  // provisioning_subnet_id - computed: false, optional: true, required: false
  private _provisioningSubnetId?: string; 
  public get provisioningSubnetId() {
    return this.getStringAttribute('provisioning_subnet_id');
  }
  public set provisioningSubnetId(value: string) {
    this._provisioningSubnetId = value;
  }
  public resetProvisioningSubnetId() {
    this._provisioningSubnetId = undefined;
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

  // refresh_hcx_license_status - computed: false, optional: true, required: false
  private _refreshHcxLicenseStatus?: boolean | cdktf.IResolvable; 
  public get refreshHcxLicenseStatus() {
    return this.getBooleanAttribute('refresh_hcx_license_status');
  }
  public set refreshHcxLicenseStatus(value: boolean | cdktf.IResolvable) {
    this._refreshHcxLicenseStatus = value;
  }
  public resetRefreshHcxLicenseStatus() {
    this._refreshHcxLicenseStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshHcxLicenseStatusInput() {
    return this._refreshHcxLicenseStatus;
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

  // reserving_hcx_on_premise_license_keys - computed: false, optional: true, required: false
  private _reservingHcxOnPremiseLicenseKeys?: string[]; 
  public get reservingHcxOnPremiseLicenseKeys() {
    return this.getListAttribute('reserving_hcx_on_premise_license_keys');
  }
  public set reservingHcxOnPremiseLicenseKeys(value: string[]) {
    this._reservingHcxOnPremiseLicenseKeys = value;
  }
  public resetReservingHcxOnPremiseLicenseKeys() {
    this._reservingHcxOnPremiseLicenseKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservingHcxOnPremiseLicenseKeysInput() {
    return this._reservingHcxOnPremiseLicenseKeys;
  }

  // ssh_authorized_keys - computed: false, optional: false, required: true
  private _sshAuthorizedKeys?: string; 
  public get sshAuthorizedKeys() {
    return this.getStringAttribute('ssh_authorized_keys');
  }
  public set sshAuthorizedKeys(value: string) {
    this._sshAuthorizedKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAuthorizedKeysInput() {
    return this._sshAuthorizedKeys;
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
  private _upgradeLicenses = new OcvpSddcUpgradeLicensesList(this, "upgrade_licenses", false);
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

  // vmotion_vlan_id - computed: false, optional: true, required: false
  private _vmotionVlanId?: string; 
  public get vmotionVlanId() {
    return this.getStringAttribute('vmotion_vlan_id');
  }
  public set vmotionVlanId(value: string) {
    this._vmotionVlanId = value;
  }
  public resetVmotionVlanId() {
    this._vmotionVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmotionVlanIdInput() {
    return this._vmotionVlanId;
  }

  // vmware_software_version - computed: false, optional: false, required: true
  private _vmwareSoftwareVersion?: string; 
  public get vmwareSoftwareVersion() {
    return this.getStringAttribute('vmware_software_version');
  }
  public set vmwareSoftwareVersion(value: string) {
    this._vmwareSoftwareVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmwareSoftwareVersionInput() {
    return this._vmwareSoftwareVersion;
  }

  // vsan_vlan_id - computed: false, optional: true, required: false
  private _vsanVlanId?: string; 
  public get vsanVlanId() {
    return this.getStringAttribute('vsan_vlan_id');
  }
  public set vsanVlanId(value: string) {
    this._vsanVlanId = value;
  }
  public resetVsanVlanId() {
    this._vsanVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsanVlanIdInput() {
    return this._vsanVlanId;
  }

  // vsphere_upgrade_guide - computed: true, optional: false, required: false
  public get vsphereUpgradeGuide() {
    return this.getStringAttribute('vsphere_upgrade_guide');
  }

  // vsphere_upgrade_objects - computed: true, optional: false, required: false
  private _vsphereUpgradeObjects = new OcvpSddcVsphereUpgradeObjectsList(this, "vsphere_upgrade_objects", false);
  public get vsphereUpgradeObjects() {
    return this._vsphereUpgradeObjects;
  }

  // vsphere_vlan_id - computed: false, optional: true, required: false
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
  private _datastores = new OcvpSddcDatastoresList(this, "datastores", false);
  public get datastores() {
    return this._datastores;
  }
  public putDatastores(value: OcvpSddcDatastores[] | cdktf.IResolvable) {
    this._datastores.internalValue = value;
  }
  public resetDatastores() {
    this._datastores.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoresInput() {
    return this._datastores.internalValue;
  }

  // initial_configuration - computed: false, optional: true, required: false
  private _initialConfiguration = new OcvpSddcInitialConfigurationList(this, "initial_configuration", false);
  public get initialConfiguration() {
    return this._initialConfiguration;
  }
  public putInitialConfiguration(value: OcvpSddcInitialConfiguration[] | cdktf.IResolvable) {
    this._initialConfiguration.internalValue = value;
  }
  public resetInitialConfiguration() {
    this._initialConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialConfigurationInput() {
    return this._initialConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OcvpSddcTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OcvpSddcTimeouts) {
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
      capacity_reservation_id: cdktf.stringToTerraform(this._capacityReservationId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      compute_availability_domain: cdktf.stringToTerraform(this._computeAvailabilityDomain),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      esxi_hosts_count: cdktf.numberToTerraform(this._esxiHostsCount),
      esxi_software_version: cdktf.stringToTerraform(this._esxiSoftwareVersion),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      hcx_action: cdktf.stringToTerraform(this._hcxAction),
      hcx_vlan_id: cdktf.stringToTerraform(this._hcxVlanId),
      id: cdktf.stringToTerraform(this._id),
      initial_host_ocpu_count: cdktf.numberToTerraform(this._initialHostOcpuCount),
      initial_host_shape_name: cdktf.stringToTerraform(this._initialHostShapeName),
      initial_sku: cdktf.stringToTerraform(this._initialSku),
      instance_display_name_prefix: cdktf.stringToTerraform(this._instanceDisplayNamePrefix),
      is_hcx_enabled: cdktf.booleanToTerraform(this._isHcxEnabled),
      is_shielded_instance_enabled: cdktf.booleanToTerraform(this._isShieldedInstanceEnabled),
      is_single_host_sddc: cdktf.booleanToTerraform(this._isSingleHostSddc),
      nsx_edge_uplink1vlan_id: cdktf.stringToTerraform(this._nsxEdgeUplink1VlanId),
      nsx_edge_uplink2vlan_id: cdktf.stringToTerraform(this._nsxEdgeUplink2VlanId),
      nsx_edge_vtep_vlan_id: cdktf.stringToTerraform(this._nsxEdgeVtepVlanId),
      nsx_vtep_vlan_id: cdktf.stringToTerraform(this._nsxVtepVlanId),
      provisioning_subnet_id: cdktf.stringToTerraform(this._provisioningSubnetId),
      provisioning_vlan_id: cdktf.stringToTerraform(this._provisioningVlanId),
      refresh_hcx_license_status: cdktf.booleanToTerraform(this._refreshHcxLicenseStatus),
      replication_vlan_id: cdktf.stringToTerraform(this._replicationVlanId),
      reserving_hcx_on_premise_license_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._reservingHcxOnPremiseLicenseKeys),
      ssh_authorized_keys: cdktf.stringToTerraform(this._sshAuthorizedKeys),
      vmotion_vlan_id: cdktf.stringToTerraform(this._vmotionVlanId),
      vmware_software_version: cdktf.stringToTerraform(this._vmwareSoftwareVersion),
      vsan_vlan_id: cdktf.stringToTerraform(this._vsanVlanId),
      vsphere_vlan_id: cdktf.stringToTerraform(this._vsphereVlanId),
      workload_network_cidr: cdktf.stringToTerraform(this._workloadNetworkCidr),
      datastores: cdktf.listMapper(ocvpSddcDatastoresToTerraform, true)(this._datastores.internalValue),
      initial_configuration: cdktf.listMapper(ocvpSddcInitialConfigurationToTerraform, true)(this._initialConfiguration.internalValue),
      timeouts: ocvpSddcTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity_reservation_id: {
        value: cdktf.stringToHclTerraform(this._capacityReservationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
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
      hcx_action: {
        value: cdktf.stringToHclTerraform(this._hcxAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hcx_vlan_id: {
        value: cdktf.stringToHclTerraform(this._hcxVlanId),
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
      initial_sku: {
        value: cdktf.stringToHclTerraform(this._initialSku),
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
      is_hcx_enabled: {
        value: cdktf.booleanToHclTerraform(this._isHcxEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_shielded_instance_enabled: {
        value: cdktf.booleanToHclTerraform(this._isShieldedInstanceEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_single_host_sddc: {
        value: cdktf.booleanToHclTerraform(this._isSingleHostSddc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nsx_edge_uplink1vlan_id: {
        value: cdktf.stringToHclTerraform(this._nsxEdgeUplink1VlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsx_edge_uplink2vlan_id: {
        value: cdktf.stringToHclTerraform(this._nsxEdgeUplink2VlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsx_edge_vtep_vlan_id: {
        value: cdktf.stringToHclTerraform(this._nsxEdgeVtepVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsx_vtep_vlan_id: {
        value: cdktf.stringToHclTerraform(this._nsxVtepVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioning_subnet_id: {
        value: cdktf.stringToHclTerraform(this._provisioningSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioning_vlan_id: {
        value: cdktf.stringToHclTerraform(this._provisioningVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_hcx_license_status: {
        value: cdktf.booleanToHclTerraform(this._refreshHcxLicenseStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replication_vlan_id: {
        value: cdktf.stringToHclTerraform(this._replicationVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reserving_hcx_on_premise_license_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._reservingHcxOnPremiseLicenseKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ssh_authorized_keys: {
        value: cdktf.stringToHclTerraform(this._sshAuthorizedKeys),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vmotion_vlan_id: {
        value: cdktf.stringToHclTerraform(this._vmotionVlanId),
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
      vsan_vlan_id: {
        value: cdktf.stringToHclTerraform(this._vsanVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vsphere_vlan_id: {
        value: cdktf.stringToHclTerraform(this._vsphereVlanId),
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
        value: cdktf.listMapperHcl(ocvpSddcDatastoresToHclTerraform, true)(this._datastores.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OcvpSddcDatastoresList",
      },
      initial_configuration: {
        value: cdktf.listMapperHcl(ocvpSddcInitialConfigurationToHclTerraform, true)(this._initialConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OcvpSddcInitialConfigurationList",
      },
      timeouts: {
        value: ocvpSddcTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OcvpSddcTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
