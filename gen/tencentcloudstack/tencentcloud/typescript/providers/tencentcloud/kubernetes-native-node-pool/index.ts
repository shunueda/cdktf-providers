// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesNativeNodePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#cluster_id KubernetesNativeNodePool#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Whether to enable deletion protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#deletion_protection KubernetesNativeNodePool#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#id KubernetesNativeNodePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Node pool name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#name KubernetesNativeNodePool#name}
  */
  readonly name: string;
  /**
  * Node pool type. Optional value is `Native`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#type KubernetesNativeNodePool#type}
  */
  readonly type: string;
  /**
  * Whether the node is not schedulable by default. The native node is not aware of it and passes false by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#unschedulable KubernetesNativeNodePool#unschedulable}
  */
  readonly unschedulable?: boolean | cdktf.IResolvable;
  /**
  * annotations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#annotations KubernetesNativeNodePool#annotations}
  */
  readonly annotations?: KubernetesNativeNodePoolAnnotations[] | cdktf.IResolvable;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#labels KubernetesNativeNodePool#labels}
  */
  readonly labels?: KubernetesNativeNodePoolLabels[] | cdktf.IResolvable;
  /**
  * native block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#native KubernetesNativeNodePool#native}
  */
  readonly native: KubernetesNativeNodePoolNative;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#tags KubernetesNativeNodePool#tags}
  */
  readonly tags?: KubernetesNativeNodePoolTags[] | cdktf.IResolvable;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#taints KubernetesNativeNodePool#taints}
  */
  readonly taints?: KubernetesNativeNodePoolTaints[] | cdktf.IResolvable;
}
export interface KubernetesNativeNodePoolAnnotations {
  /**
  * Name in the map table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#name KubernetesNativeNodePool#name}
  */
  readonly name: string;
  /**
  * Value in the map table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#value KubernetesNativeNodePool#value}
  */
  readonly value: string;
}

