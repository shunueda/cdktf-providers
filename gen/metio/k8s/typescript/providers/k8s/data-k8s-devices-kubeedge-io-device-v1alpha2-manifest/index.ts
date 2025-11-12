// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#metadata DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#metadata}
  */
  readonly metadata: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestMetadata;
  /**
  * DeviceSpec represents a single device instance. It is an instantation of a device model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#spec DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#spec}
  */
  readonly spec?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpec;
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#annotations DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#labels DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#name DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#namespace DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestMetadataToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestMetadataToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDataDataProperties {
  /**
  * Additional metadata like timestamp when the value was reported etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#metadata DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Required: The property name for which should be processed by external apps. This property should be present in the device model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#property_name DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#property_name}
  */
  readonly propertyName?: string;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDataDataPropertiesToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDataDataProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    property_name: cdktf.stringToTerraform(struct!.propertyName),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDataDataPropertiesToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDataDataProperties | cdktf.IResolvable): any {
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
    property_name: {
      value: cdktf.stringToHclTerraform(struct!.propertyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDataDataPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDataDataProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._propertyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyName = this._propertyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDataDataProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata = undefined;
      this._propertyName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata = value.metadata;
      this._propertyName = value.propertyName;
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

  // property_name - computed: false, optional: true, required: false
  private _propertyName?: string; 
  public get propertyName() {
    return this.getStringAttribute('property_name');
  }
  public set propertyName(value: string) {
    this._propertyName = value;
  }
  public resetPropertyName() {
    this._propertyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyNameInput() {
    return this._propertyName;
  }
}

export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDataDataPropertiesList extends cdktf.ComplexList {
  public internalValue? : DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDataDataProperties[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDataDataPropertiesOutputReference {
    return new DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDataDataPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecData {
  /**
  * Required: A list of data properties, which are not required to be processed by edgecore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#data_properties DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#data_properties}
  */
  readonly dataProperties?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDataDataProperties[] | cdktf.IResolvable;
  /**
  * Topic used by mapper, all data collected from dataProperties should be published to this topic, the default value is $ke/events/device/+/data/update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#data_topic DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#data_topic}
  */
  readonly dataTopic?: string;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDataToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_properties: cdktf.listMapper(dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDataDataPropertiesToTerraform, false)(struct!.dataProperties),
    data_topic: cdktf.stringToTerraform(struct!.dataTopic),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDataToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_properties: {
      value: cdktf.listMapperHcl(dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDataDataPropertiesToHclTerraform, false)(struct!.dataProperties),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDataDataPropertiesList",
    },
    data_topic: {
      value: cdktf.stringToHclTerraform(struct!.dataTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataProperties = this._dataProperties?.internalValue;
    }
    if (this._dataTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTopic = this._dataTopic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataProperties.internalValue = undefined;
      this._dataTopic = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataProperties.internalValue = value.dataProperties;
      this._dataTopic = value.dataTopic;
    }
  }

  // data_properties - computed: false, optional: true, required: false
  private _dataProperties = new DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDataDataPropertiesList(this, "data_properties", false);
  public get dataProperties() {
    return this._dataProperties;
  }
  public putDataProperties(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDataDataProperties[] | cdktf.IResolvable) {
    this._dataProperties.internalValue = value;
  }
  public resetDataProperties() {
    this._dataProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPropertiesInput() {
    return this._dataProperties.internalValue;
  }

  // data_topic - computed: false, optional: true, required: false
  private _dataTopic?: string; 
  public get dataTopic() {
    return this.getStringAttribute('data_topic');
  }
  public set dataTopic(value: string) {
    this._dataTopic = value;
  }
  public resetDataTopic() {
    this._dataTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTopicInput() {
    return this._dataTopic;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDeviceModelRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#name DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDeviceModelRefToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDeviceModelRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDeviceModelRefToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDeviceModelRef | cdktf.IResolvable): any {
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

export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDeviceModelRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDeviceModelRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDeviceModelRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#key DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#operator DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#values DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchExpressionsToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchExpressionsToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchExpressionsOutputReference {
    return new DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchFields {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#key DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#operator DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#values DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchFieldsToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchFieldsToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchFieldsOutputReference {
    return new DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTerms {
  /**
  * A list of node selector requirements by node's labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#match_expressions DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable;
  /**
  * A list of node selector requirements by node's fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#match_fields DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#match_fields}
  */
  readonly matchFields?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchFields[] | cdktf.IResolvable;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}

export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsOutputReference {
    return new DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelector {
  /**
  * Required. A list of node selector terms. The terms are ORed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#node_selector_terms DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#node_selector_terms}
  */
  readonly nodeSelectorTerms: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTerms[] | cdktf.IResolvable;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_terms: cdktf.listMapper(dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsToTerraform, false)(struct!.nodeSelectorTerms),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector_terms: {
      value: cdktf.listMapperHcl(dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsToHclTerraform, false)(struct!.nodeSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelectorTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectorTerms = this._nodeSelectorTerms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = value.nodeSelectorTerms;
    }
  }

  // node_selector_terms - computed: false, optional: false, required: true
  private _nodeSelectorTerms = new DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTermsList(this, "node_selector_terms", false);
  public get nodeSelectorTerms() {
    return this._nodeSelectorTerms;
  }
  public putNodeSelectorTerms(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorNodeSelectorTerms[] | cdktf.IResolvable) {
    this._nodeSelectorTerms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorTermsInput() {
    return this._nodeSelectorTerms.internalValue;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverterOrderOfOperations {
  /**
  * Required: Specifies the operation to be performed to convert incoming data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#operation_type DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#operation_type}
  */
  readonly operationType?: string;
  /**
  * Required: Specifies with what value the operation is to be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#operation_value DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#operation_value}
  */
  readonly operationValue?: number;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverterOrderOfOperationsToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverterOrderOfOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation_type: cdktf.stringToTerraform(struct!.operationType),
    operation_value: cdktf.numberToTerraform(struct!.operationValue),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverterOrderOfOperationsToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverterOrderOfOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation_type: {
      value: cdktf.stringToHclTerraform(struct!.operationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation_value: {
      value: cdktf.numberToHclTerraform(struct!.operationValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverterOrderOfOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverterOrderOfOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationType = this._operationType;
    }
    if (this._operationValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationValue = this._operationValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverterOrderOfOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operationType = undefined;
      this._operationValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operationType = value.operationType;
      this._operationValue = value.operationValue;
    }
  }

  // operation_type - computed: false, optional: true, required: false
  private _operationType?: string; 
  public get operationType() {
    return this.getStringAttribute('operation_type');
  }
  public set operationType(value: string) {
    this._operationType = value;
  }
  public resetOperationType() {
    this._operationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationTypeInput() {
    return this._operationType;
  }

  // operation_value - computed: false, optional: true, required: false
  private _operationValue?: number; 
  public get operationValue() {
    return this.getNumberAttribute('operation_value');
  }
  public set operationValue(value: number) {
    this._operationValue = value;
  }
  public resetOperationValue() {
    this._operationValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationValueInput() {
    return this._operationValue;
  }
}

export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverterOrderOfOperationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverterOrderOfOperations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverterOrderOfOperationsOutputReference {
    return new DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverterOrderOfOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverter {
  /**
  * Required: Specifies the end index of incoming byte stream to be considered to convert the data the value specified should be inclusive for example if 3 is specified it includes the third index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#end_index DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#end_index}
  */
  readonly endIndex?: number;
  /**
  * Specifies in what order the operations(which are required to be performed to convert incoming data into understandable form) are performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#order_of_operations DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#order_of_operations}
  */
  readonly orderOfOperations?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverterOrderOfOperations[] | cdktf.IResolvable;
  /**
  * Refers to the number of bits to shift left, if left-shift operation is necessary for conversion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#shift_left DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#shift_left}
  */
  readonly shiftLeft?: number;
  /**
  * Refers to the number of bits to shift right, if right-shift operation is necessary for conversion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#shift_right DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#shift_right}
  */
  readonly shiftRight?: number;
  /**
  * Required: Specifies the start index of the incoming byte stream to be considered to convert the data. For example: start-index:2, end-index:3 concatenates the value present at second and third index of the incoming byte stream. If we want to reverse the order we can give it as start-index:3, end-index:2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#start_index DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#start_index}
  */
  readonly startIndex?: number;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverterToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_index: cdktf.numberToTerraform(struct!.endIndex),
    order_of_operations: cdktf.listMapper(dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverterOrderOfOperationsToTerraform, false)(struct!.orderOfOperations),
    shift_left: cdktf.numberToTerraform(struct!.shiftLeft),
    shift_right: cdktf.numberToTerraform(struct!.shiftRight),
    start_index: cdktf.numberToTerraform(struct!.startIndex),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverterToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_index: {
      value: cdktf.numberToHclTerraform(struct!.endIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    order_of_operations: {
      value: cdktf.listMapperHcl(dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverterOrderOfOperationsToHclTerraform, false)(struct!.orderOfOperations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverterOrderOfOperationsList",
    },
    shift_left: {
      value: cdktf.numberToHclTerraform(struct!.shiftLeft),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shift_right: {
      value: cdktf.numberToHclTerraform(struct!.shiftRight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_index: {
      value: cdktf.numberToHclTerraform(struct!.startIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIndex = this._endIndex;
    }
    if (this._orderOfOperations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderOfOperations = this._orderOfOperations?.internalValue;
    }
    if (this._shiftLeft !== undefined) {
      hasAnyValues = true;
      internalValueResult.shiftLeft = this._shiftLeft;
    }
    if (this._shiftRight !== undefined) {
      hasAnyValues = true;
      internalValueResult.shiftRight = this._shiftRight;
    }
    if (this._startIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIndex = this._startIndex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIndex = undefined;
      this._orderOfOperations.internalValue = undefined;
      this._shiftLeft = undefined;
      this._shiftRight = undefined;
      this._startIndex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIndex = value.endIndex;
      this._orderOfOperations.internalValue = value.orderOfOperations;
      this._shiftLeft = value.shiftLeft;
      this._shiftRight = value.shiftRight;
      this._startIndex = value.startIndex;
    }
  }

  // end_index - computed: false, optional: true, required: false
  private _endIndex?: number; 
  public get endIndex() {
    return this.getNumberAttribute('end_index');
  }
  public set endIndex(value: number) {
    this._endIndex = value;
  }
  public resetEndIndex() {
    this._endIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIndexInput() {
    return this._endIndex;
  }

  // order_of_operations - computed: false, optional: true, required: false
  private _orderOfOperations = new DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverterOrderOfOperationsList(this, "order_of_operations", false);
  public get orderOfOperations() {
    return this._orderOfOperations;
  }
  public putOrderOfOperations(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverterOrderOfOperations[] | cdktf.IResolvable) {
    this._orderOfOperations.internalValue = value;
  }
  public resetOrderOfOperations() {
    this._orderOfOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderOfOperationsInput() {
    return this._orderOfOperations.internalValue;
  }

  // shift_left - computed: false, optional: true, required: false
  private _shiftLeft?: number; 
  public get shiftLeft() {
    return this.getNumberAttribute('shift_left');
  }
  public set shiftLeft(value: number) {
    this._shiftLeft = value;
  }
  public resetShiftLeft() {
    this._shiftLeft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shiftLeftInput() {
    return this._shiftLeft;
  }

  // shift_right - computed: false, optional: true, required: false
  private _shiftRight?: number; 
  public get shiftRight() {
    return this.getNumberAttribute('shift_right');
  }
  public set shiftRight(value: number) {
    this._shiftRight = value;
  }
  public resetShiftRight() {
    this._shiftRight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shiftRightInput() {
    return this._shiftRight;
  }

  // start_index - computed: false, optional: true, required: false
  private _startIndex?: number; 
  public get startIndex() {
    return this.getNumberAttribute('start_index');
  }
  public set startIndex(value: number) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetooth {
  /**
  * Required: Unique ID of the corresponding operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#characteristic_uuid DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#characteristic_uuid}
  */
  readonly characteristicUuid?: string;
  /**
  * Responsible for converting the data being read from the bluetooth device into a form that is understandable by the platform
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#data_converter DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#data_converter}
  */
  readonly dataConverter?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverter;
  /**
  * Responsible for converting the data coming from the platform into a form that is understood by the bluetooth device For example: 'ON':[1], 'OFF':[0]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#data_write DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#data_write}
  */
  readonly dataWrite?: { [key: string]: string };
}

export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetooth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    characteristic_uuid: cdktf.stringToTerraform(struct!.characteristicUuid),
    data_converter: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverterToTerraform(struct!.dataConverter),
    data_write: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.dataWrite),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetooth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    characteristic_uuid: {
      value: cdktf.stringToHclTerraform(struct!.characteristicUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_converter: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverterToHclTerraform(struct!.dataConverter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverter",
    },
    data_write: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.dataWrite),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetooth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._characteristicUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.characteristicUuid = this._characteristicUuid;
    }
    if (this._dataConverter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataConverter = this._dataConverter?.internalValue;
    }
    if (this._dataWrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataWrite = this._dataWrite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetooth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._characteristicUuid = undefined;
      this._dataConverter.internalValue = undefined;
      this._dataWrite = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._characteristicUuid = value.characteristicUuid;
      this._dataConverter.internalValue = value.dataConverter;
      this._dataWrite = value.dataWrite;
    }
  }

  // characteristic_uuid - computed: false, optional: true, required: false
  private _characteristicUuid?: string; 
  public get characteristicUuid() {
    return this.getStringAttribute('characteristic_uuid');
  }
  public set characteristicUuid(value: string) {
    this._characteristicUuid = value;
  }
  public resetCharacteristicUuid() {
    this._characteristicUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characteristicUuidInput() {
    return this._characteristicUuid;
  }

  // data_converter - computed: false, optional: true, required: false
  private _dataConverter = new DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverterOutputReference(this, "data_converter");
  public get dataConverter() {
    return this._dataConverter;
  }
  public putDataConverter(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothDataConverter) {
    this._dataConverter.internalValue = value;
  }
  public resetDataConverter() {
    this._dataConverter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataConverterInput() {
    return this._dataConverter.internalValue;
  }

  // data_write - computed: false, optional: true, required: false
  private _dataWrite?: { [key: string]: string }; 
  public get dataWrite() {
    return this.getStringMapAttribute('data_write');
  }
  public set dataWrite(value: { [key: string]: string }) {
    this._dataWrite = value;
  }
  public resetDataWrite() {
    this._dataWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataWriteInput() {
    return this._dataWrite;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsCustomizedProtocol {
  /**
  * Required: The configData of customized protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#config_data DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#config_data}
  */
  readonly configData?: { [key: string]: string };
  /**
  * Required: name of customized protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#protocol_name DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#protocol_name}
  */
  readonly protocolName?: string;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsCustomizedProtocolToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsCustomizedProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configData),
    protocol_name: cdktf.stringToTerraform(struct!.protocolName),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsCustomizedProtocolToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsCustomizedProtocol | cdktf.IResolvable): any {
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

export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsCustomizedProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsCustomizedProtocol | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsCustomizedProtocol | cdktf.IResolvable | undefined) {
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
export interface DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsModbus {
  /**
  * Indicates whether the high and low register swapped. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#is_register_swap DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#is_register_swap}
  */
  readonly isRegisterSwap?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the high and low byte swapped. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#is_swap DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#is_swap}
  */
  readonly isSwap?: boolean | cdktf.IResolvable;
  /**
  * Required: Limit number of registers to read/write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#limit DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#limit}
  */
  readonly limit?: number;
  /**
  * Required: Offset indicates the starting register number to read/write data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#offset DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#offset}
  */
  readonly offset?: number;
  /**
  * Required: Type of register
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#register DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#register}
  */
  readonly register?: string;
  /**
  * The scale to convert raw property data into final units. Defaults to 1.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#scale DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#scale}
  */
  readonly scale?: number;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsModbusToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsModbus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_register_swap: cdktf.booleanToTerraform(struct!.isRegisterSwap),
    is_swap: cdktf.booleanToTerraform(struct!.isSwap),
    limit: cdktf.numberToTerraform(struct!.limit),
    offset: cdktf.numberToTerraform(struct!.offset),
    register: cdktf.stringToTerraform(struct!.register),
    scale: cdktf.numberToTerraform(struct!.scale),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsModbusToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsModbus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_register_swap: {
      value: cdktf.booleanToHclTerraform(struct!.isRegisterSwap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_swap: {
      value: cdktf.booleanToHclTerraform(struct!.isSwap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    offset: {
      value: cdktf.numberToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    register: {
      value: cdktf.stringToHclTerraform(struct!.register),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale: {
      value: cdktf.numberToHclTerraform(struct!.scale),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsModbusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsModbus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isRegisterSwap !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRegisterSwap = this._isRegisterSwap;
    }
    if (this._isSwap !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSwap = this._isSwap;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._register !== undefined) {
      hasAnyValues = true;
      internalValueResult.register = this._register;
    }
    if (this._scale !== undefined) {
      hasAnyValues = true;
      internalValueResult.scale = this._scale;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsModbus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isRegisterSwap = undefined;
      this._isSwap = undefined;
      this._limit = undefined;
      this._offset = undefined;
      this._register = undefined;
      this._scale = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isRegisterSwap = value.isRegisterSwap;
      this._isSwap = value.isSwap;
      this._limit = value.limit;
      this._offset = value.offset;
      this._register = value.register;
      this._scale = value.scale;
    }
  }

  // is_register_swap - computed: false, optional: true, required: false
  private _isRegisterSwap?: boolean | cdktf.IResolvable; 
  public get isRegisterSwap() {
    return this.getBooleanAttribute('is_register_swap');
  }
  public set isRegisterSwap(value: boolean | cdktf.IResolvable) {
    this._isRegisterSwap = value;
  }
  public resetIsRegisterSwap() {
    this._isRegisterSwap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRegisterSwapInput() {
    return this._isRegisterSwap;
  }

  // is_swap - computed: false, optional: true, required: false
  private _isSwap?: boolean | cdktf.IResolvable; 
  public get isSwap() {
    return this.getBooleanAttribute('is_swap');
  }
  public set isSwap(value: boolean | cdktf.IResolvable) {
    this._isSwap = value;
  }
  public resetIsSwap() {
    this._isSwap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSwapInput() {
    return this._isSwap;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // register - computed: false, optional: true, required: false
  private _register?: string; 
  public get register() {
    return this.getStringAttribute('register');
  }
  public set register(value: string) {
    this._register = value;
  }
  public resetRegister() {
    this._register = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerInput() {
    return this._register;
  }

  // scale - computed: false, optional: true, required: false
  private _scale?: number; 
  public get scale() {
    return this.getNumberAttribute('scale');
  }
  public set scale(value: number) {
    this._scale = value;
  }
  public resetScale() {
    this._scale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInput() {
    return this._scale;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsOpcua {
  /**
  * The name of opc-ua node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#browse_name DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#browse_name}
  */
  readonly browseName?: string;
  /**
  * Required: The ID of opc-ua node, e.g. 'ns=1,i=1005'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#node_id DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#node_id}
  */
  readonly nodeId?: string;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsOpcuaToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsOpcua | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    browse_name: cdktf.stringToTerraform(struct!.browseName),
    node_id: cdktf.stringToTerraform(struct!.nodeId),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsOpcuaToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsOpcua | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    browse_name: {
      value: cdktf.stringToHclTerraform(struct!.browseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsOpcuaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsOpcua | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._browseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.browseName = this._browseName;
    }
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsOpcua | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._browseName = undefined;
      this._nodeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._browseName = value.browseName;
      this._nodeId = value.nodeId;
    }
  }

  // browse_name - computed: false, optional: true, required: false
  private _browseName?: string; 
  public get browseName() {
    return this.getStringAttribute('browse_name');
  }
  public set browseName(value: string) {
    this._browseName = value;
  }
  public resetBrowseName() {
    this._browseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browseNameInput() {
    return this._browseName;
  }

  // node_id - computed: false, optional: true, required: false
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  public resetNodeId() {
    this._nodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitors {
  /**
  * Bluetooth represents a set of additional visitor config fields of bluetooth protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#bluetooth DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#bluetooth}
  */
  readonly bluetooth?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetooth;
  /**
  * Define how frequent mapper will collect from device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#collect_cycle DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#collect_cycle}
  */
  readonly collectCycle?: number;
  /**
  * CustomizedProtocol represents a set of visitor config fields of bluetooth protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#customized_protocol DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#customized_protocol}
  */
  readonly customizedProtocol?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsCustomizedProtocol;
  /**
  * Customized values for visitor of provided protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#customized_values DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#customized_values}
  */
  readonly customizedValues?: { [key: string]: string };
  /**
  * Modbus represents a set of additional visitor config fields of modbus protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#modbus DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#modbus}
  */
  readonly modbus?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsModbus;
  /**
  * Opcua represents a set of additional visitor config fields of opc-ua protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#opcua DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#opcua}
  */
  readonly opcua?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsOpcua;
  /**
  * Required: The device property name to be accessed. This should refer to one of the device properties defined in the device model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#property_name DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#property_name}
  */
  readonly propertyName?: string;
  /**
  * Define how frequent mapper will report the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#report_cycle DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#report_cycle}
  */
  readonly reportCycle?: number;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bluetooth: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothToTerraform(struct!.bluetooth),
    collect_cycle: cdktf.numberToTerraform(struct!.collectCycle),
    customized_protocol: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsCustomizedProtocolToTerraform(struct!.customizedProtocol),
    customized_values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customizedValues),
    modbus: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsModbusToTerraform(struct!.modbus),
    opcua: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsOpcuaToTerraform(struct!.opcua),
    property_name: cdktf.stringToTerraform(struct!.propertyName),
    report_cycle: cdktf.numberToTerraform(struct!.reportCycle),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bluetooth: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothToHclTerraform(struct!.bluetooth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetooth",
    },
    collect_cycle: {
      value: cdktf.numberToHclTerraform(struct!.collectCycle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    customized_protocol: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsCustomizedProtocolToHclTerraform(struct!.customizedProtocol),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsCustomizedProtocol",
    },
    customized_values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customizedValues),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    modbus: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsModbusToHclTerraform(struct!.modbus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsModbus",
    },
    opcua: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsOpcuaToHclTerraform(struct!.opcua),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsOpcua",
    },
    property_name: {
      value: cdktf.stringToHclTerraform(struct!.propertyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report_cycle: {
      value: cdktf.numberToHclTerraform(struct!.reportCycle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bluetooth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bluetooth = this._bluetooth?.internalValue;
    }
    if (this._collectCycle !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectCycle = this._collectCycle;
    }
    if (this._customizedProtocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizedProtocol = this._customizedProtocol?.internalValue;
    }
    if (this._customizedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizedValues = this._customizedValues;
    }
    if (this._modbus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modbus = this._modbus?.internalValue;
    }
    if (this._opcua?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opcua = this._opcua?.internalValue;
    }
    if (this._propertyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyName = this._propertyName;
    }
    if (this._reportCycle !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportCycle = this._reportCycle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bluetooth.internalValue = undefined;
      this._collectCycle = undefined;
      this._customizedProtocol.internalValue = undefined;
      this._customizedValues = undefined;
      this._modbus.internalValue = undefined;
      this._opcua.internalValue = undefined;
      this._propertyName = undefined;
      this._reportCycle = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bluetooth.internalValue = value.bluetooth;
      this._collectCycle = value.collectCycle;
      this._customizedProtocol.internalValue = value.customizedProtocol;
      this._customizedValues = value.customizedValues;
      this._modbus.internalValue = value.modbus;
      this._opcua.internalValue = value.opcua;
      this._propertyName = value.propertyName;
      this._reportCycle = value.reportCycle;
    }
  }

  // bluetooth - computed: false, optional: true, required: false
  private _bluetooth = new DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetoothOutputReference(this, "bluetooth");
  public get bluetooth() {
    return this._bluetooth;
  }
  public putBluetooth(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsBluetooth) {
    this._bluetooth.internalValue = value;
  }
  public resetBluetooth() {
    this._bluetooth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bluetoothInput() {
    return this._bluetooth.internalValue;
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

  // customized_protocol - computed: false, optional: true, required: false
  private _customizedProtocol = new DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsCustomizedProtocolOutputReference(this, "customized_protocol");
  public get customizedProtocol() {
    return this._customizedProtocol;
  }
  public putCustomizedProtocol(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsCustomizedProtocol) {
    this._customizedProtocol.internalValue = value;
  }
  public resetCustomizedProtocol() {
    this._customizedProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizedProtocolInput() {
    return this._customizedProtocol.internalValue;
  }

  // customized_values - computed: false, optional: true, required: false
  private _customizedValues?: { [key: string]: string }; 
  public get customizedValues() {
    return this.getStringMapAttribute('customized_values');
  }
  public set customizedValues(value: { [key: string]: string }) {
    this._customizedValues = value;
  }
  public resetCustomizedValues() {
    this._customizedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizedValuesInput() {
    return this._customizedValues;
  }

  // modbus - computed: false, optional: true, required: false
  private _modbus = new DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsModbusOutputReference(this, "modbus");
  public get modbus() {
    return this._modbus;
  }
  public putModbus(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsModbus) {
    this._modbus.internalValue = value;
  }
  public resetModbus() {
    this._modbus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modbusInput() {
    return this._modbus.internalValue;
  }

  // opcua - computed: false, optional: true, required: false
  private _opcua = new DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsOpcuaOutputReference(this, "opcua");
  public get opcua() {
    return this._opcua;
  }
  public putOpcua(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsOpcua) {
    this._opcua.internalValue = value;
  }
  public resetOpcua() {
    this._opcua.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opcuaInput() {
    return this._opcua.internalValue;
  }

  // property_name - computed: false, optional: true, required: false
  private _propertyName?: string; 
  public get propertyName() {
    return this.getStringAttribute('property_name');
  }
  public set propertyName(value: string) {
    this._propertyName = value;
  }
  public resetPropertyName() {
    this._propertyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyNameInput() {
    return this._propertyName;
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
}

export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsOutputReference {
    return new DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolBluetooth {
  /**
  * Unique identifier assigned to the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#mac_address DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#mac_address}
  */
  readonly macAddress?: string;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolBluetoothToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolBluetooth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolBluetoothToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolBluetooth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolBluetoothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolBluetooth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolBluetooth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._macAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._macAddress = value.macAddress;
    }
  }

  // mac_address - computed: false, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonCom {
  /**
  * Required. BaudRate 115200|57600|38400|19200|9600|4800|2400|1800|1200|600|300|200|150|134|110|75|50
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#baud_rate DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#baud_rate}
  */
  readonly baudRate?: number;
  /**
  * Required. Valid values are 8, 7, 6, 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#data_bits DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#data_bits}
  */
  readonly dataBits?: number;
  /**
  * Required. Valid options are 'none', 'even', 'odd'. Defaults to 'none'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#parity DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#parity}
  */
  readonly parity?: string;
  /**
  * Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#serial_port DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#serial_port}
  */
  readonly serialPort?: string;
  /**
  * Required. Bit that stops 1|2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#stop_bits DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#stop_bits}
  */
  readonly stopBits?: number;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonComToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonCom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    baud_rate: cdktf.numberToTerraform(struct!.baudRate),
    data_bits: cdktf.numberToTerraform(struct!.dataBits),
    parity: cdktf.stringToTerraform(struct!.parity),
    serial_port: cdktf.stringToTerraform(struct!.serialPort),
    stop_bits: cdktf.numberToTerraform(struct!.stopBits),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonComToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonCom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    baud_rate: {
      value: cdktf.numberToHclTerraform(struct!.baudRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_bits: {
      value: cdktf.numberToHclTerraform(struct!.dataBits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parity: {
      value: cdktf.stringToHclTerraform(struct!.parity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_port: {
      value: cdktf.stringToHclTerraform(struct!.serialPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stop_bits: {
      value: cdktf.numberToHclTerraform(struct!.stopBits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonComOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonCom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baudRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.baudRate = this._baudRate;
    }
    if (this._dataBits !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataBits = this._dataBits;
    }
    if (this._parity !== undefined) {
      hasAnyValues = true;
      internalValueResult.parity = this._parity;
    }
    if (this._serialPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialPort = this._serialPort;
    }
    if (this._stopBits !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopBits = this._stopBits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonCom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baudRate = undefined;
      this._dataBits = undefined;
      this._parity = undefined;
      this._serialPort = undefined;
      this._stopBits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baudRate = value.baudRate;
      this._dataBits = value.dataBits;
      this._parity = value.parity;
      this._serialPort = value.serialPort;
      this._stopBits = value.stopBits;
    }
  }

  // baud_rate - computed: false, optional: true, required: false
  private _baudRate?: number; 
  public get baudRate() {
    return this.getNumberAttribute('baud_rate');
  }
  public set baudRate(value: number) {
    this._baudRate = value;
  }
  public resetBaudRate() {
    this._baudRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baudRateInput() {
    return this._baudRate;
  }

  // data_bits - computed: false, optional: true, required: false
  private _dataBits?: number; 
  public get dataBits() {
    return this.getNumberAttribute('data_bits');
  }
  public set dataBits(value: number) {
    this._dataBits = value;
  }
  public resetDataBits() {
    this._dataBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataBitsInput() {
    return this._dataBits;
  }

  // parity - computed: false, optional: true, required: false
  private _parity?: string; 
  public get parity() {
    return this.getStringAttribute('parity');
  }
  public set parity(value: string) {
    this._parity = value;
  }
  public resetParity() {
    this._parity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parityInput() {
    return this._parity;
  }

  // serial_port - computed: false, optional: true, required: false
  private _serialPort?: string; 
  public get serialPort() {
    return this.getStringAttribute('serial_port');
  }
  public set serialPort(value: string) {
    this._serialPort = value;
  }
  public resetSerialPort() {
    this._serialPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialPortInput() {
    return this._serialPort;
  }

  // stop_bits - computed: false, optional: true, required: false
  private _stopBits?: number; 
  public get stopBits() {
    return this.getNumberAttribute('stop_bits');
  }
  public set stopBits(value: number) {
    this._stopBits = value;
  }
  public resetStopBits() {
    this._stopBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopBitsInput() {
    return this._stopBits;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonTcp {
  /**
  * Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#ip DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#ip}
  */
  readonly ip?: string;
  /**
  * Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#port DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonTcpToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonTcpToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._port = value.port;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommon {
  /**
  * Define retry times of mapper will collect from device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#collect_retry_times DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#collect_retry_times}
  */
  readonly collectRetryTimes?: number;
  /**
  * Define timeout of mapper collect from device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#collect_timeout DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#collect_timeout}
  */
  readonly collectTimeout?: number;
  /**
  * Define collect type, sync or async.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#collect_type DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#collect_type}
  */
  readonly collectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#com DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#com}
  */
  readonly com?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonCom;
  /**
  * Communication type, like tcp client, tcp server or COM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#comm_type DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#comm_type}
  */
  readonly commType?: string;
  /**
  * Customized values for provided protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#customized_values DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#customized_values}
  */
  readonly customizedValues?: { [key: string]: string };
  /**
  * Reconnecting retry times
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#reconn_retry_times DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#reconn_retry_times}
  */
  readonly reconnRetryTimes?: number;
  /**
  * Reconnection timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#reconn_timeout DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#reconn_timeout}
  */
  readonly reconnTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#tcp DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#tcp}
  */
  readonly tcp?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonTcp;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collect_retry_times: cdktf.numberToTerraform(struct!.collectRetryTimes),
    collect_timeout: cdktf.numberToTerraform(struct!.collectTimeout),
    collect_type: cdktf.stringToTerraform(struct!.collectType),
    com: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonComToTerraform(struct!.com),
    comm_type: cdktf.stringToTerraform(struct!.commType),
    customized_values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customizedValues),
    reconn_retry_times: cdktf.numberToTerraform(struct!.reconnRetryTimes),
    reconn_timeout: cdktf.numberToTerraform(struct!.reconnTimeout),
    tcp: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonTcpToTerraform(struct!.tcp),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collect_retry_times: {
      value: cdktf.numberToHclTerraform(struct!.collectRetryTimes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    collect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.collectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    collect_type: {
      value: cdktf.stringToHclTerraform(struct!.collectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    com: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonComToHclTerraform(struct!.com),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonCom",
    },
    comm_type: {
      value: cdktf.stringToHclTerraform(struct!.commType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customized_values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customizedValues),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    reconn_retry_times: {
      value: cdktf.numberToHclTerraform(struct!.reconnRetryTimes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reconn_timeout: {
      value: cdktf.numberToHclTerraform(struct!.reconnTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonTcpToHclTerraform(struct!.tcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonTcp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommon | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectRetryTimes !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectRetryTimes = this._collectRetryTimes;
    }
    if (this._collectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectTimeout = this._collectTimeout;
    }
    if (this._collectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectType = this._collectType;
    }
    if (this._com?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.com = this._com?.internalValue;
    }
    if (this._commType !== undefined) {
      hasAnyValues = true;
      internalValueResult.commType = this._commType;
    }
    if (this._customizedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizedValues = this._customizedValues;
    }
    if (this._reconnRetryTimes !== undefined) {
      hasAnyValues = true;
      internalValueResult.reconnRetryTimes = this._reconnRetryTimes;
    }
    if (this._reconnTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.reconnTimeout = this._reconnTimeout;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommon | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectRetryTimes = undefined;
      this._collectTimeout = undefined;
      this._collectType = undefined;
      this._com.internalValue = undefined;
      this._commType = undefined;
      this._customizedValues = undefined;
      this._reconnRetryTimes = undefined;
      this._reconnTimeout = undefined;
      this._tcp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectRetryTimes = value.collectRetryTimes;
      this._collectTimeout = value.collectTimeout;
      this._collectType = value.collectType;
      this._com.internalValue = value.com;
      this._commType = value.commType;
      this._customizedValues = value.customizedValues;
      this._reconnRetryTimes = value.reconnRetryTimes;
      this._reconnTimeout = value.reconnTimeout;
      this._tcp.internalValue = value.tcp;
    }
  }

  // collect_retry_times - computed: false, optional: true, required: false
  private _collectRetryTimes?: number; 
  public get collectRetryTimes() {
    return this.getNumberAttribute('collect_retry_times');
  }
  public set collectRetryTimes(value: number) {
    this._collectRetryTimes = value;
  }
  public resetCollectRetryTimes() {
    this._collectRetryTimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectRetryTimesInput() {
    return this._collectRetryTimes;
  }

  // collect_timeout - computed: false, optional: true, required: false
  private _collectTimeout?: number; 
  public get collectTimeout() {
    return this.getNumberAttribute('collect_timeout');
  }
  public set collectTimeout(value: number) {
    this._collectTimeout = value;
  }
  public resetCollectTimeout() {
    this._collectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectTimeoutInput() {
    return this._collectTimeout;
  }

  // collect_type - computed: false, optional: true, required: false
  private _collectType?: string; 
  public get collectType() {
    return this.getStringAttribute('collect_type');
  }
  public set collectType(value: string) {
    this._collectType = value;
  }
  public resetCollectType() {
    this._collectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectTypeInput() {
    return this._collectType;
  }

  // com - computed: false, optional: true, required: false
  private _com = new DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonComOutputReference(this, "com");
  public get com() {
    return this._com;
  }
  public putCom(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonCom) {
    this._com.internalValue = value;
  }
  public resetCom() {
    this._com.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comInput() {
    return this._com.internalValue;
  }

  // comm_type - computed: false, optional: true, required: false
  private _commType?: string; 
  public get commType() {
    return this.getStringAttribute('comm_type');
  }
  public set commType(value: string) {
    this._commType = value;
  }
  public resetCommType() {
    this._commType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commTypeInput() {
    return this._commType;
  }

  // customized_values - computed: false, optional: true, required: false
  private _customizedValues?: { [key: string]: string }; 
  public get customizedValues() {
    return this.getStringMapAttribute('customized_values');
  }
  public set customizedValues(value: { [key: string]: string }) {
    this._customizedValues = value;
  }
  public resetCustomizedValues() {
    this._customizedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizedValuesInput() {
    return this._customizedValues;
  }

  // reconn_retry_times - computed: false, optional: true, required: false
  private _reconnRetryTimes?: number; 
  public get reconnRetryTimes() {
    return this.getNumberAttribute('reconn_retry_times');
  }
  public set reconnRetryTimes(value: number) {
    this._reconnRetryTimes = value;
  }
  public resetReconnRetryTimes() {
    this._reconnRetryTimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconnRetryTimesInput() {
    return this._reconnRetryTimes;
  }

  // reconn_timeout - computed: false, optional: true, required: false
  private _reconnTimeout?: number; 
  public get reconnTimeout() {
    return this.getNumberAttribute('reconn_timeout');
  }
  public set reconnTimeout(value: number) {
    this._reconnTimeout = value;
  }
  public resetReconnTimeout() {
    this._reconnTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconnTimeoutInput() {
    return this._reconnTimeout;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCustomizedProtocol {
  /**
  * Any config data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#config_data DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#config_data}
  */
  readonly configData?: { [key: string]: string };
  /**
  * Unique protocol name Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#protocol_name DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#protocol_name}
  */
  readonly protocolName?: string;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCustomizedProtocolToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCustomizedProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configData),
    protocol_name: cdktf.stringToTerraform(struct!.protocolName),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCustomizedProtocolToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCustomizedProtocol | cdktf.IResolvable): any {
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

export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCustomizedProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCustomizedProtocol | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCustomizedProtocol | cdktf.IResolvable | undefined) {
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
export interface DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolModbus {
  /**
  * Required. 0-255
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#slave_id DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#slave_id}
  */
  readonly slaveId?: number;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolModbusToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolModbus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slave_id: cdktf.numberToTerraform(struct!.slaveId),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolModbusToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolModbus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    slave_id: {
      value: cdktf.numberToHclTerraform(struct!.slaveId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolModbusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolModbus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slaveId !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaveId = this._slaveId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolModbus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._slaveId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._slaveId = value.slaveId;
    }
  }

  // slave_id - computed: false, optional: true, required: false
  private _slaveId?: number; 
  public get slaveId() {
    return this.getNumberAttribute('slave_id');
  }
  public set slaveId(value: number) {
    this._slaveId = value;
  }
  public resetSlaveId() {
    this._slaveId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveIdInput() {
    return this._slaveId;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolOpcua {
  /**
  * Certificate for access opc server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#certificate DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#certificate}
  */
  readonly certificate?: string;
  /**
  * Password for access opc server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#password DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#password}
  */
  readonly password?: string;
  /**
  * PrivateKey for access opc server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#private_key DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#private_key}
  */
  readonly privateKey?: string;
  /**
  * Defaults to 'none'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#security_mode DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#security_mode}
  */
  readonly securityMode?: string;
  /**
  * Defaults to 'none'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#security_policy DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#security_policy}
  */
  readonly securityPolicy?: string;
  /**
  * Timeout seconds for the opc server connection.???
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#timeout DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#timeout}
  */
  readonly timeout?: number;
  /**
  * Required: The URL for opc server endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#url DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#url}
  */
  readonly url?: string;
  /**
  * Username for access opc server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#user_name DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#user_name}
  */
  readonly userName?: string;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolOpcuaToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolOpcua | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    password: cdktf.stringToTerraform(struct!.password),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    security_mode: cdktf.stringToTerraform(struct!.securityMode),
    security_policy: cdktf.stringToTerraform(struct!.securityPolicy),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    url: cdktf.stringToTerraform(struct!.url),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolOpcuaToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolOpcua | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_mode: {
      value: cdktf.stringToHclTerraform(struct!.securityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_policy: {
      value: cdktf.stringToHclTerraform(struct!.securityPolicy),
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
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
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

export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolOpcuaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolOpcua | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._securityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityMode = this._securityMode;
    }
    if (this._securityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityPolicy = this._securityPolicy;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolOpcua | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._password = undefined;
      this._privateKey = undefined;
      this._securityMode = undefined;
      this._securityPolicy = undefined;
      this._timeout = undefined;
      this._url = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._password = value.password;
      this._privateKey = value.privateKey;
      this._securityMode = value.securityMode;
      this._securityPolicy = value.securityPolicy;
      this._timeout = value.timeout;
      this._url = value.url;
      this._userName = value.userName;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // security_mode - computed: false, optional: true, required: false
  private _securityMode?: string; 
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }
  public set securityMode(value: string) {
    this._securityMode = value;
  }
  public resetSecurityMode() {
    this._securityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModeInput() {
    return this._securityMode;
  }

  // security_policy - computed: false, optional: true, required: false
  private _securityPolicy?: string; 
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }
  public set securityPolicy(value: string) {
    this._securityPolicy = value;
  }
  public resetSecurityPolicy() {
    this._securityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyInput() {
    return this._securityPolicy;
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
export interface DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocol {
  /**
  * Protocol configuration for bluetooth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#bluetooth DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#bluetooth}
  */
  readonly bluetooth?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolBluetooth;
  /**
  * Configuration for protocol common part
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#common DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#common}
  */
  readonly common?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommon;
  /**
  * Configuration for customized protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#customized_protocol DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#customized_protocol}
  */
  readonly customizedProtocol?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCustomizedProtocol;
  /**
  * Protocol configuration for modbus
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#modbus DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#modbus}
  */
  readonly modbus?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolModbus;
  /**
  * Protocol configuration for opc-ua
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#opcua DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#opcua}
  */
  readonly opcua?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolOpcua;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bluetooth: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolBluetoothToTerraform(struct!.bluetooth),
    common: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonToTerraform(struct!.common),
    customized_protocol: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCustomizedProtocolToTerraform(struct!.customizedProtocol),
    modbus: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolModbusToTerraform(struct!.modbus),
    opcua: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolOpcuaToTerraform(struct!.opcua),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bluetooth: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolBluetoothToHclTerraform(struct!.bluetooth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolBluetooth",
    },
    common: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonToHclTerraform(struct!.common),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommon",
    },
    customized_protocol: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCustomizedProtocolToHclTerraform(struct!.customizedProtocol),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCustomizedProtocol",
    },
    modbus: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolModbusToHclTerraform(struct!.modbus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolModbus",
    },
    opcua: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolOpcuaToHclTerraform(struct!.opcua),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolOpcua",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bluetooth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bluetooth = this._bluetooth?.internalValue;
    }
    if (this._common?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.common = this._common?.internalValue;
    }
    if (this._customizedProtocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizedProtocol = this._customizedProtocol?.internalValue;
    }
    if (this._modbus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modbus = this._modbus?.internalValue;
    }
    if (this._opcua?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opcua = this._opcua?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bluetooth.internalValue = undefined;
      this._common.internalValue = undefined;
      this._customizedProtocol.internalValue = undefined;
      this._modbus.internalValue = undefined;
      this._opcua.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bluetooth.internalValue = value.bluetooth;
      this._common.internalValue = value.common;
      this._customizedProtocol.internalValue = value.customizedProtocol;
      this._modbus.internalValue = value.modbus;
      this._opcua.internalValue = value.opcua;
    }
  }

  // bluetooth - computed: false, optional: true, required: false
  private _bluetooth = new DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolBluetoothOutputReference(this, "bluetooth");
  public get bluetooth() {
    return this._bluetooth;
  }
  public putBluetooth(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolBluetooth) {
    this._bluetooth.internalValue = value;
  }
  public resetBluetooth() {
    this._bluetooth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bluetoothInput() {
    return this._bluetooth.internalValue;
  }

  // common - computed: false, optional: true, required: false
  private _common = new DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommonOutputReference(this, "common");
  public get common() {
    return this._common;
  }
  public putCommon(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCommon) {
    this._common.internalValue = value;
  }
  public resetCommon() {
    this._common.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonInput() {
    return this._common.internalValue;
  }

  // customized_protocol - computed: false, optional: true, required: false
  private _customizedProtocol = new DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCustomizedProtocolOutputReference(this, "customized_protocol");
  public get customizedProtocol() {
    return this._customizedProtocol;
  }
  public putCustomizedProtocol(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolCustomizedProtocol) {
    this._customizedProtocol.internalValue = value;
  }
  public resetCustomizedProtocol() {
    this._customizedProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizedProtocolInput() {
    return this._customizedProtocol.internalValue;
  }

  // modbus - computed: false, optional: true, required: false
  private _modbus = new DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolModbusOutputReference(this, "modbus");
  public get modbus() {
    return this._modbus;
  }
  public putModbus(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolModbus) {
    this._modbus.internalValue = value;
  }
  public resetModbus() {
    this._modbus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modbusInput() {
    return this._modbus.internalValue;
  }

  // opcua - computed: false, optional: true, required: false
  private _opcua = new DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolOpcuaOutputReference(this, "opcua");
  public get opcua() {
    return this._opcua;
  }
  public putOpcua(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolOpcua) {
    this._opcua.internalValue = value;
  }
  public resetOpcua() {
    this._opcua.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opcuaInput() {
    return this._opcua.internalValue;
  }
}
export interface DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpec {
  /**
  * Data section describe a list of time-series properties which should be processed on edge node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#data DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#data}
  */
  readonly data?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecData;
  /**
  * Required: DeviceModelRef is reference to the device model used as a template to create the device instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#device_model_ref DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#device_model_ref}
  */
  readonly deviceModelRef?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDeviceModelRef;
  /**
  * NodeSelector indicates the binding preferences between devices and nodes. Refer to k8s.io/kubernetes/pkg/apis/core NodeSelector for more details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#node_selector DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#node_selector}
  */
  readonly nodeSelector?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelector;
  /**
  * List of property visitors which describe how to access the device properties. PropertyVisitors must unique by propertyVisitor.propertyName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#property_visitors DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#property_visitors}
  */
  readonly propertyVisitors?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitors[] | cdktf.IResolvable;
  /**
  * Required: The protocol configuration used to connect to the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#protocol DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest#protocol}
  */
  readonly protocol?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocol;
}

export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecToTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDataToTerraform(struct!.data),
    device_model_ref: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDeviceModelRefToTerraform(struct!.deviceModelRef),
    node_selector: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorToTerraform(struct!.nodeSelector),
    property_visitors: cdktf.listMapper(dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsToTerraform, false)(struct!.propertyVisitors),
    protocol: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolToTerraform(struct!.protocol),
  }
}


export function dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecToHclTerraform(struct?: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDataToHclTerraform(struct!.data),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecData",
    },
    device_model_ref: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDeviceModelRefToHclTerraform(struct!.deviceModelRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDeviceModelRef",
    },
    node_selector: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorToHclTerraform(struct!.nodeSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelector",
    },
    property_visitors: {
      value: cdktf.listMapperHcl(dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsToHclTerraform, false)(struct!.propertyVisitors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsList",
    },
    protocol: {
      value: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolToHclTerraform(struct!.protocol),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocol",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    if (this._deviceModelRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceModelRef = this._deviceModelRef?.internalValue;
    }
    if (this._nodeSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector?.internalValue;
    }
    if (this._propertyVisitors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyVisitors = this._propertyVisitors?.internalValue;
    }
    if (this._protocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data.internalValue = undefined;
      this._deviceModelRef.internalValue = undefined;
      this._nodeSelector.internalValue = undefined;
      this._propertyVisitors.internalValue = undefined;
      this._protocol.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data.internalValue = value.data;
      this._deviceModelRef.internalValue = value.deviceModelRef;
      this._nodeSelector.internalValue = value.nodeSelector;
      this._propertyVisitors.internalValue = value.propertyVisitors;
      this._protocol.internalValue = value.protocol;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data = new DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecData) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }

  // device_model_ref - computed: false, optional: true, required: false
  private _deviceModelRef = new DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDeviceModelRefOutputReference(this, "device_model_ref");
  public get deviceModelRef() {
    return this._deviceModelRef;
  }
  public putDeviceModelRef(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecDeviceModelRef) {
    this._deviceModelRef.internalValue = value;
  }
  public resetDeviceModelRef() {
    this._deviceModelRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceModelRefInput() {
    return this._deviceModelRef.internalValue;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector = new DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelectorOutputReference(this, "node_selector");
  public get nodeSelector() {
    return this._nodeSelector;
  }
  public putNodeSelector(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecNodeSelector) {
    this._nodeSelector.internalValue = value;
  }
  public resetNodeSelector() {
    this._nodeSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector.internalValue;
  }

  // property_visitors - computed: false, optional: true, required: false
  private _propertyVisitors = new DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitorsList(this, "property_visitors", false);
  public get propertyVisitors() {
    return this._propertyVisitors;
  }
  public putPropertyVisitors(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecPropertyVisitors[] | cdktf.IResolvable) {
    this._propertyVisitors.internalValue = value;
  }
  public resetPropertyVisitors() {
    this._propertyVisitors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyVisitorsInput() {
    return this._propertyVisitors.internalValue;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol = new DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecProtocol) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest k8s_devices_kubeedge_io_device_v1alpha2_manifest}
*/
export class DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_devices_kubeedge_io_device_v1alpha2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest to import
  * @param importFromId The id of the existing DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SDevicesKubeedgeIoDeviceV1Alpha2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_devices_kubeedge_io_device_v1alpha2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/devices_kubeedge_io_device_v1alpha2_manifest k8s_devices_kubeedge_io_device_v1alpha2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_devices_kubeedge_io_device_v1alpha2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3',
        providerVersionConstraint: '2025.11.3'
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
  private _metadata = new DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpec) {
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
      metadata: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestMetadata",
      },
      spec: {
        value: dataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDevicesKubeedgeIoDeviceV1Alpha2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
