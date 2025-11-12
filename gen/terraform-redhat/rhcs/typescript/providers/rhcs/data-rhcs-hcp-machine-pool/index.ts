// https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/hcp_machine_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRhcsHcpMachinePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates use of autor repair for replica
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/hcp_machine_pool#auto_repair DataRhcsHcpMachinePool#auto_repair}
  */
  readonly autoRepair?: boolean | cdktf.IResolvable;
  /**
  * Identifier of the cluster. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/hcp_machine_pool#cluster DataRhcsHcpMachinePool#cluster}
  */
  readonly cluster: string;
  /**
  * Name of the machine pool. Must consist of lower-case alphanumeric characters or '-', start and end with an alphanumeric character. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/hcp_machine_pool#name DataRhcsHcpMachinePool#name}
  */
  readonly name: string;
  /**
  * Desired version of OpenShift for the machine pool, for example '4.11.0'. If version is greater than the currently running version, an upgrade will be scheduled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/hcp_machine_pool#version DataRhcsHcpMachinePool#version}
  */
  readonly version?: string;
}
export interface DataRhcsHcpMachinePoolAutoscaling {
}

export function dataRhcsHcpMachinePoolAutoscalingToTerraform(struct?: DataRhcsHcpMachinePoolAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRhcsHcpMachinePoolAutoscalingToHclTerraform(struct?: DataRhcsHcpMachinePoolAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRhcsHcpMachinePoolAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRhcsHcpMachinePoolAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRhcsHcpMachinePoolAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // max_replicas - computed: true, optional: false, required: false
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }

  // min_replicas - computed: true, optional: false, required: false
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
}
export interface DataRhcsHcpMachinePoolAwsNodePool {
  /**
  * Additional security group ids. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/hcp_machine_pool#additional_security_group_ids DataRhcsHcpMachinePool#additional_security_group_ids}
  */
  readonly additionalSecurityGroupIds?: string[];
  /**
  * The ID of the AWS Capacity Reservation used for the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/hcp_machine_pool#capacity_reservation_id DataRhcsHcpMachinePool#capacity_reservation_id}
  */
  readonly capacityReservationId?: string;
  /**
  * The root disk size, in GiB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/hcp_machine_pool#disk_size DataRhcsHcpMachinePool#disk_size}
  */
  readonly diskSize?: number;
  /**
  * This value determines which EC2 Instance Metadata Service mode to use for EC2 instances in the nodes.This can be set as `optional` (IMDS v1 or v2) or `required` (IMDSv2 only). This feature is available from After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/hcp_machine_pool#ec2_metadata_http_tokens DataRhcsHcpMachinePool#ec2_metadata_http_tokens}
  */
  readonly ec2MetadataHttpTokens?: string;
  /**
  * Apply user defined tags to all machine pool resources created in AWS. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/hcp_machine_pool#tags DataRhcsHcpMachinePool#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataRhcsHcpMachinePoolAwsNodePoolToTerraform(struct?: DataRhcsHcpMachinePoolAwsNodePool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalSecurityGroupIds),
    capacity_reservation_id: cdktf.stringToTerraform(struct!.capacityReservationId),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    ec2_metadata_http_tokens: cdktf.stringToTerraform(struct!.ec2MetadataHttpTokens),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataRhcsHcpMachinePoolAwsNodePoolToHclTerraform(struct?: DataRhcsHcpMachinePoolAwsNodePool): any {
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

export class DataRhcsHcpMachinePoolAwsNodePoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRhcsHcpMachinePoolAwsNodePool | undefined {
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
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRhcsHcpMachinePoolAwsNodePool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalSecurityGroupIds = undefined;
      this._capacityReservationId = undefined;
      this._diskSize = undefined;
      this._ec2MetadataHttpTokens = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalSecurityGroupIds = value.additionalSecurityGroupIds;
      this._capacityReservationId = value.capacityReservationId;
      this._diskSize = value.diskSize;
      this._ec2MetadataHttpTokens = value.ec2MetadataHttpTokens;
      this._tags = value.tags;
    }
  }

  // additional_security_group_ids - computed: true, optional: true, required: false
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

  // capacity_reservation_id - computed: true, optional: true, required: false
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

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
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
}
export interface DataRhcsHcpMachinePoolStatus {
}

export function dataRhcsHcpMachinePoolStatusToTerraform(struct?: DataRhcsHcpMachinePoolStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRhcsHcpMachinePoolStatusToHclTerraform(struct?: DataRhcsHcpMachinePoolStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRhcsHcpMachinePoolStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRhcsHcpMachinePoolStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRhcsHcpMachinePoolStatus | undefined) {
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
export interface DataRhcsHcpMachinePoolTaints {
  /**
  * Taints key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/hcp_machine_pool#key DataRhcsHcpMachinePool#key}
  */
  readonly key: string;
  /**
  * Taints schedule type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/hcp_machine_pool#schedule_type DataRhcsHcpMachinePool#schedule_type}
  */
  readonly scheduleType: string;
  /**
  * Taints value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/hcp_machine_pool#value DataRhcsHcpMachinePool#value}
  */
  readonly value: string;
}

