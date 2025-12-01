// https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceanAwsLaunchSpecConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#associate_public_ip_address OceanAwsLaunchSpec#associate_public_ip_address}
  */
  readonly associatePublicIpAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#iam_instance_profile OceanAwsLaunchSpec#iam_instance_profile}
  */
  readonly iamInstanceProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#id OceanAwsLaunchSpec#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#image_id OceanAwsLaunchSpec#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#instance_types OceanAwsLaunchSpec#instance_types}
  */
  readonly instanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#name OceanAwsLaunchSpec#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#ocean_id OceanAwsLaunchSpec#ocean_id}
  */
  readonly oceanId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#preferred_od_types OceanAwsLaunchSpec#preferred_od_types}
  */
  readonly preferredOdTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#preferred_spot_types OceanAwsLaunchSpec#preferred_spot_types}
  */
  readonly preferredSpotTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#reserved_enis OceanAwsLaunchSpec#reserved_enis}
  */
  readonly reservedEnis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#restrict_scale_down OceanAwsLaunchSpec#restrict_scale_down}
  */
  readonly restrictScaleDown?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#root_volume_size OceanAwsLaunchSpec#root_volume_size}
  */
  readonly rootVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#security_groups OceanAwsLaunchSpec#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#subnet_ids OceanAwsLaunchSpec#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#user_data OceanAwsLaunchSpec#user_data}
  */
  readonly userData?: string;
  /**
  * autoscale_down block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#autoscale_down OceanAwsLaunchSpec#autoscale_down}
  */
  readonly autoscaleDown?: OceanAwsLaunchSpecAutoscaleDown[] | cdktf.IResolvable;
  /**
  * autoscale_headrooms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#autoscale_headrooms OceanAwsLaunchSpec#autoscale_headrooms}
  */
  readonly autoscaleHeadrooms?: OceanAwsLaunchSpecAutoscaleHeadrooms[] | cdktf.IResolvable;
  /**
  * autoscale_headrooms_automatic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#autoscale_headrooms_automatic OceanAwsLaunchSpec#autoscale_headrooms_automatic}
  */
  readonly autoscaleHeadroomsAutomatic?: OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic[] | cdktf.IResolvable;
  /**
  * block_device_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#block_device_mappings OceanAwsLaunchSpec#block_device_mappings}
  */
  readonly blockDeviceMappings?: OceanAwsLaunchSpecBlockDeviceMappings[] | cdktf.IResolvable;
  /**
  * create_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#create_options OceanAwsLaunchSpec#create_options}
  */
  readonly createOptions?: OceanAwsLaunchSpecCreateOptions;
  /**
  * delete_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#delete_options OceanAwsLaunchSpec#delete_options}
  */
  readonly deleteOptions?: OceanAwsLaunchSpecDeleteOptions;
  /**
  * elastic_ip_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#elastic_ip_pool OceanAwsLaunchSpec#elastic_ip_pool}
  */
  readonly elasticIpPool?: OceanAwsLaunchSpecElasticIpPool[] | cdktf.IResolvable;
  /**
  * ephemeral_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#ephemeral_storage OceanAwsLaunchSpec#ephemeral_storage}
  */
  readonly ephemeralStorage?: OceanAwsLaunchSpecEphemeralStorage[] | cdktf.IResolvable;
  /**
  * images block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#images OceanAwsLaunchSpec#images}
  */
  readonly images?: OceanAwsLaunchSpecImages[] | cdktf.IResolvable;
  /**
  * instance_metadata_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#instance_metadata_options OceanAwsLaunchSpec#instance_metadata_options}
  */
  readonly instanceMetadataOptions?: OceanAwsLaunchSpecInstanceMetadataOptions;
  /**
  * instance_store_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#instance_store_policy OceanAwsLaunchSpec#instance_store_policy}
  */
  readonly instanceStorePolicy?: OceanAwsLaunchSpecInstanceStorePolicy;
  /**
  * instance_types_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#instance_types_filters OceanAwsLaunchSpec#instance_types_filters}
  */
  readonly instanceTypesFilters?: OceanAwsLaunchSpecInstanceTypesFilters;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#labels OceanAwsLaunchSpec#labels}
  */
  readonly labels?: OceanAwsLaunchSpecLabels[] | cdktf.IResolvable;
  /**
  * load_balancers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#load_balancers OceanAwsLaunchSpec#load_balancers}
  */
  readonly loadBalancers?: OceanAwsLaunchSpecLoadBalancers[] | cdktf.IResolvable;
  /**
  * resource_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#resource_limits OceanAwsLaunchSpec#resource_limits}
  */
  readonly resourceLimits?: OceanAwsLaunchSpecResourceLimits[] | cdktf.IResolvable;
  /**
  * scheduling_shutdown_hours block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#scheduling_shutdown_hours OceanAwsLaunchSpec#scheduling_shutdown_hours}
  */
  readonly schedulingShutdownHours?: OceanAwsLaunchSpecSchedulingShutdownHours;
  /**
  * scheduling_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#scheduling_task OceanAwsLaunchSpec#scheduling_task}
  */
  readonly schedulingTask?: OceanAwsLaunchSpecSchedulingTask[] | cdktf.IResolvable;
  /**
  * startup_taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#startup_taints OceanAwsLaunchSpec#startup_taints}
  */
  readonly startupTaints?: OceanAwsLaunchSpecStartupTaints[] | cdktf.IResolvable;
  /**
  * strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#strategy OceanAwsLaunchSpec#strategy}
  */
  readonly strategy?: OceanAwsLaunchSpecStrategy[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#tags OceanAwsLaunchSpec#tags}
  */
  readonly tags?: OceanAwsLaunchSpecTags[] | cdktf.IResolvable;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#taints OceanAwsLaunchSpec#taints}
  */
  readonly taints?: OceanAwsLaunchSpecTaints[] | cdktf.IResolvable;
  /**
  * update_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#update_policy OceanAwsLaunchSpec#update_policy}
  */
  readonly updatePolicy?: OceanAwsLaunchSpecUpdatePolicy;
}
export interface OceanAwsLaunchSpecAutoscaleDown {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#is_aggressive_scale_down_enabled OceanAwsLaunchSpec#is_aggressive_scale_down_enabled}
  */
  readonly isAggressiveScaleDownEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#max_scale_down_percentage OceanAwsLaunchSpec#max_scale_down_percentage}
  */
  readonly maxScaleDownPercentage?: number;
}

export function oceanAwsLaunchSpecAutoscaleDownToTerraform(struct?: OceanAwsLaunchSpecAutoscaleDown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_aggressive_scale_down_enabled: cdktf.booleanToTerraform(struct!.isAggressiveScaleDownEnabled),
    max_scale_down_percentage: cdktf.numberToTerraform(struct!.maxScaleDownPercentage),
  }
}


