// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#allocate_public_ip Instance#allocate_public_ip}
  */
  readonly allocatePublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#auto_release_time Instance#auto_release_time}
  */
  readonly autoReleaseTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#auto_renew_period Instance#auto_renew_period}
  */
  readonly autoRenewPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#availability_zone Instance#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#credit_specification Instance#credit_specification}
  */
  readonly creditSpecification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#dedicated_host_id Instance#dedicated_host_id}
  */
  readonly dedicatedHostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#deletion_protection Instance#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#deployment_set_id Instance#deployment_set_id}
  */
  readonly deploymentSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#description Instance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#dry_run Instance#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#enable_jumbo_frame Instance#enable_jumbo_frame}
  */
  readonly enableJumboFrame?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#force_delete Instance#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#host_name Instance#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#hpc_cluster_id Instance#hpc_cluster_id}
  */
  readonly hpcClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#http_endpoint Instance#http_endpoint}
  */
  readonly httpEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#http_put_response_hop_limit Instance#http_put_response_hop_limit}
  */
  readonly httpPutResponseHopLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#http_tokens Instance#http_tokens}
  */
  readonly httpTokens?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#id Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#image_id Instance#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#include_data_disks Instance#include_data_disks}
  */
  readonly includeDataDisks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#instance_charge_type Instance#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#instance_name Instance#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#instance_type Instance#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#internet_charge_type Instance#internet_charge_type}
  */
  readonly internetChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#internet_max_bandwidth_in Instance#internet_max_bandwidth_in}
  */
  readonly internetMaxBandwidthIn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#internet_max_bandwidth_out Instance#internet_max_bandwidth_out}
  */
  readonly internetMaxBandwidthOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#io_optimized Instance#io_optimized}
  */
  readonly ioOptimized?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#ipv6_address_count Instance#ipv6_address_count}
  */
  readonly ipv6AddressCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#ipv6_addresses Instance#ipv6_addresses}
  */
  readonly ipv6Addresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#is_outdated Instance#is_outdated}
  */
  readonly isOutdated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#key_name Instance#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#kms_encrypted_password Instance#kms_encrypted_password}
  */
  readonly kmsEncryptedPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#kms_encryption_context Instance#kms_encryption_context}
  */
  readonly kmsEncryptionContext?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#launch_template_id Instance#launch_template_id}
  */
  readonly launchTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#launch_template_name Instance#launch_template_name}
  */
  readonly launchTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#launch_template_version Instance#launch_template_version}
  */
  readonly launchTemplateVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#maintenance_action Instance#maintenance_action}
  */
  readonly maintenanceAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#maintenance_notify Instance#maintenance_notify}
  */
  readonly maintenanceNotify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#network_card_index Instance#network_card_index}
  */
  readonly networkCardIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#network_interface_traffic_mode Instance#network_interface_traffic_mode}
  */
  readonly networkInterfaceTrafficMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#operator_type Instance#operator_type}
  */
  readonly operatorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#password Instance#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#password_inherit Instance#password_inherit}
  */
  readonly passwordInherit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#period Instance#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#period_unit Instance#period_unit}
  */
  readonly periodUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#private_ip Instance#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#private_pool_options_id Instance#private_pool_options_id}
  */
  readonly privatePoolOptionsId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#private_pool_options_match_criteria Instance#private_pool_options_match_criteria}
  */
  readonly privatePoolOptionsMatchCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#queue_pair_number Instance#queue_pair_number}
  */
  readonly queuePairNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#renewal_status Instance#renewal_status}
  */
  readonly renewalStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#resource_group_id Instance#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#role_name Instance#role_name}
  */
  readonly roleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#secondary_private_ip_address_count Instance#secondary_private_ip_address_count}
  */
  readonly secondaryPrivateIpAddressCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#secondary_private_ips Instance#secondary_private_ips}
  */
  readonly secondaryPrivateIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#security_enhancement_strategy Instance#security_enhancement_strategy}
  */
  readonly securityEnhancementStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#security_groups Instance#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#spot_duration Instance#spot_duration}
  */
  readonly spotDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#spot_price_limit Instance#spot_price_limit}
  */
  readonly spotPriceLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#spot_strategy Instance#spot_strategy}
  */
  readonly spotStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#status Instance#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#stopped_mode Instance#stopped_mode}
  */
  readonly stoppedMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#subnet_id Instance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#system_disk_auto_snapshot_policy_id Instance#system_disk_auto_snapshot_policy_id}
  */
  readonly systemDiskAutoSnapshotPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#system_disk_bursting_enabled Instance#system_disk_bursting_enabled}
  */
  readonly systemDiskBurstingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#system_disk_category Instance#system_disk_category}
  */
  readonly systemDiskCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#system_disk_description Instance#system_disk_description}
  */
  readonly systemDiskDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#system_disk_encrypt_algorithm Instance#system_disk_encrypt_algorithm}
  */
  readonly systemDiskEncryptAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#system_disk_encrypted Instance#system_disk_encrypted}
  */
  readonly systemDiskEncrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#system_disk_kms_key_id Instance#system_disk_kms_key_id}
  */
  readonly systemDiskKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#system_disk_name Instance#system_disk_name}
  */
  readonly systemDiskName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#system_disk_performance_level Instance#system_disk_performance_level}
  */
  readonly systemDiskPerformanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#system_disk_provisioned_iops Instance#system_disk_provisioned_iops}
  */
  readonly systemDiskProvisionedIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#system_disk_size Instance#system_disk_size}
  */
  readonly systemDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#system_disk_storage_cluster_id Instance#system_disk_storage_cluster_id}
  */
  readonly systemDiskStorageClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#tags Instance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#user_data Instance#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#volume_tags Instance#volume_tags}
  */
  readonly volumeTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#vpc_id Instance#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#vswitch_id Instance#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * data_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#data_disks Instance#data_disks}
  */
  readonly dataDisks?: InstanceDataDisks[] | cdktf.IResolvable;
  /**
  * image_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#image_options Instance#image_options}
  */
  readonly imageOptions?: InstanceImageOptions;
  /**
  * maintenance_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#maintenance_time Instance#maintenance_time}
  */
  readonly maintenanceTime?: InstanceMaintenanceTime;
  /**
  * network_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#network_interfaces Instance#network_interfaces}
  */
  readonly networkInterfaces?: InstanceNetworkInterfaces[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#timeouts Instance#timeouts}
  */
  readonly timeouts?: InstanceTimeouts;
}
export interface InstanceDataDisks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#auto_snapshot_policy_id Instance#auto_snapshot_policy_id}
  */
  readonly autoSnapshotPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#bursting_enabled Instance#bursting_enabled}
  */
  readonly burstingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#category Instance#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#delete_with_instance Instance#delete_with_instance}
  */
  readonly deleteWithInstance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#description Instance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#device Instance#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#encrypted Instance#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#kms_key_id Instance#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#name Instance#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#performance_level Instance#performance_level}
  */
  readonly performanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#provisioned_iops Instance#provisioned_iops}
  */
  readonly provisionedIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#size Instance#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#snapshot_id Instance#snapshot_id}
  */
  readonly snapshotId?: string;
}

