// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1beta1_manifest#metadata DataK8SDevicesKubeedgeIoDeviceModelV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestMetadata;
  /**
  * DeviceModelSpec defines the model for a device.It is a blueprint which describes the device capabilities and access mechanism via property visitors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1beta1_manifest#spec DataK8SDevicesKubeedgeIoDeviceModelV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpec;
}
export interface DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1beta1_manifest#annotations DataK8SDevicesKubeedgeIoDeviceModelV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1beta1_manifest#labels DataK8SDevicesKubeedgeIoDeviceModelV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1beta1_manifest#name DataK8SDevicesKubeedgeIoDeviceModelV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1beta1_manifest#namespace DataK8SDevicesKubeedgeIoDeviceModelV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestMetadataToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpecProperties {
  /**
  * Required: Access mode of property, ReadWrite or ReadOnly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1beta1_manifest#access_mode DataK8SDevicesKubeedgeIoDeviceModelV1Beta1Manifest#access_mode}
  */
  readonly accessMode?: string;
  /**
  * The device property description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1beta1_manifest#description DataK8SDevicesKubeedgeIoDeviceModelV1Beta1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1beta1_manifest#maximum DataK8SDevicesKubeedgeIoDeviceModelV1Beta1Manifest#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1beta1_manifest#minimum DataK8SDevicesKubeedgeIoDeviceModelV1Beta1Manifest#minimum}
  */
  readonly minimum?: string;
  /**
  * Required: The device property name. Note: If you need to use the built-in stream data processing function, you need to define Name as saveFrame or saveVideo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1beta1_manifest#name DataK8SDevicesKubeedgeIoDeviceModelV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Required: Type of device property, ENUM: INT,FLOAT,DOUBLE,STRING,BOOLEAN,BYTES,STREAM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1beta1_manifest#type DataK8SDevicesKubeedgeIoDeviceModelV1Beta1Manifest#type}
  */
  readonly type?: string;
  /**
  * The unit of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1beta1_manifest#unit DataK8SDevicesKubeedgeIoDeviceModelV1Beta1Manifest#unit}
  */
  readonly unit?: string;
}

export function dataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpecPropertiesToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpecProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_mode: cdktf.stringToTerraform(struct!.accessMode),
    description: cdktf.stringToTerraform(struct!.description),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpecPropertiesToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpecProperties | cdktf.IResolvable): any {
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
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum: {
      value: cdktf.stringToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum: {
      value: cdktf.stringToHclTerraform(struct!.minimum),
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

export class DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpecPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpecProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessMode = this._accessMode;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpecProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessMode = undefined;
      this._description = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
      this._name = undefined;
      this._type = undefined;
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
      this._description = value.description;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
      this._name = value.name;
      this._type = value.type;
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

  // maximum - computed: false, optional: true, required: false
  private _maximum?: string; 
  public get maximum() {
    return this.getStringAttribute('maximum');
  }
  public set maximum(value: string) {
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
  private _minimum?: string; 
  public get minimum() {
    return this.getStringAttribute('minimum');
  }
  public set minimum(value: string) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
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

export class DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpecPropertiesList extends cdktf.ComplexList {
  public internalValue? : DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpecProperties[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpecPropertiesOutputReference {
    return new DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpecPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpec {
  /**
  * Required: List of device properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1beta1_manifest#properties DataK8SDevicesKubeedgeIoDeviceModelV1Beta1Manifest#properties}
  */
  readonly properties?: DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpecProperties[] | cdktf.IResolvable;
  /**
  * Required: Protocol name used by the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1beta1_manifest#protocol DataK8SDevicesKubeedgeIoDeviceModelV1Beta1Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpecToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    properties: cdktf.listMapper(dataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpecPropertiesToTerraform, false)(struct!.properties),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    properties: {
      value: cdktf.listMapperHcl(dataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpecPropertiesToHclTerraform, false)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpecPropertiesList",
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

export class DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
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
  private _properties = new DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpecPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpecProperties[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1beta1_manifest k8s_devices_kubeedge_io_device_model_v1beta1_manifest}
*/
export class DataK8SDevicesKubeedgeIoDeviceModelV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_devices_kubeedge_io_device_model_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SDevicesKubeedgeIoDeviceModelV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SDevicesKubeedgeIoDeviceModelV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SDevicesKubeedgeIoDeviceModelV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SDevicesKubeedgeIoDeviceModelV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_devices_kubeedge_io_device_model_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_model_v1beta1_manifest k8s_devices_kubeedge_io_device_model_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_devices_kubeedge_io_device_model_v1beta1_manifest',
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
  private _metadata = new DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpec) {
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
      metadata: dataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDevicesKubeedgeIoDeviceModelV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
