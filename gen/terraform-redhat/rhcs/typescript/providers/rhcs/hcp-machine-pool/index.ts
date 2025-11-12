// https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_machine_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HcpMachinePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates use of autor repair for the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_machine_pool#auto_repair HcpMachinePool#auto_repair}
  */
  readonly autoRepair: boolean | cdktf.IResolvable;
  /**
  * Basic autoscaling options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_machine_pool#autoscaling HcpMachinePool#autoscaling}
  */
  readonly autoscaling: HcpMachinePoolAutoscaling;
  /**
  * AWS settings for node pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_machine_pool#aws_node_pool HcpMachinePool#aws_node_pool}
  */
  readonly awsNodePool: HcpMachinePoolAwsNodePool;
  /**
  * Identifier of the cluster. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_machine_pool#cluster HcpMachinePool#cluster}
  */
  readonly cluster: string;
  /**
  * Indicates to the provider to disregard API errors when deleting the machine pool. This will remove the resource from the management file, but not necessirely delete the underlying pool in case it errors. Setting this to true can bypass issues when destroying the cluster resource alongside the pool resource in the same management file. This is not recommended to be set in other use cases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_machine_pool#ignore_deletion_error HcpMachinePool#ignore_deletion_error}
  */
  readonly ignoreDeletionError?: boolean | cdktf.IResolvable;
  /**
  * Name of the kubelet config applied to the machine pool. A single kubelet config is allowed. Kubelet config must already exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_machine_pool#kubelet_configs HcpMachinePool#kubelet_configs}
  */
  readonly kubeletConfigs?: string;
  /**
  * Labels for the machine pool. Format should be a comma-separated list of 'key = value'. This list will overwrite any modifications made to node labels on an ongoing basis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_machine_pool#labels HcpMachinePool#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the machine pool. Must consist of lower-case alphanumeric characters or '-', start and end with an alphanumeric character. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_machine_pool#name HcpMachinePool#name}
  */
  readonly name: string;
  /**
  * The number of machines of the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_machine_pool#replicas HcpMachinePool#replicas}
  */
  readonly replicas?: number;
  /**
  * Select the subnet in which to create a single AZ machine pool for BYO-VPC cluster. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_machine_pool#subnet_id HcpMachinePool#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Taints for a machine pool. Format should be a comma-separated list of 'key=value'. This list will overwrite any modifications made to node taints on an ongoing basis.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_machine_pool#taints HcpMachinePool#taints}
  */
  readonly taints?: HcpMachinePoolTaints[] | cdktf.IResolvable;
  /**
  * A list of tuning configs attached to the pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_machine_pool#tuning_configs HcpMachinePool#tuning_configs}
  */
  readonly tuningConfigs?: string[];
  /**
  * Indicates acknowledgement of agreements required to upgrade the cluster version between minor versions (e.g. a value of "4.12" indicates acknowledgement of any agreements required to upgrade to OpenShift 4.12.z from 4.11 or before).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_machine_pool#upgrade_acknowledgements_for HcpMachinePool#upgrade_acknowledgements_for}
  */
  readonly upgradeAcknowledgementsFor?: string;
  /**
  * Desired version of OpenShift for the machine pool, for example '4.11.0'. If version is greater than the currently running version, an upgrade will be scheduled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_machine_pool#version HcpMachinePool#version}
  */
  readonly version?: string;
}
export interface HcpMachinePoolAutoscaling {
  /**
  * Enables autoscaling. If `true`, this variable requires you to set a maximum and minimum replicas range using the `max_replicas` and `min_replicas` variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_machine_pool#enabled HcpMachinePool#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The maximum number of replicas for autoscaling functionality.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_machine_pool#max_replicas HcpMachinePool#max_replicas}
  */
  readonly maxReplicas?: number;
  /**
  * The minimum number of replicas for autoscaling functionality.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_machine_pool#min_replicas HcpMachinePool#min_replicas}
  */
  readonly minReplicas?: number;
}

export function hcpMachinePoolAutoscalingToTerraform(struct?: HcpMachinePoolAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
  }
}


