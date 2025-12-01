// https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceanAksNpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#aks_cluster_name OceanAksNp#aks_cluster_name}
  */
  readonly aksClusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#aks_infrastructure_resource_group_name OceanAksNp#aks_infrastructure_resource_group_name}
  */
  readonly aksInfrastructureResourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#aks_region OceanAksNp#aks_region}
  */
  readonly aksRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#aks_resource_group_name OceanAksNp#aks_resource_group_name}
  */
  readonly aksResourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#availability_zones OceanAksNp#availability_zones}
  */
  readonly availabilityZones: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#controller_cluster_id OceanAksNp#controller_cluster_id}
  */
  readonly controllerClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#enable_node_public_ip OceanAksNp#enable_node_public_ip}
  */
  readonly enableNodePublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#fallback_to_ondemand OceanAksNp#fallback_to_ondemand}
  */
  readonly fallbackToOndemand?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#id OceanAksNp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#kubernetes_version OceanAksNp#kubernetes_version}
  */
  readonly kubernetesVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#labels OceanAksNp#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#max_count OceanAksNp#max_count}
  */
  readonly maxCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#max_pods_per_node OceanAksNp#max_pods_per_node}
  */
  readonly maxPodsPerNode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#min_count OceanAksNp#min_count}
  */
  readonly minCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#name OceanAksNp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#os_disk_size_gb OceanAksNp#os_disk_size_gb}
  */
  readonly osDiskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#os_disk_type OceanAksNp#os_disk_type}
  */
  readonly osDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#os_sku OceanAksNp#os_sku}
  */
  readonly osSku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#os_type OceanAksNp#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#pod_subnet_ids OceanAksNp#pod_subnet_ids}
  */
  readonly podSubnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#spot_percentage OceanAksNp#spot_percentage}
  */
  readonly spotPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#tags OceanAksNp#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#vnet_subnet_ids OceanAksNp#vnet_subnet_ids}
  */
  readonly vnetSubnetIds?: string[];
  /**
  * autoscaler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#autoscaler OceanAksNp#autoscaler}
  */
  readonly autoscaler?: OceanAksNpAutoscaler;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#filters OceanAksNp#filters}
  */
  readonly filters?: OceanAksNpFilters;
  /**
  * headrooms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#headrooms OceanAksNp#headrooms}
  */
  readonly headrooms?: OceanAksNpHeadrooms[] | cdktf.IResolvable;
  /**
  * health block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#health OceanAksNp#health}
  */
  readonly health?: OceanAksNpHealth;
  /**
  * linux_os_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#linux_os_config OceanAksNp#linux_os_config}
  */
  readonly linuxOsConfig?: OceanAksNpLinuxOsConfig[] | cdktf.IResolvable;
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#logging OceanAksNp#logging}
  */
  readonly logging?: OceanAksNpLogging;
  /**
  * scheduling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#scheduling OceanAksNp#scheduling}
  */
  readonly scheduling?: OceanAksNpScheduling;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#taints OceanAksNp#taints}
  */
  readonly taints?: OceanAksNpTaints[] | cdktf.IResolvable;
  /**
  * update_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#update_policy OceanAksNp#update_policy}
  */
  readonly updatePolicy?: OceanAksNpUpdatePolicy;
  /**
  * vng_template_scheduling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#vng_template_scheduling OceanAksNp#vng_template_scheduling}
  */
  readonly vngTemplateScheduling?: OceanAksNpVngTemplateScheduling;
}
export interface OceanAksNpAutoscalerAutoscaleDown {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#max_scale_down_percentage OceanAksNp#max_scale_down_percentage}
  */
  readonly maxScaleDownPercentage?: number;
}

export function oceanAksNpAutoscalerAutoscaleDownToTerraform(struct?: OceanAksNpAutoscalerAutoscaleDownOutputReference | OceanAksNpAutoscalerAutoscaleDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_scale_down_percentage: cdktf.numberToTerraform(struct!.maxScaleDownPercentage),
  }
}


export function oceanAksNpAutoscalerAutoscaleDownToHclTerraform(struct?: OceanAksNpAutoscalerAutoscaleDownOutputReference | OceanAksNpAutoscalerAutoscaleDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class OceanAksNpAutoscalerAutoscaleDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksNpAutoscalerAutoscaleDown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxScaleDownPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxScaleDownPercentage = this._maxScaleDownPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksNpAutoscalerAutoscaleDown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxScaleDownPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxScaleDownPercentage = value.maxScaleDownPercentage;
    }
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
export interface OceanAksNpAutoscalerAutoscaleHeadroomAutomatic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#is_enabled OceanAksNp#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#percentage OceanAksNp#percentage}
  */
  readonly percentage?: number;
}

export function oceanAksNpAutoscalerAutoscaleHeadroomAutomaticToTerraform(struct?: OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference | OceanAksNpAutoscalerAutoscaleHeadroomAutomatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}


export function oceanAksNpAutoscalerAutoscaleHeadroomAutomaticToHclTerraform(struct?: OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference | OceanAksNpAutoscalerAutoscaleHeadroomAutomatic): any {
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
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksNpAutoscalerAutoscaleHeadroomAutomatic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksNpAutoscalerAutoscaleHeadroomAutomatic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._percentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._percentage = value.percentage;
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

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface OceanAksNpAutoscalerAutoscaleHeadroom {
  /**
  * automatic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#automatic OceanAksNp#automatic}
  */
  readonly automatic?: OceanAksNpAutoscalerAutoscaleHeadroomAutomatic;
}

export function oceanAksNpAutoscalerAutoscaleHeadroomToTerraform(struct?: OceanAksNpAutoscalerAutoscaleHeadroomOutputReference | OceanAksNpAutoscalerAutoscaleHeadroom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic: oceanAksNpAutoscalerAutoscaleHeadroomAutomaticToTerraform(struct!.automatic),
  }
}


export function oceanAksNpAutoscalerAutoscaleHeadroomToHclTerraform(struct?: OceanAksNpAutoscalerAutoscaleHeadroomOutputReference | OceanAksNpAutoscalerAutoscaleHeadroom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic: {
      value: oceanAksNpAutoscalerAutoscaleHeadroomAutomaticToHclTerraform(struct!.automatic),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAksNpAutoscalerAutoscaleHeadroomAutomaticList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAksNpAutoscalerAutoscaleHeadroomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksNpAutoscalerAutoscaleHeadroom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automatic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automatic = this._automatic?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksNpAutoscalerAutoscaleHeadroom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automatic.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automatic.internalValue = value.automatic;
    }
  }

  // automatic - computed: false, optional: true, required: false
  private _automatic = new OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference(this, "automatic");
  public get automatic() {
    return this._automatic;
  }
  public putAutomatic(value: OceanAksNpAutoscalerAutoscaleHeadroomAutomatic) {
    this._automatic.internalValue = value;
  }
  public resetAutomatic() {
    this._automatic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticInput() {
    return this._automatic.internalValue;
  }
}
export interface OceanAksNpAutoscalerResourceLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#max_memory_gib OceanAksNp#max_memory_gib}
  */
  readonly maxMemoryGib?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#max_vcpu OceanAksNp#max_vcpu}
  */
  readonly maxVcpu?: number;
}

export function oceanAksNpAutoscalerResourceLimitsToTerraform(struct?: OceanAksNpAutoscalerResourceLimitsOutputReference | OceanAksNpAutoscalerResourceLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_memory_gib: cdktf.numberToTerraform(struct!.maxMemoryGib),
    max_vcpu: cdktf.numberToTerraform(struct!.maxVcpu),
  }
}


