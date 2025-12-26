// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AsScalingConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Anti-DDoS service package ID. This is required when you want to request an AntiDDoS IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#anti_ddos_package_id AsScalingConfig#anti_ddos_package_id}
  */
  readonly antiDdosPackageId?: string;
  /**
  * Bandwidth package ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#bandwidth_package_id AsScalingConfig#bandwidth_package_id}
  */
  readonly bandwidthPackageId?: string;
  /**
  * CAM role name authorized to access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#cam_role_name AsScalingConfig#cam_role_name}
  */
  readonly camRoleName?: string;
  /**
  * Name of a launch configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#configuration_name AsScalingConfig#configuration_name}
  */
  readonly configurationName: string;
  /**
  * Dedicated Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#dedicated_cluster_id AsScalingConfig#dedicated_cluster_id}
  */
  readonly dedicatedClusterId?: string;
  /**
  * Placement group ID. Only one is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#disaster_recover_group_ids AsScalingConfig#disaster_recover_group_ids}
  */
  readonly disasterRecoverGroupIds?: string[];
  /**
  * Policy of cloud disk type. Valid values: `ORIGINAL` and `AUTOMATIC`. Default is `ORIGINAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#disk_type_policy AsScalingConfig#disk_type_policy}
  */
  readonly diskTypePolicy?: string;
  /**
  * To specify whether to enable cloud automation tools service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#enhanced_automation_tools_service AsScalingConfig#enhanced_automation_tools_service}
  */
  readonly enhancedAutomationToolsService?: boolean | cdktf.IResolvable;
  /**
  * To specify whether to enable cloud monitor service. Default is `TRUE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#enhanced_monitor_service AsScalingConfig#enhanced_monitor_service}
  */
  readonly enhancedMonitorService?: boolean | cdktf.IResolvable;
  /**
  * To specify whether to enable cloud security service. Default is `TRUE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#enhanced_security_service AsScalingConfig#enhanced_security_service}
  */
  readonly enhancedSecurityService?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#id AsScalingConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Image Family Name. Either Image ID or Image Family Name must be provided, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#image_family AsScalingConfig#image_family}
  */
  readonly imageFamily?: string;
  /**
  * An available image ID for a cvm instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#image_id AsScalingConfig#image_id}
  */
  readonly imageId?: string;
  /**
  * Charge type of instance. Valid values are `PREPAID`, `POSTPAID_BY_HOUR`, `SPOTPAID`, `CDCPAID`. The default is `POSTPAID_BY_HOUR`. NOTE: `SPOTPAID` instance must set `spot_instance_type` and `spot_max_price` at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#instance_charge_type AsScalingConfig#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * The tenancy (in month) of the prepaid instance, NOTE: it only works when instance_charge_type is set to `PREPAID`. Valid values are `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `24`, `36`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#instance_charge_type_prepaid_period AsScalingConfig#instance_charge_type_prepaid_period}
  */
  readonly instanceChargeTypePrepaidPeriod?: number;
  /**
  * Auto renewal flag. Valid values: `NOTIFY_AND_AUTO_RENEW`: notify upon expiration and renew automatically, `NOTIFY_AND_MANUAL_RENEW`: notify upon expiration but do not renew automatically, `DISABLE_NOTIFY_AND_MANUAL_RENEW`: neither notify upon expiration nor renew automatically. Default value: `NOTIFY_AND_MANUAL_RENEW`. If this parameter is specified as `NOTIFY_AND_AUTO_RENEW`, the instance will be automatically renewed on a monthly basis if the account balance is sufficient. NOTE: it only works when instance_charge_type is set to `PREPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#instance_charge_type_prepaid_renew_flag AsScalingConfig#instance_charge_type_prepaid_renew_flag}
  */
  readonly instanceChargeTypePrepaidRenewFlag?: string;
  /**
  * A list of tags used to associate different resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#instance_tags AsScalingConfig#instance_tags}
  */
  readonly instanceTags?: { [key: string]: string };
  /**
  * Specified types of CVM instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#instance_types AsScalingConfig#instance_types}
  */
  readonly instanceTypes: string[];
  /**
  * Charge types for network traffic. Valid values: `BANDWIDTH_PREPAID`, `TRAFFIC_POSTPAID_BY_HOUR` and `BANDWIDTH_PACKAGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#internet_charge_type AsScalingConfig#internet_charge_type}
  */
  readonly internetChargeType?: string;
  /**
  * Max bandwidth of Internet access in Mbps. Default is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#internet_max_bandwidth_out AsScalingConfig#internet_max_bandwidth_out}
  */
  readonly internetMaxBandwidthOut?: number;
  /**
  * AddressType. Default value: WanIP. For beta users of dedicated IP. the value can be: HighQualityEIP: Dedicated IP. Note that dedicated IPs are only available in partial regions. For beta users of Anti-DDoS IP, the value can be: AntiDDoSEIP: Anti-DDoS EIP. Note that Anti-DDoS IPs are only available in partial regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#ipv4_address_type AsScalingConfig#ipv4_address_type}
  */
  readonly ipv4AddressType?: string;
  /**
  * Whether to delete the bound EIP when the instance is destroyed. Range of values: True: retain the EIP; False: not retain the EIP. Note that when the IPv4AddressType field specifies the EIP type, the default behavior is not to retain the EIP. WanIP is unaffected by this field and will always be deleted with the instance. Changing this field configuration will take effect immediately for resources already bound to a scaling group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#is_keep_eip AsScalingConfig#is_keep_eip}
  */
  readonly isKeepEip?: boolean | cdktf.IResolvable;
  /**
  * Specify whether to keep original settings of a CVM image. And it can't be used with password or key_ids together.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#keep_image_login AsScalingConfig#keep_image_login}
  */
  readonly keepImageLogin?: boolean | cdktf.IResolvable;
  /**
  * ID list of keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#key_ids AsScalingConfig#key_ids}
  */
  readonly keyIds?: string[];
  /**
  * Password to access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#password AsScalingConfig#password}
  */
  readonly password?: string;
  /**
  * Specifys to which project the configuration belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#project_id AsScalingConfig#project_id}
  */
  readonly projectId?: number;
  /**
  * Specify whether to assign an Internet IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#public_ip_assigned AsScalingConfig#public_ip_assigned}
  */
  readonly publicIpAssigned?: boolean | cdktf.IResolvable;
  /**
  * Security groups to which a CVM instance belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#security_group_ids AsScalingConfig#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Type of spot instance, only support `one-time` now. Note: it only works when instance_charge_type is set to `SPOTPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#spot_instance_type AsScalingConfig#spot_instance_type}
  */
  readonly spotInstanceType?: string;
  /**
  * Max price of a spot instance, is the format of decimal string, for example "0.50". Note: it only works when instance_charge_type is set to `SPOTPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#spot_max_price AsScalingConfig#spot_max_price}
  */
  readonly spotMaxPrice?: string;
  /**
  * Volume of system disk in GB. Default is `50`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#system_disk_size AsScalingConfig#system_disk_size}
  */
  readonly systemDiskSize?: number;
  /**
  * Type of a CVM disk. Valid values: `CLOUD_PREMIUM` and `CLOUD_SSD`. Default is `CLOUD_PREMIUM`. valid when disk_type_policy is ORIGINAL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#system_disk_type AsScalingConfig#system_disk_type}
  */
  readonly systemDiskType?: string;
  /**
  * Tags of launch configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#tags AsScalingConfig#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * ase64-encoded User Data text, the length limit is 16KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#user_data AsScalingConfig#user_data}
  */
  readonly userData?: string;
  /**
  * data_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#data_disk AsScalingConfig#data_disk}
  */
  readonly dataDisk?: AsScalingConfigDataDisk[] | cdktf.IResolvable;
  /**
  * host_name_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#host_name_settings AsScalingConfig#host_name_settings}
  */
  readonly hostNameSettings?: AsScalingConfigHostNameSettings;
  /**
  * instance_name_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#instance_name_settings AsScalingConfig#instance_name_settings}
  */
  readonly instanceNameSettings?: AsScalingConfigInstanceNameSettings;
}
export interface AsScalingConfigDataDisk {
  /**
  * Indicates whether the disk remove after instance terminated. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#delete_with_instance AsScalingConfig#delete_with_instance}
  */
  readonly deleteWithInstance?: boolean | cdktf.IResolvable;
  /**
  * Volume of disk in GB. Default is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#disk_size AsScalingConfig#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Types of disk. Valid values: `CLOUD_PREMIUM` and `CLOUD_SSD`. valid when disk_type_policy is ORIGINAL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#disk_type AsScalingConfig#disk_type}
  */
  readonly diskType?: string;
  /**
  * Data disk snapshot ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#snapshot_id AsScalingConfig#snapshot_id}
  */
  readonly snapshotId?: string;
}

