// https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterCustomCloudConfig extends cdktf.TerraformMetaArguments {
  /**
  * The setting to apply the cluster profile. `DownloadAndInstall` will download and install packs in one action. `DownloadAndInstallLater` will only download artifact and postpone install for later. Default value is `DownloadAndInstall`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#apply_setting ClusterCustomCloud#apply_setting}
  */
  readonly applySetting?: string;
  /**
  * The cloud provider name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#cloud ClusterCustomCloud#cloud}
  */
  readonly cloud: string;
  /**
  * The cloud account id to use for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#cloud_account_id ClusterCustomCloud#cloud_account_id}
  */
  readonly cloudAccountId: string;
  /**
  * The context of the EKS cluster. Allowed values are `project` or `tenant`. Default is `project`. If  the `project` context is specified, the project name will sourced from the provider configuration parameter [`project_name`](https://registry.terraform.io/providers/spectrocloud/spectrocloud/latest/docs#schema).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#context ClusterCustomCloud#context}
  */
  readonly context?: string;
  /**
  * The description of the cluster. Default value is empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#description ClusterCustomCloud#description}
  */
  readonly description?: string;
  /**
  * If set to `true`, the cluster will be force deleted and user has to manually clean up the provisioned cloud resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#force_delete ClusterCustomCloud#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Delay duration in minutes to before invoking cluster force delete. Default and minimum is 20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#force_delete_delay ClusterCustomCloud#force_delete_delay}
  */
  readonly forceDeleteDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#id ClusterCustomCloud#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#name ClusterCustomCloud#name}
  */
  readonly name: string;
  /**
  * Date and time after which to patch cluster `RFC3339: 2006-01-02T15:04:05Z07:00`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#os_patch_after ClusterCustomCloud#os_patch_after}
  */
  readonly osPatchAfter?: string;
  /**
  * Whether to apply OS patch on boot. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#os_patch_on_boot ClusterCustomCloud#os_patch_on_boot}
  */
  readonly osPatchOnBoot?: boolean | cdktf.IResolvable;
  /**
  * The cron schedule for OS patching. This must be in the form of cron syntax. Ex: `0 0 * * *`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#os_patch_schedule ClusterCustomCloud#os_patch_schedule}
  */
  readonly osPatchSchedule?: string;
  /**
  * The pause agent upgrades setting allows to control the automatic upgrade of the Palette component and agent for an individual cluster. The default value is `unlock`, meaning upgrades occur automatically. Setting it to `lock` pauses automatic agent upgrades for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#pause_agent_upgrades ClusterCustomCloud#pause_agent_upgrades}
  */
  readonly pauseAgentUpgrades?: string;
  /**
  * If `true`, the cluster will be created asynchronously. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#skip_completion ClusterCustomCloud#skip_completion}
  */
  readonly skipCompletion?: boolean | cdktf.IResolvable;
  /**
  * A list of tags to be applied to the cluster. Tags must be in the form of `key:value`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#tags ClusterCustomCloud#tags}
  */
  readonly tags?: string[];
  /**
  * backup_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#backup_policy ClusterCustomCloud#backup_policy}
  */
  readonly backupPolicy?: ClusterCustomCloudBackupPolicy;
  /**
  * cloud_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#cloud_config ClusterCustomCloud#cloud_config}
  */
  readonly cloudConfig: ClusterCustomCloudCloudConfig;
  /**
  * cluster_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#cluster_profile ClusterCustomCloud#cluster_profile}
  */
  readonly clusterProfile?: ClusterCustomCloudClusterProfile[] | cdktf.IResolvable;
  /**
  * cluster_rbac_binding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#cluster_rbac_binding ClusterCustomCloud#cluster_rbac_binding}
  */
  readonly clusterRbacBinding?: ClusterCustomCloudClusterRbacBinding[] | cdktf.IResolvable;
  /**
  * location_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#location_config ClusterCustomCloud#location_config}
  */
  readonly locationConfig?: ClusterCustomCloudLocationConfig[] | cdktf.IResolvable;
  /**
  * machine_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#machine_pool ClusterCustomCloud#machine_pool}
  */
  readonly machinePool: ClusterCustomCloudMachinePool[] | cdktf.IResolvable;
  /**
  * namespaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#namespaces ClusterCustomCloud#namespaces}
  */
  readonly namespaces?: ClusterCustomCloudNamespaces[] | cdktf.IResolvable;
  /**
  * scan_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#scan_policy ClusterCustomCloud#scan_policy}
  */
  readonly scanPolicy?: ClusterCustomCloudScanPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#timeouts ClusterCustomCloud#timeouts}
  */
  readonly timeouts?: ClusterCustomCloudTimeouts;
}
export interface ClusterCustomCloudBackupPolicy {
  /**
  * The ID of the backup location to use for the backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#backup_location_id ClusterCustomCloud#backup_location_id}
  */
  readonly backupLocationId: string;
  /**
  * The list of cluster UIDs to include in the backup. If `include_all_clusters` is set to `true`, then all clusters will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#cluster_uids ClusterCustomCloud#cluster_uids}
  */
  readonly clusterUids?: string[];
  /**
  * The number of hours after which the backup will be deleted. For example, if the expiry is set to 24, the backup will be deleted after 24 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#expiry_in_hour ClusterCustomCloud#expiry_in_hour}
  */
  readonly expiryInHour: number;
  /**
  * Whether to include all clusters in the backup. If set to false, only the clusters specified in `cluster_uids` will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#include_all_clusters ClusterCustomCloud#include_all_clusters}
  */
  readonly includeAllClusters?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to include cluster resources in the backup. If set to false, only the cluster configuration and disks will be backed up. (Note: Starting with Palette version 4.6, the include_cluster_resources attribute will be deprecated, and a new attribute, include_cluster_resources_mode, will be introduced.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#include_cluster_resources ClusterCustomCloud#include_cluster_resources}
  */
  readonly includeClusterResources?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to include the cluster resources in the backup. Supported values are `always`, `never`, and `auto`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#include_cluster_resources_mode ClusterCustomCloud#include_cluster_resources_mode}
  */
  readonly includeClusterResourcesMode?: string;
  /**
  * Whether to include the disks in the backup. If set to false, only the cluster configuration will be backed up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#include_disks ClusterCustomCloud#include_disks}
  */
  readonly includeDisks?: boolean | cdktf.IResolvable;
  /**
  * The list of Kubernetes namespaces to include in the backup. If not specified, all namespaces will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#namespaces ClusterCustomCloud#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Prefix for the backup name. The backup name will be of the format <prefix>-<cluster-name>-<timestamp>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#prefix ClusterCustomCloud#prefix}
  */
  readonly prefix: string;
  /**
  * The schedule for the backup. The schedule is specified in cron format. For example, to run the backup every day at 1:00 AM, the schedule should be set to `0 1 * * *`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#schedule ClusterCustomCloud#schedule}
  */
  readonly schedule: string;
}

export function clusterCustomCloudBackupPolicyToTerraform(struct?: ClusterCustomCloudBackupPolicyOutputReference | ClusterCustomCloudBackupPolicy): any {
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


export function clusterCustomCloudBackupPolicyToHclTerraform(struct?: ClusterCustomCloudBackupPolicyOutputReference | ClusterCustomCloudBackupPolicy): any {
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

export class ClusterCustomCloudBackupPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCustomCloudBackupPolicy | undefined {
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

  public set internalValue(value: ClusterCustomCloudBackupPolicy | undefined) {
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
export interface ClusterCustomCloudCloudConfig {
  /**
  * Key-value pairs to override specific values in the YAML. Supports template variables, wildcard patterns, field pattern search, document-specific and global overrides.
  * 
  * Template variables: Simple identifiers that replace ${var}, {{var}}, or $var patterns in YAML (e.g., 'cluster_name' replaces ${cluster_name})
  * Wildcard patterns: Patterns starting with '*' that match field names containing the specified substring (e.g., '*cluster-api-autoscaler-node-group-max-size' matches any field containing 'cluster-api-autoscaler-node-group-max-size')
  * Field pattern search: Patterns that find and update ALL matching nested fields anywhere in YAML (e.g., 'replicas' updates any 'replicas' field, 'rootVolume.size' updates any 'rootVolume.size' pattern)
  * Document-specific syntax: 'Kind.path' (e.g., 'Cluster.metadata.labels', 'AWSCluster.spec.region')
  * Global path syntax: 'path' (e.g., 'metadata.name', 'spec.region')
  * 
  * Processing order: 1) Template substitution, 2) Wildcard patterns, 3) Field pattern search, 4) Path-based overrides. Supports dot notation for nested paths and array indexing with [index]. Values are strings but support JSON syntax for arrays/objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#overrides ClusterCustomCloud#overrides}
  */
  readonly overrides?: { [key: string]: string };
  /**
  * The values of the cloud config. The values are specified in YAML format. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#values ClusterCustomCloud#values}
  */
  readonly values: string;
}

export function clusterCustomCloudCloudConfigToTerraform(struct?: ClusterCustomCloudCloudConfigOutputReference | ClusterCustomCloudCloudConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.overrides),
    values: cdktf.stringToTerraform(struct!.values),
  }
}


export function clusterCustomCloudCloudConfigToHclTerraform(struct?: ClusterCustomCloudCloudConfigOutputReference | ClusterCustomCloudCloudConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.overrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    values: {
      value: cdktf.stringToHclTerraform(struct!.values),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCustomCloudCloudConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCustomCloudCloudConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCustomCloudCloudConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._overrides = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._overrides = value.overrides;
      this._values = value.values;
    }
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides?: { [key: string]: string }; 
  public get overrides() {
    return this.getStringMapAttribute('overrides');
  }
  public set overrides(value: { [key: string]: string }) {
    this._overrides = value;
  }
  public resetOverrides() {
    this._overrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string; 
  public get values() {
    return this.getStringAttribute('values');
  }
  public set values(value: string) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface ClusterCustomCloudClusterProfilePackManifest {
  /**
  * The content of the manifest. The content is the YAML content of the manifest. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#content ClusterCustomCloud#content}
  */
  readonly content: string;
  /**
  * The name of the manifest. The name must be unique within the pack. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#name ClusterCustomCloud#name}
  */
  readonly name: string;
}

export function clusterCustomCloudClusterProfilePackManifestToTerraform(struct?: ClusterCustomCloudClusterProfilePackManifest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function clusterCustomCloudClusterProfilePackManifestToHclTerraform(struct?: ClusterCustomCloudClusterProfilePackManifest | cdktf.IResolvable): any {
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

export class ClusterCustomCloudClusterProfilePackManifestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterCustomCloudClusterProfilePackManifest | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterCustomCloudClusterProfilePackManifest | cdktf.IResolvable | undefined) {
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

export class ClusterCustomCloudClusterProfilePackManifestList extends cdktf.ComplexList {
  public internalValue? : ClusterCustomCloudClusterProfilePackManifest[] | cdktf.IResolvable

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
  public get(index: number): ClusterCustomCloudClusterProfilePackManifestOutputReference {
    return new ClusterCustomCloudClusterProfilePackManifestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterCustomCloudClusterProfilePack {
  /**
  * The name of the pack. The name must be unique within the cluster profile. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#name ClusterCustomCloud#name}
  */
  readonly name: string;
  /**
  * The registry name of the pack. The registry name is the human-readable name of the registry. This attribute can be used instead of `registry_uid` for better readability. If `uid` is not provided, this field can be used along with `name` and `tag` to resolve the pack UID internally. Either `registry_uid` or `registry_name` can be specified, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#registry_name ClusterCustomCloud#registry_name}
  */
  readonly registryName?: string;
  /**
  * The registry UID of the pack. The registry UID is the unique identifier of the registry. This attribute is required if there is more than one registry that contains a pack with the same name. If `uid` is not provided, this field is required along with `name` and `tag` to resolve the pack UID internally. Either `registry_uid` or `registry_name` can be specified, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#registry_uid ClusterCustomCloud#registry_uid}
  */
  readonly registryUid?: string;
  /**
  * The tag of the pack. The tag is the version of the pack. This attribute is required if the pack type is `spectro` or `helm`. If `uid` is not provided, this field is required along with `name` and `registry_uid` (or `registry_name`) to resolve the pack UID internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#tag ClusterCustomCloud#tag}
  */
  readonly tag?: string;
  /**
  * The type of the pack. Allowed values are `spectro`, `manifest`, `helm`, or `oci`. The default value is spectro. If using an OCI registry for pack, set the type to `oci`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#type ClusterCustomCloud#type}
  */
  readonly type?: string;
  /**
  * The unique identifier of the pack. The value can be looked up using the [`spectrocloud_pack`](https://registry.terraform.io/providers/spectrocloud/spectrocloud/latest/docs/data-sources/pack) data source. This value is required if the pack type is `spectro` and for `helm` if the chart is from a public helm registry. If not provided, all of `name`, `tag`, and `registry_uid` must be specified to resolve the pack UID internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#uid ClusterCustomCloud#uid}
  */
  readonly uid?: string;
  /**
  * The values of the pack. The values are the configuration values of the pack. The values are specified in YAML format. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#values ClusterCustomCloud#values}
  */
  readonly values?: string;
  /**
  * manifest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#manifest ClusterCustomCloud#manifest}
  */
  readonly manifest?: ClusterCustomCloudClusterProfilePackManifest[] | cdktf.IResolvable;
}

export function clusterCustomCloudClusterProfilePackToTerraform(struct?: ClusterCustomCloudClusterProfilePack | cdktf.IResolvable): any {
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
    manifest: cdktf.listMapper(clusterCustomCloudClusterProfilePackManifestToTerraform, true)(struct!.manifest),
  }
}


export function clusterCustomCloudClusterProfilePackToHclTerraform(struct?: ClusterCustomCloudClusterProfilePack | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(clusterCustomCloudClusterProfilePackManifestToHclTerraform, true)(struct!.manifest),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCustomCloudClusterProfilePackManifestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCustomCloudClusterProfilePackOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterCustomCloudClusterProfilePack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterCustomCloudClusterProfilePack | cdktf.IResolvable | undefined) {
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
  private _manifest = new ClusterCustomCloudClusterProfilePackManifestList(this, "manifest", false);
  public get manifest() {
    return this._manifest;
  }
  public putManifest(value: ClusterCustomCloudClusterProfilePackManifest[] | cdktf.IResolvable) {
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

export class ClusterCustomCloudClusterProfilePackList extends cdktf.ComplexList {
  public internalValue? : ClusterCustomCloudClusterProfilePack[] | cdktf.IResolvable

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
  public get(index: number): ClusterCustomCloudClusterProfilePackOutputReference {
    return new ClusterCustomCloudClusterProfilePackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterCustomCloudClusterProfile {
  /**
  * The ID of the cluster profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#id ClusterCustomCloud#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A map of cluster profile variables, specified as key-value pairs. For example: `priority = "5"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#variables ClusterCustomCloud#variables}
  */
  readonly variables?: { [key: string]: string };
  /**
  * pack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#pack ClusterCustomCloud#pack}
  */
  readonly pack?: ClusterCustomCloudClusterProfilePack[] | cdktf.IResolvable;
}

export function clusterCustomCloudClusterProfileToTerraform(struct?: ClusterCustomCloudClusterProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.variables),
    pack: cdktf.listMapper(clusterCustomCloudClusterProfilePackToTerraform, true)(struct!.pack),
  }
}


export function clusterCustomCloudClusterProfileToHclTerraform(struct?: ClusterCustomCloudClusterProfile | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(clusterCustomCloudClusterProfilePackToHclTerraform, true)(struct!.pack),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCustomCloudClusterProfilePackList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCustomCloudClusterProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterCustomCloudClusterProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterCustomCloudClusterProfile | cdktf.IResolvable | undefined) {
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
  private _pack = new ClusterCustomCloudClusterProfilePackList(this, "pack", false);
  public get pack() {
    return this._pack;
  }
  public putPack(value: ClusterCustomCloudClusterProfilePack[] | cdktf.IResolvable) {
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

export class ClusterCustomCloudClusterProfileList extends cdktf.ComplexList {
  public internalValue? : ClusterCustomCloudClusterProfile[] | cdktf.IResolvable

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
  public get(index: number): ClusterCustomCloudClusterProfileOutputReference {
    return new ClusterCustomCloudClusterProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterCustomCloudClusterRbacBindingSubjects {
  /**
  * The name of the subject. Required if 'type' is set to 'User' or 'Group'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#name ClusterCustomCloud#name}
  */
  readonly name: string;
  /**
  * The Kubernetes namespace of the subject. Required if 'type' is set to 'ServiceAccount'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#namespace ClusterCustomCloud#namespace}
  */
  readonly namespace?: string;
  /**
  * The type of the subject. Can be one of the following values: `User`, `Group`, or `ServiceAccount`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#type ClusterCustomCloud#type}
  */
  readonly type: string;
}

export function clusterCustomCloudClusterRbacBindingSubjectsToTerraform(struct?: ClusterCustomCloudClusterRbacBindingSubjects | cdktf.IResolvable): any {
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


export function clusterCustomCloudClusterRbacBindingSubjectsToHclTerraform(struct?: ClusterCustomCloudClusterRbacBindingSubjects | cdktf.IResolvable): any {
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

export class ClusterCustomCloudClusterRbacBindingSubjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterCustomCloudClusterRbacBindingSubjects | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterCustomCloudClusterRbacBindingSubjects | cdktf.IResolvable | undefined) {
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

export class ClusterCustomCloudClusterRbacBindingSubjectsList extends cdktf.ComplexList {
  public internalValue? : ClusterCustomCloudClusterRbacBindingSubjects[] | cdktf.IResolvable

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
  public get(index: number): ClusterCustomCloudClusterRbacBindingSubjectsOutputReference {
    return new ClusterCustomCloudClusterRbacBindingSubjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterCustomCloudClusterRbacBinding {
  /**
  * The Kubernetes namespace of the RBAC binding. Required if 'type' is set to 'RoleBinding'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#namespace ClusterCustomCloud#namespace}
  */
  readonly namespace?: string;
  /**
  * The role of the RBAC binding. Required if 'type' is set to 'RoleBinding'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#role ClusterCustomCloud#role}
  */
  readonly role?: { [key: string]: string };
  /**
  * The type of the RBAC binding. Can be one of the following values: `RoleBinding`, or `ClusterRoleBinding`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#type ClusterCustomCloud#type}
  */
  readonly type: string;
  /**
  * subjects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#subjects ClusterCustomCloud#subjects}
  */
  readonly subjects?: ClusterCustomCloudClusterRbacBindingSubjects[] | cdktf.IResolvable;
}

export function clusterCustomCloudClusterRbacBindingToTerraform(struct?: ClusterCustomCloudClusterRbacBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    role: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    subjects: cdktf.listMapper(clusterCustomCloudClusterRbacBindingSubjectsToTerraform, true)(struct!.subjects),
  }
}


export function clusterCustomCloudClusterRbacBindingToHclTerraform(struct?: ClusterCustomCloudClusterRbacBinding | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(clusterCustomCloudClusterRbacBindingSubjectsToHclTerraform, true)(struct!.subjects),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCustomCloudClusterRbacBindingSubjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCustomCloudClusterRbacBindingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterCustomCloudClusterRbacBinding | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterCustomCloudClusterRbacBinding | cdktf.IResolvable | undefined) {
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
  private _subjects = new ClusterCustomCloudClusterRbacBindingSubjectsList(this, "subjects", false);
  public get subjects() {
    return this._subjects;
  }
  public putSubjects(value: ClusterCustomCloudClusterRbacBindingSubjects[] | cdktf.IResolvable) {
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

export class ClusterCustomCloudClusterRbacBindingList extends cdktf.ComplexList {
  public internalValue? : ClusterCustomCloudClusterRbacBinding[] | cdktf.IResolvable

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
  public get(index: number): ClusterCustomCloudClusterRbacBindingOutputReference {
    return new ClusterCustomCloudClusterRbacBindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterCustomCloudLocationConfig {
  /**
  * The country code of the country the cluster is located in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#country_code ClusterCustomCloud#country_code}
  */
  readonly countryCode?: string;
  /**
  * The name of the country.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#country_name ClusterCustomCloud#country_name}
  */
  readonly countryName?: string;
  /**
  * The latitude coordinates value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#latitude ClusterCustomCloud#latitude}
  */
  readonly latitude: number;
  /**
  * The longitude coordinates value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#longitude ClusterCustomCloud#longitude}
  */
  readonly longitude: number;
  /**
  * The region code of where the cluster is located in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#region_code ClusterCustomCloud#region_code}
  */
  readonly regionCode?: string;
  /**
  * The name of the region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#region_name ClusterCustomCloud#region_name}
  */
  readonly regionName?: string;
}

export function clusterCustomCloudLocationConfigToTerraform(struct?: ClusterCustomCloudLocationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    country_name: cdktf.stringToTerraform(struct!.countryName),
    latitude: cdktf.numberToTerraform(struct!.latitude),
    longitude: cdktf.numberToTerraform(struct!.longitude),
    region_code: cdktf.stringToTerraform(struct!.regionCode),
    region_name: cdktf.stringToTerraform(struct!.regionName),
  }
}


export function clusterCustomCloudLocationConfigToHclTerraform(struct?: ClusterCustomCloudLocationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    country_code: {
      value: cdktf.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country_name: {
      value: cdktf.stringToHclTerraform(struct!.countryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latitude: {
      value: cdktf.numberToHclTerraform(struct!.latitude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    longitude: {
      value: cdktf.numberToHclTerraform(struct!.longitude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region_code: {
      value: cdktf.stringToHclTerraform(struct!.regionCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_name: {
      value: cdktf.stringToHclTerraform(struct!.regionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCustomCloudLocationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterCustomCloudLocationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._countryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryName = this._countryName;
    }
    if (this._latitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitude = this._latitude;
    }
    if (this._longitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitude = this._longitude;
    }
    if (this._regionCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionCode = this._regionCode;
    }
    if (this._regionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionName = this._regionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCustomCloudLocationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countryCode = undefined;
      this._countryName = undefined;
      this._latitude = undefined;
      this._longitude = undefined;
      this._regionCode = undefined;
      this._regionName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countryCode = value.countryCode;
      this._countryName = value.countryName;
      this._latitude = value.latitude;
      this._longitude = value.longitude;
      this._regionCode = value.regionCode;
      this._regionName = value.regionName;
    }
  }

  // country_code - computed: false, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // country_name - computed: false, optional: true, required: false
  private _countryName?: string; 
  public get countryName() {
    return this.getStringAttribute('country_name');
  }
  public set countryName(value: string) {
    this._countryName = value;
  }
  public resetCountryName() {
    this._countryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryNameInput() {
    return this._countryName;
  }

  // latitude - computed: false, optional: false, required: true
  private _latitude?: number; 
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }
  public set latitude(value: number) {
    this._latitude = value;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: false, optional: false, required: true
  private _longitude?: number; 
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }
  public set longitude(value: number) {
    this._longitude = value;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }

  // region_code - computed: false, optional: true, required: false
  private _regionCode?: string; 
  public get regionCode() {
    return this.getStringAttribute('region_code');
  }
  public set regionCode(value: string) {
    this._regionCode = value;
  }
  public resetRegionCode() {
    this._regionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionCodeInput() {
    return this._regionCode;
  }

  // region_name - computed: false, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }
}

export class ClusterCustomCloudLocationConfigList extends cdktf.ComplexList {
  public internalValue? : ClusterCustomCloudLocationConfig[] | cdktf.IResolvable

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
  public get(index: number): ClusterCustomCloudLocationConfigOutputReference {
    return new ClusterCustomCloudLocationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterCustomCloudMachinePoolTaints {
  /**
  * The effect of the taint. Allowed values are: `NoSchedule`, `PreferNoSchedule` or `NoExecute`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#effect ClusterCustomCloud#effect}
  */
  readonly effect: string;
  /**
  * The key of the taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#key ClusterCustomCloud#key}
  */
  readonly key: string;
  /**
  * The value of the taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#value ClusterCustomCloud#value}
  */
  readonly value: string;
}

export function clusterCustomCloudMachinePoolTaintsToTerraform(struct?: ClusterCustomCloudMachinePoolTaints | cdktf.IResolvable): any {
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


export function clusterCustomCloudMachinePoolTaintsToHclTerraform(struct?: ClusterCustomCloudMachinePoolTaints | cdktf.IResolvable): any {
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

export class ClusterCustomCloudMachinePoolTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterCustomCloudMachinePoolTaints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterCustomCloudMachinePoolTaints | cdktf.IResolvable | undefined) {
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

export class ClusterCustomCloudMachinePoolTaintsList extends cdktf.ComplexList {
  public internalValue? : ClusterCustomCloudMachinePoolTaints[] | cdktf.IResolvable

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
  public get(index: number): ClusterCustomCloudMachinePoolTaintsOutputReference {
    return new ClusterCustomCloudMachinePoolTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterCustomCloudMachinePool {
  /**
  * Whether this machine pool is a control plane. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#control_plane ClusterCustomCloud#control_plane}
  */
  readonly controlPlane?: boolean | cdktf.IResolvable;
  /**
  * Whether this machine pool is a control plane and a worker. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#control_plane_as_worker ClusterCustomCloud#control_plane_as_worker}
  */
  readonly controlPlaneAsWorker?: boolean | cdktf.IResolvable;
  /**
  * The values of the node pool config. The values are specified in YAML format. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#node_pool_config ClusterCustomCloud#node_pool_config}
  */
  readonly nodePoolConfig: string;
  /**
  * Key-value pairs to override specific values in the node pool config YAML. Supports template variables, wildcard patterns, field pattern search, document-specific and global overrides.
  * 
  * Template variables: Simple identifiers that replace ${var}, {{var}}, or $var patterns in YAML (e.g., 'node_count' replaces ${node_count})
  * Wildcard patterns: Patterns starting with '*' that match field names containing the specified substring (e.g., '*cluster-api-autoscaler-node-group-max-size' matches any field containing 'cluster-api-autoscaler-node-group-max-size')
  * Field pattern search: Patterns that find and update ALL matching nested fields anywhere in YAML (e.g., 'replicas' updates any 'replicas' field, 'rootVolume.size' updates any 'rootVolume.size' pattern)
  * Document-specific syntax: 'Kind.path' (e.g., 'AWSMachineTemplate.spec.template.spec.instanceType')
  * Global path syntax: 'path' (e.g., 'metadata.name', 'spec.instanceType')
  * 
  * Processing order: 1) Template substitution, 2) Wildcard patterns, 3) Field pattern search, 4) Path-based overrides. Supports dot notation for nested paths and array indexing with [index]. Values are strings but support JSON syntax for arrays/objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#overrides ClusterCustomCloud#overrides}
  */
  readonly overrides?: { [key: string]: string };
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#taints ClusterCustomCloud#taints}
  */
  readonly taints?: ClusterCustomCloudMachinePoolTaints[] | cdktf.IResolvable;
}

export function clusterCustomCloudMachinePoolToTerraform(struct?: ClusterCustomCloudMachinePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane: cdktf.booleanToTerraform(struct!.controlPlane),
    control_plane_as_worker: cdktf.booleanToTerraform(struct!.controlPlaneAsWorker),
    node_pool_config: cdktf.stringToTerraform(struct!.nodePoolConfig),
    overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.overrides),
    taints: cdktf.listMapper(clusterCustomCloudMachinePoolTaintsToTerraform, true)(struct!.taints),
  }
}


export function clusterCustomCloudMachinePoolToHclTerraform(struct?: ClusterCustomCloudMachinePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane: {
      value: cdktf.booleanToHclTerraform(struct!.controlPlane),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    control_plane_as_worker: {
      value: cdktf.booleanToHclTerraform(struct!.controlPlaneAsWorker),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_pool_config: {
      value: cdktf.stringToHclTerraform(struct!.nodePoolConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.overrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    taints: {
      value: cdktf.listMapperHcl(clusterCustomCloudMachinePoolTaintsToHclTerraform, true)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCustomCloudMachinePoolTaintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCustomCloudMachinePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterCustomCloudMachinePool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlane !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlane = this._controlPlane;
    }
    if (this._controlPlaneAsWorker !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneAsWorker = this._controlPlaneAsWorker;
    }
    if (this._nodePoolConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePoolConfig = this._nodePoolConfig;
    }
    if (this._overrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides;
    }
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCustomCloudMachinePool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controlPlane = undefined;
      this._controlPlaneAsWorker = undefined;
      this._nodePoolConfig = undefined;
      this._overrides = undefined;
      this._taints.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controlPlane = value.controlPlane;
      this._controlPlaneAsWorker = value.controlPlaneAsWorker;
      this._nodePoolConfig = value.nodePoolConfig;
      this._overrides = value.overrides;
      this._taints.internalValue = value.taints;
    }
  }

  // control_plane - computed: false, optional: true, required: false
  private _controlPlane?: boolean | cdktf.IResolvable; 
  public get controlPlane() {
    return this.getBooleanAttribute('control_plane');
  }
  public set controlPlane(value: boolean | cdktf.IResolvable) {
    this._controlPlane = value;
  }
  public resetControlPlane() {
    this._controlPlane = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneInput() {
    return this._controlPlane;
  }

  // control_plane_as_worker - computed: false, optional: true, required: false
  private _controlPlaneAsWorker?: boolean | cdktf.IResolvable; 
  public get controlPlaneAsWorker() {
    return this.getBooleanAttribute('control_plane_as_worker');
  }
  public set controlPlaneAsWorker(value: boolean | cdktf.IResolvable) {
    this._controlPlaneAsWorker = value;
  }
  public resetControlPlaneAsWorker() {
    this._controlPlaneAsWorker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneAsWorkerInput() {
    return this._controlPlaneAsWorker;
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_pool_config - computed: false, optional: false, required: true
  private _nodePoolConfig?: string; 
  public get nodePoolConfig() {
    return this.getStringAttribute('node_pool_config');
  }
  public set nodePoolConfig(value: string) {
    this._nodePoolConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolConfigInput() {
    return this._nodePoolConfig;
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides?: { [key: string]: string }; 
  public get overrides() {
    return this.getStringMapAttribute('overrides');
  }
  public set overrides(value: { [key: string]: string }) {
    this._overrides = value;
  }
  public resetOverrides() {
    this._overrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new ClusterCustomCloudMachinePoolTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: ClusterCustomCloudMachinePoolTaints[] | cdktf.IResolvable) {
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

export class ClusterCustomCloudMachinePoolList extends cdktf.ComplexList {
  public internalValue? : ClusterCustomCloudMachinePool[] | cdktf.IResolvable

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
  public get(index: number): ClusterCustomCloudMachinePoolOutputReference {
    return new ClusterCustomCloudMachinePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterCustomCloudNamespaces {
  /**
  * Name of the namespace. This is the name of the Kubernetes namespace in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#name ClusterCustomCloud#name}
  */
  readonly name: string;
  /**
  * Resource allocation for the namespace. This is a map containing the resource type and the resource value. For example, `{cpu_cores: '2', memory_MiB: '2048', gpu_limit: '1', gpu_provider: 'nvidia'}`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#resource_allocation ClusterCustomCloud#resource_allocation}
  */
  readonly resourceAllocation: { [key: string]: string };
}

export function clusterCustomCloudNamespacesToTerraform(struct?: ClusterCustomCloudNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resource_allocation: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceAllocation),
  }
}


export function clusterCustomCloudNamespacesToHclTerraform(struct?: ClusterCustomCloudNamespaces | cdktf.IResolvable): any {
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

export class ClusterCustomCloudNamespacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterCustomCloudNamespaces | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterCustomCloudNamespaces | cdktf.IResolvable | undefined) {
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

export class ClusterCustomCloudNamespacesList extends cdktf.ComplexList {
  public internalValue? : ClusterCustomCloudNamespaces[] | cdktf.IResolvable

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
  public get(index: number): ClusterCustomCloudNamespacesOutputReference {
    return new ClusterCustomCloudNamespacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterCustomCloudScanPolicy {
  /**
  * The schedule for configuration scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#configuration_scan_schedule ClusterCustomCloud#configuration_scan_schedule}
  */
  readonly configurationScanSchedule: string;
  /**
  * The schedule for conformance scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#conformance_scan_schedule ClusterCustomCloud#conformance_scan_schedule}
  */
  readonly conformanceScanSchedule: string;
  /**
  * The schedule for penetration scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#penetration_scan_schedule ClusterCustomCloud#penetration_scan_schedule}
  */
  readonly penetrationScanSchedule: string;
}

export function clusterCustomCloudScanPolicyToTerraform(struct?: ClusterCustomCloudScanPolicyOutputReference | ClusterCustomCloudScanPolicy): any {
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


export function clusterCustomCloudScanPolicyToHclTerraform(struct?: ClusterCustomCloudScanPolicyOutputReference | ClusterCustomCloudScanPolicy): any {
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

export class ClusterCustomCloudScanPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCustomCloudScanPolicy | undefined {
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

  public set internalValue(value: ClusterCustomCloudScanPolicy | undefined) {
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
export interface ClusterCustomCloudTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#create ClusterCustomCloud#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#delete ClusterCustomCloud#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#update ClusterCustomCloud#update}
  */
  readonly update?: string;
}

export function clusterCustomCloudTimeoutsToTerraform(struct?: ClusterCustomCloudTimeouts | cdktf.IResolvable): any {
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


export function clusterCustomCloudTimeoutsToHclTerraform(struct?: ClusterCustomCloudTimeouts | cdktf.IResolvable): any {
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

export class ClusterCustomCloudTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterCustomCloudTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterCustomCloudTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud spectrocloud_cluster_custom_cloud}
*/
export class ClusterCustomCloud extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spectrocloud_cluster_custom_cloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterCustomCloud resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterCustomCloud to import
  * @param importFromId The id of the existing ClusterCustomCloud that should be imported. Refer to the {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterCustomCloud to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spectrocloud_cluster_custom_cloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_custom_cloud spectrocloud_cluster_custom_cloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterCustomCloudConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterCustomCloudConfig) {
    super(scope, id, {
      terraformResourceType: 'spectrocloud_cluster_custom_cloud',
      terraformGeneratorMetadata: {
        providerName: 'spectrocloud',
        providerVersion: '0.25.2',
        providerVersionConstraint: '0.25.2'
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
    this._cloud = config.cloud;
    this._cloudAccountId = config.cloudAccountId;
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
    this._skipCompletion = config.skipCompletion;
    this._tags = config.tags;
    this._backupPolicy.internalValue = config.backupPolicy;
    this._cloudConfig.internalValue = config.cloudConfig;
    this._clusterProfile.internalValue = config.clusterProfile;
    this._clusterRbacBinding.internalValue = config.clusterRbacBinding;
    this._locationConfig.internalValue = config.locationConfig;
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

  // cloud - computed: false, optional: false, required: true
  private _cloud?: string; 
  public get cloud() {
    return this.getStringAttribute('cloud');
  }
  public set cloud(value: string) {
    this._cloud = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
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
  private _backupPolicy = new ClusterCustomCloudBackupPolicyOutputReference(this, "backup_policy");
  public get backupPolicy() {
    return this._backupPolicy;
  }
  public putBackupPolicy(value: ClusterCustomCloudBackupPolicy) {
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
  private _cloudConfig = new ClusterCustomCloudCloudConfigOutputReference(this, "cloud_config");
  public get cloudConfig() {
    return this._cloudConfig;
  }
  public putCloudConfig(value: ClusterCustomCloudCloudConfig) {
    this._cloudConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudConfigInput() {
    return this._cloudConfig.internalValue;
  }

  // cluster_profile - computed: false, optional: true, required: false
  private _clusterProfile = new ClusterCustomCloudClusterProfileList(this, "cluster_profile", false);
  public get clusterProfile() {
    return this._clusterProfile;
  }
  public putClusterProfile(value: ClusterCustomCloudClusterProfile[] | cdktf.IResolvable) {
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
  private _clusterRbacBinding = new ClusterCustomCloudClusterRbacBindingList(this, "cluster_rbac_binding", false);
  public get clusterRbacBinding() {
    return this._clusterRbacBinding;
  }
  public putClusterRbacBinding(value: ClusterCustomCloudClusterRbacBinding[] | cdktf.IResolvable) {
    this._clusterRbacBinding.internalValue = value;
  }
  public resetClusterRbacBinding() {
    this._clusterRbacBinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRbacBindingInput() {
    return this._clusterRbacBinding.internalValue;
  }

  // location_config - computed: false, optional: true, required: false
  private _locationConfig = new ClusterCustomCloudLocationConfigList(this, "location_config", false);
  public get locationConfig() {
    return this._locationConfig;
  }
  public putLocationConfig(value: ClusterCustomCloudLocationConfig[] | cdktf.IResolvable) {
    this._locationConfig.internalValue = value;
  }
  public resetLocationConfig() {
    this._locationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationConfigInput() {
    return this._locationConfig.internalValue;
  }

  // machine_pool - computed: false, optional: false, required: true
  private _machinePool = new ClusterCustomCloudMachinePoolList(this, "machine_pool", true);
  public get machinePool() {
    return this._machinePool;
  }
  public putMachinePool(value: ClusterCustomCloudMachinePool[] | cdktf.IResolvable) {
    this._machinePool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machinePoolInput() {
    return this._machinePool.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces = new ClusterCustomCloudNamespacesList(this, "namespaces", false);
  public get namespaces() {
    return this._namespaces;
  }
  public putNamespaces(value: ClusterCustomCloudNamespaces[] | cdktf.IResolvable) {
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
  private _scanPolicy = new ClusterCustomCloudScanPolicyOutputReference(this, "scan_policy");
  public get scanPolicy() {
    return this._scanPolicy;
  }
  public putScanPolicy(value: ClusterCustomCloudScanPolicy) {
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
  private _timeouts = new ClusterCustomCloudTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClusterCustomCloudTimeouts) {
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
      cloud: cdktf.stringToTerraform(this._cloud),
      cloud_account_id: cdktf.stringToTerraform(this._cloudAccountId),
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
      skip_completion: cdktf.booleanToTerraform(this._skipCompletion),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      backup_policy: clusterCustomCloudBackupPolicyToTerraform(this._backupPolicy.internalValue),
      cloud_config: clusterCustomCloudCloudConfigToTerraform(this._cloudConfig.internalValue),
      cluster_profile: cdktf.listMapper(clusterCustomCloudClusterProfileToTerraform, true)(this._clusterProfile.internalValue),
      cluster_rbac_binding: cdktf.listMapper(clusterCustomCloudClusterRbacBindingToTerraform, true)(this._clusterRbacBinding.internalValue),
      location_config: cdktf.listMapper(clusterCustomCloudLocationConfigToTerraform, true)(this._locationConfig.internalValue),
      machine_pool: cdktf.listMapper(clusterCustomCloudMachinePoolToTerraform, true)(this._machinePool.internalValue),
      namespaces: cdktf.listMapper(clusterCustomCloudNamespacesToTerraform, true)(this._namespaces.internalValue),
      scan_policy: clusterCustomCloudScanPolicyToTerraform(this._scanPolicy.internalValue),
      timeouts: clusterCustomCloudTimeoutsToTerraform(this._timeouts.internalValue),
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
      cloud: {
        value: cdktf.stringToHclTerraform(this._cloud),
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
        value: clusterCustomCloudBackupPolicyToHclTerraform(this._backupPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterCustomCloudBackupPolicyList",
      },
      cloud_config: {
        value: clusterCustomCloudCloudConfigToHclTerraform(this._cloudConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterCustomCloudCloudConfigList",
      },
      cluster_profile: {
        value: cdktf.listMapperHcl(clusterCustomCloudClusterProfileToHclTerraform, true)(this._clusterProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterCustomCloudClusterProfileList",
      },
      cluster_rbac_binding: {
        value: cdktf.listMapperHcl(clusterCustomCloudClusterRbacBindingToHclTerraform, true)(this._clusterRbacBinding.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterCustomCloudClusterRbacBindingList",
      },
      location_config: {
        value: cdktf.listMapperHcl(clusterCustomCloudLocationConfigToHclTerraform, true)(this._locationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterCustomCloudLocationConfigList",
      },
      machine_pool: {
        value: cdktf.listMapperHcl(clusterCustomCloudMachinePoolToHclTerraform, true)(this._machinePool.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ClusterCustomCloudMachinePoolList",
      },
      namespaces: {
        value: cdktf.listMapperHcl(clusterCustomCloudNamespacesToHclTerraform, true)(this._namespaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterCustomCloudNamespacesList",
      },
      scan_policy: {
        value: clusterCustomCloudScanPolicyToHclTerraform(this._scanPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterCustomCloudScanPolicyList",
      },
      timeouts: {
        value: clusterCustomCloudTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterCustomCloudTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
