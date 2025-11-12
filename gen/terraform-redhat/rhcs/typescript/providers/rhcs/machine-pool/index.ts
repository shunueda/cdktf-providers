// https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/machine_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MachinePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enables autoscaling. If `true`, this variable requires you to set a maximum and minimum replicas range using the `max_replicas` and `min_replicas` variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/machine_pool#autoscaling_enabled MachinePool#autoscaling_enabled}
  */
  readonly autoscalingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Select the availability zone in which to create a single AZ machine pool for a multi-AZ cluster. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/machine_pool#availability_zone MachinePool#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * AWS additional security group ids. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/machine_pool#aws_additional_security_group_ids MachinePool#aws_additional_security_group_ids}
  */
  readonly awsAdditionalSecurityGroupIds?: string[];
  /**
  * Apply user defined tags to all machine pool resources created in AWS. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/machine_pool#aws_tags MachinePool#aws_tags}
  */
  readonly awsTags?: { [key: string]: string };
  /**
  * Identifier of the cluster. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/machine_pool#cluster MachinePool#cluster}
  */
  readonly cluster: string;
  /**
  * Root disk size, in GiB. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/machine_pool#disk_size MachinePool#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Indicates to the provider to disregard API errors when deleting the machine pool. This will remove the resource from the management file, but not necessirely delete the underlying pool in case it errors. Setting this to true can bypass issues when destroying the cluster resource alongside the pool resource in the same management file. This is not recommended to be set in other use cases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/machine_pool#ignore_deletion_error MachinePool#ignore_deletion_error}
  */
  readonly ignoreDeletionError?: boolean | cdktf.IResolvable;
  /**
  * Labels for the machine pool. Format should be a comma-separated list of 'key = value'. This list will overwrite any modifications made to node labels on an ongoing basis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/machine_pool#labels MachinePool#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Identifier of the machine type used by the nodes, for example `m5.xlarge`. Use the `rhcs_machine_types` data source to find the possible values. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/machine_pool#machine_type MachinePool#machine_type}
  */
  readonly machineType: string;
  /**
  * The maximum number of replicas for autoscaling functionality.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/machine_pool#max_replicas MachinePool#max_replicas}
  */
  readonly maxReplicas?: number;
  /**
  * Max Spot price. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/machine_pool#max_spot_price MachinePool#max_spot_price}
  */
  readonly maxSpotPrice?: number;
  /**
  * The minimum number of replicas for autoscaling functionality.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/machine_pool#min_replicas MachinePool#min_replicas}
  */
  readonly minReplicas?: number;
  /**
  * Create a multi-AZ machine pool for a multi-AZ cluster (default is `true`). After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/machine_pool#multi_availability_zone MachinePool#multi_availability_zone}
  */
  readonly multiAvailabilityZone?: boolean | cdktf.IResolvable;
  /**
  * Name of the machine pool. Must consist of lower-case alphanumeric characters or '-', start and end with an alphanumeric character. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/machine_pool#name MachinePool#name}
  */
  readonly name: string;
  /**
  * The number of machines of the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/machine_pool#replicas MachinePool#replicas}
  */
  readonly replicas?: number;
  /**
  * Select the subnet in which to create a single AZ machine pool for BYO-VPC cluster. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/machine_pool#subnet_id MachinePool#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Taints for a machine pool. Format should be a comma-separated list of 'key=value'. This list will overwrite any modifications made to node taints on an ongoing basis.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/machine_pool#taints MachinePool#taints}
  */
  readonly taints?: MachinePoolTaints[] | cdktf.IResolvable;
  /**
  * Use Amazon EC2 Spot Instances. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/machine_pool#use_spot_instances MachinePool#use_spot_instances}
  */
  readonly useSpotInstances?: boolean | cdktf.IResolvable;
}
export interface MachinePoolTaints {
  /**
  * Taints key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/machine_pool#key MachinePool#key}
  */
  readonly key: string;
  /**
  * Taints schedule type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/machine_pool#schedule_type MachinePool#schedule_type}
  */
  readonly scheduleType: string;
  /**
  * Taints value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/machine_pool#value MachinePool#value}
  */
  readonly value: string;
}

