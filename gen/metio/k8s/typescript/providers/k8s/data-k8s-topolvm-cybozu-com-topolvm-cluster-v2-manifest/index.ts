// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STopolvmCybozuComTopolvmClusterV2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#metadata DataK8STopolvmCybozuComTopolvmClusterV2Manifest#metadata}
  */
  readonly metadata: DataK8STopolvmCybozuComTopolvmClusterV2ManifestMetadata;
  /**
  * TopolvmClusterSpec defines the desired state of TopolvmCluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#spec DataK8STopolvmCybozuComTopolvmClusterV2Manifest#spec}
  */
  readonly spec?: DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpec;
}
export interface DataK8STopolvmCybozuComTopolvmClusterV2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#annotations DataK8STopolvmCybozuComTopolvmClusterV2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#labels DataK8STopolvmCybozuComTopolvmClusterV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#name DataK8STopolvmCybozuComTopolvmClusterV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#namespace DataK8STopolvmCybozuComTopolvmClusterV2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8STopolvmCybozuComTopolvmClusterV2ManifestMetadataToTerraform(struct?: DataK8STopolvmCybozuComTopolvmClusterV2ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8STopolvmCybozuComTopolvmClusterV2ManifestMetadataToHclTerraform(struct?: DataK8STopolvmCybozuComTopolvmClusterV2ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STopolvmCybozuComTopolvmClusterV2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STopolvmCybozuComTopolvmClusterV2ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STopolvmCybozuComTopolvmClusterV2ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClassesDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#auto DataK8STopolvmCybozuComTopolvmClusterV2Manifest#auto}
  */
  readonly auto?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#name DataK8STopolvmCybozuComTopolvmClusterV2Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#path DataK8STopolvmCybozuComTopolvmClusterV2Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#size DataK8STopolvmCybozuComTopolvmClusterV2Manifest#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#type DataK8STopolvmCybozuComTopolvmClusterV2Manifest#type}
  */
  readonly type: string;
}

