// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesAsScalingGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#cluster_id KubernetesAsScalingGroup#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Custom parameter information related to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#extra_args KubernetesAsScalingGroup#extra_args}
  */
  readonly extraArgs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#id KubernetesAsScalingGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels of kubernetes AS Group created nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#labels KubernetesAsScalingGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Sets whether the joining node participates in the schedule. Default is '0'. Participate in scheduling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#unschedulable KubernetesAsScalingGroup#unschedulable}
  */
  readonly unschedulable?: number;
  /**
  * auto_scaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#auto_scaling_config KubernetesAsScalingGroup#auto_scaling_config}
  */
  readonly autoScalingConfig: KubernetesAsScalingGroupAutoScalingConfig;
  /**
  * auto_scaling_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#auto_scaling_group KubernetesAsScalingGroup#auto_scaling_group}
  */
  readonly autoScalingGroup: KubernetesAsScalingGroupAutoScalingGroup;
}
export interface KubernetesAsScalingGroupAutoScalingConfigDataDisk {
  /**
  * Volume of disk in GB. Default is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#disk_size KubernetesAsScalingGroup#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Types of disk. Valid value: `CLOUD_PREMIUM` and `CLOUD_SSD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#disk_type KubernetesAsScalingGroup#disk_type}
  */
  readonly diskType?: string;
  /**
  * Data disk snapshot ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#snapshot_id KubernetesAsScalingGroup#snapshot_id}
  */
  readonly snapshotId?: string;
}

export function kubernetesAsScalingGroupAutoScalingConfigDataDiskToTerraform(struct?: KubernetesAsScalingGroupAutoScalingConfigDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
  }
}


export function kubernetesAsScalingGroupAutoScalingConfigDataDiskToHclTerraform(struct?: KubernetesAsScalingGroupAutoScalingConfigDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class KubernetesAsScalingGroupAutoScalingConfigDataDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesAsScalingGroupAutoScalingConfigDataDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: KubernetesAsScalingGroupAutoScalingConfigDataDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._diskSize = value.diskSize;
      this._diskType = value.diskType;
      this._snapshotId = value.snapshotId;
    }
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