export function oceanAksNpAutoscalerResourceLimitsToHclTerraform(struct?: OceanAksNpAutoscalerResourceLimitsOutputReference | OceanAksNpAutoscalerResourceLimits): any {
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

export class OceanAksNpAutoscalerResourceLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksNpAutoscalerResourceLimits | undefined {
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

  public set internalValue(value: OceanAksNpAutoscalerResourceLimits | undefined) {
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
export interface OceanAksNpAutoscaler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#autoscale_is_enabled OceanAksNp#autoscale_is_enabled}
  */
  readonly autoscaleIsEnabled?: boolean | cdktf.IResolvable;
  /**
  * autoscale_down block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#autoscale_down OceanAksNp#autoscale_down}
  */
  readonly autoscaleDown?: OceanAksNpAutoscalerAutoscaleDown;
  /**
  * autoscale_headroom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#autoscale_headroom OceanAksNp#autoscale_headroom}
  */
  readonly autoscaleHeadroom?: OceanAksNpAutoscalerAutoscaleHeadroom;
  /**
  * resource_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#resource_limits OceanAksNp#resource_limits}
  */
  readonly resourceLimits?: OceanAksNpAutoscalerResourceLimits;
}

export function oceanAksNpAutoscalerToTerraform(struct?: OceanAksNpAutoscalerOutputReference | OceanAksNpAutoscaler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscale_is_enabled: cdktf.booleanToTerraform(struct!.autoscaleIsEnabled),
    autoscale_down: oceanAksNpAutoscalerAutoscaleDownToTerraform(struct!.autoscaleDown),
    autoscale_headroom: oceanAksNpAutoscalerAutoscaleHeadroomToTerraform(struct!.autoscaleHeadroom),
    resource_limits: oceanAksNpAutoscalerResourceLimitsToTerraform(struct!.resourceLimits),
  }
}


export function oceanAksNpAutoscalerToHclTerraform(struct?: OceanAksNpAutoscalerOutputReference | OceanAksNpAutoscaler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscale_is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.autoscaleIsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    autoscale_down: {
      value: oceanAksNpAutoscalerAutoscaleDownToHclTerraform(struct!.autoscaleDown),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAksNpAutoscalerAutoscaleDownList",
    },
    autoscale_headroom: {
      value: oceanAksNpAutoscalerAutoscaleHeadroomToHclTerraform(struct!.autoscaleHeadroom),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAksNpAutoscalerAutoscaleHeadroomList",
    },
    resource_limits: {
      value: oceanAksNpAutoscalerResourceLimitsToHclTerraform(struct!.resourceLimits),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAksNpAutoscalerResourceLimitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAksNpAutoscalerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksNpAutoscaler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscaleIsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleIsEnabled = this._autoscaleIsEnabled;
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

  public set internalValue(value: OceanAksNpAutoscaler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoscaleIsEnabled = undefined;
      this._autoscaleDown.internalValue = undefined;
      this._autoscaleHeadroom.internalValue = undefined;
      this._resourceLimits.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoscaleIsEnabled = value.autoscaleIsEnabled;
      this._autoscaleDown.internalValue = value.autoscaleDown;
      this._autoscaleHeadroom.internalValue = value.autoscaleHeadroom;
      this._resourceLimits.internalValue = value.resourceLimits;
    }
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

  // autoscale_down - computed: false, optional: true, required: false
  private _autoscaleDown = new OceanAksNpAutoscalerAutoscaleDownOutputReference(this, "autoscale_down");
  public get autoscaleDown() {
    return this._autoscaleDown;
  }
  public putAutoscaleDown(value: OceanAksNpAutoscalerAutoscaleDown) {
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
  private _autoscaleHeadroom = new OceanAksNpAutoscalerAutoscaleHeadroomOutputReference(this, "autoscale_headroom");
  public get autoscaleHeadroom() {
    return this._autoscaleHeadroom;
  }
  public putAutoscaleHeadroom(value: OceanAksNpAutoscalerAutoscaleHeadroom) {
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
  private _resourceLimits = new OceanAksNpAutoscalerResourceLimitsOutputReference(this, "resource_limits");
  public get resourceLimits() {
    return this._resourceLimits;
  }
  public putResourceLimits(value: OceanAksNpAutoscalerResourceLimits) {
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
export interface OceanAksNpFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#accelerated_networking OceanAksNp#accelerated_networking}
  */
  readonly acceleratedNetworking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#architectures OceanAksNp#architectures}
  */
  readonly architectures?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#disk_performance OceanAksNp#disk_performance}
  */
  readonly diskPerformance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#exclude_series OceanAksNp#exclude_series}
  */
  readonly excludeSeries?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#gpu_types OceanAksNp#gpu_types}
  */
  readonly gpuTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#max_gpu OceanAksNp#max_gpu}
  */
  readonly maxGpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#max_memory_gib OceanAksNp#max_memory_gib}
  */
  readonly maxMemoryGib?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#max_vcpu OceanAksNp#max_vcpu}
  */
  readonly maxVcpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#min_disk OceanAksNp#min_disk}
  */
  readonly minDisk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#min_gpu OceanAksNp#min_gpu}
  */
  readonly minGpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#min_memory_gib OceanAksNp#min_memory_gib}
  */
  readonly minMemoryGib?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#min_nics OceanAksNp#min_nics}
  */
  readonly minNics?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#min_vcpu OceanAksNp#min_vcpu}
  */
  readonly minVcpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#series OceanAksNp#series}
  */
  readonly series?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#vm_types OceanAksNp#vm_types}
  */
  readonly vmTypes?: string[];
}

export function oceanAksNpFiltersToTerraform(struct?: OceanAksNpFiltersOutputReference | OceanAksNpFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerated_networking: cdktf.stringToTerraform(struct!.acceleratedNetworking),
    architectures: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.architectures),
    disk_performance: cdktf.stringToTerraform(struct!.diskPerformance),
    exclude_series: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeSeries),
    gpu_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gpuTypes),
    max_gpu: cdktf.numberToTerraform(struct!.maxGpu),
    max_memory_gib: cdktf.numberToTerraform(struct!.maxMemoryGib),
    max_vcpu: cdktf.numberToTerraform(struct!.maxVcpu),
    min_disk: cdktf.numberToTerraform(struct!.minDisk),
    min_gpu: cdktf.numberToTerraform(struct!.minGpu),
    min_memory_gib: cdktf.numberToTerraform(struct!.minMemoryGib),
    min_nics: cdktf.numberToTerraform(struct!.minNics),
    min_vcpu: cdktf.numberToTerraform(struct!.minVcpu),
    series: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.series),
    vm_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vmTypes),
  }
}


