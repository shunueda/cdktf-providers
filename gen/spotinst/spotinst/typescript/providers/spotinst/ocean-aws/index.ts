// https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceanAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#associate_ipv6_address OceanAws#associate_ipv6_address}
  */
  readonly associateIpv6Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#associate_public_ip_address OceanAws#associate_public_ip_address}
  */
  readonly associatePublicIpAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#blacklist OceanAws#blacklist}
  */
  readonly blacklist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#controller_id OceanAws#controller_id}
  */
  readonly controllerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#desired_capacity OceanAws#desired_capacity}
  */
  readonly desiredCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#draining_timeout OceanAws#draining_timeout}
  */
  readonly drainingTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#ebs_optimized OceanAws#ebs_optimized}
  */
  readonly ebsOptimized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#fallback_to_ondemand OceanAws#fallback_to_ondemand}
  */
  readonly fallbackToOndemand?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#grace_period OceanAws#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#health_check_unhealthy_duration_before_replacement OceanAws#health_check_unhealthy_duration_before_replacement}
  */
  readonly healthCheckUnhealthyDurationBeforeReplacement?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#iam_instance_profile OceanAws#iam_instance_profile}
  */
  readonly iamInstanceProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#id OceanAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#image_id OceanAws#image_id}
  */
  readonly imageId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#key_name OceanAws#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#max_size OceanAws#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#min_size OceanAws#min_size}
  */
  readonly minSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#monitoring OceanAws#monitoring}
  */
  readonly monitoring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#name OceanAws#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#primary_ipv6 OceanAws#primary_ipv6}
  */
  readonly primaryIpv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#region OceanAws#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#reserved_enis OceanAws#reserved_enis}
  */
  readonly reservedEnis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#root_volume_size OceanAws#root_volume_size}
  */
  readonly rootVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#security_groups OceanAws#security_groups}
  */
  readonly securityGroups: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#spot_percentage OceanAws#spot_percentage}
  */
  readonly spotPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#spread_nodes_by OceanAws#spread_nodes_by}
  */
  readonly spreadNodesBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#subnet_ids OceanAws#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#use_as_template_only OceanAws#use_as_template_only}
  */
  readonly useAsTemplateOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#user_data OceanAws#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#utilize_commitments OceanAws#utilize_commitments}
  */
  readonly utilizeCommitments?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#utilize_reserved_instances OceanAws#utilize_reserved_instances}
  */
  readonly utilizeReservedInstances?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#whitelist OceanAws#whitelist}
  */
  readonly whitelist?: string[];
  /**
  * attach_load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#attach_load_balancer OceanAws#attach_load_balancer}
  */
  readonly attachLoadBalancer?: OceanAwsAttachLoadBalancer[] | cdktf.IResolvable;
  /**
  * autoscaler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#autoscaler OceanAws#autoscaler}
  */
  readonly autoscaler?: OceanAwsAutoscaler;
  /**
  * block_device_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#block_device_mappings OceanAws#block_device_mappings}
  */
  readonly blockDeviceMappings?: OceanAwsBlockDeviceMappings[] | cdktf.IResolvable;
  /**
  * cluster_orientation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#cluster_orientation OceanAws#cluster_orientation}
  */
  readonly clusterOrientation?: OceanAwsClusterOrientation[] | cdktf.IResolvable;
  /**
  * detach_load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#detach_load_balancer OceanAws#detach_load_balancer}
  */
  readonly detachLoadBalancer?: OceanAwsDetachLoadBalancer[] | cdktf.IResolvable;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#filters OceanAws#filters}
  */
  readonly filters?: OceanAwsFilters;
  /**
  * instance_metadata_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#instance_metadata_options OceanAws#instance_metadata_options}
  */
  readonly instanceMetadataOptions?: OceanAwsInstanceMetadataOptions;
  /**
  * instance_store_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#instance_store_policy OceanAws#instance_store_policy}
  */
  readonly instanceStorePolicy?: OceanAwsInstanceStorePolicy;
  /**
  * load_balancers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#load_balancers OceanAws#load_balancers}
  */
  readonly loadBalancers?: OceanAwsLoadBalancers[] | cdktf.IResolvable;
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#logging OceanAws#logging}
  */
  readonly logging?: OceanAwsLogging;
  /**
  * resource_tag_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#resource_tag_specification OceanAws#resource_tag_specification}
  */
  readonly resourceTagSpecification?: OceanAwsResourceTagSpecification[] | cdktf.IResolvable;
  /**
  * scheduled_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#scheduled_task OceanAws#scheduled_task}
  */
  readonly scheduledTask?: OceanAwsScheduledTask;
  /**
  * startup_taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#startup_taints OceanAws#startup_taints}
  */
  readonly startupTaints?: OceanAwsStartupTaints[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#tags OceanAws#tags}
  */
  readonly tags?: OceanAwsTags[] | cdktf.IResolvable;
  /**
  * update_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#update_policy OceanAws#update_policy}
  */
  readonly updatePolicy?: OceanAwsUpdatePolicy;
}
export interface OceanAwsAttachLoadBalancer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#arn OceanAws#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#name OceanAws#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#type OceanAws#type}
  */
  readonly type: string;
}