export class KubernetesAsScalingGroupAutoScalingConfigDataDiskList extends cdktf.ComplexList {
  public internalValue? : KubernetesAsScalingGroupAutoScalingConfigDataDisk[] | cdktf.IResolvable

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
  public get(index: number): KubernetesAsScalingGroupAutoScalingConfigDataDiskOutputReference {
    return new KubernetesAsScalingGroupAutoScalingConfigDataDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesAsScalingGroupAutoScalingConfig {
  /**
  * Name of a launch configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#configuration_name KubernetesAsScalingGroup#configuration_name}
  */
  readonly configurationName: string;
  /**
  * To specify whether to enable cloud monitor service. Default is TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#enhanced_monitor_service KubernetesAsScalingGroup#enhanced_monitor_service}
  */
  readonly enhancedMonitorService?: boolean | cdktf.IResolvable;
  /**
  * To specify whether to enable cloud security service. Default is TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#enhanced_security_service KubernetesAsScalingGroup#enhanced_security_service}
  */
  readonly enhancedSecurityService?: boolean | cdktf.IResolvable;
  /**
  * A list of tags used to associate different resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#instance_tags KubernetesAsScalingGroup#instance_tags}
  */
  readonly instanceTags?: { [key: string]: string };
  /**
  * Specified types of CVM instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#instance_type KubernetesAsScalingGroup#instance_type}
  */
  readonly instanceType: string;
  /**
  * Charge types for network traffic. Valid value: `BANDWIDTH_PREPAID`, `TRAFFIC_POSTPAID_BY_HOUR` and `BANDWIDTH_PACKAGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#internet_charge_type KubernetesAsScalingGroup#internet_charge_type}
  */
  readonly internetChargeType?: string;
  /**
  * Max bandwidth of Internet access in Mbps. Default is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#internet_max_bandwidth_out KubernetesAsScalingGroup#internet_max_bandwidth_out}
  */
  readonly internetMaxBandwidthOut?: number;
  /**
  * ID list of keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#key_ids KubernetesAsScalingGroup#key_ids}
  */
  readonly keyIds?: string[];
  /**
  * Password to access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#password KubernetesAsScalingGroup#password}
  */
  readonly password?: string;
  /**
  * Specifys to which project the configuration belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#project_id KubernetesAsScalingGroup#project_id}
  */
  readonly projectId?: number;
  /**
  * Specify whether to assign an Internet IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#public_ip_assigned KubernetesAsScalingGroup#public_ip_assigned}
  */
  readonly publicIpAssigned?: boolean | cdktf.IResolvable;
  /**
  * Security groups to which a CVM instance belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#security_group_ids KubernetesAsScalingGroup#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Volume of system disk in GB. Default is `50`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#system_disk_size KubernetesAsScalingGroup#system_disk_size}
  */
  readonly systemDiskSize?: number;
  /**
  * Type of a CVM disk. Valid value: `CLOUD_PREMIUM` and `CLOUD_SSD`. Default is `CLOUD_PREMIUM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#system_disk_type KubernetesAsScalingGroup#system_disk_type}
  */
  readonly systemDiskType?: string;
  /**
  * data_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#data_disk KubernetesAsScalingGroup#data_disk}
  */
  readonly dataDisk?: KubernetesAsScalingGroupAutoScalingConfigDataDisk[] | cdktf.IResolvable;
}

export function kubernetesAsScalingGroupAutoScalingConfigToTerraform(struct?: KubernetesAsScalingGroupAutoScalingConfigOutputReference | KubernetesAsScalingGroupAutoScalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration_name: cdktf.stringToTerraform(struct!.configurationName),
    enhanced_monitor_service: cdktf.booleanToTerraform(struct!.enhancedMonitorService),
    enhanced_security_service: cdktf.booleanToTerraform(struct!.enhancedSecurityService),
    instance_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.instanceTags),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    internet_charge_type: cdktf.stringToTerraform(struct!.internetChargeType),
    internet_max_bandwidth_out: cdktf.numberToTerraform(struct!.internetMaxBandwidthOut),
    key_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyIds),
    password: cdktf.stringToTerraform(struct!.password),
    project_id: cdktf.numberToTerraform(struct!.projectId),
    public_ip_assigned: cdktf.booleanToTerraform(struct!.publicIpAssigned),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    system_disk_size: cdktf.numberToTerraform(struct!.systemDiskSize),
    system_disk_type: cdktf.stringToTerraform(struct!.systemDiskType),
    data_disk: cdktf.listMapper(kubernetesAsScalingGroupAutoScalingConfigDataDiskToTerraform, true)(struct!.dataDisk),
  }
}


