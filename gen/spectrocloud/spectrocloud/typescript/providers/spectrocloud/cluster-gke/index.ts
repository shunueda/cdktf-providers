// https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterGkeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The setting to apply the cluster profile. `DownloadAndInstall` will download and install packs in one action. `DownloadAndInstallLater` will only download artifact and postpone install for later. Default value is `DownloadAndInstall`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#apply_setting ClusterGke#apply_setting}
  */
  readonly applySetting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#cloud_account_id ClusterGke#cloud_account_id}
  */
  readonly cloudAccountId: string;
  /**
  * `cluster_meta_attribute` can be used to set additional cluster metadata information, eg `{'nic_name': 'test', 'env': 'stage'}`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#cluster_meta_attribute ClusterGke#cluster_meta_attribute}
  */
  readonly clusterMetaAttribute?: string;
  /**
  * The context of the GKE cluster. Allowed values are `project` or `tenant`. Default is `project`. If  the `project` context is specified, the project name will sourced from the provider configuration parameter [`project_name`](https://registry.terraform.io/providers/spectrocloud/spectrocloud/latest/docs#schema).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#context ClusterGke#context}
  */
  readonly context?: string;
  /**
  * The description of the cluster. Default value is empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#description ClusterGke#description}
  */
  readonly description?: string;
  /**
  * If set to `true`, the cluster will be force deleted and user has to manually clean up the provisioned cloud resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#force_delete ClusterGke#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Delay duration in minutes to before invoking cluster force delete. Default and minimum is 20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#force_delete_delay ClusterGke#force_delete_delay}
  */
  readonly forceDeleteDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#id ClusterGke#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#name ClusterGke#name}
  */
  readonly name: string;
  /**
  * Date and time after which to patch cluster `RFC3339: 2006-01-02T15:04:05Z07:00`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#os_patch_after ClusterGke#os_patch_after}
  */
  readonly osPatchAfter?: string;
  /**
  * Whether to apply OS patch on boot. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#os_patch_on_boot ClusterGke#os_patch_on_boot}
  */
  readonly osPatchOnBoot?: boolean | cdktf.IResolvable;
  /**
  * Cron schedule for OS patching. This must be in the form of `0 0 * * *`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#os_patch_schedule ClusterGke#os_patch_schedule}
  */
  readonly osPatchSchedule?: string;
  /**
  * The pause agent upgrades setting allows to control the automatic upgrade of the Palette component and agent for an individual cluster. The default value is `unlock`, meaning upgrades occur automatically. Setting it to `lock` pauses automatic agent upgrades for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#pause_agent_upgrades ClusterGke#pause_agent_upgrades}
  */
  readonly pauseAgentUpgrades?: string;
  /**
  * To authorize the cluster repave, set the value to `Approved` for approval and `""` to decline. Default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#review_repave_state ClusterGke#review_repave_state}
  */
  readonly reviewRepaveState?: string;
  /**
  * If `true`, the cluster will be created asynchronously. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#skip_completion ClusterGke#skip_completion}
  */
  readonly skipCompletion?: boolean | cdktf.IResolvable;
  /**
  * A list of tags to be applied to the cluster. Tags must be in the form of `key:value`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#tags ClusterGke#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#update_worker_pool_in_parallel ClusterGke#update_worker_pool_in_parallel}
  */
  readonly updateWorkerPoolInParallel?: boolean | cdktf.IResolvable;
  /**
  * backup_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#backup_policy ClusterGke#backup_policy}
  */
  readonly backupPolicy?: ClusterGkeBackupPolicy;
  /**
  * cloud_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#cloud_config ClusterGke#cloud_config}
  */
  readonly cloudConfig: ClusterGkeCloudConfig;
  /**
  * cluster_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#cluster_profile ClusterGke#cluster_profile}
  */
  readonly clusterProfile?: ClusterGkeClusterProfile[] | cdktf.IResolvable;
  /**
  * cluster_rbac_binding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#cluster_rbac_binding ClusterGke#cluster_rbac_binding}
  */
  readonly clusterRbacBinding?: ClusterGkeClusterRbacBinding[] | cdktf.IResolvable;
  /**
  * cluster_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#cluster_template ClusterGke#cluster_template}
  */
  readonly clusterTemplate?: ClusterGkeClusterTemplate;
  /**
  * host_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#host_config ClusterGke#host_config}
  */
  readonly hostConfig?: ClusterGkeHostConfig[] | cdktf.IResolvable;
  /**
  * machine_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#machine_pool ClusterGke#machine_pool}
  */
  readonly machinePool: ClusterGkeMachinePool[] | cdktf.IResolvable;
  /**
  * namespaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#namespaces ClusterGke#namespaces}
  */
  readonly namespaces?: ClusterGkeNamespaces[] | cdktf.IResolvable;
  /**
  * scan_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#scan_policy ClusterGke#scan_policy}
  */
  readonly scanPolicy?: ClusterGkeScanPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#timeouts ClusterGke#timeouts}
  */
  readonly timeouts?: ClusterGkeTimeouts;
}
export interface ClusterGkeLocationConfig {
}

export function clusterGkeLocationConfigToTerraform(struct?: ClusterGkeLocationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterGkeLocationConfigToHclTerraform(struct?: ClusterGkeLocationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterGkeLocationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterGkeLocationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterGkeLocationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // country_code - computed: true, optional: false, required: false
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }

  // country_name - computed: true, optional: false, required: false
  public get countryName() {
    return this.getStringAttribute('country_name');
  }

  // latitude - computed: true, optional: false, required: false
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }

  // longitude - computed: true, optional: false, required: false
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }

  // region_code - computed: true, optional: false, required: false
  public get regionCode() {
    return this.getStringAttribute('region_code');
  }

  // region_name - computed: true, optional: false, required: false
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
}

