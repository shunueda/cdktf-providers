// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesNodePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable auto recovery
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#auto_recovery KubernetesNodePool#auto_recovery}
  */
  readonly autoRecovery?: boolean | cdktf.IResolvable;
  /**
  * Enable auto scale
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#auto_scale KubernetesNodePool#auto_scale}
  */
  readonly autoScale?: boolean | cdktf.IResolvable;
  /**
  * Availability zone name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#availability_zone_name KubernetesNodePool#availability_zone_name}
  */
  readonly availabilityZoneName?: string;
  /**
  * Desired node count in the pool (Desired node count is 0 when auto_scale is enabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#desired_node_count KubernetesNodePool#desired_node_count}
  */
  readonly desiredNodeCount?: number;
  /**
  * Encrypt enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#encrypt_enabled KubernetesNodePool#encrypt_enabled}
  */
  readonly encryptEnabled?: boolean | cdktf.IResolvable;
  /**
  * ID of scp_kubernetes_engine resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#engine_id KubernetesNodePool#engine_id}
  */
  readonly engineId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#id KubernetesNodePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Image ID (use scp_standard_image data source)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#image_id KubernetesNodePool#image_id}
  */
  readonly imageId: string;
  /**
  * Maximum node count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#max_node_count KubernetesNodePool#max_node_count}
  */
  readonly maxNodeCount?: number;
  /**
  * Minimum node count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#min_node_count KubernetesNodePool#min_node_count}
  */
  readonly minNodeCount?: number;
  /**
  * Node pool name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#name KubernetesNodePool#name}
  */
  readonly name: string;
  /**
  * Scale name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#scale_name KubernetesNodePool#scale_name}
  */
  readonly scaleName?: string;
  /**
  * Storage name (Currently only SSD is supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#storage_name KubernetesNodePool#storage_name}
  */
  readonly storageName?: string;
  /**
  * Storage size in GB (default 100)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#storage_size_gb KubernetesNodePool#storage_size_gb}
  */
  readonly storageSizeGb?: string;
  /**
  * advanced_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#advanced_settings KubernetesNodePool#advanced_settings}
  */
  readonly advancedSettings?: KubernetesNodePoolAdvancedSettings[] | cdktf.IResolvable;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#labels KubernetesNodePool#labels}
  */
  readonly labels?: KubernetesNodePoolLabels[] | cdktf.IResolvable;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#taints KubernetesNodePool#taints}
  */
  readonly taints?: KubernetesNodePoolTaints[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#timeouts KubernetesNodePool#timeouts}
  */
  readonly timeouts?: KubernetesNodePoolTimeouts;
}
export interface KubernetesNodePoolAdvancedSettings {
  /**
  * Allowed Unsafe Sysctls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#allowed_unsafe_sysctls KubernetesNodePool#allowed_unsafe_sysctls}
  */
  readonly allowedUnsafeSysctls?: string;
  /**
  * Container Log Max Files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#container_log_max_files KubernetesNodePool#container_log_max_files}
  */
  readonly containerLogMaxFiles?: number;
  /**
  * Container Log Max Size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#container_log_max_size KubernetesNodePool#container_log_max_size}
  */
  readonly containerLogMaxSize?: number;
  /**
  * ImageGc High Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#image_gc_high_threshold KubernetesNodePool#image_gc_high_threshold}
  */
  readonly imageGcHighThreshold?: number;
  /**
  * Image Gc Low Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#image_gc_low_threshold KubernetesNodePool#image_gc_low_threshold}
  */
  readonly imageGcLowThreshold?: number;
  /**
  * Max Pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#max_pods KubernetesNodePool#max_pods}
  */
  readonly maxPods?: number;
  /**
  * Pod Max Pids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#pod_max_pids KubernetesNodePool#pod_max_pids}
  */
  readonly podMaxPids?: number;
}

export function kubernetesNodePoolAdvancedSettingsToTerraform(struct?: KubernetesNodePoolAdvancedSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_unsafe_sysctls: cdktf.stringToTerraform(struct!.allowedUnsafeSysctls),
    container_log_max_files: cdktf.numberToTerraform(struct!.containerLogMaxFiles),
    container_log_max_size: cdktf.numberToTerraform(struct!.containerLogMaxSize),
    image_gc_high_threshold: cdktf.numberToTerraform(struct!.imageGcHighThreshold),
    image_gc_low_threshold: cdktf.numberToTerraform(struct!.imageGcLowThreshold),
    max_pods: cdktf.numberToTerraform(struct!.maxPods),
    pod_max_pids: cdktf.numberToTerraform(struct!.podMaxPids),
  }
}


