// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#metadata DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestMetadata;
  /**
  * ConfigConstraintSpec defines the desired state of ConfigConstraint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#spec DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpec;
}
export interface DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#annotations DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#labels DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#name DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
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
}
export interface DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecConfigurationSchema {
  /**
  * Hold a string that contains a script written in CUE language that defines a list of configuration items. Each item is detailed with its name, default value, description, type (e.g. string, integer, float), and constraints (permissible values or the valid range of values). CUE (Configure, Unify, Execute) is a declarative language designed for defining and validating complex data configurations. It is particularly useful in environments like K8s where complex configurations and validation rules are common. This script functions as a validator for user-provided configurations, ensuring compliance with the established specifications and constraints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#cue DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#cue}
  */
  readonly cue?: string;
  /**
  * Generated from the 'cue' field and transformed into a JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#schema DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#schema}
  */
  readonly schema?: { [key: string]: string };
}

export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecConfigurationSchemaToTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecConfigurationSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cue: cdktf.stringToTerraform(struct!.cue),
    schema: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.schema),
  }
}


export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecConfigurationSchemaToHclTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecConfigurationSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cue: {
      value: cdktf.stringToHclTerraform(struct!.cue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.schema),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecConfigurationSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecConfigurationSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cue = this._cue;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecConfigurationSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cue = undefined;
      this._schema = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cue = value.cue;
      this._schema = value.schema;
    }
  }

  // cue - computed: false, optional: true, required: false
  private _cue?: string; 
  public get cue() {
    return this.getStringAttribute('cue');
  }
  public set cue(value: string) {
    this._cue = value;
  }
  public resetCue() {
    this._cue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cueInput() {
    return this._cue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: { [key: string]: string }; 
  public get schema() {
    return this.getStringMapAttribute('schema');
  }
  public set schema(value: { [key: string]: string }) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }
}
export interface DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#api_version DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#field_path DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsFieldRefToTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsFieldRefToHclTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsFieldRef | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#container_name DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#divisor DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#resource DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsResourceFieldRefToTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsResourceFieldRefToHclTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItems {
  /**
  * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#field_ref DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsFieldRef;
  /**
  * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#mode DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Required: Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#path DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#resource_field_ref DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsResourceFieldRef;
}

export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsToTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsFieldRefToTerraform(struct!.fieldRef),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    resource_field_ref: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}


export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsToHclTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref: {
      value: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsFieldRef",
    },
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_field_ref: {
      value: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsResourceFieldRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._mode = undefined;
      this._path = undefined;
      this._resourceFieldRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldRef.internalValue = value.fieldRef;
      this._mode = value.mode;
      this._path = value.path;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
    }
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }
}

export class DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsOutputReference {
    return new DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsScriptConfig {
  /**
  * Specifies the namespace for the ConfigMap. If not specified, it defaults to the 'default' namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#namespace DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies the reference to the ConfigMap containing the scripts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#script_config_map_ref DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#script_config_map_ref}
  */
  readonly scriptConfigMapRef: string;
}

export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsScriptConfigToTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsScriptConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    script_config_map_ref: cdktf.stringToTerraform(struct!.scriptConfigMapRef),
  }
}


export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsScriptConfigToHclTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsScriptConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_config_map_ref: {
      value: cdktf.stringToHclTerraform(struct!.scriptConfigMapRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsScriptConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsScriptConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._scriptConfigMapRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptConfigMapRef = this._scriptConfigMapRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsScriptConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._scriptConfigMapRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._scriptConfigMapRef = value.scriptConfigMapRef;
    }
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

  // script_config_map_ref - computed: false, optional: false, required: true
  private _scriptConfigMapRef?: string; 
  public get scriptConfigMapRef() {
    return this.getStringAttribute('script_config_map_ref');
  }
  public set scriptConfigMapRef(value: string) {
    this._scriptConfigMapRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptConfigMapRefInput() {
    return this._scriptConfigMapRef;
  }
}
export interface DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptions {
  /**
  * Specifies the command to be triggered when changes are detected in Downward API volume files. It relies on the inotify mechanism in the config-manager sidecar to monitor file changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#command DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#command}
  */
  readonly command?: string[];
  /**
  * Represents a list of files under the Downward API volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#items DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#items}
  */
  readonly items: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItems[] | cdktf.IResolvable;
  /**
  * Specifies the mount point of the Downward API volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#mount_point DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#mount_point}
  */
  readonly mountPoint: string;
  /**
  * Specifies the name of the field. It must be a string of maximum length 63. The name should match the regex pattern '^[a-z0-9]([a-z0-9.-]*[a-z0-9])?$'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#name DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * ScriptConfig object specifies a ConfigMap that contains script files that should be mounted inside the pod. The scripts are mounted as volumes and can be referenced and executed by the DownwardAction to perform specific tasks or configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#script_config DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#script_config}
  */
  readonly scriptConfig?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsScriptConfig;
}

export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsToTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    items: cdktf.listMapper(dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsToTerraform, false)(struct!.items),
    mount_point: cdktf.stringToTerraform(struct!.mountPoint),
    name: cdktf.stringToTerraform(struct!.name),
    script_config: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsScriptConfigToTerraform(struct!.scriptConfig),
  }
}