export function kubernetesNativeNodePoolAnnotationsToTerraform(struct?: KubernetesNativeNodePoolAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function kubernetesNativeNodePoolAnnotationsToHclTerraform(struct?: KubernetesNativeNodePoolAnnotations | cdktf.IResolvable): any {
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

export class KubernetesNativeNodePoolAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesNativeNodePoolAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNativeNodePoolAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class KubernetesNativeNodePoolAnnotationsList extends cdktf.ComplexList {
  public internalValue? : KubernetesNativeNodePoolAnnotations[] | cdktf.IResolvable

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
  public get(index: number): KubernetesNativeNodePoolAnnotationsOutputReference {
    return new KubernetesNativeNodePoolAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesNativeNodePoolLabels {
  /**
  * Name in the map table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#name KubernetesNativeNodePool#name}
  */
  readonly name: string;
  /**
  * Value in map table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#value KubernetesNativeNodePool#value}
  */
  readonly value: string;
}

export function kubernetesNativeNodePoolLabelsToTerraform(struct?: KubernetesNativeNodePoolLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function kubernetesNativeNodePoolLabelsToHclTerraform(struct?: KubernetesNativeNodePoolLabels | cdktf.IResolvable): any {
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

export class KubernetesNativeNodePoolLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesNativeNodePoolLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNativeNodePoolLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class KubernetesNativeNodePoolLabelsList extends cdktf.ComplexList {
  public internalValue? : KubernetesNativeNodePoolLabels[] | cdktf.IResolvable

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
  public get(index: number): KubernetesNativeNodePoolLabelsOutputReference {
    return new KubernetesNativeNodePoolLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesNativeNodePoolNativeDataDisks {
  /**
  * Whether to automatically format the disk and mount it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#auto_format_and_mount KubernetesNativeNodePool#auto_format_and_mount}
  */
  readonly autoFormatAndMount: boolean | cdktf.IResolvable;
  /**
  * Mount device name or partition name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#disk_partition KubernetesNativeNodePool#disk_partition}
  */
  readonly diskPartition?: string;
  /**
  * Cloud disk size (G).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#disk_size KubernetesNativeNodePool#disk_size}
  */
  readonly diskSize: number;
  /**
  * Cloud disk type. Valid values: `CLOUD_PREMIUM`: Premium Cloud Storage, `CLOUD_SSD`: cloud SSD disk, `CLOUD_BSSD`: Basic SSD, `CLOUD_HSSD`: Enhanced SSD, `CLOUD_TSSD`: Tremendous SSD, `LOCAL_NVME`: local NVME disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#disk_type KubernetesNativeNodePool#disk_type}
  */
  readonly diskType: string;
  /**
  * Pass in this parameter to create an encrypted cloud disk. The value is fixed to `ENCRYPT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#encrypt KubernetesNativeNodePool#encrypt}
  */
  readonly encrypt?: string;
  /**
  * File system (ext3/ext4/xfs).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#file_system KubernetesNativeNodePool#file_system}
  */
  readonly fileSystem?: string;
  /**
  * Customize the key when purchasing an encrypted disk. When this parameter is passed in, the Encrypt parameter is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#kms_key_id KubernetesNativeNodePool#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Mount directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#mount_target KubernetesNativeNodePool#mount_target}
  */
  readonly mountTarget?: string;
  /**
  * Snapshot ID. If passed in, the cloud disk will be created based on this snapshot. The snapshot type must be a data disk snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#snapshot_id KubernetesNativeNodePool#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Cloud disk performance, unit: MB/s. Use this parameter to purchase additional performance for the cloud disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#throughput_performance KubernetesNativeNodePool#throughput_performance}
  */
  readonly throughputPerformance?: number;
}

export function kubernetesNativeNodePoolNativeDataDisksToTerraform(struct?: KubernetesNativeNodePoolNativeDataDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_format_and_mount: cdktf.booleanToTerraform(struct!.autoFormatAndMount),
    disk_partition: cdktf.stringToTerraform(struct!.diskPartition),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    encrypt: cdktf.stringToTerraform(struct!.encrypt),
    file_system: cdktf.stringToTerraform(struct!.fileSystem),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    mount_target: cdktf.stringToTerraform(struct!.mountTarget),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    throughput_performance: cdktf.numberToTerraform(struct!.throughputPerformance),
  }
}


export function kubernetesNativeNodePoolNativeDataDisksToHclTerraform(struct?: KubernetesNativeNodePoolNativeDataDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_format_and_mount: {
      value: cdktf.booleanToHclTerraform(struct!.autoFormatAndMount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disk_partition: {
      value: cdktf.stringToHclTerraform(struct!.diskPartition),
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
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypt: {
      value: cdktf.stringToHclTerraform(struct!.encrypt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system: {
      value: cdktf.stringToHclTerraform(struct!.fileSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_target: {
      value: cdktf.stringToHclTerraform(struct!.mountTarget),
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
    throughput_performance: {
      value: cdktf.numberToHclTerraform(struct!.throughputPerformance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesNativeNodePoolNativeDataDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesNativeNodePoolNativeDataDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoFormatAndMount !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoFormatAndMount = this._autoFormatAndMount;
    }
    if (this._diskPartition !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskPartition = this._diskPartition;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._encrypt !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypt = this._encrypt;
    }
    if (this._fileSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystem = this._fileSystem;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._mountTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountTarget = this._mountTarget;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    if (this._throughputPerformance !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughputPerformance = this._throughputPerformance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNativeNodePoolNativeDataDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoFormatAndMount = undefined;
      this._diskPartition = undefined;
      this._diskSize = undefined;
      this._diskType = undefined;
      this._encrypt = undefined;
      this._fileSystem = undefined;
      this._kmsKeyId = undefined;
      this._mountTarget = undefined;
      this._snapshotId = undefined;
      this._throughputPerformance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoFormatAndMount = value.autoFormatAndMount;
      this._diskPartition = value.diskPartition;
      this._diskSize = value.diskSize;
      this._diskType = value.diskType;
      this._encrypt = value.encrypt;
      this._fileSystem = value.fileSystem;
      this._kmsKeyId = value.kmsKeyId;
      this._mountTarget = value.mountTarget;
      this._snapshotId = value.snapshotId;
      this._throughputPerformance = value.throughputPerformance;
    }
  }

  // auto_format_and_mount - computed: false, optional: false, required: true
  private _autoFormatAndMount?: boolean | cdktf.IResolvable; 
  public get autoFormatAndMount() {
    return this.getBooleanAttribute('auto_format_and_mount');
  }
  public set autoFormatAndMount(value: boolean | cdktf.IResolvable) {
    this._autoFormatAndMount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFormatAndMountInput() {
    return this._autoFormatAndMount;
  }

  // disk_partition - computed: false, optional: true, required: false
  private _diskPartition?: string; 
  public get diskPartition() {
    return this.getStringAttribute('disk_partition');
  }
  public set diskPartition(value: string) {
    this._diskPartition = value;
  }
  public resetDiskPartition() {
    this._diskPartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskPartitionInput() {
    return this._diskPartition;
  }

  // disk_size - computed: false, optional: false, required: true
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: false, required: true
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // encrypt - computed: false, optional: true, required: false
  private _encrypt?: string; 
  public get encrypt() {
    return this.getStringAttribute('encrypt');
  }
  public set encrypt(value: string) {
    this._encrypt = value;
  }
  public resetEncrypt() {
    this._encrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptInput() {
    return this._encrypt;
  }

  // file_system - computed: false, optional: true, required: false
  private _fileSystem?: string; 
  public get fileSystem() {
    return this.getStringAttribute('file_system');
  }
  public set fileSystem(value: string) {
    this._fileSystem = value;
  }
  public resetFileSystem() {
    this._fileSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemInput() {
    return this._fileSystem;
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

  // mount_target - computed: false, optional: true, required: false
  private _mountTarget?: string; 
  public get mountTarget() {
    return this.getStringAttribute('mount_target');
  }
  public set mountTarget(value: string) {
    this._mountTarget = value;
  }
  public resetMountTarget() {
    this._mountTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountTargetInput() {
    return this._mountTarget;
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

  // throughput_performance - computed: false, optional: true, required: false
  private _throughputPerformance?: number; 
  public get throughputPerformance() {
    return this.getNumberAttribute('throughput_performance');
  }
  public set throughputPerformance(value: number) {
    this._throughputPerformance = value;
  }
  public resetThroughputPerformance() {
    this._throughputPerformance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputPerformanceInput() {
    return this._throughputPerformance;
  }
}

export class KubernetesNativeNodePoolNativeDataDisksList extends cdktf.ComplexList {
  public internalValue? : KubernetesNativeNodePoolNativeDataDisks[] | cdktf.IResolvable

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
  public get(index: number): KubernetesNativeNodePoolNativeDataDisksOutputReference {
    return new KubernetesNativeNodePoolNativeDataDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesNativeNodePoolNativeInstanceChargePrepaid {
  /**
  * Postpaid billing cycle, unit (month): 1, 2, 3, 4, 5,, 6, 7, 8, 9, 10, 11, 12, 24, 36, 48, 60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#period KubernetesNativeNodePool#period}
  */
  readonly period: number;
  /**
  * Prepaid renewal method:
  *   - `NOTIFY_AND_AUTO_RENEW`: Notify users of expiration and automatically renew (default).
  *   - `NOTIFY_AND_MANUAL_RENEW`: Notify users of expiration, but do not automatically renew.
  *   - `DISABLE_NOTIFY_AND_MANUAL_RENEW`: Do not notify users of expiration and do not automatically renew.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#renew_flag KubernetesNativeNodePool#renew_flag}
  */
  readonly renewFlag?: string;
}

export function kubernetesNativeNodePoolNativeInstanceChargePrepaidToTerraform(struct?: KubernetesNativeNodePoolNativeInstanceChargePrepaidOutputReference | KubernetesNativeNodePoolNativeInstanceChargePrepaid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    period: cdktf.numberToTerraform(struct!.period),
    renew_flag: cdktf.stringToTerraform(struct!.renewFlag),
  }
}


export function kubernetesNativeNodePoolNativeInstanceChargePrepaidToHclTerraform(struct?: KubernetesNativeNodePoolNativeInstanceChargePrepaidOutputReference | KubernetesNativeNodePoolNativeInstanceChargePrepaid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    renew_flag: {
      value: cdktf.stringToHclTerraform(struct!.renewFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesNativeNodePoolNativeInstanceChargePrepaidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesNativeNodePoolNativeInstanceChargePrepaid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._renewFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewFlag = this._renewFlag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNativeNodePoolNativeInstanceChargePrepaid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._period = undefined;
      this._renewFlag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._period = value.period;
      this._renewFlag = value.renewFlag;
    }
  }

  // period - computed: false, optional: false, required: true
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // renew_flag - computed: false, optional: true, required: false
  private _renewFlag?: string; 
  public get renewFlag() {
    return this.getStringAttribute('renew_flag');
  }
  public set renewFlag(value: string) {
    this._renewFlag = value;
  }
  public resetRenewFlag() {
    this._renewFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewFlagInput() {
    return this._renewFlag;
  }
}
export interface KubernetesNativeNodePoolNativeInternetAccessible {
  /**
  * Bandwidth package ID. Note: When ChargeType is BANDWIDTH_PACKAG, the value cannot be empty; otherwise, the value must be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#bandwidth_package_id KubernetesNativeNodePool#bandwidth_package_id}
  */
  readonly bandwidthPackageId?: string;
  /**
  * Network billing method. Optional value is `TRAFFIC_POSTPAID_BY_HOUR`, `BANDWIDTH_POSTPAID_BY_HOUR` and `BANDWIDTH_PACKAGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#charge_type KubernetesNativeNodePool#charge_type}
  */
  readonly chargeType: string;
  /**
  * Maximum bandwidth output. Note: When chargeType is `TRAFFIC_POSTPAID_BY_HOUR` and `BANDWIDTH_POSTPAID_BY_HOUR`, the valid range is 1~100. When chargeType is `BANDWIDTH_PACKAG`, the valid range is 1~2000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#max_bandwidth_out KubernetesNativeNodePool#max_bandwidth_out}
  */
  readonly maxBandwidthOut: number;
}

export function kubernetesNativeNodePoolNativeInternetAccessibleToTerraform(struct?: KubernetesNativeNodePoolNativeInternetAccessibleOutputReference | KubernetesNativeNodePoolNativeInternetAccessible): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth_package_id: cdktf.stringToTerraform(struct!.bandwidthPackageId),
    charge_type: cdktf.stringToTerraform(struct!.chargeType),
    max_bandwidth_out: cdktf.numberToTerraform(struct!.maxBandwidthOut),
  }
}


export function kubernetesNativeNodePoolNativeInternetAccessibleToHclTerraform(struct?: KubernetesNativeNodePoolNativeInternetAccessibleOutputReference | KubernetesNativeNodePoolNativeInternetAccessible): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth_package_id: {
      value: cdktf.stringToHclTerraform(struct!.bandwidthPackageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    charge_type: {
      value: cdktf.stringToHclTerraform(struct!.chargeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_bandwidth_out: {
      value: cdktf.numberToHclTerraform(struct!.maxBandwidthOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesNativeNodePoolNativeInternetAccessibleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesNativeNodePoolNativeInternetAccessible | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidthPackageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthPackageId = this._bandwidthPackageId;
    }
    if (this._chargeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.chargeType = this._chargeType;
    }
    if (this._maxBandwidthOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBandwidthOut = this._maxBandwidthOut;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNativeNodePoolNativeInternetAccessible | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bandwidthPackageId = undefined;
      this._chargeType = undefined;
      this._maxBandwidthOut = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bandwidthPackageId = value.bandwidthPackageId;
      this._chargeType = value.chargeType;
      this._maxBandwidthOut = value.maxBandwidthOut;
    }
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

  // charge_type - computed: false, optional: false, required: true
  private _chargeType?: string; 
  public get chargeType() {
    return this.getStringAttribute('charge_type');
  }
  public set chargeType(value: string) {
    this._chargeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chargeTypeInput() {
    return this._chargeType;
  }

  // max_bandwidth_out - computed: false, optional: false, required: true
  private _maxBandwidthOut?: number; 
  public get maxBandwidthOut() {
    return this.getNumberAttribute('max_bandwidth_out');
  }
  public set maxBandwidthOut(value: number) {
    this._maxBandwidthOut = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBandwidthOutInput() {
    return this._maxBandwidthOut;
  }
}
export interface KubernetesNativeNodePoolNativeLifecycle {
  /**
  * Custom script after node initialization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#post_init KubernetesNativeNodePool#post_init}
  */
  readonly postInit?: string;
  /**
  * Custom script before node initialization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#pre_init KubernetesNativeNodePool#pre_init}
  */
  readonly preInit?: string;
}

export function kubernetesNativeNodePoolNativeLifecycleToTerraform(struct?: KubernetesNativeNodePoolNativeLifecycleOutputReference | KubernetesNativeNodePoolNativeLifecycle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    post_init: cdktf.stringToTerraform(struct!.postInit),
    pre_init: cdktf.stringToTerraform(struct!.preInit),
  }
}


export function kubernetesNativeNodePoolNativeLifecycleToHclTerraform(struct?: KubernetesNativeNodePoolNativeLifecycleOutputReference | KubernetesNativeNodePoolNativeLifecycle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    post_init: {
      value: cdktf.stringToHclTerraform(struct!.postInit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_init: {
      value: cdktf.stringToHclTerraform(struct!.preInit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesNativeNodePoolNativeLifecycleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesNativeNodePoolNativeLifecycle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.postInit = this._postInit;
    }
    if (this._preInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.preInit = this._preInit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNativeNodePoolNativeLifecycle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._postInit = undefined;
      this._preInit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._postInit = value.postInit;
      this._preInit = value.preInit;
    }
  }

  // post_init - computed: false, optional: true, required: false
  private _postInit?: string; 
  public get postInit() {
    return this.getStringAttribute('post_init');
  }
  public set postInit(value: string) {
    this._postInit = value;
  }
  public resetPostInit() {
    this._postInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postInitInput() {
    return this._postInit;
  }

  // pre_init - computed: false, optional: true, required: false
  private _preInit?: string; 
  public get preInit() {
    return this.getStringAttribute('pre_init');
  }
  public set preInit(value: string) {
    this._preInit = value;
  }
  public resetPreInit() {
    this._preInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preInitInput() {
    return this._preInit;
  }
}
export interface KubernetesNativeNodePoolNativeManagement {
  /**
  * Hosts configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#hosts KubernetesNativeNodePool#hosts}
  */
  readonly hosts?: string[];
  /**
  * Kernel parameter configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#kernel_args KubernetesNativeNodePool#kernel_args}
  */
  readonly kernelArgs?: string[];
  /**
  * Dns configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#nameservers KubernetesNativeNodePool#nameservers}
  */
  readonly nameservers?: string[];
}

export function kubernetesNativeNodePoolNativeManagementToTerraform(struct?: KubernetesNativeNodePoolNativeManagementOutputReference | KubernetesNativeNodePoolNativeManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    kernel_args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kernelArgs),
    nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nameservers),
  }
}


export function kubernetesNativeNodePoolNativeManagementToHclTerraform(struct?: KubernetesNativeNodePoolNativeManagementOutputReference | KubernetesNativeNodePoolNativeManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kernel_args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kernelArgs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    nameservers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nameservers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesNativeNodePoolNativeManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesNativeNodePoolNativeManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._kernelArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelArgs = this._kernelArgs;
    }
    if (this._nameservers !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameservers = this._nameservers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNativeNodePoolNativeManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hosts = undefined;
      this._kernelArgs = undefined;
      this._nameservers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hosts = value.hosts;
      this._kernelArgs = value.kernelArgs;
      this._nameservers = value.nameservers;
    }
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // kernel_args - computed: false, optional: true, required: false
  private _kernelArgs?: string[]; 
  public get kernelArgs() {
    return this.getListAttribute('kernel_args');
  }
  public set kernelArgs(value: string[]) {
    this._kernelArgs = value;
  }
  public resetKernelArgs() {
    this._kernelArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelArgsInput() {
    return this._kernelArgs;
  }

  // nameservers - computed: true, optional: true, required: false
  private _nameservers?: string[]; 
  public get nameservers() {
    return this.getListAttribute('nameservers');
  }
  public set nameservers(value: string[]) {
    this._nameservers = value;
  }
  public resetNameservers() {
    this._nameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers;
  }
}
export interface KubernetesNativeNodePoolNativeScaling {
  /**
  * Node pool expansion strategy. `ZoneEquality`: multiple availability zones are broken up; `ZonePriority`: the preferred availability zone takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#create_policy KubernetesNativeNodePool#create_policy}
  */
  readonly createPolicy?: string;
  /**
  * Maximum number of replicas in node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#max_replicas KubernetesNativeNodePool#max_replicas}
  */
  readonly maxReplicas?: number;
  /**
  * Minimum number of replicas in node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#min_replicas KubernetesNativeNodePool#min_replicas}
  */
  readonly minReplicas?: number;
}

export function kubernetesNativeNodePoolNativeScalingToTerraform(struct?: KubernetesNativeNodePoolNativeScalingOutputReference | KubernetesNativeNodePoolNativeScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_policy: cdktf.stringToTerraform(struct!.createPolicy),
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
  }
}


export function kubernetesNativeNodePoolNativeScalingToHclTerraform(struct?: KubernetesNativeNodePoolNativeScalingOutputReference | KubernetesNativeNodePoolNativeScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_policy: {
      value: cdktf.stringToHclTerraform(struct!.createPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class KubernetesNativeNodePoolNativeScalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesNativeNodePoolNativeScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.createPolicy = this._createPolicy;
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

  public set internalValue(value: KubernetesNativeNodePoolNativeScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createPolicy = undefined;
      this._maxReplicas = undefined;
      this._minReplicas = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createPolicy = value.createPolicy;
      this._maxReplicas = value.maxReplicas;
      this._minReplicas = value.minReplicas;
    }
  }

  // create_policy - computed: true, optional: true, required: false
  private _createPolicy?: string; 
  public get createPolicy() {
    return this.getStringAttribute('create_policy');
  }
  public set createPolicy(value: string) {
    this._createPolicy = value;
  }
  public resetCreatePolicy() {
    this._createPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPolicyInput() {
    return this._createPolicy;
  }

  // max_replicas - computed: true, optional: true, required: false
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

  // min_replicas - computed: true, optional: true, required: false
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
export interface KubernetesNativeNodePoolNativeSystemDisk {
  /**
  * Cloud disk size (G).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#disk_size KubernetesNativeNodePool#disk_size}
  */
  readonly diskSize: number;
  /**
  * Cloud disk type. Valid values: `CLOUD_PREMIUM`: Premium Cloud Storage, `CLOUD_SSD`: cloud SSD disk, `CLOUD_BSSD`: Basic SSD, `CLOUD_HSSD`: Enhanced SSD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#disk_type KubernetesNativeNodePool#disk_type}
  */
  readonly diskType: string;
}

export function kubernetesNativeNodePoolNativeSystemDiskToTerraform(struct?: KubernetesNativeNodePoolNativeSystemDiskOutputReference | KubernetesNativeNodePoolNativeSystemDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
  }
}


export function kubernetesNativeNodePoolNativeSystemDiskToHclTerraform(struct?: KubernetesNativeNodePoolNativeSystemDiskOutputReference | KubernetesNativeNodePoolNativeSystemDisk): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesNativeNodePoolNativeSystemDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesNativeNodePoolNativeSystemDisk | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNativeNodePoolNativeSystemDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskSize = undefined;
      this._diskType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskSize = value.diskSize;
      this._diskType = value.diskType;
    }
  }

  // disk_size - computed: false, optional: false, required: true
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: false, required: true
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }
}
export interface KubernetesNativeNodePoolNative {
  /**
  * Whether to enable self-healing ability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#auto_repair KubernetesNativeNodePool#auto_repair}
  */
  readonly autoRepair?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable elastic scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#enable_autoscaling KubernetesNativeNodePool#enable_autoscaling}
  */
  readonly enableAutoscaling?: boolean | cdktf.IResolvable;
  /**
  * Fault self-healing rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#health_check_policy_name KubernetesNativeNodePool#health_check_policy_name}
  */
  readonly healthCheckPolicyName?: string;
  /**
  * Native node pool hostName pattern string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#host_name_pattern KubernetesNativeNodePool#host_name_pattern}
  */
  readonly hostNamePattern?: string;
  /**
  * Node billing type. `PREPAID` is a yearly and monthly subscription, `POSTPAID_BY_HOUR` is a pay-as-you-go plan. The default is `POSTPAID_BY_HOUR`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#instance_charge_type KubernetesNativeNodePool#instance_charge_type}
  */
  readonly instanceChargeType: string;
  /**
  * Model list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#instance_types KubernetesNativeNodePool#instance_types}
  */
  readonly instanceTypes: string[];
  /**
  * Node pool ssh public key id array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#key_ids KubernetesNativeNodePool#key_ids}
  */
  readonly keyIds?: string[];
  /**
  * Kubelet custom parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#kubelet_args KubernetesNativeNodePool#kubelet_args}
  */
  readonly kubeletArgs?: string[];
  /**
  * Node pool type. Example value: `NativeCVM` or `Native`. Default is `Native`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#machine_type KubernetesNativeNodePool#machine_type}
  */
  readonly machineType?: string;
  /**
  * Desired number of nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#replicas KubernetesNativeNodePool#replicas}
  */
  readonly replicas?: number;
  /**
  * Runtime root directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#runtime_root_dir KubernetesNativeNodePool#runtime_root_dir}
  */
  readonly runtimeRootDir?: string;
  /**
  * Security group list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#security_group_ids KubernetesNativeNodePool#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Subnet list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#subnet_ids KubernetesNativeNodePool#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * data_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#data_disks KubernetesNativeNodePool#data_disks}
  */
  readonly dataDisks?: KubernetesNativeNodePoolNativeDataDisks[] | cdktf.IResolvable;
  /**
  * instance_charge_prepaid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#instance_charge_prepaid KubernetesNativeNodePool#instance_charge_prepaid}
  */
  readonly instanceChargePrepaid?: KubernetesNativeNodePoolNativeInstanceChargePrepaid;
  /**
  * internet_accessible block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#internet_accessible KubernetesNativeNodePool#internet_accessible}
  */
  readonly internetAccessible?: KubernetesNativeNodePoolNativeInternetAccessible;
  /**
  * lifecycle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#lifecycle KubernetesNativeNodePool#lifecycle}
  */
  readonly lifecycle?: KubernetesNativeNodePoolNativeLifecycle;
  /**
  * management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#management KubernetesNativeNodePool#management}
  */
  readonly management?: KubernetesNativeNodePoolNativeManagement;
  /**
  * scaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#scaling KubernetesNativeNodePool#scaling}
  */
  readonly scaling?: KubernetesNativeNodePoolNativeScaling;
  /**
  * system_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#system_disk KubernetesNativeNodePool#system_disk}
  */
  readonly systemDisk: KubernetesNativeNodePoolNativeSystemDisk;
}

export function kubernetesNativeNodePoolNativeToTerraform(struct?: KubernetesNativeNodePoolNativeOutputReference | KubernetesNativeNodePoolNative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_repair: cdktf.booleanToTerraform(struct!.autoRepair),
    enable_autoscaling: cdktf.booleanToTerraform(struct!.enableAutoscaling),
    health_check_policy_name: cdktf.stringToTerraform(struct!.healthCheckPolicyName),
    host_name_pattern: cdktf.stringToTerraform(struct!.hostNamePattern),
    instance_charge_type: cdktf.stringToTerraform(struct!.instanceChargeType),
    instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instanceTypes),
    key_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyIds),
    kubelet_args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kubeletArgs),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    runtime_root_dir: cdktf.stringToTerraform(struct!.runtimeRootDir),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
    data_disks: cdktf.listMapper(kubernetesNativeNodePoolNativeDataDisksToTerraform, true)(struct!.dataDisks),
    instance_charge_prepaid: kubernetesNativeNodePoolNativeInstanceChargePrepaidToTerraform(struct!.instanceChargePrepaid),
    internet_accessible: kubernetesNativeNodePoolNativeInternetAccessibleToTerraform(struct!.internetAccessible),
    lifecycle: kubernetesNativeNodePoolNativeLifecycleToTerraform(struct!.lifecycle),
    management: kubernetesNativeNodePoolNativeManagementToTerraform(struct!.management),
    scaling: kubernetesNativeNodePoolNativeScalingToTerraform(struct!.scaling),
    system_disk: kubernetesNativeNodePoolNativeSystemDiskToTerraform(struct!.systemDisk),
  }
}


export function kubernetesNativeNodePoolNativeToHclTerraform(struct?: KubernetesNativeNodePoolNativeOutputReference | KubernetesNativeNodePoolNative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_repair: {
      value: cdktf.booleanToHclTerraform(struct!.autoRepair),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_autoscaling: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutoscaling),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    health_check_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name_pattern: {
      value: cdktf.stringToHclTerraform(struct!.hostNamePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_charge_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceChargeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instanceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kubelet_args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kubeletArgs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    runtime_root_dir: {
      value: cdktf.stringToHclTerraform(struct!.runtimeRootDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_disks: {
      value: cdktf.listMapperHcl(kubernetesNativeNodePoolNativeDataDisksToHclTerraform, true)(struct!.dataDisks),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesNativeNodePoolNativeDataDisksList",
    },
    instance_charge_prepaid: {
      value: kubernetesNativeNodePoolNativeInstanceChargePrepaidToHclTerraform(struct!.instanceChargePrepaid),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesNativeNodePoolNativeInstanceChargePrepaidList",
    },
    internet_accessible: {
      value: kubernetesNativeNodePoolNativeInternetAccessibleToHclTerraform(struct!.internetAccessible),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesNativeNodePoolNativeInternetAccessibleList",
    },
    lifecycle: {
      value: kubernetesNativeNodePoolNativeLifecycleToHclTerraform(struct!.lifecycle),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesNativeNodePoolNativeLifecycleList",
    },
    management: {
      value: kubernetesNativeNodePoolNativeManagementToHclTerraform(struct!.management),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesNativeNodePoolNativeManagementList",
    },
    scaling: {
      value: kubernetesNativeNodePoolNativeScalingToHclTerraform(struct!.scaling),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesNativeNodePoolNativeScalingList",
    },
    system_disk: {
      value: kubernetesNativeNodePoolNativeSystemDiskToHclTerraform(struct!.systemDisk),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesNativeNodePoolNativeSystemDiskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesNativeNodePoolNativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesNativeNodePoolNative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRepair !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRepair = this._autoRepair;
    }
    if (this._enableAutoscaling !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoscaling = this._enableAutoscaling;
    }
    if (this._healthCheckPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckPolicyName = this._healthCheckPolicyName;
    }
    if (this._hostNamePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNamePattern = this._hostNamePattern;
    }
    if (this._instanceChargeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceChargeType = this._instanceChargeType;
    }
    if (this._instanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTypes = this._instanceTypes;
    }
    if (this._keyIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyIds = this._keyIds;
    }
    if (this._kubeletArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletArgs = this._kubeletArgs;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._runtimeRootDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeRootDir = this._runtimeRootDir;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._dataDisks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDisks = this._dataDisks?.internalValue;
    }
    if (this._instanceChargePrepaid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceChargePrepaid = this._instanceChargePrepaid?.internalValue;
    }
    if (this._internetAccessible?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetAccessible = this._internetAccessible?.internalValue;
    }
    if (this._lifecycle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycle = this._lifecycle?.internalValue;
    }
    if (this._management?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.management = this._management?.internalValue;
    }
    if (this._scaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaling = this._scaling?.internalValue;
    }
    if (this._systemDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemDisk = this._systemDisk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNativeNodePoolNative | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoRepair = undefined;
      this._enableAutoscaling = undefined;
      this._healthCheckPolicyName = undefined;
      this._hostNamePattern = undefined;
      this._instanceChargeType = undefined;
      this._instanceTypes = undefined;
      this._keyIds = undefined;
      this._kubeletArgs = undefined;
      this._machineType = undefined;
      this._replicas = undefined;
      this._runtimeRootDir = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
      this._dataDisks.internalValue = undefined;
      this._instanceChargePrepaid.internalValue = undefined;
      this._internetAccessible.internalValue = undefined;
      this._lifecycle.internalValue = undefined;
      this._management.internalValue = undefined;
      this._scaling.internalValue = undefined;
      this._systemDisk.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoRepair = value.autoRepair;
      this._enableAutoscaling = value.enableAutoscaling;
      this._healthCheckPolicyName = value.healthCheckPolicyName;
      this._hostNamePattern = value.hostNamePattern;
      this._instanceChargeType = value.instanceChargeType;
      this._instanceTypes = value.instanceTypes;
      this._keyIds = value.keyIds;
      this._kubeletArgs = value.kubeletArgs;
      this._machineType = value.machineType;
      this._replicas = value.replicas;
      this._runtimeRootDir = value.runtimeRootDir;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
      this._dataDisks.internalValue = value.dataDisks;
      this._instanceChargePrepaid.internalValue = value.instanceChargePrepaid;
      this._internetAccessible.internalValue = value.internetAccessible;
      this._lifecycle.internalValue = value.lifecycle;
      this._management.internalValue = value.management;
      this._scaling.internalValue = value.scaling;
      this._systemDisk.internalValue = value.systemDisk;
    }
  }

  // auto_repair - computed: false, optional: true, required: false
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

  // enable_autoscaling - computed: false, optional: true, required: false
  private _enableAutoscaling?: boolean | cdktf.IResolvable; 
  public get enableAutoscaling() {
    return this.getBooleanAttribute('enable_autoscaling');
  }
  public set enableAutoscaling(value: boolean | cdktf.IResolvable) {
    this._enableAutoscaling = value;
  }
  public resetEnableAutoscaling() {
    this._enableAutoscaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoscalingInput() {
    return this._enableAutoscaling;
  }

  // health_check_policy_name - computed: false, optional: true, required: false
  private _healthCheckPolicyName?: string; 
  public get healthCheckPolicyName() {
    return this.getStringAttribute('health_check_policy_name');
  }
  public set healthCheckPolicyName(value: string) {
    this._healthCheckPolicyName = value;
  }
  public resetHealthCheckPolicyName() {
    this._healthCheckPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPolicyNameInput() {
    return this._healthCheckPolicyName;
  }

  // host_name_pattern - computed: false, optional: true, required: false
  private _hostNamePattern?: string; 
  public get hostNamePattern() {
    return this.getStringAttribute('host_name_pattern');
  }
  public set hostNamePattern(value: string) {
    this._hostNamePattern = value;
  }
  public resetHostNamePattern() {
    this._hostNamePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNamePatternInput() {
    return this._hostNamePattern;
  }

  // instance_charge_type - computed: false, optional: false, required: true
  private _instanceChargeType?: string; 
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }
  public set instanceChargeType(value: string) {
    this._instanceChargeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypeInput() {
    return this._instanceChargeType;
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

  // kubelet_args - computed: false, optional: true, required: false
  private _kubeletArgs?: string[]; 
  public get kubeletArgs() {
    return this.getListAttribute('kubelet_args');
  }
  public set kubeletArgs(value: string[]) {
    this._kubeletArgs = value;
  }
  public resetKubeletArgs() {
    this._kubeletArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletArgsInput() {
    return this._kubeletArgs;
  }

  // machine_type - computed: true, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // replicas - computed: true, optional: true, required: false
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

  // runtime_root_dir - computed: true, optional: true, required: false
  private _runtimeRootDir?: string; 
  public get runtimeRootDir() {
    return this.getStringAttribute('runtime_root_dir');
  }
  public set runtimeRootDir(value: string) {
    this._runtimeRootDir = value;
  }
  public resetRuntimeRootDir() {
    this._runtimeRootDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeRootDirInput() {
    return this._runtimeRootDir;
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
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

  // data_disks - computed: false, optional: true, required: false
  private _dataDisks = new KubernetesNativeNodePoolNativeDataDisksList(this, "data_disks", false);
  public get dataDisks() {
    return this._dataDisks;
  }
  public putDataDisks(value: KubernetesNativeNodePoolNativeDataDisks[] | cdktf.IResolvable) {
    this._dataDisks.internalValue = value;
  }
  public resetDataDisks() {
    this._dataDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDisksInput() {
    return this._dataDisks.internalValue;
  }

  // instance_charge_prepaid - computed: false, optional: true, required: false
  private _instanceChargePrepaid = new KubernetesNativeNodePoolNativeInstanceChargePrepaidOutputReference(this, "instance_charge_prepaid");
  public get instanceChargePrepaid() {
    return this._instanceChargePrepaid;
  }
  public putInstanceChargePrepaid(value: KubernetesNativeNodePoolNativeInstanceChargePrepaid) {
    this._instanceChargePrepaid.internalValue = value;
  }
  public resetInstanceChargePrepaid() {
    this._instanceChargePrepaid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargePrepaidInput() {
    return this._instanceChargePrepaid.internalValue;
  }

  // internet_accessible - computed: false, optional: true, required: false
  private _internetAccessible = new KubernetesNativeNodePoolNativeInternetAccessibleOutputReference(this, "internet_accessible");
  public get internetAccessible() {
    return this._internetAccessible;
  }
  public putInternetAccessible(value: KubernetesNativeNodePoolNativeInternetAccessible) {
    this._internetAccessible.internalValue = value;
  }
  public resetInternetAccessible() {
    this._internetAccessible.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetAccessibleInput() {
    return this._internetAccessible.internalValue;
  }

  // lifecycle - computed: false, optional: true, required: false
  private _lifecycle = new KubernetesNativeNodePoolNativeLifecycleOutputReference(this, "lifecycle");
  public get lifecycle() {
    return this._lifecycle;
  }
  public putLifecycle(value: KubernetesNativeNodePoolNativeLifecycle) {
    this._lifecycle.internalValue = value;
  }
  public resetLifecycle() {
    this._lifecycle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleInput() {
    return this._lifecycle.internalValue;
  }

  // management - computed: false, optional: true, required: false
  private _management = new KubernetesNativeNodePoolNativeManagementOutputReference(this, "management");
  public get management() {
    return this._management;
  }
  public putManagement(value: KubernetesNativeNodePoolNativeManagement) {
    this._management.internalValue = value;
  }
  public resetManagement() {
    this._management.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management.internalValue;
  }

  // scaling - computed: false, optional: true, required: false
  private _scaling = new KubernetesNativeNodePoolNativeScalingOutputReference(this, "scaling");
  public get scaling() {
    return this._scaling;
  }
  public putScaling(value: KubernetesNativeNodePoolNativeScaling) {
    this._scaling.internalValue = value;
  }
  public resetScaling() {
    this._scaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingInput() {
    return this._scaling.internalValue;
  }

  // system_disk - computed: false, optional: false, required: true
  private _systemDisk = new KubernetesNativeNodePoolNativeSystemDiskOutputReference(this, "system_disk");
  public get systemDisk() {
    return this._systemDisk;
  }
  public putSystemDisk(value: KubernetesNativeNodePoolNativeSystemDisk) {
    this._systemDisk.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskInput() {
    return this._systemDisk.internalValue;
  }
}
export interface KubernetesNativeNodePoolTagsTags {
  /**
  * Tag Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#key KubernetesNativeNodePool#key}
  */
  readonly key?: string;
  /**
  * Tag Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#value KubernetesNativeNodePool#value}
  */
  readonly value?: string;
}

export function kubernetesNativeNodePoolTagsTagsToTerraform(struct?: KubernetesNativeNodePoolTagsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function kubernetesNativeNodePoolTagsTagsToHclTerraform(struct?: KubernetesNativeNodePoolTagsTags | cdktf.IResolvable): any {
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

export class KubernetesNativeNodePoolTagsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesNativeNodePoolTagsTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubernetesNativeNodePoolTagsTags | cdktf.IResolvable | undefined) {
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

export class KubernetesNativeNodePoolTagsTagsList extends cdktf.ComplexList {
  public internalValue? : KubernetesNativeNodePoolTagsTags[] | cdktf.IResolvable

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
  public get(index: number): KubernetesNativeNodePoolTagsTagsOutputReference {
    return new KubernetesNativeNodePoolTagsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesNativeNodePoolTags {
  /**
  * The resource type bound to the label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#resource_type KubernetesNativeNodePool#resource_type}
  */
  readonly resourceType?: string;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#tags KubernetesNativeNodePool#tags}
  */
  readonly tags?: KubernetesNativeNodePoolTagsTags[] | cdktf.IResolvable;
}

export function kubernetesNativeNodePoolTagsToTerraform(struct?: KubernetesNativeNodePoolTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    tags: cdktf.listMapper(kubernetesNativeNodePoolTagsTagsToTerraform, true)(struct!.tags),
  }
}


export function kubernetesNativeNodePoolTagsToHclTerraform(struct?: KubernetesNativeNodePoolTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(kubernetesNativeNodePoolTagsTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesNativeNodePoolTagsTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesNativeNodePoolTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesNativeNodePoolTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNativeNodePoolTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceType = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceType = value.resourceType;
      this._tags.internalValue = value.tags;
    }
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new KubernetesNativeNodePoolTagsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: KubernetesNativeNodePoolTagsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class KubernetesNativeNodePoolTagsList extends cdktf.ComplexList {
  public internalValue? : KubernetesNativeNodePoolTags[] | cdktf.IResolvable

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
  public get(index: number): KubernetesNativeNodePoolTagsOutputReference {
    return new KubernetesNativeNodePoolTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesNativeNodePoolTaints {
  /**
  * Effect of the taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#effect KubernetesNativeNodePool#effect}
  */
  readonly effect?: string;
  /**
  * Key of the taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#key KubernetesNativeNodePool#key}
  */
  readonly key?: string;
  /**
  * Value of the taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#value KubernetesNativeNodePool#value}
  */
  readonly value?: string;
}

export function kubernetesNativeNodePoolTaintsToTerraform(struct?: KubernetesNativeNodePoolTaints | cdktf.IResolvable): any {
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


export function kubernetesNativeNodePoolTaintsToHclTerraform(struct?: KubernetesNativeNodePoolTaints | cdktf.IResolvable): any {
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

export class KubernetesNativeNodePoolTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesNativeNodePoolTaints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubernetesNativeNodePoolTaints | cdktf.IResolvable | undefined) {
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

export class KubernetesNativeNodePoolTaintsList extends cdktf.ComplexList {
  public internalValue? : KubernetesNativeNodePoolTaints[] | cdktf.IResolvable

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
  public get(index: number): KubernetesNativeNodePoolTaintsOutputReference {
    return new KubernetesNativeNodePoolTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool tencentcloud_kubernetes_native_node_pool}
*/
export class KubernetesNativeNodePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_kubernetes_native_node_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesNativeNodePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesNativeNodePool to import
  * @param importFromId The id of the existing KubernetesNativeNodePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesNativeNodePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_kubernetes_native_node_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/kubernetes_native_node_pool tencentcloud_kubernetes_native_node_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesNativeNodePoolConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesNativeNodePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_kubernetes_native_node_pool',
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
    this._clusterId = config.clusterId;
    this._deletionProtection = config.deletionProtection;
    this._id = config.id;
    this._name = config.name;
    this._type = config.type;
    this._unschedulable = config.unschedulable;
    this._annotations.internalValue = config.annotations;
    this._labels.internalValue = config.labels;
    this._native.internalValue = config.native;
    this._tags.internalValue = config.tags;
    this._taints.internalValue = config.taints;
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
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

  // life_state - computed: true, optional: false, required: false
  public get lifeState() {
    return this.getStringAttribute('life_state');
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

  // unschedulable - computed: true, optional: true, required: false
  private _unschedulable?: boolean | cdktf.IResolvable; 
  public get unschedulable() {
    return this.getBooleanAttribute('unschedulable');
  }
  public set unschedulable(value: boolean | cdktf.IResolvable) {
    this._unschedulable = value;
  }
  public resetUnschedulable() {
    this._unschedulable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unschedulableInput() {
    return this._unschedulable;
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations = new KubernetesNativeNodePoolAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: KubernetesNativeNodePoolAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new KubernetesNativeNodePoolLabelsList(this, "labels", true);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: KubernetesNativeNodePoolLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // native - computed: false, optional: false, required: true
  private _native = new KubernetesNativeNodePoolNativeOutputReference(this, "native");
  public get native() {
    return this._native;
  }
  public putNative(value: KubernetesNativeNodePoolNative) {
    this._native.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeInput() {
    return this._native.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new KubernetesNativeNodePoolTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: KubernetesNativeNodePoolTags[] | cdktf.IResolvable) {
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
  private _taints = new KubernetesNativeNodePoolTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: KubernetesNativeNodePoolTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      unschedulable: cdktf.booleanToTerraform(this._unschedulable),
      annotations: cdktf.listMapper(kubernetesNativeNodePoolAnnotationsToTerraform, true)(this._annotations.internalValue),
      labels: cdktf.listMapper(kubernetesNativeNodePoolLabelsToTerraform, true)(this._labels.internalValue),
      native: kubernetesNativeNodePoolNativeToTerraform(this._native.internalValue),
      tags: cdktf.listMapper(kubernetesNativeNodePoolTagsToTerraform, true)(this._tags.internalValue),
      taints: cdktf.listMapper(kubernetesNativeNodePoolTaintsToTerraform, true)(this._taints.internalValue),
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
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unschedulable: {
        value: cdktf.booleanToHclTerraform(this._unschedulable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      annotations: {
        value: cdktf.listMapperHcl(kubernetesNativeNodePoolAnnotationsToHclTerraform, true)(this._annotations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KubernetesNativeNodePoolAnnotationsList",
      },
      labels: {
        value: cdktf.listMapperHcl(kubernetesNativeNodePoolLabelsToHclTerraform, true)(this._labels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KubernetesNativeNodePoolLabelsList",
      },
      native: {
        value: kubernetesNativeNodePoolNativeToHclTerraform(this._native.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesNativeNodePoolNativeList",
      },
      tags: {
        value: cdktf.listMapperHcl(kubernetesNativeNodePoolTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesNativeNodePoolTagsList",
      },
      taints: {
        value: cdktf.listMapperHcl(kubernetesNativeNodePoolTaintsToHclTerraform, true)(this._taints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesNativeNodePoolTaintsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
