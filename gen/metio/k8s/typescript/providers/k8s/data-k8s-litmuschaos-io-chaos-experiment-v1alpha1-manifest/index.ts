// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#description DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#description}
  */
  readonly description?: { [key: string]: string };
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#metadata DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#spec DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpec;
}
export interface DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#annotations DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#labels DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#namespace DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionConfigMaps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#mount_path DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionConfigMapsToTerraform(struct?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionConfigMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionConfigMapsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionConfigMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionConfigMapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionConfigMaps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionConfigMaps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._name = value.name;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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
}

export class DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionConfigMapsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionConfigMaps[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionConfigMapsOutputReference {
    return new DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionConfigMapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#key DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#optional DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromConfigMapKeyRefToTerraform(struct?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#api_version DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#field_path DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromFieldRefToTerraform(struct?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromFieldRefToHclTerraform(struct?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
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
export interface DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#container_name DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#divisor DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#resource DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromResourceFieldRefToTerraform(struct?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromResourceFieldRefToHclTerraform(struct?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    divisor: {
      value: cdktf.stringToHclTerraform(struct!.divisor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._divisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.divisor = this._divisor;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._divisor = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._divisor = value.divisor;
      this._resource = value.resource;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#key DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#optional DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromSecretKeyRefToTerraform(struct?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromSecretKeyRefToHclTerraform(struct?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#config_map_key_ref DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, metadata.labels, metadata.annotations, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#field_ref DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#resource_field_ref DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#secret_key_ref DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromSecretKeyRef;
}

export function dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromToTerraform(struct?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromToHclTerraform(struct?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#value DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#value_from DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFrom;
}

export function dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvToTerraform(struct?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvToHclTerraform(struct?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnv | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnv | cdktf.IResolvable | undefined {
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
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
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
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvOutputReference {
    return new DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionHostFileVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#mount_path DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#node_path DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#node_path}
  */
  readonly nodePath: string;
}

export function dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionHostFileVolumesToTerraform(struct?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionHostFileVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    node_path: cdktf.stringToTerraform(struct!.nodePath),
  }
}


export function dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionHostFileVolumesToHclTerraform(struct?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionHostFileVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
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
    node_path: {
      value: cdktf.stringToHclTerraform(struct!.nodePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionHostFileVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionHostFileVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePath = this._nodePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionHostFileVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._nodePath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._nodePath = value.nodePath;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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

  // node_path - computed: false, optional: false, required: true
  private _nodePath?: string; 
  public get nodePath() {
    return this.getStringAttribute('node_path');
  }
  public set nodePath(value: string) {
    this._nodePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePathInput() {
    return this._nodePath;
  }
}

export class DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionHostFileVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionHostFileVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionHostFileVolumesOutputReference {
    return new DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionHostFileVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#api_groups DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#api_groups}
  */
  readonly apiGroups: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#non_resource_urls DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#non_resource_urls}
  */
  readonly nonResourceUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#resource_names DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#resource_names}
  */
  readonly resourceNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#resources DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#resources}
  */
  readonly resources: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#verbs DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#verbs}
  */
  readonly verbs: string[];
}

export function dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionPermissionsToTerraform(struct?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
    non_resource_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nonResourceUrls),
    resource_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceNames),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    verbs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.verbs),
  }
}


export function dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionPermissionsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    non_resource_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nonResourceUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    verbs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.verbs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups;
    }
    if (this._nonResourceUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonResourceUrls = this._nonResourceUrls;
    }
    if (this._resourceNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceNames = this._resourceNames;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._verbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbs = this._verbs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroups = undefined;
      this._nonResourceUrls = undefined;
      this._resourceNames = undefined;
      this._resources = undefined;
      this._verbs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroups = value.apiGroups;
      this._nonResourceUrls = value.nonResourceUrls;
      this._resourceNames = value.resourceNames;
      this._resources = value.resources;
      this._verbs = value.verbs;
    }
  }

  // api_groups - computed: false, optional: false, required: true
  private _apiGroups?: string[]; 
  public get apiGroups() {
    return this.getListAttribute('api_groups');
  }
  public set apiGroups(value: string[]) {
    this._apiGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups;
  }

  // non_resource_urls - computed: false, optional: true, required: false
  private _nonResourceUrls?: string[]; 
  public get nonResourceUrls() {
    return this.getListAttribute('non_resource_urls');
  }
  public set nonResourceUrls(value: string[]) {
    this._nonResourceUrls = value;
  }
  public resetNonResourceUrls() {
    this._nonResourceUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonResourceUrlsInput() {
    return this._nonResourceUrls;
  }

  // resource_names - computed: false, optional: true, required: false
  private _resourceNames?: string[]; 
  public get resourceNames() {
    return this.getListAttribute('resource_names');
  }
  public set resourceNames(value: string[]) {
    this._resourceNames = value;
  }
  public resetResourceNames() {
    this._resourceNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNamesInput() {
    return this._resourceNames;
  }

  // resources - computed: false, optional: false, required: true
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // verbs - computed: false, optional: false, required: true
  private _verbs?: string[]; 
  public get verbs() {
    return this.getListAttribute('verbs');
  }
  public set verbs(value: string[]) {
    this._verbs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verbsInput() {
    return this._verbs;
  }
}

export class DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionPermissionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionPermissions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionPermissionsOutputReference {
    return new DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionSecrets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#mount_path DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionSecretsToTerraform(struct?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionSecretsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._name = value.name;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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
}

export class DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionSecretsOutputReference {
    return new DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#args DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#command DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#config_maps DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#config_maps}
  */
  readonly configMaps?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionConfigMaps[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#env DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnv[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#host_file_volumes DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#host_file_volumes}
  */
  readonly hostFileVolumes?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionHostFileVolumes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#host_pid DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#host_pid}
  */
  readonly hostPid?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#image DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#image_pull_policy DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#labels DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#permissions DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#permissions}
  */
  readonly permissions?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionPermissions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#scope DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#secrets DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#secrets}
  */
  readonly secrets?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionSecrets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#security_context DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#security_context}
  */
  readonly securityContext?: { [key: string]: string };
}

export function dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionToTerraform(struct?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    config_maps: cdktf.listMapper(dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionConfigMapsToTerraform, false)(struct!.configMaps),
    env: cdktf.listMapper(dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvToTerraform, false)(struct!.env),
    host_file_volumes: cdktf.listMapper(dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionHostFileVolumesToTerraform, false)(struct!.hostFileVolumes),
    host_pid: cdktf.booleanToTerraform(struct!.hostPid),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    permissions: cdktf.listMapper(dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionPermissionsToTerraform, false)(struct!.permissions),
    scope: cdktf.stringToTerraform(struct!.scope),
    secrets: cdktf.listMapper(dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionSecretsToTerraform, false)(struct!.secrets),
    security_context: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.securityContext),
  }
}


export function dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionToHclTerraform(struct?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    config_maps: {
      value: cdktf.listMapperHcl(dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionConfigMapsToHclTerraform, false)(struct!.configMaps),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionConfigMapsList",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvList",
    },
    host_file_volumes: {
      value: cdktf.listMapperHcl(dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionHostFileVolumesToHclTerraform, false)(struct!.hostFileVolumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionHostFileVolumesList",
    },
    host_pid: {
      value: cdktf.booleanToHclTerraform(struct!.hostPid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
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
    permissions: {
      value: cdktf.listMapperHcl(dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionPermissionsToHclTerraform, false)(struct!.permissions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionPermissionsList",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets: {
      value: cdktf.listMapperHcl(dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionSecretsToHclTerraform, false)(struct!.secrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionSecretsList",
    },
    security_context: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.securityContext),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._configMaps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMaps = this._configMaps?.internalValue;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._hostFileVolumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostFileVolumes = this._hostFileVolumes?.internalValue;
    }
    if (this._hostPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPid = this._hostPid;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._permissions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions?.internalValue;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._secrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets?.internalValue;
    }
    if (this._securityContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._command = undefined;
      this._configMaps.internalValue = undefined;
      this._env.internalValue = undefined;
      this._hostFileVolumes.internalValue = undefined;
      this._hostPid = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._labels = undefined;
      this._permissions.internalValue = undefined;
      this._scope = undefined;
      this._secrets.internalValue = undefined;
      this._securityContext = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._command = value.command;
      this._configMaps.internalValue = value.configMaps;
      this._env.internalValue = value.env;
      this._hostFileVolumes.internalValue = value.hostFileVolumes;
      this._hostPid = value.hostPid;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._labels = value.labels;
      this._permissions.internalValue = value.permissions;
      this._scope = value.scope;
      this._secrets.internalValue = value.secrets;
      this._securityContext = value.securityContext;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // config_maps - computed: false, optional: true, required: false
  private _configMaps = new DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionConfigMapsList(this, "config_maps", false);
  public get configMaps() {
    return this._configMaps;
  }
  public putConfigMaps(value: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionConfigMaps[] | cdktf.IResolvable) {
    this._configMaps.internalValue = value;
  }
  public resetConfigMaps() {
    this._configMaps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapsInput() {
    return this._configMaps.internalValue;
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // host_file_volumes - computed: false, optional: true, required: false
  private _hostFileVolumes = new DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionHostFileVolumesList(this, "host_file_volumes", false);
  public get hostFileVolumes() {
    return this._hostFileVolumes;
  }
  public putHostFileVolumes(value: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionHostFileVolumes[] | cdktf.IResolvable) {
    this._hostFileVolumes.internalValue = value;
  }
  public resetHostFileVolumes() {
    this._hostFileVolumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostFileVolumesInput() {
    return this._hostFileVolumes.internalValue;
  }

  // host_pid - computed: false, optional: true, required: false
  private _hostPid?: boolean | cdktf.IResolvable; 
  public get hostPid() {
    return this.getBooleanAttribute('host_pid');
  }
  public set hostPid(value: boolean | cdktf.IResolvable) {
    this._hostPid = value;
  }
  public resetHostPid() {
    this._hostPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPidInput() {
    return this._hostPid;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
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

  // permissions - computed: false, optional: true, required: false
  private _permissions = new DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionPermissions[] | cdktf.IResolvable) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets = new DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionSecrets[] | cdktf.IResolvable) {
    this._secrets.internalValue = value;
  }
  public resetSecrets() {
    this._secrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext?: { [key: string]: string }; 
  public get securityContext() {
    return this.getStringMapAttribute('security_context');
  }
  public set securityContext(value: { [key: string]: string }) {
    this._securityContext = value;
  }
  public resetSecurityContext() {
    this._securityContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext;
  }
}
export interface DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#definition DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest#definition}
  */
  readonly definition?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinition;
}

export function dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecToTerraform(struct?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionToTerraform(struct!.definition),
  }
}


export function dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionToHclTerraform(struct!.definition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition.internalValue = value.definition;
    }
  }

  // definition - computed: false, optional: true, required: false
  private _definition = new DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecDefinition) {
    this._definition.internalValue = value;
  }
  public resetDefinition() {
    this._definition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest k8s_litmuschaos_io_chaos_experiment_v1alpha1_manifest}
*/
export class DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_litmuschaos_io_chaos_experiment_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SLitmuschaosIoChaosExperimentV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_litmuschaos_io_chaos_experiment_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/litmuschaos_io_chaos_experiment_v1alpha1_manifest k8s_litmuschaos_io_chaos_experiment_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_litmuschaos_io_chaos_experiment_v1alpha1_manifest',
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
    this._description = config.description;
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: { [key: string]: string }; 
  public get description() {
    return this.getStringMapAttribute('description');
  }
  public set description(value: { [key: string]: string }) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpec) {
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
      description: cdktf.hashMapper(cdktf.stringToTerraform)(this._description),
      metadata: dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._description),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      metadata: {
        value: dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLitmuschaosIoChaosExperimentV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
