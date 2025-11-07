// https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The setting to apply the cluster profile. `DownloadAndInstall` will download and install packs in one action. `DownloadAndInstallLater` will only download artifact and postpone install for later. Default value is `DownloadAndInstall`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#apply_setting VirtualCluster#apply_setting}
  */
  readonly applySetting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#cluster_group_uid VirtualCluster#cluster_group_uid}
  */
  readonly clusterGroupUid?: string;
  /**
  * The context of the virtual cluster. Allowed values are `project` or `tenant`. Default is `project`. If  the `project` context is specified, the project name will sourced from the provider configuration parameter [`project_name`](https://registry.terraform.io/providers/spectrocloud/spectrocloud/latest/docs#schema).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#context VirtualCluster#context}
  */
  readonly context?: string;
  /**
  * The description of the cluster. Default value is empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#description VirtualCluster#description}
  */
  readonly description?: string;
  /**
  * If set to `true`, the cluster will be force deleted and user has to manually clean up the provisioned cloud resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#force_delete VirtualCluster#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Delay duration in minutes to before invoking cluster force delete. Default and minimum is 20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#force_delete_delay VirtualCluster#force_delete_delay}
  */
  readonly forceDeleteDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#host_cluster_uid VirtualCluster#host_cluster_uid}
  */
  readonly hostClusterUid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#id VirtualCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#name VirtualCluster#name}
  */
  readonly name: string;
  /**
  * The date and time after which to patch the cluster. Prefix the time value with the respective RFC. Ex: `RFC3339: 2006-01-02T15:04:05Z07:00`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#os_patch_after VirtualCluster#os_patch_after}
  */
  readonly osPatchAfter?: string;
  /**
  * Whether to apply OS patch on boot. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#os_patch_on_boot VirtualCluster#os_patch_on_boot}
  */
  readonly osPatchOnBoot?: boolean | cdktf.IResolvable;
  /**
  * Cron schedule for OS patching. This must be in the form of `0 0 * * *`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#os_patch_schedule VirtualCluster#os_patch_schedule}
  */
  readonly osPatchSchedule?: string;
  /**
  * To pause and resume cluster state. Set to true to pause running cluster & false to resume it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#pause_cluster VirtualCluster#pause_cluster}
  */
  readonly pauseCluster?: boolean | cdktf.IResolvable;
  /**
  * If `true`, the cluster will be created asynchronously. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#skip_completion VirtualCluster#skip_completion}
  */
  readonly skipCompletion?: boolean | cdktf.IResolvable;
  /**
  * A list of tags to be applied to the cluster. Tags must be in the form of `key:value`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#tags VirtualCluster#tags}
  */
  readonly tags?: string[];
  /**
  * backup_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#backup_policy VirtualCluster#backup_policy}
  */
  readonly backupPolicy?: VirtualClusterBackupPolicy;
  /**
  * cloud_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#cloud_config VirtualCluster#cloud_config}
  */
  readonly cloudConfig?: VirtualClusterCloudConfig;
  /**
  * cluster_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#cluster_profile VirtualCluster#cluster_profile}
  */
  readonly clusterProfile?: VirtualClusterClusterProfile[] | cdktf.IResolvable;
  /**
  * cluster_rbac_binding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#cluster_rbac_binding VirtualCluster#cluster_rbac_binding}
  */
  readonly clusterRbacBinding?: VirtualClusterClusterRbacBinding[] | cdktf.IResolvable;
  /**
  * namespaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#namespaces VirtualCluster#namespaces}
  */
  readonly namespaces?: VirtualClusterNamespaces[] | cdktf.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#resources VirtualCluster#resources}
  */
  readonly resources?: VirtualClusterResources[] | cdktf.IResolvable;
  /**
  * scan_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#scan_policy VirtualCluster#scan_policy}
  */
  readonly scanPolicy?: VirtualClusterScanPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#timeouts VirtualCluster#timeouts}
  */
  readonly timeouts?: VirtualClusterTimeouts;
}
export interface VirtualClusterLocationConfig {
}

