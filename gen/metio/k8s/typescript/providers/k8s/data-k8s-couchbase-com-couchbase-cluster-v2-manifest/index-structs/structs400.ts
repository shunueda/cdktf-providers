import * as cdktf from 'cdktf';
import { DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecAutoResourceAllocation,
dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecAutoResourceAllocationToTerraform,
dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecAutoResourceAllocationToHclTerraform,
DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecAutoResourceAllocationOutputReference,
DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecBackup,
dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecBackupToTerraform,
dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecBackupToHclTerraform,
DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecBackupOutputReference,
DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecBuckets,
dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecBucketsToTerraform,
dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecBucketsToHclTerraform,
DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecBucketsOutputReference,
DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecCluster,
dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecClusterToTerraform,
dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecClusterToHclTerraform,
DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecClusterOutputReference,
DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecLogging,
dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecLoggingToTerraform,
dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecLoggingToHclTerraform,
DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecLoggingOutputReference,
DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecMonitoring,
dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecMonitoringToTerraform,
dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecMonitoringToHclTerraform,
DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecMonitoringOutputReference,
DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecNetworking,
dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecNetworkingToTerraform,
dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecNetworkingToHclTerraform,
DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecNetworkingOutputReference,
DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecRollingUpgrade,
dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecRollingUpgradeToTerraform,
dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecRollingUpgradeToHclTerraform,
DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecRollingUpgradeOutputReference,
DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecSecurity,
dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecSecurityToTerraform,
dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecSecurityToHclTerraform,
DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecSecurityOutputReference,
DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecSecurityContext,
dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecSecurityContextToTerraform,
dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecSecurityContextToHclTerraform,
DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecSecurityContextOutputReference,
DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecServers,
dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecServersToTerraform,
dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecServersToHclTerraform,
DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecServersList,
DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecVolumeClaimTemplates,
dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecVolumeClaimTemplatesToTerraform,
dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecVolumeClaimTemplatesToHclTerraform,
DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecVolumeClaimTemplatesList,
DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecXdcr,
dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecXdcrToTerraform,
dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecXdcrToHclTerraform,
DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecXdcrOutputReference } from './structs0'
export interface DataK8SCouchbaseComCouchbaseClusterV2ManifestSpec {
  /**
  * AntiAffinity forces the Operator to schedule different Couchbase server pods on different Kubernetes nodes. Anti-affinity reduces the likelihood of unrecoverable failure in the event of a node issue. Use of anti-affinity is highly recommended for production clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/couchbase_com_couchbase_cluster_v2_manifest#anti_affinity DataK8SCouchbaseComCouchbaseClusterV2Manifest#anti_affinity}
  */
  readonly antiAffinity?: boolean | cdktf.IResolvable;
  /**
  * AutoResourceAllocation populates pod resource requests based on the services running on that pod. When enabled, this feature will calculate the memory request as the total of service allocations defined in 'spec.cluster', plus an overhead defined by 'spec.autoResourceAllocation.overheadPercent'.Changing individual allocations for a service will cause a cluster upgrade as allocations are modified in the underlying pods. This field also allows default pod CPU requests and limits to be applied. All resource allocations can be overridden by explicitly configuring them in the 'spec.servers.resources' field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/couchbase_com_couchbase_cluster_v2_manifest#auto_resource_allocation DataK8SCouchbaseComCouchbaseClusterV2Manifest#auto_resource_allocation}
  */
  readonly autoResourceAllocation?: DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecAutoResourceAllocation;
  /**
  * AutoscaleStabilizationPeriod defines how long after a rebalance the corresponding HorizontalPodAutoscaler should remain in maintenance mode. During maintenance mode all autoscaling is disabled since every HorizontalPodAutoscaler associated with the cluster becomes inactive. Since certain metrics can be unpredictable when Couchbase is rebalancing or upgrading, setting a stabilization period helps to prevent scaling recommendations from the HorizontalPodAutoscaler for a provided period of time. Values must be a valid Kubernetes duration of 0s or higher: https://golang.org/pkg/time/#ParseDuration A value of 0, puts the cluster in maintenance mode during rebalance but immediately exits this mode once the rebalance has completed. When undefined, the HPA is never put into maintenance mode during rebalance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/couchbase_com_couchbase_cluster_v2_manifest#autoscale_stabilization_period DataK8SCouchbaseComCouchbaseClusterV2Manifest#autoscale_stabilization_period}
  */
  readonly autoscaleStabilizationPeriod?: string;
  /**
  * Backup defines whether the Operator should manage automated backups, and how to lookup backup resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/couchbase_com_couchbase_cluster_v2_manifest#backup DataK8SCouchbaseComCouchbaseClusterV2Manifest#backup}
  */
  readonly backup?: DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecBackup;
  /**
  * Buckets defines whether the Operator should manage buckets, and how to lookup bucket resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/couchbase_com_couchbase_cluster_v2_manifest#buckets DataK8SCouchbaseComCouchbaseClusterV2Manifest#buckets}
  */
  readonly buckets?: DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecBuckets;
  /**
  * ClusterSettings define Couchbase cluster-wide settings such as memory allocation, failover characteristics and index settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/couchbase_com_couchbase_cluster_v2_manifest#cluster DataK8SCouchbaseComCouchbaseClusterV2Manifest#cluster}
  */
  readonly cluster?: DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecCluster;
  /**
  * EnableOnlineVolumeExpansion enables online expansion of Persistent Volumes. You can only expand a PVC if its storage class's 'allowVolumeExpansion' field is set to true. Additionally, Kubernetes feature 'ExpandInUsePersistentVolumes' must be enabled in order to expand the volumes which are actively bound to Pods. Volumes can only be expanded and not reduced to a smaller size. See: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#resizing-an-in-use-persistentvolumeclaim If 'EnableOnlineVolumeExpansion' is enabled for use within an environment that does not actually support online volume and file system expansion then the cluster will fallback to rolling upgrade procedure to create a new set of Pods for use with resized Volumes. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#expanding-persistent-volumes-claims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/couchbase_com_couchbase_cluster_v2_manifest#enable_online_volume_expansion DataK8SCouchbaseComCouchbaseClusterV2Manifest#enable_online_volume_expansion}
  */
  readonly enableOnlineVolumeExpansion?: boolean | cdktf.IResolvable;
  /**
  * DEPRECATED - This option only exists for backwards compatibility and no longer restricts autoscaling to ephemeral services. EnablePreviewScaling enables autoscaling for stateful services and buckets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/couchbase_com_couchbase_cluster_v2_manifest#enable_preview_scaling DataK8SCouchbaseComCouchbaseClusterV2Manifest#enable_preview_scaling}
  */
  readonly enablePreviewScaling?: boolean | cdktf.IResolvable;
  /**
  * EnvImagePrecedence gives precedence over the default container image name in 'spec.Image' to an image name provided through Operator environment variables. For more info on using Operator environment variables: https://docs.couchbase.com/operator/current/reference-operator-configuration.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/couchbase_com_couchbase_cluster_v2_manifest#env_image_precedence DataK8SCouchbaseComCouchbaseClusterV2Manifest#env_image_precedence}
  */
  readonly envImagePrecedence?: boolean | cdktf.IResolvable;
  /**
  * Hibernate is whether to hibernate the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/couchbase_com_couchbase_cluster_v2_manifest#hibernate DataK8SCouchbaseComCouchbaseClusterV2Manifest#hibernate}
  */
  readonly hibernate?: boolean | cdktf.IResolvable;
  /**
  * HibernationStrategy defines how to hibernate the cluster. When Immediate the Operator will immediately delete all pods and take no further action until the hibernate field is set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/couchbase_com_couchbase_cluster_v2_manifest#hibernation_strategy DataK8SCouchbaseComCouchbaseClusterV2Manifest#hibernation_strategy}
  */
  readonly hibernationStrategy?: string;
  /**
  * Image is the container image name that will be used to launch Couchbase server instances. Updating this field will cause an automatic upgrade of the cluster. Explicitly specifying the image for a server class will override this value for the server class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/couchbase_com_couchbase_cluster_v2_manifest#image DataK8SCouchbaseComCouchbaseClusterV2Manifest#image}
  */
  readonly image: string;
  /**
  * Logging defines Operator logging options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/couchbase_com_couchbase_cluster_v2_manifest#logging DataK8SCouchbaseComCouchbaseClusterV2Manifest#logging}
  */
  readonly logging?: DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecLogging;
  /**
  * DEPRECATED - By Couchbase Server metrics endpoint on version 7.0+ Monitoring defines any Operator managed integration into 3rd party monitoring infrastructure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/couchbase_com_couchbase_cluster_v2_manifest#monitoring DataK8SCouchbaseComCouchbaseClusterV2Manifest#monitoring}
  */
  readonly monitoring?: DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecMonitoring;
  /**
  * Networking defines Couchbase cluster networking options such as network topology, TLS and DDNS settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/couchbase_com_couchbase_cluster_v2_manifest#networking DataK8SCouchbaseComCouchbaseClusterV2Manifest#networking}
  */
  readonly networking?: DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecNetworking;
  /**
  * OnlineVolumeExpansionTimeoutInMins must be provided as a retry mechanism with a timeout in minutes for expanding volumes. This must only be provided, if EnableOnlineVolumeExpansion is set to true. Value must be between 0 and 30. If no value is provided, then it defaults to 10 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/couchbase_com_couchbase_cluster_v2_manifest#online_volume_expansion_timeout_in_mins DataK8SCouchbaseComCouchbaseClusterV2Manifest#online_volume_expansion_timeout_in_mins}
  */
  readonly onlineVolumeExpansionTimeoutInMins?: number;
  /**
  * Paused is to pause the control of the operator for the Couchbase cluster. This does not pause the cluster itself, instead stopping the operator from taking any action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/couchbase_com_couchbase_cluster_v2_manifest#paused DataK8SCouchbaseComCouchbaseClusterV2Manifest#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * Platform gives a hint as to what platform we are running on and how to configure services. This field must be one of 'aws', 'gke' or 'azure'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/couchbase_com_couchbase_cluster_v2_manifest#platform DataK8SCouchbaseComCouchbaseClusterV2Manifest#platform}
  */
  readonly platform?: string;
  /**
  * RecoveryPolicy controls how aggressive the Operator is when recovering cluster topology. When PrioritizeDataIntegrity, the Operator will delegate failover exclusively to Couchbase server, relying on it to only allow recovery when safe to do so. When PrioritizeUptime, the Operator will wait for a period after the expected auto-failover of the cluster, before forcefully failing-over the pods. This may cause data loss, and is only expected to be used on clusters with ephemeral data, where the loss of the pod means that the data is known to be unrecoverable. This field must be either 'PrioritizeDataIntegrity' or 'PrioritizeUptime', defaulting to 'PrioritizeDataIntegrity'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/couchbase_com_couchbase_cluster_v2_manifest#recovery_policy DataK8SCouchbaseComCouchbaseClusterV2Manifest#recovery_policy}
  */
  readonly recoveryPolicy?: string;
  /**
  * When 'spec.upgradeStrategy' is set to 'RollingUpgrade' it will, by default, upgrade one pod at a time. If this field is specified then that number can be increased.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/couchbase_com_couchbase_cluster_v2_manifest#rolling_upgrade DataK8SCouchbaseComCouchbaseClusterV2Manifest#rolling_upgrade}
  */
  readonly rollingUpgrade?: DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecRollingUpgrade;
  /**
  * Security defines Couchbase cluster security options such as the administrator account username and password, and user RBAC settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/couchbase_com_couchbase_cluster_v2_manifest#security DataK8SCouchbaseComCouchbaseClusterV2Manifest#security}
  */
  readonly security: DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecSecurity;
  /**
  * DEPRECATED - by spec.security.securityContext SecurityContext allows the configuration of the security context for all Couchbase server pods. When using persistent volumes you may need to set the fsGroup field in order to write to the volume. For non-root clusters you must also set runAsUser to 1000, corresponding to the Couchbase user in official container images. More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/couchbase_com_couchbase_cluster_v2_manifest#security_context DataK8SCouchbaseComCouchbaseClusterV2Manifest#security_context}
  */
  readonly securityContext?: DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecSecurityContext;
  /**
  * ServerGroups define the set of availability zones you want to distribute pods over, and construct Couchbase server groups for. By default, most cloud providers will label nodes with the key 'topology.kubernetes.io/zone', the values associated with that key are used here to provide explicit scheduling by the Operator. You may manually label nodes using the 'topology.kubernetes.io/zone' key, to provide failure-domain aware scheduling when none is provided for you. Global server groups are applied to all server classes, and may be overridden on a per-server class basis to give more control over scheduling and server groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/couchbase_com_couchbase_cluster_v2_manifest#server_groups DataK8SCouchbaseComCouchbaseClusterV2Manifest#server_groups}
  */
  readonly serverGroups?: string[];
  /**
  * Servers defines server classes for the Operator to provision and manage. A server class defines what services are running and how many members make up that class. Specifying multiple server classes allows the Operator to provision clusters with Multi-Dimensional Scaling (MDS). At least one server class must be defined, and at least one server class must be running the data service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/couchbase_com_couchbase_cluster_v2_manifest#servers DataK8SCouchbaseComCouchbaseClusterV2Manifest#servers}
  */
  readonly servers: DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecServers[] | cdktf.IResolvable;
  /**
  * SoftwareUpdateNotifications enables software update notifications in the UI. When enabled, the UI will alert when a Couchbase server upgrade is available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/couchbase_com_couchbase_cluster_v2_manifest#software_update_notifications DataK8SCouchbaseComCouchbaseClusterV2Manifest#software_update_notifications}
  */
  readonly softwareUpdateNotifications?: boolean | cdktf.IResolvable;
  /**
  * UpgradeProcess defines the process that will be used when performing a couchbase cluster upgrade. When SwapRebalance is requested (default), pods will be upgraded using either a RollingUpgrade or ImmediateUpgrade (determined by UpgradeStrategy). When InPlaceUpgrade is requested, the operator will perform an in-place upgrade on a best effort basis. InPlaceUpgrade cannot be used if the UpgradeStrategy is set to ImmediateUpgrade.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/couchbase_com_couchbase_cluster_v2_manifest#upgrade_process DataK8SCouchbaseComCouchbaseClusterV2Manifest#upgrade_process}
  */
  readonly upgradeProcess?: string;
  /**
  * UpgradeStrategy controls how aggressive the Operator is when performing a cluster upgrade. When a rolling upgrade is requested, pods are upgraded one at a time. This strategy is slower, however less disruptive. When an immediate upgrade strategy is requested, all pods are upgraded at the same time. This strategy is faster, but more disruptive. This field must be either 'RollingUpgrade' or 'ImmediateUpgrade', defaulting to 'RollingUpgrade'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/couchbase_com_couchbase_cluster_v2_manifest#upgrade_strategy DataK8SCouchbaseComCouchbaseClusterV2Manifest#upgrade_strategy}
  */
  readonly upgradeStrategy?: string;
  /**
  * VolumeClaimTemplates define the desired characteristics of a volume that can be requested/claimed by a pod, for example the storage class to use and the volume size. Volume claim templates are referred to by name by server class volume mount configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/couchbase_com_couchbase_cluster_v2_manifest#volume_claim_templates DataK8SCouchbaseComCouchbaseClusterV2Manifest#volume_claim_templates}
  */
  readonly volumeClaimTemplates?: DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecVolumeClaimTemplates[] | cdktf.IResolvable;
  /**
  * XDCR defines whether the Operator should manage XDCR, remote clusters and how to lookup replication resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/couchbase_com_couchbase_cluster_v2_manifest#xdcr DataK8SCouchbaseComCouchbaseClusterV2Manifest#xdcr}
  */
  readonly xdcr?: DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecXdcr;
}