export function oceanAksNpFiltersToHclTerraform(struct?: OceanAksNpFiltersOutputReference | OceanAksNpFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accelerated_networking: {
      value: cdktf.stringToHclTerraform(struct!.acceleratedNetworking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    architectures: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.architectures),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    disk_performance: {
      value: cdktf.stringToHclTerraform(struct!.diskPerformance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_series: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeSeries),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    gpu_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.gpuTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    max_vcpu: {
      value: cdktf.numberToHclTerraform(struct!.maxVcpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_disk: {
      value: cdktf.numberToHclTerraform(struct!.minDisk),
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
    min_nics: {
      value: cdktf.numberToHclTerraform(struct!.minNics),
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
    series: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.series),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vm_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vmTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAksNpFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksNpFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratedNetworking !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratedNetworking = this._acceleratedNetworking;
    }
    if (this._architectures !== undefined) {
      hasAnyValues = true;
      internalValueResult.architectures = this._architectures;
    }
    if (this._diskPerformance !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskPerformance = this._diskPerformance;
    }
    if (this._excludeSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeSeries = this._excludeSeries;
    }
    if (this._gpuTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuTypes = this._gpuTypes;
    }
    if (this._maxGpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxGpu = this._maxGpu;
    }
    if (this._maxMemoryGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemoryGib = this._maxMemoryGib;
    }
    if (this._maxVcpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVcpu = this._maxVcpu;
    }
    if (this._minDisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDisk = this._minDisk;
    }
    if (this._minGpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.minGpu = this._minGpu;
    }
    if (this._minMemoryGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemoryGib = this._minMemoryGib;
    }
    if (this._minNics !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNics = this._minNics;
    }
    if (this._minVcpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVcpu = this._minVcpu;
    }
    if (this._series !== undefined) {
      hasAnyValues = true;
      internalValueResult.series = this._series;
    }
    if (this._vmTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmTypes = this._vmTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksNpFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceleratedNetworking = undefined;
      this._architectures = undefined;
      this._diskPerformance = undefined;
      this._excludeSeries = undefined;
      this._gpuTypes = undefined;
      this._maxGpu = undefined;
      this._maxMemoryGib = undefined;
      this._maxVcpu = undefined;
      this._minDisk = undefined;
      this._minGpu = undefined;
      this._minMemoryGib = undefined;
      this._minNics = undefined;
      this._minVcpu = undefined;
      this._series = undefined;
      this._vmTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceleratedNetworking = value.acceleratedNetworking;
      this._architectures = value.architectures;
      this._diskPerformance = value.diskPerformance;
      this._excludeSeries = value.excludeSeries;
      this._gpuTypes = value.gpuTypes;
      this._maxGpu = value.maxGpu;
      this._maxMemoryGib = value.maxMemoryGib;
      this._maxVcpu = value.maxVcpu;
      this._minDisk = value.minDisk;
      this._minGpu = value.minGpu;
      this._minMemoryGib = value.minMemoryGib;
      this._minNics = value.minNics;
      this._minVcpu = value.minVcpu;
      this._series = value.series;
      this._vmTypes = value.vmTypes;
    }
  }

  // accelerated_networking - computed: false, optional: true, required: false
  private _acceleratedNetworking?: string; 
  public get acceleratedNetworking() {
    return this.getStringAttribute('accelerated_networking');
  }
  public set acceleratedNetworking(value: string) {
    this._acceleratedNetworking = value;
  }
  public resetAcceleratedNetworking() {
    this._acceleratedNetworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratedNetworkingInput() {
    return this._acceleratedNetworking;
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

  // disk_performance - computed: false, optional: true, required: false
  private _diskPerformance?: string; 
  public get diskPerformance() {
    return this.getStringAttribute('disk_performance');
  }
  public set diskPerformance(value: string) {
    this._diskPerformance = value;
  }
  public resetDiskPerformance() {
    this._diskPerformance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskPerformanceInput() {
    return this._diskPerformance;
  }

  // exclude_series - computed: false, optional: true, required: false
  private _excludeSeries?: string[]; 
  public get excludeSeries() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_series'));
  }
  public set excludeSeries(value: string[]) {
    this._excludeSeries = value;
  }
  public resetExcludeSeries() {
    this._excludeSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeSeriesInput() {
    return this._excludeSeries;
  }

  // gpu_types - computed: false, optional: true, required: false
  private _gpuTypes?: string[]; 
  public get gpuTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('gpu_types'));
  }
  public set gpuTypes(value: string[]) {
    this._gpuTypes = value;
  }
  public resetGpuTypes() {
    this._gpuTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuTypesInput() {
    return this._gpuTypes;
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

  // min_disk - computed: false, optional: true, required: false
  private _minDisk?: number; 
  public get minDisk() {
    return this.getNumberAttribute('min_disk');
  }
  public set minDisk(value: number) {
    this._minDisk = value;
  }
  public resetMinDisk() {
    this._minDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDiskInput() {
    return this._minDisk;
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

  // min_nics - computed: false, optional: true, required: false
  private _minNics?: number; 
  public get minNics() {
    return this.getNumberAttribute('min_nics');
  }
  public set minNics(value: number) {
    this._minNics = value;
  }
  public resetMinNics() {
    this._minNics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNicsInput() {
    return this._minNics;
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

  // series - computed: false, optional: true, required: false
  private _series?: string[]; 
  public get series() {
    return cdktf.Fn.tolist(this.getListAttribute('series'));
  }
  public set series(value: string[]) {
    this._series = value;
  }
  public resetSeries() {
    this._series = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesInput() {
    return this._series;
  }

  // vm_types - computed: false, optional: true, required: false
  private _vmTypes?: string[]; 
  public get vmTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('vm_types'));
  }
  public set vmTypes(value: string[]) {
    this._vmTypes = value;
  }
  public resetVmTypes() {
    this._vmTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmTypesInput() {
    return this._vmTypes;
  }
}
export interface OceanAksNpHeadrooms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#cpu_per_unit OceanAksNp#cpu_per_unit}
  */
  readonly cpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#gpu_per_unit OceanAksNp#gpu_per_unit}
  */
  readonly gpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#memory_per_unit OceanAksNp#memory_per_unit}
  */
  readonly memoryPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#num_of_units OceanAksNp#num_of_units}
  */
  readonly numOfUnits?: number;
}

export function oceanAksNpHeadroomsToTerraform(struct?: OceanAksNpHeadrooms | cdktf.IResolvable): any {
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


export function oceanAksNpHeadroomsToHclTerraform(struct?: OceanAksNpHeadrooms | cdktf.IResolvable): any {
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

export class OceanAksNpHeadroomsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAksNpHeadrooms | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OceanAksNpHeadrooms | cdktf.IResolvable | undefined) {
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

export class OceanAksNpHeadroomsList extends cdktf.ComplexList {
  public internalValue? : OceanAksNpHeadrooms[] | cdktf.IResolvable

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
  public get(index: number): OceanAksNpHeadroomsOutputReference {
    return new OceanAksNpHeadroomsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAksNpHealth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#grace_period OceanAksNp#grace_period}
  */
  readonly gracePeriod?: number;
}

export function oceanAksNpHealthToTerraform(struct?: OceanAksNpHealthOutputReference | OceanAksNpHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grace_period: cdktf.numberToTerraform(struct!.gracePeriod),
  }
}


export function oceanAksNpHealthToHclTerraform(struct?: OceanAksNpHealthOutputReference | OceanAksNpHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grace_period: {
      value: cdktf.numberToHclTerraform(struct!.gracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAksNpHealthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksNpHealth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksNpHealth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gracePeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gracePeriod = value.gracePeriod;
    }
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
}
export interface OceanAksNpLinuxOsConfigSysctls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#vm_max_map_count OceanAksNp#vm_max_map_count}
  */
  readonly vmMaxMapCount?: number;
}

export function oceanAksNpLinuxOsConfigSysctlsToTerraform(struct?: OceanAksNpLinuxOsConfigSysctls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vm_max_map_count: cdktf.numberToTerraform(struct!.vmMaxMapCount),
  }
}


export function oceanAksNpLinuxOsConfigSysctlsToHclTerraform(struct?: OceanAksNpLinuxOsConfigSysctls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vm_max_map_count: {
      value: cdktf.numberToHclTerraform(struct!.vmMaxMapCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAksNpLinuxOsConfigSysctlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAksNpLinuxOsConfigSysctls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vmMaxMapCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmMaxMapCount = this._vmMaxMapCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksNpLinuxOsConfigSysctls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vmMaxMapCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vmMaxMapCount = value.vmMaxMapCount;
    }
  }

  // vm_max_map_count - computed: false, optional: true, required: false
  private _vmMaxMapCount?: number; 
  public get vmMaxMapCount() {
    return this.getNumberAttribute('vm_max_map_count');
  }
  public set vmMaxMapCount(value: number) {
    this._vmMaxMapCount = value;
  }
  public resetVmMaxMapCount() {
    this._vmMaxMapCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmMaxMapCountInput() {
    return this._vmMaxMapCount;
  }
}

export class OceanAksNpLinuxOsConfigSysctlsList extends cdktf.ComplexList {
  public internalValue? : OceanAksNpLinuxOsConfigSysctls[] | cdktf.IResolvable

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
  public get(index: number): OceanAksNpLinuxOsConfigSysctlsOutputReference {
    return new OceanAksNpLinuxOsConfigSysctlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAksNpLinuxOsConfig {
  /**
  * sysctls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#sysctls OceanAksNp#sysctls}
  */
  readonly sysctls?: OceanAksNpLinuxOsConfigSysctls[] | cdktf.IResolvable;
}

export function oceanAksNpLinuxOsConfigToTerraform(struct?: OceanAksNpLinuxOsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sysctls: cdktf.listMapper(oceanAksNpLinuxOsConfigSysctlsToTerraform, true)(struct!.sysctls),
  }
}


export function oceanAksNpLinuxOsConfigToHclTerraform(struct?: OceanAksNpLinuxOsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sysctls: {
      value: cdktf.listMapperHcl(oceanAksNpLinuxOsConfigSysctlsToHclTerraform, true)(struct!.sysctls),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAksNpLinuxOsConfigSysctlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAksNpLinuxOsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAksNpLinuxOsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sysctls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysctls = this._sysctls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksNpLinuxOsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sysctls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sysctls.internalValue = value.sysctls;
    }
  }

  // sysctls - computed: false, optional: true, required: false
  private _sysctls = new OceanAksNpLinuxOsConfigSysctlsList(this, "sysctls", false);
  public get sysctls() {
    return this._sysctls;
  }
  public putSysctls(value: OceanAksNpLinuxOsConfigSysctls[] | cdktf.IResolvable) {
    this._sysctls.internalValue = value;
  }
  public resetSysctls() {
    this._sysctls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlsInput() {
    return this._sysctls.internalValue;
  }
}

export class OceanAksNpLinuxOsConfigList extends cdktf.ComplexList {
  public internalValue? : OceanAksNpLinuxOsConfig[] | cdktf.IResolvable

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
  public get(index: number): OceanAksNpLinuxOsConfigOutputReference {
    return new OceanAksNpLinuxOsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAksNpLoggingExportAzureBlob {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#id OceanAksNp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function oceanAksNpLoggingExportAzureBlobToTerraform(struct?: OceanAksNpLoggingExportAzureBlob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function oceanAksNpLoggingExportAzureBlobToHclTerraform(struct?: OceanAksNpLoggingExportAzureBlob | cdktf.IResolvable): any {
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

export class OceanAksNpLoggingExportAzureBlobOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAksNpLoggingExportAzureBlob | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OceanAksNpLoggingExportAzureBlob | cdktf.IResolvable | undefined) {
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

  // id - computed: false, optional: true, required: false
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
}

export class OceanAksNpLoggingExportAzureBlobList extends cdktf.ComplexList {
  public internalValue? : OceanAksNpLoggingExportAzureBlob[] | cdktf.IResolvable

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
  public get(index: number): OceanAksNpLoggingExportAzureBlobOutputReference {
    return new OceanAksNpLoggingExportAzureBlobOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAksNpLoggingExport {
  /**
  * azure_blob block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#azure_blob OceanAksNp#azure_blob}
  */
  readonly azureBlob?: OceanAksNpLoggingExportAzureBlob[] | cdktf.IResolvable;
}

export function oceanAksNpLoggingExportToTerraform(struct?: OceanAksNpLoggingExportOutputReference | OceanAksNpLoggingExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_blob: cdktf.listMapper(oceanAksNpLoggingExportAzureBlobToTerraform, true)(struct!.azureBlob),
  }
}


export function oceanAksNpLoggingExportToHclTerraform(struct?: OceanAksNpLoggingExportOutputReference | OceanAksNpLoggingExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_blob: {
      value: cdktf.listMapperHcl(oceanAksNpLoggingExportAzureBlobToHclTerraform, true)(struct!.azureBlob),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAksNpLoggingExportAzureBlobList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAksNpLoggingExportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksNpLoggingExport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureBlob?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureBlob = this._azureBlob?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksNpLoggingExport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureBlob.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureBlob.internalValue = value.azureBlob;
    }
  }

  // azure_blob - computed: false, optional: true, required: false
  private _azureBlob = new OceanAksNpLoggingExportAzureBlobList(this, "azure_blob", false);
  public get azureBlob() {
    return this._azureBlob;
  }
  public putAzureBlob(value: OceanAksNpLoggingExportAzureBlob[] | cdktf.IResolvable) {
    this._azureBlob.internalValue = value;
  }
  public resetAzureBlob() {
    this._azureBlob.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobInput() {
    return this._azureBlob.internalValue;
  }
}
export interface OceanAksNpLogging {
  /**
  * export block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#export OceanAksNp#export}
  */
  readonly export?: OceanAksNpLoggingExport;
}

export function oceanAksNpLoggingToTerraform(struct?: OceanAksNpLoggingOutputReference | OceanAksNpLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export: oceanAksNpLoggingExportToTerraform(struct!.export),
  }
}


export function oceanAksNpLoggingToHclTerraform(struct?: OceanAksNpLoggingOutputReference | OceanAksNpLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export: {
      value: oceanAksNpLoggingExportToHclTerraform(struct!.export),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAksNpLoggingExportList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAksNpLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksNpLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._export?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.export = this._export?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksNpLogging | undefined) {
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
  private _export = new OceanAksNpLoggingExportOutputReference(this, "export");
  public get export() {
    return this._export;
  }
  public putExport(value: OceanAksNpLoggingExport) {
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
export interface OceanAksNpSchedulingShutdownHours {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#is_enabled OceanAksNp#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#time_windows OceanAksNp#time_windows}
  */
  readonly timeWindows?: string[];
}

export function oceanAksNpSchedulingShutdownHoursToTerraform(struct?: OceanAksNpSchedulingShutdownHoursOutputReference | OceanAksNpSchedulingShutdownHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    time_windows: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.timeWindows),
  }
}


export function oceanAksNpSchedulingShutdownHoursToHclTerraform(struct?: OceanAksNpSchedulingShutdownHoursOutputReference | OceanAksNpSchedulingShutdownHours): any {
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

export class OceanAksNpSchedulingShutdownHoursOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksNpSchedulingShutdownHours | undefined {
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

  public set internalValue(value: OceanAksNpSchedulingShutdownHours | undefined) {
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

  // time_windows - computed: false, optional: true, required: false
  private _timeWindows?: string[]; 
  public get timeWindows() {
    return this.getListAttribute('time_windows');
  }
  public set timeWindows(value: string[]) {
    this._timeWindows = value;
  }
  public resetTimeWindows() {
    this._timeWindows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowsInput() {
    return this._timeWindows;
  }
}
export interface OceanAksNpSchedulingSuspensionHours {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#is_enabled OceanAksNp#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#time_windows OceanAksNp#time_windows}
  */
  readonly timeWindows?: string[];
}

export function oceanAksNpSchedulingSuspensionHoursToTerraform(struct?: OceanAksNpSchedulingSuspensionHoursOutputReference | OceanAksNpSchedulingSuspensionHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    time_windows: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.timeWindows),
  }
}


export function oceanAksNpSchedulingSuspensionHoursToHclTerraform(struct?: OceanAksNpSchedulingSuspensionHoursOutputReference | OceanAksNpSchedulingSuspensionHours): any {
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

export class OceanAksNpSchedulingSuspensionHoursOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksNpSchedulingSuspensionHours | undefined {
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

  public set internalValue(value: OceanAksNpSchedulingSuspensionHours | undefined) {
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

  // time_windows - computed: false, optional: true, required: false
  private _timeWindows?: string[]; 
  public get timeWindows() {
    return this.getListAttribute('time_windows');
  }
  public set timeWindows(value: string[]) {
    this._timeWindows = value;
  }
  public resetTimeWindows() {
    this._timeWindows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowsInput() {
    return this._timeWindows;
  }
}
export interface OceanAksNpSchedulingTasksParametersParametersClusterRoll {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#batch_min_healthy_percentage OceanAksNp#batch_min_healthy_percentage}
  */
  readonly batchMinHealthyPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#batch_size_percentage OceanAksNp#batch_size_percentage}
  */
  readonly batchSizePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#comment OceanAksNp#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#respect_pdb OceanAksNp#respect_pdb}
  */
  readonly respectPdb?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#respect_restrict_scale_down OceanAksNp#respect_restrict_scale_down}
  */
  readonly respectRestrictScaleDown?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#vng_ids OceanAksNp#vng_ids}
  */
  readonly vngIds?: string[];
}

export function oceanAksNpSchedulingTasksParametersParametersClusterRollToTerraform(struct?: OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference | OceanAksNpSchedulingTasksParametersParametersClusterRoll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_min_healthy_percentage: cdktf.numberToTerraform(struct!.batchMinHealthyPercentage),
    batch_size_percentage: cdktf.numberToTerraform(struct!.batchSizePercentage),
    comment: cdktf.stringToTerraform(struct!.comment),
    respect_pdb: cdktf.booleanToTerraform(struct!.respectPdb),
    respect_restrict_scale_down: cdktf.booleanToTerraform(struct!.respectRestrictScaleDown),
    vng_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vngIds),
  }
}


export function oceanAksNpSchedulingTasksParametersParametersClusterRollToHclTerraform(struct?: OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference | OceanAksNpSchedulingTasksParametersParametersClusterRoll): any {
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
    respect_restrict_scale_down: {
      value: cdktf.booleanToHclTerraform(struct!.respectRestrictScaleDown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vng_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vngIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksNpSchedulingTasksParametersParametersClusterRoll | undefined {
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
    if (this._respectRestrictScaleDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.respectRestrictScaleDown = this._respectRestrictScaleDown;
    }
    if (this._vngIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vngIds = this._vngIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksNpSchedulingTasksParametersParametersClusterRoll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchMinHealthyPercentage = undefined;
      this._batchSizePercentage = undefined;
      this._comment = undefined;
      this._respectPdb = undefined;
      this._respectRestrictScaleDown = undefined;
      this._vngIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchMinHealthyPercentage = value.batchMinHealthyPercentage;
      this._batchSizePercentage = value.batchSizePercentage;
      this._comment = value.comment;
      this._respectPdb = value.respectPdb;
      this._respectRestrictScaleDown = value.respectRestrictScaleDown;
      this._vngIds = value.vngIds;
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

  // respect_restrict_scale_down - computed: false, optional: true, required: false
  private _respectRestrictScaleDown?: boolean | cdktf.IResolvable; 
  public get respectRestrictScaleDown() {
    return this.getBooleanAttribute('respect_restrict_scale_down');
  }
  public set respectRestrictScaleDown(value: boolean | cdktf.IResolvable) {
    this._respectRestrictScaleDown = value;
  }
  public resetRespectRestrictScaleDown() {
    this._respectRestrictScaleDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respectRestrictScaleDownInput() {
    return this._respectRestrictScaleDown;
  }

  // vng_ids - computed: false, optional: true, required: false
  private _vngIds?: string[]; 
  public get vngIds() {
    return this.getListAttribute('vng_ids');
  }
  public set vngIds(value: string[]) {
    this._vngIds = value;
  }
  public resetVngIds() {
    this._vngIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vngIdsInput() {
    return this._vngIds;
  }
}
export interface OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#batch_min_healthy_percentage OceanAksNp#batch_min_healthy_percentage}
  */
  readonly batchMinHealthyPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#batch_size_percentage OceanAksNp#batch_size_percentage}
  */
  readonly batchSizePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#comment OceanAksNp#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#respect_pdb OceanAksNp#respect_pdb}
  */
  readonly respectPdb?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#respect_restrict_scale_down OceanAksNp#respect_restrict_scale_down}
  */
  readonly respectRestrictScaleDown?: boolean | cdktf.IResolvable;
}

export function oceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersToTerraform(struct?: OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference | OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_min_healthy_percentage: cdktf.numberToTerraform(struct!.batchMinHealthyPercentage),
    batch_size_percentage: cdktf.numberToTerraform(struct!.batchSizePercentage),
    comment: cdktf.stringToTerraform(struct!.comment),
    respect_pdb: cdktf.booleanToTerraform(struct!.respectPdb),
    respect_restrict_scale_down: cdktf.booleanToTerraform(struct!.respectRestrictScaleDown),
  }
}


export function oceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersToHclTerraform(struct?: OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference | OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters): any {
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
    respect_restrict_scale_down: {
      value: cdktf.booleanToHclTerraform(struct!.respectRestrictScaleDown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters | undefined {
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
    if (this._respectRestrictScaleDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.respectRestrictScaleDown = this._respectRestrictScaleDown;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchMinHealthyPercentage = undefined;
      this._batchSizePercentage = undefined;
      this._comment = undefined;
      this._respectPdb = undefined;
      this._respectRestrictScaleDown = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchMinHealthyPercentage = value.batchMinHealthyPercentage;
      this._batchSizePercentage = value.batchSizePercentage;
      this._comment = value.comment;
      this._respectPdb = value.respectPdb;
      this._respectRestrictScaleDown = value.respectRestrictScaleDown;
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

  // respect_restrict_scale_down - computed: false, optional: true, required: false
  private _respectRestrictScaleDown?: boolean | cdktf.IResolvable; 
  public get respectRestrictScaleDown() {
    return this.getBooleanAttribute('respect_restrict_scale_down');
  }
  public set respectRestrictScaleDown(value: boolean | cdktf.IResolvable) {
    this._respectRestrictScaleDown = value;
  }
  public resetRespectRestrictScaleDown() {
    this._respectRestrictScaleDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respectRestrictScaleDownInput() {
    return this._respectRestrictScaleDown;
  }
}
export interface OceanAksNpSchedulingTasksParametersParametersUpgradeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#apply_roll OceanAksNp#apply_roll}
  */
  readonly applyRoll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#scope_version OceanAksNp#scope_version}
  */
  readonly scopeVersion?: string;
  /**
  * roll_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#roll_parameters OceanAksNp#roll_parameters}
  */
  readonly rollParameters?: OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters;
}

export function oceanAksNpSchedulingTasksParametersParametersUpgradeConfigToTerraform(struct?: OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference | OceanAksNpSchedulingTasksParametersParametersUpgradeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_roll: cdktf.booleanToTerraform(struct!.applyRoll),
    scope_version: cdktf.stringToTerraform(struct!.scopeVersion),
    roll_parameters: oceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersToTerraform(struct!.rollParameters),
  }
}


export function oceanAksNpSchedulingTasksParametersParametersUpgradeConfigToHclTerraform(struct?: OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference | OceanAksNpSchedulingTasksParametersParametersUpgradeConfig): any {
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
    scope_version: {
      value: cdktf.stringToHclTerraform(struct!.scopeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roll_parameters: {
      value: oceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersToHclTerraform(struct!.rollParameters),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksNpSchedulingTasksParametersParametersUpgradeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyRoll !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyRoll = this._applyRoll;
    }
    if (this._scopeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeVersion = this._scopeVersion;
    }
    if (this._rollParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollParameters = this._rollParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksNpSchedulingTasksParametersParametersUpgradeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applyRoll = undefined;
      this._scopeVersion = undefined;
      this._rollParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applyRoll = value.applyRoll;
      this._scopeVersion = value.scopeVersion;
      this._rollParameters.internalValue = value.rollParameters;
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

  // scope_version - computed: false, optional: true, required: false
  private _scopeVersion?: string; 
  public get scopeVersion() {
    return this.getStringAttribute('scope_version');
  }
  public set scopeVersion(value: string) {
    this._scopeVersion = value;
  }
  public resetScopeVersion() {
    this._scopeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeVersionInput() {
    return this._scopeVersion;
  }

  // roll_parameters - computed: false, optional: true, required: false
  private _rollParameters = new OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference(this, "roll_parameters");
  public get rollParameters() {
    return this._rollParameters;
  }
  public putRollParameters(value: OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters) {
    this._rollParameters.internalValue = value;
  }
  public resetRollParameters() {
    this._rollParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollParametersInput() {
    return this._rollParameters.internalValue;
  }
}
export interface OceanAksNpSchedulingTasksParameters {
  /**
  * parameters_cluster_roll block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#parameters_cluster_roll OceanAksNp#parameters_cluster_roll}
  */
  readonly parametersClusterRoll?: OceanAksNpSchedulingTasksParametersParametersClusterRoll;
  /**
  * parameters_upgrade_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#parameters_upgrade_config OceanAksNp#parameters_upgrade_config}
  */
  readonly parametersUpgradeConfig?: OceanAksNpSchedulingTasksParametersParametersUpgradeConfig;
}

export function oceanAksNpSchedulingTasksParametersToTerraform(struct?: OceanAksNpSchedulingTasksParametersOutputReference | OceanAksNpSchedulingTasksParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters_cluster_roll: oceanAksNpSchedulingTasksParametersParametersClusterRollToTerraform(struct!.parametersClusterRoll),
    parameters_upgrade_config: oceanAksNpSchedulingTasksParametersParametersUpgradeConfigToTerraform(struct!.parametersUpgradeConfig),
  }
}


export function oceanAksNpSchedulingTasksParametersToHclTerraform(struct?: OceanAksNpSchedulingTasksParametersOutputReference | OceanAksNpSchedulingTasksParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters_cluster_roll: {
      value: oceanAksNpSchedulingTasksParametersParametersClusterRollToHclTerraform(struct!.parametersClusterRoll),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAksNpSchedulingTasksParametersParametersClusterRollList",
    },
    parameters_upgrade_config: {
      value: oceanAksNpSchedulingTasksParametersParametersUpgradeConfigToHclTerraform(struct!.parametersUpgradeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAksNpSchedulingTasksParametersParametersUpgradeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAksNpSchedulingTasksParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksNpSchedulingTasksParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parametersClusterRoll?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parametersClusterRoll = this._parametersClusterRoll?.internalValue;
    }
    if (this._parametersUpgradeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parametersUpgradeConfig = this._parametersUpgradeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksNpSchedulingTasksParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parametersClusterRoll.internalValue = undefined;
      this._parametersUpgradeConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parametersClusterRoll.internalValue = value.parametersClusterRoll;
      this._parametersUpgradeConfig.internalValue = value.parametersUpgradeConfig;
    }
  }

  // parameters_cluster_roll - computed: false, optional: true, required: false
  private _parametersClusterRoll = new OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference(this, "parameters_cluster_roll");
  public get parametersClusterRoll() {
    return this._parametersClusterRoll;
  }
  public putParametersClusterRoll(value: OceanAksNpSchedulingTasksParametersParametersClusterRoll) {
    this._parametersClusterRoll.internalValue = value;
  }
  public resetParametersClusterRoll() {
    this._parametersClusterRoll.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersClusterRollInput() {
    return this._parametersClusterRoll.internalValue;
  }

  // parameters_upgrade_config - computed: false, optional: true, required: false
  private _parametersUpgradeConfig = new OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference(this, "parameters_upgrade_config");
  public get parametersUpgradeConfig() {
    return this._parametersUpgradeConfig;
  }
  public putParametersUpgradeConfig(value: OceanAksNpSchedulingTasksParametersParametersUpgradeConfig) {
    this._parametersUpgradeConfig.internalValue = value;
  }
  public resetParametersUpgradeConfig() {
    this._parametersUpgradeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersUpgradeConfigInput() {
    return this._parametersUpgradeConfig.internalValue;
  }
}
export interface OceanAksNpSchedulingTasks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#cron_expression OceanAksNp#cron_expression}
  */
  readonly cronExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#is_enabled OceanAksNp#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#task_type OceanAksNp#task_type}
  */
  readonly taskType: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#parameters OceanAksNp#parameters}
  */
  readonly parameters?: OceanAksNpSchedulingTasksParameters;
}

export function oceanAksNpSchedulingTasksToTerraform(struct?: OceanAksNpSchedulingTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    parameters: oceanAksNpSchedulingTasksParametersToTerraform(struct!.parameters),
  }
}


export function oceanAksNpSchedulingTasksToHclTerraform(struct?: OceanAksNpSchedulingTasks | cdktf.IResolvable): any {
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
      value: oceanAksNpSchedulingTasksParametersToHclTerraform(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAksNpSchedulingTasksParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAksNpSchedulingTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAksNpSchedulingTasks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OceanAksNpSchedulingTasks | cdktf.IResolvable | undefined) {
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
  private _parameters = new OceanAksNpSchedulingTasksParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: OceanAksNpSchedulingTasksParameters) {
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

export class OceanAksNpSchedulingTasksList extends cdktf.ComplexList {
  public internalValue? : OceanAksNpSchedulingTasks[] | cdktf.IResolvable

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
  public get(index: number): OceanAksNpSchedulingTasksOutputReference {
    return new OceanAksNpSchedulingTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAksNpScheduling {
  /**
  * shutdown_hours block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#shutdown_hours OceanAksNp#shutdown_hours}
  */
  readonly shutdownHours?: OceanAksNpSchedulingShutdownHours;
  /**
  * suspension_hours block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#suspension_hours OceanAksNp#suspension_hours}
  */
  readonly suspensionHours?: OceanAksNpSchedulingSuspensionHours;
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#tasks OceanAksNp#tasks}
  */
  readonly tasks?: OceanAksNpSchedulingTasks[] | cdktf.IResolvable;
}

export function oceanAksNpSchedulingToTerraform(struct?: OceanAksNpSchedulingOutputReference | OceanAksNpScheduling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shutdown_hours: oceanAksNpSchedulingShutdownHoursToTerraform(struct!.shutdownHours),
    suspension_hours: oceanAksNpSchedulingSuspensionHoursToTerraform(struct!.suspensionHours),
    tasks: cdktf.listMapper(oceanAksNpSchedulingTasksToTerraform, true)(struct!.tasks),
  }
}


export function oceanAksNpSchedulingToHclTerraform(struct?: OceanAksNpSchedulingOutputReference | OceanAksNpScheduling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shutdown_hours: {
      value: oceanAksNpSchedulingShutdownHoursToHclTerraform(struct!.shutdownHours),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAksNpSchedulingShutdownHoursList",
    },
    suspension_hours: {
      value: oceanAksNpSchedulingSuspensionHoursToHclTerraform(struct!.suspensionHours),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAksNpSchedulingSuspensionHoursList",
    },
    tasks: {
      value: cdktf.listMapperHcl(oceanAksNpSchedulingTasksToHclTerraform, true)(struct!.tasks),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAksNpSchedulingTasksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAksNpSchedulingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksNpScheduling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shutdownHours?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdownHours = this._shutdownHours?.internalValue;
    }
    if (this._suspensionHours?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspensionHours = this._suspensionHours?.internalValue;
    }
    if (this._tasks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasks = this._tasks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksNpScheduling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._shutdownHours.internalValue = undefined;
      this._suspensionHours.internalValue = undefined;
      this._tasks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._shutdownHours.internalValue = value.shutdownHours;
      this._suspensionHours.internalValue = value.suspensionHours;
      this._tasks.internalValue = value.tasks;
    }
  }

  // shutdown_hours - computed: false, optional: true, required: false
  private _shutdownHours = new OceanAksNpSchedulingShutdownHoursOutputReference(this, "shutdown_hours");
  public get shutdownHours() {
    return this._shutdownHours;
  }
  public putShutdownHours(value: OceanAksNpSchedulingShutdownHours) {
    this._shutdownHours.internalValue = value;
  }
  public resetShutdownHours() {
    this._shutdownHours.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownHoursInput() {
    return this._shutdownHours.internalValue;
  }

  // suspension_hours - computed: false, optional: true, required: false
  private _suspensionHours = new OceanAksNpSchedulingSuspensionHoursOutputReference(this, "suspension_hours");
  public get suspensionHours() {
    return this._suspensionHours;
  }
  public putSuspensionHours(value: OceanAksNpSchedulingSuspensionHours) {
    this._suspensionHours.internalValue = value;
  }
  public resetSuspensionHours() {
    this._suspensionHours.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspensionHoursInput() {
    return this._suspensionHours.internalValue;
  }

  // tasks - computed: false, optional: true, required: false
  private _tasks = new OceanAksNpSchedulingTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: OceanAksNpSchedulingTasks[] | cdktf.IResolvable) {
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
export interface OceanAksNpTaints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#effect OceanAksNp#effect}
  */
  readonly effect: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#key OceanAksNp#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#value OceanAksNp#value}
  */
  readonly value: string;
}

export function oceanAksNpTaintsToTerraform(struct?: OceanAksNpTaints | cdktf.IResolvable): any {
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


export function oceanAksNpTaintsToHclTerraform(struct?: OceanAksNpTaints | cdktf.IResolvable): any {
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

export class OceanAksNpTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAksNpTaints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OceanAksNpTaints | cdktf.IResolvable | undefined) {
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

export class OceanAksNpTaintsList extends cdktf.ComplexList {
  public internalValue? : OceanAksNpTaints[] | cdktf.IResolvable

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
  public get(index: number): OceanAksNpTaintsOutputReference {
    return new OceanAksNpTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAksNpUpdatePolicyRollConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#batch_min_healthy_percentage OceanAksNp#batch_min_healthy_percentage}
  */
  readonly batchMinHealthyPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#batch_size_percentage OceanAksNp#batch_size_percentage}
  */
  readonly batchSizePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#comment OceanAksNp#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#node_names OceanAksNp#node_names}
  */
  readonly nodeNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#node_pool_names OceanAksNp#node_pool_names}
  */
  readonly nodePoolNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#respect_pdb OceanAksNp#respect_pdb}
  */
  readonly respectPdb?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#respect_restrict_scale_down OceanAksNp#respect_restrict_scale_down}
  */
  readonly respectRestrictScaleDown?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#vng_ids OceanAksNp#vng_ids}
  */
  readonly vngIds?: string[];
}

export function oceanAksNpUpdatePolicyRollConfigToTerraform(struct?: OceanAksNpUpdatePolicyRollConfigOutputReference | OceanAksNpUpdatePolicyRollConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_min_healthy_percentage: cdktf.numberToTerraform(struct!.batchMinHealthyPercentage),
    batch_size_percentage: cdktf.numberToTerraform(struct!.batchSizePercentage),
    comment: cdktf.stringToTerraform(struct!.comment),
    node_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeNames),
    node_pool_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodePoolNames),
    respect_pdb: cdktf.booleanToTerraform(struct!.respectPdb),
    respect_restrict_scale_down: cdktf.booleanToTerraform(struct!.respectRestrictScaleDown),
    vng_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vngIds),
  }
}


export function oceanAksNpUpdatePolicyRollConfigToHclTerraform(struct?: OceanAksNpUpdatePolicyRollConfigOutputReference | OceanAksNpUpdatePolicyRollConfig): any {
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
    node_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_pool_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodePoolNames),
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
    respect_restrict_scale_down: {
      value: cdktf.booleanToHclTerraform(struct!.respectRestrictScaleDown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vng_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vngIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAksNpUpdatePolicyRollConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksNpUpdatePolicyRollConfig | undefined {
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
    if (this._nodeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeNames = this._nodeNames;
    }
    if (this._nodePoolNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePoolNames = this._nodePoolNames;
    }
    if (this._respectPdb !== undefined) {
      hasAnyValues = true;
      internalValueResult.respectPdb = this._respectPdb;
    }
    if (this._respectRestrictScaleDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.respectRestrictScaleDown = this._respectRestrictScaleDown;
    }
    if (this._vngIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vngIds = this._vngIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksNpUpdatePolicyRollConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchMinHealthyPercentage = undefined;
      this._batchSizePercentage = undefined;
      this._comment = undefined;
      this._nodeNames = undefined;
      this._nodePoolNames = undefined;
      this._respectPdb = undefined;
      this._respectRestrictScaleDown = undefined;
      this._vngIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchMinHealthyPercentage = value.batchMinHealthyPercentage;
      this._batchSizePercentage = value.batchSizePercentage;
      this._comment = value.comment;
      this._nodeNames = value.nodeNames;
      this._nodePoolNames = value.nodePoolNames;
      this._respectPdb = value.respectPdb;
      this._respectRestrictScaleDown = value.respectRestrictScaleDown;
      this._vngIds = value.vngIds;
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

  // node_names - computed: false, optional: true, required: false
  private _nodeNames?: string[]; 
  public get nodeNames() {
    return this.getListAttribute('node_names');
  }
  public set nodeNames(value: string[]) {
    this._nodeNames = value;
  }
  public resetNodeNames() {
    this._nodeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNamesInput() {
    return this._nodeNames;
  }

  // node_pool_names - computed: false, optional: true, required: false
  private _nodePoolNames?: string[]; 
  public get nodePoolNames() {
    return this.getListAttribute('node_pool_names');
  }
  public set nodePoolNames(value: string[]) {
    this._nodePoolNames = value;
  }
  public resetNodePoolNames() {
    this._nodePoolNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolNamesInput() {
    return this._nodePoolNames;
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

  // respect_restrict_scale_down - computed: false, optional: true, required: false
  private _respectRestrictScaleDown?: boolean | cdktf.IResolvable; 
  public get respectRestrictScaleDown() {
    return this.getBooleanAttribute('respect_restrict_scale_down');
  }
  public set respectRestrictScaleDown(value: boolean | cdktf.IResolvable) {
    this._respectRestrictScaleDown = value;
  }
  public resetRespectRestrictScaleDown() {
    this._respectRestrictScaleDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respectRestrictScaleDownInput() {
    return this._respectRestrictScaleDown;
  }

  // vng_ids - computed: false, optional: true, required: false
  private _vngIds?: string[]; 
  public get vngIds() {
    return this.getListAttribute('vng_ids');
  }
  public set vngIds(value: string[]) {
    this._vngIds = value;
  }
  public resetVngIds() {
    this._vngIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vngIdsInput() {
    return this._vngIds;
  }
}
export interface OceanAksNpUpdatePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#conditioned_roll OceanAksNp#conditioned_roll}
  */
  readonly conditionedRoll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#should_roll OceanAksNp#should_roll}
  */
  readonly shouldRoll: boolean | cdktf.IResolvable;
  /**
  * roll_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#roll_config OceanAksNp#roll_config}
  */
  readonly rollConfig?: OceanAksNpUpdatePolicyRollConfig;
}

export function oceanAksNpUpdatePolicyToTerraform(struct?: OceanAksNpUpdatePolicyOutputReference | OceanAksNpUpdatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditioned_roll: cdktf.booleanToTerraform(struct!.conditionedRoll),
    should_roll: cdktf.booleanToTerraform(struct!.shouldRoll),
    roll_config: oceanAksNpUpdatePolicyRollConfigToTerraform(struct!.rollConfig),
  }
}


export function oceanAksNpUpdatePolicyToHclTerraform(struct?: OceanAksNpUpdatePolicyOutputReference | OceanAksNpUpdatePolicy): any {
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
      value: oceanAksNpUpdatePolicyRollConfigToHclTerraform(struct!.rollConfig),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAksNpUpdatePolicyRollConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAksNpUpdatePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksNpUpdatePolicy | undefined {
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

  public set internalValue(value: OceanAksNpUpdatePolicy | undefined) {
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
  private _rollConfig = new OceanAksNpUpdatePolicyRollConfigOutputReference(this, "roll_config");
  public get rollConfig() {
    return this._rollConfig;
  }
  public putRollConfig(value: OceanAksNpUpdatePolicyRollConfig) {
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
export interface OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#is_enabled OceanAksNp#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#time_windows OceanAksNp#time_windows}
  */
  readonly timeWindows?: string[];
}

export function oceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursToTerraform(struct?: OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference | OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    time_windows: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.timeWindows),
  }
}


export function oceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursToHclTerraform(struct?: OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference | OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours): any {
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

export class OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours | undefined {
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

  public set internalValue(value: OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours | undefined) {
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

  // time_windows - computed: false, optional: true, required: false
  private _timeWindows?: string[]; 
  public get timeWindows() {
    return this.getListAttribute('time_windows');
  }
  public set timeWindows(value: string[]) {
    this._timeWindows = value;
  }
  public resetTimeWindows() {
    this._timeWindows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowsInput() {
    return this._timeWindows;
  }
}
export interface OceanAksNpVngTemplateScheduling {
  /**
  * vng_template_shutdown_hours block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#vng_template_shutdown_hours OceanAksNp#vng_template_shutdown_hours}
  */
  readonly vngTemplateShutdownHours?: OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours;
}

export function oceanAksNpVngTemplateSchedulingToTerraform(struct?: OceanAksNpVngTemplateSchedulingOutputReference | OceanAksNpVngTemplateScheduling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vng_template_shutdown_hours: oceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursToTerraform(struct!.vngTemplateShutdownHours),
  }
}


export function oceanAksNpVngTemplateSchedulingToHclTerraform(struct?: OceanAksNpVngTemplateSchedulingOutputReference | OceanAksNpVngTemplateScheduling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vng_template_shutdown_hours: {
      value: oceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursToHclTerraform(struct!.vngTemplateShutdownHours),
      isBlock: true,
      type: "list",
      storageClassType: "OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanAksNpVngTemplateSchedulingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksNpVngTemplateScheduling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vngTemplateShutdownHours?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vngTemplateShutdownHours = this._vngTemplateShutdownHours?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksNpVngTemplateScheduling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vngTemplateShutdownHours.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vngTemplateShutdownHours.internalValue = value.vngTemplateShutdownHours;
    }
  }

  // vng_template_shutdown_hours - computed: false, optional: true, required: false
  private _vngTemplateShutdownHours = new OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference(this, "vng_template_shutdown_hours");
  public get vngTemplateShutdownHours() {
    return this._vngTemplateShutdownHours;
  }
  public putVngTemplateShutdownHours(value: OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours) {
    this._vngTemplateShutdownHours.internalValue = value;
  }
  public resetVngTemplateShutdownHours() {
    this._vngTemplateShutdownHours.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vngTemplateShutdownHoursInput() {
    return this._vngTemplateShutdownHours.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np spotinst_ocean_aks_np}
*/
export class OceanAksNp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_ocean_aks_np";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OceanAksNp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OceanAksNp to import
  * @param importFromId The id of the existing OceanAksNp that should be imported. Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OceanAksNp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spotinst_ocean_aks_np", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_aks_np spotinst_ocean_aks_np} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OceanAksNpConfig
  */
  public constructor(scope: Construct, id: string, config: OceanAksNpConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_ocean_aks_np',
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
    this._aksClusterName = config.aksClusterName;
    this._aksInfrastructureResourceGroupName = config.aksInfrastructureResourceGroupName;
    this._aksRegion = config.aksRegion;
    this._aksResourceGroupName = config.aksResourceGroupName;
    this._availabilityZones = config.availabilityZones;
    this._controllerClusterId = config.controllerClusterId;
    this._enableNodePublicIp = config.enableNodePublicIp;
    this._fallbackToOndemand = config.fallbackToOndemand;
    this._id = config.id;
    this._kubernetesVersion = config.kubernetesVersion;
    this._labels = config.labels;
    this._maxCount = config.maxCount;
    this._maxPodsPerNode = config.maxPodsPerNode;
    this._minCount = config.minCount;
    this._name = config.name;
    this._osDiskSizeGb = config.osDiskSizeGb;
    this._osDiskType = config.osDiskType;
    this._osSku = config.osSku;
    this._osType = config.osType;
    this._podSubnetIds = config.podSubnetIds;
    this._spotPercentage = config.spotPercentage;
    this._tags = config.tags;
    this._vnetSubnetIds = config.vnetSubnetIds;
    this._autoscaler.internalValue = config.autoscaler;
    this._filters.internalValue = config.filters;
    this._headrooms.internalValue = config.headrooms;
    this._health.internalValue = config.health;
    this._linuxOsConfig.internalValue = config.linuxOsConfig;
    this._logging.internalValue = config.logging;
    this._scheduling.internalValue = config.scheduling;
    this._taints.internalValue = config.taints;
    this._updatePolicy.internalValue = config.updatePolicy;
    this._vngTemplateScheduling.internalValue = config.vngTemplateScheduling;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aks_cluster_name - computed: false, optional: false, required: true
  private _aksClusterName?: string; 
  public get aksClusterName() {
    return this.getStringAttribute('aks_cluster_name');
  }
  public set aksClusterName(value: string) {
    this._aksClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aksClusterNameInput() {
    return this._aksClusterName;
  }

  // aks_infrastructure_resource_group_name - computed: false, optional: false, required: true
  private _aksInfrastructureResourceGroupName?: string; 
  public get aksInfrastructureResourceGroupName() {
    return this.getStringAttribute('aks_infrastructure_resource_group_name');
  }
  public set aksInfrastructureResourceGroupName(value: string) {
    this._aksInfrastructureResourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aksInfrastructureResourceGroupNameInput() {
    return this._aksInfrastructureResourceGroupName;
  }

  // aks_region - computed: false, optional: false, required: true
  private _aksRegion?: string; 
  public get aksRegion() {
    return this.getStringAttribute('aks_region');
  }
  public set aksRegion(value: string) {
    this._aksRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aksRegionInput() {
    return this._aksRegion;
  }

  // aks_resource_group_name - computed: false, optional: false, required: true
  private _aksResourceGroupName?: string; 
  public get aksResourceGroupName() {
    return this.getStringAttribute('aks_resource_group_name');
  }
  public set aksResourceGroupName(value: string) {
    this._aksResourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aksResourceGroupNameInput() {
    return this._aksResourceGroupName;
  }

  // availability_zones - computed: false, optional: false, required: true
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // controller_cluster_id - computed: false, optional: false, required: true
  private _controllerClusterId?: string; 
  public get controllerClusterId() {
    return this.getStringAttribute('controller_cluster_id');
  }
  public set controllerClusterId(value: string) {
    this._controllerClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerClusterIdInput() {
    return this._controllerClusterId;
  }

  // enable_node_public_ip - computed: false, optional: true, required: false
  private _enableNodePublicIp?: boolean | cdktf.IResolvable; 
  public get enableNodePublicIp() {
    return this.getBooleanAttribute('enable_node_public_ip');
  }
  public set enableNodePublicIp(value: boolean | cdktf.IResolvable) {
    this._enableNodePublicIp = value;
  }
  public resetEnableNodePublicIp() {
    this._enableNodePublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNodePublicIpInput() {
    return this._enableNodePublicIp;
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

  // kubernetes_version - computed: false, optional: true, required: false
  private _kubernetesVersion?: string; 
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }
  public set kubernetesVersion(value: string) {
    this._kubernetesVersion = value;
  }
  public resetKubernetesVersion() {
    this._kubernetesVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesVersionInput() {
    return this._kubernetesVersion;
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

  // max_count - computed: false, optional: true, required: false
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  public resetMaxCount() {
    this._maxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }

  // max_pods_per_node - computed: false, optional: true, required: false
  private _maxPodsPerNode?: number; 
  public get maxPodsPerNode() {
    return this.getNumberAttribute('max_pods_per_node');
  }
  public set maxPodsPerNode(value: number) {
    this._maxPodsPerNode = value;
  }
  public resetMaxPodsPerNode() {
    this._maxPodsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsPerNodeInput() {
    return this._maxPodsPerNode;
  }

  // min_count - computed: false, optional: true, required: false
  private _minCount?: number; 
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }
  public set minCount(value: number) {
    this._minCount = value;
  }
  public resetMinCount() {
    this._minCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountInput() {
    return this._minCount;
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

  // os_disk_size_gb - computed: false, optional: true, required: false
  private _osDiskSizeGb?: number; 
  public get osDiskSizeGb() {
    return this.getNumberAttribute('os_disk_size_gb');
  }
  public set osDiskSizeGb(value: number) {
    this._osDiskSizeGb = value;
  }
  public resetOsDiskSizeGb() {
    this._osDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskSizeGbInput() {
    return this._osDiskSizeGb;
  }

  // os_disk_type - computed: false, optional: true, required: false
  private _osDiskType?: string; 
  public get osDiskType() {
    return this.getStringAttribute('os_disk_type');
  }
  public set osDiskType(value: string) {
    this._osDiskType = value;
  }
  public resetOsDiskType() {
    this._osDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskTypeInput() {
    return this._osDiskType;
  }

  // os_sku - computed: false, optional: true, required: false
  private _osSku?: string; 
  public get osSku() {
    return this.getStringAttribute('os_sku');
  }
  public set osSku(value: string) {
    this._osSku = value;
  }
  public resetOsSku() {
    this._osSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osSkuInput() {
    return this._osSku;
  }

  // os_type - computed: false, optional: true, required: false
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }

  // pod_subnet_ids - computed: false, optional: true, required: false
  private _podSubnetIds?: string[]; 
  public get podSubnetIds() {
    return this.getListAttribute('pod_subnet_ids');
  }
  public set podSubnetIds(value: string[]) {
    this._podSubnetIds = value;
  }
  public resetPodSubnetIds() {
    this._podSubnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSubnetIdsInput() {
    return this._podSubnetIds;
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

  // vnet_subnet_ids - computed: false, optional: true, required: false
  private _vnetSubnetIds?: string[]; 
  public get vnetSubnetIds() {
    return this.getListAttribute('vnet_subnet_ids');
  }
  public set vnetSubnetIds(value: string[]) {
    this._vnetSubnetIds = value;
  }
  public resetVnetSubnetIds() {
    this._vnetSubnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetSubnetIdsInput() {
    return this._vnetSubnetIds;
  }

  // autoscaler - computed: false, optional: true, required: false
  private _autoscaler = new OceanAksNpAutoscalerOutputReference(this, "autoscaler");
  public get autoscaler() {
    return this._autoscaler;
  }
  public putAutoscaler(value: OceanAksNpAutoscaler) {
    this._autoscaler.internalValue = value;
  }
  public resetAutoscaler() {
    this._autoscaler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalerInput() {
    return this._autoscaler.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new OceanAksNpFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: OceanAksNpFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // headrooms - computed: false, optional: true, required: false
  private _headrooms = new OceanAksNpHeadroomsList(this, "headrooms", true);
  public get headrooms() {
    return this._headrooms;
  }
  public putHeadrooms(value: OceanAksNpHeadrooms[] | cdktf.IResolvable) {
    this._headrooms.internalValue = value;
  }
  public resetHeadrooms() {
    this._headrooms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headroomsInput() {
    return this._headrooms.internalValue;
  }

  // health - computed: false, optional: true, required: false
  private _health = new OceanAksNpHealthOutputReference(this, "health");
  public get health() {
    return this._health;
  }
  public putHealth(value: OceanAksNpHealth) {
    this._health.internalValue = value;
  }
  public resetHealth() {
    this._health.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health.internalValue;
  }

  // linux_os_config - computed: false, optional: true, required: false
  private _linuxOsConfig = new OceanAksNpLinuxOsConfigList(this, "linux_os_config", false);
  public get linuxOsConfig() {
    return this._linuxOsConfig;
  }
  public putLinuxOsConfig(value: OceanAksNpLinuxOsConfig[] | cdktf.IResolvable) {
    this._linuxOsConfig.internalValue = value;
  }
  public resetLinuxOsConfig() {
    this._linuxOsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxOsConfigInput() {
    return this._linuxOsConfig.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new OceanAksNpLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: OceanAksNpLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // scheduling - computed: false, optional: true, required: false
  private _scheduling = new OceanAksNpSchedulingOutputReference(this, "scheduling");
  public get scheduling() {
    return this._scheduling;
  }
  public putScheduling(value: OceanAksNpScheduling) {
    this._scheduling.internalValue = value;
  }
  public resetScheduling() {
    this._scheduling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingInput() {
    return this._scheduling.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new OceanAksNpTaintsList(this, "taints", true);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: OceanAksNpTaints[] | cdktf.IResolvable) {
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
  private _updatePolicy = new OceanAksNpUpdatePolicyOutputReference(this, "update_policy");
  public get updatePolicy() {
    return this._updatePolicy;
  }
  public putUpdatePolicy(value: OceanAksNpUpdatePolicy) {
    this._updatePolicy.internalValue = value;
  }
  public resetUpdatePolicy() {
    this._updatePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePolicyInput() {
    return this._updatePolicy.internalValue;
  }

  // vng_template_scheduling - computed: false, optional: true, required: false
  private _vngTemplateScheduling = new OceanAksNpVngTemplateSchedulingOutputReference(this, "vng_template_scheduling");
  public get vngTemplateScheduling() {
    return this._vngTemplateScheduling;
  }
  public putVngTemplateScheduling(value: OceanAksNpVngTemplateScheduling) {
    this._vngTemplateScheduling.internalValue = value;
  }
  public resetVngTemplateScheduling() {
    this._vngTemplateScheduling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vngTemplateSchedulingInput() {
    return this._vngTemplateScheduling.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aks_cluster_name: cdktf.stringToTerraform(this._aksClusterName),
      aks_infrastructure_resource_group_name: cdktf.stringToTerraform(this._aksInfrastructureResourceGroupName),
      aks_region: cdktf.stringToTerraform(this._aksRegion),
      aks_resource_group_name: cdktf.stringToTerraform(this._aksResourceGroupName),
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZones),
      controller_cluster_id: cdktf.stringToTerraform(this._controllerClusterId),
      enable_node_public_ip: cdktf.booleanToTerraform(this._enableNodePublicIp),
      fallback_to_ondemand: cdktf.booleanToTerraform(this._fallbackToOndemand),
      id: cdktf.stringToTerraform(this._id),
      kubernetes_version: cdktf.stringToTerraform(this._kubernetesVersion),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      max_count: cdktf.numberToTerraform(this._maxCount),
      max_pods_per_node: cdktf.numberToTerraform(this._maxPodsPerNode),
      min_count: cdktf.numberToTerraform(this._minCount),
      name: cdktf.stringToTerraform(this._name),
      os_disk_size_gb: cdktf.numberToTerraform(this._osDiskSizeGb),
      os_disk_type: cdktf.stringToTerraform(this._osDiskType),
      os_sku: cdktf.stringToTerraform(this._osSku),
      os_type: cdktf.stringToTerraform(this._osType),
      pod_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._podSubnetIds),
      spot_percentage: cdktf.numberToTerraform(this._spotPercentage),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vnet_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vnetSubnetIds),
      autoscaler: oceanAksNpAutoscalerToTerraform(this._autoscaler.internalValue),
      filters: oceanAksNpFiltersToTerraform(this._filters.internalValue),
      headrooms: cdktf.listMapper(oceanAksNpHeadroomsToTerraform, true)(this._headrooms.internalValue),
      health: oceanAksNpHealthToTerraform(this._health.internalValue),
      linux_os_config: cdktf.listMapper(oceanAksNpLinuxOsConfigToTerraform, true)(this._linuxOsConfig.internalValue),
      logging: oceanAksNpLoggingToTerraform(this._logging.internalValue),
      scheduling: oceanAksNpSchedulingToTerraform(this._scheduling.internalValue),
      taints: cdktf.listMapper(oceanAksNpTaintsToTerraform, true)(this._taints.internalValue),
      update_policy: oceanAksNpUpdatePolicyToTerraform(this._updatePolicy.internalValue),
      vng_template_scheduling: oceanAksNpVngTemplateSchedulingToTerraform(this._vngTemplateScheduling.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aks_cluster_name: {
        value: cdktf.stringToHclTerraform(this._aksClusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aks_infrastructure_resource_group_name: {
        value: cdktf.stringToHclTerraform(this._aksInfrastructureResourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aks_region: {
        value: cdktf.stringToHclTerraform(this._aksRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aks_resource_group_name: {
        value: cdktf.stringToHclTerraform(this._aksResourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availabilityZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      controller_cluster_id: {
        value: cdktf.stringToHclTerraform(this._controllerClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_node_public_ip: {
        value: cdktf.booleanToHclTerraform(this._enableNodePublicIp),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernetes_version: {
        value: cdktf.stringToHclTerraform(this._kubernetesVersion),
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
      max_count: {
        value: cdktf.numberToHclTerraform(this._maxCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_pods_per_node: {
        value: cdktf.numberToHclTerraform(this._maxPodsPerNode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_count: {
        value: cdktf.numberToHclTerraform(this._minCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_disk_size_gb: {
        value: cdktf.numberToHclTerraform(this._osDiskSizeGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      os_disk_type: {
        value: cdktf.stringToHclTerraform(this._osDiskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_sku: {
        value: cdktf.stringToHclTerraform(this._osSku),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_type: {
        value: cdktf.stringToHclTerraform(this._osType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pod_subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._podSubnetIds),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vnet_subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vnetSubnetIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      autoscaler: {
        value: oceanAksNpAutoscalerToHclTerraform(this._autoscaler.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAksNpAutoscalerList",
      },
      filters: {
        value: oceanAksNpFiltersToHclTerraform(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAksNpFiltersList",
      },
      headrooms: {
        value: cdktf.listMapperHcl(oceanAksNpHeadroomsToHclTerraform, true)(this._headrooms.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OceanAksNpHeadroomsList",
      },
      health: {
        value: oceanAksNpHealthToHclTerraform(this._health.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAksNpHealthList",
      },
      linux_os_config: {
        value: cdktf.listMapperHcl(oceanAksNpLinuxOsConfigToHclTerraform, true)(this._linuxOsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAksNpLinuxOsConfigList",
      },
      logging: {
        value: oceanAksNpLoggingToHclTerraform(this._logging.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAksNpLoggingList",
      },
      scheduling: {
        value: oceanAksNpSchedulingToHclTerraform(this._scheduling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAksNpSchedulingList",
      },
      taints: {
        value: cdktf.listMapperHcl(oceanAksNpTaintsToHclTerraform, true)(this._taints.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OceanAksNpTaintsList",
      },
      update_policy: {
        value: oceanAksNpUpdatePolicyToHclTerraform(this._updatePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAksNpUpdatePolicyList",
      },
      vng_template_scheduling: {
        value: oceanAksNpVngTemplateSchedulingToHclTerraform(this._vngTemplateScheduling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanAksNpVngTemplateSchedulingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
