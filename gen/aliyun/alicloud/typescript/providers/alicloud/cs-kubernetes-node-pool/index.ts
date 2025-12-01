// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CsKubernetesNodePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#auto_renew CsKubernetesNodePool#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#auto_renew_period CsKubernetesNodePool#auto_renew_period}
  */
  readonly autoRenewPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#cis_enabled CsKubernetesNodePool#cis_enabled}
  */
  readonly cisEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#cluster_id CsKubernetesNodePool#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#compensate_with_on_demand CsKubernetesNodePool#compensate_with_on_demand}
  */
  readonly compensateWithOnDemand?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#cpu_policy CsKubernetesNodePool#cpu_policy}
  */
  readonly cpuPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#deployment_set_id CsKubernetesNodePool#deployment_set_id}
  */
  readonly deploymentSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#desired_size CsKubernetesNodePool#desired_size}
  */
  readonly desiredSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#force_delete CsKubernetesNodePool#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#format_disk CsKubernetesNodePool#format_disk}
  */
  readonly formatDisk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#id CsKubernetesNodePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#image_id CsKubernetesNodePool#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#image_type CsKubernetesNodePool#image_type}
  */
  readonly imageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#install_cloud_monitor CsKubernetesNodePool#install_cloud_monitor}
  */
  readonly installCloudMonitor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#instance_charge_type CsKubernetesNodePool#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#instance_types CsKubernetesNodePool#instance_types}
  */
  readonly instanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#instances CsKubernetesNodePool#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#internet_charge_type CsKubernetesNodePool#internet_charge_type}
  */
  readonly internetChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#internet_max_bandwidth_out CsKubernetesNodePool#internet_max_bandwidth_out}
  */
  readonly internetMaxBandwidthOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#keep_instance_name CsKubernetesNodePool#keep_instance_name}
  */
  readonly keepInstanceName?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#key_name CsKubernetesNodePool#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#kms_encrypted_password CsKubernetesNodePool#kms_encrypted_password}
  */
  readonly kmsEncryptedPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#kms_encryption_context CsKubernetesNodePool#kms_encryption_context}
  */
  readonly kmsEncryptionContext?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#login_as_non_root CsKubernetesNodePool#login_as_non_root}
  */
  readonly loginAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#multi_az_policy CsKubernetesNodePool#multi_az_policy}
  */
  readonly multiAzPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#name CsKubernetesNodePool#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#node_count CsKubernetesNodePool#node_count}
  */
  readonly nodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#node_name_mode CsKubernetesNodePool#node_name_mode}
  */
  readonly nodeNameMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#node_pool_name CsKubernetesNodePool#node_pool_name}
  */
  readonly nodePoolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#on_demand_base_capacity CsKubernetesNodePool#on_demand_base_capacity}
  */
  readonly onDemandBaseCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#on_demand_percentage_above_base_capacity CsKubernetesNodePool#on_demand_percentage_above_base_capacity}
  */
  readonly onDemandPercentageAboveBaseCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#password CsKubernetesNodePool#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#period CsKubernetesNodePool#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#period_unit CsKubernetesNodePool#period_unit}
  */
  readonly periodUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#platform CsKubernetesNodePool#platform}
  */
  readonly platform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#pre_user_data CsKubernetesNodePool#pre_user_data}
  */
  readonly preUserData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#ram_role_name CsKubernetesNodePool#ram_role_name}
  */
  readonly ramRoleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#rds_instances CsKubernetesNodePool#rds_instances}
  */
  readonly rdsInstances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#resource_group_id CsKubernetesNodePool#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#runtime_name CsKubernetesNodePool#runtime_name}
  */
  readonly runtimeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#runtime_version CsKubernetesNodePool#runtime_version}
  */
  readonly runtimeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#scaling_policy CsKubernetesNodePool#scaling_policy}
  */
  readonly scalingPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#security_group_id CsKubernetesNodePool#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#security_group_ids CsKubernetesNodePool#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#security_hardening_os CsKubernetesNodePool#security_hardening_os}
  */
  readonly securityHardeningOs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#soc_enabled CsKubernetesNodePool#soc_enabled}
  */
  readonly socEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#spot_instance_pools CsKubernetesNodePool#spot_instance_pools}
  */
  readonly spotInstancePools?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#spot_instance_remedy CsKubernetesNodePool#spot_instance_remedy}
  */
  readonly spotInstanceRemedy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#spot_strategy CsKubernetesNodePool#spot_strategy}
  */
  readonly spotStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#system_disk_bursting_enabled CsKubernetesNodePool#system_disk_bursting_enabled}
  */
  readonly systemDiskBurstingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#system_disk_categories CsKubernetesNodePool#system_disk_categories}
  */
  readonly systemDiskCategories?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#system_disk_category CsKubernetesNodePool#system_disk_category}
  */
  readonly systemDiskCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#system_disk_encrypt_algorithm CsKubernetesNodePool#system_disk_encrypt_algorithm}
  */
  readonly systemDiskEncryptAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#system_disk_encrypted CsKubernetesNodePool#system_disk_encrypted}
  */
  readonly systemDiskEncrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#system_disk_kms_key CsKubernetesNodePool#system_disk_kms_key}
  */
  readonly systemDiskKmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#system_disk_performance_level CsKubernetesNodePool#system_disk_performance_level}
  */
  readonly systemDiskPerformanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#system_disk_provisioned_iops CsKubernetesNodePool#system_disk_provisioned_iops}
  */
  readonly systemDiskProvisionedIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#system_disk_size CsKubernetesNodePool#system_disk_size}
  */
  readonly systemDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#system_disk_snapshot_policy_id CsKubernetesNodePool#system_disk_snapshot_policy_id}
  */
  readonly systemDiskSnapshotPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#tags CsKubernetesNodePool#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#type CsKubernetesNodePool#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#unschedulable CsKubernetesNodePool#unschedulable}
  */
  readonly unschedulable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#update_nodes CsKubernetesNodePool#update_nodes}
  */
  readonly updateNodes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#user_data CsKubernetesNodePool#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#vswitch_ids CsKubernetesNodePool#vswitch_ids}
  */
  readonly vswitchIds?: string[];
  /**
  * data_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#data_disks CsKubernetesNodePool#data_disks}
  */
  readonly dataDisks?: CsKubernetesNodePoolDataDisks[] | cdktf.IResolvable;
  /**
  * eflo_node_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#eflo_node_group CsKubernetesNodePool#eflo_node_group}
  */
  readonly efloNodeGroup?: CsKubernetesNodePoolEfloNodeGroup;
  /**
  * kubelet_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#kubelet_configuration CsKubernetesNodePool#kubelet_configuration}
  */
  readonly kubeletConfiguration?: CsKubernetesNodePoolKubeletConfiguration;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#labels CsKubernetesNodePool#labels}
  */
  readonly labels?: CsKubernetesNodePoolLabels[] | cdktf.IResolvable;
  /**
  * management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#management CsKubernetesNodePool#management}
  */
  readonly management?: CsKubernetesNodePoolManagement;
  /**
  * private_pool_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#private_pool_options CsKubernetesNodePool#private_pool_options}
  */
  readonly privatePoolOptions?: CsKubernetesNodePoolPrivatePoolOptions;
  /**
  * rolling_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#rolling_policy CsKubernetesNodePool#rolling_policy}
  */
  readonly rollingPolicy?: CsKubernetesNodePoolRollingPolicy;
  /**
  * rollout_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#rollout_policy CsKubernetesNodePool#rollout_policy}
  */
  readonly rolloutPolicy?: CsKubernetesNodePoolRolloutPolicy;
  /**
  * scaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#scaling_config CsKubernetesNodePool#scaling_config}
  */
  readonly scalingConfig?: CsKubernetesNodePoolScalingConfig;
  /**
  * spot_price_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#spot_price_limit CsKubernetesNodePool#spot_price_limit}
  */
  readonly spotPriceLimit?: CsKubernetesNodePoolSpotPriceLimit[] | cdktf.IResolvable;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#taints CsKubernetesNodePool#taints}
  */
  readonly taints?: CsKubernetesNodePoolTaints[] | cdktf.IResolvable;
  /**
  * tee_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#tee_config CsKubernetesNodePool#tee_config}
  */
  readonly teeConfig?: CsKubernetesNodePoolTeeConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#timeouts CsKubernetesNodePool#timeouts}
  */
  readonly timeouts?: CsKubernetesNodePoolTimeouts;
}
export interface CsKubernetesNodePoolDataDisks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#auto_format CsKubernetesNodePool#auto_format}
  */
  readonly autoFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#auto_snapshot_policy_id CsKubernetesNodePool#auto_snapshot_policy_id}
  */
  readonly autoSnapshotPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#bursting_enabled CsKubernetesNodePool#bursting_enabled}
  */
  readonly burstingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#category CsKubernetesNodePool#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#device CsKubernetesNodePool#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#encrypted CsKubernetesNodePool#encrypted}
  */
  readonly encrypted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#file_system CsKubernetesNodePool#file_system}
  */
  readonly fileSystem?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#kms_key_id CsKubernetesNodePool#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#mount_target CsKubernetesNodePool#mount_target}
  */
  readonly mountTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#name CsKubernetesNodePool#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#performance_level CsKubernetesNodePool#performance_level}
  */
  readonly performanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#provisioned_iops CsKubernetesNodePool#provisioned_iops}
  */
  readonly provisionedIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#size CsKubernetesNodePool#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#snapshot_id CsKubernetesNodePool#snapshot_id}
  */
  readonly snapshotId?: string;
}

export function csKubernetesNodePoolDataDisksToTerraform(struct?: CsKubernetesNodePoolDataDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_format: cdktf.stringToTerraform(struct!.autoFormat),
    auto_snapshot_policy_id: cdktf.stringToTerraform(struct!.autoSnapshotPolicyId),
    bursting_enabled: cdktf.booleanToTerraform(struct!.burstingEnabled),
    category: cdktf.stringToTerraform(struct!.category),
    device: cdktf.stringToTerraform(struct!.device),
    encrypted: cdktf.stringToTerraform(struct!.encrypted),
    file_system: cdktf.stringToTerraform(struct!.fileSystem),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    mount_target: cdktf.stringToTerraform(struct!.mountTarget),
    name: cdktf.stringToTerraform(struct!.name),
    performance_level: cdktf.stringToTerraform(struct!.performanceLevel),
    provisioned_iops: cdktf.numberToTerraform(struct!.provisionedIops),
    size: cdktf.numberToTerraform(struct!.size),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
  }
}


