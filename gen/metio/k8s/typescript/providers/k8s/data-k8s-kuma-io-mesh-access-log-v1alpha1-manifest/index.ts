// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKumaIoMeshAccessLogV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#metadata DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestMetadata;
  /**
  * Spec is the specification of the Kuma MeshAccessLog resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#spec DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpec;
}
export interface DataK8SKumaIoMeshAccessLogV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#annotations DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#labels DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#name DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#namespace DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormatJson {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#key DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#value DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormatJsonToTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormatJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormatJsonToHclTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormatJson | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormatJsonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormatJson | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormatJson | cdktf.IResolvable | undefined) {
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

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormatJsonList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormatJson[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormatJsonOutputReference {
    return new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormatJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#json DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#json}
  */
  readonly json?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormatJson[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#omit_empty_values DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#omit_empty_values}
  */
  readonly omitEmptyValues?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#plain DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#plain}
  */
  readonly plain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#type DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormatToTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json: cdktf.listMapper(dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormatJsonToTerraform, false)(struct!.json),
    omit_empty_values: cdktf.booleanToTerraform(struct!.omitEmptyValues),
    plain: cdktf.stringToTerraform(struct!.plain),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormatToHclTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormatJsonToHclTerraform, false)(struct!.json),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormatJsonList",
    },
    omit_empty_values: {
      value: cdktf.booleanToHclTerraform(struct!.omitEmptyValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    plain: {
      value: cdktf.stringToHclTerraform(struct!.plain),
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

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._json?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json?.internalValue;
    }
    if (this._omitEmptyValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.omitEmptyValues = this._omitEmptyValues;
    }
    if (this._plain !== undefined) {
      hasAnyValues = true;
      internalValueResult.plain = this._plain;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._json.internalValue = undefined;
      this._omitEmptyValues = undefined;
      this._plain = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._json.internalValue = value.json;
      this._omitEmptyValues = value.omitEmptyValues;
      this._plain = value.plain;
      this._type = value.type;
    }
  }

  // json - computed: false, optional: true, required: false
  private _json = new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormatJsonList(this, "json", false);
  public get json() {
    return this._json;
  }
  public putJson(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormatJson[] | cdktf.IResolvable) {
    this._json.internalValue = value;
  }
  public resetJson() {
    this._json.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json.internalValue;
  }

  // omit_empty_values - computed: false, optional: true, required: false
  private _omitEmptyValues?: boolean | cdktf.IResolvable; 
  public get omitEmptyValues() {
    return this.getBooleanAttribute('omit_empty_values');
  }
  public set omitEmptyValues(value: boolean | cdktf.IResolvable) {
    this._omitEmptyValues = value;
  }
  public resetOmitEmptyValues() {
    this._omitEmptyValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get omitEmptyValuesInput() {
    return this._omitEmptyValues;
  }

  // plain - computed: false, optional: true, required: false
  private _plain?: string; 
  public get plain() {
    return this.getStringAttribute('plain');
  }
  public set plain(value: string) {
    this._plain = value;
  }
  public resetPlain() {
    this._plain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainInput() {
    return this._plain;
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
export interface DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFile {
  /**
  * Format of access logs. Placeholders available on https://www.envoyproxy.io/docs/envoy/latest/configuration/observability/access_log/usage#command-operators
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#format DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#format}
  */
  readonly format?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormat;
  /**
  * Path to a file that logs will be written to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#path DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileToTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormatToTerraform(struct!.format),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileToHclTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormatToHclTerraform(struct!.format),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormat",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format.internalValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format.internalValue = value.format;
      this._path = value.path;
    }
  }

  // format - computed: false, optional: true, required: false
  private _format = new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileFormat) {
    this._format.internalValue = value;
  }
  public resetFormat() {
    this._format.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetryAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#key DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#value DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetryAttributesToTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetryAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetryAttributesToHclTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetryAttributes | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetryAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetryAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetryAttributes | cdktf.IResolvable | undefined) {
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

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetryAttributesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetryAttributes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetryAttributesOutputReference {
    return new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetryAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetry {
  /**
  * Attributes can contain placeholders available on https://www.envoyproxy.io/docs/envoy/latest/configuration/observability/access_log/usage#command-operators
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#attributes DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#attributes}
  */
  readonly attributes?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetryAttributes[] | cdktf.IResolvable;
  /**
  * Body is a raw string or an OTLP any value as described at https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/logs/data-model.md#field-body It can contain placeholders available on https://www.envoyproxy.io/docs/envoy/latest/configuration/observability/access_log/usage#command-operators
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#body DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#body}
  */
  readonly body?: { [key: string]: string };
  /**
  * Endpoint of OpenTelemetry collector. An empty port defaults to 4317.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#endpoint DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#endpoint}
  */
  readonly endpoint: string;
}

export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetryToTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.listMapper(dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetryAttributesToTerraform, false)(struct!.attributes),
    body: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.body),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
  }
}


export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetryToHclTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetryAttributesToHclTerraform, false)(struct!.attributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetryAttributesList",
    },
    body: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.body),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes.internalValue = undefined;
      this._body = undefined;
      this._endpoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes.internalValue = value.attributes;
      this._body = value.body;
      this._endpoint = value.endpoint;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes = new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetryAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetryAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // body - computed: false, optional: true, required: false
  private _body?: { [key: string]: string }; 
  public get body() {
    return this.getStringMapAttribute('body');
  }
  public set body(value: { [key: string]: string }) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }
}
export interface DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormatJson {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#key DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#value DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormatJsonToTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormatJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormatJsonToHclTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormatJson | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormatJsonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormatJson | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormatJson | cdktf.IResolvable | undefined) {
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

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormatJsonList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormatJson[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormatJsonOutputReference {
    return new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormatJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#json DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#json}
  */
  readonly json?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormatJson[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#omit_empty_values DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#omit_empty_values}
  */
  readonly omitEmptyValues?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#plain DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#plain}
  */
  readonly plain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#type DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormatToTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json: cdktf.listMapper(dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormatJsonToTerraform, false)(struct!.json),
    omit_empty_values: cdktf.booleanToTerraform(struct!.omitEmptyValues),
    plain: cdktf.stringToTerraform(struct!.plain),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormatToHclTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormatJsonToHclTerraform, false)(struct!.json),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormatJsonList",
    },
    omit_empty_values: {
      value: cdktf.booleanToHclTerraform(struct!.omitEmptyValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    plain: {
      value: cdktf.stringToHclTerraform(struct!.plain),
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

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._json?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json?.internalValue;
    }
    if (this._omitEmptyValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.omitEmptyValues = this._omitEmptyValues;
    }
    if (this._plain !== undefined) {
      hasAnyValues = true;
      internalValueResult.plain = this._plain;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._json.internalValue = undefined;
      this._omitEmptyValues = undefined;
      this._plain = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._json.internalValue = value.json;
      this._omitEmptyValues = value.omitEmptyValues;
      this._plain = value.plain;
      this._type = value.type;
    }
  }

  // json - computed: false, optional: true, required: false
  private _json = new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormatJsonList(this, "json", false);
  public get json() {
    return this._json;
  }
  public putJson(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormatJson[] | cdktf.IResolvable) {
    this._json.internalValue = value;
  }
  public resetJson() {
    this._json.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json.internalValue;
  }

  // omit_empty_values - computed: false, optional: true, required: false
  private _omitEmptyValues?: boolean | cdktf.IResolvable; 
  public get omitEmptyValues() {
    return this.getBooleanAttribute('omit_empty_values');
  }
  public set omitEmptyValues(value: boolean | cdktf.IResolvable) {
    this._omitEmptyValues = value;
  }
  public resetOmitEmptyValues() {
    this._omitEmptyValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get omitEmptyValuesInput() {
    return this._omitEmptyValues;
  }

  // plain - computed: false, optional: true, required: false
  private _plain?: string; 
  public get plain() {
    return this.getStringAttribute('plain');
  }
  public set plain(value: string) {
    this._plain = value;
  }
  public resetPlain() {
    this._plain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainInput() {
    return this._plain;
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
export interface DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcp {
  /**
  * Address of the TCP logging backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#address DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#address}
  */
  readonly address: string;
  /**
  * Format of access logs. Placeholders available on https://www.envoyproxy.io/docs/envoy/latest/configuration/observability/access_log/usage#command-operators
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#format DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#format}
  */
  readonly format?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormat;
}

export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpToTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    format: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormatToTerraform(struct!.format),
  }
}


export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpToHclTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcp | cdktf.IResolvable): any {
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
    format: {
      value: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormatToHclTerraform(struct!.format),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormat",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._format?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._format.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._format.internalValue = value.format;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // format - computed: false, optional: true, required: false
  private _format = new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpFormat) {
    this._format.internalValue = value;
  }
  public resetFormat() {
    this._format.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }
}
export interface DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackends {
  /**
  * FileBackend defines configuration for file based access logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#file DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFile;
  /**
  * Defines an OpenTelemetry logging backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#open_telemetry DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#open_telemetry}
  */
  readonly openTelemetry?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetry;
  /**
  * TCPBackend defines a TCP logging backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#tcp DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#tcp}
  */
  readonly tcp?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#type DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsToTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackends | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileToTerraform(struct!.file),
    open_telemetry: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetryToTerraform(struct!.openTelemetry),
    tcp: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpToTerraform(struct!.tcp),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsToHclTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackends | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFile",
    },
    open_telemetry: {
      value: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetryToHclTerraform(struct!.openTelemetry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetry",
    },
    tcp: {
      value: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpToHclTerraform(struct!.tcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcp",
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

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackends | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._openTelemetry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openTelemetry = this._openTelemetry?.internalValue;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackends | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._file.internalValue = undefined;
      this._openTelemetry.internalValue = undefined;
      this._tcp.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._file.internalValue = value.file;
      this._openTelemetry.internalValue = value.openTelemetry;
      this._tcp.internalValue = value.tcp;
      this._type = value.type;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file = new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // open_telemetry - computed: false, optional: true, required: false
  private _openTelemetry = new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetryOutputReference(this, "open_telemetry");
  public get openTelemetry() {
    return this._openTelemetry;
  }
  public putOpenTelemetry(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOpenTelemetry) {
    this._openTelemetry.internalValue = value;
  }
  public resetOpenTelemetry() {
    this._openTelemetry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openTelemetryInput() {
    return this._openTelemetry.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
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

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackends[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOutputReference {
    return new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefault {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#backends DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#backends}
  */
  readonly backends?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackends[] | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultToTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backends: cdktf.listMapper(dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsToTerraform, false)(struct!.backends),
  }
}


export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultToHclTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backends: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsToHclTerraform, false)(struct!.backends),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backends?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backends = this._backends?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backends.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backends.internalValue = value.backends;
    }
  }

  // backends - computed: false, optional: true, required: false
  private _backends = new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackendsList(this, "backends", false);
  public get backends() {
    return this._backends;
  }
  public putBackends(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultBackends[] | cdktf.IResolvable) {
    this._backends.internalValue = value;
  }
  public resetBackends() {
    this._backends.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendsInput() {
    return this._backends.internalValue;
  }
}
export interface DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromTargetRef {
  /**
  * Kind of the referenced resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#kind DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Labels are used to select group of MeshServices that match labels. Either Labels or Name and Namespace can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#labels DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Mesh is reserved for future use to identify cross mesh resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#mesh DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#mesh}
  */
  readonly mesh?: string;
  /**
  * Name of the referenced resource. Can only be used with kinds: 'MeshService', 'MeshServiceSubset' and 'MeshGatewayRoute'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#name DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the namespace of target resource. If empty only resources in policy namespace will be targeted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#namespace DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * ProxyTypes specifies the data plane types that are subject to the policy. When not specified, all data plane types are targeted by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#proxy_types DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#proxy_types}
  */
  readonly proxyTypes?: string[];
  /**
  * SectionName is used to target specific section of resource. For example, you can target port from MeshService.ports[] by its name. Only traffic to this port will be affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#section_name DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#section_name}
  */
  readonly sectionName?: string;
  /**
  * Tags used to select a subset of proxies by tags. Can only be used with kinds 'MeshSubset' and 'MeshServiceSubset'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#tags DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromTargetRefToTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    mesh: cdktf.stringToTerraform(struct!.mesh),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    proxy_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.proxyTypes),
    section_name: cdktf.stringToTerraform(struct!.sectionName),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromTargetRefToHclTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    mesh: {
      value: cdktf.stringToHclTerraform(struct!.mesh),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.proxyTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    section_name: {
      value: cdktf.stringToHclTerraform(struct!.sectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromTargetRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._mesh !== undefined) {
      hasAnyValues = true;
      internalValueResult.mesh = this._mesh;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._proxyTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyTypes = this._proxyTypes;
    }
    if (this._sectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sectionName = this._sectionName;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromTargetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._labels = undefined;
      this._mesh = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._proxyTypes = undefined;
      this._sectionName = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._labels = value.labels;
      this._mesh = value.mesh;
      this._name = value.name;
      this._namespace = value.namespace;
      this._proxyTypes = value.proxyTypes;
      this._sectionName = value.sectionName;
      this._tags = value.tags;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // mesh - computed: false, optional: true, required: false
  private _mesh?: string; 
  public get mesh() {
    return this.getStringAttribute('mesh');
  }
  public set mesh(value: string) {
    this._mesh = value;
  }
  public resetMesh() {
    this._mesh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshInput() {
    return this._mesh;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // proxy_types - computed: false, optional: true, required: false
  private _proxyTypes?: string[]; 
  public get proxyTypes() {
    return this.getListAttribute('proxy_types');
  }
  public set proxyTypes(value: string[]) {
    this._proxyTypes = value;
  }
  public resetProxyTypes() {
    this._proxyTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTypesInput() {
    return this._proxyTypes;
  }

  // section_name - computed: false, optional: true, required: false
  private _sectionName?: string; 
  public get sectionName() {
    return this.getStringAttribute('section_name');
  }
  public set sectionName(value: string) {
    this._sectionName = value;
  }
  public resetSectionName() {
    this._sectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionNameInput() {
    return this._sectionName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFrom {
  /**
  * Default is a configuration specific to the group of clients referenced in 'targetRef'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#default DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#default}
  */
  readonly default?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefault;
  /**
  * TargetRef is a reference to the resource that represents a group of clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#target_ref DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#target_ref}
  */
  readonly targetRef: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromTargetRef;
}

export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromToTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultToTerraform(struct!.default),
    target_ref: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromTargetRefToTerraform(struct!.targetRef),
  }
}


export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromToHclTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefault",
    },
    target_ref: {
      value: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromTargetRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default?.internalValue;
    }
    if (this._targetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRef = this._targetRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default.internalValue = undefined;
      this._targetRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default.internalValue = value.default;
      this._targetRef.internalValue = value.targetRef;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default = new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromDefault) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // target_ref - computed: false, optional: false, required: true
  private _targetRef = new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromTargetRef) {
    this._targetRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }
}

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromOutputReference {
    return new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecTargetRef {
  /**
  * Kind of the referenced resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#kind DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Labels are used to select group of MeshServices that match labels. Either Labels or Name and Namespace can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#labels DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Mesh is reserved for future use to identify cross mesh resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#mesh DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#mesh}
  */
  readonly mesh?: string;
  /**
  * Name of the referenced resource. Can only be used with kinds: 'MeshService', 'MeshServiceSubset' and 'MeshGatewayRoute'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#name DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the namespace of target resource. If empty only resources in policy namespace will be targeted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#namespace DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * ProxyTypes specifies the data plane types that are subject to the policy. When not specified, all data plane types are targeted by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#proxy_types DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#proxy_types}
  */
  readonly proxyTypes?: string[];
  /**
  * SectionName is used to target specific section of resource. For example, you can target port from MeshService.ports[] by its name. Only traffic to this port will be affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#section_name DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#section_name}
  */
  readonly sectionName?: string;
  /**
  * Tags used to select a subset of proxies by tags. Can only be used with kinds 'MeshSubset' and 'MeshServiceSubset'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#tags DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecTargetRefToTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    mesh: cdktf.stringToTerraform(struct!.mesh),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    proxy_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.proxyTypes),
    section_name: cdktf.stringToTerraform(struct!.sectionName),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecTargetRefToHclTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    mesh: {
      value: cdktf.stringToHclTerraform(struct!.mesh),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.proxyTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    section_name: {
      value: cdktf.stringToHclTerraform(struct!.sectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._mesh !== undefined) {
      hasAnyValues = true;
      internalValueResult.mesh = this._mesh;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._proxyTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyTypes = this._proxyTypes;
    }
    if (this._sectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sectionName = this._sectionName;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._labels = undefined;
      this._mesh = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._proxyTypes = undefined;
      this._sectionName = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._labels = value.labels;
      this._mesh = value.mesh;
      this._name = value.name;
      this._namespace = value.namespace;
      this._proxyTypes = value.proxyTypes;
      this._sectionName = value.sectionName;
      this._tags = value.tags;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // mesh - computed: false, optional: true, required: false
  private _mesh?: string; 
  public get mesh() {
    return this.getStringAttribute('mesh');
  }
  public set mesh(value: string) {
    this._mesh = value;
  }
  public resetMesh() {
    this._mesh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshInput() {
    return this._mesh;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // proxy_types - computed: false, optional: true, required: false
  private _proxyTypes?: string[]; 
  public get proxyTypes() {
    return this.getListAttribute('proxy_types');
  }
  public set proxyTypes(value: string[]) {
    this._proxyTypes = value;
  }
  public resetProxyTypes() {
    this._proxyTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTypesInput() {
    return this._proxyTypes;
  }

  // section_name - computed: false, optional: true, required: false
  private _sectionName?: string; 
  public get sectionName() {
    return this.getStringAttribute('section_name');
  }
  public set sectionName(value: string) {
    this._sectionName = value;
  }
  public resetSectionName() {
    this._sectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionNameInput() {
    return this._sectionName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormatJson {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#key DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#value DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormatJsonToTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormatJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormatJsonToHclTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormatJson | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormatJsonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormatJson | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormatJson | cdktf.IResolvable | undefined) {
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

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormatJsonList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormatJson[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormatJsonOutputReference {
    return new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormatJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#json DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#json}
  */
  readonly json?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormatJson[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#omit_empty_values DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#omit_empty_values}
  */
  readonly omitEmptyValues?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#plain DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#plain}
  */
  readonly plain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#type DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormatToTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json: cdktf.listMapper(dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormatJsonToTerraform, false)(struct!.json),
    omit_empty_values: cdktf.booleanToTerraform(struct!.omitEmptyValues),
    plain: cdktf.stringToTerraform(struct!.plain),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormatToHclTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormatJsonToHclTerraform, false)(struct!.json),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormatJsonList",
    },
    omit_empty_values: {
      value: cdktf.booleanToHclTerraform(struct!.omitEmptyValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    plain: {
      value: cdktf.stringToHclTerraform(struct!.plain),
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

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._json?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json?.internalValue;
    }
    if (this._omitEmptyValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.omitEmptyValues = this._omitEmptyValues;
    }
    if (this._plain !== undefined) {
      hasAnyValues = true;
      internalValueResult.plain = this._plain;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._json.internalValue = undefined;
      this._omitEmptyValues = undefined;
      this._plain = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._json.internalValue = value.json;
      this._omitEmptyValues = value.omitEmptyValues;
      this._plain = value.plain;
      this._type = value.type;
    }
  }

  // json - computed: false, optional: true, required: false
  private _json = new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormatJsonList(this, "json", false);
  public get json() {
    return this._json;
  }
  public putJson(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormatJson[] | cdktf.IResolvable) {
    this._json.internalValue = value;
  }
  public resetJson() {
    this._json.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json.internalValue;
  }

  // omit_empty_values - computed: false, optional: true, required: false
  private _omitEmptyValues?: boolean | cdktf.IResolvable; 
  public get omitEmptyValues() {
    return this.getBooleanAttribute('omit_empty_values');
  }
  public set omitEmptyValues(value: boolean | cdktf.IResolvable) {
    this._omitEmptyValues = value;
  }
  public resetOmitEmptyValues() {
    this._omitEmptyValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get omitEmptyValuesInput() {
    return this._omitEmptyValues;
  }

  // plain - computed: false, optional: true, required: false
  private _plain?: string; 
  public get plain() {
    return this.getStringAttribute('plain');
  }
  public set plain(value: string) {
    this._plain = value;
  }
  public resetPlain() {
    this._plain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainInput() {
    return this._plain;
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
export interface DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFile {
  /**
  * Format of access logs. Placeholders available on https://www.envoyproxy.io/docs/envoy/latest/configuration/observability/access_log/usage#command-operators
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#format DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#format}
  */
  readonly format?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormat;
  /**
  * Path to a file that logs will be written to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#path DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileToTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormatToTerraform(struct!.format),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileToHclTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormatToHclTerraform(struct!.format),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormat",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format.internalValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format.internalValue = value.format;
      this._path = value.path;
    }
  }

  // format - computed: false, optional: true, required: false
  private _format = new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileFormat) {
    this._format.internalValue = value;
  }
  public resetFormat() {
    this._format.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetryAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#key DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#value DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetryAttributesToTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetryAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetryAttributesToHclTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetryAttributes | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetryAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetryAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetryAttributes | cdktf.IResolvable | undefined) {
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

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetryAttributesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetryAttributes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetryAttributesOutputReference {
    return new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetryAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetry {
  /**
  * Attributes can contain placeholders available on https://www.envoyproxy.io/docs/envoy/latest/configuration/observability/access_log/usage#command-operators
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#attributes DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#attributes}
  */
  readonly attributes?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetryAttributes[] | cdktf.IResolvable;
  /**
  * Body is a raw string or an OTLP any value as described at https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/logs/data-model.md#field-body It can contain placeholders available on https://www.envoyproxy.io/docs/envoy/latest/configuration/observability/access_log/usage#command-operators
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#body DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#body}
  */
  readonly body?: { [key: string]: string };
  /**
  * Endpoint of OpenTelemetry collector. An empty port defaults to 4317.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#endpoint DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#endpoint}
  */
  readonly endpoint: string;
}

export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetryToTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.listMapper(dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetryAttributesToTerraform, false)(struct!.attributes),
    body: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.body),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
  }
}


export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetryToHclTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetryAttributesToHclTerraform, false)(struct!.attributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetryAttributesList",
    },
    body: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.body),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes.internalValue = undefined;
      this._body = undefined;
      this._endpoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes.internalValue = value.attributes;
      this._body = value.body;
      this._endpoint = value.endpoint;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes = new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetryAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetryAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // body - computed: false, optional: true, required: false
  private _body?: { [key: string]: string }; 
  public get body() {
    return this.getStringMapAttribute('body');
  }
  public set body(value: { [key: string]: string }) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }
}
export interface DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormatJson {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#key DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#value DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormatJsonToTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormatJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormatJsonToHclTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormatJson | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormatJsonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormatJson | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormatJson | cdktf.IResolvable | undefined) {
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

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormatJsonList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormatJson[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormatJsonOutputReference {
    return new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormatJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#json DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#json}
  */
  readonly json?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormatJson[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#omit_empty_values DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#omit_empty_values}
  */
  readonly omitEmptyValues?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#plain DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#plain}
  */
  readonly plain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#type DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormatToTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json: cdktf.listMapper(dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormatJsonToTerraform, false)(struct!.json),
    omit_empty_values: cdktf.booleanToTerraform(struct!.omitEmptyValues),
    plain: cdktf.stringToTerraform(struct!.plain),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormatToHclTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormatJsonToHclTerraform, false)(struct!.json),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormatJsonList",
    },
    omit_empty_values: {
      value: cdktf.booleanToHclTerraform(struct!.omitEmptyValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    plain: {
      value: cdktf.stringToHclTerraform(struct!.plain),
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

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._json?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json?.internalValue;
    }
    if (this._omitEmptyValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.omitEmptyValues = this._omitEmptyValues;
    }
    if (this._plain !== undefined) {
      hasAnyValues = true;
      internalValueResult.plain = this._plain;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._json.internalValue = undefined;
      this._omitEmptyValues = undefined;
      this._plain = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._json.internalValue = value.json;
      this._omitEmptyValues = value.omitEmptyValues;
      this._plain = value.plain;
      this._type = value.type;
    }
  }

  // json - computed: false, optional: true, required: false
  private _json = new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormatJsonList(this, "json", false);
  public get json() {
    return this._json;
  }
  public putJson(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormatJson[] | cdktf.IResolvable) {
    this._json.internalValue = value;
  }
  public resetJson() {
    this._json.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json.internalValue;
  }

  // omit_empty_values - computed: false, optional: true, required: false
  private _omitEmptyValues?: boolean | cdktf.IResolvable; 
  public get omitEmptyValues() {
    return this.getBooleanAttribute('omit_empty_values');
  }
  public set omitEmptyValues(value: boolean | cdktf.IResolvable) {
    this._omitEmptyValues = value;
  }
  public resetOmitEmptyValues() {
    this._omitEmptyValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get omitEmptyValuesInput() {
    return this._omitEmptyValues;
  }

  // plain - computed: false, optional: true, required: false
  private _plain?: string; 
  public get plain() {
    return this.getStringAttribute('plain');
  }
  public set plain(value: string) {
    this._plain = value;
  }
  public resetPlain() {
    this._plain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainInput() {
    return this._plain;
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
export interface DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcp {
  /**
  * Address of the TCP logging backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#address DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#address}
  */
  readonly address: string;
  /**
  * Format of access logs. Placeholders available on https://www.envoyproxy.io/docs/envoy/latest/configuration/observability/access_log/usage#command-operators
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#format DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#format}
  */
  readonly format?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormat;
}

export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpToTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    format: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormatToTerraform(struct!.format),
  }
}


export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpToHclTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcp | cdktf.IResolvable): any {
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
    format: {
      value: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormatToHclTerraform(struct!.format),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormat",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._format?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._format.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._format.internalValue = value.format;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // format - computed: false, optional: true, required: false
  private _format = new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpFormat) {
    this._format.internalValue = value;
  }
  public resetFormat() {
    this._format.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }
}
export interface DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackends {
  /**
  * FileBackend defines configuration for file based access logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#file DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFile;
  /**
  * Defines an OpenTelemetry logging backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#open_telemetry DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#open_telemetry}
  */
  readonly openTelemetry?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetry;
  /**
  * TCPBackend defines a TCP logging backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#tcp DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#tcp}
  */
  readonly tcp?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#type DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsToTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackends | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileToTerraform(struct!.file),
    open_telemetry: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetryToTerraform(struct!.openTelemetry),
    tcp: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpToTerraform(struct!.tcp),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsToHclTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackends | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFile",
    },
    open_telemetry: {
      value: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetryToHclTerraform(struct!.openTelemetry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetry",
    },
    tcp: {
      value: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpToHclTerraform(struct!.tcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcp",
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

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackends | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._openTelemetry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openTelemetry = this._openTelemetry?.internalValue;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackends | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._file.internalValue = undefined;
      this._openTelemetry.internalValue = undefined;
      this._tcp.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._file.internalValue = value.file;
      this._openTelemetry.internalValue = value.openTelemetry;
      this._tcp.internalValue = value.tcp;
      this._type = value.type;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file = new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // open_telemetry - computed: false, optional: true, required: false
  private _openTelemetry = new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetryOutputReference(this, "open_telemetry");
  public get openTelemetry() {
    return this._openTelemetry;
  }
  public putOpenTelemetry(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOpenTelemetry) {
    this._openTelemetry.internalValue = value;
  }
  public resetOpenTelemetry() {
    this._openTelemetry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openTelemetryInput() {
    return this._openTelemetry.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
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

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackends[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOutputReference {
    return new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefault {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#backends DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#backends}
  */
  readonly backends?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackends[] | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultToTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backends: cdktf.listMapper(dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsToTerraform, false)(struct!.backends),
  }
}


export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultToHclTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backends: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsToHclTerraform, false)(struct!.backends),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backends?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backends = this._backends?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backends.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backends.internalValue = value.backends;
    }
  }

  // backends - computed: false, optional: true, required: false
  private _backends = new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackendsList(this, "backends", false);
  public get backends() {
    return this._backends;
  }
  public putBackends(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultBackends[] | cdktf.IResolvable) {
    this._backends.internalValue = value;
  }
  public resetBackends() {
    this._backends.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendsInput() {
    return this._backends.internalValue;
  }
}
export interface DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToTargetRef {
  /**
  * Kind of the referenced resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#kind DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Labels are used to select group of MeshServices that match labels. Either Labels or Name and Namespace can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#labels DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Mesh is reserved for future use to identify cross mesh resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#mesh DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#mesh}
  */
  readonly mesh?: string;
  /**
  * Name of the referenced resource. Can only be used with kinds: 'MeshService', 'MeshServiceSubset' and 'MeshGatewayRoute'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#name DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the namespace of target resource. If empty only resources in policy namespace will be targeted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#namespace DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * ProxyTypes specifies the data plane types that are subject to the policy. When not specified, all data plane types are targeted by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#proxy_types DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#proxy_types}
  */
  readonly proxyTypes?: string[];
  /**
  * SectionName is used to target specific section of resource. For example, you can target port from MeshService.ports[] by its name. Only traffic to this port will be affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#section_name DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#section_name}
  */
  readonly sectionName?: string;
  /**
  * Tags used to select a subset of proxies by tags. Can only be used with kinds 'MeshSubset' and 'MeshServiceSubset'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#tags DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToTargetRefToTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    mesh: cdktf.stringToTerraform(struct!.mesh),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    proxy_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.proxyTypes),
    section_name: cdktf.stringToTerraform(struct!.sectionName),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToTargetRefToHclTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    mesh: {
      value: cdktf.stringToHclTerraform(struct!.mesh),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.proxyTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    section_name: {
      value: cdktf.stringToHclTerraform(struct!.sectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._mesh !== undefined) {
      hasAnyValues = true;
      internalValueResult.mesh = this._mesh;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._proxyTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyTypes = this._proxyTypes;
    }
    if (this._sectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sectionName = this._sectionName;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._labels = undefined;
      this._mesh = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._proxyTypes = undefined;
      this._sectionName = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._labels = value.labels;
      this._mesh = value.mesh;
      this._name = value.name;
      this._namespace = value.namespace;
      this._proxyTypes = value.proxyTypes;
      this._sectionName = value.sectionName;
      this._tags = value.tags;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // mesh - computed: false, optional: true, required: false
  private _mesh?: string; 
  public get mesh() {
    return this.getStringAttribute('mesh');
  }
  public set mesh(value: string) {
    this._mesh = value;
  }
  public resetMesh() {
    this._mesh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshInput() {
    return this._mesh;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // proxy_types - computed: false, optional: true, required: false
  private _proxyTypes?: string[]; 
  public get proxyTypes() {
    return this.getListAttribute('proxy_types');
  }
  public set proxyTypes(value: string[]) {
    this._proxyTypes = value;
  }
  public resetProxyTypes() {
    this._proxyTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTypesInput() {
    return this._proxyTypes;
  }

  // section_name - computed: false, optional: true, required: false
  private _sectionName?: string; 
  public get sectionName() {
    return this.getStringAttribute('section_name');
  }
  public set sectionName(value: string) {
    this._sectionName = value;
  }
  public resetSectionName() {
    this._sectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionNameInput() {
    return this._sectionName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecTo {
  /**
  * Default is a configuration specific to the group of destinations referenced in 'targetRef'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#default DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#default}
  */
  readonly default?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefault;
  /**
  * TargetRef is a reference to the resource that represents a group of destinations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#target_ref DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#target_ref}
  */
  readonly targetRef: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToTargetRef;
}

export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToToTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultToTerraform(struct!.default),
    target_ref: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToTargetRefToTerraform(struct!.targetRef),
  }
}


export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToToHclTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefault",
    },
    target_ref: {
      value: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToTargetRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default?.internalValue;
    }
    if (this._targetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRef = this._targetRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default.internalValue = undefined;
      this._targetRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default.internalValue = value.default;
      this._targetRef.internalValue = value.targetRef;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default = new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToDefault) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // target_ref - computed: false, optional: false, required: true
  private _targetRef = new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToTargetRef) {
    this._targetRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }
}

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecTo[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToOutputReference {
    return new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpec {
  /**
  * From list makes a match between clients and corresponding configurations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#from DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFrom[] | cdktf.IResolvable;
  /**
  * TargetRef is a reference to the resource the policy takes an effect on. The resource could be either a real store object or virtual resource defined in-place.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#target_ref DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#target_ref}
  */
  readonly targetRef?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecTargetRef;
  /**
  * To list makes a match between the consumed services and corresponding configurations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#to DataK8SKumaIoMeshAccessLogV1Alpha1Manifest#to}
  */
  readonly to?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecTo[] | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.listMapper(dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromToTerraform, false)(struct!.from),
    target_ref: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecTargetRefToTerraform(struct!.targetRef),
    to: cdktf.listMapper(dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToToTerraform, false)(struct!.to),
  }
}


export function dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromToHclTerraform, false)(struct!.from),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromList",
    },
    target_ref: {
      value: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecTargetRef",
    },
    to: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToToHclTerraform, false)(struct!.to),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    if (this._targetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRef = this._targetRef?.internalValue;
    }
    if (this._to?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
      this._targetRef.internalValue = undefined;
      this._to.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
      this._targetRef.internalValue = value.targetRef;
      this._to.internalValue = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFromList(this, "from", false);
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecFrom[] | cdktf.IResolvable) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // target_ref - computed: false, optional: true, required: false
  private _targetRef = new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecTargetRef) {
    this._targetRef.internalValue = value;
  }
  public resetTargetRef() {
    this._targetRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }

  // to - computed: false, optional: true, required: false
  private _to = new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToList(this, "to", false);
  public get to() {
    return this._to;
  }
  public putTo(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecTo[] | cdktf.IResolvable) {
    this._to.internalValue = value;
  }
  public resetTo() {
    this._to.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest k8s_kuma_io_mesh_access_log_v1alpha1_manifest}
*/
export class DataK8SKumaIoMeshAccessLogV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kuma_io_mesh_access_log_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKumaIoMeshAccessLogV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKumaIoMeshAccessLogV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKumaIoMeshAccessLogV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKumaIoMeshAccessLogV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kuma_io_mesh_access_log_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_access_log_v1alpha1_manifest k8s_kuma_io_mesh_access_log_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKumaIoMeshAccessLogV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kuma_io_mesh_access_log_v1alpha1_manifest',
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
  private _metadata = new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKumaIoMeshAccessLogV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKumaIoMeshAccessLogV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
