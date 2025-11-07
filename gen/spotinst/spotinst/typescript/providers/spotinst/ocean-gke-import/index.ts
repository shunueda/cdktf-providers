// https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceanGkeImportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#blacklist OceanGkeImport#blacklist}
  */
  readonly blacklist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#cluster_name OceanGkeImport#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#controller_cluster_id OceanGkeImport#controller_cluster_id}
  */
  readonly controllerClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#desired_capacity OceanGkeImport#desired_capacity}
  */
  readonly desiredCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#id OceanGkeImport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#location OceanGkeImport#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#max_size OceanGkeImport#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#min_size OceanGkeImport#min_size}
  */
  readonly minSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#root_volume_type OceanGkeImport#root_volume_type}
  */
  readonly rootVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#use_as_template_only OceanGkeImport#use_as_template_only}
  */
  readonly useAsTemplateOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#whitelist OceanGkeImport#whitelist}
  */
  readonly whitelist?: string[];
  /**
  * auto_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#auto_update OceanGkeImport#auto_update}
  */
  readonly autoUpdate?: OceanGkeImportAutoUpdate[] | cdktf.IResolvable;
  /**
  * autoscaler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#autoscaler OceanGkeImport#autoscaler}
  */
  readonly autoscaler?: OceanGkeImportAutoscaler;
  /**
  * backend_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#backend_services OceanGkeImport#backend_services}
  */
  readonly backendServices?: OceanGkeImportBackendServices[] | cdktf.IResolvable;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#filters OceanGkeImport#filters}
  */
  readonly filters?: OceanGkeImportFilters;
  /**
  * scheduled_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#scheduled_task OceanGkeImport#scheduled_task}
  */
  readonly scheduledTask?: OceanGkeImportScheduledTask[] | cdktf.IResolvable;
  /**
  * shielded_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#shielded_instance_config OceanGkeImport#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: OceanGkeImportShieldedInstanceConfig;
  /**
  * strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#strategy OceanGkeImport#strategy}
  */
  readonly strategy?: OceanGkeImportStrategy[] | cdktf.IResolvable;
  /**
  * update_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#update_policy OceanGkeImport#update_policy}
  */
  readonly updatePolicy?: OceanGkeImportUpdatePolicy;
}
export interface OceanGkeImportAutoUpdate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#is_enabled OceanGkeImport#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
}

export function oceanGkeImportAutoUpdateToTerraform(struct?: OceanGkeImportAutoUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
  }
}


export function oceanGkeImportAutoUpdateToHclTerraform(struct?: OceanGkeImportAutoUpdate | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanGkeImportAutoUpdateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanGkeImportAutoUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanGkeImportAutoUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isEnabled = value.isEnabled;
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
}