export function kubernetesNodePoolAdvancedSettingsToHclTerraform(struct?: KubernetesNodePoolAdvancedSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_unsafe_sysctls: {
      value: cdktf.stringToHclTerraform(struct!.allowedUnsafeSysctls),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_log_max_files: {
      value: cdktf.numberToHclTerraform(struct!.containerLogMaxFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    container_log_max_size: {
      value: cdktf.numberToHclTerraform(struct!.containerLogMaxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_gc_high_threshold: {
      value: cdktf.numberToHclTerraform(struct!.imageGcHighThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_gc_low_threshold: {
      value: cdktf.numberToHclTerraform(struct!.imageGcLowThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_pods: {
      value: cdktf.numberToHclTerraform(struct!.maxPods),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod_max_pids: {
      value: cdktf.numberToHclTerraform(struct!.podMaxPids),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesNodePoolAdvancedSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesNodePoolAdvancedSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedUnsafeSysctls !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedUnsafeSysctls = this._allowedUnsafeSysctls;
    }
    if (this._containerLogMaxFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogMaxFiles = this._containerLogMaxFiles;
    }
    if (this._containerLogMaxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogMaxSize = this._containerLogMaxSize;
    }
    if (this._imageGcHighThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGcHighThreshold = this._imageGcHighThreshold;
    }
    if (this._imageGcLowThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGcLowThreshold = this._imageGcLowThreshold;
    }
    if (this._maxPods !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPods = this._maxPods;
    }
    if (this._podMaxPids !== undefined) {
      hasAnyValues = true;
      internalValueResult.podMaxPids = this._podMaxPids;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodePoolAdvancedSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedUnsafeSysctls = undefined;
      this._containerLogMaxFiles = undefined;
      this._containerLogMaxSize = undefined;
      this._imageGcHighThreshold = undefined;
      this._imageGcLowThreshold = undefined;
      this._maxPods = undefined;
      this._podMaxPids = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedUnsafeSysctls = value.allowedUnsafeSysctls;
      this._containerLogMaxFiles = value.containerLogMaxFiles;
      this._containerLogMaxSize = value.containerLogMaxSize;
      this._imageGcHighThreshold = value.imageGcHighThreshold;
      this._imageGcLowThreshold = value.imageGcLowThreshold;
      this._maxPods = value.maxPods;
      this._podMaxPids = value.podMaxPids;
    }
  }

  // allowed_unsafe_sysctls - computed: false, optional: true, required: false
  private _allowedUnsafeSysctls?: string; 
  public get allowedUnsafeSysctls() {
    return this.getStringAttribute('allowed_unsafe_sysctls');
  }
  public set allowedUnsafeSysctls(value: string) {
    this._allowedUnsafeSysctls = value;
  }
  public resetAllowedUnsafeSysctls() {
    this._allowedUnsafeSysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUnsafeSysctlsInput() {
    return this._allowedUnsafeSysctls;
  }

  // container_log_max_files - computed: false, optional: true, required: false
  private _containerLogMaxFiles?: number; 
  public get containerLogMaxFiles() {
    return this.getNumberAttribute('container_log_max_files');
  }
  public set containerLogMaxFiles(value: number) {
    this._containerLogMaxFiles = value;
  }
  public resetContainerLogMaxFiles() {
    this._containerLogMaxFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogMaxFilesInput() {
    return this._containerLogMaxFiles;
  }

  // container_log_max_size - computed: false, optional: true, required: false
  private _containerLogMaxSize?: number; 
  public get containerLogMaxSize() {
    return this.getNumberAttribute('container_log_max_size');
  }
  public set containerLogMaxSize(value: number) {
    this._containerLogMaxSize = value;
  }
  public resetContainerLogMaxSize() {
    this._containerLogMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogMaxSizeInput() {
    return this._containerLogMaxSize;
  }

  // image_gc_high_threshold - computed: false, optional: true, required: false
  private _imageGcHighThreshold?: number; 
  public get imageGcHighThreshold() {
    return this.getNumberAttribute('image_gc_high_threshold');
  }
  public set imageGcHighThreshold(value: number) {
    this._imageGcHighThreshold = value;
  }
  public resetImageGcHighThreshold() {
    this._imageGcHighThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcHighThresholdInput() {
    return this._imageGcHighThreshold;
  }

  // image_gc_low_threshold - computed: false, optional: true, required: false
  private _imageGcLowThreshold?: number; 
  public get imageGcLowThreshold() {
    return this.getNumberAttribute('image_gc_low_threshold');
  }
  public set imageGcLowThreshold(value: number) {
    this._imageGcLowThreshold = value;
  }
  public resetImageGcLowThreshold() {
    this._imageGcLowThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcLowThresholdInput() {
    return this._imageGcLowThreshold;
  }

  // max_pods - computed: false, optional: true, required: false
  private _maxPods?: number; 
  public get maxPods() {
    return this.getNumberAttribute('max_pods');
  }
  public set maxPods(value: number) {
    this._maxPods = value;
  }
  public resetMaxPods() {
    this._maxPods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsInput() {
    return this._maxPods;
  }

  // pod_max_pids - computed: false, optional: true, required: false
  private _podMaxPids?: number; 
  public get podMaxPids() {
    return this.getNumberAttribute('pod_max_pids');
  }
  public set podMaxPids(value: number) {
    this._podMaxPids = value;
  }
  public resetPodMaxPids() {
    this._podMaxPids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podMaxPidsInput() {
    return this._podMaxPids;
  }
}

export class KubernetesNodePoolAdvancedSettingsList extends cdktf.ComplexList {
  public internalValue? : KubernetesNodePoolAdvancedSettings[] | cdktf.IResolvable

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
  public get(index: number): KubernetesNodePoolAdvancedSettingsOutputReference {
    return new KubernetesNodePoolAdvancedSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesNodePoolLabels {
  /**
  * Label Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#key KubernetesNodePool#key}
  */
  readonly key?: string;
  /**
  * Label Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#value KubernetesNodePool#value}
  */
  readonly value?: string;
}

export function kubernetesNodePoolLabelsToTerraform(struct?: KubernetesNodePoolLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function kubernetesNodePoolLabelsToHclTerraform(struct?: KubernetesNodePoolLabels | cdktf.IResolvable): any {
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

export class KubernetesNodePoolLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesNodePoolLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubernetesNodePoolLabels | cdktf.IResolvable | undefined) {
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

export class KubernetesNodePoolLabelsList extends cdktf.ComplexList {
  public internalValue? : KubernetesNodePoolLabels[] | cdktf.IResolvable

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
  public get(index: number): KubernetesNodePoolLabelsOutputReference {
    return new KubernetesNodePoolLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesNodePoolTaints {
  /**
  * Taint Effect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#effect KubernetesNodePool#effect}
  */
  readonly effect?: string;
  /**
  * Taint Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#key KubernetesNodePool#key}
  */
  readonly key?: string;
  /**
  * Taint Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#value KubernetesNodePool#value}
  */
  readonly value?: string;
}

export function kubernetesNodePoolTaintsToTerraform(struct?: KubernetesNodePoolTaints | cdktf.IResolvable): any {
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


export function kubernetesNodePoolTaintsToHclTerraform(struct?: KubernetesNodePoolTaints | cdktf.IResolvable): any {
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

export class KubernetesNodePoolTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesNodePoolTaints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubernetesNodePoolTaints | cdktf.IResolvable | undefined) {
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

export class KubernetesNodePoolTaintsList extends cdktf.ComplexList {
  public internalValue? : KubernetesNodePoolTaints[] | cdktf.IResolvable

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
  public get(index: number): KubernetesNodePoolTaintsOutputReference {
    return new KubernetesNodePoolTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesNodePoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#create KubernetesNodePool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#delete KubernetesNodePool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#update KubernetesNodePool#update}
  */
  readonly update?: string;
}

export function kubernetesNodePoolTimeoutsToTerraform(struct?: KubernetesNodePoolTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function kubernetesNodePoolTimeoutsToHclTerraform(struct?: KubernetesNodePoolTimeouts | cdktf.IResolvable): any {
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
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesNodePoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KubernetesNodePoolTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodePoolTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool samsungcloudplatform_kubernetes_node_pool}
*/
export class KubernetesNodePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_kubernetes_node_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesNodePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesNodePool to import
  * @param importFromId The id of the existing KubernetesNodePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesNodePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_kubernetes_node_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_node_pool samsungcloudplatform_kubernetes_node_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesNodePoolConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesNodePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_kubernetes_node_pool',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRecovery = config.autoRecovery;
    this._autoScale = config.autoScale;
    this._availabilityZoneName = config.availabilityZoneName;
    this._desiredNodeCount = config.desiredNodeCount;
    this._encryptEnabled = config.encryptEnabled;
    this._engineId = config.engineId;
    this._id = config.id;
    this._imageId = config.imageId;
    this._maxNodeCount = config.maxNodeCount;
    this._minNodeCount = config.minNodeCount;
    this._name = config.name;
    this._scaleName = config.scaleName;
    this._storageName = config.storageName;
    this._storageSizeGb = config.storageSizeGb;
    this._advancedSettings.internalValue = config.advancedSettings;
    this._labels.internalValue = config.labels;
    this._taints.internalValue = config.taints;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_recovery - computed: true, optional: true, required: false
  private _autoRecovery?: boolean | cdktf.IResolvable; 
  public get autoRecovery() {
    return this.getBooleanAttribute('auto_recovery');
  }
  public set autoRecovery(value: boolean | cdktf.IResolvable) {
    this._autoRecovery = value;
  }
  public resetAutoRecovery() {
    this._autoRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRecoveryInput() {
    return this._autoRecovery;
  }

  // auto_scale - computed: true, optional: true, required: false
  private _autoScale?: boolean | cdktf.IResolvable; 
  public get autoScale() {
    return this.getBooleanAttribute('auto_scale');
  }
  public set autoScale(value: boolean | cdktf.IResolvable) {
    this._autoScale = value;
  }
  public resetAutoScale() {
    this._autoScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScaleInput() {
    return this._autoScale;
  }

  // availability_zone_name - computed: false, optional: true, required: false
  private _availabilityZoneName?: string; 
  public get availabilityZoneName() {
    return this.getStringAttribute('availability_zone_name');
  }
  public set availabilityZoneName(value: string) {
    this._availabilityZoneName = value;
  }
  public resetAvailabilityZoneName() {
    this._availabilityZoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneNameInput() {
    return this._availabilityZoneName;
  }

  // desired_node_count - computed: false, optional: true, required: false
  private _desiredNodeCount?: number; 
  public get desiredNodeCount() {
    return this.getNumberAttribute('desired_node_count');
  }
  public set desiredNodeCount(value: number) {
    this._desiredNodeCount = value;
  }
  public resetDesiredNodeCount() {
    this._desiredNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredNodeCountInput() {
    return this._desiredNodeCount;
  }

  // encrypt_enabled - computed: true, optional: true, required: false
  private _encryptEnabled?: boolean | cdktf.IResolvable; 
  public get encryptEnabled() {
    return this.getBooleanAttribute('encrypt_enabled');
  }
  public set encryptEnabled(value: boolean | cdktf.IResolvable) {
    this._encryptEnabled = value;
  }
  public resetEncryptEnabled() {
    this._encryptEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptEnabledInput() {
    return this._encryptEnabled;
  }

  // engine_id - computed: false, optional: false, required: true
  private _engineId?: string; 
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }
  public set engineId(value: string) {
    this._engineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineIdInput() {
    return this._engineId;
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

  // max_node_count - computed: true, optional: true, required: false
  private _maxNodeCount?: number; 
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }
  public set maxNodeCount(value: number) {
    this._maxNodeCount = value;
  }
  public resetMaxNodeCount() {
    this._maxNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeCountInput() {
    return this._maxNodeCount;
  }

  // min_node_count - computed: true, optional: true, required: false
  private _minNodeCount?: number; 
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }
  public set minNodeCount(value: number) {
    this._minNodeCount = value;
  }
  public resetMinNodeCount() {
    this._minNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCountInput() {
    return this._minNodeCount;
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

  // scale_name - computed: false, optional: true, required: false
  private _scaleName?: string; 
  public get scaleName() {
    return this.getStringAttribute('scale_name');
  }
  public set scaleName(value: string) {
    this._scaleName = value;
  }
  public resetScaleName() {
    this._scaleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleNameInput() {
    return this._scaleName;
  }

  // storage_name - computed: false, optional: true, required: false
  private _storageName?: string; 
  public get storageName() {
    return this.getStringAttribute('storage_name');
  }
  public set storageName(value: string) {
    this._storageName = value;
  }
  public resetStorageName() {
    this._storageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageNameInput() {
    return this._storageName;
  }

  // storage_size_gb - computed: false, optional: true, required: false
  private _storageSizeGb?: string; 
  public get storageSizeGb() {
    return this.getStringAttribute('storage_size_gb');
  }
  public set storageSizeGb(value: string) {
    this._storageSizeGb = value;
  }
  public resetStorageSizeGb() {
    this._storageSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeGbInput() {
    return this._storageSizeGb;
  }

  // advanced_settings - computed: false, optional: true, required: false
  private _advancedSettings = new KubernetesNodePoolAdvancedSettingsList(this, "advanced_settings", true);
  public get advancedSettings() {
    return this._advancedSettings;
  }
  public putAdvancedSettings(value: KubernetesNodePoolAdvancedSettings[] | cdktf.IResolvable) {
    this._advancedSettings.internalValue = value;
  }
  public resetAdvancedSettings() {
    this._advancedSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSettingsInput() {
    return this._advancedSettings.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new KubernetesNodePoolLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: KubernetesNodePoolLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new KubernetesNodePoolTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: KubernetesNodePoolTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KubernetesNodePoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KubernetesNodePoolTimeouts) {
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
      auto_recovery: cdktf.booleanToTerraform(this._autoRecovery),
      auto_scale: cdktf.booleanToTerraform(this._autoScale),
      availability_zone_name: cdktf.stringToTerraform(this._availabilityZoneName),
      desired_node_count: cdktf.numberToTerraform(this._desiredNodeCount),
      encrypt_enabled: cdktf.booleanToTerraform(this._encryptEnabled),
      engine_id: cdktf.stringToTerraform(this._engineId),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      max_node_count: cdktf.numberToTerraform(this._maxNodeCount),
      min_node_count: cdktf.numberToTerraform(this._minNodeCount),
      name: cdktf.stringToTerraform(this._name),
      scale_name: cdktf.stringToTerraform(this._scaleName),
      storage_name: cdktf.stringToTerraform(this._storageName),
      storage_size_gb: cdktf.stringToTerraform(this._storageSizeGb),
      advanced_settings: cdktf.listMapper(kubernetesNodePoolAdvancedSettingsToTerraform, true)(this._advancedSettings.internalValue),
      labels: cdktf.listMapper(kubernetesNodePoolLabelsToTerraform, true)(this._labels.internalValue),
      taints: cdktf.listMapper(kubernetesNodePoolTaintsToTerraform, true)(this._taints.internalValue),
      timeouts: kubernetesNodePoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_recovery: {
        value: cdktf.booleanToHclTerraform(this._autoRecovery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_scale: {
        value: cdktf.booleanToHclTerraform(this._autoScale),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      availability_zone_name: {
        value: cdktf.stringToHclTerraform(this._availabilityZoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desired_node_count: {
        value: cdktf.numberToHclTerraform(this._desiredNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      encrypt_enabled: {
        value: cdktf.booleanToHclTerraform(this._encryptEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      engine_id: {
        value: cdktf.stringToHclTerraform(this._engineId),
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
      max_node_count: {
        value: cdktf.numberToHclTerraform(this._maxNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_node_count: {
        value: cdktf.numberToHclTerraform(this._minNodeCount),
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
      scale_name: {
        value: cdktf.stringToHclTerraform(this._scaleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_name: {
        value: cdktf.stringToHclTerraform(this._storageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_size_gb: {
        value: cdktf.stringToHclTerraform(this._storageSizeGb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advanced_settings: {
        value: cdktf.listMapperHcl(kubernetesNodePoolAdvancedSettingsToHclTerraform, true)(this._advancedSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KubernetesNodePoolAdvancedSettingsList",
      },
      labels: {
        value: cdktf.listMapperHcl(kubernetesNodePoolLabelsToHclTerraform, true)(this._labels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesNodePoolLabelsList",
      },
      taints: {
        value: cdktf.listMapperHcl(kubernetesNodePoolTaintsToHclTerraform, true)(this._taints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesNodePoolTaintsList",
      },
      timeouts: {
        value: kubernetesNodePoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KubernetesNodePoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
