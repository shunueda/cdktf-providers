// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Associate a public IP address with an instance in a VPC or Classic. Boolean value, Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#allocate_public_ip Instance#allocate_public_ip}
  */
  readonly allocatePublicIp?: boolean | cdktf.IResolvable;
  /**
  * Anti-DDoS service package ID. This is required when you want to request an AntiDDoS IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#anti_ddos_package_id Instance#anti_ddos_package_id}
  */
  readonly antiDdosPackageId?: string;
  /**
  * The available zone for the CVM instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#availability_zone Instance#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * bandwidth package id. if user is standard user, then the bandwidth_package_id is needed, or default has bandwidth_package_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#bandwidth_package_id Instance#bandwidth_package_id}
  */
  readonly bandwidthPackageId?: string;
  /**
  * CAM role name authorized to access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#cam_role_name Instance#cam_role_name}
  */
  readonly camRoleName?: string;
  /**
  * Id of cdh instance. Note: it only works when instance_charge_type is set to `CDHPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#cdh_host_id Instance#cdh_host_id}
  */
  readonly cdhHostId?: string;
  /**
  * Type of instance created on cdh, the value of this parameter is in the format of CDH_XCXG based on the number of CPU cores and memory capacity. Note: it only works when instance_charge_type is set to `CDHPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#cdh_instance_type Instance#cdh_instance_type}
  */
  readonly cdhInstanceType?: string;
  /**
  * Exclusive cluster id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#dedicated_cluster_id Instance#dedicated_cluster_id}
  */
  readonly dedicatedClusterId?: string;
  /**
  * Whether the termination protection is enabled. Default is `false`. If set true, which means that this instance can not be deleted by an API action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#disable_api_termination Instance#disable_api_termination}
  */
  readonly disableApiTermination?: boolean | cdktf.IResolvable;
  /**
  * Disable enhance service for automation, it is enabled by default. When this options is set, monitor agent won't be installed. Modifications may lead to the reinstallation of the instance's operating system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#disable_automation_service Instance#disable_automation_service}
  */
  readonly disableAutomationService?: boolean | cdktf.IResolvable;
  /**
  * Disable enhance service for monitor, it is enabled by default. When this options is set, monitor agent won't be installed. Modifications may lead to the reinstallation of the instance's operating system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#disable_monitor_service Instance#disable_monitor_service}
  */
  readonly disableMonitorService?: boolean | cdktf.IResolvable;
  /**
  * Disable enhance service for security, it is enabled by default. When this options is set, security agent won't be installed. Modifications may lead to the reinstallation of the instance's operating system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#disable_security_service Instance#disable_security_service}
  */
  readonly disableSecurityService?: boolean | cdktf.IResolvable;
  /**
  * Indicate whether to force delete the instance. Default is `false`. If set true, the instance will be permanently deleted instead of being moved into the recycle bin. Note: only works for `PREPAID` instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#force_delete Instance#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Whether to force the instance host to be replaced. Value range: true: Allows the instance to change the host and restart the instance. Local disk machines do not support specifying this parameter; false: Does not allow the instance to change the host and only join the placement group on the current host. This may cause the placement group to fail to change. Only useful for change `placement_group_id`, Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#force_replace_placement_group_id Instance#force_replace_placement_group_id}
  */
  readonly forceReplacePlacementGroupId?: boolean | cdktf.IResolvable;
  /**
  * The hostname of the instance. Windows instance: The name should be a combination of 2 to 15 characters comprised of letters (case insensitive), numbers, and hyphens (-). Period (.) is not supported, and the name cannot be a string of pure numbers. Other types (such as Linux) of instances: The name should be a combination of 2 to 60 characters, supporting multiple periods (.). The piece between two periods is composed of letters (case insensitive), numbers, and hyphens (-). Changing the `hostname` will cause the instance system to restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#hostname Instance#hostname}
  */
  readonly hostname?: string;
  /**
  * High-performance computing cluster ID. If the instance created is a high-performance computing instance, you need to specify the cluster in which the instance is placed, otherwise it cannot be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#hpc_cluster_id Instance#hpc_cluster_id}
  */
  readonly hpcClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#id Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The image to use for the instance. Modifications may lead to the reinstallation of the instance's operating system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#image_id Instance#image_id}
  */
  readonly imageId?: string;
  /**
  * The charge type of instance. Valid values are `PREPAID`, `POSTPAID_BY_HOUR`, `SPOTPAID`, `CDHPAID` and `CDCPAID`. The default is `POSTPAID_BY_HOUR`. Note: TencentCloud International only supports `POSTPAID_BY_HOUR` and `CDHPAID`. `PREPAID` instance may not allow to delete before expired. `SPOTPAID` instance must set `spot_instance_type` and `spot_max_price` at the same time. `CDHPAID` instance must set `cdh_instance_type` and `cdh_host_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#instance_charge_type Instance#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * The tenancy (time unit is month) of the prepaid instance, NOTE: it only works when instance_charge_type is set to `PREPAID`. Valid values are `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `24`, `36`, `48`, `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#instance_charge_type_prepaid_period Instance#instance_charge_type_prepaid_period}
  */
  readonly instanceChargeTypePrepaidPeriod?: number;
  /**
  * Auto renewal flag. Valid values: `NOTIFY_AND_AUTO_RENEW`: notify upon expiration and renew automatically, `NOTIFY_AND_MANUAL_RENEW`: notify upon expiration but do not renew automatically, `DISABLE_NOTIFY_AND_MANUAL_RENEW`: neither notify upon expiration nor renew automatically. Default value: `NOTIFY_AND_MANUAL_RENEW`. If this parameter is specified as `NOTIFY_AND_AUTO_RENEW`, the instance will be automatically renewed on a monthly basis if the account balance is sufficient. NOTE: it only works when instance_charge_type is set to `PREPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#instance_charge_type_prepaid_renew_flag Instance#instance_charge_type_prepaid_renew_flag}
  */
  readonly instanceChargeTypePrepaidRenewFlag?: string;
  /**
  * The name of the instance. The max length of instance_name is 128, and default value is `Terraform-CVM-Instance`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#instance_name Instance#instance_name}
  */
  readonly instanceName?: string;
  /**
  * The type of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#instance_type Instance#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Internet charge type of the instance, Valid values are `BANDWIDTH_PREPAID`, `TRAFFIC_POSTPAID_BY_HOUR`, `BANDWIDTH_POSTPAID_BY_HOUR` and `BANDWIDTH_PACKAGE`. If not set, internet charge type are consistent with the cvm charge type by default. This value takes NO Effect when changing and does not need to be set when `allocate_public_ip` is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#internet_charge_type Instance#internet_charge_type}
  */
  readonly internetChargeType?: string;
  /**
  * Maximum outgoing bandwidth to the public network, measured in Mbps (Mega bits per second). This value does not need to be set when `allocate_public_ip` is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#internet_max_bandwidth_out Instance#internet_max_bandwidth_out}
  */
  readonly internetMaxBandwidthOut?: number;
  /**
  * AddressType. Default value: WanIP. For beta users of dedicated IP. the value can be: HighQualityEIP: Dedicated IP. Note that dedicated IPs are only available in partial regions. For beta users of Anti-DDoS IP, the value can be: AntiDDoSEIP: Anti-DDoS EIP. Note that Anti-DDoS IPs are only available in partial regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#ipv4_address_type Instance#ipv4_address_type}
  */
  readonly ipv4AddressType?: string;
  /**
  * Specify the number of randomly generated IPv6 addresses for the Elastic Network Interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#ipv6_address_count Instance#ipv6_address_count}
  */
  readonly ipv6AddressCount?: number;
  /**
  * IPv6 AddressType. Default value: WanIP. EIPv6: Elastic IPv6; HighQualityEIPv6: Premium IPv6, only China Hong Kong supports premium IPv6. To allocate IPv6 addresses to resources, please specify the Elastic IPv6 type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#ipv6_address_type Instance#ipv6_address_type}
  */
  readonly ipv6AddressType?: string;
  /**
  * Whether to keep image login or not, default is `false`. When the image type is private or shared or imported, this parameter can be set `true`. Modifications may lead to the reinstallation of the instance's operating system..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#keep_image_login Instance#keep_image_login}
  */
  readonly keepImageLogin?: boolean | cdktf.IResolvable;
  /**
  * The key pair to use for the instance, it looks like `skey-16jig7tx`. Modifications may lead to the reinstallation of the instance's operating system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#key_ids Instance#key_ids}
  */
  readonly keyIds?: string[];
  /**
  * The key pair to use for the instance, it looks like `skey-16jig7tx`. Modifications may lead to the reinstallation of the instance's operating system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#key_name Instance#key_name}
  */
  readonly keyName?: string;
  /**
  * Instance launch template ID. This parameter allows you to create an instance using the preset parameters in the instance template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#launch_template_id Instance#launch_template_id}
  */
  readonly launchTemplateId?: string;
  /**
  * The instance launch template version number. If given, a new instance launch template will be created based on the given version number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#launch_template_version Instance#launch_template_version}
  */
  readonly launchTemplateVersion?: number;
  /**
  * A list of orderly security group IDs to associate with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#orderly_security_groups Instance#orderly_security_groups}
  */
  readonly orderlySecurityGroups?: string[];
  /**
  * Password for the instance. In order for the new password to take effect, the instance will be restarted after the password change. Modifications may lead to the reinstallation of the instance's operating system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#password Instance#password}
  */
  readonly password?: string;
  /**
  * The ID of a placement group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#placement_group_id Instance#placement_group_id}
  */
  readonly placementGroupId?: string;
  /**
  * The private IP to be assigned to this instance, must be in the provided subnet and available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#private_ip Instance#private_ip}
  */
  readonly privateIp?: string;
  /**
  * The project the instance belongs to, default to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#project_id Instance#project_id}
  */
  readonly projectId?: number;
  /**
  * Release elastic IP. Under EIP 2.0, only the first EIP under the primary network card is provided, and the EIP types are limited to HighQualityEIP, AntiDDoSEIP, EIPv6, and HighQualityEIPv6. Default behavior is not released.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#release_address Instance#release_address}
  */
  readonly releaseAddress?: boolean | cdktf.IResolvable;
  /**
  * Set instance to running or stop. Default value is true, the instance will shutdown when this flag is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#running_flag Instance#running_flag}
  */
  readonly runningFlag?: boolean | cdktf.IResolvable;
  /**
  * A list of security group IDs to associate with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#security_groups Instance#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Type of spot instance, only support `ONE-TIME` now. Note: it only works when instance_charge_type is set to `SPOTPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#spot_instance_type Instance#spot_instance_type}
  */
  readonly spotInstanceType?: string;
  /**
  * Max price of a spot instance, is the format of decimal string, for example "0.50". Note: it only works when instance_charge_type is set to `SPOTPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#spot_max_price Instance#spot_max_price}
  */
  readonly spotMaxPrice?: string;
  /**
  * Instance shutdown mode. Valid values: SOFT_FIRST: perform a soft shutdown first, and force shut down the instance if the soft shutdown fails; HARD: force shut down the instance directly; SOFT: soft shutdown only. Default value: SOFT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#stop_type Instance#stop_type}
  */
  readonly stopType?: string;
  /**
  * Billing method of a pay-as-you-go instance after shutdown. Available values: `KEEP_CHARGING`,`STOP_CHARGING`. Default `KEEP_CHARGING`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#stopped_mode Instance#stopped_mode}
  */
  readonly stoppedMode?: string;
  /**
  * The ID of a VPC subnet. If you want to create instances in a VPC network, this parameter must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#subnet_id Instance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * System disk snapshot ID used to initialize the system disk. When system disk type is `LOCAL_BASIC` and `LOCAL_SSD`, disk id is not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#system_disk_id Instance#system_disk_id}
  */
  readonly systemDiskId?: string;
  /**
  * Name of the system disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#system_disk_name Instance#system_disk_name}
  */
  readonly systemDiskName?: string;
  /**
  * Resize online.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#system_disk_resize_online Instance#system_disk_resize_online}
  */
  readonly systemDiskResizeOnline?: boolean | cdktf.IResolvable;
  /**
  * Size of the system disk. unit is GB, Default is 50GB. If modified, the instance may force stop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#system_disk_size Instance#system_disk_size}
  */
  readonly systemDiskSize?: number;
  /**
  * System disk type. For more information on limits of system disk types, see [Storage Overview](https://intl.cloud.tencent.com/document/product/213/4952). Valid values: `LOCAL_BASIC`: local disk, `LOCAL_SSD`: local SSD disk, `CLOUD_BASIC`: cloud disk, `CLOUD_SSD`: cloud SSD disk, `CLOUD_PREMIUM`: Premium Cloud Storage, `CLOUD_BSSD`: Basic SSD, `CLOUD_HSSD`: Enhanced SSD, `CLOUD_TSSD`: Tremendous SSD. NOTE: If modified, the instance may force stop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#system_disk_type Instance#system_disk_type}
  */
  readonly systemDiskType?: string;
  /**
  * A mapping of tags to assign to the resource. For tag limits, please refer to [Use Limits](https://intl.cloud.tencent.com/document/product/651/13354).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#tags Instance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The user data to be injected into this instance. Must be base64 encoded and up to 16 KB. If `user_data_replace_on_change` is set to `true`, updates to this field will trigger the destruction and recreation of the CVM instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#user_data Instance#user_data}
  */
  readonly userData?: string;
  /**
  * The user data to be injected into this instance, in plain text. Conflicts with `user_data`. Up to 16 KB after base64 encoded. If `user_data_replace_on_change` is set to `true`, updates to this field will trigger the destruction and recreation of the CVM instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#user_data_raw Instance#user_data_raw}
  */
  readonly userDataRaw?: string;
  /**
  * When used in combination with `user_data` or `user_data_raw` will trigger a destroy and recreate of the CVM instance when set to `true`. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#user_data_replace_on_change Instance#user_data_replace_on_change}
  */
  readonly userDataReplaceOnChange?: boolean | cdktf.IResolvable;
  /**
  * The ID of a VPC network. If you want to create instances in a VPC network, this parameter must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#vpc_id Instance#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * data_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#data_disks Instance#data_disks}
  */
  readonly dataDisks?: InstanceDataDisks[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#timeouts Instance#timeouts}
  */
  readonly timeouts?: InstanceTimeouts;
}
export interface InstanceDataDisks {
  /**
  * Data disk ID used to initialize the data disk. When data disk type is `LOCAL_BASIC` and `LOCAL_SSD`, disk id is not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#data_disk_id Instance#data_disk_id}
  */
  readonly dataDiskId?: string;
  /**
  * Name of data disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#data_disk_name Instance#data_disk_name}
  */
  readonly dataDiskName?: string;
  /**
  * Size of the data disk, and unit is GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#data_disk_size Instance#data_disk_size}
  */
  readonly dataDiskSize: number;
  /**
  * Snapshot ID of the data disk. The selected data disk snapshot size must be smaller than the data disk size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#data_disk_snapshot_id Instance#data_disk_snapshot_id}
  */
  readonly dataDiskSnapshotId?: string;
  /**
  * Data disk type. For more information about limits on different data disk types, see [Storage Overview](https://intl.cloud.tencent.com/document/product/213/4952). Valid values: LOCAL_BASIC: local disk, LOCAL_SSD: local SSD disk, LOCAL_NVME: local NVME disk, specified in the InstanceType, LOCAL_PRO: local HDD disk, specified in the InstanceType, CLOUD_BASIC: HDD cloud disk, CLOUD_PREMIUM: Premium Cloud Storage, CLOUD_SSD: SSD, CLOUD_HSSD: Enhanced SSD, CLOUD_TSSD: Tremendous SSD, CLOUD_BSSD: Balanced SSD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#data_disk_type Instance#data_disk_type}
  */
  readonly dataDiskType: string;
  /**
  * Decides whether the disk is deleted with instance(only applied to `CLOUD_BASIC`, `CLOUD_SSD` and `CLOUD_PREMIUM` disk with `POSTPAID_BY_HOUR` instance), default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#delete_with_instance Instance#delete_with_instance}
  */
  readonly deleteWithInstance?: boolean | cdktf.IResolvable;
  /**
  * Decides whether the disk is deleted with instance(only applied to `CLOUD_BASIC`, `CLOUD_SSD` and `CLOUD_PREMIUM` disk with `PREPAID` instance), default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#delete_with_instance_prepaid Instance#delete_with_instance_prepaid}
  */
  readonly deleteWithInstancePrepaid?: boolean | cdktf.IResolvable;
  /**
  * Decides whether the disk is encrypted. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#encrypt Instance#encrypt}
  */
  readonly encrypt?: boolean | cdktf.IResolvable;
  /**
  * Optional parameters. When purchasing an encryption disk, customize the key. When this parameter is passed in, the `encrypt` parameter need be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#kms_key_id Instance#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Add extra performance to the data disk. Only works when disk type is `CLOUD_TSSD` or `CLOUD_HSSD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#throughput_performance Instance#throughput_performance}
  */
  readonly throughputPerformance?: number;
}