export function csKubernetesNodePoolDataDisksToHclTerraform(struct?: CsKubernetesNodePoolDataDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_format: {
      value: cdktf.stringToHclTerraform(struct!.autoFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_snapshot_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.autoSnapshotPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bursting_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.burstingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypted: {
      value: cdktf.stringToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system: {
      value: cdktf.stringToHclTerraform(struct!.fileSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_target: {
      value: cdktf.stringToHclTerraform(struct!.mountTarget),
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
    performance_level: {
      value: cdktf.stringToHclTerraform(struct!.performanceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provisioned_iops: {
      value: cdktf.numberToHclTerraform(struct!.provisionedIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshot_id: {
      value: cdktf.stringToHclTerraform(struct!.snapshotId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsKubernetesNodePoolDataDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsKubernetesNodePoolDataDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoFormat = this._autoFormat;
    }
    if (this._autoSnapshotPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSnapshotPolicyId = this._autoSnapshotPolicyId;
    }
    if (this._burstingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstingEnabled = this._burstingEnabled;
    }
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._fileSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystem = this._fileSystem;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._mountTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountTarget = this._mountTarget;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._performanceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceLevel = this._performanceLevel;
    }
    if (this._provisionedIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedIops = this._provisionedIops;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsKubernetesNodePoolDataDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoFormat = undefined;
      this._autoSnapshotPolicyId = undefined;
      this._burstingEnabled = undefined;
      this._category = undefined;
      this._device = undefined;
      this._encrypted = undefined;
      this._fileSystem = undefined;
      this._kmsKeyId = undefined;
      this._mountTarget = undefined;
      this._name = undefined;
      this._performanceLevel = undefined;
      this._provisionedIops = undefined;
      this._size = undefined;
      this._snapshotId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoFormat = value.autoFormat;
      this._autoSnapshotPolicyId = value.autoSnapshotPolicyId;
      this._burstingEnabled = value.burstingEnabled;
      this._category = value.category;
      this._device = value.device;
      this._encrypted = value.encrypted;
      this._fileSystem = value.fileSystem;
      this._kmsKeyId = value.kmsKeyId;
      this._mountTarget = value.mountTarget;
      this._name = value.name;
      this._performanceLevel = value.performanceLevel;
      this._provisionedIops = value.provisionedIops;
      this._size = value.size;
      this._snapshotId = value.snapshotId;
    }
  }

  // auto_format - computed: false, optional: true, required: false
  private _autoFormat?: string; 
  public get autoFormat() {
    return this.getStringAttribute('auto_format');
  }
  public set autoFormat(value: string) {
    this._autoFormat = value;
  }
  public resetAutoFormat() {
    this._autoFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFormatInput() {
    return this._autoFormat;
  }

  // auto_snapshot_policy_id - computed: false, optional: true, required: false
  private _autoSnapshotPolicyId?: string; 
  public get autoSnapshotPolicyId() {
    return this.getStringAttribute('auto_snapshot_policy_id');
  }
  public set autoSnapshotPolicyId(value: string) {
    this._autoSnapshotPolicyId = value;
  }
  public resetAutoSnapshotPolicyId() {
    this._autoSnapshotPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSnapshotPolicyIdInput() {
    return this._autoSnapshotPolicyId;
  }

  // bursting_enabled - computed: false, optional: true, required: false
  private _burstingEnabled?: boolean | cdktf.IResolvable; 
  public get burstingEnabled() {
    return this.getBooleanAttribute('bursting_enabled');
  }
  public set burstingEnabled(value: boolean | cdktf.IResolvable) {
    this._burstingEnabled = value;
  }
  public resetBurstingEnabled() {
    this._burstingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstingEnabledInput() {
    return this._burstingEnabled;
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: string; 
  public get encrypted() {
    return this.getStringAttribute('encrypted');
  }
  public set encrypted(value: string) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // file_system - computed: false, optional: true, required: false
  private _fileSystem?: string; 
  public get fileSystem() {
    return this.getStringAttribute('file_system');
  }
  public set fileSystem(value: string) {
    this._fileSystem = value;
  }
  public resetFileSystem() {
    this._fileSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemInput() {
    return this._fileSystem;
  }

  // kms_key_id - computed: false, optional: true, required: false
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

  // mount_target - computed: false, optional: true, required: false
  private _mountTarget?: string; 
  public get mountTarget() {
    return this.getStringAttribute('mount_target');
  }
  public set mountTarget(value: string) {
    this._mountTarget = value;
  }
  public resetMountTarget() {
    this._mountTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountTargetInput() {
    return this._mountTarget;
  }

  // name - computed: true, optional: true, required: false
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

  // performance_level - computed: false, optional: true, required: false
  private _performanceLevel?: string; 
  public get performanceLevel() {
    return this.getStringAttribute('performance_level');
  }
  public set performanceLevel(value: string) {
    this._performanceLevel = value;
  }
  public resetPerformanceLevel() {
    this._performanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceLevelInput() {
    return this._performanceLevel;
  }

  // provisioned_iops - computed: false, optional: true, required: false
  private _provisionedIops?: number; 
  public get provisionedIops() {
    return this.getNumberAttribute('provisioned_iops');
  }
  public set provisionedIops(value: number) {
    this._provisionedIops = value;
  }
  public resetProvisionedIops() {
    this._provisionedIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedIopsInput() {
    return this._provisionedIops;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }
}

export class CsKubernetesNodePoolDataDisksList extends cdktf.ComplexList {
  public internalValue? : CsKubernetesNodePoolDataDisks[] | cdktf.IResolvable

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
  public get(index: number): CsKubernetesNodePoolDataDisksOutputReference {
    return new CsKubernetesNodePoolDataDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsKubernetesNodePoolEfloNodeGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#cluster_id CsKubernetesNodePool#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#group_id CsKubernetesNodePool#group_id}
  */
  readonly groupId?: string;
}

export function csKubernetesNodePoolEfloNodeGroupToTerraform(struct?: CsKubernetesNodePoolEfloNodeGroupOutputReference | CsKubernetesNodePoolEfloNodeGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    group_id: cdktf.stringToTerraform(struct!.groupId),
  }
}


export function csKubernetesNodePoolEfloNodeGroupToHclTerraform(struct?: CsKubernetesNodePoolEfloNodeGroupOutputReference | CsKubernetesNodePoolEfloNodeGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsKubernetesNodePoolEfloNodeGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsKubernetesNodePoolEfloNodeGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsKubernetesNodePoolEfloNodeGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterId = undefined;
      this._groupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterId = value.clusterId;
      this._groupId = value.groupId;
    }
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

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }
}
export interface CsKubernetesNodePoolKubeletConfigurationReservedMemory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#limits CsKubernetesNodePool#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#numa_node CsKubernetesNodePool#numa_node}
  */
  readonly numaNode?: number;
}

export function csKubernetesNodePoolKubeletConfigurationReservedMemoryToTerraform(struct?: CsKubernetesNodePoolKubeletConfigurationReservedMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    numa_node: cdktf.numberToTerraform(struct!.numaNode),
  }
}


export function csKubernetesNodePoolKubeletConfigurationReservedMemoryToHclTerraform(struct?: CsKubernetesNodePoolKubeletConfigurationReservedMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    numa_node: {
      value: cdktf.numberToHclTerraform(struct!.numaNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsKubernetesNodePoolKubeletConfigurationReservedMemoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsKubernetesNodePoolKubeletConfigurationReservedMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._numaNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.numaNode = this._numaNode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsKubernetesNodePoolKubeletConfigurationReservedMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._numaNode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._numaNode = value.numaNode;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // numa_node - computed: false, optional: true, required: false
  private _numaNode?: number; 
  public get numaNode() {
    return this.getNumberAttribute('numa_node');
  }
  public set numaNode(value: number) {
    this._numaNode = value;
  }
  public resetNumaNode() {
    this._numaNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numaNodeInput() {
    return this._numaNode;
  }
}

export class CsKubernetesNodePoolKubeletConfigurationReservedMemoryList extends cdktf.ComplexList {
  public internalValue? : CsKubernetesNodePoolKubeletConfigurationReservedMemory[] | cdktf.IResolvable

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
  public get(index: number): CsKubernetesNodePoolKubeletConfigurationReservedMemoryOutputReference {
    return new CsKubernetesNodePoolKubeletConfigurationReservedMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsKubernetesNodePoolKubeletConfigurationTracing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#endpoint CsKubernetesNodePool#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#sampling_rate_per_million CsKubernetesNodePool#sampling_rate_per_million}
  */
  readonly samplingRatePerMillion?: string;
}

export function csKubernetesNodePoolKubeletConfigurationTracingToTerraform(struct?: CsKubernetesNodePoolKubeletConfigurationTracingOutputReference | CsKubernetesNodePoolKubeletConfigurationTracing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    sampling_rate_per_million: cdktf.stringToTerraform(struct!.samplingRatePerMillion),
  }
}


export function csKubernetesNodePoolKubeletConfigurationTracingToHclTerraform(struct?: CsKubernetesNodePoolKubeletConfigurationTracingOutputReference | CsKubernetesNodePoolKubeletConfigurationTracing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_rate_per_million: {
      value: cdktf.stringToHclTerraform(struct!.samplingRatePerMillion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsKubernetesNodePoolKubeletConfigurationTracingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsKubernetesNodePoolKubeletConfigurationTracing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._samplingRatePerMillion !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingRatePerMillion = this._samplingRatePerMillion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsKubernetesNodePoolKubeletConfigurationTracing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._samplingRatePerMillion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
      this._samplingRatePerMillion = value.samplingRatePerMillion;
    }
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // sampling_rate_per_million - computed: false, optional: true, required: false
  private _samplingRatePerMillion?: string; 
  public get samplingRatePerMillion() {
    return this.getStringAttribute('sampling_rate_per_million');
  }
  public set samplingRatePerMillion(value: string) {
    this._samplingRatePerMillion = value;
  }
  public resetSamplingRatePerMillion() {
    this._samplingRatePerMillion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingRatePerMillionInput() {
    return this._samplingRatePerMillion;
  }
}
export interface CsKubernetesNodePoolKubeletConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#allowed_unsafe_sysctls CsKubernetesNodePool#allowed_unsafe_sysctls}
  */
  readonly allowedUnsafeSysctls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#cluster_dns CsKubernetesNodePool#cluster_dns}
  */
  readonly clusterDns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#container_log_max_files CsKubernetesNodePool#container_log_max_files}
  */
  readonly containerLogMaxFiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#container_log_max_size CsKubernetesNodePool#container_log_max_size}
  */
  readonly containerLogMaxSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#container_log_max_workers CsKubernetesNodePool#container_log_max_workers}
  */
  readonly containerLogMaxWorkers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#container_log_monitor_interval CsKubernetesNodePool#container_log_monitor_interval}
  */
  readonly containerLogMonitorInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#cpu_cfs_quota CsKubernetesNodePool#cpu_cfs_quota}
  */
  readonly cpuCfsQuota?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#cpu_cfs_quota_period CsKubernetesNodePool#cpu_cfs_quota_period}
  */
  readonly cpuCfsQuotaPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#cpu_manager_policy CsKubernetesNodePool#cpu_manager_policy}
  */
  readonly cpuManagerPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#event_burst CsKubernetesNodePool#event_burst}
  */
  readonly eventBurst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#event_record_qps CsKubernetesNodePool#event_record_qps}
  */
  readonly eventRecordQps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#eviction_hard CsKubernetesNodePool#eviction_hard}
  */
  readonly evictionHard?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#eviction_soft CsKubernetesNodePool#eviction_soft}
  */
  readonly evictionSoft?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#eviction_soft_grace_period CsKubernetesNodePool#eviction_soft_grace_period}
  */
  readonly evictionSoftGracePeriod?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#feature_gates CsKubernetesNodePool#feature_gates}
  */
  readonly featureGates?: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#image_gc_high_threshold_percent CsKubernetesNodePool#image_gc_high_threshold_percent}
  */
  readonly imageGcHighThresholdPercent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#image_gc_low_threshold_percent CsKubernetesNodePool#image_gc_low_threshold_percent}
  */
  readonly imageGcLowThresholdPercent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#kube_api_burst CsKubernetesNodePool#kube_api_burst}
  */
  readonly kubeApiBurst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#kube_api_qps CsKubernetesNodePool#kube_api_qps}
  */
  readonly kubeApiQps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#kube_reserved CsKubernetesNodePool#kube_reserved}
  */
  readonly kubeReserved?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#max_pods CsKubernetesNodePool#max_pods}
  */
  readonly maxPods?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#memory_manager_policy CsKubernetesNodePool#memory_manager_policy}
  */
  readonly memoryManagerPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#pod_pids_limit CsKubernetesNodePool#pod_pids_limit}
  */
  readonly podPidsLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#read_only_port CsKubernetesNodePool#read_only_port}
  */
  readonly readOnlyPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#registry_burst CsKubernetesNodePool#registry_burst}
  */
  readonly registryBurst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#registry_pull_qps CsKubernetesNodePool#registry_pull_qps}
  */
  readonly registryPullQps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#serialize_image_pulls CsKubernetesNodePool#serialize_image_pulls}
  */
  readonly serializeImagePulls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#system_reserved CsKubernetesNodePool#system_reserved}
  */
  readonly systemReserved?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#topology_manager_policy CsKubernetesNodePool#topology_manager_policy}
  */
  readonly topologyManagerPolicy?: string;
  /**
  * reserved_memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#reserved_memory CsKubernetesNodePool#reserved_memory}
  */
  readonly reservedMemory?: CsKubernetesNodePoolKubeletConfigurationReservedMemory[] | cdktf.IResolvable;
  /**
  * tracing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#tracing CsKubernetesNodePool#tracing}
  */
  readonly tracing?: CsKubernetesNodePoolKubeletConfigurationTracing;
}

export function csKubernetesNodePoolKubeletConfigurationToTerraform(struct?: CsKubernetesNodePoolKubeletConfigurationOutputReference | CsKubernetesNodePoolKubeletConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_unsafe_sysctls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedUnsafeSysctls),
    cluster_dns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterDns),
    container_log_max_files: cdktf.stringToTerraform(struct!.containerLogMaxFiles),
    container_log_max_size: cdktf.stringToTerraform(struct!.containerLogMaxSize),
    container_log_max_workers: cdktf.stringToTerraform(struct!.containerLogMaxWorkers),
    container_log_monitor_interval: cdktf.stringToTerraform(struct!.containerLogMonitorInterval),
    cpu_cfs_quota: cdktf.stringToTerraform(struct!.cpuCfsQuota),
    cpu_cfs_quota_period: cdktf.stringToTerraform(struct!.cpuCfsQuotaPeriod),
    cpu_manager_policy: cdktf.stringToTerraform(struct!.cpuManagerPolicy),
    event_burst: cdktf.stringToTerraform(struct!.eventBurst),
    event_record_qps: cdktf.stringToTerraform(struct!.eventRecordQps),
    eviction_hard: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.evictionHard),
    eviction_soft: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.evictionSoft),
    eviction_soft_grace_period: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.evictionSoftGracePeriod),
    feature_gates: cdktf.hashMapper(cdktf.booleanToTerraform)(struct!.featureGates),
    image_gc_high_threshold_percent: cdktf.stringToTerraform(struct!.imageGcHighThresholdPercent),
    image_gc_low_threshold_percent: cdktf.stringToTerraform(struct!.imageGcLowThresholdPercent),
    kube_api_burst: cdktf.stringToTerraform(struct!.kubeApiBurst),
    kube_api_qps: cdktf.stringToTerraform(struct!.kubeApiQps),
    kube_reserved: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.kubeReserved),
    max_pods: cdktf.stringToTerraform(struct!.maxPods),
    memory_manager_policy: cdktf.stringToTerraform(struct!.memoryManagerPolicy),
    pod_pids_limit: cdktf.stringToTerraform(struct!.podPidsLimit),
    read_only_port: cdktf.stringToTerraform(struct!.readOnlyPort),
    registry_burst: cdktf.stringToTerraform(struct!.registryBurst),
    registry_pull_qps: cdktf.stringToTerraform(struct!.registryPullQps),
    serialize_image_pulls: cdktf.stringToTerraform(struct!.serializeImagePulls),
    system_reserved: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.systemReserved),
    topology_manager_policy: cdktf.stringToTerraform(struct!.topologyManagerPolicy),
    reserved_memory: cdktf.listMapper(csKubernetesNodePoolKubeletConfigurationReservedMemoryToTerraform, true)(struct!.reservedMemory),
    tracing: csKubernetesNodePoolKubeletConfigurationTracingToTerraform(struct!.tracing),
  }
}


export function csKubernetesNodePoolKubeletConfigurationToHclTerraform(struct?: CsKubernetesNodePoolKubeletConfigurationOutputReference | CsKubernetesNodePoolKubeletConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_unsafe_sysctls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedUnsafeSysctls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cluster_dns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterDns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container_log_max_files: {
      value: cdktf.stringToHclTerraform(struct!.containerLogMaxFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_log_max_size: {
      value: cdktf.stringToHclTerraform(struct!.containerLogMaxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_log_max_workers: {
      value: cdktf.stringToHclTerraform(struct!.containerLogMaxWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_log_monitor_interval: {
      value: cdktf.stringToHclTerraform(struct!.containerLogMonitorInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_cfs_quota: {
      value: cdktf.stringToHclTerraform(struct!.cpuCfsQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_cfs_quota_period: {
      value: cdktf.stringToHclTerraform(struct!.cpuCfsQuotaPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_manager_policy: {
      value: cdktf.stringToHclTerraform(struct!.cpuManagerPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_burst: {
      value: cdktf.stringToHclTerraform(struct!.eventBurst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_record_qps: {
      value: cdktf.stringToHclTerraform(struct!.eventRecordQps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eviction_hard: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.evictionHard),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    eviction_soft: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.evictionSoft),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    eviction_soft_grace_period: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.evictionSoftGracePeriod),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    feature_gates: {
      value: cdktf.hashMapperHcl(cdktf.booleanToHclTerraform)(struct!.featureGates),
      isBlock: false,
      type: "map",
      storageClassType: "booleanMap",
    },
    image_gc_high_threshold_percent: {
      value: cdktf.stringToHclTerraform(struct!.imageGcHighThresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_gc_low_threshold_percent: {
      value: cdktf.stringToHclTerraform(struct!.imageGcLowThresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_api_burst: {
      value: cdktf.stringToHclTerraform(struct!.kubeApiBurst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_api_qps: {
      value: cdktf.stringToHclTerraform(struct!.kubeApiQps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_reserved: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.kubeReserved),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    max_pods: {
      value: cdktf.stringToHclTerraform(struct!.maxPods),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_manager_policy: {
      value: cdktf.stringToHclTerraform(struct!.memoryManagerPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_pids_limit: {
      value: cdktf.stringToHclTerraform(struct!.podPidsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only_port: {
      value: cdktf.stringToHclTerraform(struct!.readOnlyPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_burst: {
      value: cdktf.stringToHclTerraform(struct!.registryBurst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_pull_qps: {
      value: cdktf.stringToHclTerraform(struct!.registryPullQps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serialize_image_pulls: {
      value: cdktf.stringToHclTerraform(struct!.serializeImagePulls),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_reserved: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.systemReserved),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    topology_manager_policy: {
      value: cdktf.stringToHclTerraform(struct!.topologyManagerPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reserved_memory: {
      value: cdktf.listMapperHcl(csKubernetesNodePoolKubeletConfigurationReservedMemoryToHclTerraform, true)(struct!.reservedMemory),
      isBlock: true,
      type: "list",
      storageClassType: "CsKubernetesNodePoolKubeletConfigurationReservedMemoryList",
    },
    tracing: {
      value: csKubernetesNodePoolKubeletConfigurationTracingToHclTerraform(struct!.tracing),
      isBlock: true,
      type: "list",
      storageClassType: "CsKubernetesNodePoolKubeletConfigurationTracingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsKubernetesNodePoolKubeletConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsKubernetesNodePoolKubeletConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedUnsafeSysctls !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedUnsafeSysctls = this._allowedUnsafeSysctls;
    }
    if (this._clusterDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDns = this._clusterDns;
    }
    if (this._containerLogMaxFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogMaxFiles = this._containerLogMaxFiles;
    }
    if (this._containerLogMaxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogMaxSize = this._containerLogMaxSize;
    }
    if (this._containerLogMaxWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogMaxWorkers = this._containerLogMaxWorkers;
    }
    if (this._containerLogMonitorInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogMonitorInterval = this._containerLogMonitorInterval;
    }
    if (this._cpuCfsQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuota = this._cpuCfsQuota;
    }
    if (this._cpuCfsQuotaPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuotaPeriod = this._cpuCfsQuotaPeriod;
    }
    if (this._cpuManagerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuManagerPolicy = this._cpuManagerPolicy;
    }
    if (this._eventBurst !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventBurst = this._eventBurst;
    }
    if (this._eventRecordQps !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventRecordQps = this._eventRecordQps;
    }
    if (this._evictionHard !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionHard = this._evictionHard;
    }
    if (this._evictionSoft !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionSoft = this._evictionSoft;
    }
    if (this._evictionSoftGracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionSoftGracePeriod = this._evictionSoftGracePeriod;
    }
    if (this._featureGates !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureGates = this._featureGates;
    }
    if (this._imageGcHighThresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGcHighThresholdPercent = this._imageGcHighThresholdPercent;
    }
    if (this._imageGcLowThresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGcLowThresholdPercent = this._imageGcLowThresholdPercent;
    }
    if (this._kubeApiBurst !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeApiBurst = this._kubeApiBurst;
    }
    if (this._kubeApiQps !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeApiQps = this._kubeApiQps;
    }
    if (this._kubeReserved !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeReserved = this._kubeReserved;
    }
    if (this._maxPods !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPods = this._maxPods;
    }
    if (this._memoryManagerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryManagerPolicy = this._memoryManagerPolicy;
    }
    if (this._podPidsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.podPidsLimit = this._podPidsLimit;
    }
    if (this._readOnlyPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyPort = this._readOnlyPort;
    }
    if (this._registryBurst !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryBurst = this._registryBurst;
    }
    if (this._registryPullQps !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryPullQps = this._registryPullQps;
    }
    if (this._serializeImagePulls !== undefined) {
      hasAnyValues = true;
      internalValueResult.serializeImagePulls = this._serializeImagePulls;
    }
    if (this._systemReserved !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemReserved = this._systemReserved;
    }
    if (this._topologyManagerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyManagerPolicy = this._topologyManagerPolicy;
    }
    if (this._reservedMemory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedMemory = this._reservedMemory?.internalValue;
    }
    if (this._tracing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracing = this._tracing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsKubernetesNodePoolKubeletConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedUnsafeSysctls = undefined;
      this._clusterDns = undefined;
      this._containerLogMaxFiles = undefined;
      this._containerLogMaxSize = undefined;
      this._containerLogMaxWorkers = undefined;
      this._containerLogMonitorInterval = undefined;
      this._cpuCfsQuota = undefined;
      this._cpuCfsQuotaPeriod = undefined;
      this._cpuManagerPolicy = undefined;
      this._eventBurst = undefined;
      this._eventRecordQps = undefined;
      this._evictionHard = undefined;
      this._evictionSoft = undefined;
      this._evictionSoftGracePeriod = undefined;
      this._featureGates = undefined;
      this._imageGcHighThresholdPercent = undefined;
      this._imageGcLowThresholdPercent = undefined;
      this._kubeApiBurst = undefined;
      this._kubeApiQps = undefined;
      this._kubeReserved = undefined;
      this._maxPods = undefined;
      this._memoryManagerPolicy = undefined;
      this._podPidsLimit = undefined;
      this._readOnlyPort = undefined;
      this._registryBurst = undefined;
      this._registryPullQps = undefined;
      this._serializeImagePulls = undefined;
      this._systemReserved = undefined;
      this._topologyManagerPolicy = undefined;
      this._reservedMemory.internalValue = undefined;
      this._tracing.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedUnsafeSysctls = value.allowedUnsafeSysctls;
      this._clusterDns = value.clusterDns;
      this._containerLogMaxFiles = value.containerLogMaxFiles;
      this._containerLogMaxSize = value.containerLogMaxSize;
      this._containerLogMaxWorkers = value.containerLogMaxWorkers;
      this._containerLogMonitorInterval = value.containerLogMonitorInterval;
      this._cpuCfsQuota = value.cpuCfsQuota;
      this._cpuCfsQuotaPeriod = value.cpuCfsQuotaPeriod;
      this._cpuManagerPolicy = value.cpuManagerPolicy;
      this._eventBurst = value.eventBurst;
      this._eventRecordQps = value.eventRecordQps;
      this._evictionHard = value.evictionHard;
      this._evictionSoft = value.evictionSoft;
      this._evictionSoftGracePeriod = value.evictionSoftGracePeriod;
      this._featureGates = value.featureGates;
      this._imageGcHighThresholdPercent = value.imageGcHighThresholdPercent;
      this._imageGcLowThresholdPercent = value.imageGcLowThresholdPercent;
      this._kubeApiBurst = value.kubeApiBurst;
      this._kubeApiQps = value.kubeApiQps;
      this._kubeReserved = value.kubeReserved;
      this._maxPods = value.maxPods;
      this._memoryManagerPolicy = value.memoryManagerPolicy;
      this._podPidsLimit = value.podPidsLimit;
      this._readOnlyPort = value.readOnlyPort;
      this._registryBurst = value.registryBurst;
      this._registryPullQps = value.registryPullQps;
      this._serializeImagePulls = value.serializeImagePulls;
      this._systemReserved = value.systemReserved;
      this._topologyManagerPolicy = value.topologyManagerPolicy;
      this._reservedMemory.internalValue = value.reservedMemory;
      this._tracing.internalValue = value.tracing;
    }
  }

  // allowed_unsafe_sysctls - computed: false, optional: true, required: false
  private _allowedUnsafeSysctls?: string[]; 
  public get allowedUnsafeSysctls() {
    return this.getListAttribute('allowed_unsafe_sysctls');
  }
  public set allowedUnsafeSysctls(value: string[]) {
    this._allowedUnsafeSysctls = value;
  }
  public resetAllowedUnsafeSysctls() {
    this._allowedUnsafeSysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUnsafeSysctlsInput() {
    return this._allowedUnsafeSysctls;
  }

  // cluster_dns - computed: false, optional: true, required: false
  private _clusterDns?: string[]; 
  public get clusterDns() {
    return this.getListAttribute('cluster_dns');
  }
  public set clusterDns(value: string[]) {
    this._clusterDns = value;
  }
  public resetClusterDns() {
    this._clusterDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDnsInput() {
    return this._clusterDns;
  }

  // container_log_max_files - computed: false, optional: true, required: false
  private _containerLogMaxFiles?: string; 
  public get containerLogMaxFiles() {
    return this.getStringAttribute('container_log_max_files');
  }
  public set containerLogMaxFiles(value: string) {
    this._containerLogMaxFiles = value;
  }
  public resetContainerLogMaxFiles() {
    this._containerLogMaxFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogMaxFilesInput() {
    return this._containerLogMaxFiles;
  }

  // container_log_max_size - computed: false, optional: true, required: false
  private _containerLogMaxSize?: string; 
  public get containerLogMaxSize() {
    return this.getStringAttribute('container_log_max_size');
  }
  public set containerLogMaxSize(value: string) {
    this._containerLogMaxSize = value;
  }
  public resetContainerLogMaxSize() {
    this._containerLogMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogMaxSizeInput() {
    return this._containerLogMaxSize;
  }

  // container_log_max_workers - computed: false, optional: true, required: false
  private _containerLogMaxWorkers?: string; 
  public get containerLogMaxWorkers() {
    return this.getStringAttribute('container_log_max_workers');
  }
  public set containerLogMaxWorkers(value: string) {
    this._containerLogMaxWorkers = value;
  }
  public resetContainerLogMaxWorkers() {
    this._containerLogMaxWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogMaxWorkersInput() {
    return this._containerLogMaxWorkers;
  }

  // container_log_monitor_interval - computed: false, optional: true, required: false
  private _containerLogMonitorInterval?: string; 
  public get containerLogMonitorInterval() {
    return this.getStringAttribute('container_log_monitor_interval');
  }
  public set containerLogMonitorInterval(value: string) {
    this._containerLogMonitorInterval = value;
  }
  public resetContainerLogMonitorInterval() {
    this._containerLogMonitorInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogMonitorIntervalInput() {
    return this._containerLogMonitorInterval;
  }

  // cpu_cfs_quota - computed: false, optional: true, required: false
  private _cpuCfsQuota?: string; 
  public get cpuCfsQuota() {
    return this.getStringAttribute('cpu_cfs_quota');
  }
  public set cpuCfsQuota(value: string) {
    this._cpuCfsQuota = value;
  }
  public resetCpuCfsQuota() {
    this._cpuCfsQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaInput() {
    return this._cpuCfsQuota;
  }

  // cpu_cfs_quota_period - computed: false, optional: true, required: false
  private _cpuCfsQuotaPeriod?: string; 
  public get cpuCfsQuotaPeriod() {
    return this.getStringAttribute('cpu_cfs_quota_period');
  }
  public set cpuCfsQuotaPeriod(value: string) {
    this._cpuCfsQuotaPeriod = value;
  }
  public resetCpuCfsQuotaPeriod() {
    this._cpuCfsQuotaPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaPeriodInput() {
    return this._cpuCfsQuotaPeriod;
  }

  // cpu_manager_policy - computed: false, optional: true, required: false
  private _cpuManagerPolicy?: string; 
  public get cpuManagerPolicy() {
    return this.getStringAttribute('cpu_manager_policy');
  }
  public set cpuManagerPolicy(value: string) {
    this._cpuManagerPolicy = value;
  }
  public resetCpuManagerPolicy() {
    this._cpuManagerPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuManagerPolicyInput() {
    return this._cpuManagerPolicy;
  }

  // event_burst - computed: false, optional: true, required: false
  private _eventBurst?: string; 
  public get eventBurst() {
    return this.getStringAttribute('event_burst');
  }
  public set eventBurst(value: string) {
    this._eventBurst = value;
  }
  public resetEventBurst() {
    this._eventBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBurstInput() {
    return this._eventBurst;
  }

  // event_record_qps - computed: false, optional: true, required: false
  private _eventRecordQps?: string; 
  public get eventRecordQps() {
    return this.getStringAttribute('event_record_qps');
  }
  public set eventRecordQps(value: string) {
    this._eventRecordQps = value;
  }
  public resetEventRecordQps() {
    this._eventRecordQps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventRecordQpsInput() {
    return this._eventRecordQps;
  }

  // eviction_hard - computed: false, optional: true, required: false
  private _evictionHard?: { [key: string]: string }; 
  public get evictionHard() {
    return this.getStringMapAttribute('eviction_hard');
  }
  public set evictionHard(value: { [key: string]: string }) {
    this._evictionHard = value;
  }
  public resetEvictionHard() {
    this._evictionHard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionHardInput() {
    return this._evictionHard;
  }

  // eviction_soft - computed: false, optional: true, required: false
  private _evictionSoft?: { [key: string]: string }; 
  public get evictionSoft() {
    return this.getStringMapAttribute('eviction_soft');
  }
  public set evictionSoft(value: { [key: string]: string }) {
    this._evictionSoft = value;
  }
  public resetEvictionSoft() {
    this._evictionSoft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionSoftInput() {
    return this._evictionSoft;
  }

  // eviction_soft_grace_period - computed: false, optional: true, required: false
  private _evictionSoftGracePeriod?: { [key: string]: string }; 
  public get evictionSoftGracePeriod() {
    return this.getStringMapAttribute('eviction_soft_grace_period');
  }
  public set evictionSoftGracePeriod(value: { [key: string]: string }) {
    this._evictionSoftGracePeriod = value;
  }
  public resetEvictionSoftGracePeriod() {
    this._evictionSoftGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionSoftGracePeriodInput() {
    return this._evictionSoftGracePeriod;
  }

  // feature_gates - computed: false, optional: true, required: false
  private _featureGates?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get featureGates() {
    return this.getBooleanMapAttribute('feature_gates');
  }
  public set featureGates(value: { [key: string]: (boolean | cdktf.IResolvable) }) {
    this._featureGates = value;
  }
  public resetFeatureGates() {
    this._featureGates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureGatesInput() {
    return this._featureGates;
  }

  // image_gc_high_threshold_percent - computed: false, optional: true, required: false
  private _imageGcHighThresholdPercent?: string; 
  public get imageGcHighThresholdPercent() {
    return this.getStringAttribute('image_gc_high_threshold_percent');
  }
  public set imageGcHighThresholdPercent(value: string) {
    this._imageGcHighThresholdPercent = value;
  }
  public resetImageGcHighThresholdPercent() {
    this._imageGcHighThresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcHighThresholdPercentInput() {
    return this._imageGcHighThresholdPercent;
  }

  // image_gc_low_threshold_percent - computed: false, optional: true, required: false
  private _imageGcLowThresholdPercent?: string; 
  public get imageGcLowThresholdPercent() {
    return this.getStringAttribute('image_gc_low_threshold_percent');
  }
  public set imageGcLowThresholdPercent(value: string) {
    this._imageGcLowThresholdPercent = value;
  }
  public resetImageGcLowThresholdPercent() {
    this._imageGcLowThresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcLowThresholdPercentInput() {
    return this._imageGcLowThresholdPercent;
  }

  // kube_api_burst - computed: false, optional: true, required: false
  private _kubeApiBurst?: string; 
  public get kubeApiBurst() {
    return this.getStringAttribute('kube_api_burst');
  }
  public set kubeApiBurst(value: string) {
    this._kubeApiBurst = value;
  }
  public resetKubeApiBurst() {
    this._kubeApiBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeApiBurstInput() {
    return this._kubeApiBurst;
  }

  // kube_api_qps - computed: false, optional: true, required: false
  private _kubeApiQps?: string; 
  public get kubeApiQps() {
    return this.getStringAttribute('kube_api_qps');
  }
  public set kubeApiQps(value: string) {
    this._kubeApiQps = value;
  }
  public resetKubeApiQps() {
    this._kubeApiQps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeApiQpsInput() {
    return this._kubeApiQps;
  }

  // kube_reserved - computed: false, optional: true, required: false
  private _kubeReserved?: { [key: string]: string }; 
  public get kubeReserved() {
    return this.getStringMapAttribute('kube_reserved');
  }
  public set kubeReserved(value: { [key: string]: string }) {
    this._kubeReserved = value;
  }
  public resetKubeReserved() {
    this._kubeReserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeReservedInput() {
    return this._kubeReserved;
  }

  // max_pods - computed: false, optional: true, required: false
  private _maxPods?: string; 
  public get maxPods() {
    return this.getStringAttribute('max_pods');
  }
  public set maxPods(value: string) {
    this._maxPods = value;
  }
  public resetMaxPods() {
    this._maxPods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsInput() {
    return this._maxPods;
  }

  // memory_manager_policy - computed: false, optional: true, required: false
  private _memoryManagerPolicy?: string; 
  public get memoryManagerPolicy() {
    return this.getStringAttribute('memory_manager_policy');
  }
  public set memoryManagerPolicy(value: string) {
    this._memoryManagerPolicy = value;
  }
  public resetMemoryManagerPolicy() {
    this._memoryManagerPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryManagerPolicyInput() {
    return this._memoryManagerPolicy;
  }

  // pod_pids_limit - computed: false, optional: true, required: false
  private _podPidsLimit?: string; 
  public get podPidsLimit() {
    return this.getStringAttribute('pod_pids_limit');
  }
  public set podPidsLimit(value: string) {
    this._podPidsLimit = value;
  }
  public resetPodPidsLimit() {
    this._podPidsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podPidsLimitInput() {
    return this._podPidsLimit;
  }

  // read_only_port - computed: false, optional: true, required: false
  private _readOnlyPort?: string; 
  public get readOnlyPort() {
    return this.getStringAttribute('read_only_port');
  }
  public set readOnlyPort(value: string) {
    this._readOnlyPort = value;
  }
  public resetReadOnlyPort() {
    this._readOnlyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyPortInput() {
    return this._readOnlyPort;
  }

  // registry_burst - computed: false, optional: true, required: false
  private _registryBurst?: string; 
  public get registryBurst() {
    return this.getStringAttribute('registry_burst');
  }
  public set registryBurst(value: string) {
    this._registryBurst = value;
  }
  public resetRegistryBurst() {
    this._registryBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryBurstInput() {
    return this._registryBurst;
  }

  // registry_pull_qps - computed: false, optional: true, required: false
  private _registryPullQps?: string; 
  public get registryPullQps() {
    return this.getStringAttribute('registry_pull_qps');
  }
  public set registryPullQps(value: string) {
    this._registryPullQps = value;
  }
  public resetRegistryPullQps() {
    this._registryPullQps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryPullQpsInput() {
    return this._registryPullQps;
  }

  // serialize_image_pulls - computed: false, optional: true, required: false
  private _serializeImagePulls?: string; 
  public get serializeImagePulls() {
    return this.getStringAttribute('serialize_image_pulls');
  }
  public set serializeImagePulls(value: string) {
    this._serializeImagePulls = value;
  }
  public resetSerializeImagePulls() {
    this._serializeImagePulls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serializeImagePullsInput() {
    return this._serializeImagePulls;
  }

  // system_reserved - computed: false, optional: true, required: false
  private _systemReserved?: { [key: string]: string }; 
  public get systemReserved() {
    return this.getStringMapAttribute('system_reserved');
  }
  public set systemReserved(value: { [key: string]: string }) {
    this._systemReserved = value;
  }
  public resetSystemReserved() {
    this._systemReserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemReservedInput() {
    return this._systemReserved;
  }

  // topology_manager_policy - computed: false, optional: true, required: false
  private _topologyManagerPolicy?: string; 
  public get topologyManagerPolicy() {
    return this.getStringAttribute('topology_manager_policy');
  }
  public set topologyManagerPolicy(value: string) {
    this._topologyManagerPolicy = value;
  }
  public resetTopologyManagerPolicy() {
    this._topologyManagerPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyManagerPolicyInput() {
    return this._topologyManagerPolicy;
  }

  // reserved_memory - computed: false, optional: true, required: false
  private _reservedMemory = new CsKubernetesNodePoolKubeletConfigurationReservedMemoryList(this, "reserved_memory", false);
  public get reservedMemory() {
    return this._reservedMemory;
  }
  public putReservedMemory(value: CsKubernetesNodePoolKubeletConfigurationReservedMemory[] | cdktf.IResolvable) {
    this._reservedMemory.internalValue = value;
  }
  public resetReservedMemory() {
    this._reservedMemory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedMemoryInput() {
    return this._reservedMemory.internalValue;
  }

  // tracing - computed: false, optional: true, required: false
  private _tracing = new CsKubernetesNodePoolKubeletConfigurationTracingOutputReference(this, "tracing");
  public get tracing() {
    return this._tracing;
  }
  public putTracing(value: CsKubernetesNodePoolKubeletConfigurationTracing) {
    this._tracing.internalValue = value;
  }
  public resetTracing() {
    this._tracing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingInput() {
    return this._tracing.internalValue;
  }
}
export interface CsKubernetesNodePoolLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#key CsKubernetesNodePool#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#value CsKubernetesNodePool#value}
  */
  readonly value?: string;
}

export function csKubernetesNodePoolLabelsToTerraform(struct?: CsKubernetesNodePoolLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function csKubernetesNodePoolLabelsToHclTerraform(struct?: CsKubernetesNodePoolLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class CsKubernetesNodePoolLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsKubernetesNodePoolLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: CsKubernetesNodePoolLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._key = value.key;
      this._value = value.value;
    }
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
}

export class CsKubernetesNodePoolLabelsList extends cdktf.ComplexList {
  public internalValue? : CsKubernetesNodePoolLabels[] | cdktf.IResolvable

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
  public get(index: number): CsKubernetesNodePoolLabelsOutputReference {
    return new CsKubernetesNodePoolLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsKubernetesNodePoolManagementAutoRepairPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#restart_node CsKubernetesNodePool#restart_node}
  */
  readonly restartNode?: boolean | cdktf.IResolvable;
}

export function csKubernetesNodePoolManagementAutoRepairPolicyToTerraform(struct?: CsKubernetesNodePoolManagementAutoRepairPolicyOutputReference | CsKubernetesNodePoolManagementAutoRepairPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restart_node: cdktf.booleanToTerraform(struct!.restartNode),
  }
}


export function csKubernetesNodePoolManagementAutoRepairPolicyToHclTerraform(struct?: CsKubernetesNodePoolManagementAutoRepairPolicyOutputReference | CsKubernetesNodePoolManagementAutoRepairPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restart_node: {
      value: cdktf.booleanToHclTerraform(struct!.restartNode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsKubernetesNodePoolManagementAutoRepairPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsKubernetesNodePoolManagementAutoRepairPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restartNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartNode = this._restartNode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsKubernetesNodePoolManagementAutoRepairPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._restartNode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._restartNode = value.restartNode;
    }
  }

  // restart_node - computed: true, optional: true, required: false
  private _restartNode?: boolean | cdktf.IResolvable; 
  public get restartNode() {
    return this.getBooleanAttribute('restart_node');
  }
  public set restartNode(value: boolean | cdktf.IResolvable) {
    this._restartNode = value;
  }
  public resetRestartNode() {
    this._restartNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartNodeInput() {
    return this._restartNode;
  }
}
export interface CsKubernetesNodePoolManagementAutoUpgradePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#auto_upgrade_kubelet CsKubernetesNodePool#auto_upgrade_kubelet}
  */
  readonly autoUpgradeKubelet?: boolean | cdktf.IResolvable;
}

export function csKubernetesNodePoolManagementAutoUpgradePolicyToTerraform(struct?: CsKubernetesNodePoolManagementAutoUpgradePolicyOutputReference | CsKubernetesNodePoolManagementAutoUpgradePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_upgrade_kubelet: cdktf.booleanToTerraform(struct!.autoUpgradeKubelet),
  }
}


export function csKubernetesNodePoolManagementAutoUpgradePolicyToHclTerraform(struct?: CsKubernetesNodePoolManagementAutoUpgradePolicyOutputReference | CsKubernetesNodePoolManagementAutoUpgradePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_upgrade_kubelet: {
      value: cdktf.booleanToHclTerraform(struct!.autoUpgradeKubelet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsKubernetesNodePoolManagementAutoUpgradePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsKubernetesNodePoolManagementAutoUpgradePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoUpgradeKubelet !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgradeKubelet = this._autoUpgradeKubelet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsKubernetesNodePoolManagementAutoUpgradePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoUpgradeKubelet = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoUpgradeKubelet = value.autoUpgradeKubelet;
    }
  }

  // auto_upgrade_kubelet - computed: true, optional: true, required: false
  private _autoUpgradeKubelet?: boolean | cdktf.IResolvable; 
  public get autoUpgradeKubelet() {
    return this.getBooleanAttribute('auto_upgrade_kubelet');
  }
  public set autoUpgradeKubelet(value: boolean | cdktf.IResolvable) {
    this._autoUpgradeKubelet = value;
  }
  public resetAutoUpgradeKubelet() {
    this._autoUpgradeKubelet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeKubeletInput() {
    return this._autoUpgradeKubelet;
  }
}
export interface CsKubernetesNodePoolManagementAutoVulFixPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#restart_node CsKubernetesNodePool#restart_node}
  */
  readonly restartNode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#vul_level CsKubernetesNodePool#vul_level}
  */
  readonly vulLevel?: string;
}

export function csKubernetesNodePoolManagementAutoVulFixPolicyToTerraform(struct?: CsKubernetesNodePoolManagementAutoVulFixPolicyOutputReference | CsKubernetesNodePoolManagementAutoVulFixPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restart_node: cdktf.booleanToTerraform(struct!.restartNode),
    vul_level: cdktf.stringToTerraform(struct!.vulLevel),
  }
}


export function csKubernetesNodePoolManagementAutoVulFixPolicyToHclTerraform(struct?: CsKubernetesNodePoolManagementAutoVulFixPolicyOutputReference | CsKubernetesNodePoolManagementAutoVulFixPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restart_node: {
      value: cdktf.booleanToHclTerraform(struct!.restartNode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vul_level: {
      value: cdktf.stringToHclTerraform(struct!.vulLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsKubernetesNodePoolManagementAutoVulFixPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsKubernetesNodePoolManagementAutoVulFixPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restartNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartNode = this._restartNode;
    }
    if (this._vulLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulLevel = this._vulLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsKubernetesNodePoolManagementAutoVulFixPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._restartNode = undefined;
      this._vulLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._restartNode = value.restartNode;
      this._vulLevel = value.vulLevel;
    }
  }

  // restart_node - computed: true, optional: true, required: false
  private _restartNode?: boolean | cdktf.IResolvable; 
  public get restartNode() {
    return this.getBooleanAttribute('restart_node');
  }
  public set restartNode(value: boolean | cdktf.IResolvable) {
    this._restartNode = value;
  }
  public resetRestartNode() {
    this._restartNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartNodeInput() {
    return this._restartNode;
  }

  // vul_level - computed: true, optional: true, required: false
  private _vulLevel?: string; 
  public get vulLevel() {
    return this.getStringAttribute('vul_level');
  }
  public set vulLevel(value: string) {
    this._vulLevel = value;
  }
  public resetVulLevel() {
    this._vulLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulLevelInput() {
    return this._vulLevel;
  }
}
export interface CsKubernetesNodePoolManagement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#auto_repair CsKubernetesNodePool#auto_repair}
  */
  readonly autoRepair?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#auto_upgrade CsKubernetesNodePool#auto_upgrade}
  */
  readonly autoUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#auto_vul_fix CsKubernetesNodePool#auto_vul_fix}
  */
  readonly autoVulFix?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#enable CsKubernetesNodePool#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#max_unavailable CsKubernetesNodePool#max_unavailable}
  */
  readonly maxUnavailable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#surge CsKubernetesNodePool#surge}
  */
  readonly surge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#surge_percentage CsKubernetesNodePool#surge_percentage}
  */
  readonly surgePercentage?: number;
  /**
  * auto_repair_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#auto_repair_policy CsKubernetesNodePool#auto_repair_policy}
  */
  readonly autoRepairPolicy?: CsKubernetesNodePoolManagementAutoRepairPolicy;
  /**
  * auto_upgrade_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#auto_upgrade_policy CsKubernetesNodePool#auto_upgrade_policy}
  */
  readonly autoUpgradePolicy?: CsKubernetesNodePoolManagementAutoUpgradePolicy;
  /**
  * auto_vul_fix_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#auto_vul_fix_policy CsKubernetesNodePool#auto_vul_fix_policy}
  */
  readonly autoVulFixPolicy?: CsKubernetesNodePoolManagementAutoVulFixPolicy;
}

export function csKubernetesNodePoolManagementToTerraform(struct?: CsKubernetesNodePoolManagementOutputReference | CsKubernetesNodePoolManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_repair: cdktf.booleanToTerraform(struct!.autoRepair),
    auto_upgrade: cdktf.booleanToTerraform(struct!.autoUpgrade),
    auto_vul_fix: cdktf.booleanToTerraform(struct!.autoVulFix),
    enable: cdktf.booleanToTerraform(struct!.enable),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
    surge: cdktf.numberToTerraform(struct!.surge),
    surge_percentage: cdktf.numberToTerraform(struct!.surgePercentage),
    auto_repair_policy: csKubernetesNodePoolManagementAutoRepairPolicyToTerraform(struct!.autoRepairPolicy),
    auto_upgrade_policy: csKubernetesNodePoolManagementAutoUpgradePolicyToTerraform(struct!.autoUpgradePolicy),
    auto_vul_fix_policy: csKubernetesNodePoolManagementAutoVulFixPolicyToTerraform(struct!.autoVulFixPolicy),
  }
}


export function csKubernetesNodePoolManagementToHclTerraform(struct?: CsKubernetesNodePoolManagementOutputReference | CsKubernetesNodePoolManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_repair: {
      value: cdktf.booleanToHclTerraform(struct!.autoRepair),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_upgrade: {
      value: cdktf.booleanToHclTerraform(struct!.autoUpgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_vul_fix: {
      value: cdktf.booleanToHclTerraform(struct!.autoVulFix),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    surge: {
      value: cdktf.numberToHclTerraform(struct!.surge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    surge_percentage: {
      value: cdktf.numberToHclTerraform(struct!.surgePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_repair_policy: {
      value: csKubernetesNodePoolManagementAutoRepairPolicyToHclTerraform(struct!.autoRepairPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "CsKubernetesNodePoolManagementAutoRepairPolicyList",
    },
    auto_upgrade_policy: {
      value: csKubernetesNodePoolManagementAutoUpgradePolicyToHclTerraform(struct!.autoUpgradePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "CsKubernetesNodePoolManagementAutoUpgradePolicyList",
    },
    auto_vul_fix_policy: {
      value: csKubernetesNodePoolManagementAutoVulFixPolicyToHclTerraform(struct!.autoVulFixPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "CsKubernetesNodePoolManagementAutoVulFixPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsKubernetesNodePoolManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsKubernetesNodePoolManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRepair !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRepair = this._autoRepair;
    }
    if (this._autoUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgrade = this._autoUpgrade;
    }
    if (this._autoVulFix !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoVulFix = this._autoVulFix;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    if (this._surge !== undefined) {
      hasAnyValues = true;
      internalValueResult.surge = this._surge;
    }
    if (this._surgePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.surgePercentage = this._surgePercentage;
    }
    if (this._autoRepairPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRepairPolicy = this._autoRepairPolicy?.internalValue;
    }
    if (this._autoUpgradePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgradePolicy = this._autoUpgradePolicy?.internalValue;
    }
    if (this._autoVulFixPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoVulFixPolicy = this._autoVulFixPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsKubernetesNodePoolManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoRepair = undefined;
      this._autoUpgrade = undefined;
      this._autoVulFix = undefined;
      this._enable = undefined;
      this._maxUnavailable = undefined;
      this._surge = undefined;
      this._surgePercentage = undefined;
      this._autoRepairPolicy.internalValue = undefined;
      this._autoUpgradePolicy.internalValue = undefined;
      this._autoVulFixPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoRepair = value.autoRepair;
      this._autoUpgrade = value.autoUpgrade;
      this._autoVulFix = value.autoVulFix;
      this._enable = value.enable;
      this._maxUnavailable = value.maxUnavailable;
      this._surge = value.surge;
      this._surgePercentage = value.surgePercentage;
      this._autoRepairPolicy.internalValue = value.autoRepairPolicy;
      this._autoUpgradePolicy.internalValue = value.autoUpgradePolicy;
      this._autoVulFixPolicy.internalValue = value.autoVulFixPolicy;
    }
  }

  // auto_repair - computed: true, optional: true, required: false
  private _autoRepair?: boolean | cdktf.IResolvable; 
  public get autoRepair() {
    return this.getBooleanAttribute('auto_repair');
  }
  public set autoRepair(value: boolean | cdktf.IResolvable) {
    this._autoRepair = value;
  }
  public resetAutoRepair() {
    this._autoRepair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRepairInput() {
    return this._autoRepair;
  }

  // auto_upgrade - computed: true, optional: true, required: false
  private _autoUpgrade?: boolean | cdktf.IResolvable; 
  public get autoUpgrade() {
    return this.getBooleanAttribute('auto_upgrade');
  }
  public set autoUpgrade(value: boolean | cdktf.IResolvable) {
    this._autoUpgrade = value;
  }
  public resetAutoUpgrade() {
    this._autoUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeInput() {
    return this._autoUpgrade;
  }

  // auto_vul_fix - computed: true, optional: true, required: false
  private _autoVulFix?: boolean | cdktf.IResolvable; 
  public get autoVulFix() {
    return this.getBooleanAttribute('auto_vul_fix');
  }
  public set autoVulFix(value: boolean | cdktf.IResolvable) {
    this._autoVulFix = value;
  }
  public resetAutoVulFix() {
    this._autoVulFix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoVulFixInput() {
    return this._autoVulFix;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }

  // surge - computed: false, optional: true, required: false
  private _surge?: number; 
  public get surge() {
    return this.getNumberAttribute('surge');
  }
  public set surge(value: number) {
    this._surge = value;
  }
  public resetSurge() {
    this._surge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surgeInput() {
    return this._surge;
  }

  // surge_percentage - computed: false, optional: true, required: false
  private _surgePercentage?: number; 
  public get surgePercentage() {
    return this.getNumberAttribute('surge_percentage');
  }
  public set surgePercentage(value: number) {
    this._surgePercentage = value;
  }
  public resetSurgePercentage() {
    this._surgePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surgePercentageInput() {
    return this._surgePercentage;
  }

  // auto_repair_policy - computed: false, optional: true, required: false
  private _autoRepairPolicy = new CsKubernetesNodePoolManagementAutoRepairPolicyOutputReference(this, "auto_repair_policy");
  public get autoRepairPolicy() {
    return this._autoRepairPolicy;
  }
  public putAutoRepairPolicy(value: CsKubernetesNodePoolManagementAutoRepairPolicy) {
    this._autoRepairPolicy.internalValue = value;
  }
  public resetAutoRepairPolicy() {
    this._autoRepairPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRepairPolicyInput() {
    return this._autoRepairPolicy.internalValue;
  }

  // auto_upgrade_policy - computed: false, optional: true, required: false
  private _autoUpgradePolicy = new CsKubernetesNodePoolManagementAutoUpgradePolicyOutputReference(this, "auto_upgrade_policy");
  public get autoUpgradePolicy() {
    return this._autoUpgradePolicy;
  }
  public putAutoUpgradePolicy(value: CsKubernetesNodePoolManagementAutoUpgradePolicy) {
    this._autoUpgradePolicy.internalValue = value;
  }
  public resetAutoUpgradePolicy() {
    this._autoUpgradePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradePolicyInput() {
    return this._autoUpgradePolicy.internalValue;
  }

  // auto_vul_fix_policy - computed: false, optional: true, required: false
  private _autoVulFixPolicy = new CsKubernetesNodePoolManagementAutoVulFixPolicyOutputReference(this, "auto_vul_fix_policy");
  public get autoVulFixPolicy() {
    return this._autoVulFixPolicy;
  }
  public putAutoVulFixPolicy(value: CsKubernetesNodePoolManagementAutoVulFixPolicy) {
    this._autoVulFixPolicy.internalValue = value;
  }
  public resetAutoVulFixPolicy() {
    this._autoVulFixPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoVulFixPolicyInput() {
    return this._autoVulFixPolicy.internalValue;
  }
}
export interface CsKubernetesNodePoolPrivatePoolOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#private_pool_options_id CsKubernetesNodePool#private_pool_options_id}
  */
  readonly privatePoolOptionsId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#private_pool_options_match_criteria CsKubernetesNodePool#private_pool_options_match_criteria}
  */
  readonly privatePoolOptionsMatchCriteria?: string;
}

export function csKubernetesNodePoolPrivatePoolOptionsToTerraform(struct?: CsKubernetesNodePoolPrivatePoolOptionsOutputReference | CsKubernetesNodePoolPrivatePoolOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_pool_options_id: cdktf.stringToTerraform(struct!.privatePoolOptionsId),
    private_pool_options_match_criteria: cdktf.stringToTerraform(struct!.privatePoolOptionsMatchCriteria),
  }
}


export function csKubernetesNodePoolPrivatePoolOptionsToHclTerraform(struct?: CsKubernetesNodePoolPrivatePoolOptionsOutputReference | CsKubernetesNodePoolPrivatePoolOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_pool_options_id: {
      value: cdktf.stringToHclTerraform(struct!.privatePoolOptionsId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_pool_options_match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.privatePoolOptionsMatchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsKubernetesNodePoolPrivatePoolOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsKubernetesNodePoolPrivatePoolOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privatePoolOptionsId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privatePoolOptionsId = this._privatePoolOptionsId;
    }
    if (this._privatePoolOptionsMatchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.privatePoolOptionsMatchCriteria = this._privatePoolOptionsMatchCriteria;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsKubernetesNodePoolPrivatePoolOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privatePoolOptionsId = undefined;
      this._privatePoolOptionsMatchCriteria = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privatePoolOptionsId = value.privatePoolOptionsId;
      this._privatePoolOptionsMatchCriteria = value.privatePoolOptionsMatchCriteria;
    }
  }

  // private_pool_options_id - computed: false, optional: true, required: false
  private _privatePoolOptionsId?: string; 
  public get privatePoolOptionsId() {
    return this.getStringAttribute('private_pool_options_id');
  }
  public set privatePoolOptionsId(value: string) {
    this._privatePoolOptionsId = value;
  }
  public resetPrivatePoolOptionsId() {
    this._privatePoolOptionsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privatePoolOptionsIdInput() {
    return this._privatePoolOptionsId;
  }

  // private_pool_options_match_criteria - computed: false, optional: true, required: false
  private _privatePoolOptionsMatchCriteria?: string; 
  public get privatePoolOptionsMatchCriteria() {
    return this.getStringAttribute('private_pool_options_match_criteria');
  }
  public set privatePoolOptionsMatchCriteria(value: string) {
    this._privatePoolOptionsMatchCriteria = value;
  }
  public resetPrivatePoolOptionsMatchCriteria() {
    this._privatePoolOptionsMatchCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privatePoolOptionsMatchCriteriaInput() {
    return this._privatePoolOptionsMatchCriteria;
  }
}
export interface CsKubernetesNodePoolRollingPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#max_parallelism CsKubernetesNodePool#max_parallelism}
  */
  readonly maxParallelism?: number;
}

export function csKubernetesNodePoolRollingPolicyToTerraform(struct?: CsKubernetesNodePoolRollingPolicyOutputReference | CsKubernetesNodePoolRollingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_parallelism: cdktf.numberToTerraform(struct!.maxParallelism),
  }
}


export function csKubernetesNodePoolRollingPolicyToHclTerraform(struct?: CsKubernetesNodePoolRollingPolicyOutputReference | CsKubernetesNodePoolRollingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_parallelism: {
      value: cdktf.numberToHclTerraform(struct!.maxParallelism),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsKubernetesNodePoolRollingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsKubernetesNodePoolRollingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxParallelism !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParallelism = this._maxParallelism;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsKubernetesNodePoolRollingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxParallelism = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxParallelism = value.maxParallelism;
    }
  }

  // max_parallelism - computed: false, optional: true, required: false
  private _maxParallelism?: number; 
  public get maxParallelism() {
    return this.getNumberAttribute('max_parallelism');
  }
  public set maxParallelism(value: number) {
    this._maxParallelism = value;
  }
  public resetMaxParallelism() {
    this._maxParallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParallelismInput() {
    return this._maxParallelism;
  }
}
export interface CsKubernetesNodePoolRolloutPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#max_unavailable CsKubernetesNodePool#max_unavailable}
  */
  readonly maxUnavailable?: number;
}

export function csKubernetesNodePoolRolloutPolicyToTerraform(struct?: CsKubernetesNodePoolRolloutPolicyOutputReference | CsKubernetesNodePoolRolloutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
  }
}


export function csKubernetesNodePoolRolloutPolicyToHclTerraform(struct?: CsKubernetesNodePoolRolloutPolicyOutputReference | CsKubernetesNodePoolRolloutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsKubernetesNodePoolRolloutPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsKubernetesNodePoolRolloutPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsKubernetesNodePoolRolloutPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxUnavailable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxUnavailable = value.maxUnavailable;
    }
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }
}
export interface CsKubernetesNodePoolScalingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#eip_bandwidth CsKubernetesNodePool#eip_bandwidth}
  */
  readonly eipBandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#eip_internet_charge_type CsKubernetesNodePool#eip_internet_charge_type}
  */
  readonly eipInternetChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#enable CsKubernetesNodePool#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#is_bond_eip CsKubernetesNodePool#is_bond_eip}
  */
  readonly isBondEip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#max_size CsKubernetesNodePool#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#min_size CsKubernetesNodePool#min_size}
  */
  readonly minSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#type CsKubernetesNodePool#type}
  */
  readonly type?: string;
}

export function csKubernetesNodePoolScalingConfigToTerraform(struct?: CsKubernetesNodePoolScalingConfigOutputReference | CsKubernetesNodePoolScalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eip_bandwidth: cdktf.numberToTerraform(struct!.eipBandwidth),
    eip_internet_charge_type: cdktf.stringToTerraform(struct!.eipInternetChargeType),
    enable: cdktf.booleanToTerraform(struct!.enable),
    is_bond_eip: cdktf.booleanToTerraform(struct!.isBondEip),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function csKubernetesNodePoolScalingConfigToHclTerraform(struct?: CsKubernetesNodePoolScalingConfigOutputReference | CsKubernetesNodePoolScalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eip_bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.eipBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eip_internet_charge_type: {
      value: cdktf.stringToHclTerraform(struct!.eipInternetChargeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_bond_eip: {
      value: cdktf.booleanToHclTerraform(struct!.isBondEip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_size: {
      value: cdktf.numberToHclTerraform(struct!.minSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class CsKubernetesNodePoolScalingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsKubernetesNodePoolScalingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eipBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.eipBandwidth = this._eipBandwidth;
    }
    if (this._eipInternetChargeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eipInternetChargeType = this._eipInternetChargeType;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._isBondEip !== undefined) {
      hasAnyValues = true;
      internalValueResult.isBondEip = this._isBondEip;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsKubernetesNodePoolScalingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eipBandwidth = undefined;
      this._eipInternetChargeType = undefined;
      this._enable = undefined;
      this._isBondEip = undefined;
      this._maxSize = undefined;
      this._minSize = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eipBandwidth = value.eipBandwidth;
      this._eipInternetChargeType = value.eipInternetChargeType;
      this._enable = value.enable;
      this._isBondEip = value.isBondEip;
      this._maxSize = value.maxSize;
      this._minSize = value.minSize;
      this._type = value.type;
    }
  }

  // eip_bandwidth - computed: false, optional: true, required: false
  private _eipBandwidth?: number; 
  public get eipBandwidth() {
    return this.getNumberAttribute('eip_bandwidth');
  }
  public set eipBandwidth(value: number) {
    this._eipBandwidth = value;
  }
  public resetEipBandwidth() {
    this._eipBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipBandwidthInput() {
    return this._eipBandwidth;
  }

  // eip_internet_charge_type - computed: false, optional: true, required: false
  private _eipInternetChargeType?: string; 
  public get eipInternetChargeType() {
    return this.getStringAttribute('eip_internet_charge_type');
  }
  public set eipInternetChargeType(value: string) {
    this._eipInternetChargeType = value;
  }
  public resetEipInternetChargeType() {
    this._eipInternetChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipInternetChargeTypeInput() {
    return this._eipInternetChargeType;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // is_bond_eip - computed: false, optional: true, required: false
  private _isBondEip?: boolean | cdktf.IResolvable; 
  public get isBondEip() {
    return this.getBooleanAttribute('is_bond_eip');
  }
  public set isBondEip(value: boolean | cdktf.IResolvable) {
    this._isBondEip = value;
  }
  public resetIsBondEip() {
    this._isBondEip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBondEipInput() {
    return this._isBondEip;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: false, optional: true, required: false
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
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
}
export interface CsKubernetesNodePoolSpotPriceLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#instance_type CsKubernetesNodePool#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#price_limit CsKubernetesNodePool#price_limit}
  */
  readonly priceLimit?: string;
}

export function csKubernetesNodePoolSpotPriceLimitToTerraform(struct?: CsKubernetesNodePoolSpotPriceLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    price_limit: cdktf.stringToTerraform(struct!.priceLimit),
  }
}


export function csKubernetesNodePoolSpotPriceLimitToHclTerraform(struct?: CsKubernetesNodePoolSpotPriceLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    price_limit: {
      value: cdktf.stringToHclTerraform(struct!.priceLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsKubernetesNodePoolSpotPriceLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsKubernetesNodePoolSpotPriceLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._priceLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.priceLimit = this._priceLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsKubernetesNodePoolSpotPriceLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._priceLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._priceLimit = value.priceLimit;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // price_limit - computed: false, optional: true, required: false
  private _priceLimit?: string; 
  public get priceLimit() {
    return this.getStringAttribute('price_limit');
  }
  public set priceLimit(value: string) {
    this._priceLimit = value;
  }
  public resetPriceLimit() {
    this._priceLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priceLimitInput() {
    return this._priceLimit;
  }
}

export class CsKubernetesNodePoolSpotPriceLimitList extends cdktf.ComplexList {
  public internalValue? : CsKubernetesNodePoolSpotPriceLimit[] | cdktf.IResolvable

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
  public get(index: number): CsKubernetesNodePoolSpotPriceLimitOutputReference {
    return new CsKubernetesNodePoolSpotPriceLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsKubernetesNodePoolTaints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#effect CsKubernetesNodePool#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#key CsKubernetesNodePool#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#value CsKubernetesNodePool#value}
  */
  readonly value?: string;
}

export function csKubernetesNodePoolTaintsToTerraform(struct?: CsKubernetesNodePoolTaints | cdktf.IResolvable): any {
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


export function csKubernetesNodePoolTaintsToHclTerraform(struct?: CsKubernetesNodePoolTaints | cdktf.IResolvable): any {
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

export class CsKubernetesNodePoolTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsKubernetesNodePoolTaints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CsKubernetesNodePoolTaints | cdktf.IResolvable | undefined) {
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

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
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
}

export class CsKubernetesNodePoolTaintsList extends cdktf.ComplexList {
  public internalValue? : CsKubernetesNodePoolTaints[] | cdktf.IResolvable

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
  public get(index: number): CsKubernetesNodePoolTaintsOutputReference {
    return new CsKubernetesNodePoolTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsKubernetesNodePoolTeeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#tee_enable CsKubernetesNodePool#tee_enable}
  */
  readonly teeEnable?: boolean | cdktf.IResolvable;
}

export function csKubernetesNodePoolTeeConfigToTerraform(struct?: CsKubernetesNodePoolTeeConfigOutputReference | CsKubernetesNodePoolTeeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tee_enable: cdktf.booleanToTerraform(struct!.teeEnable),
  }
}


export function csKubernetesNodePoolTeeConfigToHclTerraform(struct?: CsKubernetesNodePoolTeeConfigOutputReference | CsKubernetesNodePoolTeeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tee_enable: {
      value: cdktf.booleanToHclTerraform(struct!.teeEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsKubernetesNodePoolTeeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsKubernetesNodePoolTeeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._teeEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.teeEnable = this._teeEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsKubernetesNodePoolTeeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._teeEnable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._teeEnable = value.teeEnable;
    }
  }

  // tee_enable - computed: false, optional: true, required: false
  private _teeEnable?: boolean | cdktf.IResolvable; 
  public get teeEnable() {
    return this.getBooleanAttribute('tee_enable');
  }
  public set teeEnable(value: boolean | cdktf.IResolvable) {
    this._teeEnable = value;
  }
  public resetTeeEnable() {
    this._teeEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teeEnableInput() {
    return this._teeEnable;
  }
}
export interface CsKubernetesNodePoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#create CsKubernetesNodePool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#delete CsKubernetesNodePool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#update CsKubernetesNodePool#update}
  */
  readonly update?: string;
}

export function csKubernetesNodePoolTimeoutsToTerraform(struct?: CsKubernetesNodePoolTimeouts | cdktf.IResolvable): any {
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


export function csKubernetesNodePoolTimeoutsToHclTerraform(struct?: CsKubernetesNodePoolTimeouts | cdktf.IResolvable): any {
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

export class CsKubernetesNodePoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CsKubernetesNodePoolTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CsKubernetesNodePoolTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool alicloud_cs_kubernetes_node_pool}
*/
export class CsKubernetesNodePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cs_kubernetes_node_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CsKubernetesNodePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CsKubernetesNodePool to import
  * @param importFromId The id of the existing CsKubernetesNodePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CsKubernetesNodePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cs_kubernetes_node_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_kubernetes_node_pool alicloud_cs_kubernetes_node_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CsKubernetesNodePoolConfig
  */
  public constructor(scope: Construct, id: string, config: CsKubernetesNodePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cs_kubernetes_node_pool',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRenew = config.autoRenew;
    this._autoRenewPeriod = config.autoRenewPeriod;
    this._cisEnabled = config.cisEnabled;
    this._clusterId = config.clusterId;
    this._compensateWithOnDemand = config.compensateWithOnDemand;
    this._cpuPolicy = config.cpuPolicy;
    this._deploymentSetId = config.deploymentSetId;
    this._desiredSize = config.desiredSize;
    this._forceDelete = config.forceDelete;
    this._formatDisk = config.formatDisk;
    this._id = config.id;
    this._imageId = config.imageId;
    this._imageType = config.imageType;
    this._installCloudMonitor = config.installCloudMonitor;
    this._instanceChargeType = config.instanceChargeType;
    this._instanceTypes = config.instanceTypes;
    this._instances = config.instances;
    this._internetChargeType = config.internetChargeType;
    this._internetMaxBandwidthOut = config.internetMaxBandwidthOut;
    this._keepInstanceName = config.keepInstanceName;
    this._keyName = config.keyName;
    this._kmsEncryptedPassword = config.kmsEncryptedPassword;
    this._kmsEncryptionContext = config.kmsEncryptionContext;
    this._loginAsNonRoot = config.loginAsNonRoot;
    this._multiAzPolicy = config.multiAzPolicy;
    this._name = config.name;
    this._nodeCount = config.nodeCount;
    this._nodeNameMode = config.nodeNameMode;
    this._nodePoolName = config.nodePoolName;
    this._onDemandBaseCapacity = config.onDemandBaseCapacity;
    this._onDemandPercentageAboveBaseCapacity = config.onDemandPercentageAboveBaseCapacity;
    this._password = config.password;
    this._period = config.period;
    this._periodUnit = config.periodUnit;
    this._platform = config.platform;
    this._preUserData = config.preUserData;
    this._ramRoleName = config.ramRoleName;
    this._rdsInstances = config.rdsInstances;
    this._resourceGroupId = config.resourceGroupId;
    this._runtimeName = config.runtimeName;
    this._runtimeVersion = config.runtimeVersion;
    this._scalingPolicy = config.scalingPolicy;
    this._securityGroupId = config.securityGroupId;
    this._securityGroupIds = config.securityGroupIds;
    this._securityHardeningOs = config.securityHardeningOs;
    this._socEnabled = config.socEnabled;
    this._spotInstancePools = config.spotInstancePools;
    this._spotInstanceRemedy = config.spotInstanceRemedy;
    this._spotStrategy = config.spotStrategy;
    this._systemDiskBurstingEnabled = config.systemDiskBurstingEnabled;
    this._systemDiskCategories = config.systemDiskCategories;
    this._systemDiskCategory = config.systemDiskCategory;
    this._systemDiskEncryptAlgorithm = config.systemDiskEncryptAlgorithm;
    this._systemDiskEncrypted = config.systemDiskEncrypted;
    this._systemDiskKmsKey = config.systemDiskKmsKey;
    this._systemDiskPerformanceLevel = config.systemDiskPerformanceLevel;
    this._systemDiskProvisionedIops = config.systemDiskProvisionedIops;
    this._systemDiskSize = config.systemDiskSize;
    this._systemDiskSnapshotPolicyId = config.systemDiskSnapshotPolicyId;
    this._tags = config.tags;
    this._type = config.type;
    this._unschedulable = config.unschedulable;
    this._updateNodes = config.updateNodes;
    this._userData = config.userData;
    this._vswitchIds = config.vswitchIds;
    this._dataDisks.internalValue = config.dataDisks;
    this._efloNodeGroup.internalValue = config.efloNodeGroup;
    this._kubeletConfiguration.internalValue = config.kubeletConfiguration;
    this._labels.internalValue = config.labels;
    this._management.internalValue = config.management;
    this._privatePoolOptions.internalValue = config.privatePoolOptions;
    this._rollingPolicy.internalValue = config.rollingPolicy;
    this._rolloutPolicy.internalValue = config.rolloutPolicy;
    this._scalingConfig.internalValue = config.scalingConfig;
    this._spotPriceLimit.internalValue = config.spotPriceLimit;
    this._taints.internalValue = config.taints;
    this._teeConfig.internalValue = config.teeConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_renew - computed: false, optional: true, required: false
  private _autoRenew?: boolean | cdktf.IResolvable; 
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }
  public set autoRenew(value: boolean | cdktf.IResolvable) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // auto_renew_period - computed: false, optional: true, required: false
  private _autoRenewPeriod?: number; 
  public get autoRenewPeriod() {
    return this.getNumberAttribute('auto_renew_period');
  }
  public set autoRenewPeriod(value: number) {
    this._autoRenewPeriod = value;
  }
  public resetAutoRenewPeriod() {
    this._autoRenewPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewPeriodInput() {
    return this._autoRenewPeriod;
  }

  // cis_enabled - computed: false, optional: true, required: false
  private _cisEnabled?: boolean | cdktf.IResolvable; 
  public get cisEnabled() {
    return this.getBooleanAttribute('cis_enabled');
  }
  public set cisEnabled(value: boolean | cdktf.IResolvable) {
    this._cisEnabled = value;
  }
  public resetCisEnabled() {
    this._cisEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cisEnabledInput() {
    return this._cisEnabled;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // compensate_with_on_demand - computed: false, optional: true, required: false
  private _compensateWithOnDemand?: boolean | cdktf.IResolvable; 
  public get compensateWithOnDemand() {
    return this.getBooleanAttribute('compensate_with_on_demand');
  }
  public set compensateWithOnDemand(value: boolean | cdktf.IResolvable) {
    this._compensateWithOnDemand = value;
  }
  public resetCompensateWithOnDemand() {
    this._compensateWithOnDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compensateWithOnDemandInput() {
    return this._compensateWithOnDemand;
  }

  // cpu_policy - computed: true, optional: true, required: false
  private _cpuPolicy?: string; 
  public get cpuPolicy() {
    return this.getStringAttribute('cpu_policy');
  }
  public set cpuPolicy(value: string) {
    this._cpuPolicy = value;
  }
  public resetCpuPolicy() {
    this._cpuPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPolicyInput() {
    return this._cpuPolicy;
  }

  // deployment_set_id - computed: false, optional: true, required: false
  private _deploymentSetId?: string; 
  public get deploymentSetId() {
    return this.getStringAttribute('deployment_set_id');
  }
  public set deploymentSetId(value: string) {
    this._deploymentSetId = value;
  }
  public resetDeploymentSetId() {
    this._deploymentSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentSetIdInput() {
    return this._deploymentSetId;
  }

  // desired_size - computed: false, optional: true, required: false
  private _desiredSize?: string; 
  public get desiredSize() {
    return this.getStringAttribute('desired_size');
  }
  public set desiredSize(value: string) {
    this._desiredSize = value;
  }
  public resetDesiredSize() {
    this._desiredSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredSizeInput() {
    return this._desiredSize;
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

  // format_disk - computed: true, optional: true, required: false
  private _formatDisk?: boolean | cdktf.IResolvable; 
  public get formatDisk() {
    return this.getBooleanAttribute('format_disk');
  }
  public set formatDisk(value: boolean | cdktf.IResolvable) {
    this._formatDisk = value;
  }
  public resetFormatDisk() {
    this._formatDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatDiskInput() {
    return this._formatDisk;
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

  // image_id - computed: true, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // image_type - computed: true, optional: true, required: false
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  public resetImageType() {
    this._imageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
  }

  // install_cloud_monitor - computed: false, optional: true, required: false
  private _installCloudMonitor?: boolean | cdktf.IResolvable; 
  public get installCloudMonitor() {
    return this.getBooleanAttribute('install_cloud_monitor');
  }
  public set installCloudMonitor(value: boolean | cdktf.IResolvable) {
    this._installCloudMonitor = value;
  }
  public resetInstallCloudMonitor() {
    this._installCloudMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installCloudMonitorInput() {
    return this._installCloudMonitor;
  }

  // instance_charge_type - computed: true, optional: true, required: false
  private _instanceChargeType?: string; 
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }
  public set instanceChargeType(value: string) {
    this._instanceChargeType = value;
  }
  public resetInstanceChargeType() {
    this._instanceChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypeInput() {
    return this._instanceChargeType;
  }

  // instance_types - computed: false, optional: true, required: false
  private _instanceTypes?: string[]; 
  public get instanceTypes() {
    return this.getListAttribute('instance_types');
  }
  public set instanceTypes(value: string[]) {
    this._instanceTypes = value;
  }
  public resetInstanceTypes() {
    this._instanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesInput() {
    return this._instanceTypes;
  }

  // instances - computed: false, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // internet_charge_type - computed: false, optional: true, required: false
  private _internetChargeType?: string; 
  public get internetChargeType() {
    return this.getStringAttribute('internet_charge_type');
  }
  public set internetChargeType(value: string) {
    this._internetChargeType = value;
  }
  public resetInternetChargeType() {
    this._internetChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetChargeTypeInput() {
    return this._internetChargeType;
  }

  // internet_max_bandwidth_out - computed: false, optional: true, required: false
  private _internetMaxBandwidthOut?: number; 
  public get internetMaxBandwidthOut() {
    return this.getNumberAttribute('internet_max_bandwidth_out');
  }
  public set internetMaxBandwidthOut(value: number) {
    this._internetMaxBandwidthOut = value;
  }
  public resetInternetMaxBandwidthOut() {
    this._internetMaxBandwidthOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetMaxBandwidthOutInput() {
    return this._internetMaxBandwidthOut;
  }

  // keep_instance_name - computed: true, optional: true, required: false
  private _keepInstanceName?: boolean | cdktf.IResolvable; 
  public get keepInstanceName() {
    return this.getBooleanAttribute('keep_instance_name');
  }
  public set keepInstanceName(value: boolean | cdktf.IResolvable) {
    this._keepInstanceName = value;
  }
  public resetKeepInstanceName() {
    this._keepInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepInstanceNameInput() {
    return this._keepInstanceName;
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // kms_encrypted_password - computed: false, optional: true, required: false
  private _kmsEncryptedPassword?: string; 
  public get kmsEncryptedPassword() {
    return this.getStringAttribute('kms_encrypted_password');
  }
  public set kmsEncryptedPassword(value: string) {
    this._kmsEncryptedPassword = value;
  }
  public resetKmsEncryptedPassword() {
    this._kmsEncryptedPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptedPasswordInput() {
    return this._kmsEncryptedPassword;
  }

  // kms_encryption_context - computed: false, optional: true, required: false
  private _kmsEncryptionContext?: { [key: string]: string }; 
  public get kmsEncryptionContext() {
    return this.getStringMapAttribute('kms_encryption_context');
  }
  public set kmsEncryptionContext(value: { [key: string]: string }) {
    this._kmsEncryptionContext = value;
  }
  public resetKmsEncryptionContext() {
    this._kmsEncryptionContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptionContextInput() {
    return this._kmsEncryptionContext;
  }

  // login_as_non_root - computed: false, optional: true, required: false
  private _loginAsNonRoot?: boolean | cdktf.IResolvable; 
  public get loginAsNonRoot() {
    return this.getBooleanAttribute('login_as_non_root');
  }
  public set loginAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._loginAsNonRoot = value;
  }
  public resetLoginAsNonRoot() {
    this._loginAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginAsNonRootInput() {
    return this._loginAsNonRoot;
  }

  // multi_az_policy - computed: true, optional: true, required: false
  private _multiAzPolicy?: string; 
  public get multiAzPolicy() {
    return this.getStringAttribute('multi_az_policy');
  }
  public set multiAzPolicy(value: string) {
    this._multiAzPolicy = value;
  }
  public resetMultiAzPolicy() {
    this._multiAzPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAzPolicyInput() {
    return this._multiAzPolicy;
  }

  // name - computed: true, optional: true, required: false
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

  // node_count - computed: true, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // node_name_mode - computed: true, optional: true, required: false
  private _nodeNameMode?: string; 
  public get nodeNameMode() {
    return this.getStringAttribute('node_name_mode');
  }
  public set nodeNameMode(value: string) {
    this._nodeNameMode = value;
  }
  public resetNodeNameMode() {
    this._nodeNameMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameModeInput() {
    return this._nodeNameMode;
  }

  // node_pool_id - computed: true, optional: false, required: false
  public get nodePoolId() {
    return this.getStringAttribute('node_pool_id');
  }

  // node_pool_name - computed: true, optional: true, required: false
  private _nodePoolName?: string; 
  public get nodePoolName() {
    return this.getStringAttribute('node_pool_name');
  }
  public set nodePoolName(value: string) {
    this._nodePoolName = value;
  }
  public resetNodePoolName() {
    this._nodePoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolNameInput() {
    return this._nodePoolName;
  }

  // on_demand_base_capacity - computed: false, optional: true, required: false
  private _onDemandBaseCapacity?: string; 
  public get onDemandBaseCapacity() {
    return this.getStringAttribute('on_demand_base_capacity');
  }
  public set onDemandBaseCapacity(value: string) {
    this._onDemandBaseCapacity = value;
  }
  public resetOnDemandBaseCapacity() {
    this._onDemandBaseCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandBaseCapacityInput() {
    return this._onDemandBaseCapacity;
  }

  // on_demand_percentage_above_base_capacity - computed: false, optional: true, required: false
  private _onDemandPercentageAboveBaseCapacity?: string; 
  public get onDemandPercentageAboveBaseCapacity() {
    return this.getStringAttribute('on_demand_percentage_above_base_capacity');
  }
  public set onDemandPercentageAboveBaseCapacity(value: string) {
    this._onDemandPercentageAboveBaseCapacity = value;
  }
  public resetOnDemandPercentageAboveBaseCapacity() {
    this._onDemandPercentageAboveBaseCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandPercentageAboveBaseCapacityInput() {
    return this._onDemandPercentageAboveBaseCapacity;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // period_unit - computed: false, optional: true, required: false
  private _periodUnit?: string; 
  public get periodUnit() {
    return this.getStringAttribute('period_unit');
  }
  public set periodUnit(value: string) {
    this._periodUnit = value;
  }
  public resetPeriodUnit() {
    this._periodUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodUnitInput() {
    return this._periodUnit;
  }

  // platform - computed: true, optional: true, required: false
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

  // pre_user_data - computed: false, optional: true, required: false
  private _preUserData?: string; 
  public get preUserData() {
    return this.getStringAttribute('pre_user_data');
  }
  public set preUserData(value: string) {
    this._preUserData = value;
  }
  public resetPreUserData() {
    this._preUserData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preUserDataInput() {
    return this._preUserData;
  }

  // ram_role_name - computed: true, optional: true, required: false
  private _ramRoleName?: string; 
  public get ramRoleName() {
    return this.getStringAttribute('ram_role_name');
  }
  public set ramRoleName(value: string) {
    this._ramRoleName = value;
  }
  public resetRamRoleName() {
    this._ramRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramRoleNameInput() {
    return this._ramRoleName;
  }

  // rds_instances - computed: false, optional: true, required: false
  private _rdsInstances?: string[]; 
  public get rdsInstances() {
    return this.getListAttribute('rds_instances');
  }
  public set rdsInstances(value: string[]) {
    this._rdsInstances = value;
  }
  public resetRdsInstances() {
    this._rdsInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsInstancesInput() {
    return this._rdsInstances;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // runtime_name - computed: true, optional: true, required: false
  private _runtimeName?: string; 
  public get runtimeName() {
    return this.getStringAttribute('runtime_name');
  }
  public set runtimeName(value: string) {
    this._runtimeName = value;
  }
  public resetRuntimeName() {
    this._runtimeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeNameInput() {
    return this._runtimeName;
  }

  // runtime_version - computed: true, optional: true, required: false
  private _runtimeVersion?: string; 
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }
  public set runtimeVersion(value: string) {
    this._runtimeVersion = value;
  }
  public resetRuntimeVersion() {
    this._runtimeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeVersionInput() {
    return this._runtimeVersion;
  }

  // scaling_group_id - computed: true, optional: false, required: false
  public get scalingGroupId() {
    return this.getStringAttribute('scaling_group_id');
  }

  // scaling_policy - computed: true, optional: true, required: false
  private _scalingPolicy?: string; 
  public get scalingPolicy() {
    return this.getStringAttribute('scaling_policy');
  }
  public set scalingPolicy(value: string) {
    this._scalingPolicy = value;
  }
  public resetScalingPolicy() {
    this._scalingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingPolicyInput() {
    return this._scalingPolicy;
  }

  // security_group_id - computed: true, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // security_hardening_os - computed: false, optional: true, required: false
  private _securityHardeningOs?: boolean | cdktf.IResolvable; 
  public get securityHardeningOs() {
    return this.getBooleanAttribute('security_hardening_os');
  }
  public set securityHardeningOs(value: boolean | cdktf.IResolvable) {
    this._securityHardeningOs = value;
  }
  public resetSecurityHardeningOs() {
    this._securityHardeningOs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityHardeningOsInput() {
    return this._securityHardeningOs;
  }

  // soc_enabled - computed: false, optional: true, required: false
  private _socEnabled?: boolean | cdktf.IResolvable; 
  public get socEnabled() {
    return this.getBooleanAttribute('soc_enabled');
  }
  public set socEnabled(value: boolean | cdktf.IResolvable) {
    this._socEnabled = value;
  }
  public resetSocEnabled() {
    this._socEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socEnabledInput() {
    return this._socEnabled;
  }

  // spot_instance_pools - computed: false, optional: true, required: false
  private _spotInstancePools?: number; 
  public get spotInstancePools() {
    return this.getNumberAttribute('spot_instance_pools');
  }
  public set spotInstancePools(value: number) {
    this._spotInstancePools = value;
  }
  public resetSpotInstancePools() {
    this._spotInstancePools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInstancePoolsInput() {
    return this._spotInstancePools;
  }

  // spot_instance_remedy - computed: false, optional: true, required: false
  private _spotInstanceRemedy?: boolean | cdktf.IResolvable; 
  public get spotInstanceRemedy() {
    return this.getBooleanAttribute('spot_instance_remedy');
  }
  public set spotInstanceRemedy(value: boolean | cdktf.IResolvable) {
    this._spotInstanceRemedy = value;
  }
  public resetSpotInstanceRemedy() {
    this._spotInstanceRemedy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInstanceRemedyInput() {
    return this._spotInstanceRemedy;
  }

  // spot_strategy - computed: true, optional: true, required: false
  private _spotStrategy?: string; 
  public get spotStrategy() {
    return this.getStringAttribute('spot_strategy');
  }
  public set spotStrategy(value: string) {
    this._spotStrategy = value;
  }
  public resetSpotStrategy() {
    this._spotStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotStrategyInput() {
    return this._spotStrategy;
  }

  // system_disk_bursting_enabled - computed: false, optional: true, required: false
  private _systemDiskBurstingEnabled?: boolean | cdktf.IResolvable; 
  public get systemDiskBurstingEnabled() {
    return this.getBooleanAttribute('system_disk_bursting_enabled');
  }
  public set systemDiskBurstingEnabled(value: boolean | cdktf.IResolvable) {
    this._systemDiskBurstingEnabled = value;
  }
  public resetSystemDiskBurstingEnabled() {
    this._systemDiskBurstingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskBurstingEnabledInput() {
    return this._systemDiskBurstingEnabled;
  }

  // system_disk_categories - computed: true, optional: true, required: false
  private _systemDiskCategories?: string[]; 
  public get systemDiskCategories() {
    return this.getListAttribute('system_disk_categories');
  }
  public set systemDiskCategories(value: string[]) {
    this._systemDiskCategories = value;
  }
  public resetSystemDiskCategories() {
    this._systemDiskCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskCategoriesInput() {
    return this._systemDiskCategories;
  }

  // system_disk_category - computed: true, optional: true, required: false
  private _systemDiskCategory?: string; 
  public get systemDiskCategory() {
    return this.getStringAttribute('system_disk_category');
  }
  public set systemDiskCategory(value: string) {
    this._systemDiskCategory = value;
  }
  public resetSystemDiskCategory() {
    this._systemDiskCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskCategoryInput() {
    return this._systemDiskCategory;
  }

  // system_disk_encrypt_algorithm - computed: false, optional: true, required: false
  private _systemDiskEncryptAlgorithm?: string; 
  public get systemDiskEncryptAlgorithm() {
    return this.getStringAttribute('system_disk_encrypt_algorithm');
  }
  public set systemDiskEncryptAlgorithm(value: string) {
    this._systemDiskEncryptAlgorithm = value;
  }
  public resetSystemDiskEncryptAlgorithm() {
    this._systemDiskEncryptAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskEncryptAlgorithmInput() {
    return this._systemDiskEncryptAlgorithm;
  }

  // system_disk_encrypted - computed: false, optional: true, required: false
  private _systemDiskEncrypted?: boolean | cdktf.IResolvable; 
  public get systemDiskEncrypted() {
    return this.getBooleanAttribute('system_disk_encrypted');
  }
  public set systemDiskEncrypted(value: boolean | cdktf.IResolvable) {
    this._systemDiskEncrypted = value;
  }
  public resetSystemDiskEncrypted() {
    this._systemDiskEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskEncryptedInput() {
    return this._systemDiskEncrypted;
  }

  // system_disk_kms_key - computed: false, optional: true, required: false
  private _systemDiskKmsKey?: string; 
  public get systemDiskKmsKey() {
    return this.getStringAttribute('system_disk_kms_key');
  }
  public set systemDiskKmsKey(value: string) {
    this._systemDiskKmsKey = value;
  }
  public resetSystemDiskKmsKey() {
    this._systemDiskKmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskKmsKeyInput() {
    return this._systemDiskKmsKey;
  }

  // system_disk_performance_level - computed: false, optional: true, required: false
  private _systemDiskPerformanceLevel?: string; 
  public get systemDiskPerformanceLevel() {
    return this.getStringAttribute('system_disk_performance_level');
  }
  public set systemDiskPerformanceLevel(value: string) {
    this._systemDiskPerformanceLevel = value;
  }
  public resetSystemDiskPerformanceLevel() {
    this._systemDiskPerformanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskPerformanceLevelInput() {
    return this._systemDiskPerformanceLevel;
  }

  // system_disk_provisioned_iops - computed: false, optional: true, required: false
  private _systemDiskProvisionedIops?: number; 
  public get systemDiskProvisionedIops() {
    return this.getNumberAttribute('system_disk_provisioned_iops');
  }
  public set systemDiskProvisionedIops(value: number) {
    this._systemDiskProvisionedIops = value;
  }
  public resetSystemDiskProvisionedIops() {
    this._systemDiskProvisionedIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskProvisionedIopsInput() {
    return this._systemDiskProvisionedIops;
  }

  // system_disk_size - computed: false, optional: true, required: false
  private _systemDiskSize?: number; 
  public get systemDiskSize() {
    return this.getNumberAttribute('system_disk_size');
  }
  public set systemDiskSize(value: number) {
    this._systemDiskSize = value;
  }
  public resetSystemDiskSize() {
    this._systemDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskSizeInput() {
    return this._systemDiskSize;
  }

  // system_disk_snapshot_policy_id - computed: false, optional: true, required: false
  private _systemDiskSnapshotPolicyId?: string; 
  public get systemDiskSnapshotPolicyId() {
    return this.getStringAttribute('system_disk_snapshot_policy_id');
  }
  public set systemDiskSnapshotPolicyId(value: string) {
    this._systemDiskSnapshotPolicyId = value;
  }
  public resetSystemDiskSnapshotPolicyId() {
    this._systemDiskSnapshotPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskSnapshotPolicyIdInput() {
    return this._systemDiskSnapshotPolicyId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: true, optional: true, required: false
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

  // unschedulable - computed: false, optional: true, required: false
  private _unschedulable?: boolean | cdktf.IResolvable; 
  public get unschedulable() {
    return this.getBooleanAttribute('unschedulable');
  }
  public set unschedulable(value: boolean | cdktf.IResolvable) {
    this._unschedulable = value;
  }
  public resetUnschedulable() {
    this._unschedulable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unschedulableInput() {
    return this._unschedulable;
  }

  // update_nodes - computed: false, optional: true, required: false
  private _updateNodes?: boolean | cdktf.IResolvable; 
  public get updateNodes() {
    return this.getBooleanAttribute('update_nodes');
  }
  public set updateNodes(value: boolean | cdktf.IResolvable) {
    this._updateNodes = value;
  }
  public resetUpdateNodes() {
    this._updateNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateNodesInput() {
    return this._updateNodes;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vswitch_ids - computed: false, optional: true, required: false
  private _vswitchIds?: string[]; 
  public get vswitchIds() {
    return this.getListAttribute('vswitch_ids');
  }
  public set vswitchIds(value: string[]) {
    this._vswitchIds = value;
  }
  public resetVswitchIds() {
    this._vswitchIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdsInput() {
    return this._vswitchIds;
  }

  // data_disks - computed: false, optional: true, required: false
  private _dataDisks = new CsKubernetesNodePoolDataDisksList(this, "data_disks", false);
  public get dataDisks() {
    return this._dataDisks;
  }
  public putDataDisks(value: CsKubernetesNodePoolDataDisks[] | cdktf.IResolvable) {
    this._dataDisks.internalValue = value;
  }
  public resetDataDisks() {
    this._dataDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDisksInput() {
    return this._dataDisks.internalValue;
  }

  // eflo_node_group - computed: false, optional: true, required: false
  private _efloNodeGroup = new CsKubernetesNodePoolEfloNodeGroupOutputReference(this, "eflo_node_group");
  public get efloNodeGroup() {
    return this._efloNodeGroup;
  }
  public putEfloNodeGroup(value: CsKubernetesNodePoolEfloNodeGroup) {
    this._efloNodeGroup.internalValue = value;
  }
  public resetEfloNodeGroup() {
    this._efloNodeGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efloNodeGroupInput() {
    return this._efloNodeGroup.internalValue;
  }

  // kubelet_configuration - computed: false, optional: true, required: false
  private _kubeletConfiguration = new CsKubernetesNodePoolKubeletConfigurationOutputReference(this, "kubelet_configuration");
  public get kubeletConfiguration() {
    return this._kubeletConfiguration;
  }
  public putKubeletConfiguration(value: CsKubernetesNodePoolKubeletConfiguration) {
    this._kubeletConfiguration.internalValue = value;
  }
  public resetKubeletConfiguration() {
    this._kubeletConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletConfigurationInput() {
    return this._kubeletConfiguration.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new CsKubernetesNodePoolLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: CsKubernetesNodePoolLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // management - computed: false, optional: true, required: false
  private _management = new CsKubernetesNodePoolManagementOutputReference(this, "management");
  public get management() {
    return this._management;
  }
  public putManagement(value: CsKubernetesNodePoolManagement) {
    this._management.internalValue = value;
  }
  public resetManagement() {
    this._management.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management.internalValue;
  }

  // private_pool_options - computed: false, optional: true, required: false
  private _privatePoolOptions = new CsKubernetesNodePoolPrivatePoolOptionsOutputReference(this, "private_pool_options");
  public get privatePoolOptions() {
    return this._privatePoolOptions;
  }
  public putPrivatePoolOptions(value: CsKubernetesNodePoolPrivatePoolOptions) {
    this._privatePoolOptions.internalValue = value;
  }
  public resetPrivatePoolOptions() {
    this._privatePoolOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privatePoolOptionsInput() {
    return this._privatePoolOptions.internalValue;
  }

  // rolling_policy - computed: false, optional: true, required: false
  private _rollingPolicy = new CsKubernetesNodePoolRollingPolicyOutputReference(this, "rolling_policy");
  public get rollingPolicy() {
    return this._rollingPolicy;
  }
  public putRollingPolicy(value: CsKubernetesNodePoolRollingPolicy) {
    this._rollingPolicy.internalValue = value;
  }
  public resetRollingPolicy() {
    this._rollingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingPolicyInput() {
    return this._rollingPolicy.internalValue;
  }

  // rollout_policy - computed: false, optional: true, required: false
  private _rolloutPolicy = new CsKubernetesNodePoolRolloutPolicyOutputReference(this, "rollout_policy");
  public get rolloutPolicy() {
    return this._rolloutPolicy;
  }
  public putRolloutPolicy(value: CsKubernetesNodePoolRolloutPolicy) {
    this._rolloutPolicy.internalValue = value;
  }
  public resetRolloutPolicy() {
    this._rolloutPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutPolicyInput() {
    return this._rolloutPolicy.internalValue;
  }

  // scaling_config - computed: false, optional: true, required: false
  private _scalingConfig = new CsKubernetesNodePoolScalingConfigOutputReference(this, "scaling_config");
  public get scalingConfig() {
    return this._scalingConfig;
  }
  public putScalingConfig(value: CsKubernetesNodePoolScalingConfig) {
    this._scalingConfig.internalValue = value;
  }
  public resetScalingConfig() {
    this._scalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingConfigInput() {
    return this._scalingConfig.internalValue;
  }

  // spot_price_limit - computed: false, optional: true, required: false
  private _spotPriceLimit = new CsKubernetesNodePoolSpotPriceLimitList(this, "spot_price_limit", false);
  public get spotPriceLimit() {
    return this._spotPriceLimit;
  }
  public putSpotPriceLimit(value: CsKubernetesNodePoolSpotPriceLimit[] | cdktf.IResolvable) {
    this._spotPriceLimit.internalValue = value;
  }
  public resetSpotPriceLimit() {
    this._spotPriceLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotPriceLimitInput() {
    return this._spotPriceLimit.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new CsKubernetesNodePoolTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: CsKubernetesNodePoolTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }

  // tee_config - computed: false, optional: true, required: false
  private _teeConfig = new CsKubernetesNodePoolTeeConfigOutputReference(this, "tee_config");
  public get teeConfig() {
    return this._teeConfig;
  }
  public putTeeConfig(value: CsKubernetesNodePoolTeeConfig) {
    this._teeConfig.internalValue = value;
  }
  public resetTeeConfig() {
    this._teeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teeConfigInput() {
    return this._teeConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CsKubernetesNodePoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CsKubernetesNodePoolTimeouts) {
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
      auto_renew: cdktf.booleanToTerraform(this._autoRenew),
      auto_renew_period: cdktf.numberToTerraform(this._autoRenewPeriod),
      cis_enabled: cdktf.booleanToTerraform(this._cisEnabled),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      compensate_with_on_demand: cdktf.booleanToTerraform(this._compensateWithOnDemand),
      cpu_policy: cdktf.stringToTerraform(this._cpuPolicy),
      deployment_set_id: cdktf.stringToTerraform(this._deploymentSetId),
      desired_size: cdktf.stringToTerraform(this._desiredSize),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      format_disk: cdktf.booleanToTerraform(this._formatDisk),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      image_type: cdktf.stringToTerraform(this._imageType),
      install_cloud_monitor: cdktf.booleanToTerraform(this._installCloudMonitor),
      instance_charge_type: cdktf.stringToTerraform(this._instanceChargeType),
      instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceTypes),
      instances: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instances),
      internet_charge_type: cdktf.stringToTerraform(this._internetChargeType),
      internet_max_bandwidth_out: cdktf.numberToTerraform(this._internetMaxBandwidthOut),
      keep_instance_name: cdktf.booleanToTerraform(this._keepInstanceName),
      key_name: cdktf.stringToTerraform(this._keyName),
      kms_encrypted_password: cdktf.stringToTerraform(this._kmsEncryptedPassword),
      kms_encryption_context: cdktf.hashMapper(cdktf.stringToTerraform)(this._kmsEncryptionContext),
      login_as_non_root: cdktf.booleanToTerraform(this._loginAsNonRoot),
      multi_az_policy: cdktf.stringToTerraform(this._multiAzPolicy),
      name: cdktf.stringToTerraform(this._name),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      node_name_mode: cdktf.stringToTerraform(this._nodeNameMode),
      node_pool_name: cdktf.stringToTerraform(this._nodePoolName),
      on_demand_base_capacity: cdktf.stringToTerraform(this._onDemandBaseCapacity),
      on_demand_percentage_above_base_capacity: cdktf.stringToTerraform(this._onDemandPercentageAboveBaseCapacity),
      password: cdktf.stringToTerraform(this._password),
      period: cdktf.numberToTerraform(this._period),
      period_unit: cdktf.stringToTerraform(this._periodUnit),
      platform: cdktf.stringToTerraform(this._platform),
      pre_user_data: cdktf.stringToTerraform(this._preUserData),
      ram_role_name: cdktf.stringToTerraform(this._ramRoleName),
      rds_instances: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rdsInstances),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      runtime_name: cdktf.stringToTerraform(this._runtimeName),
      runtime_version: cdktf.stringToTerraform(this._runtimeVersion),
      scaling_policy: cdktf.stringToTerraform(this._scalingPolicy),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      security_hardening_os: cdktf.booleanToTerraform(this._securityHardeningOs),
      soc_enabled: cdktf.booleanToTerraform(this._socEnabled),
      spot_instance_pools: cdktf.numberToTerraform(this._spotInstancePools),
      spot_instance_remedy: cdktf.booleanToTerraform(this._spotInstanceRemedy),
      spot_strategy: cdktf.stringToTerraform(this._spotStrategy),
      system_disk_bursting_enabled: cdktf.booleanToTerraform(this._systemDiskBurstingEnabled),
      system_disk_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._systemDiskCategories),
      system_disk_category: cdktf.stringToTerraform(this._systemDiskCategory),
      system_disk_encrypt_algorithm: cdktf.stringToTerraform(this._systemDiskEncryptAlgorithm),
      system_disk_encrypted: cdktf.booleanToTerraform(this._systemDiskEncrypted),
      system_disk_kms_key: cdktf.stringToTerraform(this._systemDiskKmsKey),
      system_disk_performance_level: cdktf.stringToTerraform(this._systemDiskPerformanceLevel),
      system_disk_provisioned_iops: cdktf.numberToTerraform(this._systemDiskProvisionedIops),
      system_disk_size: cdktf.numberToTerraform(this._systemDiskSize),
      system_disk_snapshot_policy_id: cdktf.stringToTerraform(this._systemDiskSnapshotPolicyId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      unschedulable: cdktf.booleanToTerraform(this._unschedulable),
      update_nodes: cdktf.booleanToTerraform(this._updateNodes),
      user_data: cdktf.stringToTerraform(this._userData),
      vswitch_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vswitchIds),
      data_disks: cdktf.listMapper(csKubernetesNodePoolDataDisksToTerraform, true)(this._dataDisks.internalValue),
      eflo_node_group: csKubernetesNodePoolEfloNodeGroupToTerraform(this._efloNodeGroup.internalValue),
      kubelet_configuration: csKubernetesNodePoolKubeletConfigurationToTerraform(this._kubeletConfiguration.internalValue),
      labels: cdktf.listMapper(csKubernetesNodePoolLabelsToTerraform, true)(this._labels.internalValue),
      management: csKubernetesNodePoolManagementToTerraform(this._management.internalValue),
      private_pool_options: csKubernetesNodePoolPrivatePoolOptionsToTerraform(this._privatePoolOptions.internalValue),
      rolling_policy: csKubernetesNodePoolRollingPolicyToTerraform(this._rollingPolicy.internalValue),
      rollout_policy: csKubernetesNodePoolRolloutPolicyToTerraform(this._rolloutPolicy.internalValue),
      scaling_config: csKubernetesNodePoolScalingConfigToTerraform(this._scalingConfig.internalValue),
      spot_price_limit: cdktf.listMapper(csKubernetesNodePoolSpotPriceLimitToTerraform, true)(this._spotPriceLimit.internalValue),
      taints: cdktf.listMapper(csKubernetesNodePoolTaintsToTerraform, true)(this._taints.internalValue),
      tee_config: csKubernetesNodePoolTeeConfigToTerraform(this._teeConfig.internalValue),
      timeouts: csKubernetesNodePoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_renew: {
        value: cdktf.booleanToHclTerraform(this._autoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_renew_period: {
        value: cdktf.numberToHclTerraform(this._autoRenewPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cis_enabled: {
        value: cdktf.booleanToHclTerraform(this._cisEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compensate_with_on_demand: {
        value: cdktf.booleanToHclTerraform(this._compensateWithOnDemand),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cpu_policy: {
        value: cdktf.stringToHclTerraform(this._cpuPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_set_id: {
        value: cdktf.stringToHclTerraform(this._deploymentSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desired_size: {
        value: cdktf.stringToHclTerraform(this._desiredSize),
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
      format_disk: {
        value: cdktf.booleanToHclTerraform(this._formatDisk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_type: {
        value: cdktf.stringToHclTerraform(this._imageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      install_cloud_monitor: {
        value: cdktf.booleanToHclTerraform(this._installCloudMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instance_charge_type: {
        value: cdktf.stringToHclTerraform(this._instanceChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      instances: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instances),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      internet_charge_type: {
        value: cdktf.stringToHclTerraform(this._internetChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_max_bandwidth_out: {
        value: cdktf.numberToHclTerraform(this._internetMaxBandwidthOut),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      keep_instance_name: {
        value: cdktf.booleanToHclTerraform(this._keepInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_name: {
        value: cdktf.stringToHclTerraform(this._keyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_encrypted_password: {
        value: cdktf.stringToHclTerraform(this._kmsEncryptedPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_encryption_context: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._kmsEncryptionContext),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      login_as_non_root: {
        value: cdktf.booleanToHclTerraform(this._loginAsNonRoot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multi_az_policy: {
        value: cdktf.stringToHclTerraform(this._multiAzPolicy),
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
      node_count: {
        value: cdktf.numberToHclTerraform(this._nodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_name_mode: {
        value: cdktf.stringToHclTerraform(this._nodeNameMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_pool_name: {
        value: cdktf.stringToHclTerraform(this._nodePoolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_demand_base_capacity: {
        value: cdktf.stringToHclTerraform(this._onDemandBaseCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_demand_percentage_above_base_capacity: {
        value: cdktf.stringToHclTerraform(this._onDemandPercentageAboveBaseCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      period_unit: {
        value: cdktf.stringToHclTerraform(this._periodUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform: {
        value: cdktf.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_user_data: {
        value: cdktf.stringToHclTerraform(this._preUserData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ram_role_name: {
        value: cdktf.stringToHclTerraform(this._ramRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rds_instances: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rdsInstances),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime_name: {
        value: cdktf.stringToHclTerraform(this._runtimeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime_version: {
        value: cdktf.stringToHclTerraform(this._runtimeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_policy: {
        value: cdktf.stringToHclTerraform(this._scalingPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      security_hardening_os: {
        value: cdktf.booleanToHclTerraform(this._securityHardeningOs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      soc_enabled: {
        value: cdktf.booleanToHclTerraform(this._socEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      spot_instance_pools: {
        value: cdktf.numberToHclTerraform(this._spotInstancePools),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spot_instance_remedy: {
        value: cdktf.booleanToHclTerraform(this._spotInstanceRemedy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      spot_strategy: {
        value: cdktf.stringToHclTerraform(this._spotStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_disk_bursting_enabled: {
        value: cdktf.booleanToHclTerraform(this._systemDiskBurstingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      system_disk_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._systemDiskCategories),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      system_disk_category: {
        value: cdktf.stringToHclTerraform(this._systemDiskCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_disk_encrypt_algorithm: {
        value: cdktf.stringToHclTerraform(this._systemDiskEncryptAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_disk_encrypted: {
        value: cdktf.booleanToHclTerraform(this._systemDiskEncrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      system_disk_kms_key: {
        value: cdktf.stringToHclTerraform(this._systemDiskKmsKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_disk_performance_level: {
        value: cdktf.stringToHclTerraform(this._systemDiskPerformanceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_disk_provisioned_iops: {
        value: cdktf.numberToHclTerraform(this._systemDiskProvisionedIops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      system_disk_size: {
        value: cdktf.numberToHclTerraform(this._systemDiskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      system_disk_snapshot_policy_id: {
        value: cdktf.stringToHclTerraform(this._systemDiskSnapshotPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unschedulable: {
        value: cdktf.booleanToHclTerraform(this._unschedulable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      update_nodes: {
        value: cdktf.booleanToHclTerraform(this._updateNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vswitchIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      data_disks: {
        value: cdktf.listMapperHcl(csKubernetesNodePoolDataDisksToHclTerraform, true)(this._dataDisks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsKubernetesNodePoolDataDisksList",
      },
      eflo_node_group: {
        value: csKubernetesNodePoolEfloNodeGroupToHclTerraform(this._efloNodeGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsKubernetesNodePoolEfloNodeGroupList",
      },
      kubelet_configuration: {
        value: csKubernetesNodePoolKubeletConfigurationToHclTerraform(this._kubeletConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsKubernetesNodePoolKubeletConfigurationList",
      },
      labels: {
        value: cdktf.listMapperHcl(csKubernetesNodePoolLabelsToHclTerraform, true)(this._labels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsKubernetesNodePoolLabelsList",
      },
      management: {
        value: csKubernetesNodePoolManagementToHclTerraform(this._management.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsKubernetesNodePoolManagementList",
      },
      private_pool_options: {
        value: csKubernetesNodePoolPrivatePoolOptionsToHclTerraform(this._privatePoolOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsKubernetesNodePoolPrivatePoolOptionsList",
      },
      rolling_policy: {
        value: csKubernetesNodePoolRollingPolicyToHclTerraform(this._rollingPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsKubernetesNodePoolRollingPolicyList",
      },
      rollout_policy: {
        value: csKubernetesNodePoolRolloutPolicyToHclTerraform(this._rolloutPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsKubernetesNodePoolRolloutPolicyList",
      },
      scaling_config: {
        value: csKubernetesNodePoolScalingConfigToHclTerraform(this._scalingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsKubernetesNodePoolScalingConfigList",
      },
      spot_price_limit: {
        value: cdktf.listMapperHcl(csKubernetesNodePoolSpotPriceLimitToHclTerraform, true)(this._spotPriceLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsKubernetesNodePoolSpotPriceLimitList",
      },
      taints: {
        value: cdktf.listMapperHcl(csKubernetesNodePoolTaintsToHclTerraform, true)(this._taints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsKubernetesNodePoolTaintsList",
      },
      tee_config: {
        value: csKubernetesNodePoolTeeConfigToHclTerraform(this._teeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsKubernetesNodePoolTeeConfigList",
      },
      timeouts: {
        value: csKubernetesNodePoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CsKubernetesNodePoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
