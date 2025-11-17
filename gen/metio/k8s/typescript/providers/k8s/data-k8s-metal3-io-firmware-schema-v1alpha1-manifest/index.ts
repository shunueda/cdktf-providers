// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/metal3_io_firmware_schema_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/metal3_io_firmware_schema_v1alpha1_manifest#metadata DataK8SMetal3IoFirmwareSchemaV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestMetadata;
  /**
  * FirmwareSchemaSpec defines the desired state of FirmwareSchema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/metal3_io_firmware_schema_v1alpha1_manifest#spec DataK8SMetal3IoFirmwareSchemaV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestSpec;
}
export interface DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/metal3_io_firmware_schema_v1alpha1_manifest#annotations DataK8SMetal3IoFirmwareSchemaV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/metal3_io_firmware_schema_v1alpha1_manifest#labels DataK8SMetal3IoFirmwareSchemaV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/metal3_io_firmware_schema_v1alpha1_manifest#name DataK8SMetal3IoFirmwareSchemaV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/metal3_io_firmware_schema_v1alpha1_manifest#namespace DataK8SMetal3IoFirmwareSchemaV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestSpecSchema {
  /**
  * The allowable value for an Enumeration type setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/metal3_io_firmware_schema_v1alpha1_manifest#allowable_values DataK8SMetal3IoFirmwareSchemaV1Alpha1Manifest#allowable_values}
  */
  readonly allowableValues?: string[];
  /**
  * The type of setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/metal3_io_firmware_schema_v1alpha1_manifest#attribute_type DataK8SMetal3IoFirmwareSchemaV1Alpha1Manifest#attribute_type}
  */
  readonly attributeType?: string;
  /**
  * The lowest value for an Integer type setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/metal3_io_firmware_schema_v1alpha1_manifest#lower_bound DataK8SMetal3IoFirmwareSchemaV1Alpha1Manifest#lower_bound}
  */
  readonly lowerBound?: number;
  /**
  * Maximum length for a String type setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/metal3_io_firmware_schema_v1alpha1_manifest#max_length DataK8SMetal3IoFirmwareSchemaV1Alpha1Manifest#max_length}
  */
  readonly maxLength?: number;
  /**
  * Minimum length for a String type setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/metal3_io_firmware_schema_v1alpha1_manifest#min_length DataK8SMetal3IoFirmwareSchemaV1Alpha1Manifest#min_length}
  */
  readonly minLength?: number;
  /**
  * Whether or not this setting is read only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/metal3_io_firmware_schema_v1alpha1_manifest#read_only DataK8SMetal3IoFirmwareSchemaV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Whether or not this setting's value is unique to this node, e.g. a serial number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/metal3_io_firmware_schema_v1alpha1_manifest#unique DataK8SMetal3IoFirmwareSchemaV1Alpha1Manifest#unique}
  */
  readonly unique?: boolean | cdktf.IResolvable;
  /**
  * The highest value for an Integer type setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/metal3_io_firmware_schema_v1alpha1_manifest#upper_bound DataK8SMetal3IoFirmwareSchemaV1Alpha1Manifest#upper_bound}
  */
  readonly upperBound?: number;
}

export function dataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestSpecSchemaToTerraform(struct?: DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestSpecSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowable_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowableValues),
    attribute_type: cdktf.stringToTerraform(struct!.attributeType),
    lower_bound: cdktf.numberToTerraform(struct!.lowerBound),
    max_length: cdktf.numberToTerraform(struct!.maxLength),
    min_length: cdktf.numberToTerraform(struct!.minLength),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    unique: cdktf.booleanToTerraform(struct!.unique),
    upper_bound: cdktf.numberToTerraform(struct!.upperBound),
  }
}


