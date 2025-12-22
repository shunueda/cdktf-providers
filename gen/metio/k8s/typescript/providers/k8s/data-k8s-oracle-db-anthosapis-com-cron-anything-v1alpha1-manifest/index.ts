// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest#metadata DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestMetadata;
  /**
  * CronAnythingSpec defines the desired state of CronAnything.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest#spec DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpec;
}
export interface DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest#annotations DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest#labels DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest#name DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest#namespace DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyStringField {
  /**
  * The path to the field on the resource that contains a string value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest#field_path DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
  /**
  * The values of the field that means the resource has completed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest#finished_values DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest#finished_values}
  */
  readonly finishedValues: string[];
}

export function dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyStringFieldToTerraform(struct?: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyStringField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    finished_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.finishedValues),
  }
}


export function dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyStringFieldToHclTerraform(struct?: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyStringField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    finished_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.finishedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyStringFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyStringField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._finishedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.finishedValues = this._finishedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyStringField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldPath = undefined;
      this._finishedValues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldPath = value.fieldPath;
      this._finishedValues = value.finishedValues;
    }
  }

  // field_path - computed: false, optional: false, required: true
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }

  // finished_values - computed: false, optional: false, required: true
  private _finishedValues?: string[]; 
  public get finishedValues() {
    return this.getListAttribute('finished_values');
  }
  public set finishedValues(value: string[]) {
    this._finishedValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get finishedValuesInput() {
    return this._finishedValues;
  }
}
export interface DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyTimestampField {
  /**
  * The path to the field on the resource that contains the timestamp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest#field_path DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyTimestampFieldToTerraform(struct?: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyTimestampField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyTimestampFieldToHclTerraform(struct?: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyTimestampField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyTimestampFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyTimestampField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyTimestampField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldPath = value.fieldPath;
    }
  }

  // field_path - computed: false, optional: false, required: true
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategy {
  /**
  * StringField contains the details for how the CronAnything controller can find the string field on the resource needed to decide if the resource has completed. It also lists the values that mean the resource has completed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest#string_field DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest#string_field}
  */
  readonly stringField?: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyStringField;
  /**
  * TimestampField contains the details for how the CronAnything controller can find the timestamp field on the resource in order to decide if the resource has completed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest#timestamp_field DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest#timestamp_field}
  */
  readonly timestampField?: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyTimestampField;
  /**
  * Type tells which strategy should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest#type DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyToTerraform(struct?: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    string_field: dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyStringFieldToTerraform(struct!.stringField),
    timestamp_field: dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyTimestampFieldToTerraform(struct!.timestampField),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyToHclTerraform(struct?: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    string_field: {
      value: dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyStringFieldToHclTerraform(struct!.stringField),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyStringField",
    },
    timestamp_field: {
      value: dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyTimestampFieldToHclTerraform(struct!.timestampField),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyTimestampField",
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

export class DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stringField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringField = this._stringField?.internalValue;
    }
    if (this._timestampField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampField = this._timestampField?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stringField.internalValue = undefined;
      this._timestampField.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stringField.internalValue = value.stringField;
      this._timestampField.internalValue = value.timestampField;
      this._type = value.type;
    }
  }

  // string_field - computed: false, optional: true, required: false
  private _stringField = new DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyStringFieldOutputReference(this, "string_field");
  public get stringField() {
    return this._stringField;
  }
  public putStringField(value: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyStringField) {
    this._stringField.internalValue = value;
  }
  public resetStringField() {
    this._stringField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringFieldInput() {
    return this._stringField.internalValue;
  }

  // timestamp_field - computed: false, optional: true, required: false
  private _timestampField = new DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyTimestampFieldOutputReference(this, "timestamp_field");
  public get timestampField() {
    return this._timestampField;
  }
  public putTimestampField(value: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyTimestampField) {
    this._timestampField.internalValue = value;
  }
  public resetTimestampField() {
    this._timestampField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFieldInput() {
    return this._timestampField.internalValue;
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
export interface DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionResourceTimestampStrategyField {
  /**
  * The path to the field on the resource that contains the timestamp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest#field_path DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionResourceTimestampStrategyFieldToTerraform(struct?: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionResourceTimestampStrategyField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionResourceTimestampStrategyFieldToHclTerraform(struct?: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionResourceTimestampStrategyField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionResourceTimestampStrategyFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionResourceTimestampStrategyField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionResourceTimestampStrategyField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldPath = value.fieldPath;
    }
  }

  // field_path - computed: false, optional: false, required: true
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionResourceTimestampStrategy {
  /**
  * FieldResourceTimestampStrategy specifies how the CronAnything controller can find the timestamp for the resource from a field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest#field DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest#field}
  */
  readonly field?: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionResourceTimestampStrategyField;
  /**
  * Type tells which strategy should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest#type DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionResourceTimestampStrategyToTerraform(struct?: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionResourceTimestampStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionResourceTimestampStrategyFieldToTerraform(struct!.field),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionResourceTimestampStrategyToHclTerraform(struct?: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionResourceTimestampStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionResourceTimestampStrategyFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionResourceTimestampStrategyField",
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

export class DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionResourceTimestampStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionResourceTimestampStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionResourceTimestampStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field.internalValue = value.field;
      this._type = value.type;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field = new DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionResourceTimestampStrategyFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionResourceTimestampStrategyField) {
    this._field.internalValue = value;
  }
  public resetField() {
    this._field.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
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
export interface DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetention {
  /**
  * The number of completed resources to keep before deleting them. This only affects finishable resources and the default value is 3. This field is mutable and if it is changed to a number lower than the current number of finished resources, the oldest ones will eventually be deleted until the number of finished resources matches the limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest#history_count_limit DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest#history_count_limit}
  */
  readonly historyCountLimit?: number;
  /**
  * The time since completion that a resource is kept before deletion. This only affects finishable resources. This does not have any default value and if it is not provided, HistoryCountLimit will be used to prune completed resources. If both HistoryCountLimit and HistoryTimeLimitSeconds are set, it is treated as an OR operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest#history_time_limit_seconds DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest#history_time_limit_seconds}
  */
  readonly historyTimeLimitSeconds?: number;
  /**
  * ResourceTimestampStrategy specifies how the CronAnything controller can find the age of a resource. This is needed to support retention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest#resource_timestamp_strategy DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest#resource_timestamp_strategy}
  */
  readonly resourceTimestampStrategy: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionResourceTimestampStrategy;
}

