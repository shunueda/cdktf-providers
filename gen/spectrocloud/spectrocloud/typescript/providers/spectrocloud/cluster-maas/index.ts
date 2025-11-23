// https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterMaasConfig extends cdktf.TerraformMetaArguments {
  /**
  * The setting to apply the cluster profile. `DownloadAndInstall` will download and install packs in one action. `DownloadAndInstallLater` will only download artifact and postpone install for later. Default value is `DownloadAndInstall`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#apply_setting ClusterMaas#apply_setting}
  */
  readonly applySetting?: string;
  /**
  * ID of the Maas cloud account used for the cluster. This cloud account must be of type `maas`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#cloud_account_id ClusterMaas#cloud_account_id}
  */
  readonly cloudAccountId?: string;
  /**
  * `cluster_meta_attribute` can be used to set additional cluster metadata information, eg `{'nic_name': 'test', 'env': 'stage'}`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#cluster_meta_attribute ClusterMaas#cluster_meta_attribute}
  */
  readonly clusterMetaAttribute?: string;
  /**
  * The context of the MAAS configuration. Allowed values are `project` or `tenant`. Default is `project`. If  the `project` context is specified, the project name will sourced from the provider configuration parameter [`project_name`](https://registry.terraform.io/providers/spectrocloud/spectrocloud/latest/docs#schema).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#context ClusterMaas#context}
  */
  readonly context?: string;
  /**
  * The description of the cluster. Default value is empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#description ClusterMaas#description}
  */
  readonly description?: string;
  /**
  * If set to `true`, the cluster will be force deleted and user has to manually clean up the provisioned cloud resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#force_delete ClusterMaas#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Delay duration in minutes to before invoking cluster force delete. Default and minimum is 20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#force_delete_delay ClusterMaas#force_delete_delay}
  */
  readonly forceDeleteDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#id ClusterMaas#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#name ClusterMaas#name}
  */
  readonly name: string;
  /**
  * The date and time after which to patch the cluster. Prefix the time value with the respective RFC. Ex: `RFC3339: 2006-01-02T15:04:05Z07:00`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#os_patch_after ClusterMaas#os_patch_after}
  */
  readonly osPatchAfter?: string;
  /**
  * Whether to apply OS patch on boot. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#os_patch_on_boot ClusterMaas#os_patch_on_boot}
  */
  readonly osPatchOnBoot?: boolean | cdktf.IResolvable;
  /**
  * Cron schedule for OS patching. This must be in the form of `0 0 * * *`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#os_patch_schedule ClusterMaas#os_patch_schedule}
  */
  readonly osPatchSchedule?: string;
  /**
  * The pause agent upgrades setting allows to control the automatic upgrade of the Palette component and agent for an individual cluster. The default value is `unlock`, meaning upgrades occur automatically. Setting it to `lock` pauses automatic agent upgrades for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#pause_agent_upgrades ClusterMaas#pause_agent_upgrades}
  */
  readonly pauseAgentUpgrades?: string;
  /**
  * To authorize the cluster repave, set the value to `Approved` for approval and `""` to decline. Default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#review_repave_state ClusterMaas#review_repave_state}
  */
  readonly reviewRepaveState?: string;
  /**
  * If `true`, the cluster will be created asynchronously. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#skip_completion ClusterMaas#skip_completion}
  */
  readonly skipCompletion?: boolean | cdktf.IResolvable;
  /**
  * A list of tags to be applied to the cluster. Tags must be in the form of `key:value`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#tags ClusterMaas#tags}
  */
  readonly tags?: string[];
  /**
  * backup_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#backup_policy ClusterMaas#backup_policy}
  */
  readonly backupPolicy?: ClusterMaasBackupPolicy;
  /**
  * cloud_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#cloud_config ClusterMaas#cloud_config}
  */
  readonly cloudConfig: ClusterMaasCloudConfig;
  /**
  * cluster_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#cluster_profile ClusterMaas#cluster_profile}
  */
  readonly clusterProfile?: ClusterMaasClusterProfile[] | cdktf.IResolvable;
  /**
  * cluster_rbac_binding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#cluster_rbac_binding ClusterMaas#cluster_rbac_binding}
  */
  readonly clusterRbacBinding?: ClusterMaasClusterRbacBinding[] | cdktf.IResolvable;
  /**
  * cluster_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#cluster_template ClusterMaas#cluster_template}
  */
  readonly clusterTemplate?: ClusterMaasClusterTemplate;
  /**
  * host_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#host_config ClusterMaas#host_config}
  */
  readonly hostConfig?: ClusterMaasHostConfig[] | cdktf.IResolvable;
  /**
  * location_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#location_config ClusterMaas#location_config}
  */
  readonly locationConfig?: ClusterMaasLocationConfig[] | cdktf.IResolvable;
  /**
  * machine_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#machine_pool ClusterMaas#machine_pool}
  */
  readonly machinePool: ClusterMaasMachinePool[] | cdktf.IResolvable;
  /**
  * namespaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#namespaces ClusterMaas#namespaces}
  */
  readonly namespaces?: ClusterMaasNamespaces[] | cdktf.IResolvable;
  /**
  * scan_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#scan_policy ClusterMaas#scan_policy}
  */
  readonly scanPolicy?: ClusterMaasScanPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#timeouts ClusterMaas#timeouts}
  */
  readonly timeouts?: ClusterMaasTimeouts;
}
export interface ClusterMaasBackupPolicy {
  /**
  * The ID of the backup location to use for the backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#backup_location_id ClusterMaas#backup_location_id}
  */
  readonly backupLocationId: string;
  /**
  * The list of cluster UIDs to include in the backup. If `include_all_clusters` is set to `true`, then all clusters will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#cluster_uids ClusterMaas#cluster_uids}
  */
  readonly clusterUids?: string[];
  /**
  * The number of hours after which the backup will be deleted. For example, if the expiry is set to 24, the backup will be deleted after 24 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#expiry_in_hour ClusterMaas#expiry_in_hour}
  */
  readonly expiryInHour: number;
  /**
  * Whether to include all clusters in the backup. If set to false, only the clusters specified in `cluster_uids` will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#include_all_clusters ClusterMaas#include_all_clusters}
  */
  readonly includeAllClusters?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to include cluster resources in the backup. If set to false, only the cluster configuration and disks will be backed up. (Note: Starting with Palette version 4.6, the include_cluster_resources attribute will be deprecated, and a new attribute, include_cluster_resources_mode, will be introduced.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#include_cluster_resources ClusterMaas#include_cluster_resources}
  */
  readonly includeClusterResources?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to include the cluster resources in the backup. Supported values are `always`, `never`, and `auto`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#include_cluster_resources_mode ClusterMaas#include_cluster_resources_mode}
  */
  readonly includeClusterResourcesMode?: string;
  /**
  * Whether to include the disks in the backup. If set to false, only the cluster configuration will be backed up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#include_disks ClusterMaas#include_disks}
  */
  readonly includeDisks?: boolean | cdktf.IResolvable;
  /**
  * The list of Kubernetes namespaces to include in the backup. If not specified, all namespaces will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#namespaces ClusterMaas#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Prefix for the backup name. The backup name will be of the format <prefix>-<cluster-name>-<timestamp>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#prefix ClusterMaas#prefix}
  */
  readonly prefix: string;
  /**
  * The schedule for the backup. The schedule is specified in cron format. For example, to run the backup every day at 1:00 AM, the schedule should be set to `0 1 * * *`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#schedule ClusterMaas#schedule}
  */
  readonly schedule: string;
}

export function clusterMaasBackupPolicyToTerraform(struct?: ClusterMaasBackupPolicyOutputReference | ClusterMaasBackupPolicy): any {
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


export function clusterMaasBackupPolicyToHclTerraform(struct?: ClusterMaasBackupPolicyOutputReference | ClusterMaasBackupPolicy): any {
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

export class ClusterMaasBackupPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterMaasBackupPolicy | undefined {
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

  public set internalValue(value: ClusterMaasBackupPolicy | undefined) {
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
export interface ClusterMaasCloudConfig {
  /**
  * Domain name in which the cluster to be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#domain ClusterMaas#domain}
  */
  readonly domain: string;
  /**
  * Whether to enable LXD VM. Default is `false`. Available once **Palette with LXD support** is released.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#enable_lxd_vm ClusterMaas#enable_lxd_vm}
  */
  readonly enableLxdVm?: boolean | cdktf.IResolvable;
  /**
  * A list of NTP servers to use instead of the machine image's default NTP server list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#ntp_servers ClusterMaas#ntp_servers}
  */
  readonly ntpServers?: string[];
}

export function clusterMaasCloudConfigToTerraform(struct?: ClusterMaasCloudConfigOutputReference | ClusterMaasCloudConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    enable_lxd_vm: cdktf.booleanToTerraform(struct!.enableLxdVm),
    ntp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ntpServers),
  }
}


export function clusterMaasCloudConfigToHclTerraform(struct?: ClusterMaasCloudConfigOutputReference | ClusterMaasCloudConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_lxd_vm: {
      value: cdktf.booleanToHclTerraform(struct!.enableLxdVm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ntp_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ntpServers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterMaasCloudConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterMaasCloudConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._enableLxdVm !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLxdVm = this._enableLxdVm;
    }
    if (this._ntpServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServers = this._ntpServers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterMaasCloudConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domain = undefined;
      this._enableLxdVm = undefined;
      this._ntpServers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domain = value.domain;
      this._enableLxdVm = value.enableLxdVm;
      this._ntpServers = value.ntpServers;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // enable_lxd_vm - computed: false, optional: true, required: false
  private _enableLxdVm?: boolean | cdktf.IResolvable; 
  public get enableLxdVm() {
    return this.getBooleanAttribute('enable_lxd_vm');
  }
  public set enableLxdVm(value: boolean | cdktf.IResolvable) {
    this._enableLxdVm = value;
  }
  public resetEnableLxdVm() {
    this._enableLxdVm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLxdVmInput() {
    return this._enableLxdVm;
  }

  // ntp_servers - computed: false, optional: true, required: false
  private _ntpServers?: string[]; 
  public get ntpServers() {
    return cdktf.Fn.tolist(this.getListAttribute('ntp_servers'));
  }
  public set ntpServers(value: string[]) {
    this._ntpServers = value;
  }
  public resetNtpServers() {
    this._ntpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServersInput() {
    return this._ntpServers;
  }
}
export interface ClusterMaasClusterProfilePackManifest {
  /**
  * The content of the manifest. The content is the YAML content of the manifest. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#content ClusterMaas#content}
  */
  readonly content: string;
  /**
  * The name of the manifest. The name must be unique within the pack. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#name ClusterMaas#name}
  */
  readonly name: string;
}

export function clusterMaasClusterProfilePackManifestToTerraform(struct?: ClusterMaasClusterProfilePackManifest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function clusterMaasClusterProfilePackManifestToHclTerraform(struct?: ClusterMaasClusterProfilePackManifest | cdktf.IResolvable): any {
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

export class ClusterMaasClusterProfilePackManifestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterMaasClusterProfilePackManifest | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterMaasClusterProfilePackManifest | cdktf.IResolvable | undefined) {
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

export class ClusterMaasClusterProfilePackManifestList extends cdktf.ComplexList {
  public internalValue? : ClusterMaasClusterProfilePackManifest[] | cdktf.IResolvable

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
  public get(index: number): ClusterMaasClusterProfilePackManifestOutputReference {
    return new ClusterMaasClusterProfilePackManifestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterMaasClusterProfilePack {
  /**
  * The name of the pack. The name must be unique within the cluster profile. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#name ClusterMaas#name}
  */
  readonly name: string;
  /**
  * The registry name of the pack. The registry name is the human-readable name of the registry. This attribute can be used instead of `registry_uid` for better readability. If `uid` is not provided, this field can be used along with `name` and `tag` to resolve the pack UID internally. Either `registry_uid` or `registry_name` can be specified, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#registry_name ClusterMaas#registry_name}
  */
  readonly registryName?: string;
  /**
  * The registry UID of the pack. The registry UID is the unique identifier of the registry. This attribute is required if there is more than one registry that contains a pack with the same name. If `uid` is not provided, this field is required along with `name` and `tag` to resolve the pack UID internally. Either `registry_uid` or `registry_name` can be specified, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#registry_uid ClusterMaas#registry_uid}
  */
  readonly registryUid?: string;
  /**
  * The tag of the pack. The tag is the version of the pack. This attribute is required if the pack type is `spectro` or `helm`. If `uid` is not provided, this field is required along with `name` and `registry_uid` (or `registry_name`) to resolve the pack UID internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#tag ClusterMaas#tag}
  */
  readonly tag?: string;
  /**
  * The type of the pack. Allowed values are `spectro`, `manifest`, `helm`, or `oci`. The default value is spectro. If using an OCI registry for pack, set the type to `oci`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#type ClusterMaas#type}
  */
  readonly type?: string;
  /**
  * The unique identifier of the pack. The value can be looked up using the [`spectrocloud_pack`](https://registry.terraform.io/providers/spectrocloud/spectrocloud/latest/docs/data-sources/pack) data source. This value is required if the pack type is `spectro` and for `helm` if the chart is from a public helm registry. If not provided, all of `name`, `tag`, and `registry_uid` must be specified to resolve the pack UID internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#uid ClusterMaas#uid}
  */
  readonly uid?: string;
  /**
  * The values of the pack. The values are the configuration values of the pack. The values are specified in YAML format. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#values ClusterMaas#values}
  */
  readonly values?: string;
  /**
  * manifest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#manifest ClusterMaas#manifest}
  */
  readonly manifest?: ClusterMaasClusterProfilePackManifest[] | cdktf.IResolvable;
}

export function clusterMaasClusterProfilePackToTerraform(struct?: ClusterMaasClusterProfilePack | cdktf.IResolvable): any {
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
    manifest: cdktf.listMapper(clusterMaasClusterProfilePackManifestToTerraform, true)(struct!.manifest),
  }
}


export function clusterMaasClusterProfilePackToHclTerraform(struct?: ClusterMaasClusterProfilePack | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(clusterMaasClusterProfilePackManifestToHclTerraform, true)(struct!.manifest),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterMaasClusterProfilePackManifestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterMaasClusterProfilePackOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterMaasClusterProfilePack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterMaasClusterProfilePack | cdktf.IResolvable | undefined) {
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
  private _manifest = new ClusterMaasClusterProfilePackManifestList(this, "manifest", false);
  public get manifest() {
    return this._manifest;
  }
  public putManifest(value: ClusterMaasClusterProfilePackManifest[] | cdktf.IResolvable) {
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

export class ClusterMaasClusterProfilePackList extends cdktf.ComplexList {
  public internalValue? : ClusterMaasClusterProfilePack[] | cdktf.IResolvable

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
  public get(index: number): ClusterMaasClusterProfilePackOutputReference {
    return new ClusterMaasClusterProfilePackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterMaasClusterProfile {
  /**
  * The ID of the cluster profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#id ClusterMaas#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A map of cluster profile variables, specified as key-value pairs. For example: `priority = "5"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#variables ClusterMaas#variables}
  */
  readonly variables?: { [key: string]: string };
  /**
  * pack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#pack ClusterMaas#pack}
  */
  readonly pack?: ClusterMaasClusterProfilePack[] | cdktf.IResolvable;
}

export function clusterMaasClusterProfileToTerraform(struct?: ClusterMaasClusterProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.variables),
    pack: cdktf.listMapper(clusterMaasClusterProfilePackToTerraform, true)(struct!.pack),
  }
}


export function clusterMaasClusterProfileToHclTerraform(struct?: ClusterMaasClusterProfile | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(clusterMaasClusterProfilePackToHclTerraform, true)(struct!.pack),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterMaasClusterProfilePackList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterMaasClusterProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterMaasClusterProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterMaasClusterProfile | cdktf.IResolvable | undefined) {
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
  private _pack = new ClusterMaasClusterProfilePackList(this, "pack", false);
  public get pack() {
    return this._pack;
  }
  public putPack(value: ClusterMaasClusterProfilePack[] | cdktf.IResolvable) {
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

export class ClusterMaasClusterProfileList extends cdktf.ComplexList {
  public internalValue? : ClusterMaasClusterProfile[] | cdktf.IResolvable

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
  public get(index: number): ClusterMaasClusterProfileOutputReference {
    return new ClusterMaasClusterProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterMaasClusterRbacBindingSubjects {
  /**
  * The name of the subject. Required if 'type' is set to 'User' or 'Group'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#name ClusterMaas#name}
  */
  readonly name: string;
  /**
  * The Kubernetes namespace of the subject. Required if 'type' is set to 'ServiceAccount'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#namespace ClusterMaas#namespace}
  */
  readonly namespace?: string;
  /**
  * The type of the subject. Can be one of the following values: `User`, `Group`, or `ServiceAccount`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#type ClusterMaas#type}
  */
  readonly type: string;
}

export function clusterMaasClusterRbacBindingSubjectsToTerraform(struct?: ClusterMaasClusterRbacBindingSubjects | cdktf.IResolvable): any {
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


export function clusterMaasClusterRbacBindingSubjectsToHclTerraform(struct?: ClusterMaasClusterRbacBindingSubjects | cdktf.IResolvable): any {
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

export class ClusterMaasClusterRbacBindingSubjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterMaasClusterRbacBindingSubjects | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterMaasClusterRbacBindingSubjects | cdktf.IResolvable | undefined) {
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

export class ClusterMaasClusterRbacBindingSubjectsList extends cdktf.ComplexList {
  public internalValue? : ClusterMaasClusterRbacBindingSubjects[] | cdktf.IResolvable

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
  public get(index: number): ClusterMaasClusterRbacBindingSubjectsOutputReference {
    return new ClusterMaasClusterRbacBindingSubjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterMaasClusterRbacBinding {
  /**
  * The Kubernetes namespace of the RBAC binding. Required if 'type' is set to 'RoleBinding'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#namespace ClusterMaas#namespace}
  */
  readonly namespace?: string;
  /**
  * The role of the RBAC binding. Required if 'type' is set to 'RoleBinding'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#role ClusterMaas#role}
  */
  readonly role?: { [key: string]: string };
  /**
  * The type of the RBAC binding. Can be one of the following values: `RoleBinding`, or `ClusterRoleBinding`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#type ClusterMaas#type}
  */
  readonly type: string;
  /**
  * subjects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#subjects ClusterMaas#subjects}
  */
  readonly subjects?: ClusterMaasClusterRbacBindingSubjects[] | cdktf.IResolvable;
}

export function clusterMaasClusterRbacBindingToTerraform(struct?: ClusterMaasClusterRbacBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    role: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    subjects: cdktf.listMapper(clusterMaasClusterRbacBindingSubjectsToTerraform, true)(struct!.subjects),
  }
}


export function clusterMaasClusterRbacBindingToHclTerraform(struct?: ClusterMaasClusterRbacBinding | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(clusterMaasClusterRbacBindingSubjectsToHclTerraform, true)(struct!.subjects),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterMaasClusterRbacBindingSubjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterMaasClusterRbacBindingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterMaasClusterRbacBinding | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterMaasClusterRbacBinding | cdktf.IResolvable | undefined) {
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
  private _subjects = new ClusterMaasClusterRbacBindingSubjectsList(this, "subjects", false);
  public get subjects() {
    return this._subjects;
  }
  public putSubjects(value: ClusterMaasClusterRbacBindingSubjects[] | cdktf.IResolvable) {
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

export class ClusterMaasClusterRbacBindingList extends cdktf.ComplexList {
  public internalValue? : ClusterMaasClusterRbacBinding[] | cdktf.IResolvable

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
  public get(index: number): ClusterMaasClusterRbacBindingOutputReference {
    return new ClusterMaasClusterRbacBindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterMaasClusterTemplateClusterProfile {
  /**
  * The UID of the cluster profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#id ClusterMaas#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A map of cluster profile variables, specified as key-value pairs. For example: `priority = "5"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#variables ClusterMaas#variables}
  */
  readonly variables?: { [key: string]: string };
}

export function clusterMaasClusterTemplateClusterProfileToTerraform(struct?: ClusterMaasClusterTemplateClusterProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.variables),
  }
}


export function clusterMaasClusterTemplateClusterProfileToHclTerraform(struct?: ClusterMaasClusterTemplateClusterProfile | cdktf.IResolvable): any {
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

export class ClusterMaasClusterTemplateClusterProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterMaasClusterTemplateClusterProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterMaasClusterTemplateClusterProfile | cdktf.IResolvable | undefined) {
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

export class ClusterMaasClusterTemplateClusterProfileList extends cdktf.ComplexList {
  public internalValue? : ClusterMaasClusterTemplateClusterProfile[] | cdktf.IResolvable

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
  public get(index: number): ClusterMaasClusterTemplateClusterProfileOutputReference {
    return new ClusterMaasClusterTemplateClusterProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterMaasClusterTemplate {
  /**
  * The ID of the cluster template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#id ClusterMaas#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * cluster_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#cluster_profile ClusterMaas#cluster_profile}
  */
  readonly clusterProfile?: ClusterMaasClusterTemplateClusterProfile[] | cdktf.IResolvable;
}

export function clusterMaasClusterTemplateToTerraform(struct?: ClusterMaasClusterTemplateOutputReference | ClusterMaasClusterTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    cluster_profile: cdktf.listMapper(clusterMaasClusterTemplateClusterProfileToTerraform, true)(struct!.clusterProfile),
  }
}


export function clusterMaasClusterTemplateToHclTerraform(struct?: ClusterMaasClusterTemplateOutputReference | ClusterMaasClusterTemplate): any {
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
      value: cdktf.listMapperHcl(clusterMaasClusterTemplateClusterProfileToHclTerraform, true)(struct!.clusterProfile),
      isBlock: true,
      type: "set",
      storageClassType: "ClusterMaasClusterTemplateClusterProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterMaasClusterTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterMaasClusterTemplate | undefined {
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

  public set internalValue(value: ClusterMaasClusterTemplate | undefined) {
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
  private _clusterProfile = new ClusterMaasClusterTemplateClusterProfileList(this, "cluster_profile", true);
  public get clusterProfile() {
    return this._clusterProfile;
  }
  public putClusterProfile(value: ClusterMaasClusterTemplateClusterProfile[] | cdktf.IResolvable) {
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
export interface ClusterMaasHostConfig {
  /**
  * The external traffic policy for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#external_traffic_policy ClusterMaas#external_traffic_policy}
  */
  readonly externalTrafficPolicy?: string;
  /**
  * The type of endpoint for the cluster. Can be either 'Ingress' or 'LoadBalancer'. The default is 'Ingress'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#host_endpoint_type ClusterMaas#host_endpoint_type}
  */
  readonly hostEndpointType?: string;
  /**
  * The host for the Ingress endpoint. Required if 'host_endpoint_type' is set to 'Ingress'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#ingress_host ClusterMaas#ingress_host}
  */
  readonly ingressHost?: string;
  /**
  * The source ranges for the load balancer. Required if 'host_endpoint_type' is set to 'LoadBalancer'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#load_balancer_source_ranges ClusterMaas#load_balancer_source_ranges}
  */
  readonly loadBalancerSourceRanges?: string;
}

export function clusterMaasHostConfigToTerraform(struct?: ClusterMaasHostConfig | cdktf.IResolvable): any {
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


export function clusterMaasHostConfigToHclTerraform(struct?: ClusterMaasHostConfig | cdktf.IResolvable): any {
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

export class ClusterMaasHostConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterMaasHostConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterMaasHostConfig | cdktf.IResolvable | undefined) {
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

export class ClusterMaasHostConfigList extends cdktf.ComplexList {
  public internalValue? : ClusterMaasHostConfig[] | cdktf.IResolvable

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
  public get(index: number): ClusterMaasHostConfigOutputReference {
    return new ClusterMaasHostConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterMaasLocationConfig {
  /**
  * The country code of the country the cluster is located in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#country_code ClusterMaas#country_code}
  */
  readonly countryCode?: string;
  /**
  * The name of the country.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#country_name ClusterMaas#country_name}
  */
  readonly countryName?: string;
  /**
  * The latitude coordinates value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#latitude ClusterMaas#latitude}
  */
  readonly latitude: number;
  /**
  * The longitude coordinates value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#longitude ClusterMaas#longitude}
  */
  readonly longitude: number;
  /**
  * The region code of where the cluster is located in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#region_code ClusterMaas#region_code}
  */
  readonly regionCode?: string;
  /**
  * The name of the region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#region_name ClusterMaas#region_name}
  */
  readonly regionName?: string;
}

export function clusterMaasLocationConfigToTerraform(struct?: ClusterMaasLocationConfig | cdktf.IResolvable): any {
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


export function clusterMaasLocationConfigToHclTerraform(struct?: ClusterMaasLocationConfig | cdktf.IResolvable): any {
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

export class ClusterMaasLocationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterMaasLocationConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterMaasLocationConfig | cdktf.IResolvable | undefined) {
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

export class ClusterMaasLocationConfigList extends cdktf.ComplexList {
  public internalValue? : ClusterMaasLocationConfig[] | cdktf.IResolvable

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
  public get(index: number): ClusterMaasLocationConfigOutputReference {
    return new ClusterMaasLocationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterMaasMachinePoolInstanceType {
  /**
  * Minimum number of CPU required for the machine pool node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#min_cpu ClusterMaas#min_cpu}
  */
  readonly minCpu: number;
  /**
  * Minimum memory in MB required for the machine pool node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#min_memory_mb ClusterMaas#min_memory_mb}
  */
  readonly minMemoryMb: number;
}

export function clusterMaasMachinePoolInstanceTypeToTerraform(struct?: ClusterMaasMachinePoolInstanceTypeOutputReference | ClusterMaasMachinePoolInstanceType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_cpu: cdktf.numberToTerraform(struct!.minCpu),
    min_memory_mb: cdktf.numberToTerraform(struct!.minMemoryMb),
  }
}


export function clusterMaasMachinePoolInstanceTypeToHclTerraform(struct?: ClusterMaasMachinePoolInstanceTypeOutputReference | ClusterMaasMachinePoolInstanceType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_cpu: {
      value: cdktf.numberToHclTerraform(struct!.minCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_memory_mb: {
      value: cdktf.numberToHclTerraform(struct!.minMemoryMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterMaasMachinePoolInstanceTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterMaasMachinePoolInstanceType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpu = this._minCpu;
    }
    if (this._minMemoryMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemoryMb = this._minMemoryMb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterMaasMachinePoolInstanceType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minCpu = undefined;
      this._minMemoryMb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minCpu = value.minCpu;
      this._minMemoryMb = value.minMemoryMb;
    }
  }

  // min_cpu - computed: false, optional: false, required: true
  private _minCpu?: number; 
  public get minCpu() {
    return this.getNumberAttribute('min_cpu');
  }
  public set minCpu(value: number) {
    this._minCpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuInput() {
    return this._minCpu;
  }

  // min_memory_mb - computed: false, optional: false, required: true
  private _minMemoryMb?: number; 
  public get minMemoryMb() {
    return this.getNumberAttribute('min_memory_mb');
  }
  public set minMemoryMb(value: number) {
    this._minMemoryMb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemoryMbInput() {
    return this._minMemoryMb;
  }
}
export interface ClusterMaasMachinePoolNetwork {
  /**
  * The name of the network in which VMs are created/located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#network_name ClusterMaas#network_name}
  */
  readonly networkName: string;
  /**
  * The UID of the parent pool which allocates IPs for this IPPool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#parent_pool_uid ClusterMaas#parent_pool_uid}
  */
  readonly parentPoolUid?: string;
  /**
  * Whether to use static IP. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#static_ip ClusterMaas#static_ip}
  */
  readonly staticIp?: boolean | cdktf.IResolvable;
}

export function clusterMaasMachinePoolNetworkToTerraform(struct?: ClusterMaasMachinePoolNetworkOutputReference | ClusterMaasMachinePoolNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_name: cdktf.stringToTerraform(struct!.networkName),
    parent_pool_uid: cdktf.stringToTerraform(struct!.parentPoolUid),
    static_ip: cdktf.booleanToTerraform(struct!.staticIp),
  }
}


export function clusterMaasMachinePoolNetworkToHclTerraform(struct?: ClusterMaasMachinePoolNetworkOutputReference | ClusterMaasMachinePoolNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_name: {
      value: cdktf.stringToHclTerraform(struct!.networkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_pool_uid: {
      value: cdktf.stringToHclTerraform(struct!.parentPoolUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_ip: {
      value: cdktf.booleanToHclTerraform(struct!.staticIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterMaasMachinePoolNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterMaasMachinePoolNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkName = this._networkName;
    }
    if (this._parentPoolUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentPoolUid = this._parentPoolUid;
    }
    if (this._staticIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIp = this._staticIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterMaasMachinePoolNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkName = undefined;
      this._parentPoolUid = undefined;
      this._staticIp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkName = value.networkName;
      this._parentPoolUid = value.parentPoolUid;
      this._staticIp = value.staticIp;
    }
  }

  // network_name - computed: false, optional: false, required: true
  private _networkName?: string; 
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
  public set networkName(value: string) {
    this._networkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNameInput() {
    return this._networkName;
  }

  // parent_pool_uid - computed: false, optional: true, required: false
  private _parentPoolUid?: string; 
  public get parentPoolUid() {
    return this.getStringAttribute('parent_pool_uid');
  }
  public set parentPoolUid(value: string) {
    this._parentPoolUid = value;
  }
  public resetParentPoolUid() {
    this._parentPoolUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentPoolUidInput() {
    return this._parentPoolUid;
  }

  // static_ip - computed: false, optional: true, required: false
  private _staticIp?: boolean | cdktf.IResolvable; 
  public get staticIp() {
    return this.getBooleanAttribute('static_ip');
  }
  public set staticIp(value: boolean | cdktf.IResolvable) {
    this._staticIp = value;
  }
  public resetStaticIp() {
    this._staticIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpInput() {
    return this._staticIp;
  }
}
export interface ClusterMaasMachinePoolNode {
  /**
  * The action to perform on the node. Valid values are: `cordon`, `uncordon`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#action ClusterMaas#action}
  */
  readonly action: string;
  /**
  * The node_id of the node, For example `i-07f899a33dee624f7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#node_id ClusterMaas#node_id}
  */
  readonly nodeId: string;
}

export function clusterMaasMachinePoolNodeToTerraform(struct?: ClusterMaasMachinePoolNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    node_id: cdktf.stringToTerraform(struct!.nodeId),
  }
}


export function clusterMaasMachinePoolNodeToHclTerraform(struct?: ClusterMaasMachinePoolNode | cdktf.IResolvable): any {
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

export class ClusterMaasMachinePoolNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterMaasMachinePoolNode | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterMaasMachinePoolNode | cdktf.IResolvable | undefined) {
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

export class ClusterMaasMachinePoolNodeList extends cdktf.ComplexList {
  public internalValue? : ClusterMaasMachinePoolNode[] | cdktf.IResolvable

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
  public get(index: number): ClusterMaasMachinePoolNodeOutputReference {
    return new ClusterMaasMachinePoolNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterMaasMachinePoolPlacement {
  /**
  * The name of the resource pool in the Maas cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#resource_pool ClusterMaas#resource_pool}
  */
  readonly resourcePool: string;
}

export function clusterMaasMachinePoolPlacementToTerraform(struct?: ClusterMaasMachinePoolPlacementOutputReference | ClusterMaasMachinePoolPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_pool: cdktf.stringToTerraform(struct!.resourcePool),
  }
}


export function clusterMaasMachinePoolPlacementToHclTerraform(struct?: ClusterMaasMachinePoolPlacementOutputReference | ClusterMaasMachinePoolPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_pool: {
      value: cdktf.stringToHclTerraform(struct!.resourcePool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterMaasMachinePoolPlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterMaasMachinePoolPlacement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourcePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePool = this._resourcePool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterMaasMachinePoolPlacement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourcePool = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourcePool = value.resourcePool;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_pool - computed: false, optional: false, required: true
  private _resourcePool?: string; 
  public get resourcePool() {
    return this.getStringAttribute('resource_pool');
  }
  public set resourcePool(value: string) {
    this._resourcePool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolInput() {
    return this._resourcePool;
  }
}
export interface ClusterMaasMachinePoolTaints {
  /**
  * The effect of the taint. Allowed values are: `NoSchedule`, `PreferNoSchedule` or `NoExecute`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#effect ClusterMaas#effect}
  */
  readonly effect: string;
  /**
  * The key of the taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#key ClusterMaas#key}
  */
  readonly key: string;
  /**
  * The value of the taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#value ClusterMaas#value}
  */
  readonly value: string;
}

export function clusterMaasMachinePoolTaintsToTerraform(struct?: ClusterMaasMachinePoolTaints | cdktf.IResolvable): any {
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


export function clusterMaasMachinePoolTaintsToHclTerraform(struct?: ClusterMaasMachinePoolTaints | cdktf.IResolvable): any {
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

export class ClusterMaasMachinePoolTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterMaasMachinePoolTaints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterMaasMachinePoolTaints | cdktf.IResolvable | undefined) {
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

export class ClusterMaasMachinePoolTaintsList extends cdktf.ComplexList {
  public internalValue? : ClusterMaasMachinePoolTaints[] | cdktf.IResolvable

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
  public get(index: number): ClusterMaasMachinePoolTaintsOutputReference {
    return new ClusterMaasMachinePoolTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterMaasMachinePool {
  /**
  * Additional labels to be applied to the machine pool. Labels must be in the form of `key:value`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#additional_labels ClusterMaas#additional_labels}
  */
  readonly additionalLabels?: { [key: string]: string };
  /**
  * Availability zones in which the machine pool nodes to be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#azs ClusterMaas#azs}
  */
  readonly azs: string[];
  /**
  * Whether this machine pool is a control plane. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#control_plane ClusterMaas#control_plane}
  */
  readonly controlPlane?: boolean | cdktf.IResolvable;
  /**
  * Whether this machine pool is a control plane and a worker. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#control_plane_as_worker ClusterMaas#control_plane_as_worker}
  */
  readonly controlPlaneAsWorker?: boolean | cdktf.IResolvable;
  /**
  * Number of nodes in the machine pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#count ClusterMaas#count}
  */
  readonly count: number;
  /**
  * Maximum number of nodes in the machine pool. This is used for autoscaling the machine pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#max ClusterMaas#max}
  */
  readonly max?: number;
  /**
  * Minimum number of nodes in the machine pool. This is used for autoscaling the machine pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#min ClusterMaas#min}
  */
  readonly min?: number;
  /**
  * Name of the machine pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#name ClusterMaas#name}
  */
  readonly name: string;
  /**
  * Minimum number of seconds node should be Ready, before the next node is selected for repave. Default value is `0`, Applicable only for worker pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#node_repave_interval ClusterMaas#node_repave_interval}
  */
  readonly nodeRepaveInterval?: number;
  /**
  * Node tags to dynamically place nodes in a pool by using MAAS automatic tags. Specify the tag values that you want to apply to all nodes in the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#node_tags ClusterMaas#node_tags}
  */
  readonly nodeTags?: string[];
  /**
  * Update strategy for the machine pool. Valid values are `RollingUpdateScaleOut` and `RollingUpdateScaleIn`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#update_strategy ClusterMaas#update_strategy}
  */
  readonly updateStrategy?: string;
  /**
  * Whether to use LXD VM. Default is `false`. Available once **Palette with LXD support** is released.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#use_lxd_vm ClusterMaas#use_lxd_vm}
  */
  readonly useLxdVm?: boolean | cdktf.IResolvable;
  /**
  * instance_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#instance_type ClusterMaas#instance_type}
  */
  readonly instanceType: ClusterMaasMachinePoolInstanceType;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#network ClusterMaas#network}
  */
  readonly network?: ClusterMaasMachinePoolNetwork;
  /**
  * node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#node ClusterMaas#node}
  */
  readonly nodeAttribute?: ClusterMaasMachinePoolNode[] | cdktf.IResolvable;
  /**
  * placement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#placement ClusterMaas#placement}
  */
  readonly placement: ClusterMaasMachinePoolPlacement;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#taints ClusterMaas#taints}
  */
  readonly taints?: ClusterMaasMachinePoolTaints[] | cdktf.IResolvable;
}

export function clusterMaasMachinePoolToTerraform(struct?: ClusterMaasMachinePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalLabels),
    azs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.azs),
    control_plane: cdktf.booleanToTerraform(struct!.controlPlane),
    control_plane_as_worker: cdktf.booleanToTerraform(struct!.controlPlaneAsWorker),
    count: cdktf.numberToTerraform(struct!.count),
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
    name: cdktf.stringToTerraform(struct!.name),
    node_repave_interval: cdktf.numberToTerraform(struct!.nodeRepaveInterval),
    node_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeTags),
    update_strategy: cdktf.stringToTerraform(struct!.updateStrategy),
    use_lxd_vm: cdktf.booleanToTerraform(struct!.useLxdVm),
    instance_type: clusterMaasMachinePoolInstanceTypeToTerraform(struct!.instanceType),
    network: clusterMaasMachinePoolNetworkToTerraform(struct!.network),
    node: cdktf.listMapper(clusterMaasMachinePoolNodeToTerraform, true)(struct!.nodeAttribute),
    placement: clusterMaasMachinePoolPlacementToTerraform(struct!.placement),
    taints: cdktf.listMapper(clusterMaasMachinePoolTaintsToTerraform, true)(struct!.taints),
  }
}


export function clusterMaasMachinePoolToHclTerraform(struct?: ClusterMaasMachinePool | cdktf.IResolvable): any {
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
    azs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.azs),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
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
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_repave_interval: {
      value: cdktf.numberToHclTerraform(struct!.nodeRepaveInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeTags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    update_strategy: {
      value: cdktf.stringToHclTerraform(struct!.updateStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_lxd_vm: {
      value: cdktf.booleanToHclTerraform(struct!.useLxdVm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_type: {
      value: clusterMaasMachinePoolInstanceTypeToHclTerraform(struct!.instanceType),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterMaasMachinePoolInstanceTypeList",
    },
    network: {
      value: clusterMaasMachinePoolNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterMaasMachinePoolNetworkList",
    },
    node: {
      value: cdktf.listMapperHcl(clusterMaasMachinePoolNodeToHclTerraform, true)(struct!.nodeAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterMaasMachinePoolNodeList",
    },
    placement: {
      value: clusterMaasMachinePoolPlacementToHclTerraform(struct!.placement),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterMaasMachinePoolPlacementList",
    },
    taints: {
      value: cdktf.listMapperHcl(clusterMaasMachinePoolTaintsToHclTerraform, true)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterMaasMachinePoolTaintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterMaasMachinePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterMaasMachinePool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalLabels = this._additionalLabels;
    }
    if (this._azs !== undefined) {
      hasAnyValues = true;
      internalValueResult.azs = this._azs;
    }
    if (this._controlPlane !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlane = this._controlPlane;
    }
    if (this._controlPlaneAsWorker !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneAsWorker = this._controlPlaneAsWorker;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeRepaveInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeRepaveInterval = this._nodeRepaveInterval;
    }
    if (this._nodeTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTags = this._nodeTags;
    }
    if (this._updateStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateStrategy = this._updateStrategy;
    }
    if (this._useLxdVm !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLxdVm = this._useLxdVm;
    }
    if (this._instanceType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._node?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node?.internalValue;
    }
    if (this._placement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement?.internalValue;
    }
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterMaasMachinePool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalLabels = undefined;
      this._azs = undefined;
      this._controlPlane = undefined;
      this._controlPlaneAsWorker = undefined;
      this._count = undefined;
      this._max = undefined;
      this._min = undefined;
      this._name = undefined;
      this._nodeRepaveInterval = undefined;
      this._nodeTags = undefined;
      this._updateStrategy = undefined;
      this._useLxdVm = undefined;
      this._instanceType.internalValue = undefined;
      this._network.internalValue = undefined;
      this._node.internalValue = undefined;
      this._placement.internalValue = undefined;
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
      this._azs = value.azs;
      this._controlPlane = value.controlPlane;
      this._controlPlaneAsWorker = value.controlPlaneAsWorker;
      this._count = value.count;
      this._max = value.max;
      this._min = value.min;
      this._name = value.name;
      this._nodeRepaveInterval = value.nodeRepaveInterval;
      this._nodeTags = value.nodeTags;
      this._updateStrategy = value.updateStrategy;
      this._useLxdVm = value.useLxdVm;
      this._instanceType.internalValue = value.instanceType;
      this._network.internalValue = value.network;
      this._node.internalValue = value.nodeAttribute;
      this._placement.internalValue = value.placement;
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

  // azs - computed: false, optional: false, required: true
  private _azs?: string[]; 
  public get azs() {
    return cdktf.Fn.tolist(this.getListAttribute('azs'));
  }
  public set azs(value: string[]) {
    this._azs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azsInput() {
    return this._azs;
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

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
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

  // node_repave_interval - computed: false, optional: true, required: false
  private _nodeRepaveInterval?: number; 
  public get nodeRepaveInterval() {
    return this.getNumberAttribute('node_repave_interval');
  }
  public set nodeRepaveInterval(value: number) {
    this._nodeRepaveInterval = value;
  }
  public resetNodeRepaveInterval() {
    this._nodeRepaveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeRepaveIntervalInput() {
    return this._nodeRepaveInterval;
  }

  // node_tags - computed: false, optional: true, required: false
  private _nodeTags?: string[]; 
  public get nodeTags() {
    return cdktf.Fn.tolist(this.getListAttribute('node_tags'));
  }
  public set nodeTags(value: string[]) {
    this._nodeTags = value;
  }
  public resetNodeTags() {
    this._nodeTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTagsInput() {
    return this._nodeTags;
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

  // use_lxd_vm - computed: false, optional: true, required: false
  private _useLxdVm?: boolean | cdktf.IResolvable; 
  public get useLxdVm() {
    return this.getBooleanAttribute('use_lxd_vm');
  }
  public set useLxdVm(value: boolean | cdktf.IResolvable) {
    this._useLxdVm = value;
  }
  public resetUseLxdVm() {
    this._useLxdVm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLxdVmInput() {
    return this._useLxdVm;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType = new ClusterMaasMachinePoolInstanceTypeOutputReference(this, "instance_type");
  public get instanceType() {
    return this._instanceType;
  }
  public putInstanceType(value: ClusterMaasMachinePoolInstanceType) {
    this._instanceType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new ClusterMaasMachinePoolNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: ClusterMaasMachinePoolNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // node - computed: false, optional: true, required: false
  private _node = new ClusterMaasMachinePoolNodeList(this, "node", false);
  public get nodeAttribute() {
    return this._node;
  }
  public putNodeAttribute(value: ClusterMaasMachinePoolNode[] | cdktf.IResolvable) {
    this._node.internalValue = value;
  }
  public resetNodeAttribute() {
    this._node.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node.internalValue;
  }

  // placement - computed: false, optional: false, required: true
  private _placement = new ClusterMaasMachinePoolPlacementOutputReference(this, "placement");
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: ClusterMaasMachinePoolPlacement) {
    this._placement.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new ClusterMaasMachinePoolTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: ClusterMaasMachinePoolTaints[] | cdktf.IResolvable) {
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

export class ClusterMaasMachinePoolList extends cdktf.ComplexList {
  public internalValue? : ClusterMaasMachinePool[] | cdktf.IResolvable

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
  public get(index: number): ClusterMaasMachinePoolOutputReference {
    return new ClusterMaasMachinePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterMaasNamespaces {
  /**
  * Name of the namespace. This is the name of the Kubernetes namespace in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#name ClusterMaas#name}
  */
  readonly name: string;
  /**
  * Resource allocation for the namespace. This is a map containing the resource type and the resource value. For example, `{cpu_cores: '2', memory_MiB: '2048', gpu_limit: '1', gpu_provider: 'nvidia'}`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#resource_allocation ClusterMaas#resource_allocation}
  */
  readonly resourceAllocation: { [key: string]: string };
}

export function clusterMaasNamespacesToTerraform(struct?: ClusterMaasNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resource_allocation: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceAllocation),
  }
}


export function clusterMaasNamespacesToHclTerraform(struct?: ClusterMaasNamespaces | cdktf.IResolvable): any {
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

export class ClusterMaasNamespacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterMaasNamespaces | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterMaasNamespaces | cdktf.IResolvable | undefined) {
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

export class ClusterMaasNamespacesList extends cdktf.ComplexList {
  public internalValue? : ClusterMaasNamespaces[] | cdktf.IResolvable

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
  public get(index: number): ClusterMaasNamespacesOutputReference {
    return new ClusterMaasNamespacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterMaasScanPolicy {
  /**
  * The schedule for configuration scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#configuration_scan_schedule ClusterMaas#configuration_scan_schedule}
  */
  readonly configurationScanSchedule: string;
  /**
  * The schedule for conformance scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#conformance_scan_schedule ClusterMaas#conformance_scan_schedule}
  */
  readonly conformanceScanSchedule: string;
  /**
  * The schedule for penetration scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#penetration_scan_schedule ClusterMaas#penetration_scan_schedule}
  */
  readonly penetrationScanSchedule: string;
}

export function clusterMaasScanPolicyToTerraform(struct?: ClusterMaasScanPolicyOutputReference | ClusterMaasScanPolicy): any {
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


export function clusterMaasScanPolicyToHclTerraform(struct?: ClusterMaasScanPolicyOutputReference | ClusterMaasScanPolicy): any {
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

export class ClusterMaasScanPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterMaasScanPolicy | undefined {
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

  public set internalValue(value: ClusterMaasScanPolicy | undefined) {
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
export interface ClusterMaasTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#create ClusterMaas#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#delete ClusterMaas#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#update ClusterMaas#update}
  */
  readonly update?: string;
}

export function clusterMaasTimeoutsToTerraform(struct?: ClusterMaasTimeouts | cdktf.IResolvable): any {
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


export function clusterMaasTimeoutsToHclTerraform(struct?: ClusterMaasTimeouts | cdktf.IResolvable): any {
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

export class ClusterMaasTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterMaasTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterMaasTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas spectrocloud_cluster_maas}
*/
export class ClusterMaas extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spectrocloud_cluster_maas";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterMaas resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterMaas to import
  * @param importFromId The id of the existing ClusterMaas that should be imported. Refer to the {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterMaas to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spectrocloud_cluster_maas", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cluster_maas spectrocloud_cluster_maas} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterMaasConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterMaasConfig) {
    super(scope, id, {
      terraformResourceType: 'spectrocloud_cluster_maas',
      terraformGeneratorMetadata: {
        providerName: 'spectrocloud',
        providerVersion: '0.26.0',
        providerVersionConstraint: '0.26.0'
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
    this._backupPolicy.internalValue = config.backupPolicy;
    this._cloudConfig.internalValue = config.cloudConfig;
    this._clusterProfile.internalValue = config.clusterProfile;
    this._clusterRbacBinding.internalValue = config.clusterRbacBinding;
    this._clusterTemplate.internalValue = config.clusterTemplate;
    this._hostConfig.internalValue = config.hostConfig;
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

  // cloud_account_id - computed: false, optional: true, required: false
  private _cloudAccountId?: string; 
  public get cloudAccountId() {
    return this.getStringAttribute('cloud_account_id');
  }
  public set cloudAccountId(value: string) {
    this._cloudAccountId = value;
  }
  public resetCloudAccountId() {
    this._cloudAccountId = undefined;
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

  // backup_policy - computed: false, optional: true, required: false
  private _backupPolicy = new ClusterMaasBackupPolicyOutputReference(this, "backup_policy");
  public get backupPolicy() {
    return this._backupPolicy;
  }
  public putBackupPolicy(value: ClusterMaasBackupPolicy) {
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
  private _cloudConfig = new ClusterMaasCloudConfigOutputReference(this, "cloud_config");
  public get cloudConfig() {
    return this._cloudConfig;
  }
  public putCloudConfig(value: ClusterMaasCloudConfig) {
    this._cloudConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudConfigInput() {
    return this._cloudConfig.internalValue;
  }

  // cluster_profile - computed: false, optional: true, required: false
  private _clusterProfile = new ClusterMaasClusterProfileList(this, "cluster_profile", false);
  public get clusterProfile() {
    return this._clusterProfile;
  }
  public putClusterProfile(value: ClusterMaasClusterProfile[] | cdktf.IResolvable) {
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
  private _clusterRbacBinding = new ClusterMaasClusterRbacBindingList(this, "cluster_rbac_binding", false);
  public get clusterRbacBinding() {
    return this._clusterRbacBinding;
  }
  public putClusterRbacBinding(value: ClusterMaasClusterRbacBinding[] | cdktf.IResolvable) {
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
  private _clusterTemplate = new ClusterMaasClusterTemplateOutputReference(this, "cluster_template");
  public get clusterTemplate() {
    return this._clusterTemplate;
  }
  public putClusterTemplate(value: ClusterMaasClusterTemplate) {
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
  private _hostConfig = new ClusterMaasHostConfigList(this, "host_config", false);
  public get hostConfig() {
    return this._hostConfig;
  }
  public putHostConfig(value: ClusterMaasHostConfig[] | cdktf.IResolvable) {
    this._hostConfig.internalValue = value;
  }
  public resetHostConfig() {
    this._hostConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostConfigInput() {
    return this._hostConfig.internalValue;
  }

  // location_config - computed: false, optional: true, required: false
  private _locationConfig = new ClusterMaasLocationConfigList(this, "location_config", false);
  public get locationConfig() {
    return this._locationConfig;
  }
  public putLocationConfig(value: ClusterMaasLocationConfig[] | cdktf.IResolvable) {
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
  private _machinePool = new ClusterMaasMachinePoolList(this, "machine_pool", true);
  public get machinePool() {
    return this._machinePool;
  }
  public putMachinePool(value: ClusterMaasMachinePool[] | cdktf.IResolvable) {
    this._machinePool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machinePoolInput() {
    return this._machinePool.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces = new ClusterMaasNamespacesList(this, "namespaces", false);
  public get namespaces() {
    return this._namespaces;
  }
  public putNamespaces(value: ClusterMaasNamespaces[] | cdktf.IResolvable) {
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
  private _scanPolicy = new ClusterMaasScanPolicyOutputReference(this, "scan_policy");
  public get scanPolicy() {
    return this._scanPolicy;
  }
  public putScanPolicy(value: ClusterMaasScanPolicy) {
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
  private _timeouts = new ClusterMaasTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClusterMaasTimeouts) {
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
      backup_policy: clusterMaasBackupPolicyToTerraform(this._backupPolicy.internalValue),
      cloud_config: clusterMaasCloudConfigToTerraform(this._cloudConfig.internalValue),
      cluster_profile: cdktf.listMapper(clusterMaasClusterProfileToTerraform, true)(this._clusterProfile.internalValue),
      cluster_rbac_binding: cdktf.listMapper(clusterMaasClusterRbacBindingToTerraform, true)(this._clusterRbacBinding.internalValue),
      cluster_template: clusterMaasClusterTemplateToTerraform(this._clusterTemplate.internalValue),
      host_config: cdktf.listMapper(clusterMaasHostConfigToTerraform, true)(this._hostConfig.internalValue),
      location_config: cdktf.listMapper(clusterMaasLocationConfigToTerraform, true)(this._locationConfig.internalValue),
      machine_pool: cdktf.listMapper(clusterMaasMachinePoolToTerraform, true)(this._machinePool.internalValue),
      namespaces: cdktf.listMapper(clusterMaasNamespacesToTerraform, true)(this._namespaces.internalValue),
      scan_policy: clusterMaasScanPolicyToTerraform(this._scanPolicy.internalValue),
      timeouts: clusterMaasTimeoutsToTerraform(this._timeouts.internalValue),
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
      backup_policy: {
        value: clusterMaasBackupPolicyToHclTerraform(this._backupPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterMaasBackupPolicyList",
      },
      cloud_config: {
        value: clusterMaasCloudConfigToHclTerraform(this._cloudConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterMaasCloudConfigList",
      },
      cluster_profile: {
        value: cdktf.listMapperHcl(clusterMaasClusterProfileToHclTerraform, true)(this._clusterProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterMaasClusterProfileList",
      },
      cluster_rbac_binding: {
        value: cdktf.listMapperHcl(clusterMaasClusterRbacBindingToHclTerraform, true)(this._clusterRbacBinding.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterMaasClusterRbacBindingList",
      },
      cluster_template: {
        value: clusterMaasClusterTemplateToHclTerraform(this._clusterTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterMaasClusterTemplateList",
      },
      host_config: {
        value: cdktf.listMapperHcl(clusterMaasHostConfigToHclTerraform, true)(this._hostConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterMaasHostConfigList",
      },
      location_config: {
        value: cdktf.listMapperHcl(clusterMaasLocationConfigToHclTerraform, true)(this._locationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterMaasLocationConfigList",
      },
      machine_pool: {
        value: cdktf.listMapperHcl(clusterMaasMachinePoolToHclTerraform, true)(this._machinePool.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ClusterMaasMachinePoolList",
      },
      namespaces: {
        value: cdktf.listMapperHcl(clusterMaasNamespacesToHclTerraform, true)(this._namespaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterMaasNamespacesList",
      },
      scan_policy: {
        value: clusterMaasScanPolicyToHclTerraform(this._scanPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterMaasScanPolicyList",
      },
      timeouts: {
        value: clusterMaasTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterMaasTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