export function instanceDataDisksToTerraform(struct?: InstanceDataDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_disk_id: cdktf.stringToTerraform(struct!.dataDiskId),
    data_disk_name: cdktf.stringToTerraform(struct!.dataDiskName),
    data_disk_size: cdktf.numberToTerraform(struct!.dataDiskSize),
    data_disk_snapshot_id: cdktf.stringToTerraform(struct!.dataDiskSnapshotId),
    data_disk_type: cdktf.stringToTerraform(struct!.dataDiskType),
    delete_with_instance: cdktf.booleanToTerraform(struct!.deleteWithInstance),
    delete_with_instance_prepaid: cdktf.booleanToTerraform(struct!.deleteWithInstancePrepaid),
    encrypt: cdktf.booleanToTerraform(struct!.encrypt),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    throughput_performance: cdktf.numberToTerraform(struct!.throughputPerformance),
  }
}


export function instanceDataDisksToHclTerraform(struct?: InstanceDataDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_disk_id: {
      value: cdktf.stringToHclTerraform(struct!.dataDiskId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_disk_name: {
      value: cdktf.stringToHclTerraform(struct!.dataDiskName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.dataDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_disk_snapshot_id: {
      value: cdktf.stringToHclTerraform(struct!.dataDiskSnapshotId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_disk_type: {
      value: cdktf.stringToHclTerraform(struct!.dataDiskType),
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
    delete_with_instance_prepaid: {
      value: cdktf.booleanToHclTerraform(struct!.deleteWithInstancePrepaid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encrypt: {
      value: cdktf.booleanToHclTerraform(struct!.encrypt),
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
    throughput_performance: {
      value: cdktf.numberToHclTerraform(struct!.throughputPerformance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    if (this._dataDiskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDiskId = this._dataDiskId;
    }
    if (this._dataDiskName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDiskName = this._dataDiskName;
    }
    if (this._dataDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDiskSize = this._dataDiskSize;
    }
    if (this._dataDiskSnapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDiskSnapshotId = this._dataDiskSnapshotId;
    }
    if (this._dataDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDiskType = this._dataDiskType;
    }
    if (this._deleteWithInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteWithInstance = this._deleteWithInstance;
    }
    if (this._deleteWithInstancePrepaid !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteWithInstancePrepaid = this._deleteWithInstancePrepaid;
    }
    if (this._encrypt !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypt = this._encrypt;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._throughputPerformance !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughputPerformance = this._throughputPerformance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceDataDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataDiskId = undefined;
      this._dataDiskName = undefined;
      this._dataDiskSize = undefined;
      this._dataDiskSnapshotId = undefined;
      this._dataDiskType = undefined;
      this._deleteWithInstance = undefined;
      this._deleteWithInstancePrepaid = undefined;
      this._encrypt = undefined;
      this._kmsKeyId = undefined;
      this._throughputPerformance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataDiskId = value.dataDiskId;
      this._dataDiskName = value.dataDiskName;
      this._dataDiskSize = value.dataDiskSize;
      this._dataDiskSnapshotId = value.dataDiskSnapshotId;
      this._dataDiskType = value.dataDiskType;
      this._deleteWithInstance = value.deleteWithInstance;
      this._deleteWithInstancePrepaid = value.deleteWithInstancePrepaid;
      this._encrypt = value.encrypt;
      this._kmsKeyId = value.kmsKeyId;
      this._throughputPerformance = value.throughputPerformance;
    }
  }

  // data_disk_id - computed: true, optional: true, required: false
  private _dataDiskId?: string; 
  public get dataDiskId() {
    return this.getStringAttribute('data_disk_id');
  }
  public set dataDiskId(value: string) {
    this._dataDiskId = value;
  }
  public resetDataDiskId() {
    this._dataDiskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskIdInput() {
    return this._dataDiskId;
  }

  // data_disk_name - computed: true, optional: true, required: false
  private _dataDiskName?: string; 
  public get dataDiskName() {
    return this.getStringAttribute('data_disk_name');
  }
  public set dataDiskName(value: string) {
    this._dataDiskName = value;
  }
  public resetDataDiskName() {
    this._dataDiskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskNameInput() {
    return this._dataDiskName;
  }

  // data_disk_size - computed: false, optional: false, required: true
  private _dataDiskSize?: number; 
  public get dataDiskSize() {
    return this.getNumberAttribute('data_disk_size');
  }
  public set dataDiskSize(value: number) {
    this._dataDiskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskSizeInput() {
    return this._dataDiskSize;
  }

  // data_disk_snapshot_id - computed: false, optional: true, required: false
  private _dataDiskSnapshotId?: string; 
  public get dataDiskSnapshotId() {
    return this.getStringAttribute('data_disk_snapshot_id');
  }
  public set dataDiskSnapshotId(value: string) {
    this._dataDiskSnapshotId = value;
  }
  public resetDataDiskSnapshotId() {
    this._dataDiskSnapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskSnapshotIdInput() {
    return this._dataDiskSnapshotId;
  }

  // data_disk_type - computed: false, optional: false, required: true
  private _dataDiskType?: string; 
  public get dataDiskType() {
    return this.getStringAttribute('data_disk_type');
  }
  public set dataDiskType(value: string) {
    this._dataDiskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskTypeInput() {
    return this._dataDiskType;
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

  // delete_with_instance_prepaid - computed: false, optional: true, required: false
  private _deleteWithInstancePrepaid?: boolean | cdktf.IResolvable; 
  public get deleteWithInstancePrepaid() {
    return this.getBooleanAttribute('delete_with_instance_prepaid');
  }
  public set deleteWithInstancePrepaid(value: boolean | cdktf.IResolvable) {
    this._deleteWithInstancePrepaid = value;
  }
  public resetDeleteWithInstancePrepaid() {
    this._deleteWithInstancePrepaid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteWithInstancePrepaidInput() {
    return this._deleteWithInstancePrepaid;
  }

  // encrypt - computed: false, optional: true, required: false
  private _encrypt?: boolean | cdktf.IResolvable; 
  public get encrypt() {
    return this.getBooleanAttribute('encrypt');
  }
  public set encrypt(value: boolean | cdktf.IResolvable) {
    this._encrypt = value;
  }
  public resetEncrypt() {
    this._encrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptInput() {
    return this._encrypt;
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

  // throughput_performance - computed: false, optional: true, required: false
  private _throughputPerformance?: number; 
  public get throughputPerformance() {
    return this.getNumberAttribute('throughput_performance');
  }
  public set throughputPerformance(value: number) {
    this._throughputPerformance = value;
  }
  public resetThroughputPerformance() {
    this._throughputPerformance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputPerformanceInput() {
    return this._throughputPerformance;
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
export interface InstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#create Instance#create}
  */
  readonly create?: string;
}

export function instanceTimeoutsToTerraform(struct?: InstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance tencentcloud_instance}
*/
export class Instance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Instance to import
  * @param importFromId The id of the existing Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/instance tencentcloud_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstanceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: InstanceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
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
    this._antiDdosPackageId = config.antiDdosPackageId;
    this._availabilityZone = config.availabilityZone;
    this._bandwidthPackageId = config.bandwidthPackageId;
    this._camRoleName = config.camRoleName;
    this._cdhHostId = config.cdhHostId;
    this._cdhInstanceType = config.cdhInstanceType;
    this._dedicatedClusterId = config.dedicatedClusterId;
    this._disableApiTermination = config.disableApiTermination;
    this._disableAutomationService = config.disableAutomationService;
    this._disableMonitorService = config.disableMonitorService;
    this._disableSecurityService = config.disableSecurityService;
    this._forceDelete = config.forceDelete;
    this._forceReplacePlacementGroupId = config.forceReplacePlacementGroupId;
    this._hostname = config.hostname;
    this._hpcClusterId = config.hpcClusterId;
    this._id = config.id;
    this._imageId = config.imageId;
    this._instanceChargeType = config.instanceChargeType;
    this._instanceChargeTypePrepaidPeriod = config.instanceChargeTypePrepaidPeriod;
    this._instanceChargeTypePrepaidRenewFlag = config.instanceChargeTypePrepaidRenewFlag;
    this._instanceName = config.instanceName;
    this._instanceType = config.instanceType;
    this._internetChargeType = config.internetChargeType;
    this._internetMaxBandwidthOut = config.internetMaxBandwidthOut;
    this._ipv4AddressType = config.ipv4AddressType;
    this._ipv6AddressCount = config.ipv6AddressCount;
    this._ipv6AddressType = config.ipv6AddressType;
    this._keepImageLogin = config.keepImageLogin;
    this._keyIds = config.keyIds;
    this._keyName = config.keyName;
    this._launchTemplateId = config.launchTemplateId;
    this._launchTemplateVersion = config.launchTemplateVersion;
    this._orderlySecurityGroups = config.orderlySecurityGroups;
    this._password = config.password;
    this._placementGroupId = config.placementGroupId;
    this._privateIp = config.privateIp;
    this._projectId = config.projectId;
    this._releaseAddress = config.releaseAddress;
    this._runningFlag = config.runningFlag;
    this._securityGroups = config.securityGroups;
    this._spotInstanceType = config.spotInstanceType;
    this._spotMaxPrice = config.spotMaxPrice;
    this._stopType = config.stopType;
    this._stoppedMode = config.stoppedMode;
    this._subnetId = config.subnetId;
    this._systemDiskId = config.systemDiskId;
    this._systemDiskName = config.systemDiskName;
    this._systemDiskResizeOnline = config.systemDiskResizeOnline;
    this._systemDiskSize = config.systemDiskSize;
    this._systemDiskType = config.systemDiskType;
    this._tags = config.tags;
    this._userData = config.userData;
    this._userDataRaw = config.userDataRaw;
    this._userDataReplaceOnChange = config.userDataReplaceOnChange;
    this._vpcId = config.vpcId;
    this._dataDisks.internalValue = config.dataDisks;
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

  // anti_ddos_package_id - computed: true, optional: true, required: false
  private _antiDdosPackageId?: string; 
  public get antiDdosPackageId() {
    return this.getStringAttribute('anti_ddos_package_id');
  }
  public set antiDdosPackageId(value: string) {
    this._antiDdosPackageId = value;
  }
  public resetAntiDdosPackageId() {
    this._antiDdosPackageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiDdosPackageIdInput() {
    return this._antiDdosPackageId;
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

  // bandwidth_package_id - computed: false, optional: true, required: false
  private _bandwidthPackageId?: string; 
  public get bandwidthPackageId() {
    return this.getStringAttribute('bandwidth_package_id');
  }
  public set bandwidthPackageId(value: string) {
    this._bandwidthPackageId = value;
  }
  public resetBandwidthPackageId() {
    this._bandwidthPackageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthPackageIdInput() {
    return this._bandwidthPackageId;
  }

  // cam_role_name - computed: true, optional: true, required: false
  private _camRoleName?: string; 
  public get camRoleName() {
    return this.getStringAttribute('cam_role_name');
  }
  public set camRoleName(value: string) {
    this._camRoleName = value;
  }
  public resetCamRoleName() {
    this._camRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get camRoleNameInput() {
    return this._camRoleName;
  }

  // cdh_host_id - computed: true, optional: true, required: false
  private _cdhHostId?: string; 
  public get cdhHostId() {
    return this.getStringAttribute('cdh_host_id');
  }
  public set cdhHostId(value: string) {
    this._cdhHostId = value;
  }
  public resetCdhHostId() {
    this._cdhHostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdhHostIdInput() {
    return this._cdhHostId;
  }

  // cdh_instance_type - computed: true, optional: true, required: false
  private _cdhInstanceType?: string; 
  public get cdhInstanceType() {
    return this.getStringAttribute('cdh_instance_type');
  }
  public set cdhInstanceType(value: string) {
    this._cdhInstanceType = value;
  }
  public resetCdhInstanceType() {
    this._cdhInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdhInstanceTypeInput() {
    return this._cdhInstanceType;
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dedicated_cluster_id - computed: false, optional: true, required: false
  private _dedicatedClusterId?: string; 
  public get dedicatedClusterId() {
    return this.getStringAttribute('dedicated_cluster_id');
  }
  public set dedicatedClusterId(value: string) {
    this._dedicatedClusterId = value;
  }
  public resetDedicatedClusterId() {
    this._dedicatedClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedClusterIdInput() {
    return this._dedicatedClusterId;
  }

  // disable_api_termination - computed: true, optional: true, required: false
  private _disableApiTermination?: boolean | cdktf.IResolvable; 
  public get disableApiTermination() {
    return this.getBooleanAttribute('disable_api_termination');
  }
  public set disableApiTermination(value: boolean | cdktf.IResolvable) {
    this._disableApiTermination = value;
  }
  public resetDisableApiTermination() {
    this._disableApiTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableApiTerminationInput() {
    return this._disableApiTermination;
  }

  // disable_automation_service - computed: false, optional: true, required: false
  private _disableAutomationService?: boolean | cdktf.IResolvable; 
  public get disableAutomationService() {
    return this.getBooleanAttribute('disable_automation_service');
  }
  public set disableAutomationService(value: boolean | cdktf.IResolvable) {
    this._disableAutomationService = value;
  }
  public resetDisableAutomationService() {
    this._disableAutomationService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutomationServiceInput() {
    return this._disableAutomationService;
  }

  // disable_monitor_service - computed: false, optional: true, required: false
  private _disableMonitorService?: boolean | cdktf.IResolvable; 
  public get disableMonitorService() {
    return this.getBooleanAttribute('disable_monitor_service');
  }
  public set disableMonitorService(value: boolean | cdktf.IResolvable) {
    this._disableMonitorService = value;
  }
  public resetDisableMonitorService() {
    this._disableMonitorService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableMonitorServiceInput() {
    return this._disableMonitorService;
  }

  // disable_security_service - computed: false, optional: true, required: false
  private _disableSecurityService?: boolean | cdktf.IResolvable; 
  public get disableSecurityService() {
    return this.getBooleanAttribute('disable_security_service');
  }
  public set disableSecurityService(value: boolean | cdktf.IResolvable) {
    this._disableSecurityService = value;
  }
  public resetDisableSecurityService() {
    this._disableSecurityService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSecurityServiceInput() {
    return this._disableSecurityService;
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

  // force_replace_placement_group_id - computed: false, optional: true, required: false
  private _forceReplacePlacementGroupId?: boolean | cdktf.IResolvable; 
  public get forceReplacePlacementGroupId() {
    return this.getBooleanAttribute('force_replace_placement_group_id');
  }
  public set forceReplacePlacementGroupId(value: boolean | cdktf.IResolvable) {
    this._forceReplacePlacementGroupId = value;
  }
  public resetForceReplacePlacementGroupId() {
    this._forceReplacePlacementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceReplacePlacementGroupIdInput() {
    return this._forceReplacePlacementGroupId;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // hpc_cluster_id - computed: true, optional: true, required: false
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

  // instance_charge_type_prepaid_period - computed: false, optional: true, required: false
  private _instanceChargeTypePrepaidPeriod?: number; 
  public get instanceChargeTypePrepaidPeriod() {
    return this.getNumberAttribute('instance_charge_type_prepaid_period');
  }
  public set instanceChargeTypePrepaidPeriod(value: number) {
    this._instanceChargeTypePrepaidPeriod = value;
  }
  public resetInstanceChargeTypePrepaidPeriod() {
    this._instanceChargeTypePrepaidPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypePrepaidPeriodInput() {
    return this._instanceChargeTypePrepaidPeriod;
  }

  // instance_charge_type_prepaid_renew_flag - computed: true, optional: true, required: false
  private _instanceChargeTypePrepaidRenewFlag?: string; 
  public get instanceChargeTypePrepaidRenewFlag() {
    return this.getStringAttribute('instance_charge_type_prepaid_renew_flag');
  }
  public set instanceChargeTypePrepaidRenewFlag(value: string) {
    this._instanceChargeTypePrepaidRenewFlag = value;
  }
  public resetInstanceChargeTypePrepaidRenewFlag() {
    this._instanceChargeTypePrepaidRenewFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypePrepaidRenewFlagInput() {
    return this._instanceChargeTypePrepaidRenewFlag;
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

  // instance_status - computed: true, optional: false, required: false
  public get instanceStatus() {
    return this.getStringAttribute('instance_status');
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

  // ipv4_address_type - computed: true, optional: true, required: false
  private _ipv4AddressType?: string; 
  public get ipv4AddressType() {
    return this.getStringAttribute('ipv4_address_type');
  }
  public set ipv4AddressType(value: string) {
    this._ipv4AddressType = value;
  }
  public resetIpv4AddressType() {
    this._ipv4AddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressTypeInput() {
    return this._ipv4AddressType;
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

  // ipv6_address_type - computed: true, optional: true, required: false
  private _ipv6AddressType?: string; 
  public get ipv6AddressType() {
    return this.getStringAttribute('ipv6_address_type');
  }
  public set ipv6AddressType(value: string) {
    this._ipv6AddressType = value;
  }
  public resetIpv6AddressType() {
    this._ipv6AddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressTypeInput() {
    return this._ipv6AddressType;
  }

  // ipv6_addresses - computed: true, optional: false, required: false
  public get ipv6Addresses() {
    return this.getListAttribute('ipv6_addresses');
  }

  // keep_image_login - computed: true, optional: true, required: false
  private _keepImageLogin?: boolean | cdktf.IResolvable; 
  public get keepImageLogin() {
    return this.getBooleanAttribute('keep_image_login');
  }
  public set keepImageLogin(value: boolean | cdktf.IResolvable) {
    this._keepImageLogin = value;
  }
  public resetKeepImageLogin() {
    this._keepImageLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepImageLoginInput() {
    return this._keepImageLogin;
  }

  // key_ids - computed: true, optional: true, required: false
  private _keyIds?: string[]; 
  public get keyIds() {
    return cdktf.Fn.tolist(this.getListAttribute('key_ids'));
  }
  public set keyIds(value: string[]) {
    this._keyIds = value;
  }
  public resetKeyIds() {
    this._keyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdsInput() {
    return this._keyIds;
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

  // launch_template_version - computed: false, optional: true, required: false
  private _launchTemplateVersion?: number; 
  public get launchTemplateVersion() {
    return this.getNumberAttribute('launch_template_version');
  }
  public set launchTemplateVersion(value: number) {
    this._launchTemplateVersion = value;
  }
  public resetLaunchTemplateVersion() {
    this._launchTemplateVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateVersionInput() {
    return this._launchTemplateVersion;
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // orderly_security_groups - computed: true, optional: true, required: false
  private _orderlySecurityGroups?: string[]; 
  public get orderlySecurityGroups() {
    return this.getListAttribute('orderly_security_groups');
  }
  public set orderlySecurityGroups(value: string[]) {
    this._orderlySecurityGroups = value;
  }
  public resetOrderlySecurityGroups() {
    this._orderlySecurityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderlySecurityGroupsInput() {
    return this._orderlySecurityGroups;
  }

  // os_name - computed: true, optional: false, required: false
  public get osName() {
    return this.getStringAttribute('os_name');
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

  // placement_group_id - computed: true, optional: true, required: false
  private _placementGroupId?: string; 
  public get placementGroupId() {
    return this.getStringAttribute('placement_group_id');
  }
  public set placementGroupId(value: string) {
    this._placementGroupId = value;
  }
  public resetPlacementGroupId() {
    this._placementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementGroupIdInput() {
    return this._placementGroupId;
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

  // project_id - computed: true, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // public_ipv6_addresses - computed: true, optional: false, required: false
  public get publicIpv6Addresses() {
    return this.getListAttribute('public_ipv6_addresses');
  }

  // release_address - computed: false, optional: true, required: false
  private _releaseAddress?: boolean | cdktf.IResolvable; 
  public get releaseAddress() {
    return this.getBooleanAttribute('release_address');
  }
  public set releaseAddress(value: boolean | cdktf.IResolvable) {
    this._releaseAddress = value;
  }
  public resetReleaseAddress() {
    this._releaseAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseAddressInput() {
    return this._releaseAddress;
  }

  // running_flag - computed: true, optional: true, required: false
  private _runningFlag?: boolean | cdktf.IResolvable; 
  public get runningFlag() {
    return this.getBooleanAttribute('running_flag');
  }
  public set runningFlag(value: boolean | cdktf.IResolvable) {
    this._runningFlag = value;
  }
  public resetRunningFlag() {
    this._runningFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningFlagInput() {
    return this._runningFlag;
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

  // spot_instance_type - computed: false, optional: true, required: false
  private _spotInstanceType?: string; 
  public get spotInstanceType() {
    return this.getStringAttribute('spot_instance_type');
  }
  public set spotInstanceType(value: string) {
    this._spotInstanceType = value;
  }
  public resetSpotInstanceType() {
    this._spotInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInstanceTypeInput() {
    return this._spotInstanceType;
  }

  // spot_max_price - computed: false, optional: true, required: false
  private _spotMaxPrice?: string; 
  public get spotMaxPrice() {
    return this.getStringAttribute('spot_max_price');
  }
  public set spotMaxPrice(value: string) {
    this._spotMaxPrice = value;
  }
  public resetSpotMaxPrice() {
    this._spotMaxPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotMaxPriceInput() {
    return this._spotMaxPrice;
  }

  // stop_type - computed: false, optional: true, required: false
  private _stopType?: string; 
  public get stopType() {
    return this.getStringAttribute('stop_type');
  }
  public set stopType(value: string) {
    this._stopType = value;
  }
  public resetStopType() {
    this._stopType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopTypeInput() {
    return this._stopType;
  }

  // stopped_mode - computed: false, optional: true, required: false
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

  // system_disk_id - computed: true, optional: true, required: false
  private _systemDiskId?: string; 
  public get systemDiskId() {
    return this.getStringAttribute('system_disk_id');
  }
  public set systemDiskId(value: string) {
    this._systemDiskId = value;
  }
  public resetSystemDiskId() {
    this._systemDiskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskIdInput() {
    return this._systemDiskId;
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

  // system_disk_resize_online - computed: false, optional: true, required: false
  private _systemDiskResizeOnline?: boolean | cdktf.IResolvable; 
  public get systemDiskResizeOnline() {
    return this.getBooleanAttribute('system_disk_resize_online');
  }
  public set systemDiskResizeOnline(value: boolean | cdktf.IResolvable) {
    this._systemDiskResizeOnline = value;
  }
  public resetSystemDiskResizeOnline() {
    this._systemDiskResizeOnline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskResizeOnlineInput() {
    return this._systemDiskResizeOnline;
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

  // system_disk_type - computed: true, optional: true, required: false
  private _systemDiskType?: string; 
  public get systemDiskType() {
    return this.getStringAttribute('system_disk_type');
  }
  public set systemDiskType(value: string) {
    this._systemDiskType = value;
  }
  public resetSystemDiskType() {
    this._systemDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskTypeInput() {
    return this._systemDiskType;
  }

  // tags - computed: true, optional: true, required: false
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

  // user_data - computed: true, optional: true, required: false
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

  // user_data_raw - computed: true, optional: true, required: false
  private _userDataRaw?: string; 
  public get userDataRaw() {
    return this.getStringAttribute('user_data_raw');
  }
  public set userDataRaw(value: string) {
    this._userDataRaw = value;
  }
  public resetUserDataRaw() {
    this._userDataRaw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataRawInput() {
    return this._userDataRaw;
  }

  // user_data_replace_on_change - computed: false, optional: true, required: false
  private _userDataReplaceOnChange?: boolean | cdktf.IResolvable; 
  public get userDataReplaceOnChange() {
    return this.getBooleanAttribute('user_data_replace_on_change');
  }
  public set userDataReplaceOnChange(value: boolean | cdktf.IResolvable) {
    this._userDataReplaceOnChange = value;
  }
  public resetUserDataReplaceOnChange() {
    this._userDataReplaceOnChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataReplaceOnChangeInput() {
    return this._userDataReplaceOnChange;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
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
      anti_ddos_package_id: cdktf.stringToTerraform(this._antiDdosPackageId),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      bandwidth_package_id: cdktf.stringToTerraform(this._bandwidthPackageId),
      cam_role_name: cdktf.stringToTerraform(this._camRoleName),
      cdh_host_id: cdktf.stringToTerraform(this._cdhHostId),
      cdh_instance_type: cdktf.stringToTerraform(this._cdhInstanceType),
      dedicated_cluster_id: cdktf.stringToTerraform(this._dedicatedClusterId),
      disable_api_termination: cdktf.booleanToTerraform(this._disableApiTermination),
      disable_automation_service: cdktf.booleanToTerraform(this._disableAutomationService),
      disable_monitor_service: cdktf.booleanToTerraform(this._disableMonitorService),
      disable_security_service: cdktf.booleanToTerraform(this._disableSecurityService),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      force_replace_placement_group_id: cdktf.booleanToTerraform(this._forceReplacePlacementGroupId),
      hostname: cdktf.stringToTerraform(this._hostname),
      hpc_cluster_id: cdktf.stringToTerraform(this._hpcClusterId),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      instance_charge_type: cdktf.stringToTerraform(this._instanceChargeType),
      instance_charge_type_prepaid_period: cdktf.numberToTerraform(this._instanceChargeTypePrepaidPeriod),
      instance_charge_type_prepaid_renew_flag: cdktf.stringToTerraform(this._instanceChargeTypePrepaidRenewFlag),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      internet_charge_type: cdktf.stringToTerraform(this._internetChargeType),
      internet_max_bandwidth_out: cdktf.numberToTerraform(this._internetMaxBandwidthOut),
      ipv4_address_type: cdktf.stringToTerraform(this._ipv4AddressType),
      ipv6_address_count: cdktf.numberToTerraform(this._ipv6AddressCount),
      ipv6_address_type: cdktf.stringToTerraform(this._ipv6AddressType),
      keep_image_login: cdktf.booleanToTerraform(this._keepImageLogin),
      key_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keyIds),
      key_name: cdktf.stringToTerraform(this._keyName),
      launch_template_id: cdktf.stringToTerraform(this._launchTemplateId),
      launch_template_version: cdktf.numberToTerraform(this._launchTemplateVersion),
      orderly_security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._orderlySecurityGroups),
      password: cdktf.stringToTerraform(this._password),
      placement_group_id: cdktf.stringToTerraform(this._placementGroupId),
      private_ip: cdktf.stringToTerraform(this._privateIp),
      project_id: cdktf.numberToTerraform(this._projectId),
      release_address: cdktf.booleanToTerraform(this._releaseAddress),
      running_flag: cdktf.booleanToTerraform(this._runningFlag),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      spot_instance_type: cdktf.stringToTerraform(this._spotInstanceType),
      spot_max_price: cdktf.stringToTerraform(this._spotMaxPrice),
      stop_type: cdktf.stringToTerraform(this._stopType),
      stopped_mode: cdktf.stringToTerraform(this._stoppedMode),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      system_disk_id: cdktf.stringToTerraform(this._systemDiskId),
      system_disk_name: cdktf.stringToTerraform(this._systemDiskName),
      system_disk_resize_online: cdktf.booleanToTerraform(this._systemDiskResizeOnline),
      system_disk_size: cdktf.numberToTerraform(this._systemDiskSize),
      system_disk_type: cdktf.stringToTerraform(this._systemDiskType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      user_data: cdktf.stringToTerraform(this._userData),
      user_data_raw: cdktf.stringToTerraform(this._userDataRaw),
      user_data_replace_on_change: cdktf.booleanToTerraform(this._userDataReplaceOnChange),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      data_disks: cdktf.listMapper(instanceDataDisksToTerraform, true)(this._dataDisks.internalValue),
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
      anti_ddos_package_id: {
        value: cdktf.stringToHclTerraform(this._antiDdosPackageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth_package_id: {
        value: cdktf.stringToHclTerraform(this._bandwidthPackageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cam_role_name: {
        value: cdktf.stringToHclTerraform(this._camRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdh_host_id: {
        value: cdktf.stringToHclTerraform(this._cdhHostId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdh_instance_type: {
        value: cdktf.stringToHclTerraform(this._cdhInstanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dedicated_cluster_id: {
        value: cdktf.stringToHclTerraform(this._dedicatedClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_api_termination: {
        value: cdktf.booleanToHclTerraform(this._disableApiTermination),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_automation_service: {
        value: cdktf.booleanToHclTerraform(this._disableAutomationService),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_monitor_service: {
        value: cdktf.booleanToHclTerraform(this._disableMonitorService),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_security_service: {
        value: cdktf.booleanToHclTerraform(this._disableSecurityService),
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
      force_replace_placement_group_id: {
        value: cdktf.booleanToHclTerraform(this._forceReplacePlacementGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      instance_charge_type: {
        value: cdktf.stringToHclTerraform(this._instanceChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_charge_type_prepaid_period: {
        value: cdktf.numberToHclTerraform(this._instanceChargeTypePrepaidPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_charge_type_prepaid_renew_flag: {
        value: cdktf.stringToHclTerraform(this._instanceChargeTypePrepaidRenewFlag),
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
      internet_max_bandwidth_out: {
        value: cdktf.numberToHclTerraform(this._internetMaxBandwidthOut),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_address_type: {
        value: cdktf.stringToHclTerraform(this._ipv4AddressType),
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
      ipv6_address_type: {
        value: cdktf.stringToHclTerraform(this._ipv6AddressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keep_image_login: {
        value: cdktf.booleanToHclTerraform(this._keepImageLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keyIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      key_name: {
        value: cdktf.stringToHclTerraform(this._keyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      launch_template_id: {
        value: cdktf.stringToHclTerraform(this._launchTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      launch_template_version: {
        value: cdktf.numberToHclTerraform(this._launchTemplateVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      orderly_security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._orderlySecurityGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      placement_group_id: {
        value: cdktf.stringToHclTerraform(this._placementGroupId),
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
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      release_address: {
        value: cdktf.booleanToHclTerraform(this._releaseAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      running_flag: {
        value: cdktf.booleanToHclTerraform(this._runningFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      spot_instance_type: {
        value: cdktf.stringToHclTerraform(this._spotInstanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spot_max_price: {
        value: cdktf.stringToHclTerraform(this._spotMaxPrice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stop_type: {
        value: cdktf.stringToHclTerraform(this._stopType),
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
      system_disk_id: {
        value: cdktf.stringToHclTerraform(this._systemDiskId),
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
      system_disk_resize_online: {
        value: cdktf.booleanToHclTerraform(this._systemDiskResizeOnline),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      system_disk_size: {
        value: cdktf.numberToHclTerraform(this._systemDiskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      system_disk_type: {
        value: cdktf.stringToHclTerraform(this._systemDiskType),
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
      user_data_raw: {
        value: cdktf.stringToHclTerraform(this._userDataRaw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_data_replace_on_change: {
        value: cdktf.booleanToHclTerraform(this._userDataReplaceOnChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
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