export function dataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestSpecSchemaToHclTerraform(struct?: DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestSpecSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowable_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowableValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    attribute_type: {
      value: cdktf.stringToHclTerraform(struct!.attributeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lower_bound: {
      value: cdktf.numberToHclTerraform(struct!.lowerBound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_length: {
      value: cdktf.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unique: {
      value: cdktf.booleanToHclTerraform(struct!.unique),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    upper_bound: {
      value: cdktf.numberToHclTerraform(struct!.upperBound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestSpecSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestSpecSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowableValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowableValues = this._allowableValues;
    }
    if (this._attributeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeType = this._attributeType;
    }
    if (this._lowerBound !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerBound = this._lowerBound;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._unique !== undefined) {
      hasAnyValues = true;
      internalValueResult.unique = this._unique;
    }
    if (this._upperBound !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperBound = this._upperBound;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestSpecSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowableValues = undefined;
      this._attributeType = undefined;
      this._lowerBound = undefined;
      this._maxLength = undefined;
      this._minLength = undefined;
      this._readOnly = undefined;
      this._unique = undefined;
      this._upperBound = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowableValues = value.allowableValues;
      this._attributeType = value.attributeType;
      this._lowerBound = value.lowerBound;
      this._maxLength = value.maxLength;
      this._minLength = value.minLength;
      this._readOnly = value.readOnly;
      this._unique = value.unique;
      this._upperBound = value.upperBound;
    }
  }

  // allowable_values - computed: false, optional: true, required: false
  private _allowableValues?: string[]; 
  public get allowableValues() {
    return this.getListAttribute('allowable_values');
  }
  public set allowableValues(value: string[]) {
    this._allowableValues = value;
  }
  public resetAllowableValues() {
    this._allowableValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowableValuesInput() {
    return this._allowableValues;
  }

  // attribute_type - computed: false, optional: true, required: false
  private _attributeType?: string; 
  public get attributeType() {
    return this.getStringAttribute('attribute_type');
  }
  public set attributeType(value: string) {
    this._attributeType = value;
  }
  public resetAttributeType() {
    this._attributeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeTypeInput() {
    return this._attributeType;
  }

  // lower_bound - computed: false, optional: true, required: false
  private _lowerBound?: number; 
  public get lowerBound() {
    return this.getNumberAttribute('lower_bound');
  }
  public set lowerBound(value: number) {
    this._lowerBound = value;
  }
  public resetLowerBound() {
    this._lowerBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerBoundInput() {
    return this._lowerBound;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // unique - computed: false, optional: true, required: false
  private _unique?: boolean | cdktf.IResolvable; 
  public get unique() {
    return this.getBooleanAttribute('unique');
  }
  public set unique(value: boolean | cdktf.IResolvable) {
    this._unique = value;
  }
  public resetUnique() {
    this._unique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueInput() {
    return this._unique;
  }

  // upper_bound - computed: false, optional: true, required: false
  private _upperBound?: number; 
  public get upperBound() {
    return this.getNumberAttribute('upper_bound');
  }
  public set upperBound(value: number) {
    this._upperBound = value;
  }
  public resetUpperBound() {
    this._upperBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upperBoundInput() {
    return this._upperBound;
  }
}
export interface DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestSpec {
  /**
  * The hardware model associated with this schema
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/metal3_io_firmware_schema_v1alpha1_manifest#hardware_model DataK8SMetal3IoFirmwareSchemaV1Alpha1Manifest#hardware_model}
  */
  readonly hardwareModel?: string;
  /**
  * The hardware vendor associated with this schema
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/metal3_io_firmware_schema_v1alpha1_manifest#hardware_vendor DataK8SMetal3IoFirmwareSchemaV1Alpha1Manifest#hardware_vendor}
  */
  readonly hardwareVendor?: string;
  /**
  * Map of firmware name to schema
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/metal3_io_firmware_schema_v1alpha1_manifest#schema DataK8SMetal3IoFirmwareSchemaV1Alpha1Manifest#schema}
  */
  readonly schema: DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestSpecSchema;
}

export function dataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestSpecToTerraform(struct?: DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hardware_model: cdktf.stringToTerraform(struct!.hardwareModel),
    hardware_vendor: cdktf.stringToTerraform(struct!.hardwareVendor),
    schema: dataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestSpecSchemaToTerraform(struct!.schema),
  }
}


export function dataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hardware_model: {
      value: cdktf.stringToHclTerraform(struct!.hardwareModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hardware_vendor: {
      value: cdktf.stringToHclTerraform(struct!.hardwareVendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: dataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestSpecSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestSpecSchema",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hardwareModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardwareModel = this._hardwareModel;
    }
    if (this._hardwareVendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardwareVendor = this._hardwareVendor;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hardwareModel = undefined;
      this._hardwareVendor = undefined;
      this._schema.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hardwareModel = value.hardwareModel;
      this._hardwareVendor = value.hardwareVendor;
      this._schema.internalValue = value.schema;
    }
  }

  // hardware_model - computed: false, optional: true, required: false
  private _hardwareModel?: string; 
  public get hardwareModel() {
    return this.getStringAttribute('hardware_model');
  }
  public set hardwareModel(value: string) {
    this._hardwareModel = value;
  }
  public resetHardwareModel() {
    this._hardwareModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareModelInput() {
    return this._hardwareModel;
  }

  // hardware_vendor - computed: false, optional: true, required: false
  private _hardwareVendor?: string; 
  public get hardwareVendor() {
    return this.getStringAttribute('hardware_vendor');
  }
  public set hardwareVendor(value: string) {
    this._hardwareVendor = value;
  }
  public resetHardwareVendor() {
    this._hardwareVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareVendorInput() {
    return this._hardwareVendor;
  }

  // schema - computed: false, optional: false, required: true
  private _schema = new DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestSpecSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestSpecSchema) {
    this._schema.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/metal3_io_firmware_schema_v1alpha1_manifest k8s_metal3_io_firmware_schema_v1alpha1_manifest}
*/
export class DataK8SMetal3IoFirmwareSchemaV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_metal3_io_firmware_schema_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SMetal3IoFirmwareSchemaV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SMetal3IoFirmwareSchemaV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SMetal3IoFirmwareSchemaV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/metal3_io_firmware_schema_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SMetal3IoFirmwareSchemaV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_metal3_io_firmware_schema_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/metal3_io_firmware_schema_v1alpha1_manifest k8s_metal3_io_firmware_schema_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_metal3_io_firmware_schema_v1alpha1_manifest',
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
  private _metadata = new DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestSpec) {
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
      metadata: dataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMetal3IoFirmwareSchemaV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
