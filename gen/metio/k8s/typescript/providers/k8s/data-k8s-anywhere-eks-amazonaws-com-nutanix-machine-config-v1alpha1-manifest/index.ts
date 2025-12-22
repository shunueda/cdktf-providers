// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#metadata DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestMetadata;
  /**
  * NutanixMachineConfigSpec defines the desired state of NutanixMachineConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#spec DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpec;
}
export interface DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#annotations DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#labels DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#namespace DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecAdditionalCategories {
  /**
  * key is the Key of the category in the Prism Central.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#key DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * value is the category value linked to the key in the Prism Central.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#value DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecAdditionalCategoriesToTerraform(struct?: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecAdditionalCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecAdditionalCategoriesToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecAdditionalCategories | cdktf.IResolvable): any {
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

export class DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecAdditionalCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecAdditionalCategories | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecAdditionalCategories | cdktf.IResolvable | undefined) {
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

export class DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecAdditionalCategoriesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecAdditionalCategories[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecAdditionalCategoriesOutputReference {
    return new DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecAdditionalCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecCluster {
  /**
  * name is the resource name in the PC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Type is the identifier type to use for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#type DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * uuid is the UUID of the resource in the PC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#uuid DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#uuid}
  */
  readonly uuid?: string;
}

export function dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecClusterToTerraform(struct?: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecClusterToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecCluster | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._uuid = value.uuid;
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

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecGpus {
  /**
  * deviceID is the device ID of the GPU device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#device_id DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#device_id}
  */
  readonly deviceId?: number;
  /**
  * vendorID is the vendor ID of the GPU device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * type is the type of the GPU device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#type DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecGpusToTerraform(struct?: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecGpus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_id: cdktf.numberToTerraform(struct!.deviceId),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecGpusToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecGpus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_id: {
      value: cdktf.numberToHclTerraform(struct!.deviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecGpusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecGpus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
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

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecGpus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceId = undefined;
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
      this._deviceId = value.deviceId;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // device_id - computed: false, optional: true, required: false
  private _deviceId?: number; 
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }
  public set deviceId(value: number) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
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

export class DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecGpusList extends cdktf.ComplexList {
  public internalValue? : DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecGpus[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecGpusOutputReference {
    return new DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecGpusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecImage {
  /**
  * name is the resource name in the PC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Type is the identifier type to use for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#type DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * uuid is the UUID of the resource in the PC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#uuid DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#uuid}
  */
  readonly uuid?: string;
}

export function dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecImageToTerraform(struct?: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecImageToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecImage | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._uuid = value.uuid;
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

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecProject {
  /**
  * name is the resource name in the PC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Type is the identifier type to use for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#type DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * uuid is the UUID of the resource in the PC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#uuid DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#uuid}
  */
  readonly uuid?: string;
}

export function dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecProjectToTerraform(struct?: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecProject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecProjectToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecProject | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecProjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecProject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecProject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._uuid = value.uuid;
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

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecSubnet {
  /**
  * name is the resource name in the PC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Type is the identifier type to use for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#type DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * uuid is the UUID of the resource in the PC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#uuid DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#uuid}
  */
  readonly uuid?: string;
}

export function dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecSubnetToTerraform(struct?: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecSubnetToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecSubnet | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._uuid = value.uuid;
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

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#ssh_authorized_keys DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#ssh_authorized_keys}
  */
  readonly sshAuthorizedKeys: string[];
}

export function dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecUsersToTerraform(struct?: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ssh_authorized_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshAuthorizedKeys),
  }
}


export function dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecUsersToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecUsers | cdktf.IResolvable): any {
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
    ssh_authorized_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshAuthorizedKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sshAuthorizedKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshAuthorizedKeys = this._sshAuthorizedKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._sshAuthorizedKeys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._sshAuthorizedKeys = value.sshAuthorizedKeys;
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

  // ssh_authorized_keys - computed: false, optional: false, required: true
  private _sshAuthorizedKeys?: string[]; 
  public get sshAuthorizedKeys() {
    return this.getListAttribute('ssh_authorized_keys');
  }
  public set sshAuthorizedKeys(value: string[]) {
    this._sshAuthorizedKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAuthorizedKeysInput() {
    return this._sshAuthorizedKeys;
  }
}

export class DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecUsersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecUsers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecUsersOutputReference {
    return new DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpec {
  /**
  * additionalCategories is a list of optional categories to be added to the VM. Categories must be created in Prism Central before they can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#additional_categories DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#additional_categories}
  */
  readonly additionalCategories?: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecAdditionalCategories[] | cdktf.IResolvable;
  /**
  * cluster is to identify the cluster (the Prism Element under management of the Prism Central), in which the Machine's VM will be created. The cluster identifier (uuid or name) can be obtained from the Prism Central console or using the prism_central API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#cluster DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#cluster}
  */
  readonly cluster: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecCluster;
  /**
  * List of GPU devices that should be added to the VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#gpus DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#gpus}
  */
  readonly gpus?: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecGpus[] | cdktf.IResolvable;
  /**
  * image is to identify the OS image uploaded to the Prism Central (PC) The image identifier (uuid or name) can be obtained from the Prism Central console or using the Prism Central API. It must include the Kubernetes version(s). For example, a template used for Kubernetes 1.27 could be ubuntu-2204-1.27.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#image DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#image}
  */
  readonly image: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecImage;
  /**
  * memorySize is the memory size (in Quantity format) of the VM The minimum memorySize is 2Gi bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#memory_size DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#memory_size}
  */
  readonly memorySize: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#os_family DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#os_family}
  */
  readonly osFamily: string;
  /**
  * Project is an optional property that specifies the Prism Central project so that machine resources can be linked to it. The project identifier (uuid or name) can be obtained from the Prism Central console or using the Prism Central API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#project DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#project}
  */
  readonly project?: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecProject;
  /**
  * subnet is to identify the cluster's network subnet to use for the Machine's VM The cluster identifier (uuid or name) can be obtained from the Prism Central console or using the Prism Central API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#subnet DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#subnet}
  */
  readonly subnet: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecSubnet;
  /**
  * systemDiskSize is size (in Quantity format) of the system disk of the VM The minimum systemDiskSize is 20Gi bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#system_disk_size DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#system_disk_size}
  */
  readonly systemDiskSize: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#users DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#users}
  */
  readonly users?: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecUsers[] | cdktf.IResolvable;
  /**
  * vcpuSockets is the number of vCPU sockets of the VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#vcpu_sockets DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#vcpu_sockets}
  */
  readonly vcpuSockets: number;
  /**
  * vcpusPerSocket is the number of vCPUs per socket of the VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#vcpus_per_socket DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest#vcpus_per_socket}
  */
  readonly vcpusPerSocket: number;
}

export function dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_categories: cdktf.listMapper(dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecAdditionalCategoriesToTerraform, false)(struct!.additionalCategories),
    cluster: dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecClusterToTerraform(struct!.cluster),
    gpus: cdktf.listMapper(dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecGpusToTerraform, false)(struct!.gpus),
    image: dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecImageToTerraform(struct!.image),
    memory_size: cdktf.stringToTerraform(struct!.memorySize),
    os_family: cdktf.stringToTerraform(struct!.osFamily),
    project: dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecProjectToTerraform(struct!.project),
    subnet: dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecSubnetToTerraform(struct!.subnet),
    system_disk_size: cdktf.stringToTerraform(struct!.systemDiskSize),
    users: cdktf.listMapper(dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecUsersToTerraform, false)(struct!.users),
    vcpu_sockets: cdktf.numberToTerraform(struct!.vcpuSockets),
    vcpus_per_socket: cdktf.numberToTerraform(struct!.vcpusPerSocket),
  }
}