export function dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecToTerraform(struct?: DataK8SCouchbaseComCouchbaseClusterV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anti_affinity: cdktf.booleanToTerraform(struct!.antiAffinity),
    auto_resource_allocation: dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecAutoResourceAllocationToTerraform(struct!.autoResourceAllocation),
    autoscale_stabilization_period: cdktf.stringToTerraform(struct!.autoscaleStabilizationPeriod),
    backup: dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecBackupToTerraform(struct!.backup),
    buckets: dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecBucketsToTerraform(struct!.buckets),
    cluster: dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecClusterToTerraform(struct!.cluster),
    enable_online_volume_expansion: cdktf.booleanToTerraform(struct!.enableOnlineVolumeExpansion),
    enable_preview_scaling: cdktf.booleanToTerraform(struct!.enablePreviewScaling),
    env_image_precedence: cdktf.booleanToTerraform(struct!.envImagePrecedence),
    hibernate: cdktf.booleanToTerraform(struct!.hibernate),
    hibernation_strategy: cdktf.stringToTerraform(struct!.hibernationStrategy),
    image: cdktf.stringToTerraform(struct!.image),
    logging: dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecLoggingToTerraform(struct!.logging),
    monitoring: dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecMonitoringToTerraform(struct!.monitoring),
    networking: dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecNetworkingToTerraform(struct!.networking),
    online_volume_expansion_timeout_in_mins: cdktf.numberToTerraform(struct!.onlineVolumeExpansionTimeoutInMins),
    paused: cdktf.booleanToTerraform(struct!.paused),
    platform: cdktf.stringToTerraform(struct!.platform),
    recovery_policy: cdktf.stringToTerraform(struct!.recoveryPolicy),
    rolling_upgrade: dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecRollingUpgradeToTerraform(struct!.rollingUpgrade),
    security: dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecSecurityToTerraform(struct!.security),
    security_context: dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecSecurityContextToTerraform(struct!.securityContext),
    server_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serverGroups),
    servers: cdktf.listMapper(dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecServersToTerraform, false)(struct!.servers),
    software_update_notifications: cdktf.booleanToTerraform(struct!.softwareUpdateNotifications),
    upgrade_process: cdktf.stringToTerraform(struct!.upgradeProcess),
    upgrade_strategy: cdktf.stringToTerraform(struct!.upgradeStrategy),
    volume_claim_templates: cdktf.listMapper(dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecVolumeClaimTemplatesToTerraform, false)(struct!.volumeClaimTemplates),
    xdcr: dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecXdcrToTerraform(struct!.xdcr),
  }
}