export function asScalingConfigDataDiskToTerraform(struct?: AsScalingConfigDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_with_instance: cdktf.booleanToTerraform(struct!.deleteWithInstance),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
  }
}


export function asScalingConfigDataDiskToHclTerraform(struct?: AsScalingConfigDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_with_instance: {
      value: cdktf.booleanToHclTerraform(struct!.deleteWithInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class AsScalingConfigDataDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AsScalingConfigDataDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteWithInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteWithInstance = this._deleteWithInstance;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsScalingConfigDataDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteWithInstance = undefined;
      this._diskSize = undefined;
      this._diskType = undefined;
      this._snapshotId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteWithInstance = value.deleteWithInstance;
      this._diskSize = value.diskSize;
      this._diskType = value.diskType;
      this._snapshotId = value.snapshotId;
    }
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

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
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

export class AsScalingConfigDataDiskList extends cdktf.ComplexList {
  public internalValue? : AsScalingConfigDataDisk[] | cdktf.IResolvable

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
  public get(index: number): AsScalingConfigDataDiskOutputReference {
    return new AsScalingConfigDataDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AsScalingConfigHostNameSettings {
  /**
  * The host name of the cloud server; dots (.) and dashes (-) cannot be used as the first and last characters of HostName, and cannot be used consecutively; Windows instances are not supported; other types (Linux, etc.) instances: the character length is [2, 40], it is allowed to support multiple dots, and there is a paragraph between the dots, and each paragraph is allowed to consist of letters (no uppercase and lowercase restrictions), numbers and dashes (-). Pure numbers are not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#host_name AsScalingConfig#host_name}
  */
  readonly hostName: string;
  /**
  * The style of the host name of the cloud server, the value range includes `ORIGINAL` and `UNIQUE`, the default is `ORIGINAL`; `ORIGINAL`, the AS directly passes the HostName filled in the input parameter to the CVM, and the CVM may append a sequence to the HostName number, the HostName of the instance in the scaling group will conflict; `UNIQUE`, the HostName filled in as a parameter is equivalent to the host name prefix, AS and CVM will expand it, and the HostName of the instance in the scaling group can be guaranteed to be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#host_name_style AsScalingConfig#host_name_style}
  */
  readonly hostNameStyle?: string;
}

export function asScalingConfigHostNameSettingsToTerraform(struct?: AsScalingConfigHostNameSettingsOutputReference | AsScalingConfigHostNameSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    host_name_style: cdktf.stringToTerraform(struct!.hostNameStyle),
  }
}


export function asScalingConfigHostNameSettingsToHclTerraform(struct?: AsScalingConfigHostNameSettingsOutputReference | AsScalingConfigHostNameSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name_style: {
      value: cdktf.stringToHclTerraform(struct!.hostNameStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AsScalingConfigHostNameSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AsScalingConfigHostNameSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._hostNameStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNameStyle = this._hostNameStyle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsScalingConfigHostNameSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostName = undefined;
      this._hostNameStyle = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostName = value.hostName;
      this._hostNameStyle = value.hostNameStyle;
    }
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // host_name_style - computed: false, optional: true, required: false
  private _hostNameStyle?: string; 
  public get hostNameStyle() {
    return this.getStringAttribute('host_name_style');
  }
  public set hostNameStyle(value: string) {
    this._hostNameStyle = value;
  }
  public resetHostNameStyle() {
    this._hostNameStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameStyleInput() {
    return this._hostNameStyle;
  }
}
export interface AsScalingConfigInstanceNameSettings {
  /**
  * CVM instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#instance_name AsScalingConfig#instance_name}
  */
  readonly instanceName: string;
  /**
  * Type of CVM instance name. Valid values: `ORIGINAL` and `UNIQUE`. Default is `ORIGINAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#instance_name_style AsScalingConfig#instance_name_style}
  */
  readonly instanceNameStyle?: string;
}

export function asScalingConfigInstanceNameSettingsToTerraform(struct?: AsScalingConfigInstanceNameSettingsOutputReference | AsScalingConfigInstanceNameSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_name: cdktf.stringToTerraform(struct!.instanceName),
    instance_name_style: cdktf.stringToTerraform(struct!.instanceNameStyle),
  }
}


export function asScalingConfigInstanceNameSettingsToHclTerraform(struct?: AsScalingConfigInstanceNameSettingsOutputReference | AsScalingConfigInstanceNameSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_name_style: {
      value: cdktf.stringToHclTerraform(struct!.instanceNameStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AsScalingConfigInstanceNameSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AsScalingConfigInstanceNameSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._instanceNameStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceNameStyle = this._instanceNameStyle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsScalingConfigInstanceNameSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceName = undefined;
      this._instanceNameStyle = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceName = value.instanceName;
      this._instanceNameStyle = value.instanceNameStyle;
    }
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // instance_name_style - computed: false, optional: true, required: false
  private _instanceNameStyle?: string; 
  public get instanceNameStyle() {
    return this.getStringAttribute('instance_name_style');
  }
  public set instanceNameStyle(value: string) {
    this._instanceNameStyle = value;
  }
  public resetInstanceNameStyle() {
    this._instanceNameStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameStyleInput() {
    return this._instanceNameStyle;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config tencentcloud_as_scaling_config}
*/
export class AsScalingConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_as_scaling_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AsScalingConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AsScalingConfig to import
  * @param importFromId The id of the existing AsScalingConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AsScalingConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_as_scaling_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_config tencentcloud_as_scaling_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AsScalingConfigConfig
  */
  public constructor(scope: Construct, id: string, config: AsScalingConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_as_scaling_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._antiDdosPackageId = config.antiDdosPackageId;
    this._bandwidthPackageId = config.bandwidthPackageId;
    this._camRoleName = config.camRoleName;
    this._configurationName = config.configurationName;
    this._dedicatedClusterId = config.dedicatedClusterId;
    this._disasterRecoverGroupIds = config.disasterRecoverGroupIds;
    this._diskTypePolicy = config.diskTypePolicy;
    this._enhancedAutomationToolsService = config.enhancedAutomationToolsService;
    this._enhancedMonitorService = config.enhancedMonitorService;
    this._enhancedSecurityService = config.enhancedSecurityService;
    this._id = config.id;
    this._imageFamily = config.imageFamily;
    this._imageId = config.imageId;
    this._instanceChargeType = config.instanceChargeType;
    this._instanceChargeTypePrepaidPeriod = config.instanceChargeTypePrepaidPeriod;
    this._instanceChargeTypePrepaidRenewFlag = config.instanceChargeTypePrepaidRenewFlag;
    this._instanceTags = config.instanceTags;
    this._instanceTypes = config.instanceTypes;
    this._internetChargeType = config.internetChargeType;
    this._internetMaxBandwidthOut = config.internetMaxBandwidthOut;
    this._ipv4AddressType = config.ipv4AddressType;
    this._isKeepEip = config.isKeepEip;
    this._keepImageLogin = config.keepImageLogin;
    this._keyIds = config.keyIds;
    this._password = config.password;
    this._projectId = config.projectId;
    this._publicIpAssigned = config.publicIpAssigned;
    this._securityGroupIds = config.securityGroupIds;
    this._spotInstanceType = config.spotInstanceType;
    this._spotMaxPrice = config.spotMaxPrice;
    this._systemDiskSize = config.systemDiskSize;
    this._systemDiskType = config.systemDiskType;
    this._tags = config.tags;
    this._userData = config.userData;
    this._dataDisk.internalValue = config.dataDisk;
    this._hostNameSettings.internalValue = config.hostNameSettings;
    this._instanceNameSettings.internalValue = config.instanceNameSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anti_ddos_package_id - computed: false, optional: true, required: false
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

  // cam_role_name - computed: false, optional: true, required: false
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

  // configuration_name - computed: false, optional: false, required: true
  private _configurationName?: string; 
  public get configurationName() {
    return this.getStringAttribute('configuration_name');
  }
  public set configurationName(value: string) {
    this._configurationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationNameInput() {
    return this._configurationName;
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

  // disaster_recover_group_ids - computed: true, optional: true, required: false
  private _disasterRecoverGroupIds?: string[]; 
  public get disasterRecoverGroupIds() {
    return this.getListAttribute('disaster_recover_group_ids');
  }
  public set disasterRecoverGroupIds(value: string[]) {
    this._disasterRecoverGroupIds = value;
  }
  public resetDisasterRecoverGroupIds() {
    this._disasterRecoverGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disasterRecoverGroupIdsInput() {
    return this._disasterRecoverGroupIds;
  }

  // disk_type_policy - computed: false, optional: true, required: false
  private _diskTypePolicy?: string; 
  public get diskTypePolicy() {
    return this.getStringAttribute('disk_type_policy');
  }
  public set diskTypePolicy(value: string) {
    this._diskTypePolicy = value;
  }
  public resetDiskTypePolicy() {
    this._diskTypePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypePolicyInput() {
    return this._diskTypePolicy;
  }

  // enhanced_automation_tools_service - computed: false, optional: true, required: false
  private _enhancedAutomationToolsService?: boolean | cdktf.IResolvable; 
  public get enhancedAutomationToolsService() {
    return this.getBooleanAttribute('enhanced_automation_tools_service');
  }
  public set enhancedAutomationToolsService(value: boolean | cdktf.IResolvable) {
    this._enhancedAutomationToolsService = value;
  }
  public resetEnhancedAutomationToolsService() {
    this._enhancedAutomationToolsService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedAutomationToolsServiceInput() {
    return this._enhancedAutomationToolsService;
  }

  // enhanced_monitor_service - computed: false, optional: true, required: false
  private _enhancedMonitorService?: boolean | cdktf.IResolvable; 
  public get enhancedMonitorService() {
    return this.getBooleanAttribute('enhanced_monitor_service');
  }
  public set enhancedMonitorService(value: boolean | cdktf.IResolvable) {
    this._enhancedMonitorService = value;
  }
  public resetEnhancedMonitorService() {
    this._enhancedMonitorService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedMonitorServiceInput() {
    return this._enhancedMonitorService;
  }

  // enhanced_security_service - computed: false, optional: true, required: false
  private _enhancedSecurityService?: boolean | cdktf.IResolvable; 
  public get enhancedSecurityService() {
    return this.getBooleanAttribute('enhanced_security_service');
  }
  public set enhancedSecurityService(value: boolean | cdktf.IResolvable) {
    this._enhancedSecurityService = value;
  }
  public resetEnhancedSecurityService() {
    this._enhancedSecurityService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedSecurityServiceInput() {
    return this._enhancedSecurityService;
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

  // image_family - computed: false, optional: true, required: false
  private _imageFamily?: string; 
  public get imageFamily() {
    return this.getStringAttribute('image_family');
  }
  public set imageFamily(value: string) {
    this._imageFamily = value;
  }
  public resetImageFamily() {
    this._imageFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageFamilyInput() {
    return this._imageFamily;
  }

  // image_id - computed: false, optional: true, required: false
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

  // instance_charge_type - computed: false, optional: true, required: false
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

  // instance_tags - computed: false, optional: true, required: false
  private _instanceTags?: { [key: string]: string }; 
  public get instanceTags() {
    return this.getStringMapAttribute('instance_tags');
  }
  public set instanceTags(value: { [key: string]: string }) {
    this._instanceTags = value;
  }
  public resetInstanceTags() {
    this._instanceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTagsInput() {
    return this._instanceTags;
  }

  // instance_types - computed: false, optional: false, required: true
  private _instanceTypes?: string[]; 
  public get instanceTypes() {
    return this.getListAttribute('instance_types');
  }
  public set instanceTypes(value: string[]) {
    this._instanceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesInput() {
    return this._instanceTypes;
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

  // is_keep_eip - computed: true, optional: true, required: false
  private _isKeepEip?: boolean | cdktf.IResolvable; 
  public get isKeepEip() {
    return this.getBooleanAttribute('is_keep_eip');
  }
  public set isKeepEip(value: boolean | cdktf.IResolvable) {
    this._isKeepEip = value;
  }
  public resetIsKeepEip() {
    this._isKeepEip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isKeepEipInput() {
    return this._isKeepEip;
  }

  // keep_image_login - computed: false, optional: true, required: false
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

  // key_ids - computed: false, optional: true, required: false
  private _keyIds?: string[]; 
  public get keyIds() {
    return this.getListAttribute('key_ids');
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

  // project_id - computed: false, optional: true, required: false
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

  // public_ip_assigned - computed: false, optional: true, required: false
  private _publicIpAssigned?: boolean | cdktf.IResolvable; 
  public get publicIpAssigned() {
    return this.getBooleanAttribute('public_ip_assigned');
  }
  public set publicIpAssigned(value: boolean | cdktf.IResolvable) {
    this._publicIpAssigned = value;
  }
  public resetPublicIpAssigned() {
    this._publicIpAssigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAssignedInput() {
    return this._publicIpAssigned;
  }

  // security_group_ids - computed: false, optional: true, required: false
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // system_disk_type - computed: false, optional: true, required: false
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

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk = new AsScalingConfigDataDiskList(this, "data_disk", false);
  public get dataDisk() {
    return this._dataDisk;
  }
  public putDataDisk(value: AsScalingConfigDataDisk[] | cdktf.IResolvable) {
    this._dataDisk.internalValue = value;
  }
  public resetDataDisk() {
    this._dataDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk.internalValue;
  }

  // host_name_settings - computed: false, optional: true, required: false
  private _hostNameSettings = new AsScalingConfigHostNameSettingsOutputReference(this, "host_name_settings");
  public get hostNameSettings() {
    return this._hostNameSettings;
  }
  public putHostNameSettings(value: AsScalingConfigHostNameSettings) {
    this._hostNameSettings.internalValue = value;
  }
  public resetHostNameSettings() {
    this._hostNameSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameSettingsInput() {
    return this._hostNameSettings.internalValue;
  }

  // instance_name_settings - computed: false, optional: true, required: false
  private _instanceNameSettings = new AsScalingConfigInstanceNameSettingsOutputReference(this, "instance_name_settings");
  public get instanceNameSettings() {
    return this._instanceNameSettings;
  }
  public putInstanceNameSettings(value: AsScalingConfigInstanceNameSettings) {
    this._instanceNameSettings.internalValue = value;
  }
  public resetInstanceNameSettings() {
    this._instanceNameSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameSettingsInput() {
    return this._instanceNameSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anti_ddos_package_id: cdktf.stringToTerraform(this._antiDdosPackageId),
      bandwidth_package_id: cdktf.stringToTerraform(this._bandwidthPackageId),
      cam_role_name: cdktf.stringToTerraform(this._camRoleName),
      configuration_name: cdktf.stringToTerraform(this._configurationName),
      dedicated_cluster_id: cdktf.stringToTerraform(this._dedicatedClusterId),
      disaster_recover_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._disasterRecoverGroupIds),
      disk_type_policy: cdktf.stringToTerraform(this._diskTypePolicy),
      enhanced_automation_tools_service: cdktf.booleanToTerraform(this._enhancedAutomationToolsService),
      enhanced_monitor_service: cdktf.booleanToTerraform(this._enhancedMonitorService),
      enhanced_security_service: cdktf.booleanToTerraform(this._enhancedSecurityService),
      id: cdktf.stringToTerraform(this._id),
      image_family: cdktf.stringToTerraform(this._imageFamily),
      image_id: cdktf.stringToTerraform(this._imageId),
      instance_charge_type: cdktf.stringToTerraform(this._instanceChargeType),
      instance_charge_type_prepaid_period: cdktf.numberToTerraform(this._instanceChargeTypePrepaidPeriod),
      instance_charge_type_prepaid_renew_flag: cdktf.stringToTerraform(this._instanceChargeTypePrepaidRenewFlag),
      instance_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._instanceTags),
      instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceTypes),
      internet_charge_type: cdktf.stringToTerraform(this._internetChargeType),
      internet_max_bandwidth_out: cdktf.numberToTerraform(this._internetMaxBandwidthOut),
      ipv4_address_type: cdktf.stringToTerraform(this._ipv4AddressType),
      is_keep_eip: cdktf.booleanToTerraform(this._isKeepEip),
      keep_image_login: cdktf.booleanToTerraform(this._keepImageLogin),
      key_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keyIds),
      password: cdktf.stringToTerraform(this._password),
      project_id: cdktf.numberToTerraform(this._projectId),
      public_ip_assigned: cdktf.booleanToTerraform(this._publicIpAssigned),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      spot_instance_type: cdktf.stringToTerraform(this._spotInstanceType),
      spot_max_price: cdktf.stringToTerraform(this._spotMaxPrice),
      system_disk_size: cdktf.numberToTerraform(this._systemDiskSize),
      system_disk_type: cdktf.stringToTerraform(this._systemDiskType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      user_data: cdktf.stringToTerraform(this._userData),
      data_disk: cdktf.listMapper(asScalingConfigDataDiskToTerraform, true)(this._dataDisk.internalValue),
      host_name_settings: asScalingConfigHostNameSettingsToTerraform(this._hostNameSettings.internalValue),
      instance_name_settings: asScalingConfigInstanceNameSettingsToTerraform(this._instanceNameSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anti_ddos_package_id: {
        value: cdktf.stringToHclTerraform(this._antiDdosPackageId),
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
      configuration_name: {
        value: cdktf.stringToHclTerraform(this._configurationName),
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
      disaster_recover_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._disasterRecoverGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      disk_type_policy: {
        value: cdktf.stringToHclTerraform(this._diskTypePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enhanced_automation_tools_service: {
        value: cdktf.booleanToHclTerraform(this._enhancedAutomationToolsService),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enhanced_monitor_service: {
        value: cdktf.booleanToHclTerraform(this._enhancedMonitorService),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enhanced_security_service: {
        value: cdktf.booleanToHclTerraform(this._enhancedSecurityService),
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
      image_family: {
        value: cdktf.stringToHclTerraform(this._imageFamily),
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
      instance_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._instanceTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      instance_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceTypes),
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
      ipv4_address_type: {
        value: cdktf.stringToHclTerraform(this._ipv4AddressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_keep_eip: {
        value: cdktf.booleanToHclTerraform(this._isKeepEip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
        type: "list",
        storageClassType: "stringList",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
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
      public_ip_assigned: {
        value: cdktf.booleanToHclTerraform(this._publicIpAssigned),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "list",
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
      data_disk: {
        value: cdktf.listMapperHcl(asScalingConfigDataDiskToHclTerraform, true)(this._dataDisk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AsScalingConfigDataDiskList",
      },
      host_name_settings: {
        value: asScalingConfigHostNameSettingsToHclTerraform(this._hostNameSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AsScalingConfigHostNameSettingsList",
      },
      instance_name_settings: {
        value: asScalingConfigInstanceNameSettingsToHclTerraform(this._instanceNameSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AsScalingConfigInstanceNameSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