export function dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_categories: {
      value: cdktf.listMapperHcl(dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecAdditionalCategoriesToHclTerraform, false)(struct!.additionalCategories),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecAdditionalCategoriesList",
    },
    cluster: {
      value: dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecCluster",
    },
    gpus: {
      value: cdktf.listMapperHcl(dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecGpusToHclTerraform, false)(struct!.gpus),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecGpusList",
    },
    image: {
      value: dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecImage",
    },
    memory_size: {
      value: cdktf.stringToHclTerraform(struct!.memorySize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_family: {
      value: cdktf.stringToHclTerraform(struct!.osFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecProjectToHclTerraform(struct!.project),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecProject",
    },
    subnet: {
      value: dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecSubnetToHclTerraform(struct!.subnet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecSubnet",
    },
    system_disk_size: {
      value: cdktf.stringToHclTerraform(struct!.systemDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    users: {
      value: cdktf.listMapperHcl(dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecUsersToHclTerraform, false)(struct!.users),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecUsersList",
    },
    vcpu_sockets: {
      value: cdktf.numberToHclTerraform(struct!.vcpuSockets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vcpus_per_socket: {
      value: cdktf.numberToHclTerraform(struct!.vcpusPerSocket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalCategories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalCategories = this._additionalCategories?.internalValue;
    }
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._gpus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpus = this._gpus?.internalValue;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._memorySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.memorySize = this._memorySize;
    }
    if (this._osFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.osFamily = this._osFamily;
    }
    if (this._project?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project?.internalValue;
    }
    if (this._subnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet?.internalValue;
    }
    if (this._systemDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemDiskSize = this._systemDiskSize;
    }
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    if (this._vcpuSockets !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcpuSockets = this._vcpuSockets;
    }
    if (this._vcpusPerSocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcpusPerSocket = this._vcpusPerSocket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalCategories.internalValue = undefined;
      this._cluster.internalValue = undefined;
      this._gpus.internalValue = undefined;
      this._image.internalValue = undefined;
      this._memorySize = undefined;
      this._osFamily = undefined;
      this._project.internalValue = undefined;
      this._subnet.internalValue = undefined;
      this._systemDiskSize = undefined;
      this._users.internalValue = undefined;
      this._vcpuSockets = undefined;
      this._vcpusPerSocket = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalCategories.internalValue = value.additionalCategories;
      this._cluster.internalValue = value.cluster;
      this._gpus.internalValue = value.gpus;
      this._image.internalValue = value.image;
      this._memorySize = value.memorySize;
      this._osFamily = value.osFamily;
      this._project.internalValue = value.project;
      this._subnet.internalValue = value.subnet;
      this._systemDiskSize = value.systemDiskSize;
      this._users.internalValue = value.users;
      this._vcpuSockets = value.vcpuSockets;
      this._vcpusPerSocket = value.vcpusPerSocket;
    }
  }

  // additional_categories - computed: false, optional: true, required: false
  private _additionalCategories = new DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecAdditionalCategoriesList(this, "additional_categories", false);
  public get additionalCategories() {
    return this._additionalCategories;
  }
  public putAdditionalCategories(value: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecAdditionalCategories[] | cdktf.IResolvable) {
    this._additionalCategories.internalValue = value;
  }
  public resetAdditionalCategories() {
    this._additionalCategories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalCategoriesInput() {
    return this._additionalCategories.internalValue;
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster = new DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecCluster) {
    this._cluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // gpus - computed: false, optional: true, required: false
  private _gpus = new DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecGpusList(this, "gpus", false);
  public get gpus() {
    return this._gpus;
  }
  public putGpus(value: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecGpus[] | cdktf.IResolvable) {
    this._gpus.internalValue = value;
  }
  public resetGpus() {
    this._gpus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpusInput() {
    return this._gpus.internalValue;
  }

  // image - computed: false, optional: false, required: true
  private _image = new DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecImage) {
    this._image.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // memory_size - computed: false, optional: false, required: true
  private _memorySize?: string; 
  public get memorySize() {
    return this.getStringAttribute('memory_size');
  }
  public set memorySize(value: string) {
    this._memorySize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeInput() {
    return this._memorySize;
  }

  // os_family - computed: false, optional: false, required: true
  private _osFamily?: string; 
  public get osFamily() {
    return this.getStringAttribute('os_family');
  }
  public set osFamily(value: string) {
    this._osFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osFamilyInput() {
    return this._osFamily;
  }

  // project - computed: false, optional: true, required: false
  private _project = new DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecProjectOutputReference(this, "project");
  public get project() {
    return this._project;
  }
  public putProject(value: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecProject) {
    this._project.internalValue = value;
  }
  public resetProject() {
    this._project.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project.internalValue;
  }

  // subnet - computed: false, optional: false, required: true
  private _subnet = new DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecSubnetOutputReference(this, "subnet");
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecSubnet) {
    this._subnet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }

  // system_disk_size - computed: false, optional: false, required: true
  private _systemDiskSize?: string; 
  public get systemDiskSize() {
    return this.getStringAttribute('system_disk_size');
  }
  public set systemDiskSize(value: string) {
    this._systemDiskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskSizeInput() {
    return this._systemDiskSize;
  }

  // users - computed: false, optional: true, required: false
  private _users = new DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }

  // vcpu_sockets - computed: false, optional: false, required: true
  private _vcpuSockets?: number; 
  public get vcpuSockets() {
    return this.getNumberAttribute('vcpu_sockets');
  }
  public set vcpuSockets(value: number) {
    this._vcpuSockets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpuSocketsInput() {
    return this._vcpuSockets;
  }

  // vcpus_per_socket - computed: false, optional: false, required: true
  private _vcpusPerSocket?: number; 
  public get vcpusPerSocket() {
    return this.getNumberAttribute('vcpus_per_socket');
  }
  public set vcpusPerSocket(value: number) {
    this._vcpusPerSocket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpusPerSocketInput() {
    return this._vcpusPerSocket;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest k8s_anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest}
*/
export class DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest k8s_anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_anywhere_eks_amazonaws_com_nutanix_machine_config_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAnywhereEksAmazonawsComNutanixMachineConfigV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