export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsToHclTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsList",
    },
    mount_point: {
      value: cdktf.stringToHclTerraform(struct!.mountPoint),
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
    script_config: {
      value: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsScriptConfigToHclTerraform(struct!.scriptConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsScriptConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._mountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoint = this._mountPoint;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scriptConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptConfig = this._scriptConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._items.internalValue = undefined;
      this._mountPoint = undefined;
      this._name = undefined;
      this._scriptConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._items.internalValue = value.items;
      this._mountPoint = value.mountPoint;
      this._name = value.name;
      this._scriptConfig.internalValue = value.scriptConfig;
    }
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

  // items - computed: false, optional: false, required: true
  private _items = new DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // mount_point - computed: false, optional: false, required: true
  private _mountPoint?: string; 
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
  public set mountPoint(value: string) {
    this._mountPoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointInput() {
    return this._mountPoint;
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

  // script_config - computed: false, optional: true, required: false
  private _scriptConfig = new DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsScriptConfigOutputReference(this, "script_config");
  public get scriptConfig() {
    return this._scriptConfig;
  }
  public putScriptConfig(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsScriptConfig) {
    this._scriptConfig.internalValue = value;
  }
  public resetScriptConfig() {
    this._scriptConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptConfigInput() {
    return this._scriptConfig.internalValue;
  }
}

export class DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsOutputReference {
    return new DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecFormatterConfigIniConfig {
  /**
  * A string that describes the name of the ini section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#section_name DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#section_name}
  */
  readonly sectionName?: string;
}

export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecFormatterConfigIniConfigToTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecFormatterConfigIniConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    section_name: cdktf.stringToTerraform(struct!.sectionName),
  }
}


export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecFormatterConfigIniConfigToHclTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecFormatterConfigIniConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    section_name: {
      value: cdktf.stringToHclTerraform(struct!.sectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecFormatterConfigIniConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecFormatterConfigIniConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sectionName = this._sectionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecFormatterConfigIniConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sectionName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sectionName = value.sectionName;
    }
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
}
export interface DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecFormatterConfig {
  /**
  * The config file format. Valid values are 'ini', 'xml', 'yaml', 'json', 'hcl', 'dotenv', 'properties' and 'toml'. Each format has its own characteristics and use cases. - ini: is a text-based content with a structure and syntax comprising key–value pairs for properties, reference wiki: https://en.wikipedia.org/wiki/INI_file - xml: refers to wiki: https://en.wikipedia.org/wiki/XML - yaml: supports for complex data types and structures. - json: refers to wiki: https://en.wikipedia.org/wiki/JSON - hcl: The HashiCorp Configuration Language (HCL) is a configuration language authored by HashiCorp, reference url: https://www.linode.com/docs/guides/introduction-to-hcl/ - dotenv: is a plain text file with simple key–value pairs, reference wiki: https://en.wikipedia.org/wiki/Configuration_file#MS-DOS - properties: a file extension mainly used in Java, reference wiki: https://en.wikipedia.org/wiki/.properties - toml: refers to wiki: https://en.wikipedia.org/wiki/TOML - props-plus: a file extension mainly used in Java, supports CamelCase(e.g: brokerMaxConnectionsPerIp)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#format DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#format}
  */
  readonly format: string;
  /**
  * Holds options specific to the 'ini' file format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#ini_config DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#ini_config}
  */
  readonly iniConfig?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecFormatterConfigIniConfig;
}

export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecFormatterConfigToTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecFormatterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    ini_config: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecFormatterConfigIniConfigToTerraform(struct!.iniConfig),
  }
}


export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecFormatterConfigToHclTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecFormatterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ini_config: {
      value: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecFormatterConfigIniConfigToHclTerraform(struct!.iniConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecFormatterConfigIniConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecFormatterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecFormatterConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._iniConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iniConfig = this._iniConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecFormatterConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._iniConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._iniConfig.internalValue = value.iniConfig;
    }
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // ini_config - computed: false, optional: true, required: false
  private _iniConfig = new DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecFormatterConfigIniConfigOutputReference(this, "ini_config");
  public get iniConfig() {
    return this._iniConfig;
  }
  public putIniConfig(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecFormatterConfigIniConfig) {
    this._iniConfig.internalValue = value;
  }
  public resetIniConfig() {
    this._iniConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iniConfigInput() {
    return this._iniConfig.internalValue;
  }
}
export interface DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsAutoTrigger {
  /**
  * The name of the process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#process_name DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#process_name}
  */
  readonly processName?: string;
}

export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsAutoTriggerToTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsAutoTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    process_name: cdktf.stringToTerraform(struct!.processName),
  }
}


export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsAutoTriggerToHclTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsAutoTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    process_name: {
      value: cdktf.stringToHclTerraform(struct!.processName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsAutoTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsAutoTrigger | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processName !== undefined) {
      hasAnyValues = true;
      internalValueResult.processName = this._processName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsAutoTrigger | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._processName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._processName = value.processName;
    }
  }

  // process_name - computed: false, optional: true, required: false
  private _processName?: string; 
  public get processName() {
    return this.getStringAttribute('process_name');
  }
  public set processName(value: string) {
    this._processName = value;
  }
  public resetProcessName() {
    this._processName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processNameInput() {
    return this._processName;
  }
}
export interface DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerScriptConfig {
  /**
  * Specifies the namespace for the ConfigMap. If not specified, it defaults to the 'default' namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#namespace DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies the reference to the ConfigMap containing the scripts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#script_config_map_ref DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#script_config_map_ref}
  */
  readonly scriptConfigMapRef: string;
}

export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerScriptConfigToTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerScriptConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    script_config_map_ref: cdktf.stringToTerraform(struct!.scriptConfigMapRef),
  }
}