export function instanceDataDisksToTerraform(struct?: InstanceDataDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_snapshot_policy_id: cdktf.stringToTerraform(struct!.autoSnapshotPolicyId),
    bursting_enabled: cdktf.booleanToTerraform(struct!.burstingEnabled),
    category: cdktf.stringToTerraform(struct!.category),
    delete_with_instance: cdktf.booleanToTerraform(struct!.deleteWithInstance),
    description: cdktf.stringToTerraform(struct!.description),
    device: cdktf.stringToTerraform(struct!.device),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    name: cdktf.stringToTerraform(struct!.name),
    performance_level: cdktf.stringToTerraform(struct!.performanceLevel),
    provisioned_iops: cdktf.numberToTerraform(struct!.provisionedIops),
    size: cdktf.numberToTerraform(struct!.size),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
  }
}


export function instanceDataDisksToHclTerraform(struct?: InstanceDataDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    delete_with_instance: {
      value: cdktf.booleanToHclTerraform(struct!.deleteWithInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
      value: cdktf.booleanToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
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

export class InstanceDataDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceDataDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._deleteWithInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteWithInstance = this._deleteWithInstance;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
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

  public set internalValue(value: InstanceDataDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoSnapshotPolicyId = undefined;
      this._burstingEnabled = undefined;
      this._category = undefined;
      this._deleteWithInstance = undefined;
      this._description = undefined;
      this._device = undefined;
      this._encrypted = undefined;
      this._kmsKeyId = undefined;
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
      this._autoSnapshotPolicyId = value.autoSnapshotPolicyId;
      this._burstingEnabled = value.burstingEnabled;
      this._category = value.category;
      this._deleteWithInstance = value.deleteWithInstance;
      this._description = value.description;
      this._device = value.device;
      this._encrypted = value.encrypted;
      this._kmsKeyId = value.kmsKeyId;
      this._name = value.name;
      this._performanceLevel = value.performanceLevel;
      this._provisionedIops = value.provisionedIops;
      this._size = value.size;
      this._snapshotId = value.snapshotId;
    }
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

  // delete_with_instance - computed: false, optional: true, required: false
  private _deleteWithInstance?: boolean | cdktf.IResolvable; 
  public get deleteWithInstance() {
    return this.getBooleanAttribute('delete_with_instance');
  }
  public set deleteWithInstance(value: boolean | cdktf.IResolvable) {
    this._deleteWithInstance = value;
  }
  public resetDeleteWithInstance() {
    this._deleteWithInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteWithInstanceInput() {
    return this._deleteWithInstance;
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
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
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

  // performance_level - computed: true, optional: true, required: false
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

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
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

export class InstanceDataDisksList extends cdktf.ComplexList {
  public internalValue? : InstanceDataDisks[] | cdktf.IResolvable

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
  public get(index: number): InstanceDataDisksOutputReference {
    return new InstanceDataDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceImageOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#login_as_non_root Instance#login_as_non_root}
  */
  readonly loginAsNonRoot?: boolean | cdktf.IResolvable;
}

export function instanceImageOptionsToTerraform(struct?: InstanceImageOptionsOutputReference | InstanceImageOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    login_as_non_root: cdktf.booleanToTerraform(struct!.loginAsNonRoot),
  }
}


export function instanceImageOptionsToHclTerraform(struct?: InstanceImageOptionsOutputReference | InstanceImageOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    login_as_non_root: {
      value: cdktf.booleanToHclTerraform(struct!.loginAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceImageOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceImageOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loginAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginAsNonRoot = this._loginAsNonRoot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceImageOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loginAsNonRoot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loginAsNonRoot = value.loginAsNonRoot;
    }
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
}
export interface InstanceMaintenanceTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#end_time Instance#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#start_time Instance#start_time}
  */
  readonly startTime?: string;
}

export function instanceMaintenanceTimeToTerraform(struct?: InstanceMaintenanceTimeOutputReference | InstanceMaintenanceTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function instanceMaintenanceTimeToHclTerraform(struct?: InstanceMaintenanceTimeOutputReference | InstanceMaintenanceTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceMaintenanceTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceMaintenanceTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceMaintenanceTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface InstanceNetworkInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#network_card_index Instance#network_card_index}
  */
  readonly networkCardIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#network_interface_id Instance#network_interface_id}
  */
  readonly networkInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#network_interface_traffic_mode Instance#network_interface_traffic_mode}
  */
  readonly networkInterfaceTrafficMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#queue_pair_number Instance#queue_pair_number}
  */
  readonly queuePairNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#security_group_ids Instance#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#vswitch_id Instance#vswitch_id}
  */
  readonly vswitchId?: string;
}

export function instanceNetworkInterfacesToTerraform(struct?: InstanceNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_card_index: cdktf.numberToTerraform(struct!.networkCardIndex),
    network_interface_id: cdktf.stringToTerraform(struct!.networkInterfaceId),
    network_interface_traffic_mode: cdktf.stringToTerraform(struct!.networkInterfaceTrafficMode),
    queue_pair_number: cdktf.numberToTerraform(struct!.queuePairNumber),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    vswitch_id: cdktf.stringToTerraform(struct!.vswitchId),
  }
}


export function instanceNetworkInterfacesToHclTerraform(struct?: InstanceNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_card_index: {
      value: cdktf.numberToHclTerraform(struct!.networkCardIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_interface_id: {
      value: cdktf.stringToHclTerraform(struct!.networkInterfaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_interface_traffic_mode: {
      value: cdktf.stringToHclTerraform(struct!.networkInterfaceTrafficMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_pair_number: {
      value: cdktf.numberToHclTerraform(struct!.queuePairNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vswitch_id: {
      value: cdktf.stringToHclTerraform(struct!.vswitchId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceNetworkInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceNetworkInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkCardIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkCardIndex = this._networkCardIndex;
    }
    if (this._networkInterfaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaceId = this._networkInterfaceId;
    }
    if (this._networkInterfaceTrafficMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaceTrafficMode = this._networkInterfaceTrafficMode;
    }
    if (this._queuePairNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.queuePairNumber = this._queuePairNumber;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._vswitchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vswitchId = this._vswitchId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceNetworkInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkCardIndex = undefined;
      this._networkInterfaceId = undefined;
      this._networkInterfaceTrafficMode = undefined;
      this._queuePairNumber = undefined;
      this._securityGroupIds = undefined;
      this._vswitchId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkCardIndex = value.networkCardIndex;
      this._networkInterfaceId = value.networkInterfaceId;
      this._networkInterfaceTrafficMode = value.networkInterfaceTrafficMode;
      this._queuePairNumber = value.queuePairNumber;
      this._securityGroupIds = value.securityGroupIds;
      this._vswitchId = value.vswitchId;
    }
  }

  // network_card_index - computed: true, optional: true, required: false
  private _networkCardIndex?: number; 
  public get networkCardIndex() {
    return this.getNumberAttribute('network_card_index');
  }
  public set networkCardIndex(value: number) {
    this._networkCardIndex = value;
  }
  public resetNetworkCardIndex() {
    this._networkCardIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkCardIndexInput() {
    return this._networkCardIndex;
  }

  // network_interface_id - computed: true, optional: true, required: false
  private _networkInterfaceId?: string; 
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  public resetNetworkInterfaceId() {
    this._networkInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId;
  }

  // network_interface_traffic_mode - computed: true, optional: true, required: false
  private _networkInterfaceTrafficMode?: string; 
  public get networkInterfaceTrafficMode() {
    return this.getStringAttribute('network_interface_traffic_mode');
  }
  public set networkInterfaceTrafficMode(value: string) {
    this._networkInterfaceTrafficMode = value;
  }
  public resetNetworkInterfaceTrafficMode() {
    this._networkInterfaceTrafficMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceTrafficModeInput() {
    return this._networkInterfaceTrafficMode;
  }

  // queue_pair_number - computed: true, optional: true, required: false
  private _queuePairNumber?: number; 
  public get queuePairNumber() {
    return this.getNumberAttribute('queue_pair_number');
  }
  public set queuePairNumber(value: number) {
    this._queuePairNumber = value;
  }
  public resetQueuePairNumber() {
    this._queuePairNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queuePairNumberInput() {
    return this._queuePairNumber;
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
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

  // vswitch_id - computed: true, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }
}

export class InstanceNetworkInterfacesList extends cdktf.ComplexList {
  public internalValue? : InstanceNetworkInterfaces[] | cdktf.IResolvable

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
  public get(index: number): InstanceNetworkInterfacesOutputReference {
    return new InstanceNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#create Instance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#delete Instance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#update Instance#update}
  */
  readonly update?: string;
}

export function instanceTimeoutsToTerraform(struct?: InstanceTimeouts | cdktf.IResolvable): any {
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


export function instanceTimeoutsToHclTerraform(struct?: InstanceTimeouts | cdktf.IResolvable): any {
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

export class InstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance alicloud_instance}
*/
export class Instance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Instance to import
  * @param importFromId The id of the existing Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/instance alicloud_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstanceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: InstanceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_instance',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allocatePublicIp = config.allocatePublicIp;
    this._autoReleaseTime = config.autoReleaseTime;
    this._autoRenewPeriod = config.autoRenewPeriod;
    this._availabilityZone = config.availabilityZone;
    this._creditSpecification = config.creditSpecification;
    this._dedicatedHostId = config.dedicatedHostId;
    this._deletionProtection = config.deletionProtection;
    this._deploymentSetId = config.deploymentSetId;
    this._description = config.description;
    this._dryRun = config.dryRun;
    this._enableJumboFrame = config.enableJumboFrame;
    this._forceDelete = config.forceDelete;
    this._hostName = config.hostName;
    this._hpcClusterId = config.hpcClusterId;
    this._httpEndpoint = config.httpEndpoint;
    this._httpPutResponseHopLimit = config.httpPutResponseHopLimit;
    this._httpTokens = config.httpTokens;
    this._id = config.id;
    this._imageId = config.imageId;
    this._includeDataDisks = config.includeDataDisks;
    this._instanceChargeType = config.instanceChargeType;
    this._instanceName = config.instanceName;
    this._instanceType = config.instanceType;
    this._internetChargeType = config.internetChargeType;
    this._internetMaxBandwidthIn = config.internetMaxBandwidthIn;
    this._internetMaxBandwidthOut = config.internetMaxBandwidthOut;
    this._ioOptimized = config.ioOptimized;
    this._ipv6AddressCount = config.ipv6AddressCount;
    this._ipv6Addresses = config.ipv6Addresses;
    this._isOutdated = config.isOutdated;
    this._keyName = config.keyName;
    this._kmsEncryptedPassword = config.kmsEncryptedPassword;
    this._kmsEncryptionContext = config.kmsEncryptionContext;
    this._launchTemplateId = config.launchTemplateId;
    this._launchTemplateName = config.launchTemplateName;
    this._launchTemplateVersion = config.launchTemplateVersion;
    this._maintenanceAction = config.maintenanceAction;
    this._maintenanceNotify = config.maintenanceNotify;
    this._networkCardIndex = config.networkCardIndex;
    this._networkInterfaceTrafficMode = config.networkInterfaceTrafficMode;
    this._operatorType = config.operatorType;
    this._password = config.password;
    this._passwordInherit = config.passwordInherit;
    this._period = config.period;
    this._periodUnit = config.periodUnit;
    this._privateIp = config.privateIp;
    this._privatePoolOptionsId = config.privatePoolOptionsId;
    this._privatePoolOptionsMatchCriteria = config.privatePoolOptionsMatchCriteria;
    this._queuePairNumber = config.queuePairNumber;
    this._renewalStatus = config.renewalStatus;
    this._resourceGroupId = config.resourceGroupId;
    this._roleName = config.roleName;
    this._secondaryPrivateIpAddressCount = config.secondaryPrivateIpAddressCount;
    this._secondaryPrivateIps = config.secondaryPrivateIps;
    this._securityEnhancementStrategy = config.securityEnhancementStrategy;
    this._securityGroups = config.securityGroups;
    this._spotDuration = config.spotDuration;
    this._spotPriceLimit = config.spotPriceLimit;
    this._spotStrategy = config.spotStrategy;
    this._status = config.status;
    this._stoppedMode = config.stoppedMode;
    this._subnetId = config.subnetId;
    this._systemDiskAutoSnapshotPolicyId = config.systemDiskAutoSnapshotPolicyId;
    this._systemDiskBurstingEnabled = config.systemDiskBurstingEnabled;
    this._systemDiskCategory = config.systemDiskCategory;
    this._systemDiskDescription = config.systemDiskDescription;
    this._systemDiskEncryptAlgorithm = config.systemDiskEncryptAlgorithm;
    this._systemDiskEncrypted = config.systemDiskEncrypted;
    this._systemDiskKmsKeyId = config.systemDiskKmsKeyId;
    this._systemDiskName = config.systemDiskName;
    this._systemDiskPerformanceLevel = config.systemDiskPerformanceLevel;
    this._systemDiskProvisionedIops = config.systemDiskProvisionedIops;
    this._systemDiskSize = config.systemDiskSize;
    this._systemDiskStorageClusterId = config.systemDiskStorageClusterId;
    this._tags = config.tags;
    this._userData = config.userData;
    this._volumeTags = config.volumeTags;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._dataDisks.internalValue = config.dataDisks;
    this._imageOptions.internalValue = config.imageOptions;
    this._maintenanceTime.internalValue = config.maintenanceTime;
    this._networkInterfaces.internalValue = config.networkInterfaces;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocate_public_ip - computed: false, optional: true, required: false
  private _allocatePublicIp?: boolean | cdktf.IResolvable; 
  public get allocatePublicIp() {
    return this.getBooleanAttribute('allocate_public_ip');
  }
  public set allocatePublicIp(value: boolean | cdktf.IResolvable) {
    this._allocatePublicIp = value;
  }
  public resetAllocatePublicIp() {
    this._allocatePublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatePublicIpInput() {
    return this._allocatePublicIp;
  }

  // auto_release_time - computed: false, optional: true, required: false
  private _autoReleaseTime?: string; 
  public get autoReleaseTime() {
    return this.getStringAttribute('auto_release_time');
  }
  public set autoReleaseTime(value: string) {
    this._autoReleaseTime = value;
  }
  public resetAutoReleaseTime() {
    this._autoReleaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoReleaseTimeInput() {
    return this._autoReleaseTime;
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

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // credit_specification - computed: true, optional: true, required: false
  private _creditSpecification?: string; 
  public get creditSpecification() {
    return this.getStringAttribute('credit_specification');
  }
  public set creditSpecification(value: string) {
    this._creditSpecification = value;
  }
  public resetCreditSpecification() {
    this._creditSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creditSpecificationInput() {
    return this._creditSpecification;
  }

  // dedicated_host_id - computed: false, optional: true, required: false
  private _dedicatedHostId?: string; 
  public get dedicatedHostId() {
    return this.getStringAttribute('dedicated_host_id');
  }
  public set dedicatedHostId(value: string) {
    this._dedicatedHostId = value;
  }
  public resetDedicatedHostId() {
    this._dedicatedHostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedHostIdInput() {
    return this._dedicatedHostId;
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // deployment_set_group_no - computed: true, optional: false, required: false
  public get deploymentSetGroupNo() {
    return this.getStringAttribute('deployment_set_group_no');
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

  // description - computed: true, optional: true, required: false
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

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // enable_jumbo_frame - computed: true, optional: true, required: false
  private _enableJumboFrame?: boolean | cdktf.IResolvable; 
  public get enableJumboFrame() {
    return this.getBooleanAttribute('enable_jumbo_frame');
  }
  public set enableJumboFrame(value: boolean | cdktf.IResolvable) {
    this._enableJumboFrame = value;
  }
  public resetEnableJumboFrame() {
    this._enableJumboFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableJumboFrameInput() {
    return this._enableJumboFrame;
  }

  // expired_time - computed: true, optional: false, required: false
  public get expiredTime() {
    return this.getStringAttribute('expired_time');
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

  // host_name - computed: true, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // hpc_cluster_id - computed: false, optional: true, required: false
  private _hpcClusterId?: string; 
  public get hpcClusterId() {
    return this.getStringAttribute('hpc_cluster_id');
  }
  public set hpcClusterId(value: string) {
    this._hpcClusterId = value;
  }
  public resetHpcClusterId() {
    this._hpcClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpcClusterIdInput() {
    return this._hpcClusterId;
  }

  // http_endpoint - computed: true, optional: true, required: false
  private _httpEndpoint?: string; 
  public get httpEndpoint() {
    return this.getStringAttribute('http_endpoint');
  }
  public set httpEndpoint(value: string) {
    this._httpEndpoint = value;
  }
  public resetHttpEndpoint() {
    this._httpEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpEndpointInput() {
    return this._httpEndpoint;
  }

  // http_put_response_hop_limit - computed: true, optional: true, required: false
  private _httpPutResponseHopLimit?: number; 
  public get httpPutResponseHopLimit() {
    return this.getNumberAttribute('http_put_response_hop_limit');
  }
  public set httpPutResponseHopLimit(value: number) {
    this._httpPutResponseHopLimit = value;
  }
  public resetHttpPutResponseHopLimit() {
    this._httpPutResponseHopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPutResponseHopLimitInput() {
    return this._httpPutResponseHopLimit;
  }

  // http_tokens - computed: true, optional: true, required: false
  private _httpTokens?: string; 
  public get httpTokens() {
    return this.getStringAttribute('http_tokens');
  }
  public set httpTokens(value: string) {
    this._httpTokens = value;
  }
  public resetHttpTokens() {
    this._httpTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTokensInput() {
    return this._httpTokens;
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

  // include_data_disks - computed: false, optional: true, required: false
  private _includeDataDisks?: boolean | cdktf.IResolvable; 
  public get includeDataDisks() {
    return this.getBooleanAttribute('include_data_disks');
  }
  public set includeDataDisks(value: boolean | cdktf.IResolvable) {
    this._includeDataDisks = value;
  }
  public resetIncludeDataDisks() {
    this._includeDataDisks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDataDisksInput() {
    return this._includeDataDisks;
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

  // instance_name - computed: true, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // instance_type - computed: true, optional: true, required: false
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

  // internet_charge_type - computed: true, optional: true, required: false
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

  // internet_max_bandwidth_in - computed: true, optional: true, required: false
  private _internetMaxBandwidthIn?: number; 
  public get internetMaxBandwidthIn() {
    return this.getNumberAttribute('internet_max_bandwidth_in');
  }
  public set internetMaxBandwidthIn(value: number) {
    this._internetMaxBandwidthIn = value;
  }
  public resetInternetMaxBandwidthIn() {
    this._internetMaxBandwidthIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetMaxBandwidthInInput() {
    return this._internetMaxBandwidthIn;
  }

  // internet_max_bandwidth_out - computed: true, optional: true, required: false
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

  // io_optimized - computed: true, optional: true, required: false
  private _ioOptimized?: string; 
  public get ioOptimized() {
    return this.getStringAttribute('io_optimized');
  }
  public set ioOptimized(value: string) {
    this._ioOptimized = value;
  }
  public resetIoOptimized() {
    this._ioOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioOptimizedInput() {
    return this._ioOptimized;
  }

  // ipv6_address_count - computed: true, optional: true, required: false
  private _ipv6AddressCount?: number; 
  public get ipv6AddressCount() {
    return this.getNumberAttribute('ipv6_address_count');
  }
  public set ipv6AddressCount(value: number) {
    this._ipv6AddressCount = value;
  }
  public resetIpv6AddressCount() {
    this._ipv6AddressCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressCountInput() {
    return this._ipv6AddressCount;
  }

  // ipv6_addresses - computed: true, optional: true, required: false
  private _ipv6Addresses?: string[]; 
  public get ipv6Addresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6_addresses'));
  }
  public set ipv6Addresses(value: string[]) {
    this._ipv6Addresses = value;
  }
  public resetIpv6Addresses() {
    this._ipv6Addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressesInput() {
    return this._ipv6Addresses;
  }

  // is_outdated - computed: false, optional: true, required: false
  private _isOutdated?: boolean | cdktf.IResolvable; 
  public get isOutdated() {
    return this.getBooleanAttribute('is_outdated');
  }
  public set isOutdated(value: boolean | cdktf.IResolvable) {
    this._isOutdated = value;
  }
  public resetIsOutdated() {
    this._isOutdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOutdatedInput() {
    return this._isOutdated;
  }

  // key_name - computed: true, optional: true, required: false
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

  // launch_template_id - computed: false, optional: true, required: false
  private _launchTemplateId?: string; 
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }
  public set launchTemplateId(value: string) {
    this._launchTemplateId = value;
  }
  public resetLaunchTemplateId() {
    this._launchTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateIdInput() {
    return this._launchTemplateId;
  }

  // launch_template_name - computed: false, optional: true, required: false
  private _launchTemplateName?: string; 
  public get launchTemplateName() {
    return this.getStringAttribute('launch_template_name');
  }
  public set launchTemplateName(value: string) {
    this._launchTemplateName = value;
  }
  public resetLaunchTemplateName() {
    this._launchTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateNameInput() {
    return this._launchTemplateName;
  }

  // launch_template_version - computed: false, optional: true, required: false
  private _launchTemplateVersion?: string; 
  public get launchTemplateVersion() {
    return this.getStringAttribute('launch_template_version');
  }
  public set launchTemplateVersion(value: string) {
    this._launchTemplateVersion = value;
  }
  public resetLaunchTemplateVersion() {
    this._launchTemplateVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateVersionInput() {
    return this._launchTemplateVersion;
  }

  // maintenance_action - computed: true, optional: true, required: false
  private _maintenanceAction?: string; 
  public get maintenanceAction() {
    return this.getStringAttribute('maintenance_action');
  }
  public set maintenanceAction(value: string) {
    this._maintenanceAction = value;
  }
  public resetMaintenanceAction() {
    this._maintenanceAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceActionInput() {
    return this._maintenanceAction;
  }

  // maintenance_notify - computed: false, optional: true, required: false
  private _maintenanceNotify?: boolean | cdktf.IResolvable; 
  public get maintenanceNotify() {
    return this.getBooleanAttribute('maintenance_notify');
  }
  public set maintenanceNotify(value: boolean | cdktf.IResolvable) {
    this._maintenanceNotify = value;
  }
  public resetMaintenanceNotify() {
    this._maintenanceNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceNotifyInput() {
    return this._maintenanceNotify;
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // network_card_index - computed: false, optional: true, required: false
  private _networkCardIndex?: number; 
  public get networkCardIndex() {
    return this.getNumberAttribute('network_card_index');
  }
  public set networkCardIndex(value: number) {
    this._networkCardIndex = value;
  }
  public resetNetworkCardIndex() {
    this._networkCardIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkCardIndexInput() {
    return this._networkCardIndex;
  }

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // network_interface_traffic_mode - computed: true, optional: true, required: false
  private _networkInterfaceTrafficMode?: string; 
  public get networkInterfaceTrafficMode() {
    return this.getStringAttribute('network_interface_traffic_mode');
  }
  public set networkInterfaceTrafficMode(value: string) {
    this._networkInterfaceTrafficMode = value;
  }
  public resetNetworkInterfaceTrafficMode() {
    this._networkInterfaceTrafficMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceTrafficModeInput() {
    return this._networkInterfaceTrafficMode;
  }

  // operator_type - computed: false, optional: true, required: false
  private _operatorType?: string; 
  public get operatorType() {
    return this.getStringAttribute('operator_type');
  }
  public set operatorType(value: string) {
    this._operatorType = value;
  }
  public resetOperatorType() {
    this._operatorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorTypeInput() {
    return this._operatorType;
  }

  // os_name - computed: true, optional: false, required: false
  public get osName() {
    return this.getStringAttribute('os_name');
  }

  // os_type - computed: true, optional: false, required: false
  public get osType() {
    return this.getStringAttribute('os_type');
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

  // password_inherit - computed: false, optional: true, required: false
  private _passwordInherit?: boolean | cdktf.IResolvable; 
  public get passwordInherit() {
    return this.getBooleanAttribute('password_inherit');
  }
  public set passwordInherit(value: boolean | cdktf.IResolvable) {
    this._passwordInherit = value;
  }
  public resetPasswordInherit() {
    this._passwordInherit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInheritInput() {
    return this._passwordInherit;
  }

  // period - computed: true, optional: true, required: false
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

  // primary_ip_address - computed: true, optional: false, required: false
  public get primaryIpAddress() {
    return this.getStringAttribute('primary_ip_address');
  }

  // private_ip - computed: true, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // private_pool_options_id - computed: true, optional: true, required: false
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

  // private_pool_options_match_criteria - computed: true, optional: true, required: false
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

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // queue_pair_number - computed: false, optional: true, required: false
  private _queuePairNumber?: number; 
  public get queuePairNumber() {
    return this.getNumberAttribute('queue_pair_number');
  }
  public set queuePairNumber(value: number) {
    this._queuePairNumber = value;
  }
  public resetQueuePairNumber() {
    this._queuePairNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queuePairNumberInput() {
    return this._queuePairNumber;
  }

  // renewal_status - computed: false, optional: true, required: false
  private _renewalStatus?: string; 
  public get renewalStatus() {
    return this.getStringAttribute('renewal_status');
  }
  public set renewalStatus(value: string) {
    this._renewalStatus = value;
  }
  public resetRenewalStatus() {
    this._renewalStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewalStatusInput() {
    return this._renewalStatus;
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

  // role_name - computed: true, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // secondary_private_ip_address_count - computed: true, optional: true, required: false
  private _secondaryPrivateIpAddressCount?: number; 
  public get secondaryPrivateIpAddressCount() {
    return this.getNumberAttribute('secondary_private_ip_address_count');
  }
  public set secondaryPrivateIpAddressCount(value: number) {
    this._secondaryPrivateIpAddressCount = value;
  }
  public resetSecondaryPrivateIpAddressCount() {
    this._secondaryPrivateIpAddressCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPrivateIpAddressCountInput() {
    return this._secondaryPrivateIpAddressCount;
  }

  // secondary_private_ips - computed: true, optional: true, required: false
  private _secondaryPrivateIps?: string[]; 
  public get secondaryPrivateIps() {
    return cdktf.Fn.tolist(this.getListAttribute('secondary_private_ips'));
  }
  public set secondaryPrivateIps(value: string[]) {
    this._secondaryPrivateIps = value;
  }
  public resetSecondaryPrivateIps() {
    this._secondaryPrivateIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPrivateIpsInput() {
    return this._secondaryPrivateIps;
  }

  // security_enhancement_strategy - computed: true, optional: true, required: false
  private _securityEnhancementStrategy?: string; 
  public get securityEnhancementStrategy() {
    return this.getStringAttribute('security_enhancement_strategy');
  }
  public set securityEnhancementStrategy(value: string) {
    this._securityEnhancementStrategy = value;
  }
  public resetSecurityEnhancementStrategy() {
    this._securityEnhancementStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityEnhancementStrategyInput() {
    return this._securityEnhancementStrategy;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // spot_duration - computed: true, optional: true, required: false
  private _spotDuration?: number; 
  public get spotDuration() {
    return this.getNumberAttribute('spot_duration');
  }
  public set spotDuration(value: number) {
    this._spotDuration = value;
  }
  public resetSpotDuration() {
    this._spotDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotDurationInput() {
    return this._spotDuration;
  }

  // spot_price_limit - computed: true, optional: true, required: false
  private _spotPriceLimit?: number; 
  public get spotPriceLimit() {
    return this.getNumberAttribute('spot_price_limit');
  }
  public set spotPriceLimit(value: number) {
    this._spotPriceLimit = value;
  }
  public resetSpotPriceLimit() {
    this._spotPriceLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotPriceLimitInput() {
    return this._spotPriceLimit;
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

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // status - computed: true, optional: true, required: false
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

  // stopped_mode - computed: true, optional: true, required: false
  private _stoppedMode?: string; 
  public get stoppedMode() {
    return this.getStringAttribute('stopped_mode');
  }
  public set stoppedMode(value: string) {
    this._stoppedMode = value;
  }
  public resetStoppedMode() {
    this._stoppedMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stoppedModeInput() {
    return this._stoppedMode;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // system_disk_auto_snapshot_policy_id - computed: false, optional: true, required: false
  private _systemDiskAutoSnapshotPolicyId?: string; 
  public get systemDiskAutoSnapshotPolicyId() {
    return this.getStringAttribute('system_disk_auto_snapshot_policy_id');
  }
  public set systemDiskAutoSnapshotPolicyId(value: string) {
    this._systemDiskAutoSnapshotPolicyId = value;
  }
  public resetSystemDiskAutoSnapshotPolicyId() {
    this._systemDiskAutoSnapshotPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskAutoSnapshotPolicyIdInput() {
    return this._systemDiskAutoSnapshotPolicyId;
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

  // system_disk_description - computed: true, optional: true, required: false
  private _systemDiskDescription?: string; 
  public get systemDiskDescription() {
    return this.getStringAttribute('system_disk_description');
  }
  public set systemDiskDescription(value: string) {
    this._systemDiskDescription = value;
  }
  public resetSystemDiskDescription() {
    this._systemDiskDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskDescriptionInput() {
    return this._systemDiskDescription;
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

  // system_disk_encrypted - computed: true, optional: true, required: false
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

  // system_disk_id - computed: true, optional: false, required: false
  public get systemDiskId() {
    return this.getStringAttribute('system_disk_id');
  }

  // system_disk_kms_key_id - computed: true, optional: true, required: false
  private _systemDiskKmsKeyId?: string; 
  public get systemDiskKmsKeyId() {
    return this.getStringAttribute('system_disk_kms_key_id');
  }
  public set systemDiskKmsKeyId(value: string) {
    this._systemDiskKmsKeyId = value;
  }
  public resetSystemDiskKmsKeyId() {
    this._systemDiskKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskKmsKeyIdInput() {
    return this._systemDiskKmsKeyId;
  }

  // system_disk_name - computed: true, optional: true, required: false
  private _systemDiskName?: string; 
  public get systemDiskName() {
    return this.getStringAttribute('system_disk_name');
  }
  public set systemDiskName(value: string) {
    this._systemDiskName = value;
  }
  public resetSystemDiskName() {
    this._systemDiskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskNameInput() {
    return this._systemDiskName;
  }

  // system_disk_performance_level - computed: true, optional: true, required: false
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

  // system_disk_size - computed: true, optional: true, required: false
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

  // system_disk_storage_cluster_id - computed: false, optional: true, required: false
  private _systemDiskStorageClusterId?: string; 
  public get systemDiskStorageClusterId() {
    return this.getStringAttribute('system_disk_storage_cluster_id');
  }
  public set systemDiskStorageClusterId(value: string) {
    this._systemDiskStorageClusterId = value;
  }
  public resetSystemDiskStorageClusterId() {
    this._systemDiskStorageClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskStorageClusterIdInput() {
    return this._systemDiskStorageClusterId;
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

  // volume_tags - computed: true, optional: true, required: false
  private _volumeTags?: { [key: string]: string }; 
  public get volumeTags() {
    return this.getStringMapAttribute('volume_tags');
  }
  public set volumeTags(value: { [key: string]: string }) {
    this._volumeTags = value;
  }
  public resetVolumeTags() {
    this._volumeTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTagsInput() {
    return this._volumeTags;
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vswitch_id - computed: true, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // data_disks - computed: false, optional: true, required: false
  private _dataDisks = new InstanceDataDisksList(this, "data_disks", false);
  public get dataDisks() {
    return this._dataDisks;
  }
  public putDataDisks(value: InstanceDataDisks[] | cdktf.IResolvable) {
    this._dataDisks.internalValue = value;
  }
  public resetDataDisks() {
    this._dataDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDisksInput() {
    return this._dataDisks.internalValue;
  }

  // image_options - computed: false, optional: true, required: false
  private _imageOptions = new InstanceImageOptionsOutputReference(this, "image_options");
  public get imageOptions() {
    return this._imageOptions;
  }
  public putImageOptions(value: InstanceImageOptions) {
    this._imageOptions.internalValue = value;
  }
  public resetImageOptions() {
    this._imageOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageOptionsInput() {
    return this._imageOptions.internalValue;
  }

  // maintenance_time - computed: false, optional: true, required: false
  private _maintenanceTime = new InstanceMaintenanceTimeOutputReference(this, "maintenance_time");
  public get maintenanceTime() {
    return this._maintenanceTime;
  }
  public putMaintenanceTime(value: InstanceMaintenanceTime) {
    this._maintenanceTime.internalValue = value;
  }
  public resetMaintenanceTime() {
    this._maintenanceTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceTimeInput() {
    return this._maintenanceTime.internalValue;
  }

  // network_interfaces - computed: false, optional: true, required: false
  private _networkInterfaces = new InstanceNetworkInterfacesList(this, "network_interfaces", false);
  public get networkInterfaces() {
    return this._networkInterfaces;
  }
  public putNetworkInterfaces(value: InstanceNetworkInterfaces[] | cdktf.IResolvable) {
    this._networkInterfaces.internalValue = value;
  }
  public resetNetworkInterfaces() {
    this._networkInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfacesInput() {
    return this._networkInterfaces.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new InstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: InstanceTimeouts) {
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
      allocate_public_ip: cdktf.booleanToTerraform(this._allocatePublicIp),
      auto_release_time: cdktf.stringToTerraform(this._autoReleaseTime),
      auto_renew_period: cdktf.numberToTerraform(this._autoRenewPeriod),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      credit_specification: cdktf.stringToTerraform(this._creditSpecification),
      dedicated_host_id: cdktf.stringToTerraform(this._dedicatedHostId),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      deployment_set_id: cdktf.stringToTerraform(this._deploymentSetId),
      description: cdktf.stringToTerraform(this._description),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      enable_jumbo_frame: cdktf.booleanToTerraform(this._enableJumboFrame),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      host_name: cdktf.stringToTerraform(this._hostName),
      hpc_cluster_id: cdktf.stringToTerraform(this._hpcClusterId),
      http_endpoint: cdktf.stringToTerraform(this._httpEndpoint),
      http_put_response_hop_limit: cdktf.numberToTerraform(this._httpPutResponseHopLimit),
      http_tokens: cdktf.stringToTerraform(this._httpTokens),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      include_data_disks: cdktf.booleanToTerraform(this._includeDataDisks),
      instance_charge_type: cdktf.stringToTerraform(this._instanceChargeType),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      internet_charge_type: cdktf.stringToTerraform(this._internetChargeType),
      internet_max_bandwidth_in: cdktf.numberToTerraform(this._internetMaxBandwidthIn),
      internet_max_bandwidth_out: cdktf.numberToTerraform(this._internetMaxBandwidthOut),
      io_optimized: cdktf.stringToTerraform(this._ioOptimized),
      ipv6_address_count: cdktf.numberToTerraform(this._ipv6AddressCount),
      ipv6_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6Addresses),
      is_outdated: cdktf.booleanToTerraform(this._isOutdated),
      key_name: cdktf.stringToTerraform(this._keyName),
      kms_encrypted_password: cdktf.stringToTerraform(this._kmsEncryptedPassword),
      kms_encryption_context: cdktf.hashMapper(cdktf.stringToTerraform)(this._kmsEncryptionContext),
      launch_template_id: cdktf.stringToTerraform(this._launchTemplateId),
      launch_template_name: cdktf.stringToTerraform(this._launchTemplateName),
      launch_template_version: cdktf.stringToTerraform(this._launchTemplateVersion),
      maintenance_action: cdktf.stringToTerraform(this._maintenanceAction),
      maintenance_notify: cdktf.booleanToTerraform(this._maintenanceNotify),
      network_card_index: cdktf.numberToTerraform(this._networkCardIndex),
      network_interface_traffic_mode: cdktf.stringToTerraform(this._networkInterfaceTrafficMode),
      operator_type: cdktf.stringToTerraform(this._operatorType),
      password: cdktf.stringToTerraform(this._password),
      password_inherit: cdktf.booleanToTerraform(this._passwordInherit),
      period: cdktf.numberToTerraform(this._period),
      period_unit: cdktf.stringToTerraform(this._periodUnit),
      private_ip: cdktf.stringToTerraform(this._privateIp),
      private_pool_options_id: cdktf.stringToTerraform(this._privatePoolOptionsId),
      private_pool_options_match_criteria: cdktf.stringToTerraform(this._privatePoolOptionsMatchCriteria),
      queue_pair_number: cdktf.numberToTerraform(this._queuePairNumber),
      renewal_status: cdktf.stringToTerraform(this._renewalStatus),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      role_name: cdktf.stringToTerraform(this._roleName),
      secondary_private_ip_address_count: cdktf.numberToTerraform(this._secondaryPrivateIpAddressCount),
      secondary_private_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secondaryPrivateIps),
      security_enhancement_strategy: cdktf.stringToTerraform(this._securityEnhancementStrategy),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      spot_duration: cdktf.numberToTerraform(this._spotDuration),
      spot_price_limit: cdktf.numberToTerraform(this._spotPriceLimit),
      spot_strategy: cdktf.stringToTerraform(this._spotStrategy),
      status: cdktf.stringToTerraform(this._status),
      stopped_mode: cdktf.stringToTerraform(this._stoppedMode),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      system_disk_auto_snapshot_policy_id: cdktf.stringToTerraform(this._systemDiskAutoSnapshotPolicyId),
      system_disk_bursting_enabled: cdktf.booleanToTerraform(this._systemDiskBurstingEnabled),
      system_disk_category: cdktf.stringToTerraform(this._systemDiskCategory),
      system_disk_description: cdktf.stringToTerraform(this._systemDiskDescription),
      system_disk_encrypt_algorithm: cdktf.stringToTerraform(this._systemDiskEncryptAlgorithm),
      system_disk_encrypted: cdktf.booleanToTerraform(this._systemDiskEncrypted),
      system_disk_kms_key_id: cdktf.stringToTerraform(this._systemDiskKmsKeyId),
      system_disk_name: cdktf.stringToTerraform(this._systemDiskName),
      system_disk_performance_level: cdktf.stringToTerraform(this._systemDiskPerformanceLevel),
      system_disk_provisioned_iops: cdktf.numberToTerraform(this._systemDiskProvisionedIops),
      system_disk_size: cdktf.numberToTerraform(this._systemDiskSize),
      system_disk_storage_cluster_id: cdktf.stringToTerraform(this._systemDiskStorageClusterId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      user_data: cdktf.stringToTerraform(this._userData),
      volume_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._volumeTags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      data_disks: cdktf.listMapper(instanceDataDisksToTerraform, true)(this._dataDisks.internalValue),
      image_options: instanceImageOptionsToTerraform(this._imageOptions.internalValue),
      maintenance_time: instanceMaintenanceTimeToTerraform(this._maintenanceTime.internalValue),
      network_interfaces: cdktf.listMapper(instanceNetworkInterfacesToTerraform, true)(this._networkInterfaces.internalValue),
      timeouts: instanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocate_public_ip: {
        value: cdktf.booleanToHclTerraform(this._allocatePublicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_release_time: {
        value: cdktf.stringToHclTerraform(this._autoReleaseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_renew_period: {
        value: cdktf.numberToHclTerraform(this._autoRenewPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credit_specification: {
        value: cdktf.stringToHclTerraform(this._creditSpecification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dedicated_host_id: {
        value: cdktf.stringToHclTerraform(this._dedicatedHostId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deployment_set_id: {
        value: cdktf.stringToHclTerraform(this._deploymentSetId),
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
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_jumbo_frame: {
        value: cdktf.booleanToHclTerraform(this._enableJumboFrame),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hpc_cluster_id: {
        value: cdktf.stringToHclTerraform(this._hpcClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_endpoint: {
        value: cdktf.stringToHclTerraform(this._httpEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_put_response_hop_limit: {
        value: cdktf.numberToHclTerraform(this._httpPutResponseHopLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_tokens: {
        value: cdktf.stringToHclTerraform(this._httpTokens),
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
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_data_disks: {
        value: cdktf.booleanToHclTerraform(this._includeDataDisks),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_charge_type: {
        value: cdktf.stringToHclTerraform(this._internetChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_max_bandwidth_in: {
        value: cdktf.numberToHclTerraform(this._internetMaxBandwidthIn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      internet_max_bandwidth_out: {
        value: cdktf.numberToHclTerraform(this._internetMaxBandwidthOut),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      io_optimized: {
        value: cdktf.stringToHclTerraform(this._ioOptimized),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_address_count: {
        value: cdktf.numberToHclTerraform(this._ipv6AddressCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6Addresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      is_outdated: {
        value: cdktf.booleanToHclTerraform(this._isOutdated),
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
      launch_template_id: {
        value: cdktf.stringToHclTerraform(this._launchTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      launch_template_name: {
        value: cdktf.stringToHclTerraform(this._launchTemplateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      launch_template_version: {
        value: cdktf.stringToHclTerraform(this._launchTemplateVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_action: {
        value: cdktf.stringToHclTerraform(this._maintenanceAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_notify: {
        value: cdktf.booleanToHclTerraform(this._maintenanceNotify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_card_index: {
        value: cdktf.numberToHclTerraform(this._networkCardIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      network_interface_traffic_mode: {
        value: cdktf.stringToHclTerraform(this._networkInterfaceTrafficMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operator_type: {
        value: cdktf.stringToHclTerraform(this._operatorType),
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
      password_inherit: {
        value: cdktf.booleanToHclTerraform(this._passwordInherit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      private_ip: {
        value: cdktf.stringToHclTerraform(this._privateIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_pool_options_id: {
        value: cdktf.stringToHclTerraform(this._privatePoolOptionsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_pool_options_match_criteria: {
        value: cdktf.stringToHclTerraform(this._privatePoolOptionsMatchCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_pair_number: {
        value: cdktf.numberToHclTerraform(this._queuePairNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      renewal_status: {
        value: cdktf.stringToHclTerraform(this._renewalStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_private_ip_address_count: {
        value: cdktf.numberToHclTerraform(this._secondaryPrivateIpAddressCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secondary_private_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secondaryPrivateIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      security_enhancement_strategy: {
        value: cdktf.stringToHclTerraform(this._securityEnhancementStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      spot_duration: {
        value: cdktf.numberToHclTerraform(this._spotDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spot_price_limit: {
        value: cdktf.numberToHclTerraform(this._spotPriceLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spot_strategy: {
        value: cdktf.stringToHclTerraform(this._spotStrategy),
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
      stopped_mode: {
        value: cdktf.stringToHclTerraform(this._stoppedMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_disk_auto_snapshot_policy_id: {
        value: cdktf.stringToHclTerraform(this._systemDiskAutoSnapshotPolicyId),
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
      system_disk_category: {
        value: cdktf.stringToHclTerraform(this._systemDiskCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_disk_description: {
        value: cdktf.stringToHclTerraform(this._systemDiskDescription),
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
      system_disk_kms_key_id: {
        value: cdktf.stringToHclTerraform(this._systemDiskKmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_disk_name: {
        value: cdktf.stringToHclTerraform(this._systemDiskName),
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
      system_disk_storage_cluster_id: {
        value: cdktf.stringToHclTerraform(this._systemDiskStorageClusterId),
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
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._volumeTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_disks: {
        value: cdktf.listMapperHcl(instanceDataDisksToHclTerraform, true)(this._dataDisks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceDataDisksList",
      },
      image_options: {
        value: instanceImageOptionsToHclTerraform(this._imageOptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InstanceImageOptionsList",
      },
      maintenance_time: {
        value: instanceMaintenanceTimeToHclTerraform(this._maintenanceTime.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InstanceMaintenanceTimeList",
      },
      network_interfaces: {
        value: cdktf.listMapperHcl(instanceNetworkInterfacesToHclTerraform, true)(this._networkInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceNetworkInterfacesList",
      },
      timeouts: {
        value: instanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