export function kubernetesAsScalingGroupAutoScalingConfigToHclTerraform(struct?: KubernetesAsScalingGroupAutoScalingConfigOutputReference | KubernetesAsScalingGroupAutoScalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration_name: {
      value: cdktf.stringToHclTerraform(struct!.configurationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enhanced_monitor_service: {
      value: cdktf.booleanToHclTerraform(struct!.enhancedMonitorService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enhanced_security_service: {
      value: cdktf.booleanToHclTerraform(struct!.enhancedSecurityService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.instanceTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_charge_type: {
      value: cdktf.stringToHclTerraform(struct!.internetChargeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_max_bandwidth_out: {
      value: cdktf.numberToHclTerraform(struct!.internetMaxBandwidthOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.numberToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    public_ip_assigned: {
      value: cdktf.booleanToHclTerraform(struct!.publicIpAssigned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    system_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.systemDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    system_disk_type: {
      value: cdktf.stringToHclTerraform(struct!.systemDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_disk: {
      value: cdktf.listMapperHcl(kubernetesAsScalingGroupAutoScalingConfigDataDiskToHclTerraform, true)(struct!.dataDisk),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesAsScalingGroupAutoScalingConfigDataDiskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesAsScalingGroupAutoScalingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesAsScalingGroupAutoScalingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationName = this._configurationName;
    }
    if (this._enhancedMonitorService !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedMonitorService = this._enhancedMonitorService;
    }
    if (this._enhancedSecurityService !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedSecurityService = this._enhancedSecurityService;
    }
    if (this._instanceTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTags = this._instanceTags;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._internetChargeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetChargeType = this._internetChargeType;
    }
    if (this._internetMaxBandwidthOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetMaxBandwidthOut = this._internetMaxBandwidthOut;
    }
    if (this._keyIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyIds = this._keyIds;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._publicIpAssigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpAssigned = this._publicIpAssigned;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._systemDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemDiskSize = this._systemDiskSize;
    }
    if (this._systemDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemDiskType = this._systemDiskType;
    }
    if (this._dataDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDisk = this._dataDisk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesAsScalingGroupAutoScalingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configurationName = undefined;
      this._enhancedMonitorService = undefined;
      this._enhancedSecurityService = undefined;
      this._instanceTags = undefined;
      this._instanceType = undefined;
      this._internetChargeType = undefined;
      this._internetMaxBandwidthOut = undefined;
      this._keyIds = undefined;
      this._password = undefined;
      this._projectId = undefined;
      this._publicIpAssigned = undefined;
      this._securityGroupIds = undefined;
      this._systemDiskSize = undefined;
      this._systemDiskType = undefined;
      this._dataDisk.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configurationName = value.configurationName;
      this._enhancedMonitorService = value.enhancedMonitorService;
      this._enhancedSecurityService = value.enhancedSecurityService;
      this._instanceTags = value.instanceTags;
      this._instanceType = value.instanceType;
      this._internetChargeType = value.internetChargeType;
      this._internetMaxBandwidthOut = value.internetMaxBandwidthOut;
      this._keyIds = value.keyIds;
      this._password = value.password;
      this._projectId = value.projectId;
      this._publicIpAssigned = value.publicIpAssigned;
      this._securityGroupIds = value.securityGroupIds;
      this._systemDiskSize = value.systemDiskSize;
      this._systemDiskType = value.systemDiskType;
      this._dataDisk.internalValue = value.dataDisk;
    }
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

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
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

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk = new KubernetesAsScalingGroupAutoScalingConfigDataDiskList(this, "data_disk", false);
  public get dataDisk() {
    return this._dataDisk;
  }
  public putDataDisk(value: KubernetesAsScalingGroupAutoScalingConfigDataDisk[] | cdktf.IResolvable) {
    this._dataDisk.internalValue = value;
  }
  public resetDataDisk() {
    this._dataDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk.internalValue;
  }
}
export interface KubernetesAsScalingGroupAutoScalingGroupForwardBalancerIdsTargetAttribute {
  /**
  * Port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#port KubernetesAsScalingGroup#port}
  */
  readonly port: number;
  /**
  * Weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#weight KubernetesAsScalingGroup#weight}
  */
  readonly weight: number;
}

export function kubernetesAsScalingGroupAutoScalingGroupForwardBalancerIdsTargetAttributeToTerraform(struct?: KubernetesAsScalingGroupAutoScalingGroupForwardBalancerIdsTargetAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function kubernetesAsScalingGroupAutoScalingGroupForwardBalancerIdsTargetAttributeToHclTerraform(struct?: KubernetesAsScalingGroupAutoScalingGroupForwardBalancerIdsTargetAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesAsScalingGroupAutoScalingGroupForwardBalancerIdsTargetAttributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesAsScalingGroupAutoScalingGroupForwardBalancerIdsTargetAttribute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesAsScalingGroupAutoScalingGroupForwardBalancerIdsTargetAttribute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._weight = value.weight;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class KubernetesAsScalingGroupAutoScalingGroupForwardBalancerIdsTargetAttributeList extends cdktf.ComplexList {
  public internalValue? : KubernetesAsScalingGroupAutoScalingGroupForwardBalancerIdsTargetAttribute[] | cdktf.IResolvable

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
  public get(index: number): KubernetesAsScalingGroupAutoScalingGroupForwardBalancerIdsTargetAttributeOutputReference {
    return new KubernetesAsScalingGroupAutoScalingGroupForwardBalancerIdsTargetAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesAsScalingGroupAutoScalingGroupForwardBalancerIds {
  /**
  * Listener ID for application load balancers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#listener_id KubernetesAsScalingGroup#listener_id}
  */
  readonly listenerId: string;
  /**
  * ID of available load balancers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#load_balancer_id KubernetesAsScalingGroup#load_balancer_id}
  */
  readonly loadBalancerId: string;
  /**
  * ID of forwarding rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#rule_id KubernetesAsScalingGroup#rule_id}
  */
  readonly ruleId?: string;
  /**
  * target_attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#target_attribute KubernetesAsScalingGroup#target_attribute}
  */
  readonly targetAttribute: KubernetesAsScalingGroupAutoScalingGroupForwardBalancerIdsTargetAttribute[] | cdktf.IResolvable;
}

export function kubernetesAsScalingGroupAutoScalingGroupForwardBalancerIdsToTerraform(struct?: KubernetesAsScalingGroupAutoScalingGroupForwardBalancerIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listener_id: cdktf.stringToTerraform(struct!.listenerId),
    load_balancer_id: cdktf.stringToTerraform(struct!.loadBalancerId),
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
    target_attribute: cdktf.listMapper(kubernetesAsScalingGroupAutoScalingGroupForwardBalancerIdsTargetAttributeToTerraform, true)(struct!.targetAttribute),
  }
}


export function kubernetesAsScalingGroupAutoScalingGroupForwardBalancerIdsToHclTerraform(struct?: KubernetesAsScalingGroupAutoScalingGroupForwardBalancerIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listener_id: {
      value: cdktf.stringToHclTerraform(struct!.listenerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_id: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_id: {
      value: cdktf.stringToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_attribute: {
      value: cdktf.listMapperHcl(kubernetesAsScalingGroupAutoScalingGroupForwardBalancerIdsTargetAttributeToHclTerraform, true)(struct!.targetAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesAsScalingGroupAutoScalingGroupForwardBalancerIdsTargetAttributeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesAsScalingGroupAutoScalingGroupForwardBalancerIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesAsScalingGroupAutoScalingGroupForwardBalancerIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listenerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerId = this._listenerId;
    }
    if (this._loadBalancerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerId = this._loadBalancerId;
    }
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    if (this._targetAttribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetAttribute = this._targetAttribute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesAsScalingGroupAutoScalingGroupForwardBalancerIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listenerId = undefined;
      this._loadBalancerId = undefined;
      this._ruleId = undefined;
      this._targetAttribute.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listenerId = value.listenerId;
      this._loadBalancerId = value.loadBalancerId;
      this._ruleId = value.ruleId;
      this._targetAttribute.internalValue = value.targetAttribute;
    }
  }

  // listener_id - computed: false, optional: false, required: true
  private _listenerId?: string; 
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }
  public set listenerId(value: string) {
    this._listenerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIdInput() {
    return this._listenerId;
  }

  // load_balancer_id - computed: false, optional: false, required: true
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
  }

  // rule_id - computed: false, optional: true, required: false
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  public resetRuleId() {
    this._ruleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // target_attribute - computed: false, optional: false, required: true
  private _targetAttribute = new KubernetesAsScalingGroupAutoScalingGroupForwardBalancerIdsTargetAttributeList(this, "target_attribute", false);
  public get targetAttribute() {
    return this._targetAttribute;
  }
  public putTargetAttribute(value: KubernetesAsScalingGroupAutoScalingGroupForwardBalancerIdsTargetAttribute[] | cdktf.IResolvable) {
    this._targetAttribute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAttributeInput() {
    return this._targetAttribute.internalValue;
  }
}

export class KubernetesAsScalingGroupAutoScalingGroupForwardBalancerIdsList extends cdktf.ComplexList {
  public internalValue? : KubernetesAsScalingGroupAutoScalingGroupForwardBalancerIds[] | cdktf.IResolvable

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
  public get(index: number): KubernetesAsScalingGroupAutoScalingGroupForwardBalancerIdsOutputReference {
    return new KubernetesAsScalingGroupAutoScalingGroupForwardBalancerIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesAsScalingGroupAutoScalingGroup {
  /**
  * Default cooldown time in second, and default value is 300.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#default_cooldown KubernetesAsScalingGroup#default_cooldown}
  */
  readonly defaultCooldown?: number;
  /**
  * Desired volume of CVM instances, which is between max_size and min_size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#desired_capacity KubernetesAsScalingGroup#desired_capacity}
  */
  readonly desiredCapacity?: number;
  /**
  * ID list of traditional load balancers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#load_balancer_ids KubernetesAsScalingGroup#load_balancer_ids}
  */
  readonly loadBalancerIds?: string[];
  /**
  * Maximum number of CVM instances (0~2000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#max_size KubernetesAsScalingGroup#max_size}
  */
  readonly maxSize: number;
  /**
  * Minimum number of CVM instances (0~2000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#min_size KubernetesAsScalingGroup#min_size}
  */
  readonly minSize: number;
  /**
  * Specifys to which project the scaling group belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#project_id KubernetesAsScalingGroup#project_id}
  */
  readonly projectId?: number;
  /**
  * Available values for retry policies include `IMMEDIATE_RETRY` and `INCREMENTAL_INTERVALS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#retry_policy KubernetesAsScalingGroup#retry_policy}
  */
  readonly retryPolicy?: string;
  /**
  * Name of a scaling group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#scaling_group_name KubernetesAsScalingGroup#scaling_group_name}
  */
  readonly scalingGroupName: string;
  /**
  * ID list of subnet, and for VPC it is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#subnet_ids KubernetesAsScalingGroup#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Tags of a scaling group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#tags KubernetesAsScalingGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Available values for termination policies include `OLDEST_INSTANCE` and `NEWEST_INSTANCE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#termination_policies KubernetesAsScalingGroup#termination_policies}
  */
  readonly terminationPolicies?: string[];
  /**
  * ID of VPC network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#vpc_id KubernetesAsScalingGroup#vpc_id}
  */
  readonly vpcId: string;
  /**
  * List of available zones, for Basic network it is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#zones KubernetesAsScalingGroup#zones}
  */
  readonly zones?: string[];
  /**
  * forward_balancer_ids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#forward_balancer_ids KubernetesAsScalingGroup#forward_balancer_ids}
  */
  readonly forwardBalancerIds?: KubernetesAsScalingGroupAutoScalingGroupForwardBalancerIds[] | cdktf.IResolvable;
}

export function kubernetesAsScalingGroupAutoScalingGroupToTerraform(struct?: KubernetesAsScalingGroupAutoScalingGroupOutputReference | KubernetesAsScalingGroupAutoScalingGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_cooldown: cdktf.numberToTerraform(struct!.defaultCooldown),
    desired_capacity: cdktf.numberToTerraform(struct!.desiredCapacity),
    load_balancer_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loadBalancerIds),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
    project_id: cdktf.numberToTerraform(struct!.projectId),
    retry_policy: cdktf.stringToTerraform(struct!.retryPolicy),
    scaling_group_name: cdktf.stringToTerraform(struct!.scalingGroupName),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    termination_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.terminationPolicies),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zones),
    forward_balancer_ids: cdktf.listMapper(kubernetesAsScalingGroupAutoScalingGroupForwardBalancerIdsToTerraform, true)(struct!.forwardBalancerIds),
  }
}


export function kubernetesAsScalingGroupAutoScalingGroupToHclTerraform(struct?: KubernetesAsScalingGroupAutoScalingGroupOutputReference | KubernetesAsScalingGroupAutoScalingGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_cooldown: {
      value: cdktf.numberToHclTerraform(struct!.defaultCooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    desired_capacity: {
      value: cdktf.numberToHclTerraform(struct!.desiredCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    load_balancer_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.loadBalancerIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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
    project_id: {
      value: cdktf.numberToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_policy: {
      value: cdktf.stringToHclTerraform(struct!.retryPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scaling_group_name: {
      value: cdktf.stringToHclTerraform(struct!.scalingGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    termination_policies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.terminationPolicies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.zones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    forward_balancer_ids: {
      value: cdktf.listMapperHcl(kubernetesAsScalingGroupAutoScalingGroupForwardBalancerIdsToHclTerraform, true)(struct!.forwardBalancerIds),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesAsScalingGroupAutoScalingGroupForwardBalancerIdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesAsScalingGroupAutoScalingGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesAsScalingGroupAutoScalingGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCooldown = this._defaultCooldown;
    }
    if (this._desiredCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredCapacity = this._desiredCapacity;
    }
    if (this._loadBalancerIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerIds = this._loadBalancerIds;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._retryPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy;
    }
    if (this._scalingGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingGroupName = this._scalingGroupName;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._terminationPolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationPolicies = this._terminationPolicies;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    if (this._forwardBalancerIds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardBalancerIds = this._forwardBalancerIds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesAsScalingGroupAutoScalingGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultCooldown = undefined;
      this._desiredCapacity = undefined;
      this._loadBalancerIds = undefined;
      this._maxSize = undefined;
      this._minSize = undefined;
      this._projectId = undefined;
      this._retryPolicy = undefined;
      this._scalingGroupName = undefined;
      this._subnetIds = undefined;
      this._tags = undefined;
      this._terminationPolicies = undefined;
      this._vpcId = undefined;
      this._zones = undefined;
      this._forwardBalancerIds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultCooldown = value.defaultCooldown;
      this._desiredCapacity = value.desiredCapacity;
      this._loadBalancerIds = value.loadBalancerIds;
      this._maxSize = value.maxSize;
      this._minSize = value.minSize;
      this._projectId = value.projectId;
      this._retryPolicy = value.retryPolicy;
      this._scalingGroupName = value.scalingGroupName;
      this._subnetIds = value.subnetIds;
      this._tags = value.tags;
      this._terminationPolicies = value.terminationPolicies;
      this._vpcId = value.vpcId;
      this._zones = value.zones;
      this._forwardBalancerIds.internalValue = value.forwardBalancerIds;
    }
  }

  // default_cooldown - computed: false, optional: true, required: false
  private _defaultCooldown?: number; 
  public get defaultCooldown() {
    return this.getNumberAttribute('default_cooldown');
  }
  public set defaultCooldown(value: number) {
    this._defaultCooldown = value;
  }
  public resetDefaultCooldown() {
    this._defaultCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCooldownInput() {
    return this._defaultCooldown;
  }

  // desired_capacity - computed: true, optional: true, required: false
  private _desiredCapacity?: number; 
  public get desiredCapacity() {
    return this.getNumberAttribute('desired_capacity');
  }
  public set desiredCapacity(value: number) {
    this._desiredCapacity = value;
  }
  public resetDesiredCapacity() {
    this._desiredCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCapacityInput() {
    return this._desiredCapacity;
  }

  // load_balancer_ids - computed: false, optional: true, required: false
  private _loadBalancerIds?: string[]; 
  public get loadBalancerIds() {
    return this.getListAttribute('load_balancer_ids');
  }
  public set loadBalancerIds(value: string[]) {
    this._loadBalancerIds = value;
  }
  public resetLoadBalancerIds() {
    this._loadBalancerIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdsInput() {
    return this._loadBalancerIds;
  }

  // max_size - computed: false, optional: false, required: true
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: false, optional: false, required: true
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
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

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy?: string; 
  public get retryPolicy() {
    return this.getStringAttribute('retry_policy');
  }
  public set retryPolicy(value: string) {
    this._retryPolicy = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy;
  }

  // scaling_group_name - computed: false, optional: false, required: true
  private _scalingGroupName?: string; 
  public get scalingGroupName() {
    return this.getStringAttribute('scaling_group_name');
  }
  public set scalingGroupName(value: string) {
    this._scalingGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingGroupNameInput() {
    return this._scalingGroupName;
  }

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
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

  // termination_policies - computed: false, optional: true, required: false
  private _terminationPolicies?: string[]; 
  public get terminationPolicies() {
    return this.getListAttribute('termination_policies');
  }
  public set terminationPolicies(value: string[]) {
    this._terminationPolicies = value;
  }
  public resetTerminationPolicies() {
    this._terminationPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationPoliciesInput() {
    return this._terminationPolicies;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // forward_balancer_ids - computed: false, optional: true, required: false
  private _forwardBalancerIds = new KubernetesAsScalingGroupAutoScalingGroupForwardBalancerIdsList(this, "forward_balancer_ids", false);
  public get forwardBalancerIds() {
    return this._forwardBalancerIds;
  }
  public putForwardBalancerIds(value: KubernetesAsScalingGroupAutoScalingGroupForwardBalancerIds[] | cdktf.IResolvable) {
    this._forwardBalancerIds.internalValue = value;
  }
  public resetForwardBalancerIds() {
    this._forwardBalancerIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardBalancerIdsInput() {
    return this._forwardBalancerIds.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group tencentcloud_kubernetes_as_scaling_group}
*/
export class KubernetesAsScalingGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_kubernetes_as_scaling_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesAsScalingGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesAsScalingGroup to import
  * @param importFromId The id of the existing KubernetesAsScalingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesAsScalingGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_kubernetes_as_scaling_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_as_scaling_group tencentcloud_kubernetes_as_scaling_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesAsScalingGroupConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesAsScalingGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_kubernetes_as_scaling_group',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._extraArgs = config.extraArgs;
    this._id = config.id;
    this._labels = config.labels;
    this._unschedulable = config.unschedulable;
    this._autoScalingConfig.internalValue = config.autoScalingConfig;
    this._autoScalingGroup.internalValue = config.autoScalingGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // extra_args - computed: false, optional: true, required: false
  private _extraArgs?: string[]; 
  public get extraArgs() {
    return this.getListAttribute('extra_args');
  }
  public set extraArgs(value: string[]) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // unschedulable - computed: false, optional: true, required: false
  private _unschedulable?: number; 
  public get unschedulable() {
    return this.getNumberAttribute('unschedulable');
  }
  public set unschedulable(value: number) {
    this._unschedulable = value;
  }
  public resetUnschedulable() {
    this._unschedulable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unschedulableInput() {
    return this._unschedulable;
  }

  // auto_scaling_config - computed: false, optional: false, required: true
  private _autoScalingConfig = new KubernetesAsScalingGroupAutoScalingConfigOutputReference(this, "auto_scaling_config");
  public get autoScalingConfig() {
    return this._autoScalingConfig;
  }
  public putAutoScalingConfig(value: KubernetesAsScalingGroupAutoScalingConfig) {
    this._autoScalingConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingConfigInput() {
    return this._autoScalingConfig.internalValue;
  }

  // auto_scaling_group - computed: false, optional: false, required: true
  private _autoScalingGroup = new KubernetesAsScalingGroupAutoScalingGroupOutputReference(this, "auto_scaling_group");
  public get autoScalingGroup() {
    return this._autoScalingGroup;
  }
  public putAutoScalingGroup(value: KubernetesAsScalingGroupAutoScalingGroup) {
    this._autoScalingGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingGroupInput() {
    return this._autoScalingGroup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      extra_args: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extraArgs),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      unschedulable: cdktf.numberToTerraform(this._unschedulable),
      auto_scaling_config: kubernetesAsScalingGroupAutoScalingConfigToTerraform(this._autoScalingConfig.internalValue),
      auto_scaling_group: kubernetesAsScalingGroupAutoScalingGroupToTerraform(this._autoScalingGroup.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_args: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extraArgs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      unschedulable: {
        value: cdktf.numberToHclTerraform(this._unschedulable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_scaling_config: {
        value: kubernetesAsScalingGroupAutoScalingConfigToHclTerraform(this._autoScalingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesAsScalingGroupAutoScalingConfigList",
      },
      auto_scaling_group: {
        value: kubernetesAsScalingGroupAutoScalingGroupToHclTerraform(this._autoScalingGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesAsScalingGroupAutoScalingGroupList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