export class OceanGkeImportAutoUpdateList extends cdktf.ComplexList {
  public internalValue? : OceanGkeImportAutoUpdate[] | cdktf.IResolvable

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
  public get(index: number): OceanGkeImportAutoUpdateOutputReference {
    return new OceanGkeImportAutoUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanGkeImportAutoscalerDown {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#evaluation_periods OceanGkeImport#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#is_aggressive_scale_down_enabled OceanGkeImport#is_aggressive_scale_down_enabled}
  */
  readonly isAggressiveScaleDownEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#max_scale_down_percentage OceanGkeImport#max_scale_down_percentage}
  */
  readonly maxScaleDownPercentage?: number;
}

export function oceanGkeImportAutoscalerDownToTerraform(struct?: OceanGkeImportAutoscalerDownOutputReference | OceanGkeImportAutoscalerDown): any {
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


export function oceanGkeImportAutoscalerDownToHclTerraform(struct?: OceanGkeImportAutoscalerDownOutputReference | OceanGkeImportAutoscalerDown): any {
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

export class OceanGkeImportAutoscalerDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanGkeImportAutoscalerDown | undefined {
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

  public set internalValue(value: OceanGkeImportAutoscalerDown | undefined) {
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
export interface OceanGkeImportAutoscalerHeadroom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#cpu_per_unit OceanGkeImport#cpu_per_unit}
  */
  readonly cpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#gpu_per_unit OceanGkeImport#gpu_per_unit}
  */
  readonly gpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#memory_per_unit OceanGkeImport#memory_per_unit}
  */
  readonly memoryPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#num_of_units OceanGkeImport#num_of_units}
  */
  readonly numOfUnits?: number;
}

export function oceanGkeImportAutoscalerHeadroomToTerraform(struct?: OceanGkeImportAutoscalerHeadroomOutputReference | OceanGkeImportAutoscalerHeadroom): any {
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


export function oceanGkeImportAutoscalerHeadroomToHclTerraform(struct?: OceanGkeImportAutoscalerHeadroomOutputReference | OceanGkeImportAutoscalerHeadroom): any {
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

export class OceanGkeImportAutoscalerHeadroomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanGkeImportAutoscalerHeadroom | undefined {
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

  public set internalValue(value: OceanGkeImportAutoscalerHeadroom | undefined) {
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
export interface OceanGkeImportAutoscalerResourceLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#max_memory_gib OceanGkeImport#max_memory_gib}
  */
  readonly maxMemoryGib?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#max_vcpu OceanGkeImport#max_vcpu}
  */
  readonly maxVcpu?: number;
}

export function oceanGkeImportAutoscalerResourceLimitsToTerraform(struct?: OceanGkeImportAutoscalerResourceLimitsOutputReference | OceanGkeImportAutoscalerResourceLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_memory_gib: cdktf.numberToTerraform(struct!.maxMemoryGib),
    max_vcpu: cdktf.numberToTerraform(struct!.maxVcpu),
  }
}


export function oceanGkeImportAutoscalerResourceLimitsToHclTerraform(struct?: OceanGkeImportAutoscalerResourceLimitsOutputReference | OceanGkeImportAutoscalerResourceLimits): any {
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

export class OceanGkeImportAutoscalerResourceLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanGkeImportAutoscalerResourceLimits | undefined {
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

  public set internalValue(value: OceanGkeImportAutoscalerResourceLimits | undefined) {
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
export interface OceanGkeImportAutoscaler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#auto_headroom_percentage OceanGkeImport#auto_headroom_percentage}
  */
  readonly autoHeadroomPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#cooldown OceanGkeImport#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#enable_automatic_and_manual_headroom OceanGkeImport#enable_automatic_and_manual_headroom}
  */
  readonly enableAutomaticAndManualHeadroom?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#is_auto_config OceanGkeImport#is_auto_config}
  */
  readonly isAutoConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#is_enabled OceanGkeImport#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * down block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#down OceanGkeImport#down}
  */
  readonly down?: OceanGkeImportAutoscalerDown;
  /**
  * headroom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#headroom OceanGkeImport#headroom}
  */
  readonly headroom?: OceanGkeImportAutoscalerHeadroom;
  /**
  * resource_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#resource_limits OceanGkeImport#resource_limits}
  */
  readonly resourceLimits?: OceanGkeImportAutoscalerResourceLimits;
}

export function oceanGkeImportAutoscalerToTerraform(struct?: OceanGkeImportAutoscalerOutputReference | OceanGkeImportAutoscaler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_headroom_percentage: cdktf.numberToTerraform(struct!.autoHeadroomPercentage),
    cooldown: cdktf.numberToTerraform(struct!.cooldown),
    enable_automatic_and_manual_headroom: cdktf.booleanToTerraform(struct!.enableAutomaticAndManualHeadroom),
    is_auto_config: cdktf.booleanToTerraform(struct!.isAutoConfig),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    down: oceanGkeImportAutoscalerDownToTerraform(struct!.down),
    headroom: oceanGkeImportAutoscalerHeadroomToTerraform(struct!.headroom),
    resource_limits: oceanGkeImportAutoscalerResourceLimitsToTerraform(struct!.resourceLimits),
  }
}


export function oceanGkeImportAutoscalerToHclTerraform(struct?: OceanGkeImportAutoscalerOutputReference | OceanGkeImportAutoscaler): any {
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
    cooldown: {
      value: cdktf.numberToHclTerraform(struct!.cooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_automatic_and_manual_headroom: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutomaticAndManualHeadroom),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_auto_config: {
      value: cdktf.booleanToHclTerraform(struct!.isAutoConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    down: {
      value: oceanGkeImportAutoscalerDownToHclTerraform(struct!.down),
      isBlock: true,
      type: "list",
      storageClassType: "OceanGkeImportAutoscalerDownList",
    },
    headroom: {
      value: oceanGkeImportAutoscalerHeadroomToHclTerraform(struct!.headroom),
      isBlock: true,
      type: "list",
      storageClassType: "OceanGkeImportAutoscalerHeadroomList",
    },
    resource_limits: {
      value: oceanGkeImportAutoscalerResourceLimitsToHclTerraform(struct!.resourceLimits),
      isBlock: true,
      type: "list",
      storageClassType: "OceanGkeImportAutoscalerResourceLimitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanGkeImportAutoscalerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanGkeImportAutoscaler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoHeadroomPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoHeadroomPercentage = this._autoHeadroomPercentage;
    }
    if (this._cooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.cooldown = this._cooldown;
    }
    if (this._enableAutomaticAndManualHeadroom !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutomaticAndManualHeadroom = this._enableAutomaticAndManualHeadroom;
    }
    if (this._isAutoConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAutoConfig = this._isAutoConfig;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._down?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.down = this._down?.internalValue;
    }
    if (this._headroom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headroom = this._headroom?.internalValue;
    }
    if (this._resourceLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLimits = this._resourceLimits?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanGkeImportAutoscaler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoHeadroomPercentage = undefined;
      this._cooldown = undefined;
      this._enableAutomaticAndManualHeadroom = undefined;
      this._isAutoConfig = undefined;
      this._isEnabled = undefined;
      this._down.internalValue = undefined;
      this._headroom.internalValue = undefined;
      this._resourceLimits.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoHeadroomPercentage = value.autoHeadroomPercentage;
      this._cooldown = value.cooldown;
      this._enableAutomaticAndManualHeadroom = value.enableAutomaticAndManualHeadroom;
      this._isAutoConfig = value.isAutoConfig;
      this._isEnabled = value.isEnabled;
      this._down.internalValue = value.down;
      this._headroom.internalValue = value.headroom;
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

  // cooldown - computed: false, optional: true, required: false
  private _cooldown?: number; 
  public get cooldown() {
    return this.getNumberAttribute('cooldown');
  }
  public set cooldown(value: number) {
    this._cooldown = value;
  }
  public resetCooldown() {
    this._cooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cooldownInput() {
    return this._cooldown;
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

  // is_auto_config - computed: false, optional: true, required: false
  private _isAutoConfig?: boolean | cdktf.IResolvable; 
  public get isAutoConfig() {
    return this.getBooleanAttribute('is_auto_config');
  }
  public set isAutoConfig(value: boolean | cdktf.IResolvable) {
    this._isAutoConfig = value;
  }
  public resetIsAutoConfig() {
    this._isAutoConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoConfigInput() {
    return this._isAutoConfig;
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

  // down - computed: false, optional: true, required: false
  private _down = new OceanGkeImportAutoscalerDownOutputReference(this, "down");
  public get down() {
    return this._down;
  }
  public putDown(value: OceanGkeImportAutoscalerDown) {
    this._down.internalValue = value;
  }
  public resetDown() {
    this._down.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downInput() {
    return this._down.internalValue;
  }

  // headroom - computed: false, optional: true, required: false
  private _headroom = new OceanGkeImportAutoscalerHeadroomOutputReference(this, "headroom");
  public get headroom() {
    return this._headroom;
  }
  public putHeadroom(value: OceanGkeImportAutoscalerHeadroom) {
    this._headroom.internalValue = value;
  }
  public resetHeadroom() {
    this._headroom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headroomInput() {
    return this._headroom.internalValue;
  }

  // resource_limits - computed: false, optional: true, required: false
  private _resourceLimits = new OceanGkeImportAutoscalerResourceLimitsOutputReference(this, "resource_limits");
  public get resourceLimits() {
    return this._resourceLimits;
  }
  public putResourceLimits(value: OceanGkeImportAutoscalerResourceLimits) {
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
export interface OceanGkeImportBackendServicesNamedPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#name OceanGkeImport#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#ports OceanGkeImport#ports}
  */
  readonly ports: string[];
}

export function oceanGkeImportBackendServicesNamedPortsToTerraform(struct?: OceanGkeImportBackendServicesNamedPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
  }
}


export function oceanGkeImportBackendServicesNamedPortsToHclTerraform(struct?: OceanGkeImportBackendServicesNamedPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanGkeImportBackendServicesNamedPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanGkeImportBackendServicesNamedPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanGkeImportBackendServicesNamedPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ports = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ports = value.ports;
    }
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

  // ports - computed: false, optional: false, required: true
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}

export class OceanGkeImportBackendServicesNamedPortsList extends cdktf.ComplexList {
  public internalValue? : OceanGkeImportBackendServicesNamedPorts[] | cdktf.IResolvable

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
  public get(index: number): OceanGkeImportBackendServicesNamedPortsOutputReference {
    return new OceanGkeImportBackendServicesNamedPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanGkeImportBackendServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#location_type OceanGkeImport#location_type}
  */
  readonly locationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#scheme OceanGkeImport#scheme}
  */
  readonly scheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#service_name OceanGkeImport#service_name}
  */
  readonly serviceName: string;
  /**
  * named_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#named_ports OceanGkeImport#named_ports}
  */
  readonly namedPorts?: OceanGkeImportBackendServicesNamedPorts[] | cdktf.IResolvable;
}

export function oceanGkeImportBackendServicesToTerraform(struct?: OceanGkeImportBackendServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location_type: cdktf.stringToTerraform(struct!.locationType),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    named_ports: cdktf.listMapper(oceanGkeImportBackendServicesNamedPortsToTerraform, true)(struct!.namedPorts),
  }
}


export function oceanGkeImportBackendServicesToHclTerraform(struct?: OceanGkeImportBackendServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location_type: {
      value: cdktf.stringToHclTerraform(struct!.locationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    named_ports: {
      value: cdktf.listMapperHcl(oceanGkeImportBackendServicesNamedPortsToHclTerraform, true)(struct!.namedPorts),
      isBlock: true,
      type: "set",
      storageClassType: "OceanGkeImportBackendServicesNamedPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanGkeImportBackendServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanGkeImportBackendServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationType = this._locationType;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._namedPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namedPorts = this._namedPorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanGkeImportBackendServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locationType = undefined;
      this._scheme = undefined;
      this._serviceName = undefined;
      this._namedPorts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locationType = value.locationType;
      this._scheme = value.scheme;
      this._serviceName = value.serviceName;
      this._namedPorts.internalValue = value.namedPorts;
    }
  }

  // location_type - computed: false, optional: true, required: false
  private _locationType?: string; 
  public get locationType() {
    return this.getStringAttribute('location_type');
  }
  public set locationType(value: string) {
    this._locationType = value;
  }
  public resetLocationType() {
    this._locationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationTypeInput() {
    return this._locationType;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // named_ports - computed: false, optional: true, required: false
  private _namedPorts = new OceanGkeImportBackendServicesNamedPortsList(this, "named_ports", true);
  public get namedPorts() {
    return this._namedPorts;
  }
  public putNamedPorts(value: OceanGkeImportBackendServicesNamedPorts[] | cdktf.IResolvable) {
    this._namedPorts.internalValue = value;
  }
  public resetNamedPorts() {
    this._namedPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedPortsInput() {
    return this._namedPorts.internalValue;
  }
}

export class OceanGkeImportBackendServicesList extends cdktf.ComplexList {
  public internalValue? : OceanGkeImportBackendServices[] | cdktf.IResolvable

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
  public get(index: number): OceanGkeImportBackendServicesOutputReference {
    return new OceanGkeImportBackendServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanGkeImportFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#exclude_families OceanGkeImport#exclude_families}
  */
  readonly excludeFamilies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#include_families OceanGkeImport#include_families}
  */
  readonly includeFamilies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#max_memory_gib OceanGkeImport#max_memory_gib}
  */
  readonly maxMemoryGib?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#max_vcpu OceanGkeImport#max_vcpu}
  */
  readonly maxVcpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#min_memory_gib OceanGkeImport#min_memory_gib}
  */
  readonly minMemoryGib?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#min_vcpu OceanGkeImport#min_vcpu}
  */
  readonly minVcpu?: number;
}

export function oceanGkeImportFiltersToTerraform(struct?: OceanGkeImportFiltersOutputReference | OceanGkeImportFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_families: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeFamilies),
    include_families: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeFamilies),
    max_memory_gib: cdktf.numberToTerraform(struct!.maxMemoryGib),
    max_vcpu: cdktf.numberToTerraform(struct!.maxVcpu),
    min_memory_gib: cdktf.numberToTerraform(struct!.minMemoryGib),
    min_vcpu: cdktf.numberToTerraform(struct!.minVcpu),
  }
}


export function oceanGkeImportFiltersToHclTerraform(struct?: OceanGkeImportFiltersOutputReference | OceanGkeImportFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_families: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeFamilies),
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
    min_memory_gib: {
      value: cdktf.numberToHclTerraform(struct!.minMemoryGib),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanGkeImportFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanGkeImportFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeFamilies !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeFamilies = this._excludeFamilies;
    }
    if (this._includeFamilies !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeFamilies = this._includeFamilies;
    }
    if (this._maxMemoryGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemoryGib = this._maxMemoryGib;
    }
    if (this._maxVcpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVcpu = this._maxVcpu;
    }
    if (this._minMemoryGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemoryGib = this._minMemoryGib;
    }
    if (this._minVcpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVcpu = this._minVcpu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanGkeImportFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeFamilies = undefined;
      this._includeFamilies = undefined;
      this._maxMemoryGib = undefined;
      this._maxVcpu = undefined;
      this._minMemoryGib = undefined;
      this._minVcpu = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeFamilies = value.excludeFamilies;
      this._includeFamilies = value.includeFamilies;
      this._maxMemoryGib = value.maxMemoryGib;
      this._maxVcpu = value.maxVcpu;
      this._minMemoryGib = value.minMemoryGib;
      this._minVcpu = value.minVcpu;
    }
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
}
export interface OceanGkeImportScheduledTaskShutdownHours {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#is_enabled OceanGkeImport#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#time_windows OceanGkeImport#time_windows}
  */
  readonly timeWindows: string[];
}

export function oceanGkeImportScheduledTaskShutdownHoursToTerraform(struct?: OceanGkeImportScheduledTaskShutdownHoursOutputReference | OceanGkeImportScheduledTaskShutdownHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    time_windows: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.timeWindows),
  }
}


export function oceanGkeImportScheduledTaskShutdownHoursToHclTerraform(struct?: OceanGkeImportScheduledTaskShutdownHoursOutputReference | OceanGkeImportScheduledTaskShutdownHours): any {
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

export class OceanGkeImportScheduledTaskShutdownHoursOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanGkeImportScheduledTaskShutdownHours | undefined {
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

  public set internalValue(value: OceanGkeImportScheduledTaskShutdownHours | undefined) {
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
export interface OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#batch_min_healthy_percentage OceanGkeImport#batch_min_healthy_percentage}
  */
  readonly batchMinHealthyPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#batch_size_percentage OceanGkeImport#batch_size_percentage}
  */
  readonly batchSizePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#comment OceanGkeImport#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#respect_pdb OceanGkeImport#respect_pdb}
  */
  readonly respectPdb?: boolean | cdktf.IResolvable;
}

export function oceanGkeImportScheduledTaskTasksTaskParametersClusterRollToTerraform(struct?: OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference | OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll): any {
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


export function oceanGkeImportScheduledTaskTasksTaskParametersClusterRollToHclTerraform(struct?: OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference | OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll): any {
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

export class OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll | undefined {
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

  public set internalValue(value: OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll | undefined) {
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
export interface OceanGkeImportScheduledTaskTasksTaskParameters {
  /**
  * cluster_roll block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#cluster_roll OceanGkeImport#cluster_roll}
  */
  readonly clusterRoll?: OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll;
}

export function oceanGkeImportScheduledTaskTasksTaskParametersToTerraform(struct?: OceanGkeImportScheduledTaskTasksTaskParametersOutputReference | OceanGkeImportScheduledTaskTasksTaskParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_roll: oceanGkeImportScheduledTaskTasksTaskParametersClusterRollToTerraform(struct!.clusterRoll),
  }
}


export function oceanGkeImportScheduledTaskTasksTaskParametersToHclTerraform(struct?: OceanGkeImportScheduledTaskTasksTaskParametersOutputReference | OceanGkeImportScheduledTaskTasksTaskParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_roll: {
      value: oceanGkeImportScheduledTaskTasksTaskParametersClusterRollToHclTerraform(struct!.clusterRoll),
      isBlock: true,
      type: "list",
      storageClassType: "OceanGkeImportScheduledTaskTasksTaskParametersClusterRollList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanGkeImportScheduledTaskTasksTaskParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanGkeImportScheduledTaskTasksTaskParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterRoll?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRoll = this._clusterRoll?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanGkeImportScheduledTaskTasksTaskParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterRoll.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterRoll.internalValue = value.clusterRoll;
    }
  }

  // cluster_roll - computed: false, optional: true, required: false
  private _clusterRoll = new OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference(this, "cluster_roll");
  public get clusterRoll() {
    return this._clusterRoll;
  }
  public putClusterRoll(value: OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll) {
    this._clusterRoll.internalValue = value;
  }
  public resetClusterRoll() {
    this._clusterRoll.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRollInput() {
    return this._clusterRoll.internalValue;
  }
}
export interface OceanGkeImportScheduledTaskTasks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#cron_expression OceanGkeImport#cron_expression}
  */
  readonly cronExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#is_enabled OceanGkeImport#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#task_type OceanGkeImport#task_type}
  */
  readonly taskType: string;
  /**
  * task_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#task_parameters OceanGkeImport#task_parameters}
  */
  readonly taskParameters?: OceanGkeImportScheduledTaskTasksTaskParameters;
}

export function oceanGkeImportScheduledTaskTasksToTerraform(struct?: OceanGkeImportScheduledTaskTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    task_parameters: oceanGkeImportScheduledTaskTasksTaskParametersToTerraform(struct!.taskParameters),
  }
}


export function oceanGkeImportScheduledTaskTasksToHclTerraform(struct?: OceanGkeImportScheduledTaskTasks | cdktf.IResolvable): any {
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
    task_parameters: {
      value: oceanGkeImportScheduledTaskTasksTaskParametersToHclTerraform(struct!.taskParameters),
      isBlock: true,
      type: "list",
      storageClassType: "OceanGkeImportScheduledTaskTasksTaskParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanGkeImportScheduledTaskTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanGkeImportScheduledTaskTasks | cdktf.IResolvable | undefined {
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
    if (this._taskParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskParameters = this._taskParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanGkeImportScheduledTaskTasks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronExpression = undefined;
      this._isEnabled = undefined;
      this._taskType = undefined;
      this._taskParameters.internalValue = undefined;
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
      this._taskParameters.internalValue = value.taskParameters;
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

  // task_parameters - computed: false, optional: true, required: false
  private _taskParameters = new OceanGkeImportScheduledTaskTasksTaskParametersOutputReference(this, "task_parameters");
  public get taskParameters() {
    return this._taskParameters;
  }
  public putTaskParameters(value: OceanGkeImportScheduledTaskTasksTaskParameters) {
    this._taskParameters.internalValue = value;
  }
  public resetTaskParameters() {
    this._taskParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskParametersInput() {
    return this._taskParameters.internalValue;
  }
}

export class OceanGkeImportScheduledTaskTasksList extends cdktf.ComplexList {
  public internalValue? : OceanGkeImportScheduledTaskTasks[] | cdktf.IResolvable

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
  public get(index: number): OceanGkeImportScheduledTaskTasksOutputReference {
    return new OceanGkeImportScheduledTaskTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanGkeImportScheduledTask {
  /**
  * shutdown_hours block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#shutdown_hours OceanGkeImport#shutdown_hours}
  */
  readonly shutdownHours?: OceanGkeImportScheduledTaskShutdownHours;
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#tasks OceanGkeImport#tasks}
  */
  readonly tasks?: OceanGkeImportScheduledTaskTasks[] | cdktf.IResolvable;
}

export function oceanGkeImportScheduledTaskToTerraform(struct?: OceanGkeImportScheduledTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shutdown_hours: oceanGkeImportScheduledTaskShutdownHoursToTerraform(struct!.shutdownHours),
    tasks: cdktf.listMapper(oceanGkeImportScheduledTaskTasksToTerraform, true)(struct!.tasks),
  }
}


export function oceanGkeImportScheduledTaskToHclTerraform(struct?: OceanGkeImportScheduledTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shutdown_hours: {
      value: oceanGkeImportScheduledTaskShutdownHoursToHclTerraform(struct!.shutdownHours),
      isBlock: true,
      type: "list",
      storageClassType: "OceanGkeImportScheduledTaskShutdownHoursList",
    },
    tasks: {
      value: cdktf.listMapperHcl(oceanGkeImportScheduledTaskTasksToHclTerraform, true)(struct!.tasks),
      isBlock: true,
      type: "list",
      storageClassType: "OceanGkeImportScheduledTaskTasksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanGkeImportScheduledTaskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanGkeImportScheduledTask | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: OceanGkeImportScheduledTask | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shutdownHours.internalValue = undefined;
      this._tasks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shutdownHours.internalValue = value.shutdownHours;
      this._tasks.internalValue = value.tasks;
    }
  }

  // shutdown_hours - computed: false, optional: true, required: false
  private _shutdownHours = new OceanGkeImportScheduledTaskShutdownHoursOutputReference(this, "shutdown_hours");
  public get shutdownHours() {
    return this._shutdownHours;
  }
  public putShutdownHours(value: OceanGkeImportScheduledTaskShutdownHours) {
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
  private _tasks = new OceanGkeImportScheduledTaskTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: OceanGkeImportScheduledTaskTasks[] | cdktf.IResolvable) {
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

export class OceanGkeImportScheduledTaskList extends cdktf.ComplexList {
  public internalValue? : OceanGkeImportScheduledTask[] | cdktf.IResolvable

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
  public get(index: number): OceanGkeImportScheduledTaskOutputReference {
    return new OceanGkeImportScheduledTaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanGkeImportShieldedInstanceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#enable_integrity_monitoring OceanGkeImport#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#enable_secure_boot OceanGkeImport#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
}

export function oceanGkeImportShieldedInstanceConfigToTerraform(struct?: OceanGkeImportShieldedInstanceConfigOutputReference | OceanGkeImportShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
  }
}


export function oceanGkeImportShieldedInstanceConfigToHclTerraform(struct?: OceanGkeImportShieldedInstanceConfigOutputReference | OceanGkeImportShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_integrity_monitoring: {
      value: cdktf.booleanToHclTerraform(struct!.enableIntegrityMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_secure_boot: {
      value: cdktf.booleanToHclTerraform(struct!.enableSecureBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanGkeImportShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanGkeImportShieldedInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIntegrityMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIntegrityMonitoring = this._enableIntegrityMonitoring;
    }
    if (this._enableSecureBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecureBoot = this._enableSecureBoot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanGkeImportShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIntegrityMonitoring = undefined;
      this._enableSecureBoot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIntegrityMonitoring = value.enableIntegrityMonitoring;
      this._enableSecureBoot = value.enableSecureBoot;
    }
  }

  // enable_integrity_monitoring - computed: true, optional: true, required: false
  private _enableIntegrityMonitoring?: boolean | cdktf.IResolvable; 
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring');
  }
  public set enableIntegrityMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableIntegrityMonitoring = value;
  }
  public resetEnableIntegrityMonitoring() {
    this._enableIntegrityMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntegrityMonitoringInput() {
    return this._enableIntegrityMonitoring;
  }

  // enable_secure_boot - computed: true, optional: true, required: false
  private _enableSecureBoot?: boolean | cdktf.IResolvable; 
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }
  public set enableSecureBoot(value: boolean | cdktf.IResolvable) {
    this._enableSecureBoot = value;
  }
  public resetEnableSecureBoot() {
    this._enableSecureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecureBootInput() {
    return this._enableSecureBoot;
  }
}
export interface OceanGkeImportStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#draining_timeout OceanGkeImport#draining_timeout}
  */
  readonly drainingTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#preemptible_percentage OceanGkeImport#preemptible_percentage}
  */
  readonly preemptiblePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#provisioning_model OceanGkeImport#provisioning_model}
  */
  readonly provisioningModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#scaling_orientation OceanGkeImport#scaling_orientation}
  */
  readonly scalingOrientation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#should_utilize_commitments OceanGkeImport#should_utilize_commitments}
  */
  readonly shouldUtilizeCommitments?: boolean | cdktf.IResolvable;
}

export function oceanGkeImportStrategyToTerraform(struct?: OceanGkeImportStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    draining_timeout: cdktf.numberToTerraform(struct!.drainingTimeout),
    preemptible_percentage: cdktf.numberToTerraform(struct!.preemptiblePercentage),
    provisioning_model: cdktf.stringToTerraform(struct!.provisioningModel),
    scaling_orientation: cdktf.stringToTerraform(struct!.scalingOrientation),
    should_utilize_commitments: cdktf.booleanToTerraform(struct!.shouldUtilizeCommitments),
  }
}


export function oceanGkeImportStrategyToHclTerraform(struct?: OceanGkeImportStrategy | cdktf.IResolvable): any {
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
    preemptible_percentage: {
      value: cdktf.numberToHclTerraform(struct!.preemptiblePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    provisioning_model: {
      value: cdktf.stringToHclTerraform(struct!.provisioningModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scaling_orientation: {
      value: cdktf.stringToHclTerraform(struct!.scalingOrientation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_utilize_commitments: {
      value: cdktf.booleanToHclTerraform(struct!.shouldUtilizeCommitments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanGkeImportStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanGkeImportStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drainingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainingTimeout = this._drainingTimeout;
    }
    if (this._preemptiblePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptiblePercentage = this._preemptiblePercentage;
    }
    if (this._provisioningModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioningModel = this._provisioningModel;
    }
    if (this._scalingOrientation !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingOrientation = this._scalingOrientation;
    }
    if (this._shouldUtilizeCommitments !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldUtilizeCommitments = this._shouldUtilizeCommitments;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanGkeImportStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._drainingTimeout = undefined;
      this._preemptiblePercentage = undefined;
      this._provisioningModel = undefined;
      this._scalingOrientation = undefined;
      this._shouldUtilizeCommitments = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._drainingTimeout = value.drainingTimeout;
      this._preemptiblePercentage = value.preemptiblePercentage;
      this._provisioningModel = value.provisioningModel;
      this._scalingOrientation = value.scalingOrientation;
      this._shouldUtilizeCommitments = value.shouldUtilizeCommitments;
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

  // preemptible_percentage - computed: false, optional: true, required: false
  private _preemptiblePercentage?: number; 
  public get preemptiblePercentage() {
    return this.getNumberAttribute('preemptible_percentage');
  }
  public set preemptiblePercentage(value: number) {
    this._preemptiblePercentage = value;
  }
  public resetPreemptiblePercentage() {
    this._preemptiblePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptiblePercentageInput() {
    return this._preemptiblePercentage;
  }

  // provisioning_model - computed: false, optional: true, required: false
  private _provisioningModel?: string; 
  public get provisioningModel() {
    return this.getStringAttribute('provisioning_model');
  }
  public set provisioningModel(value: string) {
    this._provisioningModel = value;
  }
  public resetProvisioningModel() {
    this._provisioningModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningModelInput() {
    return this._provisioningModel;
  }

  // scaling_orientation - computed: false, optional: true, required: false
  private _scalingOrientation?: string; 
  public get scalingOrientation() {
    return this.getStringAttribute('scaling_orientation');
  }
  public set scalingOrientation(value: string) {
    this._scalingOrientation = value;
  }
  public resetScalingOrientation() {
    this._scalingOrientation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingOrientationInput() {
    return this._scalingOrientation;
  }

  // should_utilize_commitments - computed: false, optional: true, required: false
  private _shouldUtilizeCommitments?: boolean | cdktf.IResolvable; 
  public get shouldUtilizeCommitments() {
    return this.getBooleanAttribute('should_utilize_commitments');
  }
  public set shouldUtilizeCommitments(value: boolean | cdktf.IResolvable) {
    this._shouldUtilizeCommitments = value;
  }
  public resetShouldUtilizeCommitments() {
    this._shouldUtilizeCommitments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldUtilizeCommitmentsInput() {
    return this._shouldUtilizeCommitments;
  }
}

export class OceanGkeImportStrategyList extends cdktf.ComplexList {
  public internalValue? : OceanGkeImportStrategy[] | cdktf.IResolvable

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
  public get(index: number): OceanGkeImportStrategyOutputReference {
    return new OceanGkeImportStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanGkeImportUpdatePolicyRollConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#batch_min_healthy_percentage OceanGkeImport#batch_min_healthy_percentage}
  */
  readonly batchMinHealthyPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#batch_size_percentage OceanGkeImport#batch_size_percentage}
  */
  readonly batchSizePercentage: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#launch_spec_ids OceanGkeImport#launch_spec_ids}
  */
  readonly launchSpecIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#respect_pdb OceanGkeImport#respect_pdb}
  */
  readonly respectPdb?: boolean | cdktf.IResolvable;
}

export function oceanGkeImportUpdatePolicyRollConfigToTerraform(struct?: OceanGkeImportUpdatePolicyRollConfigOutputReference | OceanGkeImportUpdatePolicyRollConfig): any {
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


export function oceanGkeImportUpdatePolicyRollConfigToHclTerraform(struct?: OceanGkeImportUpdatePolicyRollConfigOutputReference | OceanGkeImportUpdatePolicyRollConfig): any {
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

export class OceanGkeImportUpdatePolicyRollConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanGkeImportUpdatePolicyRollConfig | undefined {
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

  public set internalValue(value: OceanGkeImportUpdatePolicyRollConfig | undefined) {
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
export interface OceanGkeImportUpdatePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#conditioned_roll OceanGkeImport#conditioned_roll}
  */
  readonly conditionedRoll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#should_roll OceanGkeImport#should_roll}
  */
  readonly shouldRoll: boolean | cdktf.IResolvable;
  /**
  * roll_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#roll_config OceanGkeImport#roll_config}
  */
  readonly rollConfig?: OceanGkeImportUpdatePolicyRollConfig;
}

export function oceanGkeImportUpdatePolicyToTerraform(struct?: OceanGkeImportUpdatePolicyOutputReference | OceanGkeImportUpdatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditioned_roll: cdktf.booleanToTerraform(struct!.conditionedRoll),
    should_roll: cdktf.booleanToTerraform(struct!.shouldRoll),
    roll_config: oceanGkeImportUpdatePolicyRollConfigToTerraform(struct!.rollConfig),
  }
}


export function oceanGkeImportUpdatePolicyToHclTerraform(struct?: OceanGkeImportUpdatePolicyOutputReference | OceanGkeImportUpdatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditioned_roll: {
      value: cdktf.booleanToHclTerraform(struct!.conditionedRoll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_roll: {
      value: cdktf.booleanToHclTerraform(struct!.shouldRoll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    roll_config: {
      value: oceanGkeImportUpdatePolicyRollConfigToHclTerraform(struct!.rollConfig),
      isBlock: true,
      type: "list",
      storageClassType: "OceanGkeImportUpdatePolicyRollConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanGkeImportUpdatePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanGkeImportUpdatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionedRoll !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionedRoll = this._conditionedRoll;
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

  public set internalValue(value: OceanGkeImportUpdatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conditionedRoll = undefined;
      this._shouldRoll = undefined;
      this._rollConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conditionedRoll = value.conditionedRoll;
      this._shouldRoll = value.shouldRoll;
      this._rollConfig.internalValue = value.rollConfig;
    }
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
  private _rollConfig = new OceanGkeImportUpdatePolicyRollConfigOutputReference(this, "roll_config");
  public get rollConfig() {
    return this._rollConfig;
  }
  public putRollConfig(value: OceanGkeImportUpdatePolicyRollConfig) {
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
* Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import spotinst_ocean_gke_import}
*/
export class OceanGkeImport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_ocean_gke_import";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OceanGkeImport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OceanGkeImport to import
  * @param importFromId The id of the existing OceanGkeImport that should be imported. Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OceanGkeImport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spotinst_ocean_gke_import", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_gke_import spotinst_ocean_gke_import} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OceanGkeImportConfig
  */
  public constructor(scope: Construct, id: string, config: OceanGkeImportConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_ocean_gke_import',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.230.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blacklist = config.blacklist;
    this._clusterName = config.clusterName;
    this._controllerClusterId = config.controllerClusterId;
    this._desiredCapacity = config.desiredCapacity;
    this._id = config.id;
    this._location = config.location;
    this._maxSize = config.maxSize;
    this._minSize = config.minSize;
    this._rootVolumeType = config.rootVolumeType;
    this._useAsTemplateOnly = config.useAsTemplateOnly;
    this._whitelist = config.whitelist;
    this._autoUpdate.internalValue = config.autoUpdate;
    this._autoscaler.internalValue = config.autoscaler;
    this._backendServices.internalValue = config.backendServices;
    this._filters.internalValue = config.filters;
    this._scheduledTask.internalValue = config.scheduledTask;
    this._shieldedInstanceConfig.internalValue = config.shieldedInstanceConfig;
    this._strategy.internalValue = config.strategy;
    this._updatePolicy.internalValue = config.updatePolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // cluster_controller_id - computed: true, optional: false, required: false
  public get clusterControllerId() {
    return this.getStringAttribute('cluster_controller_id');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // controller_cluster_id - computed: true, optional: true, required: false
  private _controllerClusterId?: string; 
  public get controllerClusterId() {
    return this.getStringAttribute('controller_cluster_id');
  }
  public set controllerClusterId(value: string) {
    this._controllerClusterId = value;
  }
  public resetControllerClusterId() {
    this._controllerClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerClusterIdInput() {
    return this._controllerClusterId;
  }

  // desired_capacity - computed: false, optional: true, required: false
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // root_volume_type - computed: false, optional: true, required: false
  private _rootVolumeType?: string; 
  public get rootVolumeType() {
    return this.getStringAttribute('root_volume_type');
  }
  public set rootVolumeType(value: string) {
    this._rootVolumeType = value;
  }
  public resetRootVolumeType() {
    this._rootVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeTypeInput() {
    return this._rootVolumeType;
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

  // auto_update - computed: false, optional: true, required: false
  private _autoUpdate = new OceanGkeImportAutoUpdateList(this, "auto_update", false);
  public get autoUpdate() {
    return this._autoUpdate;
  }
  public putAutoUpdate(value: OceanGkeImportAutoUpdate[] | cdktf.IResolvable) {
    this._autoUpdate.internalValue = value;
  }
  public resetAutoUpdate() {
    this._autoUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpdateInput() {
    return this._autoUpdate.internalValue;
  }

  // autoscaler - computed: false, optional: true, required: false
  private _autoscaler = new OceanGkeImportAutoscalerOutputReference(this, "autoscaler");
  public get autoscaler() {
    return this._autoscaler;
  }
  public putAutoscaler(value: OceanGkeImportAutoscaler) {
    this._autoscaler.internalValue = value;
  }
  public resetAutoscaler() {
    this._autoscaler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalerInput() {
    return this._autoscaler.internalValue;
  }

  // backend_services - computed: false, optional: true, required: false
  private _backendServices = new OceanGkeImportBackendServicesList(this, "backend_services", true);
  public get backendServices() {
    return this._backendServices;
  }
  public putBackendServices(value: OceanGkeImportBackendServices[] | cdktf.IResolvable) {
    this._backendServices.internalValue = value;
  }
  public resetBackendServices() {
    this._backendServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServicesInput() {
    return this._backendServices.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new OceanGkeImportFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: OceanGkeImportFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // scheduled_task - computed: false, optional: true, required: false
  private _scheduledTask = new OceanGkeImportScheduledTaskList(this, "scheduled_task", false);
  public get scheduledTask() {
    return this._scheduledTask;
  }
  public putScheduledTask(value: OceanGkeImportScheduledTask[] | cdktf.IResolvable) {
    this._scheduledTask.internalValue = value;
  }
  public resetScheduledTask() {
    this._scheduledTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledTaskInput() {
    return this._scheduledTask.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new OceanGkeImportShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: OceanGkeImportShieldedInstanceConfig) {
    this._shieldedInstanceConfig.internalValue = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig.internalValue;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy = new OceanGkeImportStrategyList(this, "strategy", false);
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: OceanGkeImportStrategy[] | cdktf.IResolvable) {
    this._strategy.internalValue = value;
  }
  public resetStrategy() {
    this._strategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
  }

  // update_policy - computed: false, optional: true, required: false
  private _updatePolicy = new OceanGkeImportUpdatePolicyOutputReference(this, "update_policy");
  public get updatePolicy() {
    return this._updatePolicy;
  }
  public putUpdatePolicy(value: OceanGkeImportUpdatePolicy) {
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
      blacklist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blacklist),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      controller_cluster_id: cdktf.stringToTerraform(this._controllerClusterId),
      desired_capacity: cdktf.numberToTerraform(this._desiredCapacity),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      max_size: cdktf.numberToTerraform(this._maxSize),
      min_size: cdktf.numberToTerraform(this._minSize),
      root_volume_type: cdktf.stringToTerraform(this._rootVolumeType),
      use_as_template_only: cdktf.booleanToTerraform(this._useAsTemplateOnly),
      whitelist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._whitelist),
      auto_update: cdktf.listMapper(oceanGkeImportAutoUpdateToTerraform, true)(this._autoUpdate.internalValue),
      autoscaler: oceanGkeImportAutoscalerToTerraform(this._autoscaler.internalValue),
      backend_services: cdktf.listMapper(oceanGkeImportBackendServicesToTerraform, true)(this._backendServices.internalValue),
      filters: oceanGkeImportFiltersToTerraform(this._filters.internalValue),
      scheduled_task: cdktf.listMapper(oceanGkeImportScheduledTaskToTerraform, true)(this._scheduledTask.internalValue),
      shielded_instance_config: oceanGkeImportShieldedInstanceConfigToTerraform(this._shieldedInstanceConfig.internalValue),
      strategy: cdktf.listMapper(oceanGkeImportStrategyToTerraform, true)(this._strategy.internalValue),
      update_policy: oceanGkeImportUpdatePolicyToTerraform(this._updatePolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blacklist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blacklist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controller_cluster_id: {
        value: cdktf.stringToHclTerraform(this._controllerClusterId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      root_volume_type: {
        value: cdktf.stringToHclTerraform(this._rootVolumeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_as_template_only: {
        value: cdktf.booleanToHclTerraform(this._useAsTemplateOnly),
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
      auto_update: {
        value: cdktf.listMapperHcl(oceanGkeImportAutoUpdateToHclTerraform, true)(this._autoUpdate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanGkeImportAutoUpdateList",
      },
      autoscaler: {
        value: oceanGkeImportAutoscalerToHclTerraform(this._autoscaler.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanGkeImportAutoscalerList",
      },
      backend_services: {
        value: cdktf.listMapperHcl(oceanGkeImportBackendServicesToHclTerraform, true)(this._backendServices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OceanGkeImportBackendServicesList",
      },
      filters: {
        value: oceanGkeImportFiltersToHclTerraform(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanGkeImportFiltersList",
      },
      scheduled_task: {
        value: cdktf.listMapperHcl(oceanGkeImportScheduledTaskToHclTerraform, true)(this._scheduledTask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanGkeImportScheduledTaskList",
      },
      shielded_instance_config: {
        value: oceanGkeImportShieldedInstanceConfigToHclTerraform(this._shieldedInstanceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanGkeImportShieldedInstanceConfigList",
      },
      strategy: {
        value: cdktf.listMapperHcl(oceanGkeImportStrategyToHclTerraform, true)(this._strategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanGkeImportStrategyList",
      },
      update_policy: {
        value: oceanGkeImportUpdatePolicyToHclTerraform(this._updatePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanGkeImportUpdatePolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
