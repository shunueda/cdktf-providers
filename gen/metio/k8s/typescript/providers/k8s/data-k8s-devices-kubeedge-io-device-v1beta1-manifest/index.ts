// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#metadata DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestMetadata;
  /**
  * DeviceSpec represents a single device instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#spec DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpec;
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#annotations DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#labels DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#name DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#namespace DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestMetadataToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecDeviceModelRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#name DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecDeviceModelRefToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecDeviceModelRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecDeviceModelRefToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecDeviceModelRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecDeviceModelRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecDeviceModelRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecDeviceModelRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecMethods {
  /**
  * Define the description of device method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#description DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#description}
  */
  readonly description?: string;
  /**
  * Required: The device method name to be accessed. It must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#name DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * PropertyNames are list of device properties that device methods can control. Required: A device method can control multiple device properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#property_names DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#property_names}
  */
  readonly propertyNames?: string[];
}

export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecMethodsToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    property_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.propertyNames),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecMethodsToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecMethods | cdktf.IResolvable): any {
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
    property_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.propertyNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecMethods | cdktf.IResolvable | undefined {
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
    if (this._propertyNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyNames = this._propertyNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecMethods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._propertyNames = undefined;
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
      this._propertyNames = value.propertyNames;
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

  // property_names - computed: false, optional: true, required: false
  private _propertyNames?: string[]; 
  public get propertyNames() {
    return this.getListAttribute('property_names');
  }
  public set propertyNames(value: string[]) {
    this._propertyNames = value;
  }
  public resetPropertyNames() {
    this._propertyNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyNamesInput() {
    return this._propertyNames;
  }
}

export class DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecMethodsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecMethods[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecMethodsOutputReference {
    return new DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesDesired {
  /**
  * Additional metadata like timestamp when the value was reported etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#metadata DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Required: The value for this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#value DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesDesiredToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesDesired | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesDesiredToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesDesired | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesDesiredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesDesired | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesDesired | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata = value.metadata;
      this._value = value.value;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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
export interface DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2Influxdb2ClientConfig {
  /**
  * Bucket of the user in influx database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#bucket DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#bucket}
  */
  readonly bucket?: string;
  /**
  * Org of the user in influx database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#org DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#org}
  */
  readonly org?: string;
  /**
  * Url of influx database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#url DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2Influxdb2ClientConfigToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2Influxdb2ClientConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    org: cdktf.stringToTerraform(struct!.org),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2Influxdb2ClientConfigToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2Influxdb2ClientConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    org: {
      value: cdktf.stringToHclTerraform(struct!.org),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2Influxdb2ClientConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2Influxdb2ClientConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._org !== undefined) {
      hasAnyValues = true;
      internalValueResult.org = this._org;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2Influxdb2ClientConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._org = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._org = value.org;
      this._url = value.url;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2Influxdb2DataConfig {
  /**
  * FieldKey of the user data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#field_key DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#field_key}
  */
  readonly fieldKey?: string;
  /**
  * Measurement of the user data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#measurement DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#measurement}
  */
  readonly measurement?: string;
  /**
  * the tag of device data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#tag DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#tag}
  */
  readonly tag?: { [key: string]: string };
}

export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2Influxdb2DataConfigToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2Influxdb2DataConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_key: cdktf.stringToTerraform(struct!.fieldKey),
    measurement: cdktf.stringToTerraform(struct!.measurement),
    tag: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tag),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2Influxdb2DataConfigToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2Influxdb2DataConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_key: {
      value: cdktf.stringToHclTerraform(struct!.fieldKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    measurement: {
      value: cdktf.stringToHclTerraform(struct!.measurement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tag),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2Influxdb2DataConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2Influxdb2DataConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldKey = this._fieldKey;
    }
    if (this._measurement !== undefined) {
      hasAnyValues = true;
      internalValueResult.measurement = this._measurement;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2Influxdb2DataConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldKey = undefined;
      this._measurement = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldKey = value.fieldKey;
      this._measurement = value.measurement;
      this._tag = value.tag;
    }
  }

  // field_key - computed: false, optional: true, required: false
  private _fieldKey?: string; 
  public get fieldKey() {
    return this.getStringAttribute('field_key');
  }
  public set fieldKey(value: string) {
    this._fieldKey = value;
  }
  public resetFieldKey() {
    this._fieldKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldKeyInput() {
    return this._fieldKey;
  }

  // measurement - computed: false, optional: true, required: false
  private _measurement?: string; 
  public get measurement() {
    return this.getStringAttribute('measurement');
  }
  public set measurement(value: string) {
    this._measurement = value;
  }
  public resetMeasurement() {
    this._measurement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measurementInput() {
    return this._measurement;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: { [key: string]: string }; 
  public get tag() {
    return this.getStringMapAttribute('tag');
  }
  public set tag(value: { [key: string]: string }) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2 {
  /**
  * Config of influx database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#influxdb2_client_config DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#influxdb2_client_config}
  */
  readonly influxdb2ClientConfig?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2Influxdb2ClientConfig;
  /**
  * config of device data when push to influx database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#influxdb2_data_config DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#influxdb2_data_config}
  */
  readonly influxdb2DataConfig?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2Influxdb2DataConfig;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2ToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    influxdb2_client_config: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2Influxdb2ClientConfigToTerraform(struct!.influxdb2ClientConfig),
    influxdb2_data_config: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2Influxdb2DataConfigToTerraform(struct!.influxdb2DataConfig),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2ToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    influxdb2_client_config: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2Influxdb2ClientConfigToHclTerraform(struct!.influxdb2ClientConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2Influxdb2ClientConfig",
    },
    influxdb2_data_config: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2Influxdb2DataConfigToHclTerraform(struct!.influxdb2DataConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2Influxdb2DataConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._influxdb2ClientConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.influxdb2ClientConfig = this._influxdb2ClientConfig?.internalValue;
    }
    if (this._influxdb2DataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.influxdb2DataConfig = this._influxdb2DataConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._influxdb2ClientConfig.internalValue = undefined;
      this._influxdb2DataConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._influxdb2ClientConfig.internalValue = value.influxdb2ClientConfig;
      this._influxdb2DataConfig.internalValue = value.influxdb2DataConfig;
    }
  }

  // influxdb2_client_config - computed: false, optional: true, required: false
  private _influxdb2ClientConfig = new DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2Influxdb2ClientConfigOutputReference(this, "influxdb2_client_config");
  public get influxdb2ClientConfig() {
    return this._influxdb2ClientConfig;
  }
  public putInfluxdb2ClientConfig(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2Influxdb2ClientConfig) {
    this._influxdb2ClientConfig.internalValue = value;
  }
  public resetInfluxdb2ClientConfig() {
    this._influxdb2ClientConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get influxdb2ClientConfigInput() {
    return this._influxdb2ClientConfig.internalValue;
  }

  // influxdb2_data_config - computed: false, optional: true, required: false
  private _influxdb2DataConfig = new DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2Influxdb2DataConfigOutputReference(this, "influxdb2_data_config");
  public get influxdb2DataConfig() {
    return this._influxdb2DataConfig;
  }
  public putInfluxdb2DataConfig(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2Influxdb2DataConfig) {
    this._influxdb2DataConfig.internalValue = value;
  }
  public resetInfluxdb2DataConfig() {
    this._influxdb2DataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get influxdb2DataConfigInput() {
    return this._influxdb2DataConfig.internalValue;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodMysqlMysqlClientConfig {
  /**
  * mysql address,like localhost:3306
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#addr DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#addr}
  */
  readonly addr?: string;
  /**
  * database name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#database DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#database}
  */
  readonly database?: string;
  /**
  * user name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#user_name DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#user_name}
  */
  readonly userName?: string;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodMysqlMysqlClientConfigToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodMysqlMysqlClientConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    database: cdktf.stringToTerraform(struct!.database),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodMysqlMysqlClientConfigToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodMysqlMysqlClientConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodMysqlMysqlClientConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodMysqlMysqlClientConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodMysqlMysqlClientConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._database = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._database = value.database;
      this._userName = value.userName;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodMysql {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#mysql_client_config DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#mysql_client_config}
  */
  readonly mysqlClientConfig?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodMysqlMysqlClientConfig;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodMysqlToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodMysql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mysql_client_config: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodMysqlMysqlClientConfigToTerraform(struct!.mysqlClientConfig),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodMysqlToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodMysql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mysql_client_config: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodMysqlMysqlClientConfigToHclTerraform(struct!.mysqlClientConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodMysqlMysqlClientConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodMysqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodMysql | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mysqlClientConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlClientConfig = this._mysqlClientConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodMysql | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mysqlClientConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mysqlClientConfig.internalValue = value.mysqlClientConfig;
    }
  }

  // mysql_client_config - computed: false, optional: true, required: false
  private _mysqlClientConfig = new DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodMysqlMysqlClientConfigOutputReference(this, "mysql_client_config");
  public get mysqlClientConfig() {
    return this._mysqlClientConfig;
  }
  public putMysqlClientConfig(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodMysqlMysqlClientConfig) {
    this._mysqlClientConfig.internalValue = value;
  }
  public resetMysqlClientConfig() {
    this._mysqlClientConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlClientConfigInput() {
    return this._mysqlClientConfig.internalValue;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodRedisRedisClientConfig {
  /**
  * Addr of Redis database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#addr DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#addr}
  */
  readonly addr?: string;
  /**
  * Db of Redis database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#db DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#db}
  */
  readonly db?: number;
  /**
  * MinIdleConns of Redis database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#min_idle_conns DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#min_idle_conns}
  */
  readonly minIdleConns?: number;
  /**
  * Poolsize of Redis database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#poolsize DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#poolsize}
  */
  readonly poolsize?: number;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodRedisRedisClientConfigToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodRedisRedisClientConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    db: cdktf.numberToTerraform(struct!.db),
    min_idle_conns: cdktf.numberToTerraform(struct!.minIdleConns),
    poolsize: cdktf.numberToTerraform(struct!.poolsize),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodRedisRedisClientConfigToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodRedisRedisClientConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db: {
      value: cdktf.numberToHclTerraform(struct!.db),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_idle_conns: {
      value: cdktf.numberToHclTerraform(struct!.minIdleConns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    poolsize: {
      value: cdktf.numberToHclTerraform(struct!.poolsize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodRedisRedisClientConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodRedisRedisClientConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._db !== undefined) {
      hasAnyValues = true;
      internalValueResult.db = this._db;
    }
    if (this._minIdleConns !== undefined) {
      hasAnyValues = true;
      internalValueResult.minIdleConns = this._minIdleConns;
    }
    if (this._poolsize !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolsize = this._poolsize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodRedisRedisClientConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._db = undefined;
      this._minIdleConns = undefined;
      this._poolsize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._db = value.db;
      this._minIdleConns = value.minIdleConns;
      this._poolsize = value.poolsize;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // db - computed: false, optional: true, required: false
  private _db?: number; 
  public get db() {
    return this.getNumberAttribute('db');
  }
  public set db(value: number) {
    this._db = value;
  }
  public resetDb() {
    this._db = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInput() {
    return this._db;
  }

  // min_idle_conns - computed: false, optional: true, required: false
  private _minIdleConns?: number; 
  public get minIdleConns() {
    return this.getNumberAttribute('min_idle_conns');
  }
  public set minIdleConns(value: number) {
    this._minIdleConns = value;
  }
  public resetMinIdleConns() {
    this._minIdleConns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIdleConnsInput() {
    return this._minIdleConns;
  }

  // poolsize - computed: false, optional: true, required: false
  private _poolsize?: number; 
  public get poolsize() {
    return this.getNumberAttribute('poolsize');
  }
  public set poolsize(value: number) {
    this._poolsize = value;
  }
  public resetPoolsize() {
    this._poolsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolsizeInput() {
    return this._poolsize;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodRedis {
  /**
  * RedisClientConfig of redis database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#redis_client_config DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#redis_client_config}
  */
  readonly redisClientConfig?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodRedisRedisClientConfig;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodRedisToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodRedis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redis_client_config: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodRedisRedisClientConfigToTerraform(struct!.redisClientConfig),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodRedisToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodRedis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    redis_client_config: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodRedisRedisClientConfigToHclTerraform(struct!.redisClientConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodRedisRedisClientConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodRedisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodRedis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._redisClientConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisClientConfig = this._redisClientConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodRedis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._redisClientConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._redisClientConfig.internalValue = value.redisClientConfig;
    }
  }

  // redis_client_config - computed: false, optional: true, required: false
  private _redisClientConfig = new DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodRedisRedisClientConfigOutputReference(this, "redis_client_config");
  public get redisClientConfig() {
    return this._redisClientConfig;
  }
  public putRedisClientConfig(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodRedisRedisClientConfig) {
    this._redisClientConfig.internalValue = value;
  }
  public resetRedisClientConfig() {
    this._redisClientConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisClientConfigInput() {
    return this._redisClientConfig.internalValue;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodTdEngineTdEngineClientConfig {
  /**
  * addr of tdEngine database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#addr DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#addr}
  */
  readonly addr?: string;
  /**
  * dbname of tdEngine database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#db_name DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#db_name}
  */
  readonly dbName?: string;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodTdEngineTdEngineClientConfigToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodTdEngineTdEngineClientConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    db_name: cdktf.stringToTerraform(struct!.dbName),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodTdEngineTdEngineClientConfigToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodTdEngineTdEngineClientConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_name: {
      value: cdktf.stringToHclTerraform(struct!.dbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodTdEngineTdEngineClientConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodTdEngineTdEngineClientConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._dbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbName = this._dbName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodTdEngineTdEngineClientConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._dbName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._dbName = value.dbName;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // db_name - computed: false, optional: true, required: false
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodTdEngine {
  /**
  * tdengineClientConfig of tdengine database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#td_engine_client_config DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#td_engine_client_config}
  */
  readonly tdEngineClientConfig?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodTdEngineTdEngineClientConfig;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodTdEngineToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodTdEngine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    td_engine_client_config: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodTdEngineTdEngineClientConfigToTerraform(struct!.tdEngineClientConfig),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodTdEngineToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodTdEngine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    td_engine_client_config: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodTdEngineTdEngineClientConfigToHclTerraform(struct!.tdEngineClientConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodTdEngineTdEngineClientConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodTdEngineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodTdEngine | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tdEngineClientConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tdEngineClientConfig = this._tdEngineClientConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodTdEngine | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tdEngineClientConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tdEngineClientConfig.internalValue = value.tdEngineClientConfig;
    }
  }

  // td_engine_client_config - computed: false, optional: true, required: false
  private _tdEngineClientConfig = new DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodTdEngineTdEngineClientConfigOutputReference(this, "td_engine_client_config");
  public get tdEngineClientConfig() {
    return this._tdEngineClientConfig;
  }
  public putTdEngineClientConfig(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodTdEngineTdEngineClientConfig) {
    this._tdEngineClientConfig.internalValue = value;
  }
  public resetTdEngineClientConfig() {
    this._tdEngineClientConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdEngineClientConfigInput() {
    return this._tdEngineClientConfig.internalValue;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethod {
  /**
  * method configuration for database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#influxdb2 DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#influxdb2}
  */
  readonly influxdb2?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#mysql DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#mysql}
  */
  readonly mysql?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodMysql;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#redis DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#redis}
  */
  readonly redis?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodRedis;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#td_engine DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#td_engine}
  */
  readonly tdEngine?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodTdEngine;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    influxdb2: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2ToTerraform(struct!.influxdb2),
    mysql: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodMysqlToTerraform(struct!.mysql),
    redis: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodRedisToTerraform(struct!.redis),
    td_engine: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodTdEngineToTerraform(struct!.tdEngine),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    influxdb2: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2ToHclTerraform(struct!.influxdb2),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2",
    },
    mysql: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodMysqlToHclTerraform(struct!.mysql),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodMysql",
    },
    redis: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodRedisToHclTerraform(struct!.redis),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodRedis",
    },
    td_engine: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodTdEngineToHclTerraform(struct!.tdEngine),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodTdEngine",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._influxdb2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.influxdb2 = this._influxdb2?.internalValue;
    }
    if (this._mysql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysql = this._mysql?.internalValue;
    }
    if (this._redis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redis = this._redis?.internalValue;
    }
    if (this._tdEngine?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tdEngine = this._tdEngine?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._influxdb2.internalValue = undefined;
      this._mysql.internalValue = undefined;
      this._redis.internalValue = undefined;
      this._tdEngine.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._influxdb2.internalValue = value.influxdb2;
      this._mysql.internalValue = value.mysql;
      this._redis.internalValue = value.redis;
      this._tdEngine.internalValue = value.tdEngine;
    }
  }

  // influxdb2 - computed: false, optional: true, required: false
  private _influxdb2 = new DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2OutputReference(this, "influxdb2");
  public get influxdb2() {
    return this._influxdb2;
  }
  public putInfluxdb2(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodInfluxdb2) {
    this._influxdb2.internalValue = value;
  }
  public resetInfluxdb2() {
    this._influxdb2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get influxdb2Input() {
    return this._influxdb2.internalValue;
  }

  // mysql - computed: false, optional: true, required: false
  private _mysql = new DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodMysqlOutputReference(this, "mysql");
  public get mysql() {
    return this._mysql;
  }
  public putMysql(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodMysql) {
    this._mysql.internalValue = value;
  }
  public resetMysql() {
    this._mysql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlInput() {
    return this._mysql.internalValue;
  }

  // redis - computed: false, optional: true, required: false
  private _redis = new DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodRedisOutputReference(this, "redis");
  public get redis() {
    return this._redis;
  }
  public putRedis(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodRedis) {
    this._redis.internalValue = value;
  }
  public resetRedis() {
    this._redis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisInput() {
    return this._redis.internalValue;
  }

  // td_engine - computed: false, optional: true, required: false
  private _tdEngine = new DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodTdEngineOutputReference(this, "td_engine");
  public get tdEngine() {
    return this._tdEngine;
  }
  public putTdEngine(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodTdEngine) {
    this._tdEngine.internalValue = value;
  }
  public resetTdEngine() {
    this._tdEngine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdEngineInput() {
    return this._tdEngine.internalValue;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodHttp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#host_name DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#port DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#request_path DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#request_path}
  */
  readonly requestPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#timeout DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#timeout}
  */
  readonly timeout?: number;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodHttpToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    port: cdktf.numberToTerraform(struct!.port),
    request_path: cdktf.stringToTerraform(struct!.requestPath),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodHttpToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_path: {
      value: cdktf.stringToHclTerraform(struct!.requestPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._requestPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPath = this._requestPath;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostName = undefined;
      this._port = undefined;
      this._requestPath = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostName = value.hostName;
      this._port = value.port;
      this._requestPath = value.requestPath;
      this._timeout = value.timeout;
    }
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // request_path - computed: false, optional: true, required: false
  private _requestPath?: string; 
  public get requestPath() {
    return this.getStringAttribute('request_path');
  }
  public set requestPath(value: string) {
    this._requestPath = value;
  }
  public resetRequestPath() {
    this._requestPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPathInput() {
    return this._requestPath;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodMqtt {
  /**
  * broker address, like mqtt://127.0.0.1:1883
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#address DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#address}
  */
  readonly address?: string;
  /**
  * qos of mqtt publish param
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#qos DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#qos}
  */
  readonly qos?: number;
  /**
  * Is the message retained
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#retained DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#retained}
  */
  readonly retained?: boolean | cdktf.IResolvable;
  /**
  * publish topic for mqtt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#topic DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#topic}
  */
  readonly topic?: string;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodMqttToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodMqtt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    qos: cdktf.numberToTerraform(struct!.qos),
    retained: cdktf.booleanToTerraform(struct!.retained),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodMqttToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodMqtt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qos: {
      value: cdktf.numberToHclTerraform(struct!.qos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retained: {
      value: cdktf.booleanToHclTerraform(struct!.retained),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodMqttOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodMqtt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._qos !== undefined) {
      hasAnyValues = true;
      internalValueResult.qos = this._qos;
    }
    if (this._retained !== undefined) {
      hasAnyValues = true;
      internalValueResult.retained = this._retained;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodMqtt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._qos = undefined;
      this._retained = undefined;
      this._topic = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._qos = value.qos;
      this._retained = value.retained;
      this._topic = value.topic;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // qos - computed: false, optional: true, required: false
  private _qos?: number; 
  public get qos() {
    return this.getNumberAttribute('qos');
  }
  public set qos(value: number) {
    this._qos = value;
  }
  public resetQos() {
    this._qos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosInput() {
    return this._qos;
  }

  // retained - computed: false, optional: true, required: false
  private _retained?: boolean | cdktf.IResolvable; 
  public get retained() {
    return this.getBooleanAttribute('retained');
  }
  public set retained(value: boolean | cdktf.IResolvable) {
    this._retained = value;
  }
  public resetRetained() {
    this._retained = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainedInput() {
    return this._retained;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethod {
  /**
  * DBMethod represents the method used to push data to database, please ensure that the mapper can access the destination address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#db_method DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#db_method}
  */
  readonly dbMethod?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethod;
  /**
  * HTTP Push method configuration for http
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#http DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#http}
  */
  readonly http?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodHttp;
  /**
  * MQTT Push method configuration for mqtt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#mqtt DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#mqtt}
  */
  readonly mqtt?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodMqtt;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_method: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodToTerraform(struct!.dbMethod),
    http: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodHttpToTerraform(struct!.http),
    mqtt: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodMqttToTerraform(struct!.mqtt),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_method: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodToHclTerraform(struct!.dbMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethod",
    },
    http: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodHttp",
    },
    mqtt: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodMqttToHclTerraform(struct!.mqtt),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodMqtt",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbMethod = this._dbMethod?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._mqtt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mqtt = this._mqtt?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dbMethod.internalValue = undefined;
      this._http.internalValue = undefined;
      this._mqtt.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dbMethod.internalValue = value.dbMethod;
      this._http.internalValue = value.http;
      this._mqtt.internalValue = value.mqtt;
    }
  }

  // db_method - computed: false, optional: true, required: false
  private _dbMethod = new DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethodOutputReference(this, "db_method");
  public get dbMethod() {
    return this._dbMethod;
  }
  public putDbMethod(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodDbMethod) {
    this._dbMethod.internalValue = value;
  }
  public resetDbMethod() {
    this._dbMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbMethodInput() {
    return this._dbMethod.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // mqtt - computed: false, optional: true, required: false
  private _mqtt = new DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodMqttOutputReference(this, "mqtt");
  public get mqtt() {
    return this._mqtt;
  }
  public putMqtt(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodMqtt) {
    this._mqtt.internalValue = value;
  }
  public resetMqtt() {
    this._mqtt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttInput() {
    return this._mqtt.internalValue;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesVisitors {
  /**
  * Required: The configData of customized protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#config_data DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#config_data}
  */
  readonly configData?: { [key: string]: string };
  /**
  * Required: name of customized protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#protocol_name DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#protocol_name}
  */
  readonly protocolName?: string;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesVisitorsToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesVisitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configData),
    protocol_name: cdktf.stringToTerraform(struct!.protocolName),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesVisitorsToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesVisitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_data: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configData),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    protocol_name: {
      value: cdktf.stringToHclTerraform(struct!.protocolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesVisitorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesVisitors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configData !== undefined) {
      hasAnyValues = true;
      internalValueResult.configData = this._configData;
    }
    if (this._protocolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolName = this._protocolName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesVisitors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configData = undefined;
      this._protocolName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configData = value.configData;
      this._protocolName = value.protocolName;
    }
  }

  // config_data - computed: false, optional: true, required: false
  private _configData?: { [key: string]: string }; 
  public get configData() {
    return this.getStringMapAttribute('config_data');
  }
  public set configData(value: { [key: string]: string }) {
    this._configData = value;
  }
  public resetConfigData() {
    this._configData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configDataInput() {
    return this._configData;
  }

  // protocol_name - computed: false, optional: true, required: false
  private _protocolName?: string; 
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }
  public set protocolName(value: string) {
    this._protocolName = value;
  }
  public resetProtocolName() {
    this._protocolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolNameInput() {
    return this._protocolName;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecProperties {
  /**
  * Define how frequent mapper will collect from device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#collect_cycle DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#collect_cycle}
  */
  readonly collectCycle?: number;
  /**
  * The desired property value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#desired DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#desired}
  */
  readonly desired?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesDesired;
  /**
  * Required: The device property name to be accessed. It must be unique. Note: If you need to use the built-in stream data processing function, you need to define Name as saveFrame or saveVideo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#name DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * PushMethod represents the protocol used to push data, please ensure that the mapper can access the destination address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#push_method DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#push_method}
  */
  readonly pushMethod?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethod;
  /**
  * Define how frequent mapper will report the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#report_cycle DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#report_cycle}
  */
  readonly reportCycle?: number;
  /**
  * whether be reported to the cloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#report_to_cloud DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#report_to_cloud}
  */
  readonly reportToCloud?: boolean | cdktf.IResolvable;
  /**
  * Visitors are intended to be consumed by device mappers which connect to devices and collect data / perform actions on the device. Required: Protocol relevant config details about the how to access the device property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#visitors DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#visitors}
  */
  readonly visitors?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesVisitors;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collect_cycle: cdktf.numberToTerraform(struct!.collectCycle),
    desired: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesDesiredToTerraform(struct!.desired),
    name: cdktf.stringToTerraform(struct!.name),
    push_method: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodToTerraform(struct!.pushMethod),
    report_cycle: cdktf.numberToTerraform(struct!.reportCycle),
    report_to_cloud: cdktf.booleanToTerraform(struct!.reportToCloud),
    visitors: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesVisitorsToTerraform(struct!.visitors),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collect_cycle: {
      value: cdktf.numberToHclTerraform(struct!.collectCycle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    desired: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesDesiredToHclTerraform(struct!.desired),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesDesired",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    push_method: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodToHclTerraform(struct!.pushMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethod",
    },
    report_cycle: {
      value: cdktf.numberToHclTerraform(struct!.reportCycle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    report_to_cloud: {
      value: cdktf.booleanToHclTerraform(struct!.reportToCloud),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    visitors: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesVisitorsToHclTerraform(struct!.visitors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesVisitors",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectCycle !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectCycle = this._collectCycle;
    }
    if (this._desired?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.desired = this._desired?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pushMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushMethod = this._pushMethod?.internalValue;
    }
    if (this._reportCycle !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportCycle = this._reportCycle;
    }
    if (this._reportToCloud !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportToCloud = this._reportToCloud;
    }
    if (this._visitors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visitors = this._visitors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectCycle = undefined;
      this._desired.internalValue = undefined;
      this._name = undefined;
      this._pushMethod.internalValue = undefined;
      this._reportCycle = undefined;
      this._reportToCloud = undefined;
      this._visitors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectCycle = value.collectCycle;
      this._desired.internalValue = value.desired;
      this._name = value.name;
      this._pushMethod.internalValue = value.pushMethod;
      this._reportCycle = value.reportCycle;
      this._reportToCloud = value.reportToCloud;
      this._visitors.internalValue = value.visitors;
    }
  }

  // collect_cycle - computed: false, optional: true, required: false
  private _collectCycle?: number; 
  public get collectCycle() {
    return this.getNumberAttribute('collect_cycle');
  }
  public set collectCycle(value: number) {
    this._collectCycle = value;
  }
  public resetCollectCycle() {
    this._collectCycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectCycleInput() {
    return this._collectCycle;
  }

  // desired - computed: false, optional: true, required: false
  private _desired = new DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesDesiredOutputReference(this, "desired");
  public get desired() {
    return this._desired;
  }
  public putDesired(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesDesired) {
    this._desired.internalValue = value;
  }
  public resetDesired() {
    this._desired.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredInput() {
    return this._desired.internalValue;
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

  // push_method - computed: false, optional: true, required: false
  private _pushMethod = new DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethodOutputReference(this, "push_method");
  public get pushMethod() {
    return this._pushMethod;
  }
  public putPushMethod(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesPushMethod) {
    this._pushMethod.internalValue = value;
  }
  public resetPushMethod() {
    this._pushMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushMethodInput() {
    return this._pushMethod.internalValue;
  }

  // report_cycle - computed: false, optional: true, required: false
  private _reportCycle?: number; 
  public get reportCycle() {
    return this.getNumberAttribute('report_cycle');
  }
  public set reportCycle(value: number) {
    this._reportCycle = value;
  }
  public resetReportCycle() {
    this._reportCycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportCycleInput() {
    return this._reportCycle;
  }

  // report_to_cloud - computed: false, optional: true, required: false
  private _reportToCloud?: boolean | cdktf.IResolvable; 
  public get reportToCloud() {
    return this.getBooleanAttribute('report_to_cloud');
  }
  public set reportToCloud(value: boolean | cdktf.IResolvable) {
    this._reportToCloud = value;
  }
  public resetReportToCloud() {
    this._reportToCloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportToCloudInput() {
    return this._reportToCloud;
  }

  // visitors - computed: false, optional: true, required: false
  private _visitors = new DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesVisitorsOutputReference(this, "visitors");
  public get visitors() {
    return this._visitors;
  }
  public putVisitors(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesVisitors) {
    this._visitors.internalValue = value;
  }
  public resetVisitors() {
    this._visitors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visitorsInput() {
    return this._visitors.internalValue;
  }
}

export class DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesList extends cdktf.ComplexList {
  public internalValue? : DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecProperties[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesOutputReference {
    return new DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecProtocol {
  /**
  * Any config data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#config_data DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#config_data}
  */
  readonly configData?: { [key: string]: string };
  /**
  * Unique protocol name Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#protocol_name DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#protocol_name}
  */
  readonly protocolName?: string;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecProtocolToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configData),
    protocol_name: cdktf.stringToTerraform(struct!.protocolName),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecProtocolToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_data: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configData),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    protocol_name: {
      value: cdktf.stringToHclTerraform(struct!.protocolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configData !== undefined) {
      hasAnyValues = true;
      internalValueResult.configData = this._configData;
    }
    if (this._protocolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolName = this._protocolName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configData = undefined;
      this._protocolName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configData = value.configData;
      this._protocolName = value.protocolName;
    }
  }

  // config_data - computed: false, optional: true, required: false
  private _configData?: { [key: string]: string }; 
  public get configData() {
    return this.getStringMapAttribute('config_data');
  }
  public set configData(value: { [key: string]: string }) {
    this._configData = value;
  }
  public resetConfigData() {
    this._configData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configDataInput() {
    return this._configData;
  }

  // protocol_name - computed: false, optional: true, required: false
  private _protocolName?: string; 
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }
  public set protocolName(value: string) {
    this._protocolName = value;
  }
  public resetProtocolName() {
    this._protocolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolNameInput() {
    return this._protocolName;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpec {
  /**
  * Required: DeviceModelRef is reference to the device model used as a template to create the device instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#device_model_ref DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#device_model_ref}
  */
  readonly deviceModelRef?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecDeviceModelRef;
  /**
  * List of methods of device. methods list item must be unique by method.Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#methods DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#methods}
  */
  readonly methods?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecMethods[] | cdktf.IResolvable;
  /**
  * NodeName is a request to schedule this device onto a specific node. If it is non-empty, the scheduler simply schedules this device onto that node, assuming that it fits resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#node_name DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#node_name}
  */
  readonly nodeName?: string;
  /**
  * List of properties which describe the device properties. properties list item must be unique by properties.Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#properties DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#properties}
  */
  readonly properties?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecProperties[] | cdktf.IResolvable;
  /**
  * Required: The protocol configuration used to connect to the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#protocol DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest#protocol}
  */
  readonly protocol?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecProtocol;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_model_ref: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecDeviceModelRefToTerraform(struct!.deviceModelRef),
    methods: cdktf.listMapper(dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecMethodsToTerraform, false)(struct!.methods),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    properties: cdktf.listMapper(dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesToTerraform, false)(struct!.properties),
    protocol: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecProtocolToTerraform(struct!.protocol),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_model_ref: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecDeviceModelRefToHclTerraform(struct!.deviceModelRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecDeviceModelRef",
    },
    methods: {
      value: cdktf.listMapperHcl(dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecMethodsToHclTerraform, false)(struct!.methods),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecMethodsList",
    },
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.listMapperHcl(dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesToHclTerraform, false)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesList",
    },
    protocol: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecProtocolToHclTerraform(struct!.protocol),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecProtocol",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceModelRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceModelRef = this._deviceModelRef?.internalValue;
    }
    if (this._methods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods?.internalValue;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    if (this._protocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceModelRef.internalValue = undefined;
      this._methods.internalValue = undefined;
      this._nodeName = undefined;
      this._properties.internalValue = undefined;
      this._protocol.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceModelRef.internalValue = value.deviceModelRef;
      this._methods.internalValue = value.methods;
      this._nodeName = value.nodeName;
      this._properties.internalValue = value.properties;
      this._protocol.internalValue = value.protocol;
    }
  }

  // device_model_ref - computed: false, optional: true, required: false
  private _deviceModelRef = new DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecDeviceModelRefOutputReference(this, "device_model_ref");
  public get deviceModelRef() {
    return this._deviceModelRef;
  }
  public putDeviceModelRef(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecDeviceModelRef) {
    this._deviceModelRef.internalValue = value;
  }
  public resetDeviceModelRef() {
    this._deviceModelRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceModelRefInput() {
    return this._deviceModelRef.internalValue;
  }

  // methods - computed: false, optional: true, required: false
  private _methods = new DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecMethodsList(this, "methods", false);
  public get methods() {
    return this._methods;
  }
  public putMethods(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecMethods[] | cdktf.IResolvable) {
    this._methods.internalValue = value;
  }
  public resetMethods() {
    this._methods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods.internalValue;
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecProperties[] | cdktf.IResolvable) {
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
  private _protocol = new DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecProtocol) {
    this._protocol.internalValue = value;
  }
  public resetProtocol() {
    this._protocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest k8s_devices_kubeedge_io_device_v1beta1_manifest}
*/
export class DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_devices_kubeedge_io_device_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SDevicesKubeedgeIoDeviceV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_devices_kubeedge_io_device_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/devices_kubeedge_io_device_v1beta1_manifest k8s_devices_kubeedge_io_device_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_devices_kubeedge_io_device_v1beta1_manifest',
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
  private _metadata = new DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpec) {
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
      metadata: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
