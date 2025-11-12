// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BdsBdsInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#bootstrap_script_url BdsBdsInstance#bootstrap_script_url}
  */
  readonly bootstrapScriptUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#cluster_admin_password BdsBdsInstance#cluster_admin_password}
  */
  readonly clusterAdminPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#cluster_profile BdsBdsInstance#cluster_profile}
  */
  readonly clusterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#cluster_public_key BdsBdsInstance#cluster_public_key}
  */
  readonly clusterPublicKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#cluster_version BdsBdsInstance#cluster_version}
  */
  readonly clusterVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#compartment_id BdsBdsInstance#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#defined_tags BdsBdsInstance#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#display_name BdsBdsInstance#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#freeform_tags BdsBdsInstance#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#id BdsBdsInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#ignore_existing_nodes_shape BdsBdsInstance#ignore_existing_nodes_shape}
  */
  readonly ignoreExistingNodesShape?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#is_cloud_sql_configured BdsBdsInstance#is_cloud_sql_configured}
  */
  readonly isCloudSqlConfigured?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#is_force_remove_enabled BdsBdsInstance#is_force_remove_enabled}
  */
  readonly isForceRemoveEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#is_force_stop_jobs BdsBdsInstance#is_force_stop_jobs}
  */
  readonly isForceStopJobs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#is_high_availability BdsBdsInstance#is_high_availability}
  */
  readonly isHighAvailability: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#is_kafka_configured BdsBdsInstance#is_kafka_configured}
  */
  readonly isKafkaConfigured?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#is_secure BdsBdsInstance#is_secure}
  */
  readonly isSecure: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#kerberos_realm_name BdsBdsInstance#kerberos_realm_name}
  */
  readonly kerberosRealmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#kms_key_id BdsBdsInstance#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#os_patch_version BdsBdsInstance#os_patch_version}
  */
  readonly osPatchVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#remove_node BdsBdsInstance#remove_node}
  */
  readonly removeNode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#state BdsBdsInstance#state}
  */
  readonly state?: string;
  /**
  * bds_cluster_version_summary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#bds_cluster_version_summary BdsBdsInstance#bds_cluster_version_summary}
  */
  readonly bdsClusterVersionSummary?: BdsBdsInstanceBdsClusterVersionSummary;
  /**
  * cloud_sql_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#cloud_sql_details BdsBdsInstance#cloud_sql_details}
  */
  readonly cloudSqlDetails?: BdsBdsInstanceCloudSqlDetails[] | cdktf.IResolvable;
  /**
  * compute_only_worker_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#compute_only_worker_node BdsBdsInstance#compute_only_worker_node}
  */
  readonly computeOnlyWorkerNode?: BdsBdsInstanceComputeOnlyWorkerNode;
  /**
  * edge_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#edge_node BdsBdsInstance#edge_node}
  */
  readonly edgeNode?: BdsBdsInstanceEdgeNode;
  /**
  * kafka_broker_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#kafka_broker_node BdsBdsInstance#kafka_broker_node}
  */
  readonly kafkaBrokerNode?: BdsBdsInstanceKafkaBrokerNode;
  /**
  * master_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#master_node BdsBdsInstance#master_node}
  */
  readonly masterNode: BdsBdsInstanceMasterNode;
  /**
  * network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#network_config BdsBdsInstance#network_config}
  */
  readonly networkConfig?: BdsBdsInstanceNetworkConfig;
  /**
  * start_cluster_shape_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#start_cluster_shape_configs BdsBdsInstance#start_cluster_shape_configs}
  */
  readonly startClusterShapeConfigs?: BdsBdsInstanceStartClusterShapeConfigs[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#timeouts BdsBdsInstance#timeouts}
  */
  readonly timeouts?: BdsBdsInstanceTimeouts;
  /**
  * util_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#util_node BdsBdsInstance#util_node}
  */
  readonly utilNode: BdsBdsInstanceUtilNode;
  /**
  * worker_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#worker_node BdsBdsInstance#worker_node}
  */
  readonly workerNode: BdsBdsInstanceWorkerNode;
}
export interface BdsBdsInstanceClusterDetails {
}

export function bdsBdsInstanceClusterDetailsToTerraform(struct?: BdsBdsInstanceClusterDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bdsBdsInstanceClusterDetailsToHclTerraform(struct?: BdsBdsInstanceClusterDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BdsBdsInstanceClusterDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BdsBdsInstanceClusterDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceClusterDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ambari_url - computed: true, optional: false, required: false
  public get ambariUrl() {
    return this.getStringAttribute('ambari_url');
  }

  // bd_cell_version - computed: true, optional: false, required: false
  public get bdCellVersion() {
    return this.getStringAttribute('bd_cell_version');
  }

  // bda_version - computed: true, optional: false, required: false
  public get bdaVersion() {
    return this.getStringAttribute('bda_version');
  }

  // bdm_version - computed: true, optional: false, required: false
  public get bdmVersion() {
    return this.getStringAttribute('bdm_version');
  }

  // bds_version - computed: true, optional: false, required: false
  public get bdsVersion() {
    return this.getStringAttribute('bds_version');
  }

  // big_data_manager_url - computed: true, optional: false, required: false
  public get bigDataManagerUrl() {
    return this.getStringAttribute('big_data_manager_url');
  }

  // cloudera_manager_url - computed: true, optional: false, required: false
  public get clouderaManagerUrl() {
    return this.getStringAttribute('cloudera_manager_url');
  }

  // csql_cell_version - computed: true, optional: false, required: false
  public get csqlCellVersion() {
    return this.getStringAttribute('csql_cell_version');
  }

  // db_version - computed: true, optional: false, required: false
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }

  // hue_server_url - computed: true, optional: false, required: false
  public get hueServerUrl() {
    return this.getStringAttribute('hue_server_url');
  }

  // jupyter_hub_url - computed: true, optional: false, required: false
  public get jupyterHubUrl() {
    return this.getStringAttribute('jupyter_hub_url');
  }

  // odh_version - computed: true, optional: false, required: false
  public get odhVersion() {
    return this.getStringAttribute('odh_version');
  }

  // os_version - computed: true, optional: false, required: false
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_refreshed - computed: true, optional: false, required: false
  public get timeRefreshed() {
    return this.getStringAttribute('time_refreshed');
  }
}