export function oceanAwsLaunchSpecAutoscaleDownToHclTerraform(struct?: OceanAwsLaunchSpecAutoscaleDown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_aggressive_scale_down_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isAggressiveScaleDownEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_scale_down_percentage: {
      value: cdktf.numberToHclTerraform(struct!.maxScaleDownPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsLaunchSpecAutoscaleDownOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLaunchSpecAutoscaleDown | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isAggressiveScaleDownEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAggressiveScaleDownEnabled = this._isAggressiveScaleDownEnabled;
    }
    if (this._maxScaleDownPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxScaleDownPercentage = this._maxScaleDownPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecAutoscaleDown | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isAggressiveScaleDownEnabled = undefined;
      this._maxScaleDownPercentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isAggressiveScaleDownEnabled = value.isAggressiveScaleDownEnabled;
      this._maxScaleDownPercentage = value.maxScaleDownPercentage;
    }
  }

  // is_aggressive_scale_down_enabled - computed: false, optional: true, required: false
  private _isAggressiveScaleDownEnabled?: boolean | cdktf.IResolvable; 
  public get isAggressiveScaleDownEnabled() {
    return this.getBooleanAttribute('is_aggressive_scale_down_enabled');
  }
  public set isAggressiveScaleDownEnabled(value: boolean | cdktf.IResolvable) {
    this._isAggressiveScaleDownEnabled = value;
  }
  public resetIsAggressiveScaleDownEnabled() {
    this._isAggressiveScaleDownEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAggressiveScaleDownEnabledInput() {
    return this._isAggressiveScaleDownEnabled;
  }

  // max_scale_down_percentage - computed: false, optional: true, required: false
  private _maxScaleDownPercentage?: number; 
  public get maxScaleDownPercentage() {
    return this.getNumberAttribute('max_scale_down_percentage');
  }
  public set maxScaleDownPercentage(value: number) {
    this._maxScaleDownPercentage = value;
  }
  public resetMaxScaleDownPercentage() {
    this._maxScaleDownPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxScaleDownPercentageInput() {
    return this._maxScaleDownPercentage;
  }
}

export class OceanAwsLaunchSpecAutoscaleDownList extends cdktf.ComplexList {
  public internalValue? : OceanAwsLaunchSpecAutoscaleDown[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLaunchSpecAutoscaleDownOutputReference {
    return new OceanAwsLaunchSpecAutoscaleDownOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLaunchSpecAutoscaleHeadrooms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#cpu_per_unit OceanAwsLaunchSpec#cpu_per_unit}
  */
  readonly cpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#gpu_per_unit OceanAwsLaunchSpec#gpu_per_unit}
  */
  readonly gpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#memory_per_unit OceanAwsLaunchSpec#memory_per_unit}
  */
  readonly memoryPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#num_of_units OceanAwsLaunchSpec#num_of_units}
  */
  readonly numOfUnits: number;
}

export function oceanAwsLaunchSpecAutoscaleHeadroomsToTerraform(struct?: OceanAwsLaunchSpecAutoscaleHeadrooms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_per_unit: cdktf.numberToTerraform(struct!.cpuPerUnit),
    gpu_per_unit: cdktf.numberToTerraform(struct!.gpuPerUnit),
    memory_per_unit: cdktf.numberToTerraform(struct!.memoryPerUnit),
    num_of_units: cdktf.numberToTerraform(struct!.numOfUnits),
  }
}


export function oceanAwsLaunchSpecAutoscaleHeadroomsToHclTerraform(struct?: OceanAwsLaunchSpecAutoscaleHeadrooms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_per_unit: {
      value: cdktf.numberToHclTerraform(struct!.cpuPerUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gpu_per_unit: {
      value: cdktf.numberToHclTerraform(struct!.gpuPerUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_per_unit: {
      value: cdktf.numberToHclTerraform(struct!.memoryPerUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_of_units: {
      value: cdktf.numberToHclTerraform(struct!.numOfUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLaunchSpecAutoscaleHeadrooms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuPerUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuPerUnit = this._cpuPerUnit;
    }
    if (this._gpuPerUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuPerUnit = this._gpuPerUnit;
    }
    if (this._memoryPerUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryPerUnit = this._memoryPerUnit;
    }
    if (this._numOfUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.numOfUnits = this._numOfUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecAutoscaleHeadrooms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuPerUnit = undefined;
      this._gpuPerUnit = undefined;
      this._memoryPerUnit = undefined;
      this._numOfUnits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuPerUnit = value.cpuPerUnit;
      this._gpuPerUnit = value.gpuPerUnit;
      this._memoryPerUnit = value.memoryPerUnit;
      this._numOfUnits = value.numOfUnits;
    }
  }

  // cpu_per_unit - computed: false, optional: true, required: false
  private _cpuPerUnit?: number; 
  public get cpuPerUnit() {
    return this.getNumberAttribute('cpu_per_unit');
  }
  public set cpuPerUnit(value: number) {
    this._cpuPerUnit = value;
  }
  public resetCpuPerUnit() {
    this._cpuPerUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPerUnitInput() {
    return this._cpuPerUnit;
  }

  // gpu_per_unit - computed: false, optional: true, required: false
  private _gpuPerUnit?: number; 
  public get gpuPerUnit() {
    return this.getNumberAttribute('gpu_per_unit');
  }
  public set gpuPerUnit(value: number) {
    this._gpuPerUnit = value;
  }
  public resetGpuPerUnit() {
    this._gpuPerUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuPerUnitInput() {
    return this._gpuPerUnit;
  }

  // memory_per_unit - computed: false, optional: true, required: false
  private _memoryPerUnit?: number; 
  public get memoryPerUnit() {
    return this.getNumberAttribute('memory_per_unit');
  }
  public set memoryPerUnit(value: number) {
    this._memoryPerUnit = value;
  }
  public resetMemoryPerUnit() {
    this._memoryPerUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryPerUnitInput() {
    return this._memoryPerUnit;
  }

  // num_of_units - computed: false, optional: false, required: true
  private _numOfUnits?: number; 
  public get numOfUnits() {
    return this.getNumberAttribute('num_of_units');
  }
  public set numOfUnits(value: number) {
    this._numOfUnits = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfUnitsInput() {
    return this._numOfUnits;
  }
}

export class OceanAwsLaunchSpecAutoscaleHeadroomsList extends cdktf.ComplexList {
  public internalValue? : OceanAwsLaunchSpecAutoscaleHeadrooms[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference {
    return new OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#auto_headroom_percentage OceanAwsLaunchSpec#auto_headroom_percentage}
  */
  readonly autoHeadroomPercentage?: number;
}

export function oceanAwsLaunchSpecAutoscaleHeadroomsAutomaticToTerraform(struct?: OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_headroom_percentage: cdktf.numberToTerraform(struct!.autoHeadroomPercentage),
  }
}


export function oceanAwsLaunchSpecAutoscaleHeadroomsAutomaticToHclTerraform(struct?: OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_headroom_percentage: {
      value: cdktf.numberToHclTerraform(struct!.autoHeadroomPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoHeadroomPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoHeadroomPercentage = this._autoHeadroomPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoHeadroomPercentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoHeadroomPercentage = value.autoHeadroomPercentage;
    }
  }

  // auto_headroom_percentage - computed: false, optional: true, required: false
  private _autoHeadroomPercentage?: number; 
  public get autoHeadroomPercentage() {
    return this.getNumberAttribute('auto_headroom_percentage');
  }
  public set autoHeadroomPercentage(value: number) {
    this._autoHeadroomPercentage = value;
  }
  public resetAutoHeadroomPercentage() {
    this._autoHeadroomPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHeadroomPercentageInput() {
    return this._autoHeadroomPercentage;
  }
}

export class OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList extends cdktf.ComplexList {
  public internalValue? : OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference {
    return new OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicIops {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#base_size OceanAwsLaunchSpec#base_size}
  */
  readonly baseSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#resource OceanAwsLaunchSpec#resource}
  */
  readonly resource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#size_per_resource_unit OceanAwsLaunchSpec#size_per_resource_unit}
  */
  readonly sizePerResourceUnit: number;
}

export function oceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicIopsToTerraform(struct?: OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicIopsOutputReference | OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicIops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_size: cdktf.numberToTerraform(struct!.baseSize),
    resource: cdktf.stringToTerraform(struct!.resource),
    size_per_resource_unit: cdktf.numberToTerraform(struct!.sizePerResourceUnit),
  }
}


export function oceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicIopsToHclTerraform(struct?: OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicIopsOutputReference | OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicIops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_size: {
      value: cdktf.numberToHclTerraform(struct!.baseSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_per_resource_unit: {
      value: cdktf.numberToHclTerraform(struct!.sizePerResourceUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicIopsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicIops | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseSize = this._baseSize;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._sizePerResourceUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizePerResourceUnit = this._sizePerResourceUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicIops | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseSize = undefined;
      this._resource = undefined;
      this._sizePerResourceUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseSize = value.baseSize;
      this._resource = value.resource;
      this._sizePerResourceUnit = value.sizePerResourceUnit;
    }
  }

  // base_size - computed: false, optional: false, required: true
  private _baseSize?: number; 
  public get baseSize() {
    return this.getNumberAttribute('base_size');
  }
  public set baseSize(value: number) {
    this._baseSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseSizeInput() {
    return this._baseSize;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // size_per_resource_unit - computed: false, optional: false, required: true
  private _sizePerResourceUnit?: number; 
  public get sizePerResourceUnit() {
    return this.getNumberAttribute('size_per_resource_unit');
  }
  public set sizePerResourceUnit(value: number) {
    this._sizePerResourceUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizePerResourceUnitInput() {
    return this._sizePerResourceUnit;
  }
}
export interface OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#base_size OceanAwsLaunchSpec#base_size}
  */
  readonly baseSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#resource OceanAwsLaunchSpec#resource}
  */
  readonly resource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#size_per_resource_unit OceanAwsLaunchSpec#size_per_resource_unit}
  */
  readonly sizePerResourceUnit: number;
}

export function oceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeToTerraform(struct?: OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference | OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_size: cdktf.numberToTerraform(struct!.baseSize),
    resource: cdktf.stringToTerraform(struct!.resource),
    size_per_resource_unit: cdktf.numberToTerraform(struct!.sizePerResourceUnit),
  }
}


export function oceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeToHclTerraform(struct?: OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference | OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_size: {
      value: cdktf.numberToHclTerraform(struct!.baseSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_per_resource_unit: {
      value: cdktf.numberToHclTerraform(struct!.sizePerResourceUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseSize = this._baseSize;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._sizePerResourceUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizePerResourceUnit = this._sizePerResourceUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseSize = undefined;
      this._resource = undefined;
      this._sizePerResourceUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseSize = value.baseSize;
      this._resource = value.resource;
      this._sizePerResourceUnit = value.sizePerResourceUnit;
    }
  }

  // base_size - computed: false, optional: false, required: true
  private _baseSize?: number; 
  public get baseSize() {
    return this.getNumberAttribute('base_size');
  }
  public set baseSize(value: number) {
    this._baseSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseSizeInput() {
    return this._baseSize;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // size_per_resource_unit - computed: false, optional: false, required: true
  private _sizePerResourceUnit?: number; 
  public get sizePerResourceUnit() {
    return this.getNumberAttribute('size_per_resource_unit');
  }
  public set sizePerResourceUnit(value: number) {
    this._sizePerResourceUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizePerResourceUnitInput() {
    return this._sizePerResourceUnit;
  }
}
export interface OceanAwsLaunchSpecBlockDeviceMappingsEbs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#delete_on_termination OceanAwsLaunchSpec#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#encrypted OceanAwsLaunchSpec#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#iops OceanAwsLaunchSpec#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#kms_key_id OceanAwsLaunchSpec#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#snapshot_id OceanAwsLaunchSpec#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#throughput OceanAwsLaunchSpec#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#volume_size OceanAwsLaunchSpec#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#volume_type OceanAwsLaunchSpec#volume_type}
  */
  readonly volumeType?: string;
  /**
  * dynamic_iops block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#dynamic_iops OceanAwsLaunchSpec#dynamic_iops}
  */
  readonly dynamicIops?: OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicIops;
  /**
  * dynamic_volume_size block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#dynamic_volume_size OceanAwsLaunchSpec#dynamic_volume_size}
  */
  readonly dynamicVolumeSize?: OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize;
}

export function oceanAwsLaunchSpecBlockDeviceMappingsEbsToTerraform(struct?: OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference | OceanAwsLaunchSpecBlockDeviceMappingsEbs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    iops: cdktf.numberToTerraform(struct!.iops),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    throughput: cdktf.numberToTerraform(struct!.throughput),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
    dynamic_iops: oceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicIopsToTerraform(struct!.dynamicIops),
    dynamic_volume_size: oceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeToTerraform(struct!.dynamicVolumeSize),
  }
}


export function oceanAwsLaunchSpecBlockDeviceMappingsEbsToHclTerraform(struct?: OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference | OceanAwsLaunchSpecBlockDeviceMappingsEbs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_on_termination: {
      value: cdktf.booleanToHclTerraform(struct!.deleteOnTermination),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iops: {
      value: cdktf.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
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
    throughput: {
      value: cdktf.numberToHclTerraform(struct!.throughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_size: {
      value: cdktf.numberToHclTerraform(struct!.volumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_iops: {
      value: oceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicIopsToHclTerraform(struct!.dynamicIops),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicIopsList",
    },
    dynamic_volume_size: {
      value: oceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeToHclTerraform(struct!.dynamicVolumeSize),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsLaunchSpecBlockDeviceMappingsEbs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteOnTermination !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteOnTermination = this._deleteOnTermination;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    if (this._throughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput;
    }
    if (this._volumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSize = this._volumeSize;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    if (this._dynamicIops?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicIops = this._dynamicIops?.internalValue;
    }
    if (this._dynamicVolumeSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicVolumeSize = this._dynamicVolumeSize?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecBlockDeviceMappingsEbs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deleteOnTermination = undefined;
      this._encrypted = undefined;
      this._iops = undefined;
      this._kmsKeyId = undefined;
      this._snapshotId = undefined;
      this._throughput = undefined;
      this._volumeSize = undefined;
      this._volumeType = undefined;
      this._dynamicIops.internalValue = undefined;
      this._dynamicVolumeSize.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deleteOnTermination = value.deleteOnTermination;
      this._encrypted = value.encrypted;
      this._iops = value.iops;
      this._kmsKeyId = value.kmsKeyId;
      this._snapshotId = value.snapshotId;
      this._throughput = value.throughput;
      this._volumeSize = value.volumeSize;
      this._volumeType = value.volumeType;
      this._dynamicIops.internalValue = value.dynamicIops;
      this._dynamicVolumeSize.internalValue = value.dynamicVolumeSize;
    }
  }

  // delete_on_termination - computed: false, optional: true, required: false
  private _deleteOnTermination?: boolean | cdktf.IResolvable; 
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }
  public set deleteOnTermination(value: boolean | cdktf.IResolvable) {
    this._deleteOnTermination = value;
  }
  public resetDeleteOnTermination() {
    this._deleteOnTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnTerminationInput() {
    return this._deleteOnTermination;
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

  // iops - computed: false, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
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

  // throughput - computed: false, optional: true, required: false
  private _throughput?: number; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // volume_size - computed: false, optional: true, required: false
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }

  // volume_type - computed: false, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }

  // dynamic_iops - computed: false, optional: true, required: false
  private _dynamicIops = new OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicIopsOutputReference(this, "dynamic_iops");
  public get dynamicIops() {
    return this._dynamicIops;
  }
  public putDynamicIops(value: OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicIops) {
    this._dynamicIops.internalValue = value;
  }
  public resetDynamicIops() {
    this._dynamicIops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicIopsInput() {
    return this._dynamicIops.internalValue;
  }

  // dynamic_volume_size - computed: false, optional: true, required: false
  private _dynamicVolumeSize = new OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference(this, "dynamic_volume_size");
  public get dynamicVolumeSize() {
    return this._dynamicVolumeSize;
  }
  public putDynamicVolumeSize(value: OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize) {
    this._dynamicVolumeSize.internalValue = value;
  }
  public resetDynamicVolumeSize() {
    this._dynamicVolumeSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicVolumeSizeInput() {
    return this._dynamicVolumeSize.internalValue;
  }
}
export interface OceanAwsLaunchSpecBlockDeviceMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#device_name OceanAwsLaunchSpec#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#no_device OceanAwsLaunchSpec#no_device}
  */
  readonly noDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#virtual_name OceanAwsLaunchSpec#virtual_name}
  */
  readonly virtualName?: string;
  /**
  * ebs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#ebs OceanAwsLaunchSpec#ebs}
  */
  readonly ebs?: OceanAwsLaunchSpecBlockDeviceMappingsEbs;
}

export function oceanAwsLaunchSpecBlockDeviceMappingsToTerraform(struct?: OceanAwsLaunchSpecBlockDeviceMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    no_device: cdktf.stringToTerraform(struct!.noDevice),
    virtual_name: cdktf.stringToTerraform(struct!.virtualName),
    ebs: oceanAwsLaunchSpecBlockDeviceMappingsEbsToTerraform(struct!.ebs),
  }
}


export function oceanAwsLaunchSpecBlockDeviceMappingsToHclTerraform(struct?: OceanAwsLaunchSpecBlockDeviceMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_device: {
      value: cdktf.stringToHclTerraform(struct!.noDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_name: {
      value: cdktf.stringToHclTerraform(struct!.virtualName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebs: {
      value: oceanAwsLaunchSpecBlockDeviceMappingsEbsToHclTerraform(struct!.ebs),
      isBlock: true,
      type: "set",
      storageClassType: "OceanAwsLaunchSpecBlockDeviceMappingsEbsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsLaunchSpecBlockDeviceMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLaunchSpecBlockDeviceMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._noDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDevice = this._noDevice;
    }
    if (this._virtualName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualName = this._virtualName;
    }
    if (this._ebs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebs = this._ebs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecBlockDeviceMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceName = undefined;
      this._noDevice = undefined;
      this._virtualName = undefined;
      this._ebs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceName = value.deviceName;
      this._noDevice = value.noDevice;
      this._virtualName = value.virtualName;
      this._ebs.internalValue = value.ebs;
    }
  }

  // device_name - computed: false, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // no_device - computed: false, optional: true, required: false
  private _noDevice?: string; 
  public get noDevice() {
    return this.getStringAttribute('no_device');
  }
  public set noDevice(value: string) {
    this._noDevice = value;
  }
  public resetNoDevice() {
    this._noDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDeviceInput() {
    return this._noDevice;
  }

  // virtual_name - computed: false, optional: true, required: false
  private _virtualName?: string; 
  public get virtualName() {
    return this.getStringAttribute('virtual_name');
  }
  public set virtualName(value: string) {
    this._virtualName = value;
  }
  public resetVirtualName() {
    this._virtualName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNameInput() {
    return this._virtualName;
  }

  // ebs - computed: false, optional: true, required: false
  private _ebs = new OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference(this, "ebs");
  public get ebs() {
    return this._ebs;
  }
  public putEbs(value: OceanAwsLaunchSpecBlockDeviceMappingsEbs) {
    this._ebs.internalValue = value;
  }
  public resetEbs() {
    this._ebs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsInput() {
    return this._ebs.internalValue;
  }
}

export class OceanAwsLaunchSpecBlockDeviceMappingsList extends cdktf.ComplexList {
  public internalValue? : OceanAwsLaunchSpecBlockDeviceMappings[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLaunchSpecBlockDeviceMappingsOutputReference {
    return new OceanAwsLaunchSpecBlockDeviceMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLaunchSpecCreateOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#initial_nodes OceanAwsLaunchSpec#initial_nodes}
  */
  readonly initialNodes?: number;
}

export function oceanAwsLaunchSpecCreateOptionsToTerraform(struct?: OceanAwsLaunchSpecCreateOptionsOutputReference | OceanAwsLaunchSpecCreateOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    initial_nodes: cdktf.numberToTerraform(struct!.initialNodes),
  }
}


export function oceanAwsLaunchSpecCreateOptionsToHclTerraform(struct?: OceanAwsLaunchSpecCreateOptionsOutputReference | OceanAwsLaunchSpecCreateOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    initial_nodes: {
      value: cdktf.numberToHclTerraform(struct!.initialNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsLaunchSpecCreateOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsLaunchSpecCreateOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initialNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialNodes = this._initialNodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecCreateOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._initialNodes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._initialNodes = value.initialNodes;
    }
  }

  // initial_nodes - computed: false, optional: true, required: false
  private _initialNodes?: number; 
  public get initialNodes() {
    return this.getNumberAttribute('initial_nodes');
  }
  public set initialNodes(value: number) {
    this._initialNodes = value;
  }
  public resetInitialNodes() {
    this._initialNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialNodesInput() {
    return this._initialNodes;
  }
}
export interface OceanAwsLaunchSpecDeleteOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#delete_nodes OceanAwsLaunchSpec#delete_nodes}
  */
  readonly deleteNodes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#force_delete OceanAwsLaunchSpec#force_delete}
  */
  readonly forceDelete: boolean | cdktf.IResolvable;
}

export function oceanAwsLaunchSpecDeleteOptionsToTerraform(struct?: OceanAwsLaunchSpecDeleteOptionsOutputReference | OceanAwsLaunchSpecDeleteOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_nodes: cdktf.booleanToTerraform(struct!.deleteNodes),
    force_delete: cdktf.booleanToTerraform(struct!.forceDelete),
  }
}


export function oceanAwsLaunchSpecDeleteOptionsToHclTerraform(struct?: OceanAwsLaunchSpecDeleteOptionsOutputReference | OceanAwsLaunchSpecDeleteOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_nodes: {
      value: cdktf.booleanToHclTerraform(struct!.deleteNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force_delete: {
      value: cdktf.booleanToHclTerraform(struct!.forceDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsLaunchSpecDeleteOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsLaunchSpecDeleteOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteNodes = this._deleteNodes;
    }
    if (this._forceDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceDelete = this._forceDelete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecDeleteOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deleteNodes = undefined;
      this._forceDelete = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deleteNodes = value.deleteNodes;
      this._forceDelete = value.forceDelete;
    }
  }

  // delete_nodes - computed: false, optional: true, required: false
  private _deleteNodes?: boolean | cdktf.IResolvable; 
  public get deleteNodes() {
    return this.getBooleanAttribute('delete_nodes');
  }
  public set deleteNodes(value: boolean | cdktf.IResolvable) {
    this._deleteNodes = value;
  }
  public resetDeleteNodes() {
    this._deleteNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteNodesInput() {
    return this._deleteNodes;
  }

  // force_delete - computed: false, optional: false, required: true
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
  }
}
export interface OceanAwsLaunchSpecElasticIpPoolTagSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#tag_key OceanAwsLaunchSpec#tag_key}
  */
  readonly tagKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#tag_value OceanAwsLaunchSpec#tag_value}
  */
  readonly tagValue?: string;
}

export function oceanAwsLaunchSpecElasticIpPoolTagSelectorToTerraform(struct?: OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference | OceanAwsLaunchSpecElasticIpPoolTagSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function oceanAwsLaunchSpecElasticIpPoolTagSelectorToHclTerraform(struct?: OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference | OceanAwsLaunchSpecElasticIpPoolTagSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsLaunchSpecElasticIpPoolTagSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecElasticIpPoolTagSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}
export interface OceanAwsLaunchSpecElasticIpPool {
  /**
  * tag_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#tag_selector OceanAwsLaunchSpec#tag_selector}
  */
  readonly tagSelector?: OceanAwsLaunchSpecElasticIpPoolTagSelector;
}

export function oceanAwsLaunchSpecElasticIpPoolToTerraform(struct?: OceanAwsLaunchSpecElasticIpPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_selector: oceanAwsLaunchSpecElasticIpPoolTagSelectorToTerraform(struct!.tagSelector),
  }
}


export function oceanAwsLaunchSpecElasticIpPoolToHclTerraform(struct?: OceanAwsLaunchSpecElasticIpPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_selector: {
      value: oceanAwsLaunchSpecElasticIpPoolTagSelectorToHclTerraform(struct!.tagSelector),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAwsLaunchSpecElasticIpPoolTagSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsLaunchSpecElasticIpPoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLaunchSpecElasticIpPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagSelector = this._tagSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecElasticIpPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagSelector.internalValue = value.tagSelector;
    }
  }

  // tag_selector - computed: false, optional: true, required: false
  private _tagSelector = new OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference(this, "tag_selector");
  public get tagSelector() {
    return this._tagSelector;
  }
  public putTagSelector(value: OceanAwsLaunchSpecElasticIpPoolTagSelector) {
    this._tagSelector.internalValue = value;
  }
  public resetTagSelector() {
    this._tagSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSelectorInput() {
    return this._tagSelector.internalValue;
  }
}

export class OceanAwsLaunchSpecElasticIpPoolList extends cdktf.ComplexList {
  public internalValue? : OceanAwsLaunchSpecElasticIpPool[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLaunchSpecElasticIpPoolOutputReference {
    return new OceanAwsLaunchSpecElasticIpPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLaunchSpecEphemeralStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#ephemeral_storage_device_name OceanAwsLaunchSpec#ephemeral_storage_device_name}
  */
  readonly ephemeralStorageDeviceName?: string;
}

export function oceanAwsLaunchSpecEphemeralStorageToTerraform(struct?: OceanAwsLaunchSpecEphemeralStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ephemeral_storage_device_name: cdktf.stringToTerraform(struct!.ephemeralStorageDeviceName),
  }
}


export function oceanAwsLaunchSpecEphemeralStorageToHclTerraform(struct?: OceanAwsLaunchSpecEphemeralStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ephemeral_storage_device_name: {
      value: cdktf.stringToHclTerraform(struct!.ephemeralStorageDeviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsLaunchSpecEphemeralStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLaunchSpecEphemeralStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ephemeralStorageDeviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralStorageDeviceName = this._ephemeralStorageDeviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecEphemeralStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ephemeralStorageDeviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ephemeralStorageDeviceName = value.ephemeralStorageDeviceName;
    }
  }

  // ephemeral_storage_device_name - computed: false, optional: true, required: false
  private _ephemeralStorageDeviceName?: string; 
  public get ephemeralStorageDeviceName() {
    return this.getStringAttribute('ephemeral_storage_device_name');
  }
  public set ephemeralStorageDeviceName(value: string) {
    this._ephemeralStorageDeviceName = value;
  }
  public resetEphemeralStorageDeviceName() {
    this._ephemeralStorageDeviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageDeviceNameInput() {
    return this._ephemeralStorageDeviceName;
  }
}

export class OceanAwsLaunchSpecEphemeralStorageList extends cdktf.ComplexList {
  public internalValue? : OceanAwsLaunchSpecEphemeralStorage[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLaunchSpecEphemeralStorageOutputReference {
    return new OceanAwsLaunchSpecEphemeralStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLaunchSpecImages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#image_id OceanAwsLaunchSpec#image_id}
  */
  readonly imageId?: string;
}

export function oceanAwsLaunchSpecImagesToTerraform(struct?: OceanAwsLaunchSpecImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_id: cdktf.stringToTerraform(struct!.imageId),
  }
}


export function oceanAwsLaunchSpecImagesToHclTerraform(struct?: OceanAwsLaunchSpecImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsLaunchSpecImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLaunchSpecImages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecImages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageId = value.imageId;
    }
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
}

export class OceanAwsLaunchSpecImagesList extends cdktf.ComplexList {
  public internalValue? : OceanAwsLaunchSpecImages[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLaunchSpecImagesOutputReference {
    return new OceanAwsLaunchSpecImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLaunchSpecInstanceMetadataOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#http_put_response_hop_limit OceanAwsLaunchSpec#http_put_response_hop_limit}
  */
  readonly httpPutResponseHopLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#http_tokens OceanAwsLaunchSpec#http_tokens}
  */
  readonly httpTokens: string;
}

export function oceanAwsLaunchSpecInstanceMetadataOptionsToTerraform(struct?: OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference | OceanAwsLaunchSpecInstanceMetadataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_put_response_hop_limit: cdktf.numberToTerraform(struct!.httpPutResponseHopLimit),
    http_tokens: cdktf.stringToTerraform(struct!.httpTokens),
  }
}


export function oceanAwsLaunchSpecInstanceMetadataOptionsToHclTerraform(struct?: OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference | OceanAwsLaunchSpecInstanceMetadataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_put_response_hop_limit: {
      value: cdktf.numberToHclTerraform(struct!.httpPutResponseHopLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_tokens: {
      value: cdktf.stringToHclTerraform(struct!.httpTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsLaunchSpecInstanceMetadataOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpPutResponseHopLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPutResponseHopLimit = this._httpPutResponseHopLimit;
    }
    if (this._httpTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpTokens = this._httpTokens;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecInstanceMetadataOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpPutResponseHopLimit = undefined;
      this._httpTokens = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpPutResponseHopLimit = value.httpPutResponseHopLimit;
      this._httpTokens = value.httpTokens;
    }
  }

  // http_put_response_hop_limit - computed: false, optional: true, required: false
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

  // http_tokens - computed: false, optional: false, required: true
  private _httpTokens?: string; 
  public get httpTokens() {
    return this.getStringAttribute('http_tokens');
  }
  public set httpTokens(value: string) {
    this._httpTokens = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTokensInput() {
    return this._httpTokens;
  }
}
export interface OceanAwsLaunchSpecInstanceStorePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#instance_store_policy_type OceanAwsLaunchSpec#instance_store_policy_type}
  */
  readonly instanceStorePolicyType?: string;
}

export function oceanAwsLaunchSpecInstanceStorePolicyToTerraform(struct?: OceanAwsLaunchSpecInstanceStorePolicyOutputReference | OceanAwsLaunchSpecInstanceStorePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_store_policy_type: cdktf.stringToTerraform(struct!.instanceStorePolicyType),
  }
}


export function oceanAwsLaunchSpecInstanceStorePolicyToHclTerraform(struct?: OceanAwsLaunchSpecInstanceStorePolicyOutputReference | OceanAwsLaunchSpecInstanceStorePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_store_policy_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceStorePolicyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsLaunchSpecInstanceStorePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsLaunchSpecInstanceStorePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceStorePolicyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceStorePolicyType = this._instanceStorePolicyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecInstanceStorePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceStorePolicyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceStorePolicyType = value.instanceStorePolicyType;
    }
  }

  // instance_store_policy_type - computed: false, optional: true, required: false
  private _instanceStorePolicyType?: string; 
  public get instanceStorePolicyType() {
    return this.getStringAttribute('instance_store_policy_type');
  }
  public set instanceStorePolicyType(value: string) {
    this._instanceStorePolicyType = value;
  }
  public resetInstanceStorePolicyType() {
    this._instanceStorePolicyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceStorePolicyTypeInput() {
    return this._instanceStorePolicyType;
  }
}
export interface OceanAwsLaunchSpecInstanceTypesFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#categories OceanAwsLaunchSpec#categories}
  */
  readonly categories?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#disk_types OceanAwsLaunchSpec#disk_types}
  */
  readonly diskTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#exclude_families OceanAwsLaunchSpec#exclude_families}
  */
  readonly excludeFamilies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#exclude_metal OceanAwsLaunchSpec#exclude_metal}
  */
  readonly excludeMetal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#hypervisor OceanAwsLaunchSpec#hypervisor}
  */
  readonly hypervisor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#include_families OceanAwsLaunchSpec#include_families}
  */
  readonly includeFamilies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#is_ena_supported OceanAwsLaunchSpec#is_ena_supported}
  */
  readonly isEnaSupported?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#max_gpu OceanAwsLaunchSpec#max_gpu}
  */
  readonly maxGpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#max_memory_gib OceanAwsLaunchSpec#max_memory_gib}
  */
  readonly maxMemoryGib?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#max_network_performance OceanAwsLaunchSpec#max_network_performance}
  */
  readonly maxNetworkPerformance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#max_vcpu OceanAwsLaunchSpec#max_vcpu}
  */
  readonly maxVcpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#min_enis OceanAwsLaunchSpec#min_enis}
  */
  readonly minEnis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#min_gpu OceanAwsLaunchSpec#min_gpu}
  */
  readonly minGpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#min_memory_gib OceanAwsLaunchSpec#min_memory_gib}
  */
  readonly minMemoryGib?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#min_network_performance OceanAwsLaunchSpec#min_network_performance}
  */
  readonly minNetworkPerformance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#min_vcpu OceanAwsLaunchSpec#min_vcpu}
  */
  readonly minVcpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#root_device_types OceanAwsLaunchSpec#root_device_types}
  */
  readonly rootDeviceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#virtualization_types OceanAwsLaunchSpec#virtualization_types}
  */
  readonly virtualizationTypes?: string[];
}

export function oceanAwsLaunchSpecInstanceTypesFiltersToTerraform(struct?: OceanAwsLaunchSpecInstanceTypesFiltersOutputReference | OceanAwsLaunchSpecInstanceTypesFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categories),
    disk_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.diskTypes),
    exclude_families: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeFamilies),
    exclude_metal: cdktf.booleanToTerraform(struct!.excludeMetal),
    hypervisor: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hypervisor),
    include_families: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeFamilies),
    is_ena_supported: cdktf.stringToTerraform(struct!.isEnaSupported),
    max_gpu: cdktf.numberToTerraform(struct!.maxGpu),
    max_memory_gib: cdktf.numberToTerraform(struct!.maxMemoryGib),
    max_network_performance: cdktf.numberToTerraform(struct!.maxNetworkPerformance),
    max_vcpu: cdktf.numberToTerraform(struct!.maxVcpu),
    min_enis: cdktf.numberToTerraform(struct!.minEnis),
    min_gpu: cdktf.numberToTerraform(struct!.minGpu),
    min_memory_gib: cdktf.numberToTerraform(struct!.minMemoryGib),
    min_network_performance: cdktf.numberToTerraform(struct!.minNetworkPerformance),
    min_vcpu: cdktf.numberToTerraform(struct!.minVcpu),
    root_device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rootDeviceTypes),
    virtualization_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.virtualizationTypes),
  }
}


export function oceanAwsLaunchSpecInstanceTypesFiltersToHclTerraform(struct?: OceanAwsLaunchSpecInstanceTypesFiltersOutputReference | OceanAwsLaunchSpecInstanceTypesFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.categories),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    disk_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.diskTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    exclude_families: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeFamilies),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    exclude_metal: {
      value: cdktf.booleanToHclTerraform(struct!.excludeMetal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hypervisor: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hypervisor),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    include_families: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeFamilies),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    is_ena_supported: {
      value: cdktf.stringToHclTerraform(struct!.isEnaSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_gpu: {
      value: cdktf.numberToHclTerraform(struct!.maxGpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_memory_gib: {
      value: cdktf.numberToHclTerraform(struct!.maxMemoryGib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_network_performance: {
      value: cdktf.numberToHclTerraform(struct!.maxNetworkPerformance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_vcpu: {
      value: cdktf.numberToHclTerraform(struct!.maxVcpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_enis: {
      value: cdktf.numberToHclTerraform(struct!.minEnis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_gpu: {
      value: cdktf.numberToHclTerraform(struct!.minGpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_memory_gib: {
      value: cdktf.numberToHclTerraform(struct!.minMemoryGib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_network_performance: {
      value: cdktf.numberToHclTerraform(struct!.minNetworkPerformance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_vcpu: {
      value: cdktf.numberToHclTerraform(struct!.minVcpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    root_device_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rootDeviceTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    virtualization_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.virtualizationTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsLaunchSpecInstanceTypesFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsLaunchSpecInstanceTypesFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categories !== undefined) {
      hasAnyValues = true;
      internalValueResult.categories = this._categories;
    }
    if (this._diskTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskTypes = this._diskTypes;
    }
    if (this._excludeFamilies !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeFamilies = this._excludeFamilies;
    }
    if (this._excludeMetal !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeMetal = this._excludeMetal;
    }
    if (this._hypervisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisor = this._hypervisor;
    }
    if (this._includeFamilies !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeFamilies = this._includeFamilies;
    }
    if (this._isEnaSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnaSupported = this._isEnaSupported;
    }
    if (this._maxGpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxGpu = this._maxGpu;
    }
    if (this._maxMemoryGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemoryGib = this._maxMemoryGib;
    }
    if (this._maxNetworkPerformance !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNetworkPerformance = this._maxNetworkPerformance;
    }
    if (this._maxVcpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVcpu = this._maxVcpu;
    }
    if (this._minEnis !== undefined) {
      hasAnyValues = true;
      internalValueResult.minEnis = this._minEnis;
    }
    if (this._minGpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.minGpu = this._minGpu;
    }
    if (this._minMemoryGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemoryGib = this._minMemoryGib;
    }
    if (this._minNetworkPerformance !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNetworkPerformance = this._minNetworkPerformance;
    }
    if (this._minVcpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVcpu = this._minVcpu;
    }
    if (this._rootDeviceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDeviceTypes = this._rootDeviceTypes;
    }
    if (this._virtualizationTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualizationTypes = this._virtualizationTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecInstanceTypesFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._categories = undefined;
      this._diskTypes = undefined;
      this._excludeFamilies = undefined;
      this._excludeMetal = undefined;
      this._hypervisor = undefined;
      this._includeFamilies = undefined;
      this._isEnaSupported = undefined;
      this._maxGpu = undefined;
      this._maxMemoryGib = undefined;
      this._maxNetworkPerformance = undefined;
      this._maxVcpu = undefined;
      this._minEnis = undefined;
      this._minGpu = undefined;
      this._minMemoryGib = undefined;
      this._minNetworkPerformance = undefined;
      this._minVcpu = undefined;
      this._rootDeviceTypes = undefined;
      this._virtualizationTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._categories = value.categories;
      this._diskTypes = value.diskTypes;
      this._excludeFamilies = value.excludeFamilies;
      this._excludeMetal = value.excludeMetal;
      this._hypervisor = value.hypervisor;
      this._includeFamilies = value.includeFamilies;
      this._isEnaSupported = value.isEnaSupported;
      this._maxGpu = value.maxGpu;
      this._maxMemoryGib = value.maxMemoryGib;
      this._maxNetworkPerformance = value.maxNetworkPerformance;
      this._maxVcpu = value.maxVcpu;
      this._minEnis = value.minEnis;
      this._minGpu = value.minGpu;
      this._minMemoryGib = value.minMemoryGib;
      this._minNetworkPerformance = value.minNetworkPerformance;
      this._minVcpu = value.minVcpu;
      this._rootDeviceTypes = value.rootDeviceTypes;
      this._virtualizationTypes = value.virtualizationTypes;
    }
  }

  // categories - computed: false, optional: true, required: false
  private _categories?: string[]; 
  public get categories() {
    return cdktf.Fn.tolist(this.getListAttribute('categories'));
  }
  public set categories(value: string[]) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
  }

  // disk_types - computed: false, optional: true, required: false
  private _diskTypes?: string[]; 
  public get diskTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('disk_types'));
  }
  public set diskTypes(value: string[]) {
    this._diskTypes = value;
  }
  public resetDiskTypes() {
    this._diskTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypesInput() {
    return this._diskTypes;
  }

  // exclude_families - computed: false, optional: true, required: false
  private _excludeFamilies?: string[]; 
  public get excludeFamilies() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_families'));
  }
  public set excludeFamilies(value: string[]) {
    this._excludeFamilies = value;
  }
  public resetExcludeFamilies() {
    this._excludeFamilies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFamiliesInput() {
    return this._excludeFamilies;
  }

  // exclude_metal - computed: false, optional: true, required: false
  private _excludeMetal?: boolean | cdktf.IResolvable; 
  public get excludeMetal() {
    return this.getBooleanAttribute('exclude_metal');
  }
  public set excludeMetal(value: boolean | cdktf.IResolvable) {
    this._excludeMetal = value;
  }
  public resetExcludeMetal() {
    this._excludeMetal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeMetalInput() {
    return this._excludeMetal;
  }

  // hypervisor - computed: false, optional: true, required: false
  private _hypervisor?: string[]; 
  public get hypervisor() {
    return cdktf.Fn.tolist(this.getListAttribute('hypervisor'));
  }
  public set hypervisor(value: string[]) {
    this._hypervisor = value;
  }
  public resetHypervisor() {
    this._hypervisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorInput() {
    return this._hypervisor;
  }

  // include_families - computed: false, optional: true, required: false
  private _includeFamilies?: string[]; 
  public get includeFamilies() {
    return cdktf.Fn.tolist(this.getListAttribute('include_families'));
  }
  public set includeFamilies(value: string[]) {
    this._includeFamilies = value;
  }
  public resetIncludeFamilies() {
    this._includeFamilies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeFamiliesInput() {
    return this._includeFamilies;
  }

  // is_ena_supported - computed: false, optional: true, required: false
  private _isEnaSupported?: string; 
  public get isEnaSupported() {
    return this.getStringAttribute('is_ena_supported');
  }
  public set isEnaSupported(value: string) {
    this._isEnaSupported = value;
  }
  public resetIsEnaSupported() {
    this._isEnaSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnaSupportedInput() {
    return this._isEnaSupported;
  }

  // max_gpu - computed: false, optional: true, required: false
  private _maxGpu?: number; 
  public get maxGpu() {
    return this.getNumberAttribute('max_gpu');
  }
  public set maxGpu(value: number) {
    this._maxGpu = value;
  }
  public resetMaxGpu() {
    this._maxGpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxGpuInput() {
    return this._maxGpu;
  }

  // max_memory_gib - computed: false, optional: true, required: false
  private _maxMemoryGib?: number; 
  public get maxMemoryGib() {
    return this.getNumberAttribute('max_memory_gib');
  }
  public set maxMemoryGib(value: number) {
    this._maxMemoryGib = value;
  }
  public resetMaxMemoryGib() {
    this._maxMemoryGib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryGibInput() {
    return this._maxMemoryGib;
  }

  // max_network_performance - computed: false, optional: true, required: false
  private _maxNetworkPerformance?: number; 
  public get maxNetworkPerformance() {
    return this.getNumberAttribute('max_network_performance');
  }
  public set maxNetworkPerformance(value: number) {
    this._maxNetworkPerformance = value;
  }
  public resetMaxNetworkPerformance() {
    this._maxNetworkPerformance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNetworkPerformanceInput() {
    return this._maxNetworkPerformance;
  }

  // max_vcpu - computed: false, optional: true, required: false
  private _maxVcpu?: number; 
  public get maxVcpu() {
    return this.getNumberAttribute('max_vcpu');
  }
  public set maxVcpu(value: number) {
    this._maxVcpu = value;
  }
  public resetMaxVcpu() {
    this._maxVcpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVcpuInput() {
    return this._maxVcpu;
  }

  // min_enis - computed: false, optional: true, required: false
  private _minEnis?: number; 
  public get minEnis() {
    return this.getNumberAttribute('min_enis');
  }
  public set minEnis(value: number) {
    this._minEnis = value;
  }
  public resetMinEnis() {
    this._minEnis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minEnisInput() {
    return this._minEnis;
  }

  // min_gpu - computed: false, optional: true, required: false
  private _minGpu?: number; 
  public get minGpu() {
    return this.getNumberAttribute('min_gpu');
  }
  public set minGpu(value: number) {
    this._minGpu = value;
  }
  public resetMinGpu() {
    this._minGpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minGpuInput() {
    return this._minGpu;
  }

  // min_memory_gib - computed: false, optional: true, required: false
  private _minMemoryGib?: number; 
  public get minMemoryGib() {
    return this.getNumberAttribute('min_memory_gib');
  }
  public set minMemoryGib(value: number) {
    this._minMemoryGib = value;
  }
  public resetMinMemoryGib() {
    this._minMemoryGib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemoryGibInput() {
    return this._minMemoryGib;
  }

  // min_network_performance - computed: false, optional: true, required: false
  private _minNetworkPerformance?: number; 
  public get minNetworkPerformance() {
    return this.getNumberAttribute('min_network_performance');
  }
  public set minNetworkPerformance(value: number) {
    this._minNetworkPerformance = value;
  }
  public resetMinNetworkPerformance() {
    this._minNetworkPerformance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNetworkPerformanceInput() {
    return this._minNetworkPerformance;
  }

  // min_vcpu - computed: false, optional: true, required: false
  private _minVcpu?: number; 
  public get minVcpu() {
    return this.getNumberAttribute('min_vcpu');
  }
  public set minVcpu(value: number) {
    this._minVcpu = value;
  }
  public resetMinVcpu() {
    this._minVcpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVcpuInput() {
    return this._minVcpu;
  }

  // root_device_types - computed: false, optional: true, required: false
  private _rootDeviceTypes?: string[]; 
  public get rootDeviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('root_device_types'));
  }
  public set rootDeviceTypes(value: string[]) {
    this._rootDeviceTypes = value;
  }
  public resetRootDeviceTypes() {
    this._rootDeviceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDeviceTypesInput() {
    return this._rootDeviceTypes;
  }

  // virtualization_types - computed: false, optional: true, required: false
  private _virtualizationTypes?: string[]; 
  public get virtualizationTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('virtualization_types'));
  }
  public set virtualizationTypes(value: string[]) {
    this._virtualizationTypes = value;
  }
  public resetVirtualizationTypes() {
    this._virtualizationTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualizationTypesInput() {
    return this._virtualizationTypes;
  }
}
export interface OceanAwsLaunchSpecLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#key OceanAwsLaunchSpec#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#value OceanAwsLaunchSpec#value}
  */
  readonly value: string;
}

export function oceanAwsLaunchSpecLabelsToTerraform(struct?: OceanAwsLaunchSpecLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function oceanAwsLaunchSpecLabelsToHclTerraform(struct?: OceanAwsLaunchSpecLabels | cdktf.IResolvable): any {
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

export class OceanAwsLaunchSpecLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLaunchSpecLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OceanAwsLaunchSpecLabels | cdktf.IResolvable | undefined) {
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

export class OceanAwsLaunchSpecLabelsList extends cdktf.ComplexList {
  public internalValue? : OceanAwsLaunchSpecLabels[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLaunchSpecLabelsOutputReference {
    return new OceanAwsLaunchSpecLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLaunchSpecLoadBalancers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#arn OceanAwsLaunchSpec#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#name OceanAwsLaunchSpec#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#type OceanAwsLaunchSpec#type}
  */
  readonly type: string;
}

export function oceanAwsLaunchSpecLoadBalancersToTerraform(struct?: OceanAwsLaunchSpecLoadBalancers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function oceanAwsLaunchSpecLoadBalancersToHclTerraform(struct?: OceanAwsLaunchSpecLoadBalancers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
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

export class OceanAwsLaunchSpecLoadBalancersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLaunchSpecLoadBalancers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecLoadBalancers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // arn - computed: false, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class OceanAwsLaunchSpecLoadBalancersList extends cdktf.ComplexList {
  public internalValue? : OceanAwsLaunchSpecLoadBalancers[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLaunchSpecLoadBalancersOutputReference {
    return new OceanAwsLaunchSpecLoadBalancersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLaunchSpecResourceLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#max_instance_count OceanAwsLaunchSpec#max_instance_count}
  */
  readonly maxInstanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#min_instance_count OceanAwsLaunchSpec#min_instance_count}
  */
  readonly minInstanceCount?: number;
}

export function oceanAwsLaunchSpecResourceLimitsToTerraform(struct?: OceanAwsLaunchSpecResourceLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_instance_count: cdktf.numberToTerraform(struct!.maxInstanceCount),
    min_instance_count: cdktf.numberToTerraform(struct!.minInstanceCount),
  }
}


export function oceanAwsLaunchSpecResourceLimitsToHclTerraform(struct?: OceanAwsLaunchSpecResourceLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_instance_count: {
      value: cdktf.numberToHclTerraform(struct!.maxInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_instance_count: {
      value: cdktf.numberToHclTerraform(struct!.minInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsLaunchSpecResourceLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLaunchSpecResourceLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInstanceCount = this._maxInstanceCount;
    }
    if (this._minInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInstanceCount = this._minInstanceCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecResourceLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxInstanceCount = undefined;
      this._minInstanceCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxInstanceCount = value.maxInstanceCount;
      this._minInstanceCount = value.minInstanceCount;
    }
  }

  // max_instance_count - computed: false, optional: true, required: false
  private _maxInstanceCount?: number; 
  public get maxInstanceCount() {
    return this.getNumberAttribute('max_instance_count');
  }
  public set maxInstanceCount(value: number) {
    this._maxInstanceCount = value;
  }
  public resetMaxInstanceCount() {
    this._maxInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstanceCountInput() {
    return this._maxInstanceCount;
  }

  // min_instance_count - computed: false, optional: true, required: false
  private _minInstanceCount?: number; 
  public get minInstanceCount() {
    return this.getNumberAttribute('min_instance_count');
  }
  public set minInstanceCount(value: number) {
    this._minInstanceCount = value;
  }
  public resetMinInstanceCount() {
    this._minInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstanceCountInput() {
    return this._minInstanceCount;
  }
}

export class OceanAwsLaunchSpecResourceLimitsList extends cdktf.ComplexList {
  public internalValue? : OceanAwsLaunchSpecResourceLimits[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLaunchSpecResourceLimitsOutputReference {
    return new OceanAwsLaunchSpecResourceLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLaunchSpecSchedulingShutdownHours {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#is_enabled OceanAwsLaunchSpec#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#time_windows OceanAwsLaunchSpec#time_windows}
  */
  readonly timeWindows: string[];
}

export function oceanAwsLaunchSpecSchedulingShutdownHoursToTerraform(struct?: OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference | OceanAwsLaunchSpecSchedulingShutdownHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    time_windows: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.timeWindows),
  }
}


export function oceanAwsLaunchSpecSchedulingShutdownHoursToHclTerraform(struct?: OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference | OceanAwsLaunchSpecSchedulingShutdownHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_windows: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.timeWindows),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsLaunchSpecSchedulingShutdownHours | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._timeWindows !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindows = this._timeWindows;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecSchedulingShutdownHours | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._timeWindows = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._timeWindows = value.timeWindows;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // time_windows - computed: false, optional: false, required: true
  private _timeWindows?: string[]; 
  public get timeWindows() {
    return this.getListAttribute('time_windows');
  }
  public set timeWindows(value: string[]) {
    this._timeWindows = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowsInput() {
    return this._timeWindows;
  }
}
export interface OceanAwsLaunchSpecSchedulingTaskTaskHeadroom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#cpu_per_unit OceanAwsLaunchSpec#cpu_per_unit}
  */
  readonly cpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#gpu_per_unit OceanAwsLaunchSpec#gpu_per_unit}
  */
  readonly gpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#memory_per_unit OceanAwsLaunchSpec#memory_per_unit}
  */
  readonly memoryPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#num_of_units OceanAwsLaunchSpec#num_of_units}
  */
  readonly numOfUnits: number;
}

export function oceanAwsLaunchSpecSchedulingTaskTaskHeadroomToTerraform(struct?: OceanAwsLaunchSpecSchedulingTaskTaskHeadroom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_per_unit: cdktf.numberToTerraform(struct!.cpuPerUnit),
    gpu_per_unit: cdktf.numberToTerraform(struct!.gpuPerUnit),
    memory_per_unit: cdktf.numberToTerraform(struct!.memoryPerUnit),
    num_of_units: cdktf.numberToTerraform(struct!.numOfUnits),
  }
}


export function oceanAwsLaunchSpecSchedulingTaskTaskHeadroomToHclTerraform(struct?: OceanAwsLaunchSpecSchedulingTaskTaskHeadroom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_per_unit: {
      value: cdktf.numberToHclTerraform(struct!.cpuPerUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gpu_per_unit: {
      value: cdktf.numberToHclTerraform(struct!.gpuPerUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_per_unit: {
      value: cdktf.numberToHclTerraform(struct!.memoryPerUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_of_units: {
      value: cdktf.numberToHclTerraform(struct!.numOfUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLaunchSpecSchedulingTaskTaskHeadroom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuPerUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuPerUnit = this._cpuPerUnit;
    }
    if (this._gpuPerUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuPerUnit = this._gpuPerUnit;
    }
    if (this._memoryPerUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryPerUnit = this._memoryPerUnit;
    }
    if (this._numOfUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.numOfUnits = this._numOfUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecSchedulingTaskTaskHeadroom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuPerUnit = undefined;
      this._gpuPerUnit = undefined;
      this._memoryPerUnit = undefined;
      this._numOfUnits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuPerUnit = value.cpuPerUnit;
      this._gpuPerUnit = value.gpuPerUnit;
      this._memoryPerUnit = value.memoryPerUnit;
      this._numOfUnits = value.numOfUnits;
    }
  }

  // cpu_per_unit - computed: false, optional: true, required: false
  private _cpuPerUnit?: number; 
  public get cpuPerUnit() {
    return this.getNumberAttribute('cpu_per_unit');
  }
  public set cpuPerUnit(value: number) {
    this._cpuPerUnit = value;
  }
  public resetCpuPerUnit() {
    this._cpuPerUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPerUnitInput() {
    return this._cpuPerUnit;
  }

  // gpu_per_unit - computed: false, optional: true, required: false
  private _gpuPerUnit?: number; 
  public get gpuPerUnit() {
    return this.getNumberAttribute('gpu_per_unit');
  }
  public set gpuPerUnit(value: number) {
    this._gpuPerUnit = value;
  }
  public resetGpuPerUnit() {
    this._gpuPerUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuPerUnitInput() {
    return this._gpuPerUnit;
  }

  // memory_per_unit - computed: false, optional: true, required: false
  private _memoryPerUnit?: number; 
  public get memoryPerUnit() {
    return this.getNumberAttribute('memory_per_unit');
  }
  public set memoryPerUnit(value: number) {
    this._memoryPerUnit = value;
  }
  public resetMemoryPerUnit() {
    this._memoryPerUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryPerUnitInput() {
    return this._memoryPerUnit;
  }

  // num_of_units - computed: false, optional: false, required: true
  private _numOfUnits?: number; 
  public get numOfUnits() {
    return this.getNumberAttribute('num_of_units');
  }
  public set numOfUnits(value: number) {
    this._numOfUnits = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfUnitsInput() {
    return this._numOfUnits;
  }
}

export class OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList extends cdktf.ComplexList {
  public internalValue? : OceanAwsLaunchSpecSchedulingTaskTaskHeadroom[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference {
    return new OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLaunchSpecSchedulingTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#cron_expression OceanAwsLaunchSpec#cron_expression}
  */
  readonly cronExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#is_enabled OceanAwsLaunchSpec#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#task_type OceanAwsLaunchSpec#task_type}
  */
  readonly taskType: string;
  /**
  * task_headroom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#task_headroom OceanAwsLaunchSpec#task_headroom}
  */
  readonly taskHeadroom?: OceanAwsLaunchSpecSchedulingTaskTaskHeadroom[] | cdktf.IResolvable;
}

export function oceanAwsLaunchSpecSchedulingTaskToTerraform(struct?: OceanAwsLaunchSpecSchedulingTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    task_headroom: cdktf.listMapper(oceanAwsLaunchSpecSchedulingTaskTaskHeadroomToTerraform, true)(struct!.taskHeadroom),
  }
}


export function oceanAwsLaunchSpecSchedulingTaskToHclTerraform(struct?: OceanAwsLaunchSpecSchedulingTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_expression: {
      value: cdktf.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    task_type: {
      value: cdktf.stringToHclTerraform(struct!.taskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_headroom: {
      value: cdktf.listMapperHcl(oceanAwsLaunchSpecSchedulingTaskTaskHeadroomToHclTerraform, true)(struct!.taskHeadroom),
      isBlock: true,
      type: "set",
      storageClassType: "OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsLaunchSpecSchedulingTaskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLaunchSpecSchedulingTask | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._taskHeadroom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskHeadroom = this._taskHeadroom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecSchedulingTask | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronExpression = undefined;
      this._isEnabled = undefined;
      this._taskType = undefined;
      this._taskHeadroom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cronExpression = value.cronExpression;
      this._isEnabled = value.isEnabled;
      this._taskType = value.taskType;
      this._taskHeadroom.internalValue = value.taskHeadroom;
    }
  }

  // cron_expression - computed: false, optional: false, required: true
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // task_headroom - computed: false, optional: true, required: false
  private _taskHeadroom = new OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList(this, "task_headroom", true);
  public get taskHeadroom() {
    return this._taskHeadroom;
  }
  public putTaskHeadroom(value: OceanAwsLaunchSpecSchedulingTaskTaskHeadroom[] | cdktf.IResolvable) {
    this._taskHeadroom.internalValue = value;
  }
  public resetTaskHeadroom() {
    this._taskHeadroom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskHeadroomInput() {
    return this._taskHeadroom.internalValue;
  }
}

export class OceanAwsLaunchSpecSchedulingTaskList extends cdktf.ComplexList {
  public internalValue? : OceanAwsLaunchSpecSchedulingTask[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLaunchSpecSchedulingTaskOutputReference {
    return new OceanAwsLaunchSpecSchedulingTaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLaunchSpecStartupTaints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#effect OceanAwsLaunchSpec#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#key OceanAwsLaunchSpec#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#value OceanAwsLaunchSpec#value}
  */
  readonly value?: string;
}

export function oceanAwsLaunchSpecStartupTaintsToTerraform(struct?: OceanAwsLaunchSpecStartupTaints | cdktf.IResolvable): any {
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


export function oceanAwsLaunchSpecStartupTaintsToHclTerraform(struct?: OceanAwsLaunchSpecStartupTaints | cdktf.IResolvable): any {
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

export class OceanAwsLaunchSpecStartupTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLaunchSpecStartupTaints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OceanAwsLaunchSpecStartupTaints | cdktf.IResolvable | undefined) {
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

export class OceanAwsLaunchSpecStartupTaintsList extends cdktf.ComplexList {
  public internalValue? : OceanAwsLaunchSpecStartupTaints[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLaunchSpecStartupTaintsOutputReference {
    return new OceanAwsLaunchSpecStartupTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLaunchSpecStrategyOrientation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#availability_vs_cost OceanAwsLaunchSpec#availability_vs_cost}
  */
  readonly availabilityVsCost?: string;
}

export function oceanAwsLaunchSpecStrategyOrientationToTerraform(struct?: OceanAwsLaunchSpecStrategyOrientationOutputReference | OceanAwsLaunchSpecStrategyOrientation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_vs_cost: cdktf.stringToTerraform(struct!.availabilityVsCost),
  }
}


export function oceanAwsLaunchSpecStrategyOrientationToHclTerraform(struct?: OceanAwsLaunchSpecStrategyOrientationOutputReference | OceanAwsLaunchSpecStrategyOrientation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_vs_cost: {
      value: cdktf.stringToHclTerraform(struct!.availabilityVsCost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsLaunchSpecStrategyOrientationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsLaunchSpecStrategyOrientation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityVsCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityVsCost = this._availabilityVsCost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecStrategyOrientation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityVsCost = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityVsCost = value.availabilityVsCost;
    }
  }

  // availability_vs_cost - computed: false, optional: true, required: false
  private _availabilityVsCost?: string; 
  public get availabilityVsCost() {
    return this.getStringAttribute('availability_vs_cost');
  }
  public set availabilityVsCost(value: string) {
    this._availabilityVsCost = value;
  }
  public resetAvailabilityVsCost() {
    this._availabilityVsCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityVsCostInput() {
    return this._availabilityVsCost;
  }
}
export interface OceanAwsLaunchSpecStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#draining_timeout OceanAwsLaunchSpec#draining_timeout}
  */
  readonly drainingTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#spot_percentage OceanAwsLaunchSpec#spot_percentage}
  */
  readonly spotPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#utilize_commitments OceanAwsLaunchSpec#utilize_commitments}
  */
  readonly utilizeCommitments?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#utilize_reserved_instances OceanAwsLaunchSpec#utilize_reserved_instances}
  */
  readonly utilizeReservedInstances?: boolean | cdktf.IResolvable;
  /**
  * orientation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#orientation OceanAwsLaunchSpec#orientation}
  */
  readonly orientation?: OceanAwsLaunchSpecStrategyOrientation;
}

export function oceanAwsLaunchSpecStrategyToTerraform(struct?: OceanAwsLaunchSpecStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    draining_timeout: cdktf.numberToTerraform(struct!.drainingTimeout),
    spot_percentage: cdktf.numberToTerraform(struct!.spotPercentage),
    utilize_commitments: cdktf.booleanToTerraform(struct!.utilizeCommitments),
    utilize_reserved_instances: cdktf.booleanToTerraform(struct!.utilizeReservedInstances),
    orientation: oceanAwsLaunchSpecStrategyOrientationToTerraform(struct!.orientation),
  }
}


export function oceanAwsLaunchSpecStrategyToHclTerraform(struct?: OceanAwsLaunchSpecStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    draining_timeout: {
      value: cdktf.numberToHclTerraform(struct!.drainingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spot_percentage: {
      value: cdktf.numberToHclTerraform(struct!.spotPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    utilize_commitments: {
      value: cdktf.booleanToHclTerraform(struct!.utilizeCommitments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    utilize_reserved_instances: {
      value: cdktf.booleanToHclTerraform(struct!.utilizeReservedInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    orientation: {
      value: oceanAwsLaunchSpecStrategyOrientationToHclTerraform(struct!.orientation),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAwsLaunchSpecStrategyOrientationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsLaunchSpecStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLaunchSpecStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drainingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainingTimeout = this._drainingTimeout;
    }
    if (this._spotPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotPercentage = this._spotPercentage;
    }
    if (this._utilizeCommitments !== undefined) {
      hasAnyValues = true;
      internalValueResult.utilizeCommitments = this._utilizeCommitments;
    }
    if (this._utilizeReservedInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.utilizeReservedInstances = this._utilizeReservedInstances;
    }
    if (this._orientation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orientation = this._orientation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._drainingTimeout = undefined;
      this._spotPercentage = undefined;
      this._utilizeCommitments = undefined;
      this._utilizeReservedInstances = undefined;
      this._orientation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._drainingTimeout = value.drainingTimeout;
      this._spotPercentage = value.spotPercentage;
      this._utilizeCommitments = value.utilizeCommitments;
      this._utilizeReservedInstances = value.utilizeReservedInstances;
      this._orientation.internalValue = value.orientation;
    }
  }

  // draining_timeout - computed: false, optional: true, required: false
  private _drainingTimeout?: number; 
  public get drainingTimeout() {
    return this.getNumberAttribute('draining_timeout');
  }
  public set drainingTimeout(value: number) {
    this._drainingTimeout = value;
  }
  public resetDrainingTimeout() {
    this._drainingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainingTimeoutInput() {
    return this._drainingTimeout;
  }

  // spot_percentage - computed: false, optional: true, required: false
  private _spotPercentage?: number; 
  public get spotPercentage() {
    return this.getNumberAttribute('spot_percentage');
  }
  public set spotPercentage(value: number) {
    this._spotPercentage = value;
  }
  public resetSpotPercentage() {
    this._spotPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotPercentageInput() {
    return this._spotPercentage;
  }

  // utilize_commitments - computed: false, optional: true, required: false
  private _utilizeCommitments?: boolean | cdktf.IResolvable; 
  public get utilizeCommitments() {
    return this.getBooleanAttribute('utilize_commitments');
  }
  public set utilizeCommitments(value: boolean | cdktf.IResolvable) {
    this._utilizeCommitments = value;
  }
  public resetUtilizeCommitments() {
    this._utilizeCommitments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utilizeCommitmentsInput() {
    return this._utilizeCommitments;
  }

  // utilize_reserved_instances - computed: false, optional: true, required: false
  private _utilizeReservedInstances?: boolean | cdktf.IResolvable; 
  public get utilizeReservedInstances() {
    return this.getBooleanAttribute('utilize_reserved_instances');
  }
  public set utilizeReservedInstances(value: boolean | cdktf.IResolvable) {
    this._utilizeReservedInstances = value;
  }
  public resetUtilizeReservedInstances() {
    this._utilizeReservedInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utilizeReservedInstancesInput() {
    return this._utilizeReservedInstances;
  }

  // orientation - computed: false, optional: true, required: false
  private _orientation = new OceanAwsLaunchSpecStrategyOrientationOutputReference(this, "orientation");
  public get orientation() {
    return this._orientation;
  }
  public putOrientation(value: OceanAwsLaunchSpecStrategyOrientation) {
    this._orientation.internalValue = value;
  }
  public resetOrientation() {
    this._orientation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orientationInput() {
    return this._orientation.internalValue;
  }
}

export class OceanAwsLaunchSpecStrategyList extends cdktf.ComplexList {
  public internalValue? : OceanAwsLaunchSpecStrategy[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLaunchSpecStrategyOutputReference {
    return new OceanAwsLaunchSpecStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLaunchSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#key OceanAwsLaunchSpec#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#value OceanAwsLaunchSpec#value}
  */
  readonly value: string;
}

export function oceanAwsLaunchSpecTagsToTerraform(struct?: OceanAwsLaunchSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function oceanAwsLaunchSpecTagsToHclTerraform(struct?: OceanAwsLaunchSpecTags | cdktf.IResolvable): any {
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

export class OceanAwsLaunchSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLaunchSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OceanAwsLaunchSpecTags | cdktf.IResolvable | undefined) {
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

export class OceanAwsLaunchSpecTagsList extends cdktf.ComplexList {
  public internalValue? : OceanAwsLaunchSpecTags[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLaunchSpecTagsOutputReference {
    return new OceanAwsLaunchSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLaunchSpecTaints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#effect OceanAwsLaunchSpec#effect}
  */
  readonly effect: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#key OceanAwsLaunchSpec#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#value OceanAwsLaunchSpec#value}
  */
  readonly value: string;
}

export function oceanAwsLaunchSpecTaintsToTerraform(struct?: OceanAwsLaunchSpecTaints | cdktf.IResolvable): any {
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


export function oceanAwsLaunchSpecTaintsToHclTerraform(struct?: OceanAwsLaunchSpecTaints | cdktf.IResolvable): any {
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

export class OceanAwsLaunchSpecTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLaunchSpecTaints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OceanAwsLaunchSpecTaints | cdktf.IResolvable | undefined) {
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

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
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

export class OceanAwsLaunchSpecTaintsList extends cdktf.ComplexList {
  public internalValue? : OceanAwsLaunchSpecTaints[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLaunchSpecTaintsOutputReference {
    return new OceanAwsLaunchSpecTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLaunchSpecUpdatePolicyRollConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#batch_size_percentage OceanAwsLaunchSpec#batch_size_percentage}
  */
  readonly batchSizePercentage: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#respect_pdb OceanAwsLaunchSpec#respect_pdb}
  */
  readonly respectPdb?: boolean | cdktf.IResolvable;
}

export function oceanAwsLaunchSpecUpdatePolicyRollConfigToTerraform(struct?: OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference | OceanAwsLaunchSpecUpdatePolicyRollConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_size_percentage: cdktf.numberToTerraform(struct!.batchSizePercentage),
    respect_pdb: cdktf.booleanToTerraform(struct!.respectPdb),
  }
}


export function oceanAwsLaunchSpecUpdatePolicyRollConfigToHclTerraform(struct?: OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference | OceanAwsLaunchSpecUpdatePolicyRollConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_size_percentage: {
      value: cdktf.numberToHclTerraform(struct!.batchSizePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    respect_pdb: {
      value: cdktf.booleanToHclTerraform(struct!.respectPdb),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsLaunchSpecUpdatePolicyRollConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSizePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSizePercentage = this._batchSizePercentage;
    }
    if (this._respectPdb !== undefined) {
      hasAnyValues = true;
      internalValueResult.respectPdb = this._respectPdb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecUpdatePolicyRollConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchSizePercentage = undefined;
      this._respectPdb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchSizePercentage = value.batchSizePercentage;
      this._respectPdb = value.respectPdb;
    }
  }

  // batch_size_percentage - computed: false, optional: false, required: true
  private _batchSizePercentage?: number; 
  public get batchSizePercentage() {
    return this.getNumberAttribute('batch_size_percentage');
  }
  public set batchSizePercentage(value: number) {
    this._batchSizePercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizePercentageInput() {
    return this._batchSizePercentage;
  }

  // respect_pdb - computed: false, optional: true, required: false
  private _respectPdb?: boolean | cdktf.IResolvable; 
  public get respectPdb() {
    return this.getBooleanAttribute('respect_pdb');
  }
  public set respectPdb(value: boolean | cdktf.IResolvable) {
    this._respectPdb = value;
  }
  public resetRespectPdb() {
    this._respectPdb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respectPdbInput() {
    return this._respectPdb;
  }
}
export interface OceanAwsLaunchSpecUpdatePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#should_roll OceanAwsLaunchSpec#should_roll}
  */
  readonly shouldRoll: boolean | cdktf.IResolvable;
  /**
  * roll_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#roll_config OceanAwsLaunchSpec#roll_config}
  */
  readonly rollConfig?: OceanAwsLaunchSpecUpdatePolicyRollConfig;
}

export function oceanAwsLaunchSpecUpdatePolicyToTerraform(struct?: OceanAwsLaunchSpecUpdatePolicyOutputReference | OceanAwsLaunchSpecUpdatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_roll: cdktf.booleanToTerraform(struct!.shouldRoll),
    roll_config: oceanAwsLaunchSpecUpdatePolicyRollConfigToTerraform(struct!.rollConfig),
  }
}


export function oceanAwsLaunchSpecUpdatePolicyToHclTerraform(struct?: OceanAwsLaunchSpecUpdatePolicyOutputReference | OceanAwsLaunchSpecUpdatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    should_roll: {
      value: cdktf.booleanToHclTerraform(struct!.shouldRoll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    roll_config: {
      value: oceanAwsLaunchSpecUpdatePolicyRollConfigToHclTerraform(struct!.rollConfig),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAwsLaunchSpecUpdatePolicyRollConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsLaunchSpecUpdatePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsLaunchSpecUpdatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldRoll !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldRoll = this._shouldRoll;
    }
    if (this._rollConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollConfig = this._rollConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecUpdatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._shouldRoll = undefined;
      this._rollConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._shouldRoll = value.shouldRoll;
      this._rollConfig.internalValue = value.rollConfig;
    }
  }

  // should_roll - computed: false, optional: false, required: true
  private _shouldRoll?: boolean | cdktf.IResolvable; 
  public get shouldRoll() {
    return this.getBooleanAttribute('should_roll');
  }
  public set shouldRoll(value: boolean | cdktf.IResolvable) {
    this._shouldRoll = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldRollInput() {
    return this._shouldRoll;
  }

  // roll_config - computed: false, optional: true, required: false
  private _rollConfig = new OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference(this, "roll_config");
  public get rollConfig() {
    return this._rollConfig;
  }
  public putRollConfig(value: OceanAwsLaunchSpecUpdatePolicyRollConfig) {
    this._rollConfig.internalValue = value;
  }
  public resetRollConfig() {
    this._rollConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollConfigInput() {
    return this._rollConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec spotinst_ocean_aws_launch_spec}
*/
export class OceanAwsLaunchSpec extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_ocean_aws_launch_spec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OceanAwsLaunchSpec resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OceanAwsLaunchSpec to import
  * @param importFromId The id of the existing OceanAwsLaunchSpec that should be imported. Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OceanAwsLaunchSpec to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spotinst_ocean_aws_launch_spec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws_launch_spec spotinst_ocean_aws_launch_spec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OceanAwsLaunchSpecConfig
  */
  public constructor(scope: Construct, id: string, config: OceanAwsLaunchSpecConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_ocean_aws_launch_spec',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.231.0',
        providerVersionConstraint: '1.231.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._associatePublicIpAddress = config.associatePublicIpAddress;
    this._iamInstanceProfile = config.iamInstanceProfile;
    this._id = config.id;
    this._imageId = config.imageId;
    this._instanceTypes = config.instanceTypes;
    this._name = config.name;
    this._oceanId = config.oceanId;
    this._preferredOdTypes = config.preferredOdTypes;
    this._preferredSpotTypes = config.preferredSpotTypes;
    this._reservedEnis = config.reservedEnis;
    this._restrictScaleDown = config.restrictScaleDown;
    this._rootVolumeSize = config.rootVolumeSize;
    this._securityGroups = config.securityGroups;
    this._subnetIds = config.subnetIds;
    this._userData = config.userData;
    this._autoscaleDown.internalValue = config.autoscaleDown;
    this._autoscaleHeadrooms.internalValue = config.autoscaleHeadrooms;
    this._autoscaleHeadroomsAutomatic.internalValue = config.autoscaleHeadroomsAutomatic;
    this._blockDeviceMappings.internalValue = config.blockDeviceMappings;
    this._createOptions.internalValue = config.createOptions;
    this._deleteOptions.internalValue = config.deleteOptions;
    this._elasticIpPool.internalValue = config.elasticIpPool;
    this._ephemeralStorage.internalValue = config.ephemeralStorage;
    this._images.internalValue = config.images;
    this._instanceMetadataOptions.internalValue = config.instanceMetadataOptions;
    this._instanceStorePolicy.internalValue = config.instanceStorePolicy;
    this._instanceTypesFilters.internalValue = config.instanceTypesFilters;
    this._labels.internalValue = config.labels;
    this._loadBalancers.internalValue = config.loadBalancers;
    this._resourceLimits.internalValue = config.resourceLimits;
    this._schedulingShutdownHours.internalValue = config.schedulingShutdownHours;
    this._schedulingTask.internalValue = config.schedulingTask;
    this._startupTaints.internalValue = config.startupTaints;
    this._strategy.internalValue = config.strategy;
    this._tags.internalValue = config.tags;
    this._taints.internalValue = config.taints;
    this._updatePolicy.internalValue = config.updatePolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associate_public_ip_address - computed: false, optional: true, required: false
  private _associatePublicIpAddress?: boolean | cdktf.IResolvable; 
  public get associatePublicIpAddress() {
    return this.getBooleanAttribute('associate_public_ip_address');
  }
  public set associatePublicIpAddress(value: boolean | cdktf.IResolvable) {
    this._associatePublicIpAddress = value;
  }
  public resetAssociatePublicIpAddress() {
    this._associatePublicIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatePublicIpAddressInput() {
    return this._associatePublicIpAddress;
  }

  // iam_instance_profile - computed: false, optional: true, required: false
  private _iamInstanceProfile?: string; 
  public get iamInstanceProfile() {
    return this.getStringAttribute('iam_instance_profile');
  }
  public set iamInstanceProfile(value: string) {
    this._iamInstanceProfile = value;
  }
  public resetIamInstanceProfile() {
    this._iamInstanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInstanceProfileInput() {
    return this._iamInstanceProfile;
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

  // ocean_id - computed: false, optional: false, required: true
  private _oceanId?: string; 
  public get oceanId() {
    return this.getStringAttribute('ocean_id');
  }
  public set oceanId(value: string) {
    this._oceanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oceanIdInput() {
    return this._oceanId;
  }

  // preferred_od_types - computed: false, optional: true, required: false
  private _preferredOdTypes?: string[]; 
  public get preferredOdTypes() {
    return this.getListAttribute('preferred_od_types');
  }
  public set preferredOdTypes(value: string[]) {
    this._preferredOdTypes = value;
  }
  public resetPreferredOdTypes() {
    this._preferredOdTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredOdTypesInput() {
    return this._preferredOdTypes;
  }

  // preferred_spot_types - computed: false, optional: true, required: false
  private _preferredSpotTypes?: string[]; 
  public get preferredSpotTypes() {
    return this.getListAttribute('preferred_spot_types');
  }
  public set preferredSpotTypes(value: string[]) {
    this._preferredSpotTypes = value;
  }
  public resetPreferredSpotTypes() {
    this._preferredSpotTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredSpotTypesInput() {
    return this._preferredSpotTypes;
  }

  // reserved_enis - computed: false, optional: true, required: false
  private _reservedEnis?: number; 
  public get reservedEnis() {
    return this.getNumberAttribute('reserved_enis');
  }
  public set reservedEnis(value: number) {
    this._reservedEnis = value;
  }
  public resetReservedEnis() {
    this._reservedEnis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedEnisInput() {
    return this._reservedEnis;
  }

  // restrict_scale_down - computed: false, optional: true, required: false
  private _restrictScaleDown?: boolean | cdktf.IResolvable; 
  public get restrictScaleDown() {
    return this.getBooleanAttribute('restrict_scale_down');
  }
  public set restrictScaleDown(value: boolean | cdktf.IResolvable) {
    this._restrictScaleDown = value;
  }
  public resetRestrictScaleDown() {
    this._restrictScaleDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictScaleDownInput() {
    return this._restrictScaleDown;
  }

  // root_volume_size - computed: false, optional: true, required: false
  private _rootVolumeSize?: number; 
  public get rootVolumeSize() {
    return this.getNumberAttribute('root_volume_size');
  }
  public set rootVolumeSize(value: number) {
    this._rootVolumeSize = value;
  }
  public resetRootVolumeSize() {
    this._rootVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeSizeInput() {
    return this._rootVolumeSize;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
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

  // autoscale_down - computed: false, optional: true, required: false
  private _autoscaleDown = new OceanAwsLaunchSpecAutoscaleDownList(this, "autoscale_down", false);
  public get autoscaleDown() {
    return this._autoscaleDown;
  }
  public putAutoscaleDown(value: OceanAwsLaunchSpecAutoscaleDown[] | cdktf.IResolvable) {
    this._autoscaleDown.internalValue = value;
  }
  public resetAutoscaleDown() {
    this._autoscaleDown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleDownInput() {
    return this._autoscaleDown.internalValue;
  }

  // autoscale_headrooms - computed: false, optional: true, required: false
  private _autoscaleHeadrooms = new OceanAwsLaunchSpecAutoscaleHeadroomsList(this, "autoscale_headrooms", true);
  public get autoscaleHeadrooms() {
    return this._autoscaleHeadrooms;
  }
  public putAutoscaleHeadrooms(value: OceanAwsLaunchSpecAutoscaleHeadrooms[] | cdktf.IResolvable) {
    this._autoscaleHeadrooms.internalValue = value;
  }
  public resetAutoscaleHeadrooms() {
    this._autoscaleHeadrooms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleHeadroomsInput() {
    return this._autoscaleHeadrooms.internalValue;
  }

  // autoscale_headrooms_automatic - computed: false, optional: true, required: false
  private _autoscaleHeadroomsAutomatic = new OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList(this, "autoscale_headrooms_automatic", false);
  public get autoscaleHeadroomsAutomatic() {
    return this._autoscaleHeadroomsAutomatic;
  }
  public putAutoscaleHeadroomsAutomatic(value: OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic[] | cdktf.IResolvable) {
    this._autoscaleHeadroomsAutomatic.internalValue = value;
  }
  public resetAutoscaleHeadroomsAutomatic() {
    this._autoscaleHeadroomsAutomatic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleHeadroomsAutomaticInput() {
    return this._autoscaleHeadroomsAutomatic.internalValue;
  }

  // block_device_mappings - computed: false, optional: true, required: false
  private _blockDeviceMappings = new OceanAwsLaunchSpecBlockDeviceMappingsList(this, "block_device_mappings", false);
  public get blockDeviceMappings() {
    return this._blockDeviceMappings;
  }
  public putBlockDeviceMappings(value: OceanAwsLaunchSpecBlockDeviceMappings[] | cdktf.IResolvable) {
    this._blockDeviceMappings.internalValue = value;
  }
  public resetBlockDeviceMappings() {
    this._blockDeviceMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDeviceMappingsInput() {
    return this._blockDeviceMappings.internalValue;
  }

  // create_options - computed: false, optional: true, required: false
  private _createOptions = new OceanAwsLaunchSpecCreateOptionsOutputReference(this, "create_options");
  public get createOptions() {
    return this._createOptions;
  }
  public putCreateOptions(value: OceanAwsLaunchSpecCreateOptions) {
    this._createOptions.internalValue = value;
  }
  public resetCreateOptions() {
    this._createOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createOptionsInput() {
    return this._createOptions.internalValue;
  }

  // delete_options - computed: false, optional: true, required: false
  private _deleteOptions = new OceanAwsLaunchSpecDeleteOptionsOutputReference(this, "delete_options");
  public get deleteOptions() {
    return this._deleteOptions;
  }
  public putDeleteOptions(value: OceanAwsLaunchSpecDeleteOptions) {
    this._deleteOptions.internalValue = value;
  }
  public resetDeleteOptions() {
    this._deleteOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOptionsInput() {
    return this._deleteOptions.internalValue;
  }

  // elastic_ip_pool - computed: false, optional: true, required: false
  private _elasticIpPool = new OceanAwsLaunchSpecElasticIpPoolList(this, "elastic_ip_pool", true);
  public get elasticIpPool() {
    return this._elasticIpPool;
  }
  public putElasticIpPool(value: OceanAwsLaunchSpecElasticIpPool[] | cdktf.IResolvable) {
    this._elasticIpPool.internalValue = value;
  }
  public resetElasticIpPool() {
    this._elasticIpPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticIpPoolInput() {
    return this._elasticIpPool.internalValue;
  }

  // ephemeral_storage - computed: false, optional: true, required: false
  private _ephemeralStorage = new OceanAwsLaunchSpecEphemeralStorageList(this, "ephemeral_storage", false);
  public get ephemeralStorage() {
    return this._ephemeralStorage;
  }
  public putEphemeralStorage(value: OceanAwsLaunchSpecEphemeralStorage[] | cdktf.IResolvable) {
    this._ephemeralStorage.internalValue = value;
  }
  public resetEphemeralStorage() {
    this._ephemeralStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageInput() {
    return this._ephemeralStorage.internalValue;
  }

  // images - computed: false, optional: true, required: false
  private _images = new OceanAwsLaunchSpecImagesList(this, "images", false);
  public get images() {
    return this._images;
  }
  public putImages(value: OceanAwsLaunchSpecImages[] | cdktf.IResolvable) {
    this._images.internalValue = value;
  }
  public resetImages() {
    this._images.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images.internalValue;
  }

  // instance_metadata_options - computed: false, optional: true, required: false
  private _instanceMetadataOptions = new OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference(this, "instance_metadata_options");
  public get instanceMetadataOptions() {
    return this._instanceMetadataOptions;
  }
  public putInstanceMetadataOptions(value: OceanAwsLaunchSpecInstanceMetadataOptions) {
    this._instanceMetadataOptions.internalValue = value;
  }
  public resetInstanceMetadataOptions() {
    this._instanceMetadataOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceMetadataOptionsInput() {
    return this._instanceMetadataOptions.internalValue;
  }

  // instance_store_policy - computed: false, optional: true, required: false
  private _instanceStorePolicy = new OceanAwsLaunchSpecInstanceStorePolicyOutputReference(this, "instance_store_policy");
  public get instanceStorePolicy() {
    return this._instanceStorePolicy;
  }
  public putInstanceStorePolicy(value: OceanAwsLaunchSpecInstanceStorePolicy) {
    this._instanceStorePolicy.internalValue = value;
  }
  public resetInstanceStorePolicy() {
    this._instanceStorePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceStorePolicyInput() {
    return this._instanceStorePolicy.internalValue;
  }

  // instance_types_filters - computed: false, optional: true, required: false
  private _instanceTypesFilters = new OceanAwsLaunchSpecInstanceTypesFiltersOutputReference(this, "instance_types_filters");
  public get instanceTypesFilters() {
    return this._instanceTypesFilters;
  }
  public putInstanceTypesFilters(value: OceanAwsLaunchSpecInstanceTypesFilters) {
    this._instanceTypesFilters.internalValue = value;
  }
  public resetInstanceTypesFilters() {
    this._instanceTypesFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesFiltersInput() {
    return this._instanceTypesFilters.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new OceanAwsLaunchSpecLabelsList(this, "labels", true);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: OceanAwsLaunchSpecLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // load_balancers - computed: false, optional: true, required: false
  private _loadBalancers = new OceanAwsLaunchSpecLoadBalancersList(this, "load_balancers", false);
  public get loadBalancers() {
    return this._loadBalancers;
  }
  public putLoadBalancers(value: OceanAwsLaunchSpecLoadBalancers[] | cdktf.IResolvable) {
    this._loadBalancers.internalValue = value;
  }
  public resetLoadBalancers() {
    this._loadBalancers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancersInput() {
    return this._loadBalancers.internalValue;
  }

  // resource_limits - computed: false, optional: true, required: false
  private _resourceLimits = new OceanAwsLaunchSpecResourceLimitsList(this, "resource_limits", false);
  public get resourceLimits() {
    return this._resourceLimits;
  }
  public putResourceLimits(value: OceanAwsLaunchSpecResourceLimits[] | cdktf.IResolvable) {
    this._resourceLimits.internalValue = value;
  }
  public resetResourceLimits() {
    this._resourceLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLimitsInput() {
    return this._resourceLimits.internalValue;
  }

  // scheduling_shutdown_hours - computed: false, optional: true, required: false
  private _schedulingShutdownHours = new OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference(this, "scheduling_shutdown_hours");
  public get schedulingShutdownHours() {
    return this._schedulingShutdownHours;
  }
  public putSchedulingShutdownHours(value: OceanAwsLaunchSpecSchedulingShutdownHours) {
    this._schedulingShutdownHours.internalValue = value;
  }
  public resetSchedulingShutdownHours() {
    this._schedulingShutdownHours.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingShutdownHoursInput() {
    return this._schedulingShutdownHours.internalValue;
  }

  // scheduling_task - computed: false, optional: true, required: false
  private _schedulingTask = new OceanAwsLaunchSpecSchedulingTaskList(this, "scheduling_task", true);
  public get schedulingTask() {
    return this._schedulingTask;
  }
  public putSchedulingTask(value: OceanAwsLaunchSpecSchedulingTask[] | cdktf.IResolvable) {
    this._schedulingTask.internalValue = value;
  }
  public resetSchedulingTask() {
    this._schedulingTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingTaskInput() {
    return this._schedulingTask.internalValue;
  }

  // startup_taints - computed: false, optional: true, required: false
  private _startupTaints = new OceanAwsLaunchSpecStartupTaintsList(this, "startup_taints", true);
  public get startupTaints() {
    return this._startupTaints;
  }
  public putStartupTaints(value: OceanAwsLaunchSpecStartupTaints[] | cdktf.IResolvable) {
    this._startupTaints.internalValue = value;
  }
  public resetStartupTaints() {
    this._startupTaints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupTaintsInput() {
    return this._startupTaints.internalValue;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy = new OceanAwsLaunchSpecStrategyList(this, "strategy", false);
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: OceanAwsLaunchSpecStrategy[] | cdktf.IResolvable) {
    this._strategy.internalValue = value;
  }
  public resetStrategy() {
    this._strategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new OceanAwsLaunchSpecTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: OceanAwsLaunchSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new OceanAwsLaunchSpecTaintsList(this, "taints", true);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: OceanAwsLaunchSpecTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }

  // update_policy - computed: false, optional: true, required: false
  private _updatePolicy = new OceanAwsLaunchSpecUpdatePolicyOutputReference(this, "update_policy");
  public get updatePolicy() {
    return this._updatePolicy;
  }
  public putUpdatePolicy(value: OceanAwsLaunchSpecUpdatePolicy) {
    this._updatePolicy.internalValue = value;
  }
  public resetUpdatePolicy() {
    this._updatePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePolicyInput() {
    return this._updatePolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      associate_public_ip_address: cdktf.booleanToTerraform(this._associatePublicIpAddress),
      iam_instance_profile: cdktf.stringToTerraform(this._iamInstanceProfile),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceTypes),
      name: cdktf.stringToTerraform(this._name),
      ocean_id: cdktf.stringToTerraform(this._oceanId),
      preferred_od_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredOdTypes),
      preferred_spot_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredSpotTypes),
      reserved_enis: cdktf.numberToTerraform(this._reservedEnis),
      restrict_scale_down: cdktf.booleanToTerraform(this._restrictScaleDown),
      root_volume_size: cdktf.numberToTerraform(this._rootVolumeSize),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      user_data: cdktf.stringToTerraform(this._userData),
      autoscale_down: cdktf.listMapper(oceanAwsLaunchSpecAutoscaleDownToTerraform, true)(this._autoscaleDown.internalValue),
      autoscale_headrooms: cdktf.listMapper(oceanAwsLaunchSpecAutoscaleHeadroomsToTerraform, true)(this._autoscaleHeadrooms.internalValue),
      autoscale_headrooms_automatic: cdktf.listMapper(oceanAwsLaunchSpecAutoscaleHeadroomsAutomaticToTerraform, true)(this._autoscaleHeadroomsAutomatic.internalValue),
      block_device_mappings: cdktf.listMapper(oceanAwsLaunchSpecBlockDeviceMappingsToTerraform, true)(this._blockDeviceMappings.internalValue),
      create_options: oceanAwsLaunchSpecCreateOptionsToTerraform(this._createOptions.internalValue),
      delete_options: oceanAwsLaunchSpecDeleteOptionsToTerraform(this._deleteOptions.internalValue),
      elastic_ip_pool: cdktf.listMapper(oceanAwsLaunchSpecElasticIpPoolToTerraform, true)(this._elasticIpPool.internalValue),
      ephemeral_storage: cdktf.listMapper(oceanAwsLaunchSpecEphemeralStorageToTerraform, true)(this._ephemeralStorage.internalValue),
      images: cdktf.listMapper(oceanAwsLaunchSpecImagesToTerraform, true)(this._images.internalValue),
      instance_metadata_options: oceanAwsLaunchSpecInstanceMetadataOptionsToTerraform(this._instanceMetadataOptions.internalValue),
      instance_store_policy: oceanAwsLaunchSpecInstanceStorePolicyToTerraform(this._instanceStorePolicy.internalValue),
      instance_types_filters: oceanAwsLaunchSpecInstanceTypesFiltersToTerraform(this._instanceTypesFilters.internalValue),
      labels: cdktf.listMapper(oceanAwsLaunchSpecLabelsToTerraform, true)(this._labels.internalValue),
      load_balancers: cdktf.listMapper(oceanAwsLaunchSpecLoadBalancersToTerraform, true)(this._loadBalancers.internalValue),
      resource_limits: cdktf.listMapper(oceanAwsLaunchSpecResourceLimitsToTerraform, true)(this._resourceLimits.internalValue),
      scheduling_shutdown_hours: oceanAwsLaunchSpecSchedulingShutdownHoursToTerraform(this._schedulingShutdownHours.internalValue),
      scheduling_task: cdktf.listMapper(oceanAwsLaunchSpecSchedulingTaskToTerraform, true)(this._schedulingTask.internalValue),
      startup_taints: cdktf.listMapper(oceanAwsLaunchSpecStartupTaintsToTerraform, true)(this._startupTaints.internalValue),
      strategy: cdktf.listMapper(oceanAwsLaunchSpecStrategyToTerraform, true)(this._strategy.internalValue),
      tags: cdktf.listMapper(oceanAwsLaunchSpecTagsToTerraform, true)(this._tags.internalValue),
      taints: cdktf.listMapper(oceanAwsLaunchSpecTaintsToTerraform, true)(this._taints.internalValue),
      update_policy: oceanAwsLaunchSpecUpdatePolicyToTerraform(this._updatePolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      associate_public_ip_address: {
        value: cdktf.booleanToHclTerraform(this._associatePublicIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      iam_instance_profile: {
        value: cdktf.stringToHclTerraform(this._iamInstanceProfile),
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
      instance_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocean_id: {
        value: cdktf.stringToHclTerraform(this._oceanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_od_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredOdTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      preferred_spot_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredSpotTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      reserved_enis: {
        value: cdktf.numberToHclTerraform(this._reservedEnis),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      restrict_scale_down: {
        value: cdktf.booleanToHclTerraform(this._restrictScaleDown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      root_volume_size: {
        value: cdktf.numberToHclTerraform(this._rootVolumeSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnetIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autoscale_down: {
        value: cdktf.listMapperHcl(oceanAwsLaunchSpecAutoscaleDownToHclTerraform, true)(this._autoscaleDown.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAwsLaunchSpecAutoscaleDownList",
      },
      autoscale_headrooms: {
        value: cdktf.listMapperHcl(oceanAwsLaunchSpecAutoscaleHeadroomsToHclTerraform, true)(this._autoscaleHeadrooms.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OceanAwsLaunchSpecAutoscaleHeadroomsList",
      },
      autoscale_headrooms_automatic: {
        value: cdktf.listMapperHcl(oceanAwsLaunchSpecAutoscaleHeadroomsAutomaticToHclTerraform, true)(this._autoscaleHeadroomsAutomatic.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList",
      },
      block_device_mappings: {
        value: cdktf.listMapperHcl(oceanAwsLaunchSpecBlockDeviceMappingsToHclTerraform, true)(this._blockDeviceMappings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAwsLaunchSpecBlockDeviceMappingsList",
      },
      create_options: {
        value: oceanAwsLaunchSpecCreateOptionsToHclTerraform(this._createOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAwsLaunchSpecCreateOptionsList",
      },
      delete_options: {
        value: oceanAwsLaunchSpecDeleteOptionsToHclTerraform(this._deleteOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAwsLaunchSpecDeleteOptionsList",
      },
      elastic_ip_pool: {
        value: cdktf.listMapperHcl(oceanAwsLaunchSpecElasticIpPoolToHclTerraform, true)(this._elasticIpPool.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OceanAwsLaunchSpecElasticIpPoolList",
      },
      ephemeral_storage: {
        value: cdktf.listMapperHcl(oceanAwsLaunchSpecEphemeralStorageToHclTerraform, true)(this._ephemeralStorage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAwsLaunchSpecEphemeralStorageList",
      },
      images: {
        value: cdktf.listMapperHcl(oceanAwsLaunchSpecImagesToHclTerraform, true)(this._images.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAwsLaunchSpecImagesList",
      },
      instance_metadata_options: {
        value: oceanAwsLaunchSpecInstanceMetadataOptionsToHclTerraform(this._instanceMetadataOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAwsLaunchSpecInstanceMetadataOptionsList",
      },
      instance_store_policy: {
        value: oceanAwsLaunchSpecInstanceStorePolicyToHclTerraform(this._instanceStorePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAwsLaunchSpecInstanceStorePolicyList",
      },
      instance_types_filters: {
        value: oceanAwsLaunchSpecInstanceTypesFiltersToHclTerraform(this._instanceTypesFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAwsLaunchSpecInstanceTypesFiltersList",
      },
      labels: {
        value: cdktf.listMapperHcl(oceanAwsLaunchSpecLabelsToHclTerraform, true)(this._labels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OceanAwsLaunchSpecLabelsList",
      },
      load_balancers: {
        value: cdktf.listMapperHcl(oceanAwsLaunchSpecLoadBalancersToHclTerraform, true)(this._loadBalancers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAwsLaunchSpecLoadBalancersList",
      },
      resource_limits: {
        value: cdktf.listMapperHcl(oceanAwsLaunchSpecResourceLimitsToHclTerraform, true)(this._resourceLimits.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAwsLaunchSpecResourceLimitsList",
      },
      scheduling_shutdown_hours: {
        value: oceanAwsLaunchSpecSchedulingShutdownHoursToHclTerraform(this._schedulingShutdownHours.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAwsLaunchSpecSchedulingShutdownHoursList",
      },
      scheduling_task: {
        value: cdktf.listMapperHcl(oceanAwsLaunchSpecSchedulingTaskToHclTerraform, true)(this._schedulingTask.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OceanAwsLaunchSpecSchedulingTaskList",
      },
      startup_taints: {
        value: cdktf.listMapperHcl(oceanAwsLaunchSpecStartupTaintsToHclTerraform, true)(this._startupTaints.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OceanAwsLaunchSpecStartupTaintsList",
      },
      strategy: {
        value: cdktf.listMapperHcl(oceanAwsLaunchSpecStrategyToHclTerraform, true)(this._strategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAwsLaunchSpecStrategyList",
      },
      tags: {
        value: cdktf.listMapperHcl(oceanAwsLaunchSpecTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OceanAwsLaunchSpecTagsList",
      },
      taints: {
        value: cdktf.listMapperHcl(oceanAwsLaunchSpecTaintsToHclTerraform, true)(this._taints.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OceanAwsLaunchSpecTaintsList",
      },
      update_policy: {
        value: oceanAwsLaunchSpecUpdatePolicyToHclTerraform(this._updatePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAwsLaunchSpecUpdatePolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