export function dataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClassesDevicesToTerraform(struct?: DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClassesDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto: cdktf.booleanToTerraform(struct!.auto),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClassesDevicesToHclTerraform(struct?: DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClassesDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto: {
      value: cdktf.booleanToHclTerraform(struct!.auto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClassesDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClassesDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auto !== undefined) {
      hasAnyValues = true;
      internalValueResult.auto = this._auto;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClassesDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auto = undefined;
      this._name = undefined;
      this._path = undefined;
      this._size = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auto = value.auto;
      this._name = value.name;
      this._path = value.path;
      this._size = value.size;
      this._type = value.type;
    }
  }

  // auto - computed: false, optional: true, required: false
  private _auto?: boolean | cdktf.IResolvable; 
  public get auto() {
    return this.getBooleanAttribute('auto');
  }
  public set auto(value: boolean | cdktf.IResolvable) {
    this._auto = value;
  }
  public resetAuto() {
    this._auto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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

export class DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClassesDevicesList extends cdktf.ComplexList {
  public internalValue? : DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClassesDevices[] | cdktf.IResolvable

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
  public get(index: number): DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClassesDevicesOutputReference {
    return new DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClassesDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#class_name DataK8STopolvmCybozuComTopolvmClusterV2Manifest#class_name}
  */
  readonly className: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#default DataK8STopolvmCybozuComTopolvmClusterV2Manifest#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#devices DataK8STopolvmCybozuComTopolvmClusterV2Manifest#devices}
  */
  readonly devices: DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClassesDevices[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#spare_gb DataK8STopolvmCybozuComTopolvmClusterV2Manifest#spare_gb}
  */
  readonly spareGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#stripe DataK8STopolvmCybozuComTopolvmClusterV2Manifest#stripe}
  */
  readonly stripe?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#stripe_size DataK8STopolvmCybozuComTopolvmClusterV2Manifest#stripe_size}
  */
  readonly stripeSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#volume_group DataK8STopolvmCybozuComTopolvmClusterV2Manifest#volume_group}
  */
  readonly volumeGroup: string;
}

export function dataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClassesToTerraform(struct?: DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_name: cdktf.stringToTerraform(struct!.className),
    default: cdktf.booleanToTerraform(struct!.default),
    devices: cdktf.listMapper(dataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClassesDevicesToTerraform, false)(struct!.devices),
    spare_gb: cdktf.numberToTerraform(struct!.spareGb),
    stripe: cdktf.numberToTerraform(struct!.stripe),
    stripe_size: cdktf.stringToTerraform(struct!.stripeSize),
    volume_group: cdktf.stringToTerraform(struct!.volumeGroup),
  }
}


export function dataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClassesToHclTerraform(struct?: DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_name: {
      value: cdktf.stringToHclTerraform(struct!.className),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktf.booleanToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    devices: {
      value: cdktf.listMapperHcl(dataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClassesDevicesToHclTerraform, false)(struct!.devices),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClassesDevicesList",
    },
    spare_gb: {
      value: cdktf.numberToHclTerraform(struct!.spareGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stripe: {
      value: cdktf.numberToHclTerraform(struct!.stripe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stripe_size: {
      value: cdktf.stringToHclTerraform(struct!.stripeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_group: {
      value: cdktf.stringToHclTerraform(struct!.volumeGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClasses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._className !== undefined) {
      hasAnyValues = true;
      internalValueResult.className = this._className;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._devices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices?.internalValue;
    }
    if (this._spareGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.spareGb = this._spareGb;
    }
    if (this._stripe !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripe = this._stripe;
    }
    if (this._stripeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripeSize = this._stripeSize;
    }
    if (this._volumeGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeGroup = this._volumeGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClasses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._className = undefined;
      this._default = undefined;
      this._devices.internalValue = undefined;
      this._spareGb = undefined;
      this._stripe = undefined;
      this._stripeSize = undefined;
      this._volumeGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._className = value.className;
      this._default = value.default;
      this._devices.internalValue = value.devices;
      this._spareGb = value.spareGb;
      this._stripe = value.stripe;
      this._stripeSize = value.stripeSize;
      this._volumeGroup = value.volumeGroup;
    }
  }

  // class_name - computed: false, optional: false, required: true
  private _className?: string; 
  public get className() {
    return this.getStringAttribute('class_name');
  }
  public set className(value: string) {
    this._className = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classNameInput() {
    return this._className;
  }

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // devices - computed: false, optional: false, required: true
  private _devices = new DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClassesDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }
  public putDevices(value: DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClassesDevices[] | cdktf.IResolvable) {
    this._devices.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }

  // spare_gb - computed: false, optional: true, required: false
  private _spareGb?: number; 
  public get spareGb() {
    return this.getNumberAttribute('spare_gb');
  }
  public set spareGb(value: number) {
    this._spareGb = value;
  }
  public resetSpareGb() {
    this._spareGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spareGbInput() {
    return this._spareGb;
  }

  // stripe - computed: false, optional: true, required: false
  private _stripe?: number; 
  public get stripe() {
    return this.getNumberAttribute('stripe');
  }
  public set stripe(value: number) {
    this._stripe = value;
  }
  public resetStripe() {
    this._stripe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripeInput() {
    return this._stripe;
  }

  // stripe_size - computed: false, optional: true, required: false
  private _stripeSize?: string; 
  public get stripeSize() {
    return this.getStringAttribute('stripe_size');
  }
  public set stripeSize(value: string) {
    this._stripeSize = value;
  }
  public resetStripeSize() {
    this._stripeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripeSizeInput() {
    return this._stripeSize;
  }

  // volume_group - computed: false, optional: false, required: true
  private _volumeGroup?: string; 
  public get volumeGroup() {
    return this.getStringAttribute('volume_group');
  }
  public set volumeGroup(value: string) {
    this._volumeGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupInput() {
    return this._volumeGroup;
  }
}

export class DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClassesList extends cdktf.ComplexList {
  public internalValue? : DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClasses[] | cdktf.IResolvable

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
  public get(index: number): DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClassesOutputReference {
    return new DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#classes DataK8STopolvmCybozuComTopolvmClusterV2Manifest#classes}
  */
  readonly classes: DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClasses[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#node_name DataK8STopolvmCybozuComTopolvmClusterV2Manifest#node_name}
  */
  readonly nodeName: string;
}

export function dataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesToTerraform(struct?: DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classes: cdktf.listMapper(dataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClassesToTerraform, false)(struct!.classes),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
  }
}


export function dataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesToHclTerraform(struct?: DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classes: {
      value: cdktf.listMapperHcl(dataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClassesToHclTerraform, false)(struct!.classes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClassesList",
    },
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClasses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classes = this._classes?.internalValue;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClasses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classes.internalValue = undefined;
      this._nodeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classes.internalValue = value.classes;
      this._nodeName = value.nodeName;
    }
  }

  // classes - computed: false, optional: false, required: true
  private _classes = new DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClassesList(this, "classes", false);
  public get classes() {
    return this._classes;
  }
  public putClasses(value: DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesClasses[] | cdktf.IResolvable) {
    this._classes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classesInput() {
    return this._classes.internalValue;
  }

  // node_name - computed: false, optional: false, required: true
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }
}

export class DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesList extends cdktf.ComplexList {
  public internalValue? : DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClasses[] | cdktf.IResolvable

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
  public get(index: number): DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesOutputReference {
    return new DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#auto DataK8STopolvmCybozuComTopolvmClusterV2Manifest#auto}
  */
  readonly auto?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#name DataK8STopolvmCybozuComTopolvmClusterV2Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#path DataK8STopolvmCybozuComTopolvmClusterV2Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#size DataK8STopolvmCybozuComTopolvmClusterV2Manifest#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#type DataK8STopolvmCybozuComTopolvmClusterV2Manifest#type}
  */
  readonly type: string;
}

export function dataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDevicesToTerraform(struct?: DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto: cdktf.booleanToTerraform(struct!.auto),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDevicesToHclTerraform(struct?: DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto: {
      value: cdktf.booleanToHclTerraform(struct!.auto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auto !== undefined) {
      hasAnyValues = true;
      internalValueResult.auto = this._auto;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auto = undefined;
      this._name = undefined;
      this._path = undefined;
      this._size = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auto = value.auto;
      this._name = value.name;
      this._path = value.path;
      this._size = value.size;
      this._type = value.type;
    }
  }

  // auto - computed: false, optional: true, required: false
  private _auto?: boolean | cdktf.IResolvable; 
  public get auto() {
    return this.getBooleanAttribute('auto');
  }
  public set auto(value: boolean | cdktf.IResolvable) {
    this._auto = value;
  }
  public resetAuto() {
    this._auto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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

export class DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDevicesList extends cdktf.ComplexList {
  public internalValue? : DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDevices[] | cdktf.IResolvable

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
  public get(index: number): DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDevicesOutputReference {
    return new DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#class_name DataK8STopolvmCybozuComTopolvmClusterV2Manifest#class_name}
  */
  readonly className?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#device_classes DataK8STopolvmCybozuComTopolvmClusterV2Manifest#device_classes}
  */
  readonly deviceClasses?: DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClasses[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#devices DataK8STopolvmCybozuComTopolvmClusterV2Manifest#devices}
  */
  readonly devices?: DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDevices[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#use_all_devices DataK8STopolvmCybozuComTopolvmClusterV2Manifest#use_all_devices}
  */
  readonly useAllDevices: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#use_all_nodes DataK8STopolvmCybozuComTopolvmClusterV2Manifest#use_all_nodes}
  */
  readonly useAllNodes: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#use_loop DataK8STopolvmCybozuComTopolvmClusterV2Manifest#use_loop}
  */
  readonly useLoop: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#volume_group_name DataK8STopolvmCybozuComTopolvmClusterV2Manifest#volume_group_name}
  */
  readonly volumeGroupName?: string;
}

export function dataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageToTerraform(struct?: DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_name: cdktf.stringToTerraform(struct!.className),
    device_classes: cdktf.listMapper(dataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesToTerraform, false)(struct!.deviceClasses),
    devices: cdktf.listMapper(dataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDevicesToTerraform, false)(struct!.devices),
    use_all_devices: cdktf.booleanToTerraform(struct!.useAllDevices),
    use_all_nodes: cdktf.booleanToTerraform(struct!.useAllNodes),
    use_loop: cdktf.booleanToTerraform(struct!.useLoop),
    volume_group_name: cdktf.stringToTerraform(struct!.volumeGroupName),
  }
}


export function dataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageToHclTerraform(struct?: DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_name: {
      value: cdktf.stringToHclTerraform(struct!.className),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_classes: {
      value: cdktf.listMapperHcl(dataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesToHclTerraform, false)(struct!.deviceClasses),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesList",
    },
    devices: {
      value: cdktf.listMapperHcl(dataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDevicesToHclTerraform, false)(struct!.devices),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDevicesList",
    },
    use_all_devices: {
      value: cdktf.booleanToHclTerraform(struct!.useAllDevices),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_all_nodes: {
      value: cdktf.booleanToHclTerraform(struct!.useAllNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_loop: {
      value: cdktf.booleanToHclTerraform(struct!.useLoop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_group_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._className !== undefined) {
      hasAnyValues = true;
      internalValueResult.className = this._className;
    }
    if (this._deviceClasses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceClasses = this._deviceClasses?.internalValue;
    }
    if (this._devices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices?.internalValue;
    }
    if (this._useAllDevices !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAllDevices = this._useAllDevices;
    }
    if (this._useAllNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAllNodes = this._useAllNodes;
    }
    if (this._useLoop !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLoop = this._useLoop;
    }
    if (this._volumeGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeGroupName = this._volumeGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._className = undefined;
      this._deviceClasses.internalValue = undefined;
      this._devices.internalValue = undefined;
      this._useAllDevices = undefined;
      this._useAllNodes = undefined;
      this._useLoop = undefined;
      this._volumeGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._className = value.className;
      this._deviceClasses.internalValue = value.deviceClasses;
      this._devices.internalValue = value.devices;
      this._useAllDevices = value.useAllDevices;
      this._useAllNodes = value.useAllNodes;
      this._useLoop = value.useLoop;
      this._volumeGroupName = value.volumeGroupName;
    }
  }

  // class_name - computed: false, optional: true, required: false
  private _className?: string; 
  public get className() {
    return this.getStringAttribute('class_name');
  }
  public set className(value: string) {
    this._className = value;
  }
  public resetClassName() {
    this._className = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classNameInput() {
    return this._className;
  }

  // device_classes - computed: false, optional: true, required: false
  private _deviceClasses = new DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClassesList(this, "device_classes", false);
  public get deviceClasses() {
    return this._deviceClasses;
  }
  public putDeviceClasses(value: DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDeviceClasses[] | cdktf.IResolvable) {
    this._deviceClasses.internalValue = value;
  }
  public resetDeviceClasses() {
    this._deviceClasses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceClassesInput() {
    return this._deviceClasses.internalValue;
  }

  // devices - computed: false, optional: true, required: false
  private _devices = new DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }
  public putDevices(value: DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageDevices[] | cdktf.IResolvable) {
    this._devices.internalValue = value;
  }
  public resetDevices() {
    this._devices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }

  // use_all_devices - computed: false, optional: false, required: true
  private _useAllDevices?: boolean | cdktf.IResolvable; 
  public get useAllDevices() {
    return this.getBooleanAttribute('use_all_devices');
  }
  public set useAllDevices(value: boolean | cdktf.IResolvable) {
    this._useAllDevices = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useAllDevicesInput() {
    return this._useAllDevices;
  }

  // use_all_nodes - computed: false, optional: false, required: true
  private _useAllNodes?: boolean | cdktf.IResolvable; 
  public get useAllNodes() {
    return this.getBooleanAttribute('use_all_nodes');
  }
  public set useAllNodes(value: boolean | cdktf.IResolvable) {
    this._useAllNodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useAllNodesInput() {
    return this._useAllNodes;
  }

  // use_loop - computed: false, optional: false, required: true
  private _useLoop?: boolean | cdktf.IResolvable; 
  public get useLoop() {
    return this.getBooleanAttribute('use_loop');
  }
  public set useLoop(value: boolean | cdktf.IResolvable) {
    this._useLoop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useLoopInput() {
    return this._useLoop;
  }

  // volume_group_name - computed: false, optional: true, required: false
  private _volumeGroupName?: string; 
  public get volumeGroupName() {
    return this.getStringAttribute('volume_group_name');
  }
  public set volumeGroupName(value: string) {
    this._volumeGroupName = value;
  }
  public resetVolumeGroupName() {
    this._volumeGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupNameInput() {
    return this._volumeGroupName;
  }
}
export interface DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#certs_secret DataK8STopolvmCybozuComTopolvmClusterV2Manifest#certs_secret}
  */
  readonly certsSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#cleanup DataK8STopolvmCybozuComTopolvmClusterV2Manifest#cleanup}
  */
  readonly cleanup: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#storage DataK8STopolvmCybozuComTopolvmClusterV2Manifest#storage}
  */
  readonly storage: DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#topolvm_version DataK8STopolvmCybozuComTopolvmClusterV2Manifest#topolvm_version}
  */
  readonly topolvmVersion: string;
}

export function dataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecToTerraform(struct?: DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certs_secret: cdktf.stringToTerraform(struct!.certsSecret),
    cleanup: cdktf.booleanToTerraform(struct!.cleanup),
    storage: dataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageToTerraform(struct!.storage),
    topolvm_version: cdktf.stringToTerraform(struct!.topolvmVersion),
  }
}


export function dataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecToHclTerraform(struct?: DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certs_secret: {
      value: cdktf.stringToHclTerraform(struct!.certsSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cleanup: {
      value: cdktf.booleanToHclTerraform(struct!.cleanup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage: {
      value: dataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorage",
    },
    topolvm_version: {
      value: cdktf.stringToHclTerraform(struct!.topolvmVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certsSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.certsSecret = this._certsSecret;
    }
    if (this._cleanup !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanup = this._cleanup;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    if (this._topolvmVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.topolvmVersion = this._topolvmVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certsSecret = undefined;
      this._cleanup = undefined;
      this._storage.internalValue = undefined;
      this._topolvmVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certsSecret = value.certsSecret;
      this._cleanup = value.cleanup;
      this._storage.internalValue = value.storage;
      this._topolvmVersion = value.topolvmVersion;
    }
  }

  // certs_secret - computed: false, optional: true, required: false
  private _certsSecret?: string; 
  public get certsSecret() {
    return this.getStringAttribute('certs_secret');
  }
  public set certsSecret(value: string) {
    this._certsSecret = value;
  }
  public resetCertsSecret() {
    this._certsSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certsSecretInput() {
    return this._certsSecret;
  }

  // cleanup - computed: false, optional: false, required: true
  private _cleanup?: boolean | cdktf.IResolvable; 
  public get cleanup() {
    return this.getBooleanAttribute('cleanup');
  }
  public set cleanup(value: boolean | cdktf.IResolvable) {
    this._cleanup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupInput() {
    return this._cleanup;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecStorage) {
    this._storage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // topolvm_version - computed: false, optional: false, required: true
  private _topolvmVersion?: string; 
  public get topolvmVersion() {
    return this.getStringAttribute('topolvm_version');
  }
  public set topolvmVersion(value: string) {
    this._topolvmVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topolvmVersionInput() {
    return this._topolvmVersion;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest k8s_topolvm_cybozu_com_topolvm_cluster_v2_manifest}
*/
export class DataK8STopolvmCybozuComTopolvmClusterV2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_topolvm_cybozu_com_topolvm_cluster_v2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STopolvmCybozuComTopolvmClusterV2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STopolvmCybozuComTopolvmClusterV2Manifest to import
  * @param importFromId The id of the existing DataK8STopolvmCybozuComTopolvmClusterV2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STopolvmCybozuComTopolvmClusterV2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_topolvm_cybozu_com_topolvm_cluster_v2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/topolvm_cybozu_com_topolvm_cluster_v2_manifest k8s_topolvm_cybozu_com_topolvm_cluster_v2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STopolvmCybozuComTopolvmClusterV2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STopolvmCybozuComTopolvmClusterV2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_topolvm_cybozu_com_topolvm_cluster_v2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8STopolvmCybozuComTopolvmClusterV2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STopolvmCybozuComTopolvmClusterV2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataK8STopolvmCybozuComTopolvmClusterV2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STopolvmCybozuComTopolvmClusterV2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STopolvmCybozuComTopolvmClusterV2ManifestMetadata",
      },
      spec: {
        value: dataK8STopolvmCybozuComTopolvmClusterV2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STopolvmCybozuComTopolvmClusterV2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
