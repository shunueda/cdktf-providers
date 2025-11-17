// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#metadata DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#metadata}
  */
  readonly metadata: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestMetadata;
  /**
  * DeviceModelSpec defines the model / template for a device.It is a blueprint which describes the device capabilities and access mechanism via property visitors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#spec DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#spec}
  */
  readonly spec?: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpec;
}
export interface DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#annotations DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#labels DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#name DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#namespace DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestMetadataToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestMetadataToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeBoolean {
  /**
  * Required: Access mode of property, ReadWrite or ReadOnly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#access_mode DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#access_mode}
  */
  readonly accessMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#default_value DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#default_value}
  */
  readonly defaultValue?: boolean | cdktf.IResolvable;
}

export function dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeBooleanToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeBoolean | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_mode: cdktf.stringToTerraform(struct!.accessMode),
    default_value: cdktf.booleanToTerraform(struct!.defaultValue),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeBooleanToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeBoolean | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_mode: {
      value: cdktf.stringToHclTerraform(struct!.accessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_value: {
      value: cdktf.booleanToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeBooleanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeBoolean | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessMode = this._accessMode;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeBoolean | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessMode = undefined;
      this._defaultValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessMode = value.accessMode;
      this._defaultValue = value.defaultValue;
    }
  }

  // access_mode - computed: false, optional: true, required: false
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  public resetAccessMode() {
    this._accessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: boolean | cdktf.IResolvable; 
  public get defaultValue() {
    return this.getBooleanAttribute('default_value');
  }
  public set defaultValue(value: boolean | cdktf.IResolvable) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeBytes {
  /**
  * Required: Access mode of property, ReadWrite or ReadOnly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#access_mode DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#access_mode}
  */
  readonly accessMode?: string;
}

export function dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeBytesToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeBytes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_mode: cdktf.stringToTerraform(struct!.accessMode),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeBytesToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeBytes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_mode: {
      value: cdktf.stringToHclTerraform(struct!.accessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeBytesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeBytes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessMode = this._accessMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeBytes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessMode = value.accessMode;
    }
  }

  // access_mode - computed: false, optional: true, required: false
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  public resetAccessMode() {
    this._accessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeDouble {
  /**
  * Required: Access mode of property, ReadWrite or ReadOnly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#access_mode DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#access_mode}
  */
  readonly accessMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#default_value DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#default_value}
  */
  readonly defaultValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#maximum DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#maximum}
  */
  readonly maximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#minimum DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#minimum}
  */
  readonly minimum?: number;
  /**
  * The unit of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#unit DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#unit}
  */
  readonly unit?: string;
}

export function dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeDoubleToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeDouble | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_mode: cdktf.stringToTerraform(struct!.accessMode),
    default_value: cdktf.numberToTerraform(struct!.defaultValue),
    maximum: cdktf.numberToTerraform(struct!.maximum),
    minimum: cdktf.numberToTerraform(struct!.minimum),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeDoubleToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeDouble | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_mode: {
      value: cdktf.stringToHclTerraform(struct!.accessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_value: {
      value: cdktf.numberToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum: {
      value: cdktf.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktf.numberToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeDoubleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeDouble | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessMode = this._accessMode;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeDouble | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessMode = undefined;
      this._defaultValue = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessMode = value.accessMode;
      this._defaultValue = value.defaultValue;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
      this._unit = value.unit;
    }
  }

  // access_mode - computed: false, optional: true, required: false
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  public resetAccessMode() {
    this._accessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: number; 
  public get defaultValue() {
    return this.getNumberAttribute('default_value');
  }
  public set defaultValue(value: number) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeFloat {
  /**
  * Required: Access mode of property, ReadWrite or ReadOnly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#access_mode DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#access_mode}
  */
  readonly accessMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#default_value DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#default_value}
  */
  readonly defaultValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#maximum DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#maximum}
  */
  readonly maximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#minimum DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#minimum}
  */
  readonly minimum?: number;
  /**
  * The unit of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#unit DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#unit}
  */
  readonly unit?: string;
}

export function dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeFloatToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeFloat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_mode: cdktf.stringToTerraform(struct!.accessMode),
    default_value: cdktf.numberToTerraform(struct!.defaultValue),
    maximum: cdktf.numberToTerraform(struct!.maximum),
    minimum: cdktf.numberToTerraform(struct!.minimum),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeFloatToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeFloat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_mode: {
      value: cdktf.stringToHclTerraform(struct!.accessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_value: {
      value: cdktf.numberToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum: {
      value: cdktf.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktf.numberToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeFloatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeFloat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessMode = this._accessMode;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeFloat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessMode = undefined;
      this._defaultValue = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessMode = value.accessMode;
      this._defaultValue = value.defaultValue;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
      this._unit = value.unit;
    }
  }

  // access_mode - computed: false, optional: true, required: false
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  public resetAccessMode() {
    this._accessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: number; 
  public get defaultValue() {
    return this.getNumberAttribute('default_value');
  }
  public set defaultValue(value: number) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeInt {
  /**
  * Required: Access mode of property, ReadWrite or ReadOnly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#access_mode DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#access_mode}
  */
  readonly accessMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#default_value DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#default_value}
  */
  readonly defaultValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#maximum DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#maximum}
  */
  readonly maximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#minimum DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#minimum}
  */
  readonly minimum?: number;
  /**
  * The unit of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#unit DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#unit}
  */
  readonly unit?: string;
}

export function dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeIntToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeInt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_mode: cdktf.stringToTerraform(struct!.accessMode),
    default_value: cdktf.numberToTerraform(struct!.defaultValue),
    maximum: cdktf.numberToTerraform(struct!.maximum),
    minimum: cdktf.numberToTerraform(struct!.minimum),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeIntToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeInt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_mode: {
      value: cdktf.stringToHclTerraform(struct!.accessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_value: {
      value: cdktf.numberToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum: {
      value: cdktf.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktf.numberToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeIntOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeInt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessMode = this._accessMode;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeInt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessMode = undefined;
      this._defaultValue = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessMode = value.accessMode;
      this._defaultValue = value.defaultValue;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
      this._unit = value.unit;
    }
  }

  // access_mode - computed: false, optional: true, required: false
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  public resetAccessMode() {
    this._accessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: number; 
  public get defaultValue() {
    return this.getNumberAttribute('default_value');
  }
  public set defaultValue(value: number) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeString {
  /**
  * Required: Access mode of property, ReadWrite or ReadOnly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#access_mode DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#access_mode}
  */
  readonly accessMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#default_value DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#default_value}
  */
  readonly defaultValue?: string;
}

export function dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeStringToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_mode: cdktf.stringToTerraform(struct!.accessMode),
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeStringToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_mode: {
      value: cdktf.stringToHclTerraform(struct!.accessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeString | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessMode = this._accessMode;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeString | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessMode = undefined;
      this._defaultValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessMode = value.accessMode;
      this._defaultValue = value.defaultValue;
    }
  }

  // access_mode - computed: false, optional: true, required: false
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  public resetAccessMode() {
    this._accessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#boolean DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#boolean}
  */
  readonly boolean?: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeBoolean;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#bytes DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#bytes}
  */
  readonly bytes?: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeBytes;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#double DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#double}
  */
  readonly double?: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeDouble;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#float DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#float}
  */
  readonly float?: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeFloat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#int DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#int}
  */
  readonly int?: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeInt;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#string DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#string}
  */
  readonly string?: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeString;
}

export function dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean: dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeBooleanToTerraform(struct!.boolean),
    bytes: dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeBytesToTerraform(struct!.bytes),
    double: dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeDoubleToTerraform(struct!.double),
    float: dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeFloatToTerraform(struct!.float),
    int: dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeIntToTerraform(struct!.int),
    string: dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeStringToTerraform(struct!.string),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean: {
      value: dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeBooleanToHclTerraform(struct!.boolean),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeBoolean",
    },
    bytes: {
      value: dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeBytesToHclTerraform(struct!.bytes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeBytes",
    },
    double: {
      value: dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeDoubleToHclTerraform(struct!.double),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeDouble",
    },
    float: {
      value: dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeFloatToHclTerraform(struct!.float),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeFloat",
    },
    int: {
      value: dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeIntToHclTerraform(struct!.int),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeInt",
    },
    string: {
      value: dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeStringToHclTerraform(struct!.string),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeString",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolean?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolean = this._boolean?.internalValue;
    }
    if (this._bytes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytes = this._bytes?.internalValue;
    }
    if (this._double?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.double = this._double?.internalValue;
    }
    if (this._float?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.float = this._float?.internalValue;
    }
    if (this._int?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.int = this._int?.internalValue;
    }
    if (this._string?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boolean.internalValue = undefined;
      this._bytes.internalValue = undefined;
      this._double.internalValue = undefined;
      this._float.internalValue = undefined;
      this._int.internalValue = undefined;
      this._string.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boolean.internalValue = value.boolean;
      this._bytes.internalValue = value.bytes;
      this._double.internalValue = value.double;
      this._float.internalValue = value.float;
      this._int.internalValue = value.int;
      this._string.internalValue = value.string;
    }
  }

  // boolean - computed: false, optional: true, required: false
  private _boolean = new DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeBooleanOutputReference(this, "boolean");
  public get boolean() {
    return this._boolean;
  }
  public putBoolean(value: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeBoolean) {
    this._boolean.internalValue = value;
  }
  public resetBoolean() {
    this._boolean.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanInput() {
    return this._boolean.internalValue;
  }

  // bytes - computed: false, optional: true, required: false
  private _bytes = new DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeBytesOutputReference(this, "bytes");
  public get bytes() {
    return this._bytes;
  }
  public putBytes(value: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeBytes) {
    this._bytes.internalValue = value;
  }
  public resetBytes() {
    this._bytes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesInput() {
    return this._bytes.internalValue;
  }

  // double - computed: false, optional: true, required: false
  private _double = new DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeDoubleOutputReference(this, "double");
  public get double() {
    return this._double;
  }
  public putDouble(value: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeDouble) {
    this._double.internalValue = value;
  }
  public resetDouble() {
    this._double.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleInput() {
    return this._double.internalValue;
  }

  // float - computed: false, optional: true, required: false
  private _float = new DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeFloatOutputReference(this, "float");
  public get float() {
    return this._float;
  }
  public putFloat(value: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeFloat) {
    this._float.internalValue = value;
  }
  public resetFloat() {
    this._float.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatInput() {
    return this._float.internalValue;
  }

  // int - computed: false, optional: true, required: false
  private _int = new DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeIntOutputReference(this, "int");
  public get int() {
    return this._int;
  }
  public putInt(value: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeInt) {
    this._int.internalValue = value;
  }
  public resetInt() {
    this._int.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intInput() {
    return this._int.internalValue;
  }

  // string - computed: false, optional: true, required: false
  private _string = new DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeStringOutputReference(this, "string");
  public get string() {
    return this._string;
  }
  public putString(value: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeString) {
    this._string.internalValue = value;
  }
  public resetString() {
    this._string.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string.internalValue;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecProperties {
  /**
  * The device property description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#description DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#description}
  */
  readonly description?: string;
  /**
  * Required: The device property name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#name DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Required: PropertyType represents the type and data validation of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#type DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#type}
  */
  readonly type?: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesType;
}

export function dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    type: dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeToTerraform(struct!.type),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
      value: dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesType",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._type.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._type.internalValue = value.type;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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
  private _type = new DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesType) {
    this._type.internalValue = value;
  }
  public resetType() {
    this._type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }
}

export class DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesList extends cdktf.ComplexList {
  public internalValue? : DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecProperties[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesOutputReference {
    return new DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpec {
  /**
  * Required: List of device properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#properties DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#properties}
  */
  readonly properties?: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecProperties[] | cdktf.IResolvable;
  /**
  * Required for DMI: Protocol name used by the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#protocol DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    properties: cdktf.listMapper(dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesToTerraform, false)(struct!.properties),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    properties: {
      value: cdktf.listMapperHcl(dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesToHclTerraform, false)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesList",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._properties.internalValue = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._properties.internalValue = value.properties;
      this._protocol = value.protocol;
    }
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest k8s_devices_kubeedge_io_device_model_v1alpha2_manifest}
*/
export class DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_devices_kubeedge_io_device_model_v1alpha2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest to import
  * @param importFromId The id of the existing DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_devices_kubeedge_io_device_model_v1alpha2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1alpha2_manifest k8s_devices_kubeedge_io_device_model_v1alpha2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_devices_kubeedge_io_device_model_v1alpha2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
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
  private _metadata = new DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpec) {
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
      metadata: dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestMetadata",
      },
      spec: {
        value: dataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDevicesKubeedgeIoDeviceModelV1Alpha2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
