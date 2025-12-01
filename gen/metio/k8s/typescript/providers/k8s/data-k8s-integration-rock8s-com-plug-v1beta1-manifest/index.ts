// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#metadata DataK8SIntegrationRock8SComPlugV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SIntegrationRock8SComPlugV1Beta1ManifestMetadata;
  /**
  * PlugSpec defines the desired state of Plug
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#spec DataK8SIntegrationRock8SComPlugV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpec;
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#annotations DataK8SIntegrationRock8SComPlugV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#labels DataK8SIntegrationRock8SComPlugV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#namespace DataK8SIntegrationRock8SComPlugV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestMetadataToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#key DataK8SIntegrationRock8SComPlugV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#optional DataK8SIntegrationRock8SComPlugV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromConfigMapKeyRefToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#api_version DataK8SIntegrationRock8SComPlugV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#field_path DataK8SIntegrationRock8SComPlugV1Beta1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromFieldRefToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromFieldRefToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#container_name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#divisor DataK8SIntegrationRock8SComPlugV1Beta1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#resource DataK8SIntegrationRock8SComPlugV1Beta1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromResourceFieldRefToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromResourceFieldRefToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#key DataK8SIntegrationRock8SComPlugV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#optional DataK8SIntegrationRock8SComPlugV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromSecretKeyRefToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromSecretKeyRefToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#config_map_key_ref DataK8SIntegrationRock8SComPlugV1Beta1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#field_ref DataK8SIntegrationRock8SComPlugV1Beta1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#resource_field_ref DataK8SIntegrationRock8SComPlugV1Beta1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#secret_key_ref DataK8SIntegrationRock8SComPlugV1Beta1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromSecretKeyRef;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFrom | cdktf.IResolvable | undefined) {
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
  private _configMapKeyRef = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromConfigMapKeyRef) {
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
  private _fieldRef = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromFieldRef) {
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
  private _resourceFieldRef = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromResourceFieldRef) {
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
  private _secretKeyRef = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromSecretKeyRef) {
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
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#value DataK8SIntegrationRock8SComPlugV1Beta1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#value_from DataK8SIntegrationRock8SComPlugV1Beta1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFrom;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnv | cdktf.IResolvable): any {
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
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnv | cdktf.IResolvable | undefined) {
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
  private _valueFrom = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvValueFrom) {
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

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvOutputReference {
    return new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromConfigMapRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#optional DataK8SIntegrationRock8SComPlugV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromConfigMapRefToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromConfigMapRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromConfigMapRefToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromConfigMapRef | cdktf.IResolvable): any {
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

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromConfigMapRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromConfigMapRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromConfigMapRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#optional DataK8SIntegrationRock8SComPlugV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromSecretRefToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromSecretRefToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromSecretRef | cdktf.IResolvable): any {
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

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFrom {
  /**
  * The ConfigMap to select from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#config_map_ref DataK8SIntegrationRock8SComPlugV1Beta1Manifest#config_map_ref}
  */
  readonly configMapRef?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromConfigMapRef;
  /**
  * An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#prefix DataK8SIntegrationRock8SComPlugV1Beta1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * The Secret to select from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#secret_ref DataK8SIntegrationRock8SComPlugV1Beta1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromSecretRef;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_ref: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromConfigMapRefToTerraform(struct!.configMapRef),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    secret_ref: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_ref: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromConfigMapRefToHclTerraform(struct!.configMapRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromConfigMapRef",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapRef = this._configMapRef?.internalValue;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapRef.internalValue = undefined;
      this._prefix = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapRef.internalValue = value.configMapRef;
      this._prefix = value.prefix;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // config_map_ref - computed: false, optional: true, required: false
  private _configMapRef = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromConfigMapRefOutputReference(this, "config_map_ref");
  public get configMapRef() {
    return this._configMapRef;
  }
  public putConfigMapRef(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromConfigMapRef) {
    this._configMapRef.internalValue = value;
  }
  public resetConfigMapRef() {
    this._configMapRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapRefInput() {
    return this._configMapRef.internalValue;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromOutputReference {
    return new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#command DataK8SIntegrationRock8SComPlugV1Beta1Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartExecToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartExecToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartExec | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
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
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGetHttpHeaders {
  /**
  * The header field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * The header field value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#value DataK8SIntegrationRock8SComPlugV1Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGetHttpHeadersToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGetHttpHeadersToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGetHttpHeaders | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
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

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGetHttpHeadersOutputReference {
    return new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set 'Host' in httpHeaders instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#host DataK8SIntegrationRock8SComPlugV1Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Custom headers to set in the request. HTTP allows repeated headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#http_headers DataK8SIntegrationRock8SComPlugV1Beta1Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Path to access on the HTTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#path DataK8SIntegrationRock8SComPlugV1Beta1Manifest#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#port DataK8SIntegrationRock8SComPlugV1Beta1Manifest#port}
  */
  readonly port: string;
  /**
  * Scheme to use for connecting to the host. Defaults to HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#scheme DataK8SIntegrationRock8SComPlugV1Beta1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGetToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGetToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_headers: {
      value: cdktf.listMapperHcl(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGetHttpHeadersList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._httpHeaders.internalValue = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._httpHeaders.internalValue = value.httpHeaders;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGetHttpHeaders[] | cdktf.IResolvable) {
    this._httpHeaders.internalValue = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartTcpSocket {
  /**
  * Optional: Host name to connect to, defaults to the pod IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#host DataK8SIntegrationRock8SComPlugV1Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#port DataK8SIntegrationRock8SComPlugV1Beta1Manifest#port}
  */
  readonly port: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartTcpSocketToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartTcpSocketToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartTcpSocket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartTcpSocket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStart {
  /**
  * Exec specifies the action to take.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#exec DataK8SIntegrationRock8SComPlugV1Beta1Manifest#exec}
  */
  readonly exec?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartExec;
  /**
  * HTTPGet specifies the http request to perform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#http_get DataK8SIntegrationRock8SComPlugV1Beta1Manifest#http_get}
  */
  readonly httpGet?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGet;
  /**
  * Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept for the backward compatibility. There are no validation of this field and lifecycle hooks will fail in runtime when tcp handler is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#tcp_socket DataK8SIntegrationRock8SComPlugV1Beta1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartTcpSocket;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartExecToTerraform(struct!.exec),
    http_get: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGetToTerraform(struct!.httpGet),
    tcp_socket: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartTcpSocketToTerraform(struct!.tcpSocket),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartExec",
    },
    http_get: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGet",
    },
    tcp_socket: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartTcpSocket",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._tcpSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._tcpSocket.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
      this._httpGet.internalValue = value.httpGet;
      this._tcpSocket.internalValue = value.tcpSocket;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartTcpSocket) {
    this._tcpSocket.internalValue = value;
  }
  public resetTcpSocket() {
    this._tcpSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket.internalValue;
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#command DataK8SIntegrationRock8SComPlugV1Beta1Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopExecToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopExecToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopExec | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
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
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGetHttpHeaders {
  /**
  * The header field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * The header field value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#value DataK8SIntegrationRock8SComPlugV1Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGetHttpHeadersToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGetHttpHeadersToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGetHttpHeaders | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
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

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGetHttpHeadersOutputReference {
    return new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set 'Host' in httpHeaders instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#host DataK8SIntegrationRock8SComPlugV1Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Custom headers to set in the request. HTTP allows repeated headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#http_headers DataK8SIntegrationRock8SComPlugV1Beta1Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Path to access on the HTTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#path DataK8SIntegrationRock8SComPlugV1Beta1Manifest#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#port DataK8SIntegrationRock8SComPlugV1Beta1Manifest#port}
  */
  readonly port: string;
  /**
  * Scheme to use for connecting to the host. Defaults to HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#scheme DataK8SIntegrationRock8SComPlugV1Beta1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGetToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGetToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_headers: {
      value: cdktf.listMapperHcl(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGetHttpHeadersList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._httpHeaders.internalValue = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._httpHeaders.internalValue = value.httpHeaders;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGetHttpHeaders[] | cdktf.IResolvable) {
    this._httpHeaders.internalValue = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopTcpSocket {
  /**
  * Optional: Host name to connect to, defaults to the pod IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#host DataK8SIntegrationRock8SComPlugV1Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#port DataK8SIntegrationRock8SComPlugV1Beta1Manifest#port}
  */
  readonly port: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopTcpSocketToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopTcpSocketToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopTcpSocket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopTcpSocket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStop {
  /**
  * Exec specifies the action to take.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#exec DataK8SIntegrationRock8SComPlugV1Beta1Manifest#exec}
  */
  readonly exec?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopExec;
  /**
  * HTTPGet specifies the http request to perform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#http_get DataK8SIntegrationRock8SComPlugV1Beta1Manifest#http_get}
  */
  readonly httpGet?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGet;
  /**
  * Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept for the backward compatibility. There are no validation of this field and lifecycle hooks will fail in runtime when tcp handler is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#tcp_socket DataK8SIntegrationRock8SComPlugV1Beta1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopTcpSocket;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopExecToTerraform(struct!.exec),
    http_get: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGetToTerraform(struct!.httpGet),
    tcp_socket: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopTcpSocketToTerraform(struct!.tcpSocket),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopExec",
    },
    http_get: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGet",
    },
    tcp_socket: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopTcpSocket",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._tcpSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._tcpSocket.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
      this._httpGet.internalValue = value.httpGet;
      this._tcpSocket.internalValue = value.tcpSocket;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopTcpSocket) {
    this._tcpSocket.internalValue = value;
  }
  public resetTcpSocket() {
    this._tcpSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket.internalValue;
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecycle {
  /**
  * PostStart is called immediately after a container is created. If the handler fails, the container is terminated and restarted according to its restart policy. Other management of the container blocks until the hook completes. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#post_start DataK8SIntegrationRock8SComPlugV1Beta1Manifest#post_start}
  */
  readonly postStart?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStart;
  /**
  * PreStop is called immediately before a container is terminated due to an API request or management event such as liveness/startup probe failure, preemption, resource contention, etc. The handler is not called if the container crashes or exits. The Pod's termination grace period countdown begins before the PreStop hook is executed. Regardless of the outcome of the handler, the container will eventually terminate within the Pod's termination grace period (unless delayed by finalizers). Other management of the container blocks until the hook completes or until the termination grace period is reached. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#pre_stop DataK8SIntegrationRock8SComPlugV1Beta1Manifest#pre_stop}
  */
  readonly preStop?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStop;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecycleToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecycle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    post_start: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartToTerraform(struct!.postStart),
    pre_stop: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopToTerraform(struct!.preStop),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecycleToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecycle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    post_start: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartToHclTerraform(struct!.postStart),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStart",
    },
    pre_stop: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopToHclTerraform(struct!.preStop),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStop",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecycleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecycle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postStart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postStart = this._postStart?.internalValue;
    }
    if (this._preStop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preStop = this._preStop?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecycle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._postStart.internalValue = undefined;
      this._preStop.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._postStart.internalValue = value.postStart;
      this._preStop.internalValue = value.preStop;
    }
  }

  // post_start - computed: false, optional: true, required: false
  private _postStart = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStartOutputReference(this, "post_start");
  public get postStart() {
    return this._postStart;
  }
  public putPostStart(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePostStart) {
    this._postStart.internalValue = value;
  }
  public resetPostStart() {
    this._postStart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStartInput() {
    return this._postStart.internalValue;
  }

  // pre_stop - computed: false, optional: true, required: false
  private _preStop = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStopOutputReference(this, "pre_stop");
  public get preStop() {
    return this._preStop;
  }
  public putPreStop(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecyclePreStop) {
    this._preStop.internalValue = value;
  }
  public resetPreStop() {
    this._preStop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preStopInput() {
    return this._preStop.internalValue;
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#command DataK8SIntegrationRock8SComPlugV1Beta1Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeExecToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeExecToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeExec | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
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
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeGrpc {
  /**
  * Port number of the gRPC service. Number must be in the range 1 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#port DataK8SIntegrationRock8SComPlugV1Beta1Manifest#port}
  */
  readonly port: number;
  /**
  * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#service DataK8SIntegrationRock8SComPlugV1Beta1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeGrpcToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeGrpcToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeGrpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeGrpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._service = value.service;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGetHttpHeaders {
  /**
  * The header field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * The header field value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#value DataK8SIntegrationRock8SComPlugV1Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGetHttpHeadersToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGetHttpHeadersToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
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

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGetHttpHeadersOutputReference {
    return new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set 'Host' in httpHeaders instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#host DataK8SIntegrationRock8SComPlugV1Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Custom headers to set in the request. HTTP allows repeated headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#http_headers DataK8SIntegrationRock8SComPlugV1Beta1Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Path to access on the HTTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#path DataK8SIntegrationRock8SComPlugV1Beta1Manifest#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#port DataK8SIntegrationRock8SComPlugV1Beta1Manifest#port}
  */
  readonly port: string;
  /**
  * Scheme to use for connecting to the host. Defaults to HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#scheme DataK8SIntegrationRock8SComPlugV1Beta1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGetToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGetToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_headers: {
      value: cdktf.listMapperHcl(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGetHttpHeadersList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._httpHeaders.internalValue = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._httpHeaders.internalValue = value.httpHeaders;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
    this._httpHeaders.internalValue = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeTcpSocket {
  /**
  * Optional: Host name to connect to, defaults to the pod IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#host DataK8SIntegrationRock8SComPlugV1Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#port DataK8SIntegrationRock8SComPlugV1Beta1Manifest#port}
  */
  readonly port: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeTcpSocketToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeTcpSocketToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeTcpSocket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeTcpSocket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbe {
  /**
  * Exec specifies the action to take.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#exec DataK8SIntegrationRock8SComPlugV1Beta1Manifest#exec}
  */
  readonly exec?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeExec;
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#failure_threshold DataK8SIntegrationRock8SComPlugV1Beta1Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * GRPC specifies an action involving a GRPC port. This is a beta field and requires enabling GRPCContainerProbe feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#grpc DataK8SIntegrationRock8SComPlugV1Beta1Manifest#grpc}
  */
  readonly grpc?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeGrpc;
  /**
  * HTTPGet specifies the http request to perform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#http_get DataK8SIntegrationRock8SComPlugV1Beta1Manifest#http_get}
  */
  readonly httpGet?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGet;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#initial_delay_seconds DataK8SIntegrationRock8SComPlugV1Beta1Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#period_seconds DataK8SIntegrationRock8SComPlugV1Beta1Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#success_threshold DataK8SIntegrationRock8SComPlugV1Beta1Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * TCPSocket specifies an action involving a TCP port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#tcp_socket DataK8SIntegrationRock8SComPlugV1Beta1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeTcpSocket;
  /**
  * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#termination_grace_period_seconds DataK8SIntegrationRock8SComPlugV1Beta1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#timeout_seconds DataK8SIntegrationRock8SComPlugV1Beta1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    grpc: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeGrpcToTerraform(struct!.grpc),
    http_get: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeTcpSocketToTerraform(struct!.tcpSocket),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeGrpc",
    },
    http_get: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGet",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_socket: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeTcpSocket",
    },
    termination_grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.terminationGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._tcpSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket?.internalValue;
    }
    if (this._terminationGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationGracePeriodSeconds = this._terminationGracePeriodSeconds;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
      this._failureThreshold = undefined;
      this._grpc.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._tcpSocket.internalValue = undefined;
      this._terminationGracePeriodSeconds = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
      this._failureThreshold = value.failureThreshold;
      this._grpc.internalValue = value.grpc;
      this._httpGet.internalValue = value.httpGet;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._tcpSocket.internalValue = value.tcpSocket;
      this._terminationGracePeriodSeconds = value.terminationGracePeriodSeconds;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeGrpc) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeTcpSocket) {
    this._tcpSocket.internalValue = value;
  }
  public resetTcpSocket() {
    this._tcpSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket.internalValue;
  }

  // termination_grace_period_seconds - computed: false, optional: true, required: false
  private _terminationGracePeriodSeconds?: number; 
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }
  public set terminationGracePeriodSeconds(value: number) {
    this._terminationGracePeriodSeconds = value;
  }
  public resetTerminationGracePeriodSeconds() {
    this._terminationGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationGracePeriodSecondsInput() {
    return this._terminationGracePeriodSeconds;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersPorts {
  /**
  * Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#container_port DataK8SIntegrationRock8SComPlugV1Beta1Manifest#container_port}
  */
  readonly containerPort: number;
  /**
  * What host IP to bind the external port to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#host_ip DataK8SIntegrationRock8SComPlugV1Beta1Manifest#host_ip}
  */
  readonly hostIp?: string;
  /**
  * Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#host_port DataK8SIntegrationRock8SComPlugV1Beta1Manifest#host_port}
  */
  readonly hostPort?: number;
  /**
  * If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Protocol for port. Must be UDP, TCP, or SCTP. Defaults to 'TCP'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#protocol DataK8SIntegrationRock8SComPlugV1Beta1Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersPortsToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    host_ip: cdktf.stringToTerraform(struct!.hostIp),
    host_port: cdktf.numberToTerraform(struct!.hostPort),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersPortsToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_port: {
      value: cdktf.numberToHclTerraform(struct!.containerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_ip: {
      value: cdktf.stringToHclTerraform(struct!.hostIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_port: {
      value: cdktf.numberToHclTerraform(struct!.hostPort),
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

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort;
    }
    if (this._hostIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIp = this._hostIp;
    }
    if (this._hostPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPort = this._hostPort;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPort = undefined;
      this._hostIp = undefined;
      this._hostPort = undefined;
      this._name = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPort = value.containerPort;
      this._hostIp = value.hostIp;
      this._hostPort = value.hostPort;
      this._name = value.name;
      this._protocol = value.protocol;
    }
  }

  // container_port - computed: false, optional: false, required: true
  private _containerPort?: number; 
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }
  public set containerPort(value: number) {
    this._containerPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort;
  }

  // host_ip - computed: false, optional: true, required: false
  private _hostIp?: string; 
  public get hostIp() {
    return this.getStringAttribute('host_ip');
  }
  public set hostIp(value: string) {
    this._hostIp = value;
  }
  public resetHostIp() {
    this._hostIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpInput() {
    return this._hostIp;
  }

  // host_port - computed: false, optional: true, required: false
  private _hostPort?: number; 
  public get hostPort() {
    return this.getNumberAttribute('host_port');
  }
  public set hostPort(value: number) {
    this._hostPort = value;
  }
  public resetHostPort() {
    this._hostPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPortInput() {
    return this._hostPort;
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

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersPortsOutputReference {
    return new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#command DataK8SIntegrationRock8SComPlugV1Beta1Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeExecToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeExecToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeExec | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
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
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeGrpc {
  /**
  * Port number of the gRPC service. Number must be in the range 1 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#port DataK8SIntegrationRock8SComPlugV1Beta1Manifest#port}
  */
  readonly port: number;
  /**
  * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#service DataK8SIntegrationRock8SComPlugV1Beta1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeGrpcToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeGrpcToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeGrpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeGrpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._service = value.service;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGetHttpHeaders {
  /**
  * The header field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * The header field value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#value DataK8SIntegrationRock8SComPlugV1Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGetHttpHeadersToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGetHttpHeadersToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
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

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGetHttpHeadersOutputReference {
    return new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set 'Host' in httpHeaders instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#host DataK8SIntegrationRock8SComPlugV1Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Custom headers to set in the request. HTTP allows repeated headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#http_headers DataK8SIntegrationRock8SComPlugV1Beta1Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Path to access on the HTTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#path DataK8SIntegrationRock8SComPlugV1Beta1Manifest#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#port DataK8SIntegrationRock8SComPlugV1Beta1Manifest#port}
  */
  readonly port: string;
  /**
  * Scheme to use for connecting to the host. Defaults to HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#scheme DataK8SIntegrationRock8SComPlugV1Beta1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGetToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGetToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_headers: {
      value: cdktf.listMapperHcl(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGetHttpHeadersList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._httpHeaders.internalValue = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._httpHeaders.internalValue = value.httpHeaders;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
    this._httpHeaders.internalValue = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeTcpSocket {
  /**
  * Optional: Host name to connect to, defaults to the pod IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#host DataK8SIntegrationRock8SComPlugV1Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#port DataK8SIntegrationRock8SComPlugV1Beta1Manifest#port}
  */
  readonly port: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeTcpSocketToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeTcpSocketToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeTcpSocket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeTcpSocket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbe {
  /**
  * Exec specifies the action to take.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#exec DataK8SIntegrationRock8SComPlugV1Beta1Manifest#exec}
  */
  readonly exec?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeExec;
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#failure_threshold DataK8SIntegrationRock8SComPlugV1Beta1Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * GRPC specifies an action involving a GRPC port. This is a beta field and requires enabling GRPCContainerProbe feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#grpc DataK8SIntegrationRock8SComPlugV1Beta1Manifest#grpc}
  */
  readonly grpc?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeGrpc;
  /**
  * HTTPGet specifies the http request to perform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#http_get DataK8SIntegrationRock8SComPlugV1Beta1Manifest#http_get}
  */
  readonly httpGet?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGet;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#initial_delay_seconds DataK8SIntegrationRock8SComPlugV1Beta1Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#period_seconds DataK8SIntegrationRock8SComPlugV1Beta1Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#success_threshold DataK8SIntegrationRock8SComPlugV1Beta1Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * TCPSocket specifies an action involving a TCP port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#tcp_socket DataK8SIntegrationRock8SComPlugV1Beta1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeTcpSocket;
  /**
  * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#termination_grace_period_seconds DataK8SIntegrationRock8SComPlugV1Beta1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#timeout_seconds DataK8SIntegrationRock8SComPlugV1Beta1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    grpc: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeGrpcToTerraform(struct!.grpc),
    http_get: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeTcpSocketToTerraform(struct!.tcpSocket),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeGrpc",
    },
    http_get: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGet",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_socket: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeTcpSocket",
    },
    termination_grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.terminationGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._tcpSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket?.internalValue;
    }
    if (this._terminationGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationGracePeriodSeconds = this._terminationGracePeriodSeconds;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
      this._failureThreshold = undefined;
      this._grpc.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._tcpSocket.internalValue = undefined;
      this._terminationGracePeriodSeconds = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
      this._failureThreshold = value.failureThreshold;
      this._grpc.internalValue = value.grpc;
      this._httpGet.internalValue = value.httpGet;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._tcpSocket.internalValue = value.tcpSocket;
      this._terminationGracePeriodSeconds = value.terminationGracePeriodSeconds;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeGrpc) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeTcpSocket) {
    this._tcpSocket.internalValue = value;
  }
  public resetTcpSocket() {
    this._tcpSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket.internalValue;
  }

  // termination_grace_period_seconds - computed: false, optional: true, required: false
  private _terminationGracePeriodSeconds?: number; 
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }
  public set terminationGracePeriodSeconds(value: number) {
    this._terminationGracePeriodSeconds = value;
  }
  public resetTerminationGracePeriodSeconds() {
    this._terminationGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationGracePeriodSecondsInput() {
    return this._terminationGracePeriodSeconds;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResourcesClaimsToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResourcesClaimsToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResourcesClaimsOutputReference {
    return new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#claims DataK8SIntegrationRock8SComPlugV1Beta1Manifest#claims}
  */
  readonly claims?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#limits DataK8SIntegrationRock8SComPlugV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#requests DataK8SIntegrationRock8SComPlugV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResourcesToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResourcesToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextCapabilities {
  /**
  * Added capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#add DataK8SIntegrationRock8SComPlugV1Beta1Manifest#add}
  */
  readonly add?: string[];
  /**
  * Removed capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#drop DataK8SIntegrationRock8SComPlugV1Beta1Manifest#drop}
  */
  readonly drop?: string[];
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextCapabilitiesToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.drop),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextCapabilitiesToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.add),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    drop: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.drop),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextCapabilities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextCapabilities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add = undefined;
      this._drop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add = value.add;
      this._drop = value.drop;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: string[]; 
  public get add() {
    return this.getListAttribute('add');
  }
  public set add(value: string[]) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: string[]; 
  public get drop() {
    return this.getListAttribute('drop');
  }
  public set drop(value: string[]) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextSeLinuxOptions {
  /**
  * Level is SELinux level label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#level DataK8SIntegrationRock8SComPlugV1Beta1Manifest#level}
  */
  readonly level?: string;
  /**
  * Role is a SELinux role label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#role DataK8SIntegrationRock8SComPlugV1Beta1Manifest#role}
  */
  readonly role?: string;
  /**
  * Type is a SELinux type label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#type DataK8SIntegrationRock8SComPlugV1Beta1Manifest#type}
  */
  readonly type?: string;
  /**
  * User is a SELinux user label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#user DataK8SIntegrationRock8SComPlugV1Beta1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._role = undefined;
      this._type = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._role = value.role;
      this._type = value.type;
      this._user = value.user;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextSeccompProfile {
  /**
  * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must only be set if type is 'Localhost'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#localhost_profile DataK8SIntegrationRock8SComPlugV1Beta1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * type indicates which kind of seccomp profile will be applied. Valid options are: Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#type DataK8SIntegrationRock8SComPlugV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextSeccompProfileToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextSeccompProfileToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
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

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
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
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextWindowsOptions {
  /**
  * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#gmsa_credential_spec DataK8SIntegrationRock8SComPlugV1Beta1Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * GMSACredentialSpecName is the name of the GMSA credential spec to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#gmsa_credential_spec_name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * HostProcess determines if a container should be run as a 'Host Process' container. This field is alpha-level and will only be honored by components that enable the WindowsHostProcessContainers feature flag. Setting this field without the feature flag will result in errors when validating the Pod. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers). In addition, if HostProcess is true then HostNetwork must also be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#host_process DataK8SIntegrationRock8SComPlugV1Beta1Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#run_as_user_name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextWindowsOptionsToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gmsa_credential_spec: cdktf.stringToTerraform(struct!.gmsaCredentialSpec),
    gmsa_credential_spec_name: cdktf.stringToTerraform(struct!.gmsaCredentialSpecName),
    host_process: cdktf.booleanToTerraform(struct!.hostProcess),
    run_as_user_name: cdktf.stringToTerraform(struct!.runAsUserName),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextWindowsOptionsToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gmsa_credential_spec: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gmsa_credential_spec_name: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpecName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_process: {
      value: cdktf.booleanToHclTerraform(struct!.hostProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user_name: {
      value: cdktf.stringToHclTerraform(struct!.runAsUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextWindowsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gmsaCredentialSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpec = this._gmsaCredentialSpec;
    }
    if (this._gmsaCredentialSpecName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpecName = this._gmsaCredentialSpecName;
    }
    if (this._hostProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostProcess = this._hostProcess;
    }
    if (this._runAsUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUserName = this._runAsUserName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = undefined;
      this._gmsaCredentialSpecName = undefined;
      this._hostProcess = undefined;
      this._runAsUserName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = value.gmsaCredentialSpec;
      this._gmsaCredentialSpecName = value.gmsaCredentialSpecName;
      this._hostProcess = value.hostProcess;
      this._runAsUserName = value.runAsUserName;
    }
  }

  // gmsa_credential_spec - computed: false, optional: true, required: false
  private _gmsaCredentialSpec?: string; 
  public get gmsaCredentialSpec() {
    return this.getStringAttribute('gmsa_credential_spec');
  }
  public set gmsaCredentialSpec(value: string) {
    this._gmsaCredentialSpec = value;
  }
  public resetGmsaCredentialSpec() {
    this._gmsaCredentialSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecInput() {
    return this._gmsaCredentialSpec;
  }

  // gmsa_credential_spec_name - computed: false, optional: true, required: false
  private _gmsaCredentialSpecName?: string; 
  public get gmsaCredentialSpecName() {
    return this.getStringAttribute('gmsa_credential_spec_name');
  }
  public set gmsaCredentialSpecName(value: string) {
    this._gmsaCredentialSpecName = value;
  }
  public resetGmsaCredentialSpecName() {
    this._gmsaCredentialSpecName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecNameInput() {
    return this._gmsaCredentialSpecName;
  }

  // host_process - computed: false, optional: true, required: false
  private _hostProcess?: boolean | cdktf.IResolvable; 
  public get hostProcess() {
    return this.getBooleanAttribute('host_process');
  }
  public set hostProcess(value: boolean | cdktf.IResolvable) {
    this._hostProcess = value;
  }
  public resetHostProcess() {
    this._hostProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostProcessInput() {
    return this._hostProcess;
  }

  // run_as_user_name - computed: false, optional: true, required: false
  private _runAsUserName?: string; 
  public get runAsUserName() {
    return this.getStringAttribute('run_as_user_name');
  }
  public set runAsUserName(value: string) {
    this._runAsUserName = value;
  }
  public resetRunAsUserName() {
    this._runAsUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserNameInput() {
    return this._runAsUserName;
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContext {
  /**
  * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#allow_privilege_escalation DataK8SIntegrationRock8SComPlugV1Beta1Manifest#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#capabilities DataK8SIntegrationRock8SComPlugV1Beta1Manifest#capabilities}
  */
  readonly capabilities?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextCapabilities;
  /**
  * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#privileged DataK8SIntegrationRock8SComPlugV1Beta1Manifest#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#proc_mount DataK8SIntegrationRock8SComPlugV1Beta1Manifest#proc_mount}
  */
  readonly procMount?: string;
  /**
  * Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#read_only_root_filesystem DataK8SIntegrationRock8SComPlugV1Beta1Manifest#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean | cdktf.IResolvable;
  /**
  * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#run_as_group DataK8SIntegrationRock8SComPlugV1Beta1Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#run_as_non_root DataK8SIntegrationRock8SComPlugV1Beta1Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#run_as_user DataK8SIntegrationRock8SComPlugV1Beta1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * The SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#se_linux_options DataK8SIntegrationRock8SComPlugV1Beta1Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextSeLinuxOptions;
  /**
  * The seccomp options to use by this container. If seccomp options are provided at both the pod & container level, the container options override the pod options. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#seccomp_profile DataK8SIntegrationRock8SComPlugV1Beta1Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextSeccompProfile;
  /**
  * The Windows specific settings applied to all containers. If unspecified, the options from the PodSecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#windows_options DataK8SIntegrationRock8SComPlugV1Beta1Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextWindowsOptions;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    capabilities: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextCapabilitiesToTerraform(struct!.capabilities),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    proc_mount: cdktf.stringToTerraform(struct!.procMount),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    windows_options: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_privilege_escalation: {
      value: cdktf.booleanToHclTerraform(struct!.allowPrivilegeEscalation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    capabilities: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextCapabilitiesToHclTerraform(struct!.capabilities),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextCapabilities",
    },
    privileged: {
      value: cdktf.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proc_mount: {
      value: cdktf.stringToHclTerraform(struct!.procMount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only_root_filesystem: {
      value: cdktf.booleanToHclTerraform(struct!.readOnlyRootFilesystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_non_root: {
      value: cdktf.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    se_linux_options: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextSeccompProfile",
    },
    windows_options: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPrivilegeEscalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPrivilegeEscalation = this._allowPrivilegeEscalation;
    }
    if (this._capabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities?.internalValue;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._procMount !== undefined) {
      hasAnyValues = true;
      internalValueResult.procMount = this._procMount;
    }
    if (this._readOnlyRootFilesystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyRootFilesystem = this._readOnlyRootFilesystem;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._seLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions?.internalValue;
    }
    if (this._seccompProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfile = this._seccompProfile?.internalValue;
    }
    if (this._windowsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsOptions = this._windowsOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowPrivilegeEscalation = undefined;
      this._capabilities.internalValue = undefined;
      this._privileged = undefined;
      this._procMount = undefined;
      this._readOnlyRootFilesystem = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._seccompProfile.internalValue = undefined;
      this._windowsOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowPrivilegeEscalation = value.allowPrivilegeEscalation;
      this._capabilities.internalValue = value.capabilities;
      this._privileged = value.privileged;
      this._procMount = value.procMount;
      this._readOnlyRootFilesystem = value.readOnlyRootFilesystem;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._seccompProfile.internalValue = value.seccompProfile;
      this._windowsOptions.internalValue = value.windowsOptions;
    }
  }

  // allow_privilege_escalation - computed: false, optional: true, required: false
  private _allowPrivilegeEscalation?: boolean | cdktf.IResolvable; 
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }
  public set allowPrivilegeEscalation(value: boolean | cdktf.IResolvable) {
    this._allowPrivilegeEscalation = value;
  }
  public resetAllowPrivilegeEscalation() {
    this._allowPrivilegeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivilegeEscalationInput() {
    return this._allowPrivilegeEscalation;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextCapabilities) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // proc_mount - computed: false, optional: true, required: false
  private _procMount?: string; 
  public get procMount() {
    return this.getStringAttribute('proc_mount');
  }
  public set procMount(value: string) {
    this._procMount = value;
  }
  public resetProcMount() {
    this._procMount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procMountInput() {
    return this._procMount;
  }

  // read_only_root_filesystem - computed: false, optional: true, required: false
  private _readOnlyRootFilesystem?: boolean | cdktf.IResolvable; 
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }
  public set readOnlyRootFilesystem(value: boolean | cdktf.IResolvable) {
    this._readOnlyRootFilesystem = value;
  }
  public resetReadOnlyRootFilesystem() {
    this._readOnlyRootFilesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFilesystemInput() {
    return this._readOnlyRootFilesystem;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextSeLinuxOptions) {
    this._seLinuxOptions.internalValue = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions.internalValue;
  }

  // seccomp_profile - computed: false, optional: true, required: false
  private _seccompProfile = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }

  // windows_options - computed: false, optional: true, required: false
  private _windowsOptions = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextWindowsOptions) {
    this._windowsOptions.internalValue = value;
  }
  public resetWindowsOptions() {
    this._windowsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsOptionsInput() {
    return this._windowsOptions.internalValue;
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#command DataK8SIntegrationRock8SComPlugV1Beta1Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeExecToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeExecToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeExec | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
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
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeGrpc {
  /**
  * Port number of the gRPC service. Number must be in the range 1 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#port DataK8SIntegrationRock8SComPlugV1Beta1Manifest#port}
  */
  readonly port: number;
  /**
  * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#service DataK8SIntegrationRock8SComPlugV1Beta1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeGrpcToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeGrpcToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeGrpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeGrpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._service = value.service;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGetHttpHeaders {
  /**
  * The header field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * The header field value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#value DataK8SIntegrationRock8SComPlugV1Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGetHttpHeadersToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGetHttpHeadersToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
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

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGetHttpHeadersOutputReference {
    return new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set 'Host' in httpHeaders instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#host DataK8SIntegrationRock8SComPlugV1Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Custom headers to set in the request. HTTP allows repeated headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#http_headers DataK8SIntegrationRock8SComPlugV1Beta1Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Path to access on the HTTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#path DataK8SIntegrationRock8SComPlugV1Beta1Manifest#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#port DataK8SIntegrationRock8SComPlugV1Beta1Manifest#port}
  */
  readonly port: string;
  /**
  * Scheme to use for connecting to the host. Defaults to HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#scheme DataK8SIntegrationRock8SComPlugV1Beta1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGetToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGetToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_headers: {
      value: cdktf.listMapperHcl(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGetHttpHeadersList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._httpHeaders.internalValue = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._httpHeaders.internalValue = value.httpHeaders;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
    this._httpHeaders.internalValue = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeTcpSocket {
  /**
  * Optional: Host name to connect to, defaults to the pod IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#host DataK8SIntegrationRock8SComPlugV1Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#port DataK8SIntegrationRock8SComPlugV1Beta1Manifest#port}
  */
  readonly port: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeTcpSocketToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeTcpSocketToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeTcpSocket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeTcpSocket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbe {
  /**
  * Exec specifies the action to take.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#exec DataK8SIntegrationRock8SComPlugV1Beta1Manifest#exec}
  */
  readonly exec?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeExec;
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#failure_threshold DataK8SIntegrationRock8SComPlugV1Beta1Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * GRPC specifies an action involving a GRPC port. This is a beta field and requires enabling GRPCContainerProbe feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#grpc DataK8SIntegrationRock8SComPlugV1Beta1Manifest#grpc}
  */
  readonly grpc?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeGrpc;
  /**
  * HTTPGet specifies the http request to perform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#http_get DataK8SIntegrationRock8SComPlugV1Beta1Manifest#http_get}
  */
  readonly httpGet?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGet;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#initial_delay_seconds DataK8SIntegrationRock8SComPlugV1Beta1Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#period_seconds DataK8SIntegrationRock8SComPlugV1Beta1Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#success_threshold DataK8SIntegrationRock8SComPlugV1Beta1Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * TCPSocket specifies an action involving a TCP port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#tcp_socket DataK8SIntegrationRock8SComPlugV1Beta1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeTcpSocket;
  /**
  * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#termination_grace_period_seconds DataK8SIntegrationRock8SComPlugV1Beta1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#timeout_seconds DataK8SIntegrationRock8SComPlugV1Beta1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    grpc: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeGrpcToTerraform(struct!.grpc),
    http_get: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeTcpSocketToTerraform(struct!.tcpSocket),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeGrpc",
    },
    http_get: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGet",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_socket: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeTcpSocket",
    },
    termination_grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.terminationGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._tcpSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket?.internalValue;
    }
    if (this._terminationGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationGracePeriodSeconds = this._terminationGracePeriodSeconds;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
      this._failureThreshold = undefined;
      this._grpc.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._tcpSocket.internalValue = undefined;
      this._terminationGracePeriodSeconds = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
      this._failureThreshold = value.failureThreshold;
      this._grpc.internalValue = value.grpc;
      this._httpGet.internalValue = value.httpGet;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._tcpSocket.internalValue = value.tcpSocket;
      this._terminationGracePeriodSeconds = value.terminationGracePeriodSeconds;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeGrpc) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeTcpSocket) {
    this._tcpSocket.internalValue = value;
  }
  public resetTcpSocket() {
    this._tcpSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket.internalValue;
  }

  // termination_grace_period_seconds - computed: false, optional: true, required: false
  private _terminationGracePeriodSeconds?: number; 
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }
  public set terminationGracePeriodSeconds(value: number) {
    this._terminationGracePeriodSeconds = value;
  }
  public resetTerminationGracePeriodSeconds() {
    this._terminationGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationGracePeriodSecondsInput() {
    return this._terminationGracePeriodSeconds;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeDevices {
  /**
  * devicePath is the path inside of the container that the device will be mapped to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#device_path DataK8SIntegrationRock8SComPlugV1Beta1Manifest#device_path}
  */
  readonly devicePath: string;
  /**
  * name must match the name of a persistentVolumeClaim in the pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeDevicesToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_path: cdktf.stringToTerraform(struct!.devicePath),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeDevicesToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_path: {
      value: cdktf.stringToHclTerraform(struct!.devicePath),
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

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devicePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.devicePath = this._devicePath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._devicePath = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._devicePath = value.devicePath;
      this._name = value.name;
    }
  }

  // device_path - computed: false, optional: false, required: true
  private _devicePath?: string; 
  public get devicePath() {
    return this.getStringAttribute('device_path');
  }
  public set devicePath(value: string) {
    this._devicePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePathInput() {
    return this._devicePath;
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

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeDevicesList extends cdktf.ComplexList {
  public internalValue? : DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeDevices[] | cdktf.IResolvable

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
  public get(index: number): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeDevicesOutputReference {
    return new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeMounts {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#mount_path DataK8SIntegrationRock8SComPlugV1Beta1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#mount_propagation DataK8SIntegrationRock8SComPlugV1Beta1Manifest#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * This must match the Name of a Volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#read_only DataK8SIntegrationRock8SComPlugV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Path within the volume from which the container's volume should be mounted. Defaults to '' (volume's root).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#sub_path DataK8SIntegrationRock8SComPlugV1Beta1Manifest#sub_path}
  */
  readonly subPath?: string;
  /**
  * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to '' (volume's root). SubPathExpr and SubPath are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#sub_path_expr DataK8SIntegrationRock8SComPlugV1Beta1Manifest#sub_path_expr}
  */
  readonly subPathExpr?: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeMountsToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    sub_path_expr: cdktf.stringToTerraform(struct!.subPathExpr),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeMountsToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeMounts | cdktf.IResolvable): any {
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
    mount_propagation: {
      value: cdktf.stringToHclTerraform(struct!.mountPropagation),
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sub_path: {
      value: cdktf.stringToHclTerraform(struct!.subPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path_expr: {
      value: cdktf.stringToHclTerraform(struct!.subPathExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._mountPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPropagation = this._mountPropagation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    if (this._subPathExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPathExpr = this._subPathExpr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._mountPropagation = undefined;
      this._name = undefined;
      this._readOnly = undefined;
      this._subPath = undefined;
      this._subPathExpr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._mountPropagation = value.mountPropagation;
      this._name = value.name;
      this._readOnly = value.readOnly;
      this._subPath = value.subPath;
      this._subPathExpr = value.subPathExpr;
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

  // mount_propagation - computed: false, optional: true, required: false
  private _mountPropagation?: string; 
  public get mountPropagation() {
    return this.getStringAttribute('mount_propagation');
  }
  public set mountPropagation(value: string) {
    this._mountPropagation = value;
  }
  public resetMountPropagation() {
    this._mountPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPropagationInput() {
    return this._mountPropagation;
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

  // sub_path - computed: false, optional: true, required: false
  private _subPath?: string; 
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
  public set subPath(value: string) {
    this._subPath = value;
  }
  public resetSubPath() {
    this._subPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathInput() {
    return this._subPath;
  }

  // sub_path_expr - computed: false, optional: true, required: false
  private _subPathExpr?: string; 
  public get subPathExpr() {
    return this.getStringAttribute('sub_path_expr');
  }
  public set subPathExpr(value: string) {
    this._subPathExpr = value;
  }
  public resetSubPathExpr() {
    this._subPathExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathExprInput() {
    return this._subPathExpr;
  }
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeMountsOutputReference {
    return new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainers {
  /**
  * Arguments to the entrypoint. The container image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#args DataK8SIntegrationRock8SComPlugV1Beta1Manifest#args}
  */
  readonly args?: string[];
  /**
  * Entrypoint array. Not executed within a shell. The container image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#command DataK8SIntegrationRock8SComPlugV1Beta1Manifest#command}
  */
  readonly command?: string[];
  /**
  * List of environment variables to set in the container. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#env DataK8SIntegrationRock8SComPlugV1Beta1Manifest#env}
  */
  readonly env?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnv[] | cdktf.IResolvable;
  /**
  * List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#env_from DataK8SIntegrationRock8SComPlugV1Beta1Manifest#env_from}
  */
  readonly envFrom?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFrom[] | cdktf.IResolvable;
  /**
  * Container image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#image DataK8SIntegrationRock8SComPlugV1Beta1Manifest#image}
  */
  readonly image?: string;
  /**
  * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#image_pull_policy DataK8SIntegrationRock8SComPlugV1Beta1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Actions that the management system should take in response to container lifecycle events. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#lifecycle DataK8SIntegrationRock8SComPlugV1Beta1Manifest#lifecycle}
  */
  readonly lifecycle?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecycle;
  /**
  * Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#liveness_probe DataK8SIntegrationRock8SComPlugV1Beta1Manifest#liveness_probe}
  */
  readonly livenessProbe?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbe;
  /**
  * Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * List of ports to expose from the container. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default '0.0.0.0' address inside a container will be accessible from the network. Modifying this array with strategic merge patch may corrupt the data. For more information See https://github.com/kubernetes/kubernetes/issues/108255. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#ports DataK8SIntegrationRock8SComPlugV1Beta1Manifest#ports}
  */
  readonly ports?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersPorts[] | cdktf.IResolvable;
  /**
  * Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#readiness_probe DataK8SIntegrationRock8SComPlugV1Beta1Manifest#readiness_probe}
  */
  readonly readinessProbe?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbe;
  /**
  * Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#resources DataK8SIntegrationRock8SComPlugV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResources;
  /**
  * SecurityContext defines the security options the container should be run with. If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext. More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#security_context DataK8SIntegrationRock8SComPlugV1Beta1Manifest#security_context}
  */
  readonly securityContext?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContext;
  /**
  * StartupProbe indicates that the Pod has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a Pod's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#startup_probe DataK8SIntegrationRock8SComPlugV1Beta1Manifest#startup_probe}
  */
  readonly startupProbe?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbe;
  /**
  * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#stdin DataK8SIntegrationRock8SComPlugV1Beta1Manifest#stdin}
  */
  readonly stdin?: boolean | cdktf.IResolvable;
  /**
  * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#stdin_once DataK8SIntegrationRock8SComPlugV1Beta1Manifest#stdin_once}
  */
  readonly stdinOnce?: boolean | cdktf.IResolvable;
  /**
  * Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#termination_message_path DataK8SIntegrationRock8SComPlugV1Beta1Manifest#termination_message_path}
  */
  readonly terminationMessagePath?: string;
  /**
  * Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#termination_message_policy DataK8SIntegrationRock8SComPlugV1Beta1Manifest#termination_message_policy}
  */
  readonly terminationMessagePolicy?: string;
  /**
  * Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#tty DataK8SIntegrationRock8SComPlugV1Beta1Manifest#tty}
  */
  readonly tty?: boolean | cdktf.IResolvable;
  /**
  * volumeDevices is the list of block devices to be used by the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#volume_devices DataK8SIntegrationRock8SComPlugV1Beta1Manifest#volume_devices}
  */
  readonly volumeDevices?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeDevices[] | cdktf.IResolvable;
  /**
  * Pod volumes to mount into the container's filesystem. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#volume_mounts DataK8SIntegrationRock8SComPlugV1Beta1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeMounts[] | cdktf.IResolvable;
  /**
  * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#working_dir DataK8SIntegrationRock8SComPlugV1Beta1Manifest#working_dir}
  */
  readonly workingDir?: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    env: cdktf.listMapper(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvToTerraform, false)(struct!.env),
    env_from: cdktf.listMapper(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromToTerraform, false)(struct!.envFrom),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    lifecycle: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecycleToTerraform(struct!.lifecycle),
    liveness_probe: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeToTerraform(struct!.livenessProbe),
    name: cdktf.stringToTerraform(struct!.name),
    ports: cdktf.listMapper(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersPortsToTerraform, false)(struct!.ports),
    readiness_probe: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeToTerraform(struct!.readinessProbe),
    resources: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResourcesToTerraform(struct!.resources),
    security_context: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextToTerraform(struct!.securityContext),
    startup_probe: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeToTerraform(struct!.startupProbe),
    stdin: cdktf.booleanToTerraform(struct!.stdin),
    stdin_once: cdktf.booleanToTerraform(struct!.stdinOnce),
    termination_message_path: cdktf.stringToTerraform(struct!.terminationMessagePath),
    termination_message_policy: cdktf.stringToTerraform(struct!.terminationMessagePolicy),
    tty: cdktf.booleanToTerraform(struct!.tty),
    volume_devices: cdktf.listMapper(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeDevicesToTerraform, false)(struct!.volumeDevices),
    volume_mounts: cdktf.listMapper(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeMountsToTerraform, false)(struct!.volumeMounts),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainers | cdktf.IResolvable): any {
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
    env: {
      value: cdktf.listMapperHcl(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvList",
    },
    env_from: {
      value: cdktf.listMapperHcl(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromToHclTerraform, false)(struct!.envFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromList",
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
    lifecycle: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecycleToHclTerraform(struct!.lifecycle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecycle",
    },
    liveness_probe: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeToHclTerraform(struct!.livenessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbe",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersPortsList",
    },
    readiness_probe: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeToHclTerraform(struct!.readinessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbe",
    },
    resources: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResources",
    },
    security_context: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContext",
    },
    startup_probe: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeToHclTerraform(struct!.startupProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbe",
    },
    stdin: {
      value: cdktf.booleanToHclTerraform(struct!.stdin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stdin_once: {
      value: cdktf.booleanToHclTerraform(struct!.stdinOnce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    termination_message_path: {
      value: cdktf.stringToHclTerraform(struct!.terminationMessagePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    termination_message_policy: {
      value: cdktf.stringToHclTerraform(struct!.terminationMessagePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tty: {
      value: cdktf.booleanToHclTerraform(struct!.tty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_devices: {
      value: cdktf.listMapperHcl(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeDevicesToHclTerraform, false)(struct!.volumeDevices),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeDevicesList",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeMountsList",
    },
    working_dir: {
      value: cdktf.stringToHclTerraform(struct!.workingDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainers | cdktf.IResolvable | undefined {
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
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._envFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envFrom = this._envFrom?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._lifecycle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycle = this._lifecycle?.internalValue;
    }
    if (this._livenessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbe = this._livenessProbe?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._readinessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbe = this._readinessProbe?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._startupProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupProbe = this._startupProbe?.internalValue;
    }
    if (this._stdin !== undefined) {
      hasAnyValues = true;
      internalValueResult.stdin = this._stdin;
    }
    if (this._stdinOnce !== undefined) {
      hasAnyValues = true;
      internalValueResult.stdinOnce = this._stdinOnce;
    }
    if (this._terminationMessagePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationMessagePath = this._terminationMessagePath;
    }
    if (this._terminationMessagePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationMessagePolicy = this._terminationMessagePolicy;
    }
    if (this._tty !== undefined) {
      hasAnyValues = true;
      internalValueResult.tty = this._tty;
    }
    if (this._volumeDevices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeDevices = this._volumeDevices?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    if (this._workingDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDir = this._workingDir;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._command = undefined;
      this._env.internalValue = undefined;
      this._envFrom.internalValue = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._lifecycle.internalValue = undefined;
      this._livenessProbe.internalValue = undefined;
      this._name = undefined;
      this._ports.internalValue = undefined;
      this._readinessProbe.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._securityContext.internalValue = undefined;
      this._startupProbe.internalValue = undefined;
      this._stdin = undefined;
      this._stdinOnce = undefined;
      this._terminationMessagePath = undefined;
      this._terminationMessagePolicy = undefined;
      this._tty = undefined;
      this._volumeDevices.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
      this._workingDir = undefined;
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
      this._env.internalValue = value.env;
      this._envFrom.internalValue = value.envFrom;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._lifecycle.internalValue = value.lifecycle;
      this._livenessProbe.internalValue = value.livenessProbe;
      this._name = value.name;
      this._ports.internalValue = value.ports;
      this._readinessProbe.internalValue = value.readinessProbe;
      this._resources.internalValue = value.resources;
      this._securityContext.internalValue = value.securityContext;
      this._startupProbe.internalValue = value.startupProbe;
      this._stdin = value.stdin;
      this._stdinOnce = value.stdinOnce;
      this._terminationMessagePath = value.terminationMessagePath;
      this._terminationMessagePolicy = value.terminationMessagePolicy;
      this._tty = value.tty;
      this._volumeDevices.internalValue = value.volumeDevices;
      this._volumeMounts.internalValue = value.volumeMounts;
      this._workingDir = value.workingDir;
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

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // env_from - computed: false, optional: true, required: false
  private _envFrom = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFromList(this, "env_from", false);
  public get envFrom() {
    return this._envFrom;
  }
  public putEnvFrom(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersEnvFrom[] | cdktf.IResolvable) {
    this._envFrom.internalValue = value;
  }
  public resetEnvFrom() {
    this._envFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envFromInput() {
    return this._envFrom.internalValue;
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

  // lifecycle - computed: false, optional: true, required: false
  private _lifecycle = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecycleOutputReference(this, "lifecycle");
  public get lifecycle() {
    return this._lifecycle;
  }
  public putLifecycle(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLifecycle) {
    this._lifecycle.internalValue = value;
  }
  public resetLifecycle() {
    this._lifecycle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleInput() {
    return this._lifecycle.internalValue;
  }

  // liveness_probe - computed: false, optional: true, required: false
  private _livenessProbe = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbeOutputReference(this, "liveness_probe");
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersLivenessProbe) {
    this._livenessProbe.internalValue = value;
  }
  public resetLivenessProbe() {
    this._livenessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeInput() {
    return this._livenessProbe.internalValue;
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

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // readiness_probe - computed: false, optional: true, required: false
  private _readinessProbe = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbeOutputReference(this, "readiness_probe");
  public get readinessProbe() {
    return this._readinessProbe;
  }
  public putReadinessProbe(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersReadinessProbe) {
    this._readinessProbe.internalValue = value;
  }
  public resetReadinessProbe() {
    this._readinessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeInput() {
    return this._readinessProbe.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // startup_probe - computed: false, optional: true, required: false
  private _startupProbe = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbeOutputReference(this, "startup_probe");
  public get startupProbe() {
    return this._startupProbe;
  }
  public putStartupProbe(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersStartupProbe) {
    this._startupProbe.internalValue = value;
  }
  public resetStartupProbe() {
    this._startupProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupProbeInput() {
    return this._startupProbe.internalValue;
  }

  // stdin - computed: false, optional: true, required: false
  private _stdin?: boolean | cdktf.IResolvable; 
  public get stdin() {
    return this.getBooleanAttribute('stdin');
  }
  public set stdin(value: boolean | cdktf.IResolvable) {
    this._stdin = value;
  }
  public resetStdin() {
    this._stdin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stdinInput() {
    return this._stdin;
  }

  // stdin_once - computed: false, optional: true, required: false
  private _stdinOnce?: boolean | cdktf.IResolvable; 
  public get stdinOnce() {
    return this.getBooleanAttribute('stdin_once');
  }
  public set stdinOnce(value: boolean | cdktf.IResolvable) {
    this._stdinOnce = value;
  }
  public resetStdinOnce() {
    this._stdinOnce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stdinOnceInput() {
    return this._stdinOnce;
  }

  // termination_message_path - computed: false, optional: true, required: false
  private _terminationMessagePath?: string; 
  public get terminationMessagePath() {
    return this.getStringAttribute('termination_message_path');
  }
  public set terminationMessagePath(value: string) {
    this._terminationMessagePath = value;
  }
  public resetTerminationMessagePath() {
    this._terminationMessagePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationMessagePathInput() {
    return this._terminationMessagePath;
  }

  // termination_message_policy - computed: false, optional: true, required: false
  private _terminationMessagePolicy?: string; 
  public get terminationMessagePolicy() {
    return this.getStringAttribute('termination_message_policy');
  }
  public set terminationMessagePolicy(value: string) {
    this._terminationMessagePolicy = value;
  }
  public resetTerminationMessagePolicy() {
    this._terminationMessagePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationMessagePolicyInput() {
    return this._terminationMessagePolicy;
  }

  // tty - computed: false, optional: true, required: false
  private _tty?: boolean | cdktf.IResolvable; 
  public get tty() {
    return this.getBooleanAttribute('tty');
  }
  public set tty(value: boolean | cdktf.IResolvable) {
    this._tty = value;
  }
  public resetTty() {
    this._tty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttyInput() {
    return this._tty;
  }

  // volume_devices - computed: false, optional: true, required: false
  private _volumeDevices = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeDevicesList(this, "volume_devices", false);
  public get volumeDevices() {
    return this._volumeDevices;
  }
  public putVolumeDevices(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeDevices[] | cdktf.IResolvable) {
    this._volumeDevices.internalValue = value;
  }
  public resetVolumeDevices() {
    this._volumeDevices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeDevicesInput() {
    return this._volumeDevices.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersVolumeMounts[] | cdktf.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }

  // working_dir - computed: false, optional: true, required: false
  private _workingDir?: string; 
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
  public set workingDir(value: string) {
    this._workingDir = value;
  }
  public resetWorkingDir() {
    this._workingDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirInput() {
    return this._workingDir;
  }
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersOutputReference {
    return new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatus {
  /**
  * List of containers belonging to the apparatus. Containers cannot currently be added or removed. There must be at least one container in an apparatus. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#containers DataK8SIntegrationRock8SComPlugV1Beta1Manifest#containers}
  */
  readonly containers: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainers[] | cdktf.IResolvable;
  /**
  * endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#endpoint DataK8SIntegrationRock8SComPlugV1Beta1Manifest#endpoint}
  */
  readonly endpoint?: string;
  /**
  * terminate apparatus after idle for timeout in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#idle_timeout DataK8SIntegrationRock8SComPlugV1Beta1Manifest#idle_timeout}
  */
  readonly idleTimeout?: number;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: cdktf.listMapper(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersToTerraform, false)(struct!.containers),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    idle_timeout: cdktf.numberToTerraform(struct!.idleTimeout),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: cdktf.listMapperHcl(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersList",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers.internalValue = undefined;
      this._endpoint = undefined;
      this._idleTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers.internalValue = value.containers;
      this._endpoint = value.endpoint;
      this._idleTimeout = value.idleTimeout;
    }
  }

  // containers - computed: false, optional: false, required: true
  private _containers = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusContainers[] | cdktf.IResolvable) {
    this._containers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#do DataK8SIntegrationRock8SComPlugV1Beta1Manifest#do}
  */
  readonly do?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#retain_when_decoupled DataK8SIntegrationRock8SComPlugV1Beta1Manifest#retain_when_decoupled}
  */
  readonly retainWhenDecoupled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#string_template DataK8SIntegrationRock8SComPlugV1Beta1Manifest#string_template}
  */
  readonly stringTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#string_templates DataK8SIntegrationRock8SComPlugV1Beta1Manifest#string_templates}
  */
  readonly stringTemplates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#template DataK8SIntegrationRock8SComPlugV1Beta1Manifest#template}
  */
  readonly template?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#templates DataK8SIntegrationRock8SComPlugV1Beta1Manifest#templates}
  */
  readonly templates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#when DataK8SIntegrationRock8SComPlugV1Beta1Manifest#when}
  */
  readonly when?: string[];
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResourcesToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    do: cdktf.stringToTerraform(struct!.do),
    retain_when_decoupled: cdktf.booleanToTerraform(struct!.retainWhenDecoupled),
    string_template: cdktf.stringToTerraform(struct!.stringTemplate),
    string_templates: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringTemplates),
    template: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.template),
    templates: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.templates),
    when: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.when),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResourcesToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    do: {
      value: cdktf.stringToHclTerraform(struct!.do),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retain_when_decoupled: {
      value: cdktf.booleanToHclTerraform(struct!.retainWhenDecoupled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    string_template: {
      value: cdktf.stringToHclTerraform(struct!.stringTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_templates: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringTemplates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    template: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.template),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    templates: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.templates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    when: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.when),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._do !== undefined) {
      hasAnyValues = true;
      internalValueResult.do = this._do;
    }
    if (this._retainWhenDecoupled !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainWhenDecoupled = this._retainWhenDecoupled;
    }
    if (this._stringTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringTemplate = this._stringTemplate;
    }
    if (this._stringTemplates !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringTemplates = this._stringTemplates;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._templates !== undefined) {
      hasAnyValues = true;
      internalValueResult.templates = this._templates;
    }
    if (this._when !== undefined) {
      hasAnyValues = true;
      internalValueResult.when = this._when;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._do = undefined;
      this._retainWhenDecoupled = undefined;
      this._stringTemplate = undefined;
      this._stringTemplates = undefined;
      this._template = undefined;
      this._templates = undefined;
      this._when = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._do = value.do;
      this._retainWhenDecoupled = value.retainWhenDecoupled;
      this._stringTemplate = value.stringTemplate;
      this._stringTemplates = value.stringTemplates;
      this._template = value.template;
      this._templates = value.templates;
      this._when = value.when;
    }
  }

  // do - computed: false, optional: true, required: false
  private _do?: string; 
  public get do() {
    return this.getStringAttribute('do');
  }
  public set do(value: string) {
    this._do = value;
  }
  public resetDo() {
    this._do = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doInput() {
    return this._do;
  }

  // retain_when_decoupled - computed: false, optional: true, required: false
  private _retainWhenDecoupled?: boolean | cdktf.IResolvable; 
  public get retainWhenDecoupled() {
    return this.getBooleanAttribute('retain_when_decoupled');
  }
  public set retainWhenDecoupled(value: boolean | cdktf.IResolvable) {
    this._retainWhenDecoupled = value;
  }
  public resetRetainWhenDecoupled() {
    this._retainWhenDecoupled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainWhenDecoupledInput() {
    return this._retainWhenDecoupled;
  }

  // string_template - computed: false, optional: true, required: false
  private _stringTemplate?: string; 
  public get stringTemplate() {
    return this.getStringAttribute('string_template');
  }
  public set stringTemplate(value: string) {
    this._stringTemplate = value;
  }
  public resetStringTemplate() {
    this._stringTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringTemplateInput() {
    return this._stringTemplate;
  }

  // string_templates - computed: false, optional: true, required: false
  private _stringTemplates?: string[]; 
  public get stringTemplates() {
    return this.getListAttribute('string_templates');
  }
  public set stringTemplates(value: string[]) {
    this._stringTemplates = value;
  }
  public resetStringTemplates() {
    this._stringTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringTemplatesInput() {
    return this._stringTemplates;
  }

  // template - computed: false, optional: true, required: false
  private _template?: { [key: string]: string }; 
  public get template() {
    return this.getStringMapAttribute('template');
  }
  public set template(value: { [key: string]: string }) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // templates - computed: false, optional: true, required: false
  private _templates?: string[]; 
  public get templates() {
    return this.getListAttribute('templates');
  }
  public set templates(value: string[]) {
    this._templates = value;
  }
  public resetTemplates() {
    this._templates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatesInput() {
    return this._templates;
  }

  // when - computed: false, optional: true, required: false
  private _when?: string[]; 
  public get when() {
    return this.getListAttribute('when');
  }
  public set when(value: string[]) {
    this._when = value;
  }
  public resetWhen() {
    this._when = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenInput() {
    return this._when;
  }
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResourcesOutputReference {
    return new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#do DataK8SIntegrationRock8SComPlugV1Beta1Manifest#do}
  */
  readonly do?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#string_template DataK8SIntegrationRock8SComPlugV1Beta1Manifest#string_template}
  */
  readonly stringTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#string_templates DataK8SIntegrationRock8SComPlugV1Beta1Manifest#string_templates}
  */
  readonly stringTemplates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#template DataK8SIntegrationRock8SComPlugV1Beta1Manifest#template}
  */
  readonly template?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#templates DataK8SIntegrationRock8SComPlugV1Beta1Manifest#templates}
  */
  readonly templates?: string[];
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultResourcesToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    do: cdktf.stringToTerraform(struct!.do),
    string_template: cdktf.stringToTerraform(struct!.stringTemplate),
    string_templates: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringTemplates),
    template: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.template),
    templates: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.templates),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultResourcesToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    do: {
      value: cdktf.stringToHclTerraform(struct!.do),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_template: {
      value: cdktf.stringToHclTerraform(struct!.stringTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_templates: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringTemplates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    template: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.template),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    templates: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.templates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._do !== undefined) {
      hasAnyValues = true;
      internalValueResult.do = this._do;
    }
    if (this._stringTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringTemplate = this._stringTemplate;
    }
    if (this._stringTemplates !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringTemplates = this._stringTemplates;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._templates !== undefined) {
      hasAnyValues = true;
      internalValueResult.templates = this._templates;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._do = undefined;
      this._stringTemplate = undefined;
      this._stringTemplates = undefined;
      this._template = undefined;
      this._templates = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._do = value.do;
      this._stringTemplate = value.stringTemplate;
      this._stringTemplates = value.stringTemplates;
      this._template = value.template;
      this._templates = value.templates;
    }
  }

  // do - computed: false, optional: true, required: false
  private _do?: string; 
  public get do() {
    return this.getStringAttribute('do');
  }
  public set do(value: string) {
    this._do = value;
  }
  public resetDo() {
    this._do = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doInput() {
    return this._do;
  }

  // string_template - computed: false, optional: true, required: false
  private _stringTemplate?: string; 
  public get stringTemplate() {
    return this.getStringAttribute('string_template');
  }
  public set stringTemplate(value: string) {
    this._stringTemplate = value;
  }
  public resetStringTemplate() {
    this._stringTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringTemplateInput() {
    return this._stringTemplate;
  }

  // string_templates - computed: false, optional: true, required: false
  private _stringTemplates?: string[]; 
  public get stringTemplates() {
    return this.getListAttribute('string_templates');
  }
  public set stringTemplates(value: string[]) {
    this._stringTemplates = value;
  }
  public resetStringTemplates() {
    this._stringTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringTemplatesInput() {
    return this._stringTemplates;
  }

  // template - computed: false, optional: true, required: false
  private _template?: { [key: string]: string }; 
  public get template() {
    return this.getStringMapAttribute('template');
  }
  public set template(value: { [key: string]: string }) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // templates - computed: false, optional: true, required: false
  private _templates?: string[]; 
  public get templates() {
    return this.getListAttribute('templates');
  }
  public set templates(value: string[]) {
    this._templates = value;
  }
  public resetTemplates() {
    this._templates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatesInput() {
    return this._templates;
  }
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultResourcesOutputReference {
    return new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsFieldref {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#field_path DataK8SIntegrationRock8SComPlugV1Beta1Manifest#field_path}
  */
  readonly fieldPath?: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsFieldrefToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsFieldref | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsFieldrefToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsFieldref | cdktf.IResolvable): any {
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

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsFieldrefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsFieldref | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsFieldref | cdktf.IResolvable | undefined) {
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

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsObjref {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#api_version DataK8SIntegrationRock8SComPlugV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#group DataK8SIntegrationRock8SComPlugV1Beta1Manifest#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#kind DataK8SIntegrationRock8SComPlugV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#namespace DataK8SIntegrationRock8SComPlugV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#template_name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#template_name}
  */
  readonly templateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#template_namespace DataK8SIntegrationRock8SComPlugV1Beta1Manifest#template_namespace}
  */
  readonly templateNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#version DataK8SIntegrationRock8SComPlugV1Beta1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsObjrefToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsObjref | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    template_name: cdktf.stringToTerraform(struct!.templateName),
    template_namespace: cdktf.stringToTerraform(struct!.templateNamespace),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsObjrefToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsObjref | cdktf.IResolvable): any {
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
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_namespace: {
      value: cdktf.stringToHclTerraform(struct!.templateNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsObjrefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsObjref | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    if (this._templateNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateNamespace = this._templateNamespace;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsObjref | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._templateName = undefined;
      this._templateNamespace = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._templateName = value.templateName;
      this._templateNamespace = value.templateNamespace;
      this._version = value.version;
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

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // template_name - computed: false, optional: true, required: false
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  public resetTemplateName() {
    this._templateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // template_namespace - computed: false, optional: true, required: false
  private _templateNamespace?: string; 
  public get templateNamespace() {
    return this.getStringAttribute('template_namespace');
  }
  public set templateNamespace(value: string) {
    this._templateNamespace = value;
  }
  public resetTemplateNamespace() {
    this._templateNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNamespaceInput() {
    return this._templateNamespace;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVars {
  /**
  * FieldRef refers to the field of the object referred to by ObjRef whose value will be extracted for use in replacing $(FOO). If unspecified, this defaults to fieldPath: $defaultFieldPath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#fieldref DataK8SIntegrationRock8SComPlugV1Beta1Manifest#fieldref}
  */
  readonly fieldref?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsFieldref;
  /**
  * Value of identifier name e.g. FOO used in container args, annotations Appears in pod template as $(FOO)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * ObjRef must refer to a Kubernetes resource under the purview of this kustomization. ObjRef should use the raw name of the object (the name specified in its YAML, before addition of a namePrefix and a nameSuffix).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#objref DataK8SIntegrationRock8SComPlugV1Beta1Manifest#objref}
  */
  readonly objref: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsObjref;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fieldref: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsFieldrefToTerraform(struct!.fieldref),
    name: cdktf.stringToTerraform(struct!.name),
    objref: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsObjrefToTerraform(struct!.objref),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fieldref: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsFieldrefToHclTerraform(struct!.fieldref),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsFieldref",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    objref: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsObjrefToHclTerraform(struct!.objref),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsObjref",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldref = this._fieldref?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objref = this._objref?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldref.internalValue = undefined;
      this._name = undefined;
      this._objref.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldref.internalValue = value.fieldref;
      this._name = value.name;
      this._objref.internalValue = value.objref;
    }
  }

  // fieldref - computed: false, optional: true, required: false
  private _fieldref = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsFieldrefOutputReference(this, "fieldref");
  public get fieldref() {
    return this._fieldref;
  }
  public putFieldref(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsFieldref) {
    this._fieldref.internalValue = value;
  }
  public resetFieldref() {
    this._fieldref.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldrefInput() {
    return this._fieldref.internalValue;
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

  // objref - computed: false, optional: false, required: true
  private _objref = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsObjrefOutputReference(this, "objref");
  public get objref() {
    return this._objref;
  }
  public putObjref(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsObjref) {
    this._objref.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objrefInput() {
    return this._objref.internalValue;
  }
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsList extends cdktf.ComplexList {
  public internalValue? : DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVars[] | cdktf.IResolvable

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
  public get(index: number): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsOutputReference {
    return new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecSocket {
  /**
  * name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#namespace DataK8SIntegrationRock8SComPlugV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecSocketToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecSocketToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecSocket | cdktf.IResolvable): any {
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

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecSocket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecSocket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsFieldref {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#field_path DataK8SIntegrationRock8SComPlugV1Beta1Manifest#field_path}
  */
  readonly fieldPath?: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsFieldrefToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsFieldref | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsFieldrefToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsFieldref | cdktf.IResolvable): any {
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

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsFieldrefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsFieldref | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsFieldref | cdktf.IResolvable | undefined) {
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

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsObjref {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#api_version DataK8SIntegrationRock8SComPlugV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#group DataK8SIntegrationRock8SComPlugV1Beta1Manifest#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#kind DataK8SIntegrationRock8SComPlugV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#namespace DataK8SIntegrationRock8SComPlugV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#template_name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#template_name}
  */
  readonly templateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#template_namespace DataK8SIntegrationRock8SComPlugV1Beta1Manifest#template_namespace}
  */
  readonly templateNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#version DataK8SIntegrationRock8SComPlugV1Beta1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsObjrefToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsObjref | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    template_name: cdktf.stringToTerraform(struct!.templateName),
    template_namespace: cdktf.stringToTerraform(struct!.templateNamespace),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsObjrefToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsObjref | cdktf.IResolvable): any {
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
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_namespace: {
      value: cdktf.stringToHclTerraform(struct!.templateNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsObjrefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsObjref | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    if (this._templateNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateNamespace = this._templateNamespace;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsObjref | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._templateName = undefined;
      this._templateNamespace = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._templateName = value.templateName;
      this._templateNamespace = value.templateNamespace;
      this._version = value.version;
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

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // template_name - computed: false, optional: true, required: false
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  public resetTemplateName() {
    this._templateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // template_namespace - computed: false, optional: true, required: false
  private _templateNamespace?: string; 
  public get templateNamespace() {
    return this.getStringAttribute('template_namespace');
  }
  public set templateNamespace(value: string) {
    this._templateNamespace = value;
  }
  public resetTemplateNamespace() {
    this._templateNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNamespaceInput() {
    return this._templateNamespace;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVars {
  /**
  * FieldRef refers to the field of the object referred to by ObjRef whose value will be extracted for use in replacing $(FOO). If unspecified, this defaults to fieldPath: $defaultFieldPath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#fieldref DataK8SIntegrationRock8SComPlugV1Beta1Manifest#fieldref}
  */
  readonly fieldref?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsFieldref;
  /**
  * Value of identifier name e.g. FOO used in container args, annotations Appears in pod template as $(FOO)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * ObjRef must refer to a Kubernetes resource under the purview of this kustomization. ObjRef should use the raw name of the object (the name specified in its YAML, before addition of a namePrefix and a nameSuffix).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#objref DataK8SIntegrationRock8SComPlugV1Beta1Manifest#objref}
  */
  readonly objref: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsObjref;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fieldref: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsFieldrefToTerraform(struct!.fieldref),
    name: cdktf.stringToTerraform(struct!.name),
    objref: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsObjrefToTerraform(struct!.objref),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fieldref: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsFieldrefToHclTerraform(struct!.fieldref),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsFieldref",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    objref: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsObjrefToHclTerraform(struct!.objref),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsObjref",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldref = this._fieldref?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objref = this._objref?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldref.internalValue = undefined;
      this._name = undefined;
      this._objref.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldref.internalValue = value.fieldref;
      this._name = value.name;
      this._objref.internalValue = value.objref;
    }
  }

  // fieldref - computed: false, optional: true, required: false
  private _fieldref = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsFieldrefOutputReference(this, "fieldref");
  public get fieldref() {
    return this._fieldref;
  }
  public putFieldref(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsFieldref) {
    this._fieldref.internalValue = value;
  }
  public resetFieldref() {
    this._fieldref.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldrefInput() {
    return this._fieldref.internalValue;
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

  // objref - computed: false, optional: false, required: true
  private _objref = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsObjrefOutputReference(this, "objref");
  public get objref() {
    return this._objref;
  }
  public putObjref(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsObjref) {
    this._objref.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objrefInput() {
    return this._objref.internalValue;
  }
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsList extends cdktf.ComplexList {
  public internalValue? : DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVars[] | cdktf.IResolvable

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
  public get(index: number): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsOutputReference {
    return new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpec {
  /**
  * apparatus
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#apparatus DataK8SIntegrationRock8SComPlugV1Beta1Manifest#apparatus}
  */
  readonly apparatus?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatus;
  /**
  * config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#config DataK8SIntegrationRock8SComPlugV1Beta1Manifest#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * config configmap name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#config_config_map_name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#config_config_map_name}
  */
  readonly configConfigMapName?: string;
  /**
  * config secret name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#config_secret_name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#config_secret_name}
  */
  readonly configSecretName?: string;
  /**
  * config template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#config_template DataK8SIntegrationRock8SComPlugV1Beta1Manifest#config_template}
  */
  readonly configTemplate?: { [key: string]: string };
  /**
  * data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#data DataK8SIntegrationRock8SComPlugV1Beta1Manifest#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * data configmap name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#data_config_map_name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#data_config_map_name}
  */
  readonly dataConfigMapName?: string;
  /**
  * data secret name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#data_secret_name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#data_secret_name}
  */
  readonly dataSecretName?: string;
  /**
  * change epoch to force an update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#epoch DataK8SIntegrationRock8SComPlugV1Beta1Manifest#epoch}
  */
  readonly epoch?: string;
  /**
  * resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#resources DataK8SIntegrationRock8SComPlugV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResources[] | cdktf.IResolvable;
  /**
  * result
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#result DataK8SIntegrationRock8SComPlugV1Beta1Manifest#result}
  */
  readonly result?: { [key: string]: string };
  /**
  * result configmap name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#result_config_map_name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#result_config_map_name}
  */
  readonly resultConfigMapName?: string;
  /**
  * result resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#result_resources DataK8SIntegrationRock8SComPlugV1Beta1Manifest#result_resources}
  */
  readonly resultResources?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultResources[] | cdktf.IResolvable;
  /**
  * result secret name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#result_secret_name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#result_secret_name}
  */
  readonly resultSecretName?: string;
  /**
  * result template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#result_template DataK8SIntegrationRock8SComPlugV1Beta1Manifest#result_template}
  */
  readonly resultTemplate?: { [key: string]: string };
  /**
  * result vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#result_vars DataK8SIntegrationRock8SComPlugV1Beta1Manifest#result_vars}
  */
  readonly resultVars?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVars[] | cdktf.IResolvable;
  /**
  * ServiceAccountName is the name of the ServiceAccount to use to run integrations. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#service_account_name DataK8SIntegrationRock8SComPlugV1Beta1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * socket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#socket DataK8SIntegrationRock8SComPlugV1Beta1Manifest#socket}
  */
  readonly socket?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecSocket;
  /**
  * vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#vars DataK8SIntegrationRock8SComPlugV1Beta1Manifest#vars}
  */
  readonly vars?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVars[] | cdktf.IResolvable;
}

export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecToTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apparatus: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusToTerraform(struct!.apparatus),
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    config_config_map_name: cdktf.stringToTerraform(struct!.configConfigMapName),
    config_secret_name: cdktf.stringToTerraform(struct!.configSecretName),
    config_template: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configTemplate),
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    data_config_map_name: cdktf.stringToTerraform(struct!.dataConfigMapName),
    data_secret_name: cdktf.stringToTerraform(struct!.dataSecretName),
    epoch: cdktf.stringToTerraform(struct!.epoch),
    resources: cdktf.listMapper(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResourcesToTerraform, false)(struct!.resources),
    result: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.result),
    result_config_map_name: cdktf.stringToTerraform(struct!.resultConfigMapName),
    result_resources: cdktf.listMapper(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultResourcesToTerraform, false)(struct!.resultResources),
    result_secret_name: cdktf.stringToTerraform(struct!.resultSecretName),
    result_template: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resultTemplate),
    result_vars: cdktf.listMapper(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsToTerraform, false)(struct!.resultVars),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    socket: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecSocketToTerraform(struct!.socket),
    vars: cdktf.listMapper(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsToTerraform, false)(struct!.vars),
  }
}


export function dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apparatus: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusToHclTerraform(struct!.apparatus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatus",
    },
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    config_config_map_name: {
      value: cdktf.stringToHclTerraform(struct!.configConfigMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.configSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_template: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configTemplate),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    data: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.data),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    data_config_map_name: {
      value: cdktf.stringToHclTerraform(struct!.dataConfigMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.dataSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    epoch: {
      value: cdktf.stringToHclTerraform(struct!.epoch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktf.listMapperHcl(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResourcesToHclTerraform, false)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResourcesList",
    },
    result: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.result),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    result_config_map_name: {
      value: cdktf.stringToHclTerraform(struct!.resultConfigMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_resources: {
      value: cdktf.listMapperHcl(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultResourcesToHclTerraform, false)(struct!.resultResources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultResourcesList",
    },
    result_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.resultSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_template: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resultTemplate),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    result_vars: {
      value: cdktf.listMapperHcl(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsToHclTerraform, false)(struct!.resultVars),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsList",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    socket: {
      value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecSocketToHclTerraform(struct!.socket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecSocket",
    },
    vars: {
      value: cdktf.listMapperHcl(dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsToHclTerraform, false)(struct!.vars),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apparatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apparatus = this._apparatus?.internalValue;
    }
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._configConfigMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.configConfigMapName = this._configConfigMapName;
    }
    if (this._configSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.configSecretName = this._configSecretName;
    }
    if (this._configTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.configTemplate = this._configTemplate;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._dataConfigMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataConfigMapName = this._dataConfigMapName;
    }
    if (this._dataSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSecretName = this._dataSecretName;
    }
    if (this._epoch !== undefined) {
      hasAnyValues = true;
      internalValueResult.epoch = this._epoch;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._result !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result;
    }
    if (this._resultConfigMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultConfigMapName = this._resultConfigMapName;
    }
    if (this._resultResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultResources = this._resultResources?.internalValue;
    }
    if (this._resultSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultSecretName = this._resultSecretName;
    }
    if (this._resultTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultTemplate = this._resultTemplate;
    }
    if (this._resultVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultVars = this._resultVars?.internalValue;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._socket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.socket = this._socket?.internalValue;
    }
    if (this._vars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vars = this._vars?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apparatus.internalValue = undefined;
      this._config = undefined;
      this._configConfigMapName = undefined;
      this._configSecretName = undefined;
      this._configTemplate = undefined;
      this._data = undefined;
      this._dataConfigMapName = undefined;
      this._dataSecretName = undefined;
      this._epoch = undefined;
      this._resources.internalValue = undefined;
      this._result = undefined;
      this._resultConfigMapName = undefined;
      this._resultResources.internalValue = undefined;
      this._resultSecretName = undefined;
      this._resultTemplate = undefined;
      this._resultVars.internalValue = undefined;
      this._serviceAccountName = undefined;
      this._socket.internalValue = undefined;
      this._vars.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apparatus.internalValue = value.apparatus;
      this._config = value.config;
      this._configConfigMapName = value.configConfigMapName;
      this._configSecretName = value.configSecretName;
      this._configTemplate = value.configTemplate;
      this._data = value.data;
      this._dataConfigMapName = value.dataConfigMapName;
      this._dataSecretName = value.dataSecretName;
      this._epoch = value.epoch;
      this._resources.internalValue = value.resources;
      this._result = value.result;
      this._resultConfigMapName = value.resultConfigMapName;
      this._resultResources.internalValue = value.resultResources;
      this._resultSecretName = value.resultSecretName;
      this._resultTemplate = value.resultTemplate;
      this._resultVars.internalValue = value.resultVars;
      this._serviceAccountName = value.serviceAccountName;
      this._socket.internalValue = value.socket;
      this._vars.internalValue = value.vars;
    }
  }

  // apparatus - computed: false, optional: true, required: false
  private _apparatus = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatusOutputReference(this, "apparatus");
  public get apparatus() {
    return this._apparatus;
  }
  public putApparatus(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecApparatus) {
    this._apparatus.internalValue = value;
  }
  public resetApparatus() {
    this._apparatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apparatusInput() {
    return this._apparatus.internalValue;
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // config_config_map_name - computed: false, optional: true, required: false
  private _configConfigMapName?: string; 
  public get configConfigMapName() {
    return this.getStringAttribute('config_config_map_name');
  }
  public set configConfigMapName(value: string) {
    this._configConfigMapName = value;
  }
  public resetConfigConfigMapName() {
    this._configConfigMapName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configConfigMapNameInput() {
    return this._configConfigMapName;
  }

  // config_secret_name - computed: false, optional: true, required: false
  private _configSecretName?: string; 
  public get configSecretName() {
    return this.getStringAttribute('config_secret_name');
  }
  public set configSecretName(value: string) {
    this._configSecretName = value;
  }
  public resetConfigSecretName() {
    this._configSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSecretNameInput() {
    return this._configSecretName;
  }

  // config_template - computed: false, optional: true, required: false
  private _configTemplate?: { [key: string]: string }; 
  public get configTemplate() {
    return this.getStringMapAttribute('config_template');
  }
  public set configTemplate(value: { [key: string]: string }) {
    this._configTemplate = value;
  }
  public resetConfigTemplate() {
    this._configTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configTemplateInput() {
    return this._configTemplate;
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // data_config_map_name - computed: false, optional: true, required: false
  private _dataConfigMapName?: string; 
  public get dataConfigMapName() {
    return this.getStringAttribute('data_config_map_name');
  }
  public set dataConfigMapName(value: string) {
    this._dataConfigMapName = value;
  }
  public resetDataConfigMapName() {
    this._dataConfigMapName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataConfigMapNameInput() {
    return this._dataConfigMapName;
  }

  // data_secret_name - computed: false, optional: true, required: false
  private _dataSecretName?: string; 
  public get dataSecretName() {
    return this.getStringAttribute('data_secret_name');
  }
  public set dataSecretName(value: string) {
    this._dataSecretName = value;
  }
  public resetDataSecretName() {
    this._dataSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSecretNameInput() {
    return this._dataSecretName;
  }

  // epoch - computed: false, optional: true, required: false
  private _epoch?: string; 
  public get epoch() {
    return this.getStringAttribute('epoch');
  }
  public set epoch(value: string) {
    this._epoch = value;
  }
  public resetEpoch() {
    this._epoch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epochInput() {
    return this._epoch;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // result - computed: false, optional: true, required: false
  private _result?: { [key: string]: string }; 
  public get result() {
    return this.getStringMapAttribute('result');
  }
  public set result(value: { [key: string]: string }) {
    this._result = value;
  }
  public resetResult() {
    this._result = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result;
  }

  // result_config_map_name - computed: false, optional: true, required: false
  private _resultConfigMapName?: string; 
  public get resultConfigMapName() {
    return this.getStringAttribute('result_config_map_name');
  }
  public set resultConfigMapName(value: string) {
    this._resultConfigMapName = value;
  }
  public resetResultConfigMapName() {
    this._resultConfigMapName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultConfigMapNameInput() {
    return this._resultConfigMapName;
  }

  // result_resources - computed: false, optional: true, required: false
  private _resultResources = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultResourcesList(this, "result_resources", false);
  public get resultResources() {
    return this._resultResources;
  }
  public putResultResources(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultResources[] | cdktf.IResolvable) {
    this._resultResources.internalValue = value;
  }
  public resetResultResources() {
    this._resultResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultResourcesInput() {
    return this._resultResources.internalValue;
  }

  // result_secret_name - computed: false, optional: true, required: false
  private _resultSecretName?: string; 
  public get resultSecretName() {
    return this.getStringAttribute('result_secret_name');
  }
  public set resultSecretName(value: string) {
    this._resultSecretName = value;
  }
  public resetResultSecretName() {
    this._resultSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultSecretNameInput() {
    return this._resultSecretName;
  }

  // result_template - computed: false, optional: true, required: false
  private _resultTemplate?: { [key: string]: string }; 
  public get resultTemplate() {
    return this.getStringMapAttribute('result_template');
  }
  public set resultTemplate(value: { [key: string]: string }) {
    this._resultTemplate = value;
  }
  public resetResultTemplate() {
    this._resultTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultTemplateInput() {
    return this._resultTemplate;
  }

  // result_vars - computed: false, optional: true, required: false
  private _resultVars = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVarsList(this, "result_vars", false);
  public get resultVars() {
    return this._resultVars;
  }
  public putResultVars(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecResultVars[] | cdktf.IResolvable) {
    this._resultVars.internalValue = value;
  }
  public resetResultVars() {
    this._resultVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultVarsInput() {
    return this._resultVars.internalValue;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }

  // socket - computed: false, optional: true, required: false
  private _socket = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecSocketOutputReference(this, "socket");
  public get socket() {
    return this._socket;
  }
  public putSocket(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecSocket) {
    this._socket.internalValue = value;
  }
  public resetSocket() {
    this._socket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketInput() {
    return this._socket.internalValue;
  }

  // vars - computed: false, optional: true, required: false
  private _vars = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVarsList(this, "vars", false);
  public get vars() {
    return this._vars;
  }
  public putVars(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecVars[] | cdktf.IResolvable) {
    this._vars.internalValue = value;
  }
  public resetVars() {
    this._vars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varsInput() {
    return this._vars.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest k8s_integration_rock8s_com_plug_v1beta1_manifest}
*/
export class DataK8SIntegrationRock8SComPlugV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_integration_rock8s_com_plug_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SIntegrationRock8SComPlugV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SIntegrationRock8SComPlugV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SIntegrationRock8SComPlugV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SIntegrationRock8SComPlugV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_integration_rock8s_com_plug_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/integration_rock8s_com_plug_v1beta1_manifest k8s_integration_rock8s_com_plug_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SIntegrationRock8SComPlugV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SIntegrationRock8SComPlugV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_integration_rock8s_com_plug_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.1',
        providerVersionConstraint: '2025.12.1'
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
  private _metadata = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpec) {
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
      metadata: dataK8SIntegrationRock8SComPlugV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SIntegrationRock8SComPlugV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SIntegrationRock8SComPlugV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