export class ClusterGkeLocationConfigList extends cdktf.ComplexList {

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
  public get(index: number): ClusterGkeLocationConfigOutputReference {
    return new ClusterGkeLocationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterGkeBackupPolicy {
  /**
  * The ID of the backup location to use for the backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#backup_location_id ClusterGke#backup_location_id}
  */
  readonly backupLocationId: string;
  /**
  * The list of cluster UIDs to include in the backup. If `include_all_clusters` is set to `true`, then all clusters will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#cluster_uids ClusterGke#cluster_uids}
  */
  readonly clusterUids?: string[];
  /**
  * The number of hours after which the backup will be deleted. For example, if the expiry is set to 24, the backup will be deleted after 24 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#expiry_in_hour ClusterGke#expiry_in_hour}
  */
  readonly expiryInHour: number;
  /**
  * Whether to include all clusters in the backup. If set to false, only the clusters specified in `cluster_uids` will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#include_all_clusters ClusterGke#include_all_clusters}
  */
  readonly includeAllClusters?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to include cluster resources in the backup. If set to false, only the cluster configuration and disks will be backed up. (Note: Starting with Palette version 4.6, the include_cluster_resources attribute will be deprecated, and a new attribute, include_cluster_resources_mode, will be introduced.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#include_cluster_resources ClusterGke#include_cluster_resources}
  */
  readonly includeClusterResources?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to include the cluster resources in the backup. Supported values are `always`, `never`, and `auto`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#include_cluster_resources_mode ClusterGke#include_cluster_resources_mode}
  */
  readonly includeClusterResourcesMode?: string;
  /**
  * Whether to include the disks in the backup. If set to false, only the cluster configuration will be backed up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#include_disks ClusterGke#include_disks}
  */
  readonly includeDisks?: boolean | cdktf.IResolvable;
  /**
  * The list of Kubernetes namespaces to include in the backup. If not specified, all namespaces will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#namespaces ClusterGke#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Prefix for the backup name. The backup name will be of the format <prefix>-<cluster-name>-<timestamp>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#prefix ClusterGke#prefix}
  */
  readonly prefix: string;
  /**
  * The schedule for the backup. The schedule is specified in cron format. For example, to run the backup every day at 1:00 AM, the schedule should be set to `0 1 * * *`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#schedule ClusterGke#schedule}
  */
  readonly schedule: string;
}

export function clusterGkeBackupPolicyToTerraform(struct?: ClusterGkeBackupPolicyOutputReference | ClusterGkeBackupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_location_id: cdktf.stringToTerraform(struct!.backupLocationId),
    cluster_uids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterUids),
    expiry_in_hour: cdktf.numberToTerraform(struct!.expiryInHour),
    include_all_clusters: cdktf.booleanToTerraform(struct!.includeAllClusters),
    include_cluster_resources: cdktf.booleanToTerraform(struct!.includeClusterResources),
    include_cluster_resources_mode: cdktf.stringToTerraform(struct!.includeClusterResourcesMode),
    include_disks: cdktf.booleanToTerraform(struct!.includeDisks),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    schedule: cdktf.stringToTerraform(struct!.schedule),
  }
}


export function clusterGkeBackupPolicyToHclTerraform(struct?: ClusterGkeBackupPolicyOutputReference | ClusterGkeBackupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_location_id: {
      value: cdktf.stringToHclTerraform(struct!.backupLocationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_uids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterUids),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    expiry_in_hour: {
      value: cdktf.numberToHclTerraform(struct!.expiryInHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    include_all_clusters: {
      value: cdktf.booleanToHclTerraform(struct!.includeAllClusters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_cluster_resources: {
      value: cdktf.booleanToHclTerraform(struct!.includeClusterResources),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_cluster_resources_mode: {
      value: cdktf.stringToHclTerraform(struct!.includeClusterResourcesMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_disks: {
      value: cdktf.booleanToHclTerraform(struct!.includeDisks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterGkeBackupPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterGkeBackupPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupLocationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupLocationId = this._backupLocationId;
    }
    if (this._clusterUids !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterUids = this._clusterUids;
    }
    if (this._expiryInHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiryInHour = this._expiryInHour;
    }
    if (this._includeAllClusters !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAllClusters = this._includeAllClusters;
    }
    if (this._includeClusterResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeClusterResources = this._includeClusterResources;
    }
    if (this._includeClusterResourcesMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeClusterResourcesMode = this._includeClusterResourcesMode;
    }
    if (this._includeDisks !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDisks = this._includeDisks;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterGkeBackupPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupLocationId = undefined;
      this._clusterUids = undefined;
      this._expiryInHour = undefined;
      this._includeAllClusters = undefined;
      this._includeClusterResources = undefined;
      this._includeClusterResourcesMode = undefined;
      this._includeDisks = undefined;
      this._namespaces = undefined;
      this._prefix = undefined;
      this._schedule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupLocationId = value.backupLocationId;
      this._clusterUids = value.clusterUids;
      this._expiryInHour = value.expiryInHour;
      this._includeAllClusters = value.includeAllClusters;
      this._includeClusterResources = value.includeClusterResources;
      this._includeClusterResourcesMode = value.includeClusterResourcesMode;
      this._includeDisks = value.includeDisks;
      this._namespaces = value.namespaces;
      this._prefix = value.prefix;
      this._schedule = value.schedule;
    }
  }

  // backup_location_id - computed: false, optional: false, required: true
  private _backupLocationId?: string; 
  public get backupLocationId() {
    return this.getStringAttribute('backup_location_id');
  }
  public set backupLocationId(value: string) {
    this._backupLocationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupLocationIdInput() {
    return this._backupLocationId;
  }

  // cluster_uids - computed: false, optional: true, required: false
  private _clusterUids?: string[]; 
  public get clusterUids() {
    return cdktf.Fn.tolist(this.getListAttribute('cluster_uids'));
  }
  public set clusterUids(value: string[]) {
    this._clusterUids = value;
  }
  public resetClusterUids() {
    this._clusterUids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterUidsInput() {
    return this._clusterUids;
  }

  // expiry_in_hour - computed: false, optional: false, required: true
  private _expiryInHour?: number; 
  public get expiryInHour() {
    return this.getNumberAttribute('expiry_in_hour');
  }
  public set expiryInHour(value: number) {
    this._expiryInHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInHourInput() {
    return this._expiryInHour;
  }

  // include_all_clusters - computed: false, optional: true, required: false
  private _includeAllClusters?: boolean | cdktf.IResolvable; 
  public get includeAllClusters() {
    return this.getBooleanAttribute('include_all_clusters');
  }
  public set includeAllClusters(value: boolean | cdktf.IResolvable) {
    this._includeAllClusters = value;
  }
  public resetIncludeAllClusters() {
    this._includeAllClusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAllClustersInput() {
    return this._includeAllClusters;
  }

  // include_cluster_resources - computed: false, optional: true, required: false
  private _includeClusterResources?: boolean | cdktf.IResolvable; 
  public get includeClusterResources() {
    return this.getBooleanAttribute('include_cluster_resources');
  }
  public set includeClusterResources(value: boolean | cdktf.IResolvable) {
    this._includeClusterResources = value;
  }
  public resetIncludeClusterResources() {
    this._includeClusterResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeClusterResourcesInput() {
    return this._includeClusterResources;
  }

  // include_cluster_resources_mode - computed: false, optional: true, required: false
  private _includeClusterResourcesMode?: string; 
  public get includeClusterResourcesMode() {
    return this.getStringAttribute('include_cluster_resources_mode');
  }
  public set includeClusterResourcesMode(value: string) {
    this._includeClusterResourcesMode = value;
  }
  public resetIncludeClusterResourcesMode() {
    this._includeClusterResourcesMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeClusterResourcesModeInput() {
    return this._includeClusterResourcesMode;
  }

  // include_disks - computed: false, optional: true, required: false
  private _includeDisks?: boolean | cdktf.IResolvable; 
  public get includeDisks() {
    return this.getBooleanAttribute('include_disks');
  }
  public set includeDisks(value: boolean | cdktf.IResolvable) {
    this._includeDisks = value;
  }
  public resetIncludeDisks() {
    this._includeDisks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDisksInput() {
    return this._includeDisks;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return cdktf.Fn.tolist(this.getListAttribute('namespaces'));
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }
}
export interface ClusterGkeCloudConfig {
  /**
  * GCP project name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#project ClusterGke#project}
  */
  readonly project: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#region ClusterGke#region}
  */
  readonly region: string;
}

export function clusterGkeCloudConfigToTerraform(struct?: ClusterGkeCloudConfigOutputReference | ClusterGkeCloudConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function clusterGkeCloudConfigToHclTerraform(struct?: ClusterGkeCloudConfigOutputReference | ClusterGkeCloudConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterGkeCloudConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterGkeCloudConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterGkeCloudConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._project = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._project = value.project;
      this._region = value.region;
    }
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface ClusterGkeClusterProfilePackManifest {
  /**
  * The content of the manifest. The content is the YAML content of the manifest. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#content ClusterGke#content}
  */
  readonly content: string;
  /**
  * The name of the manifest. The name must be unique within the pack. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#name ClusterGke#name}
  */
  readonly name: string;
}

export function clusterGkeClusterProfilePackManifestToTerraform(struct?: ClusterGkeClusterProfilePackManifest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function clusterGkeClusterProfilePackManifestToHclTerraform(struct?: ClusterGkeClusterProfilePackManifest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterGkeClusterProfilePackManifestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterGkeClusterProfilePackManifest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterGkeClusterProfilePackManifest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._name = value.name;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class ClusterGkeClusterProfilePackManifestList extends cdktf.ComplexList {
  public internalValue? : ClusterGkeClusterProfilePackManifest[] | cdktf.IResolvable

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
  public get(index: number): ClusterGkeClusterProfilePackManifestOutputReference {
    return new ClusterGkeClusterProfilePackManifestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterGkeClusterProfilePack {
  /**
  * The name of the pack. The name must be unique within the cluster profile. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#name ClusterGke#name}
  */
  readonly name: string;
  /**
  * The registry name of the pack. The registry name is the human-readable name of the registry. This attribute can be used instead of `registry_uid` for better readability. If `uid` is not provided, this field can be used along with `name` and `tag` to resolve the pack UID internally. Either `registry_uid` or `registry_name` can be specified, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#registry_name ClusterGke#registry_name}
  */
  readonly registryName?: string;
  /**
  * The registry UID of the pack. The registry UID is the unique identifier of the registry. This attribute is required if there is more than one registry that contains a pack with the same name. If `uid` is not provided, this field is required along with `name` and `tag` to resolve the pack UID internally. Either `registry_uid` or `registry_name` can be specified, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#registry_uid ClusterGke#registry_uid}
  */
  readonly registryUid?: string;
  /**
  * The tag of the pack. The tag is the version of the pack. This attribute is required if the pack type is `spectro` or `helm`. If `uid` is not provided, this field is required along with `name` and `registry_uid` (or `registry_name`) to resolve the pack UID internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#tag ClusterGke#tag}
  */
  readonly tag?: string;
  /**
  * The type of the pack. Allowed values are `spectro`, `manifest`, `helm`, or `oci`. The default value is spectro. If using an OCI registry for pack, set the type to `oci`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#type ClusterGke#type}
  */
  readonly type?: string;
  /**
  * The unique identifier of the pack. The value can be looked up using the [`spectrocloud_pack`](https://registry.terraform.io/providers/spectrocloud/spectrocloud/latest/docs/data-sources/pack) data source. This value is required if the pack type is `spectro` and for `helm` if the chart is from a public helm registry. If not provided, all of `name`, `tag`, and `registry_uid` must be specified to resolve the pack UID internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#uid ClusterGke#uid}
  */
  readonly uid?: string;
  /**
  * The values of the pack. The values are the configuration values of the pack. The values are specified in YAML format. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#values ClusterGke#values}
  */
  readonly values?: string;
  /**
  * manifest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#manifest ClusterGke#manifest}
  */
  readonly manifest?: ClusterGkeClusterProfilePackManifest[] | cdktf.IResolvable;
}

export function clusterGkeClusterProfilePackToTerraform(struct?: ClusterGkeClusterProfilePack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    registry_name: cdktf.stringToTerraform(struct!.registryName),
    registry_uid: cdktf.stringToTerraform(struct!.registryUid),
    tag: cdktf.stringToTerraform(struct!.tag),
    type: cdktf.stringToTerraform(struct!.type),
    uid: cdktf.stringToTerraform(struct!.uid),
    values: cdktf.stringToTerraform(struct!.values),
    manifest: cdktf.listMapper(clusterGkeClusterProfilePackManifestToTerraform, true)(struct!.manifest),
  }
}


export function clusterGkeClusterProfilePackToHclTerraform(struct?: ClusterGkeClusterProfilePack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_name: {
      value: cdktf.stringToHclTerraform(struct!.registryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_uid: {
      value: cdktf.stringToHclTerraform(struct!.registryUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
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
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.stringToHclTerraform(struct!.values),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manifest: {
      value: cdktf.listMapperHcl(clusterGkeClusterProfilePackManifestToHclTerraform, true)(struct!.manifest),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterGkeClusterProfilePackManifestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterGkeClusterProfilePackOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterGkeClusterProfilePack | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._registryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryName = this._registryName;
    }
    if (this._registryUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryUid = this._registryUid;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._manifest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifest = this._manifest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterGkeClusterProfilePack | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._registryName = undefined;
      this._registryUid = undefined;
      this._tag = undefined;
      this._type = undefined;
      this._uid = undefined;
      this._values = undefined;
      this._manifest.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._registryName = value.registryName;
      this._registryUid = value.registryUid;
      this._tag = value.tag;
      this._type = value.type;
      this._uid = value.uid;
      this._values = value.values;
      this._manifest.internalValue = value.manifest;
    }
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

  // registry_name - computed: false, optional: true, required: false
  private _registryName?: string; 
  public get registryName() {
    return this.getStringAttribute('registry_name');
  }
  public set registryName(value: string) {
    this._registryName = value;
  }
  public resetRegistryName() {
    this._registryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryNameInput() {
    return this._registryName;
  }

  // registry_uid - computed: false, optional: true, required: false
  private _registryUid?: string; 
  public get registryUid() {
    return this.getStringAttribute('registry_uid');
  }
  public set registryUid(value: string) {
    this._registryUid = value;
  }
  public resetRegistryUid() {
    this._registryUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryUidInput() {
    return this._registryUid;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
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

  // uid - computed: true, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string; 
  public get values() {
    return this.getStringAttribute('values');
  }
  public set values(value: string) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // manifest - computed: false, optional: true, required: false
  private _manifest = new ClusterGkeClusterProfilePackManifestList(this, "manifest", false);
  public get manifest() {
    return this._manifest;
  }
  public putManifest(value: ClusterGkeClusterProfilePackManifest[] | cdktf.IResolvable) {
    this._manifest.internalValue = value;
  }
  public resetManifest() {
    this._manifest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestInput() {
    return this._manifest.internalValue;
  }
}

export class ClusterGkeClusterProfilePackList extends cdktf.ComplexList {
  public internalValue? : ClusterGkeClusterProfilePack[] | cdktf.IResolvable

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
  public get(index: number): ClusterGkeClusterProfilePackOutputReference {
    return new ClusterGkeClusterProfilePackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterGkeClusterProfile {
  /**
  * The ID of the cluster profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#id ClusterGke#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A map of cluster profile variables, specified as key-value pairs. For example: `priority = "5"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#variables ClusterGke#variables}
  */
  readonly variables?: { [key: string]: string };
  /**
  * pack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#pack ClusterGke#pack}
  */
  readonly pack?: ClusterGkeClusterProfilePack[] | cdktf.IResolvable;
}

export function clusterGkeClusterProfileToTerraform(struct?: ClusterGkeClusterProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.variables),
    pack: cdktf.listMapper(clusterGkeClusterProfilePackToTerraform, true)(struct!.pack),
  }
}


export function clusterGkeClusterProfileToHclTerraform(struct?: ClusterGkeClusterProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.variables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pack: {
      value: cdktf.listMapperHcl(clusterGkeClusterProfilePackToHclTerraform, true)(struct!.pack),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterGkeClusterProfilePackList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterGkeClusterProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterGkeClusterProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._variables !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables;
    }
    if (this._pack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pack = this._pack?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterGkeClusterProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._variables = undefined;
      this._pack.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._variables = value.variables;
      this._pack.internalValue = value.pack;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: { [key: string]: string }; 
  public get variables() {
    return this.getStringMapAttribute('variables');
  }
  public set variables(value: { [key: string]: string }) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }

  // pack - computed: false, optional: true, required: false
  private _pack = new ClusterGkeClusterProfilePackList(this, "pack", false);
  public get pack() {
    return this._pack;
  }
  public putPack(value: ClusterGkeClusterProfilePack[] | cdktf.IResolvable) {
    this._pack.internalValue = value;
  }
  public resetPack() {
    this._pack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packInput() {
    return this._pack.internalValue;
  }
}

export class ClusterGkeClusterProfileList extends cdktf.ComplexList {
  public internalValue? : ClusterGkeClusterProfile[] | cdktf.IResolvable

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
  public get(index: number): ClusterGkeClusterProfileOutputReference {
    return new ClusterGkeClusterProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterGkeClusterRbacBindingSubjects {
  /**
  * The name of the subject. Required if 'type' is set to 'User' or 'Group'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#name ClusterGke#name}
  */
  readonly name: string;
  /**
  * The Kubernetes namespace of the subject. Required if 'type' is set to 'ServiceAccount'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#namespace ClusterGke#namespace}
  */
  readonly namespace?: string;
  /**
  * The type of the subject. Can be one of the following values: `User`, `Group`, or `ServiceAccount`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#type ClusterGke#type}
  */
  readonly type: string;
}

export function clusterGkeClusterRbacBindingSubjectsToTerraform(struct?: ClusterGkeClusterRbacBindingSubjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function clusterGkeClusterRbacBindingSubjectsToHclTerraform(struct?: ClusterGkeClusterRbacBindingSubjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
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

export class ClusterGkeClusterRbacBindingSubjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterGkeClusterRbacBindingSubjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterGkeClusterRbacBindingSubjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ClusterGkeClusterRbacBindingSubjectsList extends cdktf.ComplexList {
  public internalValue? : ClusterGkeClusterRbacBindingSubjects[] | cdktf.IResolvable

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
  public get(index: number): ClusterGkeClusterRbacBindingSubjectsOutputReference {
    return new ClusterGkeClusterRbacBindingSubjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterGkeClusterRbacBinding {
  /**
  * The Kubernetes namespace of the RBAC binding. Required if 'type' is set to 'RoleBinding'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#namespace ClusterGke#namespace}
  */
  readonly namespace?: string;
  /**
  * The role of the RBAC binding. Required if 'type' is set to 'RoleBinding'. Must include 'name' and 'kind' fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#role ClusterGke#role}
  */
  readonly role?: { [key: string]: string };
  /**
  * The type of the RBAC binding. Can be one of the following values: `RoleBinding`, or `ClusterRoleBinding`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#type ClusterGke#type}
  */
  readonly type: string;
  /**
  * subjects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#subjects ClusterGke#subjects}
  */
  readonly subjects?: ClusterGkeClusterRbacBindingSubjects[] | cdktf.IResolvable;
}

export function clusterGkeClusterRbacBindingToTerraform(struct?: ClusterGkeClusterRbacBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    role: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    subjects: cdktf.listMapper(clusterGkeClusterRbacBindingSubjectsToTerraform, true)(struct!.subjects),
  }
}


export function clusterGkeClusterRbacBindingToHclTerraform(struct?: ClusterGkeClusterRbacBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.role),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subjects: {
      value: cdktf.listMapperHcl(clusterGkeClusterRbacBindingSubjectsToHclTerraform, true)(struct!.subjects),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterGkeClusterRbacBindingSubjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterGkeClusterRbacBindingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterGkeClusterRbacBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._subjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjects = this._subjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterGkeClusterRbacBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._role = undefined;
      this._type = undefined;
      this._subjects.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._role = value.role;
      this._type = value.type;
      this._subjects.internalValue = value.subjects;
    }
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // role - computed: false, optional: true, required: false
  private _role?: { [key: string]: string }; 
  public get role() {
    return this.getStringMapAttribute('role');
  }
  public set role(value: { [key: string]: string }) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // subjects - computed: false, optional: true, required: false
  private _subjects = new ClusterGkeClusterRbacBindingSubjectsList(this, "subjects", false);
  public get subjects() {
    return this._subjects;
  }
  public putSubjects(value: ClusterGkeClusterRbacBindingSubjects[] | cdktf.IResolvable) {
    this._subjects.internalValue = value;
  }
  public resetSubjects() {
    this._subjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectsInput() {
    return this._subjects.internalValue;
  }
}

export class ClusterGkeClusterRbacBindingList extends cdktf.ComplexList {
  public internalValue? : ClusterGkeClusterRbacBinding[] | cdktf.IResolvable

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
  public get(index: number): ClusterGkeClusterRbacBindingOutputReference {
    return new ClusterGkeClusterRbacBindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterGkeClusterTemplateClusterProfile {
  /**
  * The UID of the cluster profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#id ClusterGke#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A map of cluster profile variables, specified as key-value pairs. For example: `priority = "5"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#variables ClusterGke#variables}
  */
  readonly variables?: { [key: string]: string };
}

export function clusterGkeClusterTemplateClusterProfileToTerraform(struct?: ClusterGkeClusterTemplateClusterProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.variables),
  }
}


export function clusterGkeClusterTemplateClusterProfileToHclTerraform(struct?: ClusterGkeClusterTemplateClusterProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.variables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterGkeClusterTemplateClusterProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterGkeClusterTemplateClusterProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._variables !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterGkeClusterTemplateClusterProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._variables = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._variables = value.variables;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: { [key: string]: string }; 
  public get variables() {
    return this.getStringMapAttribute('variables');
  }
  public set variables(value: { [key: string]: string }) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }
}

export class ClusterGkeClusterTemplateClusterProfileList extends cdktf.ComplexList {
  public internalValue? : ClusterGkeClusterTemplateClusterProfile[] | cdktf.IResolvable

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
  public get(index: number): ClusterGkeClusterTemplateClusterProfileOutputReference {
    return new ClusterGkeClusterTemplateClusterProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterGkeClusterTemplate {
  /**
  * The ID of the cluster template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#id ClusterGke#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * cluster_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#cluster_profile ClusterGke#cluster_profile}
  */
  readonly clusterProfile?: ClusterGkeClusterTemplateClusterProfile[] | cdktf.IResolvable;
}

export function clusterGkeClusterTemplateToTerraform(struct?: ClusterGkeClusterTemplateOutputReference | ClusterGkeClusterTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    cluster_profile: cdktf.listMapper(clusterGkeClusterTemplateClusterProfileToTerraform, true)(struct!.clusterProfile),
  }
}


export function clusterGkeClusterTemplateToHclTerraform(struct?: ClusterGkeClusterTemplateOutputReference | ClusterGkeClusterTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_profile: {
      value: cdktf.listMapperHcl(clusterGkeClusterTemplateClusterProfileToHclTerraform, true)(struct!.clusterProfile),
      isBlock: true,
      type: "set",
      storageClassType: "ClusterGkeClusterTemplateClusterProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterGkeClusterTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterGkeClusterTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._clusterProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterProfile = this._clusterProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterGkeClusterTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._clusterProfile.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._clusterProfile.internalValue = value.clusterProfile;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // cluster_profile - computed: false, optional: true, required: false
  private _clusterProfile = new ClusterGkeClusterTemplateClusterProfileList(this, "cluster_profile", true);
  public get clusterProfile() {
    return this._clusterProfile;
  }
  public putClusterProfile(value: ClusterGkeClusterTemplateClusterProfile[] | cdktf.IResolvable) {
    this._clusterProfile.internalValue = value;
  }
  public resetClusterProfile() {
    this._clusterProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterProfileInput() {
    return this._clusterProfile.internalValue;
  }
}
export interface ClusterGkeHostConfig {
  /**
  * The external traffic policy for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#external_traffic_policy ClusterGke#external_traffic_policy}
  */
  readonly externalTrafficPolicy?: string;
  /**
  * The type of endpoint for the cluster. Can be either 'Ingress' or 'LoadBalancer'. The default is 'Ingress'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#host_endpoint_type ClusterGke#host_endpoint_type}
  */
  readonly hostEndpointType?: string;
  /**
  * The host for the Ingress endpoint. Required if 'host_endpoint_type' is set to 'Ingress'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#ingress_host ClusterGke#ingress_host}
  */
  readonly ingressHost?: string;
  /**
  * The source ranges for the load balancer. Required if 'host_endpoint_type' is set to 'LoadBalancer'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#load_balancer_source_ranges ClusterGke#load_balancer_source_ranges}
  */
  readonly loadBalancerSourceRanges?: string;
}

export function clusterGkeHostConfigToTerraform(struct?: ClusterGkeHostConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_traffic_policy: cdktf.stringToTerraform(struct!.externalTrafficPolicy),
    host_endpoint_type: cdktf.stringToTerraform(struct!.hostEndpointType),
    ingress_host: cdktf.stringToTerraform(struct!.ingressHost),
    load_balancer_source_ranges: cdktf.stringToTerraform(struct!.loadBalancerSourceRanges),
  }
}


export function clusterGkeHostConfigToHclTerraform(struct?: ClusterGkeHostConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_traffic_policy: {
      value: cdktf.stringToHclTerraform(struct!.externalTrafficPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_endpoint_type: {
      value: cdktf.stringToHclTerraform(struct!.hostEndpointType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_host: {
      value: cdktf.stringToHclTerraform(struct!.ingressHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_source_ranges: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerSourceRanges),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterGkeHostConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterGkeHostConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalTrafficPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalTrafficPolicy = this._externalTrafficPolicy;
    }
    if (this._hostEndpointType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostEndpointType = this._hostEndpointType;
    }
    if (this._ingressHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressHost = this._ingressHost;
    }
    if (this._loadBalancerSourceRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerSourceRanges = this._loadBalancerSourceRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterGkeHostConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalTrafficPolicy = undefined;
      this._hostEndpointType = undefined;
      this._ingressHost = undefined;
      this._loadBalancerSourceRanges = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalTrafficPolicy = value.externalTrafficPolicy;
      this._hostEndpointType = value.hostEndpointType;
      this._ingressHost = value.ingressHost;
      this._loadBalancerSourceRanges = value.loadBalancerSourceRanges;
    }
  }

  // external_traffic_policy - computed: false, optional: true, required: false
  private _externalTrafficPolicy?: string; 
  public get externalTrafficPolicy() {
    return this.getStringAttribute('external_traffic_policy');
  }
  public set externalTrafficPolicy(value: string) {
    this._externalTrafficPolicy = value;
  }
  public resetExternalTrafficPolicy() {
    this._externalTrafficPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTrafficPolicyInput() {
    return this._externalTrafficPolicy;
  }

  // host_endpoint_type - computed: false, optional: true, required: false
  private _hostEndpointType?: string; 
  public get hostEndpointType() {
    return this.getStringAttribute('host_endpoint_type');
  }
  public set hostEndpointType(value: string) {
    this._hostEndpointType = value;
  }
  public resetHostEndpointType() {
    this._hostEndpointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostEndpointTypeInput() {
    return this._hostEndpointType;
  }

  // ingress_host - computed: false, optional: true, required: false
  private _ingressHost?: string; 
  public get ingressHost() {
    return this.getStringAttribute('ingress_host');
  }
  public set ingressHost(value: string) {
    this._ingressHost = value;
  }
  public resetIngressHost() {
    this._ingressHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressHostInput() {
    return this._ingressHost;
  }

  // load_balancer_source_ranges - computed: false, optional: true, required: false
  private _loadBalancerSourceRanges?: string; 
  public get loadBalancerSourceRanges() {
    return this.getStringAttribute('load_balancer_source_ranges');
  }
  public set loadBalancerSourceRanges(value: string) {
    this._loadBalancerSourceRanges = value;
  }
  public resetLoadBalancerSourceRanges() {
    this._loadBalancerSourceRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerSourceRangesInput() {
    return this._loadBalancerSourceRanges;
  }
}

export class ClusterGkeHostConfigList extends cdktf.ComplexList {
  public internalValue? : ClusterGkeHostConfig[] | cdktf.IResolvable

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
  public get(index: number): ClusterGkeHostConfigOutputReference {
    return new ClusterGkeHostConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterGkeMachinePoolNode {
  /**
  * The action to perform on the node. Valid values are: `cordon`, `uncordon`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#action ClusterGke#action}
  */
  readonly action: string;
  /**
  * The node_id of the node, For example `i-07f899a33dee624f7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#node_id ClusterGke#node_id}
  */
  readonly nodeId: string;
}

export function clusterGkeMachinePoolNodeToTerraform(struct?: ClusterGkeMachinePoolNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    node_id: cdktf.stringToTerraform(struct!.nodeId),
  }
}


export function clusterGkeMachinePoolNodeToHclTerraform(struct?: ClusterGkeMachinePoolNode | cdktf.IResolvable): any {
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
    node_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterGkeMachinePoolNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterGkeMachinePoolNode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterGkeMachinePoolNode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._nodeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._nodeId = value.nodeId;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // node_id - computed: false, optional: false, required: true
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }
}

export class ClusterGkeMachinePoolNodeList extends cdktf.ComplexList {
  public internalValue? : ClusterGkeMachinePoolNode[] | cdktf.IResolvable

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
  public get(index: number): ClusterGkeMachinePoolNodeOutputReference {
    return new ClusterGkeMachinePoolNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterGkeMachinePoolTaints {
  /**
  * The effect of the taint. Allowed values are: `NoSchedule`, `PreferNoSchedule` or `NoExecute`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#effect ClusterGke#effect}
  */
  readonly effect: string;
  /**
  * The key of the taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#key ClusterGke#key}
  */
  readonly key: string;
  /**
  * The value of the taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#value ClusterGke#value}
  */
  readonly value: string;
}

export function clusterGkeMachinePoolTaintsToTerraform(struct?: ClusterGkeMachinePoolTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterGkeMachinePoolTaintsToHclTerraform(struct?: ClusterGkeMachinePoolTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class ClusterGkeMachinePoolTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterGkeMachinePoolTaints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterGkeMachinePoolTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterGkeMachinePoolTaintsList extends cdktf.ComplexList {
  public internalValue? : ClusterGkeMachinePoolTaints[] | cdktf.IResolvable

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
  public get(index: number): ClusterGkeMachinePoolTaintsOutputReference {
    return new ClusterGkeMachinePoolTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterGkeMachinePool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#additional_labels ClusterGke#additional_labels}
  */
  readonly additionalLabels?: { [key: string]: string };
  /**
  * Number of nodes in the machine pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#count ClusterGke#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#disk_size_gb ClusterGke#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#instance_type ClusterGke#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#name ClusterGke#name}
  */
  readonly name: string;
  /**
  * Update strategy for the machine pool. Valid values are `RollingUpdateScaleOut` and `RollingUpdateScaleIn`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#update_strategy ClusterGke#update_strategy}
  */
  readonly updateStrategy?: string;
  /**
  * node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#node ClusterGke#node}
  */
  readonly nodeAttribute?: ClusterGkeMachinePoolNode[] | cdktf.IResolvable;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#taints ClusterGke#taints}
  */
  readonly taints?: ClusterGkeMachinePoolTaints[] | cdktf.IResolvable;
}

export function clusterGkeMachinePoolToTerraform(struct?: ClusterGkeMachinePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalLabels),
    count: cdktf.numberToTerraform(struct!.count),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    name: cdktf.stringToTerraform(struct!.name),
    update_strategy: cdktf.stringToTerraform(struct!.updateStrategy),
    node: cdktf.listMapper(clusterGkeMachinePoolNodeToTerraform, true)(struct!.nodeAttribute),
    taints: cdktf.listMapper(clusterGkeMachinePoolTaintsToTerraform, true)(struct!.taints),
  }
}


export function clusterGkeMachinePoolToHclTerraform(struct?: ClusterGkeMachinePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_strategy: {
      value: cdktf.stringToHclTerraform(struct!.updateStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node: {
      value: cdktf.listMapperHcl(clusterGkeMachinePoolNodeToHclTerraform, true)(struct!.nodeAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterGkeMachinePoolNodeList",
    },
    taints: {
      value: cdktf.listMapperHcl(clusterGkeMachinePoolTaintsToHclTerraform, true)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterGkeMachinePoolTaintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterGkeMachinePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterGkeMachinePool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalLabels = this._additionalLabels;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._updateStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateStrategy = this._updateStrategy;
    }
    if (this._node?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node?.internalValue;
    }
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterGkeMachinePool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalLabels = undefined;
      this._count = undefined;
      this._diskSizeGb = undefined;
      this._instanceType = undefined;
      this._name = undefined;
      this._updateStrategy = undefined;
      this._node.internalValue = undefined;
      this._taints.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalLabels = value.additionalLabels;
      this._count = value.count;
      this._diskSizeGb = value.diskSizeGb;
      this._instanceType = value.instanceType;
      this._name = value.name;
      this._updateStrategy = value.updateStrategy;
      this._node.internalValue = value.nodeAttribute;
      this._taints.internalValue = value.taints;
    }
  }

  // additional_labels - computed: false, optional: true, required: false
  private _additionalLabels?: { [key: string]: string }; 
  public get additionalLabels() {
    return this.getStringMapAttribute('additional_labels');
  }
  public set additionalLabels(value: { [key: string]: string }) {
    this._additionalLabels = value;
  }
  public resetAdditionalLabels() {
    this._additionalLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalLabelsInput() {
    return this._additionalLabels;
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // disk_size_gb - computed: false, optional: true, required: false
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
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

  // update_strategy - computed: false, optional: true, required: false
  private _updateStrategy?: string; 
  public get updateStrategy() {
    return this.getStringAttribute('update_strategy');
  }
  public set updateStrategy(value: string) {
    this._updateStrategy = value;
  }
  public resetUpdateStrategy() {
    this._updateStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStrategyInput() {
    return this._updateStrategy;
  }

  // node - computed: false, optional: true, required: false
  private _node = new ClusterGkeMachinePoolNodeList(this, "node", false);
  public get nodeAttribute() {
    return this._node;
  }
  public putNodeAttribute(value: ClusterGkeMachinePoolNode[] | cdktf.IResolvable) {
    this._node.internalValue = value;
  }
  public resetNodeAttribute() {
    this._node.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new ClusterGkeMachinePoolTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: ClusterGkeMachinePoolTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }
}

export class ClusterGkeMachinePoolList extends cdktf.ComplexList {
  public internalValue? : ClusterGkeMachinePool[] | cdktf.IResolvable

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
  public get(index: number): ClusterGkeMachinePoolOutputReference {
    return new ClusterGkeMachinePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterGkeNamespaces {
  /**
  * Name of the namespace. This is the name of the Kubernetes namespace in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#name ClusterGke#name}
  */
  readonly name: string;
  /**
  * Resource allocation for the namespace. This is a map containing the resource type and the resource value. For example, `{cpu_cores: '2', memory_MiB: '2048', gpu_limit: '1', gpu_provider: 'nvidia'}`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#resource_allocation ClusterGke#resource_allocation}
  */
  readonly resourceAllocation: { [key: string]: string };
}

export function clusterGkeNamespacesToTerraform(struct?: ClusterGkeNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resource_allocation: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceAllocation),
  }
}


export function clusterGkeNamespacesToHclTerraform(struct?: ClusterGkeNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_allocation: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceAllocation),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterGkeNamespacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterGkeNamespaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resourceAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAllocation = this._resourceAllocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterGkeNamespaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._resourceAllocation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._resourceAllocation = value.resourceAllocation;
    }
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

  // resource_allocation - computed: false, optional: false, required: true
  private _resourceAllocation?: { [key: string]: string }; 
  public get resourceAllocation() {
    return this.getStringMapAttribute('resource_allocation');
  }
  public set resourceAllocation(value: { [key: string]: string }) {
    this._resourceAllocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAllocationInput() {
    return this._resourceAllocation;
  }
}

export class ClusterGkeNamespacesList extends cdktf.ComplexList {
  public internalValue? : ClusterGkeNamespaces[] | cdktf.IResolvable

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
  public get(index: number): ClusterGkeNamespacesOutputReference {
    return new ClusterGkeNamespacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterGkeScanPolicy {
  /**
  * The schedule for configuration scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#configuration_scan_schedule ClusterGke#configuration_scan_schedule}
  */
  readonly configurationScanSchedule: string;
  /**
  * The schedule for conformance scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#conformance_scan_schedule ClusterGke#conformance_scan_schedule}
  */
  readonly conformanceScanSchedule: string;
  /**
  * The schedule for penetration scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#penetration_scan_schedule ClusterGke#penetration_scan_schedule}
  */
  readonly penetrationScanSchedule: string;
}

export function clusterGkeScanPolicyToTerraform(struct?: ClusterGkeScanPolicyOutputReference | ClusterGkeScanPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration_scan_schedule: cdktf.stringToTerraform(struct!.configurationScanSchedule),
    conformance_scan_schedule: cdktf.stringToTerraform(struct!.conformanceScanSchedule),
    penetration_scan_schedule: cdktf.stringToTerraform(struct!.penetrationScanSchedule),
  }
}


export function clusterGkeScanPolicyToHclTerraform(struct?: ClusterGkeScanPolicyOutputReference | ClusterGkeScanPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration_scan_schedule: {
      value: cdktf.stringToHclTerraform(struct!.configurationScanSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conformance_scan_schedule: {
      value: cdktf.stringToHclTerraform(struct!.conformanceScanSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    penetration_scan_schedule: {
      value: cdktf.stringToHclTerraform(struct!.penetrationScanSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterGkeScanPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterGkeScanPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationScanSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationScanSchedule = this._configurationScanSchedule;
    }
    if (this._conformanceScanSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.conformanceScanSchedule = this._conformanceScanSchedule;
    }
    if (this._penetrationScanSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.penetrationScanSchedule = this._penetrationScanSchedule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterGkeScanPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configurationScanSchedule = undefined;
      this._conformanceScanSchedule = undefined;
      this._penetrationScanSchedule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configurationScanSchedule = value.configurationScanSchedule;
      this._conformanceScanSchedule = value.conformanceScanSchedule;
      this._penetrationScanSchedule = value.penetrationScanSchedule;
    }
  }

  // configuration_scan_schedule - computed: false, optional: false, required: true
  private _configurationScanSchedule?: string; 
  public get configurationScanSchedule() {
    return this.getStringAttribute('configuration_scan_schedule');
  }
  public set configurationScanSchedule(value: string) {
    this._configurationScanSchedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationScanScheduleInput() {
    return this._configurationScanSchedule;
  }

  // conformance_scan_schedule - computed: false, optional: false, required: true
  private _conformanceScanSchedule?: string; 
  public get conformanceScanSchedule() {
    return this.getStringAttribute('conformance_scan_schedule');
  }
  public set conformanceScanSchedule(value: string) {
    this._conformanceScanSchedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conformanceScanScheduleInput() {
    return this._conformanceScanSchedule;
  }

  // penetration_scan_schedule - computed: false, optional: false, required: true
  private _penetrationScanSchedule?: string; 
  public get penetrationScanSchedule() {
    return this.getStringAttribute('penetration_scan_schedule');
  }
  public set penetrationScanSchedule(value: string) {
    this._penetrationScanSchedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get penetrationScanScheduleInput() {
    return this._penetrationScanSchedule;
  }
}
export interface ClusterGkeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#create ClusterGke#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#delete ClusterGke#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#update ClusterGke#update}
  */
  readonly update?: string;
}

export function clusterGkeTimeoutsToTerraform(struct?: ClusterGkeTimeouts | cdktf.IResolvable): any {
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


export function clusterGkeTimeoutsToHclTerraform(struct?: ClusterGkeTimeouts | cdktf.IResolvable): any {
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

export class ClusterGkeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterGkeTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterGkeTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke spectrocloud_cluster_gke}
*/
export class ClusterGke extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spectrocloud_cluster_gke";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterGke resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterGke to import
  * @param importFromId The id of the existing ClusterGke that should be imported. Refer to the {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterGke to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spectrocloud_cluster_gke", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/cluster_gke spectrocloud_cluster_gke} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterGkeConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterGkeConfig) {
    super(scope, id, {
      terraformResourceType: 'spectrocloud_cluster_gke',
      terraformGeneratorMetadata: {
        providerName: 'spectrocloud',
        providerVersion: '0.26.1',
        providerVersionConstraint: '0.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applySetting = config.applySetting;
    this._cloudAccountId = config.cloudAccountId;
    this._clusterMetaAttribute = config.clusterMetaAttribute;
    this._context = config.context;
    this._description = config.description;
    this._forceDelete = config.forceDelete;
    this._forceDeleteDelay = config.forceDeleteDelay;
    this._id = config.id;
    this._name = config.name;
    this._osPatchAfter = config.osPatchAfter;
    this._osPatchOnBoot = config.osPatchOnBoot;
    this._osPatchSchedule = config.osPatchSchedule;
    this._pauseAgentUpgrades = config.pauseAgentUpgrades;
    this._reviewRepaveState = config.reviewRepaveState;
    this._skipCompletion = config.skipCompletion;
    this._tags = config.tags;
    this._updateWorkerPoolInParallel = config.updateWorkerPoolInParallel;
    this._backupPolicy.internalValue = config.backupPolicy;
    this._cloudConfig.internalValue = config.cloudConfig;
    this._clusterProfile.internalValue = config.clusterProfile;
    this._clusterRbacBinding.internalValue = config.clusterRbacBinding;
    this._clusterTemplate.internalValue = config.clusterTemplate;
    this._hostConfig.internalValue = config.hostConfig;
    this._machinePool.internalValue = config.machinePool;
    this._namespaces.internalValue = config.namespaces;
    this._scanPolicy.internalValue = config.scanPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_kube_config - computed: true, optional: false, required: false
  public get adminKubeConfig() {
    return this.getStringAttribute('admin_kube_config');
  }

  // apply_setting - computed: false, optional: true, required: false
  private _applySetting?: string; 
  public get applySetting() {
    return this.getStringAttribute('apply_setting');
  }
  public set applySetting(value: string) {
    this._applySetting = value;
  }
  public resetApplySetting() {
    this._applySetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applySettingInput() {
    return this._applySetting;
  }

  // cloud_account_id - computed: false, optional: false, required: true
  private _cloudAccountId?: string; 
  public get cloudAccountId() {
    return this.getStringAttribute('cloud_account_id');
  }
  public set cloudAccountId(value: string) {
    this._cloudAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccountIdInput() {
    return this._cloudAccountId;
  }

  // cloud_config_id - computed: true, optional: false, required: false
  public get cloudConfigId() {
    return this.getStringAttribute('cloud_config_id');
  }

  // cluster_meta_attribute - computed: false, optional: true, required: false
  private _clusterMetaAttribute?: string; 
  public get clusterMetaAttribute() {
    return this.getStringAttribute('cluster_meta_attribute');
  }
  public set clusterMetaAttribute(value: string) {
    this._clusterMetaAttribute = value;
  }
  public resetClusterMetaAttribute() {
    this._clusterMetaAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterMetaAttributeInput() {
    return this._clusterMetaAttribute;
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

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

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
  }

  // force_delete_delay - computed: false, optional: true, required: false
  private _forceDeleteDelay?: number; 
  public get forceDeleteDelay() {
    return this.getNumberAttribute('force_delete_delay');
  }
  public set forceDeleteDelay(value: number) {
    this._forceDeleteDelay = value;
  }
  public resetForceDeleteDelay() {
    this._forceDeleteDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteDelayInput() {
    return this._forceDeleteDelay;
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

  // kubeconfig - computed: true, optional: false, required: false
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }

  // location_config - computed: true, optional: false, required: false
  private _locationConfig = new ClusterGkeLocationConfigList(this, "location_config", false);
  public get locationConfig() {
    return this._locationConfig;
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

  // os_patch_after - computed: false, optional: true, required: false
  private _osPatchAfter?: string; 
  public get osPatchAfter() {
    return this.getStringAttribute('os_patch_after');
  }
  public set osPatchAfter(value: string) {
    this._osPatchAfter = value;
  }
  public resetOsPatchAfter() {
    this._osPatchAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osPatchAfterInput() {
    return this._osPatchAfter;
  }

  // os_patch_on_boot - computed: false, optional: true, required: false
  private _osPatchOnBoot?: boolean | cdktf.IResolvable; 
  public get osPatchOnBoot() {
    return this.getBooleanAttribute('os_patch_on_boot');
  }
  public set osPatchOnBoot(value: boolean | cdktf.IResolvable) {
    this._osPatchOnBoot = value;
  }
  public resetOsPatchOnBoot() {
    this._osPatchOnBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osPatchOnBootInput() {
    return this._osPatchOnBoot;
  }

  // os_patch_schedule - computed: false, optional: true, required: false
  private _osPatchSchedule?: string; 
  public get osPatchSchedule() {
    return this.getStringAttribute('os_patch_schedule');
  }
  public set osPatchSchedule(value: string) {
    this._osPatchSchedule = value;
  }
  public resetOsPatchSchedule() {
    this._osPatchSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osPatchScheduleInput() {
    return this._osPatchSchedule;
  }

  // pause_agent_upgrades - computed: false, optional: true, required: false
  private _pauseAgentUpgrades?: string; 
  public get pauseAgentUpgrades() {
    return this.getStringAttribute('pause_agent_upgrades');
  }
  public set pauseAgentUpgrades(value: string) {
    this._pauseAgentUpgrades = value;
  }
  public resetPauseAgentUpgrades() {
    this._pauseAgentUpgrades = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseAgentUpgradesInput() {
    return this._pauseAgentUpgrades;
  }

  // review_repave_state - computed: false, optional: true, required: false
  private _reviewRepaveState?: string; 
  public get reviewRepaveState() {
    return this.getStringAttribute('review_repave_state');
  }
  public set reviewRepaveState(value: string) {
    this._reviewRepaveState = value;
  }
  public resetReviewRepaveState() {
    this._reviewRepaveState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewRepaveStateInput() {
    return this._reviewRepaveState;
  }

  // skip_completion - computed: false, optional: true, required: false
  private _skipCompletion?: boolean | cdktf.IResolvable; 
  public get skipCompletion() {
    return this.getBooleanAttribute('skip_completion');
  }
  public set skipCompletion(value: boolean | cdktf.IResolvable) {
    this._skipCompletion = value;
  }
  public resetSkipCompletion() {
    this._skipCompletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCompletionInput() {
    return this._skipCompletion;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // update_worker_pool_in_parallel - computed: false, optional: true, required: false
  private _updateWorkerPoolInParallel?: boolean | cdktf.IResolvable; 
  public get updateWorkerPoolInParallel() {
    return this.getBooleanAttribute('update_worker_pool_in_parallel');
  }
  public set updateWorkerPoolInParallel(value: boolean | cdktf.IResolvable) {
    this._updateWorkerPoolInParallel = value;
  }
  public resetUpdateWorkerPoolInParallel() {
    this._updateWorkerPoolInParallel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateWorkerPoolInParallelInput() {
    return this._updateWorkerPoolInParallel;
  }

  // backup_policy - computed: false, optional: true, required: false
  private _backupPolicy = new ClusterGkeBackupPolicyOutputReference(this, "backup_policy");
  public get backupPolicy() {
    return this._backupPolicy;
  }
  public putBackupPolicy(value: ClusterGkeBackupPolicy) {
    this._backupPolicy.internalValue = value;
  }
  public resetBackupPolicy() {
    this._backupPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPolicyInput() {
    return this._backupPolicy.internalValue;
  }

  // cloud_config - computed: false, optional: false, required: true
  private _cloudConfig = new ClusterGkeCloudConfigOutputReference(this, "cloud_config");
  public get cloudConfig() {
    return this._cloudConfig;
  }
  public putCloudConfig(value: ClusterGkeCloudConfig) {
    this._cloudConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudConfigInput() {
    return this._cloudConfig.internalValue;
  }

  // cluster_profile - computed: false, optional: true, required: false
  private _clusterProfile = new ClusterGkeClusterProfileList(this, "cluster_profile", false);
  public get clusterProfile() {
    return this._clusterProfile;
  }
  public putClusterProfile(value: ClusterGkeClusterProfile[] | cdktf.IResolvable) {
    this._clusterProfile.internalValue = value;
  }
  public resetClusterProfile() {
    this._clusterProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterProfileInput() {
    return this._clusterProfile.internalValue;
  }

  // cluster_rbac_binding - computed: false, optional: true, required: false
  private _clusterRbacBinding = new ClusterGkeClusterRbacBindingList(this, "cluster_rbac_binding", false);
  public get clusterRbacBinding() {
    return this._clusterRbacBinding;
  }
  public putClusterRbacBinding(value: ClusterGkeClusterRbacBinding[] | cdktf.IResolvable) {
    this._clusterRbacBinding.internalValue = value;
  }
  public resetClusterRbacBinding() {
    this._clusterRbacBinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRbacBindingInput() {
    return this._clusterRbacBinding.internalValue;
  }

  // cluster_template - computed: false, optional: true, required: false
  private _clusterTemplate = new ClusterGkeClusterTemplateOutputReference(this, "cluster_template");
  public get clusterTemplate() {
    return this._clusterTemplate;
  }
  public putClusterTemplate(value: ClusterGkeClusterTemplate) {
    this._clusterTemplate.internalValue = value;
  }
  public resetClusterTemplate() {
    this._clusterTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTemplateInput() {
    return this._clusterTemplate.internalValue;
  }

  // host_config - computed: false, optional: true, required: false
  private _hostConfig = new ClusterGkeHostConfigList(this, "host_config", false);
  public get hostConfig() {
    return this._hostConfig;
  }
  public putHostConfig(value: ClusterGkeHostConfig[] | cdktf.IResolvable) {
    this._hostConfig.internalValue = value;
  }
  public resetHostConfig() {
    this._hostConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostConfigInput() {
    return this._hostConfig.internalValue;
  }

  // machine_pool - computed: false, optional: false, required: true
  private _machinePool = new ClusterGkeMachinePoolList(this, "machine_pool", false);
  public get machinePool() {
    return this._machinePool;
  }
  public putMachinePool(value: ClusterGkeMachinePool[] | cdktf.IResolvable) {
    this._machinePool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machinePoolInput() {
    return this._machinePool.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces = new ClusterGkeNamespacesList(this, "namespaces", false);
  public get namespaces() {
    return this._namespaces;
  }
  public putNamespaces(value: ClusterGkeNamespaces[] | cdktf.IResolvable) {
    this._namespaces.internalValue = value;
  }
  public resetNamespaces() {
    this._namespaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces.internalValue;
  }

  // scan_policy - computed: false, optional: true, required: false
  private _scanPolicy = new ClusterGkeScanPolicyOutputReference(this, "scan_policy");
  public get scanPolicy() {
    return this._scanPolicy;
  }
  public putScanPolicy(value: ClusterGkeScanPolicy) {
    this._scanPolicy.internalValue = value;
  }
  public resetScanPolicy() {
    this._scanPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanPolicyInput() {
    return this._scanPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClusterGkeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClusterGkeTimeouts) {
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
      apply_setting: cdktf.stringToTerraform(this._applySetting),
      cloud_account_id: cdktf.stringToTerraform(this._cloudAccountId),
      cluster_meta_attribute: cdktf.stringToTerraform(this._clusterMetaAttribute),
      context: cdktf.stringToTerraform(this._context),
      description: cdktf.stringToTerraform(this._description),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      force_delete_delay: cdktf.numberToTerraform(this._forceDeleteDelay),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      os_patch_after: cdktf.stringToTerraform(this._osPatchAfter),
      os_patch_on_boot: cdktf.booleanToTerraform(this._osPatchOnBoot),
      os_patch_schedule: cdktf.stringToTerraform(this._osPatchSchedule),
      pause_agent_upgrades: cdktf.stringToTerraform(this._pauseAgentUpgrades),
      review_repave_state: cdktf.stringToTerraform(this._reviewRepaveState),
      skip_completion: cdktf.booleanToTerraform(this._skipCompletion),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      update_worker_pool_in_parallel: cdktf.booleanToTerraform(this._updateWorkerPoolInParallel),
      backup_policy: clusterGkeBackupPolicyToTerraform(this._backupPolicy.internalValue),
      cloud_config: clusterGkeCloudConfigToTerraform(this._cloudConfig.internalValue),
      cluster_profile: cdktf.listMapper(clusterGkeClusterProfileToTerraform, true)(this._clusterProfile.internalValue),
      cluster_rbac_binding: cdktf.listMapper(clusterGkeClusterRbacBindingToTerraform, true)(this._clusterRbacBinding.internalValue),
      cluster_template: clusterGkeClusterTemplateToTerraform(this._clusterTemplate.internalValue),
      host_config: cdktf.listMapper(clusterGkeHostConfigToTerraform, true)(this._hostConfig.internalValue),
      machine_pool: cdktf.listMapper(clusterGkeMachinePoolToTerraform, true)(this._machinePool.internalValue),
      namespaces: cdktf.listMapper(clusterGkeNamespacesToTerraform, true)(this._namespaces.internalValue),
      scan_policy: clusterGkeScanPolicyToTerraform(this._scanPolicy.internalValue),
      timeouts: clusterGkeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply_setting: {
        value: cdktf.stringToHclTerraform(this._applySetting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_account_id: {
        value: cdktf.stringToHclTerraform(this._cloudAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_meta_attribute: {
        value: cdktf.stringToHclTerraform(this._clusterMetaAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context: {
        value: cdktf.stringToHclTerraform(this._context),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_delete_delay: {
        value: cdktf.numberToHclTerraform(this._forceDeleteDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      os_patch_after: {
        value: cdktf.stringToHclTerraform(this._osPatchAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_patch_on_boot: {
        value: cdktf.booleanToHclTerraform(this._osPatchOnBoot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      os_patch_schedule: {
        value: cdktf.stringToHclTerraform(this._osPatchSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pause_agent_upgrades: {
        value: cdktf.stringToHclTerraform(this._pauseAgentUpgrades),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      review_repave_state: {
        value: cdktf.stringToHclTerraform(this._reviewRepaveState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_completion: {
        value: cdktf.booleanToHclTerraform(this._skipCompletion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      update_worker_pool_in_parallel: {
        value: cdktf.booleanToHclTerraform(this._updateWorkerPoolInParallel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backup_policy: {
        value: clusterGkeBackupPolicyToHclTerraform(this._backupPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterGkeBackupPolicyList",
      },
      cloud_config: {
        value: clusterGkeCloudConfigToHclTerraform(this._cloudConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterGkeCloudConfigList",
      },
      cluster_profile: {
        value: cdktf.listMapperHcl(clusterGkeClusterProfileToHclTerraform, true)(this._clusterProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterGkeClusterProfileList",
      },
      cluster_rbac_binding: {
        value: cdktf.listMapperHcl(clusterGkeClusterRbacBindingToHclTerraform, true)(this._clusterRbacBinding.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterGkeClusterRbacBindingList",
      },
      cluster_template: {
        value: clusterGkeClusterTemplateToHclTerraform(this._clusterTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterGkeClusterTemplateList",
      },
      host_config: {
        value: cdktf.listMapperHcl(clusterGkeHostConfigToHclTerraform, true)(this._hostConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterGkeHostConfigList",
      },
      machine_pool: {
        value: cdktf.listMapperHcl(clusterGkeMachinePoolToHclTerraform, true)(this._machinePool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterGkeMachinePoolList",
      },
      namespaces: {
        value: cdktf.listMapperHcl(clusterGkeNamespacesToHclTerraform, true)(this._namespaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterGkeNamespacesList",
      },
      scan_policy: {
        value: clusterGkeScanPolicyToHclTerraform(this._scanPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterGkeScanPolicyList",
      },
      timeouts: {
        value: clusterGkeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterGkeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