export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerScriptConfigToHclTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerScriptConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_config_map_ref: {
      value: cdktf.stringToHclTerraform(struct!.scriptConfigMapRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerScriptConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerScriptConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._scriptConfigMapRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptConfigMapRef = this._scriptConfigMapRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerScriptConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._scriptConfigMapRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._scriptConfigMapRef = value.scriptConfigMapRef;
    }
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

  // script_config_map_ref - computed: false, optional: false, required: true
  private _scriptConfigMapRef?: string; 
  public get scriptConfigMapRef() {
    return this.getStringAttribute('script_config_map_ref');
  }
  public set scriptConfigMapRef(value: string) {
    this._scriptConfigMapRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptConfigMapRefInput() {
    return this._scriptConfigMapRef;
  }
}
export interface DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetupToolConfigs {
  /**
  * Indicates whether the tool image should be used as the container image for a sidecar. This is useful for large tool images, such as those for C++ tools, which may depend on numerous libraries (e.g., *.so files). If enabled, the tool image is deployed as a sidecar container image. Examples: ```yaml toolsSetup:: mountPoint: /kb_tools toolConfigs: - name: kb-tools asContainerImage: true image: apecloud/oceanbase:4.2.0.0-100010032023083021 ``` generated containers: ```yaml initContainers: - name: install-config-manager-tool image: apecloud/kubeblocks-tools:${version} command: - cp - /bin/config_render - /opt/tools volumemounts: - name: kb-tools mountpath: /opt/tools containers: - name: config-manager image: apecloud/oceanbase:4.2.0.0-100010032023083021 imagePullPolicy: IfNotPresent command: - /opt/tools/reloader - --log-level - info - --operator-update-enable - --tcp - '9901' - --config - /opt/config-manager/config-manager.yaml volumemounts: - name: kb-tools mountpath: /opt/tools ```
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#as_container_image DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#as_container_image}
  */
  readonly asContainerImage?: boolean | cdktf.IResolvable;
  /**
  * Specifies the command to be executed by the init container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#command DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#command}
  */
  readonly command?: string[];
  /**
  * Specifies the tool container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#image DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Specifies the name of the init container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#name DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetupToolConfigsToTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetupToolConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_container_image: cdktf.booleanToTerraform(struct!.asContainerImage),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    image: cdktf.stringToTerraform(struct!.image),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetupToolConfigsToHclTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetupToolConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_container_image: {
      value: cdktf.booleanToHclTerraform(struct!.asContainerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
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

export class DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetupToolConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetupToolConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asContainerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.asContainerImage = this._asContainerImage;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetupToolConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asContainerImage = undefined;
      this._command = undefined;
      this._image = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asContainerImage = value.asContainerImage;
      this._command = value.command;
      this._image = value.image;
      this._name = value.name;
    }
  }

  // as_container_image - computed: false, optional: true, required: false
  private _asContainerImage?: boolean | cdktf.IResolvable; 
  public get asContainerImage() {
    return this.getBooleanAttribute('as_container_image');
  }
  public set asContainerImage(value: boolean | cdktf.IResolvable) {
    this._asContainerImage = value;
  }
  public resetAsContainerImage() {
    this._asContainerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asContainerImageInput() {
    return this._asContainerImage;
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

export class DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetupToolConfigsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetupToolConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetupToolConfigsOutputReference {
    return new DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetupToolConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetup {
  /**
  * Specifies the directory path in the container where the tools-related files are to be copied. This field is typically used with an emptyDir volume to ensure a temporary, empty directory is provided at pod creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#mount_point DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#mount_point}
  */
  readonly mountPoint: string;
  /**
  * Specifies a list of settings of init containers that prepare tools for dynamic reload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#tool_configs DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#tool_configs}
  */
  readonly toolConfigs?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetupToolConfigs[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetupToTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_point: cdktf.stringToTerraform(struct!.mountPoint),
    tool_configs: cdktf.listMapper(dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetupToolConfigsToTerraform, false)(struct!.toolConfigs),
  }
}


export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetupToHclTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_point: {
      value: cdktf.stringToHclTerraform(struct!.mountPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tool_configs: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetupToolConfigsToHclTerraform, false)(struct!.toolConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetupToolConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoint = this._mountPoint;
    }
    if (this._toolConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolConfigs = this._toolConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPoint = undefined;
      this._toolConfigs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPoint = value.mountPoint;
      this._toolConfigs.internalValue = value.toolConfigs;
    }
  }

  // mount_point - computed: false, optional: false, required: true
  private _mountPoint?: string; 
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
  public set mountPoint(value: string) {
    this._mountPoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointInput() {
    return this._mountPoint;
  }

  // tool_configs - computed: false, optional: true, required: false
  private _toolConfigs = new DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetupToolConfigsList(this, "tool_configs", false);
  public get toolConfigs() {
    return this._toolConfigs;
  }
  public putToolConfigs(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetupToolConfigs[] | cdktf.IResolvable) {
    this._toolConfigs.internalValue = value;
  }
  public resetToolConfigs() {
    this._toolConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolConfigsInput() {
    return this._toolConfigs.internalValue;
  }
}
export interface DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTrigger {
  /**
  * Specifies a Go template string for formatting batch input data. It's used when 'batchReload' is 'True' to format data passed into STDIN of the script. The template accesses key-value pairs of updated parameters via the '$' variable. This allows for custom formatting of the input data. Example template: ```yaml batchParamsFormatterTemplate: |- {{- range $pKey, $pValue := $ }} {{ printf '%s:%s' $pKey $pValue }} {{- end }} ``` This example generates batch input data in a key:value format, sorted by keys. ``` key1:value1 key2:value2 key3:value3 ``` If not specified, the default format is key=value, sorted by keys, for each updated parameter. ``` key1=value1 key2=value2 key3=value3 ```
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#batch_params_formatter_template DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#batch_params_formatter_template}
  */
  readonly batchParamsFormatterTemplate?: string;
  /**
  * Controls whether parameter updates are processed individually or collectively in a batch: - 'True': Processes all changes in one batch reload. - 'False': Processes each change individually. Defaults to 'False' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#batch_reload DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#batch_reload}
  */
  readonly batchReload?: boolean | cdktf.IResolvable;
  /**
  * Specifies the command to execute in order to reload the process. It should be a valid shell command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#command DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#command}
  */
  readonly command: string[];
  /**
  * ScriptConfig object specifies a ConfigMap that contains script files that should be mounted inside the pod. The scripts are mounted as volumes and can be referenced and executed by the dynamic reload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#script_config DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#script_config}
  */
  readonly scriptConfig?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerScriptConfig;
  /**
  * Determines the synchronization mode of parameter updates with 'config-manager'. - 'True': Executes reload actions synchronously, pausing until completion. - 'False': Executes reload actions asynchronously, without waiting for completion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#sync DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#sync}
  */
  readonly sync?: boolean | cdktf.IResolvable;
  /**
  * Specifies the tools container image used by ShellTrigger for dynamic reload. If the dynamic reload action is triggered by a ShellTrigger, this field is required. This image must contain all necessary tools for executing the ShellTrigger scripts. Usually the specified image is referenced by the init container, which is then responsible for copy the tools from the image to a bin volume. This ensures that the tools are available to the 'config-manager' sidecar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#tools_setup DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#tools_setup}
  */
  readonly toolsSetup?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetup;
}

export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_params_formatter_template: cdktf.stringToTerraform(struct!.batchParamsFormatterTemplate),
    batch_reload: cdktf.booleanToTerraform(struct!.batchReload),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    script_config: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerScriptConfigToTerraform(struct!.scriptConfig),
    sync: cdktf.booleanToTerraform(struct!.sync),
    tools_setup: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetupToTerraform(struct!.toolsSetup),
  }
}