export function dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseClusterV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anti_affinity: {
      value: cdktf.booleanToHclTerraform(struct!.antiAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_resource_allocation: {
      value: dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecAutoResourceAllocationToHclTerraform(struct!.autoResourceAllocation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecAutoResourceAllocation",
    },
    autoscale_stabilization_period: {
      value: cdktf.stringToHclTerraform(struct!.autoscaleStabilizationPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup: {
      value: dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecBackupToHclTerraform(struct!.backup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecBackup",
    },
    buckets: {
      value: dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecBucketsToHclTerraform(struct!.buckets),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecBuckets",
    },
    cluster: {
      value: dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecCluster",
    },
    enable_online_volume_expansion: {
      value: cdktf.booleanToHclTerraform(struct!.enableOnlineVolumeExpansion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_preview_scaling: {
      value: cdktf.booleanToHclTerraform(struct!.enablePreviewScaling),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    env_image_precedence: {
      value: cdktf.booleanToHclTerraform(struct!.envImagePrecedence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hibernate: {
      value: cdktf.booleanToHclTerraform(struct!.hibernate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hibernation_strategy: {
      value: cdktf.stringToHclTerraform(struct!.hibernationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecLogging",
    },
    monitoring: {
      value: dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecMonitoringToHclTerraform(struct!.monitoring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecMonitoring",
    },
    networking: {
      value: dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecNetworkingToHclTerraform(struct!.networking),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecNetworking",
    },
    online_volume_expansion_timeout_in_mins: {
      value: cdktf.numberToHclTerraform(struct!.onlineVolumeExpansionTimeoutInMins),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    paused: {
      value: cdktf.booleanToHclTerraform(struct!.paused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    platform: {
      value: cdktf.stringToHclTerraform(struct!.platform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recovery_policy: {
      value: cdktf.stringToHclTerraform(struct!.recoveryPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rolling_upgrade: {
      value: dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecRollingUpgradeToHclTerraform(struct!.rollingUpgrade),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecRollingUpgrade",
    },
    security: {
      value: dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecSecurity",
    },
    security_context: {
      value: dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecSecurityContext",
    },
    server_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serverGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    servers: {
      value: cdktf.listMapperHcl(dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecServersToHclTerraform, false)(struct!.servers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecServersList",
    },
    software_update_notifications: {
      value: cdktf.booleanToHclTerraform(struct!.softwareUpdateNotifications),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    upgrade_process: {
      value: cdktf.stringToHclTerraform(struct!.upgradeProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upgrade_strategy: {
      value: cdktf.stringToHclTerraform(struct!.upgradeStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_claim_templates: {
      value: cdktf.listMapperHcl(dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecVolumeClaimTemplatesToHclTerraform, false)(struct!.volumeClaimTemplates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecVolumeClaimTemplatesList",
    },
    xdcr: {
      value: dataK8SCouchbaseComCouchbaseClusterV2ManifestSpecXdcrToHclTerraform(struct!.xdcr),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecXdcr",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseClusterV2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antiAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiAffinity = this._antiAffinity;
    }
    if (this._autoResourceAllocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoResourceAllocation = this._autoResourceAllocation?.internalValue;
    }
    if (this._autoscaleStabilizationPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleStabilizationPeriod = this._autoscaleStabilizationPeriod;
    }
    if (this._backup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup?.internalValue;
    }
    if (this._buckets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buckets = this._buckets?.internalValue;
    }
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._enableOnlineVolumeExpansion !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOnlineVolumeExpansion = this._enableOnlineVolumeExpansion;
    }
    if (this._enablePreviewScaling !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePreviewScaling = this._enablePreviewScaling;
    }
    if (this._envImagePrecedence !== undefined) {
      hasAnyValues = true;
      internalValueResult.envImagePrecedence = this._envImagePrecedence;
    }
    if (this._hibernate !== undefined) {
      hasAnyValues = true;
      internalValueResult.hibernate = this._hibernate;
    }
    if (this._hibernationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.hibernationStrategy = this._hibernationStrategy;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._monitoring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoring = this._monitoring?.internalValue;
    }
    if (this._networking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networking = this._networking?.internalValue;
    }
    if (this._onlineVolumeExpansionTimeoutInMins !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlineVolumeExpansionTimeoutInMins = this._onlineVolumeExpansionTimeoutInMins;
    }
    if (this._paused !== undefined) {
      hasAnyValues = true;
      internalValueResult.paused = this._paused;
    }
    if (this._platform !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform;
    }
    if (this._recoveryPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryPolicy = this._recoveryPolicy;
    }
    if (this._rollingUpgrade?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpgrade = this._rollingUpgrade?.internalValue;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._serverGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverGroups = this._serverGroups;
    }
    if (this._servers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers?.internalValue;
    }
    if (this._softwareUpdateNotifications !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareUpdateNotifications = this._softwareUpdateNotifications;
    }
    if (this._upgradeProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeProcess = this._upgradeProcess;
    }
    if (this._upgradeStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeStrategy = this._upgradeStrategy;
    }
    if (this._volumeClaimTemplates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeClaimTemplates = this._volumeClaimTemplates?.internalValue;
    }
    if (this._xdcr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xdcr = this._xdcr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseClusterV2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._antiAffinity = undefined;
      this._autoResourceAllocation.internalValue = undefined;
      this._autoscaleStabilizationPeriod = undefined;
      this._backup.internalValue = undefined;
      this._buckets.internalValue = undefined;
      this._cluster.internalValue = undefined;
      this._enableOnlineVolumeExpansion = undefined;
      this._enablePreviewScaling = undefined;
      this._envImagePrecedence = undefined;
      this._hibernate = undefined;
      this._hibernationStrategy = undefined;
      this._image = undefined;
      this._logging.internalValue = undefined;
      this._monitoring.internalValue = undefined;
      this._networking.internalValue = undefined;
      this._onlineVolumeExpansionTimeoutInMins = undefined;
      this._paused = undefined;
      this._platform = undefined;
      this._recoveryPolicy = undefined;
      this._rollingUpgrade.internalValue = undefined;
      this._security.internalValue = undefined;
      this._securityContext.internalValue = undefined;
      this._serverGroups = undefined;
      this._servers.internalValue = undefined;
      this._softwareUpdateNotifications = undefined;
      this._upgradeProcess = undefined;
      this._upgradeStrategy = undefined;
      this._volumeClaimTemplates.internalValue = undefined;
      this._xdcr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._antiAffinity = value.antiAffinity;
      this._autoResourceAllocation.internalValue = value.autoResourceAllocation;
      this._autoscaleStabilizationPeriod = value.autoscaleStabilizationPeriod;
      this._backup.internalValue = value.backup;
      this._buckets.internalValue = value.buckets;
      this._cluster.internalValue = value.cluster;
      this._enableOnlineVolumeExpansion = value.enableOnlineVolumeExpansion;
      this._enablePreviewScaling = value.enablePreviewScaling;
      this._envImagePrecedence = value.envImagePrecedence;
      this._hibernate = value.hibernate;
      this._hibernationStrategy = value.hibernationStrategy;
      this._image = value.image;
      this._logging.internalValue = value.logging;
      this._monitoring.internalValue = value.monitoring;
      this._networking.internalValue = value.networking;
      this._onlineVolumeExpansionTimeoutInMins = value.onlineVolumeExpansionTimeoutInMins;
      this._paused = value.paused;
      this._platform = value.platform;
      this._recoveryPolicy = value.recoveryPolicy;
      this._rollingUpgrade.internalValue = value.rollingUpgrade;
      this._security.internalValue = value.security;
      this._securityContext.internalValue = value.securityContext;
      this._serverGroups = value.serverGroups;
      this._servers.internalValue = value.servers;
      this._softwareUpdateNotifications = value.softwareUpdateNotifications;
      this._upgradeProcess = value.upgradeProcess;
      this._upgradeStrategy = value.upgradeStrategy;
      this._volumeClaimTemplates.internalValue = value.volumeClaimTemplates;
      this._xdcr.internalValue = value.xdcr;
    }
  }

  // anti_affinity - computed: false, optional: true, required: false
  private _antiAffinity?: boolean | cdktf.IResolvable; 
  public get antiAffinity() {
    return this.getBooleanAttribute('anti_affinity');
  }
  public set antiAffinity(value: boolean | cdktf.IResolvable) {
    this._antiAffinity = value;
  }
  public resetAntiAffinity() {
    this._antiAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiAffinityInput() {
    return this._antiAffinity;
  }

  // auto_resource_allocation - computed: false, optional: true, required: false
  private _autoResourceAllocation = new DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecAutoResourceAllocationOutputReference(this, "auto_resource_allocation");
  public get autoResourceAllocation() {
    return this._autoResourceAllocation;
  }
  public putAutoResourceAllocation(value: DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecAutoResourceAllocation) {
    this._autoResourceAllocation.internalValue = value;
  }
  public resetAutoResourceAllocation() {
    this._autoResourceAllocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoResourceAllocationInput() {
    return this._autoResourceAllocation.internalValue;
  }

  // autoscale_stabilization_period - computed: false, optional: true, required: false
  private _autoscaleStabilizationPeriod?: string; 
  public get autoscaleStabilizationPeriod() {
    return this.getStringAttribute('autoscale_stabilization_period');
  }
  public set autoscaleStabilizationPeriod(value: string) {
    this._autoscaleStabilizationPeriod = value;
  }
  public resetAutoscaleStabilizationPeriod() {
    this._autoscaleStabilizationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleStabilizationPeriodInput() {
    return this._autoscaleStabilizationPeriod;
  }

  // backup - computed: false, optional: true, required: false
  private _backup = new DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecBackupOutputReference(this, "backup");
  public get backup() {
    return this._backup;
  }
  public putBackup(value: DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecBackup) {
    this._backup.internalValue = value;
  }
  public resetBackup() {
    this._backup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup.internalValue;
  }

  // buckets - computed: false, optional: true, required: false
  private _buckets = new DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecBucketsOutputReference(this, "buckets");
  public get buckets() {
    return this._buckets;
  }
  public putBuckets(value: DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecBuckets) {
    this._buckets.internalValue = value;
  }
  public resetBuckets() {
    this._buckets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketsInput() {
    return this._buckets.internalValue;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // enable_online_volume_expansion - computed: false, optional: true, required: false
  private _enableOnlineVolumeExpansion?: boolean | cdktf.IResolvable; 
  public get enableOnlineVolumeExpansion() {
    return this.getBooleanAttribute('enable_online_volume_expansion');
  }
  public set enableOnlineVolumeExpansion(value: boolean | cdktf.IResolvable) {
    this._enableOnlineVolumeExpansion = value;
  }
  public resetEnableOnlineVolumeExpansion() {
    this._enableOnlineVolumeExpansion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOnlineVolumeExpansionInput() {
    return this._enableOnlineVolumeExpansion;
  }

  // enable_preview_scaling - computed: false, optional: true, required: false
  private _enablePreviewScaling?: boolean | cdktf.IResolvable; 
  public get enablePreviewScaling() {
    return this.getBooleanAttribute('enable_preview_scaling');
  }
  public set enablePreviewScaling(value: boolean | cdktf.IResolvable) {
    this._enablePreviewScaling = value;
  }
  public resetEnablePreviewScaling() {
    this._enablePreviewScaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePreviewScalingInput() {
    return this._enablePreviewScaling;
  }

  // env_image_precedence - computed: false, optional: true, required: false
  private _envImagePrecedence?: boolean | cdktf.IResolvable; 
  public get envImagePrecedence() {
    return this.getBooleanAttribute('env_image_precedence');
  }
  public set envImagePrecedence(value: boolean | cdktf.IResolvable) {
    this._envImagePrecedence = value;
  }
  public resetEnvImagePrecedence() {
    this._envImagePrecedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envImagePrecedenceInput() {
    return this._envImagePrecedence;
  }

  // hibernate - computed: false, optional: true, required: false
  private _hibernate?: boolean | cdktf.IResolvable; 
  public get hibernate() {
    return this.getBooleanAttribute('hibernate');
  }
  public set hibernate(value: boolean | cdktf.IResolvable) {
    this._hibernate = value;
  }
  public resetHibernate() {
    this._hibernate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hibernateInput() {
    return this._hibernate;
  }

  // hibernation_strategy - computed: false, optional: true, required: false
  private _hibernationStrategy?: string; 
  public get hibernationStrategy() {
    return this.getStringAttribute('hibernation_strategy');
  }
  public set hibernationStrategy(value: string) {
    this._hibernationStrategy = value;
  }
  public resetHibernationStrategy() {
    this._hibernationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hibernationStrategyInput() {
    return this._hibernationStrategy;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring = new DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecMonitoringOutputReference(this, "monitoring");
  public get monitoring() {
    return this._monitoring;
  }
  public putMonitoring(value: DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecMonitoring) {
    this._monitoring.internalValue = value;
  }
  public resetMonitoring() {
    this._monitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring.internalValue;
  }

  // networking - computed: false, optional: true, required: false
  private _networking = new DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecNetworkingOutputReference(this, "networking");
  public get networking() {
    return this._networking;
  }
  public putNetworking(value: DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecNetworking) {
    this._networking.internalValue = value;
  }
  public resetNetworking() {
    this._networking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkingInput() {
    return this._networking.internalValue;
  }

  // online_volume_expansion_timeout_in_mins - computed: false, optional: true, required: false
  private _onlineVolumeExpansionTimeoutInMins?: number; 
  public get onlineVolumeExpansionTimeoutInMins() {
    return this.getNumberAttribute('online_volume_expansion_timeout_in_mins');
  }
  public set onlineVolumeExpansionTimeoutInMins(value: number) {
    this._onlineVolumeExpansionTimeoutInMins = value;
  }
  public resetOnlineVolumeExpansionTimeoutInMins() {
    this._onlineVolumeExpansionTimeoutInMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlineVolumeExpansionTimeoutInMinsInput() {
    return this._onlineVolumeExpansionTimeoutInMins;
  }

  // paused - computed: false, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // platform - computed: false, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // recovery_policy - computed: false, optional: true, required: false
  private _recoveryPolicy?: string; 
  public get recoveryPolicy() {
    return this.getStringAttribute('recovery_policy');
  }
  public set recoveryPolicy(value: string) {
    this._recoveryPolicy = value;
  }
  public resetRecoveryPolicy() {
    this._recoveryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPolicyInput() {
    return this._recoveryPolicy;
  }

  // rolling_upgrade - computed: false, optional: true, required: false
  private _rollingUpgrade = new DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecRollingUpgradeOutputReference(this, "rolling_upgrade");
  public get rollingUpgrade() {
    return this._rollingUpgrade;
  }
  public putRollingUpgrade(value: DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecRollingUpgrade) {
    this._rollingUpgrade.internalValue = value;
  }
  public resetRollingUpgrade() {
    this._rollingUpgrade.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpgradeInput() {
    return this._rollingUpgrade.internalValue;
  }

  // security - computed: false, optional: false, required: true
  private _security = new DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecSecurity) {
    this._security.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // server_groups - computed: false, optional: true, required: false
  private _serverGroups?: string[]; 
  public get serverGroups() {
    return this.getListAttribute('server_groups');
  }
  public set serverGroups(value: string[]) {
    this._serverGroups = value;
  }
  public resetServerGroups() {
    this._serverGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupsInput() {
    return this._serverGroups;
  }

  // servers - computed: false, optional: false, required: true
  private _servers = new DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }
  public putServers(value: DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecServers[] | cdktf.IResolvable) {
    this._servers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }

  // software_update_notifications - computed: false, optional: true, required: false
  private _softwareUpdateNotifications?: boolean | cdktf.IResolvable; 
  public get softwareUpdateNotifications() {
    return this.getBooleanAttribute('software_update_notifications');
  }
  public set softwareUpdateNotifications(value: boolean | cdktf.IResolvable) {
    this._softwareUpdateNotifications = value;
  }
  public resetSoftwareUpdateNotifications() {
    this._softwareUpdateNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareUpdateNotificationsInput() {
    return this._softwareUpdateNotifications;
  }

  // upgrade_process - computed: false, optional: true, required: false
  private _upgradeProcess?: string; 
  public get upgradeProcess() {
    return this.getStringAttribute('upgrade_process');
  }
  public set upgradeProcess(value: string) {
    this._upgradeProcess = value;
  }
  public resetUpgradeProcess() {
    this._upgradeProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeProcessInput() {
    return this._upgradeProcess;
  }

  // upgrade_strategy - computed: false, optional: true, required: false
  private _upgradeStrategy?: string; 
  public get upgradeStrategy() {
    return this.getStringAttribute('upgrade_strategy');
  }
  public set upgradeStrategy(value: string) {
    this._upgradeStrategy = value;
  }
  public resetUpgradeStrategy() {
    this._upgradeStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeStrategyInput() {
    return this._upgradeStrategy;
  }

  // volume_claim_templates - computed: false, optional: true, required: false
  private _volumeClaimTemplates = new DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecVolumeClaimTemplatesList(this, "volume_claim_templates", false);
  public get volumeClaimTemplates() {
    return this._volumeClaimTemplates;
  }
  public putVolumeClaimTemplates(value: DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecVolumeClaimTemplates[] | cdktf.IResolvable) {
    this._volumeClaimTemplates.internalValue = value;
  }
  public resetVolumeClaimTemplates() {
    this._volumeClaimTemplates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeClaimTemplatesInput() {
    return this._volumeClaimTemplates.internalValue;
  }

  // xdcr - computed: false, optional: true, required: false
  private _xdcr = new DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecXdcrOutputReference(this, "xdcr");
  public get xdcr() {
    return this._xdcr;
  }
  public putXdcr(value: DataK8SCouchbaseComCouchbaseClusterV2ManifestSpecXdcr) {
    this._xdcr.internalValue = value;
  }
  public resetXdcr() {
    this._xdcr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xdcrInput() {
    return this._xdcr.internalValue;
  }
}