export function dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionToTerraform(struct?: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    history_count_limit: cdktf.numberToTerraform(struct!.historyCountLimit),
    history_time_limit_seconds: cdktf.numberToTerraform(struct!.historyTimeLimitSeconds),
    resource_timestamp_strategy: dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionResourceTimestampStrategyToTerraform(struct!.resourceTimestampStrategy),
  }
}


export function dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionToHclTerraform(struct?: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    history_count_limit: {
      value: cdktf.numberToHclTerraform(struct!.historyCountLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    history_time_limit_seconds: {
      value: cdktf.numberToHclTerraform(struct!.historyTimeLimitSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_timestamp_strategy: {
      value: dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionResourceTimestampStrategyToHclTerraform(struct!.resourceTimestampStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionResourceTimestampStrategy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetention | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._historyCountLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.historyCountLimit = this._historyCountLimit;
    }
    if (this._historyTimeLimitSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.historyTimeLimitSeconds = this._historyTimeLimitSeconds;
    }
    if (this._resourceTimestampStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTimestampStrategy = this._resourceTimestampStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetention | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._historyCountLimit = undefined;
      this._historyTimeLimitSeconds = undefined;
      this._resourceTimestampStrategy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._historyCountLimit = value.historyCountLimit;
      this._historyTimeLimitSeconds = value.historyTimeLimitSeconds;
      this._resourceTimestampStrategy.internalValue = value.resourceTimestampStrategy;
    }
  }

  // history_count_limit - computed: false, optional: true, required: false
  private _historyCountLimit?: number; 
  public get historyCountLimit() {
    return this.getNumberAttribute('history_count_limit');
  }
  public set historyCountLimit(value: number) {
    this._historyCountLimit = value;
  }
  public resetHistoryCountLimit() {
    this._historyCountLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyCountLimitInput() {
    return this._historyCountLimit;
  }

  // history_time_limit_seconds - computed: false, optional: true, required: false
  private _historyTimeLimitSeconds?: number; 
  public get historyTimeLimitSeconds() {
    return this.getNumberAttribute('history_time_limit_seconds');
  }
  public set historyTimeLimitSeconds(value: number) {
    this._historyTimeLimitSeconds = value;
  }
  public resetHistoryTimeLimitSeconds() {
    this._historyTimeLimitSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyTimeLimitSecondsInput() {
    return this._historyTimeLimitSeconds;
  }

  // resource_timestamp_strategy - computed: false, optional: false, required: true
  private _resourceTimestampStrategy = new DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionResourceTimestampStrategyOutputReference(this, "resource_timestamp_strategy");
  public get resourceTimestampStrategy() {
    return this._resourceTimestampStrategy;
  }
  public putResourceTimestampStrategy(value: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionResourceTimestampStrategy) {
    this._resourceTimestampStrategy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTimestampStrategyInput() {
    return this._resourceTimestampStrategy.internalValue;
  }
}
export interface DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpec {
  /**
  * CascadeDelete tells CronAnything to set up owner references from the created resources to the CronAnything resource. This means that if the CronAnything resource is deleted, all resources created by it will also be deleted. This is an optional field that defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest#cascade_delete DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest#cascade_delete}
  */
  readonly cascadeDelete?: boolean | cdktf.IResolvable;
  /**
  * ConcurrencyPolicy specifies how to treat concurrent resources if the resource provides a status path that exposes completion. The default policy if not provided is to allow a new resource to be created even if an active resource already exists. If the resource doesn’t have an active/completed status, the only supported concurrency policy is to allow creating new resources. This field is mutable. If the policy is changed to a more stringent policy while multiple resources are active, it will not delete any existing resources. The exception is if a creation of a new resource is triggered and the policy has been changed to Replace. If multiple resources are active, they will all be deleted and replaced by a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest#concurrency_policy DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest#concurrency_policy}
  */
  readonly concurrencyPolicy?: string;
  /**
  * FinishableStrategy defines how the CronAnything controller an decide if a resource has completed. Some resources will do some work after they have been created and at some point be finished. Jobs are the most common example. If no strategy is defined, it is assumed that the resources never finish.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest#finishable_strategy DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest#finishable_strategy}
  */
  readonly finishableStrategy?: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategy;
  /**
  * ResourceBaseName specifies the base name for the resources created by CronAnything, which will be named using the format <ResourceBaseName>-<Timestamp>. This field is optional, and the default is to use the name of the CronAnything resource as the ResourceBaseName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest#resource_base_name DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest#resource_base_name}
  */
  readonly resourceBaseName?: string;
  /**
  * ResourceTimestampFormat defines the format of the timestamp in the name of Resources created by CronAnything <ResourceBaseName>-<Timestamp>. This field is optional, and the default is to format the timestamp as unix time. If provided, it must be compatible with time.Format in golang.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest#resource_timestamp_format DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest#resource_timestamp_format}
  */
  readonly resourceTimestampFormat?: string;
  /**
  * Retention defines the retention policy for resources created by CronAnything. If no retention policy is defined, CronAnything will never delete resources, so cleanup must be handled through some other process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest#retention DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest#retention}
  */
  readonly retention?: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetention;
  /**
  * Schedule defines a time-based schedule, e.g., a standard cron schedule such as “@every 10m”. This field is mandatory and mutable. If it is changed, resources will simply be created at the new interval from then on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest#schedule DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest#schedule}
  */
  readonly schedule: string;
  /**
  * Suspend tells the controller to suspend creation of additional resources. The default value is false. This field is mutable. It will not affect any existing resources, but only affect creation of additional resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest#suspend DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest#suspend}
  */
  readonly suspend?: boolean | cdktf.IResolvable;
  /**
  * Template is a template of a resource type for which instances are to be created on the given schedule. This field is mandatory and it must contain a valid template for an existing apiVersion and kind in the cluster. It is immutable, so if the template needs to change, the whole CronAnything resource should be replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest#template DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest#template}
  */
  readonly template: { [key: string]: string };
  /**
  * TotalResourceLimit specifies the total number of children allowed for a particular CronAnything resource. If this limit is reached, no additional resources will be created. This limit is mostly meant to avoid runaway creation of resources that could bring down the cluster. Both finished and unfinished resources count against this limit. This field is mutable. If it is changed to a lower value than the existing number of resources, none of the existing resources will be deleted as a result, but no additional resources will be created until the number of child resources goes below the limit. The field is optional with a default value of 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest#total_resource_limit DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest#total_resource_limit}
  */
  readonly totalResourceLimit?: number;
  /**
  * TriggerDeadlineSeconds defines Deadline in seconds for creating the resource if it missed the scheduled time. If no deadline is provided, the resource will be created no matter how far after the scheduled time. If multiple triggers were missed, only the last will be triggered and only one resource will be created. This field is mutable and changing it will affect the creation of new resources from that point in time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest#trigger_deadline_seconds DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest#trigger_deadline_seconds}
  */
  readonly triggerDeadlineSeconds?: number;
}

export function dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecToTerraform(struct?: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cascade_delete: cdktf.booleanToTerraform(struct!.cascadeDelete),
    concurrency_policy: cdktf.stringToTerraform(struct!.concurrencyPolicy),
    finishable_strategy: dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyToTerraform(struct!.finishableStrategy),
    resource_base_name: cdktf.stringToTerraform(struct!.resourceBaseName),
    resource_timestamp_format: cdktf.stringToTerraform(struct!.resourceTimestampFormat),
    retention: dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionToTerraform(struct!.retention),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    suspend: cdktf.booleanToTerraform(struct!.suspend),
    template: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.template),
    total_resource_limit: cdktf.numberToTerraform(struct!.totalResourceLimit),
    trigger_deadline_seconds: cdktf.numberToTerraform(struct!.triggerDeadlineSeconds),
  }
}


export function dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cascade_delete: {
      value: cdktf.booleanToHclTerraform(struct!.cascadeDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    concurrency_policy: {
      value: cdktf.stringToHclTerraform(struct!.concurrencyPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    finishable_strategy: {
      value: dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyToHclTerraform(struct!.finishableStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategy",
    },
    resource_base_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceBaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_timestamp_format: {
      value: cdktf.stringToHclTerraform(struct!.resourceTimestampFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention: {
      value: dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionToHclTerraform(struct!.retention),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetention",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suspend: {
      value: cdktf.booleanToHclTerraform(struct!.suspend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    template: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.template),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    total_resource_limit: {
      value: cdktf.numberToHclTerraform(struct!.totalResourceLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trigger_deadline_seconds: {
      value: cdktf.numberToHclTerraform(struct!.triggerDeadlineSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cascadeDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.cascadeDelete = this._cascadeDelete;
    }
    if (this._concurrencyPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrencyPolicy = this._concurrencyPolicy;
    }
    if (this._finishableStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.finishableStrategy = this._finishableStrategy?.internalValue;
    }
    if (this._resourceBaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceBaseName = this._resourceBaseName;
    }
    if (this._resourceTimestampFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTimestampFormat = this._resourceTimestampFormat;
    }
    if (this._retention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention?.internalValue;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._suspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._totalResourceLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalResourceLimit = this._totalResourceLimit;
    }
    if (this._triggerDeadlineSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerDeadlineSeconds = this._triggerDeadlineSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cascadeDelete = undefined;
      this._concurrencyPolicy = undefined;
      this._finishableStrategy.internalValue = undefined;
      this._resourceBaseName = undefined;
      this._resourceTimestampFormat = undefined;
      this._retention.internalValue = undefined;
      this._schedule = undefined;
      this._suspend = undefined;
      this._template = undefined;
      this._totalResourceLimit = undefined;
      this._triggerDeadlineSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cascadeDelete = value.cascadeDelete;
      this._concurrencyPolicy = value.concurrencyPolicy;
      this._finishableStrategy.internalValue = value.finishableStrategy;
      this._resourceBaseName = value.resourceBaseName;
      this._resourceTimestampFormat = value.resourceTimestampFormat;
      this._retention.internalValue = value.retention;
      this._schedule = value.schedule;
      this._suspend = value.suspend;
      this._template = value.template;
      this._totalResourceLimit = value.totalResourceLimit;
      this._triggerDeadlineSeconds = value.triggerDeadlineSeconds;
    }
  }

  // cascade_delete - computed: false, optional: true, required: false
  private _cascadeDelete?: boolean | cdktf.IResolvable; 
  public get cascadeDelete() {
    return this.getBooleanAttribute('cascade_delete');
  }
  public set cascadeDelete(value: boolean | cdktf.IResolvable) {
    this._cascadeDelete = value;
  }
  public resetCascadeDelete() {
    this._cascadeDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cascadeDeleteInput() {
    return this._cascadeDelete;
  }

  // concurrency_policy - computed: false, optional: true, required: false
  private _concurrencyPolicy?: string; 
  public get concurrencyPolicy() {
    return this.getStringAttribute('concurrency_policy');
  }
  public set concurrencyPolicy(value: string) {
    this._concurrencyPolicy = value;
  }
  public resetConcurrencyPolicy() {
    this._concurrencyPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyPolicyInput() {
    return this._concurrencyPolicy;
  }

  // finishable_strategy - computed: false, optional: true, required: false
  private _finishableStrategy = new DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategyOutputReference(this, "finishable_strategy");
  public get finishableStrategy() {
    return this._finishableStrategy;
  }
  public putFinishableStrategy(value: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecFinishableStrategy) {
    this._finishableStrategy.internalValue = value;
  }
  public resetFinishableStrategy() {
    this._finishableStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finishableStrategyInput() {
    return this._finishableStrategy.internalValue;
  }

  // resource_base_name - computed: false, optional: true, required: false
  private _resourceBaseName?: string; 
  public get resourceBaseName() {
    return this.getStringAttribute('resource_base_name');
  }
  public set resourceBaseName(value: string) {
    this._resourceBaseName = value;
  }
  public resetResourceBaseName() {
    this._resourceBaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceBaseNameInput() {
    return this._resourceBaseName;
  }

  // resource_timestamp_format - computed: false, optional: true, required: false
  private _resourceTimestampFormat?: string; 
  public get resourceTimestampFormat() {
    return this.getStringAttribute('resource_timestamp_format');
  }
  public set resourceTimestampFormat(value: string) {
    this._resourceTimestampFormat = value;
  }
  public resetResourceTimestampFormat() {
    this._resourceTimestampFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTimestampFormatInput() {
    return this._resourceTimestampFormat;
  }

  // retention - computed: false, optional: true, required: false
  private _retention = new DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetentionOutputReference(this, "retention");
  public get retention() {
    return this._retention;
  }
  public putRetention(value: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecRetention) {
    this._retention.internalValue = value;
  }
  public resetRetention() {
    this._retention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention.internalValue;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // suspend - computed: false, optional: true, required: false
  private _suspend?: boolean | cdktf.IResolvable; 
  public get suspend() {
    return this.getBooleanAttribute('suspend');
  }
  public set suspend(value: boolean | cdktf.IResolvable) {
    this._suspend = value;
  }
  public resetSuspend() {
    this._suspend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendInput() {
    return this._suspend;
  }

  // template - computed: false, optional: false, required: true
  private _template?: { [key: string]: string }; 
  public get template() {
    return this.getStringMapAttribute('template');
  }
  public set template(value: { [key: string]: string }) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // total_resource_limit - computed: false, optional: true, required: false
  private _totalResourceLimit?: number; 
  public get totalResourceLimit() {
    return this.getNumberAttribute('total_resource_limit');
  }
  public set totalResourceLimit(value: number) {
    this._totalResourceLimit = value;
  }
  public resetTotalResourceLimit() {
    this._totalResourceLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalResourceLimitInput() {
    return this._totalResourceLimit;
  }

  // trigger_deadline_seconds - computed: false, optional: true, required: false
  private _triggerDeadlineSeconds?: number; 
  public get triggerDeadlineSeconds() {
    return this.getNumberAttribute('trigger_deadline_seconds');
  }
  public set triggerDeadlineSeconds(value: number) {
    this._triggerDeadlineSeconds = value;
  }
  public resetTriggerDeadlineSeconds() {
    this._triggerDeadlineSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerDeadlineSecondsInput() {
    return this._triggerDeadlineSeconds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest k8s_oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest}
*/
export class DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest k8s_oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_oracle_db_anthosapis_com_cron_anything_v1alpha1_manifest',
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
  private _metadata = new DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpec) {
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
      metadata: dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOracleDbAnthosapisComCronAnythingV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
