// https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterEdgeVsphereConfig extends cdktf.TerraformMetaArguments {
  /**
  * `cluster_meta_attribute` can be used to set additional cluster metadata information, eg `{'nic_name': 'test', 'env': 'stage'}`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#cluster_meta_attribute ClusterEdgeVsphere#cluster_meta_attribute}
  */
  readonly clusterMetaAttribute?: string;
  /**
  * The context of the Edge cluster. Allowed values are `project` or `tenant`. Default is `project`. If  the `project` context is specified, the project name will sourced from the provider configuration parameter [`project_name`](https://registry.terraform.io/providers/spectrocloud/spectrocloud/latest/docs#schema).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#context ClusterEdgeVsphere#context}
  */
  readonly context?: string;
  /**
  * The description of the cluster. Default value is empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#description ClusterEdgeVsphere#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#edge_host_uid ClusterEdgeVsphere#edge_host_uid}
  */
  readonly edgeHostUid: string;
  /**
  * If set to `true`, the cluster will be force deleted and user has to manually clean up the provisioned cloud resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#force_delete ClusterEdgeVsphere#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Delay duration in minutes to before invoking cluster force delete. Default and minimum is 20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#force_delete_delay ClusterEdgeVsphere#force_delete_delay}
  */
  readonly forceDeleteDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#id ClusterEdgeVsphere#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#name ClusterEdgeVsphere#name}
  */
  readonly name: string;
  /**
  * Date and time after which to patch cluster `RFC3339: 2006-01-02T15:04:05Z07:00`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#os_patch_after ClusterEdgeVsphere#os_patch_after}
  */
  readonly osPatchAfter?: string;
  /**
  * Whether to apply OS patch on boot. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#os_patch_on_boot ClusterEdgeVsphere#os_patch_on_boot}
  */
  readonly osPatchOnBoot?: boolean | cdktf.IResolvable;
  /**
  * Cron schedule for OS patching. This must be in the form of `0 0 * * *`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#os_patch_schedule ClusterEdgeVsphere#os_patch_schedule}
  */
  readonly osPatchSchedule?: string;
  /**
  * The pause agent upgrades setting allows to control the automatic upgrade of the Palette component and agent for an individual cluster. The default value is `unlock`, meaning upgrades occur automatically. Setting it to `lock` pauses automatic agent upgrades for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#pause_agent_upgrades ClusterEdgeVsphere#pause_agent_upgrades}
  */
  readonly pauseAgentUpgrades?: string;
  /**
  * To authorize the cluster repave, set the value to `Approved` for approval and `""` to decline. Default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#review_repave_state ClusterEdgeVsphere#review_repave_state}
  */
  readonly reviewRepaveState?: string;
  /**
  * If `true`, the cluster will be created asynchronously. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#skip_completion ClusterEdgeVsphere#skip_completion}
  */
  readonly skipCompletion?: boolean | cdktf.IResolvable;
  /**
  * A list of tags to be applied to the cluster. Tags must be in the form of `key:value`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#tags ClusterEdgeVsphere#tags}
  */
  readonly tags?: string[];
  /**
  * backup_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#backup_policy ClusterEdgeVsphere#backup_policy}
  */
  readonly backupPolicy?: ClusterEdgeVsphereBackupPolicy;
  /**
  * cloud_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#cloud_config ClusterEdgeVsphere#cloud_config}
  */
  readonly cloudConfig: ClusterEdgeVsphereCloudConfig;
  /**
  * cluster_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#cluster_profile ClusterEdgeVsphere#cluster_profile}
  */
  readonly clusterProfile?: ClusterEdgeVsphereClusterProfile[] | cdktf.IResolvable;
  /**
  * cluster_rbac_binding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#cluster_rbac_binding ClusterEdgeVsphere#cluster_rbac_binding}
  */
  readonly clusterRbacBinding?: ClusterEdgeVsphereClusterRbacBinding[] | cdktf.IResolvable;
  /**
  * host_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#host_config ClusterEdgeVsphere#host_config}
  */
  readonly hostConfig?: ClusterEdgeVsphereHostConfig[] | cdktf.IResolvable;
  /**
  * location_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#location_config ClusterEdgeVsphere#location_config}
  */
  readonly locationConfig?: ClusterEdgeVsphereLocationConfig[] | cdktf.IResolvable;
  /**
  * machine_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#machine_pool ClusterEdgeVsphere#machine_pool}
  */
  readonly machinePool: ClusterEdgeVsphereMachinePool[] | cdktf.IResolvable;
  /**
  * namespaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#namespaces ClusterEdgeVsphere#namespaces}
  */
  readonly namespaces?: ClusterEdgeVsphereNamespaces[] | cdktf.IResolvable;
  /**
  * scan_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#scan_policy ClusterEdgeVsphere#scan_policy}
  */
  readonly scanPolicy?: ClusterEdgeVsphereScanPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#timeouts ClusterEdgeVsphere#timeouts}
  */
  readonly timeouts?: ClusterEdgeVsphereTimeouts;
}
export interface ClusterEdgeVsphereBackupPolicy {
  /**
  * The ID of the backup location to use for the backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#backup_location_id ClusterEdgeVsphere#backup_location_id}
  */
  readonly backupLocationId: string;
  /**
  * The list of cluster UIDs to include in the backup. If `include_all_clusters` is set to `true`, then all clusters will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#cluster_uids ClusterEdgeVsphere#cluster_uids}
  */
  readonly clusterUids?: string[];
  /**
  * The number of hours after which the backup will be deleted. For example, if the expiry is set to 24, the backup will be deleted after 24 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#expiry_in_hour ClusterEdgeVsphere#expiry_in_hour}
  */
  readonly expiryInHour: number;
  /**
  * Whether to include all clusters in the backup. If set to false, only the clusters specified in `cluster_uids` will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#include_all_clusters ClusterEdgeVsphere#include_all_clusters}
  */
  readonly includeAllClusters?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to include cluster resources in the backup. If set to false, only the cluster configuration and disks will be backed up. (Note: Starting with Palette version 4.6, the include_cluster_resources attribute will be deprecated, and a new attribute, include_cluster_resources_mode, will be introduced.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#include_cluster_resources ClusterEdgeVsphere#include_cluster_resources}
  */
  readonly includeClusterResources?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to include the cluster resources in the backup. Supported values are `always`, `never`, and `auto`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#include_cluster_resources_mode ClusterEdgeVsphere#include_cluster_resources_mode}
  */
  readonly includeClusterResourcesMode?: string;
  /**
  * Whether to include the disks in the backup. If set to false, only the cluster configuration will be backed up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#include_disks ClusterEdgeVsphere#include_disks}
  */
  readonly includeDisks?: boolean | cdktf.IResolvable;
  /**
  * The list of Kubernetes namespaces to include in the backup. If not specified, all namespaces will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#namespaces ClusterEdgeVsphere#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Prefix for the backup name. The backup name will be of the format <prefix>-<cluster-name>-<timestamp>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#prefix ClusterEdgeVsphere#prefix}
  */
  readonly prefix: string;
  /**
  * The schedule for the backup. The schedule is specified in cron format. For example, to run the backup every day at 1:00 AM, the schedule should be set to `0 1 * * *`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#schedule ClusterEdgeVsphere#schedule}
  */
  readonly schedule: string;
}

export function clusterEdgeVsphereBackupPolicyToTerraform(struct?: ClusterEdgeVsphereBackupPolicyOutputReference | ClusterEdgeVsphereBackupPolicy): any {
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


export function clusterEdgeVsphereBackupPolicyToHclTerraform(struct?: ClusterEdgeVsphereBackupPolicyOutputReference | ClusterEdgeVsphereBackupPolicy): any {
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

export class ClusterEdgeVsphereBackupPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterEdgeVsphereBackupPolicy | undefined {
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

  public set internalValue(value: ClusterEdgeVsphereBackupPolicy | undefined) {
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
export interface ClusterEdgeVsphereCloudConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#datacenter ClusterEdgeVsphere#datacenter}
  */
  readonly datacenter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#folder ClusterEdgeVsphere#folder}
  */
  readonly folder: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#image_template_folder ClusterEdgeVsphere#image_template_folder}
  */
  readonly imageTemplateFolder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#network_search_domain ClusterEdgeVsphere#network_search_domain}
  */
  readonly networkSearchDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#network_type ClusterEdgeVsphere#network_type}
  */
  readonly networkType?: string;
  /**
  * Public SSH Key (Secure Shell) to establish, administer, and communicate with remote clusters, `ssh_key & ssh_keys` are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#ssh_key ClusterEdgeVsphere#ssh_key}
  */
  readonly sshKey?: string;
  /**
  * List of public SSH (Secure Shell) keys to establish, administer, and communicate with remote clusters, `ssh_key & ssh_keys` are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#ssh_keys ClusterEdgeVsphere#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#static_ip ClusterEdgeVsphere#static_ip}
  */
  readonly staticIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#vip ClusterEdgeVsphere#vip}
  */
  readonly vip: string;
}

export function clusterEdgeVsphereCloudConfigToTerraform(struct?: ClusterEdgeVsphereCloudConfigOutputReference | ClusterEdgeVsphereCloudConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    folder: cdktf.stringToTerraform(struct!.folder),
    image_template_folder: cdktf.stringToTerraform(struct!.imageTemplateFolder),
    network_search_domain: cdktf.stringToTerraform(struct!.networkSearchDomain),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
    ssh_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshKeys),
    static_ip: cdktf.booleanToTerraform(struct!.staticIp),
    vip: cdktf.stringToTerraform(struct!.vip),
  }
}


export function clusterEdgeVsphereCloudConfigToHclTerraform(struct?: ClusterEdgeVsphereCloudConfigOutputReference | ClusterEdgeVsphereCloudConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datacenter: {
      value: cdktf.stringToHclTerraform(struct!.datacenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_template_folder: {
      value: cdktf.stringToHclTerraform(struct!.imageTemplateFolder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_search_domain: {
      value: cdktf.stringToHclTerraform(struct!.networkSearchDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_key: {
      value: cdktf.stringToHclTerraform(struct!.sshKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    static_ip: {
      value: cdktf.booleanToHclTerraform(struct!.staticIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vip: {
      value: cdktf.stringToHclTerraform(struct!.vip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterEdgeVsphereCloudConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterEdgeVsphereCloudConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._imageTemplateFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageTemplateFolder = this._imageTemplateFolder;
    }
    if (this._networkSearchDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSearchDomain = this._networkSearchDomain;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._sshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey;
    }
    if (this._sshKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeys = this._sshKeys;
    }
    if (this._staticIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIp = this._staticIp;
    }
    if (this._vip !== undefined) {
      hasAnyValues = true;
      internalValueResult.vip = this._vip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterEdgeVsphereCloudConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datacenter = undefined;
      this._folder = undefined;
      this._imageTemplateFolder = undefined;
      this._networkSearchDomain = undefined;
      this._networkType = undefined;
      this._sshKey = undefined;
      this._sshKeys = undefined;
      this._staticIp = undefined;
      this._vip = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datacenter = value.datacenter;
      this._folder = value.folder;
      this._imageTemplateFolder = value.imageTemplateFolder;
      this._networkSearchDomain = value.networkSearchDomain;
      this._networkType = value.networkType;
      this._sshKey = value.sshKey;
      this._sshKeys = value.sshKeys;
      this._staticIp = value.staticIp;
      this._vip = value.vip;
    }
  }

  // datacenter - computed: false, optional: false, required: true
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // folder - computed: false, optional: false, required: true
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // image_template_folder - computed: false, optional: true, required: false
  private _imageTemplateFolder?: string; 
  public get imageTemplateFolder() {
    return this.getStringAttribute('image_template_folder');
  }
  public set imageTemplateFolder(value: string) {
    this._imageTemplateFolder = value;
  }
  public resetImageTemplateFolder() {
    this._imageTemplateFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTemplateFolderInput() {
    return this._imageTemplateFolder;
  }

  // network_search_domain - computed: false, optional: true, required: false
  private _networkSearchDomain?: string; 
  public get networkSearchDomain() {
    return this.getStringAttribute('network_search_domain');
  }
  public set networkSearchDomain(value: string) {
    this._networkSearchDomain = value;
  }
  public resetNetworkSearchDomain() {
    this._networkSearchDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSearchDomainInput() {
    return this._networkSearchDomain;
  }

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // ssh_key - computed: false, optional: true, required: false
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  public resetSshKey() {
    this._sshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys?: string[]; 
  public get sshKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_keys'));
  }
  public set sshKeys(value: string[]) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
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

  // vip - computed: false, optional: false, required: true
  private _vip?: string; 
  public get vip() {
    return this.getStringAttribute('vip');
  }
  public set vip(value: string) {
    this._vip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInput() {
    return this._vip;
  }
}
export interface ClusterEdgeVsphereClusterProfilePackManifest {
  /**
  * The content of the manifest. The content is the YAML content of the manifest. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#content ClusterEdgeVsphere#content}
  */
  readonly content: string;
  /**
  * The name of the manifest. The name must be unique within the pack. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#name ClusterEdgeVsphere#name}
  */
  readonly name: string;
}

export function clusterEdgeVsphereClusterProfilePackManifestToTerraform(struct?: ClusterEdgeVsphereClusterProfilePackManifest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function clusterEdgeVsphereClusterProfilePackManifestToHclTerraform(struct?: ClusterEdgeVsphereClusterProfilePackManifest | cdktf.IResolvable): any {
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

export class ClusterEdgeVsphereClusterProfilePackManifestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterEdgeVsphereClusterProfilePackManifest | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterEdgeVsphereClusterProfilePackManifest | cdktf.IResolvable | undefined) {
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

export class ClusterEdgeVsphereClusterProfilePackManifestList extends cdktf.ComplexList {
  public internalValue? : ClusterEdgeVsphereClusterProfilePackManifest[] | cdktf.IResolvable

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
  public get(index: number): ClusterEdgeVsphereClusterProfilePackManifestOutputReference {
    return new ClusterEdgeVsphereClusterProfilePackManifestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterEdgeVsphereClusterProfilePack {
  /**
  * The name of the pack. The name must be unique within the cluster profile. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#name ClusterEdgeVsphere#name}
  */
  readonly name: string;
  /**
  * The registry name of the pack. The registry name is the human-readable name of the registry. This attribute can be used instead of `registry_uid` for better readability. If `uid` is not provided, this field can be used along with `name` and `tag` to resolve the pack UID internally. Either `registry_uid` or `registry_name` can be specified, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#registry_name ClusterEdgeVsphere#registry_name}
  */
  readonly registryName?: string;
  /**
  * The registry UID of the pack. The registry UID is the unique identifier of the registry. This attribute is required if there is more than one registry that contains a pack with the same name. If `uid` is not provided, this field is required along with `name` and `tag` to resolve the pack UID internally. Either `registry_uid` or `registry_name` can be specified, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#registry_uid ClusterEdgeVsphere#registry_uid}
  */
  readonly registryUid?: string;
  /**
  * The tag of the pack. The tag is the version of the pack. This attribute is required if the pack type is `spectro` or `helm`. If `uid` is not provided, this field is required along with `name` and `registry_uid` (or `registry_name`) to resolve the pack UID internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#tag ClusterEdgeVsphere#tag}
  */
  readonly tag?: string;
  /**
  * The type of the pack. Allowed values are `spectro`, `manifest`, `helm`, or `oci`. The default value is spectro. If using an OCI registry for pack, set the type to `oci`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#type ClusterEdgeVsphere#type}
  */
  readonly type?: string;
  /**
  * The unique identifier of the pack. The value can be looked up using the [`spectrocloud_pack`](https://registry.terraform.io/providers/spectrocloud/spectrocloud/latest/docs/data-sources/pack) data source. This value is required if the pack type is `spectro` and for `helm` if the chart is from a public helm registry. If not provided, all of `name`, `tag`, and `registry_uid` must be specified to resolve the pack UID internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#uid ClusterEdgeVsphere#uid}
  */
  readonly uid?: string;
  /**
  * The values of the pack. The values are the configuration values of the pack. The values are specified in YAML format. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#values ClusterEdgeVsphere#values}
  */
  readonly values?: string;
  /**
  * manifest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#manifest ClusterEdgeVsphere#manifest}
  */
  readonly manifest?: ClusterEdgeVsphereClusterProfilePackManifest[] | cdktf.IResolvable;
}

export function clusterEdgeVsphereClusterProfilePackToTerraform(struct?: ClusterEdgeVsphereClusterProfilePack | cdktf.IResolvable): any {
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
    manifest: cdktf.listMapper(clusterEdgeVsphereClusterProfilePackManifestToTerraform, true)(struct!.manifest),
  }
}


export function clusterEdgeVsphereClusterProfilePackToHclTerraform(struct?: ClusterEdgeVsphereClusterProfilePack | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(clusterEdgeVsphereClusterProfilePackManifestToHclTerraform, true)(struct!.manifest),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterEdgeVsphereClusterProfilePackManifestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterEdgeVsphereClusterProfilePackOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterEdgeVsphereClusterProfilePack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterEdgeVsphereClusterProfilePack | cdktf.IResolvable | undefined) {
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
  private _manifest = new ClusterEdgeVsphereClusterProfilePackManifestList(this, "manifest", false);
  public get manifest() {
    return this._manifest;
  }
  public putManifest(value: ClusterEdgeVsphereClusterProfilePackManifest[] | cdktf.IResolvable) {
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

export class ClusterEdgeVsphereClusterProfilePackList extends cdktf.ComplexList {
  public internalValue? : ClusterEdgeVsphereClusterProfilePack[] | cdktf.IResolvable

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
  public get(index: number): ClusterEdgeVsphereClusterProfilePackOutputReference {
    return new ClusterEdgeVsphereClusterProfilePackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterEdgeVsphereClusterProfile {
  /**
  * The ID of the cluster profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#id ClusterEdgeVsphere#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A map of cluster profile variables, specified as key-value pairs. For example: `priority = "5"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#variables ClusterEdgeVsphere#variables}
  */
  readonly variables?: { [key: string]: string };
  /**
  * pack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#pack ClusterEdgeVsphere#pack}
  */
  readonly pack?: ClusterEdgeVsphereClusterProfilePack[] | cdktf.IResolvable;
}

export function clusterEdgeVsphereClusterProfileToTerraform(struct?: ClusterEdgeVsphereClusterProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.variables),
    pack: cdktf.listMapper(clusterEdgeVsphereClusterProfilePackToTerraform, true)(struct!.pack),
  }
}


export function clusterEdgeVsphereClusterProfileToHclTerraform(struct?: ClusterEdgeVsphereClusterProfile | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(clusterEdgeVsphereClusterProfilePackToHclTerraform, true)(struct!.pack),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterEdgeVsphereClusterProfilePackList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterEdgeVsphereClusterProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterEdgeVsphereClusterProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterEdgeVsphereClusterProfile | cdktf.IResolvable | undefined) {
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
  private _pack = new ClusterEdgeVsphereClusterProfilePackList(this, "pack", false);
  public get pack() {
    return this._pack;
  }
  public putPack(value: ClusterEdgeVsphereClusterProfilePack[] | cdktf.IResolvable) {
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

export class ClusterEdgeVsphereClusterProfileList extends cdktf.ComplexList {
  public internalValue? : ClusterEdgeVsphereClusterProfile[] | cdktf.IResolvable

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
  public get(index: number): ClusterEdgeVsphereClusterProfileOutputReference {
    return new ClusterEdgeVsphereClusterProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterEdgeVsphereClusterRbacBindingSubjects {
  /**
  * The name of the subject. Required if 'type' is set to 'User' or 'Group'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#name ClusterEdgeVsphere#name}
  */
  readonly name: string;
  /**
  * The Kubernetes namespace of the subject. Required if 'type' is set to 'ServiceAccount'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#namespace ClusterEdgeVsphere#namespace}
  */
  readonly namespace?: string;
  /**
  * The type of the subject. Can be one of the following values: `User`, `Group`, or `ServiceAccount`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#type ClusterEdgeVsphere#type}
  */
  readonly type: string;
}

export function clusterEdgeVsphereClusterRbacBindingSubjectsToTerraform(struct?: ClusterEdgeVsphereClusterRbacBindingSubjects | cdktf.IResolvable): any {
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


export function clusterEdgeVsphereClusterRbacBindingSubjectsToHclTerraform(struct?: ClusterEdgeVsphereClusterRbacBindingSubjects | cdktf.IResolvable): any {
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

export class ClusterEdgeVsphereClusterRbacBindingSubjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterEdgeVsphereClusterRbacBindingSubjects | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterEdgeVsphereClusterRbacBindingSubjects | cdktf.IResolvable | undefined) {
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

export class ClusterEdgeVsphereClusterRbacBindingSubjectsList extends cdktf.ComplexList {
  public internalValue? : ClusterEdgeVsphereClusterRbacBindingSubjects[] | cdktf.IResolvable

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
  public get(index: number): ClusterEdgeVsphereClusterRbacBindingSubjectsOutputReference {
    return new ClusterEdgeVsphereClusterRbacBindingSubjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterEdgeVsphereClusterRbacBinding {
  /**
  * The Kubernetes namespace of the RBAC binding. Required if 'type' is set to 'RoleBinding'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#namespace ClusterEdgeVsphere#namespace}
  */
  readonly namespace?: string;
  /**
  * The role of the RBAC binding. Required if 'type' is set to 'RoleBinding'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#role ClusterEdgeVsphere#role}
  */
  readonly role?: { [key: string]: string };
  /**
  * The type of the RBAC binding. Can be one of the following values: `RoleBinding`, or `ClusterRoleBinding`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#type ClusterEdgeVsphere#type}
  */
  readonly type: string;
  /**
  * subjects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#subjects ClusterEdgeVsphere#subjects}
  */
  readonly subjects?: ClusterEdgeVsphereClusterRbacBindingSubjects[] | cdktf.IResolvable;
}

export function clusterEdgeVsphereClusterRbacBindingToTerraform(struct?: ClusterEdgeVsphereClusterRbacBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    role: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    subjects: cdktf.listMapper(clusterEdgeVsphereClusterRbacBindingSubjectsToTerraform, true)(struct!.subjects),
  }
}


export function clusterEdgeVsphereClusterRbacBindingToHclTerraform(struct?: ClusterEdgeVsphereClusterRbacBinding | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(clusterEdgeVsphereClusterRbacBindingSubjectsToHclTerraform, true)(struct!.subjects),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterEdgeVsphereClusterRbacBindingSubjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterEdgeVsphereClusterRbacBindingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterEdgeVsphereClusterRbacBinding | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterEdgeVsphereClusterRbacBinding | cdktf.IResolvable | undefined) {
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
  private _subjects = new ClusterEdgeVsphereClusterRbacBindingSubjectsList(this, "subjects", false);
  public get subjects() {
    return this._subjects;
  }
  public putSubjects(value: ClusterEdgeVsphereClusterRbacBindingSubjects[] | cdktf.IResolvable) {
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

export class ClusterEdgeVsphereClusterRbacBindingList extends cdktf.ComplexList {
  public internalValue? : ClusterEdgeVsphereClusterRbacBinding[] | cdktf.IResolvable

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
  public get(index: number): ClusterEdgeVsphereClusterRbacBindingOutputReference {
    return new ClusterEdgeVsphereClusterRbacBindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterEdgeVsphereHostConfig {
  /**
  * The external traffic policy for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#external_traffic_policy ClusterEdgeVsphere#external_traffic_policy}
  */
  readonly externalTrafficPolicy?: string;
  /**
  * The type of endpoint for the cluster. Can be either 'Ingress' or 'LoadBalancer'. The default is 'Ingress'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#host_endpoint_type ClusterEdgeVsphere#host_endpoint_type}
  */
  readonly hostEndpointType?: string;
  /**
  * The host for the Ingress endpoint. Required if 'host_endpoint_type' is set to 'Ingress'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#ingress_host ClusterEdgeVsphere#ingress_host}
  */
  readonly ingressHost?: string;
  /**
  * The source ranges for the load balancer. Required if 'host_endpoint_type' is set to 'LoadBalancer'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#load_balancer_source_ranges ClusterEdgeVsphere#load_balancer_source_ranges}
  */
  readonly loadBalancerSourceRanges?: string;
}

export function clusterEdgeVsphereHostConfigToTerraform(struct?: ClusterEdgeVsphereHostConfig | cdktf.IResolvable): any {
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


export function clusterEdgeVsphereHostConfigToHclTerraform(struct?: ClusterEdgeVsphereHostConfig | cdktf.IResolvable): any {
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

export class ClusterEdgeVsphereHostConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterEdgeVsphereHostConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterEdgeVsphereHostConfig | cdktf.IResolvable | undefined) {
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

export class ClusterEdgeVsphereHostConfigList extends cdktf.ComplexList {
  public internalValue? : ClusterEdgeVsphereHostConfig[] | cdktf.IResolvable

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
  public get(index: number): ClusterEdgeVsphereHostConfigOutputReference {
    return new ClusterEdgeVsphereHostConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterEdgeVsphereLocationConfig {
  /**
  * The country code of the country the cluster is located in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#country_code ClusterEdgeVsphere#country_code}
  */
  readonly countryCode?: string;
  /**
  * The name of the country.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#country_name ClusterEdgeVsphere#country_name}
  */
  readonly countryName?: string;
  /**
  * The latitude coordinates value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#latitude ClusterEdgeVsphere#latitude}
  */
  readonly latitude: number;
  /**
  * The longitude coordinates value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#longitude ClusterEdgeVsphere#longitude}
  */
  readonly longitude: number;
  /**
  * The region code of where the cluster is located in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#region_code ClusterEdgeVsphere#region_code}
  */
  readonly regionCode?: string;
  /**
  * The name of the region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#region_name ClusterEdgeVsphere#region_name}
  */
  readonly regionName?: string;
}

export function clusterEdgeVsphereLocationConfigToTerraform(struct?: ClusterEdgeVsphereLocationConfig | cdktf.IResolvable): any {
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


export function clusterEdgeVsphereLocationConfigToHclTerraform(struct?: ClusterEdgeVsphereLocationConfig | cdktf.IResolvable): any {
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

export class ClusterEdgeVsphereLocationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterEdgeVsphereLocationConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterEdgeVsphereLocationConfig | cdktf.IResolvable | undefined) {
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

export class ClusterEdgeVsphereLocationConfigList extends cdktf.ComplexList {
  public internalValue? : ClusterEdgeVsphereLocationConfig[] | cdktf.IResolvable

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
  public get(index: number): ClusterEdgeVsphereLocationConfigOutputReference {
    return new ClusterEdgeVsphereLocationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterEdgeVsphereMachinePoolInstanceType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#cpu ClusterEdgeVsphere#cpu}
  */
  readonly cpu: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#disk_size_gb ClusterEdgeVsphere#disk_size_gb}
  */
  readonly diskSizeGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#memory_mb ClusterEdgeVsphere#memory_mb}
  */
  readonly memoryMb: number;
}

export function clusterEdgeVsphereMachinePoolInstanceTypeToTerraform(struct?: ClusterEdgeVsphereMachinePoolInstanceTypeOutputReference | ClusterEdgeVsphereMachinePoolInstanceType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    memory_mb: cdktf.numberToTerraform(struct!.memoryMb),
  }
}


export function clusterEdgeVsphereMachinePoolInstanceTypeToHclTerraform(struct?: ClusterEdgeVsphereMachinePoolInstanceTypeOutputReference | ClusterEdgeVsphereMachinePoolInstanceType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
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
    memory_mb: {
      value: cdktf.numberToHclTerraform(struct!.memoryMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterEdgeVsphereMachinePoolInstanceTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterEdgeVsphereMachinePoolInstanceType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._memoryMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryMb = this._memoryMb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterEdgeVsphereMachinePoolInstanceType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._diskSizeGb = undefined;
      this._memoryMb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._diskSizeGb = value.diskSizeGb;
      this._memoryMb = value.memoryMb;
    }
  }

  // cpu - computed: false, optional: false, required: true
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // disk_size_gb - computed: false, optional: false, required: true
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // memory_mb - computed: false, optional: false, required: true
  private _memoryMb?: number; 
  public get memoryMb() {
    return this.getNumberAttribute('memory_mb');
  }
  public set memoryMb(value: number) {
    this._memoryMb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryMbInput() {
    return this._memoryMb;
  }
}
export interface ClusterEdgeVsphereMachinePoolNode {
  /**
  * The action to perform on the node. Valid values are: `cordon`, `uncordon`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#action ClusterEdgeVsphere#action}
  */
  readonly action: string;
  /**
  * The node_id of the node, For example `i-07f899a33dee624f7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#node_id ClusterEdgeVsphere#node_id}
  */
  readonly nodeId: string;
}

export function clusterEdgeVsphereMachinePoolNodeToTerraform(struct?: ClusterEdgeVsphereMachinePoolNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    node_id: cdktf.stringToTerraform(struct!.nodeId),
  }
}


export function clusterEdgeVsphereMachinePoolNodeToHclTerraform(struct?: ClusterEdgeVsphereMachinePoolNode | cdktf.IResolvable): any {
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

export class ClusterEdgeVsphereMachinePoolNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterEdgeVsphereMachinePoolNode | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterEdgeVsphereMachinePoolNode | cdktf.IResolvable | undefined) {
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

export class ClusterEdgeVsphereMachinePoolNodeList extends cdktf.ComplexList {
  public internalValue? : ClusterEdgeVsphereMachinePoolNode[] | cdktf.IResolvable

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
  public get(index: number): ClusterEdgeVsphereMachinePoolNodeOutputReference {
    return new ClusterEdgeVsphereMachinePoolNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterEdgeVsphereMachinePoolPlacement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#cluster ClusterEdgeVsphere#cluster}
  */
  readonly cluster: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#datastore ClusterEdgeVsphere#datastore}
  */
  readonly datastore: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#network ClusterEdgeVsphere#network}
  */
  readonly network: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#resource_pool ClusterEdgeVsphere#resource_pool}
  */
  readonly resourcePool: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#static_ip_pool_id ClusterEdgeVsphere#static_ip_pool_id}
  */
  readonly staticIpPoolId?: string;
}

export function clusterEdgeVsphereMachinePoolPlacementToTerraform(struct?: ClusterEdgeVsphereMachinePoolPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
    datastore: cdktf.stringToTerraform(struct!.datastore),
    network: cdktf.stringToTerraform(struct!.network),
    resource_pool: cdktf.stringToTerraform(struct!.resourcePool),
    static_ip_pool_id: cdktf.stringToTerraform(struct!.staticIpPoolId),
  }
}


export function clusterEdgeVsphereMachinePoolPlacementToHclTerraform(struct?: ClusterEdgeVsphereMachinePoolPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datastore: {
      value: cdktf.stringToHclTerraform(struct!.datastore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_pool: {
      value: cdktf.stringToHclTerraform(struct!.resourcePool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_ip_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.staticIpPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterEdgeVsphereMachinePoolPlacementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterEdgeVsphereMachinePoolPlacement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._datastore !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastore = this._datastore;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._resourcePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePool = this._resourcePool;
    }
    if (this._staticIpPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpPoolId = this._staticIpPoolId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterEdgeVsphereMachinePoolPlacement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cluster = undefined;
      this._datastore = undefined;
      this._network = undefined;
      this._resourcePool = undefined;
      this._staticIpPoolId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cluster = value.cluster;
      this._datastore = value.datastore;
      this._network = value.network;
      this._resourcePool = value.resourcePool;
      this._staticIpPoolId = value.staticIpPoolId;
    }
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // datastore - computed: false, optional: false, required: true
  private _datastore?: string; 
  public get datastore() {
    return this.getStringAttribute('datastore');
  }
  public set datastore(value: string) {
    this._datastore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreInput() {
    return this._datastore;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
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

  // static_ip_pool_id - computed: false, optional: true, required: false
  private _staticIpPoolId?: string; 
  public get staticIpPoolId() {
    return this.getStringAttribute('static_ip_pool_id');
  }
  public set staticIpPoolId(value: string) {
    this._staticIpPoolId = value;
  }
  public resetStaticIpPoolId() {
    this._staticIpPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpPoolIdInput() {
    return this._staticIpPoolId;
  }
}

export class ClusterEdgeVsphereMachinePoolPlacementList extends cdktf.ComplexList {
  public internalValue? : ClusterEdgeVsphereMachinePoolPlacement[] | cdktf.IResolvable

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
  public get(index: number): ClusterEdgeVsphereMachinePoolPlacementOutputReference {
    return new ClusterEdgeVsphereMachinePoolPlacementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterEdgeVsphereMachinePoolTaints {
  /**
  * The effect of the taint. Allowed values are: `NoSchedule`, `PreferNoSchedule` or `NoExecute`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#effect ClusterEdgeVsphere#effect}
  */
  readonly effect: string;
  /**
  * The key of the taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#key ClusterEdgeVsphere#key}
  */
  readonly key: string;
  /**
  * The value of the taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#value ClusterEdgeVsphere#value}
  */
  readonly value: string;
}

export function clusterEdgeVsphereMachinePoolTaintsToTerraform(struct?: ClusterEdgeVsphereMachinePoolTaints | cdktf.IResolvable): any {
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


export function clusterEdgeVsphereMachinePoolTaintsToHclTerraform(struct?: ClusterEdgeVsphereMachinePoolTaints | cdktf.IResolvable): any {
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

export class ClusterEdgeVsphereMachinePoolTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterEdgeVsphereMachinePoolTaints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterEdgeVsphereMachinePoolTaints | cdktf.IResolvable | undefined) {
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

export class ClusterEdgeVsphereMachinePoolTaintsList extends cdktf.ComplexList {
  public internalValue? : ClusterEdgeVsphereMachinePoolTaints[] | cdktf.IResolvable

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
  public get(index: number): ClusterEdgeVsphereMachinePoolTaintsOutputReference {
    return new ClusterEdgeVsphereMachinePoolTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterEdgeVsphereMachinePool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#additional_labels ClusterEdgeVsphere#additional_labels}
  */
  readonly additionalLabels?: { [key: string]: string };
  /**
  * Whether this machine pool is a control plane. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#control_plane ClusterEdgeVsphere#control_plane}
  */
  readonly controlPlane?: boolean | cdktf.IResolvable;
  /**
  * Whether this machine pool is a control plane and a worker. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#control_plane_as_worker ClusterEdgeVsphere#control_plane_as_worker}
  */
  readonly controlPlaneAsWorker?: boolean | cdktf.IResolvable;
  /**
  * Number of nodes in the machine pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#count ClusterEdgeVsphere#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#name ClusterEdgeVsphere#name}
  */
  readonly name: string;
  /**
  * Minimum number of seconds node should be Ready, before the next node is selected for repave. Default value is `0`, Applicable only for worker pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#node_repave_interval ClusterEdgeVsphere#node_repave_interval}
  */
  readonly nodeRepaveInterval?: number;
  /**
  * Update strategy for the machine pool. Valid values are `RollingUpdateScaleOut` and `RollingUpdateScaleIn`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#update_strategy ClusterEdgeVsphere#update_strategy}
  */
  readonly updateStrategy?: string;
  /**
  * instance_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#instance_type ClusterEdgeVsphere#instance_type}
  */
  readonly instanceType: ClusterEdgeVsphereMachinePoolInstanceType;
  /**
  * node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#node ClusterEdgeVsphere#node}
  */
  readonly nodeAttribute?: ClusterEdgeVsphereMachinePoolNode[] | cdktf.IResolvable;
  /**
  * placement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#placement ClusterEdgeVsphere#placement}
  */
  readonly placement: ClusterEdgeVsphereMachinePoolPlacement[] | cdktf.IResolvable;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#taints ClusterEdgeVsphere#taints}
  */
  readonly taints?: ClusterEdgeVsphereMachinePoolTaints[] | cdktf.IResolvable;
}

export function clusterEdgeVsphereMachinePoolToTerraform(struct?: ClusterEdgeVsphereMachinePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalLabels),
    control_plane: cdktf.booleanToTerraform(struct!.controlPlane),
    control_plane_as_worker: cdktf.booleanToTerraform(struct!.controlPlaneAsWorker),
    count: cdktf.numberToTerraform(struct!.count),
    name: cdktf.stringToTerraform(struct!.name),
    node_repave_interval: cdktf.numberToTerraform(struct!.nodeRepaveInterval),
    update_strategy: cdktf.stringToTerraform(struct!.updateStrategy),
    instance_type: clusterEdgeVsphereMachinePoolInstanceTypeToTerraform(struct!.instanceType),
    node: cdktf.listMapper(clusterEdgeVsphereMachinePoolNodeToTerraform, true)(struct!.nodeAttribute),
    placement: cdktf.listMapper(clusterEdgeVsphereMachinePoolPlacementToTerraform, true)(struct!.placement),
    taints: cdktf.listMapper(clusterEdgeVsphereMachinePoolTaintsToTerraform, true)(struct!.taints),
  }
}


export function clusterEdgeVsphereMachinePoolToHclTerraform(struct?: ClusterEdgeVsphereMachinePool | cdktf.IResolvable): any {
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
    update_strategy: {
      value: cdktf.stringToHclTerraform(struct!.updateStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: clusterEdgeVsphereMachinePoolInstanceTypeToHclTerraform(struct!.instanceType),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterEdgeVsphereMachinePoolInstanceTypeList",
    },
    node: {
      value: cdktf.listMapperHcl(clusterEdgeVsphereMachinePoolNodeToHclTerraform, true)(struct!.nodeAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterEdgeVsphereMachinePoolNodeList",
    },
    placement: {
      value: cdktf.listMapperHcl(clusterEdgeVsphereMachinePoolPlacementToHclTerraform, true)(struct!.placement),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterEdgeVsphereMachinePoolPlacementList",
    },
    taints: {
      value: cdktf.listMapperHcl(clusterEdgeVsphereMachinePoolTaintsToHclTerraform, true)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterEdgeVsphereMachinePoolTaintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterEdgeVsphereMachinePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterEdgeVsphereMachinePool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalLabels = this._additionalLabels;
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeRepaveInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeRepaveInterval = this._nodeRepaveInterval;
    }
    if (this._updateStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateStrategy = this._updateStrategy;
    }
    if (this._instanceType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType?.internalValue;
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

  public set internalValue(value: ClusterEdgeVsphereMachinePool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalLabels = undefined;
      this._controlPlane = undefined;
      this._controlPlaneAsWorker = undefined;
      this._count = undefined;
      this._name = undefined;
      this._nodeRepaveInterval = undefined;
      this._updateStrategy = undefined;
      this._instanceType.internalValue = undefined;
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
      this._controlPlane = value.controlPlane;
      this._controlPlaneAsWorker = value.controlPlaneAsWorker;
      this._count = value.count;
      this._name = value.name;
      this._nodeRepaveInterval = value.nodeRepaveInterval;
      this._updateStrategy = value.updateStrategy;
      this._instanceType.internalValue = value.instanceType;
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

  // instance_type - computed: false, optional: false, required: true
  private _instanceType = new ClusterEdgeVsphereMachinePoolInstanceTypeOutputReference(this, "instance_type");
  public get instanceType() {
    return this._instanceType;
  }
  public putInstanceType(value: ClusterEdgeVsphereMachinePoolInstanceType) {
    this._instanceType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType.internalValue;
  }

  // node - computed: false, optional: true, required: false
  private _node = new ClusterEdgeVsphereMachinePoolNodeList(this, "node", false);
  public get nodeAttribute() {
    return this._node;
  }
  public putNodeAttribute(value: ClusterEdgeVsphereMachinePoolNode[] | cdktf.IResolvable) {
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
  private _placement = new ClusterEdgeVsphereMachinePoolPlacementList(this, "placement", false);
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: ClusterEdgeVsphereMachinePoolPlacement[] | cdktf.IResolvable) {
    this._placement.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new ClusterEdgeVsphereMachinePoolTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: ClusterEdgeVsphereMachinePoolTaints[] | cdktf.IResolvable) {
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

export class ClusterEdgeVsphereMachinePoolList extends cdktf.ComplexList {
  public internalValue? : ClusterEdgeVsphereMachinePool[] | cdktf.IResolvable

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
  public get(index: number): ClusterEdgeVsphereMachinePoolOutputReference {
    return new ClusterEdgeVsphereMachinePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterEdgeVsphereNamespaces {
  /**
  * Name of the namespace. This is the name of the Kubernetes namespace in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#name ClusterEdgeVsphere#name}
  */
  readonly name: string;
  /**
  * Resource allocation for the namespace. This is a map containing the resource type and the resource value. For example, `{cpu_cores: '2', memory_MiB: '2048', gpu_limit: '1', gpu_provider: 'nvidia'}`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#resource_allocation ClusterEdgeVsphere#resource_allocation}
  */
  readonly resourceAllocation: { [key: string]: string };
}

export function clusterEdgeVsphereNamespacesToTerraform(struct?: ClusterEdgeVsphereNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resource_allocation: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceAllocation),
  }
}


export function clusterEdgeVsphereNamespacesToHclTerraform(struct?: ClusterEdgeVsphereNamespaces | cdktf.IResolvable): any {
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

export class ClusterEdgeVsphereNamespacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterEdgeVsphereNamespaces | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterEdgeVsphereNamespaces | cdktf.IResolvable | undefined) {
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

export class ClusterEdgeVsphereNamespacesList extends cdktf.ComplexList {
  public internalValue? : ClusterEdgeVsphereNamespaces[] | cdktf.IResolvable

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
  public get(index: number): ClusterEdgeVsphereNamespacesOutputReference {
    return new ClusterEdgeVsphereNamespacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterEdgeVsphereScanPolicy {
  /**
  * The schedule for configuration scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#configuration_scan_schedule ClusterEdgeVsphere#configuration_scan_schedule}
  */
  readonly configurationScanSchedule: string;
  /**
  * The schedule for conformance scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#conformance_scan_schedule ClusterEdgeVsphere#conformance_scan_schedule}
  */
  readonly conformanceScanSchedule: string;
  /**
  * The schedule for penetration scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#penetration_scan_schedule ClusterEdgeVsphere#penetration_scan_schedule}
  */
  readonly penetrationScanSchedule: string;
}

export function clusterEdgeVsphereScanPolicyToTerraform(struct?: ClusterEdgeVsphereScanPolicyOutputReference | ClusterEdgeVsphereScanPolicy): any {
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


export function clusterEdgeVsphereScanPolicyToHclTerraform(struct?: ClusterEdgeVsphereScanPolicyOutputReference | ClusterEdgeVsphereScanPolicy): any {
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

export class ClusterEdgeVsphereScanPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterEdgeVsphereScanPolicy | undefined {
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

  public set internalValue(value: ClusterEdgeVsphereScanPolicy | undefined) {
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
export interface ClusterEdgeVsphereTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#create ClusterEdgeVsphere#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#delete ClusterEdgeVsphere#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#update ClusterEdgeVsphere#update}
  */
  readonly update?: string;
}

export function clusterEdgeVsphereTimeoutsToTerraform(struct?: ClusterEdgeVsphereTimeouts | cdktf.IResolvable): any {
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


export function clusterEdgeVsphereTimeoutsToHclTerraform(struct?: ClusterEdgeVsphereTimeouts | cdktf.IResolvable): any {
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

export class ClusterEdgeVsphereTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterEdgeVsphereTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterEdgeVsphereTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere spectrocloud_cluster_edge_vsphere}
*/
export class ClusterEdgeVsphere extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spectrocloud_cluster_edge_vsphere";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterEdgeVsphere resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterEdgeVsphere to import
  * @param importFromId The id of the existing ClusterEdgeVsphere that should be imported. Refer to the {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterEdgeVsphere to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spectrocloud_cluster_edge_vsphere", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cluster_edge_vsphere spectrocloud_cluster_edge_vsphere} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterEdgeVsphereConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterEdgeVsphereConfig) {
    super(scope, id, {
      terraformResourceType: 'spectrocloud_cluster_edge_vsphere',
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
    this._clusterMetaAttribute = config.clusterMetaAttribute;
    this._context = config.context;
    this._description = config.description;
    this._edgeHostUid = config.edgeHostUid;
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

  // edge_host_uid - computed: false, optional: false, required: true
  private _edgeHostUid?: string; 
  public get edgeHostUid() {
    return this.getStringAttribute('edge_host_uid');
  }
  public set edgeHostUid(value: string) {
    this._edgeHostUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeHostUidInput() {
    return this._edgeHostUid;
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
  private _backupPolicy = new ClusterEdgeVsphereBackupPolicyOutputReference(this, "backup_policy");
  public get backupPolicy() {
    return this._backupPolicy;
  }
  public putBackupPolicy(value: ClusterEdgeVsphereBackupPolicy) {
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
  private _cloudConfig = new ClusterEdgeVsphereCloudConfigOutputReference(this, "cloud_config");
  public get cloudConfig() {
    return this._cloudConfig;
  }
  public putCloudConfig(value: ClusterEdgeVsphereCloudConfig) {
    this._cloudConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudConfigInput() {
    return this._cloudConfig.internalValue;
  }

  // cluster_profile - computed: false, optional: true, required: false
  private _clusterProfile = new ClusterEdgeVsphereClusterProfileList(this, "cluster_profile", false);
  public get clusterProfile() {
    return this._clusterProfile;
  }
  public putClusterProfile(value: ClusterEdgeVsphereClusterProfile[] | cdktf.IResolvable) {
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
  private _clusterRbacBinding = new ClusterEdgeVsphereClusterRbacBindingList(this, "cluster_rbac_binding", false);
  public get clusterRbacBinding() {
    return this._clusterRbacBinding;
  }
  public putClusterRbacBinding(value: ClusterEdgeVsphereClusterRbacBinding[] | cdktf.IResolvable) {
    this._clusterRbacBinding.internalValue = value;
  }
  public resetClusterRbacBinding() {
    this._clusterRbacBinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRbacBindingInput() {
    return this._clusterRbacBinding.internalValue;
  }

  // host_config - computed: false, optional: true, required: false
  private _hostConfig = new ClusterEdgeVsphereHostConfigList(this, "host_config", false);
  public get hostConfig() {
    return this._hostConfig;
  }
  public putHostConfig(value: ClusterEdgeVsphereHostConfig[] | cdktf.IResolvable) {
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
  private _locationConfig = new ClusterEdgeVsphereLocationConfigList(this, "location_config", false);
  public get locationConfig() {
    return this._locationConfig;
  }
  public putLocationConfig(value: ClusterEdgeVsphereLocationConfig[] | cdktf.IResolvable) {
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
  private _machinePool = new ClusterEdgeVsphereMachinePoolList(this, "machine_pool", false);
  public get machinePool() {
    return this._machinePool;
  }
  public putMachinePool(value: ClusterEdgeVsphereMachinePool[] | cdktf.IResolvable) {
    this._machinePool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machinePoolInput() {
    return this._machinePool.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces = new ClusterEdgeVsphereNamespacesList(this, "namespaces", false);
  public get namespaces() {
    return this._namespaces;
  }
  public putNamespaces(value: ClusterEdgeVsphereNamespaces[] | cdktf.IResolvable) {
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
  private _scanPolicy = new ClusterEdgeVsphereScanPolicyOutputReference(this, "scan_policy");
  public get scanPolicy() {
    return this._scanPolicy;
  }
  public putScanPolicy(value: ClusterEdgeVsphereScanPolicy) {
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
  private _timeouts = new ClusterEdgeVsphereTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClusterEdgeVsphereTimeouts) {
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
      cluster_meta_attribute: cdktf.stringToTerraform(this._clusterMetaAttribute),
      context: cdktf.stringToTerraform(this._context),
      description: cdktf.stringToTerraform(this._description),
      edge_host_uid: cdktf.stringToTerraform(this._edgeHostUid),
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
      backup_policy: clusterEdgeVsphereBackupPolicyToTerraform(this._backupPolicy.internalValue),
      cloud_config: clusterEdgeVsphereCloudConfigToTerraform(this._cloudConfig.internalValue),
      cluster_profile: cdktf.listMapper(clusterEdgeVsphereClusterProfileToTerraform, true)(this._clusterProfile.internalValue),
      cluster_rbac_binding: cdktf.listMapper(clusterEdgeVsphereClusterRbacBindingToTerraform, true)(this._clusterRbacBinding.internalValue),
      host_config: cdktf.listMapper(clusterEdgeVsphereHostConfigToTerraform, true)(this._hostConfig.internalValue),
      location_config: cdktf.listMapper(clusterEdgeVsphereLocationConfigToTerraform, true)(this._locationConfig.internalValue),
      machine_pool: cdktf.listMapper(clusterEdgeVsphereMachinePoolToTerraform, true)(this._machinePool.internalValue),
      namespaces: cdktf.listMapper(clusterEdgeVsphereNamespacesToTerraform, true)(this._namespaces.internalValue),
      scan_policy: clusterEdgeVsphereScanPolicyToTerraform(this._scanPolicy.internalValue),
      timeouts: clusterEdgeVsphereTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      edge_host_uid: {
        value: cdktf.stringToHclTerraform(this._edgeHostUid),
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
        value: clusterEdgeVsphereBackupPolicyToHclTerraform(this._backupPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterEdgeVsphereBackupPolicyList",
      },
      cloud_config: {
        value: clusterEdgeVsphereCloudConfigToHclTerraform(this._cloudConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterEdgeVsphereCloudConfigList",
      },
      cluster_profile: {
        value: cdktf.listMapperHcl(clusterEdgeVsphereClusterProfileToHclTerraform, true)(this._clusterProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterEdgeVsphereClusterProfileList",
      },
      cluster_rbac_binding: {
        value: cdktf.listMapperHcl(clusterEdgeVsphereClusterRbacBindingToHclTerraform, true)(this._clusterRbacBinding.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterEdgeVsphereClusterRbacBindingList",
      },
      host_config: {
        value: cdktf.listMapperHcl(clusterEdgeVsphereHostConfigToHclTerraform, true)(this._hostConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterEdgeVsphereHostConfigList",
      },
      location_config: {
        value: cdktf.listMapperHcl(clusterEdgeVsphereLocationConfigToHclTerraform, true)(this._locationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterEdgeVsphereLocationConfigList",
      },
      machine_pool: {
        value: cdktf.listMapperHcl(clusterEdgeVsphereMachinePoolToHclTerraform, true)(this._machinePool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterEdgeVsphereMachinePoolList",
      },
      namespaces: {
        value: cdktf.listMapperHcl(clusterEdgeVsphereNamespacesToHclTerraform, true)(this._namespaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterEdgeVsphereNamespacesList",
      },
      scan_policy: {
        value: clusterEdgeVsphereScanPolicyToHclTerraform(this._scanPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterEdgeVsphereScanPolicyList",
      },
      timeouts: {
        value: clusterEdgeVsphereTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterEdgeVsphereTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