export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToHclTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_params_formatter_template: {
      value: cdktf.stringToHclTerraform(struct!.batchParamsFormatterTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch_reload: {
      value: cdktf.booleanToHclTerraform(struct!.batchReload),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    script_config: {
      value: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerScriptConfigToHclTerraform(struct!.scriptConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerScriptConfig",
    },
    sync: {
      value: cdktf.booleanToHclTerraform(struct!.sync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tools_setup: {
      value: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetupToHclTerraform(struct!.toolsSetup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetup",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTrigger | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchParamsFormatterTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchParamsFormatterTemplate = this._batchParamsFormatterTemplate;
    }
    if (this._batchReload !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchReload = this._batchReload;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._scriptConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptConfig = this._scriptConfig?.internalValue;
    }
    if (this._sync !== undefined) {
      hasAnyValues = true;
      internalValueResult.sync = this._sync;
    }
    if (this._toolsSetup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolsSetup = this._toolsSetup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTrigger | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchParamsFormatterTemplate = undefined;
      this._batchReload = undefined;
      this._command = undefined;
      this._scriptConfig.internalValue = undefined;
      this._sync = undefined;
      this._toolsSetup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchParamsFormatterTemplate = value.batchParamsFormatterTemplate;
      this._batchReload = value.batchReload;
      this._command = value.command;
      this._scriptConfig.internalValue = value.scriptConfig;
      this._sync = value.sync;
      this._toolsSetup.internalValue = value.toolsSetup;
    }
  }

  // batch_params_formatter_template - computed: false, optional: true, required: false
  private _batchParamsFormatterTemplate?: string; 
  public get batchParamsFormatterTemplate() {
    return this.getStringAttribute('batch_params_formatter_template');
  }
  public set batchParamsFormatterTemplate(value: string) {
    this._batchParamsFormatterTemplate = value;
  }
  public resetBatchParamsFormatterTemplate() {
    this._batchParamsFormatterTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchParamsFormatterTemplateInput() {
    return this._batchParamsFormatterTemplate;
  }

  // batch_reload - computed: false, optional: true, required: false
  private _batchReload?: boolean | cdktf.IResolvable; 
  public get batchReload() {
    return this.getBooleanAttribute('batch_reload');
  }
  public set batchReload(value: boolean | cdktf.IResolvable) {
    this._batchReload = value;
  }
  public resetBatchReload() {
    this._batchReload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchReloadInput() {
    return this._batchReload;
  }

  // command - computed: false, optional: false, required: true
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // script_config - computed: false, optional: true, required: false
  private _scriptConfig = new DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerScriptConfigOutputReference(this, "script_config");
  public get scriptConfig() {
    return this._scriptConfig;
  }
  public putScriptConfig(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerScriptConfig) {
    this._scriptConfig.internalValue = value;
  }
  public resetScriptConfig() {
    this._scriptConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptConfigInput() {
    return this._scriptConfig.internalValue;
  }

  // sync - computed: false, optional: true, required: false
  private _sync?: boolean | cdktf.IResolvable; 
  public get sync() {
    return this.getBooleanAttribute('sync');
  }
  public set sync(value: boolean | cdktf.IResolvable) {
    this._sync = value;
  }
  public resetSync() {
    this._sync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncInput() {
    return this._sync;
  }

  // tools_setup - computed: false, optional: true, required: false
  private _toolsSetup = new DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetupOutputReference(this, "tools_setup");
  public get toolsSetup() {
    return this._toolsSetup;
  }
  public putToolsSetup(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToolsSetup) {
    this._toolsSetup.internalValue = value;
  }
  public resetToolsSetup() {
    this._toolsSetup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsSetupInput() {
    return this._toolsSetup.internalValue;
  }
}
export interface DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsTplScriptTrigger {
  /**
  * Specifies the namespace for the ConfigMap. If not specified, it defaults to the 'default' namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#namespace DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies the reference to the ConfigMap containing the scripts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#script_config_map_ref DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#script_config_map_ref}
  */
  readonly scriptConfigMapRef: string;
  /**
  * Determines whether parameter updates should be synchronized with the 'config-manager'. Specifies the controller's reload strategy: - If set to 'True', the controller executes the reload action in synchronous mode, pausing execution until the reload completes. - If set to 'False', the controller executes the reload action in asynchronous mode, updating the ConfigMap without waiting for the reload process to finish.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#sync DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#sync}
  */
  readonly sync?: boolean | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsTplScriptTriggerToTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsTplScriptTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    script_config_map_ref: cdktf.stringToTerraform(struct!.scriptConfigMapRef),
    sync: cdktf.booleanToTerraform(struct!.sync),
  }
}


export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsTplScriptTriggerToHclTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsTplScriptTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_config_map_ref: {
      value: cdktf.stringToHclTerraform(struct!.scriptConfigMapRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync: {
      value: cdktf.booleanToHclTerraform(struct!.sync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsTplScriptTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsTplScriptTrigger | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._scriptConfigMapRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptConfigMapRef = this._scriptConfigMapRef;
    }
    if (this._sync !== undefined) {
      hasAnyValues = true;
      internalValueResult.sync = this._sync;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsTplScriptTrigger | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._scriptConfigMapRef = undefined;
      this._sync = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._scriptConfigMapRef = value.scriptConfigMapRef;
      this._sync = value.sync;
    }
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

  // script_config_map_ref - computed: false, optional: false, required: true
  private _scriptConfigMapRef?: string; 
  public get scriptConfigMapRef() {
    return this.getStringAttribute('script_config_map_ref');
  }
  public set scriptConfigMapRef(value: string) {
    this._scriptConfigMapRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptConfigMapRefInput() {
    return this._scriptConfigMapRef;
  }

  // sync - computed: false, optional: true, required: false
  private _sync?: boolean | cdktf.IResolvable; 
  public get sync() {
    return this.getBooleanAttribute('sync');
  }
  public set sync(value: boolean | cdktf.IResolvable) {
    this._sync = value;
  }
  public resetSync() {
    this._sync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncInput() {
    return this._sync;
  }
}
export interface DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsUnixSignalTrigger {
  /**
  * Identifies the name of the process to which the Unix signal will be sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#process_name DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#process_name}
  */
  readonly processName: string;
  /**
  * Specifies a valid Unix signal to be sent. For a comprehensive list of all Unix signals, see: ../../pkg/configuration/configmap/handler.go:allUnixSignals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#signal DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#signal}
  */
  readonly signal: string;
}

export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsUnixSignalTriggerToTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsUnixSignalTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    process_name: cdktf.stringToTerraform(struct!.processName),
    signal: cdktf.stringToTerraform(struct!.signal),
  }
}


export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsUnixSignalTriggerToHclTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsUnixSignalTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    process_name: {
      value: cdktf.stringToHclTerraform(struct!.processName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signal: {
      value: cdktf.stringToHclTerraform(struct!.signal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsUnixSignalTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsUnixSignalTrigger | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processName !== undefined) {
      hasAnyValues = true;
      internalValueResult.processName = this._processName;
    }
    if (this._signal !== undefined) {
      hasAnyValues = true;
      internalValueResult.signal = this._signal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsUnixSignalTrigger | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._processName = undefined;
      this._signal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._processName = value.processName;
      this._signal = value.signal;
    }
  }

  // process_name - computed: false, optional: false, required: true
  private _processName?: string; 
  public get processName() {
    return this.getStringAttribute('process_name');
  }
  public set processName(value: string) {
    this._processName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processNameInput() {
    return this._processName;
  }

  // signal - computed: false, optional: false, required: true
  private _signal?: string; 
  public get signal() {
    return this.getStringAttribute('signal');
  }
  public set signal(value: string) {
    this._signal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signalInput() {
    return this._signal;
  }
}
export interface DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptions {
  /**
  * Automatically perform the reload when specified conditions are met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#auto_trigger DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#auto_trigger}
  */
  readonly autoTrigger?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsAutoTrigger;
  /**
  * Allows to execute a custom shell script to reload the process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#shell_trigger DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#shell_trigger}
  */
  readonly shellTrigger?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTrigger;
  /**
  * Enables reloading process using a Go template script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#tpl_script_trigger DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#tpl_script_trigger}
  */
  readonly tplScriptTrigger?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsTplScriptTrigger;
  /**
  * Used to trigger a reload by sending a specific Unix signal to the process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#unix_signal_trigger DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#unix_signal_trigger}
  */
  readonly unixSignalTrigger?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsUnixSignalTrigger;
}

export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsToTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_trigger: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsAutoTriggerToTerraform(struct!.autoTrigger),
    shell_trigger: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToTerraform(struct!.shellTrigger),
    tpl_script_trigger: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsTplScriptTriggerToTerraform(struct!.tplScriptTrigger),
    unix_signal_trigger: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsUnixSignalTriggerToTerraform(struct!.unixSignalTrigger),
  }
}


export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsToHclTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_trigger: {
      value: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsAutoTriggerToHclTerraform(struct!.autoTrigger),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsAutoTrigger",
    },
    shell_trigger: {
      value: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerToHclTerraform(struct!.shellTrigger),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTrigger",
    },
    tpl_script_trigger: {
      value: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsTplScriptTriggerToHclTerraform(struct!.tplScriptTrigger),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsTplScriptTrigger",
    },
    unix_signal_trigger: {
      value: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsUnixSignalTriggerToHclTerraform(struct!.unixSignalTrigger),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsUnixSignalTrigger",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoTrigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoTrigger = this._autoTrigger?.internalValue;
    }
    if (this._shellTrigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shellTrigger = this._shellTrigger?.internalValue;
    }
    if (this._tplScriptTrigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tplScriptTrigger = this._tplScriptTrigger?.internalValue;
    }
    if (this._unixSignalTrigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unixSignalTrigger = this._unixSignalTrigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoTrigger.internalValue = undefined;
      this._shellTrigger.internalValue = undefined;
      this._tplScriptTrigger.internalValue = undefined;
      this._unixSignalTrigger.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoTrigger.internalValue = value.autoTrigger;
      this._shellTrigger.internalValue = value.shellTrigger;
      this._tplScriptTrigger.internalValue = value.tplScriptTrigger;
      this._unixSignalTrigger.internalValue = value.unixSignalTrigger;
    }
  }

  // auto_trigger - computed: false, optional: true, required: false
  private _autoTrigger = new DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsAutoTriggerOutputReference(this, "auto_trigger");
  public get autoTrigger() {
    return this._autoTrigger;
  }
  public putAutoTrigger(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsAutoTrigger) {
    this._autoTrigger.internalValue = value;
  }
  public resetAutoTrigger() {
    this._autoTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTriggerInput() {
    return this._autoTrigger.internalValue;
  }

  // shell_trigger - computed: false, optional: true, required: false
  private _shellTrigger = new DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTriggerOutputReference(this, "shell_trigger");
  public get shellTrigger() {
    return this._shellTrigger;
  }
  public putShellTrigger(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsShellTrigger) {
    this._shellTrigger.internalValue = value;
  }
  public resetShellTrigger() {
    this._shellTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shellTriggerInput() {
    return this._shellTrigger.internalValue;
  }

  // tpl_script_trigger - computed: false, optional: true, required: false
  private _tplScriptTrigger = new DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsTplScriptTriggerOutputReference(this, "tpl_script_trigger");
  public get tplScriptTrigger() {
    return this._tplScriptTrigger;
  }
  public putTplScriptTrigger(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsTplScriptTrigger) {
    this._tplScriptTrigger.internalValue = value;
  }
  public resetTplScriptTrigger() {
    this._tplScriptTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tplScriptTriggerInput() {
    return this._tplScriptTrigger.internalValue;
  }

  // unix_signal_trigger - computed: false, optional: true, required: false
  private _unixSignalTrigger = new DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsUnixSignalTriggerOutputReference(this, "unix_signal_trigger");
  public get unixSignalTrigger() {
    return this._unixSignalTrigger;
  }
  public putUnixSignalTrigger(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsUnixSignalTrigger) {
    this._unixSignalTrigger.internalValue = value;
  }
  public resetUnixSignalTrigger() {
    this._unixSignalTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixSignalTriggerInput() {
    return this._unixSignalTrigger.internalValue;
  }
}
export interface DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecScriptConfigs {
  /**
  * Specifies the namespace for the ConfigMap. If not specified, it defaults to the 'default' namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#namespace DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies the reference to the ConfigMap containing the scripts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#script_config_map_ref DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#script_config_map_ref}
  */
  readonly scriptConfigMapRef: string;
}

export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecScriptConfigsToTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecScriptConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    script_config_map_ref: cdktf.stringToTerraform(struct!.scriptConfigMapRef),
  }
}


export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecScriptConfigsToHclTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecScriptConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_config_map_ref: {
      value: cdktf.stringToHclTerraform(struct!.scriptConfigMapRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecScriptConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecScriptConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._scriptConfigMapRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptConfigMapRef = this._scriptConfigMapRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecScriptConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._scriptConfigMapRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._scriptConfigMapRef = value.scriptConfigMapRef;
    }
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

  // script_config_map_ref - computed: false, optional: false, required: true
  private _scriptConfigMapRef?: string; 
  public get scriptConfigMapRef() {
    return this.getStringAttribute('script_config_map_ref');
  }
  public set scriptConfigMapRef(value: string) {
    this._scriptConfigMapRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptConfigMapRefInput() {
    return this._scriptConfigMapRef;
  }
}

export class DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecScriptConfigsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecScriptConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecScriptConfigsOutputReference {
    return new DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecScriptConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#key DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#operator DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#values DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelectorMatchExpressionsToTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelectorMatchExpressionsToHclTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelectorMatchExpressionsOutputReference {
    return new DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#match_expressions DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#match_labels DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelectorToTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelectorToHclTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpecToolConfigs {
  /**
  * Indicates whether the tool image should be used as the container image for a sidecar. This is useful for large tool images, such as those for C++ tools, which may depend on numerous libraries (e.g., *.so files). If enabled, the tool image is deployed as a sidecar container image. Examples: ```yaml toolsSetup:: mountPoint: /kb_tools toolConfigs: - name: kb-tools asContainerImage: true image: apecloud/oceanbase:4.2.0.0-100010032023083021 ``` generated containers: ```yaml initContainers: - name: install-config-manager-tool image: apecloud/kubeblocks-tools:${version} command: - cp - /bin/config_render - /opt/tools volumemounts: - name: kb-tools mountpath: /opt/tools containers: - name: config-manager image: apecloud/oceanbase:4.2.0.0-100010032023083021 imagePullPolicy: IfNotPresent command: - /opt/tools/reloader - --log-level - info - --operator-update-enable - --tcp - '9901' - --config - /opt/config-manager/config-manager.yaml volumemounts: - name: kb-tools mountpath: /opt/tools ```
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#as_container_image DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#as_container_image}
  */
  readonly asContainerImage?: boolean | cdktf.IResolvable;
  /**
  * Specifies the command to be executed by the init container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#command DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#command}
  */
  readonly command?: string[];
  /**
  * Specifies the tool container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#image DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Specifies the name of the init container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#name DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpecToolConfigsToTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpecToolConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_container_image: cdktf.booleanToTerraform(struct!.asContainerImage),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    image: cdktf.stringToTerraform(struct!.image),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpecToolConfigsToHclTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpecToolConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_container_image: {
      value: cdktf.booleanToHclTerraform(struct!.asContainerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
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

export class DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpecToolConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpecToolConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asContainerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.asContainerImage = this._asContainerImage;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpecToolConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asContainerImage = undefined;
      this._command = undefined;
      this._image = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asContainerImage = value.asContainerImage;
      this._command = value.command;
      this._image = value.image;
      this._name = value.name;
    }
  }

  // as_container_image - computed: false, optional: true, required: false
  private _asContainerImage?: boolean | cdktf.IResolvable; 
  public get asContainerImage() {
    return this.getBooleanAttribute('as_container_image');
  }
  public set asContainerImage(value: boolean | cdktf.IResolvable) {
    this._asContainerImage = value;
  }
  public resetAsContainerImage() {
    this._asContainerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asContainerImageInput() {
    return this._asContainerImage;
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

export class DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpecToolConfigsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpecToolConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpecToolConfigsOutputReference {
    return new DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpecToolConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpec {
  /**
  * Specifies the directory path in the container where the tools-related files are to be copied. This field is typically used with an emptyDir volume to ensure a temporary, empty directory is provided at pod creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#mount_point DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#mount_point}
  */
  readonly mountPoint: string;
  /**
  * Specifies a list of settings of init containers that prepare tools for dynamic reload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#tool_configs DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#tool_configs}
  */
  readonly toolConfigs?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpecToolConfigs[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpecToTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_point: cdktf.stringToTerraform(struct!.mountPoint),
    tool_configs: cdktf.listMapper(dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpecToolConfigsToTerraform, false)(struct!.toolConfigs),
  }
}


export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpecToHclTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_point: {
      value: cdktf.stringToHclTerraform(struct!.mountPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tool_configs: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpecToolConfigsToHclTerraform, false)(struct!.toolConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpecToolConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoint = this._mountPoint;
    }
    if (this._toolConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolConfigs = this._toolConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPoint = undefined;
      this._toolConfigs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPoint = value.mountPoint;
      this._toolConfigs.internalValue = value.toolConfigs;
    }
  }

  // mount_point - computed: false, optional: false, required: true
  private _mountPoint?: string; 
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
  public set mountPoint(value: string) {
    this._mountPoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointInput() {
    return this._mountPoint;
  }

  // tool_configs - computed: false, optional: true, required: false
  private _toolConfigs = new DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpecToolConfigsList(this, "tool_configs", false);
  public get toolConfigs() {
    return this._toolConfigs;
  }
  public putToolConfigs(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpecToolConfigs[] | cdktf.IResolvable) {
    this._toolConfigs.internalValue = value;
  }
  public resetToolConfigs() {
    this._toolConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolConfigsInput() {
    return this._toolConfigs.internalValue;
  }
}
export interface DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpec {
  /**
  * Specifies the top-level key in the 'configurationSchema.cue' that organizes the validation rules for parameters. This key must exist within the CUE script defined in 'configurationSchema.cue'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#cfg_schema_top_level_name DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#cfg_schema_top_level_name}
  */
  readonly cfgSchemaTopLevelName?: string;
  /**
  * Defines a list of parameters including their names, default values, descriptions, types, and constraints (permissible values or the range of valid values).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#configuration_schema DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#configuration_schema}
  */
  readonly configurationSchema?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecConfigurationSchema;
  /**
  * Specifies a list of actions to execute specified commands based on Pod labels. It utilizes the K8s Downward API to mount label information as a volume into the pod. The 'config-manager' sidecar container watches for changes in the role label and dynamically invoke registered commands (usually execute some SQL statements) when a change is detected. It is designed for scenarios where: - Replicas with different roles have different configurations, such as Redis primary & secondary replicas. - After a role switch (e.g., from secondary to primary), some changes in configuration are needed to reflect the new role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#downward_api_options DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#downward_api_options}
  */
  readonly downwardApiOptions?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptions[] | cdktf.IResolvable;
  /**
  * Indicates whether to consolidate dynamic reload and restart actions into a single restart. - If true, updates requiring both actions will result in only a restart, merging the actions. - If false, updates will trigger both actions executed sequentially: first dynamic reload, then restart. This flag allows for more efficient handling of configuration changes by potentially eliminating an unnecessary reload step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#dynamic_action_can_be_merged DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#dynamic_action_can_be_merged}
  */
  readonly dynamicActionCanBeMerged?: boolean | cdktf.IResolvable;
  /**
  * List dynamic parameters. Modifications to these parameters trigger a configuration reload without requiring a process restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#dynamic_parameters DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#dynamic_parameters}
  */
  readonly dynamicParameters?: string[];
  /**
  * Specifies the format of the configuration file and any associated parameters that are specific to the chosen format. Supported formats include 'ini', 'xml', 'yaml', 'json', 'hcl', 'dotenv', 'properties', and 'toml'. Each format may have its own set of parameters that can be configured. For instance, when using the 'ini' format, you can specify the section name. Example: ``` formatterConfig: format: ini iniConfig: sectionName: mysqld ```
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#formatter_config DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#formatter_config}
  */
  readonly formatterConfig: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecFormatterConfig;
  /**
  * Lists the parameters that cannot be modified once set. Attempting to change any of these parameters will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#immutable_parameters DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#immutable_parameters}
  */
  readonly immutableParameters?: string[];
  /**
  * Specifies the dynamic reload action supported by the engine. When set, the controller executes the method defined here to execute hot parameter updates. Dynamic reloading is triggered only if both of the following conditions are met: 1. The modified parameters are listed in the 'dynamicParameters' field. If 'reloadStaticParamsBeforeRestart' is set to true, modifications to 'staticParameters' can also trigger a reload. 2. 'reloadOptions' is set. If 'reloadOptions' is not set or the modified parameters are not listed in 'dynamicParameters', dynamic reloading will not be triggered. Example: ```yaml reloadOptions: tplScriptTrigger: namespace: kb-system scriptConfigMapRef: mysql-reload-script sync: true ```
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#reload_options DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#reload_options}
  */
  readonly reloadOptions?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptions;
  /**
  * Configures whether the dynamic reload specified in 'reloadOptions' applies only to dynamic parameters or to all parameters (including static parameters). - false (default): Only modifications to the dynamic parameters listed in 'dynamicParameters' will trigger a dynamic reload. - true: Modifications to both dynamic parameters listed in 'dynamicParameters' and static parameters listed in 'staticParameters' will trigger a dynamic reload. The 'true' option is for certain engines that require static parameters to be set via SQL statements before they can take effect on restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#reload_static_params_before_restart DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#reload_static_params_before_restart}
  */
  readonly reloadStaticParamsBeforeRestart?: boolean | cdktf.IResolvable;
  /**
  * A list of ScriptConfig Object. Each ScriptConfig object specifies a ConfigMap that contains script files that should be mounted inside the pod. The scripts are mounted as volumes and can be referenced and executed by the dynamic reload and DownwardAction to perform specific tasks or configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#script_configs DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#script_configs}
  */
  readonly scriptConfigs?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecScriptConfigs[] | cdktf.IResolvable;
  /**
  * Used to match labels on the pod to determine whether a dynamic reload should be performed. In some scenarios, only specific pods (e.g., primary replicas) need to undergo a dynamic reload. The 'selector' allows you to specify label selectors to target the desired pods for the reload process. If the 'selector' is not specified or is nil, all pods managed by the workload will be considered for the dynamic reload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#selector DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelector;
  /**
  * List static parameters. Modifications to any of these parameters require a restart of the process to take effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#static_parameters DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#static_parameters}
  */
  readonly staticParameters?: string[];
  /**
  * Specifies the tools container image used by ShellTrigger for dynamic reload. If the dynamic reload action is triggered by a ShellTrigger, this field is required. This image must contain all necessary tools for executing the ShellTrigger scripts. Usually the specified image is referenced by the init container, which is then responsible for copy the tools from the image to a bin volume. This ensures that the tools are available to the 'config-manager' sidecar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#tools_image_spec DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest#tools_image_spec}
  */
  readonly toolsImageSpec?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpec;
}

export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cfg_schema_top_level_name: cdktf.stringToTerraform(struct!.cfgSchemaTopLevelName),
    configuration_schema: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecConfigurationSchemaToTerraform(struct!.configurationSchema),
    downward_api_options: cdktf.listMapper(dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsToTerraform, false)(struct!.downwardApiOptions),
    dynamic_action_can_be_merged: cdktf.booleanToTerraform(struct!.dynamicActionCanBeMerged),
    dynamic_parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dynamicParameters),
    formatter_config: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecFormatterConfigToTerraform(struct!.formatterConfig),
    immutable_parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.immutableParameters),
    reload_options: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsToTerraform(struct!.reloadOptions),
    reload_static_params_before_restart: cdktf.booleanToTerraform(struct!.reloadStaticParamsBeforeRestart),
    script_configs: cdktf.listMapper(dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecScriptConfigsToTerraform, false)(struct!.scriptConfigs),
    selector: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelectorToTerraform(struct!.selector),
    static_parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.staticParameters),
    tools_image_spec: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpecToTerraform(struct!.toolsImageSpec),
  }
}


export function dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cfg_schema_top_level_name: {
      value: cdktf.stringToHclTerraform(struct!.cfgSchemaTopLevelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration_schema: {
      value: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecConfigurationSchemaToHclTerraform(struct!.configurationSchema),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecConfigurationSchema",
    },
    downward_api_options: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsToHclTerraform, false)(struct!.downwardApiOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsList",
    },
    dynamic_action_can_be_merged: {
      value: cdktf.booleanToHclTerraform(struct!.dynamicActionCanBeMerged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dynamic_parameters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dynamicParameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    formatter_config: {
      value: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecFormatterConfigToHclTerraform(struct!.formatterConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecFormatterConfig",
    },
    immutable_parameters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.immutableParameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    reload_options: {
      value: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsToHclTerraform(struct!.reloadOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptions",
    },
    reload_static_params_before_restart: {
      value: cdktf.booleanToHclTerraform(struct!.reloadStaticParamsBeforeRestart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    script_configs: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecScriptConfigsToHclTerraform, false)(struct!.scriptConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecScriptConfigsList",
    },
    selector: {
      value: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelector",
    },
    static_parameters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.staticParameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tools_image_spec: {
      value: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpecToHclTerraform(struct!.toolsImageSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cfgSchemaTopLevelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfgSchemaTopLevelName = this._cfgSchemaTopLevelName;
    }
    if (this._configurationSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationSchema = this._configurationSchema?.internalValue;
    }
    if (this._downwardApiOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.downwardApiOptions = this._downwardApiOptions?.internalValue;
    }
    if (this._dynamicActionCanBeMerged !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicActionCanBeMerged = this._dynamicActionCanBeMerged;
    }
    if (this._dynamicParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicParameters = this._dynamicParameters;
    }
    if (this._formatterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatterConfig = this._formatterConfig?.internalValue;
    }
    if (this._immutableParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.immutableParameters = this._immutableParameters;
    }
    if (this._reloadOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reloadOptions = this._reloadOptions?.internalValue;
    }
    if (this._reloadStaticParamsBeforeRestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.reloadStaticParamsBeforeRestart = this._reloadStaticParamsBeforeRestart;
    }
    if (this._scriptConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptConfigs = this._scriptConfigs?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._staticParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticParameters = this._staticParameters;
    }
    if (this._toolsImageSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolsImageSpec = this._toolsImageSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cfgSchemaTopLevelName = undefined;
      this._configurationSchema.internalValue = undefined;
      this._downwardApiOptions.internalValue = undefined;
      this._dynamicActionCanBeMerged = undefined;
      this._dynamicParameters = undefined;
      this._formatterConfig.internalValue = undefined;
      this._immutableParameters = undefined;
      this._reloadOptions.internalValue = undefined;
      this._reloadStaticParamsBeforeRestart = undefined;
      this._scriptConfigs.internalValue = undefined;
      this._selector.internalValue = undefined;
      this._staticParameters = undefined;
      this._toolsImageSpec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cfgSchemaTopLevelName = value.cfgSchemaTopLevelName;
      this._configurationSchema.internalValue = value.configurationSchema;
      this._downwardApiOptions.internalValue = value.downwardApiOptions;
      this._dynamicActionCanBeMerged = value.dynamicActionCanBeMerged;
      this._dynamicParameters = value.dynamicParameters;
      this._formatterConfig.internalValue = value.formatterConfig;
      this._immutableParameters = value.immutableParameters;
      this._reloadOptions.internalValue = value.reloadOptions;
      this._reloadStaticParamsBeforeRestart = value.reloadStaticParamsBeforeRestart;
      this._scriptConfigs.internalValue = value.scriptConfigs;
      this._selector.internalValue = value.selector;
      this._staticParameters = value.staticParameters;
      this._toolsImageSpec.internalValue = value.toolsImageSpec;
    }
  }

  // cfg_schema_top_level_name - computed: false, optional: true, required: false
  private _cfgSchemaTopLevelName?: string; 
  public get cfgSchemaTopLevelName() {
    return this.getStringAttribute('cfg_schema_top_level_name');
  }
  public set cfgSchemaTopLevelName(value: string) {
    this._cfgSchemaTopLevelName = value;
  }
  public resetCfgSchemaTopLevelName() {
    this._cfgSchemaTopLevelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfgSchemaTopLevelNameInput() {
    return this._cfgSchemaTopLevelName;
  }

  // configuration_schema - computed: false, optional: true, required: false
  private _configurationSchema = new DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecConfigurationSchemaOutputReference(this, "configuration_schema");
  public get configurationSchema() {
    return this._configurationSchema;
  }
  public putConfigurationSchema(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecConfigurationSchema) {
    this._configurationSchema.internalValue = value;
  }
  public resetConfigurationSchema() {
    this._configurationSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationSchemaInput() {
    return this._configurationSchema.internalValue;
  }

  // downward_api_options - computed: false, optional: true, required: false
  private _downwardApiOptions = new DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptionsList(this, "downward_api_options", false);
  public get downwardApiOptions() {
    return this._downwardApiOptions;
  }
  public putDownwardApiOptions(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecDownwardApiOptions[] | cdktf.IResolvable) {
    this._downwardApiOptions.internalValue = value;
  }
  public resetDownwardApiOptions() {
    this._downwardApiOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downwardApiOptionsInput() {
    return this._downwardApiOptions.internalValue;
  }

  // dynamic_action_can_be_merged - computed: false, optional: true, required: false
  private _dynamicActionCanBeMerged?: boolean | cdktf.IResolvable; 
  public get dynamicActionCanBeMerged() {
    return this.getBooleanAttribute('dynamic_action_can_be_merged');
  }
  public set dynamicActionCanBeMerged(value: boolean | cdktf.IResolvable) {
    this._dynamicActionCanBeMerged = value;
  }
  public resetDynamicActionCanBeMerged() {
    this._dynamicActionCanBeMerged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicActionCanBeMergedInput() {
    return this._dynamicActionCanBeMerged;
  }

  // dynamic_parameters - computed: false, optional: true, required: false
  private _dynamicParameters?: string[]; 
  public get dynamicParameters() {
    return this.getListAttribute('dynamic_parameters');
  }
  public set dynamicParameters(value: string[]) {
    this._dynamicParameters = value;
  }
  public resetDynamicParameters() {
    this._dynamicParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicParametersInput() {
    return this._dynamicParameters;
  }

  // formatter_config - computed: false, optional: false, required: true
  private _formatterConfig = new DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecFormatterConfigOutputReference(this, "formatter_config");
  public get formatterConfig() {
    return this._formatterConfig;
  }
  public putFormatterConfig(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecFormatterConfig) {
    this._formatterConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatterConfigInput() {
    return this._formatterConfig.internalValue;
  }

  // immutable_parameters - computed: false, optional: true, required: false
  private _immutableParameters?: string[]; 
  public get immutableParameters() {
    return this.getListAttribute('immutable_parameters');
  }
  public set immutableParameters(value: string[]) {
    this._immutableParameters = value;
  }
  public resetImmutableParameters() {
    this._immutableParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immutableParametersInput() {
    return this._immutableParameters;
  }

  // reload_options - computed: false, optional: true, required: false
  private _reloadOptions = new DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptionsOutputReference(this, "reload_options");
  public get reloadOptions() {
    return this._reloadOptions;
  }
  public putReloadOptions(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecReloadOptions) {
    this._reloadOptions.internalValue = value;
  }
  public resetReloadOptions() {
    this._reloadOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reloadOptionsInput() {
    return this._reloadOptions.internalValue;
  }

  // reload_static_params_before_restart - computed: false, optional: true, required: false
  private _reloadStaticParamsBeforeRestart?: boolean | cdktf.IResolvable; 
  public get reloadStaticParamsBeforeRestart() {
    return this.getBooleanAttribute('reload_static_params_before_restart');
  }
  public set reloadStaticParamsBeforeRestart(value: boolean | cdktf.IResolvable) {
    this._reloadStaticParamsBeforeRestart = value;
  }
  public resetReloadStaticParamsBeforeRestart() {
    this._reloadStaticParamsBeforeRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reloadStaticParamsBeforeRestartInput() {
    return this._reloadStaticParamsBeforeRestart;
  }

  // script_configs - computed: false, optional: true, required: false
  private _scriptConfigs = new DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecScriptConfigsList(this, "script_configs", false);
  public get scriptConfigs() {
    return this._scriptConfigs;
  }
  public putScriptConfigs(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecScriptConfigs[] | cdktf.IResolvable) {
    this._scriptConfigs.internalValue = value;
  }
  public resetScriptConfigs() {
    this._scriptConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptConfigsInput() {
    return this._scriptConfigs.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // static_parameters - computed: false, optional: true, required: false
  private _staticParameters?: string[]; 
  public get staticParameters() {
    return this.getListAttribute('static_parameters');
  }
  public set staticParameters(value: string[]) {
    this._staticParameters = value;
  }
  public resetStaticParameters() {
    this._staticParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticParametersInput() {
    return this._staticParameters;
  }

  // tools_image_spec - computed: false, optional: true, required: false
  private _toolsImageSpec = new DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpecOutputReference(this, "tools_image_spec");
  public get toolsImageSpec() {
    return this._toolsImageSpec;
  }
  public putToolsImageSpec(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToolsImageSpec) {
    this._toolsImageSpec.internalValue = value;
  }
  public resetToolsImageSpec() {
    this._toolsImageSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsImageSpecInput() {
    return this._toolsImageSpec.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest k8s_apps_kubeblocks_io_config_constraint_v1alpha1_manifest}
*/
export class DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apps_kubeblocks_io_config_constraint_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apps_kubeblocks_io_config_constraint_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_config_constraint_v1alpha1_manifest k8s_apps_kubeblocks_io_config_constraint_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apps_kubeblocks_io_config_constraint_v1alpha1_manifest',
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
  private _metadata = new DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsKubeblocksIoConfigConstraintV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
