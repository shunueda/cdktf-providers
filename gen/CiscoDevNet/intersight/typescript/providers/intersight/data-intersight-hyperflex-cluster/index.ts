// https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIntersightHyperflexClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#account_moid DataIntersightHyperflexCluster#account_moid}
  */
  readonly accountMoid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#additional_properties DataIntersightHyperflexCluster#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The number of days remaining before the cluster's storage utilization reaches the recommended capacity limit of 76%.
  * Default value is math.MaxInt32 to indicate that the capacity runway is "Unknown" for a cluster that is not connected or with not sufficient data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#capacity_runway DataIntersightHyperflexCluster#capacity_runway}
  */
  readonly capacityRunway?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#class_id DataIntersightHyperflexCluster#class_id}
  */
  readonly classId?: string;
  /**
  * The name of this HyperFlex cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#cluster_name DataIntersightHyperflexCluster#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * This can be a Storage or Compute cluster. A storage cluster contains storage nodes that are used to persist data. A compute cluster contains compute nodes that are used for executing business logic.
  * * `Storage` - Cluster of storage nodes used to persist data.
  * * `Compute` - Cluster of compute nodes used to execute business logic.
  * * `Unknown` - This cluster type is Unknown. Expect Compute or Storage as valid values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#cluster_purpose DataIntersightHyperflexCluster#cluster_purpose}
  */
  readonly clusterPurpose?: string;
  /**
  * The storage type of this cluster (All Flash or Hybrid).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#cluster_type DataIntersightHyperflexCluster#cluster_type}
  */
  readonly clusterType?: number;
  /**
  * The unique identifier for this HyperFlex cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#cluster_uuid DataIntersightHyperflexCluster#cluster_uuid}
  */
  readonly clusterUuid?: string;
  /**
  * The number of compute nodes that belong to this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#compute_node_count DataIntersightHyperflexCluster#compute_node_count}
  */
  readonly computeNodeCount?: number;
  /**
  * The number of converged nodes that belong to this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#converged_node_count DataIntersightHyperflexCluster#converged_node_count}
  */
  readonly convergedNodeCount?: number;
  /**
  * The time when this managed object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#create_time DataIntersightHyperflexCluster#create_time}
  */
  readonly createTime?: string;
  /**
  * The deployment type of the HyperFlex cluster.
  * The cluster can have one of the following configurations:
  * 1. Datacenter: The HyperFlex cluster consists of UCS Fabric Interconnect-attached nodes on a single site.
  * 2. Stretched Cluster: The HyperFlex cluster consists of UCS Fabric Interconnect-attached nodes distributed across multiple sites.
  * 3. Edge: The HyperFlex cluster consists of 2-4 standalone nodes.
  * If the cluster is running a HyperFlex Data Platform version less than 4.0 or if the deployment type cannot be determined,
  * the deployment type is set as 'NA' (not available).
  * * `NA` - The deployment type of the HyperFlex cluster is not available.
  * * `Datacenter` - The deployment type of a HyperFlex cluster consisting of UCS Fabric Interconnect-attached nodes on the same site.
  * * `Stretched Cluster` - The deployment type of a HyperFlex cluster consisting of UCS Fabric Interconnect-attached nodes across different sites.
  * * `Edge` - The deployment type of a HyperFlex cluster consisting of 2 or more standalone nodes.
  * * `DC-No-FI` - The deployment type of a HyperFlex cluster consisting of 3 or more standalone nodes with the required Datacenter license.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#deployment_type DataIntersightHyperflexCluster#deployment_type}
  */
  readonly deploymentType?: string;
  /**
  * The unique identifier of the device registration that represents this HyperFlex cluster's connection to Intersight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#device_id DataIntersightHyperflexCluster#device_id}
  */
  readonly deviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#dns_servers DataIntersightHyperflexCluster#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * The DomainGroup ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#domain_group_moid DataIntersightHyperflexCluster#domain_group_moid}
  */
  readonly domainGroupMoid?: string;
  /**
  * The type of the drives used for storage in this cluster.
  * * `NA` - The drive type of the cluster is not available.
  * * `All-Flash` - Indicates that this cluster contains flash drives only.
  * * `Hybrid` - Indicates that this cluster contains both flash and hard disk drives.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#drive_type DataIntersightHyperflexCluster#drive_type}
  */
  readonly driveType?: string;
  /**
  * This captures the encryption status for a HyperFlex cluster.
  * Currently it will have the status if HXA-CLU-0020 alarm is raised. In the future it can capture other details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#encryption_status DataIntersightHyperflexCluster#encryption_status}
  */
  readonly encryptionStatus?: string;
  /**
  * The number of yellow (warning) and red (critical) alarms stored as an aggregate.
  * The first 16 bits indicate the number of red alarms, and the last 16 bits contain the number of yellow alarms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#flt_aggr DataIntersightHyperflexCluster#flt_aggr}
  */
  readonly fltAggr?: number;
  /**
  * The HyperFlex Data or Application Platform version of this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#hx_version DataIntersightHyperflexCluster#hx_version}
  */
  readonly hxVersion?: string;
  /**
  * The version and build number of the HyperFlex Data Platform for this cluster.
  * After a cluster upgrade, this version string will be updated on the next inventory cycle to reflect
  * the newly installed version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#hxdp_build_version DataIntersightHyperflexCluster#hxdp_build_version}
  */
  readonly hxdpBuildVersion?: string;
  /**
  * Identifies the broad type of the underlying hypervisor.
  * * `ESXi` - The hypervisor running on the HyperFlex cluster is a Vmware ESXi hypervisor of any version.
  * * `Hyper-V` - The hypervisor running on the HyperFlex cluster is Microsoft Hyper-V.
  * * `Unknown` - The hypervisor running on the HyperFlex cluster is not known.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#hypervisor_type DataIntersightHyperflexCluster#hypervisor_type}
  */
  readonly hypervisorType?: string;
  /**
  * The version of hypervisor running on this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#hypervisor_version DataIntersightHyperflexCluster#hypervisor_version}
  */
  readonly hypervisorVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#id DataIntersightHyperflexCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The internally generated identity of this cluster. 
  * This entity is not manipulated by users. It aids in uniquely identifying 
  * the cluster object. In case of VMware, this is a MOR (managed object reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#identity DataIntersightHyperflexCluster#identity}
  */
  readonly identity?: string;
  /**
  * The time when this managed object was last modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#mod_time DataIntersightHyperflexCluster#mod_time}
  */
  readonly modTime?: string;
  /**
  * The unique identifier of this Managed Object instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#moid DataIntersightHyperflexCluster#moid}
  */
  readonly moid?: string;
  /**
  * The user-provided name for this cluster to facilitate identification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#name DataIntersightHyperflexCluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#ntp_servers DataIntersightHyperflexCluster#ntp_servers}
  */
  readonly ntpServers?: string[];
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#object_type DataIntersightHyperflexCluster#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#owners DataIntersightHyperflexCluster#owners}
  */
  readonly owners?: string[];
  /**
  * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs.
  * Objects that are made available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally available to all end users or restricted to end users based on their license entitlement. Users can use this property to differentiate the scope (global or a specific license tier) to which a shared MO belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#shared_scope DataIntersightHyperflexCluster#shared_scope}
  */
  readonly sharedScope?: string;
  /**
  * Cluster health status as reported by the hypervisor platform.
  * * `Unknown` - Entity status is unknown.
  * * `Degraded` - State is degraded, and might impact normal operation of the entity.
  * * `Critical` - Entity is in a critical state, impacting operations.
  * * `Ok` - Entity status is in a stable state, operating normally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#status DataIntersightHyperflexCluster#status}
  */
  readonly status?: string;
  /**
  * The storage capacity in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#storage_capacity DataIntersightHyperflexCluster#storage_capacity}
  */
  readonly storageCapacity?: number;
  /**
  * The number of storage nodes that belong to this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#storage_node_count DataIntersightHyperflexCluster#storage_node_count}
  */
  readonly storageNodeCount?: number;
  /**
  * The storage utilization is computed based on total capacity and current capacity utilization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#storage_utilization DataIntersightHyperflexCluster#storage_utilization}
  */
  readonly storageUtilization?: number;
  /**
  * The upgrade status of the HyperFlex cluster.
  * * `Unknown` - The upgrade status of the HyperFlex cluster could not be determined.
  * * `Ok` - The upgrade of the HyperFlex cluster is complete.
  * * `InProgress` - The upgrade of the HyperFlex cluster is in-progress.
  * * `Failed` - The upgrade of the HyperFlex cluster has failed.
  * * `Waiting` - The upgrade of the HyperFlex cluster is waiting to continue execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#upgrade_status DataIntersightHyperflexCluster#upgrade_status}
  */
  readonly upgradeStatus?: string;
  /**
  * The uplink speed information of the HyperFlex cluster.
  * * `Unknown` - The uplink speed could not be determined. The physical servers are potentially not claimed.
  * * `10G` - The uplink speed is 10G.
  * * `1G` - The uplink speed is 1G.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#uplink_speed DataIntersightHyperflexCluster#uplink_speed}
  */
  readonly uplinkSpeed?: string;
  /**
  * The storage utilization percentage is computed based on total capacity and current capacity utilization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#utilization_percentage DataIntersightHyperflexCluster#utilization_percentage}
  */
  readonly utilizationPercentage?: number;
  /**
  * The storage utilization trend percentage represents the trend in percentage computed using the first and last point from historical data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#utilization_trend_percentage DataIntersightHyperflexCluster#utilization_trend_percentage}
  */
  readonly utilizationTrendPercentage?: number;
  /**
  * The number of virtual machines present on this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#vm_count DataIntersightHyperflexCluster#vm_count}
  */
  readonly vmCount?: number;
  /**
  * The type of availability zone used by the cluster. Physical zones are always used in HyperFlex
  * Stretched Clusters. Logical zones may be used if a cluster has Logical Availability Zones (LAZ)
  * enabled.
  * * `UNKNOWN` - The type of zone configured on the HyperFlex cluster is not known.
  * * `NOT_CONFIGURED` - The zone type is not configured.
  * * `LOGICAL` - The zone is a logical zone created when the logical availability zones (LAZ) feature is enabled on the HyperFlex cluster.
  * * `PHYSICAL` - The zone is a physical zone configured on a stretched HyperFlex cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#zone_type DataIntersightHyperflexCluster#zone_type}
  */
  readonly zoneType?: string;
  /**
  * alarm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#alarm DataIntersightHyperflexCluster#alarm}
  */
  readonly alarm?: DataIntersightHyperflexClusterAlarm[] | cdktf.IResolvable;
  /**
  * alarm_summary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#alarm_summary DataIntersightHyperflexCluster#alarm_summary}
  */
  readonly alarmSummary?: DataIntersightHyperflexClusterAlarmSummary;
  /**
  * ancestors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#ancestors DataIntersightHyperflexCluster#ancestors}
  */
  readonly ancestors?: DataIntersightHyperflexClusterAncestors[] | cdktf.IResolvable;
  /**
  * associated_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#associated_profile DataIntersightHyperflexCluster#associated_profile}
  */
  readonly associatedProfile?: DataIntersightHyperflexClusterAssociatedProfile;
  /**
  * capability block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#capability DataIntersightHyperflexCluster#capability}
  */
  readonly capability?: DataIntersightHyperflexClusterCapability;
  /**
  * child_clusters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#child_clusters DataIntersightHyperflexCluster#child_clusters}
  */
  readonly childClusters?: DataIntersightHyperflexClusterChildClusters[] | cdktf.IResolvable;
  /**
  * encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#encryption DataIntersightHyperflexCluster#encryption}
  */
  readonly encryption?: DataIntersightHyperflexClusterEncryption;
  /**
  * health block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#health DataIntersightHyperflexCluster#health}
  */
  readonly health?: DataIntersightHyperflexClusterHealth;
  /**
  * license block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#license DataIntersightHyperflexCluster#license}
  */
  readonly license?: DataIntersightHyperflexClusterLicense;
  /**
  * network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#network_configuration DataIntersightHyperflexCluster#network_configuration}
  */
  readonly networkConfiguration?: DataIntersightHyperflexClusterNetworkConfiguration;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#nodes DataIntersightHyperflexCluster#nodes}
  */
  readonly nodes?: DataIntersightHyperflexClusterNodes[] | cdktf.IResolvable;
  /**
  * parent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#parent DataIntersightHyperflexCluster#parent}
  */
  readonly parent?: DataIntersightHyperflexClusterParent;
  /**
  * parent_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#parent_cluster DataIntersightHyperflexCluster#parent_cluster}
  */
  readonly parentCluster?: DataIntersightHyperflexClusterParentCluster;
  /**
  * permission_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#permission_resources DataIntersightHyperflexCluster#permission_resources}
  */
  readonly permissionResources?: DataIntersightHyperflexClusterPermissionResources[] | cdktf.IResolvable;
  /**
  * registered_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#registered_device DataIntersightHyperflexCluster#registered_device}
  */
  readonly registeredDevice?: DataIntersightHyperflexClusterRegisteredDevice;
  /**
  * storage_client_ip_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#storage_client_ip_pools DataIntersightHyperflexCluster#storage_client_ip_pools}
  */
  readonly storageClientIpPools?: DataIntersightHyperflexClusterStorageClientIpPools[] | cdktf.IResolvable;
  /**
  * storage_client_vrf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#storage_client_vrf DataIntersightHyperflexCluster#storage_client_vrf}
  */
  readonly storageClientVrf?: DataIntersightHyperflexClusterStorageClientVrf;
  /**
  * storage_containers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#storage_containers DataIntersightHyperflexCluster#storage_containers}
  */
  readonly storageContainers?: DataIntersightHyperflexClusterStorageContainers[] | cdktf.IResolvable;
  /**
  * summary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#summary DataIntersightHyperflexCluster#summary}
  */
  readonly summary?: DataIntersightHyperflexClusterSummary;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#tags DataIntersightHyperflexCluster#tags}
  */
  readonly tags?: DataIntersightHyperflexClusterTags[] | cdktf.IResolvable;
  /**
  * vcenter_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#vcenter_configuration DataIntersightHyperflexCluster#vcenter_configuration}
  */
  readonly vcenterConfiguration?: DataIntersightHyperflexClusterVcenterConfiguration;
  /**
  * version_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#version_context DataIntersightHyperflexCluster#version_context}
  */
  readonly versionContext?: DataIntersightHyperflexClusterVersionContext;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#volumes DataIntersightHyperflexCluster#volumes}
  */
  readonly volumes?: DataIntersightHyperflexClusterVolumes[] | cdktf.IResolvable;
}
export interface DataIntersightHyperflexClusterResultsAlarm {
}