export function hcpMachinePoolAutoscalingToHclTerraform(struct?: HcpMachinePoolAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_replicas: {
      value: cdktf.numberToHclTerraform(struct!.maxReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_replicas: {
      value: cdktf.numberToHclTerraform(struct!.minReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HcpMachinePoolAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HcpMachinePoolAutoscaling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicas = this._maxReplicas;
    }
    if (this._minReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicas = this._minReplicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HcpMachinePoolAutoscaling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._maxReplicas = undefined;
      this._minReplicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._maxReplicas = value.maxReplicas;
      this._minReplicas = value.minReplicas;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // max_replicas - computed: false, optional: true, required: false
  private _maxReplicas?: number; 
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }
  public set maxReplicas(value: number) {
    this._maxReplicas = value;
  }
  public resetMaxReplicas() {
    this._maxReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicasInput() {
    return this._maxReplicas;
  }

  // min_replicas - computed: false, optional: true, required: false
  private _minReplicas?: number; 
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
  public set minReplicas(value: number) {
    this._minReplicas = value;
  }
  public resetMinReplicas() {
    this._minReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicasInput() {
    return this._minReplicas;
  }
}
export interface HcpMachinePoolAwsNodePool {
  /**
  * Additional security group ids. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_machine_pool#additional_security_group_ids HcpMachinePool#additional_security_group_ids}
  */
  readonly additionalSecurityGroupIds?: string[];
  /**
  * The ID of the AWS Capacity Reservation to use for the node pool. Cannot be set when autoscaling is enabled. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_machine_pool#capacity_reservation_id HcpMachinePool#capacity_reservation_id}
  */
  readonly capacityReservationId?: string;
  /**
  * Root disk size, in GiB. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_machine_pool#disk_size HcpMachinePool#disk_size}
  */
  readonly diskSize?: number;
  /**
  * This value determines which EC2 Instance Metadata Service mode to use for EC2 instances in the nodes.This can be set as `optional` (IMDS v1 or v2) or `required` (IMDSv2 only). This feature is available from After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_machine_pool#ec2_metadata_http_tokens HcpMachinePool#ec2_metadata_http_tokens}
  */
  readonly ec2MetadataHttpTokens?: string;
  /**
  * Identifier of the machine type used by the nodes, for example `m5.xlarge`. Use the `rhcs_machine_types` data source to find the possible values. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_machine_pool#instance_type HcpMachinePool#instance_type}
  */
  readonly instanceType: string;
  /**
  * Apply user defined tags to all machine pool resources created in AWS.After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_machine_pool#tags HcpMachinePool#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function hcpMachinePoolAwsNodePoolToTerraform(struct?: HcpMachinePoolAwsNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalSecurityGroupIds),
    capacity_reservation_id: cdktf.stringToTerraform(struct!.capacityReservationId),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    ec2_metadata_http_tokens: cdktf.stringToTerraform(struct!.ec2MetadataHttpTokens),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function hcpMachinePoolAwsNodePoolToHclTerraform(struct?: HcpMachinePoolAwsNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalSecurityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    capacity_reservation_id: {
      value: cdktf.stringToHclTerraform(struct!.capacityReservationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ec2_metadata_http_tokens: {
      value: cdktf.stringToHclTerraform(struct!.ec2MetadataHttpTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HcpMachinePoolAwsNodePoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HcpMachinePoolAwsNodePool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalSecurityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalSecurityGroupIds = this._additionalSecurityGroupIds;
    }
    if (this._capacityReservationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationId = this._capacityReservationId;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._ec2MetadataHttpTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2MetadataHttpTokens = this._ec2MetadataHttpTokens;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HcpMachinePoolAwsNodePool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalSecurityGroupIds = undefined;
      this._capacityReservationId = undefined;
      this._diskSize = undefined;
      this._ec2MetadataHttpTokens = undefined;
      this._instanceType = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalSecurityGroupIds = value.additionalSecurityGroupIds;
      this._capacityReservationId = value.capacityReservationId;
      this._diskSize = value.diskSize;
      this._ec2MetadataHttpTokens = value.ec2MetadataHttpTokens;
      this._instanceType = value.instanceType;
      this._tags = value.tags;
    }
  }

  // additional_security_group_ids - computed: false, optional: true, required: false
  private _additionalSecurityGroupIds?: string[]; 
  public get additionalSecurityGroupIds() {
    return this.getListAttribute('additional_security_group_ids');
  }
  public set additionalSecurityGroupIds(value: string[]) {
    this._additionalSecurityGroupIds = value;
  }
  public resetAdditionalSecurityGroupIds() {
    this._additionalSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalSecurityGroupIdsInput() {
    return this._additionalSecurityGroupIds;
  }

  // capacity_reservation_id - computed: false, optional: true, required: false
  private _capacityReservationId?: string; 
  public get capacityReservationId() {
    return this.getStringAttribute('capacity_reservation_id');
  }
  public set capacityReservationId(value: string) {
    this._capacityReservationId = value;
  }
  public resetCapacityReservationId() {
    this._capacityReservationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationIdInput() {
    return this._capacityReservationId;
  }

  // disk_size - computed: true, optional: true, required: false
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

  // ec2_metadata_http_tokens - computed: true, optional: true, required: false
  private _ec2MetadataHttpTokens?: string; 
  public get ec2MetadataHttpTokens() {
    return this.getStringAttribute('ec2_metadata_http_tokens');
  }
  public set ec2MetadataHttpTokens(value: string) {
    this._ec2MetadataHttpTokens = value;
  }
  public resetEc2MetadataHttpTokens() {
    this._ec2MetadataHttpTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2MetadataHttpTokensInput() {
    return this._ec2MetadataHttpTokens;
  }

  // instance_profile - computed: true, optional: false, required: false
  public get instanceProfile() {
    return this.getStringAttribute('instance_profile');
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
}
export interface HcpMachinePoolStatus {
}

export function hcpMachinePoolStatusToTerraform(struct?: HcpMachinePoolStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function hcpMachinePoolStatusToHclTerraform(struct?: HcpMachinePoolStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class HcpMachinePoolStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HcpMachinePoolStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HcpMachinePoolStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_replicas - computed: true, optional: false, required: false
  public get currentReplicas() {
    return this.getNumberAttribute('current_replicas');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}
export interface HcpMachinePoolTaints {
  /**
  * Taints key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_machine_pool#key HcpMachinePool#key}
  */
  readonly key: string;
  /**
  * Taints schedule type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_machine_pool#schedule_type HcpMachinePool#schedule_type}
  */
  readonly scheduleType: string;
  /**
  * Taints value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_machine_pool#value HcpMachinePool#value}
  */
  readonly value: string;
}

export function hcpMachinePoolTaintsToTerraform(struct?: HcpMachinePoolTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    schedule_type: cdktf.stringToTerraform(struct!.scheduleType),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hcpMachinePoolTaintsToHclTerraform(struct?: HcpMachinePoolTaints | cdktf.IResolvable): any {
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
    schedule_type: {
      value: cdktf.stringToHclTerraform(struct!.scheduleType),
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

export class HcpMachinePoolTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HcpMachinePoolTaints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._scheduleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleType = this._scheduleType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HcpMachinePoolTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._scheduleType = undefined;
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
      this._scheduleType = value.scheduleType;
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

  // schedule_type - computed: false, optional: false, required: true
  private _scheduleType?: string; 
  public get scheduleType() {
    return this.getStringAttribute('schedule_type');
  }
  public set scheduleType(value: string) {
    this._scheduleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTypeInput() {
    return this._scheduleType;
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

export class HcpMachinePoolTaintsList extends cdktf.ComplexList {
  public internalValue? : HcpMachinePoolTaints[] | cdktf.IResolvable

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
  public get(index: number): HcpMachinePoolTaintsOutputReference {
    return new HcpMachinePoolTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_machine_pool rhcs_hcp_machine_pool}
*/
export class HcpMachinePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rhcs_hcp_machine_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HcpMachinePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HcpMachinePool to import
  * @param importFromId The id of the existing HcpMachinePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_machine_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HcpMachinePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rhcs_hcp_machine_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_machine_pool rhcs_hcp_machine_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HcpMachinePoolConfig
  */
  public constructor(scope: Construct, id: string, config: HcpMachinePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'rhcs_hcp_machine_pool',
      terraformGeneratorMetadata: {
        providerName: 'rhcs',
        providerVersion: '1.7.2',
        providerVersionConstraint: '1.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRepair = config.autoRepair;
    this._autoscaling.internalValue = config.autoscaling;
    this._awsNodePool.internalValue = config.awsNodePool;
    this._cluster = config.cluster;
    this._ignoreDeletionError = config.ignoreDeletionError;
    this._kubeletConfigs = config.kubeletConfigs;
    this._labels = config.labels;
    this._name = config.name;
    this._replicas = config.replicas;
    this._subnetId = config.subnetId;
    this._taints.internalValue = config.taints;
    this._tuningConfigs = config.tuningConfigs;
    this._upgradeAcknowledgementsFor = config.upgradeAcknowledgementsFor;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_repair - computed: false, optional: false, required: true
  private _autoRepair?: boolean | cdktf.IResolvable; 
  public get autoRepair() {
    return this.getBooleanAttribute('auto_repair');
  }
  public set autoRepair(value: boolean | cdktf.IResolvable) {
    this._autoRepair = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRepairInput() {
    return this._autoRepair;
  }

  // autoscaling - computed: false, optional: false, required: true
  private _autoscaling = new HcpMachinePoolAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: HcpMachinePoolAutoscaling) {
    this._autoscaling.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingInput() {
    return this._autoscaling.internalValue;
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // aws_node_pool - computed: false, optional: false, required: true
  private _awsNodePool = new HcpMachinePoolAwsNodePoolOutputReference(this, "aws_node_pool");
  public get awsNodePool() {
    return this._awsNodePool;
  }
  public putAwsNodePool(value: HcpMachinePoolAwsNodePool) {
    this._awsNodePool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsNodePoolInput() {
    return this._awsNodePool.internalValue;
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

  // current_version - computed: true, optional: false, required: false
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_deletion_error - computed: true, optional: true, required: false
  private _ignoreDeletionError?: boolean | cdktf.IResolvable; 
  public get ignoreDeletionError() {
    return this.getBooleanAttribute('ignore_deletion_error');
  }
  public set ignoreDeletionError(value: boolean | cdktf.IResolvable) {
    this._ignoreDeletionError = value;
  }
  public resetIgnoreDeletionError() {
    this._ignoreDeletionError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDeletionErrorInput() {
    return this._ignoreDeletionError;
  }

  // kubelet_configs - computed: false, optional: true, required: false
  private _kubeletConfigs?: string; 
  public get kubeletConfigs() {
    return this.getStringAttribute('kubelet_configs');
  }
  public set kubeletConfigs(value: string) {
    this._kubeletConfigs = value;
  }
  public resetKubeletConfigs() {
    this._kubeletConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletConfigsInput() {
    return this._kubeletConfigs;
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

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // status - computed: true, optional: false, required: false
  private _status = new HcpMachinePoolStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new HcpMachinePoolTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: HcpMachinePoolTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }

  // tuning_configs - computed: false, optional: true, required: false
  private _tuningConfigs?: string[]; 
  public get tuningConfigs() {
    return this.getListAttribute('tuning_configs');
  }
  public set tuningConfigs(value: string[]) {
    this._tuningConfigs = value;
  }
  public resetTuningConfigs() {
    this._tuningConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tuningConfigsInput() {
    return this._tuningConfigs;
  }

  // upgrade_acknowledgements_for - computed: false, optional: true, required: false
  private _upgradeAcknowledgementsFor?: string; 
  public get upgradeAcknowledgementsFor() {
    return this.getStringAttribute('upgrade_acknowledgements_for');
  }
  public set upgradeAcknowledgementsFor(value: string) {
    this._upgradeAcknowledgementsFor = value;
  }
  public resetUpgradeAcknowledgementsFor() {
    this._upgradeAcknowledgementsFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeAcknowledgementsForInput() {
    return this._upgradeAcknowledgementsFor;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_repair: cdktf.booleanToTerraform(this._autoRepair),
      autoscaling: hcpMachinePoolAutoscalingToTerraform(this._autoscaling.internalValue),
      aws_node_pool: hcpMachinePoolAwsNodePoolToTerraform(this._awsNodePool.internalValue),
      cluster: cdktf.stringToTerraform(this._cluster),
      ignore_deletion_error: cdktf.booleanToTerraform(this._ignoreDeletionError),
      kubelet_configs: cdktf.stringToTerraform(this._kubeletConfigs),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      replicas: cdktf.numberToTerraform(this._replicas),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      taints: cdktf.listMapper(hcpMachinePoolTaintsToTerraform, false)(this._taints.internalValue),
      tuning_configs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tuningConfigs),
      upgrade_acknowledgements_for: cdktf.stringToTerraform(this._upgradeAcknowledgementsFor),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_repair: {
        value: cdktf.booleanToHclTerraform(this._autoRepair),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      autoscaling: {
        value: hcpMachinePoolAutoscalingToHclTerraform(this._autoscaling.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HcpMachinePoolAutoscaling",
      },
      aws_node_pool: {
        value: hcpMachinePoolAwsNodePoolToHclTerraform(this._awsNodePool.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HcpMachinePoolAwsNodePool",
      },
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_deletion_error: {
        value: cdktf.booleanToHclTerraform(this._ignoreDeletionError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kubelet_configs: {
        value: cdktf.stringToHclTerraform(this._kubeletConfigs),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replicas: {
        value: cdktf.numberToHclTerraform(this._replicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      taints: {
        value: cdktf.listMapperHcl(hcpMachinePoolTaintsToHclTerraform, false)(this._taints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HcpMachinePoolTaintsList",
      },
      tuning_configs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tuningConfigs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      upgrade_acknowledgements_for: {
        value: cdktf.stringToHclTerraform(this._upgradeAcknowledgementsFor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