export function oceanAwsAttachLoadBalancerToTerraform(struct?: OceanAwsAttachLoadBalancer | cdktf.IResolvable): any {
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


export function oceanAwsAttachLoadBalancerToHclTerraform(struct?: OceanAwsAttachLoadBalancer | cdktf.IResolvable): any {
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

export class OceanAwsAttachLoadBalancerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsAttachLoadBalancer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OceanAwsAttachLoadBalancer | cdktf.IResolvable | undefined) {
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

export class OceanAwsAttachLoadBalancerList extends cdktf.ComplexList {
  public internalValue? : OceanAwsAttachLoadBalancer[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsAttachLoadBalancerOutputReference {
    return new OceanAwsAttachLoadBalancerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsAutoscalerAutoscaleDown {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#evaluation_periods OceanAws#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#is_aggressive_scale_down_enabled OceanAws#is_aggressive_scale_down_enabled}
  */
  readonly isAggressiveScaleDownEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#max_scale_down_percentage OceanAws#max_scale_down_percentage}
  */
  readonly maxScaleDownPercentage?: number;
}

export function oceanAwsAutoscalerAutoscaleDownToTerraform(struct?: OceanAwsAutoscalerAutoscaleDownOutputReference | OceanAwsAutoscalerAutoscaleDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    is_aggressive_scale_down_enabled: cdktf.booleanToTerraform(struct!.isAggressiveScaleDownEnabled),
    max_scale_down_percentage: cdktf.numberToTerraform(struct!.maxScaleDownPercentage),
  }
}


export function oceanAwsAutoscalerAutoscaleDownToHclTerraform(struct?: OceanAwsAutoscalerAutoscaleDownOutputReference | OceanAwsAutoscalerAutoscaleDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evaluation_periods: {
      value: cdktf.numberToHclTerraform(struct!.evaluationPeriods),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class OceanAwsAutoscalerAutoscaleDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsAutoscalerAutoscaleDown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationPeriods !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationPeriods = this._evaluationPeriods;
    }
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

  public set internalValue(value: OceanAwsAutoscalerAutoscaleDown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._evaluationPeriods = undefined;
      this._isAggressiveScaleDownEnabled = undefined;
      this._maxScaleDownPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._evaluationPeriods = value.evaluationPeriods;
      this._isAggressiveScaleDownEnabled = value.isAggressiveScaleDownEnabled;
      this._maxScaleDownPercentage = value.maxScaleDownPercentage;
    }
  }

  // evaluation_periods - computed: false, optional: true, required: false
  private _evaluationPeriods?: number; 
  public get evaluationPeriods() {
    return this.getNumberAttribute('evaluation_periods');
  }
  public set evaluationPeriods(value: number) {
    this._evaluationPeriods = value;
  }
  public resetEvaluationPeriods() {
    this._evaluationPeriods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationPeriodsInput() {
    return this._evaluationPeriods;
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
export interface OceanAwsAutoscalerAutoscaleHeadroom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#cpu_per_unit OceanAws#cpu_per_unit}
  */
  readonly cpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#gpu_per_unit OceanAws#gpu_per_unit}
  */
  readonly gpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#memory_per_unit OceanAws#memory_per_unit}
  */
  readonly memoryPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#num_of_units OceanAws#num_of_units}
  */
  readonly numOfUnits?: number;
}

export function oceanAwsAutoscalerAutoscaleHeadroomToTerraform(struct?: OceanAwsAutoscalerAutoscaleHeadroomOutputReference | OceanAwsAutoscalerAutoscaleHeadroom): any {
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


export function oceanAwsAutoscalerAutoscaleHeadroomToHclTerraform(struct?: OceanAwsAutoscalerAutoscaleHeadroomOutputReference | OceanAwsAutoscalerAutoscaleHeadroom): any {
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

export class OceanAwsAutoscalerAutoscaleHeadroomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsAutoscalerAutoscaleHeadroom | undefined {
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

  public set internalValue(value: OceanAwsAutoscalerAutoscaleHeadroom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuPerUnit = undefined;
      this._gpuPerUnit = undefined;
      this._memoryPerUnit = undefined;
      this._numOfUnits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

  // num_of_units - computed: false, optional: true, required: false
  private _numOfUnits?: number; 
  public get numOfUnits() {
    return this.getNumberAttribute('num_of_units');
  }
  public set numOfUnits(value: number) {
    this._numOfUnits = value;
  }
  public resetNumOfUnits() {
    this._numOfUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfUnitsInput() {
    return this._numOfUnits;
  }
}
export interface OceanAwsAutoscalerResourceLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#max_memory_gib OceanAws#max_memory_gib}
  */
  readonly maxMemoryGib?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#max_vcpu OceanAws#max_vcpu}
  */
  readonly maxVcpu?: number;
}

export function oceanAwsAutoscalerResourceLimitsToTerraform(struct?: OceanAwsAutoscalerResourceLimitsOutputReference | OceanAwsAutoscalerResourceLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_memory_gib: cdktf.numberToTerraform(struct!.maxMemoryGib),
    max_vcpu: cdktf.numberToTerraform(struct!.maxVcpu),
  }
}


export function oceanAwsAutoscalerResourceLimitsToHclTerraform(struct?: OceanAwsAutoscalerResourceLimitsOutputReference | OceanAwsAutoscalerResourceLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_memory_gib: {
      value: cdktf.numberToHclTerraform(struct!.maxMemoryGib),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsAutoscalerResourceLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsAutoscalerResourceLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxMemoryGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemoryGib = this._maxMemoryGib;
    }
    if (this._maxVcpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVcpu = this._maxVcpu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsAutoscalerResourceLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxMemoryGib = undefined;
      this._maxVcpu = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxMemoryGib = value.maxMemoryGib;
      this._maxVcpu = value.maxVcpu;
    }
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
}
export interface OceanAwsAutoscaler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#auto_headroom_percentage OceanAws#auto_headroom_percentage}
  */
  readonly autoHeadroomPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#autoscale_cooldown OceanAws#autoscale_cooldown}
  */
  readonly autoscaleCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#autoscale_is_auto_config OceanAws#autoscale_is_auto_config}
  */
  readonly autoscaleIsAutoConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#autoscale_is_enabled OceanAws#autoscale_is_enabled}
  */
  readonly autoscaleIsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#enable_automatic_and_manual_headroom OceanAws#enable_automatic_and_manual_headroom}
  */
  readonly enableAutomaticAndManualHeadroom?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#extended_resource_definitions OceanAws#extended_resource_definitions}
  */
  readonly extendedResourceDefinitions?: string[];
  /**
  * autoscale_down block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#autoscale_down OceanAws#autoscale_down}
  */
  readonly autoscaleDown?: OceanAwsAutoscalerAutoscaleDown;
  /**
  * autoscale_headroom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#autoscale_headroom OceanAws#autoscale_headroom}
  */
  readonly autoscaleHeadroom?: OceanAwsAutoscalerAutoscaleHeadroom;
  /**
  * resource_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#resource_limits OceanAws#resource_limits}
  */
  readonly resourceLimits?: OceanAwsAutoscalerResourceLimits;
}

export function oceanAwsAutoscalerToTerraform(struct?: OceanAwsAutoscalerOutputReference | OceanAwsAutoscaler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_headroom_percentage: cdktf.numberToTerraform(struct!.autoHeadroomPercentage),
    autoscale_cooldown: cdktf.numberToTerraform(struct!.autoscaleCooldown),
    autoscale_is_auto_config: cdktf.booleanToTerraform(struct!.autoscaleIsAutoConfig),
    autoscale_is_enabled: cdktf.booleanToTerraform(struct!.autoscaleIsEnabled),
    enable_automatic_and_manual_headroom: cdktf.booleanToTerraform(struct!.enableAutomaticAndManualHeadroom),
    extended_resource_definitions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extendedResourceDefinitions),
    autoscale_down: oceanAwsAutoscalerAutoscaleDownToTerraform(struct!.autoscaleDown),
    autoscale_headroom: oceanAwsAutoscalerAutoscaleHeadroomToTerraform(struct!.autoscaleHeadroom),
    resource_limits: oceanAwsAutoscalerResourceLimitsToTerraform(struct!.resourceLimits),
  }
}


export function oceanAwsAutoscalerToHclTerraform(struct?: OceanAwsAutoscalerOutputReference | OceanAwsAutoscaler): any {
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
    autoscale_cooldown: {
      value: cdktf.numberToHclTerraform(struct!.autoscaleCooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autoscale_is_auto_config: {
      value: cdktf.booleanToHclTerraform(struct!.autoscaleIsAutoConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    autoscale_is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.autoscaleIsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_automatic_and_manual_headroom: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutomaticAndManualHeadroom),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extended_resource_definitions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extendedResourceDefinitions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    autoscale_down: {
      value: oceanAwsAutoscalerAutoscaleDownToHclTerraform(struct!.autoscaleDown),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAwsAutoscalerAutoscaleDownList",
    },
    autoscale_headroom: {
      value: oceanAwsAutoscalerAutoscaleHeadroomToHclTerraform(struct!.autoscaleHeadroom),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAwsAutoscalerAutoscaleHeadroomList",
    },
    resource_limits: {
      value: oceanAwsAutoscalerResourceLimitsToHclTerraform(struct!.resourceLimits),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAwsAutoscalerResourceLimitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsAutoscalerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsAutoscaler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoHeadroomPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoHeadroomPercentage = this._autoHeadroomPercentage;
    }
    if (this._autoscaleCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleCooldown = this._autoscaleCooldown;
    }
    if (this._autoscaleIsAutoConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleIsAutoConfig = this._autoscaleIsAutoConfig;
    }
    if (this._autoscaleIsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleIsEnabled = this._autoscaleIsEnabled;
    }
    if (this._enableAutomaticAndManualHeadroom !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutomaticAndManualHeadroom = this._enableAutomaticAndManualHeadroom;
    }
    if (this._extendedResourceDefinitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedResourceDefinitions = this._extendedResourceDefinitions;
    }
    if (this._autoscaleDown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleDown = this._autoscaleDown?.internalValue;
    }
    if (this._autoscaleHeadroom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleHeadroom = this._autoscaleHeadroom?.internalValue;
    }
    if (this._resourceLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLimits = this._resourceLimits?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsAutoscaler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoHeadroomPercentage = undefined;
      this._autoscaleCooldown = undefined;
      this._autoscaleIsAutoConfig = undefined;
      this._autoscaleIsEnabled = undefined;
      this._enableAutomaticAndManualHeadroom = undefined;
      this._extendedResourceDefinitions = undefined;
      this._autoscaleDown.internalValue = undefined;
      this._autoscaleHeadroom.internalValue = undefined;
      this._resourceLimits.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoHeadroomPercentage = value.autoHeadroomPercentage;
      this._autoscaleCooldown = value.autoscaleCooldown;
      this._autoscaleIsAutoConfig = value.autoscaleIsAutoConfig;
      this._autoscaleIsEnabled = value.autoscaleIsEnabled;
      this._enableAutomaticAndManualHeadroom = value.enableAutomaticAndManualHeadroom;
      this._extendedResourceDefinitions = value.extendedResourceDefinitions;
      this._autoscaleDown.internalValue = value.autoscaleDown;
      this._autoscaleHeadroom.internalValue = value.autoscaleHeadroom;
      this._resourceLimits.internalValue = value.resourceLimits;
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

  // autoscale_cooldown - computed: false, optional: true, required: false
  private _autoscaleCooldown?: number; 
  public get autoscaleCooldown() {
    return this.getNumberAttribute('autoscale_cooldown');
  }
  public set autoscaleCooldown(value: number) {
    this._autoscaleCooldown = value;
  }
  public resetAutoscaleCooldown() {
    this._autoscaleCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleCooldownInput() {
    return this._autoscaleCooldown;
  }

  // autoscale_is_auto_config - computed: false, optional: true, required: false
  private _autoscaleIsAutoConfig?: boolean | cdktf.IResolvable; 
  public get autoscaleIsAutoConfig() {
    return this.getBooleanAttribute('autoscale_is_auto_config');
  }
  public set autoscaleIsAutoConfig(value: boolean | cdktf.IResolvable) {
    this._autoscaleIsAutoConfig = value;
  }
  public resetAutoscaleIsAutoConfig() {
    this._autoscaleIsAutoConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleIsAutoConfigInput() {
    return this._autoscaleIsAutoConfig;
  }

  // autoscale_is_enabled - computed: false, optional: true, required: false
  private _autoscaleIsEnabled?: boolean | cdktf.IResolvable; 
  public get autoscaleIsEnabled() {
    return this.getBooleanAttribute('autoscale_is_enabled');
  }
  public set autoscaleIsEnabled(value: boolean | cdktf.IResolvable) {
    this._autoscaleIsEnabled = value;
  }
  public resetAutoscaleIsEnabled() {
    this._autoscaleIsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleIsEnabledInput() {
    return this._autoscaleIsEnabled;
  }

  // enable_automatic_and_manual_headroom - computed: false, optional: true, required: false
  private _enableAutomaticAndManualHeadroom?: boolean | cdktf.IResolvable; 
  public get enableAutomaticAndManualHeadroom() {
    return this.getBooleanAttribute('enable_automatic_and_manual_headroom');
  }
  public set enableAutomaticAndManualHeadroom(value: boolean | cdktf.IResolvable) {
    this._enableAutomaticAndManualHeadroom = value;
  }
  public resetEnableAutomaticAndManualHeadroom() {
    this._enableAutomaticAndManualHeadroom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutomaticAndManualHeadroomInput() {
    return this._enableAutomaticAndManualHeadroom;
  }

  // extended_resource_definitions - computed: false, optional: true, required: false
  private _extendedResourceDefinitions?: string[]; 
  public get extendedResourceDefinitions() {
    return this.getListAttribute('extended_resource_definitions');
  }
  public set extendedResourceDefinitions(value: string[]) {
    this._extendedResourceDefinitions = value;
  }
  public resetExtendedResourceDefinitions() {
    this._extendedResourceDefinitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedResourceDefinitionsInput() {
    return this._extendedResourceDefinitions;
  }

  // autoscale_down - computed: false, optional: true, required: false
  private _autoscaleDown = new OceanAwsAutoscalerAutoscaleDownOutputReference(this, "autoscale_down");
  public get autoscaleDown() {
    return this._autoscaleDown;
  }
  public putAutoscaleDown(value: OceanAwsAutoscalerAutoscaleDown) {
    this._autoscaleDown.internalValue = value;
  }
  public resetAutoscaleDown() {
    this._autoscaleDown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleDownInput() {
    return this._autoscaleDown.internalValue;
  }

  // autoscale_headroom - computed: false, optional: true, required: false
  private _autoscaleHeadroom = new OceanAwsAutoscalerAutoscaleHeadroomOutputReference(this, "autoscale_headroom");
  public get autoscaleHeadroom() {
    return this._autoscaleHeadroom;
  }
  public putAutoscaleHeadroom(value: OceanAwsAutoscalerAutoscaleHeadroom) {
    this._autoscaleHeadroom.internalValue = value;
  }
  public resetAutoscaleHeadroom() {
    this._autoscaleHeadroom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleHeadroomInput() {
    return this._autoscaleHeadroom.internalValue;
  }

  // resource_limits - computed: false, optional: true, required: false
  private _resourceLimits = new OceanAwsAutoscalerResourceLimitsOutputReference(this, "resource_limits");
  public get resourceLimits() {
    return this._resourceLimits;
  }
  public putResourceLimits(value: OceanAwsAutoscalerResourceLimits) {
    this._resourceLimits.internalValue = value;
  }
  public resetResourceLimits() {
    this._resourceLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLimitsInput() {
    return this._resourceLimits.internalValue;
  }
}
export interface OceanAwsBlockDeviceMappingsEbsDynamicIops {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#base_size OceanAws#base_size}
  */
  readonly baseSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#resource OceanAws#resource}
  */
  readonly resource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#size_per_resource_unit OceanAws#size_per_resource_unit}
  */
  readonly sizePerResourceUnit: number;
}

export function oceanAwsBlockDeviceMappingsEbsDynamicIopsToTerraform(struct?: OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference | OceanAwsBlockDeviceMappingsEbsDynamicIops): any {
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


export function oceanAwsBlockDeviceMappingsEbsDynamicIopsToHclTerraform(struct?: OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference | OceanAwsBlockDeviceMappingsEbsDynamicIops): any {
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

export class OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsBlockDeviceMappingsEbsDynamicIops | undefined {
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

  public set internalValue(value: OceanAwsBlockDeviceMappingsEbsDynamicIops | undefined) {
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
export interface OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#base_size OceanAws#base_size}
  */
  readonly baseSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#resource OceanAws#resource}
  */
  readonly resource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#size_per_resource_unit OceanAws#size_per_resource_unit}
  */
  readonly sizePerResourceUnit: number;
}

export function oceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeToTerraform(struct?: OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference | OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize): any {
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


export function oceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeToHclTerraform(struct?: OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference | OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize): any {
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

export class OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize | undefined {
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

  public set internalValue(value: OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize | undefined) {
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
export interface OceanAwsBlockDeviceMappingsEbs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#delete_on_termination OceanAws#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#encrypted OceanAws#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#iops OceanAws#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#kms_key_id OceanAws#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#snapshot_id OceanAws#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#throughput OceanAws#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#volume_size OceanAws#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#volume_type OceanAws#volume_type}
  */
  readonly volumeType?: string;
  /**
  * dynamic_iops block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#dynamic_iops OceanAws#dynamic_iops}
  */
  readonly dynamicIops?: OceanAwsBlockDeviceMappingsEbsDynamicIops;
  /**
  * dynamic_volume_size block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#dynamic_volume_size OceanAws#dynamic_volume_size}
  */
  readonly dynamicVolumeSize?: OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize;
}

export function oceanAwsBlockDeviceMappingsEbsToTerraform(struct?: OceanAwsBlockDeviceMappingsEbsOutputReference | OceanAwsBlockDeviceMappingsEbs): any {
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
    dynamic_iops: oceanAwsBlockDeviceMappingsEbsDynamicIopsToTerraform(struct!.dynamicIops),
    dynamic_volume_size: oceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeToTerraform(struct!.dynamicVolumeSize),
  }
}


export function oceanAwsBlockDeviceMappingsEbsToHclTerraform(struct?: OceanAwsBlockDeviceMappingsEbsOutputReference | OceanAwsBlockDeviceMappingsEbs): any {
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
      value: oceanAwsBlockDeviceMappingsEbsDynamicIopsToHclTerraform(struct!.dynamicIops),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAwsBlockDeviceMappingsEbsDynamicIopsList",
    },
    dynamic_volume_size: {
      value: oceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeToHclTerraform(struct!.dynamicVolumeSize),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsBlockDeviceMappingsEbsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsBlockDeviceMappingsEbs | undefined {
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

  public set internalValue(value: OceanAwsBlockDeviceMappingsEbs | undefined) {
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

  // delete_on_termination - computed: true, optional: true, required: false
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

  // encrypted - computed: true, optional: true, required: false
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

  // volume_type - computed: true, optional: true, required: false
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
  private _dynamicIops = new OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference(this, "dynamic_iops");
  public get dynamicIops() {
    return this._dynamicIops;
  }
  public putDynamicIops(value: OceanAwsBlockDeviceMappingsEbsDynamicIops) {
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
  private _dynamicVolumeSize = new OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference(this, "dynamic_volume_size");
  public get dynamicVolumeSize() {
    return this._dynamicVolumeSize;
  }
  public putDynamicVolumeSize(value: OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize) {
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
export interface OceanAwsBlockDeviceMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#device_name OceanAws#device_name}
  */
  readonly deviceName?: string;
  /**
  * ebs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#ebs OceanAws#ebs}
  */
  readonly ebs?: OceanAwsBlockDeviceMappingsEbs;
}

export function oceanAwsBlockDeviceMappingsToTerraform(struct?: OceanAwsBlockDeviceMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    ebs: oceanAwsBlockDeviceMappingsEbsToTerraform(struct!.ebs),
  }
}


export function oceanAwsBlockDeviceMappingsToHclTerraform(struct?: OceanAwsBlockDeviceMappings | cdktf.IResolvable): any {
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
    ebs: {
      value: oceanAwsBlockDeviceMappingsEbsToHclTerraform(struct!.ebs),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAwsBlockDeviceMappingsEbsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsBlockDeviceMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsBlockDeviceMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._ebs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebs = this._ebs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsBlockDeviceMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceName = undefined;
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

  // ebs - computed: false, optional: true, required: false
  private _ebs = new OceanAwsBlockDeviceMappingsEbsOutputReference(this, "ebs");
  public get ebs() {
    return this._ebs;
  }
  public putEbs(value: OceanAwsBlockDeviceMappingsEbs) {
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

export class OceanAwsBlockDeviceMappingsList extends cdktf.ComplexList {
  public internalValue? : OceanAwsBlockDeviceMappings[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsBlockDeviceMappingsOutputReference {
    return new OceanAwsBlockDeviceMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsClusterOrientation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#availability_vs_cost OceanAws#availability_vs_cost}
  */
  readonly availabilityVsCost?: string;
}

export function oceanAwsClusterOrientationToTerraform(struct?: OceanAwsClusterOrientation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_vs_cost: cdktf.stringToTerraform(struct!.availabilityVsCost),
  }
}


export function oceanAwsClusterOrientationToHclTerraform(struct?: OceanAwsClusterOrientation | cdktf.IResolvable): any {
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

export class OceanAwsClusterOrientationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsClusterOrientation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityVsCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityVsCost = this._availabilityVsCost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsClusterOrientation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityVsCost = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class OceanAwsClusterOrientationList extends cdktf.ComplexList {
  public internalValue? : OceanAwsClusterOrientation[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsClusterOrientationOutputReference {
    return new OceanAwsClusterOrientationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsDetachLoadBalancer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#arn OceanAws#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#name OceanAws#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#type OceanAws#type}
  */
  readonly type: string;
}

export function oceanAwsDetachLoadBalancerToTerraform(struct?: OceanAwsDetachLoadBalancer | cdktf.IResolvable): any {
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


export function oceanAwsDetachLoadBalancerToHclTerraform(struct?: OceanAwsDetachLoadBalancer | cdktf.IResolvable): any {
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

export class OceanAwsDetachLoadBalancerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsDetachLoadBalancer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OceanAwsDetachLoadBalancer | cdktf.IResolvable | undefined) {
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

export class OceanAwsDetachLoadBalancerList extends cdktf.ComplexList {
  public internalValue? : OceanAwsDetachLoadBalancer[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsDetachLoadBalancerOutputReference {
    return new OceanAwsDetachLoadBalancerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#architectures OceanAws#architectures}
  */
  readonly architectures?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#categories OceanAws#categories}
  */
  readonly categories?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#disk_types OceanAws#disk_types}
  */
  readonly diskTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#exclude_families OceanAws#exclude_families}
  */
  readonly excludeFamilies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#exclude_metal OceanAws#exclude_metal}
  */
  readonly excludeMetal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#hypervisor OceanAws#hypervisor}
  */
  readonly hypervisor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#include_families OceanAws#include_families}
  */
  readonly includeFamilies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#is_ena_supported OceanAws#is_ena_supported}
  */
  readonly isEnaSupported?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#max_gpu OceanAws#max_gpu}
  */
  readonly maxGpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#max_memory_gib OceanAws#max_memory_gib}
  */
  readonly maxMemoryGib?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#max_network_performance OceanAws#max_network_performance}
  */
  readonly maxNetworkPerformance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#max_vcpu OceanAws#max_vcpu}
  */
  readonly maxVcpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#min_enis OceanAws#min_enis}
  */
  readonly minEnis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#min_gpu OceanAws#min_gpu}
  */
  readonly minGpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#min_memory_gib OceanAws#min_memory_gib}
  */
  readonly minMemoryGib?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#min_network_performance OceanAws#min_network_performance}
  */
  readonly minNetworkPerformance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#min_vcpu OceanAws#min_vcpu}
  */
  readonly minVcpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#root_device_types OceanAws#root_device_types}
  */
  readonly rootDeviceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#virtualization_types OceanAws#virtualization_types}
  */
  readonly virtualizationTypes?: string[];
}

export function oceanAwsFiltersToTerraform(struct?: OceanAwsFiltersOutputReference | OceanAwsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    architectures: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.architectures),
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


export function oceanAwsFiltersToHclTerraform(struct?: OceanAwsFiltersOutputReference | OceanAwsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    architectures: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.architectures),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
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

export class OceanAwsFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._architectures !== undefined) {
      hasAnyValues = true;
      internalValueResult.architectures = this._architectures;
    }
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

  public set internalValue(value: OceanAwsFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._architectures = undefined;
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
      this._architectures = value.architectures;
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

  // architectures - computed: false, optional: true, required: false
  private _architectures?: string[]; 
  public get architectures() {
    return cdktf.Fn.tolist(this.getListAttribute('architectures'));
  }
  public set architectures(value: string[]) {
    this._architectures = value;
  }
  public resetArchitectures() {
    this._architectures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architecturesInput() {
    return this._architectures;
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
export interface OceanAwsInstanceMetadataOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#http_put_response_hop_limit OceanAws#http_put_response_hop_limit}
  */
  readonly httpPutResponseHopLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#http_tokens OceanAws#http_tokens}
  */
  readonly httpTokens: string;
}

export function oceanAwsInstanceMetadataOptionsToTerraform(struct?: OceanAwsInstanceMetadataOptionsOutputReference | OceanAwsInstanceMetadataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_put_response_hop_limit: cdktf.numberToTerraform(struct!.httpPutResponseHopLimit),
    http_tokens: cdktf.stringToTerraform(struct!.httpTokens),
  }
}


export function oceanAwsInstanceMetadataOptionsToHclTerraform(struct?: OceanAwsInstanceMetadataOptionsOutputReference | OceanAwsInstanceMetadataOptions): any {
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

export class OceanAwsInstanceMetadataOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsInstanceMetadataOptions | undefined {
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

  public set internalValue(value: OceanAwsInstanceMetadataOptions | undefined) {
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
export interface OceanAwsInstanceStorePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#instance_store_policy_type OceanAws#instance_store_policy_type}
  */
  readonly instanceStorePolicyType?: string;
}

export function oceanAwsInstanceStorePolicyToTerraform(struct?: OceanAwsInstanceStorePolicyOutputReference | OceanAwsInstanceStorePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_store_policy_type: cdktf.stringToTerraform(struct!.instanceStorePolicyType),
  }
}


export function oceanAwsInstanceStorePolicyToHclTerraform(struct?: OceanAwsInstanceStorePolicyOutputReference | OceanAwsInstanceStorePolicy): any {
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

export class OceanAwsInstanceStorePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsInstanceStorePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceStorePolicyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceStorePolicyType = this._instanceStorePolicyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsInstanceStorePolicy | undefined) {
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
export interface OceanAwsLoadBalancers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#arn OceanAws#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#name OceanAws#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#type OceanAws#type}
  */
  readonly type?: string;
}

export function oceanAwsLoadBalancersToTerraform(struct?: OceanAwsLoadBalancers | cdktf.IResolvable): any {
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


export function oceanAwsLoadBalancersToHclTerraform(struct?: OceanAwsLoadBalancers | cdktf.IResolvable): any {
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

export class OceanAwsLoadBalancersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLoadBalancers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OceanAwsLoadBalancers | cdktf.IResolvable | undefined) {
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

export class OceanAwsLoadBalancersList extends cdktf.ComplexList {
  public internalValue? : OceanAwsLoadBalancers[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLoadBalancersOutputReference {
    return new OceanAwsLoadBalancersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLoggingExportS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#id OceanAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function oceanAwsLoggingExportS3ToTerraform(struct?: OceanAwsLoggingExportS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function oceanAwsLoggingExportS3ToHclTerraform(struct?: OceanAwsLoggingExportS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsLoggingExportS3OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLoggingExportS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLoggingExportS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class OceanAwsLoggingExportS3List extends cdktf.ComplexList {
  public internalValue? : OceanAwsLoggingExportS3[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLoggingExportS3OutputReference {
    return new OceanAwsLoggingExportS3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLoggingExport {
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#s3 OceanAws#s3}
  */
  readonly s3?: OceanAwsLoggingExportS3[] | cdktf.IResolvable;
}

export function oceanAwsLoggingExportToTerraform(struct?: OceanAwsLoggingExportOutputReference | OceanAwsLoggingExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3: cdktf.listMapper(oceanAwsLoggingExportS3ToTerraform, true)(struct!.s3),
  }
}


export function oceanAwsLoggingExportToHclTerraform(struct?: OceanAwsLoggingExportOutputReference | OceanAwsLoggingExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3: {
      value: cdktf.listMapperHcl(oceanAwsLoggingExportS3ToHclTerraform, true)(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAwsLoggingExportS3List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsLoggingExportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsLoggingExport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLoggingExport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3.internalValue = value.s3;
    }
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new OceanAwsLoggingExportS3List(this, "s3", false);
  public get s3() {
    return this._s3;
  }
  public putS3(value: OceanAwsLoggingExportS3[] | cdktf.IResolvable) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
export interface OceanAwsLogging {
  /**
  * export block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#export OceanAws#export}
  */
  readonly export?: OceanAwsLoggingExport;
}

export function oceanAwsLoggingToTerraform(struct?: OceanAwsLoggingOutputReference | OceanAwsLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export: oceanAwsLoggingExportToTerraform(struct!.export),
  }
}


export function oceanAwsLoggingToHclTerraform(struct?: OceanAwsLoggingOutputReference | OceanAwsLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export: {
      value: oceanAwsLoggingExportToHclTerraform(struct!.export),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAwsLoggingExportList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._export?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.export = this._export?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._export.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._export.internalValue = value.export;
    }
  }

  // export - computed: false, optional: true, required: false
  private _export = new OceanAwsLoggingExportOutputReference(this, "export");
  public get export() {
    return this._export;
  }
  public putExport(value: OceanAwsLoggingExport) {
    this._export.internalValue = value;
  }
  public resetExport() {
    this._export.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportInput() {
    return this._export.internalValue;
  }
}
export interface OceanAwsResourceTagSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#should_tag_volumes OceanAws#should_tag_volumes}
  */
  readonly shouldTagVolumes?: boolean | cdktf.IResolvable;
}

export function oceanAwsResourceTagSpecificationToTerraform(struct?: OceanAwsResourceTagSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_tag_volumes: cdktf.booleanToTerraform(struct!.shouldTagVolumes),
  }
}


export function oceanAwsResourceTagSpecificationToHclTerraform(struct?: OceanAwsResourceTagSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    should_tag_volumes: {
      value: cdktf.booleanToHclTerraform(struct!.shouldTagVolumes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsResourceTagSpecificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsResourceTagSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldTagVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldTagVolumes = this._shouldTagVolumes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsResourceTagSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shouldTagVolumes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shouldTagVolumes = value.shouldTagVolumes;
    }
  }

  // should_tag_volumes - computed: false, optional: true, required: false
  private _shouldTagVolumes?: boolean | cdktf.IResolvable; 
  public get shouldTagVolumes() {
    return this.getBooleanAttribute('should_tag_volumes');
  }
  public set shouldTagVolumes(value: boolean | cdktf.IResolvable) {
    this._shouldTagVolumes = value;
  }
  public resetShouldTagVolumes() {
    this._shouldTagVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldTagVolumesInput() {
    return this._shouldTagVolumes;
  }
}

export class OceanAwsResourceTagSpecificationList extends cdktf.ComplexList {
  public internalValue? : OceanAwsResourceTagSpecification[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsResourceTagSpecificationOutputReference {
    return new OceanAwsResourceTagSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsScheduledTaskShutdownHours {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#is_enabled OceanAws#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#time_windows OceanAws#time_windows}
  */
  readonly timeWindows: string[];
}

export function oceanAwsScheduledTaskShutdownHoursToTerraform(struct?: OceanAwsScheduledTaskShutdownHoursOutputReference | OceanAwsScheduledTaskShutdownHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    time_windows: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.timeWindows),
  }
}


export function oceanAwsScheduledTaskShutdownHoursToHclTerraform(struct?: OceanAwsScheduledTaskShutdownHoursOutputReference | OceanAwsScheduledTaskShutdownHours): any {
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

export class OceanAwsScheduledTaskShutdownHoursOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsScheduledTaskShutdownHours | undefined {
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

  public set internalValue(value: OceanAwsScheduledTaskShutdownHours | undefined) {
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
export interface OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#batch_min_healthy_percentage OceanAws#batch_min_healthy_percentage}
  */
  readonly batchMinHealthyPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#batch_size_percentage OceanAws#batch_size_percentage}
  */
  readonly batchSizePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#comment OceanAws#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#respect_pdb OceanAws#respect_pdb}
  */
  readonly respectPdb?: boolean | cdktf.IResolvable;
}

export function oceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollToTerraform(struct?: OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference | OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_min_healthy_percentage: cdktf.numberToTerraform(struct!.batchMinHealthyPercentage),
    batch_size_percentage: cdktf.numberToTerraform(struct!.batchSizePercentage),
    comment: cdktf.stringToTerraform(struct!.comment),
    respect_pdb: cdktf.booleanToTerraform(struct!.respectPdb),
  }
}


export function oceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollToHclTerraform(struct?: OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference | OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_min_healthy_percentage: {
      value: cdktf.numberToHclTerraform(struct!.batchMinHealthyPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_size_percentage: {
      value: cdktf.numberToHclTerraform(struct!.batchSizePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchMinHealthyPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMinHealthyPercentage = this._batchMinHealthyPercentage;
    }
    if (this._batchSizePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSizePercentage = this._batchSizePercentage;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._respectPdb !== undefined) {
      hasAnyValues = true;
      internalValueResult.respectPdb = this._respectPdb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchMinHealthyPercentage = undefined;
      this._batchSizePercentage = undefined;
      this._comment = undefined;
      this._respectPdb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchMinHealthyPercentage = value.batchMinHealthyPercentage;
      this._batchSizePercentage = value.batchSizePercentage;
      this._comment = value.comment;
      this._respectPdb = value.respectPdb;
    }
  }

  // batch_min_healthy_percentage - computed: false, optional: true, required: false
  private _batchMinHealthyPercentage?: number; 
  public get batchMinHealthyPercentage() {
    return this.getNumberAttribute('batch_min_healthy_percentage');
  }
  public set batchMinHealthyPercentage(value: number) {
    this._batchMinHealthyPercentage = value;
  }
  public resetBatchMinHealthyPercentage() {
    this._batchMinHealthyPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchMinHealthyPercentageInput() {
    return this._batchMinHealthyPercentage;
  }

  // batch_size_percentage - computed: false, optional: true, required: false
  private _batchSizePercentage?: number; 
  public get batchSizePercentage() {
    return this.getNumberAttribute('batch_size_percentage');
  }
  public set batchSizePercentage(value: number) {
    this._batchSizePercentage = value;
  }
  public resetBatchSizePercentage() {
    this._batchSizePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizePercentageInput() {
    return this._batchSizePercentage;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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
export interface OceanAwsScheduledTaskTasksParametersAmiAutoUpdate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#apply_roll OceanAws#apply_roll}
  */
  readonly applyRoll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#minor_version OceanAws#minor_version}
  */
  readonly minorVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#patch OceanAws#patch}
  */
  readonly patch?: boolean | cdktf.IResolvable;
  /**
  * ami_auto_update_cluster_roll block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#ami_auto_update_cluster_roll OceanAws#ami_auto_update_cluster_roll}
  */
  readonly amiAutoUpdateClusterRoll?: OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll;
}

export function oceanAwsScheduledTaskTasksParametersAmiAutoUpdateToTerraform(struct?: OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference | OceanAwsScheduledTaskTasksParametersAmiAutoUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_roll: cdktf.booleanToTerraform(struct!.applyRoll),
    minor_version: cdktf.booleanToTerraform(struct!.minorVersion),
    patch: cdktf.booleanToTerraform(struct!.patch),
    ami_auto_update_cluster_roll: oceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollToTerraform(struct!.amiAutoUpdateClusterRoll),
  }
}


export function oceanAwsScheduledTaskTasksParametersAmiAutoUpdateToHclTerraform(struct?: OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference | OceanAwsScheduledTaskTasksParametersAmiAutoUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply_roll: {
      value: cdktf.booleanToHclTerraform(struct!.applyRoll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    minor_version: {
      value: cdktf.booleanToHclTerraform(struct!.minorVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    patch: {
      value: cdktf.booleanToHclTerraform(struct!.patch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ami_auto_update_cluster_roll: {
      value: oceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollToHclTerraform(struct!.amiAutoUpdateClusterRoll),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsScheduledTaskTasksParametersAmiAutoUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyRoll !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyRoll = this._applyRoll;
    }
    if (this._minorVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minorVersion = this._minorVersion;
    }
    if (this._patch !== undefined) {
      hasAnyValues = true;
      internalValueResult.patch = this._patch;
    }
    if (this._amiAutoUpdateClusterRoll?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amiAutoUpdateClusterRoll = this._amiAutoUpdateClusterRoll?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsScheduledTaskTasksParametersAmiAutoUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applyRoll = undefined;
      this._minorVersion = undefined;
      this._patch = undefined;
      this._amiAutoUpdateClusterRoll.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applyRoll = value.applyRoll;
      this._minorVersion = value.minorVersion;
      this._patch = value.patch;
      this._amiAutoUpdateClusterRoll.internalValue = value.amiAutoUpdateClusterRoll;
    }
  }

  // apply_roll - computed: false, optional: true, required: false
  private _applyRoll?: boolean | cdktf.IResolvable; 
  public get applyRoll() {
    return this.getBooleanAttribute('apply_roll');
  }
  public set applyRoll(value: boolean | cdktf.IResolvable) {
    this._applyRoll = value;
  }
  public resetApplyRoll() {
    this._applyRoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyRollInput() {
    return this._applyRoll;
  }

  // minor_version - computed: false, optional: true, required: false
  private _minorVersion?: boolean | cdktf.IResolvable; 
  public get minorVersion() {
    return this.getBooleanAttribute('minor_version');
  }
  public set minorVersion(value: boolean | cdktf.IResolvable) {
    this._minorVersion = value;
  }
  public resetMinorVersion() {
    this._minorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minorVersionInput() {
    return this._minorVersion;
  }

  // patch - computed: false, optional: true, required: false
  private _patch?: boolean | cdktf.IResolvable; 
  public get patch() {
    return this.getBooleanAttribute('patch');
  }
  public set patch(value: boolean | cdktf.IResolvable) {
    this._patch = value;
  }
  public resetPatch() {
    this._patch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchInput() {
    return this._patch;
  }

  // ami_auto_update_cluster_roll - computed: false, optional: true, required: false
  private _amiAutoUpdateClusterRoll = new OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference(this, "ami_auto_update_cluster_roll");
  public get amiAutoUpdateClusterRoll() {
    return this._amiAutoUpdateClusterRoll;
  }
  public putAmiAutoUpdateClusterRoll(value: OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll) {
    this._amiAutoUpdateClusterRoll.internalValue = value;
  }
  public resetAmiAutoUpdateClusterRoll() {
    this._amiAutoUpdateClusterRoll.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amiAutoUpdateClusterRollInput() {
    return this._amiAutoUpdateClusterRoll.internalValue;
  }
}
export interface OceanAwsScheduledTaskTasksParametersParametersClusterRoll {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#batch_min_healthy_percentage OceanAws#batch_min_healthy_percentage}
  */
  readonly batchMinHealthyPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#batch_size_percentage OceanAws#batch_size_percentage}
  */
  readonly batchSizePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#comment OceanAws#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#respect_pdb OceanAws#respect_pdb}
  */
  readonly respectPdb?: boolean | cdktf.IResolvable;
}

export function oceanAwsScheduledTaskTasksParametersParametersClusterRollToTerraform(struct?: OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference | OceanAwsScheduledTaskTasksParametersParametersClusterRoll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_min_healthy_percentage: cdktf.numberToTerraform(struct!.batchMinHealthyPercentage),
    batch_size_percentage: cdktf.numberToTerraform(struct!.batchSizePercentage),
    comment: cdktf.stringToTerraform(struct!.comment),
    respect_pdb: cdktf.booleanToTerraform(struct!.respectPdb),
  }
}


export function oceanAwsScheduledTaskTasksParametersParametersClusterRollToHclTerraform(struct?: OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference | OceanAwsScheduledTaskTasksParametersParametersClusterRoll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_min_healthy_percentage: {
      value: cdktf.numberToHclTerraform(struct!.batchMinHealthyPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_size_percentage: {
      value: cdktf.numberToHclTerraform(struct!.batchSizePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsScheduledTaskTasksParametersParametersClusterRoll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchMinHealthyPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMinHealthyPercentage = this._batchMinHealthyPercentage;
    }
    if (this._batchSizePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSizePercentage = this._batchSizePercentage;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._respectPdb !== undefined) {
      hasAnyValues = true;
      internalValueResult.respectPdb = this._respectPdb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsScheduledTaskTasksParametersParametersClusterRoll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchMinHealthyPercentage = undefined;
      this._batchSizePercentage = undefined;
      this._comment = undefined;
      this._respectPdb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchMinHealthyPercentage = value.batchMinHealthyPercentage;
      this._batchSizePercentage = value.batchSizePercentage;
      this._comment = value.comment;
      this._respectPdb = value.respectPdb;
    }
  }

  // batch_min_healthy_percentage - computed: false, optional: true, required: false
  private _batchMinHealthyPercentage?: number; 
  public get batchMinHealthyPercentage() {
    return this.getNumberAttribute('batch_min_healthy_percentage');
  }
  public set batchMinHealthyPercentage(value: number) {
    this._batchMinHealthyPercentage = value;
  }
  public resetBatchMinHealthyPercentage() {
    this._batchMinHealthyPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchMinHealthyPercentageInput() {
    return this._batchMinHealthyPercentage;
  }

  // batch_size_percentage - computed: false, optional: true, required: false
  private _batchSizePercentage?: number; 
  public get batchSizePercentage() {
    return this.getNumberAttribute('batch_size_percentage');
  }
  public set batchSizePercentage(value: number) {
    this._batchSizePercentage = value;
  }
  public resetBatchSizePercentage() {
    this._batchSizePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizePercentageInput() {
    return this._batchSizePercentage;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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
export interface OceanAwsScheduledTaskTasksParameters {
  /**
  * ami_auto_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#ami_auto_update OceanAws#ami_auto_update}
  */
  readonly amiAutoUpdate?: OceanAwsScheduledTaskTasksParametersAmiAutoUpdate;
  /**
  * parameters_cluster_roll block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#parameters_cluster_roll OceanAws#parameters_cluster_roll}
  */
  readonly parametersClusterRoll?: OceanAwsScheduledTaskTasksParametersParametersClusterRoll;
}

export function oceanAwsScheduledTaskTasksParametersToTerraform(struct?: OceanAwsScheduledTaskTasksParametersOutputReference | OceanAwsScheduledTaskTasksParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ami_auto_update: oceanAwsScheduledTaskTasksParametersAmiAutoUpdateToTerraform(struct!.amiAutoUpdate),
    parameters_cluster_roll: oceanAwsScheduledTaskTasksParametersParametersClusterRollToTerraform(struct!.parametersClusterRoll),
  }
}


export function oceanAwsScheduledTaskTasksParametersToHclTerraform(struct?: OceanAwsScheduledTaskTasksParametersOutputReference | OceanAwsScheduledTaskTasksParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ami_auto_update: {
      value: oceanAwsScheduledTaskTasksParametersAmiAutoUpdateToHclTerraform(struct!.amiAutoUpdate),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAwsScheduledTaskTasksParametersAmiAutoUpdateList",
    },
    parameters_cluster_roll: {
      value: oceanAwsScheduledTaskTasksParametersParametersClusterRollToHclTerraform(struct!.parametersClusterRoll),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAwsScheduledTaskTasksParametersParametersClusterRollList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsScheduledTaskTasksParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsScheduledTaskTasksParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amiAutoUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amiAutoUpdate = this._amiAutoUpdate?.internalValue;
    }
    if (this._parametersClusterRoll?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parametersClusterRoll = this._parametersClusterRoll?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsScheduledTaskTasksParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._amiAutoUpdate.internalValue = undefined;
      this._parametersClusterRoll.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._amiAutoUpdate.internalValue = value.amiAutoUpdate;
      this._parametersClusterRoll.internalValue = value.parametersClusterRoll;
    }
  }

  // ami_auto_update - computed: false, optional: true, required: false
  private _amiAutoUpdate = new OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference(this, "ami_auto_update");
  public get amiAutoUpdate() {
    return this._amiAutoUpdate;
  }
  public putAmiAutoUpdate(value: OceanAwsScheduledTaskTasksParametersAmiAutoUpdate) {
    this._amiAutoUpdate.internalValue = value;
  }
  public resetAmiAutoUpdate() {
    this._amiAutoUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amiAutoUpdateInput() {
    return this._amiAutoUpdate.internalValue;
  }

  // parameters_cluster_roll - computed: false, optional: true, required: false
  private _parametersClusterRoll = new OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference(this, "parameters_cluster_roll");
  public get parametersClusterRoll() {
    return this._parametersClusterRoll;
  }
  public putParametersClusterRoll(value: OceanAwsScheduledTaskTasksParametersParametersClusterRoll) {
    this._parametersClusterRoll.internalValue = value;
  }
  public resetParametersClusterRoll() {
    this._parametersClusterRoll.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersClusterRollInput() {
    return this._parametersClusterRoll.internalValue;
  }
}
export interface OceanAwsScheduledTaskTasks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#cron_expression OceanAws#cron_expression}
  */
  readonly cronExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#is_enabled OceanAws#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#task_type OceanAws#task_type}
  */
  readonly taskType: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#parameters OceanAws#parameters}
  */
  readonly parameters?: OceanAwsScheduledTaskTasksParameters;
}

export function oceanAwsScheduledTaskTasksToTerraform(struct?: OceanAwsScheduledTaskTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    parameters: oceanAwsScheduledTaskTasksParametersToTerraform(struct!.parameters),
  }
}


export function oceanAwsScheduledTaskTasksToHclTerraform(struct?: OceanAwsScheduledTaskTasks | cdktf.IResolvable): any {
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
    parameters: {
      value: oceanAwsScheduledTaskTasksParametersToHclTerraform(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAwsScheduledTaskTasksParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsScheduledTaskTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsScheduledTaskTasks | cdktf.IResolvable | undefined {
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
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsScheduledTaskTasks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronExpression = undefined;
      this._isEnabled = undefined;
      this._taskType = undefined;
      this._parameters.internalValue = undefined;
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
      this._parameters.internalValue = value.parameters;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new OceanAwsScheduledTaskTasksParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: OceanAwsScheduledTaskTasksParameters) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class OceanAwsScheduledTaskTasksList extends cdktf.ComplexList {
  public internalValue? : OceanAwsScheduledTaskTasks[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsScheduledTaskTasksOutputReference {
    return new OceanAwsScheduledTaskTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsScheduledTask {
  /**
  * shutdown_hours block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#shutdown_hours OceanAws#shutdown_hours}
  */
  readonly shutdownHours?: OceanAwsScheduledTaskShutdownHours;
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#tasks OceanAws#tasks}
  */
  readonly tasks?: OceanAwsScheduledTaskTasks[] | cdktf.IResolvable;
}

export function oceanAwsScheduledTaskToTerraform(struct?: OceanAwsScheduledTaskOutputReference | OceanAwsScheduledTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shutdown_hours: oceanAwsScheduledTaskShutdownHoursToTerraform(struct!.shutdownHours),
    tasks: cdktf.listMapper(oceanAwsScheduledTaskTasksToTerraform, true)(struct!.tasks),
  }
}


export function oceanAwsScheduledTaskToHclTerraform(struct?: OceanAwsScheduledTaskOutputReference | OceanAwsScheduledTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shutdown_hours: {
      value: oceanAwsScheduledTaskShutdownHoursToHclTerraform(struct!.shutdownHours),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAwsScheduledTaskShutdownHoursList",
    },
    tasks: {
      value: cdktf.listMapperHcl(oceanAwsScheduledTaskTasksToHclTerraform, true)(struct!.tasks),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAwsScheduledTaskTasksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsScheduledTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsScheduledTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shutdownHours?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdownHours = this._shutdownHours?.internalValue;
    }
    if (this._tasks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasks = this._tasks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsScheduledTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._shutdownHours.internalValue = undefined;
      this._tasks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._shutdownHours.internalValue = value.shutdownHours;
      this._tasks.internalValue = value.tasks;
    }
  }

  // shutdown_hours - computed: false, optional: true, required: false
  private _shutdownHours = new OceanAwsScheduledTaskShutdownHoursOutputReference(this, "shutdown_hours");
  public get shutdownHours() {
    return this._shutdownHours;
  }
  public putShutdownHours(value: OceanAwsScheduledTaskShutdownHours) {
    this._shutdownHours.internalValue = value;
  }
  public resetShutdownHours() {
    this._shutdownHours.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownHoursInput() {
    return this._shutdownHours.internalValue;
  }

  // tasks - computed: false, optional: true, required: false
  private _tasks = new OceanAwsScheduledTaskTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: OceanAwsScheduledTaskTasks[] | cdktf.IResolvable) {
    this._tasks.internalValue = value;
  }
  public resetTasks() {
    this._tasks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks.internalValue;
  }
}
export interface OceanAwsStartupTaints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#effect OceanAws#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#key OceanAws#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#value OceanAws#value}
  */
  readonly value?: string;
}

export function oceanAwsStartupTaintsToTerraform(struct?: OceanAwsStartupTaints | cdktf.IResolvable): any {
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


export function oceanAwsStartupTaintsToHclTerraform(struct?: OceanAwsStartupTaints | cdktf.IResolvable): any {
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

export class OceanAwsStartupTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsStartupTaints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OceanAwsStartupTaints | cdktf.IResolvable | undefined) {
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

export class OceanAwsStartupTaintsList extends cdktf.ComplexList {
  public internalValue? : OceanAwsStartupTaints[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsStartupTaintsOutputReference {
    return new OceanAwsStartupTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#key OceanAws#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#value OceanAws#value}
  */
  readonly value: string;
}

export function oceanAwsTagsToTerraform(struct?: OceanAwsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function oceanAwsTagsToHclTerraform(struct?: OceanAwsTags | cdktf.IResolvable): any {
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

export class OceanAwsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OceanAwsTags | cdktf.IResolvable | undefined) {
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

export class OceanAwsTagsList extends cdktf.ComplexList {
  public internalValue? : OceanAwsTags[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsTagsOutputReference {
    return new OceanAwsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsUpdatePolicyRollConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#batch_min_healthy_percentage OceanAws#batch_min_healthy_percentage}
  */
  readonly batchMinHealthyPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#batch_size_percentage OceanAws#batch_size_percentage}
  */
  readonly batchSizePercentage: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#launch_spec_ids OceanAws#launch_spec_ids}
  */
  readonly launchSpecIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#respect_pdb OceanAws#respect_pdb}
  */
  readonly respectPdb?: boolean | cdktf.IResolvable;
}

export function oceanAwsUpdatePolicyRollConfigToTerraform(struct?: OceanAwsUpdatePolicyRollConfigOutputReference | OceanAwsUpdatePolicyRollConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_min_healthy_percentage: cdktf.numberToTerraform(struct!.batchMinHealthyPercentage),
    batch_size_percentage: cdktf.numberToTerraform(struct!.batchSizePercentage),
    launch_spec_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.launchSpecIds),
    respect_pdb: cdktf.booleanToTerraform(struct!.respectPdb),
  }
}


export function oceanAwsUpdatePolicyRollConfigToHclTerraform(struct?: OceanAwsUpdatePolicyRollConfigOutputReference | OceanAwsUpdatePolicyRollConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_min_healthy_percentage: {
      value: cdktf.numberToHclTerraform(struct!.batchMinHealthyPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_size_percentage: {
      value: cdktf.numberToHclTerraform(struct!.batchSizePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    launch_spec_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.launchSpecIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class OceanAwsUpdatePolicyRollConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsUpdatePolicyRollConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchMinHealthyPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMinHealthyPercentage = this._batchMinHealthyPercentage;
    }
    if (this._batchSizePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSizePercentage = this._batchSizePercentage;
    }
    if (this._launchSpecIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchSpecIds = this._launchSpecIds;
    }
    if (this._respectPdb !== undefined) {
      hasAnyValues = true;
      internalValueResult.respectPdb = this._respectPdb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsUpdatePolicyRollConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchMinHealthyPercentage = undefined;
      this._batchSizePercentage = undefined;
      this._launchSpecIds = undefined;
      this._respectPdb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchMinHealthyPercentage = value.batchMinHealthyPercentage;
      this._batchSizePercentage = value.batchSizePercentage;
      this._launchSpecIds = value.launchSpecIds;
      this._respectPdb = value.respectPdb;
    }
  }

  // batch_min_healthy_percentage - computed: false, optional: true, required: false
  private _batchMinHealthyPercentage?: number; 
  public get batchMinHealthyPercentage() {
    return this.getNumberAttribute('batch_min_healthy_percentage');
  }
  public set batchMinHealthyPercentage(value: number) {
    this._batchMinHealthyPercentage = value;
  }
  public resetBatchMinHealthyPercentage() {
    this._batchMinHealthyPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchMinHealthyPercentageInput() {
    return this._batchMinHealthyPercentage;
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

  // launch_spec_ids - computed: false, optional: true, required: false
  private _launchSpecIds?: string[]; 
  public get launchSpecIds() {
    return this.getListAttribute('launch_spec_ids');
  }
  public set launchSpecIds(value: string[]) {
    this._launchSpecIds = value;
  }
  public resetLaunchSpecIds() {
    this._launchSpecIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchSpecIdsInput() {
    return this._launchSpecIds;
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
export interface OceanAwsUpdatePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#auto_apply_tags OceanAws#auto_apply_tags}
  */
  readonly autoApplyTags?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#conditioned_roll OceanAws#conditioned_roll}
  */
  readonly conditionedRoll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#conditioned_roll_params OceanAws#conditioned_roll_params}
  */
  readonly conditionedRollParams?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#should_roll OceanAws#should_roll}
  */
  readonly shouldRoll: boolean | cdktf.IResolvable;
  /**
  * roll_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#roll_config OceanAws#roll_config}
  */
  readonly rollConfig?: OceanAwsUpdatePolicyRollConfig;
}

export function oceanAwsUpdatePolicyToTerraform(struct?: OceanAwsUpdatePolicyOutputReference | OceanAwsUpdatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_apply_tags: cdktf.booleanToTerraform(struct!.autoApplyTags),
    conditioned_roll: cdktf.booleanToTerraform(struct!.conditionedRoll),
    conditioned_roll_params: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.conditionedRollParams),
    should_roll: cdktf.booleanToTerraform(struct!.shouldRoll),
    roll_config: oceanAwsUpdatePolicyRollConfigToTerraform(struct!.rollConfig),
  }
}


export function oceanAwsUpdatePolicyToHclTerraform(struct?: OceanAwsUpdatePolicyOutputReference | OceanAwsUpdatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_apply_tags: {
      value: cdktf.booleanToHclTerraform(struct!.autoApplyTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    conditioned_roll: {
      value: cdktf.booleanToHclTerraform(struct!.conditionedRoll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    conditioned_roll_params: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.conditionedRollParams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    should_roll: {
      value: cdktf.booleanToHclTerraform(struct!.shouldRoll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    roll_config: {
      value: oceanAwsUpdatePolicyRollConfigToHclTerraform(struct!.rollConfig),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAwsUpdatePolicyRollConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAwsUpdatePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsUpdatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoApplyTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoApplyTags = this._autoApplyTags;
    }
    if (this._conditionedRoll !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionedRoll = this._conditionedRoll;
    }
    if (this._conditionedRollParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionedRollParams = this._conditionedRollParams;
    }
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

  public set internalValue(value: OceanAwsUpdatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoApplyTags = undefined;
      this._conditionedRoll = undefined;
      this._conditionedRollParams = undefined;
      this._shouldRoll = undefined;
      this._rollConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoApplyTags = value.autoApplyTags;
      this._conditionedRoll = value.conditionedRoll;
      this._conditionedRollParams = value.conditionedRollParams;
      this._shouldRoll = value.shouldRoll;
      this._rollConfig.internalValue = value.rollConfig;
    }
  }

  // auto_apply_tags - computed: false, optional: true, required: false
  private _autoApplyTags?: boolean | cdktf.IResolvable; 
  public get autoApplyTags() {
    return this.getBooleanAttribute('auto_apply_tags');
  }
  public set autoApplyTags(value: boolean | cdktf.IResolvable) {
    this._autoApplyTags = value;
  }
  public resetAutoApplyTags() {
    this._autoApplyTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApplyTagsInput() {
    return this._autoApplyTags;
  }

  // conditioned_roll - computed: false, optional: true, required: false
  private _conditionedRoll?: boolean | cdktf.IResolvable; 
  public get conditionedRoll() {
    return this.getBooleanAttribute('conditioned_roll');
  }
  public set conditionedRoll(value: boolean | cdktf.IResolvable) {
    this._conditionedRoll = value;
  }
  public resetConditionedRoll() {
    this._conditionedRoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionedRollInput() {
    return this._conditionedRoll;
  }

  // conditioned_roll_params - computed: false, optional: true, required: false
  private _conditionedRollParams?: string[]; 
  public get conditionedRollParams() {
    return this.getListAttribute('conditioned_roll_params');
  }
  public set conditionedRollParams(value: string[]) {
    this._conditionedRollParams = value;
  }
  public resetConditionedRollParams() {
    this._conditionedRollParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionedRollParamsInput() {
    return this._conditionedRollParams;
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
  private _rollConfig = new OceanAwsUpdatePolicyRollConfigOutputReference(this, "roll_config");
  public get rollConfig() {
    return this._rollConfig;
  }
  public putRollConfig(value: OceanAwsUpdatePolicyRollConfig) {
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
* Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws spotinst_ocean_aws}
*/
export class OceanAws extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_ocean_aws";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OceanAws resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OceanAws to import
  * @param importFromId The id of the existing OceanAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OceanAws to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spotinst_ocean_aws", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aws spotinst_ocean_aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OceanAwsConfig
  */
  public constructor(scope: Construct, id: string, config: OceanAwsConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_ocean_aws',
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
    this._associateIpv6Address = config.associateIpv6Address;
    this._associatePublicIpAddress = config.associatePublicIpAddress;
    this._blacklist = config.blacklist;
    this._controllerId = config.controllerId;
    this._desiredCapacity = config.desiredCapacity;
    this._drainingTimeout = config.drainingTimeout;
    this._ebsOptimized = config.ebsOptimized;
    this._fallbackToOndemand = config.fallbackToOndemand;
    this._gracePeriod = config.gracePeriod;
    this._healthCheckUnhealthyDurationBeforeReplacement = config.healthCheckUnhealthyDurationBeforeReplacement;
    this._iamInstanceProfile = config.iamInstanceProfile;
    this._id = config.id;
    this._imageId = config.imageId;
    this._keyName = config.keyName;
    this._maxSize = config.maxSize;
    this._minSize = config.minSize;
    this._monitoring = config.monitoring;
    this._name = config.name;
    this._primaryIpv6 = config.primaryIpv6;
    this._region = config.region;
    this._reservedEnis = config.reservedEnis;
    this._rootVolumeSize = config.rootVolumeSize;
    this._securityGroups = config.securityGroups;
    this._spotPercentage = config.spotPercentage;
    this._spreadNodesBy = config.spreadNodesBy;
    this._subnetIds = config.subnetIds;
    this._useAsTemplateOnly = config.useAsTemplateOnly;
    this._userData = config.userData;
    this._utilizeCommitments = config.utilizeCommitments;
    this._utilizeReservedInstances = config.utilizeReservedInstances;
    this._whitelist = config.whitelist;
    this._attachLoadBalancer.internalValue = config.attachLoadBalancer;
    this._autoscaler.internalValue = config.autoscaler;
    this._blockDeviceMappings.internalValue = config.blockDeviceMappings;
    this._clusterOrientation.internalValue = config.clusterOrientation;
    this._detachLoadBalancer.internalValue = config.detachLoadBalancer;
    this._filters.internalValue = config.filters;
    this._instanceMetadataOptions.internalValue = config.instanceMetadataOptions;
    this._instanceStorePolicy.internalValue = config.instanceStorePolicy;
    this._loadBalancers.internalValue = config.loadBalancers;
    this._logging.internalValue = config.logging;
    this._resourceTagSpecification.internalValue = config.resourceTagSpecification;
    this._scheduledTask.internalValue = config.scheduledTask;
    this._startupTaints.internalValue = config.startupTaints;
    this._tags.internalValue = config.tags;
    this._updatePolicy.internalValue = config.updatePolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associate_ipv6_address - computed: false, optional: true, required: false
  private _associateIpv6Address?: boolean | cdktf.IResolvable; 
  public get associateIpv6Address() {
    return this.getBooleanAttribute('associate_ipv6_address');
  }
  public set associateIpv6Address(value: boolean | cdktf.IResolvable) {
    this._associateIpv6Address = value;
  }
  public resetAssociateIpv6Address() {
    this._associateIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associateIpv6AddressInput() {
    return this._associateIpv6Address;
  }

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

  // blacklist - computed: false, optional: true, required: false
  private _blacklist?: string[]; 
  public get blacklist() {
    return this.getListAttribute('blacklist');
  }
  public set blacklist(value: string[]) {
    this._blacklist = value;
  }
  public resetBlacklist() {
    this._blacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistInput() {
    return this._blacklist;
  }

  // controller_id - computed: false, optional: true, required: false
  private _controllerId?: string; 
  public get controllerId() {
    return this.getStringAttribute('controller_id');
  }
  public set controllerId(value: string) {
    this._controllerId = value;
  }
  public resetControllerId() {
    this._controllerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerIdInput() {
    return this._controllerId;
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

  // ebs_optimized - computed: false, optional: true, required: false
  private _ebsOptimized?: boolean | cdktf.IResolvable; 
  public get ebsOptimized() {
    return this.getBooleanAttribute('ebs_optimized');
  }
  public set ebsOptimized(value: boolean | cdktf.IResolvable) {
    this._ebsOptimized = value;
  }
  public resetEbsOptimized() {
    this._ebsOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsOptimizedInput() {
    return this._ebsOptimized;
  }

  // fallback_to_ondemand - computed: false, optional: true, required: false
  private _fallbackToOndemand?: boolean | cdktf.IResolvable; 
  public get fallbackToOndemand() {
    return this.getBooleanAttribute('fallback_to_ondemand');
  }
  public set fallbackToOndemand(value: boolean | cdktf.IResolvable) {
    this._fallbackToOndemand = value;
  }
  public resetFallbackToOndemand() {
    this._fallbackToOndemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackToOndemandInput() {
    return this._fallbackToOndemand;
  }

  // grace_period - computed: false, optional: true, required: false
  private _gracePeriod?: number; 
  public get gracePeriod() {
    return this.getNumberAttribute('grace_period');
  }
  public set gracePeriod(value: number) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }

  // health_check_unhealthy_duration_before_replacement - computed: false, optional: true, required: false
  private _healthCheckUnhealthyDurationBeforeReplacement?: number; 
  public get healthCheckUnhealthyDurationBeforeReplacement() {
    return this.getNumberAttribute('health_check_unhealthy_duration_before_replacement');
  }
  public set healthCheckUnhealthyDurationBeforeReplacement(value: number) {
    this._healthCheckUnhealthyDurationBeforeReplacement = value;
  }
  public resetHealthCheckUnhealthyDurationBeforeReplacement() {
    this._healthCheckUnhealthyDurationBeforeReplacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckUnhealthyDurationBeforeReplacementInput() {
    return this._healthCheckUnhealthyDurationBeforeReplacement;
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

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
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

  // min_size - computed: true, optional: true, required: false
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

  // monitoring - computed: false, optional: true, required: false
  private _monitoring?: boolean | cdktf.IResolvable; 
  public get monitoring() {
    return this.getBooleanAttribute('monitoring');
  }
  public set monitoring(value: boolean | cdktf.IResolvable) {
    this._monitoring = value;
  }
  public resetMonitoring() {
    this._monitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring;
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

  // primary_ipv6 - computed: false, optional: true, required: false
  private _primaryIpv6?: boolean | cdktf.IResolvable; 
  public get primaryIpv6() {
    return this.getBooleanAttribute('primary_ipv6');
  }
  public set primaryIpv6(value: boolean | cdktf.IResolvable) {
    this._primaryIpv6 = value;
  }
  public resetPrimaryIpv6() {
    this._primaryIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryIpv6Input() {
    return this._primaryIpv6;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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

  // security_groups - computed: false, optional: false, required: true
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
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

  // spread_nodes_by - computed: false, optional: true, required: false
  private _spreadNodesBy?: string; 
  public get spreadNodesBy() {
    return this.getStringAttribute('spread_nodes_by');
  }
  public set spreadNodesBy(value: string) {
    this._spreadNodesBy = value;
  }
  public resetSpreadNodesBy() {
    this._spreadNodesBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spreadNodesByInput() {
    return this._spreadNodesBy;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // use_as_template_only - computed: false, optional: true, required: false
  private _useAsTemplateOnly?: boolean | cdktf.IResolvable; 
  public get useAsTemplateOnly() {
    return this.getBooleanAttribute('use_as_template_only');
  }
  public set useAsTemplateOnly(value: boolean | cdktf.IResolvable) {
    this._useAsTemplateOnly = value;
  }
  public resetUseAsTemplateOnly() {
    this._useAsTemplateOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAsTemplateOnlyInput() {
    return this._useAsTemplateOnly;
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

  // whitelist - computed: false, optional: true, required: false
  private _whitelist?: string[]; 
  public get whitelist() {
    return this.getListAttribute('whitelist');
  }
  public set whitelist(value: string[]) {
    this._whitelist = value;
  }
  public resetWhitelist() {
    this._whitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistInput() {
    return this._whitelist;
  }

  // attach_load_balancer - computed: false, optional: true, required: false
  private _attachLoadBalancer = new OceanAwsAttachLoadBalancerList(this, "attach_load_balancer", false);
  public get attachLoadBalancer() {
    return this._attachLoadBalancer;
  }
  public putAttachLoadBalancer(value: OceanAwsAttachLoadBalancer[] | cdktf.IResolvable) {
    this._attachLoadBalancer.internalValue = value;
  }
  public resetAttachLoadBalancer() {
    this._attachLoadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachLoadBalancerInput() {
    return this._attachLoadBalancer.internalValue;
  }

  // autoscaler - computed: false, optional: true, required: false
  private _autoscaler = new OceanAwsAutoscalerOutputReference(this, "autoscaler");
  public get autoscaler() {
    return this._autoscaler;
  }
  public putAutoscaler(value: OceanAwsAutoscaler) {
    this._autoscaler.internalValue = value;
  }
  public resetAutoscaler() {
    this._autoscaler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalerInput() {
    return this._autoscaler.internalValue;
  }

  // block_device_mappings - computed: false, optional: true, required: false
  private _blockDeviceMappings = new OceanAwsBlockDeviceMappingsList(this, "block_device_mappings", false);
  public get blockDeviceMappings() {
    return this._blockDeviceMappings;
  }
  public putBlockDeviceMappings(value: OceanAwsBlockDeviceMappings[] | cdktf.IResolvable) {
    this._blockDeviceMappings.internalValue = value;
  }
  public resetBlockDeviceMappings() {
    this._blockDeviceMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDeviceMappingsInput() {
    return this._blockDeviceMappings.internalValue;
  }

  // cluster_orientation - computed: false, optional: true, required: false
  private _clusterOrientation = new OceanAwsClusterOrientationList(this, "cluster_orientation", false);
  public get clusterOrientation() {
    return this._clusterOrientation;
  }
  public putClusterOrientation(value: OceanAwsClusterOrientation[] | cdktf.IResolvable) {
    this._clusterOrientation.internalValue = value;
  }
  public resetClusterOrientation() {
    this._clusterOrientation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterOrientationInput() {
    return this._clusterOrientation.internalValue;
  }

  // detach_load_balancer - computed: false, optional: true, required: false
  private _detachLoadBalancer = new OceanAwsDetachLoadBalancerList(this, "detach_load_balancer", false);
  public get detachLoadBalancer() {
    return this._detachLoadBalancer;
  }
  public putDetachLoadBalancer(value: OceanAwsDetachLoadBalancer[] | cdktf.IResolvable) {
    this._detachLoadBalancer.internalValue = value;
  }
  public resetDetachLoadBalancer() {
    this._detachLoadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detachLoadBalancerInput() {
    return this._detachLoadBalancer.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new OceanAwsFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: OceanAwsFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // instance_metadata_options - computed: false, optional: true, required: false
  private _instanceMetadataOptions = new OceanAwsInstanceMetadataOptionsOutputReference(this, "instance_metadata_options");
  public get instanceMetadataOptions() {
    return this._instanceMetadataOptions;
  }
  public putInstanceMetadataOptions(value: OceanAwsInstanceMetadataOptions) {
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
  private _instanceStorePolicy = new OceanAwsInstanceStorePolicyOutputReference(this, "instance_store_policy");
  public get instanceStorePolicy() {
    return this._instanceStorePolicy;
  }
  public putInstanceStorePolicy(value: OceanAwsInstanceStorePolicy) {
    this._instanceStorePolicy.internalValue = value;
  }
  public resetInstanceStorePolicy() {
    this._instanceStorePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceStorePolicyInput() {
    return this._instanceStorePolicy.internalValue;
  }

  // load_balancers - computed: false, optional: true, required: false
  private _loadBalancers = new OceanAwsLoadBalancersList(this, "load_balancers", false);
  public get loadBalancers() {
    return this._loadBalancers;
  }
  public putLoadBalancers(value: OceanAwsLoadBalancers[] | cdktf.IResolvable) {
    this._loadBalancers.internalValue = value;
  }
  public resetLoadBalancers() {
    this._loadBalancers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancersInput() {
    return this._loadBalancers.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new OceanAwsLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: OceanAwsLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // resource_tag_specification - computed: false, optional: true, required: false
  private _resourceTagSpecification = new OceanAwsResourceTagSpecificationList(this, "resource_tag_specification", false);
  public get resourceTagSpecification() {
    return this._resourceTagSpecification;
  }
  public putResourceTagSpecification(value: OceanAwsResourceTagSpecification[] | cdktf.IResolvable) {
    this._resourceTagSpecification.internalValue = value;
  }
  public resetResourceTagSpecification() {
    this._resourceTagSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagSpecificationInput() {
    return this._resourceTagSpecification.internalValue;
  }

  // scheduled_task - computed: false, optional: true, required: false
  private _scheduledTask = new OceanAwsScheduledTaskOutputReference(this, "scheduled_task");
  public get scheduledTask() {
    return this._scheduledTask;
  }
  public putScheduledTask(value: OceanAwsScheduledTask) {
    this._scheduledTask.internalValue = value;
  }
  public resetScheduledTask() {
    this._scheduledTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledTaskInput() {
    return this._scheduledTask.internalValue;
  }

  // startup_taints - computed: false, optional: true, required: false
  private _startupTaints = new OceanAwsStartupTaintsList(this, "startup_taints", true);
  public get startupTaints() {
    return this._startupTaints;
  }
  public putStartupTaints(value: OceanAwsStartupTaints[] | cdktf.IResolvable) {
    this._startupTaints.internalValue = value;
  }
  public resetStartupTaints() {
    this._startupTaints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupTaintsInput() {
    return this._startupTaints.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new OceanAwsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: OceanAwsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // update_policy - computed: false, optional: true, required: false
  private _updatePolicy = new OceanAwsUpdatePolicyOutputReference(this, "update_policy");
  public get updatePolicy() {
    return this._updatePolicy;
  }
  public putUpdatePolicy(value: OceanAwsUpdatePolicy) {
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
      associate_ipv6_address: cdktf.booleanToTerraform(this._associateIpv6Address),
      associate_public_ip_address: cdktf.booleanToTerraform(this._associatePublicIpAddress),
      blacklist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blacklist),
      controller_id: cdktf.stringToTerraform(this._controllerId),
      desired_capacity: cdktf.numberToTerraform(this._desiredCapacity),
      draining_timeout: cdktf.numberToTerraform(this._drainingTimeout),
      ebs_optimized: cdktf.booleanToTerraform(this._ebsOptimized),
      fallback_to_ondemand: cdktf.booleanToTerraform(this._fallbackToOndemand),
      grace_period: cdktf.numberToTerraform(this._gracePeriod),
      health_check_unhealthy_duration_before_replacement: cdktf.numberToTerraform(this._healthCheckUnhealthyDurationBeforeReplacement),
      iam_instance_profile: cdktf.stringToTerraform(this._iamInstanceProfile),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      key_name: cdktf.stringToTerraform(this._keyName),
      max_size: cdktf.numberToTerraform(this._maxSize),
      min_size: cdktf.numberToTerraform(this._minSize),
      monitoring: cdktf.booleanToTerraform(this._monitoring),
      name: cdktf.stringToTerraform(this._name),
      primary_ipv6: cdktf.booleanToTerraform(this._primaryIpv6),
      region: cdktf.stringToTerraform(this._region),
      reserved_enis: cdktf.numberToTerraform(this._reservedEnis),
      root_volume_size: cdktf.numberToTerraform(this._rootVolumeSize),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      spot_percentage: cdktf.numberToTerraform(this._spotPercentage),
      spread_nodes_by: cdktf.stringToTerraform(this._spreadNodesBy),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      use_as_template_only: cdktf.booleanToTerraform(this._useAsTemplateOnly),
      user_data: cdktf.stringToTerraform(this._userData),
      utilize_commitments: cdktf.booleanToTerraform(this._utilizeCommitments),
      utilize_reserved_instances: cdktf.booleanToTerraform(this._utilizeReservedInstances),
      whitelist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._whitelist),
      attach_load_balancer: cdktf.listMapper(oceanAwsAttachLoadBalancerToTerraform, true)(this._attachLoadBalancer.internalValue),
      autoscaler: oceanAwsAutoscalerToTerraform(this._autoscaler.internalValue),
      block_device_mappings: cdktf.listMapper(oceanAwsBlockDeviceMappingsToTerraform, true)(this._blockDeviceMappings.internalValue),
      cluster_orientation: cdktf.listMapper(oceanAwsClusterOrientationToTerraform, true)(this._clusterOrientation.internalValue),
      detach_load_balancer: cdktf.listMapper(oceanAwsDetachLoadBalancerToTerraform, true)(this._detachLoadBalancer.internalValue),
      filters: oceanAwsFiltersToTerraform(this._filters.internalValue),
      instance_metadata_options: oceanAwsInstanceMetadataOptionsToTerraform(this._instanceMetadataOptions.internalValue),
      instance_store_policy: oceanAwsInstanceStorePolicyToTerraform(this._instanceStorePolicy.internalValue),
      load_balancers: cdktf.listMapper(oceanAwsLoadBalancersToTerraform, true)(this._loadBalancers.internalValue),
      logging: oceanAwsLoggingToTerraform(this._logging.internalValue),
      resource_tag_specification: cdktf.listMapper(oceanAwsResourceTagSpecificationToTerraform, true)(this._resourceTagSpecification.internalValue),
      scheduled_task: oceanAwsScheduledTaskToTerraform(this._scheduledTask.internalValue),
      startup_taints: cdktf.listMapper(oceanAwsStartupTaintsToTerraform, true)(this._startupTaints.internalValue),
      tags: cdktf.listMapper(oceanAwsTagsToTerraform, true)(this._tags.internalValue),
      update_policy: oceanAwsUpdatePolicyToTerraform(this._updatePolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      associate_ipv6_address: {
        value: cdktf.booleanToHclTerraform(this._associateIpv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      associate_public_ip_address: {
        value: cdktf.booleanToHclTerraform(this._associatePublicIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      blacklist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blacklist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      controller_id: {
        value: cdktf.stringToHclTerraform(this._controllerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desired_capacity: {
        value: cdktf.numberToHclTerraform(this._desiredCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      draining_timeout: {
        value: cdktf.numberToHclTerraform(this._drainingTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ebs_optimized: {
        value: cdktf.booleanToHclTerraform(this._ebsOptimized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fallback_to_ondemand: {
        value: cdktf.booleanToHclTerraform(this._fallbackToOndemand),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      grace_period: {
        value: cdktf.numberToHclTerraform(this._gracePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_unhealthy_duration_before_replacement: {
        value: cdktf.numberToHclTerraform(this._healthCheckUnhealthyDurationBeforeReplacement),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      key_name: {
        value: cdktf.stringToHclTerraform(this._keyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_size: {
        value: cdktf.numberToHclTerraform(this._maxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_size: {
        value: cdktf.numberToHclTerraform(this._minSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitoring: {
        value: cdktf.booleanToHclTerraform(this._monitoring),
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
      primary_ipv6: {
        value: cdktf.booleanToHclTerraform(this._primaryIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reserved_enis: {
        value: cdktf.numberToHclTerraform(this._reservedEnis),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      spot_percentage: {
        value: cdktf.numberToHclTerraform(this._spotPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spread_nodes_by: {
        value: cdktf.stringToHclTerraform(this._spreadNodesBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnetIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      use_as_template_only: {
        value: cdktf.booleanToHclTerraform(this._useAsTemplateOnly),
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
      utilize_commitments: {
        value: cdktf.booleanToHclTerraform(this._utilizeCommitments),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      utilize_reserved_instances: {
        value: cdktf.booleanToHclTerraform(this._utilizeReservedInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      whitelist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._whitelist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      attach_load_balancer: {
        value: cdktf.listMapperHcl(oceanAwsAttachLoadBalancerToHclTerraform, true)(this._attachLoadBalancer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAwsAttachLoadBalancerList",
      },
      autoscaler: {
        value: oceanAwsAutoscalerToHclTerraform(this._autoscaler.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAwsAutoscalerList",
      },
      block_device_mappings: {
        value: cdktf.listMapperHcl(oceanAwsBlockDeviceMappingsToHclTerraform, true)(this._blockDeviceMappings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAwsBlockDeviceMappingsList",
      },
      cluster_orientation: {
        value: cdktf.listMapperHcl(oceanAwsClusterOrientationToHclTerraform, true)(this._clusterOrientation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAwsClusterOrientationList",
      },
      detach_load_balancer: {
        value: cdktf.listMapperHcl(oceanAwsDetachLoadBalancerToHclTerraform, true)(this._detachLoadBalancer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAwsDetachLoadBalancerList",
      },
      filters: {
        value: oceanAwsFiltersToHclTerraform(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAwsFiltersList",
      },
      instance_metadata_options: {
        value: oceanAwsInstanceMetadataOptionsToHclTerraform(this._instanceMetadataOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAwsInstanceMetadataOptionsList",
      },
      instance_store_policy: {
        value: oceanAwsInstanceStorePolicyToHclTerraform(this._instanceStorePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAwsInstanceStorePolicyList",
      },
      load_balancers: {
        value: cdktf.listMapperHcl(oceanAwsLoadBalancersToHclTerraform, true)(this._loadBalancers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAwsLoadBalancersList",
      },
      logging: {
        value: oceanAwsLoggingToHclTerraform(this._logging.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAwsLoggingList",
      },
      resource_tag_specification: {
        value: cdktf.listMapperHcl(oceanAwsResourceTagSpecificationToHclTerraform, true)(this._resourceTagSpecification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAwsResourceTagSpecificationList",
      },
      scheduled_task: {
        value: oceanAwsScheduledTaskToHclTerraform(this._scheduledTask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAwsScheduledTaskList",
      },
      startup_taints: {
        value: cdktf.listMapperHcl(oceanAwsStartupTaintsToHclTerraform, true)(this._startupTaints.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OceanAwsStartupTaintsList",
      },
      tags: {
        value: cdktf.listMapperHcl(oceanAwsTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OceanAwsTagsList",
      },
      update_policy: {
        value: oceanAwsUpdatePolicyToHclTerraform(this._updatePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAwsUpdatePolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