export function dataIntersightHyperflexClusterResultsAlarmToTerraform(struct?: DataIntersightHyperflexClusterResultsAlarm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexClusterResultsAlarmToHclTerraform(struct?: DataIntersightHyperflexClusterResultsAlarm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexClusterResultsAlarmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterResultsAlarm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterResultsAlarm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexClusterResultsAlarmList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexClusterResultsAlarmOutputReference {
    return new DataIntersightHyperflexClusterResultsAlarmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterResultsAlarmSummary {
}

export function dataIntersightHyperflexClusterResultsAlarmSummaryToTerraform(struct?: DataIntersightHyperflexClusterResultsAlarmSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexClusterResultsAlarmSummaryToHclTerraform(struct?: DataIntersightHyperflexClusterResultsAlarmSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexClusterResultsAlarmSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterResultsAlarmSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterResultsAlarmSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // critical - computed: true, optional: false, required: false
  public get critical() {
    return this.getNumberAttribute('critical');
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // info - computed: true, optional: false, required: false
  public get info() {
    return this.getNumberAttribute('info');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // warning - computed: true, optional: false, required: false
  public get warning() {
    return this.getNumberAttribute('warning');
  }
}

export class DataIntersightHyperflexClusterResultsAlarmSummaryList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexClusterResultsAlarmSummaryOutputReference {
    return new DataIntersightHyperflexClusterResultsAlarmSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterResultsAncestors {
}

export function dataIntersightHyperflexClusterResultsAncestorsToTerraform(struct?: DataIntersightHyperflexClusterResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexClusterResultsAncestorsToHclTerraform(struct?: DataIntersightHyperflexClusterResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexClusterResultsAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterResultsAncestors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterResultsAncestors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexClusterResultsAncestorsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexClusterResultsAncestorsOutputReference {
    return new DataIntersightHyperflexClusterResultsAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterResultsAssociatedProfile {
}

export function dataIntersightHyperflexClusterResultsAssociatedProfileToTerraform(struct?: DataIntersightHyperflexClusterResultsAssociatedProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexClusterResultsAssociatedProfileToHclTerraform(struct?: DataIntersightHyperflexClusterResultsAssociatedProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexClusterResultsAssociatedProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterResultsAssociatedProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterResultsAssociatedProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexClusterResultsAssociatedProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexClusterResultsAssociatedProfileOutputReference {
    return new DataIntersightHyperflexClusterResultsAssociatedProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterResultsCapability {
}

export function dataIntersightHyperflexClusterResultsCapabilityToTerraform(struct?: DataIntersightHyperflexClusterResultsCapability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexClusterResultsCapabilityToHclTerraform(struct?: DataIntersightHyperflexClusterResultsCapability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexClusterResultsCapabilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterResultsCapability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterResultsCapability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // encryption_supported - computed: true, optional: false, required: false
  public get encryptionSupported() {
    return this.getBooleanAttribute('encryption_supported');
  }

  // iscsi_supported - computed: true, optional: false, required: false
  public get iscsiSupported() {
    return this.getBooleanAttribute('iscsi_supported');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // replication_supported - computed: true, optional: false, required: false
  public get replicationSupported() {
    return this.getBooleanAttribute('replication_supported');
  }
}

export class DataIntersightHyperflexClusterResultsCapabilityList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexClusterResultsCapabilityOutputReference {
    return new DataIntersightHyperflexClusterResultsCapabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterResultsChildClusters {
}

export function dataIntersightHyperflexClusterResultsChildClustersToTerraform(struct?: DataIntersightHyperflexClusterResultsChildClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexClusterResultsChildClustersToHclTerraform(struct?: DataIntersightHyperflexClusterResultsChildClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexClusterResultsChildClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterResultsChildClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterResultsChildClusters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexClusterResultsChildClustersList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexClusterResultsChildClustersOutputReference {
    return new DataIntersightHyperflexClusterResultsChildClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterResultsEncryption {
}

export function dataIntersightHyperflexClusterResultsEncryptionToTerraform(struct?: DataIntersightHyperflexClusterResultsEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexClusterResultsEncryptionToHclTerraform(struct?: DataIntersightHyperflexClusterResultsEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexClusterResultsEncryptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterResultsEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterResultsEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexClusterResultsEncryptionList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexClusterResultsEncryptionOutputReference {
    return new DataIntersightHyperflexClusterResultsEncryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterResultsHealth {
}

export function dataIntersightHyperflexClusterResultsHealthToTerraform(struct?: DataIntersightHyperflexClusterResultsHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexClusterResultsHealthToHclTerraform(struct?: DataIntersightHyperflexClusterResultsHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexClusterResultsHealthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterResultsHealth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterResultsHealth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexClusterResultsHealthList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexClusterResultsHealthOutputReference {
    return new DataIntersightHyperflexClusterResultsHealthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterResultsLicense {
}

export function dataIntersightHyperflexClusterResultsLicenseToTerraform(struct?: DataIntersightHyperflexClusterResultsLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexClusterResultsLicenseToHclTerraform(struct?: DataIntersightHyperflexClusterResultsLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexClusterResultsLicenseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterResultsLicense | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterResultsLicense | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexClusterResultsLicenseList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexClusterResultsLicenseOutputReference {
    return new DataIntersightHyperflexClusterResultsLicenseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterResultsNetworkConfiguration {
}

export function dataIntersightHyperflexClusterResultsNetworkConfigurationToTerraform(struct?: DataIntersightHyperflexClusterResultsNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexClusterResultsNetworkConfigurationToHclTerraform(struct?: DataIntersightHyperflexClusterResultsNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexClusterResultsNetworkConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterResultsNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterResultsNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // data_gateway_ip_address - computed: true, optional: false, required: false
  public get dataGatewayIpAddress() {
    return this.getStringAttribute('data_gateway_ip_address');
  }

  // data_ip_address - computed: true, optional: false, required: false
  public get dataIpAddress() {
    return this.getStringAttribute('data_ip_address');
  }

  // data_netmask - computed: true, optional: false, required: false
  public get dataNetmask() {
    return this.getStringAttribute('data_netmask');
  }

  // data_vlan - computed: true, optional: false, required: false
  public get dataVlan() {
    return this.getNumberAttribute('data_vlan');
  }

  // dns_suffix - computed: true, optional: false, required: false
  public get dnsSuffix() {
    return this.getStringAttribute('dns_suffix');
  }

  // jumbo_frame_enabled - computed: true, optional: false, required: false
  public get jumboFrameEnabled() {
    return this.getBooleanAttribute('jumbo_frame_enabled');
  }

  // live_migration_vlan - computed: true, optional: false, required: false
  public get liveMigrationVlan() {
    return this.getNumberAttribute('live_migration_vlan');
  }

  // mgmt_gateway_ip_address - computed: true, optional: false, required: false
  public get mgmtGatewayIpAddress() {
    return this.getStringAttribute('mgmt_gateway_ip_address');
  }

  // mgmt_ip_address - computed: true, optional: false, required: false
  public get mgmtIpAddress() {
    return this.getStringAttribute('mgmt_ip_address');
  }

  // mgmt_netmask - computed: true, optional: false, required: false
  public get mgmtNetmask() {
    return this.getStringAttribute('mgmt_netmask');
  }

  // mgmt_vlan - computed: true, optional: false, required: false
  public get mgmtVlan() {
    return this.getNumberAttribute('mgmt_vlan');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // vm_network_vlans - computed: true, optional: false, required: false
  public get vmNetworkVlans() {
    return this.getNumberListAttribute('vm_network_vlans');
  }
}

export class DataIntersightHyperflexClusterResultsNetworkConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexClusterResultsNetworkConfigurationOutputReference {
    return new DataIntersightHyperflexClusterResultsNetworkConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterResultsNodes {
}

export function dataIntersightHyperflexClusterResultsNodesToTerraform(struct?: DataIntersightHyperflexClusterResultsNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexClusterResultsNodesToHclTerraform(struct?: DataIntersightHyperflexClusterResultsNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexClusterResultsNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterResultsNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterResultsNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexClusterResultsNodesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexClusterResultsNodesOutputReference {
    return new DataIntersightHyperflexClusterResultsNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterResultsParent {
}

export function dataIntersightHyperflexClusterResultsParentToTerraform(struct?: DataIntersightHyperflexClusterResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexClusterResultsParentToHclTerraform(struct?: DataIntersightHyperflexClusterResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexClusterResultsParentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterResultsParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterResultsParent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexClusterResultsParentList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexClusterResultsParentOutputReference {
    return new DataIntersightHyperflexClusterResultsParentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterResultsParentCluster {
}

export function dataIntersightHyperflexClusterResultsParentClusterToTerraform(struct?: DataIntersightHyperflexClusterResultsParentCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexClusterResultsParentClusterToHclTerraform(struct?: DataIntersightHyperflexClusterResultsParentCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexClusterResultsParentClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterResultsParentCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterResultsParentCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexClusterResultsParentClusterList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexClusterResultsParentClusterOutputReference {
    return new DataIntersightHyperflexClusterResultsParentClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterResultsPermissionResources {
}

export function dataIntersightHyperflexClusterResultsPermissionResourcesToTerraform(struct?: DataIntersightHyperflexClusterResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexClusterResultsPermissionResourcesToHclTerraform(struct?: DataIntersightHyperflexClusterResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexClusterResultsPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterResultsPermissionResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterResultsPermissionResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexClusterResultsPermissionResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexClusterResultsPermissionResourcesOutputReference {
    return new DataIntersightHyperflexClusterResultsPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterResultsRegisteredDevice {
}

export function dataIntersightHyperflexClusterResultsRegisteredDeviceToTerraform(struct?: DataIntersightHyperflexClusterResultsRegisteredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexClusterResultsRegisteredDeviceToHclTerraform(struct?: DataIntersightHyperflexClusterResultsRegisteredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexClusterResultsRegisteredDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterResultsRegisteredDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterResultsRegisteredDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexClusterResultsRegisteredDeviceList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexClusterResultsRegisteredDeviceOutputReference {
    return new DataIntersightHyperflexClusterResultsRegisteredDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterResultsStorageClientIpPools {
}

export function dataIntersightHyperflexClusterResultsStorageClientIpPoolsToTerraform(struct?: DataIntersightHyperflexClusterResultsStorageClientIpPools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexClusterResultsStorageClientIpPoolsToHclTerraform(struct?: DataIntersightHyperflexClusterResultsStorageClientIpPools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexClusterResultsStorageClientIpPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterResultsStorageClientIpPools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterResultsStorageClientIpPools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexClusterResultsStorageClientIpPoolsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexClusterResultsStorageClientIpPoolsOutputReference {
    return new DataIntersightHyperflexClusterResultsStorageClientIpPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterResultsStorageClientVrf {
}

export function dataIntersightHyperflexClusterResultsStorageClientVrfToTerraform(struct?: DataIntersightHyperflexClusterResultsStorageClientVrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexClusterResultsStorageClientVrfToHclTerraform(struct?: DataIntersightHyperflexClusterResultsStorageClientVrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexClusterResultsStorageClientVrfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterResultsStorageClientVrf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterResultsStorageClientVrf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexClusterResultsStorageClientVrfList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexClusterResultsStorageClientVrfOutputReference {
    return new DataIntersightHyperflexClusterResultsStorageClientVrfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterResultsStorageContainers {
}

export function dataIntersightHyperflexClusterResultsStorageContainersToTerraform(struct?: DataIntersightHyperflexClusterResultsStorageContainers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexClusterResultsStorageContainersToHclTerraform(struct?: DataIntersightHyperflexClusterResultsStorageContainers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexClusterResultsStorageContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterResultsStorageContainers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterResultsStorageContainers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexClusterResultsStorageContainersList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexClusterResultsStorageContainersOutputReference {
    return new DataIntersightHyperflexClusterResultsStorageContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterResultsSummaryHealingInfo {
}

export function dataIntersightHyperflexClusterResultsSummaryHealingInfoToTerraform(struct?: DataIntersightHyperflexClusterResultsSummaryHealingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexClusterResultsSummaryHealingInfoToHclTerraform(struct?: DataIntersightHyperflexClusterResultsSummaryHealingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexClusterResultsSummaryHealingInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterResultsSummaryHealingInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterResultsSummaryHealingInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // estimated_completion_time_in_seconds - computed: true, optional: false, required: false
  public get estimatedCompletionTimeInSeconds() {
    return this.getNumberAttribute('estimated_completion_time_in_seconds');
  }

  // in_progress - computed: true, optional: false, required: false
  public get inProgress() {
    return this.getBooleanAttribute('in_progress');
  }

  // messages - computed: true, optional: false, required: false
  public get messages() {
    return this.getListAttribute('messages');
  }

  // messages_iterator - computed: true, optional: false, required: false
  public get messagesIterator() {
    return this.getStringAttribute('messages_iterator');
  }

  // messages_size - computed: true, optional: false, required: false
  public get messagesSize() {
    return this.getNumberAttribute('messages_size');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // percent_complete - computed: true, optional: false, required: false
  public get percentComplete() {
    return this.getNumberAttribute('percent_complete');
  }
}

export class DataIntersightHyperflexClusterResultsSummaryHealingInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexClusterResultsSummaryHealingInfoOutputReference {
    return new DataIntersightHyperflexClusterResultsSummaryHealingInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterResultsSummaryResiliencyInfo {
}

export function dataIntersightHyperflexClusterResultsSummaryResiliencyInfoToTerraform(struct?: DataIntersightHyperflexClusterResultsSummaryResiliencyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexClusterResultsSummaryResiliencyInfoToHclTerraform(struct?: DataIntersightHyperflexClusterResultsSummaryResiliencyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexClusterResultsSummaryResiliencyInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterResultsSummaryResiliencyInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterResultsSummaryResiliencyInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // hdd_failures_tolerable - computed: true, optional: false, required: false
  public get hddFailuresTolerable() {
    return this.getNumberAttribute('hdd_failures_tolerable');
  }

  // messages - computed: true, optional: false, required: false
  public get messages() {
    return this.getListAttribute('messages');
  }

  // messages_iterator - computed: true, optional: false, required: false
  public get messagesIterator() {
    return this.getStringAttribute('messages_iterator');
  }

  // messages_size - computed: true, optional: false, required: false
  public get messagesSize() {
    return this.getNumberAttribute('messages_size');
  }

  // node_failures_tolerable - computed: true, optional: false, required: false
  public get nodeFailuresTolerable() {
    return this.getNumberAttribute('node_failures_tolerable');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // ssd_failures_tolerable - computed: true, optional: false, required: false
  public get ssdFailuresTolerable() {
    return this.getNumberAttribute('ssd_failures_tolerable');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataIntersightHyperflexClusterResultsSummaryResiliencyInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexClusterResultsSummaryResiliencyInfoOutputReference {
    return new DataIntersightHyperflexClusterResultsSummaryResiliencyInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterResultsSummary {
}

export function dataIntersightHyperflexClusterResultsSummaryToTerraform(struct?: DataIntersightHyperflexClusterResultsSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexClusterResultsSummaryToHclTerraform(struct?: DataIntersightHyperflexClusterResultsSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexClusterResultsSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterResultsSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterResultsSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_nodes - computed: true, optional: false, required: false
  public get activeNodes() {
    return this.getStringAttribute('active_nodes');
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // boottime - computed: true, optional: false, required: false
  public get boottime() {
    return this.getNumberAttribute('boottime');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // cluster_access_policy - computed: true, optional: false, required: false
  public get clusterAccessPolicy() {
    return this.getStringAttribute('cluster_access_policy');
  }

  // compression_savings - computed: true, optional: false, required: false
  public get compressionSavings() {
    return this.getNumberAttribute('compression_savings');
  }

  // data_replication_compliance - computed: true, optional: false, required: false
  public get dataReplicationCompliance() {
    return this.getStringAttribute('data_replication_compliance');
  }

  // data_replication_factor - computed: true, optional: false, required: false
  public get dataReplicationFactor() {
    return this.getStringAttribute('data_replication_factor');
  }

  // deduplication_savings - computed: true, optional: false, required: false
  public get deduplicationSavings() {
    return this.getNumberAttribute('deduplication_savings');
  }

  // downtime - computed: true, optional: false, required: false
  public get downtime() {
    return this.getStringAttribute('downtime');
  }

  // free_capacity - computed: true, optional: false, required: false
  public get freeCapacity() {
    return this.getNumberAttribute('free_capacity');
  }

  // healing_info - computed: true, optional: false, required: false
  private _healingInfo = new DataIntersightHyperflexClusterResultsSummaryHealingInfoList(this, "healing_info", false);
  public get healingInfo() {
    return this._healingInfo;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // resiliency_details - computed: true, optional: false, required: false
  public get resiliencyDetails() {
    return this.getStringAttribute('resiliency_details');
  }

  // resiliency_details_size - computed: true, optional: false, required: false
  public get resiliencyDetailsSize() {
    return this.getNumberAttribute('resiliency_details_size');
  }

  // resiliency_info - computed: true, optional: false, required: false
  private _resiliencyInfo = new DataIntersightHyperflexClusterResultsSummaryResiliencyInfoList(this, "resiliency_info", false);
  public get resiliencyInfo() {
    return this._resiliencyInfo;
  }

  // space_status - computed: true, optional: false, required: false
  public get spaceStatus() {
    return this.getStringAttribute('space_status');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // total_capacity - computed: true, optional: false, required: false
  public get totalCapacity() {
    return this.getNumberAttribute('total_capacity');
  }

  // total_savings - computed: true, optional: false, required: false
  public get totalSavings() {
    return this.getNumberAttribute('total_savings');
  }

  // uptime - computed: true, optional: false, required: false
  public get uptime() {
    return this.getStringAttribute('uptime');
  }

  // used_capacity - computed: true, optional: false, required: false
  public get usedCapacity() {
    return this.getNumberAttribute('used_capacity');
  }
}

export class DataIntersightHyperflexClusterResultsSummaryList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexClusterResultsSummaryOutputReference {
    return new DataIntersightHyperflexClusterResultsSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterResultsTagsAncestorDefinitions {
}

export function dataIntersightHyperflexClusterResultsTagsAncestorDefinitionsToTerraform(struct?: DataIntersightHyperflexClusterResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexClusterResultsTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightHyperflexClusterResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexClusterResultsTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterResultsTagsAncestorDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterResultsTagsAncestorDefinitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexClusterResultsTagsAncestorDefinitionsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexClusterResultsTagsAncestorDefinitionsOutputReference {
    return new DataIntersightHyperflexClusterResultsTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterResultsTagsDefinition {
}

export function dataIntersightHyperflexClusterResultsTagsDefinitionToTerraform(struct?: DataIntersightHyperflexClusterResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexClusterResultsTagsDefinitionToHclTerraform(struct?: DataIntersightHyperflexClusterResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexClusterResultsTagsDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterResultsTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterResultsTagsDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexClusterResultsTagsDefinitionList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexClusterResultsTagsDefinitionOutputReference {
    return new DataIntersightHyperflexClusterResultsTagsDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterResultsTags {
}

export function dataIntersightHyperflexClusterResultsTagsToTerraform(struct?: DataIntersightHyperflexClusterResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexClusterResultsTagsToHclTerraform(struct?: DataIntersightHyperflexClusterResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexClusterResultsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterResultsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterResultsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // ancestor_definitions - computed: true, optional: false, required: false
  private _ancestorDefinitions = new DataIntersightHyperflexClusterResultsTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }

  // definition - computed: true, optional: false, required: false
  private _definition = new DataIntersightHyperflexClusterResultsTagsDefinitionList(this, "definition", false);
  public get definition() {
    return this._definition;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // propagated - computed: true, optional: false, required: false
  public get propagated() {
    return this.getBooleanAttribute('propagated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIntersightHyperflexClusterResultsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexClusterResultsTagsOutputReference {
    return new DataIntersightHyperflexClusterResultsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterResultsVcenterConfiguration {
}

export function dataIntersightHyperflexClusterResultsVcenterConfigurationToTerraform(struct?: DataIntersightHyperflexClusterResultsVcenterConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexClusterResultsVcenterConfigurationToHclTerraform(struct?: DataIntersightHyperflexClusterResultsVcenterConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexClusterResultsVcenterConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterResultsVcenterConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterResultsVcenterConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // datacenter_id - computed: true, optional: false, required: false
  public get datacenterId() {
    return this.getStringAttribute('datacenter_id');
  }

  // datacenter_name - computed: true, optional: false, required: false
  public get datacenterName() {
    return this.getStringAttribute('datacenter_name');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataIntersightHyperflexClusterResultsVcenterConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexClusterResultsVcenterConfigurationOutputReference {
    return new DataIntersightHyperflexClusterResultsVcenterConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterResultsVersionContextInterestedMos {
}

export function dataIntersightHyperflexClusterResultsVersionContextInterestedMosToTerraform(struct?: DataIntersightHyperflexClusterResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexClusterResultsVersionContextInterestedMosToHclTerraform(struct?: DataIntersightHyperflexClusterResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexClusterResultsVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterResultsVersionContextInterestedMos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterResultsVersionContextInterestedMos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexClusterResultsVersionContextInterestedMosList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexClusterResultsVersionContextInterestedMosOutputReference {
    return new DataIntersightHyperflexClusterResultsVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterResultsVersionContextRefMo {
}

export function dataIntersightHyperflexClusterResultsVersionContextRefMoToTerraform(struct?: DataIntersightHyperflexClusterResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexClusterResultsVersionContextRefMoToHclTerraform(struct?: DataIntersightHyperflexClusterResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexClusterResultsVersionContextRefMoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterResultsVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterResultsVersionContextRefMo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexClusterResultsVersionContextRefMoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexClusterResultsVersionContextRefMoOutputReference {
    return new DataIntersightHyperflexClusterResultsVersionContextRefMoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterResultsVersionContext {
}

export function dataIntersightHyperflexClusterResultsVersionContextToTerraform(struct?: DataIntersightHyperflexClusterResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexClusterResultsVersionContextToHclTerraform(struct?: DataIntersightHyperflexClusterResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexClusterResultsVersionContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterResultsVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterResultsVersionContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // interested_mos - computed: true, optional: false, required: false
  private _interestedMos = new DataIntersightHyperflexClusterResultsVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }

  // marked_for_deletion - computed: true, optional: false, required: false
  public get markedForDeletion() {
    return this.getBooleanAttribute('marked_for_deletion');
  }

  // nr_version - computed: true, optional: false, required: false
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // ref_mo - computed: true, optional: false, required: false
  private _refMo = new DataIntersightHyperflexClusterResultsVersionContextRefMoList(this, "ref_mo", false);
  public get refMo() {
    return this._refMo;
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // version_type - computed: true, optional: false, required: false
  public get versionType() {
    return this.getStringAttribute('version_type');
  }
}

export class DataIntersightHyperflexClusterResultsVersionContextList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexClusterResultsVersionContextOutputReference {
    return new DataIntersightHyperflexClusterResultsVersionContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterResultsVolumes {
}

export function dataIntersightHyperflexClusterResultsVolumesToTerraform(struct?: DataIntersightHyperflexClusterResultsVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexClusterResultsVolumesToHclTerraform(struct?: DataIntersightHyperflexClusterResultsVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexClusterResultsVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterResultsVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterResultsVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexClusterResultsVolumesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexClusterResultsVolumesOutputReference {
    return new DataIntersightHyperflexClusterResultsVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterResults {
}

export function dataIntersightHyperflexClusterResultsToTerraform(struct?: DataIntersightHyperflexClusterResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexClusterResultsToHclTerraform(struct?: DataIntersightHyperflexClusterResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexClusterResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_moid - computed: true, optional: false, required: false
  public get accountMoid() {
    return this.getStringAttribute('account_moid');
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // alarm - computed: true, optional: false, required: false
  private _alarm = new DataIntersightHyperflexClusterResultsAlarmList(this, "alarm", false);
  public get alarm() {
    return this._alarm;
  }

  // alarm_summary - computed: true, optional: false, required: false
  private _alarmSummary = new DataIntersightHyperflexClusterResultsAlarmSummaryList(this, "alarm_summary", false);
  public get alarmSummary() {
    return this._alarmSummary;
  }

  // ancestors - computed: true, optional: false, required: false
  private _ancestors = new DataIntersightHyperflexClusterResultsAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }

  // associated_profile - computed: true, optional: false, required: false
  private _associatedProfile = new DataIntersightHyperflexClusterResultsAssociatedProfileList(this, "associated_profile", false);
  public get associatedProfile() {
    return this._associatedProfile;
  }

  // capability - computed: true, optional: false, required: false
  private _capability = new DataIntersightHyperflexClusterResultsCapabilityList(this, "capability", false);
  public get capability() {
    return this._capability;
  }

  // capacity_runway - computed: true, optional: false, required: false
  public get capacityRunway() {
    return this.getNumberAttribute('capacity_runway');
  }

  // child_clusters - computed: true, optional: false, required: false
  private _childClusters = new DataIntersightHyperflexClusterResultsChildClustersList(this, "child_clusters", false);
  public get childClusters() {
    return this._childClusters;
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // cluster_purpose - computed: true, optional: false, required: false
  public get clusterPurpose() {
    return this.getStringAttribute('cluster_purpose');
  }

  // cluster_type - computed: true, optional: false, required: false
  public get clusterType() {
    return this.getNumberAttribute('cluster_type');
  }

  // cluster_uuid - computed: true, optional: false, required: false
  public get clusterUuid() {
    return this.getStringAttribute('cluster_uuid');
  }

  // compute_node_count - computed: true, optional: false, required: false
  public get computeNodeCount() {
    return this.getNumberAttribute('compute_node_count');
  }

  // converged_node_count - computed: true, optional: false, required: false
  public get convergedNodeCount() {
    return this.getNumberAttribute('converged_node_count');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }

  // dns_servers - computed: true, optional: false, required: false
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }

  // domain_group_moid - computed: true, optional: false, required: false
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }

  // drive_type - computed: true, optional: false, required: false
  public get driveType() {
    return this.getStringAttribute('drive_type');
  }

  // encryption - computed: true, optional: false, required: false
  private _encryption = new DataIntersightHyperflexClusterResultsEncryptionList(this, "encryption", false);
  public get encryption() {
    return this._encryption;
  }

  // encryption_status - computed: true, optional: false, required: false
  public get encryptionStatus() {
    return this.getStringAttribute('encryption_status');
  }

  // flt_aggr - computed: true, optional: false, required: false
  public get fltAggr() {
    return this.getNumberAttribute('flt_aggr');
  }

  // health - computed: true, optional: false, required: false
  private _health = new DataIntersightHyperflexClusterResultsHealthList(this, "health", false);
  public get health() {
    return this._health;
  }

  // hx_version - computed: true, optional: false, required: false
  public get hxVersion() {
    return this.getStringAttribute('hx_version');
  }

  // hxdp_build_version - computed: true, optional: false, required: false
  public get hxdpBuildVersion() {
    return this.getStringAttribute('hxdp_build_version');
  }

  // hypervisor_type - computed: true, optional: false, required: false
  public get hypervisorType() {
    return this.getStringAttribute('hypervisor_type');
  }

  // hypervisor_version - computed: true, optional: false, required: false
  public get hypervisorVersion() {
    return this.getStringAttribute('hypervisor_version');
  }

  // identity - computed: true, optional: false, required: false
  public get identity() {
    return this.getStringAttribute('identity');
  }

  // license - computed: true, optional: false, required: false
  private _license = new DataIntersightHyperflexClusterResultsLicenseList(this, "license", false);
  public get license() {
    return this._license;
  }

  // mod_time - computed: true, optional: false, required: false
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_configuration - computed: true, optional: false, required: false
  private _networkConfiguration = new DataIntersightHyperflexClusterResultsNetworkConfigurationList(this, "network_configuration", false);
  public get networkConfiguration() {
    return this._networkConfiguration;
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new DataIntersightHyperflexClusterResultsNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }

  // ntp_servers - computed: true, optional: false, required: false
  public get ntpServers() {
    return this.getListAttribute('ntp_servers');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // owners - computed: true, optional: false, required: false
  public get owners() {
    return this.getListAttribute('owners');
  }

  // parent - computed: true, optional: false, required: false
  private _parent = new DataIntersightHyperflexClusterResultsParentList(this, "parent", false);
  public get parent() {
    return this._parent;
  }

  // parent_cluster - computed: true, optional: false, required: false
  private _parentCluster = new DataIntersightHyperflexClusterResultsParentClusterList(this, "parent_cluster", false);
  public get parentCluster() {
    return this._parentCluster;
  }

  // permission_resources - computed: true, optional: false, required: false
  private _permissionResources = new DataIntersightHyperflexClusterResultsPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }

  // registered_device - computed: true, optional: false, required: false
  private _registeredDevice = new DataIntersightHyperflexClusterResultsRegisteredDeviceList(this, "registered_device", false);
  public get registeredDevice() {
    return this._registeredDevice;
  }

  // shared_scope - computed: true, optional: false, required: false
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_capacity - computed: true, optional: false, required: false
  public get storageCapacity() {
    return this.getNumberAttribute('storage_capacity');
  }

  // storage_client_ip_pools - computed: true, optional: false, required: false
  private _storageClientIpPools = new DataIntersightHyperflexClusterResultsStorageClientIpPoolsList(this, "storage_client_ip_pools", false);
  public get storageClientIpPools() {
    return this._storageClientIpPools;
  }

  // storage_client_vrf - computed: true, optional: false, required: false
  private _storageClientVrf = new DataIntersightHyperflexClusterResultsStorageClientVrfList(this, "storage_client_vrf", false);
  public get storageClientVrf() {
    return this._storageClientVrf;
  }

  // storage_containers - computed: true, optional: false, required: false
  private _storageContainers = new DataIntersightHyperflexClusterResultsStorageContainersList(this, "storage_containers", false);
  public get storageContainers() {
    return this._storageContainers;
  }

  // storage_node_count - computed: true, optional: false, required: false
  public get storageNodeCount() {
    return this.getNumberAttribute('storage_node_count');
  }

  // storage_utilization - computed: true, optional: false, required: false
  public get storageUtilization() {
    return this.getNumberAttribute('storage_utilization');
  }

  // summary - computed: true, optional: false, required: false
  private _summary = new DataIntersightHyperflexClusterResultsSummaryList(this, "summary", false);
  public get summary() {
    return this._summary;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataIntersightHyperflexClusterResultsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // upgrade_status - computed: true, optional: false, required: false
  public get upgradeStatus() {
    return this.getStringAttribute('upgrade_status');
  }

  // uplink_speed - computed: true, optional: false, required: false
  public get uplinkSpeed() {
    return this.getStringAttribute('uplink_speed');
  }

  // utilization_percentage - computed: true, optional: false, required: false
  public get utilizationPercentage() {
    return this.getNumberAttribute('utilization_percentage');
  }

  // utilization_trend_percentage - computed: true, optional: false, required: false
  public get utilizationTrendPercentage() {
    return this.getNumberAttribute('utilization_trend_percentage');
  }

  // vcenter_configuration - computed: true, optional: false, required: false
  private _vcenterConfiguration = new DataIntersightHyperflexClusterResultsVcenterConfigurationList(this, "vcenter_configuration", false);
  public get vcenterConfiguration() {
    return this._vcenterConfiguration;
  }

  // version_context - computed: true, optional: false, required: false
  private _versionContext = new DataIntersightHyperflexClusterResultsVersionContextList(this, "version_context", false);
  public get versionContext() {
    return this._versionContext;
  }

  // vm_count - computed: true, optional: false, required: false
  public get vmCount() {
    return this.getNumberAttribute('vm_count');
  }

  // volumes - computed: true, optional: false, required: false
  private _volumes = new DataIntersightHyperflexClusterResultsVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }

  // zone_type - computed: true, optional: false, required: false
  public get zoneType() {
    return this.getStringAttribute('zone_type');
  }
}

export class DataIntersightHyperflexClusterResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexClusterResultsOutputReference {
    return new DataIntersightHyperflexClusterResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterAlarm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#additional_properties DataIntersightHyperflexCluster#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#class_id DataIntersightHyperflexCluster#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#moid DataIntersightHyperflexCluster#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#object_type DataIntersightHyperflexCluster#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#selector DataIntersightHyperflexCluster#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexClusterAlarmToTerraform(struct?: DataIntersightHyperflexClusterAlarm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexClusterAlarmToHclTerraform(struct?: DataIntersightHyperflexClusterAlarm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexClusterAlarmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterAlarm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterAlarm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightHyperflexClusterAlarmList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexClusterAlarm[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexClusterAlarmOutputReference {
    return new DataIntersightHyperflexClusterAlarmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterAlarmSummary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#additional_properties DataIntersightHyperflexCluster#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#class_id DataIntersightHyperflexCluster#class_id}
  */
  readonly classId?: string;
  /**
  * The count of alarms that have severity type Critical.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#critical DataIntersightHyperflexCluster#critical}
  */
  readonly critical?: number;
  /**
  * The health of the managed endpoint. The health is computed from the highest-severity alarm raised on the endpoint.
  * * `Healthy` - The Enum value represents that the entity is healthy.
  * * `Warning` - The Enum value Warning represents that the entity has one or more active warnings on it.
  * * `Critical` - The Enum value Critical represents that the entity is in a critical state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#health DataIntersightHyperflexCluster#health}
  */
  readonly health?: string;
  /**
  * The count of alarms that have severity type Info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#info DataIntersightHyperflexCluster#info}
  */
  readonly info?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#object_type DataIntersightHyperflexCluster#object_type}
  */
  readonly objectType?: string;
  /**
  * The count of alarms that have severity type Warning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#warning DataIntersightHyperflexCluster#warning}
  */
  readonly warning?: number;
}

export function dataIntersightHyperflexClusterAlarmSummaryToTerraform(struct?: DataIntersightHyperflexClusterAlarmSummaryOutputReference | DataIntersightHyperflexClusterAlarmSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    critical: cdktf.numberToTerraform(struct!.critical),
    health: cdktf.stringToTerraform(struct!.health),
    info: cdktf.numberToTerraform(struct!.info),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    warning: cdktf.numberToTerraform(struct!.warning),
  }
}


export function dataIntersightHyperflexClusterAlarmSummaryToHclTerraform(struct?: DataIntersightHyperflexClusterAlarmSummaryOutputReference | DataIntersightHyperflexClusterAlarmSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    critical: {
      value: cdktf.numberToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health: {
      value: cdktf.stringToHclTerraform(struct!.health),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    info: {
      value: cdktf.numberToHclTerraform(struct!.info),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning: {
      value: cdktf.numberToHclTerraform(struct!.warning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexClusterAlarmSummaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexClusterAlarmSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._health !== undefined) {
      hasAnyValues = true;
      internalValueResult.health = this._health;
    }
    if (this._info !== undefined) {
      hasAnyValues = true;
      internalValueResult.info = this._info;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._warning !== undefined) {
      hasAnyValues = true;
      internalValueResult.warning = this._warning;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterAlarmSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._critical = undefined;
      this._health = undefined;
      this._info = undefined;
      this._objectType = undefined;
      this._warning = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._critical = value.critical;
      this._health = value.health;
      this._info = value.info;
      this._objectType = value.objectType;
      this._warning = value.warning;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // critical - computed: false, optional: true, required: false
  private _critical?: number; 
  public get critical() {
    return this.getNumberAttribute('critical');
  }
  public set critical(value: number) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // health - computed: false, optional: true, required: false
  private _health?: string; 
  public get health() {
    return this.getStringAttribute('health');
  }
  public set health(value: string) {
    this._health = value;
  }
  public resetHealth() {
    this._health = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health;
  }

  // info - computed: false, optional: true, required: false
  private _info?: number; 
  public get info() {
    return this.getNumberAttribute('info');
  }
  public set info(value: number) {
    this._info = value;
  }
  public resetInfo() {
    this._info = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // warning - computed: false, optional: true, required: false
  private _warning?: number; 
  public get warning() {
    return this.getNumberAttribute('warning');
  }
  public set warning(value: number) {
    this._warning = value;
  }
  public resetWarning() {
    this._warning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning;
  }
}
export interface DataIntersightHyperflexClusterAncestors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#additional_properties DataIntersightHyperflexCluster#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#class_id DataIntersightHyperflexCluster#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#moid DataIntersightHyperflexCluster#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#object_type DataIntersightHyperflexCluster#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#selector DataIntersightHyperflexCluster#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexClusterAncestorsToTerraform(struct?: DataIntersightHyperflexClusterAncestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexClusterAncestorsToHclTerraform(struct?: DataIntersightHyperflexClusterAncestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexClusterAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterAncestors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterAncestors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightHyperflexClusterAncestorsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexClusterAncestors[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexClusterAncestorsOutputReference {
    return new DataIntersightHyperflexClusterAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterAssociatedProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#additional_properties DataIntersightHyperflexCluster#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#class_id DataIntersightHyperflexCluster#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#moid DataIntersightHyperflexCluster#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#object_type DataIntersightHyperflexCluster#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#selector DataIntersightHyperflexCluster#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexClusterAssociatedProfileToTerraform(struct?: DataIntersightHyperflexClusterAssociatedProfileOutputReference | DataIntersightHyperflexClusterAssociatedProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexClusterAssociatedProfileToHclTerraform(struct?: DataIntersightHyperflexClusterAssociatedProfileOutputReference | DataIntersightHyperflexClusterAssociatedProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexClusterAssociatedProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexClusterAssociatedProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterAssociatedProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightHyperflexClusterCapability {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#additional_properties DataIntersightHyperflexCluster#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#class_id DataIntersightHyperflexCluster#class_id}
  */
  readonly classId?: string;
  /**
  * Specifies if encryption is supported in the HyperFlex cluster. The HyperFlex cluster supports self
  * encrypting drives (SED).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#encryption_supported DataIntersightHyperflexCluster#encryption_supported}
  */
  readonly encryptionSupported?: boolean | cdktf.IResolvable;
  /**
  * Specifies if iSCSI is supported in the HyperFlex cluster. The HyperFlex cluster supports an iSCSI network,
  * iSCSI initiator groups, targets, and logical unit number (LUN).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#iscsi_supported DataIntersightHyperflexCluster#iscsi_supported}
  */
  readonly iscsiSupported?: boolean | cdktf.IResolvable;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#object_type DataIntersightHyperflexCluster#object_type}
  */
  readonly objectType?: string;
  /**
  * Specifies if replication is supported in the HyperFlex cluster. 
  * The HyperFlex cluster supports 1:1 disaster recovery and N:1 backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#replication_supported DataIntersightHyperflexCluster#replication_supported}
  */
  readonly replicationSupported?: boolean | cdktf.IResolvable;
}

export function dataIntersightHyperflexClusterCapabilityToTerraform(struct?: DataIntersightHyperflexClusterCapabilityOutputReference | DataIntersightHyperflexClusterCapability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    encryption_supported: cdktf.booleanToTerraform(struct!.encryptionSupported),
    iscsi_supported: cdktf.booleanToTerraform(struct!.iscsiSupported),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    replication_supported: cdktf.booleanToTerraform(struct!.replicationSupported),
  }
}


export function dataIntersightHyperflexClusterCapabilityToHclTerraform(struct?: DataIntersightHyperflexClusterCapabilityOutputReference | DataIntersightHyperflexClusterCapability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_supported: {
      value: cdktf.booleanToHclTerraform(struct!.encryptionSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iscsi_supported: {
      value: cdktf.booleanToHclTerraform(struct!.iscsiSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replication_supported: {
      value: cdktf.booleanToHclTerraform(struct!.replicationSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexClusterCapabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexClusterCapability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._encryptionSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionSupported = this._encryptionSupported;
    }
    if (this._iscsiSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.iscsiSupported = this._iscsiSupported;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._replicationSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationSupported = this._replicationSupported;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterCapability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._encryptionSupported = undefined;
      this._iscsiSupported = undefined;
      this._objectType = undefined;
      this._replicationSupported = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._encryptionSupported = value.encryptionSupported;
      this._iscsiSupported = value.iscsiSupported;
      this._objectType = value.objectType;
      this._replicationSupported = value.replicationSupported;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // encryption_supported - computed: false, optional: true, required: false
  private _encryptionSupported?: boolean | cdktf.IResolvable; 
  public get encryptionSupported() {
    return this.getBooleanAttribute('encryption_supported');
  }
  public set encryptionSupported(value: boolean | cdktf.IResolvable) {
    this._encryptionSupported = value;
  }
  public resetEncryptionSupported() {
    this._encryptionSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSupportedInput() {
    return this._encryptionSupported;
  }

  // iscsi_supported - computed: false, optional: true, required: false
  private _iscsiSupported?: boolean | cdktf.IResolvable; 
  public get iscsiSupported() {
    return this.getBooleanAttribute('iscsi_supported');
  }
  public set iscsiSupported(value: boolean | cdktf.IResolvable) {
    this._iscsiSupported = value;
  }
  public resetIscsiSupported() {
    this._iscsiSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiSupportedInput() {
    return this._iscsiSupported;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // replication_supported - computed: false, optional: true, required: false
  private _replicationSupported?: boolean | cdktf.IResolvable; 
  public get replicationSupported() {
    return this.getBooleanAttribute('replication_supported');
  }
  public set replicationSupported(value: boolean | cdktf.IResolvable) {
    this._replicationSupported = value;
  }
  public resetReplicationSupported() {
    this._replicationSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSupportedInput() {
    return this._replicationSupported;
  }
}
export interface DataIntersightHyperflexClusterChildClusters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#additional_properties DataIntersightHyperflexCluster#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#class_id DataIntersightHyperflexCluster#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#moid DataIntersightHyperflexCluster#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#object_type DataIntersightHyperflexCluster#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#selector DataIntersightHyperflexCluster#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexClusterChildClustersToTerraform(struct?: DataIntersightHyperflexClusterChildClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexClusterChildClustersToHclTerraform(struct?: DataIntersightHyperflexClusterChildClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexClusterChildClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterChildClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterChildClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightHyperflexClusterChildClustersList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexClusterChildClusters[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexClusterChildClustersOutputReference {
    return new DataIntersightHyperflexClusterChildClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#additional_properties DataIntersightHyperflexCluster#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#class_id DataIntersightHyperflexCluster#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#moid DataIntersightHyperflexCluster#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#object_type DataIntersightHyperflexCluster#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#selector DataIntersightHyperflexCluster#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexClusterEncryptionToTerraform(struct?: DataIntersightHyperflexClusterEncryptionOutputReference | DataIntersightHyperflexClusterEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexClusterEncryptionToHclTerraform(struct?: DataIntersightHyperflexClusterEncryptionOutputReference | DataIntersightHyperflexClusterEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexClusterEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexClusterEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightHyperflexClusterHealth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#additional_properties DataIntersightHyperflexCluster#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#class_id DataIntersightHyperflexCluster#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#moid DataIntersightHyperflexCluster#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#object_type DataIntersightHyperflexCluster#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#selector DataIntersightHyperflexCluster#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexClusterHealthToTerraform(struct?: DataIntersightHyperflexClusterHealthOutputReference | DataIntersightHyperflexClusterHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexClusterHealthToHclTerraform(struct?: DataIntersightHyperflexClusterHealthOutputReference | DataIntersightHyperflexClusterHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexClusterHealthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexClusterHealth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterHealth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightHyperflexClusterLicense {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#additional_properties DataIntersightHyperflexCluster#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#class_id DataIntersightHyperflexCluster#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#moid DataIntersightHyperflexCluster#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#object_type DataIntersightHyperflexCluster#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#selector DataIntersightHyperflexCluster#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexClusterLicenseToTerraform(struct?: DataIntersightHyperflexClusterLicenseOutputReference | DataIntersightHyperflexClusterLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexClusterLicenseToHclTerraform(struct?: DataIntersightHyperflexClusterLicenseOutputReference | DataIntersightHyperflexClusterLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexClusterLicenseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexClusterLicense | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterLicense | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightHyperflexClusterNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#additional_properties DataIntersightHyperflexCluster#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#class_id DataIntersightHyperflexCluster#class_id}
  */
  readonly classId?: string;
  /**
  * The data gateway IP of the HyperFlex cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#data_gateway_ip_address DataIntersightHyperflexCluster#data_gateway_ip_address}
  */
  readonly dataGatewayIpAddress?: string;
  /**
  * The data IP of the HyperFlex cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#data_ip_address DataIntersightHyperflexCluster#data_ip_address}
  */
  readonly dataIpAddress?: string;
  /**
  * The data subnet mask of the HyperFlex cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#data_netmask DataIntersightHyperflexCluster#data_netmask}
  */
  readonly dataNetmask?: string;
  /**
  * The data VLAN of the HyperFlex cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#data_vlan DataIntersightHyperflexCluster#data_vlan}
  */
  readonly dataVlan?: number;
  /**
  * The DNS domain suffix configured for the HyperFlex Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#dns_suffix DataIntersightHyperflexCluster#dns_suffix}
  */
  readonly dnsSuffix?: string;
  /**
  * The jumbo frame enablement of the HyperFlex cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#jumbo_frame_enabled DataIntersightHyperflexCluster#jumbo_frame_enabled}
  */
  readonly jumboFrameEnabled?: boolean | cdktf.IResolvable;
  /**
  * The live migration VLAN ID of the HyperFlex cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#live_migration_vlan DataIntersightHyperflexCluster#live_migration_vlan}
  */
  readonly liveMigrationVlan?: number;
  /**
  * The management gateway IP of the HyperFlex cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#mgmt_gateway_ip_address DataIntersightHyperflexCluster#mgmt_gateway_ip_address}
  */
  readonly mgmtGatewayIpAddress?: string;
  /**
  * The management IP or the hostname of the HyperFlex cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#mgmt_ip_address DataIntersightHyperflexCluster#mgmt_ip_address}
  */
  readonly mgmtIpAddress?: string;
  /**
  * The management subnet mask of the HyperFlex cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#mgmt_netmask DataIntersightHyperflexCluster#mgmt_netmask}
  */
  readonly mgmtNetmask?: string;
  /**
  * The management VLAN ID of the HyperFlex cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#mgmt_vlan DataIntersightHyperflexCluster#mgmt_vlan}
  */
  readonly mgmtVlan?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#object_type DataIntersightHyperflexCluster#object_type}
  */
  readonly objectType?: string;
  /**
  * The timezone configured on the HyperFlex Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#timezone DataIntersightHyperflexCluster#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#vm_network_vlans DataIntersightHyperflexCluster#vm_network_vlans}
  */
  readonly vmNetworkVlans?: number[];
}

export function dataIntersightHyperflexClusterNetworkConfigurationToTerraform(struct?: DataIntersightHyperflexClusterNetworkConfigurationOutputReference | DataIntersightHyperflexClusterNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    data_gateway_ip_address: cdktf.stringToTerraform(struct!.dataGatewayIpAddress),
    data_ip_address: cdktf.stringToTerraform(struct!.dataIpAddress),
    data_netmask: cdktf.stringToTerraform(struct!.dataNetmask),
    data_vlan: cdktf.numberToTerraform(struct!.dataVlan),
    dns_suffix: cdktf.stringToTerraform(struct!.dnsSuffix),
    jumbo_frame_enabled: cdktf.booleanToTerraform(struct!.jumboFrameEnabled),
    live_migration_vlan: cdktf.numberToTerraform(struct!.liveMigrationVlan),
    mgmt_gateway_ip_address: cdktf.stringToTerraform(struct!.mgmtGatewayIpAddress),
    mgmt_ip_address: cdktf.stringToTerraform(struct!.mgmtIpAddress),
    mgmt_netmask: cdktf.stringToTerraform(struct!.mgmtNetmask),
    mgmt_vlan: cdktf.numberToTerraform(struct!.mgmtVlan),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    vm_network_vlans: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.vmNetworkVlans),
  }
}


export function dataIntersightHyperflexClusterNetworkConfigurationToHclTerraform(struct?: DataIntersightHyperflexClusterNetworkConfigurationOutputReference | DataIntersightHyperflexClusterNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_gateway_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.dataGatewayIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.dataIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_netmask: {
      value: cdktf.stringToHclTerraform(struct!.dataNetmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_vlan: {
      value: cdktf.numberToHclTerraform(struct!.dataVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_suffix: {
      value: cdktf.stringToHclTerraform(struct!.dnsSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jumbo_frame_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.jumboFrameEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    live_migration_vlan: {
      value: cdktf.numberToHclTerraform(struct!.liveMigrationVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mgmt_gateway_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.mgmtGatewayIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mgmt_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.mgmtIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mgmt_netmask: {
      value: cdktf.stringToHclTerraform(struct!.mgmtNetmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mgmt_vlan: {
      value: cdktf.numberToHclTerraform(struct!.mgmtVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_network_vlans: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.vmNetworkVlans),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexClusterNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexClusterNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._dataGatewayIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataGatewayIpAddress = this._dataGatewayIpAddress;
    }
    if (this._dataIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataIpAddress = this._dataIpAddress;
    }
    if (this._dataNetmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataNetmask = this._dataNetmask;
    }
    if (this._dataVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVlan = this._dataVlan;
    }
    if (this._dnsSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSuffix = this._dnsSuffix;
    }
    if (this._jumboFrameEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.jumboFrameEnabled = this._jumboFrameEnabled;
    }
    if (this._liveMigrationVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.liveMigrationVlan = this._liveMigrationVlan;
    }
    if (this._mgmtGatewayIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtGatewayIpAddress = this._mgmtGatewayIpAddress;
    }
    if (this._mgmtIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtIpAddress = this._mgmtIpAddress;
    }
    if (this._mgmtNetmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtNetmask = this._mgmtNetmask;
    }
    if (this._mgmtVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtVlan = this._mgmtVlan;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._vmNetworkVlans !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmNetworkVlans = this._vmNetworkVlans;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._dataGatewayIpAddress = undefined;
      this._dataIpAddress = undefined;
      this._dataNetmask = undefined;
      this._dataVlan = undefined;
      this._dnsSuffix = undefined;
      this._jumboFrameEnabled = undefined;
      this._liveMigrationVlan = undefined;
      this._mgmtGatewayIpAddress = undefined;
      this._mgmtIpAddress = undefined;
      this._mgmtNetmask = undefined;
      this._mgmtVlan = undefined;
      this._objectType = undefined;
      this._timezone = undefined;
      this._vmNetworkVlans = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._dataGatewayIpAddress = value.dataGatewayIpAddress;
      this._dataIpAddress = value.dataIpAddress;
      this._dataNetmask = value.dataNetmask;
      this._dataVlan = value.dataVlan;
      this._dnsSuffix = value.dnsSuffix;
      this._jumboFrameEnabled = value.jumboFrameEnabled;
      this._liveMigrationVlan = value.liveMigrationVlan;
      this._mgmtGatewayIpAddress = value.mgmtGatewayIpAddress;
      this._mgmtIpAddress = value.mgmtIpAddress;
      this._mgmtNetmask = value.mgmtNetmask;
      this._mgmtVlan = value.mgmtVlan;
      this._objectType = value.objectType;
      this._timezone = value.timezone;
      this._vmNetworkVlans = value.vmNetworkVlans;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // data_gateway_ip_address - computed: false, optional: true, required: false
  private _dataGatewayIpAddress?: string; 
  public get dataGatewayIpAddress() {
    return this.getStringAttribute('data_gateway_ip_address');
  }
  public set dataGatewayIpAddress(value: string) {
    this._dataGatewayIpAddress = value;
  }
  public resetDataGatewayIpAddress() {
    this._dataGatewayIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataGatewayIpAddressInput() {
    return this._dataGatewayIpAddress;
  }

  // data_ip_address - computed: false, optional: true, required: false
  private _dataIpAddress?: string; 
  public get dataIpAddress() {
    return this.getStringAttribute('data_ip_address');
  }
  public set dataIpAddress(value: string) {
    this._dataIpAddress = value;
  }
  public resetDataIpAddress() {
    this._dataIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataIpAddressInput() {
    return this._dataIpAddress;
  }

  // data_netmask - computed: false, optional: true, required: false
  private _dataNetmask?: string; 
  public get dataNetmask() {
    return this.getStringAttribute('data_netmask');
  }
  public set dataNetmask(value: string) {
    this._dataNetmask = value;
  }
  public resetDataNetmask() {
    this._dataNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNetmaskInput() {
    return this._dataNetmask;
  }

  // data_vlan - computed: false, optional: true, required: false
  private _dataVlan?: number; 
  public get dataVlan() {
    return this.getNumberAttribute('data_vlan');
  }
  public set dataVlan(value: number) {
    this._dataVlan = value;
  }
  public resetDataVlan() {
    this._dataVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVlanInput() {
    return this._dataVlan;
  }

  // dns_suffix - computed: false, optional: true, required: false
  private _dnsSuffix?: string; 
  public get dnsSuffix() {
    return this.getStringAttribute('dns_suffix');
  }
  public set dnsSuffix(value: string) {
    this._dnsSuffix = value;
  }
  public resetDnsSuffix() {
    this._dnsSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSuffixInput() {
    return this._dnsSuffix;
  }

  // jumbo_frame_enabled - computed: false, optional: true, required: false
  private _jumboFrameEnabled?: boolean | cdktf.IResolvable; 
  public get jumboFrameEnabled() {
    return this.getBooleanAttribute('jumbo_frame_enabled');
  }
  public set jumboFrameEnabled(value: boolean | cdktf.IResolvable) {
    this._jumboFrameEnabled = value;
  }
  public resetJumboFrameEnabled() {
    this._jumboFrameEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumboFrameEnabledInput() {
    return this._jumboFrameEnabled;
  }

  // live_migration_vlan - computed: false, optional: true, required: false
  private _liveMigrationVlan?: number; 
  public get liveMigrationVlan() {
    return this.getNumberAttribute('live_migration_vlan');
  }
  public set liveMigrationVlan(value: number) {
    this._liveMigrationVlan = value;
  }
  public resetLiveMigrationVlan() {
    this._liveMigrationVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveMigrationVlanInput() {
    return this._liveMigrationVlan;
  }

  // mgmt_gateway_ip_address - computed: false, optional: true, required: false
  private _mgmtGatewayIpAddress?: string; 
  public get mgmtGatewayIpAddress() {
    return this.getStringAttribute('mgmt_gateway_ip_address');
  }
  public set mgmtGatewayIpAddress(value: string) {
    this._mgmtGatewayIpAddress = value;
  }
  public resetMgmtGatewayIpAddress() {
    this._mgmtGatewayIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtGatewayIpAddressInput() {
    return this._mgmtGatewayIpAddress;
  }

  // mgmt_ip_address - computed: false, optional: true, required: false
  private _mgmtIpAddress?: string; 
  public get mgmtIpAddress() {
    return this.getStringAttribute('mgmt_ip_address');
  }
  public set mgmtIpAddress(value: string) {
    this._mgmtIpAddress = value;
  }
  public resetMgmtIpAddress() {
    this._mgmtIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtIpAddressInput() {
    return this._mgmtIpAddress;
  }

  // mgmt_netmask - computed: false, optional: true, required: false
  private _mgmtNetmask?: string; 
  public get mgmtNetmask() {
    return this.getStringAttribute('mgmt_netmask');
  }
  public set mgmtNetmask(value: string) {
    this._mgmtNetmask = value;
  }
  public resetMgmtNetmask() {
    this._mgmtNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtNetmaskInput() {
    return this._mgmtNetmask;
  }

  // mgmt_vlan - computed: false, optional: true, required: false
  private _mgmtVlan?: number; 
  public get mgmtVlan() {
    return this.getNumberAttribute('mgmt_vlan');
  }
  public set mgmtVlan(value: number) {
    this._mgmtVlan = value;
  }
  public resetMgmtVlan() {
    this._mgmtVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtVlanInput() {
    return this._mgmtVlan;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // vm_network_vlans - computed: false, optional: true, required: false
  private _vmNetworkVlans?: number[]; 
  public get vmNetworkVlans() {
    return this.getNumberListAttribute('vm_network_vlans');
  }
  public set vmNetworkVlans(value: number[]) {
    this._vmNetworkVlans = value;
  }
  public resetVmNetworkVlans() {
    this._vmNetworkVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmNetworkVlansInput() {
    return this._vmNetworkVlans;
  }
}
export interface DataIntersightHyperflexClusterNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#additional_properties DataIntersightHyperflexCluster#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#class_id DataIntersightHyperflexCluster#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#moid DataIntersightHyperflexCluster#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#object_type DataIntersightHyperflexCluster#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#selector DataIntersightHyperflexCluster#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexClusterNodesToTerraform(struct?: DataIntersightHyperflexClusterNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexClusterNodesToHclTerraform(struct?: DataIntersightHyperflexClusterNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexClusterNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightHyperflexClusterNodesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexClusterNodes[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexClusterNodesOutputReference {
    return new DataIntersightHyperflexClusterNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterParent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#additional_properties DataIntersightHyperflexCluster#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#class_id DataIntersightHyperflexCluster#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#moid DataIntersightHyperflexCluster#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#object_type DataIntersightHyperflexCluster#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#selector DataIntersightHyperflexCluster#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexClusterParentToTerraform(struct?: DataIntersightHyperflexClusterParentOutputReference | DataIntersightHyperflexClusterParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexClusterParentToHclTerraform(struct?: DataIntersightHyperflexClusterParentOutputReference | DataIntersightHyperflexClusterParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexClusterParentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexClusterParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterParent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightHyperflexClusterParentCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#additional_properties DataIntersightHyperflexCluster#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#class_id DataIntersightHyperflexCluster#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#moid DataIntersightHyperflexCluster#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#object_type DataIntersightHyperflexCluster#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#selector DataIntersightHyperflexCluster#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexClusterParentClusterToTerraform(struct?: DataIntersightHyperflexClusterParentClusterOutputReference | DataIntersightHyperflexClusterParentCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexClusterParentClusterToHclTerraform(struct?: DataIntersightHyperflexClusterParentClusterOutputReference | DataIntersightHyperflexClusterParentCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexClusterParentClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexClusterParentCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterParentCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightHyperflexClusterPermissionResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#additional_properties DataIntersightHyperflexCluster#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#class_id DataIntersightHyperflexCluster#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#moid DataIntersightHyperflexCluster#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#object_type DataIntersightHyperflexCluster#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#selector DataIntersightHyperflexCluster#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexClusterPermissionResourcesToTerraform(struct?: DataIntersightHyperflexClusterPermissionResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexClusterPermissionResourcesToHclTerraform(struct?: DataIntersightHyperflexClusterPermissionResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexClusterPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterPermissionResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterPermissionResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightHyperflexClusterPermissionResourcesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexClusterPermissionResources[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexClusterPermissionResourcesOutputReference {
    return new DataIntersightHyperflexClusterPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterRegisteredDevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#additional_properties DataIntersightHyperflexCluster#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#class_id DataIntersightHyperflexCluster#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#moid DataIntersightHyperflexCluster#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#object_type DataIntersightHyperflexCluster#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#selector DataIntersightHyperflexCluster#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexClusterRegisteredDeviceToTerraform(struct?: DataIntersightHyperflexClusterRegisteredDeviceOutputReference | DataIntersightHyperflexClusterRegisteredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexClusterRegisteredDeviceToHclTerraform(struct?: DataIntersightHyperflexClusterRegisteredDeviceOutputReference | DataIntersightHyperflexClusterRegisteredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexClusterRegisteredDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexClusterRegisteredDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterRegisteredDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightHyperflexClusterStorageClientIpPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#additional_properties DataIntersightHyperflexCluster#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#class_id DataIntersightHyperflexCluster#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#moid DataIntersightHyperflexCluster#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#object_type DataIntersightHyperflexCluster#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#selector DataIntersightHyperflexCluster#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexClusterStorageClientIpPoolsToTerraform(struct?: DataIntersightHyperflexClusterStorageClientIpPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexClusterStorageClientIpPoolsToHclTerraform(struct?: DataIntersightHyperflexClusterStorageClientIpPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexClusterStorageClientIpPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterStorageClientIpPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterStorageClientIpPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightHyperflexClusterStorageClientIpPoolsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexClusterStorageClientIpPools[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexClusterStorageClientIpPoolsOutputReference {
    return new DataIntersightHyperflexClusterStorageClientIpPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterStorageClientVrf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#additional_properties DataIntersightHyperflexCluster#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#class_id DataIntersightHyperflexCluster#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#moid DataIntersightHyperflexCluster#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#object_type DataIntersightHyperflexCluster#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#selector DataIntersightHyperflexCluster#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexClusterStorageClientVrfToTerraform(struct?: DataIntersightHyperflexClusterStorageClientVrfOutputReference | DataIntersightHyperflexClusterStorageClientVrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexClusterStorageClientVrfToHclTerraform(struct?: DataIntersightHyperflexClusterStorageClientVrfOutputReference | DataIntersightHyperflexClusterStorageClientVrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexClusterStorageClientVrfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexClusterStorageClientVrf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterStorageClientVrf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightHyperflexClusterStorageContainers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#additional_properties DataIntersightHyperflexCluster#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#class_id DataIntersightHyperflexCluster#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#moid DataIntersightHyperflexCluster#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#object_type DataIntersightHyperflexCluster#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#selector DataIntersightHyperflexCluster#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexClusterStorageContainersToTerraform(struct?: DataIntersightHyperflexClusterStorageContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexClusterStorageContainersToHclTerraform(struct?: DataIntersightHyperflexClusterStorageContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexClusterStorageContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterStorageContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterStorageContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightHyperflexClusterStorageContainersList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexClusterStorageContainers[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexClusterStorageContainersOutputReference {
    return new DataIntersightHyperflexClusterStorageContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterSummaryHealingInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#additional_properties DataIntersightHyperflexCluster#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#class_id DataIntersightHyperflexCluster#class_id}
  */
  readonly classId?: string;
  /**
  * The estimated time in seconds it will take to complete the auto-healing process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#estimated_completion_time_in_seconds DataIntersightHyperflexCluster#estimated_completion_time_in_seconds}
  */
  readonly estimatedCompletionTimeInSeconds?: number;
  /**
  * The status of the cluster's auto-healing process. If 'true', auto-healing is in progress for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#in_progress DataIntersightHyperflexCluster#in_progress}
  */
  readonly inProgress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#messages DataIntersightHyperflexCluster#messages}
  */
  readonly messages?: string[];
  /**
  * The current message describing the auto-healing process of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#messages_iterator DataIntersightHyperflexCluster#messages_iterator}
  */
  readonly messagesIterator?: string;
  /**
  * The number of elements in the messages collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#messages_size DataIntersightHyperflexCluster#messages_size}
  */
  readonly messagesSize?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#object_type DataIntersightHyperflexCluster#object_type}
  */
  readonly objectType?: string;
  /**
  * The progress of the auto-healing process as a percentage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#percent_complete DataIntersightHyperflexCluster#percent_complete}
  */
  readonly percentComplete?: number;
}

export function dataIntersightHyperflexClusterSummaryHealingInfoToTerraform(struct?: DataIntersightHyperflexClusterSummaryHealingInfoOutputReference | DataIntersightHyperflexClusterSummaryHealingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    estimated_completion_time_in_seconds: cdktf.numberToTerraform(struct!.estimatedCompletionTimeInSeconds),
    in_progress: cdktf.booleanToTerraform(struct!.inProgress),
    messages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.messages),
    messages_iterator: cdktf.stringToTerraform(struct!.messagesIterator),
    messages_size: cdktf.numberToTerraform(struct!.messagesSize),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    percent_complete: cdktf.numberToTerraform(struct!.percentComplete),
  }
}


export function dataIntersightHyperflexClusterSummaryHealingInfoToHclTerraform(struct?: DataIntersightHyperflexClusterSummaryHealingInfoOutputReference | DataIntersightHyperflexClusterSummaryHealingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    estimated_completion_time_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.estimatedCompletionTimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_progress: {
      value: cdktf.booleanToHclTerraform(struct!.inProgress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    messages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.messages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    messages_iterator: {
      value: cdktf.stringToHclTerraform(struct!.messagesIterator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    messages_size: {
      value: cdktf.numberToHclTerraform(struct!.messagesSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percent_complete: {
      value: cdktf.numberToHclTerraform(struct!.percentComplete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexClusterSummaryHealingInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexClusterSummaryHealingInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._estimatedCompletionTimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.estimatedCompletionTimeInSeconds = this._estimatedCompletionTimeInSeconds;
    }
    if (this._inProgress !== undefined) {
      hasAnyValues = true;
      internalValueResult.inProgress = this._inProgress;
    }
    if (this._messages !== undefined) {
      hasAnyValues = true;
      internalValueResult.messages = this._messages;
    }
    if (this._messagesIterator !== undefined) {
      hasAnyValues = true;
      internalValueResult.messagesIterator = this._messagesIterator;
    }
    if (this._messagesSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.messagesSize = this._messagesSize;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._percentComplete !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentComplete = this._percentComplete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterSummaryHealingInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._estimatedCompletionTimeInSeconds = undefined;
      this._inProgress = undefined;
      this._messages = undefined;
      this._messagesIterator = undefined;
      this._messagesSize = undefined;
      this._objectType = undefined;
      this._percentComplete = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._estimatedCompletionTimeInSeconds = value.estimatedCompletionTimeInSeconds;
      this._inProgress = value.inProgress;
      this._messages = value.messages;
      this._messagesIterator = value.messagesIterator;
      this._messagesSize = value.messagesSize;
      this._objectType = value.objectType;
      this._percentComplete = value.percentComplete;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // estimated_completion_time_in_seconds - computed: false, optional: true, required: false
  private _estimatedCompletionTimeInSeconds?: number; 
  public get estimatedCompletionTimeInSeconds() {
    return this.getNumberAttribute('estimated_completion_time_in_seconds');
  }
  public set estimatedCompletionTimeInSeconds(value: number) {
    this._estimatedCompletionTimeInSeconds = value;
  }
  public resetEstimatedCompletionTimeInSeconds() {
    this._estimatedCompletionTimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimatedCompletionTimeInSecondsInput() {
    return this._estimatedCompletionTimeInSeconds;
  }

  // in_progress - computed: false, optional: true, required: false
  private _inProgress?: boolean | cdktf.IResolvable; 
  public get inProgress() {
    return this.getBooleanAttribute('in_progress');
  }
  public set inProgress(value: boolean | cdktf.IResolvable) {
    this._inProgress = value;
  }
  public resetInProgress() {
    this._inProgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inProgressInput() {
    return this._inProgress;
  }

  // messages - computed: false, optional: true, required: false
  private _messages?: string[]; 
  public get messages() {
    return this.getListAttribute('messages');
  }
  public set messages(value: string[]) {
    this._messages = value;
  }
  public resetMessages() {
    this._messages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesInput() {
    return this._messages;
  }

  // messages_iterator - computed: false, optional: true, required: false
  private _messagesIterator?: string; 
  public get messagesIterator() {
    return this.getStringAttribute('messages_iterator');
  }
  public set messagesIterator(value: string) {
    this._messagesIterator = value;
  }
  public resetMessagesIterator() {
    this._messagesIterator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesIteratorInput() {
    return this._messagesIterator;
  }

  // messages_size - computed: false, optional: true, required: false
  private _messagesSize?: number; 
  public get messagesSize() {
    return this.getNumberAttribute('messages_size');
  }
  public set messagesSize(value: number) {
    this._messagesSize = value;
  }
  public resetMessagesSize() {
    this._messagesSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesSizeInput() {
    return this._messagesSize;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // percent_complete - computed: false, optional: true, required: false
  private _percentComplete?: number; 
  public get percentComplete() {
    return this.getNumberAttribute('percent_complete');
  }
  public set percentComplete(value: number) {
    this._percentComplete = value;
  }
  public resetPercentComplete() {
    this._percentComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentCompleteInput() {
    return this._percentComplete;
  }
}
export interface DataIntersightHyperflexClusterSummaryResiliencyInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#additional_properties DataIntersightHyperflexCluster#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#class_id DataIntersightHyperflexCluster#class_id}
  */
  readonly classId?: string;
  /**
  * The number of persistent storage device failures tolerable before the storage cluster becomes offline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#hdd_failures_tolerable DataIntersightHyperflexCluster#hdd_failures_tolerable}
  */
  readonly hddFailuresTolerable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#messages DataIntersightHyperflexCluster#messages}
  */
  readonly messages?: string[];
  /**
  * The current message describing the auto-healing process of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#messages_iterator DataIntersightHyperflexCluster#messages_iterator}
  */
  readonly messagesIterator?: string;
  /**
  * The number of elements in the messages collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#messages_size DataIntersightHyperflexCluster#messages_size}
  */
  readonly messagesSize?: number;
  /**
  * The number of node failures tolerable before the storage cluster becomes offline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#node_failures_tolerable DataIntersightHyperflexCluster#node_failures_tolerable}
  */
  readonly nodeFailuresTolerable?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#object_type DataIntersightHyperflexCluster#object_type}
  */
  readonly objectType?: string;
  /**
  * The number of caching device failures tolerable before the storage cluster becomes offline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#ssd_failures_tolerable DataIntersightHyperflexCluster#ssd_failures_tolerable}
  */
  readonly ssdFailuresTolerable?: number;
  /**
  * The resiliency state of the cluster. The resiliency status is 'HEALTHY' if there are no failures and the storage cluster is fully operational. The resiliency status is 'WARNING' when the cluster has experienced failures that may adversely affect the cluster. It is 'UNKNOWN' if the cluster is offline or if the state cannot be determined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#state DataIntersightHyperflexCluster#state}
  */
  readonly state?: string;
}

export function dataIntersightHyperflexClusterSummaryResiliencyInfoToTerraform(struct?: DataIntersightHyperflexClusterSummaryResiliencyInfoOutputReference | DataIntersightHyperflexClusterSummaryResiliencyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    hdd_failures_tolerable: cdktf.numberToTerraform(struct!.hddFailuresTolerable),
    messages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.messages),
    messages_iterator: cdktf.stringToTerraform(struct!.messagesIterator),
    messages_size: cdktf.numberToTerraform(struct!.messagesSize),
    node_failures_tolerable: cdktf.numberToTerraform(struct!.nodeFailuresTolerable),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    ssd_failures_tolerable: cdktf.numberToTerraform(struct!.ssdFailuresTolerable),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function dataIntersightHyperflexClusterSummaryResiliencyInfoToHclTerraform(struct?: DataIntersightHyperflexClusterSummaryResiliencyInfoOutputReference | DataIntersightHyperflexClusterSummaryResiliencyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hdd_failures_tolerable: {
      value: cdktf.numberToHclTerraform(struct!.hddFailuresTolerable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    messages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.messages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    messages_iterator: {
      value: cdktf.stringToHclTerraform(struct!.messagesIterator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    messages_size: {
      value: cdktf.numberToHclTerraform(struct!.messagesSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_failures_tolerable: {
      value: cdktf.numberToHclTerraform(struct!.nodeFailuresTolerable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssd_failures_tolerable: {
      value: cdktf.numberToHclTerraform(struct!.ssdFailuresTolerable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexClusterSummaryResiliencyInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexClusterSummaryResiliencyInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._hddFailuresTolerable !== undefined) {
      hasAnyValues = true;
      internalValueResult.hddFailuresTolerable = this._hddFailuresTolerable;
    }
    if (this._messages !== undefined) {
      hasAnyValues = true;
      internalValueResult.messages = this._messages;
    }
    if (this._messagesIterator !== undefined) {
      hasAnyValues = true;
      internalValueResult.messagesIterator = this._messagesIterator;
    }
    if (this._messagesSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.messagesSize = this._messagesSize;
    }
    if (this._nodeFailuresTolerable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeFailuresTolerable = this._nodeFailuresTolerable;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._ssdFailuresTolerable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssdFailuresTolerable = this._ssdFailuresTolerable;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterSummaryResiliencyInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._hddFailuresTolerable = undefined;
      this._messages = undefined;
      this._messagesIterator = undefined;
      this._messagesSize = undefined;
      this._nodeFailuresTolerable = undefined;
      this._objectType = undefined;
      this._ssdFailuresTolerable = undefined;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._hddFailuresTolerable = value.hddFailuresTolerable;
      this._messages = value.messages;
      this._messagesIterator = value.messagesIterator;
      this._messagesSize = value.messagesSize;
      this._nodeFailuresTolerable = value.nodeFailuresTolerable;
      this._objectType = value.objectType;
      this._ssdFailuresTolerable = value.ssdFailuresTolerable;
      this._state = value.state;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // hdd_failures_tolerable - computed: false, optional: true, required: false
  private _hddFailuresTolerable?: number; 
  public get hddFailuresTolerable() {
    return this.getNumberAttribute('hdd_failures_tolerable');
  }
  public set hddFailuresTolerable(value: number) {
    this._hddFailuresTolerable = value;
  }
  public resetHddFailuresTolerable() {
    this._hddFailuresTolerable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hddFailuresTolerableInput() {
    return this._hddFailuresTolerable;
  }

  // messages - computed: false, optional: true, required: false
  private _messages?: string[]; 
  public get messages() {
    return this.getListAttribute('messages');
  }
  public set messages(value: string[]) {
    this._messages = value;
  }
  public resetMessages() {
    this._messages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesInput() {
    return this._messages;
  }

  // messages_iterator - computed: false, optional: true, required: false
  private _messagesIterator?: string; 
  public get messagesIterator() {
    return this.getStringAttribute('messages_iterator');
  }
  public set messagesIterator(value: string) {
    this._messagesIterator = value;
  }
  public resetMessagesIterator() {
    this._messagesIterator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesIteratorInput() {
    return this._messagesIterator;
  }

  // messages_size - computed: false, optional: true, required: false
  private _messagesSize?: number; 
  public get messagesSize() {
    return this.getNumberAttribute('messages_size');
  }
  public set messagesSize(value: number) {
    this._messagesSize = value;
  }
  public resetMessagesSize() {
    this._messagesSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesSizeInput() {
    return this._messagesSize;
  }

  // node_failures_tolerable - computed: false, optional: true, required: false
  private _nodeFailuresTolerable?: number; 
  public get nodeFailuresTolerable() {
    return this.getNumberAttribute('node_failures_tolerable');
  }
  public set nodeFailuresTolerable(value: number) {
    this._nodeFailuresTolerable = value;
  }
  public resetNodeFailuresTolerable() {
    this._nodeFailuresTolerable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeFailuresTolerableInput() {
    return this._nodeFailuresTolerable;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // ssd_failures_tolerable - computed: false, optional: true, required: false
  private _ssdFailuresTolerable?: number; 
  public get ssdFailuresTolerable() {
    return this.getNumberAttribute('ssd_failures_tolerable');
  }
  public set ssdFailuresTolerable(value: number) {
    this._ssdFailuresTolerable = value;
  }
  public resetSsdFailuresTolerable() {
    this._ssdFailuresTolerable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssdFailuresTolerableInput() {
    return this._ssdFailuresTolerable;
  }

  // state - computed: false, optional: true, required: false
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
}
export interface DataIntersightHyperflexClusterSummary {
  /**
  * The number of nodes currently participating in the storage cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#active_nodes DataIntersightHyperflexCluster#active_nodes}
  */
  readonly activeNodes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#additional_properties DataIntersightHyperflexCluster#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The data IP address of the HyperFlex cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#address DataIntersightHyperflexCluster#address}
  */
  readonly address?: string;
  /**
  * The time taken during last cluster startup in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#boottime DataIntersightHyperflexCluster#boottime}
  */
  readonly boottime?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#class_id DataIntersightHyperflexCluster#class_id}
  */
  readonly classId?: string;
  /**
  * The cluster access policy for the HyperFlex cluster. An access policy of 'STRICT' means that the cluster becomes readonly once any fragment of data is reduced to one copy. 'LENIENT' means that the cluster stays in read-write mode even if any fragment of data is reduced to one copy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#cluster_access_policy DataIntersightHyperflexCluster#cluster_access_policy}
  */
  readonly clusterAccessPolicy?: string;
  /**
  * The percentage of storage space saved using data compression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#compression_savings DataIntersightHyperflexCluster#compression_savings}
  */
  readonly compressionSavings?: number;
  /**
  * The compliance with the data replication factor set for the HyperFlex cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#data_replication_compliance DataIntersightHyperflexCluster#data_replication_compliance}
  */
  readonly dataReplicationCompliance?: string;
  /**
  * The number of data copies retained by the HyperFlex cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#data_replication_factor DataIntersightHyperflexCluster#data_replication_factor}
  */
  readonly dataReplicationFactor?: string;
  /**
  * The percentage of storage space saved using data deduplication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#deduplication_savings DataIntersightHyperflexCluster#deduplication_savings}
  */
  readonly deduplicationSavings?: number;
  /**
  * The amount of time the HyperFlex cluster has been offline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#downtime DataIntersightHyperflexCluster#downtime}
  */
  readonly downtime?: string;
  /**
  * The amount of storage capacity currently not in use, represented in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#free_capacity DataIntersightHyperflexCluster#free_capacity}
  */
  readonly freeCapacity?: number;
  /**
  * The name of the HyperFlex cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#name DataIntersightHyperflexCluster#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#object_type DataIntersightHyperflexCluster#object_type}
  */
  readonly objectType?: string;
  /**
  * The details about the resiliency health of the cluster. Includes information about the cluster healing status and the storage cluster health.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#resiliency_details DataIntersightHyperflexCluster#resiliency_details}
  */
  readonly resiliencyDetails?: string;
  /**
  * The number of elements in the resiliency details property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#resiliency_details_size DataIntersightHyperflexCluster#resiliency_details_size}
  */
  readonly resiliencyDetailsSize?: number;
  /**
  * The space utilization status of the HyperFlex cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#space_status DataIntersightHyperflexCluster#space_status}
  */
  readonly spaceStatus?: string;
  /**
  * The operational state of the HyperFlex cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#state DataIntersightHyperflexCluster#state}
  */
  readonly state?: string;
  /**
  * The total amount of storage capacity available for the HyperFlex cluster, represented in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#total_capacity DataIntersightHyperflexCluster#total_capacity}
  */
  readonly totalCapacity?: number;
  /**
  * The percentage of storage space saved in total.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#total_savings DataIntersightHyperflexCluster#total_savings}
  */
  readonly totalSavings?: number;
  /**
  * The amount of time the HyperFlex cluster has been running since last startup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#uptime DataIntersightHyperflexCluster#uptime}
  */
  readonly uptime?: string;
  /**
  * The amount of storage capacity in use, represented in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#used_capacity DataIntersightHyperflexCluster#used_capacity}
  */
  readonly usedCapacity?: number;
  /**
  * healing_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#healing_info DataIntersightHyperflexCluster#healing_info}
  */
  readonly healingInfo?: DataIntersightHyperflexClusterSummaryHealingInfo;
  /**
  * resiliency_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#resiliency_info DataIntersightHyperflexCluster#resiliency_info}
  */
  readonly resiliencyInfo?: DataIntersightHyperflexClusterSummaryResiliencyInfo;
}

export function dataIntersightHyperflexClusterSummaryToTerraform(struct?: DataIntersightHyperflexClusterSummaryOutputReference | DataIntersightHyperflexClusterSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_nodes: cdktf.stringToTerraform(struct!.activeNodes),
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    address: cdktf.stringToTerraform(struct!.address),
    boottime: cdktf.numberToTerraform(struct!.boottime),
    class_id: cdktf.stringToTerraform(struct!.classId),
    cluster_access_policy: cdktf.stringToTerraform(struct!.clusterAccessPolicy),
    compression_savings: cdktf.numberToTerraform(struct!.compressionSavings),
    data_replication_compliance: cdktf.stringToTerraform(struct!.dataReplicationCompliance),
    data_replication_factor: cdktf.stringToTerraform(struct!.dataReplicationFactor),
    deduplication_savings: cdktf.numberToTerraform(struct!.deduplicationSavings),
    downtime: cdktf.stringToTerraform(struct!.downtime),
    free_capacity: cdktf.numberToTerraform(struct!.freeCapacity),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    resiliency_details: cdktf.stringToTerraform(struct!.resiliencyDetails),
    resiliency_details_size: cdktf.numberToTerraform(struct!.resiliencyDetailsSize),
    space_status: cdktf.stringToTerraform(struct!.spaceStatus),
    state: cdktf.stringToTerraform(struct!.state),
    total_capacity: cdktf.numberToTerraform(struct!.totalCapacity),
    total_savings: cdktf.numberToTerraform(struct!.totalSavings),
    uptime: cdktf.stringToTerraform(struct!.uptime),
    used_capacity: cdktf.numberToTerraform(struct!.usedCapacity),
    healing_info: dataIntersightHyperflexClusterSummaryHealingInfoToTerraform(struct!.healingInfo),
    resiliency_info: dataIntersightHyperflexClusterSummaryResiliencyInfoToTerraform(struct!.resiliencyInfo),
  }
}


export function dataIntersightHyperflexClusterSummaryToHclTerraform(struct?: DataIntersightHyperflexClusterSummaryOutputReference | DataIntersightHyperflexClusterSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_nodes: {
      value: cdktf.stringToHclTerraform(struct!.activeNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boottime: {
      value: cdktf.numberToHclTerraform(struct!.boottime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_access_policy: {
      value: cdktf.stringToHclTerraform(struct!.clusterAccessPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_savings: {
      value: cdktf.numberToHclTerraform(struct!.compressionSavings),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_replication_compliance: {
      value: cdktf.stringToHclTerraform(struct!.dataReplicationCompliance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_replication_factor: {
      value: cdktf.stringToHclTerraform(struct!.dataReplicationFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deduplication_savings: {
      value: cdktf.numberToHclTerraform(struct!.deduplicationSavings),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    downtime: {
      value: cdktf.stringToHclTerraform(struct!.downtime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    free_capacity: {
      value: cdktf.numberToHclTerraform(struct!.freeCapacity),
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
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resiliency_details: {
      value: cdktf.stringToHclTerraform(struct!.resiliencyDetails),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resiliency_details_size: {
      value: cdktf.numberToHclTerraform(struct!.resiliencyDetailsSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    space_status: {
      value: cdktf.stringToHclTerraform(struct!.spaceStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_capacity: {
      value: cdktf.numberToHclTerraform(struct!.totalCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_savings: {
      value: cdktf.numberToHclTerraform(struct!.totalSavings),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uptime: {
      value: cdktf.stringToHclTerraform(struct!.uptime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    used_capacity: {
      value: cdktf.numberToHclTerraform(struct!.usedCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    healing_info: {
      value: dataIntersightHyperflexClusterSummaryHealingInfoToHclTerraform(struct!.healingInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexClusterSummaryHealingInfoList",
    },
    resiliency_info: {
      value: dataIntersightHyperflexClusterSummaryResiliencyInfoToHclTerraform(struct!.resiliencyInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexClusterSummaryResiliencyInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexClusterSummaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexClusterSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeNodes = this._activeNodes;
    }
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._boottime !== undefined) {
      hasAnyValues = true;
      internalValueResult.boottime = this._boottime;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._clusterAccessPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterAccessPolicy = this._clusterAccessPolicy;
    }
    if (this._compressionSavings !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionSavings = this._compressionSavings;
    }
    if (this._dataReplicationCompliance !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataReplicationCompliance = this._dataReplicationCompliance;
    }
    if (this._dataReplicationFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataReplicationFactor = this._dataReplicationFactor;
    }
    if (this._deduplicationSavings !== undefined) {
      hasAnyValues = true;
      internalValueResult.deduplicationSavings = this._deduplicationSavings;
    }
    if (this._downtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.downtime = this._downtime;
    }
    if (this._freeCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeCapacity = this._freeCapacity;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._resiliencyDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.resiliencyDetails = this._resiliencyDetails;
    }
    if (this._resiliencyDetailsSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.resiliencyDetailsSize = this._resiliencyDetailsSize;
    }
    if (this._spaceStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceStatus = this._spaceStatus;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._totalCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalCapacity = this._totalCapacity;
    }
    if (this._totalSavings !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalSavings = this._totalSavings;
    }
    if (this._uptime !== undefined) {
      hasAnyValues = true;
      internalValueResult.uptime = this._uptime;
    }
    if (this._usedCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.usedCapacity = this._usedCapacity;
    }
    if (this._healingInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healingInfo = this._healingInfo?.internalValue;
    }
    if (this._resiliencyInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resiliencyInfo = this._resiliencyInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeNodes = undefined;
      this._additionalProperties = undefined;
      this._address = undefined;
      this._boottime = undefined;
      this._classId = undefined;
      this._clusterAccessPolicy = undefined;
      this._compressionSavings = undefined;
      this._dataReplicationCompliance = undefined;
      this._dataReplicationFactor = undefined;
      this._deduplicationSavings = undefined;
      this._downtime = undefined;
      this._freeCapacity = undefined;
      this._name = undefined;
      this._objectType = undefined;
      this._resiliencyDetails = undefined;
      this._resiliencyDetailsSize = undefined;
      this._spaceStatus = undefined;
      this._state = undefined;
      this._totalCapacity = undefined;
      this._totalSavings = undefined;
      this._uptime = undefined;
      this._usedCapacity = undefined;
      this._healingInfo.internalValue = undefined;
      this._resiliencyInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeNodes = value.activeNodes;
      this._additionalProperties = value.additionalProperties;
      this._address = value.address;
      this._boottime = value.boottime;
      this._classId = value.classId;
      this._clusterAccessPolicy = value.clusterAccessPolicy;
      this._compressionSavings = value.compressionSavings;
      this._dataReplicationCompliance = value.dataReplicationCompliance;
      this._dataReplicationFactor = value.dataReplicationFactor;
      this._deduplicationSavings = value.deduplicationSavings;
      this._downtime = value.downtime;
      this._freeCapacity = value.freeCapacity;
      this._name = value.name;
      this._objectType = value.objectType;
      this._resiliencyDetails = value.resiliencyDetails;
      this._resiliencyDetailsSize = value.resiliencyDetailsSize;
      this._spaceStatus = value.spaceStatus;
      this._state = value.state;
      this._totalCapacity = value.totalCapacity;
      this._totalSavings = value.totalSavings;
      this._uptime = value.uptime;
      this._usedCapacity = value.usedCapacity;
      this._healingInfo.internalValue = value.healingInfo;
      this._resiliencyInfo.internalValue = value.resiliencyInfo;
    }
  }

  // active_nodes - computed: false, optional: true, required: false
  private _activeNodes?: string; 
  public get activeNodes() {
    return this.getStringAttribute('active_nodes');
  }
  public set activeNodes(value: string) {
    this._activeNodes = value;
  }
  public resetActiveNodes() {
    this._activeNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeNodesInput() {
    return this._activeNodes;
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // boottime - computed: false, optional: true, required: false
  private _boottime?: number; 
  public get boottime() {
    return this.getNumberAttribute('boottime');
  }
  public set boottime(value: number) {
    this._boottime = value;
  }
  public resetBoottime() {
    this._boottime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boottimeInput() {
    return this._boottime;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // cluster_access_policy - computed: false, optional: true, required: false
  private _clusterAccessPolicy?: string; 
  public get clusterAccessPolicy() {
    return this.getStringAttribute('cluster_access_policy');
  }
  public set clusterAccessPolicy(value: string) {
    this._clusterAccessPolicy = value;
  }
  public resetClusterAccessPolicy() {
    this._clusterAccessPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAccessPolicyInput() {
    return this._clusterAccessPolicy;
  }

  // compression_savings - computed: false, optional: true, required: false
  private _compressionSavings?: number; 
  public get compressionSavings() {
    return this.getNumberAttribute('compression_savings');
  }
  public set compressionSavings(value: number) {
    this._compressionSavings = value;
  }
  public resetCompressionSavings() {
    this._compressionSavings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionSavingsInput() {
    return this._compressionSavings;
  }

  // data_replication_compliance - computed: false, optional: true, required: false
  private _dataReplicationCompliance?: string; 
  public get dataReplicationCompliance() {
    return this.getStringAttribute('data_replication_compliance');
  }
  public set dataReplicationCompliance(value: string) {
    this._dataReplicationCompliance = value;
  }
  public resetDataReplicationCompliance() {
    this._dataReplicationCompliance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataReplicationComplianceInput() {
    return this._dataReplicationCompliance;
  }

  // data_replication_factor - computed: false, optional: true, required: false
  private _dataReplicationFactor?: string; 
  public get dataReplicationFactor() {
    return this.getStringAttribute('data_replication_factor');
  }
  public set dataReplicationFactor(value: string) {
    this._dataReplicationFactor = value;
  }
  public resetDataReplicationFactor() {
    this._dataReplicationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataReplicationFactorInput() {
    return this._dataReplicationFactor;
  }

  // deduplication_savings - computed: false, optional: true, required: false
  private _deduplicationSavings?: number; 
  public get deduplicationSavings() {
    return this.getNumberAttribute('deduplication_savings');
  }
  public set deduplicationSavings(value: number) {
    this._deduplicationSavings = value;
  }
  public resetDeduplicationSavings() {
    this._deduplicationSavings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deduplicationSavingsInput() {
    return this._deduplicationSavings;
  }

  // downtime - computed: false, optional: true, required: false
  private _downtime?: string; 
  public get downtime() {
    return this.getStringAttribute('downtime');
  }
  public set downtime(value: string) {
    this._downtime = value;
  }
  public resetDowntime() {
    this._downtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downtimeInput() {
    return this._downtime;
  }

  // free_capacity - computed: false, optional: true, required: false
  private _freeCapacity?: number; 
  public get freeCapacity() {
    return this.getNumberAttribute('free_capacity');
  }
  public set freeCapacity(value: number) {
    this._freeCapacity = value;
  }
  public resetFreeCapacity() {
    this._freeCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeCapacityInput() {
    return this._freeCapacity;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // resiliency_details - computed: false, optional: true, required: false
  private _resiliencyDetails?: string; 
  public get resiliencyDetails() {
    return this.getStringAttribute('resiliency_details');
  }
  public set resiliencyDetails(value: string) {
    this._resiliencyDetails = value;
  }
  public resetResiliencyDetails() {
    this._resiliencyDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resiliencyDetailsInput() {
    return this._resiliencyDetails;
  }

  // resiliency_details_size - computed: false, optional: true, required: false
  private _resiliencyDetailsSize?: number; 
  public get resiliencyDetailsSize() {
    return this.getNumberAttribute('resiliency_details_size');
  }
  public set resiliencyDetailsSize(value: number) {
    this._resiliencyDetailsSize = value;
  }
  public resetResiliencyDetailsSize() {
    this._resiliencyDetailsSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resiliencyDetailsSizeInput() {
    return this._resiliencyDetailsSize;
  }

  // space_status - computed: false, optional: true, required: false
  private _spaceStatus?: string; 
  public get spaceStatus() {
    return this.getStringAttribute('space_status');
  }
  public set spaceStatus(value: string) {
    this._spaceStatus = value;
  }
  public resetSpaceStatus() {
    this._spaceStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceStatusInput() {
    return this._spaceStatus;
  }

  // state - computed: false, optional: true, required: false
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

  // total_capacity - computed: false, optional: true, required: false
  private _totalCapacity?: number; 
  public get totalCapacity() {
    return this.getNumberAttribute('total_capacity');
  }
  public set totalCapacity(value: number) {
    this._totalCapacity = value;
  }
  public resetTotalCapacity() {
    this._totalCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalCapacityInput() {
    return this._totalCapacity;
  }

  // total_savings - computed: false, optional: true, required: false
  private _totalSavings?: number; 
  public get totalSavings() {
    return this.getNumberAttribute('total_savings');
  }
  public set totalSavings(value: number) {
    this._totalSavings = value;
  }
  public resetTotalSavings() {
    this._totalSavings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalSavingsInput() {
    return this._totalSavings;
  }

  // uptime - computed: false, optional: true, required: false
  private _uptime?: string; 
  public get uptime() {
    return this.getStringAttribute('uptime');
  }
  public set uptime(value: string) {
    this._uptime = value;
  }
  public resetUptime() {
    this._uptime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uptimeInput() {
    return this._uptime;
  }

  // used_capacity - computed: false, optional: true, required: false
  private _usedCapacity?: number; 
  public get usedCapacity() {
    return this.getNumberAttribute('used_capacity');
  }
  public set usedCapacity(value: number) {
    this._usedCapacity = value;
  }
  public resetUsedCapacity() {
    this._usedCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedCapacityInput() {
    return this._usedCapacity;
  }

  // healing_info - computed: false, optional: true, required: false
  private _healingInfo = new DataIntersightHyperflexClusterSummaryHealingInfoOutputReference(this, "healing_info");
  public get healingInfo() {
    return this._healingInfo;
  }
  public putHealingInfo(value: DataIntersightHyperflexClusterSummaryHealingInfo) {
    this._healingInfo.internalValue = value;
  }
  public resetHealingInfo() {
    this._healingInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healingInfoInput() {
    return this._healingInfo.internalValue;
  }

  // resiliency_info - computed: false, optional: true, required: false
  private _resiliencyInfo = new DataIntersightHyperflexClusterSummaryResiliencyInfoOutputReference(this, "resiliency_info");
  public get resiliencyInfo() {
    return this._resiliencyInfo;
  }
  public putResiliencyInfo(value: DataIntersightHyperflexClusterSummaryResiliencyInfo) {
    this._resiliencyInfo.internalValue = value;
  }
  public resetResiliencyInfo() {
    this._resiliencyInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resiliencyInfoInput() {
    return this._resiliencyInfo.internalValue;
  }
}
export interface DataIntersightHyperflexClusterTagsAncestorDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#additional_properties DataIntersightHyperflexCluster#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#class_id DataIntersightHyperflexCluster#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#moid DataIntersightHyperflexCluster#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#object_type DataIntersightHyperflexCluster#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#selector DataIntersightHyperflexCluster#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexClusterTagsAncestorDefinitionsToTerraform(struct?: DataIntersightHyperflexClusterTagsAncestorDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexClusterTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightHyperflexClusterTagsAncestorDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexClusterTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterTagsAncestorDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterTagsAncestorDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightHyperflexClusterTagsAncestorDefinitionsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexClusterTagsAncestorDefinitions[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexClusterTagsAncestorDefinitionsOutputReference {
    return new DataIntersightHyperflexClusterTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterTagsDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#additional_properties DataIntersightHyperflexCluster#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#class_id DataIntersightHyperflexCluster#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#moid DataIntersightHyperflexCluster#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#object_type DataIntersightHyperflexCluster#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#selector DataIntersightHyperflexCluster#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexClusterTagsDefinitionToTerraform(struct?: DataIntersightHyperflexClusterTagsDefinitionOutputReference | DataIntersightHyperflexClusterTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexClusterTagsDefinitionToHclTerraform(struct?: DataIntersightHyperflexClusterTagsDefinitionOutputReference | DataIntersightHyperflexClusterTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexClusterTagsDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexClusterTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterTagsDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightHyperflexClusterTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#additional_properties DataIntersightHyperflexCluster#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The string representation of a tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#key DataIntersightHyperflexCluster#key}
  */
  readonly key?: string;
  /**
  * Propagated is a boolean flag that indicates whether the tag is propagated to the related managed objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#propagated DataIntersightHyperflexCluster#propagated}
  */
  readonly propagated?: boolean | cdktf.IResolvable;
  /**
  * An enum type that defines the type of tag. Supported values are 'pathtag' and 'keyvalue'.
  * * `KeyValue` - KeyValue type of tag. Key is required for these tags. Value is optional.
  * * `PathTag` - Key contain path information. Value is not present for these tags. The path is created by using the '/' character as a delimiter.For example, if the tag is "A/B/C", then "A" is the parent tag, "B" is the child tag of "A" and "C" is the child tag of "B".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#type DataIntersightHyperflexCluster#type}
  */
  readonly type?: string;
  /**
  * The string representation of a tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#value DataIntersightHyperflexCluster#value}
  */
  readonly value?: string;
  /**
  * ancestor_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#ancestor_definitions DataIntersightHyperflexCluster#ancestor_definitions}
  */
  readonly ancestorDefinitions?: DataIntersightHyperflexClusterTagsAncestorDefinitions[] | cdktf.IResolvable;
  /**
  * definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#definition DataIntersightHyperflexCluster#definition}
  */
  readonly definition?: DataIntersightHyperflexClusterTagsDefinition;
}

export function dataIntersightHyperflexClusterTagsToTerraform(struct?: DataIntersightHyperflexClusterTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    key: cdktf.stringToTerraform(struct!.key),
    propagated: cdktf.booleanToTerraform(struct!.propagated),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    ancestor_definitions: cdktf.listMapper(dataIntersightHyperflexClusterTagsAncestorDefinitionsToTerraform, true)(struct!.ancestorDefinitions),
    definition: dataIntersightHyperflexClusterTagsDefinitionToTerraform(struct!.definition),
  }
}


export function dataIntersightHyperflexClusterTagsToHclTerraform(struct?: DataIntersightHyperflexClusterTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
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
    propagated: {
      value: cdktf.booleanToHclTerraform(struct!.propagated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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
    ancestor_definitions: {
      value: cdktf.listMapperHcl(dataIntersightHyperflexClusterTagsAncestorDefinitionsToHclTerraform, true)(struct!.ancestorDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexClusterTagsAncestorDefinitionsList",
    },
    definition: {
      value: dataIntersightHyperflexClusterTagsDefinitionToHclTerraform(struct!.definition),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexClusterTagsDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexClusterTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._propagated !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagated = this._propagated;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._ancestorDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ancestorDefinitions = this._ancestorDefinitions?.internalValue;
    }
    if (this._definition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._key = undefined;
      this._propagated = undefined;
      this._type = undefined;
      this._value = undefined;
      this._ancestorDefinitions.internalValue = undefined;
      this._definition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._key = value.key;
      this._propagated = value.propagated;
      this._type = value.type;
      this._value = value.value;
      this._ancestorDefinitions.internalValue = value.ancestorDefinitions;
      this._definition.internalValue = value.definition;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // propagated - computed: false, optional: true, required: false
  private _propagated?: boolean | cdktf.IResolvable; 
  public get propagated() {
    return this.getBooleanAttribute('propagated');
  }
  public set propagated(value: boolean | cdktf.IResolvable) {
    this._propagated = value;
  }
  public resetPropagated() {
    this._propagated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagatedInput() {
    return this._propagated;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // ancestor_definitions - computed: false, optional: true, required: false
  private _ancestorDefinitions = new DataIntersightHyperflexClusterTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }
  public putAncestorDefinitions(value: DataIntersightHyperflexClusterTagsAncestorDefinitions[] | cdktf.IResolvable) {
    this._ancestorDefinitions.internalValue = value;
  }
  public resetAncestorDefinitions() {
    this._ancestorDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorDefinitionsInput() {
    return this._ancestorDefinitions.internalValue;
  }

  // definition - computed: false, optional: true, required: false
  private _definition = new DataIntersightHyperflexClusterTagsDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: DataIntersightHyperflexClusterTagsDefinition) {
    this._definition.internalValue = value;
  }
  public resetDefinition() {
    this._definition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }
}

export class DataIntersightHyperflexClusterTagsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexClusterTags[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexClusterTagsOutputReference {
    return new DataIntersightHyperflexClusterTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterVcenterConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#additional_properties DataIntersightHyperflexCluster#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#class_id DataIntersightHyperflexCluster#class_id}
  */
  readonly classId?: string;
  /**
  * The vCenter compute cluster identifier for the HyperFlex Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#cluster_id DataIntersightHyperflexCluster#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * The vCenter compute cluster name for the HyperFlex cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#cluster_name DataIntersightHyperflexCluster#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * The identifier of the datacenter in vCenter that the HyperFlex cluster belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#datacenter_id DataIntersightHyperflexCluster#datacenter_id}
  */
  readonly datacenterId?: string;
  /**
  * The name of the datacenter in vCenter that the HyperFlex cluster belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#datacenter_name DataIntersightHyperflexCluster#datacenter_name}
  */
  readonly datacenterName?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#object_type DataIntersightHyperflexCluster#object_type}
  */
  readonly objectType?: string;
  /**
  * The URL of the vCenter for this HyperFlex Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#url DataIntersightHyperflexCluster#url}
  */
  readonly url?: string;
}

export function dataIntersightHyperflexClusterVcenterConfigurationToTerraform(struct?: DataIntersightHyperflexClusterVcenterConfigurationOutputReference | DataIntersightHyperflexClusterVcenterConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    datacenter_id: cdktf.stringToTerraform(struct!.datacenterId),
    datacenter_name: cdktf.stringToTerraform(struct!.datacenterName),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataIntersightHyperflexClusterVcenterConfigurationToHclTerraform(struct?: DataIntersightHyperflexClusterVcenterConfigurationOutputReference | DataIntersightHyperflexClusterVcenterConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datacenter_id: {
      value: cdktf.stringToHclTerraform(struct!.datacenterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datacenter_name: {
      value: cdktf.stringToHclTerraform(struct!.datacenterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexClusterVcenterConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexClusterVcenterConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._datacenterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenterId = this._datacenterId;
    }
    if (this._datacenterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenterName = this._datacenterName;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterVcenterConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._clusterId = undefined;
      this._clusterName = undefined;
      this._datacenterId = undefined;
      this._datacenterName = undefined;
      this._objectType = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._clusterId = value.clusterId;
      this._clusterName = value.clusterName;
      this._datacenterId = value.datacenterId;
      this._datacenterName = value.datacenterName;
      this._objectType = value.objectType;
      this._url = value.url;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // datacenter_id - computed: false, optional: true, required: false
  private _datacenterId?: string; 
  public get datacenterId() {
    return this.getStringAttribute('datacenter_id');
  }
  public set datacenterId(value: string) {
    this._datacenterId = value;
  }
  public resetDatacenterId() {
    this._datacenterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterIdInput() {
    return this._datacenterId;
  }

  // datacenter_name - computed: false, optional: true, required: false
  private _datacenterName?: string; 
  public get datacenterName() {
    return this.getStringAttribute('datacenter_name');
  }
  public set datacenterName(value: string) {
    this._datacenterName = value;
  }
  public resetDatacenterName() {
    this._datacenterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterNameInput() {
    return this._datacenterName;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataIntersightHyperflexClusterVersionContextInterestedMos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#additional_properties DataIntersightHyperflexCluster#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#class_id DataIntersightHyperflexCluster#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#moid DataIntersightHyperflexCluster#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#object_type DataIntersightHyperflexCluster#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#selector DataIntersightHyperflexCluster#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexClusterVersionContextInterestedMosToTerraform(struct?: DataIntersightHyperflexClusterVersionContextInterestedMos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexClusterVersionContextInterestedMosToHclTerraform(struct?: DataIntersightHyperflexClusterVersionContextInterestedMos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexClusterVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterVersionContextInterestedMos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterVersionContextInterestedMos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightHyperflexClusterVersionContextInterestedMosList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexClusterVersionContextInterestedMos[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexClusterVersionContextInterestedMosOutputReference {
    return new DataIntersightHyperflexClusterVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexClusterVersionContextRefMo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#additional_properties DataIntersightHyperflexCluster#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#class_id DataIntersightHyperflexCluster#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#moid DataIntersightHyperflexCluster#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#object_type DataIntersightHyperflexCluster#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#selector DataIntersightHyperflexCluster#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexClusterVersionContextRefMoToTerraform(struct?: DataIntersightHyperflexClusterVersionContextRefMoOutputReference | DataIntersightHyperflexClusterVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexClusterVersionContextRefMoToHclTerraform(struct?: DataIntersightHyperflexClusterVersionContextRefMoOutputReference | DataIntersightHyperflexClusterVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexClusterVersionContextRefMoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexClusterVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterVersionContextRefMo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightHyperflexClusterVersionContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#additional_properties DataIntersightHyperflexCluster#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#class_id DataIntersightHyperflexCluster#class_id}
  */
  readonly classId?: string;
  /**
  * The flag to indicate if snapshot is marked for deletion or not. If flag is set then snapshot will be removed after the successful deployment of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#marked_for_deletion DataIntersightHyperflexCluster#marked_for_deletion}
  */
  readonly markedForDeletion?: boolean | cdktf.IResolvable;
  /**
  * The version of the Managed Object, e.g. an incrementing number or a hash id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#nr_version DataIntersightHyperflexCluster#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#object_type DataIntersightHyperflexCluster#object_type}
  */
  readonly objectType?: string;
  /**
  * The time this versioned Managed Object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#timestamp DataIntersightHyperflexCluster#timestamp}
  */
  readonly timestamp?: string;
  /**
  * Specifies type of version. Currently the only supported value is "Configured"
  * that is used to keep track of snapshots of policies and profiles that are intended
  * to be configured to target endpoints.
  * * `Modified` - Version created every time an object is modified.
  * * `Configured` - Version created every time an object is configured to the service profile.
  * * `Deployed` - Version created for objects related to a service profile when it is deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#version_type DataIntersightHyperflexCluster#version_type}
  */
  readonly versionType?: string;
  /**
  * interested_mos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#interested_mos DataIntersightHyperflexCluster#interested_mos}
  */
  readonly interestedMos?: DataIntersightHyperflexClusterVersionContextInterestedMos[] | cdktf.IResolvable;
  /**
  * ref_mo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#ref_mo DataIntersightHyperflexCluster#ref_mo}
  */
  readonly refMo?: DataIntersightHyperflexClusterVersionContextRefMo;
}

export function dataIntersightHyperflexClusterVersionContextToTerraform(struct?: DataIntersightHyperflexClusterVersionContextOutputReference | DataIntersightHyperflexClusterVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    marked_for_deletion: cdktf.booleanToTerraform(struct!.markedForDeletion),
    nr_version: cdktf.stringToTerraform(struct!.nrVersion),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    timestamp: cdktf.stringToTerraform(struct!.timestamp),
    version_type: cdktf.stringToTerraform(struct!.versionType),
    interested_mos: cdktf.listMapper(dataIntersightHyperflexClusterVersionContextInterestedMosToTerraform, true)(struct!.interestedMos),
    ref_mo: dataIntersightHyperflexClusterVersionContextRefMoToTerraform(struct!.refMo),
  }
}


export function dataIntersightHyperflexClusterVersionContextToHclTerraform(struct?: DataIntersightHyperflexClusterVersionContextOutputReference | DataIntersightHyperflexClusterVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    marked_for_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.markedForDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nr_version: {
      value: cdktf.stringToHclTerraform(struct!.nrVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: cdktf.stringToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_type: {
      value: cdktf.stringToHclTerraform(struct!.versionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interested_mos: {
      value: cdktf.listMapperHcl(dataIntersightHyperflexClusterVersionContextInterestedMosToHclTerraform, true)(struct!.interestedMos),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexClusterVersionContextInterestedMosList",
    },
    ref_mo: {
      value: dataIntersightHyperflexClusterVersionContextRefMoToHclTerraform(struct!.refMo),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexClusterVersionContextRefMoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexClusterVersionContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexClusterVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._markedForDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.markedForDeletion = this._markedForDeletion;
    }
    if (this._nrVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrVersion = this._nrVersion;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    if (this._versionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionType = this._versionType;
    }
    if (this._interestedMos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interestedMos = this._interestedMos?.internalValue;
    }
    if (this._refMo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refMo = this._refMo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterVersionContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._markedForDeletion = undefined;
      this._nrVersion = undefined;
      this._objectType = undefined;
      this._timestamp = undefined;
      this._versionType = undefined;
      this._interestedMos.internalValue = undefined;
      this._refMo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._markedForDeletion = value.markedForDeletion;
      this._nrVersion = value.nrVersion;
      this._objectType = value.objectType;
      this._timestamp = value.timestamp;
      this._versionType = value.versionType;
      this._interestedMos.internalValue = value.interestedMos;
      this._refMo.internalValue = value.refMo;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // marked_for_deletion - computed: false, optional: true, required: false
  private _markedForDeletion?: boolean | cdktf.IResolvable; 
  public get markedForDeletion() {
    return this.getBooleanAttribute('marked_for_deletion');
  }
  public set markedForDeletion(value: boolean | cdktf.IResolvable) {
    this._markedForDeletion = value;
  }
  public resetMarkedForDeletion() {
    this._markedForDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markedForDeletionInput() {
    return this._markedForDeletion;
  }

  // nr_version - computed: false, optional: true, required: false
  private _nrVersion?: string; 
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }
  public set nrVersion(value: string) {
    this._nrVersion = value;
  }
  public resetNrVersion() {
    this._nrVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nrVersionInput() {
    return this._nrVersion;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // version_type - computed: false, optional: true, required: false
  private _versionType?: string; 
  public get versionType() {
    return this.getStringAttribute('version_type');
  }
  public set versionType(value: string) {
    this._versionType = value;
  }
  public resetVersionType() {
    this._versionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionTypeInput() {
    return this._versionType;
  }

  // interested_mos - computed: false, optional: true, required: false
  private _interestedMos = new DataIntersightHyperflexClusterVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }
  public putInterestedMos(value: DataIntersightHyperflexClusterVersionContextInterestedMos[] | cdktf.IResolvable) {
    this._interestedMos.internalValue = value;
  }
  public resetInterestedMos() {
    this._interestedMos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interestedMosInput() {
    return this._interestedMos.internalValue;
  }

  // ref_mo - computed: false, optional: true, required: false
  private _refMo = new DataIntersightHyperflexClusterVersionContextRefMoOutputReference(this, "ref_mo");
  public get refMo() {
    return this._refMo;
  }
  public putRefMo(value: DataIntersightHyperflexClusterVersionContextRefMo) {
    this._refMo.internalValue = value;
  }
  public resetRefMo() {
    this._refMo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refMoInput() {
    return this._refMo.internalValue;
  }
}
export interface DataIntersightHyperflexClusterVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#additional_properties DataIntersightHyperflexCluster#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#class_id DataIntersightHyperflexCluster#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#moid DataIntersightHyperflexCluster#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#object_type DataIntersightHyperflexCluster#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#selector DataIntersightHyperflexCluster#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexClusterVolumesToTerraform(struct?: DataIntersightHyperflexClusterVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexClusterVolumesToHclTerraform(struct?: DataIntersightHyperflexClusterVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexClusterVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexClusterVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexClusterVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightHyperflexClusterVolumesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexClusterVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexClusterVolumesOutputReference {
    return new DataIntersightHyperflexClusterVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster intersight_hyperflex_cluster}
*/
export class DataIntersightHyperflexCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intersight_hyperflex_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIntersightHyperflexCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIntersightHyperflexCluster to import
  * @param importFromId The id of the existing DataIntersightHyperflexCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIntersightHyperflexCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intersight_hyperflex_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_cluster intersight_hyperflex_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIntersightHyperflexClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIntersightHyperflexClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'intersight_hyperflex_cluster',
      terraformGeneratorMetadata: {
        providerName: 'intersight',
        providerVersion: '1.0.72'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountMoid = config.accountMoid;
    this._additionalProperties = config.additionalProperties;
    this._capacityRunway = config.capacityRunway;
    this._classId = config.classId;
    this._clusterName = config.clusterName;
    this._clusterPurpose = config.clusterPurpose;
    this._clusterType = config.clusterType;
    this._clusterUuid = config.clusterUuid;
    this._computeNodeCount = config.computeNodeCount;
    this._convergedNodeCount = config.convergedNodeCount;
    this._createTime = config.createTime;
    this._deploymentType = config.deploymentType;
    this._deviceId = config.deviceId;
    this._dnsServers = config.dnsServers;
    this._domainGroupMoid = config.domainGroupMoid;
    this._driveType = config.driveType;
    this._encryptionStatus = config.encryptionStatus;
    this._fltAggr = config.fltAggr;
    this._hxVersion = config.hxVersion;
    this._hxdpBuildVersion = config.hxdpBuildVersion;
    this._hypervisorType = config.hypervisorType;
    this._hypervisorVersion = config.hypervisorVersion;
    this._id = config.id;
    this._identity = config.identity;
    this._modTime = config.modTime;
    this._moid = config.moid;
    this._name = config.name;
    this._ntpServers = config.ntpServers;
    this._objectType = config.objectType;
    this._owners = config.owners;
    this._sharedScope = config.sharedScope;
    this._status = config.status;
    this._storageCapacity = config.storageCapacity;
    this._storageNodeCount = config.storageNodeCount;
    this._storageUtilization = config.storageUtilization;
    this._upgradeStatus = config.upgradeStatus;
    this._uplinkSpeed = config.uplinkSpeed;
    this._utilizationPercentage = config.utilizationPercentage;
    this._utilizationTrendPercentage = config.utilizationTrendPercentage;
    this._vmCount = config.vmCount;
    this._zoneType = config.zoneType;
    this._alarm.internalValue = config.alarm;
    this._alarmSummary.internalValue = config.alarmSummary;
    this._ancestors.internalValue = config.ancestors;
    this._associatedProfile.internalValue = config.associatedProfile;
    this._capability.internalValue = config.capability;
    this._childClusters.internalValue = config.childClusters;
    this._encryption.internalValue = config.encryption;
    this._health.internalValue = config.health;
    this._license.internalValue = config.license;
    this._networkConfiguration.internalValue = config.networkConfiguration;
    this._nodes.internalValue = config.nodes;
    this._parent.internalValue = config.parent;
    this._parentCluster.internalValue = config.parentCluster;
    this._permissionResources.internalValue = config.permissionResources;
    this._registeredDevice.internalValue = config.registeredDevice;
    this._storageClientIpPools.internalValue = config.storageClientIpPools;
    this._storageClientVrf.internalValue = config.storageClientVrf;
    this._storageContainers.internalValue = config.storageContainers;
    this._summary.internalValue = config.summary;
    this._tags.internalValue = config.tags;
    this._vcenterConfiguration.internalValue = config.vcenterConfiguration;
    this._versionContext.internalValue = config.versionContext;
    this._volumes.internalValue = config.volumes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_moid - computed: false, optional: true, required: false
  private _accountMoid?: string; 
  public get accountMoid() {
    return this.getStringAttribute('account_moid');
  }
  public set accountMoid(value: string) {
    this._accountMoid = value;
  }
  public resetAccountMoid() {
    this._accountMoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountMoidInput() {
    return this._accountMoid;
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // capacity_runway - computed: false, optional: true, required: false
  private _capacityRunway?: number; 
  public get capacityRunway() {
    return this.getNumberAttribute('capacity_runway');
  }
  public set capacityRunway(value: number) {
    this._capacityRunway = value;
  }
  public resetCapacityRunway() {
    this._capacityRunway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityRunwayInput() {
    return this._capacityRunway;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cluster_purpose - computed: false, optional: true, required: false
  private _clusterPurpose?: string; 
  public get clusterPurpose() {
    return this.getStringAttribute('cluster_purpose');
  }
  public set clusterPurpose(value: string) {
    this._clusterPurpose = value;
  }
  public resetClusterPurpose() {
    this._clusterPurpose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPurposeInput() {
    return this._clusterPurpose;
  }

  // cluster_type - computed: false, optional: true, required: false
  private _clusterType?: number; 
  public get clusterType() {
    return this.getNumberAttribute('cluster_type');
  }
  public set clusterType(value: number) {
    this._clusterType = value;
  }
  public resetClusterType() {
    this._clusterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // cluster_uuid - computed: false, optional: true, required: false
  private _clusterUuid?: string; 
  public get clusterUuid() {
    return this.getStringAttribute('cluster_uuid');
  }
  public set clusterUuid(value: string) {
    this._clusterUuid = value;
  }
  public resetClusterUuid() {
    this._clusterUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterUuidInput() {
    return this._clusterUuid;
  }

  // compute_node_count - computed: false, optional: true, required: false
  private _computeNodeCount?: number; 
  public get computeNodeCount() {
    return this.getNumberAttribute('compute_node_count');
  }
  public set computeNodeCount(value: number) {
    this._computeNodeCount = value;
  }
  public resetComputeNodeCount() {
    this._computeNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeNodeCountInput() {
    return this._computeNodeCount;
  }

  // converged_node_count - computed: false, optional: true, required: false
  private _convergedNodeCount?: number; 
  public get convergedNodeCount() {
    return this.getNumberAttribute('converged_node_count');
  }
  public set convergedNodeCount(value: number) {
    this._convergedNodeCount = value;
  }
  public resetConvergedNodeCount() {
    this._convergedNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convergedNodeCountInput() {
    return this._convergedNodeCount;
  }

  // create_time - computed: false, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
  }

  // deployment_type - computed: false, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }

  // device_id - computed: false, optional: true, required: false
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }

  // domain_group_moid - computed: false, optional: true, required: false
  private _domainGroupMoid?: string; 
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }
  public set domainGroupMoid(value: string) {
    this._domainGroupMoid = value;
  }
  public resetDomainGroupMoid() {
    this._domainGroupMoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainGroupMoidInput() {
    return this._domainGroupMoid;
  }

  // drive_type - computed: false, optional: true, required: false
  private _driveType?: string; 
  public get driveType() {
    return this.getStringAttribute('drive_type');
  }
  public set driveType(value: string) {
    this._driveType = value;
  }
  public resetDriveType() {
    this._driveType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driveTypeInput() {
    return this._driveType;
  }

  // encryption_status - computed: false, optional: true, required: false
  private _encryptionStatus?: string; 
  public get encryptionStatus() {
    return this.getStringAttribute('encryption_status');
  }
  public set encryptionStatus(value: string) {
    this._encryptionStatus = value;
  }
  public resetEncryptionStatus() {
    this._encryptionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionStatusInput() {
    return this._encryptionStatus;
  }

  // flt_aggr - computed: false, optional: true, required: false
  private _fltAggr?: number; 
  public get fltAggr() {
    return this.getNumberAttribute('flt_aggr');
  }
  public set fltAggr(value: number) {
    this._fltAggr = value;
  }
  public resetFltAggr() {
    this._fltAggr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fltAggrInput() {
    return this._fltAggr;
  }

  // hx_version - computed: false, optional: true, required: false
  private _hxVersion?: string; 
  public get hxVersion() {
    return this.getStringAttribute('hx_version');
  }
  public set hxVersion(value: string) {
    this._hxVersion = value;
  }
  public resetHxVersion() {
    this._hxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hxVersionInput() {
    return this._hxVersion;
  }

  // hxdp_build_version - computed: false, optional: true, required: false
  private _hxdpBuildVersion?: string; 
  public get hxdpBuildVersion() {
    return this.getStringAttribute('hxdp_build_version');
  }
  public set hxdpBuildVersion(value: string) {
    this._hxdpBuildVersion = value;
  }
  public resetHxdpBuildVersion() {
    this._hxdpBuildVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hxdpBuildVersionInput() {
    return this._hxdpBuildVersion;
  }

  // hypervisor_type - computed: false, optional: true, required: false
  private _hypervisorType?: string; 
  public get hypervisorType() {
    return this.getStringAttribute('hypervisor_type');
  }
  public set hypervisorType(value: string) {
    this._hypervisorType = value;
  }
  public resetHypervisorType() {
    this._hypervisorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorTypeInput() {
    return this._hypervisorType;
  }

  // hypervisor_version - computed: false, optional: true, required: false
  private _hypervisorVersion?: string; 
  public get hypervisorVersion() {
    return this.getStringAttribute('hypervisor_version');
  }
  public set hypervisorVersion(value: string) {
    this._hypervisorVersion = value;
  }
  public resetHypervisorVersion() {
    this._hypervisorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorVersionInput() {
    return this._hypervisorVersion;
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

  // identity - computed: false, optional: true, required: false
  private _identity?: string; 
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity;
  }

  // mod_time - computed: false, optional: true, required: false
  private _modTime?: string; 
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }
  public set modTime(value: string) {
    this._modTime = value;
  }
  public resetModTime() {
    this._modTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modTimeInput() {
    return this._modTime;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ntp_servers - computed: false, optional: true, required: false
  private _ntpServers?: string[]; 
  public get ntpServers() {
    return this.getListAttribute('ntp_servers');
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

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // owners - computed: false, optional: true, required: false
  private _owners?: string[]; 
  public get owners() {
    return this.getListAttribute('owners');
  }
  public set owners(value: string[]) {
    this._owners = value;
  }
  public resetOwners() {
    this._owners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataIntersightHyperflexClusterResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // shared_scope - computed: false, optional: true, required: false
  private _sharedScope?: string; 
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }
  public set sharedScope(value: string) {
    this._sharedScope = value;
  }
  public resetSharedScope() {
    this._sharedScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedScopeInput() {
    return this._sharedScope;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // storage_capacity - computed: false, optional: true, required: false
  private _storageCapacity?: number; 
  public get storageCapacity() {
    return this.getNumberAttribute('storage_capacity');
  }
  public set storageCapacity(value: number) {
    this._storageCapacity = value;
  }
  public resetStorageCapacity() {
    this._storageCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCapacityInput() {
    return this._storageCapacity;
  }

  // storage_node_count - computed: false, optional: true, required: false
  private _storageNodeCount?: number; 
  public get storageNodeCount() {
    return this.getNumberAttribute('storage_node_count');
  }
  public set storageNodeCount(value: number) {
    this._storageNodeCount = value;
  }
  public resetStorageNodeCount() {
    this._storageNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageNodeCountInput() {
    return this._storageNodeCount;
  }

  // storage_utilization - computed: false, optional: true, required: false
  private _storageUtilization?: number; 
  public get storageUtilization() {
    return this.getNumberAttribute('storage_utilization');
  }
  public set storageUtilization(value: number) {
    this._storageUtilization = value;
  }
  public resetStorageUtilization() {
    this._storageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageUtilizationInput() {
    return this._storageUtilization;
  }

  // upgrade_status - computed: false, optional: true, required: false
  private _upgradeStatus?: string; 
  public get upgradeStatus() {
    return this.getStringAttribute('upgrade_status');
  }
  public set upgradeStatus(value: string) {
    this._upgradeStatus = value;
  }
  public resetUpgradeStatus() {
    this._upgradeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeStatusInput() {
    return this._upgradeStatus;
  }

  // uplink_speed - computed: false, optional: true, required: false
  private _uplinkSpeed?: string; 
  public get uplinkSpeed() {
    return this.getStringAttribute('uplink_speed');
  }
  public set uplinkSpeed(value: string) {
    this._uplinkSpeed = value;
  }
  public resetUplinkSpeed() {
    this._uplinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkSpeedInput() {
    return this._uplinkSpeed;
  }

  // utilization_percentage - computed: false, optional: true, required: false
  private _utilizationPercentage?: number; 
  public get utilizationPercentage() {
    return this.getNumberAttribute('utilization_percentage');
  }
  public set utilizationPercentage(value: number) {
    this._utilizationPercentage = value;
  }
  public resetUtilizationPercentage() {
    this._utilizationPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utilizationPercentageInput() {
    return this._utilizationPercentage;
  }

  // utilization_trend_percentage - computed: false, optional: true, required: false
  private _utilizationTrendPercentage?: number; 
  public get utilizationTrendPercentage() {
    return this.getNumberAttribute('utilization_trend_percentage');
  }
  public set utilizationTrendPercentage(value: number) {
    this._utilizationTrendPercentage = value;
  }
  public resetUtilizationTrendPercentage() {
    this._utilizationTrendPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utilizationTrendPercentageInput() {
    return this._utilizationTrendPercentage;
  }

  // vm_count - computed: false, optional: true, required: false
  private _vmCount?: number; 
  public get vmCount() {
    return this.getNumberAttribute('vm_count');
  }
  public set vmCount(value: number) {
    this._vmCount = value;
  }
  public resetVmCount() {
    this._vmCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmCountInput() {
    return this._vmCount;
  }

  // zone_type - computed: false, optional: true, required: false
  private _zoneType?: string; 
  public get zoneType() {
    return this.getStringAttribute('zone_type');
  }
  public set zoneType(value: string) {
    this._zoneType = value;
  }
  public resetZoneType() {
    this._zoneType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTypeInput() {
    return this._zoneType;
  }

  // alarm - computed: false, optional: true, required: false
  private _alarm = new DataIntersightHyperflexClusterAlarmList(this, "alarm", false);
  public get alarm() {
    return this._alarm;
  }
  public putAlarm(value: DataIntersightHyperflexClusterAlarm[] | cdktf.IResolvable) {
    this._alarm.internalValue = value;
  }
  public resetAlarm() {
    this._alarm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmInput() {
    return this._alarm.internalValue;
  }

  // alarm_summary - computed: false, optional: true, required: false
  private _alarmSummary = new DataIntersightHyperflexClusterAlarmSummaryOutputReference(this, "alarm_summary");
  public get alarmSummary() {
    return this._alarmSummary;
  }
  public putAlarmSummary(value: DataIntersightHyperflexClusterAlarmSummary) {
    this._alarmSummary.internalValue = value;
  }
  public resetAlarmSummary() {
    this._alarmSummary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmSummaryInput() {
    return this._alarmSummary.internalValue;
  }

  // ancestors - computed: false, optional: true, required: false
  private _ancestors = new DataIntersightHyperflexClusterAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }
  public putAncestors(value: DataIntersightHyperflexClusterAncestors[] | cdktf.IResolvable) {
    this._ancestors.internalValue = value;
  }
  public resetAncestors() {
    this._ancestors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorsInput() {
    return this._ancestors.internalValue;
  }

  // associated_profile - computed: false, optional: true, required: false
  private _associatedProfile = new DataIntersightHyperflexClusterAssociatedProfileOutputReference(this, "associated_profile");
  public get associatedProfile() {
    return this._associatedProfile;
  }
  public putAssociatedProfile(value: DataIntersightHyperflexClusterAssociatedProfile) {
    this._associatedProfile.internalValue = value;
  }
  public resetAssociatedProfile() {
    this._associatedProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedProfileInput() {
    return this._associatedProfile.internalValue;
  }

  // capability - computed: false, optional: true, required: false
  private _capability = new DataIntersightHyperflexClusterCapabilityOutputReference(this, "capability");
  public get capability() {
    return this._capability;
  }
  public putCapability(value: DataIntersightHyperflexClusterCapability) {
    this._capability.internalValue = value;
  }
  public resetCapability() {
    this._capability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityInput() {
    return this._capability.internalValue;
  }

  // child_clusters - computed: false, optional: true, required: false
  private _childClusters = new DataIntersightHyperflexClusterChildClustersList(this, "child_clusters", false);
  public get childClusters() {
    return this._childClusters;
  }
  public putChildClusters(value: DataIntersightHyperflexClusterChildClusters[] | cdktf.IResolvable) {
    this._childClusters.internalValue = value;
  }
  public resetChildClusters() {
    this._childClusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childClustersInput() {
    return this._childClusters.internalValue;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption = new DataIntersightHyperflexClusterEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: DataIntersightHyperflexClusterEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // health - computed: false, optional: true, required: false
  private _health = new DataIntersightHyperflexClusterHealthOutputReference(this, "health");
  public get health() {
    return this._health;
  }
  public putHealth(value: DataIntersightHyperflexClusterHealth) {
    this._health.internalValue = value;
  }
  public resetHealth() {
    this._health.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health.internalValue;
  }

  // license - computed: false, optional: true, required: false
  private _license = new DataIntersightHyperflexClusterLicenseOutputReference(this, "license");
  public get license() {
    return this._license;
  }
  public putLicense(value: DataIntersightHyperflexClusterLicense) {
    this._license.internalValue = value;
  }
  public resetLicense() {
    this._license.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license.internalValue;
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration = new DataIntersightHyperflexClusterNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: DataIntersightHyperflexClusterNetworkConfiguration) {
    this._networkConfiguration.internalValue = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes = new DataIntersightHyperflexClusterNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: DataIntersightHyperflexClusterNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  public resetNodes() {
    this._nodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // parent - computed: false, optional: true, required: false
  private _parent = new DataIntersightHyperflexClusterParentOutputReference(this, "parent");
  public get parent() {
    return this._parent;
  }
  public putParent(value: DataIntersightHyperflexClusterParent) {
    this._parent.internalValue = value;
  }
  public resetParent() {
    this._parent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent.internalValue;
  }

  // parent_cluster - computed: false, optional: true, required: false
  private _parentCluster = new DataIntersightHyperflexClusterParentClusterOutputReference(this, "parent_cluster");
  public get parentCluster() {
    return this._parentCluster;
  }
  public putParentCluster(value: DataIntersightHyperflexClusterParentCluster) {
    this._parentCluster.internalValue = value;
  }
  public resetParentCluster() {
    this._parentCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentClusterInput() {
    return this._parentCluster.internalValue;
  }

  // permission_resources - computed: false, optional: true, required: false
  private _permissionResources = new DataIntersightHyperflexClusterPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }
  public putPermissionResources(value: DataIntersightHyperflexClusterPermissionResources[] | cdktf.IResolvable) {
    this._permissionResources.internalValue = value;
  }
  public resetPermissionResources() {
    this._permissionResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionResourcesInput() {
    return this._permissionResources.internalValue;
  }

  // registered_device - computed: false, optional: true, required: false
  private _registeredDevice = new DataIntersightHyperflexClusterRegisteredDeviceOutputReference(this, "registered_device");
  public get registeredDevice() {
    return this._registeredDevice;
  }
  public putRegisteredDevice(value: DataIntersightHyperflexClusterRegisteredDevice) {
    this._registeredDevice.internalValue = value;
  }
  public resetRegisteredDevice() {
    this._registeredDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registeredDeviceInput() {
    return this._registeredDevice.internalValue;
  }

  // storage_client_ip_pools - computed: false, optional: true, required: false
  private _storageClientIpPools = new DataIntersightHyperflexClusterStorageClientIpPoolsList(this, "storage_client_ip_pools", false);
  public get storageClientIpPools() {
    return this._storageClientIpPools;
  }
  public putStorageClientIpPools(value: DataIntersightHyperflexClusterStorageClientIpPools[] | cdktf.IResolvable) {
    this._storageClientIpPools.internalValue = value;
  }
  public resetStorageClientIpPools() {
    this._storageClientIpPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClientIpPoolsInput() {
    return this._storageClientIpPools.internalValue;
  }

  // storage_client_vrf - computed: false, optional: true, required: false
  private _storageClientVrf = new DataIntersightHyperflexClusterStorageClientVrfOutputReference(this, "storage_client_vrf");
  public get storageClientVrf() {
    return this._storageClientVrf;
  }
  public putStorageClientVrf(value: DataIntersightHyperflexClusterStorageClientVrf) {
    this._storageClientVrf.internalValue = value;
  }
  public resetStorageClientVrf() {
    this._storageClientVrf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClientVrfInput() {
    return this._storageClientVrf.internalValue;
  }

  // storage_containers - computed: false, optional: true, required: false
  private _storageContainers = new DataIntersightHyperflexClusterStorageContainersList(this, "storage_containers", false);
  public get storageContainers() {
    return this._storageContainers;
  }
  public putStorageContainers(value: DataIntersightHyperflexClusterStorageContainers[] | cdktf.IResolvable) {
    this._storageContainers.internalValue = value;
  }
  public resetStorageContainers() {
    this._storageContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageContainersInput() {
    return this._storageContainers.internalValue;
  }

  // summary - computed: false, optional: true, required: false
  private _summary = new DataIntersightHyperflexClusterSummaryOutputReference(this, "summary");
  public get summary() {
    return this._summary;
  }
  public putSummary(value: DataIntersightHyperflexClusterSummary) {
    this._summary.internalValue = value;
  }
  public resetSummary() {
    this._summary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataIntersightHyperflexClusterTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataIntersightHyperflexClusterTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // vcenter_configuration - computed: false, optional: true, required: false
  private _vcenterConfiguration = new DataIntersightHyperflexClusterVcenterConfigurationOutputReference(this, "vcenter_configuration");
  public get vcenterConfiguration() {
    return this._vcenterConfiguration;
  }
  public putVcenterConfiguration(value: DataIntersightHyperflexClusterVcenterConfiguration) {
    this._vcenterConfiguration.internalValue = value;
  }
  public resetVcenterConfiguration() {
    this._vcenterConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterConfigurationInput() {
    return this._vcenterConfiguration.internalValue;
  }

  // version_context - computed: false, optional: true, required: false
  private _versionContext = new DataIntersightHyperflexClusterVersionContextOutputReference(this, "version_context");
  public get versionContext() {
    return this._versionContext;
  }
  public putVersionContext(value: DataIntersightHyperflexClusterVersionContext) {
    this._versionContext.internalValue = value;
  }
  public resetVersionContext() {
    this._versionContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionContextInput() {
    return this._versionContext.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataIntersightHyperflexClusterVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataIntersightHyperflexClusterVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_moid: cdktf.stringToTerraform(this._accountMoid),
      additional_properties: cdktf.stringToTerraform(this._additionalProperties),
      capacity_runway: cdktf.numberToTerraform(this._capacityRunway),
      class_id: cdktf.stringToTerraform(this._classId),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      cluster_purpose: cdktf.stringToTerraform(this._clusterPurpose),
      cluster_type: cdktf.numberToTerraform(this._clusterType),
      cluster_uuid: cdktf.stringToTerraform(this._clusterUuid),
      compute_node_count: cdktf.numberToTerraform(this._computeNodeCount),
      converged_node_count: cdktf.numberToTerraform(this._convergedNodeCount),
      create_time: cdktf.stringToTerraform(this._createTime),
      deployment_type: cdktf.stringToTerraform(this._deploymentType),
      device_id: cdktf.stringToTerraform(this._deviceId),
      dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsServers),
      domain_group_moid: cdktf.stringToTerraform(this._domainGroupMoid),
      drive_type: cdktf.stringToTerraform(this._driveType),
      encryption_status: cdktf.stringToTerraform(this._encryptionStatus),
      flt_aggr: cdktf.numberToTerraform(this._fltAggr),
      hx_version: cdktf.stringToTerraform(this._hxVersion),
      hxdp_build_version: cdktf.stringToTerraform(this._hxdpBuildVersion),
      hypervisor_type: cdktf.stringToTerraform(this._hypervisorType),
      hypervisor_version: cdktf.stringToTerraform(this._hypervisorVersion),
      id: cdktf.stringToTerraform(this._id),
      identity: cdktf.stringToTerraform(this._identity),
      mod_time: cdktf.stringToTerraform(this._modTime),
      moid: cdktf.stringToTerraform(this._moid),
      name: cdktf.stringToTerraform(this._name),
      ntp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ntpServers),
      object_type: cdktf.stringToTerraform(this._objectType),
      owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._owners),
      shared_scope: cdktf.stringToTerraform(this._sharedScope),
      status: cdktf.stringToTerraform(this._status),
      storage_capacity: cdktf.numberToTerraform(this._storageCapacity),
      storage_node_count: cdktf.numberToTerraform(this._storageNodeCount),
      storage_utilization: cdktf.numberToTerraform(this._storageUtilization),
      upgrade_status: cdktf.stringToTerraform(this._upgradeStatus),
      uplink_speed: cdktf.stringToTerraform(this._uplinkSpeed),
      utilization_percentage: cdktf.numberToTerraform(this._utilizationPercentage),
      utilization_trend_percentage: cdktf.numberToTerraform(this._utilizationTrendPercentage),
      vm_count: cdktf.numberToTerraform(this._vmCount),
      zone_type: cdktf.stringToTerraform(this._zoneType),
      alarm: cdktf.listMapper(dataIntersightHyperflexClusterAlarmToTerraform, true)(this._alarm.internalValue),
      alarm_summary: dataIntersightHyperflexClusterAlarmSummaryToTerraform(this._alarmSummary.internalValue),
      ancestors: cdktf.listMapper(dataIntersightHyperflexClusterAncestorsToTerraform, true)(this._ancestors.internalValue),
      associated_profile: dataIntersightHyperflexClusterAssociatedProfileToTerraform(this._associatedProfile.internalValue),
      capability: dataIntersightHyperflexClusterCapabilityToTerraform(this._capability.internalValue),
      child_clusters: cdktf.listMapper(dataIntersightHyperflexClusterChildClustersToTerraform, true)(this._childClusters.internalValue),
      encryption: dataIntersightHyperflexClusterEncryptionToTerraform(this._encryption.internalValue),
      health: dataIntersightHyperflexClusterHealthToTerraform(this._health.internalValue),
      license: dataIntersightHyperflexClusterLicenseToTerraform(this._license.internalValue),
      network_configuration: dataIntersightHyperflexClusterNetworkConfigurationToTerraform(this._networkConfiguration.internalValue),
      nodes: cdktf.listMapper(dataIntersightHyperflexClusterNodesToTerraform, true)(this._nodes.internalValue),
      parent: dataIntersightHyperflexClusterParentToTerraform(this._parent.internalValue),
      parent_cluster: dataIntersightHyperflexClusterParentClusterToTerraform(this._parentCluster.internalValue),
      permission_resources: cdktf.listMapper(dataIntersightHyperflexClusterPermissionResourcesToTerraform, true)(this._permissionResources.internalValue),
      registered_device: dataIntersightHyperflexClusterRegisteredDeviceToTerraform(this._registeredDevice.internalValue),
      storage_client_ip_pools: cdktf.listMapper(dataIntersightHyperflexClusterStorageClientIpPoolsToTerraform, true)(this._storageClientIpPools.internalValue),
      storage_client_vrf: dataIntersightHyperflexClusterStorageClientVrfToTerraform(this._storageClientVrf.internalValue),
      storage_containers: cdktf.listMapper(dataIntersightHyperflexClusterStorageContainersToTerraform, true)(this._storageContainers.internalValue),
      summary: dataIntersightHyperflexClusterSummaryToTerraform(this._summary.internalValue),
      tags: cdktf.listMapper(dataIntersightHyperflexClusterTagsToTerraform, true)(this._tags.internalValue),
      vcenter_configuration: dataIntersightHyperflexClusterVcenterConfigurationToTerraform(this._vcenterConfiguration.internalValue),
      version_context: dataIntersightHyperflexClusterVersionContextToTerraform(this._versionContext.internalValue),
      volumes: cdktf.listMapper(dataIntersightHyperflexClusterVolumesToTerraform, true)(this._volumes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_moid: {
        value: cdktf.stringToHclTerraform(this._accountMoid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_properties: {
        value: cdktf.stringToHclTerraform(this._additionalProperties),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity_runway: {
        value: cdktf.numberToHclTerraform(this._capacityRunway),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      class_id: {
        value: cdktf.stringToHclTerraform(this._classId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_purpose: {
        value: cdktf.stringToHclTerraform(this._clusterPurpose),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_type: {
        value: cdktf.numberToHclTerraform(this._clusterType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_uuid: {
        value: cdktf.stringToHclTerraform(this._clusterUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_node_count: {
        value: cdktf.numberToHclTerraform(this._computeNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      converged_node_count: {
        value: cdktf.numberToHclTerraform(this._convergedNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      create_time: {
        value: cdktf.stringToHclTerraform(this._createTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_type: {
        value: cdktf.stringToHclTerraform(this._deploymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_id: {
        value: cdktf.stringToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      domain_group_moid: {
        value: cdktf.stringToHclTerraform(this._domainGroupMoid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drive_type: {
        value: cdktf.stringToHclTerraform(this._driveType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_status: {
        value: cdktf.stringToHclTerraform(this._encryptionStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flt_aggr: {
        value: cdktf.numberToHclTerraform(this._fltAggr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hx_version: {
        value: cdktf.stringToHclTerraform(this._hxVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hxdp_build_version: {
        value: cdktf.stringToHclTerraform(this._hxdpBuildVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hypervisor_type: {
        value: cdktf.stringToHclTerraform(this._hypervisorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hypervisor_version: {
        value: cdktf.stringToHclTerraform(this._hypervisorVersion),
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
      identity: {
        value: cdktf.stringToHclTerraform(this._identity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mod_time: {
        value: cdktf.stringToHclTerraform(this._modTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      moid: {
        value: cdktf.stringToHclTerraform(this._moid),
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
      ntp_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ntpServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      object_type: {
        value: cdktf.stringToHclTerraform(this._objectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owners: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._owners),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      shared_scope: {
        value: cdktf.stringToHclTerraform(this._sharedScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_capacity: {
        value: cdktf.numberToHclTerraform(this._storageCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_node_count: {
        value: cdktf.numberToHclTerraform(this._storageNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_utilization: {
        value: cdktf.numberToHclTerraform(this._storageUtilization),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      upgrade_status: {
        value: cdktf.stringToHclTerraform(this._upgradeStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uplink_speed: {
        value: cdktf.stringToHclTerraform(this._uplinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      utilization_percentage: {
        value: cdktf.numberToHclTerraform(this._utilizationPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      utilization_trend_percentage: {
        value: cdktf.numberToHclTerraform(this._utilizationTrendPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vm_count: {
        value: cdktf.numberToHclTerraform(this._vmCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone_type: {
        value: cdktf.stringToHclTerraform(this._zoneType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alarm: {
        value: cdktf.listMapperHcl(dataIntersightHyperflexClusterAlarmToHclTerraform, true)(this._alarm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexClusterAlarmList",
      },
      alarm_summary: {
        value: dataIntersightHyperflexClusterAlarmSummaryToHclTerraform(this._alarmSummary.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexClusterAlarmSummaryList",
      },
      ancestors: {
        value: cdktf.listMapperHcl(dataIntersightHyperflexClusterAncestorsToHclTerraform, true)(this._ancestors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexClusterAncestorsList",
      },
      associated_profile: {
        value: dataIntersightHyperflexClusterAssociatedProfileToHclTerraform(this._associatedProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexClusterAssociatedProfileList",
      },
      capability: {
        value: dataIntersightHyperflexClusterCapabilityToHclTerraform(this._capability.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexClusterCapabilityList",
      },
      child_clusters: {
        value: cdktf.listMapperHcl(dataIntersightHyperflexClusterChildClustersToHclTerraform, true)(this._childClusters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexClusterChildClustersList",
      },
      encryption: {
        value: dataIntersightHyperflexClusterEncryptionToHclTerraform(this._encryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexClusterEncryptionList",
      },
      health: {
        value: dataIntersightHyperflexClusterHealthToHclTerraform(this._health.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexClusterHealthList",
      },
      license: {
        value: dataIntersightHyperflexClusterLicenseToHclTerraform(this._license.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexClusterLicenseList",
      },
      network_configuration: {
        value: dataIntersightHyperflexClusterNetworkConfigurationToHclTerraform(this._networkConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexClusterNetworkConfigurationList",
      },
      nodes: {
        value: cdktf.listMapperHcl(dataIntersightHyperflexClusterNodesToHclTerraform, true)(this._nodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexClusterNodesList",
      },
      parent: {
        value: dataIntersightHyperflexClusterParentToHclTerraform(this._parent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexClusterParentList",
      },
      parent_cluster: {
        value: dataIntersightHyperflexClusterParentClusterToHclTerraform(this._parentCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexClusterParentClusterList",
      },
      permission_resources: {
        value: cdktf.listMapperHcl(dataIntersightHyperflexClusterPermissionResourcesToHclTerraform, true)(this._permissionResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexClusterPermissionResourcesList",
      },
      registered_device: {
        value: dataIntersightHyperflexClusterRegisteredDeviceToHclTerraform(this._registeredDevice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexClusterRegisteredDeviceList",
      },
      storage_client_ip_pools: {
        value: cdktf.listMapperHcl(dataIntersightHyperflexClusterStorageClientIpPoolsToHclTerraform, true)(this._storageClientIpPools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexClusterStorageClientIpPoolsList",
      },
      storage_client_vrf: {
        value: dataIntersightHyperflexClusterStorageClientVrfToHclTerraform(this._storageClientVrf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexClusterStorageClientVrfList",
      },
      storage_containers: {
        value: cdktf.listMapperHcl(dataIntersightHyperflexClusterStorageContainersToHclTerraform, true)(this._storageContainers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexClusterStorageContainersList",
      },
      summary: {
        value: dataIntersightHyperflexClusterSummaryToHclTerraform(this._summary.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexClusterSummaryList",
      },
      tags: {
        value: cdktf.listMapperHcl(dataIntersightHyperflexClusterTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexClusterTagsList",
      },
      vcenter_configuration: {
        value: dataIntersightHyperflexClusterVcenterConfigurationToHclTerraform(this._vcenterConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexClusterVcenterConfigurationList",
      },
      version_context: {
        value: dataIntersightHyperflexClusterVersionContextToHclTerraform(this._versionContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexClusterVersionContextList",
      },
      volumes: {
        value: cdktf.listMapperHcl(dataIntersightHyperflexClusterVolumesToHclTerraform, true)(this._volumes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexClusterVolumesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