export function virtualClusterLocationConfigToTerraform(struct?: VirtualClusterLocationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualClusterLocationConfigToHclTerraform(struct?: VirtualClusterLocationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualClusterLocationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualClusterLocationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualClusterLocationConfig | undefined) {
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

export class VirtualClusterLocationConfigList extends cdktf.ComplexList {

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
  public get(index: number): VirtualClusterLocationConfigOutputReference {
    return new VirtualClusterLocationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualClusterBackupPolicy {
  /**
  * The ID of the backup location to use for the backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#backup_location_id VirtualCluster#backup_location_id}
  */
  readonly backupLocationId: string;
  /**
  * The list of cluster UIDs to include in the backup. If `include_all_clusters` is set to `true`, then all clusters will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#cluster_uids VirtualCluster#cluster_uids}
  */
  readonly clusterUids?: string[];
  /**
  * The number of hours after which the backup will be deleted. For example, if the expiry is set to 24, the backup will be deleted after 24 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#expiry_in_hour VirtualCluster#expiry_in_hour}
  */
  readonly expiryInHour: number;
  /**
  * Whether to include all clusters in the backup. If set to false, only the clusters specified in `cluster_uids` will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#include_all_clusters VirtualCluster#include_all_clusters}
  */
  readonly includeAllClusters?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to include cluster resources in the backup. If set to false, only the cluster configuration and disks will be backed up. (Note: Starting with Palette version 4.6, the include_cluster_resources attribute will be deprecated, and a new attribute, include_cluster_resources_mode, will be introduced.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#include_cluster_resources VirtualCluster#include_cluster_resources}
  */
  readonly includeClusterResources?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to include the cluster resources in the backup. Supported values are `always`, `never`, and `auto`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#include_cluster_resources_mode VirtualCluster#include_cluster_resources_mode}
  */
  readonly includeClusterResourcesMode?: string;
  /**
  * Whether to include the disks in the backup. If set to false, only the cluster configuration will be backed up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#include_disks VirtualCluster#include_disks}
  */
  readonly includeDisks?: boolean | cdktf.IResolvable;
  /**
  * The list of Kubernetes namespaces to include in the backup. If not specified, all namespaces will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#namespaces VirtualCluster#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Prefix for the backup name. The backup name will be of the format <prefix>-<cluster-name>-<timestamp>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#prefix VirtualCluster#prefix}
  */
  readonly prefix: string;
  /**
  * The schedule for the backup. The schedule is specified in cron format. For example, to run the backup every day at 1:00 AM, the schedule should be set to `0 1 * * *`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#schedule VirtualCluster#schedule}
  */
  readonly schedule: string;
}

export function virtualClusterBackupPolicyToTerraform(struct?: VirtualClusterBackupPolicyOutputReference | VirtualClusterBackupPolicy): any {
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


export function virtualClusterBackupPolicyToHclTerraform(struct?: VirtualClusterBackupPolicyOutputReference | VirtualClusterBackupPolicy): any {
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

export class VirtualClusterBackupPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualClusterBackupPolicy | undefined {
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

  public set internalValue(value: VirtualClusterBackupPolicy | undefined) {
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
export interface VirtualClusterCloudConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#chart_name VirtualCluster#chart_name}
  */
  readonly chartName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#chart_repo VirtualCluster#chart_repo}
  */
  readonly chartRepo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#chart_values VirtualCluster#chart_values}
  */
  readonly chartValues?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#chart_version VirtualCluster#chart_version}
  */
  readonly chartVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#k8s_version VirtualCluster#k8s_version}
  */
  readonly k8SVersion?: string;
}

export function virtualClusterCloudConfigToTerraform(struct?: VirtualClusterCloudConfigOutputReference | VirtualClusterCloudConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart_name: cdktf.stringToTerraform(struct!.chartName),
    chart_repo: cdktf.stringToTerraform(struct!.chartRepo),
    chart_values: cdktf.stringToTerraform(struct!.chartValues),
    chart_version: cdktf.stringToTerraform(struct!.chartVersion),
    k8s_version: cdktf.stringToTerraform(struct!.k8SVersion),
  }
}


export function virtualClusterCloudConfigToHclTerraform(struct?: VirtualClusterCloudConfigOutputReference | VirtualClusterCloudConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart_name: {
      value: cdktf.stringToHclTerraform(struct!.chartName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chart_repo: {
      value: cdktf.stringToHclTerraform(struct!.chartRepo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chart_values: {
      value: cdktf.stringToHclTerraform(struct!.chartValues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chart_version: {
      value: cdktf.stringToHclTerraform(struct!.chartVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    k8s_version: {
      value: cdktf.stringToHclTerraform(struct!.k8SVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualClusterCloudConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualClusterCloudConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chartName !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartName = this._chartName;
    }
    if (this._chartRepo !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartRepo = this._chartRepo;
    }
    if (this._chartValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartValues = this._chartValues;
    }
    if (this._chartVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartVersion = this._chartVersion;
    }
    if (this._k8SVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SVersion = this._k8SVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualClusterCloudConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._chartName = undefined;
      this._chartRepo = undefined;
      this._chartValues = undefined;
      this._chartVersion = undefined;
      this._k8SVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._chartName = value.chartName;
      this._chartRepo = value.chartRepo;
      this._chartValues = value.chartValues;
      this._chartVersion = value.chartVersion;
      this._k8SVersion = value.k8SVersion;
    }
  }

  // chart_name - computed: false, optional: true, required: false
  private _chartName?: string; 
  public get chartName() {
    return this.getStringAttribute('chart_name');
  }
  public set chartName(value: string) {
    this._chartName = value;
  }
  public resetChartName() {
    this._chartName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartNameInput() {
    return this._chartName;
  }

  // chart_repo - computed: false, optional: true, required: false
  private _chartRepo?: string; 
  public get chartRepo() {
    return this.getStringAttribute('chart_repo');
  }
  public set chartRepo(value: string) {
    this._chartRepo = value;
  }
  public resetChartRepo() {
    this._chartRepo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartRepoInput() {
    return this._chartRepo;
  }

  // chart_values - computed: false, optional: true, required: false
  private _chartValues?: string; 
  public get chartValues() {
    return this.getStringAttribute('chart_values');
  }
  public set chartValues(value: string) {
    this._chartValues = value;
  }
  public resetChartValues() {
    this._chartValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartValuesInput() {
    return this._chartValues;
  }

  // chart_version - computed: false, optional: true, required: false
  private _chartVersion?: string; 
  public get chartVersion() {
    return this.getStringAttribute('chart_version');
  }
  public set chartVersion(value: string) {
    this._chartVersion = value;
  }
  public resetChartVersion() {
    this._chartVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartVersionInput() {
    return this._chartVersion;
  }

  // k8s_version - computed: false, optional: true, required: false
  private _k8SVersion?: string; 
  public get k8SVersion() {
    return this.getStringAttribute('k8s_version');
  }
  public set k8SVersion(value: string) {
    this._k8SVersion = value;
  }
  public resetK8SVersion() {
    this._k8SVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SVersionInput() {
    return this._k8SVersion;
  }
}
export interface VirtualClusterClusterProfilePackManifest {
  /**
  * The content of the manifest. The content is the YAML content of the manifest. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#content VirtualCluster#content}
  */
  readonly content: string;
  /**
  * The name of the manifest. The name must be unique within the pack. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#name VirtualCluster#name}
  */
  readonly name: string;
}

export function virtualClusterClusterProfilePackManifestToTerraform(struct?: VirtualClusterClusterProfilePackManifest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function virtualClusterClusterProfilePackManifestToHclTerraform(struct?: VirtualClusterClusterProfilePackManifest | cdktf.IResolvable): any {
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

export class VirtualClusterClusterProfilePackManifestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualClusterClusterProfilePackManifest | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualClusterClusterProfilePackManifest | cdktf.IResolvable | undefined) {
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

export class VirtualClusterClusterProfilePackManifestList extends cdktf.ComplexList {
  public internalValue? : VirtualClusterClusterProfilePackManifest[] | cdktf.IResolvable

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
  public get(index: number): VirtualClusterClusterProfilePackManifestOutputReference {
    return new VirtualClusterClusterProfilePackManifestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualClusterClusterProfilePack {
  /**
  * The name of the pack. The name must be unique within the cluster profile. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#name VirtualCluster#name}
  */
  readonly name: string;
  /**
  * The registry name of the pack. The registry name is the human-readable name of the registry. This attribute can be used instead of `registry_uid` for better readability. If `uid` is not provided, this field can be used along with `name` and `tag` to resolve the pack UID internally. Either `registry_uid` or `registry_name` can be specified, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#registry_name VirtualCluster#registry_name}
  */
  readonly registryName?: string;
  /**
  * The registry UID of the pack. The registry UID is the unique identifier of the registry. This attribute is required if there is more than one registry that contains a pack with the same name. If `uid` is not provided, this field is required along with `name` and `tag` to resolve the pack UID internally. Either `registry_uid` or `registry_name` can be specified, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#registry_uid VirtualCluster#registry_uid}
  */
  readonly registryUid?: string;
  /**
  * The tag of the pack. The tag is the version of the pack. This attribute is required if the pack type is `spectro` or `helm`. If `uid` is not provided, this field is required along with `name` and `registry_uid` (or `registry_name`) to resolve the pack UID internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#tag VirtualCluster#tag}
  */
  readonly tag?: string;
  /**
  * The type of the pack. Allowed values are `spectro`, `manifest`, `helm`, or `oci`. The default value is spectro. If using an OCI registry for pack, set the type to `oci`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#type VirtualCluster#type}
  */
  readonly type?: string;
  /**
  * The unique identifier of the pack. The value can be looked up using the [`spectrocloud_pack`](https://registry.terraform.io/providers/spectrocloud/spectrocloud/latest/docs/data-sources/pack) data source. This value is required if the pack type is `spectro` and for `helm` if the chart is from a public helm registry. If not provided, all of `name`, `tag`, and `registry_uid` must be specified to resolve the pack UID internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#uid VirtualCluster#uid}
  */
  readonly uid?: string;
  /**
  * The values of the pack. The values are the configuration values of the pack. The values are specified in YAML format. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#values VirtualCluster#values}
  */
  readonly values?: string;
  /**
  * manifest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#manifest VirtualCluster#manifest}
  */
  readonly manifest?: VirtualClusterClusterProfilePackManifest[] | cdktf.IResolvable;
}

export function virtualClusterClusterProfilePackToTerraform(struct?: VirtualClusterClusterProfilePack | cdktf.IResolvable): any {
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
    manifest: cdktf.listMapper(virtualClusterClusterProfilePackManifestToTerraform, true)(struct!.manifest),
  }
}


export function virtualClusterClusterProfilePackToHclTerraform(struct?: VirtualClusterClusterProfilePack | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(virtualClusterClusterProfilePackManifestToHclTerraform, true)(struct!.manifest),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualClusterClusterProfilePackManifestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualClusterClusterProfilePackOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualClusterClusterProfilePack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualClusterClusterProfilePack | cdktf.IResolvable | undefined) {
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
  private _manifest = new VirtualClusterClusterProfilePackManifestList(this, "manifest", false);
  public get manifest() {
    return this._manifest;
  }
  public putManifest(value: VirtualClusterClusterProfilePackManifest[] | cdktf.IResolvable) {
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

export class VirtualClusterClusterProfilePackList extends cdktf.ComplexList {
  public internalValue? : VirtualClusterClusterProfilePack[] | cdktf.IResolvable

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
  public get(index: number): VirtualClusterClusterProfilePackOutputReference {
    return new VirtualClusterClusterProfilePackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualClusterClusterProfile {
  /**
  * The ID of the cluster profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#id VirtualCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A map of cluster profile variables, specified as key-value pairs. For example: `priority = "5"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#variables VirtualCluster#variables}
  */
  readonly variables?: { [key: string]: string };
  /**
  * pack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#pack VirtualCluster#pack}
  */
  readonly pack?: VirtualClusterClusterProfilePack[] | cdktf.IResolvable;
}

export function virtualClusterClusterProfileToTerraform(struct?: VirtualClusterClusterProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.variables),
    pack: cdktf.listMapper(virtualClusterClusterProfilePackToTerraform, true)(struct!.pack),
  }
}


export function virtualClusterClusterProfileToHclTerraform(struct?: VirtualClusterClusterProfile | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(virtualClusterClusterProfilePackToHclTerraform, true)(struct!.pack),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualClusterClusterProfilePackList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualClusterClusterProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualClusterClusterProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualClusterClusterProfile | cdktf.IResolvable | undefined) {
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
  private _pack = new VirtualClusterClusterProfilePackList(this, "pack", false);
  public get pack() {
    return this._pack;
  }
  public putPack(value: VirtualClusterClusterProfilePack[] | cdktf.IResolvable) {
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

export class VirtualClusterClusterProfileList extends cdktf.ComplexList {
  public internalValue? : VirtualClusterClusterProfile[] | cdktf.IResolvable

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
  public get(index: number): VirtualClusterClusterProfileOutputReference {
    return new VirtualClusterClusterProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualClusterClusterRbacBindingSubjects {
  /**
  * The name of the subject. Required if 'type' is set to 'User' or 'Group'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#name VirtualCluster#name}
  */
  readonly name: string;
  /**
  * The Kubernetes namespace of the subject. Required if 'type' is set to 'ServiceAccount'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#namespace VirtualCluster#namespace}
  */
  readonly namespace?: string;
  /**
  * The type of the subject. Can be one of the following values: `User`, `Group`, or `ServiceAccount`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#type VirtualCluster#type}
  */
  readonly type: string;
}

export function virtualClusterClusterRbacBindingSubjectsToTerraform(struct?: VirtualClusterClusterRbacBindingSubjects | cdktf.IResolvable): any {
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


export function virtualClusterClusterRbacBindingSubjectsToHclTerraform(struct?: VirtualClusterClusterRbacBindingSubjects | cdktf.IResolvable): any {
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

export class VirtualClusterClusterRbacBindingSubjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualClusterClusterRbacBindingSubjects | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualClusterClusterRbacBindingSubjects | cdktf.IResolvable | undefined) {
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

export class VirtualClusterClusterRbacBindingSubjectsList extends cdktf.ComplexList {
  public internalValue? : VirtualClusterClusterRbacBindingSubjects[] | cdktf.IResolvable

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
  public get(index: number): VirtualClusterClusterRbacBindingSubjectsOutputReference {
    return new VirtualClusterClusterRbacBindingSubjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualClusterClusterRbacBinding {
  /**
  * The Kubernetes namespace of the RBAC binding. Required if 'type' is set to 'RoleBinding'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#namespace VirtualCluster#namespace}
  */
  readonly namespace?: string;
  /**
  * The role of the RBAC binding. Required if 'type' is set to 'RoleBinding'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#role VirtualCluster#role}
  */
  readonly role?: { [key: string]: string };
  /**
  * The type of the RBAC binding. Can be one of the following values: `RoleBinding`, or `ClusterRoleBinding`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#type VirtualCluster#type}
  */
  readonly type: string;
  /**
  * subjects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#subjects VirtualCluster#subjects}
  */
  readonly subjects?: VirtualClusterClusterRbacBindingSubjects[] | cdktf.IResolvable;
}

export function virtualClusterClusterRbacBindingToTerraform(struct?: VirtualClusterClusterRbacBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    role: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    subjects: cdktf.listMapper(virtualClusterClusterRbacBindingSubjectsToTerraform, true)(struct!.subjects),
  }
}


export function virtualClusterClusterRbacBindingToHclTerraform(struct?: VirtualClusterClusterRbacBinding | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(virtualClusterClusterRbacBindingSubjectsToHclTerraform, true)(struct!.subjects),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualClusterClusterRbacBindingSubjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualClusterClusterRbacBindingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualClusterClusterRbacBinding | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualClusterClusterRbacBinding | cdktf.IResolvable | undefined) {
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
  private _subjects = new VirtualClusterClusterRbacBindingSubjectsList(this, "subjects", false);
  public get subjects() {
    return this._subjects;
  }
  public putSubjects(value: VirtualClusterClusterRbacBindingSubjects[] | cdktf.IResolvable) {
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

export class VirtualClusterClusterRbacBindingList extends cdktf.ComplexList {
  public internalValue? : VirtualClusterClusterRbacBinding[] | cdktf.IResolvable

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
  public get(index: number): VirtualClusterClusterRbacBindingOutputReference {
    return new VirtualClusterClusterRbacBindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualClusterNamespaces {
  /**
  * Name of the namespace. This is the name of the Kubernetes namespace in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#name VirtualCluster#name}
  */
  readonly name: string;
  /**
  * Resource allocation for the namespace. This is a map containing the resource type and the resource value. For example, `{cpu_cores: '2', memory_MiB: '2048', gpu_limit: '1', gpu_provider: 'nvidia'}`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#resource_allocation VirtualCluster#resource_allocation}
  */
  readonly resourceAllocation: { [key: string]: string };
}

export function virtualClusterNamespacesToTerraform(struct?: VirtualClusterNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resource_allocation: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceAllocation),
  }
}


export function virtualClusterNamespacesToHclTerraform(struct?: VirtualClusterNamespaces | cdktf.IResolvable): any {
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

export class VirtualClusterNamespacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualClusterNamespaces | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualClusterNamespaces | cdktf.IResolvable | undefined) {
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

export class VirtualClusterNamespacesList extends cdktf.ComplexList {
  public internalValue? : VirtualClusterNamespaces[] | cdktf.IResolvable

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
  public get(index: number): VirtualClusterNamespacesOutputReference {
    return new VirtualClusterNamespacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualClusterResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#max_cpu VirtualCluster#max_cpu}
  */
  readonly maxCpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#max_mem_in_mb VirtualCluster#max_mem_in_mb}
  */
  readonly maxMemInMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#max_storage_in_gb VirtualCluster#max_storage_in_gb}
  */
  readonly maxStorageInGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#min_cpu VirtualCluster#min_cpu}
  */
  readonly minCpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#min_mem_in_mb VirtualCluster#min_mem_in_mb}
  */
  readonly minMemInMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#min_storage_in_gb VirtualCluster#min_storage_in_gb}
  */
  readonly minStorageInGb?: number;
}

export function virtualClusterResourcesToTerraform(struct?: VirtualClusterResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_cpu: cdktf.numberToTerraform(struct!.maxCpu),
    max_mem_in_mb: cdktf.numberToTerraform(struct!.maxMemInMb),
    max_storage_in_gb: cdktf.numberToTerraform(struct!.maxStorageInGb),
    min_cpu: cdktf.numberToTerraform(struct!.minCpu),
    min_mem_in_mb: cdktf.numberToTerraform(struct!.minMemInMb),
    min_storage_in_gb: cdktf.numberToTerraform(struct!.minStorageInGb),
  }
}


export function virtualClusterResourcesToHclTerraform(struct?: VirtualClusterResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_cpu: {
      value: cdktf.numberToHclTerraform(struct!.maxCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_mem_in_mb: {
      value: cdktf.numberToHclTerraform(struct!.maxMemInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_storage_in_gb: {
      value: cdktf.numberToHclTerraform(struct!.maxStorageInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_cpu: {
      value: cdktf.numberToHclTerraform(struct!.minCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_mem_in_mb: {
      value: cdktf.numberToHclTerraform(struct!.minMemInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_storage_in_gb: {
      value: cdktf.numberToHclTerraform(struct!.minStorageInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualClusterResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualClusterResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCpu = this._maxCpu;
    }
    if (this._maxMemInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemInMb = this._maxMemInMb;
    }
    if (this._maxStorageInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStorageInGb = this._maxStorageInGb;
    }
    if (this._minCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpu = this._minCpu;
    }
    if (this._minMemInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemInMb = this._minMemInMb;
    }
    if (this._minStorageInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.minStorageInGb = this._minStorageInGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualClusterResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxCpu = undefined;
      this._maxMemInMb = undefined;
      this._maxStorageInGb = undefined;
      this._minCpu = undefined;
      this._minMemInMb = undefined;
      this._minStorageInGb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxCpu = value.maxCpu;
      this._maxMemInMb = value.maxMemInMb;
      this._maxStorageInGb = value.maxStorageInGb;
      this._minCpu = value.minCpu;
      this._minMemInMb = value.minMemInMb;
      this._minStorageInGb = value.minStorageInGb;
    }
  }

  // max_cpu - computed: false, optional: true, required: false
  private _maxCpu?: number; 
  public get maxCpu() {
    return this.getNumberAttribute('max_cpu');
  }
  public set maxCpu(value: number) {
    this._maxCpu = value;
  }
  public resetMaxCpu() {
    this._maxCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCpuInput() {
    return this._maxCpu;
  }

  // max_mem_in_mb - computed: false, optional: true, required: false
  private _maxMemInMb?: number; 
  public get maxMemInMb() {
    return this.getNumberAttribute('max_mem_in_mb');
  }
  public set maxMemInMb(value: number) {
    this._maxMemInMb = value;
  }
  public resetMaxMemInMb() {
    this._maxMemInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemInMbInput() {
    return this._maxMemInMb;
  }

  // max_storage_in_gb - computed: false, optional: true, required: false
  private _maxStorageInGb?: number; 
  public get maxStorageInGb() {
    return this.getNumberAttribute('max_storage_in_gb');
  }
  public set maxStorageInGb(value: number) {
    this._maxStorageInGb = value;
  }
  public resetMaxStorageInGb() {
    this._maxStorageInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStorageInGbInput() {
    return this._maxStorageInGb;
  }

  // min_cpu - computed: false, optional: true, required: false
  private _minCpu?: number; 
  public get minCpu() {
    return this.getNumberAttribute('min_cpu');
  }
  public set minCpu(value: number) {
    this._minCpu = value;
  }
  public resetMinCpu() {
    this._minCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuInput() {
    return this._minCpu;
  }

  // min_mem_in_mb - computed: false, optional: true, required: false
  private _minMemInMb?: number; 
  public get minMemInMb() {
    return this.getNumberAttribute('min_mem_in_mb');
  }
  public set minMemInMb(value: number) {
    this._minMemInMb = value;
  }
  public resetMinMemInMb() {
    this._minMemInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemInMbInput() {
    return this._minMemInMb;
  }

  // min_storage_in_gb - computed: false, optional: true, required: false
  private _minStorageInGb?: number; 
  public get minStorageInGb() {
    return this.getNumberAttribute('min_storage_in_gb');
  }
  public set minStorageInGb(value: number) {
    this._minStorageInGb = value;
  }
  public resetMinStorageInGb() {
    this._minStorageInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minStorageInGbInput() {
    return this._minStorageInGb;
  }
}

export class VirtualClusterResourcesList extends cdktf.ComplexList {
  public internalValue? : VirtualClusterResources[] | cdktf.IResolvable

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
  public get(index: number): VirtualClusterResourcesOutputReference {
    return new VirtualClusterResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualClusterScanPolicy {
  /**
  * The schedule for configuration scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#configuration_scan_schedule VirtualCluster#configuration_scan_schedule}
  */
  readonly configurationScanSchedule: string;
  /**
  * The schedule for conformance scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#conformance_scan_schedule VirtualCluster#conformance_scan_schedule}
  */
  readonly conformanceScanSchedule: string;
  /**
  * The schedule for penetration scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#penetration_scan_schedule VirtualCluster#penetration_scan_schedule}
  */
  readonly penetrationScanSchedule: string;
}

export function virtualClusterScanPolicyToTerraform(struct?: VirtualClusterScanPolicyOutputReference | VirtualClusterScanPolicy): any {
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


export function virtualClusterScanPolicyToHclTerraform(struct?: VirtualClusterScanPolicyOutputReference | VirtualClusterScanPolicy): any {
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

export class VirtualClusterScanPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualClusterScanPolicy | undefined {
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

  public set internalValue(value: VirtualClusterScanPolicy | undefined) {
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
export interface VirtualClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#create VirtualCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#delete VirtualCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#update VirtualCluster#update}
  */
  readonly update?: string;
}

export function virtualClusterTimeoutsToTerraform(struct?: VirtualClusterTimeouts | cdktf.IResolvable): any {
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


export function virtualClusterTimeoutsToHclTerraform(struct?: VirtualClusterTimeouts | cdktf.IResolvable): any {
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

export class VirtualClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster spectrocloud_virtual_cluster}
*/
export class VirtualCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spectrocloud_virtual_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualCluster to import
  * @param importFromId The id of the existing VirtualCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spectrocloud_virtual_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/virtual_cluster spectrocloud_virtual_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualClusterConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'spectrocloud_virtual_cluster',
      terraformGeneratorMetadata: {
        providerName: 'spectrocloud',
        providerVersion: '0.25.2'
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
    this._clusterGroupUid = config.clusterGroupUid;
    this._context = config.context;
    this._description = config.description;
    this._forceDelete = config.forceDelete;
    this._forceDeleteDelay = config.forceDeleteDelay;
    this._hostClusterUid = config.hostClusterUid;
    this._id = config.id;
    this._name = config.name;
    this._osPatchAfter = config.osPatchAfter;
    this._osPatchOnBoot = config.osPatchOnBoot;
    this._osPatchSchedule = config.osPatchSchedule;
    this._pauseCluster = config.pauseCluster;
    this._skipCompletion = config.skipCompletion;
    this._tags = config.tags;
    this._backupPolicy.internalValue = config.backupPolicy;
    this._cloudConfig.internalValue = config.cloudConfig;
    this._clusterProfile.internalValue = config.clusterProfile;
    this._clusterRbacBinding.internalValue = config.clusterRbacBinding;
    this._namespaces.internalValue = config.namespaces;
    this._resources.internalValue = config.resources;
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

  // cloud_config_id - computed: true, optional: false, required: false
  public get cloudConfigId() {
    return this.getStringAttribute('cloud_config_id');
  }

  // cluster_group_uid - computed: false, optional: true, required: false
  private _clusterGroupUid?: string; 
  public get clusterGroupUid() {
    return this.getStringAttribute('cluster_group_uid');
  }
  public set clusterGroupUid(value: string) {
    this._clusterGroupUid = value;
  }
  public resetClusterGroupUid() {
    this._clusterGroupUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterGroupUidInput() {
    return this._clusterGroupUid;
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

  // host_cluster_uid - computed: false, optional: true, required: false
  private _hostClusterUid?: string; 
  public get hostClusterUid() {
    return this.getStringAttribute('host_cluster_uid');
  }
  public set hostClusterUid(value: string) {
    this._hostClusterUid = value;
  }
  public resetHostClusterUid() {
    this._hostClusterUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostClusterUidInput() {
    return this._hostClusterUid;
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
  private _locationConfig = new VirtualClusterLocationConfigList(this, "location_config", false);
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

  // pause_cluster - computed: false, optional: true, required: false
  private _pauseCluster?: boolean | cdktf.IResolvable; 
  public get pauseCluster() {
    return this.getBooleanAttribute('pause_cluster');
  }
  public set pauseCluster(value: boolean | cdktf.IResolvable) {
    this._pauseCluster = value;
  }
  public resetPauseCluster() {
    this._pauseCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseClusterInput() {
    return this._pauseCluster;
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

  // backup_policy - computed: false, optional: true, required: false
  private _backupPolicy = new VirtualClusterBackupPolicyOutputReference(this, "backup_policy");
  public get backupPolicy() {
    return this._backupPolicy;
  }
  public putBackupPolicy(value: VirtualClusterBackupPolicy) {
    this._backupPolicy.internalValue = value;
  }
  public resetBackupPolicy() {
    this._backupPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPolicyInput() {
    return this._backupPolicy.internalValue;
  }

  // cloud_config - computed: false, optional: true, required: false
  private _cloudConfig = new VirtualClusterCloudConfigOutputReference(this, "cloud_config");
  public get cloudConfig() {
    return this._cloudConfig;
  }
  public putCloudConfig(value: VirtualClusterCloudConfig) {
    this._cloudConfig.internalValue = value;
  }
  public resetCloudConfig() {
    this._cloudConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudConfigInput() {
    return this._cloudConfig.internalValue;
  }

  // cluster_profile - computed: false, optional: true, required: false
  private _clusterProfile = new VirtualClusterClusterProfileList(this, "cluster_profile", false);
  public get clusterProfile() {
    return this._clusterProfile;
  }
  public putClusterProfile(value: VirtualClusterClusterProfile[] | cdktf.IResolvable) {
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
  private _clusterRbacBinding = new VirtualClusterClusterRbacBindingList(this, "cluster_rbac_binding", false);
  public get clusterRbacBinding() {
    return this._clusterRbacBinding;
  }
  public putClusterRbacBinding(value: VirtualClusterClusterRbacBinding[] | cdktf.IResolvable) {
    this._clusterRbacBinding.internalValue = value;
  }
  public resetClusterRbacBinding() {
    this._clusterRbacBinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRbacBindingInput() {
    return this._clusterRbacBinding.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces = new VirtualClusterNamespacesList(this, "namespaces", false);
  public get namespaces() {
    return this._namespaces;
  }
  public putNamespaces(value: VirtualClusterNamespaces[] | cdktf.IResolvable) {
    this._namespaces.internalValue = value;
  }
  public resetNamespaces() {
    this._namespaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new VirtualClusterResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: VirtualClusterResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // scan_policy - computed: false, optional: true, required: false
  private _scanPolicy = new VirtualClusterScanPolicyOutputReference(this, "scan_policy");
  public get scanPolicy() {
    return this._scanPolicy;
  }
  public putScanPolicy(value: VirtualClusterScanPolicy) {
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
  private _timeouts = new VirtualClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualClusterTimeouts) {
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
      cluster_group_uid: cdktf.stringToTerraform(this._clusterGroupUid),
      context: cdktf.stringToTerraform(this._context),
      description: cdktf.stringToTerraform(this._description),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      force_delete_delay: cdktf.numberToTerraform(this._forceDeleteDelay),
      host_cluster_uid: cdktf.stringToTerraform(this._hostClusterUid),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      os_patch_after: cdktf.stringToTerraform(this._osPatchAfter),
      os_patch_on_boot: cdktf.booleanToTerraform(this._osPatchOnBoot),
      os_patch_schedule: cdktf.stringToTerraform(this._osPatchSchedule),
      pause_cluster: cdktf.booleanToTerraform(this._pauseCluster),
      skip_completion: cdktf.booleanToTerraform(this._skipCompletion),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      backup_policy: virtualClusterBackupPolicyToTerraform(this._backupPolicy.internalValue),
      cloud_config: virtualClusterCloudConfigToTerraform(this._cloudConfig.internalValue),
      cluster_profile: cdktf.listMapper(virtualClusterClusterProfileToTerraform, true)(this._clusterProfile.internalValue),
      cluster_rbac_binding: cdktf.listMapper(virtualClusterClusterRbacBindingToTerraform, true)(this._clusterRbacBinding.internalValue),
      namespaces: cdktf.listMapper(virtualClusterNamespacesToTerraform, true)(this._namespaces.internalValue),
      resources: cdktf.listMapper(virtualClusterResourcesToTerraform, true)(this._resources.internalValue),
      scan_policy: virtualClusterScanPolicyToTerraform(this._scanPolicy.internalValue),
      timeouts: virtualClusterTimeoutsToTerraform(this._timeouts.internalValue),
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
      cluster_group_uid: {
        value: cdktf.stringToHclTerraform(this._clusterGroupUid),
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
      host_cluster_uid: {
        value: cdktf.stringToHclTerraform(this._hostClusterUid),
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
      pause_cluster: {
        value: cdktf.booleanToHclTerraform(this._pauseCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      backup_policy: {
        value: virtualClusterBackupPolicyToHclTerraform(this._backupPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualClusterBackupPolicyList",
      },
      cloud_config: {
        value: virtualClusterCloudConfigToHclTerraform(this._cloudConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualClusterCloudConfigList",
      },
      cluster_profile: {
        value: cdktf.listMapperHcl(virtualClusterClusterProfileToHclTerraform, true)(this._clusterProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualClusterClusterProfileList",
      },
      cluster_rbac_binding: {
        value: cdktf.listMapperHcl(virtualClusterClusterRbacBindingToHclTerraform, true)(this._clusterRbacBinding.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualClusterClusterRbacBindingList",
      },
      namespaces: {
        value: cdktf.listMapperHcl(virtualClusterNamespacesToHclTerraform, true)(this._namespaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualClusterNamespacesList",
      },
      resources: {
        value: cdktf.listMapperHcl(virtualClusterResourcesToHclTerraform, true)(this._resources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualClusterResourcesList",
      },
      scan_policy: {
        value: virtualClusterScanPolicyToHclTerraform(this._scanPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualClusterScanPolicyList",
      },
      timeouts: {
        value: virtualClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