export function machinePoolTaintsToTerraform(struct?: MachinePoolTaints | cdktf.IResolvable): any {
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


export function machinePoolTaintsToHclTerraform(struct?: MachinePoolTaints | cdktf.IResolvable): any {
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

export class MachinePoolTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MachinePoolTaints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MachinePoolTaints | cdktf.IResolvable | undefined) {
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

export class MachinePoolTaintsList extends cdktf.ComplexList {
  public internalValue? : MachinePoolTaints[] | cdktf.IResolvable

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
  public get(index: number): MachinePoolTaintsOutputReference {
    return new MachinePoolTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/machine_pool rhcs_machine_pool}
*/
export class MachinePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rhcs_machine_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MachinePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MachinePool to import
  * @param importFromId The id of the existing MachinePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/machine_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MachinePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rhcs_machine_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/machine_pool rhcs_machine_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MachinePoolConfig
  */
  public constructor(scope: Construct, id: string, config: MachinePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'rhcs_machine_pool',
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
    this._autoscalingEnabled = config.autoscalingEnabled;
    this._availabilityZone = config.availabilityZone;
    this._awsAdditionalSecurityGroupIds = config.awsAdditionalSecurityGroupIds;
    this._awsTags = config.awsTags;
    this._cluster = config.cluster;
    this._diskSize = config.diskSize;
    this._ignoreDeletionError = config.ignoreDeletionError;
    this._labels = config.labels;
    this._machineType = config.machineType;
    this._maxReplicas = config.maxReplicas;
    this._maxSpotPrice = config.maxSpotPrice;
    this._minReplicas = config.minReplicas;
    this._multiAvailabilityZone = config.multiAvailabilityZone;
    this._name = config.name;
    this._replicas = config.replicas;
    this._subnetId = config.subnetId;
    this._taints.internalValue = config.taints;
    this._useSpotInstances = config.useSpotInstances;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autoscaling_enabled - computed: false, optional: true, required: false
  private _autoscalingEnabled?: boolean | cdktf.IResolvable; 
  public get autoscalingEnabled() {
    return this.getBooleanAttribute('autoscaling_enabled');
  }
  public set autoscalingEnabled(value: boolean | cdktf.IResolvable) {
    this._autoscalingEnabled = value;
  }
  public resetAutoscalingEnabled() {
    this._autoscalingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingEnabledInput() {
    return this._autoscalingEnabled;
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

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // aws_additional_security_group_ids - computed: false, optional: true, required: false
  private _awsAdditionalSecurityGroupIds?: string[]; 
  public get awsAdditionalSecurityGroupIds() {
    return this.getListAttribute('aws_additional_security_group_ids');
  }
  public set awsAdditionalSecurityGroupIds(value: string[]) {
    this._awsAdditionalSecurityGroupIds = value;
  }
  public resetAwsAdditionalSecurityGroupIds() {
    this._awsAdditionalSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAdditionalSecurityGroupIdsInput() {
    return this._awsAdditionalSecurityGroupIds;
  }

  // aws_tags - computed: false, optional: true, required: false
  private _awsTags?: { [key: string]: string }; 
  public get awsTags() {
    return this.getStringMapAttribute('aws_tags');
  }
  public set awsTags(value: { [key: string]: string }) {
    this._awsTags = value;
  }
  public resetAwsTags() {
    this._awsTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsTagsInput() {
    return this._awsTags;
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

  // machine_type - computed: false, optional: false, required: true
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
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

  // max_spot_price - computed: false, optional: true, required: false
  private _maxSpotPrice?: number; 
  public get maxSpotPrice() {
    return this.getNumberAttribute('max_spot_price');
  }
  public set maxSpotPrice(value: number) {
    this._maxSpotPrice = value;
  }
  public resetMaxSpotPrice() {
    this._maxSpotPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSpotPriceInput() {
    return this._maxSpotPrice;
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

  // multi_availability_zone - computed: true, optional: true, required: false
  private _multiAvailabilityZone?: boolean | cdktf.IResolvable; 
  public get multiAvailabilityZone() {
    return this.getBooleanAttribute('multi_availability_zone');
  }
  public set multiAvailabilityZone(value: boolean | cdktf.IResolvable) {
    this._multiAvailabilityZone = value;
  }
  public resetMultiAvailabilityZone() {
    this._multiAvailabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAvailabilityZoneInput() {
    return this._multiAvailabilityZone;
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

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new MachinePoolTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: MachinePoolTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }

  // use_spot_instances - computed: false, optional: true, required: false
  private _useSpotInstances?: boolean | cdktf.IResolvable; 
  public get useSpotInstances() {
    return this.getBooleanAttribute('use_spot_instances');
  }
  public set useSpotInstances(value: boolean | cdktf.IResolvable) {
    this._useSpotInstances = value;
  }
  public resetUseSpotInstances() {
    this._useSpotInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSpotInstancesInput() {
    return this._useSpotInstances;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autoscaling_enabled: cdktf.booleanToTerraform(this._autoscalingEnabled),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      aws_additional_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsAdditionalSecurityGroupIds),
      aws_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._awsTags),
      cluster: cdktf.stringToTerraform(this._cluster),
      disk_size: cdktf.numberToTerraform(this._diskSize),
      ignore_deletion_error: cdktf.booleanToTerraform(this._ignoreDeletionError),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      machine_type: cdktf.stringToTerraform(this._machineType),
      max_replicas: cdktf.numberToTerraform(this._maxReplicas),
      max_spot_price: cdktf.numberToTerraform(this._maxSpotPrice),
      min_replicas: cdktf.numberToTerraform(this._minReplicas),
      multi_availability_zone: cdktf.booleanToTerraform(this._multiAvailabilityZone),
      name: cdktf.stringToTerraform(this._name),
      replicas: cdktf.numberToTerraform(this._replicas),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      taints: cdktf.listMapper(machinePoolTaintsToTerraform, false)(this._taints.internalValue),
      use_spot_instances: cdktf.booleanToTerraform(this._useSpotInstances),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autoscaling_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoscalingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_additional_security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsAdditionalSecurityGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._awsTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_size: {
        value: cdktf.numberToHclTerraform(this._diskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ignore_deletion_error: {
        value: cdktf.booleanToHclTerraform(this._ignoreDeletionError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      machine_type: {
        value: cdktf.stringToHclTerraform(this._machineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_replicas: {
        value: cdktf.numberToHclTerraform(this._maxReplicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_spot_price: {
        value: cdktf.numberToHclTerraform(this._maxSpotPrice),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_replicas: {
        value: cdktf.numberToHclTerraform(this._minReplicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multi_availability_zone: {
        value: cdktf.booleanToHclTerraform(this._multiAvailabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
        value: cdktf.listMapperHcl(machinePoolTaintsToHclTerraform, false)(this._taints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MachinePoolTaintsList",
      },
      use_spot_instances: {
        value: cdktf.booleanToHclTerraform(this._useSpotInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