export function dataRhcsHcpMachinePoolTaintsToTerraform(struct?: DataRhcsHcpMachinePoolTaints): any {
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


export function dataRhcsHcpMachinePoolTaintsToHclTerraform(struct?: DataRhcsHcpMachinePoolTaints): any {
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

export class DataRhcsHcpMachinePoolTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRhcsHcpMachinePoolTaints | undefined {
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

  public set internalValue(value: DataRhcsHcpMachinePoolTaints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._scheduleType = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._scheduleType = value.scheduleType;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: false, required: true
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

  // schedule_type - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
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

export class DataRhcsHcpMachinePoolTaintsList extends cdktf.ComplexList {
  public internalValue? : DataRhcsHcpMachinePoolTaints[] | cdktf.IResolvable

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
  public get(index: number): DataRhcsHcpMachinePoolTaintsOutputReference {
    return new DataRhcsHcpMachinePoolTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/hcp_machine_pool rhcs_hcp_machine_pool}
*/
export class DataRhcsHcpMachinePool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rhcs_hcp_machine_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRhcsHcpMachinePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRhcsHcpMachinePool to import
  * @param importFromId The id of the existing DataRhcsHcpMachinePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/hcp_machine_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRhcsHcpMachinePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rhcs_hcp_machine_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/hcp_machine_pool rhcs_hcp_machine_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRhcsHcpMachinePoolConfig
  */
  public constructor(scope: Construct, id: string, config: DataRhcsHcpMachinePoolConfig) {
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
    this._cluster = config.cluster;
    this._name = config.name;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // autoscaling - computed: true, optional: false, required: false
  private _autoscaling = new DataRhcsHcpMachinePoolAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // aws_node_pool - computed: true, optional: false, required: false
  private _awsNodePool = new DataRhcsHcpMachinePoolAwsNodePoolOutputReference(this, "aws_node_pool");
  public get awsNodePool() {
    return this._awsNodePool;
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

  // ignore_deletion_error - computed: true, optional: false, required: false
  public get ignoreDeletionError() {
    return this.getBooleanAttribute('ignore_deletion_error');
  }

  // kubelet_configs - computed: true, optional: false, required: false
  public get kubeletConfigs() {
    return this.getStringAttribute('kubelet_configs');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
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

  // replicas - computed: true, optional: false, required: false
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataRhcsHcpMachinePoolStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // taints - computed: true, optional: false, required: false
  private _taints = new DataRhcsHcpMachinePoolTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }

  // tuning_configs - computed: true, optional: false, required: false
  public get tuningConfigs() {
    return this.getListAttribute('tuning_configs');
  }

  // upgrade_acknowledgements_for - computed: true, optional: false, required: false
  public get upgradeAcknowledgementsFor() {
    return this.getStringAttribute('upgrade_acknowledgements_for');
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
      cluster: cdktf.stringToTerraform(this._cluster),
      name: cdktf.stringToTerraform(this._name),
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
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
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