export class BdsBdsInstanceClusterDetailsList extends cdktf.ComplexList {

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
  public get(index: number): BdsBdsInstanceClusterDetailsOutputReference {
    return new BdsBdsInstanceClusterDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BdsBdsInstanceNodesAttachedBlockVolumes {
}

export function bdsBdsInstanceNodesAttachedBlockVolumesToTerraform(struct?: BdsBdsInstanceNodesAttachedBlockVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bdsBdsInstanceNodesAttachedBlockVolumesToHclTerraform(struct?: BdsBdsInstanceNodesAttachedBlockVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BdsBdsInstanceNodesAttachedBlockVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BdsBdsInstanceNodesAttachedBlockVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceNodesAttachedBlockVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // volume_attachment_id - computed: true, optional: false, required: false
  public get volumeAttachmentId() {
    return this.getStringAttribute('volume_attachment_id');
  }

  // volume_size_in_gbs - computed: true, optional: false, required: false
  public get volumeSizeInGbs() {
    return this.getStringAttribute('volume_size_in_gbs');
  }
}

export class BdsBdsInstanceNodesAttachedBlockVolumesList extends cdktf.ComplexList {

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
  public get(index: number): BdsBdsInstanceNodesAttachedBlockVolumesOutputReference {
    return new BdsBdsInstanceNodesAttachedBlockVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BdsBdsInstanceNodes {
}

export function bdsBdsInstanceNodesToTerraform(struct?: BdsBdsInstanceNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bdsBdsInstanceNodesToHclTerraform(struct?: BdsBdsInstanceNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BdsBdsInstanceNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BdsBdsInstanceNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attached_block_volumes - computed: true, optional: false, required: false
  private _attachedBlockVolumes = new BdsBdsInstanceNodesAttachedBlockVolumesList(this, "attached_block_volumes", false);
  public get attachedBlockVolumes() {
    return this._attachedBlockVolumes;
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // fault_domain - computed: true, optional: false, required: false
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // is_reboot_required - computed: true, optional: false, required: false
  public get isRebootRequired() {
    return this.getBooleanAttribute('is_reboot_required');
  }

  // local_disks_total_size_in_gbs - computed: true, optional: false, required: false
  public get localDisksTotalSizeInGbs() {
    return this.getNumberAttribute('local_disks_total_size_in_gbs');
  }

  // memory_in_gbs - computed: true, optional: false, required: false
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // node_type - computed: true, optional: false, required: false
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }

  // nvmes - computed: true, optional: false, required: false
  public get nvmes() {
    return this.getNumberAttribute('nvmes');
  }

  // ocpus - computed: true, optional: false, required: false
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }

  // odh_version - computed: true, optional: false, required: false
  public get odhVersion() {
    return this.getStringAttribute('odh_version');
  }

  // os_version - computed: true, optional: false, required: false
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // ssh_fingerprint - computed: true, optional: false, required: false
  public get sshFingerprint() {
    return this.getStringAttribute('ssh_fingerprint');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_maintenance_reboot_due - computed: true, optional: false, required: false
  public get timeMaintenanceRebootDue() {
    return this.getStringAttribute('time_maintenance_reboot_due');
  }
}

export class BdsBdsInstanceNodesList extends cdktf.ComplexList {

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
  public get(index: number): BdsBdsInstanceNodesOutputReference {
    return new BdsBdsInstanceNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BdsBdsInstanceBdsClusterVersionSummary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#bds_version BdsBdsInstance#bds_version}
  */
  readonly bdsVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#odh_version BdsBdsInstance#odh_version}
  */
  readonly odhVersion?: string;
}

export function bdsBdsInstanceBdsClusterVersionSummaryToTerraform(struct?: BdsBdsInstanceBdsClusterVersionSummaryOutputReference | BdsBdsInstanceBdsClusterVersionSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bds_version: cdktf.stringToTerraform(struct!.bdsVersion),
    odh_version: cdktf.stringToTerraform(struct!.odhVersion),
  }
}


export function bdsBdsInstanceBdsClusterVersionSummaryToHclTerraform(struct?: BdsBdsInstanceBdsClusterVersionSummaryOutputReference | BdsBdsInstanceBdsClusterVersionSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bds_version: {
      value: cdktf.stringToHclTerraform(struct!.bdsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    odh_version: {
      value: cdktf.stringToHclTerraform(struct!.odhVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsBdsInstanceBdsClusterVersionSummaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsBdsInstanceBdsClusterVersionSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bdsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.bdsVersion = this._bdsVersion;
    }
    if (this._odhVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.odhVersion = this._odhVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceBdsClusterVersionSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bdsVersion = undefined;
      this._odhVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bdsVersion = value.bdsVersion;
      this._odhVersion = value.odhVersion;
    }
  }

  // bds_version - computed: false, optional: false, required: true
  private _bdsVersion?: string; 
  public get bdsVersion() {
    return this.getStringAttribute('bds_version');
  }
  public set bdsVersion(value: string) {
    this._bdsVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bdsVersionInput() {
    return this._bdsVersion;
  }

  // odh_version - computed: true, optional: true, required: false
  private _odhVersion?: string; 
  public get odhVersion() {
    return this.getStringAttribute('odh_version');
  }
  public set odhVersion(value: string) {
    this._odhVersion = value;
  }
  public resetOdhVersion() {
    this._odhVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get odhVersionInput() {
    return this._odhVersion;
  }
}
export interface BdsBdsInstanceCloudSqlDetailsKerberosDetails {
}

export function bdsBdsInstanceCloudSqlDetailsKerberosDetailsToTerraform(struct?: BdsBdsInstanceCloudSqlDetailsKerberosDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bdsBdsInstanceCloudSqlDetailsKerberosDetailsToHclTerraform(struct?: BdsBdsInstanceCloudSqlDetailsKerberosDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BdsBdsInstanceCloudSqlDetailsKerberosDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceCloudSqlDetailsKerberosDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // keytab_file - computed: true, optional: false, required: false
  public get keytabFile() {
    return this.getStringAttribute('keytab_file');
  }

  // principal_name - computed: true, optional: false, required: false
  public get principalName() {
    return this.getStringAttribute('principal_name');
  }
}

export class BdsBdsInstanceCloudSqlDetailsKerberosDetailsList extends cdktf.ComplexList {

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
  public get(index: number): BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference {
    return new BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BdsBdsInstanceCloudSqlDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}
  */
  readonly shape: string;
}

export function bdsBdsInstanceCloudSqlDetailsToTerraform(struct?: BdsBdsInstanceCloudSqlDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shape: cdktf.stringToTerraform(struct!.shape),
  }
}


export function bdsBdsInstanceCloudSqlDetailsToHclTerraform(struct?: BdsBdsInstanceCloudSqlDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shape: {
      value: cdktf.stringToHclTerraform(struct!.shape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsBdsInstanceCloudSqlDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BdsBdsInstanceCloudSqlDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shape !== undefined) {
      hasAnyValues = true;
      internalValueResult.shape = this._shape;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceCloudSqlDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shape = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shape = value.shape;
    }
  }

  // block_volume_size_in_gbs - computed: true, optional: false, required: false
  public get blockVolumeSizeInGbs() {
    return this.getStringAttribute('block_volume_size_in_gbs');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // is_kerberos_mapped_to_database_users - computed: true, optional: false, required: false
  public get isKerberosMappedToDatabaseUsers() {
    return this.getBooleanAttribute('is_kerberos_mapped_to_database_users');
  }

  // kerberos_details - computed: true, optional: false, required: false
  private _kerberosDetails = new BdsBdsInstanceCloudSqlDetailsKerberosDetailsList(this, "kerberos_details", false);
  public get kerberosDetails() {
    return this._kerberosDetails;
  }

  // memory_in_gbs - computed: true, optional: false, required: false
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // nvmes - computed: true, optional: false, required: false
  public get nvmes() {
    return this.getNumberAttribute('nvmes');
  }

  // ocpus - computed: true, optional: false, required: false
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }

  // shape - computed: false, optional: false, required: true
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }
}

export class BdsBdsInstanceCloudSqlDetailsList extends cdktf.ComplexList {
  public internalValue? : BdsBdsInstanceCloudSqlDetails[] | cdktf.IResolvable

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
  public get(index: number): BdsBdsInstanceCloudSqlDetailsOutputReference {
    return new BdsBdsInstanceCloudSqlDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}
  */
  readonly nvmes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}
  */
  readonly ocpus?: number;
}

export function bdsBdsInstanceComputeOnlyWorkerNodeShapeConfigToTerraform(struct?: BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference | BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    nvmes: cdktf.numberToTerraform(struct!.nvmes),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function bdsBdsInstanceComputeOnlyWorkerNodeShapeConfigToHclTerraform(struct?: BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference | BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nvmes: {
      value: cdktf.numberToHclTerraform(struct!.nvmes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._nvmes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nvmes = this._nvmes;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryInGbs = undefined;
      this._nvmes = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryInGbs = value.memoryInGbs;
      this._nvmes = value.nvmes;
      this._ocpus = value.ocpus;
    }
  }

  // memory_in_gbs - computed: false, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // nvmes - computed: true, optional: true, required: false
  private _nvmes?: number; 
  public get nvmes() {
    return this.getNumberAttribute('nvmes');
  }
  public set nvmes(value: number) {
    this._nvmes = value;
  }
  public resetNvmes() {
    this._nvmes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvmesInput() {
    return this._nvmes;
  }

  // ocpus - computed: false, optional: true, required: false
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface BdsBdsInstanceComputeOnlyWorkerNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}
  */
  readonly blockVolumeSizeInGbs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#number_of_nodes BdsBdsInstance#number_of_nodes}
  */
  readonly numberOfNodes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}
  */
  readonly shape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}
  */
  readonly subnetId: string;
  /**
  * shape_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#shape_config BdsBdsInstance#shape_config}
  */
  readonly shapeConfig?: BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig;
}

export function bdsBdsInstanceComputeOnlyWorkerNodeToTerraform(struct?: BdsBdsInstanceComputeOnlyWorkerNodeOutputReference | BdsBdsInstanceComputeOnlyWorkerNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_volume_size_in_gbs: cdktf.stringToTerraform(struct!.blockVolumeSizeInGbs),
    number_of_nodes: cdktf.numberToTerraform(struct!.numberOfNodes),
    shape: cdktf.stringToTerraform(struct!.shape),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    shape_config: bdsBdsInstanceComputeOnlyWorkerNodeShapeConfigToTerraform(struct!.shapeConfig),
  }
}


export function bdsBdsInstanceComputeOnlyWorkerNodeToHclTerraform(struct?: BdsBdsInstanceComputeOnlyWorkerNodeOutputReference | BdsBdsInstanceComputeOnlyWorkerNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_volume_size_in_gbs: {
      value: cdktf.stringToHclTerraform(struct!.blockVolumeSizeInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_nodes: {
      value: cdktf.numberToHclTerraform(struct!.numberOfNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shape: {
      value: cdktf.stringToHclTerraform(struct!.shape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shape_config: {
      value: bdsBdsInstanceComputeOnlyWorkerNodeShapeConfigToHclTerraform(struct!.shapeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsBdsInstanceComputeOnlyWorkerNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsBdsInstanceComputeOnlyWorkerNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockVolumeSizeInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockVolumeSizeInGbs = this._blockVolumeSizeInGbs;
    }
    if (this._numberOfNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfNodes = this._numberOfNodes;
    }
    if (this._shape !== undefined) {
      hasAnyValues = true;
      internalValueResult.shape = this._shape;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._shapeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeConfig = this._shapeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceComputeOnlyWorkerNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockVolumeSizeInGbs = undefined;
      this._numberOfNodes = undefined;
      this._shape = undefined;
      this._subnetId = undefined;
      this._shapeConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockVolumeSizeInGbs = value.blockVolumeSizeInGbs;
      this._numberOfNodes = value.numberOfNodes;
      this._shape = value.shape;
      this._subnetId = value.subnetId;
      this._shapeConfig.internalValue = value.shapeConfig;
    }
  }

  // block_volume_size_in_gbs - computed: false, optional: true, required: false
  private _blockVolumeSizeInGbs?: string; 
  public get blockVolumeSizeInGbs() {
    return this.getStringAttribute('block_volume_size_in_gbs');
  }
  public set blockVolumeSizeInGbs(value: string) {
    this._blockVolumeSizeInGbs = value;
  }
  public resetBlockVolumeSizeInGbs() {
    this._blockVolumeSizeInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockVolumeSizeInGbsInput() {
    return this._blockVolumeSizeInGbs;
  }

  // number_of_nodes - computed: false, optional: false, required: true
  private _numberOfNodes?: number; 
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }
  public set numberOfNodes(value: number) {
    this._numberOfNodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfNodesInput() {
    return this._numberOfNodes;
  }

  // shape - computed: false, optional: false, required: true
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // shape_config - computed: false, optional: true, required: false
  private _shapeConfig = new BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference(this, "shape_config");
  public get shapeConfig() {
    return this._shapeConfig;
  }
  public putShapeConfig(value: BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig) {
    this._shapeConfig.internalValue = value;
  }
  public resetShapeConfig() {
    this._shapeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeConfigInput() {
    return this._shapeConfig.internalValue;
  }
}
export interface BdsBdsInstanceEdgeNodeShapeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}
  */
  readonly nvmes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}
  */
  readonly ocpus?: number;
}

export function bdsBdsInstanceEdgeNodeShapeConfigToTerraform(struct?: BdsBdsInstanceEdgeNodeShapeConfigOutputReference | BdsBdsInstanceEdgeNodeShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    nvmes: cdktf.numberToTerraform(struct!.nvmes),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function bdsBdsInstanceEdgeNodeShapeConfigToHclTerraform(struct?: BdsBdsInstanceEdgeNodeShapeConfigOutputReference | BdsBdsInstanceEdgeNodeShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nvmes: {
      value: cdktf.numberToHclTerraform(struct!.nvmes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsBdsInstanceEdgeNodeShapeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsBdsInstanceEdgeNodeShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._nvmes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nvmes = this._nvmes;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceEdgeNodeShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryInGbs = undefined;
      this._nvmes = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryInGbs = value.memoryInGbs;
      this._nvmes = value.nvmes;
      this._ocpus = value.ocpus;
    }
  }

  // memory_in_gbs - computed: false, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // nvmes - computed: true, optional: true, required: false
  private _nvmes?: number; 
  public get nvmes() {
    return this.getNumberAttribute('nvmes');
  }
  public set nvmes(value: number) {
    this._nvmes = value;
  }
  public resetNvmes() {
    this._nvmes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvmesInput() {
    return this._nvmes;
  }

  // ocpus - computed: false, optional: true, required: false
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface BdsBdsInstanceEdgeNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}
  */
  readonly blockVolumeSizeInGbs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#number_of_nodes BdsBdsInstance#number_of_nodes}
  */
  readonly numberOfNodes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}
  */
  readonly shape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}
  */
  readonly subnetId: string;
  /**
  * shape_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#shape_config BdsBdsInstance#shape_config}
  */
  readonly shapeConfig?: BdsBdsInstanceEdgeNodeShapeConfig;
}

export function bdsBdsInstanceEdgeNodeToTerraform(struct?: BdsBdsInstanceEdgeNodeOutputReference | BdsBdsInstanceEdgeNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_volume_size_in_gbs: cdktf.stringToTerraform(struct!.blockVolumeSizeInGbs),
    number_of_nodes: cdktf.numberToTerraform(struct!.numberOfNodes),
    shape: cdktf.stringToTerraform(struct!.shape),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    shape_config: bdsBdsInstanceEdgeNodeShapeConfigToTerraform(struct!.shapeConfig),
  }
}


export function bdsBdsInstanceEdgeNodeToHclTerraform(struct?: BdsBdsInstanceEdgeNodeOutputReference | BdsBdsInstanceEdgeNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_volume_size_in_gbs: {
      value: cdktf.stringToHclTerraform(struct!.blockVolumeSizeInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_nodes: {
      value: cdktf.numberToHclTerraform(struct!.numberOfNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shape: {
      value: cdktf.stringToHclTerraform(struct!.shape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shape_config: {
      value: bdsBdsInstanceEdgeNodeShapeConfigToHclTerraform(struct!.shapeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BdsBdsInstanceEdgeNodeShapeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsBdsInstanceEdgeNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsBdsInstanceEdgeNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockVolumeSizeInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockVolumeSizeInGbs = this._blockVolumeSizeInGbs;
    }
    if (this._numberOfNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfNodes = this._numberOfNodes;
    }
    if (this._shape !== undefined) {
      hasAnyValues = true;
      internalValueResult.shape = this._shape;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._shapeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeConfig = this._shapeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceEdgeNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockVolumeSizeInGbs = undefined;
      this._numberOfNodes = undefined;
      this._shape = undefined;
      this._subnetId = undefined;
      this._shapeConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockVolumeSizeInGbs = value.blockVolumeSizeInGbs;
      this._numberOfNodes = value.numberOfNodes;
      this._shape = value.shape;
      this._subnetId = value.subnetId;
      this._shapeConfig.internalValue = value.shapeConfig;
    }
  }

  // block_volume_size_in_gbs - computed: false, optional: true, required: false
  private _blockVolumeSizeInGbs?: string; 
  public get blockVolumeSizeInGbs() {
    return this.getStringAttribute('block_volume_size_in_gbs');
  }
  public set blockVolumeSizeInGbs(value: string) {
    this._blockVolumeSizeInGbs = value;
  }
  public resetBlockVolumeSizeInGbs() {
    this._blockVolumeSizeInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockVolumeSizeInGbsInput() {
    return this._blockVolumeSizeInGbs;
  }

  // number_of_nodes - computed: false, optional: false, required: true
  private _numberOfNodes?: number; 
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }
  public set numberOfNodes(value: number) {
    this._numberOfNodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfNodesInput() {
    return this._numberOfNodes;
  }

  // shape - computed: false, optional: false, required: true
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // shape_config - computed: false, optional: true, required: false
  private _shapeConfig = new BdsBdsInstanceEdgeNodeShapeConfigOutputReference(this, "shape_config");
  public get shapeConfig() {
    return this._shapeConfig;
  }
  public putShapeConfig(value: BdsBdsInstanceEdgeNodeShapeConfig) {
    this._shapeConfig.internalValue = value;
  }
  public resetShapeConfig() {
    this._shapeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeConfigInput() {
    return this._shapeConfig.internalValue;
  }
}
export interface BdsBdsInstanceKafkaBrokerNodeShapeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}
  */
  readonly nvmes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}
  */
  readonly ocpus?: number;
}

export function bdsBdsInstanceKafkaBrokerNodeShapeConfigToTerraform(struct?: BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference | BdsBdsInstanceKafkaBrokerNodeShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    nvmes: cdktf.numberToTerraform(struct!.nvmes),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function bdsBdsInstanceKafkaBrokerNodeShapeConfigToHclTerraform(struct?: BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference | BdsBdsInstanceKafkaBrokerNodeShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nvmes: {
      value: cdktf.numberToHclTerraform(struct!.nvmes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsBdsInstanceKafkaBrokerNodeShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._nvmes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nvmes = this._nvmes;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceKafkaBrokerNodeShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryInGbs = undefined;
      this._nvmes = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryInGbs = value.memoryInGbs;
      this._nvmes = value.nvmes;
      this._ocpus = value.ocpus;
    }
  }

  // memory_in_gbs - computed: false, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // nvmes - computed: true, optional: true, required: false
  private _nvmes?: number; 
  public get nvmes() {
    return this.getNumberAttribute('nvmes');
  }
  public set nvmes(value: number) {
    this._nvmes = value;
  }
  public resetNvmes() {
    this._nvmes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvmesInput() {
    return this._nvmes;
  }

  // ocpus - computed: false, optional: true, required: false
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface BdsBdsInstanceKafkaBrokerNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}
  */
  readonly blockVolumeSizeInGbs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#number_of_kafka_nodes BdsBdsInstance#number_of_kafka_nodes}
  */
  readonly numberOfKafkaNodes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}
  */
  readonly shape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}
  */
  readonly subnetId: string;
  /**
  * shape_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#shape_config BdsBdsInstance#shape_config}
  */
  readonly shapeConfig?: BdsBdsInstanceKafkaBrokerNodeShapeConfig;
}

export function bdsBdsInstanceKafkaBrokerNodeToTerraform(struct?: BdsBdsInstanceKafkaBrokerNodeOutputReference | BdsBdsInstanceKafkaBrokerNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_volume_size_in_gbs: cdktf.stringToTerraform(struct!.blockVolumeSizeInGbs),
    number_of_kafka_nodes: cdktf.numberToTerraform(struct!.numberOfKafkaNodes),
    shape: cdktf.stringToTerraform(struct!.shape),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    shape_config: bdsBdsInstanceKafkaBrokerNodeShapeConfigToTerraform(struct!.shapeConfig),
  }
}


export function bdsBdsInstanceKafkaBrokerNodeToHclTerraform(struct?: BdsBdsInstanceKafkaBrokerNodeOutputReference | BdsBdsInstanceKafkaBrokerNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_volume_size_in_gbs: {
      value: cdktf.stringToHclTerraform(struct!.blockVolumeSizeInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_kafka_nodes: {
      value: cdktf.numberToHclTerraform(struct!.numberOfKafkaNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shape: {
      value: cdktf.stringToHclTerraform(struct!.shape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shape_config: {
      value: bdsBdsInstanceKafkaBrokerNodeShapeConfigToHclTerraform(struct!.shapeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BdsBdsInstanceKafkaBrokerNodeShapeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsBdsInstanceKafkaBrokerNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsBdsInstanceKafkaBrokerNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockVolumeSizeInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockVolumeSizeInGbs = this._blockVolumeSizeInGbs;
    }
    if (this._numberOfKafkaNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfKafkaNodes = this._numberOfKafkaNodes;
    }
    if (this._shape !== undefined) {
      hasAnyValues = true;
      internalValueResult.shape = this._shape;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._shapeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeConfig = this._shapeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceKafkaBrokerNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockVolumeSizeInGbs = undefined;
      this._numberOfKafkaNodes = undefined;
      this._shape = undefined;
      this._subnetId = undefined;
      this._shapeConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockVolumeSizeInGbs = value.blockVolumeSizeInGbs;
      this._numberOfKafkaNodes = value.numberOfKafkaNodes;
      this._shape = value.shape;
      this._subnetId = value.subnetId;
      this._shapeConfig.internalValue = value.shapeConfig;
    }
  }

  // block_volume_size_in_gbs - computed: false, optional: true, required: false
  private _blockVolumeSizeInGbs?: string; 
  public get blockVolumeSizeInGbs() {
    return this.getStringAttribute('block_volume_size_in_gbs');
  }
  public set blockVolumeSizeInGbs(value: string) {
    this._blockVolumeSizeInGbs = value;
  }
  public resetBlockVolumeSizeInGbs() {
    this._blockVolumeSizeInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockVolumeSizeInGbsInput() {
    return this._blockVolumeSizeInGbs;
  }

  // number_of_kafka_nodes - computed: false, optional: false, required: true
  private _numberOfKafkaNodes?: number; 
  public get numberOfKafkaNodes() {
    return this.getNumberAttribute('number_of_kafka_nodes');
  }
  public set numberOfKafkaNodes(value: number) {
    this._numberOfKafkaNodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfKafkaNodesInput() {
    return this._numberOfKafkaNodes;
  }

  // shape - computed: false, optional: false, required: true
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // shape_config - computed: false, optional: true, required: false
  private _shapeConfig = new BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference(this, "shape_config");
  public get shapeConfig() {
    return this._shapeConfig;
  }
  public putShapeConfig(value: BdsBdsInstanceKafkaBrokerNodeShapeConfig) {
    this._shapeConfig.internalValue = value;
  }
  public resetShapeConfig() {
    this._shapeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeConfigInput() {
    return this._shapeConfig.internalValue;
  }
}
export interface BdsBdsInstanceMasterNodeShapeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}
  */
  readonly nvmes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}
  */
  readonly ocpus?: number;
}

export function bdsBdsInstanceMasterNodeShapeConfigToTerraform(struct?: BdsBdsInstanceMasterNodeShapeConfigOutputReference | BdsBdsInstanceMasterNodeShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    nvmes: cdktf.numberToTerraform(struct!.nvmes),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function bdsBdsInstanceMasterNodeShapeConfigToHclTerraform(struct?: BdsBdsInstanceMasterNodeShapeConfigOutputReference | BdsBdsInstanceMasterNodeShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nvmes: {
      value: cdktf.numberToHclTerraform(struct!.nvmes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsBdsInstanceMasterNodeShapeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsBdsInstanceMasterNodeShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._nvmes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nvmes = this._nvmes;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceMasterNodeShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryInGbs = undefined;
      this._nvmes = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryInGbs = value.memoryInGbs;
      this._nvmes = value.nvmes;
      this._ocpus = value.ocpus;
    }
  }

  // memory_in_gbs - computed: false, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // nvmes - computed: true, optional: true, required: false
  private _nvmes?: number; 
  public get nvmes() {
    return this.getNumberAttribute('nvmes');
  }
  public set nvmes(value: number) {
    this._nvmes = value;
  }
  public resetNvmes() {
    this._nvmes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvmesInput() {
    return this._nvmes;
  }

  // ocpus - computed: false, optional: true, required: false
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface BdsBdsInstanceMasterNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}
  */
  readonly blockVolumeSizeInGbs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#number_of_nodes BdsBdsInstance#number_of_nodes}
  */
  readonly numberOfNodes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}
  */
  readonly shape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}
  */
  readonly subnetId: string;
  /**
  * shape_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#shape_config BdsBdsInstance#shape_config}
  */
  readonly shapeConfig?: BdsBdsInstanceMasterNodeShapeConfig;
}

export function bdsBdsInstanceMasterNodeToTerraform(struct?: BdsBdsInstanceMasterNodeOutputReference | BdsBdsInstanceMasterNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_volume_size_in_gbs: cdktf.stringToTerraform(struct!.blockVolumeSizeInGbs),
    number_of_nodes: cdktf.numberToTerraform(struct!.numberOfNodes),
    shape: cdktf.stringToTerraform(struct!.shape),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    shape_config: bdsBdsInstanceMasterNodeShapeConfigToTerraform(struct!.shapeConfig),
  }
}


export function bdsBdsInstanceMasterNodeToHclTerraform(struct?: BdsBdsInstanceMasterNodeOutputReference | BdsBdsInstanceMasterNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_volume_size_in_gbs: {
      value: cdktf.stringToHclTerraform(struct!.blockVolumeSizeInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_nodes: {
      value: cdktf.numberToHclTerraform(struct!.numberOfNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shape: {
      value: cdktf.stringToHclTerraform(struct!.shape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shape_config: {
      value: bdsBdsInstanceMasterNodeShapeConfigToHclTerraform(struct!.shapeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BdsBdsInstanceMasterNodeShapeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsBdsInstanceMasterNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsBdsInstanceMasterNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockVolumeSizeInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockVolumeSizeInGbs = this._blockVolumeSizeInGbs;
    }
    if (this._numberOfNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfNodes = this._numberOfNodes;
    }
    if (this._shape !== undefined) {
      hasAnyValues = true;
      internalValueResult.shape = this._shape;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._shapeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeConfig = this._shapeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceMasterNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockVolumeSizeInGbs = undefined;
      this._numberOfNodes = undefined;
      this._shape = undefined;
      this._subnetId = undefined;
      this._shapeConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockVolumeSizeInGbs = value.blockVolumeSizeInGbs;
      this._numberOfNodes = value.numberOfNodes;
      this._shape = value.shape;
      this._subnetId = value.subnetId;
      this._shapeConfig.internalValue = value.shapeConfig;
    }
  }

  // block_volume_size_in_gbs - computed: false, optional: true, required: false
  private _blockVolumeSizeInGbs?: string; 
  public get blockVolumeSizeInGbs() {
    return this.getStringAttribute('block_volume_size_in_gbs');
  }
  public set blockVolumeSizeInGbs(value: string) {
    this._blockVolumeSizeInGbs = value;
  }
  public resetBlockVolumeSizeInGbs() {
    this._blockVolumeSizeInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockVolumeSizeInGbsInput() {
    return this._blockVolumeSizeInGbs;
  }

  // number_of_nodes - computed: false, optional: false, required: true
  private _numberOfNodes?: number; 
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }
  public set numberOfNodes(value: number) {
    this._numberOfNodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfNodesInput() {
    return this._numberOfNodes;
  }

  // shape - computed: false, optional: false, required: true
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // shape_config - computed: false, optional: true, required: false
  private _shapeConfig = new BdsBdsInstanceMasterNodeShapeConfigOutputReference(this, "shape_config");
  public get shapeConfig() {
    return this._shapeConfig;
  }
  public putShapeConfig(value: BdsBdsInstanceMasterNodeShapeConfig) {
    this._shapeConfig.internalValue = value;
  }
  public resetShapeConfig() {
    this._shapeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeConfigInput() {
    return this._shapeConfig.internalValue;
  }
}
export interface BdsBdsInstanceNetworkConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#cidr_block BdsBdsInstance#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#is_nat_gateway_required BdsBdsInstance#is_nat_gateway_required}
  */
  readonly isNatGatewayRequired?: boolean | cdktf.IResolvable;
}

export function bdsBdsInstanceNetworkConfigToTerraform(struct?: BdsBdsInstanceNetworkConfigOutputReference | BdsBdsInstanceNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
    is_nat_gateway_required: cdktf.booleanToTerraform(struct!.isNatGatewayRequired),
  }
}


export function bdsBdsInstanceNetworkConfigToHclTerraform(struct?: BdsBdsInstanceNetworkConfigOutputReference | BdsBdsInstanceNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.cidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_nat_gateway_required: {
      value: cdktf.booleanToHclTerraform(struct!.isNatGatewayRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsBdsInstanceNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsBdsInstanceNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlock = this._cidrBlock;
    }
    if (this._isNatGatewayRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNatGatewayRequired = this._isNatGatewayRequired;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cidrBlock = undefined;
      this._isNatGatewayRequired = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cidrBlock = value.cidrBlock;
      this._isNatGatewayRequired = value.isNatGatewayRequired;
    }
  }

  // cidr_block - computed: true, optional: true, required: false
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // is_nat_gateway_required - computed: true, optional: true, required: false
  private _isNatGatewayRequired?: boolean | cdktf.IResolvable; 
  public get isNatGatewayRequired() {
    return this.getBooleanAttribute('is_nat_gateway_required');
  }
  public set isNatGatewayRequired(value: boolean | cdktf.IResolvable) {
    this._isNatGatewayRequired = value;
  }
  public resetIsNatGatewayRequired() {
    this._isNatGatewayRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNatGatewayRequiredInput() {
    return this._isNatGatewayRequired;
  }
}
export interface BdsBdsInstanceStartClusterShapeConfigsNodeTypeShapeConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#node_type BdsBdsInstance#node_type}
  */
  readonly nodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}
  */
  readonly shape?: string;
}

export function bdsBdsInstanceStartClusterShapeConfigsNodeTypeShapeConfigsToTerraform(struct?: BdsBdsInstanceStartClusterShapeConfigsNodeTypeShapeConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    shape: cdktf.stringToTerraform(struct!.shape),
  }
}


export function bdsBdsInstanceStartClusterShapeConfigsNodeTypeShapeConfigsToHclTerraform(struct?: BdsBdsInstanceStartClusterShapeConfigsNodeTypeShapeConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shape: {
      value: cdktf.stringToHclTerraform(struct!.shape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsBdsInstanceStartClusterShapeConfigsNodeTypeShapeConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BdsBdsInstanceStartClusterShapeConfigsNodeTypeShapeConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    if (this._shape !== undefined) {
      hasAnyValues = true;
      internalValueResult.shape = this._shape;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceStartClusterShapeConfigsNodeTypeShapeConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeType = undefined;
      this._shape = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeType = value.nodeType;
      this._shape = value.shape;
    }
  }

  // node_type - computed: false, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // shape - computed: false, optional: true, required: false
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  public resetShape() {
    this._shape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }
}

export class BdsBdsInstanceStartClusterShapeConfigsNodeTypeShapeConfigsList extends cdktf.ComplexList {
  public internalValue? : BdsBdsInstanceStartClusterShapeConfigsNodeTypeShapeConfigs[] | cdktf.IResolvable

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
  public get(index: number): BdsBdsInstanceStartClusterShapeConfigsNodeTypeShapeConfigsOutputReference {
    return new BdsBdsInstanceStartClusterShapeConfigsNodeTypeShapeConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BdsBdsInstanceStartClusterShapeConfigs {
  /**
  * node_type_shape_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#node_type_shape_configs BdsBdsInstance#node_type_shape_configs}
  */
  readonly nodeTypeShapeConfigs?: BdsBdsInstanceStartClusterShapeConfigsNodeTypeShapeConfigs[] | cdktf.IResolvable;
}

export function bdsBdsInstanceStartClusterShapeConfigsToTerraform(struct?: BdsBdsInstanceStartClusterShapeConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_type_shape_configs: cdktf.listMapper(bdsBdsInstanceStartClusterShapeConfigsNodeTypeShapeConfigsToTerraform, true)(struct!.nodeTypeShapeConfigs),
  }
}


export function bdsBdsInstanceStartClusterShapeConfigsToHclTerraform(struct?: BdsBdsInstanceStartClusterShapeConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_type_shape_configs: {
      value: cdktf.listMapperHcl(bdsBdsInstanceStartClusterShapeConfigsNodeTypeShapeConfigsToHclTerraform, true)(struct!.nodeTypeShapeConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "BdsBdsInstanceStartClusterShapeConfigsNodeTypeShapeConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsBdsInstanceStartClusterShapeConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BdsBdsInstanceStartClusterShapeConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeTypeShapeConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeShapeConfigs = this._nodeTypeShapeConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceStartClusterShapeConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeTypeShapeConfigs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeTypeShapeConfigs.internalValue = value.nodeTypeShapeConfigs;
    }
  }

  // node_type_shape_configs - computed: false, optional: true, required: false
  private _nodeTypeShapeConfigs = new BdsBdsInstanceStartClusterShapeConfigsNodeTypeShapeConfigsList(this, "node_type_shape_configs", false);
  public get nodeTypeShapeConfigs() {
    return this._nodeTypeShapeConfigs;
  }
  public putNodeTypeShapeConfigs(value: BdsBdsInstanceStartClusterShapeConfigsNodeTypeShapeConfigs[] | cdktf.IResolvable) {
    this._nodeTypeShapeConfigs.internalValue = value;
  }
  public resetNodeTypeShapeConfigs() {
    this._nodeTypeShapeConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeShapeConfigsInput() {
    return this._nodeTypeShapeConfigs.internalValue;
  }
}

export class BdsBdsInstanceStartClusterShapeConfigsList extends cdktf.ComplexList {
  public internalValue? : BdsBdsInstanceStartClusterShapeConfigs[] | cdktf.IResolvable

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
  public get(index: number): BdsBdsInstanceStartClusterShapeConfigsOutputReference {
    return new BdsBdsInstanceStartClusterShapeConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BdsBdsInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#create BdsBdsInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#delete BdsBdsInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#update BdsBdsInstance#update}
  */
  readonly update?: string;
}

export function bdsBdsInstanceTimeoutsToTerraform(struct?: BdsBdsInstanceTimeouts | cdktf.IResolvable): any {
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


export function bdsBdsInstanceTimeoutsToHclTerraform(struct?: BdsBdsInstanceTimeouts | cdktf.IResolvable): any {
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

export class BdsBdsInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BdsBdsInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BdsBdsInstanceTimeouts | cdktf.IResolvable | undefined) {
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
export interface BdsBdsInstanceUtilNodeShapeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}
  */
  readonly nvmes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}
  */
  readonly ocpus?: number;
}

export function bdsBdsInstanceUtilNodeShapeConfigToTerraform(struct?: BdsBdsInstanceUtilNodeShapeConfigOutputReference | BdsBdsInstanceUtilNodeShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    nvmes: cdktf.numberToTerraform(struct!.nvmes),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function bdsBdsInstanceUtilNodeShapeConfigToHclTerraform(struct?: BdsBdsInstanceUtilNodeShapeConfigOutputReference | BdsBdsInstanceUtilNodeShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nvmes: {
      value: cdktf.numberToHclTerraform(struct!.nvmes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsBdsInstanceUtilNodeShapeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsBdsInstanceUtilNodeShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._nvmes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nvmes = this._nvmes;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceUtilNodeShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryInGbs = undefined;
      this._nvmes = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryInGbs = value.memoryInGbs;
      this._nvmes = value.nvmes;
      this._ocpus = value.ocpus;
    }
  }

  // memory_in_gbs - computed: false, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // nvmes - computed: true, optional: true, required: false
  private _nvmes?: number; 
  public get nvmes() {
    return this.getNumberAttribute('nvmes');
  }
  public set nvmes(value: number) {
    this._nvmes = value;
  }
  public resetNvmes() {
    this._nvmes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvmesInput() {
    return this._nvmes;
  }

  // ocpus - computed: false, optional: true, required: false
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface BdsBdsInstanceUtilNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}
  */
  readonly blockVolumeSizeInGbs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#number_of_nodes BdsBdsInstance#number_of_nodes}
  */
  readonly numberOfNodes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}
  */
  readonly shape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}
  */
  readonly subnetId: string;
  /**
  * shape_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#shape_config BdsBdsInstance#shape_config}
  */
  readonly shapeConfig?: BdsBdsInstanceUtilNodeShapeConfig;
}

export function bdsBdsInstanceUtilNodeToTerraform(struct?: BdsBdsInstanceUtilNodeOutputReference | BdsBdsInstanceUtilNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_volume_size_in_gbs: cdktf.stringToTerraform(struct!.blockVolumeSizeInGbs),
    number_of_nodes: cdktf.numberToTerraform(struct!.numberOfNodes),
    shape: cdktf.stringToTerraform(struct!.shape),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    shape_config: bdsBdsInstanceUtilNodeShapeConfigToTerraform(struct!.shapeConfig),
  }
}


export function bdsBdsInstanceUtilNodeToHclTerraform(struct?: BdsBdsInstanceUtilNodeOutputReference | BdsBdsInstanceUtilNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_volume_size_in_gbs: {
      value: cdktf.stringToHclTerraform(struct!.blockVolumeSizeInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_nodes: {
      value: cdktf.numberToHclTerraform(struct!.numberOfNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shape: {
      value: cdktf.stringToHclTerraform(struct!.shape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shape_config: {
      value: bdsBdsInstanceUtilNodeShapeConfigToHclTerraform(struct!.shapeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BdsBdsInstanceUtilNodeShapeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsBdsInstanceUtilNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsBdsInstanceUtilNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockVolumeSizeInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockVolumeSizeInGbs = this._blockVolumeSizeInGbs;
    }
    if (this._numberOfNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfNodes = this._numberOfNodes;
    }
    if (this._shape !== undefined) {
      hasAnyValues = true;
      internalValueResult.shape = this._shape;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._shapeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeConfig = this._shapeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceUtilNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockVolumeSizeInGbs = undefined;
      this._numberOfNodes = undefined;
      this._shape = undefined;
      this._subnetId = undefined;
      this._shapeConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockVolumeSizeInGbs = value.blockVolumeSizeInGbs;
      this._numberOfNodes = value.numberOfNodes;
      this._shape = value.shape;
      this._subnetId = value.subnetId;
      this._shapeConfig.internalValue = value.shapeConfig;
    }
  }

  // block_volume_size_in_gbs - computed: false, optional: true, required: false
  private _blockVolumeSizeInGbs?: string; 
  public get blockVolumeSizeInGbs() {
    return this.getStringAttribute('block_volume_size_in_gbs');
  }
  public set blockVolumeSizeInGbs(value: string) {
    this._blockVolumeSizeInGbs = value;
  }
  public resetBlockVolumeSizeInGbs() {
    this._blockVolumeSizeInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockVolumeSizeInGbsInput() {
    return this._blockVolumeSizeInGbs;
  }

  // number_of_nodes - computed: false, optional: false, required: true
  private _numberOfNodes?: number; 
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }
  public set numberOfNodes(value: number) {
    this._numberOfNodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfNodesInput() {
    return this._numberOfNodes;
  }

  // shape - computed: false, optional: false, required: true
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // shape_config - computed: false, optional: true, required: false
  private _shapeConfig = new BdsBdsInstanceUtilNodeShapeConfigOutputReference(this, "shape_config");
  public get shapeConfig() {
    return this._shapeConfig;
  }
  public putShapeConfig(value: BdsBdsInstanceUtilNodeShapeConfig) {
    this._shapeConfig.internalValue = value;
  }
  public resetShapeConfig() {
    this._shapeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeConfigInput() {
    return this._shapeConfig.internalValue;
  }
}
export interface BdsBdsInstanceWorkerNodeShapeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}
  */
  readonly nvmes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}
  */
  readonly ocpus?: number;
}

export function bdsBdsInstanceWorkerNodeShapeConfigToTerraform(struct?: BdsBdsInstanceWorkerNodeShapeConfigOutputReference | BdsBdsInstanceWorkerNodeShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    nvmes: cdktf.numberToTerraform(struct!.nvmes),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function bdsBdsInstanceWorkerNodeShapeConfigToHclTerraform(struct?: BdsBdsInstanceWorkerNodeShapeConfigOutputReference | BdsBdsInstanceWorkerNodeShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nvmes: {
      value: cdktf.numberToHclTerraform(struct!.nvmes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsBdsInstanceWorkerNodeShapeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsBdsInstanceWorkerNodeShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._nvmes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nvmes = this._nvmes;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceWorkerNodeShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryInGbs = undefined;
      this._nvmes = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryInGbs = value.memoryInGbs;
      this._nvmes = value.nvmes;
      this._ocpus = value.ocpus;
    }
  }

  // memory_in_gbs - computed: false, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // nvmes - computed: true, optional: true, required: false
  private _nvmes?: number; 
  public get nvmes() {
    return this.getNumberAttribute('nvmes');
  }
  public set nvmes(value: number) {
    this._nvmes = value;
  }
  public resetNvmes() {
    this._nvmes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvmesInput() {
    return this._nvmes;
  }

  // ocpus - computed: false, optional: true, required: false
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface BdsBdsInstanceWorkerNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}
  */
  readonly blockVolumeSizeInGbs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#number_of_nodes BdsBdsInstance#number_of_nodes}
  */
  readonly numberOfNodes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}
  */
  readonly shape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}
  */
  readonly subnetId: string;
  /**
  * shape_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#shape_config BdsBdsInstance#shape_config}
  */
  readonly shapeConfig?: BdsBdsInstanceWorkerNodeShapeConfig;
}

export function bdsBdsInstanceWorkerNodeToTerraform(struct?: BdsBdsInstanceWorkerNodeOutputReference | BdsBdsInstanceWorkerNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_volume_size_in_gbs: cdktf.stringToTerraform(struct!.blockVolumeSizeInGbs),
    number_of_nodes: cdktf.numberToTerraform(struct!.numberOfNodes),
    shape: cdktf.stringToTerraform(struct!.shape),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    shape_config: bdsBdsInstanceWorkerNodeShapeConfigToTerraform(struct!.shapeConfig),
  }
}


export function bdsBdsInstanceWorkerNodeToHclTerraform(struct?: BdsBdsInstanceWorkerNodeOutputReference | BdsBdsInstanceWorkerNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_volume_size_in_gbs: {
      value: cdktf.stringToHclTerraform(struct!.blockVolumeSizeInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_nodes: {
      value: cdktf.numberToHclTerraform(struct!.numberOfNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shape: {
      value: cdktf.stringToHclTerraform(struct!.shape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shape_config: {
      value: bdsBdsInstanceWorkerNodeShapeConfigToHclTerraform(struct!.shapeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BdsBdsInstanceWorkerNodeShapeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsBdsInstanceWorkerNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsBdsInstanceWorkerNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockVolumeSizeInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockVolumeSizeInGbs = this._blockVolumeSizeInGbs;
    }
    if (this._numberOfNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfNodes = this._numberOfNodes;
    }
    if (this._shape !== undefined) {
      hasAnyValues = true;
      internalValueResult.shape = this._shape;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._shapeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeConfig = this._shapeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceWorkerNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockVolumeSizeInGbs = undefined;
      this._numberOfNodes = undefined;
      this._shape = undefined;
      this._subnetId = undefined;
      this._shapeConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockVolumeSizeInGbs = value.blockVolumeSizeInGbs;
      this._numberOfNodes = value.numberOfNodes;
      this._shape = value.shape;
      this._subnetId = value.subnetId;
      this._shapeConfig.internalValue = value.shapeConfig;
    }
  }

  // block_volume_size_in_gbs - computed: false, optional: true, required: false
  private _blockVolumeSizeInGbs?: string; 
  public get blockVolumeSizeInGbs() {
    return this.getStringAttribute('block_volume_size_in_gbs');
  }
  public set blockVolumeSizeInGbs(value: string) {
    this._blockVolumeSizeInGbs = value;
  }
  public resetBlockVolumeSizeInGbs() {
    this._blockVolumeSizeInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockVolumeSizeInGbsInput() {
    return this._blockVolumeSizeInGbs;
  }

  // number_of_nodes - computed: false, optional: false, required: true
  private _numberOfNodes?: number; 
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }
  public set numberOfNodes(value: number) {
    this._numberOfNodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfNodesInput() {
    return this._numberOfNodes;
  }

  // shape - computed: false, optional: false, required: true
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // shape_config - computed: false, optional: true, required: false
  private _shapeConfig = new BdsBdsInstanceWorkerNodeShapeConfigOutputReference(this, "shape_config");
  public get shapeConfig() {
    return this._shapeConfig;
  }
  public putShapeConfig(value: BdsBdsInstanceWorkerNodeShapeConfig) {
    this._shapeConfig.internalValue = value;
  }
  public resetShapeConfig() {
    this._shapeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeConfigInput() {
    return this._shapeConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance oci_bds_bds_instance}
*/
export class BdsBdsInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_bds_bds_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BdsBdsInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BdsBdsInstance to import
  * @param importFromId The id of the existing BdsBdsInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BdsBdsInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_bds_bds_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/bds_bds_instance oci_bds_bds_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BdsBdsInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: BdsBdsInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_bds_bds_instance',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bootstrapScriptUrl = config.bootstrapScriptUrl;
    this._clusterAdminPassword = config.clusterAdminPassword;
    this._clusterProfile = config.clusterProfile;
    this._clusterPublicKey = config.clusterPublicKey;
    this._clusterVersion = config.clusterVersion;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._ignoreExistingNodesShape = config.ignoreExistingNodesShape;
    this._isCloudSqlConfigured = config.isCloudSqlConfigured;
    this._isForceRemoveEnabled = config.isForceRemoveEnabled;
    this._isForceStopJobs = config.isForceStopJobs;
    this._isHighAvailability = config.isHighAvailability;
    this._isKafkaConfigured = config.isKafkaConfigured;
    this._isSecure = config.isSecure;
    this._kerberosRealmName = config.kerberosRealmName;
    this._kmsKeyId = config.kmsKeyId;
    this._osPatchVersion = config.osPatchVersion;
    this._removeNode = config.removeNode;
    this._state = config.state;
    this._bdsClusterVersionSummary.internalValue = config.bdsClusterVersionSummary;
    this._cloudSqlDetails.internalValue = config.cloudSqlDetails;
    this._computeOnlyWorkerNode.internalValue = config.computeOnlyWorkerNode;
    this._edgeNode.internalValue = config.edgeNode;
    this._kafkaBrokerNode.internalValue = config.kafkaBrokerNode;
    this._masterNode.internalValue = config.masterNode;
    this._networkConfig.internalValue = config.networkConfig;
    this._startClusterShapeConfigs.internalValue = config.startClusterShapeConfigs;
    this._timeouts.internalValue = config.timeouts;
    this._utilNode.internalValue = config.utilNode;
    this._workerNode.internalValue = config.workerNode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bootstrap_script_url - computed: true, optional: true, required: false
  private _bootstrapScriptUrl?: string; 
  public get bootstrapScriptUrl() {
    return this.getStringAttribute('bootstrap_script_url');
  }
  public set bootstrapScriptUrl(value: string) {
    this._bootstrapScriptUrl = value;
  }
  public resetBootstrapScriptUrl() {
    this._bootstrapScriptUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapScriptUrlInput() {
    return this._bootstrapScriptUrl;
  }

  // cluster_admin_password - computed: false, optional: false, required: true
  private _clusterAdminPassword?: string; 
  public get clusterAdminPassword() {
    return this.getStringAttribute('cluster_admin_password');
  }
  public set clusterAdminPassword(value: string) {
    this._clusterAdminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAdminPasswordInput() {
    return this._clusterAdminPassword;
  }

  // cluster_details - computed: true, optional: false, required: false
  private _clusterDetails = new BdsBdsInstanceClusterDetailsList(this, "cluster_details", false);
  public get clusterDetails() {
    return this._clusterDetails;
  }

  // cluster_profile - computed: true, optional: true, required: false
  private _clusterProfile?: string; 
  public get clusterProfile() {
    return this.getStringAttribute('cluster_profile');
  }
  public set clusterProfile(value: string) {
    this._clusterProfile = value;
  }
  public resetClusterProfile() {
    this._clusterProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterProfileInput() {
    return this._clusterProfile;
  }

  // cluster_public_key - computed: false, optional: false, required: true
  private _clusterPublicKey?: string; 
  public get clusterPublicKey() {
    return this.getStringAttribute('cluster_public_key');
  }
  public set clusterPublicKey(value: string) {
    this._clusterPublicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPublicKeyInput() {
    return this._clusterPublicKey;
  }

  // cluster_version - computed: false, optional: false, required: true
  private _clusterVersion?: string; 
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }
  public set clusterVersion(value: string) {
    this._clusterVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVersionInput() {
    return this._clusterVersion;
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

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // ignore_existing_nodes_shape - computed: false, optional: true, required: false
  private _ignoreExistingNodesShape?: string[]; 
  public get ignoreExistingNodesShape() {
    return this.getListAttribute('ignore_existing_nodes_shape');
  }
  public set ignoreExistingNodesShape(value: string[]) {
    this._ignoreExistingNodesShape = value;
  }
  public resetIgnoreExistingNodesShape() {
    this._ignoreExistingNodesShape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreExistingNodesShapeInput() {
    return this._ignoreExistingNodesShape;
  }

  // is_cloud_sql_configured - computed: true, optional: true, required: false
  private _isCloudSqlConfigured?: boolean | cdktf.IResolvable; 
  public get isCloudSqlConfigured() {
    return this.getBooleanAttribute('is_cloud_sql_configured');
  }
  public set isCloudSqlConfigured(value: boolean | cdktf.IResolvable) {
    this._isCloudSqlConfigured = value;
  }
  public resetIsCloudSqlConfigured() {
    this._isCloudSqlConfigured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCloudSqlConfiguredInput() {
    return this._isCloudSqlConfigured;
  }

  // is_force_remove_enabled - computed: false, optional: true, required: false
  private _isForceRemoveEnabled?: boolean | cdktf.IResolvable; 
  public get isForceRemoveEnabled() {
    return this.getBooleanAttribute('is_force_remove_enabled');
  }
  public set isForceRemoveEnabled(value: boolean | cdktf.IResolvable) {
    this._isForceRemoveEnabled = value;
  }
  public resetIsForceRemoveEnabled() {
    this._isForceRemoveEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isForceRemoveEnabledInput() {
    return this._isForceRemoveEnabled;
  }

  // is_force_stop_jobs - computed: false, optional: true, required: false
  private _isForceStopJobs?: boolean | cdktf.IResolvable; 
  public get isForceStopJobs() {
    return this.getBooleanAttribute('is_force_stop_jobs');
  }
  public set isForceStopJobs(value: boolean | cdktf.IResolvable) {
    this._isForceStopJobs = value;
  }
  public resetIsForceStopJobs() {
    this._isForceStopJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isForceStopJobsInput() {
    return this._isForceStopJobs;
  }

  // is_high_availability - computed: false, optional: false, required: true
  private _isHighAvailability?: boolean | cdktf.IResolvable; 
  public get isHighAvailability() {
    return this.getBooleanAttribute('is_high_availability');
  }
  public set isHighAvailability(value: boolean | cdktf.IResolvable) {
    this._isHighAvailability = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isHighAvailabilityInput() {
    return this._isHighAvailability;
  }

  // is_kafka_configured - computed: false, optional: true, required: false
  private _isKafkaConfigured?: boolean | cdktf.IResolvable; 
  public get isKafkaConfigured() {
    return this.getBooleanAttribute('is_kafka_configured');
  }
  public set isKafkaConfigured(value: boolean | cdktf.IResolvable) {
    this._isKafkaConfigured = value;
  }
  public resetIsKafkaConfigured() {
    this._isKafkaConfigured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isKafkaConfiguredInput() {
    return this._isKafkaConfigured;
  }

  // is_secure - computed: false, optional: false, required: true
  private _isSecure?: boolean | cdktf.IResolvable; 
  public get isSecure() {
    return this.getBooleanAttribute('is_secure');
  }
  public set isSecure(value: boolean | cdktf.IResolvable) {
    this._isSecure = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isSecureInput() {
    return this._isSecure;
  }

  // kerberos_realm_name - computed: true, optional: true, required: false
  private _kerberosRealmName?: string; 
  public get kerberosRealmName() {
    return this.getStringAttribute('kerberos_realm_name');
  }
  public set kerberosRealmName(value: string) {
    this._kerberosRealmName = value;
  }
  public resetKerberosRealmName() {
    this._kerberosRealmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosRealmNameInput() {
    return this._kerberosRealmName;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new BdsBdsInstanceNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }

  // number_of_nodes - computed: true, optional: false, required: false
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }

  // number_of_nodes_requiring_maintenance_reboot - computed: true, optional: false, required: false
  public get numberOfNodesRequiringMaintenanceReboot() {
    return this.getNumberAttribute('number_of_nodes_requiring_maintenance_reboot');
  }

  // os_patch_version - computed: false, optional: true, required: false
  private _osPatchVersion?: string; 
  public get osPatchVersion() {
    return this.getStringAttribute('os_patch_version');
  }
  public set osPatchVersion(value: string) {
    this._osPatchVersion = value;
  }
  public resetOsPatchVersion() {
    this._osPatchVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osPatchVersionInput() {
    return this._osPatchVersion;
  }

  // remove_node - computed: false, optional: true, required: false
  private _removeNode?: string; 
  public get removeNode() {
    return this.getStringAttribute('remove_node');
  }
  public set removeNode(value: string) {
    this._removeNode = value;
  }
  public resetRemoveNode() {
    this._removeNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeNodeInput() {
    return this._removeNode;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // bds_cluster_version_summary - computed: false, optional: true, required: false
  private _bdsClusterVersionSummary = new BdsBdsInstanceBdsClusterVersionSummaryOutputReference(this, "bds_cluster_version_summary");
  public get bdsClusterVersionSummary() {
    return this._bdsClusterVersionSummary;
  }
  public putBdsClusterVersionSummary(value: BdsBdsInstanceBdsClusterVersionSummary) {
    this._bdsClusterVersionSummary.internalValue = value;
  }
  public resetBdsClusterVersionSummary() {
    this._bdsClusterVersionSummary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bdsClusterVersionSummaryInput() {
    return this._bdsClusterVersionSummary.internalValue;
  }

  // cloud_sql_details - computed: false, optional: true, required: false
  private _cloudSqlDetails = new BdsBdsInstanceCloudSqlDetailsList(this, "cloud_sql_details", false);
  public get cloudSqlDetails() {
    return this._cloudSqlDetails;
  }
  public putCloudSqlDetails(value: BdsBdsInstanceCloudSqlDetails[] | cdktf.IResolvable) {
    this._cloudSqlDetails.internalValue = value;
  }
  public resetCloudSqlDetails() {
    this._cloudSqlDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSqlDetailsInput() {
    return this._cloudSqlDetails.internalValue;
  }

  // compute_only_worker_node - computed: false, optional: true, required: false
  private _computeOnlyWorkerNode = new BdsBdsInstanceComputeOnlyWorkerNodeOutputReference(this, "compute_only_worker_node");
  public get computeOnlyWorkerNode() {
    return this._computeOnlyWorkerNode;
  }
  public putComputeOnlyWorkerNode(value: BdsBdsInstanceComputeOnlyWorkerNode) {
    this._computeOnlyWorkerNode.internalValue = value;
  }
  public resetComputeOnlyWorkerNode() {
    this._computeOnlyWorkerNode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeOnlyWorkerNodeInput() {
    return this._computeOnlyWorkerNode.internalValue;
  }

  // edge_node - computed: false, optional: true, required: false
  private _edgeNode = new BdsBdsInstanceEdgeNodeOutputReference(this, "edge_node");
  public get edgeNode() {
    return this._edgeNode;
  }
  public putEdgeNode(value: BdsBdsInstanceEdgeNode) {
    this._edgeNode.internalValue = value;
  }
  public resetEdgeNode() {
    this._edgeNode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeNodeInput() {
    return this._edgeNode.internalValue;
  }

  // kafka_broker_node - computed: false, optional: true, required: false
  private _kafkaBrokerNode = new BdsBdsInstanceKafkaBrokerNodeOutputReference(this, "kafka_broker_node");
  public get kafkaBrokerNode() {
    return this._kafkaBrokerNode;
  }
  public putKafkaBrokerNode(value: BdsBdsInstanceKafkaBrokerNode) {
    this._kafkaBrokerNode.internalValue = value;
  }
  public resetKafkaBrokerNode() {
    this._kafkaBrokerNode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaBrokerNodeInput() {
    return this._kafkaBrokerNode.internalValue;
  }

  // master_node - computed: false, optional: false, required: true
  private _masterNode = new BdsBdsInstanceMasterNodeOutputReference(this, "master_node");
  public get masterNode() {
    return this._masterNode;
  }
  public putMasterNode(value: BdsBdsInstanceMasterNode) {
    this._masterNode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeInput() {
    return this._masterNode.internalValue;
  }

  // network_config - computed: false, optional: true, required: false
  private _networkConfig = new BdsBdsInstanceNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: BdsBdsInstanceNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  public resetNetworkConfig() {
    this._networkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // start_cluster_shape_configs - computed: false, optional: true, required: false
  private _startClusterShapeConfigs = new BdsBdsInstanceStartClusterShapeConfigsList(this, "start_cluster_shape_configs", false);
  public get startClusterShapeConfigs() {
    return this._startClusterShapeConfigs;
  }
  public putStartClusterShapeConfigs(value: BdsBdsInstanceStartClusterShapeConfigs[] | cdktf.IResolvable) {
    this._startClusterShapeConfigs.internalValue = value;
  }
  public resetStartClusterShapeConfigs() {
    this._startClusterShapeConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startClusterShapeConfigsInput() {
    return this._startClusterShapeConfigs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BdsBdsInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BdsBdsInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // util_node - computed: false, optional: false, required: true
  private _utilNode = new BdsBdsInstanceUtilNodeOutputReference(this, "util_node");
  public get utilNode() {
    return this._utilNode;
  }
  public putUtilNode(value: BdsBdsInstanceUtilNode) {
    this._utilNode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get utilNodeInput() {
    return this._utilNode.internalValue;
  }

  // worker_node - computed: false, optional: false, required: true
  private _workerNode = new BdsBdsInstanceWorkerNodeOutputReference(this, "worker_node");
  public get workerNode() {
    return this._workerNode;
  }
  public putWorkerNode(value: BdsBdsInstanceWorkerNode) {
    this._workerNode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNodeInput() {
    return this._workerNode.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bootstrap_script_url: cdktf.stringToTerraform(this._bootstrapScriptUrl),
      cluster_admin_password: cdktf.stringToTerraform(this._clusterAdminPassword),
      cluster_profile: cdktf.stringToTerraform(this._clusterProfile),
      cluster_public_key: cdktf.stringToTerraform(this._clusterPublicKey),
      cluster_version: cdktf.stringToTerraform(this._clusterVersion),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      ignore_existing_nodes_shape: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoreExistingNodesShape),
      is_cloud_sql_configured: cdktf.booleanToTerraform(this._isCloudSqlConfigured),
      is_force_remove_enabled: cdktf.booleanToTerraform(this._isForceRemoveEnabled),
      is_force_stop_jobs: cdktf.booleanToTerraform(this._isForceStopJobs),
      is_high_availability: cdktf.booleanToTerraform(this._isHighAvailability),
      is_kafka_configured: cdktf.booleanToTerraform(this._isKafkaConfigured),
      is_secure: cdktf.booleanToTerraform(this._isSecure),
      kerberos_realm_name: cdktf.stringToTerraform(this._kerberosRealmName),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      os_patch_version: cdktf.stringToTerraform(this._osPatchVersion),
      remove_node: cdktf.stringToTerraform(this._removeNode),
      state: cdktf.stringToTerraform(this._state),
      bds_cluster_version_summary: bdsBdsInstanceBdsClusterVersionSummaryToTerraform(this._bdsClusterVersionSummary.internalValue),
      cloud_sql_details: cdktf.listMapper(bdsBdsInstanceCloudSqlDetailsToTerraform, true)(this._cloudSqlDetails.internalValue),
      compute_only_worker_node: bdsBdsInstanceComputeOnlyWorkerNodeToTerraform(this._computeOnlyWorkerNode.internalValue),
      edge_node: bdsBdsInstanceEdgeNodeToTerraform(this._edgeNode.internalValue),
      kafka_broker_node: bdsBdsInstanceKafkaBrokerNodeToTerraform(this._kafkaBrokerNode.internalValue),
      master_node: bdsBdsInstanceMasterNodeToTerraform(this._masterNode.internalValue),
      network_config: bdsBdsInstanceNetworkConfigToTerraform(this._networkConfig.internalValue),
      start_cluster_shape_configs: cdktf.listMapper(bdsBdsInstanceStartClusterShapeConfigsToTerraform, true)(this._startClusterShapeConfigs.internalValue),
      timeouts: bdsBdsInstanceTimeoutsToTerraform(this._timeouts.internalValue),
      util_node: bdsBdsInstanceUtilNodeToTerraform(this._utilNode.internalValue),
      worker_node: bdsBdsInstanceWorkerNodeToTerraform(this._workerNode.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bootstrap_script_url: {
        value: cdktf.stringToHclTerraform(this._bootstrapScriptUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_admin_password: {
        value: cdktf.stringToHclTerraform(this._clusterAdminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_profile: {
        value: cdktf.stringToHclTerraform(this._clusterProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_public_key: {
        value: cdktf.stringToHclTerraform(this._clusterPublicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_version: {
        value: cdktf.stringToHclTerraform(this._clusterVersion),
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
      ignore_existing_nodes_shape: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ignoreExistingNodesShape),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      is_cloud_sql_configured: {
        value: cdktf.booleanToHclTerraform(this._isCloudSqlConfigured),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_force_remove_enabled: {
        value: cdktf.booleanToHclTerraform(this._isForceRemoveEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_force_stop_jobs: {
        value: cdktf.booleanToHclTerraform(this._isForceStopJobs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_high_availability: {
        value: cdktf.booleanToHclTerraform(this._isHighAvailability),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_kafka_configured: {
        value: cdktf.booleanToHclTerraform(this._isKafkaConfigured),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_secure: {
        value: cdktf.booleanToHclTerraform(this._isSecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kerberos_realm_name: {
        value: cdktf.stringToHclTerraform(this._kerberosRealmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_patch_version: {
        value: cdktf.stringToHclTerraform(this._osPatchVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_node: {
        value: cdktf.stringToHclTerraform(this._removeNode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bds_cluster_version_summary: {
        value: bdsBdsInstanceBdsClusterVersionSummaryToHclTerraform(this._bdsClusterVersionSummary.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BdsBdsInstanceBdsClusterVersionSummaryList",
      },
      cloud_sql_details: {
        value: cdktf.listMapperHcl(bdsBdsInstanceCloudSqlDetailsToHclTerraform, true)(this._cloudSqlDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BdsBdsInstanceCloudSqlDetailsList",
      },
      compute_only_worker_node: {
        value: bdsBdsInstanceComputeOnlyWorkerNodeToHclTerraform(this._computeOnlyWorkerNode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BdsBdsInstanceComputeOnlyWorkerNodeList",
      },
      edge_node: {
        value: bdsBdsInstanceEdgeNodeToHclTerraform(this._edgeNode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BdsBdsInstanceEdgeNodeList",
      },
      kafka_broker_node: {
        value: bdsBdsInstanceKafkaBrokerNodeToHclTerraform(this._kafkaBrokerNode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BdsBdsInstanceKafkaBrokerNodeList",
      },
      master_node: {
        value: bdsBdsInstanceMasterNodeToHclTerraform(this._masterNode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BdsBdsInstanceMasterNodeList",
      },
      network_config: {
        value: bdsBdsInstanceNetworkConfigToHclTerraform(this._networkConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BdsBdsInstanceNetworkConfigList",
      },
      start_cluster_shape_configs: {
        value: cdktf.listMapperHcl(bdsBdsInstanceStartClusterShapeConfigsToHclTerraform, true)(this._startClusterShapeConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BdsBdsInstanceStartClusterShapeConfigsList",
      },
      timeouts: {
        value: bdsBdsInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BdsBdsInstanceTimeouts",
      },
      util_node: {
        value: bdsBdsInstanceUtilNodeToHclTerraform(this._utilNode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BdsBdsInstanceUtilNodeList",
      },
      worker_node: {
        value: bdsBdsInstanceWorkerNodeToHclTerraform(this._workerNode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BdsBdsInstanceWorkerNodeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
